# Error Overlay & Failure Fallback — Design Spec

## Problem

Hot reload and rebuild failures are invisible to the developer unless they watch the terminal. The 09-dev-tools design requires an overlay-based failure mode where the running UI visibly surfaces errors while preserving the previous working state. No error overlay implementation exists in either the native host or the TypeScript dev-tools layer.

## Approach

Add a full end-to-end error overlay path spanning:
- C++ (Qt overlay injection and control)
- Rust (FFI wrappers and engine methods)
- napi-rs (JavaScript-callable exports)
- `@qmlts/host` npm package (TypeScript types and wrapper methods)
- `src/dev-tools/` (ErrorOverlay abstraction and DevServer integration)

The overlay is a QML `Rectangle` item injected into the root window's `contentItem` by the native host. TypeScript controls visibility via `host.showErrorOverlay()` / `host.hideErrorOverlay()`. The overlay is re-injected after each successful QML load or reload.

## Ownership Model

### Who owns what

| Concern | Owner | Notes |
|---------|-------|-------|
| Qt engine instance (`QmltsHost`) | Consumer (CLI / programmatic API) | Created before DevServer.start() |
| Initial `loadFile()` / `loadString()` | Consumer | Called after DevServer.start() returns with build success |
| Build pipeline & file watching | DevServer (`src/dev-tools/dev-server.ts`) | Owns compile ↔ watch ↔ rebuild cycle |
| Hot reload pipeline (capture → reload → rehydrate → restore) | HotReloadClient (injected into DevServer via options) | Wraps host-side DevServer in `@qmlts/host` |
| Error overlay abstraction | ErrorOverlay (`src/dev-tools/error-overlay.ts`) | Formats & delegates to host overlay API |
| Overlay QML visual tree | C++ (`qt_context.cpp`) | Engine-scoped, re-injected after each load |

### How DevServer knows about runtime success/failure

DevServer does **not** perform the initial `loadFile()` / `loadString()` — the consumer does.
DevServer learns about runtime success/failure through two channels:

1. **Hot reload result** — The `HotReloadClient.reload()` call returns `{ success, error }`. If `success === true`, the QML was successfully loaded at runtime. DevServer emits `hot-reload` (success) or `hot-reload-error` (failure).

2. **Initial load** — DevServer has no direct knowledge of initial runtime load. The overlay starts hidden, so no hide is needed on initial success. If the consumer's `loadFile()` throws, the consumer calls `overlay.show()` directly.

### Flow B recovery (initial build failure → eventual success)

When the initial build fails:
1. DevServer emits `build-error` → overlay auto-shows via event wiring.
2. `overlay.show()` calls `host.showErrorOverlay()` → C++ creates error shell window (since no root objects exist).
3. The error shell acts as a valid QML root. File watcher continues running.
4. User fixes code → file change → rebuild succeeds → DevServer triggers hot reload via HotReloadClient.
5. `HotReloadClient.reload()` calls `host.reloadQml(newQml)` → C++ replaces error shell root with real QML → success.
6. DevServer emits `hot-reload` (success) → overlay auto-hides.

This works because C++ `show_error_overlay()` ensures there is always a root window (via the error shell), so subsequent `reloadQml()` calls have a valid old root to replace.

## Architecture

### C++ Layer (`native/crates/qmlts-host/cpp/qt_context.cpp`)

**Engine-scoped overlay state:**

```cpp
struct OverlayState {
    QPointer<QQuickItem> overlayItem;  // safe across reloads/deletions
    bool visible = false;
    QString errorText;
};
static std::unordered_map<void*, OverlayState> s_overlay_states;
```

Keyed by engine pointer. `QPointer<QQuickItem>` auto-nulls when the underlying QObject is destroyed, eliminating dangling-pointer risk across reloads and shell replacement. Cleaned up in `qmlts_destroy_engine()`.

**New C functions:**

- `qmlts_inject_error_overlay(engine_ptr)` — Creates a `QQmlComponent` with inline overlay QML, parents the resulting `QQuickItem` to the window's `contentItem`, and restores any pending visible/errorText state from the engine's `OverlayState`.
- `qmlts_show_error_overlay(engine_ptr, text, text_len)` — If no root window exists (startup failure), loads a minimal error shell QML first. Then sets overlay visible with the given error text.
- `qmlts_hide_error_overlay(engine_ptr)` — Sets overlay invisible. Updates state.
- `qmlts_is_error_overlay_visible(engine_ptr)` — Returns current visibility state from the `OverlayState` struct (not from the QML item directly, since the item may have been destroyed during reload).

**Modified functions:**

- `qmlts_reload_qml()` — After deleting old roots and confirming new root exists, calls `qmlts_inject_error_overlay()` to re-inject the overlay into the new tree. The old `overlayItem` QPointer auto-nulls when the old root is destroyed.
- `qmlts_load_data()` — After successful initial load, calls `qmlts_inject_error_overlay()`.
- `qmlts_destroy_engine()` — Removes engine entry from `s_overlay_states`.

**Overlay QML (inline string, minimal QtQuick only — no QtQuick.Controls dependency):**

```qml
import QtQuick

Rectangle {
    id: overlayRoot
    property string errorText: ""
    property bool overlayVisible: false
    anchors.fill: parent
    color: "#E0000000"
    visible: overlayVisible
    z: 999999

    Column {
        anchors.centerIn: parent
        spacing: 16
        width: parent.width * 0.85

        Text {
            text: "\u274C Build Error"
            color: "#ff6b6b"
            font.pixelSize: 22
            font.bold: true
        }

        Flickable {
            width: parent.width
            height: Math.min(contentHeight, overlayRoot.height * 0.7)
            contentHeight: errorTextItem.implicitHeight
            clip: true

            Text {
                id: errorTextItem
                text: errorText
                color: "#e0e0e0"
                font.family: "Consolas"
                font.pixelSize: 13
                width: parent.width
                wrapMode: Text.Wrap
            }
        }
    }
}
```

**Error shell QML (for startup failures when no window exists, minimal QtQuick only):**

```qml
import QtQuick
import QtQuick.Window

Window {
    width: 800
    height: 600
    visible: true
    title: "QmlTS — Build Error"
    color: "#1a1a1a"
}
```

Uses `QtQuick.Window.Window` instead of `QtQuick.Controls.ApplicationWindow`. The error display mechanism depends only on `QtQuick` and `QtQuick.Window`, which are part of the Qt Quick core and should be available in any standard Qt Quick deployment.

Loaded via `engine->loadData()` when `show_error_overlay()` detects no root objects. The overlay is then injected into this shell window.

### Rust FFI Layer (`native/crates/qmlts-host/src/qt_context.rs`)

New extern "C" declarations:

```rust
fn qmlts_inject_error_overlay(engine_ptr: *mut c_void);
fn qmlts_show_error_overlay(engine_ptr: *mut c_void, text: *const c_char, text_len: usize);
fn qmlts_hide_error_overlay(engine_ptr: *mut c_void);
fn qmlts_is_error_overlay_visible(engine_ptr: *mut c_void) -> bool;
```

Safe wrapper functions follow existing patterns in `qt_context.rs`.

### Rust Engine Layer (`native/crates/qmlts-host/src/engine.rs`)

New methods on `QmltsEngine`:

```rust
pub fn show_error_overlay(&mut self, text: &str) -> Result<()>
pub fn hide_error_overlay(&mut self) -> Result<()>
pub fn is_error_overlay_visible(&self) -> Result<bool>
```

`show_error_overlay()` calls `qt_context::show_error_overlay()`. If the engine has no QML loaded and the C++ side creates an error shell, the engine sets `qml_loaded = true` so that subsequent `reload_qml()` calls work correctly.

`reload_qml()` is not modified at the Rust level — the C++ `qmlts_reload_qml()` handles overlay re-injection internally.

### Rust napi Exports (`native/crates/qmlts-host/src/exports.rs`)

```rust
#[napi]
pub fn show_error_overlay(engine: &mut QmltsEngine, text: String) -> Result<()>

#[napi]
pub fn hide_error_overlay(engine: &mut QmltsEngine) -> Result<()>

#[napi]
pub fn is_error_overlay_visible(engine: &QmltsEngine) -> Result<bool>
```

### `@qmlts/host` npm Package

**types.ts** — Add declarations:

```typescript
export declare function showErrorOverlay(engine: QmltsEngine, text: string): void;
export declare function hideErrorOverlay(engine: QmltsEngine): void;
export declare function isErrorOverlayVisible(engine: QmltsEngine): boolean;
```

**qmlts-host.ts** — Add wrapper methods:

```typescript
showErrorOverlay(text: string): void
hideErrorOverlay(): void
isErrorOverlayVisible(): boolean
```

### TypeScript Dev-Tools (`src/dev-tools/`)

**New types in `dev-types.ts`:**

```typescript
export interface ErrorOverlay {
    show(errors: readonly OverlayError[]): void;
    hide(): void;
    readonly visible: boolean;
    dispose(): void;
}

export interface OverlayError {
    readonly file: string;
    readonly line: number;
    readonly column: number;
    readonly message: string;
    readonly severity: 'error' | 'warning';
    readonly codeFrame?: string;
}

export interface ErrorOverlayOptions {
    readonly host: HostOverlayApi;
}

export interface HostOverlayApi {
    showErrorOverlay(text: string): void;
    hideErrorOverlay(): void;
    isErrorOverlayVisible(): boolean;
}
```

**New file `error-overlay.ts`:**

`createErrorOverlay(options)` factory:
- `show(errors)`: Formats `OverlayError[]` into readable text (file:line:col, message, codeFrame), calls `host.showErrorOverlay(formattedText)`.
- `hide()`: Calls `host.hideErrorOverlay()`.
- `visible` getter: Calls `host.isErrorOverlayVisible()`.
- Error formatting: Each error shows `{severity} {file}:{line}:{column}`, message, and optional codeFrame with separator lines.

**DevServer integration (`dev-server.ts`):**

New optional `errorOverlay` field in `DevServerOptions`:

```typescript
readonly errorOverlay?: ErrorOverlay;
```

Wiring rules (implemented in DevServer's internal event handling, not in ErrorOverlay):
- `build-error` → `overlay.show(diagnosticsToOverlayErrors(diagnostics))`
- `rebuild-error` → `overlay.show(diagnosticsToOverlayErrors(diagnostics))`
- `hot-reload-error` → `overlay.show([{file:'', line:0, column:0, message: error, severity:'error'}])`
- `hot-reload` (success) → `overlay.hide()` (runtime success confirmed)
- `build-success` / `rebuild-success` alone do **NOT** hide the overlay (compile success ≠ runtime success)

The initial build case works automatically:
- Initial build failure → DevServer emits `build-error` during `start()` → overlay auto-shows (C++ creates error shell if needed).
- Initial build success → overlay was never shown, no hide needed. Consumer calls `loadFile()` outside DevServer. If that fails, consumer calls `overlay.show()` directly.

Helper function `diagnosticsToOverlayErrors(diagnostics: Diagnostic[]): OverlayError[]` maps compiler diagnostics to overlay errors.

**DevSession integration (`dev-session.ts`):**

No changes needed — DevSession wraps DevServer, and the overlay is wired at the DevServer level.

## Overlay Lifecycle Across Flows

### Flow A: Initial build succeeds, runtime load succeeds

```
Consumer creates QmltsHost + HotReloadClient + ErrorOverlay
→ DevServer.start() → build succeeds → emits build-success (overlay NOT touched)
→ Consumer calls host.loadFile(outputPath) → C++ injects overlay (hidden) → running ✅
```

### Flow B: Initial build fails (no previous UI)

```
DevServer.start() → build fails → emits build-error
→ overlay auto-shows → host.showErrorOverlay(text) → C++ creates error shell window
→ overlay visible on error shell ✅
user fixes → file change → rebuild succeeds → emits rebuild-success (overlay NOT touched)
→ HotReloadClient.reload() → host.reloadQml(realQml) → replaces error shell → success
→ emits hot-reload → overlay auto-hides → running ✅
```

### Flow C: Running, rebuild fails

```
file change → rebuild fails → emits rebuild-error
→ overlay auto-shows → errors on top of old UI ✅ (old UI preserved)
```

### Flow D: Running, rebuild succeeds but hot reload fails

```
file change → rebuild succeeds → emits rebuild-success (overlay NOT touched)
→ HotReloadClient.reload() → host.reloadQml() fails → old UI preserved
→ emits hot-reload-error → overlay auto-shows → errors on top of old UI ✅
```

### Flow E: Running, rebuild + reload succeeds

```
file change → rebuild succeeds → emits rebuild-success (overlay NOT touched)
→ HotReloadClient.reload() → host.reloadQml() succeeds → C++ re-injects overlay (hidden)
→ emits hot-reload → overlay auto-hides → running ✅
```

### Flow F: Initial build succeeds, runtime load fails

```
DevServer.start() → build succeeds → emits build-success
→ Consumer calls host.loadFile(outputPath) → throws
→ Consumer calls overlay.show([...]) directly → host.showErrorOverlay(text) → C++ creates error shell
→ overlay visible on error shell ✅
→ (File watcher running, rebuild → hot reload path handles recovery as in Flow B)
```

## Test Plan

### Native Tests: Real-Qt Integration (guarded by `QT_DIR`)

These tests require a real Qt installation and validate actual visual-tree behavior. They cannot be replaced by mock-qt.

1. **N-INT-01: Overlay injection after load** — After `load_string()`, verify overlay `QQuickItem` exists as child of window `contentItem`, with `visible: false` and `z: 999999`.
2. **N-INT-02: Show overlay sets QML properties** — Call `show_error_overlay()`, verify the overlay item's `overlayVisible` property is `true` and `errorText` contains the provided text.
3. **N-INT-03: Hide overlay resets QML properties** — Call `hide_error_overlay()`, verify `overlayVisible` is `false`.
4. **N-INT-04: Overlay survives failed reload** — Load QML, show overlay, attempt `reload_qml()` with invalid QML, verify old overlay item is still visible and `QPointer` is still valid.
5. **N-INT-05: Overlay re-injected after successful reload** — Load QML, show overlay, reload with valid QML, verify a new overlay item exists on the new root, with state restored from `OverlayState`.
6. **N-INT-06: Error shell on empty engine** — Call `show_error_overlay()` with no QML loaded, verify a `Window` root object is created with the overlay visible inside it.
7. **N-INT-07: Error shell replaced by real QML** — After error shell creation, call `reload_qml()` with valid QML, verify the error shell root is replaced and overlay is re-injected (hidden if `hide` was called).

### Native Tests: Mock-Qt / State-Machine Only (no real Qt needed)

These tests validate API contracts and state-machine transitions through the Rust `mock-qt` feature.

8. **N-MOCK-01: Engine-scoped state isolation** — Create two engines, show overlay on one, verify `is_error_overlay_visible()` returns `true` only for that engine.
9. **N-MOCK-02: State cleanup on destroy** — Destroy engine, verify overlay state is removed from the map and subsequent calls return clean errors.
10. **N-MOCK-03: show_error_overlay sets qml_loaded** — Call `show_error_overlay()` on an engine with `qml_loaded = false`, verify it transitions to `qml_loaded = true` so that `reload_qml()` can be called.
11. **N-MOCK-04: Repeated show/hide** — Alternate `show_error_overlay()` / `hide_error_overlay()` calls, verify state toggles correctly without errors.

### TypeScript `src/dev-tools/` Tests

These use mock `HostOverlayApi` / mock `HotReloadClient` — no native host needed.

1. **EO-01: show formats single error** — Call `show()` with one error, verify host receives formatted text containing `file:line:col` and message.
2. **EO-02: show includes codeFrame** — Verify code frame text appears in formatted output.
3. **EO-03: show formats multiple errors** — Verify all errors appear with separators.
4. **EO-04: hide calls host** — Call `hide()`, verify `host.hideErrorOverlay()` called exactly once.
5. **EO-05: visible delegates to host** — Verify `visible` reads from `host.isErrorOverlayVisible()` and reflects its return value.
6. **EO-06: dispose is safe** — Call `dispose()`, verify no errors on double-dispose.
7. **EO-07: DevServer shows overlay on build-error** — Initial build fails, verify `overlay.show()` called with converted diagnostics.
8. **EO-08: DevServer shows overlay on rebuild-error** — Rebuild fails, verify `overlay.show()` called.
9. **EO-09: DevServer shows overlay on hot-reload-error** — Hot reload fails, verify `overlay.show()` called with error message.
10. **EO-10: DevServer hides overlay on hot-reload success** — Hot reload succeeds, verify `overlay.hide()` called.
11. **EO-11: DevServer does NOT hide on build-success alone** — Build succeeds (no hot reload), verify `overlay.hide()` was NOT called.
12. **EO-12: DevServer does NOT hide on rebuild-success alone** — Rebuild succeeds but hot reload not triggered, verify `overlay.hide()` was NOT called.
13. **EO-13: DevServer auto-recovery** — Show overlay on error, then trigger successful rebuild + hot reload, verify overlay hidden.
14. **EO-14: diagnosticsToOverlayErrors mapping** — Verify Diagnostic fields map to OverlayError fields correctly (severity, file, line, column, message).
15. **EO-15: startup failure path** — Initial build fails, verify `overlay.show()` called even with no prior successful build and no prior UI.

### Existing Test Preservation

All existing DevSession, DevServer, FileWatcher, and HotReloadOrchestrator tests continue to pass unchanged. The new `errorOverlay` option is optional, so existing test code that doesn't provide it is unaffected.
