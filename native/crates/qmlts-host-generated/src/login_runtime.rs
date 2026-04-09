//! LoginRuntime bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(QVariant): command dispatch (increments invoke_count for observability)
//! - onMounted(): lifecycle hook
//! - onUnmounting(): lifecycle hook
//! - onLoginCompleted(bool): effect signal

use core::pin::Pin;

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qvariant.h");
        type QVariant = cxx_qt_lib::QVariant;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        type LoginRuntime = super::LoginRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut LoginRuntime>, command: QVariant);

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

/// Rust backing struct for LoginRuntime.
#[derive(Default)]
pub struct LoginRuntimeRust {
    invoke_count: i32,
}

impl qobject::LoginRuntime {
    /// Handle command dispatch. Increments invoke_count for test observability.
    pub fn invoke(self: Pin<&mut Self>, _command: cxx_qt_lib::QVariant) {
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
    }

    /// Called when the QML component is mounted.
    pub fn on_mounted(self: Pin<&mut Self>) {
        // Step 2: record the call. Real wiring in Step 3+.
        let current = *self.invoke_count();
        self.set_invoke_count(current); // no-op, but proves method is callable
    }

    /// Called when the QML component is about to unmount.
    pub fn on_unmounting(self: Pin<&mut Self>) {
        // Step 2: record the call. Real wiring in Step 3+.
    }
}
