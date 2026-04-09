//! `CounterRuntime` bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(i32): command dispatch (routes to global dispatcher + increments `invoke_count`)
//!
//! No lifecycle hooks, no effects (per schema).

use core::pin::Pin;

use crate::dispatch;

#[cxx_qt::bridge]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        type CounterRuntime = super::CounterRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut CounterRuntime>, command_id: i32);
    }
}

/// Rust backing struct for `CounterRuntime`.
#[derive(Default)]
pub struct CounterRuntimeRust {
    invoke_count: i32,
}

impl qobject::CounterRuntime {
    /// Handle command dispatch from QML `__qmlts.invoke(commandId)`.
    pub fn invoke(self: Pin<&mut Self>, command_id: i32) {
        let Ok(command_id) = u32::try_from(command_id) else {
            return;
        };
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
        dispatch::dispatch_command("CounterViewModel", command_id);
    }
}
