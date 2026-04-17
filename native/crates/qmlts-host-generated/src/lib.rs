//! Generated cxx-qt bridge types for QmlTS fixture `ViewModels`.
//!
//! This crate provides bridge QObject types that the host crate
//! uses to wire `ViewModel` properties into the QML engine.

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]
#![allow(clippy::unnecessary_box_returns)]

pub mod counter_runtime;
pub mod counter_v2;
pub mod counter_view_model;
pub mod dispatch;
pub mod login_runtime;
pub mod login_v2;
pub mod login_view_model;
pub mod search_runtime;
pub mod search_v2;
pub mod search_view_model;
pub mod v2_dispatch;

use serde::Deserialize;
use std::any::Any;
use std::ffi::c_void;

// ─────────────────────────────────────────────────────────────────────────
//  Schema types — deserialized from embedded JSON
// ─────────────────────────────────────────────────────────────────────────

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ViewModelSchema {
    pub class_name: String,
    pub version: u32,
    pub states: Vec<SchemaState>,
    #[serde(default)]
    pub commands: Vec<SchemaCommand>,
    #[serde(default)]
    pub effects: Vec<SchemaEffect>,
    #[serde(default)]
    pub lifecycle: SchemaLifecycle,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaState {
    pub name: String,
    pub qml_name: String,
    pub qml_type: String,
    pub member_id: u32,
    pub readonly: bool,
    pub deferred: bool,
    pub default_value: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaCommand {
    pub name: String,
    pub qml_name: String,
    pub command_id: u32,
    #[serde(default)]
    pub parameters: Vec<serde_json::Value>,
    pub r#async: bool,
    #[serde(default)]
    pub throttle: Option<String>,
    #[serde(default)]
    pub throttle_ms: Option<u32>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaEffect {
    pub name: String,
    pub qml_name: String,
    pub effect_id: u32,
    #[serde(default)]
    pub parameters: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaLifecycle {
    #[serde(default)]
    pub on_mounted: bool,
    #[serde(default)]
    pub on_unmounting: bool,
    #[serde(default)]
    pub hot_reload: bool,
}

// ─────────────────────────────────────────────────────────────────────────
//  Embedded schema JSON constants
// ─────────────────────────────────────────────────────────────────────────

pub const LOGIN_VIEW_MODEL_SCHEMA: &str = r#"{
  "className": "LoginViewModel",
  "version": 1,
  "states": [
    {"name": "username", "qmlName": "username", "qmlType": "string", "memberId": 0, "readonly": false, "deferred": false, "defaultValue": "''"},
    {"name": "password", "qmlName": "password", "qmlType": "string", "memberId": 1, "readonly": false, "deferred": false, "defaultValue": "''"},
    {"name": "isLoading", "qmlName": "isLoading", "qmlType": "bool", "memberId": 2, "readonly": true, "deferred": false, "defaultValue": "false"}
  ],
  "commands": [{"name": "login", "qmlName": "login", "commandId": 927957157, "parameters": [], "async": true}],
  "effects": [{"name": "onLoginCompleted", "qmlName": "onLoginCompleted", "effectId": 1633635556, "parameters": [{"name": "success", "type": "boolean"}]}],
  "lifecycle": {"onMounted": true, "onUnmounting": false, "hotReload": false}
}"#;

pub const COUNTER_VIEW_MODEL_SCHEMA: &str = r#"{
  "className": "CounterViewModel",
  "version": 1,
  "states": [
    {"name": "count", "qmlName": "count", "qmlType": "int", "memberId": 0, "readonly": false, "deferred": false, "defaultValue": "0"}
  ],
  "commands": [],
  "effects": [],
  "lifecycle": {"onMounted": false, "onUnmounting": false, "hotReload": false}
}"#;

pub const SEARCH_VIEW_MODEL_SCHEMA: &str = r#"{
  "className": "SearchViewModel",
  "version": 1,
  "states": [
    {"name": "query", "qmlName": "query", "qmlType": "string", "memberId": 0, "readonly": false, "deferred": false, "defaultValue": "''"},
    {"name": "resultCount", "qmlName": "resultCount", "qmlType": "int", "memberId": 1, "readonly": true, "deferred": false, "defaultValue": "0"}
  ],
  "commands": [],
  "effects": [{"name": "onSearchCompleted", "qmlName": "onSearchCompleted", "effectId": 1234567890, "parameters": [{"name": "query", "type": "string"}, {"name": "resultCount", "type": "int"}]}],
  "lifecycle": {"onMounted": false, "onUnmounting": false, "hotReload": false}
}"#;

unsafe extern "C" {
    fn qmlts_create_login_view_model() -> *mut c_void;
    fn qmlts_create_counter_view_model() -> *mut c_void;
    fn qmlts_create_search_view_model() -> *mut c_void;
    fn qmlts_create_login_runtime() -> *mut c_void;
    fn qmlts_create_counter_runtime() -> *mut c_void;
    fn qmlts_create_search_runtime() -> *mut c_void;
    fn qmlts_destroy_qobject(ptr: *mut c_void);
}

// V2 C++ FFI — type registration and lifecycle helpers
// (implementations in factories_v2.cpp)
unsafe extern "C" {
    pub fn qmlts_register_login_v2(
        uri: *const std::ffi::c_char,
        major: i32,
        minor: i32,
        qml_name: *const std::ffi::c_char,
    ) -> i32;
    pub fn qmlts_register_counter_v2(
        uri: *const std::ffi::c_char,
        major: i32,
        minor: i32,
        qml_name: *const std::ffi::c_char,
    ) -> i32;
    pub fn qmlts_register_search_v2(
        uri: *const std::ffi::c_char,
        major: i32,
        minor: i32,
        qml_name: *const std::ffi::c_char,
    ) -> i32;
    // Per-type property change forwarding
    pub fn qmlts_v2_connect_login_properties(
        qobj: *mut c_void,
        owner_id: i32,
        instance_id: i32,
    ) -> bool;
    pub fn qmlts_v2_connect_counter_properties(
        qobj: *mut c_void,
        owner_id: i32,
        instance_id: i32,
    ) -> bool;
    pub fn qmlts_v2_connect_search_properties(
        qobj: *mut c_void,
        owner_id: i32,
        instance_id: i32,
    ) -> bool;
    // Suppress and lifecycle
    pub fn qmlts_v2_set_suppress(qobj: *mut c_void, suppress: bool);
    pub fn qmlts_v2_connect_destroy_handler(qobj: *mut c_void, owner_id: i32, instance_id: i32);
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
    pub(crate) fn new(
        storage: Box<dyn Any>,
        vm_ptr: *mut c_void,
        runtime_ptr: *mut c_void,
    ) -> Self {
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

/// Static descriptor: class name + factory function + schema JSON.
pub struct BridgeDescriptor {
    /// The `ViewModel` class name (e.g., `LoginViewModel`).
    pub class_name: &'static str,
    /// Factory function that creates a `BridgeInstance`.
    pub create: fn() -> BridgeInstance,
    /// JSON schema describing the `ViewModel`'s states, commands, effects, lifecycle.
    pub schema_json: &'static str,
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

fn create_search_instance() -> BridgeInstance {
    // SAFETY: C++ factories allocate heap QObjects with standard constructors.
    let vm = unsafe { qmlts_create_search_view_model() };
    let rt = unsafe { qmlts_create_search_runtime() };
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
            schema_json: LOGIN_VIEW_MODEL_SCHEMA,
        },
        BridgeDescriptor {
            class_name: "CounterViewModel",
            create: create_counter_instance,
            schema_json: COUNTER_VIEW_MODEL_SCHEMA,
        },
        BridgeDescriptor {
            class_name: "SearchViewModel",
            create: create_search_instance,
            schema_json: SEARCH_VIEW_MODEL_SCHEMA,
        },
    ]
}

// ─────────────────────────────────────────────────────────────────────────
//  V2 bridge descriptor — single-QObject pattern
// ─────────────────────────────────────────────────────────────────────────

/// Static descriptor for V2 single-`QObject` bridge types.
pub struct V2BridgeDescriptor {
    /// The `ViewModel` class name (e.g., `"LoginViewModel"`).
    pub class_name: &'static str,
    /// JSON schema describing the `ViewModel`'s states, commands, effects, lifecycle.
    pub schema_json: &'static str,
    /// Register the QML type with the given module URI and version.
    /// Returns `Ok(type_id)` on success, `Err(message)` on failure.
    /// `qml_name` allows custom QML type names.
    pub register_type:
        fn(uri: &str, major: i32, minor: i32, qml_name: &str) -> std::result::Result<i32, String>,
    /// Connect property change notification signals for writable properties.
    /// Called during `instanceReady()` to enable QML → TS property forwarding.
    pub connect_properties: fn(qobj: *mut c_void, owner_id: i32, instance_id: i32) -> bool,
}

/// Returns all registered V2 bridge descriptors.
#[must_use]
pub fn v2_descriptors() -> &'static [V2BridgeDescriptor] {
    &[
        V2BridgeDescriptor {
            class_name: "LoginViewModel",
            schema_json: LOGIN_VIEW_MODEL_SCHEMA,
            register_type: register_login_v2,
            connect_properties: connect_login_v2_properties,
        },
        V2BridgeDescriptor {
            class_name: "CounterViewModel",
            schema_json: COUNTER_VIEW_MODEL_SCHEMA,
            register_type: register_counter_v2,
            connect_properties: connect_counter_v2_properties,
        },
        V2BridgeDescriptor {
            class_name: "SearchViewModel",
            schema_json: SEARCH_VIEW_MODEL_SCHEMA,
            register_type: register_search_v2,
            connect_properties: connect_search_v2_properties,
        },
    ]
}

fn register_login_v2(
    uri: &str,
    major: i32,
    minor: i32,
    qml_name: &str,
) -> std::result::Result<i32, String> {
    let c_uri = std::ffi::CString::new(uri).map_err(|e| e.to_string())?;
    let c_name = std::ffi::CString::new(qml_name).map_err(|e| e.to_string())?;
    let result = unsafe { qmlts_register_login_v2(c_uri.as_ptr(), major, minor, c_name.as_ptr()) };
    if result >= 0 {
        Ok(result)
    } else {
        Err(format!(
            "Qt registration failed for '{qml_name}' (code: {result})"
        ))
    }
}

fn register_counter_v2(
    uri: &str,
    major: i32,
    minor: i32,
    qml_name: &str,
) -> std::result::Result<i32, String> {
    let c_uri = std::ffi::CString::new(uri).map_err(|e| e.to_string())?;
    let c_name = std::ffi::CString::new(qml_name).map_err(|e| e.to_string())?;
    let result =
        unsafe { qmlts_register_counter_v2(c_uri.as_ptr(), major, minor, c_name.as_ptr()) };
    if result >= 0 {
        Ok(result)
    } else {
        Err(format!(
            "Qt registration failed for '{qml_name}' (code: {result})"
        ))
    }
}

fn register_search_v2(
    uri: &str,
    major: i32,
    minor: i32,
    qml_name: &str,
) -> std::result::Result<i32, String> {
    let c_uri = std::ffi::CString::new(uri).map_err(|e| e.to_string())?;
    let c_name = std::ffi::CString::new(qml_name).map_err(|e| e.to_string())?;
    let result = unsafe { qmlts_register_search_v2(c_uri.as_ptr(), major, minor, c_name.as_ptr()) };
    if result >= 0 {
        Ok(result)
    } else {
        Err(format!(
            "Qt registration failed for '{qml_name}' (code: {result})"
        ))
    }
}

fn connect_login_v2_properties(qobj: *mut c_void, owner_id: i32, instance_id: i32) -> bool {
    unsafe { qmlts_v2_connect_login_properties(qobj, owner_id, instance_id) }
}

fn connect_counter_v2_properties(qobj: *mut c_void, owner_id: i32, instance_id: i32) -> bool {
    unsafe { qmlts_v2_connect_counter_properties(qobj, owner_id, instance_id) }
}

fn connect_search_v2_properties(qobj: *mut c_void, owner_id: i32, instance_id: i32) -> bool {
    unsafe { qmlts_v2_connect_search_properties(qobj, owner_id, instance_id) }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn login_schema_deserializes() {
        let schema: ViewModelSchema =
            serde_json::from_str(LOGIN_VIEW_MODEL_SCHEMA).expect("should parse login schema");
        assert_eq!(schema.class_name, "LoginViewModel");
        assert_eq!(schema.version, 1);
        assert_eq!(schema.states.len(), 3);
        assert_eq!(schema.states[0].name, "username");
        assert_eq!(schema.states[0].qml_type, "string");
        assert!(!schema.states[0].readonly);
        assert_eq!(schema.states[2].name, "isLoading");
        assert_eq!(schema.states[2].qml_type, "bool");
        assert!(schema.states[2].readonly);
        assert_eq!(schema.commands.len(), 1);
        assert_eq!(schema.effects.len(), 1);
        assert!(schema.lifecycle.on_mounted);
    }

    #[test]
    fn counter_schema_deserializes() {
        let schema: ViewModelSchema =
            serde_json::from_str(COUNTER_VIEW_MODEL_SCHEMA).expect("should parse counter schema");
        assert_eq!(schema.class_name, "CounterViewModel");
        assert_eq!(schema.states.len(), 1);
        assert_eq!(schema.states[0].name, "count");
        assert_eq!(schema.states[0].qml_type, "int");
        assert!(schema.commands.is_empty());
        assert!(schema.effects.is_empty());
        assert!(!schema.lifecycle.on_mounted);
    }

    #[test]
    fn golden_schema_file_matches_embedded() {
        let golden_path = std::path::Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("../../..")
            .join("tests/compiler/pipeline/fixtures/golden/LoginViewModel.schema.json");
        let golden: ViewModelSchema = serde_json::from_str(
            &std::fs::read_to_string(&golden_path).expect("should read golden schema"),
        )
        .expect("golden schema should parse");
        let embedded: ViewModelSchema =
            serde_json::from_str(LOGIN_VIEW_MODEL_SCHEMA).expect("embedded should parse");
        assert_eq!(golden.class_name, embedded.class_name);
        assert_eq!(golden.states.len(), embedded.states.len());
        for (g, e) in golden.states.iter().zip(embedded.states.iter()) {
            assert_eq!(g.name, e.name);
            assert_eq!(g.qml_type, e.qml_type);
            assert_eq!(g.readonly, e.readonly);
        }
    }

    #[test]
    fn descriptors_include_schema_json() {
        for desc in descriptors() {
            let schema: ViewModelSchema =
                serde_json::from_str(desc.schema_json).expect("descriptor schema should parse");
            assert_eq!(schema.class_name, desc.class_name);
        }
    }

    #[test]
    fn search_schema_deserializes() {
        let schema: ViewModelSchema =
            serde_json::from_str(SEARCH_VIEW_MODEL_SCHEMA).expect("should parse search schema");
        assert_eq!(schema.class_name, "SearchViewModel");
        assert_eq!(schema.version, 1);
        assert_eq!(schema.states.len(), 2);
        assert_eq!(schema.states[0].name, "query");
        assert_eq!(schema.states[0].qml_type, "string");
        assert_eq!(schema.states[1].name, "resultCount");
        assert_eq!(schema.states[1].qml_type, "int");
        assert!(schema.states[1].readonly);
        assert!(schema.commands.is_empty());
        assert_eq!(schema.effects.len(), 1);
        assert_eq!(schema.effects[0].name, "onSearchCompleted");
        assert_eq!(schema.effects[0].effect_id, 1_234_567_890);
        assert_eq!(schema.effects[0].parameters.len(), 2);
        assert!(!schema.lifecycle.on_mounted);
    }

    #[test]
    fn descriptors_include_search_view_model() {
        let names: Vec<&str> = descriptors().iter().map(|d| d.class_name).collect();
        assert!(names.contains(&"SearchViewModel"));
        assert_eq!(names.len(), 3);
    }

    #[test]
    fn v2_descriptors_include_all_fixtures() {
        let descs = v2_descriptors();
        assert_eq!(descs.len(), 3);
        let names: Vec<&str> = descs.iter().map(|d| d.class_name).collect();
        assert!(names.contains(&"LoginViewModel"));
        assert!(names.contains(&"CounterViewModel"));
        assert!(names.contains(&"SearchViewModel"));
    }

    #[test]
    fn v2_routing_identifiers_are_not_writable_qml_properties() {
        for source in [
            include_str!("login_v2.rs"),
            include_str!("counter_v2.rs"),
            include_str!("search_v2.rs"),
        ] {
            assert!(source.contains("instance_id, cxx_name = \"instanceId\", READ"));
            assert!(!source.contains("owner_id, cxx_name = \"ownerId\""));
        }
    }
}
