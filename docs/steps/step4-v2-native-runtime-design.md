# Step 4: V2 Native Multi-Instance Runtime — Design Spec

**Date:** 2026-04-16
**Repository:** `C:\MyFile\DevAll\QmlTS` (implementation)
**Branch:** `step4/v2-native-runtime` (from `main`)
**Dependencies:** Steps 0–3 merged; V2 config, schema IR, and TS host contract in place.

---

## Goal

Replace the V1 single-bridge, dual-QObject native runtime with a flag-gated V2 multi-instance runtime. After this step, `runtime: "v2"` can drive a real native runtime with:

- Single QObject per ViewModel (properties + commands + effects + lifecycle on one object)
- Registered QML types via `qmlRegisterType` (process-global, must run before QML loading for that engine)
- Per-engine InstanceRegistry with engine-local unique `instanceId`
- instanceReady semantics: QML-originated inbound events queued until TS confirms ready
- Per-instance routing for commands, property changes, effects, lifecycle
- 9 V2 N-API exports matching the Step 3 `V2NativeBindings` TypeScript contract
- V1 runtime path fully preserved

---

## Scope Guard

**This step DOES:**
- Add V2 single-QObject bridge files for known fixture ViewModels (Login, Counter, Search)
- Add V2 dispatch routing layer in qmlts-host-generated
- Add InstanceRegistry, TypeRegistrar, V2 runtime state in qmlts-host
- Add C++ FFI extensions for type registration and property change forwarding
- Add 9 V2 N-API exported functions
- Add V2 Rust unit/integration tests and extend TS integration tests
- Keep V1 runtime path and tests intact

**This step does NOT:**
- Change generated QML text or compiler output
- Change PostProcessor lowering or entry generation
- Add qmldir/.qmltypes generation or library/package behavior
- Add schema-driven native code generation (these are static fixture types)
- Add `compilerSlotKey` to native instance creation events (deferred to compiler integration)

---

## Section 1: V2 Bridge Files (qmlts-host-generated)

Three new cxx-qt bridge files — **static generated V2 fixture types** for current test schemas. Future native codegen will generate the same pattern from ViewModel schemas.

### Type Table

| File | QObject Type | Properties | Command Invokables | Effect Signals | Lifecycle |
|------|-------------|------------|-------------------|----------------|-----------|
| `login_v2.rs` | `LoginViewModelV2` | username (rw, QString), password (rw, QString), isLoading (ro, bool) | `login()` | `loginCompleted(bool)` | onMounted |
| `counter_v2.rs` | `CounterViewModelV2` | count (rw, i32) | *(none)* | *(none)* | *(none)* |
| `search_v2.rs` | `SearchViewModelV2` | query (rw, QString), resultCount (ro, i32) | *(none)* | `searchCompleted(QString, i32)` | *(none)* |

### Common V2 QObject Structure

Each V2 QObject has:

- **`instanceId: i32`** property — engine-local unique, assigned by InstanceRegistry. Value of `-1` means inert/unregistered. All event routing checks `instanceId >= 0` before converting to `u32` for registry lookup. `-1` must never enter InstanceRegistry or V2 event router as `u32`.
- **`owner_id: i32`** — **internal/private**, NOT a QML property. Identifies the engine/router in process-global generated dispatch storage. Assigned during V2ContextGuard/InstanceRegistry initialization alongside instanceId. Missing owner_id means the QObject is inert and events are dropped with a diagnostic.
- **Concrete command invokables** (where applicable) — direct Q_INVOKABLE methods matching the ViewModel schema. Internally delegate to a shared `route_command(self, name, args)` helper for dispatch routing.
- **Lifecycle invokables** (where applicable) — `on_mounted()`, `on_unmounting()`
- **Effect signals** — Qt signal names (`loginCompleted`, `searchCompleted`), not QML handler names
- No `dispatchOwnerId` as a public QML property — routing uses internal `owner_id` + `instanceId`

### Routing Identity Model

- **instanceId** is engine-local unique — the per-engine `InstanceRegistry` assigns it
- **owner_id** identifies the engine/router in process-global generated dispatch storage (V2EventRouter map in `v2_dispatch.rs`)
- The V2 QObject stores `owner_id` **internally** (private Rust field), not as a QML property
- `route_v2_event(owner_id, event)` uses `owner_id` to find the correct host-installed router, and the event contains `instance_id` for per-instance routing within that engine
- Missing `owner_id` (inert QObject, `instanceId == -1`): events are dropped with a diagnostic log

### Registration Model

Instance registration is **explicit**, orchestrated by qmlts-host:

- qmlts-host owns per-engine `InstanceRegistry`
- Before QML loading, the engine sets a managed V2 context via an **RAII `V2ContextGuard`**
- The guard is scoped to the `loadString`/`loadFile` call
- Auto-cleared on scope exit (including panics)
- V2 QObject's `cxx_qt::Initialize` reads this context to register
- Missing context → warning log, instance gets `instanceId = -1` (inert, no V2 routing)
- **Tests required:** correct registration, missing context, double-init, nested creation

### What These Are

These files are **static generated fixture bridge files for current test schemas**. They are not hand-written permanent app-specific files. Future native codegen will generate the same single-QObject pattern from compiler schema output.

---

## Section 2: V2 Dispatch System (qmlts-host-generated)

New file: `v2_dispatch.rs` — thin routing layer. Does NOT own delivery policy.

### Boundary Principle

- `qmlts-host-generated` handles **type-specific event construction** only
- `qmlts-host` owns **delivery policy** (ready gate, queuing, handler invocation)

### V2Event Enum

```rust
pub enum V2Event {
    Command { instance_id: u32, class_name: String, command_name: String, args_json: String },
    Lifecycle { instance_id: u32, class_name: String, event: String },
    PropertyChanged { instance_id: u32, prop_name: String, value_json: String },
    InstanceCreated { instance_id: u32, class_name: String },
    InstanceDestroying { instance_id: u32, class_name: Option<String> },
}
```

### Router Interface

```rust
pub type V2EventRouter = Arc<dyn Fn(V2Event) + Send + Sync>;

pub fn set_v2_router(owner_id: usize, router: V2EventRouter);
pub fn clear_v2_router(owner_id: usize);
pub fn route_v2_event(owner_id: usize, event: V2Event);
```

- Host-installed `V2EventRouter` implementation encapsulates ready gate, queue management, and JS handler delivery
- Generated V2 QObjects call `route_v2_event(owner_id, event)` which looks up the installed router
- Stale `owner_id` (no router found) → log warning, event dropped safely
- `clear_v2_router(owner_id)` called on engine shutdown
- V1 `dispatch.rs` remains unchanged

### Event Flow

```
QML method call → cxx-qt bridge → route_v2_event(owner_id, event) → host-installed router → ready gate → JS handler
```

---

## Section 3: V2 Bridge Descriptors & Type Registration

### V2BridgeDescriptor (qmlts-host-generated)

```rust
pub struct V2BridgeDescriptor {
    pub class_name: &'static str,
    pub schema_json: &'static str,
    pub register_type: fn(uri: &str, major: i32, minor: i32, qml_name: &str) -> Result<i32, String>,
}

pub fn v2_descriptors() -> &'static [V2BridgeDescriptor];
```

- `register_type` is a safe Rust function wrapping the unsafe C++ FFI call internally
- Returns `Ok(type_id)` on success (Qt's registration ID), `Err(message)` on failure
- Validates inputs (null/empty URI/name) before calling Qt
- `qml_name` parameter allows custom QML type names (e.g., registering class "LoginViewModelV2" as QML type "LoginViewModel")
- `schema_json` is for diagnostics/tests/contract validation only, not dynamic QObject generation

### C++ Type Registration (factories_v2.cpp)

```cpp
extern "C" int qmlts_register_login_v2(const char* uri, int major, int minor, const char* qml_name);
extern "C" int qmlts_register_counter_v2(const char* uri, int major, int minor, const char* qml_name);
extern "C" int qmlts_register_search_v2(const char* uri, int major, int minor, const char* qml_name);
```

- Each calls `qmlRegisterType<T>(...)` for the corresponding V2 QObject type
- Returns `>= 0` (Qt type ID) on success, `< 0` on error

### TypeRegistrar (qmlts-host)

New file: `type_registrar.rs`

**Process-global `TypeRegistrationRegistry`:**
- Records successful registrations by `(moduleUri, major, minor, qmlName, className)`
- Ensures idempotency and detects conflicts

**Engine-local V2 state:**
- Records which modules this engine requested
- Tracks whether QML loading has started

**Duplicate/conflict rules:**
- Same descriptor registered again with exact same `(moduleUri, version, qmlName)` → idempotent (no-op)
- Unknown typeName → error
- Same `(qmlName, moduleUri, version)` mapped to a different descriptor → error
- `registerModule` after QML load started for that engine → error
- `registerModule` takes an engine handle; type registration must run **before QML loading/component creation** for that engine (the Qt `qmlRegisterType` itself is process-global)

---

## Section 4: InstanceRegistry & instanceReady Queue (qmlts-host)

New file: `instance_registry.rs` — per-engine, owned by QmltsEngine.

### InstanceEntry (internal, private)

```rust
struct InstanceEntry {
    instance_id: u32,
    class_name: String,
    qobject_ptr: *mut c_void,    // PRIVATE — non-owning, never exposed publicly
    ready: bool,
    pending_queue: VecDeque<V2Event>,
}
```

### InstanceRegistry

```rust
pub struct InstanceRegistry {
    instances: HashMap<u32, InstanceEntry>,
    next_id: u32,             // monotonic counter, engine-local
    max_queue_depth: usize,   // default 1000
}
```

### Public API (typed operations, no raw pointers)

- `allocate_instance(class_name: &str, qobject_ptr: *mut c_void) -> u32` — assigns next ID, creates not-ready entry
- `mark_ready(instance_id: u32) -> Result<Vec<V2Event>>` — marks ready, returns queued events
- `remove_instance(instance_id: u32) -> Option<(String, Vec<V2Event>)>` — removes entry, returns class_name and dropped events
- `sync_property(instance_id: u32, prop_name: &str, value_json: &str) -> Result<()>` — writes property on QObject (suppress guard)
- `sync_properties(instance_id: u32, properties_json: &str) -> Result<()>` — batch property sync
- `emit_effect(instance_id: u32, effect_name: &str, payload_json: Option<&str>) -> Result<()>` — emits signal on QObject
- `is_ready(instance_id: u32) -> bool`
- `get_class_name(instance_id: u32) -> Option<&str>`
- `enqueue_event(instance_id: u32, event: V2Event) -> Result<()>` — appends to queue

### Thread Model

- InstanceRegistry is behind `Mutex<>` in engine state
- QObject access happens **only on the Qt/GUI thread**
- N-API `ThreadsafeFunction` marshals from Qt thread → JS thread
- Registry mutation under lock; QObject operations validated to be on correct thread

### instanceReady Flow

1. QML instantiates V2 QObject → `Initialize` → registers with InstanceRegistry
2. InstanceCreated event **delivered immediately** to TS (not blocked by ready gate)
3. TS creates ViewModel instance, syncs initial state
4. **syncStateV2 / syncStateBatchV2 allowed on unready instances** (outbound TS→QML)
5. TS calls `instanceReady(instanceId)`
6. `mark_ready()` returns queued events; engine delivers them in FIFO order

### Event Queuing Semantics

| Event Type | Before instanceReady | After instanceReady |
|-----------|---------------------|-------------------|
| InstanceCreated | Delivered immediately | N/A (occurs once) |
| InstanceDestroying | Delivered immediately | Delivered immediately |
| Command | **Queued** | Delivered immediately |
| PropertyChanged | **Queued** | Delivered immediately |
| Lifecycle | **Queued** | Delivered immediately |

### Edge Cases

- `mark_ready` on unknown instanceId → error
- `mark_ready` on already-ready instance → idempotent (no-op, returns empty vec)
- `allocate_instance` at u32::MAX → error with diagnostic (no ID reuse within engine lifetime)
- Queue overflow (exceeds `max_queue_depth`) → `V2QueueOverflow` error, event rejected (instance NOT poisoned; subsequent events within limit still accepted)
- Destroy-before-ready → `remove_instance` drops queued events, diagnostic log emitted
- Stale instanceId after removal → `None`/error on all operations

### instanceId Type Boundary

- QML property `instanceId` is `i32` with `-1` meaning inert/unregistered
- InstanceRegistry and V2Event use `u32` internally
- All event routing checks `instanceId >= 0` before converting `i32` → `u32`
- `instanceId == -1` must never enter the registry or router as `u32`
- V2 QObject command/lifecycle methods check `instanceId >= 0` before calling `route_v2_event`; if `-1`, events are silently dropped with diagnostic

### Ownership Model

- `qobject_ptr` is **non-owning** — QML engine controls QObject lifetime
- InstanceRegistry is notified of destruction via `InstanceDestroying` event
- After `remove_instance`, any further operations on that instanceId return error
- No callback fires after instance removal or engine shutdown

---

## Section 5: C++ FFI Extensions

### Type Registration (factories_v2.cpp)

```cpp
// Per-type qmlRegisterType wrappers
extern "C" int qmlts_register_login_v2(const char* uri, int major, int minor, const char* qml_name);
extern "C" int qmlts_register_counter_v2(const char* uri, int major, int minor, const char* qml_name);
extern "C" int qmlts_register_search_v2(const char* uri, int major, int minor, const char* qml_name);
```

- Return `>= 0` (Qt type ID) on success, `< 0` on error
- Validate uri/qml_name before calling Qt
- Type-specific — linked against cxx-qt generated C++ headers

### Property Change Forwarding (qt_context.cpp)

**Schema-driven forwarding** — only forward schema-declared state properties:
- Only connect notify signals for properties named in the V2 schema
- Skip internal Qt/cxx-qt properties (objectName, instanceId, etc.)
- Respect readonly semantics — readonly properties may skip forwarding

```cpp
extern "C" bool qmlts_v2_connect_property_forwarder(
    void* qobject_ptr,
    int instance_id,
    int owner_id,
    const char* property_names_json  // JSON array of schema property names to monitor
);
```

**Callback to Rust:**
```c
extern "C" void qmlts_v2_on_property_changed(
    int owner_id,
    int instance_id,
    const char* prop_name,
    const char* value_json
);
```

**QVariant→JSON serialization** — Step 4 supported types:
- `bool` → JSON boolean
- `int`, `double` → JSON number
- `QString` → JSON string
- Unsupported QVariant types → clear diagnostic error (not silent)

### Suppress Mechanism

RAII scoped — Rust `SuppressGuard` guarantees cleanup via `Drop`:

```rust
struct SuppressGuard { ptr: *mut c_void }
impl SuppressGuard {
    fn new(ptr: *mut c_void) -> Self {
        unsafe { qmlts_v2_set_suppress_notifications(ptr, true); }
        Self { ptr }
    }
}
impl Drop for SuppressGuard {
    fn drop(&mut self) {
        unsafe { qmlts_v2_set_suppress_notifications(self.ptr, false); }
    }
}
```

### PropertyChangeForwarder Lifetime

- C++ forwarder object **parented to the QObject** (Qt ownership model)
- Automatically destroyed when QObject is destroyed
- No stale callback after instance removal (Qt parent-child cleanup)

### Thread Affinity

All QObject property reads/writes and signal connections happen **on the Qt GUI thread**. All C++ FFI functions document their thread affinity requirement. N-API calls that need Qt thread access are marshaled if needed.

### Ownership Boundary

- `qt_context.cpp` — generic Qt helpers only
- `factories_v2.cpp` — type-specific registration wrappers and V2 factories (in qmlts-host-generated)
- V1 C++ code unchanged

---

## Section 6: V2 N-API Exports (qmlts-host/exports.rs)

Nine new `#[napi]` functions matching `V2NativeBindings`:

| N-API Function | Callback Signature (positional, error-first) | Behavior |
|---|---|---|
| `registerModule(engine, uri, major, minor, typeNames[])` | *(no callback)* | Validates pre-load, registers types process-globally |
| `syncStateV2(engine, instanceId, propName, valueJson)` | *(no callback)* | Scoped suppress, does NOT require instance ready |
| `syncStateBatchV2(engine, instanceId, propertiesJson)` | *(no callback)* | Single suppress scope for batch |
| `emitEffectV2(engine, instanceId, effectName, payloadJson?)` | *(no callback)* | Validates instance exists |
| `instanceReady(engine, instanceId)` | *(no callback)* | Marks ready, flushes queue FIFO |
| `registerInstanceCreatedHandler(engine, cb)` | `(err, className, instanceId)` | Stores in engine V2 state |
| `registerInstanceDestroyingHandler(engine, cb)` | `(err, instanceId)` | Matches v2-types.ts; TS looks up className from instance records |
| `registerPropertyChangedHandler(engine, cb)` | `(err, instanceId, propName, valueJson)` | instance_id sufficient for TS lookup |
| `registerCommandDispatcherV2(engine, cb)` | `(err, instanceId, vmClass, commandName, argsJson)` | Per-instance command routing |

### V2 Runtime Mode

- Explicit `v2_enabled: bool` flag on `QmltsEngine`
- Set via `initV2Runtime()` internal method or on first `registerModule()` call
- V2 N-API calls before V2 init → clear "V2 not enabled" error
- TS-side config validation is supplementary, not the sole gate

### Validation (common to all V2 functions)

- Engine must be alive
- Engine must be in V2 runtime mode
- Instance-specific functions validate instanceId exists in registry
- syncStateV2 does NOT require instance ready (outbound TS→QML always allowed)
- Inbound QML→TS events queued if instance not ready

### InstanceCreated Native Payload

- Step 4 sends: `className`, `instanceId`
- `compilerSlotKey` is explicitly **undefined** in Step 4 (deferred to compiler/build integration)

### FIFO Delivery Order

- `instanceReady` flushes queued events to the same `ThreadsafeFunction` in FIFO order
- No parallel delivery for one instance
- Tests assert command/property/lifecycle flush ordering

### mock-qt Feature

All 9 functions get mock implementations:
- Mock preserves semantic behavior (queue, ready gate, routing, cleanup)
- Mock tests cover: V2-not-enabled errors, unknown instance errors, pre-ready queue, flush order, destroy-before-ready cleanup, sync-before-ready allowed

---

## Section 7: Testing Strategy

### A. Rust Unit Tests (in-module `#[cfg(test)]`)

| Module | Coverage |
|--------|----------|
| `v2_dispatch.rs` | Router registration/routing, stale owner_id, clear on shutdown |
| `type_registrar.rs` | Registration idempotency, conflicting registration error, unknown type |
| `instance_registry.rs` | Allocate ID, mark_ready + flush, queue ordering, overflow, destroy-before-ready, mark_ready unknown/already-ready, ID wraparound |

### B. Rust Integration Tests

| Test | What It Covers | Requirement |
|------|---------------|-------------|
| `v2_bridge_integration.rs` | Full V2 lifecycle: registerModule → loadQML → instanceCreated → syncState → instanceReady → command → effect → destroy | Real Qt |
| `bridge_integration.rs` | Existing V1 tests — behavior/assertions unchanged | Real Qt |

### C. Required Test Scenarios

**Runtime gating:**
- V2 N-API functions fail clearly when V2 not initialized
- registerModule with unknown type names fails
- registerModule after QML load fails

**Sync-before-ready:**
- instanceCreated fires
- syncStateV2/syncStateBatchV2 can update unready instance
- inbound QML→TS events queued until instanceReady
- queued events flush FIFO after ready

**Multi-instance isolation:**
- Two instances of the same ViewModel class
- Command from instance A routes only to A
- Property change from B routes only to B
- syncStateV2(A) does not update B
- Effect emission for A does not fire on B

**Module registration at N-API level:**
- Same module/type registration is idempotent
- Unknown type name fails
- Conflicting URI/version/name mapping fails
- registerModule after QML load fails

**Cleanup/leak resistance:**
- clear_v2_router on engine shutdown
- InstanceRegistry removes destroyed instances
- Queued events dropped on destroy-before-ready
- Stale owner_id / stale instanceId calls fail safely
- Callbacks not invoked after shutdown

### D. TypeScript Integration Tests

| Test File | Extensions |
|-----------|-----------|
| `tests/host/qmlts-host.test.ts` | TH-41+ tests: V2 functions exist when V2 native built |
| `tests/host/viewmodel-manager.test.ts` | TV-15+ tests: V2 instance round-trip through real native |
| `tests/host/v2-host-contract.test.ts` | Existing mock-based tests unchanged |

### E. V1 Preservation

- V1 behavior and assertions remain unchanged
- V1 tests not rewritten to hide regressions
- Minor build/harness updates acceptable if required by shared native setup

### F. CI Reality

- Real-Qt integration tests feature-gated or skipped based on CI capability
- mock-qt must cover core V2 semantics: ready queue, routing, cleanup, registration validation

---

## Section 8: File Map

### qmlts-host-generated crate

| File | Action | Purpose |
|------|--------|---------|
| `src/login_v2.rs` | Create | V2 single-QObject fixture bridge for LoginViewModel |
| `src/counter_v2.rs` | Create | V2 single-QObject fixture bridge for CounterViewModel |
| `src/search_v2.rs` | Create | V2 single-QObject fixture bridge for SearchViewModel |
| `src/v2_dispatch.rs` | Create | Thin V2 event routing layer (V2Event enum, host-installed router) |
| `src/lib.rs` | Modify | Add V2 modules, V2BridgeDescriptor, v2_descriptors() |
| `cpp/factories_v2.cpp` | Create | V2 qmlRegisterType wrappers + V2 factory helpers |
| `build.rs` | Modify | Add V2 bridge files and factories_v2.cpp |
| `Cargo.toml` | Modify | Dependencies/features if needed |

### qmlts-host crate

| File | Action | Purpose |
|------|--------|---------|
| `src/instance_registry.rs` | Create | Per-engine InstanceRegistry, ready queue, instance lifecycle |
| `src/type_registrar.rs` | Create | Type registration orchestrator, process-global registry state |
| `src/v2_runtime.rs` | Create | V2ContextGuard, V2 event router implementation, engine V2 state |
| `src/engine.rs` | Modify | Add V2 state to QmltsEngine, V2 init, V2 context guard around QML load |
| `src/exports.rs` | Modify | Add 9 V2 N-API exported functions |
| `src/error.rs` | Modify | Add V2-specific error variants |
| `src/lib.rs` | Modify | Declare new modules |
| `src/qt_context.rs` | Modify | Add V2 FFI wrappers |
| `cpp/qt_context.cpp` | Modify | Add V2 property change forwarding + suppress mechanism |
| `tests/v2_bridge_integration.rs` | Create | Full V2 lifecycle integration tests |
| `Cargo.toml` | Modify | Dependencies/features if needed |

### TypeScript (native/npm/qmlts-host)

| File | Action | Purpose |
|------|--------|---------|
| `tests/host/qmlts-host.test.ts` | Modify | Extend V2 integration tests |
| `tests/host/viewmodel-manager.test.ts` | Modify | Extend V2 instance tests |
| `src/v2-types.ts` | Possibly modify | If native callback signatures need Step 3 alignment |
| Package build wiring | Inspect | Verify .node exports match updated native symbols |

### Build/Config Files

| File | Action | Purpose |
|------|--------|---------|
| `native/crates/qmlts-host-generated/Cargo.toml` | Modify | New dependencies/features if needed |
| `native/crates/qmlts-host/Cargo.toml` | Modify | New dependencies/features if needed |
| Workspace `Cargo.lock` | Auto-updated | Dependency resolution |

### Unchanged (V1 preserved)

- All V1 bridge files (login_view_model.rs, counter_view_model.rs, search_view_model.rs)
- All V1 runtime files (login_runtime.rs, counter_runtime.rs, search_runtime.rs)
- dispatch.rs (V1 dispatch)
- V1 behavior and assertions in existing tests unchanged
- Minor build/harness updates acceptable if required by shared native setup

### mock-qt Implementations

Mock implementations live behind `#[cfg(feature = "mock-qt")]` inside the new modules (instance_registry, type_registrar, v2_runtime). No separate mock files unless the existing crate pattern requires them.
