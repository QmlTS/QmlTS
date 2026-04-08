//! CounterViewModel bridge module.
//!
//! A simple counter ViewModel with:
//! - State: `count` (i32)
//! - Commands: `increment`, `decrement`, `reset`

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
        #[qproperty(i32, count)]
        type CounterViewModel = super::CounterViewModelRust;

        /// Signal emitted when a command completes
        #[qsignal]
        fn command_completed(self: Pin<&mut CounterViewModel>, command_id: QString, result: QString);

        /// Increment the counter
        #[qinvokable]
        fn increment(self: Pin<&mut CounterViewModel>);

        /// Decrement the counter
        #[qinvokable]
        fn decrement(self: Pin<&mut CounterViewModel>);

        /// Reset the counter to zero
        #[qinvokable]
        fn reset(self: Pin<&mut CounterViewModel>);

        /// Get property value as JSON string
        #[qinvokable]
        fn get_property_json(self: &CounterViewModel, name: &QString) -> QString;

        /// Set property value from JSON string
        #[qinvokable]
        fn set_property_json(self: Pin<&mut CounterViewModel>, name: &QString, value: &QString) -> bool;

        /// Invoke a command with optional JSON arguments
        #[qinvokable]
        fn invoke_command_json(
            self: Pin<&mut CounterViewModel>,
            name: &QString,
            args: &QString,
        ) -> QString;
    }
}

/// Rust-side implementation for CounterViewModel
#[derive(Default)]
pub struct CounterViewModelRust {
    count: i32,
}

impl ffi::CounterViewModel {
    fn increment(mut self: std::pin::Pin<&mut Self>) {
        let new_count = self.count().saturating_add(1);
        self.as_mut().set_count(new_count);
    }

    fn decrement(mut self: std::pin::Pin<&mut Self>) {
        let new_count = self.count().saturating_sub(1);
        self.as_mut().set_count(new_count);
    }

    fn reset(mut self: std::pin::Pin<&mut Self>) {
        self.as_mut().set_count(0);
    }

    fn get_property_json(&self, name: &cxx_qt_lib::QString) -> cxx_qt_lib::QString {
        let name_str = name.to_string();
        match name_str.as_str() {
            "count" => cxx_qt_lib::QString::from(&self.count().to_string()),
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
            "count" => {
                if let Ok(v) = value_str.parse::<i32>() {
                    self.as_mut().set_count(v);
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
            "increment" => {
                self.as_mut().increment();
                cxx_qt_lib::QString::from(r#"{"success":true}"#)
            }
            "decrement" => {
                self.as_mut().decrement();
                cxx_qt_lib::QString::from(r#"{"success":true}"#)
            }
            "reset" => {
                self.as_mut().reset();
                cxx_qt_lib::QString::from(r#"{"success":true}"#)
            }
            _ => cxx_qt_lib::QString::from(r#"{"error":"unknown command"}"#),
        }
    }
}

/// Wrapper providing BridgeViewModel trait implementation
pub struct CounterViewModelBridge {
    count: i32,
}

impl Default for CounterViewModelBridge {
    fn default() -> Self {
        Self::new()
    }
}

impl CounterViewModelBridge {
    pub fn new() -> Self {
        Self { count: 0 }
    }
}

impl BridgeViewModel for CounterViewModelBridge {
    fn class_name(&self) -> &'static str {
        "CounterViewModel"
    }

    fn qml_name(&self) -> &'static str {
        "CounterVM"
    }

    fn get_property(&self, name: &str) -> Option<Value> {
        match name {
            "count" => Some(Value::Number(self.count.into())),
            _ => None,
        }
    }

    fn set_property(&mut self, name: &str, value: Value) -> bool {
        match name {
            "count" => {
                if let Some(n) = value.as_i64() {
                    self.count = n as i32;
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
            "increment" => {
                self.count = self.count.saturating_add(1);
                Ok(Value::Null)
            }
            "decrement" => {
                self.count = self.count.saturating_sub(1);
                Ok(Value::Null)
            }
            "reset" => {
                self.count = 0;
                Ok(Value::Null)
            }
            _ => Err(format!("Unknown command: {}", name)),
        }
    }

    fn property_names(&self) -> &'static [&'static str] {
        &["count"]
    }

    fn command_names(&self) -> &'static [&'static str] {
        &["increment", "decrement", "reset"]
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_counter_bridge_increment() {
        let mut vm = CounterViewModelBridge::new();
        assert_eq!(vm.get_property("count"), Some(Value::Number(0.into())));

        vm.invoke_command("increment", None).unwrap();
        assert_eq!(vm.get_property("count"), Some(Value::Number(1.into())));

        vm.invoke_command("increment", None).unwrap();
        assert_eq!(vm.get_property("count"), Some(Value::Number(2.into())));
    }

    #[test]
    fn test_counter_bridge_decrement() {
        let mut vm = CounterViewModelBridge::new();
        vm.set_property("count", Value::Number(5.into()));

        vm.invoke_command("decrement", None).unwrap();
        assert_eq!(vm.get_property("count"), Some(Value::Number(4.into())));
    }

    #[test]
    fn test_counter_bridge_reset() {
        let mut vm = CounterViewModelBridge::new();
        vm.set_property("count", Value::Number(100.into()));

        vm.invoke_command("reset", None).unwrap();
        assert_eq!(vm.get_property("count"), Some(Value::Number(0.into())));
    }

    #[test]
    fn test_counter_bridge_metadata() {
        let vm = CounterViewModelBridge::new();
        assert_eq!(vm.class_name(), "CounterViewModel");
        assert_eq!(vm.qml_name(), "CounterVM");
        assert_eq!(vm.property_names(), &["count"]);
        assert_eq!(vm.command_names(), &["increment", "decrement", "reset"]);
    }

    #[test]
    fn test_counter_bridge_unknown_command() {
        let mut vm = CounterViewModelBridge::new();
        let result = vm.invoke_command("unknown", None);
        assert!(result.is_err());
    }
}
