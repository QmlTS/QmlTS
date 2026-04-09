//! Generated cxx-qt bridge types for QmlTS fixture `ViewModels`.
//!
//! This crate provides bridge QObject types that the host crate
//! uses to wire `ViewModel` properties into the QML engine.

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]
#![allow(clippy::unnecessary_box_returns)]

pub mod counter_runtime;
pub mod counter_view_model;
pub mod login_runtime;
pub mod login_view_model;

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

unsafe extern "C" {
    fn qmlts_create_login_view_model() -> *mut c_void;
    fn qmlts_create_counter_view_model() -> *mut c_void;
    fn qmlts_create_login_runtime() -> *mut c_void;
    fn qmlts_create_counter_runtime() -> *mut c_void;
    fn qmlts_destroy_qobject(ptr: *mut c_void);
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
    /// JSON schema describing the ViewModel's states, commands, effects, lifecycle.
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
    ]
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
}
