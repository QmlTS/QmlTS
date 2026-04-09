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
    // No bridge modules yet — will be populated in Task 6
    &[]
}
