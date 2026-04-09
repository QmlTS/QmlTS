//! Rust FFI to the Qt context C++ shim.
//!
//! Provides safe wrappers around the `extern "C"` functions in
//! `cpp/qt_context.cpp` for engine creation, loading, and context properties.

#[cfg(not(feature = "mock-qt"))]
use std::ffi::CString;
use std::ffi::c_void;

#[cfg(not(feature = "mock-qt"))]
unsafe extern "C" {
    fn qmlts_create_engine() -> *mut c_void;
    fn qmlts_destroy_engine(engine_ptr: *mut c_void);
    fn qmlts_set_context_property(
        engine_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        qobject_ptr: *mut c_void,
    ) -> bool;
    fn qmlts_clear_context_property(engine_ptr: *mut c_void, name: *const std::ffi::c_char)
    -> bool;
    fn qmlts_has_context_property(engine_ptr: *mut c_void, name: *const std::ffi::c_char) -> bool;
    fn qmlts_load_data(
        engine_ptr: *mut c_void,
        data: *const std::ffi::c_char,
        data_len: usize,
        url: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_load_url(engine_ptr: *mut c_void, path: *const std::ffi::c_char) -> bool;
    fn qmlts_process_events();
    fn qmlts_process_events_for(timeout_ms: u32);
    fn qmlts_exec() -> i32;
    fn qmlts_quit(exit_code: i32);
    fn qmlts_read_int_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        out_value: *mut i32,
    ) -> bool;
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn create_engine() -> *mut c_void {
    unsafe { qmlts_create_engine() }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn create_engine() -> *mut c_void {
    std::ptr::null_mut()
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub unsafe fn destroy_engine(engine_ptr: *mut c_void) {
    unsafe {
        qmlts_destroy_engine(engine_ptr);
    }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub unsafe fn destroy_engine(_engine_ptr: *mut c_void) {}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn load_data(engine_ptr: *mut c_void, data: &[u8], base_url: Option<&str>) -> bool {
    let c_url = base_url.map(|url| CString::new(url).expect("base URL must not contain NUL"));
    let url_ptr = c_url
        .as_ref()
        .map_or(std::ptr::null(), |value| value.as_ptr());
    unsafe { qmlts_load_data(engine_ptr, data.as_ptr().cast(), data.len(), url_ptr) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn load_data(_engine_ptr: *mut c_void, _data: &[u8], _base_url: Option<&str>) -> bool {
    true
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn load_url(engine_ptr: *mut c_void, path: &str) -> bool {
    let c_path = CString::new(path).expect("QML path must not contain NUL");
    unsafe { qmlts_load_url(engine_ptr, c_path.as_ptr()) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn load_url(_engine_ptr: *mut c_void, _path: &str) -> bool {
    true
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn process_events() {
    unsafe {
        qmlts_process_events();
    }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn process_events() {}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn process_events_for(timeout_ms: u32) {
    unsafe {
        qmlts_process_events_for(timeout_ms);
    }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn process_events_for(_timeout_ms: u32) {}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn exec() -> i32 {
    unsafe { qmlts_exec() }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn exec() -> i32 {
    0
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn quit(exit_code: i32) {
    unsafe {
        qmlts_quit(exit_code);
    }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn quit(_exit_code: i32) {}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn has_context_property(engine_ptr: *mut c_void, name: &str) -> bool {
    let c_name = CString::new(name).expect("context property name must not contain NUL");
    unsafe { qmlts_has_context_property(engine_ptr, c_name.as_ptr()) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn has_context_property(_engine_ptr: *mut c_void, _name: &str) -> bool {
    false
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn read_int_property(qobject_ptr: *mut c_void, name: &str) -> Option<i32> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let mut out_value = 0_i32;
    let ok = unsafe { qmlts_read_int_property(qobject_ptr, c_name.as_ptr(), &mut out_value) };
    ok.then_some(out_value)
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn read_int_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<i32> {
    None
}

/// Set a context property on a QML engine's root context.
///
/// # Safety
/// - `engine_ptr` must be a valid `QQmlEngine*`
/// - `qobject_ptr` must be a valid `QObject*`
/// - Must be called on the Qt main thread
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub unsafe fn set_context_property(
    engine_ptr: *mut c_void,
    name: &str,
    qobject_ptr: *mut c_void,
) -> bool {
    let c_name = CString::new(name).expect("context property name must not contain NUL");
    unsafe { qmlts_set_context_property(engine_ptr, c_name.as_ptr(), qobject_ptr) }
}

/// Clear a context property (set to null).
///
/// # Safety
/// - `engine_ptr` must be a valid `QQmlEngine*`
/// - Must be called on the Qt main thread
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub unsafe fn clear_context_property(engine_ptr: *mut c_void, name: &str) -> bool {
    let c_name = CString::new(name).expect("context property name must not contain NUL");
    unsafe { qmlts_clear_context_property(engine_ptr, c_name.as_ptr()) }
}

// Mock implementations for testing without Qt
#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub unsafe fn set_context_property(
    _engine_ptr: *mut c_void,
    name: &str,
    _qobject_ptr: *mut c_void,
) -> bool {
    tracing::debug!("Mock: set_context_property('{name}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub unsafe fn clear_context_property(_engine_ptr: *mut c_void, name: &str) -> bool {
    tracing::debug!("Mock: clear_context_property('{name}')");
    true
}

#[cfg(test)]
mod tests {
    #[cfg(feature = "mock-qt")]
    use super::*;

    #[cfg(feature = "mock-qt")]
    #[test]
    fn set_context_property_mock_does_not_panic() {
        use std::ptr;
        unsafe {
            let _ = set_context_property(ptr::null_mut(), "vm", ptr::null_mut());
        }
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn clear_context_property_mock_does_not_panic() {
        use std::ptr;
        unsafe {
            let _ = clear_context_property(ptr::null_mut(), "vm");
        }
    }
}
