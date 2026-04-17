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
    fn qmlts_set_string_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_set_int_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: i32,
    ) -> bool;
    fn qmlts_set_double_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: f64,
    ) -> bool;
    fn qmlts_set_bool_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: bool,
    ) -> bool;
    fn qmlts_set_property_json(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        json: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_read_string_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
    ) -> *mut std::ffi::c_char;
    fn qmlts_read_property_json(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
    ) -> *mut std::ffi::c_char;
    fn qmlts_read_bool_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        out_value: *mut bool,
    ) -> bool;
    fn qmlts_read_double_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        out_value: *mut f64,
    ) -> bool;
    fn qmlts_free_string(ptr: *mut std::ffi::c_char);
    fn qmlts_root_object(engine_ptr: *mut c_void) -> *mut c_void;
    fn qmlts_emit_signal(
        qobject_ptr: *mut c_void,
        signal_name: *const std::ffi::c_char,
        payload_json: *const std::ffi::c_char,
        param_types_json: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_create_list_model(schema_json: *const std::ffi::c_char) -> *mut c_void;
    fn qmlts_destroy_list_model(model_ptr: *mut c_void);
    fn qmlts_list_set_data(model_ptr: *mut c_void, json_array: *const std::ffi::c_char) -> bool;
    fn qmlts_list_insert_rows(
        model_ptr: *mut c_void,
        index: i32,
        json_rows: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_list_remove_rows(model_ptr: *mut c_void, index: i32, count: i32) -> bool;
    fn qmlts_list_update_row(
        model_ptr: *mut c_void,
        index: i32,
        json_data: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_list_move_rows(
        model_ptr: *mut c_void,
        source_row: i32,
        dest_row: i32,
        count: i32,
    ) -> bool;
    fn qmlts_list_row_count(model_ptr: *mut c_void) -> i32;
    fn qmlts_list_get_row(model_ptr: *mut c_void, index: i32) -> *mut std::ffi::c_char;

    // §8 Hot Reload
    fn qmlts_capture_snapshot(engine_ptr: *mut c_void) -> *mut std::ffi::c_char;
    fn qmlts_free_snapshot_string(ptr: *mut std::ffi::c_char);
    fn qmlts_reload_qml(
        engine_ptr: *mut c_void,
        data: *const std::ffi::c_char,
        data_len: usize,
        url: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_restore_snapshot(
        engine_ptr: *mut c_void,
        json: *const std::ffi::c_char,
        json_len: usize,
    ) -> bool;

    // §9 Error overlay
    fn qmlts_show_error_overlay(
        engine_ptr: *mut c_void,
        message: *const std::ffi::c_char,
        message_len: usize,
    ) -> bool;
    fn qmlts_hide_error_overlay(engine_ptr: *mut c_void) -> bool;
    fn qmlts_is_error_overlay_visible(engine_ptr: *mut c_void) -> bool;

    // §10 V2 property change forwarding and lifecycle
    fn qmlts_v2_set_suppress(qobj: *mut c_void, suppress: bool);
    fn qmlts_v2_connect_destroy_handler(qobj: *mut c_void, owner_id: i32, instance_id: i32);

    // §11 V2 instance state capture / restore (Step 8)
    fn qmlts_v2_read_properties(
        qobject_ptr: *mut c_void,
        property_names_json: *const std::ffi::c_char,
    ) -> *mut std::ffi::c_char;
    fn qmlts_v2_write_properties(
        qobject_ptr: *mut c_void,
        properties_json: *const std::ffi::c_char,
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

// ─────────────────────────────────────────────────────────────────────────
//  Property set/read wrappers (Step 3)
// ─────────────────────────────────────────────────────────────────────────

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_string_property(qobject_ptr: *mut c_void, name: &str, value: &str) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let c_value = CString::new(value).expect("string value must not contain NUL");
    unsafe { qmlts_set_string_property(qobject_ptr, c_name.as_ptr(), c_value.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_int_property(qobject_ptr: *mut c_void, name: &str, value: i32) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_int_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_double_property(qobject_ptr: *mut c_void, name: &str, value: f64) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_double_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_bool_property(qobject_ptr: *mut c_void, name: &str, value: bool) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_bool_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_property_json(qobject_ptr: *mut c_void, name: &str, json: &str) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let c_json = CString::new(json).expect("JSON must not contain NUL");
    unsafe { qmlts_set_property_json(qobject_ptr, c_name.as_ptr(), c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_string_property(qobject_ptr: *mut c_void, name: &str) -> Option<String> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let ptr = unsafe { qmlts_read_string_property(qobject_ptr, c_name.as_ptr()) };
    if ptr.is_null() {
        return None;
    }
    let result = unsafe { std::ffi::CStr::from_ptr(ptr) }
        .to_string_lossy()
        .into_owned();
    unsafe { qmlts_free_string(ptr) };
    Some(result)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_property_json(qobject_ptr: *mut c_void, name: &str) -> Option<String> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let ptr = unsafe { qmlts_read_property_json(qobject_ptr, c_name.as_ptr()) };
    if ptr.is_null() {
        return None;
    }
    let result = unsafe { std::ffi::CStr::from_ptr(ptr) }
        .to_string_lossy()
        .into_owned();
    unsafe { qmlts_free_string(ptr) };
    Some(result)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_bool_property(qobject_ptr: *mut c_void, name: &str) -> Option<bool> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let mut out_value = false;
    let ok = unsafe { qmlts_read_bool_property(qobject_ptr, c_name.as_ptr(), &mut out_value) };
    ok.then_some(out_value)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_double_property(qobject_ptr: *mut c_void, name: &str) -> Option<f64> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let mut out_value = 0.0_f64;
    let ok = unsafe { qmlts_read_double_property(qobject_ptr, c_name.as_ptr(), &mut out_value) };
    ok.then_some(out_value)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn root_object(engine_ptr: *mut c_void) -> *mut c_void {
    unsafe { qmlts_root_object(engine_ptr) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn emit_signal(
    qobject_ptr: *mut c_void,
    signal_name: &str,
    payload_json: Option<&str>,
    param_types_json: Option<&str>,
) -> bool {
    let c_name = CString::new(signal_name).expect("signal name must not contain NUL");
    let c_json = payload_json.map(|j| CString::new(j).expect("payload JSON must not contain NUL"));
    let json_ptr = c_json.as_ref().map_or(std::ptr::null(), |c| c.as_ptr());
    let c_types =
        param_types_json.map(|t| CString::new(t).expect("param types JSON must not contain NUL"));
    let types_ptr = c_types.as_ref().map_or(std::ptr::null(), |c| c.as_ptr());
    unsafe { qmlts_emit_signal(qobject_ptr, c_name.as_ptr(), json_ptr, types_ptr) }
}

// ─────────────────────────────────────────────────────────────────────────
//  List model FFI wrappers (real Qt)
// ─────────────────────────────────────────────────────────────────────────

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn create_list_model(schema_json: &str) -> *mut c_void {
    let c_json = CString::new(schema_json).expect("schema JSON must not contain NUL");
    unsafe { qmlts_create_list_model(c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn destroy_list_model(model_ptr: *mut c_void) {
    unsafe { qmlts_destroy_list_model(model_ptr) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_set_data(model_ptr: *mut c_void, json_array: &str) -> bool {
    let c_json = CString::new(json_array).expect("JSON array must not contain NUL");
    unsafe { qmlts_list_set_data(model_ptr, c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_insert_rows(model_ptr: *mut c_void, index: i32, json_rows: &str) -> bool {
    let c_json = CString::new(json_rows).expect("JSON rows must not contain NUL");
    unsafe { qmlts_list_insert_rows(model_ptr, index, c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_remove_rows(model_ptr: *mut c_void, index: i32, count: i32) -> bool {
    unsafe { qmlts_list_remove_rows(model_ptr, index, count) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_update_row(model_ptr: *mut c_void, index: i32, json_data: &str) -> bool {
    let c_json = CString::new(json_data).expect("JSON data must not contain NUL");
    unsafe { qmlts_list_update_row(model_ptr, index, c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_move_rows(model_ptr: *mut c_void, source: i32, dest: i32, count: i32) -> bool {
    unsafe { qmlts_list_move_rows(model_ptr, source, dest, count) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn list_row_count(model_ptr: *mut c_void) -> i32 {
    unsafe { qmlts_list_row_count(model_ptr) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn list_get_row(model_ptr: *mut c_void, index: i32) -> Option<String> {
    let ptr = unsafe { qmlts_list_get_row(model_ptr, index) };
    if ptr.is_null() {
        return None;
    }
    let s = unsafe { std::ffi::CStr::from_ptr(ptr) }
        .to_string_lossy()
        .into_owned();
    unsafe { qmlts_free_string(ptr) };
    Some(s)
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

// ─────────────────────────────────────────────────────────────────────────
//  Mock property set/read wrappers (Step 3)
// ─────────────────────────────────────────────────────────────────────────

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_string_property(_qobject_ptr: *mut c_void, name: &str, value: &str) -> bool {
    tracing::debug!("Mock: set_string_property('{name}', '{value}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_int_property(_qobject_ptr: *mut c_void, name: &str, value: i32) -> bool {
    tracing::debug!("Mock: set_int_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_double_property(_qobject_ptr: *mut c_void, name: &str, value: f64) -> bool {
    tracing::debug!("Mock: set_double_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_bool_property(_qobject_ptr: *mut c_void, name: &str, value: bool) -> bool {
    tracing::debug!("Mock: set_bool_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_property_json(_qobject_ptr: *mut c_void, name: &str, json: &str) -> bool {
    tracing::debug!("Mock: set_property_json('{name}', '{json}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_string_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<String> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_property_json(_qobject_ptr: *mut c_void, _name: &str) -> Option<String> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_bool_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<bool> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_double_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<f64> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn root_object(_engine_ptr: *mut c_void) -> *mut c_void {
    std::ptr::null_mut()
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn emit_signal(
    _qobject_ptr: *mut c_void,
    signal_name: &str,
    payload_json: Option<&str>,
    _param_types_json: Option<&str>,
) -> bool {
    tracing::debug!("Mock: emit_signal('{signal_name}', {:?})", payload_json);
    true
}

// ─────────────────────────────────────────────────────────────────────────
//  List model mock wrappers
// ─────────────────────────────────────────────────────────────────────────

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn create_list_model(schema_json: &str) -> *mut c_void {
    tracing::debug!("Mock: create_list_model('{schema_json}')");
    // Return a heap-allocated fake pointer
    Box::into_raw(Box::new(0u8)).cast::<c_void>()
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn destroy_list_model(model_ptr: *mut c_void) {
    tracing::debug!("Mock: destroy_list_model");
    if !model_ptr.is_null() {
        // Free the fake pointer
        drop(unsafe { Box::from_raw(model_ptr.cast::<u8>()) });
    }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_set_data(_model_ptr: *mut c_void, json_array: &str) -> bool {
    tracing::debug!("Mock: list_set_data('{json_array}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_insert_rows(_model_ptr: *mut c_void, index: i32, json_rows: &str) -> bool {
    tracing::debug!("Mock: list_insert_rows({index}, '{json_rows}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_remove_rows(_model_ptr: *mut c_void, index: i32, count: i32) -> bool {
    tracing::debug!("Mock: list_remove_rows({index}, {count})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_update_row(_model_ptr: *mut c_void, index: i32, json_data: &str) -> bool {
    tracing::debug!("Mock: list_update_row({index}, '{json_data}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_move_rows(_model_ptr: *mut c_void, source: i32, dest: i32, count: i32) -> bool {
    tracing::debug!("Mock: list_move_rows({source}, {dest}, {count})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn list_row_count(_model_ptr: *mut c_void) -> i32 {
    tracing::debug!("Mock: list_row_count");
    0
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn list_get_row(_model_ptr: *mut c_void, _index: i32) -> Option<String> {
    tracing::debug!("Mock: list_get_row");
    Some("{}".to_string())
}

// ─────────────────────────────────────────────────────────────────────────
//  §8 Hot Reload
// ─────────────────────────────────────────────────────────────────────────

/// Capture the current UI state as a JSON string.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn capture_snapshot(engine_ptr: *mut c_void) -> Option<String> {
    let raw = unsafe { qmlts_capture_snapshot(engine_ptr) };
    if raw.is_null() {
        return None;
    }
    let s = unsafe { std::ffi::CStr::from_ptr(raw) }
        .to_string_lossy()
        .into_owned();
    unsafe { qmlts_free_snapshot_string(raw) };
    Some(s)
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn capture_snapshot(_engine_ptr: *mut c_void) -> Option<String> {
    tracing::debug!("Mock: capture_snapshot");
    Some(r#"{"window":{"x":0,"y":0,"width":800,"height":600},"focusId":"","scrollPositions":{},"selectedIndices":{}}"#.to_string())
}

/// Reload QML by attempting to load a new root tree and swapping it in on success.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn reload_qml(engine_ptr: *mut c_void, data: &[u8], base_url: Option<&str>) -> bool {
    let c_url = match base_url {
        Some(url) => match CString::new(url) {
            Ok(value) => Some(value),
            Err(_) => return false,
        },
        None => None,
    };
    let url_ptr = c_url
        .as_ref()
        .map_or(std::ptr::null(), |value| value.as_ptr());
    unsafe { qmlts_reload_qml(engine_ptr, data.as_ptr().cast(), data.len(), url_ptr) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn reload_qml(_engine_ptr: *mut c_void, _data: &[u8], _base_url: Option<&str>) -> bool {
    tracing::debug!("Mock: reload_qml");
    true
}

/// Restore UI state from a JSON snapshot.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn restore_snapshot(engine_ptr: *mut c_void, json: &str) -> bool {
    let bytes = json.as_bytes();
    unsafe { qmlts_restore_snapshot(engine_ptr, bytes.as_ptr().cast(), bytes.len()) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn restore_snapshot(_engine_ptr: *mut c_void, _json: &str) -> bool {
    tracing::debug!("Mock: restore_snapshot");
    true
}

// ─── Error overlay ──────────────────────────────────────────────────────

/// Show or update the error overlay with the given message text.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn show_error_overlay(engine_ptr: *mut c_void, message: &str) -> bool {
    let bytes = message.as_bytes();
    unsafe { qmlts_show_error_overlay(engine_ptr, bytes.as_ptr().cast(), bytes.len()) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn show_error_overlay(_engine_ptr: *mut c_void, _message: &str) -> bool {
    tracing::debug!("Mock: show_error_overlay");
    true
}

/// Hide the error overlay (if visible).
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn hide_error_overlay(engine_ptr: *mut c_void) -> bool {
    unsafe { qmlts_hide_error_overlay(engine_ptr) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn hide_error_overlay(_engine_ptr: *mut c_void) -> bool {
    tracing::debug!("Mock: hide_error_overlay");
    true
}

/// Query whether the error overlay is currently visible.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn is_error_overlay_visible(engine_ptr: *mut c_void) -> bool {
    unsafe { qmlts_is_error_overlay_visible(engine_ptr) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn is_error_overlay_visible(_engine_ptr: *mut c_void) -> bool {
    tracing::debug!("Mock: is_error_overlay_visible");
    false
}

// ─── V2 property change forwarding and lifecycle ────────────────────────

/// Set the suppress flag on a V2 QObject to prevent echo during sync.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn v2_set_suppress(qobj: *mut c_void, suppress: bool) {
    unsafe { qmlts_v2_set_suppress(qobj, suppress) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn v2_set_suppress(_qobj: *mut c_void, _suppress: bool) {
    tracing::debug!("Mock: v2_set_suppress");
}

/// Connect the QObject::destroyed handler for V2 instance cleanup.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn v2_connect_destroy_handler(qobj: *mut c_void, owner_id: i32, instance_id: i32) {
    unsafe { qmlts_v2_connect_destroy_handler(qobj, owner_id, instance_id) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn v2_connect_destroy_handler(_qobj: *mut c_void, _owner_id: i32, _instance_id: i32) {
    tracing::debug!("Mock: v2_connect_destroy_handler");
}

/// RAII guard that suppresses V2 property change notifications.
/// Used during `sync_state_v2` to prevent echo.
pub struct SuppressGuard {
    ptr: *mut c_void,
}

impl SuppressGuard {
    /// Create a new suppress guard. Suppresses notifications on construction.
    #[must_use]
    pub fn new(ptr: *mut c_void) -> Self {
        v2_set_suppress(ptr, true);
        Self { ptr }
    }
}

impl Drop for SuppressGuard {
    fn drop(&mut self) {
        v2_set_suppress(self.ptr, false);
    }
}

// ─── V2 instance state capture / restore (Step 8) ───────────────────────

#[cfg(feature = "mock-qt")]
mod mock_v2_props {
    use std::collections::HashMap;
    use std::sync::{LazyLock, Mutex};

    /// Single shared store for mock V2 property data.
    /// Key: qobject ptr as usize → {prop_name → json_value_string}
    pub(super) static STORE: LazyLock<Mutex<HashMap<usize, HashMap<String, String>>>> =
        LazyLock::new(|| Mutex::new(HashMap::new()));
}

/// Read schema-declared properties from a V2 QObject.
/// Returns JSON: `{"props": {...}, "diagnostics": [...]}`
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn v2_read_properties(qobject_ptr: *mut c_void, property_names_json: &str) -> Option<String> {
    let c_json = std::ffi::CString::new(property_names_json).ok()?;
    let raw = unsafe { qmlts_v2_read_properties(qobject_ptr, c_json.as_ptr()) };
    if raw.is_null() {
        return None;
    }
    let result = unsafe { std::ffi::CStr::from_ptr(raw) }
        .to_str()
        .ok()
        .map(|s| s.to_string());
    unsafe { qmlts_free_string(raw) };
    result
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn v2_read_properties(qobject_ptr: *mut c_void, property_names_json: &str) -> Option<String> {
    let ptr_key = qobject_ptr as usize;
    let names: Vec<String> = serde_json::from_str(property_names_json).ok()?;
    let store = mock_v2_props::STORE.lock().expect("mock props lock");
    let obj_props = store.get(&ptr_key);

    let mut props = serde_json::Map::new();
    let diagnostics = serde_json::Value::Array(vec![]);

    for name in &names {
        if let Some(obj) = obj_props {
            if let Some(val_str) = obj.get(name) {
                if let Ok(val) = serde_json::from_str::<serde_json::Value>(val_str) {
                    props.insert(name.clone(), val);
                }
            }
        }
    }

    let result = serde_json::json!({ "props": props, "diagnostics": diagnostics });
    Some(result.to_string())
}

/// Write properties to a V2 QObject.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn v2_write_properties(qobject_ptr: *mut c_void, properties_json: &str) -> bool {
    let Ok(c_json) = std::ffi::CString::new(properties_json) else {
        return false;
    };
    unsafe { qmlts_v2_write_properties(qobject_ptr, c_json.as_ptr()) }
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn v2_write_properties(qobject_ptr: *mut c_void, properties_json: &str) -> bool {
    let ptr_key = qobject_ptr as usize;
    let props: serde_json::Map<String, serde_json::Value> =
        match serde_json::from_str(properties_json) {
            Ok(serde_json::Value::Object(m)) => m,
            _ => return false,
        };

    let mut store = mock_v2_props::STORE.lock().expect("mock props lock");
    let obj_props = store.entry(ptr_key).or_default();
    for (k, v) in props {
        obj_props.insert(k, v.to_string());
    }
    true
}

/// Seed mock property data for a QObject pointer. Test-only.
#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn mock_seed_v2_properties(qobject_ptr: *mut c_void, properties: &[(&str, &str)]) {
    let ptr_key = qobject_ptr as usize;
    let mut store = mock_v2_props::STORE.lock().expect("mock props lock");
    let obj_props = store.entry(ptr_key).or_default();
    for (name, value) in properties {
        obj_props.insert((*name).to_string(), (*value).to_string());
    }
}

/// Clear all mock V2 property data. Test-only.
#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn mock_clear_v2_properties() {
    mock_v2_props::STORE.lock().expect("mock props lock").clear();
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
