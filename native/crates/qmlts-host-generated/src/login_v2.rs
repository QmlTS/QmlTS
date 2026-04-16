//! V2 single-QObject bridge for `LoginViewModel`.
//!
//! Properties: username (rw), password (rw), `isLoading` (ro).
//! Commands: `login()`. Effects: `loginCompleted(bool)`.
//! Lifecycle: `onMounted`, `onUnmounting`.

use core::pin::Pin;

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
        #[qproperty(i32, instance_id, cxx_name = "instanceId")]
        #[qproperty(i32, owner_id, cxx_name = "ownerId")]
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
    #[allow(clippy::cast_sign_loss)]
    fn login(self: Pin<&mut Self>) {
        let iid = *self.instance_id();
        if iid < 0 {
            return;
        }
        let oid = *self.owner_id();
        if oid <= 0 {
            return;
        }
        v2_dispatch::route_v2_event(
            oid as usize,
            V2Event::Command {
                instance_id: iid as u32,
                class_name: "LoginViewModel".into(),
                command_name: "login".into(),
                args_json: "[]".into(),
            },
        );
    }

    #[allow(clippy::cast_sign_loss)]
    fn on_mounted(self: Pin<&mut Self>) {
        let iid = *self.instance_id();
        if iid < 0 {
            return;
        }
        let oid = *self.owner_id();
        if oid <= 0 {
            return;
        }
        v2_dispatch::route_v2_event(
            oid as usize,
            V2Event::Lifecycle {
                instance_id: iid as u32,
                class_name: "LoginViewModel".into(),
                event: "onMounted".into(),
            },
        );
    }

    #[allow(clippy::cast_sign_loss)]
    fn on_unmounting(self: Pin<&mut Self>) {
        let iid = *self.instance_id();
        if iid < 0 {
            return;
        }
        let oid = *self.owner_id();
        if oid <= 0 {
            return;
        }
        v2_dispatch::route_v2_event(
            oid as usize,
            V2Event::Lifecycle {
                instance_id: iid as u32,
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
            let ptr = std::ptr::from_ref(self.as_ref().get_ref())
                .cast_mut()
                .cast::<std::ffi::c_void>();
            let instance_id = (ctx.register_instance)("LoginViewModel", ptr);
            self.as_mut().set_instance_id(instance_id);
            #[allow(clippy::cast_possible_truncation, clippy::cast_possible_wrap)]
            self.as_mut().set_owner_id(ctx.owner_id as i32);
        } else {
            tracing::warn!("LoginViewModelV2 created without V2InitContext — instance is inert");
        }
    }
}
