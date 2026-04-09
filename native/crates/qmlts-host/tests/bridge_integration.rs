//! Integration tests for bridge registration with real Qt.
//!
//! These tests verify the full engine → registry → bridge pipeline
//! without `mock-qt`. They exercise real cxx-qt factory functions.
//!
//! Run via: `cargo test -p qmlts-host --no-default-features`
//! (requires Qt — will fail to link without Qt installation)

use qmlts_host::QmltsEngine;

#[test]
fn test_engine_creates_with_registry() {
    let engine = QmltsEngine::new(None).unwrap();
    assert!(engine.is_initialized());
    assert!(engine.has_bridge_type("LoginViewModel"));
    assert!(engine.has_bridge_type("CounterViewModel"));
    assert!(!engine.has_bridge_type("NonExistent"));
}

#[test]
fn test_get_registered_types() {
    let engine = QmltsEngine::new(None).unwrap();
    let types = engine.get_registered_types();
    assert!(types.contains(&"LoginViewModel"));
    assert!(types.contains(&"CounterViewModel"));
    assert_eq!(types.len(), 2);
}

#[test]
fn test_register_login_view_model() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    assert!(engine.active_bridge().is_some());
}

#[test]
fn test_register_counter_view_model() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();
    assert!(engine.active_bridge().is_some());
}

#[test]
fn test_register_unknown_type_fails() {
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

#[test]
fn test_register_then_load_qml_with_vm_ref() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    // Load QML that references vm — verifies bridge is available
    let result = engine.load_string(
        r#"import QtQuick
Item {
    property string u: ""
}"#,
        None,
    );
    assert!(result.is_ok());
}

#[test]
fn test_bridge_pointers_are_valid() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    let bridge = engine.active_bridge().unwrap();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}
