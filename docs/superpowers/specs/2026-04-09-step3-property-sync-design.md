# Step 3: Property Synchronization and TypeScript Runtime Layer

## Problem Statement

The QmlTS Rust host (Step 2) can register generated bridge-backed QObject types and expose `vm` / `__qmlts` to QML. However, no mechanism exists to synchronize TypeScript ViewModel state into Qt properties. Until state synchronization works, QML bindings like `vm.username` resolve to default values only.

Step 3 closes this gap by implementing property sync (`syncState`, `syncStateBatch`, `getProperty`), schema-aware type conversion, and the TypeScript runtime wrapper layer (`QmltsHost` + `ViewModelManager`).

## Approved Design Decisions

| # | Decision | Choice |
|---|----------|--------|
| D1 | Schema location | Embedded in generated crate — `BridgeDescriptor.schema_json: &'static str` |
| D2 | FFI structure | Hybrid — type-specific FFI for string/bool/int/double + generic JSON for complex types |
| D3 | readonly semantics | QML-facing contract only — host always has full write access |
| D4 | Batch error behavior | Best-effort with error collection — attempt all, collect failures |
| D5 | Type mapping | Compiler-emitted `qmlType` names from `.schema.json` |
| D6 | TS layer scope | Full `QmltsHost` + `ViewModelManager`, both tested |
| D7 | TS layer boundaries | `ViewModelManager` depends only on `className` + `states[].{name, deferred}` — no command/effect/lifecycle coupling |
| D8 | `unregister()` scope | TS-side only — removes tracking, does NOT remove native bridge |
| D9 | No `initialize()` | Constructor creates engine directly; no separate lifecycle step |

---

## Section 1: Rust Property Sync Layer

### New module: `property_sync.rs`

Three public functions operating on a raw `*mut c_void` bridge pointer and a parsed schema:

```rust
pub fn sync_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
    value: &serde_json::Value,
) -> Result<(), QmltsError>

pub fn sync_batch(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    state_map: &serde_json::Map<String, serde_json::Value>,
) -> Result<(), QmltsError>

pub fn read_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
) -> Result<serde_json::Value, QmltsError>
```

### Schema types

Added to `qmlts-host-generated/src/lib.rs`:

```rust
#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ViewModelSchema {
    pub class_name: String,
    pub version: u32,
    pub states: Vec<SchemaState>,
    pub commands: Vec<SchemaCommand>,
    pub effects: Vec<SchemaEffect>,
    pub lifecycle: SchemaLifecycle,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaState {
    pub name: String,
    pub qml_name: String,
    pub qml_type: String,
    pub member_id: u32,
    pub readonly: bool,
    pub deferred: bool,
    pub default_value: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaCommand {
    pub name: String,
    pub qml_name: String,
    pub command_id: u32,
    pub parameters: Vec<serde_json::Value>,
    pub r#async: bool,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaEffect {
    pub name: String,
    pub qml_name: String,
    pub effect_id: u32,
    pub parameters: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaLifecycle {
    pub on_mounted: bool,
    pub on_unmounting: bool,
    pub hot_reload: bool,
}
```

SchemaCommand, SchemaEffect, and SchemaLifecycle are deserialized for schema completeness but unused in Step 3.

### BridgeDescriptor extension

```rust
pub struct BridgeDescriptor {
    pub class_name: &'static str,
    pub create_fn: fn() -> *mut c_void,
    pub destroy_fn: fn(*mut c_void),
    pub schema_json: &'static str, // NEW
}
```

Each generated module provides its schema JSON as a `const &str`. The engine parses it at `register_view_model()` time.

### Engine changes

- New field: `active_schema: Option<ViewModelSchema>` — set alongside `active_bridge` during registration
- `sync_state(prop_name, json_value)` — delegates to `property_sync::sync_one`
- `sync_state_batch(json_map)` — delegates to `property_sync::sync_batch`
- `get_property(prop_name)` — delegates to `property_sync::read_one`

### Type-specific C++ FFI additions to `qt_context.cpp` / `qt_context.rs`

Write functions:
- `qmlts_set_string_property(obj: *mut c_void, name: *const c_char, value: *const c_char)`
- `qmlts_set_int_property(obj: *mut c_void, name: *const c_char, value: i32)`
- `qmlts_set_double_property(obj: *mut c_void, name: *const c_char, value: f64)`
- `qmlts_set_bool_property(obj: *mut c_void, name: *const c_char, value: bool)`
- `qmlts_set_property_json(obj: *mut c_void, name: *const c_char, json: *const c_char)` — for complex types

Read functions:
- `qmlts_read_string_property(obj: *mut c_void, name: *const c_char) -> *mut c_char`
- `qmlts_read_bool_property(obj: *mut c_void, name: *const c_char) -> bool`
- `qmlts_read_double_property(obj: *mut c_void, name: *const c_char) -> f64`
- `qmlts_read_int_property` — already exists

Internal only:
- `qmlts_free_string(ptr: *mut c_char)` — frees strings returned by `read_string_property`. Internal Rust↔C++ FFI detail, never exposed to JS/N-API.

### Type dispatch logic (in `property_sync.rs`)

Lookup the property in `schema.states` by name. Match on `state.qml_type`:

| `qmlType` | JSON type expected | FFI call | Qt type |
|---|---|---|---|
| `"string"` | string | `set_string_property` | QString |
| `"bool"` | boolean | `set_bool_property` | bool |
| `"int"` | number | `set_int_property` | int (i32) |
| `"real"` | number | `set_double_property` | double (f64) |
| `"date"` | string (ISO 8601) | `set_property_json` | QDateTime |
| `"list<*>"` | array | `set_property_json` | QVariantList |

For reads, reverse mapping: call the type-specific read function, wrap result as `serde_json::Value`.

### readonly handling

The `readonly` flag is NOT checked during sync. It is a QML-facing contract only. The host has full write access to all properties, including readonly ones like `isLoading`.

### Batch error behavior

`sync_batch` iterates all entries in the state map. For each entry:
- Look up the property in the schema
- Attempt the type-dispatched write
- If it fails, record the error and continue

After all entries are processed:
- If no errors: return `Ok(())`
- If errors: return a combined `QmltsError` listing all failed properties

---

## Section 2: TypeScript Runtime Layer

### QmltsHost class (`native/npm/qmlts-host/src/qmlts-host.ts`)

Wraps the low-level N-API bindings into a typed, ergonomic API.

```typescript
export class QmltsHost {
    private engine: NativeEngine | null;

    constructor(config?: EngineConfig);
    get isInitialized(): boolean;

    registerViewModel(className: string): void;
    syncState(className: string, propertyName: string, value: unknown): void;
    syncStateBatch(className: string, state: Record<string, unknown>): void;
    getProperty(className: string, propertyName: string): unknown;

    loadQml(source: string): void;
    loadFile(filePath: string): void;
    processEvents(maxMs?: number): void;
    dispose(): void;
}
```

- Constructor calls `createEngine(config)` immediately — no separate `initialize()`.
- `dispose()` calls `destroyEngine()` and sets engine handle to `null`.
- All methods throw if engine is disposed.

### N-API exports to add (`exports.rs`)

```rust
#[napi]
fn sync_state(class_name: String, property_name: String, json_value: String) -> Result<()>

#[napi]
fn sync_state_batch(class_name: String, json_state_map: String) -> Result<()>

#[napi]
fn get_property(class_name: String, property_name: String) -> Result<String>
```

JSON serialization/deserialization happens at the N-API boundary. The TS layer serializes values to JSON strings before calling native; native returns JSON strings that the TS layer deserializes.

### ViewModelManager class (`native/npm/qmlts-host/src/viewmodel-manager.ts`)

Manages TypeScript ViewModel instances and their synchronization.

```typescript
export class ViewModelManager {
    private host: QmltsHost;
    private registrations: Map<string, { schema: ViewModelSchema; instance: unknown }>;

    constructor(host: QmltsHost);

    register<T extends object>(schema: ViewModelSchema, instance: T): void;
    sync(className: string): void;
    syncAll(): void;
    getProperty<T>(className: string, propertyName: string): T;
    unregister(className: string): void;

    get count(): number;
    get classNames(): string[];
}
```

**Boundary rules (Step 3):**
- `ViewModelManager` depends only on `schema.className` and `schema.states[].{name, deferred}`.
- It does NOT touch `commands`, `effects`, or `lifecycle`. Those are later-step concerns.

**`register(schema, instance)`:**
1. Store `{schema, instance}` in the internal Map keyed by `schema.className`
2. Call `host.registerViewModel(schema.className)` to create the native bridge
3. Call `sync(schema.className)` to push initial state

**`sync(className)`:**
1. Look up the registration by className
2. Filter `schema.states` to only non-deferred states
3. For each declared state, read `instance[state.name]`
4. Call `host.syncStateBatch(className, stateMap)`
5. Does NOT enumerate arbitrary instance fields — only schema-declared states

**`unregister(className)`:**
- Removes the registration from the internal Map
- Does NOT remove the native bridge from the engine
- TS-side cleanup only

---

## Section 3: Testing Strategy

### Rust unit tests (`property_sync.rs`, `--features mock-qt`)

- Schema parsing from JSON: valid, invalid, missing fields
- Property lookup: found → ok, not found → `PropertyNotFound` error
- Type conversion: string→QString, bool→bool, int→i32, real→f64
- Type mismatch: wrong JSON type for declared qmlType → `TypeMismatch` error
- Batch sync: all succeed, partial failure with error collection
- readonly: host CAN write readonly properties (no enforcement)

### Rust integration tests (real Qt, `bridge_integration.rs`)

**Observable value assertion pattern:**
Tests use a helper QML snippet that assigns `vm.propName` into a `Text.text` binding. After sync, the test reads back the bound Text element's value through Qt's property system to prove the property propagated through the Qt binding system — not just that `setProperty` returned true.

**Specific tests:**
1. `sync_state` writes a string → QML-bound Text reads the updated value
2. `sync_state` writes an int → QML-bound Text reads the updated value
3. `sync_state` writes a bool → QML-bound Text reads the updated value
4. `sync_state_batch` writes multiple properties → all readable from QML
5. `get_property` round-trip: sync → read back → values match
6. Property not found: sync unknown property → `PropertyNotFound` error
7. Type mismatch: sync wrong type → `TypeMismatch` error
8. **Batch partial-failure**: sync one valid + one unknown property. Assert: valid property IS written (readable back), AND error reports the failed property.
9. **Golden fixture test**: sync state into LoginViewModel → load exact file `tests/compiler/pipeline/fixtures/golden/LoginView.qml` → read back bound values to verify `vm.*` bindings resolve correctly.

### TypeScript/N-API tests (`tests/host/napi-bindings.test.ts`)

1. `syncState` writes a property → `getProperty` reads matching value (behavioral, not just no-crash)
2. `syncStateBatch` writes multiple properties → all readable back
3. Error: unknown property name → error message
4. Error: type mismatch → error message
5. Error: unknown ViewModel → error message
6. QmltsHost class: construction → syncState → getProperty round-trip → dispose
7. **ViewModelManager schema-only sync test**: register an instance with extra fields beyond the schema (e.g., `_internalHelper`, `computedValue`). Call `sync()`. Assert via `getProperty` that only schema-declared state fields were synced, extra fields were NOT written.
8. ViewModelManager register → sync → round-trip getProperty

---

## Files Changed

### New files
- `native/crates/qmlts-host/src/property_sync.rs` — property sync logic
- `native/npm/qmlts-host/src/qmlts-host.ts` — QmltsHost wrapper class
- `native/npm/qmlts-host/src/viewmodel-manager.ts` — ViewModelManager class

### Modified files
- `native/crates/qmlts-host/src/lib.rs` — add `mod property_sync`
- `native/crates/qmlts-host/src/engine.rs` — add `active_schema`, sync/read methods
- `native/crates/qmlts-host/src/exports.rs` — add N-API sync/read exports
- `native/crates/qmlts-host/src/qt_context.rs` — add FFI declarations
- `native/crates/qmlts-host/cpp/qt_context.cpp` — add C++ FFI implementations
- `native/crates/qmlts-host-generated/src/lib.rs` — add `schema_json` to `BridgeDescriptor`, add schema types
- `native/npm/qmlts-host/src/index.ts` — re-export new classes
- `native/npm/qmlts-host/src/types.ts` — add new type declarations
- `native/npm/qmlts-host/index.d.ts` — add new exports
- `native/npm/qmlts-host/index.js` — add new exports
- `native/crates/qmlts-host/tests/bridge_integration.rs` — add property sync integration tests
- `tests/host/napi-bindings.test.ts` — add TS behavioral tests

### Not modified
- `native/crates/qmlts-host/src/bridge_registry.rs` — no changes needed
- `native/crates/qmlts-host/src/error.rs` — already has `PropertyNotFound` and `TypeMismatch` variants
- Generated bridge modules (`login_view_model.rs`, `counter_view_model.rs`) — no changes needed
