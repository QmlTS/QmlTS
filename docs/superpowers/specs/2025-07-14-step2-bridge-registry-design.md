# Step 2: Generated Bridge Crate & Bridge Registry Integration

**Date:** 2025-07-14
**Status:** Draft
**Branch:** `step-2/bridge-registry`

## Problem

The QmlTS Rust host (Step 1) provides a bootstrap engine shell with napi-rs exports but no actual cxx-qt bridge types. The compiler-generated QML depends on two context properties—`vm` (ViewModel properties) and `__qmlts` (runtime: command dispatch, lifecycle, effect signals)—that do not yet exist in the host.

Step 2 must:

1. Create a `qmlts-host-generated` crate with real cxx-qt bridge QObjects for fixture ViewModels.
2. Build a bridge registry that maps ViewModel class names to factory functions.
3. Wire the generated QObject pairs into the QML engine as context properties.
4. Prove end-to-end that the host satisfies the compiler's `vm`/`__qmlts` contract.

## Architecture

### Crate Structure

```
native/
├── Cargo.toml                        # workspace: adds qmlts-host-generated member
├── crates/
│   ├── qmlts-host/                   # runtime crate (cdylib)
│   │   ├── Cargo.toml                # adds dep on qmlts-host-generated
│   │   ├── build.rs                  # napi-build + cxx-qt-build for Qt context shim
│   │   ├── cpp/
│   │   │   └── qt_context.cpp        # C++ shim: setContextProperty, loadData
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── engine.rs             # enhanced: registry + context properties
│   │       ├── exports.rs            # new napi exports
│   │       ├── error.rs              # adds BridgeTypeNotFound variant
│   │       ├── bridge_registry.rs    # type registration + lookup
│   │       └── qt_context.rs         # extern "C" FFI to Qt context shim
│   └── qmlts-host-generated/         # generated bridge crate (rlib)
│       ├── Cargo.toml
│       ├── build.rs                  # cxx-qt-build for bridge QObjects
│       └── src/
│           ├── lib.rs                # re-exports + BridgeInstance/BridgeDescriptor
│           ├── login_view_model.rs   # cxx-qt bridge: vm for LoginViewModel
│           ├── counter_view_model.rs # cxx-qt bridge: vm for CounterViewModel
│           ├── login_runtime.rs      # cxx-qt bridge: __qmlts for LoginViewModel
│           └── counter_runtime.rs    # cxx-qt bridge: __qmlts for CounterViewModel
```

### Qt Context Shim (in qmlts-host)

`cxx-qt-lib` provides `QQmlApplicationEngine` but not `QQmlContext::setContextProperty()`. A small C++ shim in the host crate bridges this gap.

**build.rs:**

```rust
fn main() {
    napi_build::setup();

    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .qt_module("Qml")
        .cpp_file("cpp/qt_context.cpp")
        .build();
}
```

**cpp/qt_context.cpp** provides `extern "C"` functions:

- `qmlts_create_engine() -> void*` — creates a `QQmlApplicationEngine`, returns opaque pointer
- `qmlts_destroy_engine(engine*)` — destroys the engine
- `qmlts_set_context_property(engine*, name, name_len, obj*)` — wraps `rootContext()->setContextProperty()`
- `qmlts_load_data(engine*, data, data_len, url*, url_len)` — wraps `engine->loadData()`
- `qmlts_load_url(engine*, path*, path_len)` — wraps `engine->load(QUrl::fromLocalFile(path))`

**src/qt_context.rs** declares matching Rust `extern "C"` bindings with safe wrappers. Under `mock-qt`, wrappers become no-ops.

### Bridge QObject Design (vm)

Each fixture ViewModel produces a bridge QObject set as the `vm` context property. QML binds directly to its properties.

**LoginViewModel** (`login_view_model.rs`):

```rust
#[cxx_qt::bridge(cxx_file_stem = "login_view_model")]
pub mod qobject {
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(QString, username)]
        #[qproperty(QString, password)]
        #[qproperty(bool, is_loading, cxx_name = "isLoading")]
        type LoginViewModel = super::LoginViewModelRust;
    }
}

#[derive(Default)]
pub struct LoginViewModelRust {
    username: QString,
    password: QString,
    is_loading: bool,
}
```

**CounterViewModel** (`counter_view_model.rs`):

```rust
#[cxx_qt::bridge(cxx_file_stem = "counter_view_model")]
pub mod qobject {
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, count)]
        type CounterViewModel = super::CounterViewModelRust;
    }
}

#[derive(Default)]
pub struct CounterViewModelRust {
    count: i32,
}
```

Key points:

- Properties use Qt types (`QString` for strings).
- `is_loading` uses `cxx_name = "isLoading"` for QML camelCase.
- No `#[qml_element]` — these are set via context properties, not QML module imports.
- `Default`-constructable for factory instantiation.

### Runtime QObject Design (__qmlts)

Each ViewModel produces a runtime QObject set as the `__qmlts` context property. The compiler-generated QML calls its methods for command dispatch, lifecycle, and listens for effect signals.

**LoginRuntime** (`login_runtime.rs`):

```rust
#[cxx_qt::bridge(cxx_file_stem = "login_runtime")]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        type LoginRuntime = super::LoginRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut LoginRuntime>, command: QVariant);

        #[qinvokable]
        fn on_mounted(self: Pin<&mut LoginRuntime>);

        #[qinvokable]
        fn on_unmounting(self: Pin<&mut LoginRuntime>);
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qsignal]
        fn on_login_completed(self: Pin<&mut LoginRuntime>, success: bool);
    }
}
```

**CounterRuntime** (`counter_runtime.rs`):

```rust
#[cxx_qt::bridge(cxx_file_stem = "counter_runtime")]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        type CounterRuntime = super::CounterRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut CounterRuntime>, command: QVariant);
    }
}
```

Key points:

- `#[auto_cxx_name]` on extern blocks converts `on_mounted` → C++ `onMounted`, `on_login_completed` → C++ `onLoginCompleted`. cxx-qt 0.7+ does NOT auto-convert without this attribute.
- `invoke(QVariant)` handles both `__qmlts.invoke(commandId: number)` and `__qmlts.invoke(methodName: string)` — the compiler emits both patterns.
- `invoke_count` property enables observable test assertions (not tracing-based).
- Signal naming chain: Rust `on_login_completed` → C++ `onLoginCompleted` → QML handler `onOnLoginCompleted`.
- Step 2 `invoke()` bodies increment `invoke_count` and log. Real dispatch wiring comes in Step 3+.

### Bridge Registry

Two layers: the generated crate exports descriptors; the host crate manages them.

**Generated crate types** (no dependency on host):

```rust
// qmlts-host-generated/src/lib.rs

/// Owns a (vm, runtime) QObject pair. Drops both when dropped.
pub struct BridgeInstance {
    _storage: Box<dyn std::any::Any>,
    vm_ptr: *mut std::ffi::c_void,
    runtime_ptr: *mut std::ffi::c_void,
}

impl BridgeInstance {
    pub fn vm_qobject_ptr(&self) -> *mut std::ffi::c_void { self.vm_ptr }
    pub fn runtime_qobject_ptr(&self) -> *mut std::ffi::c_void { self.runtime_ptr }
}

/// Static descriptor: class name + factory function.
pub struct BridgeDescriptor {
    pub class_name: &'static str,
    pub create: fn() -> BridgeInstance,
}

/// Returns all registered bridge descriptors.
pub fn descriptors() -> &'static [BridgeDescriptor] { ... }
```

**Host crate registry:**

```rust
// qmlts-host/src/bridge_registry.rs

pub struct BridgeRegistry {
    factories: HashMap<String, fn() -> BridgeInstance>,
}

impl BridgeRegistry {
    pub fn new() -> Self { ... }
    pub fn load_descriptors(&mut self, descriptors: &[BridgeDescriptor]) { ... }
    pub fn create(&self, class_name: &str) -> Result<BridgeInstance, QmltsError> { ... }
    pub fn has(&self, class_name: &str) -> bool { ... }
    pub fn registered_types(&self) -> Vec<String> { ... }
}
```

**No dependency cycle:** Generated crate defines `BridgeInstance`/`BridgeDescriptor` using only std/cxx types. Host crate imports them. No reverse reference.

**Ownership model:** `BridgeInstance._storage` holds type-erased `Box<(UniquePtr<Vm>, UniquePtr<Runtime>)>`. No `Send` bound — Qt GUI objects are not intended for cross-thread use and the engine is always accessed from the main thread. Raw pointers are borrowed from the storage and only exposed for `setContextProperty()`. When the `BridgeInstance` is dropped, the QObjects are destroyed.

**QObject instantiation:** Generated QObjects are constructed using the cxx-qt-generated constructor pattern. For each bridge type (e.g., `LoginViewModel`), the factory calls the cxx-qt-generated `new()` or default construction function that returns `cxx::UniquePtr<qobject::LoginViewModel>`, passing a `Default`-initialized Rust struct. The raw `QObject*` pointer is extracted from the `UniquePtr` via `.as_mut_raw_ptr()` (or equivalent cxx accessor) for context property wiring, while the `UniquePtr` stays owned inside `BridgeInstance._storage`. The exact construction API will be verified against cxx-qt 0.7 during implementation.

### Engine Enhancements

```rust
pub struct QmltsEngine {
    config: EngineConfig,
    initialized: bool,
    destroyed: bool,
    loaded_components: Vec<String>,

    // New in Step 2:
    engine_ptr: *mut std::ffi::c_void,    // QQmlApplicationEngine* (null in mock-qt)
    registry: BridgeRegistry,
    active_bridge: Option<BridgeInstance>, // singular — one ViewModel at a time
}
```

New method:

```rust
/// Wire a ViewModel's bridge+runtime pair as context properties.
/// Must be called before load_string/load_file.
/// Returns BridgeAlreadyLoaded error if QML has already been loaded.
pub fn register_view_model(&mut self, class_name: &str) -> Result<()> {
    self.ensure_alive()?;
    if !self.loaded_components.is_empty() {
        return Err(QmltsError::BridgeAlreadyLoaded);
    }
    let instance = self.registry.create(class_name)?;

    #[cfg(not(feature = "mock-qt"))]
    {
        qt_context::set_context_property(self.engine_ptr, "vm", instance.vm_qobject_ptr());
        qt_context::set_context_property(self.engine_ptr, "__qmlts", instance.runtime_qobject_ptr());
    }

    self.active_bridge = Some(instance);
    Ok(())
}
```

**Pre-load enforcement:** `register_view_model()` is only valid before the first successful `load_string()` or `load_file()`. After QML has been loaded, calling it returns `BridgeAlreadyLoaded` error. This prevents dangling references to old QObjects in a live QML object tree.

Enhanced `load_string()` / `load_file()`: existing validation stays; adds real Qt engine loading in non-mock mode.

**`load_string()` enhancement:** After validation, calls `qt_context::load_data(engine_ptr, source_bytes, base_url)`. The `base_url` is passed through to `QQmlApplicationEngine::loadData()` as the base URL for resolving relative imports. If `base_url` is `None`, Qt uses a default empty URL.

**`load_file()` enhancement:** After validation, calls `qt_context::load_url(engine_ptr, file_url)` using `QUrl::fromLocalFile(path)`. This ensures the file's parent directory becomes the implicit base URL, so relative QML imports and assets resolve correctly. `load_file()` does NOT read the file into memory and pass it to `loadData()`—it uses Qt's native file loading via `QQmlApplicationEngine::load(QUrl)` to get proper URL semantics.

### Napi Exports

Three new exports following the existing engine-reference pattern:

```rust
#[napi(js_name = "registerViewModel")]
pub fn register_view_model(engine: &mut QmltsEngine, class_name: String) -> Result<()> { ... }

#[napi(js_name = "getRegisteredTypes")]
pub fn get_registered_types(engine: &QmltsEngine) -> Result<Vec<String>> { ... }

#[napi(js_name = "hasBridgeType")]
pub fn has_bridge_type(engine: &QmltsEngine, class_name: String) -> Result<bool> { ... }
```

TypeScript declarations added to `types.ts` and `index.d.ts`.

### Error Type Addition

```rust
// In error.rs
pub enum QmltsError {
    // ... existing variants ...
    #[error("Bridge type not found: {0}")]
    BridgeTypeNotFound(String),
    #[error("Cannot register bridge: QML already loaded")]
    BridgeAlreadyLoaded,
}
```

## Test Plan

### Layer 1: Rust unit tests (mock-qt)

Run via `cargo test --features mock-qt`.

- **bridge_registry**: create registry, load descriptors, verify types list; `create()` returns valid instance; unknown type returns `BridgeTypeNotFound`; multiple `create()` calls return independent instances.
- **engine**: `register_view_model()` sets active bridge; `register_view_model()` after `load_string()` returns `BridgeAlreadyLoaded` error; operations fail after destroy.

### Layer 2: Rust integration tests (real Qt)

Run via `cargo test` (no features). Requires Qt.

**In qmlts-host-generated** (`tests/bridge_qobject.rs`):

- Instantiate `LoginViewModel`, set/get `username` property.
- Instantiate `LoginRuntime`, call `invoke(QVariant(123))`, assert `invoke_count == 1`.
- Instantiate `CounterViewModel`, verify `count` default is 0.

**In qmlts-host** (`tests/bridge_integration.rs`):

- Create engine, register LoginViewModel, load minimal QML binding `vm.username` — no errors.
- Create engine, register CounterViewModel, load QML binding `vm.count` — no errors.
- **Golden QML test**: Load actual compiler-produced fixture QML output, verify it loads without errors against the registered bridge.
- Invoke test: register LoginViewModel, load QML that calls `__qmlts.invoke(927957157)` in `Component.onCompleted`, process events, read `invokeCount` property → assert `== 1`.

### Layer 3: TypeScript tests

Extends `tests/host/napi-bindings.test.ts`:

- `registerViewModel(engine, "LoginViewModel")` succeeds.
- `registerViewModel(engine, "UnknownType")` throws `BridgeTypeNotFound`.
- `getRegisteredTypes(engine)` returns expected list.
- `hasBridgeType(engine, "LoginViewModel")` → true.
- **End-to-end smoke**: `registerViewModel(engine, "CounterViewModel")` + `loadString(engine, qml_using_vm_count)` succeeds.

## CI Changes

Add one step before the existing `cargo test --all-features`:

```yaml
- name: Run Rust integration tests (real Qt)
  run: cargo test --manifest-path native/Cargo.toml
  env:
    QT_DIR: ${{ env.QT_ROOT_DIR }}
    QT_QPA_PLATFORM: offscreen
```

The existing `cargo test --all-features` step continues to run mock-qt tests. The `bun run test:ci` step picks up new TypeScript tests automatically.

## Branch & PR

- Branch: `step-2/bridge-registry`
- Single PR for Step 2 only
- No placeholder code or fake implementations
