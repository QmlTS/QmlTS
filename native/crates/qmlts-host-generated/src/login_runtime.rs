//! `LoginRuntime` bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(i32): command dispatch (routes to global dispatcher + increments `invoke_count`)
//! - `onMounted()`: lifecycle hook (routes to global dispatcher + increments `mounted_count`)
//! - `onUnmounting()`: lifecycle hook (routes to global dispatcher)
//! - `onLoginCompleted(bool)`: effect signal

use core::pin::Pin;

use crate::dispatch;

#[cxx_qt::bridge]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        #[qproperty(i32, mounted_count, cxx_name = "mountedCount")]
        #[qproperty(i32, dispatch_owner_id, cxx_name = "dispatchOwnerId")]
        type LoginRuntime = super::LoginRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut LoginRuntime>, command_id: i32);

        #[qinvokable]
        fn on_mounted(self: Pin<&mut LoginRuntime>);

        #[qinvokable]
        fn on_unmounting(self: Pin<&mut LoginRuntime>);
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qsignal]
        fn on_login_completed(self: Pin<&mut LoginRuntime>, success: bool);
    }
}

/// Rust backing struct for `LoginRuntime`.
#[derive(Default)]
pub struct LoginRuntimeRust {
    invoke_count: i32,
    mounted_count: i32,
    dispatch_owner_id: i32,
}

impl qobject::LoginRuntime {
    /// Handle command dispatch from QML `__qmlts.invoke(commandId)`.
    pub fn invoke(self: Pin<&mut Self>, command_id: i32) {
        let Ok(command_id) = u32::try_from(command_id) else {
            return;
        };
        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {
            return;
        };
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
        dispatch::dispatch_command(owner_id, "LoginViewModel", command_id);
    }

    /// Called when the QML component is mounted.
    pub fn on_mounted(self: Pin<&mut Self>) {
        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {
            return;
        };
        let current = *self.mounted_count();
        self.set_mounted_count(current + 1);
        dispatch::dispatch_lifecycle(owner_id, "LoginViewModel", "onMounted");
    }

    /// Called when the QML component is about to unmount.
    pub fn on_unmounting(self: Pin<&mut Self>) {
        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {
            return;
        };
        dispatch::dispatch_lifecycle(owner_id, "LoginViewModel", "onUnmounting");
    }
}
