//! Generated cxx-qt bridge types for QmlTS ViewModels.
//!
//! This crate contains bridge modules for fixture ViewModels (LoginViewModel, CounterViewModel)
//! that simulate what the build system will eventually generate from `.schema.json` files.
//!
//! The crate exports:
//! - `CounterViewModel` - A simple counter with increment/decrement/reset commands
//! - `LoginViewModel` - A login form with username/password states and login/clear commands
//! - `QmltsRuntime` - The `__qmlts` runtime object exposing lifecycle hooks and command invocation

mod counter_vm;
mod login_vm;
mod qmlts_runtime;

pub use counter_vm::CounterViewModelBridge;
pub use login_vm::LoginViewModelBridge;
pub use qmlts_runtime::QmltsRuntimeBridge;

/// Trait for all generated ViewModel bridge types.
/// Provides uniform access to properties, commands, and metadata.
pub trait BridgeViewModel: Send + Sync {
    /// Returns the class name of the ViewModel (e.g., "CounterViewModel")
    fn class_name(&self) -> &'static str;

    /// Returns the QML type name (e.g., "CounterVM")
    fn qml_name(&self) -> &'static str;

    /// Gets a property value by name as a JSON value
    fn get_property(&self, name: &str) -> Option<serde_json::Value>;

    /// Sets a property value by name from a JSON value
    fn set_property(&mut self, name: &str, value: serde_json::Value) -> bool;

    /// Invokes a command by name with optional JSON arguments
    fn invoke_command(
        &mut self,
        name: &str,
        args: Option<serde_json::Value>,
    ) -> Result<serde_json::Value, String>;

    /// Returns all property names
    fn property_names(&self) -> &'static [&'static str];

    /// Returns all command names
    fn command_names(&self) -> &'static [&'static str];
}
