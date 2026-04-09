//! Global dispatcher storage for command and lifecycle routing.
//!
//! Runtime `QObjects` call `dispatch_command` / `dispatch_lifecycle` when
//! QML invokes `__qmlts.invoke(id)` or `__qmlts.onMounted()`.
//! The host crate sets the actual dispatchers via `set_command_dispatcher`
//! and `set_lifecycle_dispatcher`, which wrap N-API `ThreadsafeFunctions`.
//!
//! This lives in the generated crate (not the host crate) so runtime
//! `QObjects` can call it without creating a circular dependency.

use std::sync::{Arc, Mutex};

type CommandDispatcher = Arc<dyn Fn(&str, u32) + Send + Sync>;
type LifecycleDispatcher = Arc<dyn Fn(&str, &str) + Send + Sync>;
type CommandDispatcherBox = Box<dyn Fn(&str, u32) + Send + Sync>;
type LifecycleDispatcherBox = Box<dyn Fn(&str, &str) + Send + Sync>;

struct OwnedCommandDispatcher {
    owner_id: usize,
    callback: CommandDispatcher,
}

struct OwnedLifecycleDispatcher {
    owner_id: usize,
    callback: LifecycleDispatcher,
}

static COMMAND_DISPATCHER: Mutex<Option<OwnedCommandDispatcher>> = Mutex::new(None);
static LIFECYCLE_DISPATCHER: Mutex<Option<OwnedLifecycleDispatcher>> = Mutex::new(None);

/// Register the command dispatcher callback.
///
/// Called by the host crate when `registerInvokeHandler` is invoked from TS.
/// The closure typically wraps an N-API `ThreadsafeFunction`.
///
/// # Errors
///
/// Returns an error if another engine already owns the process-global
/// command dispatcher registration.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn set_command_dispatcher(
    owner_id: usize,
    f: CommandDispatcherBox,
) -> std::result::Result<(), &'static str> {
    let mut guard = COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned");
    if let Some(existing) = guard.as_ref()
        && existing.owner_id != owner_id
    {
        return Err("command dispatcher already registered by another engine");
    }
    *guard = Some(OwnedCommandDispatcher {
        owner_id,
        callback: Arc::from(f),
    });
    Ok(())
}

/// Register the lifecycle dispatcher callback.
///
/// Called by the host crate when `registerLifecycleHandler` is invoked from TS.
///
/// # Errors
///
/// Returns an error if another engine already owns the process-global
/// lifecycle dispatcher registration.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn set_lifecycle_dispatcher(
    owner_id: usize,
    f: LifecycleDispatcherBox,
) -> std::result::Result<(), &'static str> {
    let mut guard = LIFECYCLE_DISPATCHER
        .lock()
        .expect("LIFECYCLE_DISPATCHER lock poisoned");
    if let Some(existing) = guard.as_ref()
        && existing.owner_id != owner_id
    {
        return Err("lifecycle dispatcher already registered by another engine");
    }
    *guard = Some(OwnedLifecycleDispatcher {
        owner_id,
        callback: Arc::from(f),
    });
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
pub fn dispatch_command(class_name: &str, command_id: u32) {
    let callback = COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned")
        .as_ref()
        .map(|entry| Arc::clone(&entry.callback));
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
pub fn dispatch_lifecycle(class_name: &str, event: &str) {
    let callback = LIFECYCLE_DISPATCHER
        .lock()
        .expect("LIFECYCLE_DISPATCHER lock poisoned")
        .as_ref()
        .map(|entry| Arc::clone(&entry.callback));
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
    {
        let mut guard = COMMAND_DISPATCHER
            .lock()
            .expect("COMMAND_DISPATCHER lock poisoned");
        if guard
            .as_ref()
            .is_some_and(|entry| entry.owner_id == owner_id)
        {
            *guard = None;
        }
    }
    {
        let mut guard = LIFECYCLE_DISPATCHER
            .lock()
            .expect("LIFECYCLE_DISPATCHER lock poisoned");
        if guard
            .as_ref()
            .is_some_and(|entry| entry.owner_id == owner_id)
        {
            *guard = None;
        }
    }
}

/// Clear both dispatchers unconditionally.
///
/// Intended for tests and full process teardown only.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
pub fn clear_dispatchers() {
    {
        let mut guard = COMMAND_DISPATCHER
            .lock()
            .expect("COMMAND_DISPATCHER lock poisoned");
        *guard = None;
    }
    {
        let mut guard = LIFECYCLE_DISPATCHER
            .lock()
            .expect("LIFECYCLE_DISPATCHER lock poisoned");
        *guard = None;
    }
}

/// Check whether a command dispatcher is currently registered.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
#[must_use]
pub fn has_command_dispatcher() -> bool {
    COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned")
        .is_some()
}

/// Check whether a lifecycle dispatcher is currently registered.
///
/// # Panics
///
/// Panics if the internal mutex is poisoned.
#[must_use]
pub fn has_lifecycle_dispatcher() -> bool {
    LIFECYCLE_DISPATCHER
        .lock()
        .expect("LIFECYCLE_DISPATCHER lock poisoned")
        .is_some()
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::Arc;
    use std::sync::atomic::{AtomicU32, Ordering};

    #[test]
    fn dispatch_command_without_handler_does_not_panic() {
        clear_dispatchers();
        dispatch_command("TestVM", 42);
    }

    #[test]
    fn dispatch_lifecycle_without_handler_does_not_panic() {
        clear_dispatchers();
        dispatch_lifecycle("TestVM", "onMounted");
    }

    #[test]
    fn set_and_dispatch_command() {
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
        dispatch_command("LoginViewModel", 927_957_157);
        assert_eq!(counter.load(Ordering::SeqCst), 927_957_157);
        clear_dispatchers();
    }

    #[test]
    fn set_and_dispatch_lifecycle() {
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
        dispatch_lifecycle("LoginViewModel", "onMounted");
        let result = called.lock().unwrap().clone();
        assert_eq!(result, "LoginViewModel:onMounted");
        clear_dispatchers();
    }

    #[test]
    fn clear_dispatchers_removes_both() {
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
        clear_dispatchers();
        assert!(!has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
        set_command_dispatcher(1, Box::new(|_, _| {})).unwrap();
        assert!(has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
        clear_dispatchers();
    }

    #[test]
    fn second_owner_cannot_overwrite_dispatcher() {
        clear_dispatchers();
        set_command_dispatcher(1, Box::new(|_, _| {})).unwrap();
        let result = set_command_dispatcher(2, Box::new(|_, _| {}));
        assert!(result.is_err());
        clear_dispatchers();
    }

    #[test]
    fn clear_dispatchers_for_other_owner_preserves_registration() {
        clear_dispatchers();
        set_lifecycle_dispatcher(1, Box::new(|_, _| {})).unwrap();
        clear_dispatchers_for_owner(2);
        assert!(has_lifecycle_dispatcher());
        clear_dispatchers_for_owner(1);
        assert!(!has_lifecycle_dispatcher());
    }
}
