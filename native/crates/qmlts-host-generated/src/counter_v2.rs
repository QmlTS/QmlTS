//! V2 single-QObject bridge for `CounterViewModel`.
//!
//! Properties: count (rw, i32). Commands: none. Effects: none. Lifecycle: none.

use core::pin::Pin;

use cxx_qt::CxxQtType;

use crate::v2_dispatch::{self, V2Event};

#[cxx_qt::bridge]
pub mod qobject {
    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, count)]
        #[qproperty(i32, instance_id, cxx_name = "instanceId", READ)]
        type CounterViewModelV2 = super::CounterViewModelV2Rust;
    }

    impl cxx_qt::Initialize for CounterViewModelV2 {}
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
            let Ok(owner_id) = i32::try_from(ctx.owner_id) else {
                tracing::error!(
                    owner_id = ctx.owner_id,
                    "CounterViewModelV2 V2InitContext owner_id does not fit in i32; instance is inert"
                );
                return;
            };
            let ptr = std::ptr::from_ref(self.as_ref().get_ref())
                .cast_mut()
                .cast::<std::ffi::c_void>();
            let instance_id = (ctx.register_instance)("CounterViewModel", ptr);
            if instance_id < 0 {
                tracing::warn!("CounterViewModelV2 registration failed; instance is inert");
                return;
            }
            let mut rust = self.as_mut().rust_mut();
            rust.instance_id = instance_id;
            rust.owner_id = owner_id;
            #[allow(clippy::cast_sign_loss)]
            v2_dispatch::route_v2_event(
                ctx.owner_id,
                V2Event::InstanceCreated {
                    instance_id: instance_id as u32,
                    class_name: "CounterViewModel".into(),
                },
            );
        } else {
            tracing::warn!("CounterViewModelV2 created without V2InitContext — instance is inert");
        }
    }
}
