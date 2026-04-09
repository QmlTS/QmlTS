# Step 2: Generated Bridge Crate & Bridge Registry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the `qmlts-host-generated` crate with real cxx-qt bridge QObjects for LoginViewModel and CounterViewModel, implement a bridge registry, and prove that generated bridge types are instantiable and visible to QML through the host.

**Architecture:** A new `qmlts-host-generated` rlib crate contains cxx-qt `#[cxx_qt::bridge]` modules defining per-ViewModel QObject pairs (bridge vm + runtime). The host crate imports descriptors from this generated crate into a `BridgeRegistry`, which maps class names to factory functions. `register_view_model()` creates a bridge instance and wires it as `vm`/`__qmlts` context properties on the Qt engine via a C++ shim layer.

**Tech Stack:** Rust 1.85+, cxx-qt 0.7, cxx 1.x, napi-rs 2.x, Qt 6.11.0, Bun test runner

**Spec:** `docs/superpowers/specs/2025-07-14-step2-bridge-registry-design.md`

---

## File Structure

### New Files (to create)

| File | Responsibility |
|------|---------------|
| `native/crates/qmlts-host-generated/Cargo.toml` | Generated crate manifest — rlib, depends on cxx, cxx-qt, cxx-qt-lib |
| `native/crates/qmlts-host-generated/build.rs` | CxxQtBuilder for bridge QObject compilation |
| `native/crates/qmlts-host-generated/src/lib.rs` | BridgeInstance, BridgeDescriptor, descriptors(), re-exports |
| `native/crates/qmlts-host-generated/src/login_view_model.rs` | cxx-qt bridge: LoginViewModel QObject (vm) |
| `native/crates/qmlts-host-generated/src/counter_view_model.rs` | cxx-qt bridge: CounterViewModel QObject (vm) |
| `native/crates/qmlts-host-generated/src/login_runtime.rs` | cxx-qt bridge: LoginRuntime QObject (__qmlts) |
| `native/crates/qmlts-host-generated/src/counter_runtime.rs` | cxx-qt bridge: CounterRuntime QObject (__qmlts) |
| `native/crates/qmlts-host/cpp/qt_context.cpp` | C++ shim: create/destroy engine, setContextProperty, loadData, loadUrl |
| `native/crates/qmlts-host/src/qt_context.rs` | Rust FFI bindings to qt_context.cpp (extern "C" + safe wrappers) |
| `native/crates/qmlts-host/src/bridge_registry.rs` | BridgeRegistry: loads descriptors, creates instances by class name |

### Modified Files

| File | What changes |
|------|-------------|
| `native/Cargo.toml:3` | Add `"crates/qmlts-host-generated"` to workspace members |
| `native/crates/qmlts-host/Cargo.toml:13-22` | Add `qmlts-host-generated` dependency |
| `native/crates/qmlts-host/build.rs` | Replace TODO with real CxxQtBuilder for cpp/qt_context.cpp |
| `native/crates/qmlts-host/src/lib.rs:35-41` | Add `mod bridge_registry; mod qt_context;` |
| `native/crates/qmlts-host/src/error.rs:9-74` | Add `BridgeTypeNotFound(String)` and `BridgeAlreadyLoaded` variants |
| `native/crates/qmlts-host/src/engine.rs:64-101,172-224` | Add registry, engine_ptr, active_bridge fields; register_view_model(); enhance load_string/load_file |
| `native/crates/qmlts-host/src/exports.rs` | Add 3 new napi exports: registerViewModel, getRegisteredTypes, hasBridgeType |
| `native/npm/qmlts-host/src/types.ts` | Add registerViewModel, getRegisteredTypes, hasBridgeType declarations |
| `native/npm/qmlts-host/src/index.ts:98-114` | Add new exports to destructuring |
| `native/npm/qmlts-host/index.d.ts` | Add new function declarations |
| `tests/host/napi-bindings.test.ts:54-71` | Add new expected exports and test cases |
| `.github/workflows/ci.yml:103-104` | Add real-Qt cargo test step with QT_QPA_PLATFORM=offscreen |

---

### Task 1: Create branch and scaffold qmlts-host-generated crate

**Files:**
- Create: `native/crates/qmlts-host-generated/Cargo.toml`
- Create: `native/crates/qmlts-host-generated/src/lib.rs` (minimal — just enough to compile)
- Create: `native/crates/qmlts-host-generated/build.rs`
- Modify: `native/Cargo.toml:3`

- [ ] **Step 1: Create the step-2 branch from main**

```bash
cd C:/MyFile/DevAll/QmlTS
git checkout main
git pull origin main
git checkout -b step-2/bridge-registry
```

- [ ] **Step 2: Create Cargo.toml for qmlts-host-generated**

Create `native/crates/qmlts-host-generated/Cargo.toml`:

```toml
[package]
name = "qmlts-host-generated"
version.workspace = true
edition.workspace = true
license.workspace = true
repository.workspace = true
rust-version.workspace = true
description = "Generated cxx-qt bridge types for QmlTS fixture ViewModels"

[lib]
crate-type = ["rlib"]

[dependencies]
cxx = { workspace = true }
cxx-qt = { workspace = true }
cxx-qt-lib = { workspace = true }

[build-dependencies]
cxx-qt-build = { workspace = true }
```

- [ ] **Step 3: Create minimal build.rs**

Create `native/crates/qmlts-host-generated/build.rs`:

```rust
fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .build();
}
```

Note: We start with `qt_module("Core")` only. Bridge modules will be added in later tasks via `.file()` calls.

- [ ] **Step 4: Create minimal lib.rs with BridgeInstance and BridgeDescriptor**

Create `native/crates/qmlts-host-generated/src/lib.rs`:

```rust
//! Generated cxx-qt bridge types for QmlTS fixture ViewModels.
//!
//! This crate provides bridge QObject types that the host crate
//! uses to wire ViewModel properties into the QML engine.

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]

use std::any::Any;

/// Owns a (vm, runtime) QObject pair. Drops both when dropped.
///
/// The `_storage` field holds type-erased `UniquePtr` pairs that keep
/// the QObjects alive. Raw pointers are borrowed from storage and
/// only used for `setContextProperty()`.
pub struct BridgeInstance {
    _storage: Box<dyn Any>,
    vm_ptr: *mut std::ffi::c_void,
    runtime_ptr: *mut std::ffi::c_void,
}

impl BridgeInstance {
    /// Create a new bridge instance.
    ///
    /// # Safety
    /// `vm_ptr` and `runtime_ptr` must point to valid QObjects owned by `storage`.
    pub fn new(
        storage: Box<dyn Any>,
        vm_ptr: *mut std::ffi::c_void,
        runtime_ptr: *mut std::ffi::c_void,
    ) -> Self {
        Self {
            _storage: storage,
            vm_ptr,
            runtime_ptr,
        }
    }

    /// Raw pointer to the vm QObject (for setContextProperty).
    pub fn vm_qobject_ptr(&self) -> *mut std::ffi::c_void {
        self.vm_ptr
    }

    /// Raw pointer to the runtime QObject (for setContextProperty).
    pub fn runtime_qobject_ptr(&self) -> *mut std::ffi::c_void {
        self.runtime_ptr
    }
}

/// Static descriptor: class name + factory function.
pub struct BridgeDescriptor {
    /// The ViewModel class name (e.g., "LoginViewModel").
    pub class_name: &'static str,
    /// Factory function that creates a BridgeInstance.
    pub create: fn() -> BridgeInstance,
}

/// Returns all registered bridge descriptors.
pub fn descriptors() -> &'static [BridgeDescriptor] {
    // No bridge modules yet — will be populated in Task 3+
    &[]
}
```

- [ ] **Step 5: Add qmlts-host-generated to workspace members**

In `native/Cargo.toml`, change line 3:

```toml
members = ["crates/qmlts-host", "crates/qmlts-host-generated"]
```

- [ ] **Step 6: Verify the workspace compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles with no errors.

- [ ] **Step 7: Commit**

```bash
git add native/Cargo.toml native/crates/qmlts-host-generated/
git commit -m "feat(bridge): scaffold qmlts-host-generated crate with BridgeInstance/BridgeDescriptor

Add the generated bridge crate to the workspace. It provides:
- BridgeInstance: type-erased owner of (vm, runtime) QObject pairs
- BridgeDescriptor: static class_name + factory registration
- descriptors(): returns all registered bridge types (empty for now)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 2: Implement LoginViewModel bridge QObject

**Files:**
- Create: `native/crates/qmlts-host-generated/src/login_view_model.rs`
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`
- Modify: `native/crates/qmlts-host-generated/build.rs`

- [ ] **Step 1: Create login_view_model.rs**

Create `native/crates/qmlts-host-generated/src/login_view_model.rs`:

```rust
//! LoginViewModel bridge QObject — set as `vm` context property.
//!
//! Properties match the compiler schema:
//! - username: string (QString)
//! - password: string (QString)
//! - isLoading: bool (read-only in schema, but writable here for host to set)

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(QString, username)]
        #[qproperty(QString, password)]
        #[qproperty(bool, is_loading, cxx_name = "isLoading")]
        type LoginViewModel = super::LoginViewModelRust;
    }
}

use cxx_qt_lib::QString;

/// Rust backing struct for LoginViewModel.
#[derive(Default)]
pub struct LoginViewModelRust {
    username: QString,
    password: QString,
    is_loading: bool,
}
```

- [ ] **Step 2: Add module declaration to lib.rs**

In `native/crates/qmlts-host-generated/src/lib.rs`, add after the `#![allow(...)]` lines:

```rust
pub mod login_view_model;
```

- [ ] **Step 3: Update build.rs to include login_view_model bridge**

Replace `native/crates/qmlts-host-generated/build.rs` with:

```rust
fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .build();
}
```

- [ ] **Step 4: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles successfully. cxx-qt-build generates C++ QObject code for LoginViewModel.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host-generated/
git commit -m "feat(bridge): add LoginViewModel cxx-qt bridge QObject

Properties: username (QString), password (QString), isLoading (bool).
Matches the compiler golden schema for LoginViewModel.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 3: Implement CounterViewModel bridge QObject

**Files:**
- Create: `native/crates/qmlts-host-generated/src/counter_view_model.rs`
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`
- Modify: `native/crates/qmlts-host-generated/build.rs`

- [ ] **Step 1: Create counter_view_model.rs**

Create `native/crates/qmlts-host-generated/src/counter_view_model.rs`:

```rust
//! CounterViewModel bridge QObject — set as `vm` context property.
//!
//! Properties match the compiler schema:
//! - count: number (i32)

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, count)]
        type CounterViewModel = super::CounterViewModelRust;
    }
}

/// Rust backing struct for CounterViewModel.
#[derive(Default)]
pub struct CounterViewModelRust {
    count: i32,
}
```

- [ ] **Step 2: Add module declaration and update build.rs**

In `native/crates/qmlts-host-generated/src/lib.rs`, add:

```rust
pub mod counter_view_model;
```

In `native/crates/qmlts-host-generated/build.rs`, update to:

```rust
fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .build();
}
```

- [ ] **Step 3: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles successfully.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host-generated/
git commit -m "feat(bridge): add CounterViewModel cxx-qt bridge QObject

Property: count (i32). Matches the compiler golden schema for CounterViewModel.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 4: Implement LoginRuntime bridge QObject

**Files:**
- Create: `native/crates/qmlts-host-generated/src/login_runtime.rs`
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`
- Modify: `native/crates/qmlts-host-generated/build.rs`

- [ ] **Step 1: Create login_runtime.rs**

Create `native/crates/qmlts-host-generated/src/login_runtime.rs`:

```rust
//! LoginRuntime bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(QVariant): command dispatch (increments invoke_count for observability)
//! - onMounted(): lifecycle hook
//! - onUnmounting(): lifecycle hook
//! - onLoginCompleted(bool): effect signal

use core::pin::Pin;

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qvariant.h");
        type QVariant = cxx_qt_lib::QVariant;
    }

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

/// Rust backing struct for LoginRuntime.
#[derive(Default)]
pub struct LoginRuntimeRust {
    invoke_count: i32,
}

impl qobject::LoginRuntime {
    /// Handle command dispatch. Increments invoke_count for test observability.
    pub fn invoke(self: Pin<&mut Self>, _command: cxx_qt_lib::QVariant) {
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
    }

    /// Called when the QML component is mounted.
    pub fn on_mounted(self: Pin<&mut Self>) {
        // Step 2: just record the call. Real wiring in Step 3+.
        let current = *self.invoke_count();
        self.set_invoke_count(current); // no-op, but proves method is callable
    }

    /// Called when the QML component is about to unmount.
    pub fn on_unmounting(self: Pin<&mut Self>) {
        // Step 2: just record the call. Real wiring in Step 3+.
    }
}
```

- [ ] **Step 2: Add module declaration and update build.rs**

In `native/crates/qmlts-host-generated/src/lib.rs`, add:

```rust
pub mod login_runtime;
```

In `native/crates/qmlts-host-generated/build.rs`, add `.file("src/login_runtime.rs")`.

Updated build.rs:

```rust
fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .file("src/login_runtime.rs")
        .build();
}
```

- [ ] **Step 3: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles successfully.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host-generated/
git commit -m "feat(bridge): add LoginRuntime cxx-qt bridge QObject

Provides invoke(QVariant), onMounted(), onUnmounting() invokables,
and onLoginCompleted(bool) signal. invoke() increments invokeCount
for test observability.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 5: Implement CounterRuntime bridge QObject

**Files:**
- Create: `native/crates/qmlts-host-generated/src/counter_runtime.rs`
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`
- Modify: `native/crates/qmlts-host-generated/build.rs`

- [ ] **Step 1: Create counter_runtime.rs**

Create `native/crates/qmlts-host-generated/src/counter_runtime.rs`:

```rust
//! CounterRuntime bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(QVariant): command dispatch (increments invoke_count for observability)
//! No lifecycle hooks, no effects (per schema).

use core::pin::Pin;

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qvariant.h");
        type QVariant = cxx_qt_lib::QVariant;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        type CounterRuntime = super::CounterRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut CounterRuntime>, command: QVariant);
    }
}

/// Rust backing struct for CounterRuntime.
#[derive(Default)]
pub struct CounterRuntimeRust {
    invoke_count: i32,
}

impl qobject::CounterRuntime {
    /// Handle command dispatch. Increments invoke_count for test observability.
    pub fn invoke(self: Pin<&mut Self>, _command: cxx_qt_lib::QVariant) {
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
    }
}
```

- [ ] **Step 2: Add module declaration and update build.rs**

In `native/crates/qmlts-host-generated/src/lib.rs`, add:

```rust
pub mod counter_runtime;
```

Update `native/crates/qmlts-host-generated/build.rs`:

```rust
fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .file("src/login_runtime.rs")
        .file("src/counter_runtime.rs")
        .build();
}
```

- [ ] **Step 3: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles successfully.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host-generated/
git commit -m "feat(bridge): add CounterRuntime cxx-qt bridge QObject

Provides invoke(QVariant) invokable. Increments invokeCount for
test observability. No lifecycle hooks or effects per schema.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 6: Wire descriptors() factory functions in qmlts-host-generated

**Files:**
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`

This task connects the four bridge modules to the `descriptors()` function by implementing factory functions that instantiate QObject pairs and return `BridgeInstance`.

- [ ] **Step 1: Update lib.rs with factory functions and populated descriptors()**

Replace `native/crates/qmlts-host-generated/src/lib.rs` with:

```rust
//! Generated cxx-qt bridge types for QmlTS fixture ViewModels.
//!
//! This crate provides bridge QObject types that the host crate
//! uses to wire ViewModel properties into the QML engine.

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]
#![allow(clippy::missing_errors_doc)]

pub mod counter_runtime;
pub mod counter_view_model;
pub mod login_runtime;
pub mod login_view_model;

use std::any::Any;

/// Owns a (vm, runtime) QObject pair. Drops both when dropped.
///
/// The `_storage` field holds type-erased `UniquePtr` pairs that keep
/// the QObjects alive. Raw pointers are borrowed from storage and
/// only used for `setContextProperty()`.
pub struct BridgeInstance {
    _storage: Box<dyn Any>,
    vm_ptr: *mut std::ffi::c_void,
    runtime_ptr: *mut std::ffi::c_void,
}

impl BridgeInstance {
    /// Create a new bridge instance.
    ///
    /// # Safety
    /// `vm_ptr` and `runtime_ptr` must point to valid QObjects owned by `storage`.
    pub fn new(
        storage: Box<dyn Any>,
        vm_ptr: *mut std::ffi::c_void,
        runtime_ptr: *mut std::ffi::c_void,
    ) -> Self {
        Self {
            _storage: storage,
            vm_ptr,
            runtime_ptr,
        }
    }

    /// Raw pointer to the vm QObject (for setContextProperty).
    pub fn vm_qobject_ptr(&self) -> *mut std::ffi::c_void {
        self.vm_ptr
    }

    /// Raw pointer to the runtime QObject (for setContextProperty).
    pub fn runtime_qobject_ptr(&self) -> *mut std::ffi::c_void {
        self.runtime_ptr
    }
}

/// Static descriptor: class name + factory function.
pub struct BridgeDescriptor {
    /// The ViewModel class name (e.g., "LoginViewModel").
    pub class_name: &'static str,
    /// Factory function that creates a BridgeInstance.
    pub create: fn() -> BridgeInstance,
}

fn create_login_bridge() -> BridgeInstance {
    let vm = login_view_model::qobject::LoginViewModel::default();
    let runtime = login_runtime::qobject::LoginRuntime::default();

    let vm_ptr = vm.as_mut_ptr().cast::<std::ffi::c_void>();
    let runtime_ptr = runtime.as_mut_ptr().cast::<std::ffi::c_void>();

    BridgeInstance::new(
        Box::new((vm, runtime)),
        vm_ptr,
        runtime_ptr,
    )
}

fn create_counter_bridge() -> BridgeInstance {
    let vm = counter_view_model::qobject::CounterViewModel::default();
    let runtime = counter_runtime::qobject::CounterRuntime::default();

    let vm_ptr = vm.as_mut_ptr().cast::<std::ffi::c_void>();
    let runtime_ptr = runtime.as_mut_ptr().cast::<std::ffi::c_void>();

    BridgeInstance::new(
        Box::new((vm, runtime)),
        vm_ptr,
        runtime_ptr,
    )
}

static DESCRIPTORS: &[BridgeDescriptor] = &[
    BridgeDescriptor {
        class_name: "LoginViewModel",
        create: create_login_bridge,
    },
    BridgeDescriptor {
        class_name: "CounterViewModel",
        create: create_counter_bridge,
    },
];

/// Returns all registered bridge descriptors.
pub fn descriptors() -> &'static [BridgeDescriptor] {
    DESCRIPTORS
}
```

**IMPORTANT NOTE:** The exact QObject construction API (`default()`, `new()`, or a generated factory) needs to be verified during implementation. cxx-qt 0.7 generates different construction patterns. The factory functions above show the intent — the implementer must check the actual generated API by looking at build output or cxx-qt docs. The key requirement is:

1. Create a `UniquePtr<LoginViewModel>` (or equivalent owning wrapper)
2. Extract a raw `*mut c_void` pointer from it
3. Store the UniquePtr in `_storage` to keep it alive
4. The pointer is only used for `setContextProperty`

If the generated API doesn't provide `default()` on the QObject type, the factory may need to call a generated `new()` function or use a C++ helper. Adapt accordingly.

- [ ] **Step 2: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host-generated
```

Expected: compiles. If the QObject construction API doesn't match, adapt the factory functions to use the actual generated API.

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host-generated/src/lib.rs
git commit -m "feat(bridge): wire factory functions for LoginViewModel and CounterViewModel

descriptors() now returns both bridge descriptors with factory functions
that instantiate real cxx-qt QObject pairs.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 7: Add error variants to qmlts-host

**Files:**
- Modify: `native/crates/qmlts-host/src/error.rs:9-74`

- [ ] **Step 1: Write a failing test for new error variants**

Add to the `#[cfg(test)] mod tests` in `native/crates/qmlts-host/src/error.rs`:

```rust
    #[test]
    fn test_bridge_type_not_found_display() {
        let err = QmltsError::BridgeTypeNotFound("UnknownViewModel".to_string());
        assert_eq!(
            err.to_string(),
            "Bridge type not found: UnknownViewModel"
        );
    }

    #[test]
    fn test_bridge_already_loaded_display() {
        let err = QmltsError::BridgeAlreadyLoaded;
        assert_eq!(
            err.to_string(),
            "Cannot register bridge: QML already loaded"
        );
    }
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd native
cargo test -p qmlts-host --features mock-qt -- test_bridge_type_not_found_display test_bridge_already_loaded_display
```

Expected: FAIL — variants don't exist yet.

- [ ] **Step 3: Add the error variants**

In `native/crates/qmlts-host/src/error.rs`, add these variants to the `QmltsError` enum (before the `Internal` variant):

```rust
    /// Bridge type not found in registry.
    #[error("Bridge type not found: {0}")]
    BridgeTypeNotFound(String),

    /// QML has already been loaded; cannot register new bridge types.
    #[error("Cannot register bridge: QML already loaded")]
    BridgeAlreadyLoaded,
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd native
cargo test -p qmlts-host --features mock-qt -- test_bridge
```

Expected: PASS — both new tests pass.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/error.rs
git commit -m "feat(bridge): add BridgeTypeNotFound and BridgeAlreadyLoaded error variants

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 8: Implement BridgeRegistry in qmlts-host

**Files:**
- Create: `native/crates/qmlts-host/src/bridge_registry.rs`
- Modify: `native/crates/qmlts-host/src/lib.rs:35-41`
- Modify: `native/crates/qmlts-host/Cargo.toml:13-22`

- [ ] **Step 1: Add qmlts-host-generated dependency to host Cargo.toml**

In `native/crates/qmlts-host/Cargo.toml`, add to `[dependencies]`:

```toml
qmlts-host-generated = { path = "../qmlts-host-generated" }
```

- [ ] **Step 2: Write failing tests for BridgeRegistry**

Create `native/crates/qmlts-host/src/bridge_registry.rs`:

```rust
//! Bridge registry — maps ViewModel class names to factory functions.
//!
//! The registry is populated from `qmlts-host-generated::descriptors()`
//! and provides type lookup and instance creation.

use std::collections::HashMap;

use qmlts_host_generated::{BridgeDescriptor, BridgeInstance};

use crate::error::QmltsError;

/// Registry of bridge types keyed by ViewModel class name.
pub struct BridgeRegistry {
    factories: HashMap<String, fn() -> BridgeInstance>,
}

impl BridgeRegistry {
    /// Create a new empty registry.
    pub fn new() -> Self {
        Self {
            factories: HashMap::new(),
        }
    }

    /// Load bridge descriptors into the registry.
    pub fn load_descriptors(&mut self, descriptors: &[BridgeDescriptor]) {
        for desc in descriptors {
            self.factories
                .insert(desc.class_name.to_string(), desc.create);
        }
    }

    /// Create a bridge instance for the given class name.
    pub fn create(&self, class_name: &str) -> Result<BridgeInstance, QmltsError> {
        let factory = self
            .factories
            .get(class_name)
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.to_string()))?;
        Ok(factory())
    }

    /// Check if a bridge type is registered.
    pub fn has(&self, class_name: &str) -> bool {
        self.factories.contains_key(class_name)
    }

    /// List all registered type names.
    pub fn registered_types(&self) -> Vec<String> {
        let mut types: Vec<String> = self.factories.keys().cloned().collect();
        types.sort();
        types
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn mock_create() -> BridgeInstance {
        BridgeInstance::new(
            Box::new(()),
            std::ptr::null_mut(),
            std::ptr::null_mut(),
        )
    }

    #[test]
    fn test_empty_registry() {
        let registry = BridgeRegistry::new();
        assert!(registry.registered_types().is_empty());
        assert!(!registry.has("LoginViewModel"));
    }

    #[test]
    fn test_load_descriptors() {
        let mut registry = BridgeRegistry::new();
        let descriptors = [
            BridgeDescriptor {
                class_name: "LoginViewModel",
                create: mock_create,
            },
            BridgeDescriptor {
                class_name: "CounterViewModel",
                create: mock_create,
            },
        ];
        registry.load_descriptors(&descriptors);

        assert!(registry.has("LoginViewModel"));
        assert!(registry.has("CounterViewModel"));
        assert!(!registry.has("UnknownViewModel"));

        let types = registry.registered_types();
        assert_eq!(types, vec!["CounterViewModel", "LoginViewModel"]);
    }

    #[test]
    fn test_create_returns_instance() {
        let mut registry = BridgeRegistry::new();
        registry.load_descriptors(&[BridgeDescriptor {
            class_name: "TestVM",
            create: mock_create,
        }]);

        let instance = registry.create("TestVM");
        assert!(instance.is_ok());
    }

    #[test]
    fn test_create_unknown_type_returns_error() {
        let registry = BridgeRegistry::new();
        let result = registry.create("NonExistent");
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(
            matches!(err, QmltsError::BridgeTypeNotFound(name) if name == "NonExistent")
        );
    }

    #[test]
    fn test_multiple_creates_are_independent() {
        let mut registry = BridgeRegistry::new();
        registry.load_descriptors(&[BridgeDescriptor {
            class_name: "TestVM",
            create: mock_create,
        }]);

        let instance1 = registry.create("TestVM").unwrap();
        let instance2 = registry.create("TestVM").unwrap();

        // Each factory call returns a fresh instance
        assert_ne!(
            &instance1 as *const BridgeInstance,
            &instance2 as *const BridgeInstance
        );
    }
}
```

- [ ] **Step 3: Add module declaration to lib.rs**

In `native/crates/qmlts-host/src/lib.rs`, add after `mod error;`:

```rust
mod bridge_registry;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd native
cargo test -p qmlts-host --features mock-qt -- bridge_registry
```

Expected: all 5 bridge_registry tests PASS.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/Cargo.toml native/crates/qmlts-host/src/bridge_registry.rs native/crates/qmlts-host/src/lib.rs
git commit -m "feat(bridge): implement BridgeRegistry with type lookup and creation

Registry maps ViewModel class names to factory functions from
qmlts-host-generated descriptors. Includes 5 unit tests.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 9: Implement Qt context shim (C++ + Rust FFI)

**Files:**
- Create: `native/crates/qmlts-host/cpp/qt_context.cpp`
- Create: `native/crates/qmlts-host/src/qt_context.rs`
- Modify: `native/crates/qmlts-host/build.rs`
- Modify: `native/crates/qmlts-host/src/lib.rs`

- [ ] **Step 1: Create cpp/qt_context.cpp**

Create `native/crates/qmlts-host/cpp/qt_context.cpp`:

```cpp
#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QUrl>

static int s_argc = 1;
static const char* s_argv[] = {"qmlts-host", nullptr};
static QGuiApplication* s_app = nullptr;

extern "C" {

void* qmlts_create_engine() {
    if (!s_app) {
        s_app = new QGuiApplication(s_argc, const_cast<char**>(s_argv));
    }
    auto* engine = new QQmlApplicationEngine();
    return static_cast<void*>(engine);
}

void qmlts_destroy_engine(void* engine_ptr) {
    if (engine_ptr) {
        auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
        delete engine;
    }
}

void qmlts_set_context_property(void* engine_ptr, const char* name, int name_len, void* obj_ptr) {
    if (!engine_ptr || !name) return;
    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    QString prop_name = QString::fromUtf8(name, name_len);
    auto* obj = static_cast<QObject*>(obj_ptr);
    engine->rootContext()->setContextProperty(prop_name, obj);
}

void qmlts_load_data(void* engine_ptr, const char* data, int data_len, const char* url, int url_len) {
    if (!engine_ptr || !data) return;
    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    QByteArray qml_data(data, data_len);
    QUrl base_url;
    if (url && url_len > 0) {
        base_url = QUrl(QString::fromUtf8(url, url_len));
    }
    engine->loadData(qml_data, base_url);
}

void qmlts_load_url(void* engine_ptr, const char* path, int path_len) {
    if (!engine_ptr || !path) return;
    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    QString file_path = QString::fromUtf8(path, path_len);
    engine->load(QUrl::fromLocalFile(file_path));
}

void qmlts_process_events() {
    if (s_app) {
        s_app->processEvents();
    }
}

void qmlts_process_events_for(int timeout_ms) {
    if (s_app) {
        s_app->processEvents(QEventLoop::AllEvents, timeout_ms);
    }
}

} // extern "C"
```

- [ ] **Step 2: Create src/qt_context.rs**

Create `native/crates/qmlts-host/src/qt_context.rs`:

```rust
//! FFI bindings to the Qt context C++ shim.
//!
//! Under `mock-qt`, all functions are no-ops that return safe defaults.
//! Under real Qt, they call into cpp/qt_context.cpp via extern "C".

#[cfg(not(feature = "mock-qt"))]
mod ffi {
    unsafe extern "C" {
        pub fn qmlts_create_engine() -> *mut std::ffi::c_void;
        pub fn qmlts_destroy_engine(engine: *mut std::ffi::c_void);
        pub fn qmlts_set_context_property(
            engine: *mut std::ffi::c_void,
            name: *const std::ffi::c_char,
            name_len: i32,
            obj: *mut std::ffi::c_void,
        );
        pub fn qmlts_load_data(
            engine: *mut std::ffi::c_void,
            data: *const std::ffi::c_char,
            data_len: i32,
            url: *const std::ffi::c_char,
            url_len: i32,
        );
        pub fn qmlts_load_url(
            engine: *mut std::ffi::c_void,
            path: *const std::ffi::c_char,
            path_len: i32,
        );
        pub fn qmlts_process_events();
        pub fn qmlts_process_events_for(timeout_ms: i32);
    }
}

/// Create a Qt engine. Returns opaque pointer.
#[cfg(not(feature = "mock-qt"))]
pub fn create_engine() -> *mut std::ffi::c_void {
    unsafe { ffi::qmlts_create_engine() }
}

#[cfg(feature = "mock-qt")]
pub fn create_engine() -> *mut std::ffi::c_void {
    std::ptr::null_mut()
}

/// Destroy a Qt engine.
#[cfg(not(feature = "mock-qt"))]
pub fn destroy_engine(engine: *mut std::ffi::c_void) {
    if !engine.is_null() {
        unsafe { ffi::qmlts_destroy_engine(engine) }
    }
}

#[cfg(feature = "mock-qt")]
pub fn destroy_engine(_engine: *mut std::ffi::c_void) {}

/// Set a context property on the engine's root context.
#[cfg(not(feature = "mock-qt"))]
pub fn set_context_property(
    engine: *mut std::ffi::c_void,
    name: &str,
    obj: *mut std::ffi::c_void,
) {
    if engine.is_null() {
        return;
    }
    let name_len = i32::try_from(name.len()).unwrap_or(0);
    unsafe {
        ffi::qmlts_set_context_property(engine, name.as_ptr().cast(), name_len, obj);
    }
}

#[cfg(feature = "mock-qt")]
pub fn set_context_property(
    _engine: *mut std::ffi::c_void,
    _name: &str,
    _obj: *mut std::ffi::c_void,
) {
}

/// Load QML from a byte string with optional base URL.
#[cfg(not(feature = "mock-qt"))]
pub fn load_data(engine: *mut std::ffi::c_void, data: &[u8], base_url: Option<&str>) {
    if engine.is_null() {
        return;
    }
    let data_len = i32::try_from(data.len()).unwrap_or(0);
    let (url_ptr, url_len) = match base_url {
        Some(url) => (url.as_ptr().cast(), i32::try_from(url.len()).unwrap_or(0)),
        None => (std::ptr::null(), 0),
    };
    unsafe {
        ffi::qmlts_load_data(engine, data.as_ptr().cast(), data_len, url_ptr, url_len);
    }
}

#[cfg(feature = "mock-qt")]
pub fn load_data(_engine: *mut std::ffi::c_void, _data: &[u8], _base_url: Option<&str>) {}

/// Load a QML file via QUrl::fromLocalFile.
#[cfg(not(feature = "mock-qt"))]
pub fn load_url(engine: *mut std::ffi::c_void, path: &str) {
    if engine.is_null() {
        return;
    }
    let path_len = i32::try_from(path.len()).unwrap_or(0);
    unsafe {
        ffi::qmlts_load_url(engine, path.as_ptr().cast(), path_len);
    }
}

#[cfg(feature = "mock-qt")]
pub fn load_url(_engine: *mut std::ffi::c_void, _path: &str) {}

/// Process all pending Qt events.
#[cfg(not(feature = "mock-qt"))]
pub fn process_events() {
    unsafe { ffi::qmlts_process_events() }
}

#[cfg(feature = "mock-qt")]
pub fn process_events() {}

/// Process Qt events for up to the specified duration.
#[cfg(not(feature = "mock-qt"))]
pub fn process_events_for(timeout_ms: i32) {
    unsafe { ffi::qmlts_process_events_for(timeout_ms) }
}

#[cfg(feature = "mock-qt")]
pub fn process_events_for(_timeout_ms: i32) {}
```

- [ ] **Step 3: Update build.rs to include CxxQtBuilder**

Replace `native/crates/qmlts-host/build.rs` with:

```rust
//! Build script for qmlts-host
//!
//! This script integrates:
//! - napi-rs for Node.js/Bun native module generation
//! - cxx-qt-build for Qt/C++ interop (Qt context shim)

fn main() {
    napi_build::setup();

    #[cfg(not(feature = "mock-qt"))]
    {
        cxx_qt_build::CxxQtBuilder::new()
            .qt_module("Core")
            .qt_module("Gui")
            .qt_module("Qml")
            .cc_builder(|cc| {
                cc.file("cpp/qt_context.cpp");
            })
            .build();
    }

    println!("cargo:rerun-if-changed=src/");
    println!("cargo:rerun-if-changed=cpp/");
}
```

**Note:** `CxxQtBuilder` has no `.cpp_file()` method. Use `.cc_builder(|cc| { cc.file(...); })` to add arbitrary C++ files. If this API is also unavailable, compile `qt_context.cpp` directly via the `cc` crate in a separate build step. The implementer must verify the correct API against cxx-qt-build 0.7.

- [ ] **Step 4: Add module declaration to lib.rs**

In `native/crates/qmlts-host/src/lib.rs`, add after `mod bridge_registry;`:

```rust
mod qt_context;
```

- [ ] **Step 5: Verify it compiles under mock-qt**

```bash
cd native
cargo check -p qmlts-host --features mock-qt
```

Expected: compiles. The mock-qt feature makes all qt_context functions no-ops, so no C++ linking is needed.

- [ ] **Step 6: Commit**

```bash
git add native/crates/qmlts-host/cpp/ native/crates/qmlts-host/src/qt_context.rs native/crates/qmlts-host/build.rs native/crates/qmlts-host/src/lib.rs
git commit -m "feat(bridge): add Qt context C++ shim and Rust FFI bindings

C++ shim provides: create/destroy engine, setContextProperty,
loadData, loadUrl, processEvents.
Rust FFI: safe wrappers with mock-qt no-op fallbacks.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 10: Enhance QmltsEngine with registry and register_view_model

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs:64-101,172-224`

- [ ] **Step 1: Write failing tests for register_view_model**

Add to the bottom of `native/crates/qmlts-host/src/engine.rs` (in a new or existing `#[cfg(test)] mod tests` block):

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_register_view_model_success() {
        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_view_model("LoginViewModel");
        assert!(result.is_ok());
        assert!(engine.active_bridge.is_some());
    }

    #[test]
    fn test_register_view_model_unknown_type() {
        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_view_model("UnknownViewModel");
        assert!(result.is_err());
        assert!(
            matches!(result.unwrap_err(), QmltsError::BridgeTypeNotFound(name) if name == "UnknownViewModel")
        );
    }

    #[test]
    fn test_register_view_model_after_load_fails() {
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();
        let result = engine.register_view_model("LoginViewModel");
        assert!(result.is_err());
        assert!(matches!(result.unwrap_err(), QmltsError::BridgeAlreadyLoaded));
    }

    #[test]
    fn test_register_view_model_before_load_succeeds() {
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("CounterViewModel").unwrap();
        let result = engine.load_string("import QtQuick\nItem { }", None);
        assert!(result.is_ok());
    }

    #[test]
    fn test_register_view_model_after_destroy_fails() {
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.mark_destroyed();
        let result = engine.register_view_model("LoginViewModel");
        assert!(result.is_err());
        assert!(matches!(result.unwrap_err(), QmltsError::EngineDestroyed));
    }

    #[test]
    fn test_has_bridge_type() {
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.has_bridge_type("LoginViewModel"));
        assert!(engine.has_bridge_type("CounterViewModel"));
        assert!(!engine.has_bridge_type("UnknownType"));
    }

    #[test]
    fn test_get_registered_types() {
        let engine = QmltsEngine::new(None).unwrap();
        let types = engine.get_registered_types();
        assert!(types.contains(&"LoginViewModel".to_string()));
        assert!(types.contains(&"CounterViewModel".to_string()));
    }
}
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd native
cargo test -p qmlts-host --features mock-qt -- engine::tests
```

Expected: FAIL — `register_view_model`, `has_bridge_type`, `get_registered_types` don't exist yet.

- [ ] **Step 3: Enhance the QmltsEngine struct and constructor**

Modify `native/crates/qmlts-host/src/engine.rs`:

Add imports at top:

```rust
use crate::bridge_registry::BridgeRegistry;
use crate::qt_context;
use qmlts_host_generated::BridgeInstance;
```

Update the `QmltsEngine` struct to add new fields:

```rust
pub struct QmltsEngine {
    config: EngineConfig,
    initialized: bool,
    destroyed: bool,
    #[allow(dead_code)]
    loaded_components: Vec<String>,
    engine_ptr: *mut std::ffi::c_void,
    registry: BridgeRegistry,
    active_bridge: Option<BridgeInstance>,
}
```

Update `QmltsEngine::new()`:

```rust
    pub fn new(config: Option<EngineConfig>) -> Result<Self> {
        let config = config.unwrap_or_default();
        Self::ensure_qt_initialized(&config)?;

        let engine_ptr = qt_context::create_engine();

        let mut registry = BridgeRegistry::new();
        registry.load_descriptors(qmlts_host_generated::descriptors());

        Ok(Self {
            config,
            initialized: true,
            destroyed: false,
            loaded_components: Vec::new(),
            engine_ptr,
            registry,
            active_bridge: None,
        })
    }
```

Add new methods:

```rust
    /// Register a ViewModel's bridge+runtime pair as context properties.
    ///
    /// Must be called before load_string/load_file.
    /// Returns BridgeAlreadyLoaded if QML has already been loaded.
    pub fn register_view_model(&mut self, class_name: &str) -> Result<()> {
        self.ensure_alive()?;
        if !self.loaded_components.is_empty() {
            return Err(QmltsError::BridgeAlreadyLoaded);
        }
        let instance = self.registry.create(class_name)?;

        qt_context::set_context_property(
            self.engine_ptr,
            "vm",
            instance.vm_qobject_ptr(),
        );
        qt_context::set_context_property(
            self.engine_ptr,
            "__qmlts",
            instance.runtime_qobject_ptr(),
        );

        self.active_bridge = Some(instance);
        Ok(())
    }

    /// Check if a bridge type is registered.
    pub fn has_bridge_type(&self, class_name: &str) -> bool {
        self.registry.has(class_name)
    }

    /// Get all registered bridge type names.
    pub fn get_registered_types(&self) -> Vec<String> {
        self.registry.registered_types()
    }
```

Update `mark_destroyed` to also clean up the Qt engine:

```rust
    pub fn mark_destroyed(&mut self) {
        self.active_bridge = None;
        qt_context::destroy_engine(self.engine_ptr);
        self.engine_ptr = std::ptr::null_mut();
        self.destroyed = true;
        self.initialized = false;
        tracing::debug!("Engine marked as destroyed");
    }
```

Also update `load_string` and `load_file` to call the Qt context shim for real loading:

In `load_file()`, after `self.loaded_components.push(path.to_string());`, add:

```rust
        qt_context::load_url(self.engine_ptr, path);
```

In `load_string()`, after `self.loaded_components.push(marker.to_string());`, add:

```rust
        qt_context::load_data(self.engine_ptr, source.as_bytes(), base_url);
```

Implement `Drop` for cleanup:

```rust
impl Drop for QmltsEngine {
    fn drop(&mut self) {
        if !self.engine_ptr.is_null() {
            self.active_bridge = None;
            qt_context::destroy_engine(self.engine_ptr);
            self.engine_ptr = std::ptr::null_mut();
        }
    }
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd native
cargo test -p qmlts-host --features mock-qt -- engine::tests
```

Expected: all 7 engine tests PASS.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/engine.rs
git commit -m "feat(bridge): enhance QmltsEngine with registry and register_view_model

Engine now:
- Creates real Qt engine via qt_context shim
- Populates BridgeRegistry from generated descriptors
- register_view_model() creates bridge + sets context properties
- Pre-load enforcement: BridgeAlreadyLoaded error after load
- Proper Drop cleanup

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 11: Add napi exports for bridge registration

**Files:**
- Modify: `native/crates/qmlts-host/src/exports.rs`

- [ ] **Step 1: Add 3 new napi exports**

Add to `native/crates/qmlts-host/src/exports.rs`, in the appropriate section (after the event loop exports):

```rust
// ─────────────────────────────────────────────────────────────────────────
//  §4 Bridge Registration
// ─────────────────────────────────────────────────────────────────────────

/// Register a ViewModel's bridge type for use with QML.
///
/// This creates the vm and __qmlts context properties required by
/// compiler-generated QML. Must be called before loadString/loadFile.
///
/// @param engine - The engine instance.
/// @param className - The ViewModel class name (e.g., "LoginViewModel").
/// @throws Error if the class name is not found or QML has already been loaded.
#[napi(js_name = "registerViewModel")]
pub fn register_view_model(engine: &mut QmltsEngine, class_name: String) -> Result<()> {
    engine
        .inner
        .register_view_model(&class_name)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Get all registered bridge type names.
///
/// @param engine - The engine instance.
/// @returns Array of registered ViewModel class names.
#[napi(js_name = "getRegisteredTypes")]
pub fn get_registered_types(engine: &QmltsEngine) -> Result<Vec<String>> {
    Ok(engine.inner.get_registered_types())
}

/// Check if a bridge type is registered.
///
/// @param engine - The engine instance.
/// @param className - The ViewModel class name to check.
/// @returns true if the type is registered.
#[napi(js_name = "hasBridgeType")]
pub fn has_bridge_type(engine: &QmltsEngine, class_name: String) -> Result<bool> {
    Ok(engine.inner.has_bridge_type(&class_name))
}
```

- [ ] **Step 2: Verify it compiles**

```bash
cd native
cargo check -p qmlts-host --features mock-qt
```

Expected: compiles successfully.

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host/src/exports.rs
git commit -m "feat(bridge): add napi exports for registerViewModel, getRegisteredTypes, hasBridgeType

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 12: Update TypeScript declarations and re-exports

**Files:**
- Modify: `native/npm/qmlts-host/src/types.ts`
- Modify: `native/npm/qmlts-host/src/index.ts:98-114`
- Modify: `native/npm/qmlts-host/index.d.ts`

- [ ] **Step 1: Add declarations to types.ts**

Add to `native/npm/qmlts-host/src/types.ts`, after the §3 Event Loop section:

```typescript
// ────────────────────────────────────────────────────────────────────────────
// §4 Bridge Registration
// ────────────────────────────────────────────────────────────────────────────

/**
 * Register a ViewModel's bridge type for use with QML.
 *
 * Creates the `vm` and `__qmlts` context properties required by
 * compiler-generated QML. Must be called before loadString/loadFile.
 *
 * @param engine - The engine instance.
 * @param className - The ViewModel class name (e.g., "LoginViewModel").
 * @throws Error if the class name is not found or QML has already been loaded.
 */
export declare function registerViewModel(engine: QmltsEngine, className: string): void;

/**
 * Get all registered bridge type names.
 *
 * @param engine - The engine instance.
 * @returns Array of registered ViewModel class names.
 */
export declare function getRegisteredTypes(engine: QmltsEngine): string[];

/**
 * Check if a bridge type is registered.
 *
 * @param engine - The engine instance.
 * @param className - The ViewModel class name to check.
 * @returns true if the type is registered.
 */
export declare function hasBridgeType(engine: QmltsEngine, className: string): boolean;
```

- [ ] **Step 2: Add re-exports to index.ts**

In `native/npm/qmlts-host/src/index.ts`, update the destructuring (lines 98-114):

```typescript
export const {
  // Engine lifecycle
  createEngine,
  destroyEngine,
  version,
  qtVersion,
  // QML loading
  loadFile,
  loadString,
  addImportPath,
  addPluginPath,
  // Event loop
  exec,
  quit,
  processEvents,
  processEventsFor,
  // Bridge registration
  registerViewModel,
  getRegisteredTypes,
  hasBridgeType,
} = nativeModule;
```

- [ ] **Step 3: Add declarations to index.d.ts**

Add to `native/npm/qmlts-host/index.d.ts`, after the `processEventsFor` declaration:

```typescript
export declare function registerViewModel(engine: QmltsEngine, className: string): void;
export declare function getRegisteredTypes(engine: QmltsEngine): string[];
export declare function hasBridgeType(engine: QmltsEngine, className: string): boolean;
```

- [ ] **Step 4: Commit**

```bash
git add native/npm/qmlts-host/
git commit -m "feat(bridge): add TypeScript declarations for bridge registration exports

Adds registerViewModel, getRegisteredTypes, hasBridgeType to types.ts,
index.ts re-exports, and index.d.ts published declarations.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 13: Add TypeScript tests for bridge registration

**Files:**
- Modify: `tests/host/napi-bindings.test.ts:54-71`

- [ ] **Step 1: Add new expected exports and test cases**

In `tests/host/napi-bindings.test.ts`, update `expectedExports` array (line 55-71) to include:

```typescript
const expectedExports = [
  // §1 Engine lifecycle
  'createEngine',
  'destroyEngine',
  'version',
  'qtVersion',
  // §2 QML loading
  'loadFile',
  'loadString',
  'addImportPath',
  'addPluginPath',
  // §3 Event loop
  'exec',
  'quit',
  'processEvents',
  'processEventsFor',
  // §4 Bridge registration
  'registerViewModel',
  'getRegisteredTypes',
  'hasBridgeType',
];
```

Add new test cases inside the `describe.skipIf(!isNativeModuleAvailable)` block:

```typescript
  test('TB-14: registerViewModel() with valid type does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;

    const engine = createEngine();
    expect(() => registerViewModel(engine, 'LoginViewModel')).not.toThrow();
  });

  test('TB-15: registerViewModel() with unknown type throws BridgeTypeNotFound', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;

    const engine = createEngine();
    expect(() => registerViewModel(engine, 'UnknownViewModel')).toThrow(
      /Bridge type not found|BridgeTypeNotFound/i,
    );
  });

  test('TB-16: getRegisteredTypes() returns expected types', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const getRegisteredTypes = nativeModule.getRegisteredTypes as (engine: object) => string[];

    const engine = createEngine();
    const types = getRegisteredTypes(engine);
    expect(types).toContain('LoginViewModel');
    expect(types).toContain('CounterViewModel');
  });

  test('TB-17: hasBridgeType() returns correct values', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const hasBridgeType = nativeModule.hasBridgeType as (
      engine: object,
      className: string,
    ) => boolean;

    const engine = createEngine();
    expect(hasBridgeType(engine, 'LoginViewModel')).toBe(true);
    expect(hasBridgeType(engine, 'CounterViewModel')).toBe(true);
    expect(hasBridgeType(engine, 'UnknownViewModel')).toBe(false);
  });

  test('TB-18: end-to-end smoke: registerViewModel + loadString', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const loadString = nativeModule.loadString as (
      engine: object,
      qml: string,
      baseUrl?: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'CounterViewModel');
    expect(() => loadString(engine, 'import QtQuick\nItem { property int c: vm.count }')).not.toThrow();
  });
```

- [ ] **Step 2: Commit**

```bash
git add tests/host/napi-bindings.test.ts
git commit -m "test(bridge): add TypeScript tests for bridge registration napi exports

Tests: registerViewModel success/failure, getRegisteredTypes,
hasBridgeType, and end-to-end smoke test (register + loadString).

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 14: Add Rust integration tests for qmlts-host-generated (real Qt)

**Files:**
- Create: `native/crates/qmlts-host-generated/tests/bridge_qobject.rs`

These tests require real Qt (no `mock-qt` feature). They verify QObject construction and method calls.

- [ ] **Step 1: Create bridge_qobject.rs integration test**

Create `native/crates/qmlts-host-generated/tests/bridge_qobject.rs`:

```rust
//! Integration tests for generated bridge QObjects.
//!
//! These tests require a real Qt installation. They verify that
//! cxx-qt bridge types can be instantiated and their properties
//! and methods work correctly.

use qmlts_host_generated::*;

#[test]
fn test_login_view_model_default_properties() {
    let instance = (descriptors().iter())
        .find(|d| d.class_name == "LoginViewModel")
        .expect("LoginViewModel descriptor should exist");

    let bridge = (instance.create)();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}

#[test]
fn test_counter_view_model_default_properties() {
    let instance = (descriptors().iter())
        .find(|d| d.class_name == "CounterViewModel")
        .expect("CounterViewModel descriptor should exist");

    let bridge = (instance.create)();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}

#[test]
fn test_descriptors_contains_both_types() {
    let descs = descriptors();
    let names: Vec<&str> = descs.iter().map(|d| d.class_name).collect();
    assert!(names.contains(&"LoginViewModel"));
    assert!(names.contains(&"CounterViewModel"));
}

#[test]
fn test_multiple_creates_return_different_instances() {
    let desc = (descriptors().iter())
        .find(|d| d.class_name == "LoginViewModel")
        .unwrap();

    let bridge1 = (desc.create)();
    let bridge2 = (desc.create)();

    // Different QObject instances
    assert_ne!(bridge1.vm_qobject_ptr(), bridge2.vm_qobject_ptr());
    assert_ne!(bridge1.runtime_qobject_ptr(), bridge2.runtime_qobject_ptr());
}
```

**Note:** More detailed property get/set tests (e.g., `set_username`, `invoke` call) require pinning the UniquePtr and calling methods on the qobject type directly. The exact API depends on what cxx-qt generates. If the generated QObject types are publicly accessible (e.g., `login_view_model::qobject::LoginViewModel`), add these tests:

```rust
// Additional test (add if the API supports it):
#[test]
fn test_login_runtime_invoke_increments_count() {
    // Create a LoginRuntime directly
    let mut runtime = login_runtime::qobject::LoginRuntime::default();
    let pinned = std::pin::Pin::new(&mut runtime);
    // Call invoke with a QVariant
    // Assert invoke_count == 1
    // Exact API depends on cxx-qt generated code
}
```

- [ ] **Step 2: Verify integration tests compile and run**

```bash
cd native
cargo test -p qmlts-host-generated
```

Expected: all tests pass (requires Qt).

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host-generated/tests/
git commit -m "test(bridge): add integration tests for generated bridge QObjects

Tests: descriptor lookup, QObject instantiation, non-null pointers,
independent instances from multiple factory calls.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 15: Add Rust integration tests for qmlts-host (real Qt)

**Files:**
- Create: `native/crates/qmlts-host/tests/bridge_integration.rs`

These tests verify the full engine → registry → QML loading pipeline with real Qt.

- [ ] **Step 1: Create bridge_integration.rs integration test**

Create `native/crates/qmlts-host/tests/bridge_integration.rs`:

```rust
//! Integration tests for bridge registration and QML loading.
//!
//! These tests require a real Qt installation. They verify:
//! - Engine creation with real Qt engine
//! - ViewModel registration and context property wiring
//! - QML loading that references vm and __qmlts properties
//!
//! Run via: cargo test -p qmlts-host (without --features mock-qt)

use qmlts_host::QmltsEngine;

#[test]
fn test_register_login_view_model_and_load_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    let result = engine.load_string(
        r#"import QtQuick
Item {
    property string u: vm.username
}"#,
        None,
    );
    assert!(result.is_ok());
}

#[test]
fn test_register_counter_view_model_and_load_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();
    let result = engine.load_string(
        r#"import QtQuick
Item {
    property int c: vm.count
}"#,
        None,
    );
    assert!(result.is_ok());
}

#[test]
fn test_register_view_model_unknown_type() {
    let mut engine = QmltsEngine::new(None).unwrap();
    let result = engine.register_view_model("NonExistentViewModel");
    assert!(result.is_err());
}

#[test]
fn test_register_after_load_fails() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine
        .load_string("import QtQuick\nItem { }", None)
        .unwrap();
    let result = engine.register_view_model("LoginViewModel");
    assert!(result.is_err());
}
```

**Note:** The golden QML test and invoke test require more complex QML and event loop processing. These should be added once the basic tests pass. The implementer should add:

```rust
// Golden QML test (add when basic tests pass):
#[test]
fn test_invoke_via_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    engine.load_string(
        r#"import QtQuick
Item {
    Component.onCompleted: __qmlts.invoke(927957157)
}"#,
        None,
    ).unwrap();
    // Process events to trigger Component.onCompleted
    engine.process_events().unwrap();
    // Verify invoke_count == 1
    // This requires reading the runtime QObject's invokeCount property
    // via the Qt engine — exact mechanism TBD during implementation
}
```

- [ ] **Step 2: Verify integration tests compile**

```bash
cd native
cargo test -p qmlts-host --no-default-features
```

Expected: compiles. May fail at runtime if Qt is not available. With Qt:

```bash
QT_QPA_PLATFORM=offscreen cargo test -p qmlts-host
```

Expected: all integration tests pass.

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host/tests/
git commit -m "test(bridge): add integration tests for engine bridge registration

Tests: register + load QML with vm properties, unknown type error,
register-after-load enforcement.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 16: Add CI step for real-Qt integration tests

**Files:**
- Modify: `.github/workflows/ci.yml:103-104`

- [ ] **Step 1: Add real-Qt cargo test step**

In `.github/workflows/ci.yml`, add this step **before** the existing `Rust tests` step (which runs `cargo test --all-features`):

```yaml
      - name: Rust integration tests (real Qt)
        working-directory: native
        run: cargo test
        env:
          QT_DIR: ${{ env.QT_ROOT_DIR }}
          QT_QPA_PLATFORM: offscreen
```

The existing `cargo test --all-features` step runs mock-qt tests. This new step runs without `--all-features`, which means the `mock-qt` feature is off, and real Qt linking occurs.

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add real-Qt integration test step with QT_QPA_PLATFORM=offscreen

Runs cargo test without mock-qt feature to exercise real cxx-qt
bridge types against the installed Qt 6.11.0.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 17: Build, test, format, and verify everything

**Files:** All files from Tasks 1-14.

- [ ] **Step 1: Run full Rust mock-qt test suite**

```bash
cd native
cargo test --all-features
```

Expected: all tests pass (existing + new bridge_registry + engine tests).

- [ ] **Step 2: Run Rust format and clippy checks**

```bash
cd native
cargo fmt --all -- --check
cargo clippy --all-targets --all-features -- -D warnings
```

Expected: no format issues, no clippy warnings.

- [ ] **Step 3: Run TypeScript typecheck**

```bash
cd C:/MyFile/DevAll/QmlTS
bun run typecheck
```

Expected: no type errors.

- [ ] **Step 4: Run biome format/check**

```bash
bunx biome format --write src/ tests/ native/npm/
bunx biome check --fix src/ tests/ native/npm/
```

Expected: formatting applied (Windows CRLF→LF fixes).

- [ ] **Step 5: Build native module (requires Qt)**

```bash
cd native/npm/qmlts-host
bun run build
```

Expected: native module builds successfully with cxx-qt bridges compiled.

- [ ] **Step 6: Run TypeScript tests**

```bash
cd C:/MyFile/DevAll/QmlTS
bun test tests/host/napi-bindings.test.ts
```

Expected: all tests pass including new TB-14 through TB-18.

- [ ] **Step 7: Run real-Qt Rust integration tests**

```bash
cd native
QT_QPA_PLATFORM=offscreen cargo test
```

Expected: all integration tests pass with real Qt engine.

- [ ] **Step 8: Final commit if any formatting fixes were needed**

```bash
git add -A
git diff --cached --stat
# If there are changes:
git commit -m "chore: apply formatting fixes

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

### Task 18: Push branch and open PR

- [ ] **Step 1: Push the branch**

```bash
git push origin step-2/bridge-registry
```

- [ ] **Step 2: Open PR via GitHub CLI**

```bash
gh pr create \
  --title "feat: Step 2 — Generated bridge crate & bridge registry integration" \
  --body "## Summary

Implements Step 2 of the 07-rust-host feature: adds the generated bridge crate with real cxx-qt bridge QObjects and a bridge registry that makes them available to the QML engine.

### What's included

- **qmlts-host-generated** crate with cxx-qt bridge QObjects:
  - LoginViewModel (username, password, isLoading properties)
  - CounterViewModel (count property)
  - LoginRuntime (invoke, onMounted, onUnmounting, onLoginCompleted signal)
  - CounterRuntime (invoke)
- **BridgeRegistry** mapping class names to factory functions
- **Qt context C++ shim** (setContextProperty, loadData, loadUrl)
- **register_view_model()** API with pre-load enforcement
- **3 new napi exports**: registerViewModel, getRegisteredTypes, hasBridgeType
- **Error variants**: BridgeTypeNotFound, BridgeAlreadyLoaded
- **Tests**: Rust unit tests (mock-qt), TypeScript napi binding tests
- **CI**: Real-Qt integration test step with QT_QPA_PLATFORM=offscreen

### Design spec
See \`docs/superpowers/specs/2025-07-14-step2-bridge-registry-design.md\`

### Testing
- \`cargo test --all-features\` — mock-qt unit tests
- \`cargo test\` — real-Qt integration tests (requires Qt 6.11.0)
- \`bun test tests/host/napi-bindings.test.ts\` — TypeScript smoke tests" \
  --base main \
  --head step-2/bridge-registry
```

---

## Implementation Notes

### cxx-qt QObject Construction

The exact API for constructing a cxx-qt QObject from Rust depends on the code cxx-qt-build generates. The generated module (e.g., `login_view_model::qobject`) exposes a C++ type `LoginViewModel`. To create one from Rust:

1. **If cxx-qt generates a `default()` or `new()` on the type**: Call it directly.
2. **If construction requires a C++ factory**: Add a `fn new_login_view_model() -> UniquePtr<LoginViewModel>` declaration in the `extern "C++"` block of the bridge module, and implement it on the C++ side.
3. **Getting the raw pointer**: Use `pin.as_mut_ptr()` on a pinned `UniquePtr` (via `cxx::UniquePtr::pin_mut()`) to get `*mut T`, then cast to `*mut c_void`.

The implementer should check what cxx-qt 0.7 actually generates by examining the build output or running `cargo doc -p qmlts-host-generated` after the first successful compilation.

### Potential Compilation Issues

1. **cxx-qt-build API mismatch**: The `CxxQtBuilder` API may differ from what's documented. Check `cxx-qt-build` 0.7 source for exact method names.
2. **Qt include paths**: The build.rs may need `QT_DIR` environment variable set for Qt headers. Under `mock-qt`, CxxQtBuilder is skipped entirely.
3. **`#[auto_cxx_name]`**: Must be on the `unsafe extern "RustQt"` block, not on individual items.
4. **napi-rs + cxx-qt-build co-existence**: Both modify the build process. Ensure `napi_build::setup()` runs first, then `CxxQtBuilder`.
