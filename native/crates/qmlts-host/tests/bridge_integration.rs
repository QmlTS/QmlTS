#![cfg(not(feature = "mock-qt"))]

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
    assert!(engine.has_context_property("vm"));
    assert!(engine.has_context_property("__qmlts"));
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
    // Load QML that actually touches both vm and __qmlts.
    let result = engine.load_string(
        r#"import QtQuick
Item {
    property string u: vm.username
    Component.onCompleted: __qmlts.invoke(123)
}"#,
        None,
    );
    assert!(result.is_ok());
    engine.process_events().unwrap();
    assert_eq!(engine.active_runtime_i32_property("invokeCount"), Some(1));
}

#[test]
fn test_bridge_pointers_are_valid() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();
    let bridge = engine.active_bridge().unwrap();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}

// ─────────────────────────────────────────────────────────────────────────
//  Golden QML contract tests
// ─────────────────────────────────────────────────────────────────────────

/// Exercises ALL bindings that the golden compiler-produced LoginView.qml
/// depends on: vm.username, vm.password, vm.isLoading, __qmlts.onMounted(),
/// and the Connections block for the onOnLoginCompleted effect signal.
#[test]
fn test_golden_login_view_full_contract() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.load_string(
        r#"import QtQuick

Rectangle {
    width: 400
    height: 300

    Column {
        Text { text: vm.username }
        Text { text: vm.password }
        Text { text: vm.isLoading }
    }

    Connections {
        target: __qmlts
        function onOnLoginCompleted(success) { }
    }

    Component.onCompleted: { __qmlts.onMounted() }
}"#,
        None,
    );
    assert!(
        result.is_ok(),
        "Golden LoginView QML contract should load: {result:?}"
    );

    engine.process_events().unwrap();

    // onMounted was called via Component.onCompleted
    assert_eq!(
        engine.active_runtime_i32_property("mountedCount"),
        Some(1),
        "onMounted should have been called exactly once"
    );
}

/// Exercises all bindings from golden CounterView.qml: vm.count.
#[test]
fn test_golden_counter_view_contract() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();

    let result = engine.load_string(
        r#"import QtQuick

Rectangle {
    width: 200
    height: 100

    Text { text: vm.count }
}"#,
        None,
    );
    assert!(
        result.is_ok(),
        "Golden CounterView QML contract should load: {result:?}"
    );
    engine.process_events().unwrap();
}

/// Load the actual compiler-produced golden LoginView.qml fixture.
#[test]
fn test_load_actual_golden_login_view_file() {
    let golden = std::path::Path::new(env!("CARGO_MANIFEST_DIR"))
        .join("../../..")
        .join("tests/compiler/pipeline/fixtures/golden/LoginView.qml");
    assert!(golden.exists(), "Golden fixture should exist at {golden:?}");

    let golden_content =
        std::fs::read_to_string(&golden).expect("should read golden LoginView.qml");
    assert!(
        golden_content.contains("vm.username"),
        "golden QML should reference vm.username"
    );
    assert!(
        golden_content.contains("__qmlts.onMounted"),
        "golden QML should reference __qmlts.onMounted"
    );

    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.load_string(&golden_content, None);
    assert!(
        result.is_ok(),
        "Actual golden LoginView.qml should load: {result:?}"
    );
    engine.process_events().unwrap();

    // The golden QML calls __qmlts.onMounted() in Component.onCompleted
    assert_eq!(
        engine.active_runtime_i32_property("mountedCount"),
        Some(1),
        "onMounted should be called from golden LoginView.qml Component.onCompleted"
    );
}

// ─────────────────────────────────────────────────────────────────────────
//  Lifecycle / effect contract tests
// ─────────────────────────────────────────────────────────────────────────

/// Prove that onMounted() produces an observable side effect.
/// Before loading QML, mountedCount is 0. After Component.onCompleted
/// fires and calls __qmlts.onMounted(), mountedCount increments to 1.
#[test]
fn test_lifecycle_on_mounted_is_observable() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // Before loading QML, mountedCount should be 0
    assert_eq!(engine.active_runtime_i32_property("mountedCount"), Some(0));

    engine
        .load_string(
            r#"import QtQuick
Item {
    Component.onCompleted: __qmlts.onMounted()
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    assert_eq!(
        engine.active_runtime_i32_property("mountedCount"),
        Some(1),
        "mountedCount should increment from 0 to 1 after onMounted"
    );
}

/// Prove the effect signal naming contract: QML can connect to
/// the onOnLoginCompleted signal on __qmlts without errors.
/// This validates that cxx-qt generates the correct signal name
/// (camelCase onLoginCompleted → QML handler onOnLoginCompleted).
#[test]
fn test_effect_signal_connectable_from_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.load_string(
        r#"import QtQuick
Item {
    Connections {
        target: __qmlts
        function onOnLoginCompleted(success) { }
    }
}"#,
        None,
    );
    assert!(
        result.is_ok(),
        "QML with effect signal connection should load: {result:?}"
    );
    engine.process_events().unwrap();
}

/// Verify that invoke and onMounted are independent counters.
/// invoke increments invokeCount, onMounted increments mountedCount.
#[test]
fn test_invoke_and_mounted_are_independent() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    Component.onCompleted: {
        __qmlts.invoke(42)
        __qmlts.invoke(43)
        __qmlts.onMounted()
    }
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    assert_eq!(
        engine.active_runtime_i32_property("invokeCount"),
        Some(2),
        "invokeCount should be 2 after two invoke() calls"
    );
    assert_eq!(
        engine.active_runtime_i32_property("mountedCount"),
        Some(1),
        "mountedCount should be 1 after one onMounted() call"
    );
}

// ─────────────────────────────────────────────────────────────────────────
//  Property sync integration tests (Step 3)
// ─────────────────────────────────────────────────────────────────────────

#[test]
fn test_sync_state_sets_string_property() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state("LoginViewModel", "username", "\"alice\"")
        .unwrap();

    // Load QML with root-level property bound to vm.username for readback
    engine
        .load_string(
            r#"import QtQuick
Item {
    objectName: "root"
    property string displayedUsername: vm.username
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Read the root object's displayedUsername property
    let root = engine.root_object_ptr();
    assert!(!root.is_null(), "root object should exist");
    let val = qmlts_host::qt_context_test::read_string_property(root, "displayedUsername");
    assert_eq!(val, Some("alice".to_string()));
}

#[test]
fn test_sync_state_sets_bool_property() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // isLoading is bool, readonly in QML but host has full write access
    engine
        .sync_state("LoginViewModel", "isLoading", "true")
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property bool displayedLoading: vm.isLoading
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    let val = qmlts_host::qt_context_test::read_bool_property(root, "displayedLoading");
    assert_eq!(val, Some(true));
}

#[test]
fn test_sync_state_batch_sets_multiple_properties() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state_batch(
            "LoginViewModel",
            r#"{"username":"bob","password":"s3cret"}"#,
        )
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string u: vm.username
    property string p: vm.password
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "u"),
        Some("bob".to_string())
    );
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "p"),
        Some("s3cret".to_string())
    );
}

#[test]
fn test_get_property_roundtrip() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state("LoginViewModel", "username", "\"roundtrip\"")
        .unwrap();

    let result = engine.get_property("LoginViewModel", "username").unwrap();
    assert_eq!(result, "\"roundtrip\"");
}

#[test]
fn test_sync_state_property_not_found_error() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.sync_state("LoginViewModel", "nonexistent", "\"x\"");
    assert!(result.is_err());
    let err_msg = result.unwrap_err().to_string();
    assert!(err_msg.contains("nonexistent"));
    assert!(err_msg.contains("not found"));
}

#[test]
fn test_sync_state_type_mismatch_error() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // username is string, pass a number
    let result = engine.sync_state("LoginViewModel", "username", "42");
    assert!(result.is_err());
    let err_msg = result.unwrap_err().to_string();
    assert!(err_msg.contains("Type mismatch"));
}

#[test]
fn test_sync_state_wrong_class_name_error() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.sync_state("CounterViewModel", "count", "0");
    assert!(result.is_err());
}

#[test]
fn test_sync_state_batch_partial_failure() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.sync_state_batch("LoginViewModel", r#"{"username":"ok","nonexistent":42}"#);
    assert!(result.is_err());
    let err_msg = result.unwrap_err().to_string();
    assert!(err_msg.contains("partial failure"));
    assert!(err_msg.contains("1 of 2"));
    assert_eq!(
        engine.get_property("LoginViewModel", "username").unwrap(),
        "\"ok\""
    );
}

#[test]
fn test_counter_sync_int_property() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();

    engine
        .sync_state("CounterViewModel", "count", "99")
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property int displayedCount: vm.count
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    let val = qmlts_host::qt_context_test::read_int_property(root, "displayedCount");
    assert_eq!(val, Some(99));
}

// ─────────────────────────────────────────────────────────────────────────
//  Observable binding readback (root property pattern)
// ─────────────────────────────────────────────────────────────────────────

#[test]
fn test_observable_binding_readback_after_sync() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // Load QML with observable bindings
    engine
        .load_string(
            r#"import QtQuick
Item {
    property string boundUsername: vm.username
    property string boundPassword: vm.password
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Sync state AFTER load — bindings should update reactively
    engine
        .sync_state("LoginViewModel", "username", "\"reactive\"")
        .unwrap();
    engine
        .sync_state("LoginViewModel", "password", "\"update\"")
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "boundUsername"),
        Some("reactive".to_string()),
        "Binding should update when vm property changes"
    );
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "boundPassword"),
        Some("update".to_string()),
    );
}
