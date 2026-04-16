//! V2 event dispatch — thin routing layer for V2 `QObjects`.
//!
//! V2 `QObjects` call `route_v2_event(owner_id, event)` which looks up the
//! host-installed router for that engine. The host crate installs the router
//! via `set_v2_router()` and owns delivery policy (ready gate, queueing,
//! handler invocation).
//!
//! This lives in the generated crate (not the host crate) so V2 `QObjects`
//! can call it without a circular dependency — same pattern as V1 `dispatch.rs`.

use std::collections::HashMap;
use std::sync::{Arc, LazyLock, Mutex};

/// V2 event payload routed from QObject to the host-installed router.
#[derive(Debug, Clone)]
pub enum V2Event {
    /// QML invoked a command on a V2 QObject.
    Command {
        instance_id: u32,
        class_name: String,
        command_name: String,
        args_json: String,
    },
    /// QML triggered a lifecycle event (onMounted, onUnmounting).
    Lifecycle {
        instance_id: u32,
        class_name: String,
        event: String,
    },
    /// A writable property was changed from QML.
    PropertyChanged {
        instance_id: u32,
        prop_name: String,
        value_json: String,
    },
    /// A new V2 QObject instance was created by the QML engine.
    InstanceCreated {
        instance_id: u32,
        class_name: String,
    },
    /// A V2 QObject instance is about to be destroyed.
    InstanceDestroying {
        instance_id: u32,
        class_name: Option<String>,
    },
}

/// Host-installed event router. The host crate creates a closure that
/// captures `InstanceRegistry` + `V2Handlers` and installs it via `set_v2_router`.
pub type V2EventRouter = Arc<dyn Fn(V2Event) + Send + Sync>;

static V2_ROUTERS: LazyLock<Mutex<HashMap<usize, V2EventRouter>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Install a V2 event router for a specific engine (identified by `owner_id`).
///
/// Called by the host crate during V2 engine initialization.
///
/// # Errors
///
/// Returns an error if `owner_id` is zero.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn set_v2_router(
    owner_id: usize,
    router: V2EventRouter,
) -> std::result::Result<(), &'static str> {
    if owner_id == 0 {
        return Err("V2 router owner_id must be non-zero");
    }
    V2_ROUTERS
        .lock()
        .expect("V2_ROUTERS lock poisoned")
        .insert(owner_id, router);
    Ok(())
}

/// Remove the V2 router for a specific engine.
///
/// Called on engine shutdown/cleanup.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn clear_v2_router(owner_id: usize) {
    V2_ROUTERS
        .lock()
        .expect("V2_ROUTERS lock poisoned")
        .remove(&owner_id);
}

/// Route a V2 event to the host-installed router for the given `owner_id`.
///
/// Called by V2 `QObjects` when commands, lifecycle, or property changes occur.
/// If no router is registered (stale `owner_id`), the event is dropped with
/// a diagnostic warning.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn route_v2_event(owner_id: usize, event: V2Event) {
    let router = V2_ROUTERS
        .lock()
        .expect("V2_ROUTERS lock poisoned")
        .get(&owner_id)
        .map(Arc::clone);
    if let Some(router) = router {
        router(event);
    } else {
        tracing::warn!(owner_id, ?event, "V2 event dropped: no router for owner_id");
    }
}

/// Clear all V2 routers. Intended for tests and full process teardown only.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn clear_all_v2_routers() {
    V2_ROUTERS.lock().expect("V2_ROUTERS lock poisoned").clear();
}

/// Check whether any V2 router is currently registered.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
#[must_use]
pub fn has_v2_router() -> bool {
    !V2_ROUTERS
        .lock()
        .expect("V2_ROUTERS lock poisoned")
        .is_empty()
}

// ─────────────────────────────────────────────────────────────────────────
//  V2 Init Context (thread-local for cxx_qt::Initialize)
// ─────────────────────────────────────────────────────────────────────────

/// Type alias for the V2 instance registration closure.
pub type RegisterInstanceFn = Arc<dyn Fn(&str, *mut std::ffi::c_void) -> i32 + Send + Sync>;

/// V2 initialization context set by the engine before QML loading.
/// Read by V2 QObject's `cxx_qt::Initialize` to register with the instance registry.
#[derive(Clone)]
pub struct V2InitContext {
    pub owner_id: usize,
    /// Closure that allocates an `instanceId` and registers the QObject pointer.
    /// Returns `instance_id` as `i32` because `QProperty` is `i32`.
    /// The closure captures the engine's `InstanceRegistry`.
    pub register_instance: RegisterInstanceFn,
}

impl std::fmt::Debug for V2InitContext {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("V2InitContext")
            .field("owner_id", &self.owner_id)
            .field("register_instance", &"<closure>")
            .finish()
    }
}

std::thread_local! {
    static V2_INIT_CONTEXT: std::cell::RefCell<Option<V2InitContext>> =
        const { std::cell::RefCell::new(None) };
}

/// RAII guard that sets the V2 init context for the duration of QML loading.
/// Auto-clears on drop (including panics).
pub struct V2ContextGuard {
    _private: (),
}

impl V2ContextGuard {
    /// Set the V2 init context. Returns a guard that clears it on drop.
    #[must_use]
    pub fn new(ctx: V2InitContext) -> Self {
        V2_INIT_CONTEXT.with(|cell| {
            *cell.borrow_mut() = Some(ctx);
        });
        Self { _private: () }
    }
}

impl Drop for V2ContextGuard {
    fn drop(&mut self) {
        V2_INIT_CONTEXT.with(|cell| {
            *cell.borrow_mut() = None;
        });
    }
}

/// Read the current V2 init context (called by V2 QObject Initialize impls).
/// Returns `None` if no context is set (QObject becomes inert).
#[must_use]
pub fn take_v2_init_context() -> Option<V2InitContext> {
    V2_INIT_CONTEXT.with(|cell| cell.borrow().clone())
}

// ─────────────────────────────────────────────────────────────────────────
//  C++ → Rust routing callbacks (called from factories_v2.cpp)
// ─────────────────────────────────────────────────────────────────────────

/// Called from C++ when a V2 QObject writable property changes.
///
/// # Safety
///
/// `prop_name` and `value_json` must be valid null-terminated C strings.
#[unsafe(no_mangle)]
pub unsafe extern "C" fn qmlts_v2_route_property_changed(
    owner_id: i32,
    instance_id: i32,
    prop_name: *const std::ffi::c_char,
    value_json: *const std::ffi::c_char,
) {
    if owner_id <= 0 || instance_id < 0 {
        return;
    }
    let prop_name = unsafe {
        std::ffi::CStr::from_ptr(prop_name)
            .to_str()
            .unwrap_or_default()
    };
    let value_json = unsafe {
        std::ffi::CStr::from_ptr(value_json)
            .to_str()
            .unwrap_or_default()
    };
    #[allow(clippy::cast_sign_loss)]
    route_v2_event(
        owner_id as usize,
        V2Event::PropertyChanged {
            instance_id: instance_id as u32,
            prop_name: prop_name.to_string(),
            value_json: value_json.to_string(),
        },
    );
}

/// Called from C++ when a V2 QObject is about to be destroyed.
///
/// # Safety
///
/// Called from Qt's `QObject::destroyed` signal handler.
#[unsafe(no_mangle)]
pub extern "C" fn qmlts_v2_route_instance_destroying(owner_id: i32, instance_id: i32) {
    if owner_id <= 0 || instance_id < 0 {
        return;
    }
    #[allow(clippy::cast_sign_loss)]
    route_v2_event(
        owner_id as usize,
        V2Event::InstanceDestroying {
            instance_id: instance_id as u32,
            class_name: None,
        },
    );
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::atomic::{AtomicU32, Ordering};

    static TEST_MUTEX: LazyLock<Mutex<()>> = LazyLock::new(|| Mutex::new(()));

    #[test]
    fn route_without_router_does_not_panic() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_all_v2_routers();
        route_v2_event(
            999,
            V2Event::Command {
                instance_id: 1,
                class_name: "Test".into(),
                command_name: "foo".into(),
                args_json: "[]".into(),
            },
        );
    }

    #[test]
    fn set_and_route_event() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_all_v2_routers();
        let counter = Arc::new(AtomicU32::new(0));
        let counter_clone = counter.clone();
        set_v2_router(
            1,
            Arc::new(move |event| {
                if let V2Event::Command { instance_id, .. } = event {
                    counter_clone.store(instance_id, Ordering::SeqCst);
                }
            }),
        )
        .unwrap();
        route_v2_event(
            1,
            V2Event::Command {
                instance_id: 42,
                class_name: "Login".into(),
                command_name: "login".into(),
                args_json: "[]".into(),
            },
        );
        assert_eq!(counter.load(Ordering::SeqCst), 42);
        clear_all_v2_routers();
    }

    #[test]
    fn multiple_owners_route_independently() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_all_v2_routers();
        let a = Arc::new(AtomicU32::new(0));
        let b = Arc::new(AtomicU32::new(0));
        let a2 = a.clone();
        let b2 = b.clone();
        set_v2_router(
            1,
            Arc::new(move |event| {
                if let V2Event::Command { instance_id, .. } = event {
                    a2.store(instance_id, Ordering::SeqCst);
                }
            }),
        )
        .unwrap();
        set_v2_router(
            2,
            Arc::new(move |event| {
                if let V2Event::Command { instance_id, .. } = event {
                    b2.store(instance_id, Ordering::SeqCst);
                }
            }),
        )
        .unwrap();
        route_v2_event(
            1,
            V2Event::Command {
                instance_id: 11,
                class_name: "A".into(),
                command_name: "x".into(),
                args_json: "[]".into(),
            },
        );
        route_v2_event(
            2,
            V2Event::Command {
                instance_id: 22,
                class_name: "B".into(),
                command_name: "y".into(),
                args_json: "[]".into(),
            },
        );
        assert_eq!(a.load(Ordering::SeqCst), 11);
        assert_eq!(b.load(Ordering::SeqCst), 22);
        clear_all_v2_routers();
    }

    #[test]
    fn clear_v2_router_removes_specific_owner() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_all_v2_routers();
        set_v2_router(1, Arc::new(|_| {})).unwrap();
        set_v2_router(2, Arc::new(|_| {})).unwrap();
        assert!(has_v2_router());
        clear_v2_router(1);
        assert!(has_v2_router()); // owner 2 still present
        clear_v2_router(2);
        assert!(!has_v2_router());
    }

    #[test]
    fn zero_owner_id_rejected() {
        let result = set_v2_router(0, Arc::new(|_| {}));
        assert!(result.is_err());
    }

    #[test]
    fn v2_context_guard_sets_and_clears() {
        let ctx = V2InitContext {
            owner_id: 42,
            register_instance: Arc::new(|_, _| -1),
        };
        assert!(take_v2_init_context().is_none());
        {
            let _guard = V2ContextGuard::new(ctx);
            let read = take_v2_init_context();
            assert!(read.is_some());
            assert_eq!(read.unwrap().owner_id, 42);
        }
        // Guard dropped, context cleared
        assert!(take_v2_init_context().is_none());
    }
}
