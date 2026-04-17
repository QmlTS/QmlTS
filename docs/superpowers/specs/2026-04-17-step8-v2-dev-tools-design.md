# Step 8: V2 Dev Tools & Hot Reload — Design Spec

## Problem Statement

The existing dev-tools layer (hot reload orchestrator, REPL, error overlay, dev console,
perf profiler, dev server, file watcher) is built on V1 single-bridge assumptions. V2
requires dev tooling that understands multiple live instances, stable slot identities
(`compilerSlotKey`), and instance-scoped diagnostics. This step evolves the dev-tools
foundation into a genuine V2 dev runtime while preserving all V1 behavior.

## Approach

**Layered capture/restore:** Keep existing UI geometry snapshot (`captureSnapshot` /
`restoreSnapshot`) as-is. Add a separate V2 instance state capture/restore path via new
native `captureInstanceStates` / `restoreInstanceStates` N-API exports. The orchestrator
calls both: geometry capture → instance state capture → nuke+load → instance state
restore → geometry restore.

**Schema-filtered native capture:** Instance property capture uses QMetaObject/QProperty
traversal but is filtered to schema-declared state properties only. Internal fields
(`instanceId`, `ownerId`, `objectName`, Qt internals) are never captured or restored.

**compilerSlotKey-only matching:** Old snapshots are matched to new instances exclusively
by `(className, compilerSlotKey)`. No className-only fallback, no instanceId fallback
across reload. Unmatched instances start fresh.

**Explicit instance targeting:** All V2 dev tool operations that interact with live
instances require an explicit instance selector. No implicit default target, no
single-instance inference.

---

## §1 Hot Reload Orchestrator V2 Upgrade

### 6-Step Flow (V2, native-authoritative)

```
FileWatcher detects debounced change batch
  → DevServer.onFilesChanged()
    → run build pipeline (compile + artifacts)
    → IF BUILD FAILS:
        → show/update ErrorOverlay
        → keep existing live QML tree running
        → do NOT capture, reload, or restore
        → return
    → IF BUILD SUCCEEDS:
        → captureSnapshot() [UI geometry — old live QML]
        → captureInstanceStates(engine) [native V2 — old live QML]
        → reload (nuke + load new QML artifacts)
        → discover new instances via ViewModelManager
        → match old snapshots to new by (className, compilerSlotKey)
        → restoreInstanceStates(engine, matchedPairs)
        → restoreSnapshot() [UI geometry]
        → emit hot-reload-complete event with result
```

### Source of Truth

- **Property values:** Native `captureInstanceStates()` reads live QObject property
  values via QMetaObject/QProperty traversal. This is the authoritative state snapshot
  source.
- **Slot metadata:** `ViewModelManager` provides `compilerSlotKey` → `instanceId`
  mapping from compile metadata. The manager does NOT provide property values for capture.
- **Matching:** TS orchestrator matches old snapshots to new instances by
  `(className, compilerSlotKey)`. The native side receives already-matched
  `{newInstanceId, properties}` pairs.

### HotReloadClient V2 Protocol

The `HotReloadClient` interface gains optional V2 methods (async-friendly):

```ts
interface HotReloadClient {
  // Existing V1
  reload(changedFiles: string[], outputDir: string): Promise<HotReloadResult>;
  // New V2 (optional — absent means V1-only client)
  captureInstanceStates?(): Promise<NativeInstanceSnapshot[]> | NativeInstanceSnapshot[];
  restoreInstanceStates?(pairs: InstanceRestorePair[]): Promise<RestoreDiagnostics> | RestoreDiagnostics;
}
```

When V2 methods are absent and runtime is V2, the result includes `degraded: true` with
diagnostic. `instancesRestored` is NOT reported as if restore succeeded.

### HotReloadResult V2 Additions

```ts
interface HotReloadDiagnostic {
  code: string;        // e.g. "HR_UNMATCHED_INSTANCE", "HR_UNSUPPORTED_TYPE"
  message: string;
  instanceId?: number;
  className?: string;
  compilerSlotKey?: string;
}

interface HotReloadResult {
  success: boolean;
  // New V2 fields
  instancesRestored?: number;
  instancesUnmatched?: number;
  degraded?: boolean;
  diagnostics?: HotReloadDiagnostic[];
}
```

### Matching Rules

- Match by `(className, compilerSlotKey)` pair only
- className-only fallback: never used
- instanceId fallback across reload: never used
- Unmatched old instances: discarded (property state lost)
- Unmatched new instances: initialize normally (no restore)
- Missing compilerSlotKey on either side: no match

---

## §2 Native Capture/Restore API

### Structured Descriptor Metadata

Step 8 adds structured state-property metadata to `V2BridgeDescriptor` so the
capture/restore path never parses `schema_json` at runtime:

```rust
/// Descriptor for a single declared state property on a V2 ViewModel.
pub struct V2StatePropertyDescriptor {
    /// Rust/TS property name (e.g., "username").
    pub name: &'static str,
    /// QML property name (e.g., "username" — same unless aliased).
    pub qml_name: &'static str,
    /// QML/Qt type for serialization: "bool" | "int" | "real" | "string".
    pub qml_type: &'static str,
}
```

`V2BridgeDescriptor` gains a new field:

```rust
pub state_properties: &'static [V2StatePropertyDescriptor],
```

Each fixture descriptor (`LoginViewModel`, `CounterViewModel`, `SearchViewModel`)
populates `state_properties` with static arrays matching their declared states.
`schema_json` remains on the descriptor for diagnostics, tests, and contract
validation — it is **not** used by the hot-reload runtime path.

### Capture Flow

1. Rust iterates `InstanceRegistry` — only **ready** instances are captured. Unready
   instances are skipped and logged as diagnostic.
2. For each ready instance, Rust looks up `className` → `V2BridgeDescriptor` →
   `state_properties` to get the structured allowlist of property names and types.
3. Rust passes the **allowlist** of property names to C++ FFI:
   `qmlts_v2_read_properties(qobject_ptr, property_names_json) → char*`
4. C++ reads only the requested properties via `QMetaObject::property(name)` /
   `QVariant`, serializes to JSON. Unsupported types (not bool/int/real/string)
   produce per-property diagnostics, not panics.
5. Return value: `{ "snapshots": [...], "diagnostics": [...] }`

### Restore Flow

1. Rust receives matched pairs: `[(instanceId, propertiesJson)]`
2. For each pair, Rust validates property names against the descriptor's
   `state_properties` allowlist. Unknown or internal properties are rejected with
   diagnostic.
3. Rust calls C++ FFI: `qmlts_v2_write_properties(qobject_ptr, validated_json) → bool`
4. C++ writes properties with **suppress-notifications RAII guard** (same mechanism as
   `syncStateV2`) to avoid echo.
5. Type mismatches produce diagnostics, not silent failures.

### C++ FFI Functions (qt_context.cpp)

```cpp
// Read schema-declared properties from a V2 QObject
// property_names_json: JSON array of property name strings
// Returns: JSON object { "props": {name: value, ...}, "diagnostics": [...] }
// Caller frees returned string via qmlts_free_string()
extern "C" char* qmlts_v2_read_properties(
    void* qobject_ptr,
    const char* property_names_json
);

// Write properties to a V2 QObject with notification suppression
// properties_json: JSON object { name: value, ... }
// Returns true on success
extern "C" bool qmlts_v2_write_properties(
    void* qobject_ptr,
    const char* properties_json
);

// Free a string allocated by read_properties
extern "C" void qmlts_free_string(char* ptr);
```

### Supported Property Types (Step 8)

- `bool`
- `int` (i32)
- `real` / `double` (f64)
- `string` (QString)

Other types produce per-property diagnostic and are excluded from the snapshot.

### Mock-qt Implementation

Mock stores a `HashMap<*mut c_void, HashMap<String, String>>` for test-controlled
property data. `read_properties` returns from this map; `write_properties` updates it.
Tests can seed the mock with expected property values.

### Data Types

```ts
/** Native-side snapshot of a single V2 instance's state properties. */
interface NativeInstanceSnapshot {
  instanceId: number;
  className: string;
  properties: Record<string, unknown>;  // schema-declared state props only
}

/** Matched pair for restore: new instanceId + old properties to apply. */
interface InstanceRestorePair {
  instanceId: number;             // new instance's ID (post-reload)
  properties: Record<string, unknown>;  // captured from matched old instance
}

/** Diagnostics returned from native restore. */
interface RestoreDiagnostics {
  diagnostics: HotReloadDiagnostic[];
}
```

### N-API Exports

```ts
// Returns JSON: { snapshots: NativeInstanceSnapshot[], diagnostics: HotReloadDiagnostic[] }
captureInstanceStates(engine: QmltsEngine): string;
// matchedPairsJson: JSON array of InstanceRestorePair
// Returns JSON: { diagnostics: HotReloadDiagnostic[] }
restoreInstanceStates(engine: QmltsEngine, matchedPairsJson: string): string;
```

### V2NativeBindings Additions

```ts
captureInstanceStates(engine: QmltsEngine): string;
restoreInstanceStates(engine: QmltsEngine, matchedPairsJson: string): string;
```

### Ready-State Rule

Only ready instances are captured. Unready instances are intentionally excluded — they
haven't completed TS-side init so their state is incomplete.

---

## §3 Dev Tools V2 Instance Targeting

### Instance Selector Grammar (canonical)

```
#<instanceId>         — by numeric ID (e.g., #42)
@<className>          — by class name (e.g., @LoginViewModel)
@<className>#<key>    — by class + compiler slot key (e.g., @LoginViewModel#login-slot)
```

`InstanceSelector` is a parsed type with
`resolve(slots: InstanceStateSnapshot[]): InstanceId | SelectorError`.

### Selector Diagnostics

| Error Code | Condition |
|---|---|
| `SELECTOR_INVALID` | Malformed syntax |
| `SELECTOR_INSTANCE_NOT_FOUND` | Unknown instanceId |
| `SELECTOR_CLASS_NOT_FOUND` | Unknown className |
| `SELECTOR_AMBIGUOUS` | `@className` matches multiple instances (lists available slots) |
| `SELECTOR_SLOT_NOT_FOUND` | `@className#slotKey` no match, or stale compilerSlotKey after reload |

### REPL

- `evaluate(input, options?: { selector?: InstanceSelector })` — V1 backward-compatible
- V1 mode: selector ignored, existing behavior unchanged
- V2 mode: selector **required** for instance-targeted operations. No inference, even for
  single-instance cases. Multiple instances without selector → error listing selectors.
- Scope: REPL supports targeted state inspection (`getProperty`, `listProperties`) and
  command invocation on the selected instance. Does NOT promise arbitrary JS evaluation
  against QObject context.

### ErrorOverlay

- `show()` / `showBuildError()` gain optional
  `instanceContext?: { instanceId: number; className: string }` for tagging
- Existing display adds compact text tag `[ClassName#instanceId]` when context present
- No visual UI redesign required
- V1: unchanged

### DevConsole

- Console output tagged with `[ClassName#instanceId]` when originating from V2 instance
- `formatMessage()` accepts optional instance context
- V1: no instance tags

### PerfProfiler

- Spans gain optional `instanceId`, `className`, `compilerSlotKey` in Chrome Trace `args`
- New helper methods: `getSpansByInstance(instanceId)`, `getSpansByClass(className)`,
  `getSpansBySlotKey(key)`
- V1: no instance fields

### Backward Compatibility

All V1 APIs remain source-compatible. V2 features are additive (optional parameters, new
methods).

---

## §4 DevServer + DevSession Integration

### DevServer V2 Orchestration Flow

```
FileWatcher detects debounced change batch
  → DevServer.onFilesChanged()
    → run build pipeline (compile + artifacts)
    → IF BUILD FAILS:
        → show/update ErrorOverlay
        → keep existing live QML tree running (undisturbed)
        → do NOT capture, reload, or restore
        → return
    → IF BUILD SUCCEEDS:
        → captureSnapshot() [UI geometry — old live QML]
        → captureInstanceStates(engine) [native V2 — old live QML]
        → reload (nuke + load new QML artifacts)
        → discover new instances via ViewModelManager
        → match old snapshots to new by (className, compilerSlotKey)
        → restoreInstanceStates(engine, matchedPairs)
        → restoreSnapshot() [UI geometry]
        → emit hot-reload-complete event with result
```

### Build Failure = No Disturbance

Failed rebuilds never trigger capture/reload/restore. The running app continues
undisturbed. ErrorOverlay is shown/updated.

### Fallback Behavior

- V1 mode: current flat behavior (no instance capture/restore)
- V2 mode with missing native capture/restore: `degraded: true` with structured
  diagnostic. Never silently pretends state restore happened.

### DevSession

Remains a thin wrapper over DevServer. No new public API — it delegates V2 orchestration
entirely to DevServer.

### One Debounced Batch = One Reload

Multiple file changes within the debounce window produce exactly one
capture → reload → restore cycle.

---

## §5 FileWatcher + Lifecycle Events

### FileWatcher

Unchanged for Step 8. Existing debounce + glob-based file watching works identically for
V1 and V2.

### Lifecycle Event Ordering During V2 Hot Reload

Precise sequence:

1. Build succeeds
2. Capture UI geometry from old live QML tree
3. Capture V2 instance states from old live QML tree (ready instances only)
4. Begin reload/nuke
5. Old instances emit `onUnmounting` via normal V2 dispatch (fired by Qt during QObject
   destruction)
6. Old QML tree destroyed
7. New QML tree loaded — new V2 instances created, registered in InstanceRegistry
8. New instances' `onMounted` lifecycle events are **queued** (held by the ready gate —
   new instances are not yet ready)
9. TS-side instance matching + state restore via `restoreInstanceStates()`
10. `instanceReady()` called for each new instance → flushes queued events including
    `onMounted`

**Restored state is applied before `onMounted` fires** on new instances. The existing
ready-gate mechanism achieves this naturally: new instances are not marked ready until TS
completes restore + calls `instanceReady()`.

### Effects Not Replayed

Only state properties are restored during hot reload. Effect signals from the old session
are not recorded or replayed.

### DevServerStatus

Current: `'idle' | 'starting' | 'building' | 'running' | 'reloading' | 'error' | 'stopping' | 'stopped'`

V2 additions:
- `'capturing-state'` — emitted after build success, during capture phase
- `'restoring-state'` — emitted after reload, during restore phase

V2 hot reload status sequence:
`running → building → capturing-state → reloading → restoring-state → running`

V1 mode: never emits `capturing-state` or `restoring-state`.

---

## §6 Testing Strategy

### Key Testing Rules

- No single-instance inference. V2 targeted ops always require explicit selector.
- compilerSlotKey-only matching. No className-only fallback, no instanceId fallback
  across reload.
- All ~160+ existing dev-tools tests + existing Rust V1/V2 tests + TS host tests must
  pass unchanged.

### 1. Hot Reload Orchestrator V2 (~14 tests)

| ID | Description |
|---|---|
| HR-V2-01 | Single-instance capture → reload → restore by compilerSlotKey |
| HR-V2-02 | Multi-instance capture → restore, matched by (className, compilerSlotKey) |
| HR-V2-03 | Unmatched old instance → discarded, starts fresh |
| HR-V2-04 | Unmatched new instance → initializes normally |
| HR-V2-05 | Same className but different/missing compilerSlotKey → NO restore |
| HR-V2-06 | className-only fallback never used |
| HR-V2-07 | instanceId fallback across reload never used |
| HR-V2-08 | V2 mode with missing native capture/restore → degraded:true, diagnostic, instancesRestored not reported |
| HR-V2-09 | Build failure → no capture/reload/restore, live app undisturbed, overlay shown |
| HR-V2-10 | One debounced batch = one capture/restore cycle |
| HR-V2-11 | HotReloadResult includes instancesRestored/instancesUnmatched counts |
| HR-V2-12 | Structured diagnostics for unsupported property types |
| HR-V2-13 | Restore uses suppress-notification guard (no echo events) |
| HR-V2-14 | V1 flat behavior preserved, concurrent serialization preserved |

### 2. Native Capture/Restore (~12 Rust + ~6 TS + 1 real-Qt)

**Rust:**
- Capture includes only schema-declared state properties
- Capture excludes instanceId, ownerId, objectName, internal fields
- Only ready instances captured; unready skipped with diagnostic
- Unsupported types produce diagnostic, not panic
- Restore validates property names against schema; rejects unknown props
- Restore with empty/null properties is no-op
- Mock-qt returns controlled property data
- Capture/restore JSON shape: `{snapshots, diagnostics}` / `{diagnostics}`
- Diagnostic contains code, message, optional instance context

**TS integration:**
- N-API round-trip: captureInstanceStates → JSON → restoreInstanceStates
- Diagnostics JSON shape stable
- Missing native methods → degraded result (not crash)
- V2NativeBindings includes new methods

**Real Qt (1 integration test):**
- Set V2 instance state → capture → reload/new instance → restore by compilerSlotKey →
  assert QObject properties restored

### 3. Instance Selector (~8 tests, new file)

| ID | Description |
|---|---|
| SEL-01 | Parse `#42` → by instanceId |
| SEL-02 | Parse `@LoginViewModel` → by className |
| SEL-03 | Parse `@LoginViewModel#login-slot` → by className + slotKey |
| SEL-04 | Invalid syntax → SELECTOR_INVALID |
| SEL-05 | Ambiguous class → SELECTOR_AMBIGUOUS |
| SEL-06 | Unknown instance → SELECTOR_INSTANCE_NOT_FOUND |
| SEL-07 | Unknown slotKey → SELECTOR_SLOT_NOT_FOUND |
| SEL-08 | V2 targeted ops without selector → error (no inference) |

### 4. Dev Tools Instance Targeting (~12 tests)

- REPL: V2 with selector works, V1 ignores selector, V2 multi-instance without selector
  errors
- ErrorOverlay: instance context tag present in output
- DevConsole: `[ClassName#instanceId]` format
- PerfProfiler: per-instance tags, getSpansByInstance/Class/SlotKey helpers

### 5. DevServer V2 Integration (~10 tests)

- V2 status sequence: running → building → capturing-state → reloading →
  restoring-state → running
- Build failure → no capture/restore states emitted
- Build failure → live app undisturbed, overlay updated
- V1 status sequence unchanged
- Lifecycle: onUnmounting before destruction
- Lifecycle: onMounted after restore
- Effects not replayed during restore

### 6. Existing Test Preservation

All ~160+ dev-tools tests, all Rust V1/V2 tests, all TS host tests pass unchanged.

---

## Scope Guard

### This step DOES:

- Upgrade hot reload orchestrator for V2 instance-scoped capture/restore
- Add native `captureInstanceStates` / `restoreInstanceStates` with schema-filtered
  QProperty traversal
- Add instance selector parsing and resolution
- Add instance targeting to REPL, ErrorOverlay, DevConsole, PerfProfiler
- Add V2 status states to DevServer
- Add `captureInstanceStates` / `restoreInstanceStates` to V2NativeBindings
- Add mock-qt support for V2 property capture/restore
- Preserve all V1 behavior and existing tests

### This step does NOT:

- Change the file watcher behavior
- Add schema-driven native code generation
- Add visual UI redesign for error overlay
- Add third-party package/library dev workflow
- Add arbitrary QObject-context JS evaluation in REPL
- Add single-instance inference for V2 targeting
- Change V2 QML output or compiler behavior
- Change the V1 compat shim from Step 7
