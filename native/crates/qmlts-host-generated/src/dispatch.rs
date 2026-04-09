//! Global dispatcher storage for command and lifecycle routing.
//!
//! Runtime `QObjects` call `dispatch_command` / `dispatch_lifecycle` when
//! QML invokes `__qmlts.invoke(id)` or `__qmlts.onMounted()`.
//! The host crate sets the actual dispatchers via `set_command_dispatcher`
//! and `set_lifecycle_dispatcher`, which wrap N-API `ThreadsafeFunctions`.
//!
//! This lives in the generated crate (not the host crate) so runtime
//! `QObjects` can call it without creating a circular dependency.

use std::collections::HashMap;
use std::sync::{Arc, LazyLock, Mutex};

type CommandDispatcher = Arc<dyn Fn(&str, u32) + Send + Sync>;
type LifecycleDispatcher = Arc<dyn Fn(&str, &str) + Send + Sync>;
type CommandDispatcherBox = Box<dyn Fn(&str, u32) + Send + Sync>;
type LifecycleDispatcherBox = Box<dyn Fn(&str, &str) + Send + Sync>;

static COMMAND_DISPATCHERS: LazyLock<Mutex<HashMap<usize, CommandDispatcher>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));
static LIFECYCLE_DISPATCHERS: LazyLock<Mutex<HashMap<usize, LifecycleDispatcher>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Register the command dispatcher callback.
///
/// Called by the host crate when `registerInvokeHandler` is invoked from TS.
/// The closure typically wraps an N-API `ThreadsafeFunction`.
///
/// # Errors
///
/// Returns an error if `owner_id` is zero.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn set_command_dispatcher(
    owner_id: usize,
    f: CommandDispatcherBox,
) -> std::result::Result<(), &'static str> {
    if owner_id == 0 {
        return Err("command dispatcher owner id must be non-zero");
    }
    let mut guard = COMMAND_DISPATCHERS
        .lock()
        .expect("COMMAND_DISPATCHERS lock poisoned");
    guard.insert(owner_id, Arc::from(f));
    Ok(())
}

/// Register the lifecycle dispatcher callback.
///
/// Called by the host crate when `registerLifecycleHandler` is invoked from TS.
///
/// # Errors
///
/// Returns an error if `owner_id` is zero.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn set_lifecycle_dispatcher(
    owner_id: usize,
    f: LifecycleDispatcherBox,
) -> std::result::Result<(), &'static str> {
    if owner_id == 0 {
        return Err("lifecycle dispatcher owner id must be non-zero");
    }
    let mut guard = LIFECYCLE_DISPATCHERS
        .lock()
        .expect("LIFECYCLE_DISPATCHERS lock poisoned");
    guard.insert(owner_id, Arc::from(f));
    Ok(())
}

/// Dispatch a command from a runtime QObject to the registered handler.
///
/// Called by `LoginRuntime::invoke(i32)`, `CounterRuntime::invoke(i32)`, etc.
/// If no dispatcher is registered, the call is silently ignored (the runtime
/// objects still increment `invoke_count` for observability).
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn dispatch_command(owner_id: usize, class_name: &str, command_id: u32) {
    let callback = COMMAND_DISPATCHERS
        .lock()
        .expect("COMMAND_DISPATCHERS lock poisoned")
        .get(&owner_id)
        .map(Arc::clone);
    if let Some(callback) = callback {
        callback(class_name, command_id);
    }
}

/// Dispatch a lifecycle event from a runtime QObject to the registered handler.
///
/// `event` is `"onMounted"` or `"onUnmounting"`.
/// If no dispatcher is registered, the call is silently ignored.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn dispatch_lifecycle(owner_id: usize, class_name: &str, event: &str) {
    let callback = LIFECYCLE_DISPATCHERS
        .lock()
        .expect("LIFECYCLE_DISPATCHERS lock poisoned")
        .get(&owner_id)
        .map(Arc::clone);
    if let Some(callback) = callback {
        callback(class_name, event);
    }
}

/// Clear both dispatchers owned by a specific engine.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn clear_dispatchers_for_owner(owner_id: usize) {
    COMMAND_DISPATCHERS
        .lock()
        .expect("COMMAND_DISPATCHERS lock poisoned")
        .remove(&owner_id);
    LIFECYCLE_DISPATCHERS
        .lock()
        .expect("LIFECYCLE_DISPATCHERS lock poisoned")
        .remove(&owner_id);
}

/// Clear both dispatchers unconditionally.
///
/// Intended for tests and full process teardown only.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn clear_dispatchers() {
    COMMAND_DISPATCHERS
        .lock()
        .expect("COMMAND_DISPATCHERS lock poisoned")
        .clear();
    LIFECYCLE_DISPATCHERS
        .lock()
        .expect("LIFECYCLE_DISPATCHERS lock poisoned")
        .clear();
}

/// Check whether a command dispatcher is currently registered.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
#[must_use]
pub fn has_command_dispatcher() -> bool {
    !COMMAND_DISPATCHERS
        .lock()
        .expect("COMMAND_DISPATCHERS lock poisoned")
        .is_empty()
}

/// Check whether a lifecycle dispatcher is currently registered.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
#[must_use]
pub fn has_lifecycle_dispatcher() -> bool {
    !LIFECYCLE_DISPATCHERS
        .lock()
        .expect("LIFECYCLE_DISPATCHERS lock poisoned")
        .is_empty()
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::Arc;
    use std::sync::atomic::{AtomicU32, Ordering};

    static TEST_MUTEX: LazyLock<Mutex<()>> = LazyLock::new(|| Mutex::new(()));

    #[test]
    fn dispatch_command_without_handler_does_not_panic() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        dispatch_command(1, "TestVM", 42);
    }

    #[test]
    fn dispatch_lifecycle_without_handler_does_not_panic() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        dispatch_lifecycle(1, "TestVM", "onMounted");
    }

    #[test]
    fn set_and_dispatch_command() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        let counter = Arc::new(AtomicU32::new(0));
        let counter_clone = counter.clone();
        set_command_dispatcher(
            1,
            Box::new(move |_class, id| {
                counter_clone.store(id, Ordering::SeqCst);
            }),
        )
        .unwrap();
        dispatch_command(1, "LoginViewModel", 927_957_157);
        assert_eq!(counter.load(Ordering::SeqCst), 927_957_157);
        clear_dispatchers();
    }

    #[test]
    fn set_and_dispatch_lifecycle() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        let called = Arc::new(Mutex::new(String::new()));
        let called_clone = called.clone();
        set_lifecycle_dispatcher(
            1,
            Box::new(move |class, event| {
                let mut guard = called_clone.lock().unwrap();
                *guard = format!("{class}:{event}");
            }),
        )
        .unwrap();
        dispatch_lifecycle(1, "LoginViewModel", "onMounted");
        let result = called.lock().unwrap().clone();
        assert_eq!(result, "LoginViewModel:onMounted");
        clear_dispatchers();
    }

    #[test]
    fn clear_dispatchers_removes_both() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        set_command_dispatcher(1, Box::new(|_, _| {})).unwrap();
        set_lifecycle_dispatcher(1, Box::new(|_, _| {})).unwrap();
        assert!(has_command_dispatcher());
        assert!(has_lifecycle_dispatcher());
        clear_dispatchers();
        assert!(!has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
    }

    #[test]
    fn has_dispatcher_checks() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        assert!(!has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
        set_command_dispatcher(1, Box::new(|_, _| {})).unwrap();
        assert!(has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
        clear_dispatchers();
    }

    #[test]
    fn multiple_owners_can_register_independent_dispatchers() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        let first = Arc::new(AtomicU32::new(0));
        let second = Arc::new(AtomicU32::new(0));
        let first_clone = Arc::clone(&first);
        let second_clone = Arc::clone(&second);
        set_command_dispatcher(
            1,
            Box::new(move |_, id| {
                first_clone.store(id, Ordering::SeqCst);
            }),
        )
        .unwrap();
        set_command_dispatcher(
            2,
            Box::new(move |_, id| {
                second_clone.store(id, Ordering::SeqCst);
            }),
        )
        .unwrap();

        dispatch_command(2, "LoginViewModel", 22);
        dispatch_command(1, "LoginViewModel", 11);

        assert_eq!(first.load(Ordering::SeqCst), 11);
        assert_eq!(second.load(Ordering::SeqCst), 22);
        clear_dispatchers();
    }

    #[test]
    fn clear_dispatchers_for_other_owner_preserves_registration() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_dispatchers();
        set_lifecycle_dispatcher(1, Box::new(|_, _| {})).unwrap();
        clear_dispatchers_for_owner(2);
        assert!(has_lifecycle_dispatcher());
        clear_dispatchers_for_owner(1);
        assert!(!has_lifecycle_dispatcher());
    }
}
