//! Bridge registry — maps ViewModel class names to factory functions.
//!
//! The registry is populated from `qmlts_host_generated::descriptors()` at
//! engine construction time. It provides lookup-by-name so the engine can
//! instantiate bridge QObject pairs on demand.

use qmlts_host_generated::{BridgeDescriptor, BridgeInstance};
use std::collections::HashMap;

/// Registry mapping ViewModel class names to their bridge factory functions.
pub struct BridgeRegistry {
    factories: HashMap<&'static str, fn() -> BridgeInstance>,
}

impl BridgeRegistry {
    /// Build a registry from a slice of bridge descriptors.
    pub fn from_descriptors(descriptors: &[BridgeDescriptor]) -> Self {
        let factories = descriptors
            .iter()
            .map(|d| (d.class_name, d.create))
            .collect();
        Self { factories }
    }

    /// Look up a factory by class name and create an instance.
    ///
    /// Returns `None` if no bridge type with that name is registered.
    pub fn create_instance(&self, class_name: &str) -> Option<BridgeInstance> {
        self.factories.get(class_name).map(|f| f())
    }

    /// Check whether a bridge type is registered.
    #[must_use]
    pub fn has_type(&self, class_name: &str) -> bool {
        self.factories.contains_key(class_name)
    }

    /// Return all registered class names (sorted for deterministic output).
    #[must_use]
    pub fn registered_types(&self) -> Vec<&'static str> {
        let mut names: Vec<&'static str> = self.factories.keys().copied().collect();
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
}
