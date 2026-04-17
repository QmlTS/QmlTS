# Step 7: V1 Compatibility Shim — Design Spec

## Problem

V2 mode (`runtime: "v2"`) produces V2-shaped QML output (typed imports, `__qmlts_vm0.*` instance refs, direct method calls, signal handlers). Migration from V1 to V2 requires a compatibility bridge so that hand-written QML code referencing `vm.*` and `__qmlts.*` context properties continues to work during the transition period.

The V1 compat shim must be:
- **Explicitly opt-in** via `v1Compat: true` (never silently enabled)
- **Tightly scoped** to Phase 1 limits (single owned ViewModel type per app/engine)
- **Clearly temporary** — documented as a migration aid, not permanent architecture

## Architecture

### Core Principle

The **compiler output stays V2-shaped** regardless of `v1Compat`. The compat shim is a **native host concern**: when `v1Compat: true`, the native Rust host sets `vm` and `__qmlts` root-context properties pointing at the primary V2 ViewModel QObject instance. This gives hand-written QML access to `vm.propertyName` state bindings, `vm.commandMethod()` calls, `__qmlts.lifecycleMethod()` calls, and `__qmlts` signal handlers — all routed to the same V2 single-QObject.

### What `vm` and `__qmlts` Map To

In V1, two separate QObjects existed: `vm` (state-only QObject) and `__qmlts` (runtime QObject with `invoke(id)`, effect signals, and lifecycle). In V2, a single QObject has all properties, Q_INVOKABLE methods, and signals.

- **`vm`** → points to the V2 QObject. Properties like `vm.username`, `vm.count` resolve directly because the V2 QObject has the same QProperty declarations.
- **`__qmlts`** → points to the **same** V2 QObject. Lifecycle methods like `__qmlts.onMounted()` resolve directly (Q_INVOKABLE). Effect signals like `__qmlts.loginCompleted` resolve directly. The V1 numeric `invoke(commandId)` method does **not** exist on the V2 QObject — hand-written QML using `__qmlts.invoke(0)` must be updated to use `vm.login()` (named method). This is acceptable because `invoke(id)` was always an internal compiler detail, not part of the public API.

**Step 7 does NOT make old compiler-generated V1 QML run unchanged under V2.** The V1 compiler generated QML patterns like `__qmlts.invoke(0)`, `Connections { target: __qmlts; ... }`, and `vm.` state bindings bound to a different QObject from the command/effect QObject. The compat shim only provides `vm`/`__qmlts` aliases pointing to the single V2 QObject. This covers:
- State bindings: `vm.username`, `vm.count` → works (same property names on V2 QObject)
- Named method calls: `vm.login()`, `__qmlts.onMounted()` → works (Q_INVOKABLE on V2 QObject)
- Effect signals: `Connections { target: __qmlts; onLoginCompleted: ... }` → works if signal names match V2 QObject signals

This does NOT cover:
- V1 numeric dispatch: `__qmlts.invoke(0)` → **does not work** (no `invoke` method on V2 QObject)
- V1-specific signal naming: if V1 signal names differed from V2 signal names, bindings must be updated

The compat shim is a documented migration subset for hand-written QML transitioning alongside compiler-generated V2 QML. Users must re-compile their QML through the V2 compiler for full V2 support.

### Supported Legacy QML Scope

The compat shim can only point `vm` and `__qmlts` at an existing V2 QObject. If no V2 ViewModel instance is created by the QML engine, the shim has nothing to alias.

**Supported:** Compiler-generated V2 root QML that instantiates a typed V2 ViewModel via module import (e.g., `CounterViewModel { id: __qmlts_vm0 }`), with hand-written child components or inline QML snippets that reference `vm.*` or `__qmlts.*`.

**NOT supported:** Standalone old V1-shaped QML files that do not instantiate a typed V2 ViewModel at all. These files have no V2 QObject for the shim to alias. They must be compiled through the V2 compiler or manually updated to use V2 typed imports before compat mode can help.

### Phase 1 Limits

Phase 1 limits are **engine/app-scoped**, not just source-file-scoped, because `vm` and `__qmlts` are root-context properties visible to the entire QML engine tree.

- **Single ViewModel type per module.** If `v1Compat: true` and the module registers more than one ViewModel type (e.g., `CounterViewModel` and `LoginViewModel`), only one can be aliased as `vm`. The build pipeline emits `QMLTS-B003` to reject this case.
- **Single ViewModel type per source file.** The compiler also validates per-source-file that views don't use different ViewModel types (`QMLTS-V009`). This catches the obvious case early.
- **No injected ViewModels.** If a compilation unit has `ownership: 'injected'`, `QMLTS-V010` fires.
- **First instance only.** If multiple instances of the (single) ViewModel type are created at runtime (e.g., via component reuse), only the first instance gets the `vm`/`__qmlts` aliases. Subsequent instances are normal V2 instances without compat aliases. This is explicitly the Phase 1 contract.

### Primary Instance Selection

The **primary instance** is the first V2 ViewModel QObject allocated in the `InstanceRegistry` during QML loading for this engine. This is deterministic because:

1. Phase 1 enforces a single ViewModel type per module (QMLTS-B003 rejects multi-type modules).
2. QML creates children top-to-bottom. Compiler-generated V2 QML places the ViewModel declaration before sibling elements that reference it.
3. The first `allocate_instance` call in the `register_instance` closure during QML loading is the primary.

No compiler metadata (e.g., `compilerSlotKey`) is used for selection at the native level. The contract is explicitly "first V2 ViewModel instance created in this engine" — not "the instance with a specific slot key". If the application creates multiple same-type instances, only the first is aliased. This is a known and documented Phase 1 limitation.

### Context Property Timing

Context properties must be set **during V2 QObject construction**, not at `instanceReady()` time. QML bindings like `text: vm.username` are evaluated during QML component creation. If `vm` is installed after the binding evaluates, it resolves as `undefined`.

The V2 QObject constructor calls `register_instance(class_name, ptr)` via the `V2InitContext` closure (engine.rs `create_v2_context_guard`). This runs **before** the QML engine evaluates bindings on sibling or child elements. This is the correct hook point.

At this moment:
- The QObject pointer is valid.
- State properties have default values (0, "", false). This is acceptable — QML bindings will re-evaluate when TS sends state sync via `syncState`.
- The `instanceReady` gate still controls QML→TS event delivery (commands, property changes, lifecycle). Events are queued until TS completes setup. But the QObject itself is visible as a context property immediately.

Implementation: In the `register_instance` closure (inside `create_v2_context_guard`), after successful `allocate_instance`, if `v1_compat` is true and not yet applied, call `set_context_property("vm", ptr)` and `set_context_property("__qmlts", ptr)` on the engine root context.

### What Changes

| Layer | Change |
|-------|--------|
| Compiler (`compiler.ts`) | Validate Phase 1 limits when `v1Compat: true`. Emit diagnostics for unsupported patterns. QML output stays V2. |
| Compiler slot metadata | Include `v1Compat: true` in `CompilationUnit` when active. |
| Build pipeline | Validate module-wide Phase 1 limits (QMLTS-B003). Thread `v1Compat` to entry/manifest. |
| Build manifest | Record `v1Compat` flag so host knows to activate context property shim. |
| Entry generator | Pass `v1Compat: true` in `registerModule()` options. |
| Host TS contract | Extend `ModuleRegistration` with optional `v1Compat?: boolean`. Extend `V2NativeBindings.registerModule` with 6th boolean param. |
| N-API exports (`exports.rs`) | `registerModule` gains a 6th `v1_compat: bool` parameter. |
| Rust engine (`engine.rs`) | `register_module()` stores `v1_compat` flag. `create_v2_context_guard()` closure sets context properties on first instance creation when `v1_compat` is true. |
| V2 runtime state (`v2_runtime.rs`) | `V2EngineState` gains `v1_compat: bool` and `v1_compat_applied: Arc<AtomicBool>` fields. |
| Diagnostics | Add `QMLTS-V009` (multi-VM per file), `QMLTS-V010` (injected VM), `QMLTS-B003` (multi-VM-type module with v1Compat). |

### What Does NOT Change

- V2 QML output shape (transformer, post-processor unchanged)
- V1 mode behavior
- V2 golden fixtures
- V2 dispatch, InstanceRegistry, TypeRegistrar internals
- V1 `register_view_model()` code path
- `instanceReady` gate behavior (still controls event delivery)

## Diagnostics

### QMLTS-V009: Multiple ViewModels with v1Compat (per source file)

**Severity:** error
**Trigger:** `v1Compat: true` and a source file contains multiple views paired with different ViewModel types.
**Message:** `V1 compat mode (Phase 1) supports only a single ViewModel type per source file. Found: <list>. Remove v1Compat or consolidate to a single ViewModel.`

> Note: The current compiler architecture pairs views 1:1 with ViewModels via the `vm` parameter. Multiple views in a single source file with different VM types is the multi-VM case. This diagnostic is emitted at the `compileSingleSource` level after all views are compiled, not per-view.

### QMLTS-V010: Externally injected ViewModel with v1Compat

**Severity:** error
**Trigger:** `v1Compat: true` and a compilation unit has `ownership: 'injected'` (reserved for future use — currently all ViewModels are `'owned'`).
**Message:** `V1 compat mode (Phase 1) does not support externally injected ViewModels. ViewModel "<className>" has injected ownership.`

> Note: This is a forward-looking guard. Currently all VMs are owned, but when injected VMs are added, this diagnostic will prevent them from being used with v1Compat.

### QMLTS-B003: Multiple ViewModel types in module with v1Compat

**Severity:** error
**Trigger:** `v1Compat: true` and the module's `typeNames` (after deduplication) contains more than one ViewModel type.
**Message:** `V1 compat mode (Phase 1) supports only a single ViewModel type per module. Module "<moduleUri>" registers <n> types: <list>. Remove v1Compat or reduce to a single ViewModel type.`

> Note: This is a build-pipeline diagnostic emitted during entry/manifest generation. It catches the app-wide multi-type case that per-source-file validation (V009) cannot detect (e.g., two files each with a different ViewModel type). The build pipeline has the full `typeNames` list from module metadata.

## Compiler Changes

### `compileView()` additions

When `isV2 && options?.v1Compat`:
1. QML output is still V2-shaped (no change to v2TransformOptions or v2PostOptions)
2. Slot metadata includes `v1Compat: true` in the `ViewModelInstanceSlot`
3. No per-view change — Phase 1 limits are validated at source level

### `compileSingleSource()` additions

After compiling all views, if `v1Compat: true`:
1. Collect unique ViewModel class names across all compilation units
2. If more than one unique ViewModel class → emit `QMLTS-V009`
3. If any unit has `ownership: 'injected'` → emit `QMLTS-V010`

### `CompilationUnit` extension

Add optional `v1Compat?: boolean` to `CompilationUnit` (in `pipeline-types.ts`). Set to `true` when `v1Compat` is active for that unit.

## Build Pipeline Changes

### Build-Level Validation

In the build pipeline, after computing module metadata and before generating entry/manifest, if `v1Compat: true` and `moduleRegistration.typeNames.length > 1`:
- Emit `QMLTS-B003` diagnostic.
- This is a hard error — do not proceed with entry generation.

### Entry Generator

When `v1Compat: true` and `moduleRegistration` is present:

```ts
host.registerModule({
  moduleUri: 'MyApp.ViewModels',
  versionMajor: 1,
  versionMinor: 0,
  typeNames: ['CounterViewModel'],
  v1Compat: true,
});
```

### Build Manifest

Add `v1Compat?: boolean` to `BuildManifest`:

```json
{
  "runtime": "v2",
  "v1Compat": true,
  "modules": [...]
}
```

### EntryGeneratorOptions

Add `v1Compat?: boolean` to `moduleRegistration` in `EntryGeneratorOptions`.

### Build Pipeline Threading

Thread `v1Compat` from resolved config into `EntryGeneratorOptions.moduleRegistration.v1Compat` when `runtime === 'v2'` and `moduleRegistration` is present. The build pipeline already threads `v1Compat` to compiler options (line 141); this adds the entry/manifest side.

## Host Contract Changes (TypeScript)

### `ModuleRegistration` (v2-types.ts)

```ts
export interface ModuleRegistration {
  readonly moduleUri: string;
  readonly versionMajor: number;
  readonly versionMinor: number;
  readonly typeNames: readonly string[];
  readonly v1Compat?: boolean;  // NEW
}
```

### `V2NativeBindings.registerModule`

Add optional `v1Compat` parameter (6th param):

```ts
registerModule(
  engine: QmltsEngine,
  moduleUri: string,
  versionMajor: number,
  versionMinor: number,
  typeNames: string[],
  v1Compat?: boolean,  // NEW
): void;
```

### `QmltsHost.registerModule()`

Pass `v1Compat` through to native binding:

```ts
fn(eng, reg.moduleUri, reg.versionMajor, reg.versionMinor,
   [...reg.typeNames], reg.v1Compat ?? false);
```

## Native Rust Changes

### N-API: `exports.rs` `register_module`

Current signature (5 params):
```rust
pub fn register_module(engine, module_uri, version_major, version_minor, type_names)
```

New signature (6 params):
```rust
pub fn register_module(engine, module_uri, version_major, version_minor, type_names, v1_compat: bool)
```

Pass `v1_compat` to `engine.inner.register_module()`.

### Engine: `engine.rs` `register_module()`

Current:
```rust
pub fn register_module(&mut self, module_uri, version_major, version_minor, type_names) -> Result<()>
```

New:
```rust
pub fn register_module(&mut self, module_uri, version_major, version_minor, type_names, v1_compat: bool) -> Result<()>
```

After calling `type_registrar.register_module()`, store `v1_compat` on `V2EngineState`:

```rust
state.v1_compat = v1_compat || state.v1_compat;  // sticky: once enabled, stays enabled
```

### V2 Runtime: `v2_runtime.rs` `V2EngineState`

Add fields:
```rust
pub struct V2EngineState {
    pub enabled: bool,
    pub v1_compat: bool,  // NEW — set by register_module when v1Compat=true
    pub v1_compat_applied: Arc<AtomicBool>,  // NEW — shared with context guard closure
    pub registry: Arc<Mutex<InstanceRegistry>>,
    pub type_registrar: TypeRegistrar,
    pub handlers: Arc<V2Handlers>,
}
```

Initialize `v1_compat: false` and `v1_compat_applied: Arc::new(AtomicBool::new(false))` in `V2EngineState::new()`.

### V1 Compat Context Property Setup in `create_v2_context_guard()`

The `register_instance` closure in `create_v2_context_guard()` (engine.rs) already captures `registry: Arc<Mutex<InstanceRegistry>>`. For v1_compat, it additionally captures:
- `engine_ptr` as `usize` (avoids `Send`/`Sync` issues with raw pointers)
- `v1_compat: bool` (read from V2EngineState at guard creation time)
- `v1_compat_applied: Arc<AtomicBool>` (shared with V2EngineState)

Implementation sketch:
```rust
fn create_v2_context_guard(&self) -> Option<V2ContextGuard> {
    let state = self.v2_state.as_ref()?;
    let registry = Arc::clone(&state.registry);
    let owner_id = self.dispatch_owner_id;
    let v1_compat = state.v1_compat;
    let v1_compat_applied = Arc::clone(&state.v1_compat_applied);
    let engine_ptr_addr = self.engine_ptr as usize;  // capture as usize for Send safety
    // ... i32 check for owner_id ...

    let ctx = V2InitContext {
        owner_id,
        register_instance: Arc::new(move |class_name, ptr| {
            let mut reg = registry.lock().expect("registry lock poisoned");
            match reg.allocate_instance(class_name, ptr) {
                Ok(id) => {
                    // V1 compat: set context properties for first instance
                    if v1_compat && !v1_compat_applied.load(Ordering::SeqCst) {
                        let engine_ptr = engine_ptr_addr as *mut std::ffi::c_void;
                        // SAFETY: Called on Qt main thread during QML loading.
                        // engine_ptr is valid for the lifetime of the engine.
                        // ptr is the just-constructed QObject, valid for its lifetime.
                        unsafe {
                            let _ = qt_context::set_context_property(engine_ptr, "vm", ptr);
                            let _ = qt_context::set_context_property(engine_ptr, "__qmlts", ptr);
                        }
                        v1_compat_applied.store(true, Ordering::SeqCst);
                    }
                    // ... existing i32 conversion ...
                    i32::try_from(id).unwrap_or_else(|_| { /* remove inert instance */ -1 })
                }
                Err(e) => { /* existing error path */ -1 }
            }
        }),
    };
    Some(V2ContextGuard::new(ctx))
}
```

**Why this timing is correct:**
- The `register_instance` closure runs during `cxx_qt::Initialize::initialize()` (the QObject constructor).
- QML creates children top-to-bottom. The ViewModel declaration appears before sibling elements that reference `vm.*`.
- `set_context_property` on the engine's root context is immediately visible to subsequent binding evaluations.
- State properties have default values at this point. Bindings will re-evaluate when TS sends state sync.

**Why NOT `instance_ready()`:** `instance_ready()` runs after TS-side setup completes. By that time, the QML component tree is fully created and bindings like `text: vm.username` have already been evaluated. If `vm` wasn't set, the binding resolved as `undefined` and may not re-evaluate (depending on Qt's binding reevaluation rules for previously-undefined context properties).

## Testing Requirements

### Compiler tests
- **V009**: Source with two views using different VMs + v1Compat → error diagnostic
- **V009-neg**: Source with two views using same VM + v1Compat → no error
- **V010**: Compilation unit with injected ownership + v1Compat → error diagnostic
- **V1Compat QML output**: v1Compat does NOT change QML output (still V2-shaped)
- **V1Compat slot metadata**: CompilationUnit includes v1Compat flag
- **No v1Compat**: v1Compat=false/undefined → no validation, no flag in unit

### Build pipeline tests
- **B003**: v1Compat + module with 2+ VM types → error diagnostic
- **B003-neg**: v1Compat + module with 1 VM type → no error
- **B003-neg2**: No v1Compat + module with 2+ VM types → no error (only v1Compat triggers)

### Entry generator tests
- V2 entry with v1Compat → `registerModule` includes `v1Compat: true`
- V2 entry without v1Compat → no `v1Compat` in registerModule
- V1 entry unaffected

### Build manifest tests
- V2 manifest with v1Compat → `v1Compat: true` in manifest
- V2 manifest without v1Compat → no v1Compat field

### Host contract tests
- ModuleRegistration type accepts v1Compat
- QmltsHost.registerModule passes v1Compat to native binding (6th param)

### Native Rust tests (mock-qt)
- `register_module` with `v1_compat: true` stores flag on V2EngineState
- `register_module` with `v1_compat: false` does not set flag
- `v1_compat` is sticky: second `register_module` with `false` does not unset
- Context property setup during instance allocation: when `v1_compat` is true and first instance is created, `set_context_property("vm", ptr)` and `set_context_property("__qmlts", ptr)` are called
- Without `v1_compat`, instance creation does NOT call `set_context_property`
- Second instance creation with `v1_compat` does NOT update context properties (first-only)
- N-API `register_module` accepts 6th param and passes through

## Non-Goals (explicitly out of scope)

- Changing QML output shape for v1Compat (compiler output stays V2)
- Making old compiler-generated V1 QML run unchanged under V2 (no `invoke(id)` support)
- Supporting standalone old V1 QML files that don't instantiate a typed V2 ViewModel
- Supporting multiple ViewModel types per module in compat mode
- Supporting injected ViewModels in compat mode
- Creating a separate V1-compat wrapper QObject (both `vm` and `__qmlts` point to same V2 QObject)
- Providing V1 numeric `invoke(commandId)` dispatch on the V2 QObject
- Any Phase 2 or Phase 3 migration features
- Changing InstanceRegistry, TypeRegistrar, or V2 dispatch internals
