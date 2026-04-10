#![cfg(not(feature = "mock-qt"))]

//! Integration tests for bridge registration with real Qt.
//!
//! These tests verify the full engine → registry → bridge pipeline
//! without `mock-qt`. They exercise real cxx-qt factory functions.
//!
//! Run via: `cargo test -p qmlts-host --no-default-features`
//! (requires Qt — will fail to link without Qt installation)

use qmlts_host::QmltsEngine;
use std::sync::{Arc, Mutex};

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
    assert!(types.contains(&"SearchViewModel"));
    assert_eq!(types.len(), 3);
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

#[test]
fn test_multiple_engines_dispatch_to_their_own_handlers() {
    let mut engine1 = QmltsEngine::new(None).unwrap();
    let mut engine2 = QmltsEngine::new(None).unwrap();
    engine1.register_view_model("LoginViewModel").unwrap();
    engine2.register_view_model("LoginViewModel").unwrap();

    let engine1_calls: Arc<Mutex<Vec<(String, u32)>>> = Arc::new(Mutex::new(Vec::new()));
    let engine2_calls: Arc<Mutex<Vec<(String, u32)>>> = Arc::new(Mutex::new(Vec::new()));

    {
        let calls = Arc::clone(&engine1_calls);
        engine1
            .register_invoke_handler(Box::new(move |class_name, command_id| {
                calls
                    .lock()
                    .unwrap()
                    .push((class_name.to_string(), command_id));
            }))
            .unwrap();
    }
    {
        let calls = Arc::clone(&engine2_calls);
        engine2
            .register_invoke_handler(Box::new(move |class_name, command_id| {
                calls
                    .lock()
                    .unwrap()
                    .push((class_name.to_string(), command_id));
            }))
            .unwrap();
    }

    engine1
        .load_string(
            r#"import QtQuick
Item {
    Component.onCompleted: __qmlts.invoke(101)
}"#,
            None,
        )
        .unwrap();
    engine2
        .load_string(
            r#"import QtQuick
Item {
    Component.onCompleted: __qmlts.invoke(202)
}"#,
            None,
        )
        .unwrap();

    engine1.process_events().unwrap();
    engine2.process_events().unwrap();

    assert_eq!(
        *engine1_calls.lock().unwrap(),
        vec![("LoginViewModel".to_string(), 101)]
    );
    assert_eq!(
        *engine2_calls.lock().unwrap(),
        vec![("LoginViewModel".to_string(), 202)]
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

// ─────────────────────────────────────────────────────────────────────────
//  Multi-parameter effect signal tests (Step 5)
// ─────────────────────────────────────────────────────────────────────────

/// Verify that SearchViewModel can be registered and QML can connect
/// to its multi-parameter onSearchCompleted signal.
#[test]
fn test_search_view_model_registers_and_loads_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("SearchViewModel").unwrap();

    let result = engine.load_string(
        r#"import QtQuick
Item {
    property string receivedQuery: ""
    property int receivedCount: -1

    Connections {
        target: __qmlts
        function onOnSearchCompleted(query, resultCount) {
            receivedQuery = query
            receivedCount = resultCount
        }
    }
}"#,
        None,
    );
    assert!(
        result.is_ok(),
        "SearchViewModel QML should load: {result:?}"
    );
    engine.process_events().unwrap();
}

/// Verify that emitting a multi-parameter effect signal is observable from QML.
/// Emits onSearchCompleted("hello", 42) and reads back both values.
#[test]
fn test_multi_param_effect_emission_observable() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("SearchViewModel").unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string receivedQuery: ""
    property int receivedCount: -1

    Connections {
        target: __qmlts
        function onOnSearchCompleted(query, resultCount) {
            receivedQuery = query
            receivedCount = resultCount
        }
    }
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Emit the multi-param effect
    engine
        .emit_effect(
            "SearchViewModel",
            "onSearchCompleted",
            Some(r#"["hello", 42]"#),
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert!(!root.is_null(), "root object should exist");

    let received_query = qmlts_host::qt_context_test::read_string_property(root, "receivedQuery");
    assert_eq!(
        received_query,
        Some("hello".to_string()),
        "QML should receive the string parameter"
    );

    let received_count = qmlts_host::qt_context_test::read_int_property(root, "receivedCount");
    assert_eq!(
        received_count,
        Some(42),
        "QML should receive the int parameter"
    );
}

/// Verify multi-param effect emission by effect ID.
#[test]
fn test_multi_param_effect_emission_by_id() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("SearchViewModel").unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string receivedQuery: ""
    property int receivedCount: -1

    Connections {
        target: __qmlts
        function onOnSearchCompleted(query, resultCount) {
            receivedQuery = query
            receivedCount = resultCount
        }
    }
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Emit by ID (SearchViewModel's onSearchCompleted has effectId 1234567890)
    engine
        .emit_effect_by_id("SearchViewModel", 1_234_567_890, Some(r#"["world", 99]"#))
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    let received_query = qmlts_host::qt_context_test::read_string_property(root, "receivedQuery");
    assert_eq!(received_query, Some("world".to_string()));

    let received_count = qmlts_host::qt_context_test::read_int_property(root, "receivedCount");
    assert_eq!(received_count, Some(99));
}

/// Verify schema-declared parameter types are enforced for multi-parameter effects.
#[test]
fn test_multi_param_effect_rejects_wrong_payload_types() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("SearchViewModel").unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string receivedQuery: "unset"
    property int receivedCount: -1

    Connections {
        target: __qmlts
        function onOnSearchCompleted(query, resultCount) {
            receivedQuery = query
            receivedCount = resultCount
        }
    }
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let result = engine.emit_effect(
        "SearchViewModel",
        "onSearchCompleted",
        Some(r#"[42, "wrong-order"]"#),
    );
    assert!(
        result.is_err(),
        "type-mismatched payload should be rejected"
    );

    let root = engine.root_object_ptr();
    let received_query = qmlts_host::qt_context_test::read_string_property(root, "receivedQuery");
    assert_eq!(received_query, Some("unset".to_string()));

    let received_count = qmlts_host::qt_context_test::read_int_property(root, "receivedCount");
    assert_eq!(received_count, Some(-1));
}

/// Verify SearchViewModel property sync works (query is a string, resultCount is int).
#[test]
fn test_search_view_model_property_sync() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("SearchViewModel").unwrap();

    engine
        .sync_state("SearchViewModel", "query", "\"test search\"")
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string displayedQuery: vm.query
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    let val = qmlts_host::qt_context_test::read_string_property(root, "displayedQuery");
    assert_eq!(val, Some("test search".to_string()));
}

// ─────────────────────────────────────────────────────────────────────────
//  List model QML integration tests (Step 5)
// ─────────────────────────────────────────────────────────────────────────

/// Verify that a list model can be created, set as a context property,
/// and accessed from QML.
#[test]
fn test_list_model_visible_in_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let model_id = engine
        .create_list_model(r#"{"roles":["name","value"]}"#)
        .unwrap();

    engine
        .set_list_model_context_property("myListModel", model_id)
        .unwrap();

    engine
        .set_list_data(
            model_id,
            r#"[{"name":"Alice","value":"100"},{"name":"Bob","value":"200"}]"#,
        )
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    Repeater {
        id: rep
        model: myListModel
        delegate: Item {}
    }
    property int modelCount: rep.count
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    let count = qmlts_host::qt_context_test::read_int_property(root, "modelCount");
    assert_eq!(count, Some(2), "QML should see 2 rows in the list model");
}

/// Verify that list model updates are observable from QML.
#[test]
fn test_list_model_updates_observable_from_qml() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let model_id = engine.create_list_model(r#"{"roles":["name"]}"#).unwrap();

    engine
        .set_list_model_context_property("items", model_id)
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    Repeater {
        id: rep
        model: items
        delegate: Item {}
    }
    property int itemCount: rep.count
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Initially empty
    let root = engine.root_object_ptr();
    let count = qmlts_host::qt_context_test::read_int_property(root, "itemCount");
    assert_eq!(count, Some(0), "Initial list should be empty");

    // Insert rows
    engine
        .insert_list_rows(model_id, 0, r#"[{"name":"A"},{"name":"B"},{"name":"C"}]"#)
        .unwrap();
    engine.process_events().unwrap();

    let count = qmlts_host::qt_context_test::read_int_property(root, "itemCount");
    assert_eq!(count, Some(3), "Should have 3 items after insert");

    // Remove one row
    engine.remove_list_rows(model_id, 1, 1).unwrap();
    engine.process_events().unwrap();

    let count = qmlts_host::qt_context_test::read_int_property(root, "itemCount");
    assert_eq!(count, Some(2), "Should have 2 items after remove");

    // Full reset
    engine.set_list_data(model_id, r#"[{"name":"X"}]"#).unwrap();
    engine.process_events().unwrap();

    let count = qmlts_host::qt_context_test::read_int_property(root, "itemCount");
    assert_eq!(count, Some(1), "Should have 1 item after full reset");
}

/// Verify that list model destroy cleans up properly.
#[test]
fn test_list_model_destroy() {
    let mut engine = QmltsEngine::new(None).unwrap();

    let model_id = engine.create_list_model(r#"{"roles":["name"]}"#).unwrap();

    engine
        .set_list_data(model_id, r#"[{"name":"test"}]"#)
        .unwrap();
    assert_eq!(engine.list_row_count(model_id).unwrap(), 1);

    engine.destroy_list_model(model_id).unwrap();

    // After destroy, operations should fail
    assert!(engine.list_row_count(model_id).is_err());
}

#[test]
fn test_create_list_model_rejects_invalid_roles() {
    let mut engine = QmltsEngine::new(None).unwrap();

    let duplicate_roles = engine.create_list_model(r#"{"roles":["name","name"]}"#);
    assert!(duplicate_roles.is_err());

    let empty_role = engine.create_list_model(r#"{"roles":[""]}"#);
    assert!(empty_role.is_err());

    let non_string_role = engine.create_list_model(r#"{"roles":["name",42]}"#);
    assert!(non_string_role.is_err());
}

#[test]
fn test_set_list_data_rejects_invalid_json_array() {
    let mut engine = QmltsEngine::new(None).unwrap();
    let model_id = engine.create_list_model(r#"{"roles":["name"]}"#).unwrap();

    let result = engine.set_list_data(model_id, r#"{"name":"not-an-array"}"#);
    assert!(result.is_err());
}

#[test]
fn test_get_list_row_supports_valid_empty_object_row() {
    let mut engine = QmltsEngine::new(None).unwrap();
    let model_id = engine.create_list_model(r#"{"roles":["name"]}"#).unwrap();

    engine.set_list_data(model_id, r#"[{}]"#).unwrap();

    let row = engine.get_list_row(model_id, 0).unwrap();
    assert_eq!(row, "{}");

    let missing = engine.get_list_row(model_id, 1);
    assert!(missing.is_err());
}

// ─────────────────────────────────────────────────────────────────────────
//  §8 Hot Reload Integration Tests
// ─────────────────────────────────────────────────────────────────────────

/// HR-01: Capture snapshot returns valid JSON with window data.
#[test]
fn test_capture_snapshot_returns_valid_json() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .load_string(
            r#"import QtQuick
import QtQuick.Window

Window {
    width: 400
    height: 300
    visible: true
}"#,
            None,
        )
        .unwrap();

    engine.process_events().unwrap();

    let snapshot = engine.capture_snapshot().unwrap();
    let parsed: serde_json::Value = serde_json::from_str(&snapshot).unwrap();

    assert!(parsed.get("window").is_some(), "snapshot must contain 'window'");
    assert!(parsed.get("focusId").is_some(), "snapshot must contain 'focusId'");
    assert!(
        parsed.get("scrollPositions").is_some(),
        "snapshot must contain 'scrollPositions'"
    );
}

/// HR-03: Capture fails before QML is loaded.
#[test]
fn test_capture_snapshot_fails_before_qml_loaded() {
    let engine = QmltsEngine::new(None).unwrap();
    let result = engine.capture_snapshot();
    assert!(result.is_err());
}

/// HR-04: Reload QML succeeds and re-loads.
#[test]
fn test_reload_qml_succeeds() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .load_string("import QtQuick\nItem { }", None)
        .unwrap();
    engine.process_events().unwrap();

    let result = engine.reload_qml(
        "import QtQuick\nRectangle { width: 200; height: 100 }",
        None,
    );
    assert!(result.is_ok(), "reload should succeed: {result:?}");

    engine.process_events().unwrap();
}

/// HR-05: Reload preserves context properties (vm, __qmlts).
#[test]
fn test_reload_preserves_context_properties() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // Sync initial state
    engine
        .sync_state("LoginViewModel", "username", "\"alice\"")
        .unwrap();

    engine
        .load_string("import QtQuick\nItem { }", None)
        .unwrap();
    engine.process_events().unwrap();

    // Reload with new QML
    engine
        .reload_qml(
            r#"import QtQuick
Item {
    id: root
    property string readUsername: vm.username
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // vm should still be accessible after reload
    assert!(engine.has_context_property("vm"));
    assert!(engine.has_context_property("__qmlts"));

    // The synced state should still be readable
    let val = engine
        .get_property("LoginViewModel", "username")
        .unwrap();
    assert_eq!(val, "\"alice\"");
}

/// HR-09: Full four-step reload cycle.
#[test]
fn test_full_hot_reload_cycle() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state("LoginViewModel", "username", "\"bob\"")
        .unwrap();

    engine
        .load_string("import QtQuick\nItem { }", None)
        .unwrap();
    engine.process_events().unwrap();

    // Step 1: Capture
    let snapshot = engine.capture_snapshot().unwrap();

    // Step 2: Reload
    engine
        .reload_qml("import QtQuick\nRectangle { width: 320; height: 240 }", None)
        .unwrap();
    engine.process_events().unwrap();

    // Step 3: Rehydrate (re-sync state)
    engine
        .sync_state("LoginViewModel", "username", "\"bob\"")
        .unwrap();

    // Step 4: Restore
    engine.restore_snapshot(&snapshot).unwrap();
    engine.process_events().unwrap();

    // Verify state survived
    let val = engine
        .get_property("LoginViewModel", "username")
        .unwrap();
    assert_eq!(val, "\"bob\"");
}

/// HR-10: Consecutive reloads remain stable.
#[test]
fn test_consecutive_reloads_stable() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();

    engine
        .load_string("import QtQuick\nItem { }", None)
        .unwrap();
    engine.process_events().unwrap();

    for i in 0..5 {
        let snapshot = engine.capture_snapshot().unwrap();

        engine
            .reload_qml(
                &format!("import QtQuick\nItem {{ property int idx: {i} }}"),
                None,
            )
            .unwrap();
        engine.process_events().unwrap();

        engine.restore_snapshot(&snapshot).unwrap();
        engine.process_events().unwrap();
    }

    // If we got here without panicking, consecutive reloads are stable
    assert!(engine.has_context_property("vm"));
}

/// HR: Reload fails before QML is loaded.
#[test]
fn test_reload_fails_before_qml_loaded() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.reload_qml("import QtQuick\nItem { }", None);
    assert!(result.is_err());
}

/// HR: Restore snapshot fails before QML is loaded.
#[test]
fn test_restore_snapshot_fails_before_qml_loaded() {
    let engine = QmltsEngine::new(None).unwrap();
    let result = engine.restore_snapshot(
        r#"{"window":{"x":0,"y":0,"width":800,"height":600},"focusId":""}"#,
    );
    assert!(result.is_err());
}
