//! Bridge registry for managing ViewModel registrations and QML context objects.
//!
//! The BridgeRegistry:
//! - Maintains a registry of available ViewModel types
//! - Tracks the currently active ViewModel instance
//! - Manages the `__qmlts` runtime object
//! - Provides the `vm` and `__qmlts` context properties to QML

use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use qmlts_host_generated::{
    BridgeViewModel, CounterViewModelBridge, LoginViewModelBridge, QmltsRuntimeBridge,
};
use serde_json::Value;

use crate::QmltsError;

/// Factory function type for creating ViewModel instances
type ViewModelFactory = Box<dyn Fn() -> Box<dyn BridgeViewModel> + Send + Sync>;

/// Registry for managing ViewModel types and instances
pub struct BridgeRegistry {
    /// Registered ViewModel factories by class name
    factories: HashMap<String, ViewModelFactory>,
    /// Currently active ViewModel instance
    active_vm: Option<Box<dyn BridgeViewModel>>,
    /// The __qmlts runtime object
    runtime: QmltsRuntimeBridge,
}

impl Default for BridgeRegistry {
    fn default() -> Self {
        Self::new()
    }
}

impl BridgeRegistry {
    /// Creates a new BridgeRegistry with built-in ViewModel types registered
    pub fn new() -> Self {
        let mut registry = Self {
            factories: HashMap::new(),
            active_vm: None,
            runtime: QmltsRuntimeBridge::new(),
        };

        // Register built-in fixture ViewModels
        registry.register_factory("CounterViewModel", || {
            Box::new(CounterViewModelBridge::new()) as Box<dyn BridgeViewModel>
        });
        registry.register_factory("LoginViewModel", || {
            Box::new(LoginViewModelBridge::new()) as Box<dyn BridgeViewModel>
        });

        registry
    }

    /// Registers a ViewModel factory by class name
    pub fn register_factory<F>(&mut self, class_name: &str, factory: F)
    where
        F: Fn() -> Box<dyn BridgeViewModel> + Send + Sync + 'static,
    {
        self.factories
            .insert(class_name.to_string(), Box::new(factory));
    }

    /// Returns true if a ViewModel type is registered
    pub fn is_registered(&self, class_name: &str) -> bool {
        self.factories.contains_key(class_name)
    }

    /// Returns the list of registered ViewModel class names
    pub fn registered_types(&self) -> Vec<String> {
        self.factories.keys().cloned().collect()
    }

    /// Creates and activates a ViewModel instance by class name
    pub fn activate(&mut self, class_name: &str) -> Result<(), QmltsError> {
        let factory = self
            .factories
            .get(class_name)
            .ok_or_else(|| QmltsError::ViewModelNotFound(class_name.to_string()))?;

        let vm = factory();
        self.active_vm = Some(vm);
        self.runtime.on_mounted();

        Ok(())
    }

    /// Deactivates the current ViewModel
    pub fn deactivate(&mut self) {
        self.runtime.on_unmounting();
        self.active_vm = None;
    }

    /// Returns true if there is an active ViewModel
    pub fn has_active_vm(&self) -> bool {
        self.active_vm.is_some()
    }

    /// Returns the class name of the active ViewModel, if any
    pub fn active_class_name(&self) -> Option<&'static str> {
        self.active_vm.as_ref().map(|vm| vm.class_name())
    }

    /// Gets a property value from the active ViewModel
    pub fn get_property(&self, name: &str) -> Result<Value, QmltsError> {
        let vm = self
            .active_vm
            .as_ref()
            .ok_or(QmltsError::NoActiveViewModel)?;

        vm.get_property(name)
            .ok_or_else(|| QmltsError::PropertyNotFound(name.to_string()))
    }

    /// Sets a property value on the active ViewModel
    pub fn set_property(&mut self, name: &str, value: Value) -> Result<(), QmltsError> {
        let vm = self
            .active_vm
            .as_mut()
            .ok_or(QmltsError::NoActiveViewModel)?;

        if vm.set_property(name, value) {
            Ok(())
        } else {
            Err(QmltsError::PropertyNotFound(name.to_string()))
        }
    }

    /// Invokes a command on the active ViewModel
    pub fn invoke_command(
        &mut self,
        name: &str,
        args: Option<Value>,
    ) -> Result<Value, QmltsError> {
        let vm = self
            .active_vm
            .as_mut()
            .ok_or(QmltsError::NoActiveViewModel)?;

        vm.invoke_command(name, args)
            .map_err(|e| QmltsError::CommandFailed(e))
    }

    /// Returns property names for the active ViewModel
    pub fn property_names(&self) -> Result<&'static [&'static str], QmltsError> {
        let vm = self
            .active_vm
            .as_ref()
            .ok_or(QmltsError::NoActiveViewModel)?;

        Ok(vm.property_names())
    }

    /// Returns command names for the active ViewModel
    pub fn command_names(&self) -> Result<&'static [&'static str], QmltsError> {
        let vm = self
            .active_vm
            .as_ref()
            .ok_or(QmltsError::NoActiveViewModel)?;

        Ok(vm.command_names())
    }

    /// Returns whether the runtime is mounted
    pub fn is_mounted(&self) -> bool {
        self.runtime.is_mounted()
    }

    /// Queues an effect to be triggered
    pub fn queue_effect(&mut self, effect_id: &str) {
        self.runtime.queue_effect(effect_id);
    }

    /// Drains and returns all queued effects
    pub fn drain_effects(&mut self) -> Vec<String> {
        self.runtime.drain_effects()
    }
}

/// Thread-safe wrapper for BridgeRegistry
pub type SharedBridgeRegistry = Arc<Mutex<BridgeRegistry>>;

/// Creates a new shared bridge registry
pub fn create_shared_registry() -> SharedBridgeRegistry {
    Arc::new(Mutex::new(BridgeRegistry::new()))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_registry_has_builtin_types() {
        let registry = BridgeRegistry::new();
        assert!(registry.is_registered("CounterViewModel"));
        assert!(registry.is_registered("LoginViewModel"));
        assert!(!registry.is_registered("UnknownViewModel"));
    }

    #[test]
    fn test_registry_activate_counter() {
        let mut registry = BridgeRegistry::new();
        assert!(!registry.has_active_vm());

        registry.activate("CounterViewModel").unwrap();
        assert!(registry.has_active_vm());
        assert_eq!(registry.active_class_name(), Some("CounterViewModel"));
    }

    #[test]
    fn test_registry_activate_login() {
        let mut registry = BridgeRegistry::new();

        registry.activate("LoginViewModel").unwrap();
        assert!(registry.has_active_vm());
        assert_eq!(registry.active_class_name(), Some("LoginViewModel"));
    }

    #[test]
    fn test_registry_activate_unknown_fails() {
        let mut registry = BridgeRegistry::new();
        let result = registry.activate("UnknownViewModel");
        assert!(result.is_err());
    }

    #[test]
    fn test_registry_deactivate() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();
        assert!(registry.has_active_vm());

        registry.deactivate();
        assert!(!registry.has_active_vm());
        assert_eq!(registry.active_class_name(), None);
    }

    #[test]
    fn test_registry_get_set_property() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();

        // Get initial count
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(0.into()));

        // Set count
        registry
            .set_property("count", Value::Number(42.into()))
            .unwrap();
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(42.into()));
    }

    #[test]
    fn test_registry_invoke_command() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();

        // Increment
        registry.invoke_command("increment", None).unwrap();
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(1.into()));

        // Increment again
        registry.invoke_command("increment", None).unwrap();
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(2.into()));

        // Decrement
        registry.invoke_command("decrement", None).unwrap();
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(1.into()));

        // Reset
        registry.invoke_command("reset", None).unwrap();
        let count = registry.get_property("count").unwrap();
        assert_eq!(count, Value::Number(0.into()));
    }

    #[test]
    fn test_registry_property_names() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();

        let names = registry.property_names().unwrap();
        assert_eq!(names, &["count"]);
    }

    #[test]
    fn test_registry_command_names() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();

        let names = registry.command_names().unwrap();
        assert_eq!(names, &["increment", "decrement", "reset"]);
    }

    #[test]
    fn test_registry_no_active_vm_errors() {
        let registry = BridgeRegistry::new();

        assert!(registry.get_property("count").is_err());
    }

    #[test]
    fn test_registry_effects() {
        let mut registry = BridgeRegistry::new();
        registry.activate("CounterViewModel").unwrap();

        assert!(registry.is_mounted());

        registry.queue_effect("effect1");
        registry.queue_effect("effect2");

        let effects = registry.drain_effects();
        assert_eq!(effects, vec!["effect1", "effect2"]);

        // Queue should be empty after drain
        let effects = registry.drain_effects();
        assert!(effects.is_empty());
    }

    #[test]
    fn test_registry_login_vm_properties() {
        let mut registry = BridgeRegistry::new();
        registry.activate("LoginViewModel").unwrap();

        // Set properties
        registry
            .set_property("username", Value::String("testuser".to_string()))
            .unwrap();
        registry
            .set_property("password", Value::String("secret".to_string()))
            .unwrap();

        // Get properties
        let username = registry.get_property("username").unwrap();
        let password = registry.get_property("password").unwrap();

        assert_eq!(username, Value::String("testuser".to_string()));
        assert_eq!(password, Value::String("secret".to_string()));
    }

    #[test]
    fn test_registry_login_vm_clear_command() {
        let mut registry = BridgeRegistry::new();
        registry.activate("LoginViewModel").unwrap();

        // Set some values
        registry
            .set_property("username", Value::String("user".to_string()))
            .unwrap();
        registry
            .set_property("password", Value::String("pass".to_string()))
            .unwrap();

        // Clear
        registry.invoke_command("clear", None).unwrap();

        // Verify cleared
        let username = registry.get_property("username").unwrap();
        let password = registry.get_property("password").unwrap();

        assert_eq!(username, Value::String(String::new()));
        assert_eq!(password, Value::String(String::new()));
    }

    #[test]
    fn test_shared_registry() {
        let registry = create_shared_registry();

        {
            let mut r = registry.lock().unwrap();
            r.activate("CounterViewModel").unwrap();
            r.invoke_command("increment", None).unwrap();
        }

        {
            let r = registry.lock().unwrap();
            let count = r.get_property("count").unwrap();
            assert_eq!(count, Value::Number(1.into()));
        }
    }
}
