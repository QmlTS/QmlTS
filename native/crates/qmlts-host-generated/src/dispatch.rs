//! Global dispatcher storage for command and lifecycle routing.
//!
//! Runtime QObjects call `dispatch_command` / `dispatch_lifecycle` when
//! QML invokes `__qmlts.invoke(id)` or `__qmlts.onMounted()`.
//! The host crate sets the actual dispatchers via `set_command_dispatcher`
//! and `set_lifecycle_dispatcher`, which wrap N-API ThreadsafeFunctions.
//!
//! This lives in the generated crate (not the host crate) so runtime
//! QObjects can call it without creating a circular dependency.

use std::sync::Mutex;

type CommandDispatcher = Box<dyn Fn(&str, u32) + Send>;
type LifecycleDispatcher = Box<dyn Fn(&str, &str) + Send>;

static COMMAND_DISPATCHER: Mutex<Option<CommandDispatcher>> = Mutex::new(None);
static LIFECYCLE_DISPATCHER: Mutex<Option<LifecycleDispatcher>> = Mutex::new(None);

/// Register the command dispatcher callback.
///
/// Called by the host crate when `registerInvokeHandler` is invoked from TS.
/// The closure typically wraps an N-API ThreadsafeFunction.
pub fn set_command_dispatcher(f: CommandDispatcher) {
    let mut guard = COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned");
    *guard = Some(f);
}

/// Register the lifecycle dispatcher callback.
///
/// Called by the host crate when `registerLifecycleHandler` is invoked from TS.
pub fn set_lifecycle_dispatcher(f: LifecycleDispatcher) {
    let mut guard = LIFECYCLE_DISPATCHER
        .lock()
        .expect("LIFECYCLE_DISPATCHER lock poisoned");
    *guard = Some(f);
}

/// Dispatch a command from a runtime QObject to the registered handler.
///
/// Called by `LoginRuntime::invoke(i32)`, `CounterRuntime::invoke(i32)`, etc.
/// If no dispatcher is registered, the call is silently ignored (the runtime
/// objects still increment `invoke_count` for observability).
pub fn dispatch_command(class_name: &str, command_id: u32) {
    let guard = COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned");
    if let Some(ref f) = *guard {
        f(class_name, command_id);
    }
}

/// Dispatch a lifecycle event from a runtime QObject to the registered handler.
///
/// `event` is `"onMounted"` or `"onUnmounting"`.
/// If no dispatcher is registered, the call is silently ignored.
pub fn dispatch_lifecycle(class_name: &str, event: &str) {
    let guard = LIFECYCLE_DISPATCHER
        .lock()
        .expect("LIFECYCLE_DISPATCHER lock poisoned");
    if let Some(ref f) = *guard {
        f(class_name, event);
    }
}

/// Clear both dispatchers. Called during engine cleanup.
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
#[must_use]
pub fn has_command_dispatcher() -> bool {
    COMMAND_DISPATCHER
        .lock()
        .expect("COMMAND_DISPATCHER lock poisoned")
        .is_some()
}

/// Check whether a lifecycle dispatcher is currently registered.
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
        set_command_dispatcher(Box::new(move |_class, id| {
            counter_clone.store(id, Ordering::SeqCst);
        }));
        dispatch_command("LoginViewModel", 927_957_157);
        assert_eq!(counter.load(Ordering::SeqCst), 927_957_157);
        clear_dispatchers();
    }

    #[test]
    fn set_and_dispatch_lifecycle() {
        clear_dispatchers();
        let called = Arc::new(Mutex::new(String::new()));
        let called_clone = called.clone();
        set_lifecycle_dispatcher(Box::new(move |class, event| {
            let mut guard = called_clone.lock().unwrap();
            *guard = format!("{class}:{event}");
        }));
        dispatch_lifecycle("LoginViewModel", "onMounted");
        let result = called.lock().unwrap().clone();
        assert_eq!(result, "LoginViewModel:onMounted");
        clear_dispatchers();
    }

    #[test]
    fn clear_dispatchers_removes_both() {
        set_command_dispatcher(Box::new(|_, _| {}));
        set_lifecycle_dispatcher(Box::new(|_, _| {}));
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
        set_command_dispatcher(Box::new(|_, _| {}));
        assert!(has_command_dispatcher());
        assert!(!has_lifecycle_dispatcher());
        clear_dispatchers();
    }
}
