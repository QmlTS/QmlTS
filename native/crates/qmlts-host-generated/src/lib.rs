//! Generated cxx-qt bridge types for QmlTS fixture `ViewModels`.
//!
//! This crate provides bridge QObject types that the host crate
//! uses to wire `ViewModel` properties into the QML engine.

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]
#![allow(clippy::unnecessary_box_returns)]

pub mod counter_runtime;
pub mod counter_view_model;
pub mod login_runtime;
pub mod login_view_model;

use std::any::Any;
use std::ffi::c_void;

unsafe extern "C" {
    fn qmlts_create_login_view_model() -> *mut c_void;
    fn qmlts_create_counter_view_model() -> *mut c_void;
    fn qmlts_create_login_runtime() -> *mut c_void;
    fn qmlts_create_counter_runtime() -> *mut c_void;
    fn qmlts_destroy_qobject(ptr: *mut c_void);
}

/// Holds a pair of QObject raw pointers, calling the C++ destructor on drop.
struct QObjectPair {
    vm_ptr: *mut c_void,
    runtime_ptr: *mut c_void,
}

impl Drop for QObjectPair {
    fn drop(&mut self) {
        // SAFETY: pointers were created by the C++ factory functions
        // and are guaranteed to be valid QObject pointers (or null).
        unsafe {
            if !self.vm_ptr.is_null() {
                qmlts_destroy_qobject(self.vm_ptr);
            }
            if !self.runtime_ptr.is_null() {
                qmlts_destroy_qobject(self.runtime_ptr);
            }
        }
    }
}

/// Owns a (vm, runtime) QObject pair. Drops both when dropped.
///
/// The `_storage` field holds type-erased `QObjectPair` that keeps
/// the `QObjects` alive. Raw pointers are borrowed from storage and
/// only used for `setContextProperty()`.
pub struct BridgeInstance {
    _storage: Box<dyn Any>,
    vm_ptr: *mut c_void,
    runtime_ptr: *mut c_void,
}

impl BridgeInstance {
    /// Create a new bridge instance.
    ///
    /// # Safety
    /// `vm_ptr` and `runtime_ptr` must point to valid `QObjects` owned by `storage`.
    pub fn new(storage: Box<dyn Any>, vm_ptr: *mut c_void, runtime_ptr: *mut c_void) -> Self {
        Self {
            _storage: storage,
            vm_ptr,
            runtime_ptr,
        }
    }

    /// Raw pointer to the vm QObject (for `setContextProperty`).
    #[must_use]
    pub fn vm_qobject_ptr(&self) -> *mut c_void {
        self.vm_ptr
    }

    /// Raw pointer to the runtime QObject (for `setContextProperty`).
    #[must_use]
    pub fn runtime_qobject_ptr(&self) -> *mut c_void {
        self.runtime_ptr
    }
}

/// Static descriptor: class name + factory function.
pub struct BridgeDescriptor {
    /// The `ViewModel` class name (e.g., `LoginViewModel`).
    pub class_name: &'static str,
    /// Factory function that creates a `BridgeInstance`.
    pub create: fn() -> BridgeInstance,
}

fn create_login_instance() -> BridgeInstance {
    // SAFETY: C++ factories allocate heap QObjects with standard constructors.
    let vm = unsafe { qmlts_create_login_view_model() };
    let rt = unsafe { qmlts_create_login_runtime() };
    let pair = QObjectPair {
        vm_ptr: vm,
        runtime_ptr: rt,
    };
    BridgeInstance::new(Box::new(pair), vm, rt)
}

fn create_counter_instance() -> BridgeInstance {
    // SAFETY: C++ factories allocate heap QObjects with standard constructors.
    let vm = unsafe { qmlts_create_counter_view_model() };
    let rt = unsafe { qmlts_create_counter_runtime() };
    let pair = QObjectPair {
        vm_ptr: vm,
        runtime_ptr: rt,
    };
    BridgeInstance::new(Box::new(pair), vm, rt)
}

/// Returns all registered bridge descriptors.
#[must_use]
pub fn descriptors() -> &'static [BridgeDescriptor] {
    &[
        BridgeDescriptor {
            class_name: "LoginViewModel",
            create: create_login_instance,
        },
        BridgeDescriptor {
            class_name: "CounterViewModel",
            create: create_counter_instance,
        },
    ]
}
