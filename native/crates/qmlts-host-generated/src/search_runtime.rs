//! `SearchRuntime` bridge QObject — set as `__qmlts` context property.
//!
//! Provides:
//! - invoke(i32): command dispatch
//! - `onSearchCompleted(QString, i32)`: 2-parameter effect signal

use core::pin::Pin;

use crate::dispatch;

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++Qt" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]
        #[qproperty(i32, dispatch_owner_id, cxx_name = "dispatchOwnerId")]
        type SearchRuntime = super::SearchRuntimeRust;

        #[qinvokable]
        fn invoke(self: Pin<&mut SearchRuntime>, command_id: i32);
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qsignal]
        fn on_search_completed(self: Pin<&mut SearchRuntime>, query: QString, result_count: i32);
    }
}

/// Rust backing struct for `SearchRuntime`.
#[derive(Default)]
pub struct SearchRuntimeRust {
    invoke_count: i32,
    dispatch_owner_id: i32,
}

impl qobject::SearchRuntime {
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
        dispatch::dispatch_command(owner_id, "SearchViewModel", command_id);
    }
}
