//! ViewModelSchema types for runtime validation and bridge generation.
//!
//! These types mirror the compiler's ViewModelSchema output format.

use serde::{Deserialize, Serialize};

/// Throttle mode for commands.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum ThrottleMode {
    None,
    Debounce,
    Throttle,
    Drop,
}

impl Default for ThrottleMode {
    fn default() -> Self {
        Self::None
    }
}

/// A parameter in a command or effect signature.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SchemaParameter {
    pub name: String,
    #[serde(rename = "type")]
    pub type_name: String,
}

/// A state property in a ViewModel.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaState {
    pub name: String,
    pub qml_name: String,
    pub qml_type: String,
    pub member_id: u32,
    pub readonly: bool,
    pub deferred: bool,
    #[serde(default)]
    pub default_value: Option<serde_json::Value>,
}

/// A command method in a ViewModel.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaCommand {
    pub name: String,
    pub qml_name: String,
    pub command_id: u32,
    pub parameters: Vec<SchemaParameter>,
    #[serde(rename = "async")]
    pub is_async: bool,
    #[serde(default)]
    pub throttle: ThrottleMode,
    #[serde(default)]
    pub throttle_ms: u32,
}

/// An effect signal in a ViewModel.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaEffect {
    pub name: String,
    pub qml_name: String,
    pub effect_id: u32,
    pub parameters: Vec<SchemaParameter>,
}

/// Lifecycle hooks configuration.
#[derive(Debug, Clone, Default, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaLifecycle {
    #[serde(default)]
    pub on_mounted: bool,
    #[serde(default)]
    pub on_unmounting: bool,
    #[serde(default)]
    pub hot_reload: bool,
}

/// Complete ViewModel schema.
///
/// This schema is output by the compiler as `.schema.json` files and
/// consumed by the build system to generate Rust bridge code.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ViewModelSchema {
    pub class_name: String,
    pub version: u32,
    pub states: Vec<SchemaState>,
    pub commands: Vec<SchemaCommand>,
    pub effects: Vec<SchemaEffect>,
    pub lifecycle: SchemaLifecycle,
}

impl ViewModelSchema {
    /// Parse a schema from JSON string.
    pub fn from_json(json: &str) -> Result<Self, serde_json::Error> {
        serde_json::from_str(json)
    }

    /// Serialize the schema to JSON string.
    pub fn to_json(&self) -> Result<String, serde_json::Error> {
        serde_json::to_string_pretty(self)
    }

    /// Find a state by name.
    #[must_use]
    pub fn find_state(&self, name: &str) -> Option<&SchemaState> {
        self.states.iter().find(|s| s.name == name)
    }

    /// Find a command by name.
    #[must_use]
    pub fn find_command(&self, name: &str) -> Option<&SchemaCommand> {
        self.commands.iter().find(|c| c.name == name)
    }

    /// Find an effect by name.
    #[must_use]
    pub fn find_effect(&self, name: &str) -> Option<&SchemaEffect> {
        self.effects.iter().find(|e| e.name == name)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_counter_schema() {
        let json = r#"{
            "className": "CounterViewModel",
            "version": 1,
            "states": [{
                "name": "count",
                "qmlName": "count",
                "qmlType": "int",
                "memberId": 1,
                "readonly": false,
                "deferred": false
            }],
            "commands": [{
                "name": "increment",
                "qmlName": "increment",
                "commandId": 12345,
                "parameters": [],
                "async": false,
                "throttle": "none",
                "throttleMs": 0
            }],
            "effects": [],
            "lifecycle": {
                "onMounted": false,
                "onUnmounting": false,
                "hotReload": false
            }
        }"#;

        let schema = ViewModelSchema::from_json(json).unwrap();
        assert_eq!(schema.class_name, "CounterViewModel");
        assert_eq!(schema.states.len(), 1);
        assert_eq!(schema.states[0].name, "count");
        assert_eq!(schema.commands.len(), 1);
        assert_eq!(schema.commands[0].name, "increment");
    }

    #[test]
    fn test_parse_login_schema() {
        let json = r#"{
            "className": "LoginViewModel",
            "version": 1,
            "states": [
                { "name": "username", "qmlName": "username", "qmlType": "string", "memberId": 1, "readonly": false, "deferred": false },
                { "name": "password", "qmlName": "password", "qmlType": "string", "memberId": 2, "readonly": false, "deferred": false },
                { "name": "isLoading", "qmlName": "isLoading", "qmlType": "bool", "memberId": 3, "readonly": true, "deferred": false }
            ],
            "commands": [
                { "name": "login", "qmlName": "login", "commandId": 67890, "parameters": [], "async": true, "throttle": "none", "throttleMs": 0 }
            ],
            "effects": [
                { "name": "onLoginCompleted", "qmlName": "onLoginCompleted", "effectId": 11111, "parameters": [{ "name": "success", "type": "boolean" }] }
            ],
            "lifecycle": { "onMounted": true, "onUnmounting": false, "hotReload": false }
        }"#;

        let schema = ViewModelSchema::from_json(json).unwrap();
        assert_eq!(schema.class_name, "LoginViewModel");
        assert_eq!(schema.states.len(), 3);
        assert!(schema.lifecycle.on_mounted);
        assert_eq!(schema.effects.len(), 1);
        assert_eq!(schema.effects[0].parameters.len(), 1);
    }

    #[test]
    fn test_find_methods() {
        let schema = ViewModelSchema {
            class_name: "TestVM".to_string(),
            version: 1,
            states: vec![SchemaState {
                name: "count".to_string(),
                qml_name: "count".to_string(),
                qml_type: "int".to_string(),
                member_id: 1,
                readonly: false,
                deferred: false,
                default_value: None,
            }],
            commands: vec![SchemaCommand {
                name: "increment".to_string(),
                qml_name: "increment".to_string(),
                command_id: 123,
                parameters: vec![],
                is_async: false,
                throttle: ThrottleMode::None,
                throttle_ms: 0,
            }],
            effects: vec![],
            lifecycle: SchemaLifecycle::default(),
        };

        assert!(schema.find_state("count").is_some());
        assert!(schema.find_state("nonexistent").is_none());
        assert!(schema.find_command("increment").is_some());
        assert!(schema.find_command("nonexistent").is_none());
    }

    #[test]
    fn test_roundtrip_serialization() {
        let schema = ViewModelSchema {
            class_name: "TestVM".to_string(),
            version: 1,
            states: vec![],
            commands: vec![],
            effects: vec![],
            lifecycle: SchemaLifecycle::default(),
        };

        let json = schema.to_json().unwrap();
        let parsed = ViewModelSchema::from_json(&json).unwrap();
        assert_eq!(parsed.class_name, "TestVM");
    }
}
