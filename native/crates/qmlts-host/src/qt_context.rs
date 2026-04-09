//! Rust FFI to the Qt context C++ shim.
//!
//! Provides safe wrappers around the `extern "C"` functions in
//! `cpp/qt_context.cpp` for setting QML context properties.

use std::ffi::{CString, c_void};

#[cfg(not(feature = "mock-qt"))]
unsafe extern "C" {
    fn qmlts_set_context_property(
        engine_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        qobject_ptr: *mut c_void,
    );
    fn qmlts_clear_context_property(
        engine_ptr: *mut c_void,
        name: *const std::ffi::c_char,
    );
}

/// Set a context property on a QML engine's root context.
///
/// # Safety
/// - `engine_ptr` must be a valid `QQmlEngine*`
/// - `qobject_ptr` must be a valid `QObject*`
/// - Must be called on the Qt main thread
#[cfg(not(feature = "mock-qt"))]
pub unsafe fn set_context_property(
    engine_ptr: *mut c_void,
    name: &str,
    qobject_ptr: *mut c_void,
) {
    let c_name = CString::new(name).expect("context property name must not contain NUL");
    unsafe {
        qmlts_set_context_property(engine_ptr, c_name.as_ptr(), qobject_ptr);
    }
}

/// Clear a context property (set to null).
///
/// # Safety
/// - `engine_ptr` must be a valid `QQmlEngine*`
/// - Must be called on the Qt main thread
#[cfg(not(feature = "mock-qt"))]
pub unsafe fn clear_context_property(engine_ptr: *mut c_void, name: &str) {
    let c_name = CString::new(name).expect("context property name must not contain NUL");
    unsafe {
        qmlts_clear_context_property(engine_ptr, c_name.as_ptr());
    }
}

// Mock implementations for testing without Qt
#[cfg(feature = "mock-qt")]
pub unsafe fn set_context_property(
    _engine_ptr: *mut c_void,
    name: &str,
    _qobject_ptr: *mut c_void,
) {
    tracing::debug!("Mock: set_context_property('{name}')");
}

#[cfg(feature = "mock-qt")]
pub unsafe fn clear_context_property(_engine_ptr: *mut c_void, name: &str) {
    tracing::debug!("Mock: clear_context_property('{name}')");
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::ptr;

    #[test]
    fn set_context_property_mock_does_not_panic() {
        unsafe {
            set_context_property(ptr::null_mut(), "vm", ptr::null_mut());
        }
    }

    #[test]
    fn clear_context_property_mock_does_not_panic() {
        unsafe {
            clear_context_property(ptr::null_mut(), "vm");
        }
    }
}
