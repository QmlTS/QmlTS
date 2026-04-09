//! Schema-aware property synchronization between TypeScript state and Qt properties.
//!
//! Provides `sync_one`, `sync_batch`, and `read_one` that use
//! the parsed `ViewModelSchema` to validate property names and
//! dispatch type-specific FFI calls.

use std::ffi::c_void;

use qmlts_host_generated::{SchemaState, ViewModelSchema};

use crate::error::{QmltsError, Result};
use crate::qt_context;

/// Find a schema state entry by its `qmlName`.
fn find_state<'a>(schema: &'a ViewModelSchema, prop_name: &str) -> Option<&'a SchemaState> {
    schema.states.iter().find(|s| s.qml_name == prop_name)
}

/// Synchronize a single TypeScript property value into a Qt property.
///
/// `vm_ptr` must point to a live QObject.
/// `json_value` is the JSON-encoded value from TypeScript.
pub fn sync_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
    json_value: &str,
) -> Result<()> {
    let state = find_state(schema, prop_name).ok_or_else(|| QmltsError::PropertyNotFound {
        vm: schema.class_name.clone(),
        prop: prop_name.to_string(),
    })?;

    let parsed: serde_json::Value =
        serde_json::from_str(json_value).map_err(|e| QmltsError::TypeMismatch {
            vm: schema.class_name.clone(),
            prop: prop_name.to_string(),
            expected: state.qml_type.clone(),
            actual: format!("invalid JSON: {e}"),
        })?;

    write_property(
        vm_ptr,
        &schema.class_name,
        &state.qml_name,
        &state.qml_type,
        &parsed,
    )
}

/// Synchronize a batch of property values at once.
///
/// `json_map` is a JSON object `{"prop1": value1, "prop2": value2, ...}`.
/// Uses best-effort semantics: all properties are attempted; failures are
/// collected into `BatchSyncPartialFailure`.
pub fn sync_batch(vm_ptr: *mut c_void, schema: &ViewModelSchema, json_map: &str) -> Result<()> {
    let map: serde_json::Map<String, serde_json::Value> = serde_json::from_str(json_map)
        .map_err(|e| QmltsError::Internal(format!("sync_batch: invalid JSON map: {e}")))?;

    let total = map.len();
    let mut failures: Vec<String> = Vec::new();

    for (prop_name, value) in &map {
        if let Err(e) = sync_one_value(vm_ptr, schema, prop_name, value) {
            failures.push(e.to_string());
        }
    }

    if failures.is_empty() {
        Ok(())
    } else {
        Err(QmltsError::BatchSyncPartialFailure {
            count: failures.len(),
            total,
            details: failures.join("; "),
        })
    }
}

/// Internal helper for batch — sync from an already-parsed JSON value.
fn sync_one_value(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
    value: &serde_json::Value,
) -> Result<()> {
    let state = find_state(schema, prop_name).ok_or_else(|| QmltsError::PropertyNotFound {
        vm: schema.class_name.clone(),
        prop: prop_name.to_string(),
    })?;

    write_property(
        vm_ptr,
        &schema.class_name,
        &state.qml_name,
        &state.qml_type,
        value,
    )
}

/// Read a single property from the QObject and return it as a JSON value.
pub fn read_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
) -> Result<serde_json::Value> {
    let state = find_state(schema, prop_name).ok_or_else(|| QmltsError::PropertyNotFound {
        vm: schema.class_name.clone(),
        prop: prop_name.to_string(),
    })?;

    read_property(vm_ptr, &schema.class_name, &state.qml_name, &state.qml_type)
}

// ─────────────────────────────────────────────────────────────────────────
//  Internal dispatch
// ─────────────────────────────────────────────────────────────────────────

/// Write a JSON value to a Qt property using the correct type-specific FFI call.
fn write_property(
    vm_ptr: *mut c_void,
    class_name: &str,
    qml_name: &str,
    qml_type: &str,
    value: &serde_json::Value,
) -> Result<()> {
    let ok = match qml_type {
        "string" => {
            let s = value.as_str().ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: qml_name.to_string(),
                expected: "string".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_string_property(vm_ptr, qml_name, s)
        }
        "int" => {
            let n = value_to_i32(value).ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: qml_name.to_string(),
                expected: "int".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_int_property(vm_ptr, qml_name, n)
        }
        "real" => {
            let n = value_to_f64(value).ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: qml_name.to_string(),
                expected: "real".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_double_property(vm_ptr, qml_name, n)
        }
        "bool" => {
            let b = value.as_bool().ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: qml_name.to_string(),
                expected: "bool".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_bool_property(vm_ptr, qml_name, b)
        }
        // Complex types (date, list<*>) — pass through as JSON
        _ => {
            let json_str = serde_json::to_string(value)
                .map_err(|e| QmltsError::Internal(format!("JSON serialization failed: {e}")))?;
            qt_context::set_property_json(vm_ptr, qml_name, &json_str)
        }
    };

    if ok {
        Ok(())
    } else {
        Err(QmltsError::Internal(format!(
            "FFI set property failed for '{qml_name}' on '{class_name}'"
        )))
    }
}

/// Read a Qt property and convert it to a JSON value.
fn read_property(
    vm_ptr: *mut c_void,
    class_name: &str,
    qml_name: &str,
    qml_type: &str,
) -> Result<serde_json::Value> {
    match qml_type {
        "string" => {
            let val = qt_context::read_string_property(vm_ptr, qml_name).ok_or_else(|| {
                QmltsError::Internal(format!(
                    "FFI read_string_property failed for '{qml_name}' on '{class_name}'"
                ))
            })?;
            Ok(serde_json::Value::String(val))
        }
        "int" => {
            let val = qt_context::read_int_property(vm_ptr, qml_name).ok_or_else(|| {
                QmltsError::Internal(format!(
                    "FFI read_int_property failed for '{qml_name}' on '{class_name}'"
                ))
            })?;
            Ok(serde_json::Value::Number(val.into()))
        }
        "real" => {
            let val = qt_context::read_double_property(vm_ptr, qml_name).ok_or_else(|| {
                QmltsError::Internal(format!(
                    "FFI read_double_property failed for '{qml_name}' on '{class_name}'"
                ))
            })?;
            serde_json::Number::from_f64(val)
                .map(serde_json::Value::Number)
                .ok_or_else(|| {
                    QmltsError::Internal(format!("Cannot represent {val} as JSON number"))
                })
        }
        "bool" => {
            let val = qt_context::read_bool_property(vm_ptr, qml_name).ok_or_else(|| {
                QmltsError::Internal(format!(
                    "FFI read_bool_property failed for '{qml_name}' on '{class_name}'"
                ))
            })?;
            Ok(serde_json::Value::Bool(val))
        }
        _ => {
            // Complex types — try reading as string (JSON encoded)
            let val = qt_context::read_string_property(vm_ptr, qml_name).ok_or_else(|| {
                QmltsError::Internal(format!(
                    "FFI read_string_property failed for '{qml_name}' on '{class_name}'"
                ))
            })?;
            serde_json::from_str(&val).map_err(|e| {
                QmltsError::Internal(format!("Failed to parse JSON for '{qml_name}': {e}"))
            })
        }
    }
}

// ─────────────────────────────────────────────────────────────────────────
//  JSON helpers
// ─────────────────────────────────────────────────────────────────────────

fn json_type_name(v: &serde_json::Value) -> String {
    match v {
        serde_json::Value::Null => "null".to_string(),
        serde_json::Value::Bool(_) => "bool".to_string(),
        serde_json::Value::Number(_) => "number".to_string(),
        serde_json::Value::String(_) => "string".to_string(),
        serde_json::Value::Array(_) => "array".to_string(),
        serde_json::Value::Object(_) => "object".to_string(),
    }
}

fn value_to_i32(v: &serde_json::Value) -> Option<i32> {
    v.as_i64().and_then(|n| i32::try_from(n).ok())
}

fn value_to_f64(v: &serde_json::Value) -> Option<f64> {
    v.as_f64()
}

// ─────────────────────────────────────────────────────────────────────────
//  Unit tests (run with mock-qt feature)
// ─────────────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use qmlts_host_generated::SchemaLifecycle;
    use std::ptr;

    fn test_schema() -> ViewModelSchema {
        ViewModelSchema {
            class_name: "TestVM".to_string(),
            version: 1,
            states: vec![
                SchemaState {
                    name: "username".to_string(),
                    qml_name: "username".to_string(),
                    qml_type: "string".to_string(),
                    member_id: 0,
                    readonly: false,
                    deferred: false,
                    default_value: None,
                },
                SchemaState {
                    name: "count".to_string(),
                    qml_name: "count".to_string(),
                    qml_type: "int".to_string(),
                    member_id: 1,
                    readonly: false,
                    deferred: false,
                    default_value: None,
                },
                SchemaState {
                    name: "ratio".to_string(),
                    qml_name: "ratio".to_string(),
                    qml_type: "real".to_string(),
                    member_id: 2,
                    readonly: false,
                    deferred: false,
                    default_value: None,
                },
                SchemaState {
                    name: "active".to_string(),
                    qml_name: "active".to_string(),
                    qml_type: "bool".to_string(),
                    member_id: 3,
                    readonly: true,
                    deferred: false,
                    default_value: None,
                },
            ],
            commands: vec![],
            effects: vec![],
            lifecycle: SchemaLifecycle::default(),
        }
    }

    // sync_one tests

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_one_string_succeeds() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "username", "\"alice\"");
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_one_int_succeeds() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "count", "42");
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_one_real_succeeds() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "ratio", "3.14");
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_one_bool_succeeds() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "active", "true");
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_one_readonly_also_writes() {
        // Host always has full write access regardless of readonly
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "active", "false");
        assert!(result.is_ok());
    }

    #[test]
    fn sync_one_property_not_found() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "nonexistent", "\"hello\"");
        assert!(matches!(
            result,
            Err(QmltsError::PropertyNotFound { ref vm, ref prop })
            if vm == "TestVM" && prop == "nonexistent"
        ));
    }

    #[test]
    fn sync_one_type_mismatch_string_expects_string() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "username", "42");
        assert!(matches!(result, Err(QmltsError::TypeMismatch { .. })));
    }

    #[test]
    fn sync_one_type_mismatch_int_expects_number() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "count", "\"not_a_number\"");
        assert!(matches!(result, Err(QmltsError::TypeMismatch { .. })));
    }

    #[test]
    fn sync_one_type_mismatch_bool_expects_bool() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "active", "\"yes\"");
        assert!(matches!(result, Err(QmltsError::TypeMismatch { .. })));
    }

    #[test]
    fn sync_one_invalid_json() {
        let schema = test_schema();
        let result = sync_one(ptr::null_mut(), &schema, "username", "{bad json");
        assert!(matches!(result, Err(QmltsError::TypeMismatch { .. })));
    }

    // sync_batch tests

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_batch_all_succeed() {
        let schema = test_schema();
        let result = sync_batch(
            ptr::null_mut(),
            &schema,
            r#"{"username": "bob", "count": 10, "active": true}"#,
        );
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_batch_partial_failure() {
        let schema = test_schema();
        let result = sync_batch(
            ptr::null_mut(),
            &schema,
            r#"{"username": "bob", "missing_prop": 42}"#,
        );
        match result {
            Err(QmltsError::BatchSyncPartialFailure {
                count,
                total,
                ref details,
            }) => {
                assert_eq!(count, 1);
                assert_eq!(total, 2);
                assert!(details.contains("missing_prop"));
            }
            other => panic!("Expected BatchSyncPartialFailure, got {other:?}"),
        }
    }

    #[test]
    fn sync_batch_invalid_json_map() {
        let schema = test_schema();
        let result = sync_batch(ptr::null_mut(), &schema, "not json");
        assert!(matches!(result, Err(QmltsError::Internal(_))));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn sync_batch_empty_map_succeeds() {
        let schema = test_schema();
        let result = sync_batch(ptr::null_mut(), &schema, "{}");
        assert!(result.is_ok());
    }

    // read_one tests (mock returns None, so reads fail)

    #[test]
    fn read_one_property_not_found() {
        let schema = test_schema();
        let result = read_one(ptr::null_mut(), &schema, "nonexistent");
        assert!(matches!(result, Err(QmltsError::PropertyNotFound { .. })));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn read_one_mock_returns_error_for_string() {
        // Mock read_string_property returns None, so we get an Internal error
        let schema = test_schema();
        let result = read_one(ptr::null_mut(), &schema, "username");
        assert!(matches!(result, Err(QmltsError::Internal(_))));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn read_one_mock_returns_error_for_int() {
        let schema = test_schema();
        let result = read_one(ptr::null_mut(), &schema, "count");
        assert!(matches!(result, Err(QmltsError::Internal(_))));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn read_one_mock_returns_error_for_bool() {
        let schema = test_schema();
        let result = read_one(ptr::null_mut(), &schema, "active");
        assert!(matches!(result, Err(QmltsError::Internal(_))));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn read_one_mock_returns_error_for_real() {
        let schema = test_schema();
        let result = read_one(ptr::null_mut(), &schema, "ratio");
        assert!(matches!(result, Err(QmltsError::Internal(_))));
    }
}
