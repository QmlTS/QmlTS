//! V2 single-QObject bridge for `SearchViewModel`.
//!
//! Properties: query (rw), `resultCount` (ro).
//! Effects: `searchCompleted(query, resultCount)`. Lifecycle: none.

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
        #[qproperty(QString, query)]
        #[qproperty(i32, result_count, cxx_name = "resultCount")]
        #[qproperty(i32, instance_id, cxx_name = "instanceId", READ)]
        type SearchViewModelV2 = super::SearchViewModelV2Rust;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        /// Effect signal: searchCompleted(query: QString, resultCount: i32)
        #[qsignal]
        fn search_completed(self: Pin<&mut SearchViewModelV2>, query: QString, result_count: i32);
    }

    impl cxx_qt::Initialize for SearchViewModelV2 {}
}

use cxx_qt_lib::QString;

/// Rust backing struct for `SearchViewModelV2`.
pub struct SearchViewModelV2Rust {
    query: QString,
    result_count: i32,
    instance_id: i32,
    owner_id: i32,
}

impl Default for SearchViewModelV2Rust {
    fn default() -> Self {
        Self {
            query: QString::from(""),
            result_count: 0,
            instance_id: -1,
            owner_id: 0,
        }
    }
}

/// `cxx_qt::Initialize` — called when the QObject is constructed.
impl cxx_qt::Initialize for qobject::SearchViewModelV2 {
    fn initialize(mut self: Pin<&mut Self>) {
        if let Some(ctx) = v2_dispatch::take_v2_init_context() {
            let Ok(owner_id) = i32::try_from(ctx.owner_id) else {
                tracing::error!(
                    owner_id = ctx.owner_id,
                    "SearchViewModelV2 V2InitContext owner_id does not fit in i32; instance is inert"
                );
                return;
            };
            let ptr = std::ptr::from_ref(self.as_ref().get_ref())
                .cast_mut()
                .cast::<std::ffi::c_void>();
            let instance_id = (ctx.register_instance)("SearchViewModel", ptr);
            if instance_id < 0 {
                tracing::warn!("SearchViewModelV2 registration failed; instance is inert");
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
                    class_name: "SearchViewModel".into(),
                },
            );
        } else {
            tracing::warn!("SearchViewModelV2 created without V2InitContext — instance is inert");
        }
    }
}
