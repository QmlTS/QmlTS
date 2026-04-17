//! V2 single-QObject bridge for `LoginViewModel`.
//!
//! Properties: username (rw), password (rw), `isLoading` (ro).
//! Commands: `login()`. Effects: `loginCompleted(bool)`.
//! Lifecycle: `onMounted`, `onUnmounting`.

use core::pin::Pin;

use cxx_qt::CxxQtType;

use crate::v2_dispatch::{self, V2Event};

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(QString, username)]
        #[qproperty(QString, password)]
        #[qproperty(bool, is_loading, cxx_name = "isLoading")]
        #[qproperty(i32, instance_id, cxx_name = "instanceId", READ)]
        type LoginViewModelV2 = super::LoginViewModelV2Rust;

        /// Command: login
        #[qinvokable]
        fn login(self: Pin<&mut LoginViewModelV2>);

        /// Lifecycle: onMounted
        #[qinvokable]
        fn on_mounted(self: Pin<&mut LoginViewModelV2>);

        /// Lifecycle: onUnmounting
        #[qinvokable]
        fn on_unmounting(self: Pin<&mut LoginViewModelV2>);
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        /// Effect signal: loginCompleted(success: bool)
        #[qsignal]
        fn login_completed(self: Pin<&mut LoginViewModelV2>, success: bool);
    }

    impl cxx_qt::Initialize for LoginViewModelV2 {}
}

use cxx_qt_lib::QString;

/// Rust backing struct for `LoginViewModelV2`.
pub struct LoginViewModelV2Rust {
    username: QString,
    password: QString,
    is_loading: bool,
    instance_id: i32,
    owner_id: i32,
}

impl Default for LoginViewModelV2Rust {
    fn default() -> Self {
        Self {
            username: QString::default(),
            password: QString::default(),
            is_loading: false,
            instance_id: -1,
            owner_id: 0,
        }
    }
}

impl qobject::LoginViewModelV2 {
    fn routing_ids(self: Pin<&mut Self>) -> Option<(usize, u32)> {
        let rust = self.as_ref().get_ref();
        if rust.instance_id < 0 || rust.owner_id <= 0 {
            return None;
        }
        #[allow(clippy::cast_sign_loss)]
        Some((rust.owner_id as usize, rust.instance_id as u32))
    }

    fn login(self: Pin<&mut Self>) {
        let Some((owner_id, instance_id)) = self.routing_ids() else {
            return;
        };
        v2_dispatch::route_v2_event(
            owner_id,
            V2Event::Command {
                instance_id,
                class_name: "LoginViewModel".into(),
                command_name: "login".into(),
                args_json: "[]".into(),
            },
        );
    }

    fn on_mounted(self: Pin<&mut Self>) {
        let Some((owner_id, instance_id)) = self.routing_ids() else {
            return;
        };
        v2_dispatch::route_v2_event(
            owner_id,
            V2Event::Lifecycle {
                instance_id,
                class_name: "LoginViewModel".into(),
                event: "onMounted".into(),
            },
        );
    }

    fn on_unmounting(self: Pin<&mut Self>) {
        let Some((owner_id, instance_id)) = self.routing_ids() else {
            return;
        };
        v2_dispatch::route_v2_event(
            owner_id,
            V2Event::Lifecycle {
                instance_id,
                class_name: "LoginViewModel".into(),
                event: "onUnmounting".into(),
            },
        );
    }
}

/// `cxx_qt::Initialize` — called when the QObject is constructed.
/// Reads `V2InitContext` to register this instance with the engine's `InstanceRegistry`.
impl cxx_qt::Initialize for qobject::LoginViewModelV2 {
    fn initialize(mut self: Pin<&mut Self>) {
        if let Some(ctx) = v2_dispatch::take_v2_init_context() {
            let Ok(owner_id) = i32::try_from(ctx.owner_id) else {
                tracing::error!(
                    owner_id = ctx.owner_id,
                    "LoginViewModelV2 V2InitContext owner_id does not fit in i32; instance is inert"
                );
                return;
            };
            let ptr = std::ptr::from_ref(self.as_ref().get_ref())
                .cast_mut()
                .cast::<std::ffi::c_void>();
            let instance_id = (ctx.register_instance)("LoginViewModel", ptr);
            if instance_id < 0 {
                tracing::warn!("LoginViewModelV2 registration failed; instance is inert");
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
                    class_name: "LoginViewModel".into(),
                },
            );
        } else {
            tracing::warn!("LoginViewModelV2 created without V2InitContext — instance is inert");
        }
    }
}
