//! CounterRuntime bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(QVariant): command dispatch (increments invoke_count for observability)
//! No lifecycle hooks, no effects (per schema).

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
        type CounterRuntime = super::CounterRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut CounterRuntime>, command: QVariant);
    }
}

/// Rust backing struct for CounterRuntime.
#[derive(Default)]
pub struct CounterRuntimeRust {
    invoke_count: i32,
}

impl qobject::CounterRuntime {
    /// Handle command dispatch. Increments invoke_count for test observability.
    pub fn invoke(self: Pin<&mut Self>, _command: cxx_qt_lib::QVariant) {
        let current = *self.invoke_count();
        self.set_invoke_count(current + 1);
    }
}
