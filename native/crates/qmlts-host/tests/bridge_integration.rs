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
