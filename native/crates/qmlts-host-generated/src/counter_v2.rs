//! V2 single-QObject bridge for `CounterViewModel`.
//!
//! Properties: count (rw, i32). Commands: none. Effects: none. Lifecycle: none.

use core::pin::Pin;

use crate::v2_dispatch;

#[cxx_qt::bridge]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, count)]
        #[qproperty(i32, instance_id, cxx_name = "instanceId")]
        #[qproperty(i32, owner_id, cxx_name = "ownerId")]
        type CounterViewModelV2 = super::CounterViewModelV2Rust;
    }
}

/// Rust backing struct for `CounterViewModelV2`.
pub struct CounterViewModelV2Rust {
    count: i32,
    instance_id: i32,
    owner_id: i32,
}

impl Default for CounterViewModelV2Rust {
    fn default() -> Self {
        Self {
            count: 0,
            instance_id: -1,
            owner_id: 0,
        }
    }
}

/// `cxx_qt::Initialize` — called when the QObject is constructed.
impl cxx_qt::Initialize for qobject::CounterViewModelV2 {
    fn initialize(mut self: Pin<&mut Self>) {
        if let Some(ctx) = v2_dispatch::take_v2_init_context() {
            let ptr = std::ptr::from_ref(self.as_ref().get_ref()).cast_mut().cast::<std::ffi::c_void>();
            let instance_id = (ctx.register_instance)("CounterViewModel", ptr);
            self.as_mut().set_instance_id(instance_id);
            #[allow(clippy::cast_possible_truncation, clippy::cast_possible_wrap)]
            self.as_mut().set_owner_id(ctx.owner_id as i32);
        } else {
            tracing::warn!(
                "CounterViewModelV2 created without V2InitContext — instance is inert"
            );
        }
    }
}
