//! Bridge registry — maps ViewModel class names to factory functions and schemas.
//!
//! The registry is populated from `qmlts_host_generated::descriptors()` at
//! engine construction time. It provides lookup-by-name so the engine can
//! instantiate bridge QObject pairs on demand and retrieve their schemas.

use qmlts_host_generated::{BridgeDescriptor, BridgeInstance};
use std::collections::HashMap;

struct BridgeEntry {
    create: fn() -> BridgeInstance,
    schema_json: &'static str,
}

/// Registry mapping ViewModel class names to their bridge factory functions and schemas.
pub struct BridgeRegistry {
    entries: HashMap<&'static str, BridgeEntry>,
}

impl BridgeRegistry {
    /// Build a registry from a slice of bridge descriptors.
    pub fn from_descriptors(descriptors: &[BridgeDescriptor]) -> Self {
        let entries = descriptors
            .iter()
            .map(|d| {
                (
                    d.class_name,
                    BridgeEntry {
                        create: d.create,
                        schema_json: d.schema_json,
                    },
                )
            })
            .collect();
        Self { entries }
    }

    /// Look up a factory by class name and create an instance.
    ///
    /// Returns `None` if no bridge type with that name is registered.
    pub fn create_instance(&self, class_name: &str) -> Option<BridgeInstance> {
        self.entries.get(class_name).map(|e| (e.create)())
    }

    /// Get the raw schema JSON for a class name.
    ///
    /// Returns `None` if no bridge type with that name is registered.
    pub fn get_schema_json(&self, class_name: &str) -> Option<&'static str> {
        self.entries.get(class_name).map(|e| e.schema_json)
    }

    /// Check whether a bridge type is registered.
    #[must_use]
    pub fn has_type(&self, class_name: &str) -> bool {
        self.entries.contains_key(class_name)
    }

    /// Return all registered class names (sorted for deterministic output).
    #[must_use]
    pub fn registered_types(&self) -> Vec<&'static str> {
        let mut names: Vec<&'static str> = self.entries.keys().copied().collect();
        names.sort_unstable();
        names
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use qmlts_host_generated::descriptors;

    #[test]
    fn registry_from_descriptors_has_expected_types() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        assert!(registry.has_type("LoginViewModel"));
        assert!(registry.has_type("CounterViewModel"));
        assert!(!registry.has_type("NonExistent"));
    }

    #[test]
    fn registered_types_returns_sorted_names() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        let types = registry.registered_types();
        assert_eq!(types, vec!["CounterViewModel", "LoginViewModel"]);
    }

    #[test]
    fn get_schema_json_returns_valid_json() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        let json = registry.get_schema_json("LoginViewModel").unwrap();
        let schema: qmlts_host_generated::ViewModelSchema =
            serde_json::from_str(json).expect("schema JSON should parse");
        assert_eq!(schema.class_name, "LoginViewModel");
    }

    #[test]
    fn get_schema_json_returns_none_for_unknown() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        assert!(registry.get_schema_json("NonExistent").is_none());
    }
}
