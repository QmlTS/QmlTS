//! LoginViewModel bridge module.
//!
//! A login form ViewModel with:
//! - States: `username` (String), `password` (String), `isLoading` (bool), `error` (String)
//! - Commands: `login`, `clear`

use serde_json::Value;

use crate::BridgeViewModel;

#[cxx_qt::bridge]
pub mod ffi {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    unsafe extern "RustQt" {
        #[qobject]
        #[qml_element]
        #[qproperty(QString, username)]
        #[qproperty(QString, password)]
        #[qproperty(bool, is_loading)]
        #[qproperty(QString, error)]
        type LoginViewModel = super::LoginViewModelRust;

        /// Signal emitted when a command completes
        #[qsignal]
        fn command_completed(self: Pin<&mut LoginViewModel>, command_id: QString, result: QString);

        /// Perform login
        #[qinvokable]
        fn login(self: Pin<&mut LoginViewModel>);

        /// Clear the form
        #[qinvokable]
        fn clear(self: Pin<&mut LoginViewModel>);

        /// Get property value as JSON string
        #[qinvokable]
        fn get_property_json(self: &LoginViewModel, name: &QString) -> QString;

        /// Set property value from JSON string
        #[qinvokable]
        fn set_property_json(self: Pin<&mut LoginViewModel>, name: &QString, value: &QString) -> bool;

        /// Invoke a command with optional JSON arguments
        #[qinvokable]
        fn invoke_command_json(
            self: Pin<&mut LoginViewModel>,
            name: &QString,
            args: &QString,
        ) -> QString;
    }
}

/// Rust-side implementation for LoginViewModel
pub struct LoginViewModelRust {
    username: cxx_qt_lib::QString,
    password: cxx_qt_lib::QString,
    is_loading: bool,
    error: cxx_qt_lib::QString,
}

impl Default for LoginViewModelRust {
    fn default() -> Self {
        Self {
            username: cxx_qt_lib::QString::default(),
            password: cxx_qt_lib::QString::default(),
            is_loading: false,
            error: cxx_qt_lib::QString::default(),
        }
    }
}

impl ffi::LoginViewModel {
    fn login(mut self: std::pin::Pin<&mut Self>) {
        self.as_mut().set_is_loading(true);
        self.as_mut().set_error(cxx_qt_lib::QString::default());
        // In a real implementation, this would trigger async login logic
        // For now, we just simulate a successful login
        self.as_mut().set_is_loading(false);
    }

    fn clear(mut self: std::pin::Pin<&mut Self>) {
        self.as_mut().set_username(cxx_qt_lib::QString::default());
        self.as_mut().set_password(cxx_qt_lib::QString::default());
        self.as_mut().set_error(cxx_qt_lib::QString::default());
        self.as_mut().set_is_loading(false);
    }

    fn get_property_json(&self, name: &cxx_qt_lib::QString) -> cxx_qt_lib::QString {
        let name_str = name.to_string();
        match name_str.as_str() {
            "username" => {
                let val = serde_json::to_string(&self.username().to_string()).unwrap_or_default();
                cxx_qt_lib::QString::from(&val)
            }
            "password" => {
                let val = serde_json::to_string(&self.password().to_string()).unwrap_or_default();
                cxx_qt_lib::QString::from(&val)
            }
            "isLoading" => {
                let val = if *self.is_loading() { "true" } else { "false" };
                cxx_qt_lib::QString::from(val)
            }
            "error" => {
                let val = serde_json::to_string(&self.error().to_string()).unwrap_or_default();
                cxx_qt_lib::QString::from(&val)
            }
            _ => cxx_qt_lib::QString::from("null"),
        }
    }

    fn set_property_json(
        mut self: std::pin::Pin<&mut Self>,
        name: &cxx_qt_lib::QString,
        value: &cxx_qt_lib::QString,
    ) -> bool {
        let name_str = name.to_string();
        let value_str = value.to_string();
        match name_str.as_str() {
            "username" => {
                if let Ok(s) = serde_json::from_str::<String>(&value_str) {
                    self.as_mut().set_username(cxx_qt_lib::QString::from(&s));
                    true
                } else {
                    false
                }
            }
            "password" => {
                if let Ok(s) = serde_json::from_str::<String>(&value_str) {
                    self.as_mut().set_password(cxx_qt_lib::QString::from(&s));
                    true
                } else {
                    false
                }
            }
            "isLoading" => {
                if let Ok(b) = serde_json::from_str::<bool>(&value_str) {
                    self.as_mut().set_is_loading(b);
                    true
                } else {
                    false
                }
            }
            "error" => {
                if let Ok(s) = serde_json::from_str::<String>(&value_str) {
                    self.as_mut().set_error(cxx_qt_lib::QString::from(&s));
                    true
                } else {
                    false
                }
            }
            _ => false,
        }
    }

    fn invoke_command_json(
        mut self: std::pin::Pin<&mut Self>,
        name: &cxx_qt_lib::QString,
        _args: &cxx_qt_lib::QString,
    ) -> cxx_qt_lib::QString {
        let name_str = name.to_string();
        match name_str.as_str() {
            "login" => {
                self.as_mut().login();
                cxx_qt_lib::QString::from(r#"{"success":true}"#)
            }
            "clear" => {
                self.as_mut().clear();
                cxx_qt_lib::QString::from(r#"{"success":true}"#)
            }
            _ => cxx_qt_lib::QString::from(r#"{"error":"unknown command"}"#),
        }
    }
}

/// Wrapper providing BridgeViewModel trait implementation
pub struct LoginViewModelBridge {
    username: String,
    password: String,
    is_loading: bool,
    error: String,
}

impl Default for LoginViewModelBridge {
    fn default() -> Self {
        Self::new()
    }
}

impl LoginViewModelBridge {
    pub fn new() -> Self {
        Self {
            username: String::new(),
            password: String::new(),
            is_loading: false,
            error: String::new(),
        }
    }
}

impl BridgeViewModel for LoginViewModelBridge {
    fn class_name(&self) -> &'static str {
        "LoginViewModel"
    }

    fn qml_name(&self) -> &'static str {
        "LoginVM"
    }

    fn get_property(&self, name: &str) -> Option<Value> {
        match name {
            "username" => Some(Value::String(self.username.clone())),
            "password" => Some(Value::String(self.password.clone())),
            "isLoading" => Some(Value::Bool(self.is_loading)),
            "error" => Some(Value::String(self.error.clone())),
            _ => None,
        }
    }

    fn set_property(&mut self, name: &str, value: Value) -> bool {
        match name {
            "username" => {
                if let Some(s) = value.as_str() {
                    self.username = s.to_string();
                    true
                } else {
                    false
                }
            }
            "password" => {
                if let Some(s) = value.as_str() {
                    self.password = s.to_string();
                    true
                } else {
                    false
                }
            }
            "isLoading" => {
                if let Some(b) = value.as_bool() {
                    self.is_loading = b;
                    true
                } else {
                    false
                }
            }
            "error" => {
                if let Some(s) = value.as_str() {
                    self.error = s.to_string();
                    true
                } else {
                    false
                }
            }
            _ => false,
        }
    }

    fn invoke_command(
        &mut self,
        name: &str,
        _args: Option<Value>,
    ) -> Result<Value, String> {
        match name {
            "login" => {
                self.is_loading = true;
                self.error = String::new();
                // Simulate successful login completion
                self.is_loading = false;
                Ok(Value::Null)
            }
            "clear" => {
                self.username = String::new();
                self.password = String::new();
                self.error = String::new();
                self.is_loading = false;
                Ok(Value::Null)
            }
            _ => Err(format!("Unknown command: {}", name)),
        }
    }

    fn property_names(&self) -> &'static [&'static str] {
        &["username", "password", "isLoading", "error"]
    }

    fn command_names(&self) -> &'static [&'static str] {
        &["login", "clear"]
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_login_bridge_properties() {
        let mut vm = LoginViewModelBridge::new();

        // Initial state
        assert_eq!(vm.get_property("username"), Some(Value::String(String::new())));
        assert_eq!(vm.get_property("password"), Some(Value::String(String::new())));
        assert_eq!(vm.get_property("isLoading"), Some(Value::Bool(false)));
        assert_eq!(vm.get_property("error"), Some(Value::String(String::new())));

        // Set properties
        vm.set_property("username", Value::String("testuser".to_string()));
        vm.set_property("password", Value::String("secret123".to_string()));

        assert_eq!(vm.get_property("username"), Some(Value::String("testuser".to_string())));
        assert_eq!(vm.get_property("password"), Some(Value::String("secret123".to_string())));
    }

    #[test]
    fn test_login_bridge_login_command() {
        let mut vm = LoginViewModelBridge::new();
        vm.set_property("username", Value::String("user".to_string()));
        vm.set_property("password", Value::String("pass".to_string()));

        let result = vm.invoke_command("login", None);
        assert!(result.is_ok());

        // After login completes, isLoading should be false
        assert_eq!(vm.get_property("isLoading"), Some(Value::Bool(false)));
    }

    #[test]
    fn test_login_bridge_clear_command() {
        let mut vm = LoginViewModelBridge::new();
        vm.set_property("username", Value::String("user".to_string()));
        vm.set_property("password", Value::String("pass".to_string()));
        vm.set_property("error", Value::String("some error".to_string()));

        let result = vm.invoke_command("clear", None);
        assert!(result.is_ok());

        assert_eq!(vm.get_property("username"), Some(Value::String(String::new())));
        assert_eq!(vm.get_property("password"), Some(Value::String(String::new())));
        assert_eq!(vm.get_property("error"), Some(Value::String(String::new())));
    }

    #[test]
    fn test_login_bridge_metadata() {
        let vm = LoginViewModelBridge::new();
        assert_eq!(vm.class_name(), "LoginViewModel");
        assert_eq!(vm.qml_name(), "LoginVM");
        assert_eq!(vm.property_names(), &["username", "password", "isLoading", "error"]);
        assert_eq!(vm.command_names(), &["login", "clear"]);
    }

    #[test]
    fn test_login_bridge_unknown_property() {
        let vm = LoginViewModelBridge::new();
        assert_eq!(vm.get_property("unknown"), None);
    }

    #[test]
    fn test_login_bridge_unknown_command() {
        let mut vm = LoginViewModelBridge::new();
        let result = vm.invoke_command("unknown", None);
        assert!(result.is_err());
    }
}
