//! V2 runtime state — bundles InstanceRegistry, TypeRegistrar, and V2 handler storage.
//!
//! Provides `V2EngineState` (owned by `QmltsEngine`) and `V2Handlers` (shared
//! between engine and the V2 event router closure).

use std::sync::{Arc, Mutex};

use qmlts_host_generated::v2_dispatch::V2Event;

use crate::instance_registry::InstanceRegistry;
use crate::type_registrar::TypeRegistrar;

/// Handler type for instance-created events.
/// Signature: (class_name, instance_id)
pub type InstanceCreatedHandler = Box<dyn Fn(&str, u32) + Send + Sync>;

/// Handler type for instance-destroying events.
/// Signature: (instance_id)
pub type InstanceDestroyingHandler = Box<dyn Fn(u32) + Send + Sync>;

/// Handler type for property-changed events.
/// Signature: (instance_id, prop_name, value_json)
pub type PropertyChangedHandler = Box<dyn Fn(u32, &str, &str) + Send + Sync>;

/// Handler type for V2 command dispatch.
/// Signature: (instance_id, class_name, command_name, args_json)
pub type CommandDispatcherV2 = Box<dyn Fn(u32, &str, &str, &str) + Send + Sync>;

/// Handler type for V2 lifecycle events.
/// Signature: (instance_id, class_name, event_name)
pub type LifecycleHandlerV2 = Box<dyn Fn(u32, &str, &str) + Send + Sync>;

/// Shared V2 handler storage.
///
/// Each handler slot is `Mutex<Option<...>>` to allow setting once
/// and reading from the router closure concurrently.
pub struct V2Handlers {
    pub instance_created: Mutex<Option<InstanceCreatedHandler>>,
    pub instance_destroying: Mutex<Option<InstanceDestroyingHandler>>,
    pub property_changed: Mutex<Option<PropertyChangedHandler>>,
    pub command_dispatcher: Mutex<Option<CommandDispatcherV2>>,
    pub lifecycle_handler: Mutex<Option<LifecycleHandlerV2>>,
}

impl V2Handlers {
    /// Create new empty handler storage.
    #[must_use]
    pub fn new() -> Self {
        Self {
            instance_created: Mutex::new(None),
            instance_destroying: Mutex::new(None),
            property_changed: Mutex::new(None),
            command_dispatcher: Mutex::new(None),
            lifecycle_handler: Mutex::new(None),
        }
    }
}

impl Default for V2Handlers {
    fn default() -> Self {
        Self::new()
    }
}

/// Per-engine V2 runtime state.
///
/// Owned by `QmltsEngine`. Created on first `register_module` call.
pub struct V2EngineState {
    /// Whether V2 runtime is enabled for this engine.
    pub enabled: bool,
    /// Per-engine instance registry (behind Mutex for router access).
    pub registry: Arc<Mutex<InstanceRegistry>>,
    /// Per-engine type registrar.
    pub type_registrar: TypeRegistrar,
    /// Shared handler storage (Arc for router closure).
    pub handlers: Arc<V2Handlers>,
}

impl V2EngineState {
    /// Create a new V2 engine state.
    #[must_use]
    pub fn new() -> Self {
        Self {
            enabled: true,
            registry: Arc::new(Mutex::new(InstanceRegistry::new())),
            type_registrar: TypeRegistrar::new(),
            handlers: Arc::new(V2Handlers::new()),
        }
    }
}

impl Default for V2EngineState {
    fn default() -> Self {
        Self::new()
    }
}

/// Create a V2 event router closure for the generated crate's dispatch system.
///
/// The closure captures shared references to `InstanceRegistry` and `V2Handlers`.
/// It implements the ready gate: `InstanceCreated`/`InstanceDestroying` bypass
/// the gate, while `Command`/`PropertyChanged`/`Lifecycle` are queued if the
/// instance is not yet ready.
///
/// # Panics
///
/// Panics if the instance registry or handler mutexes are poisoned.
pub fn create_v2_router(
    registry: Arc<Mutex<InstanceRegistry>>,
    handlers: Arc<V2Handlers>,
) -> Arc<dyn Fn(V2Event) + Send + Sync> {
    Arc::new(move |event: V2Event| {
        match &event {
            V2Event::InstanceCreated {
                instance_id,
                class_name,
            } => {
                let handler = handlers
                    .instance_created
                    .lock()
                    .expect("instance_created handler lock poisoned");
                if let Some(h) = handler.as_ref() {
                    h(class_name, *instance_id);
                }
            }
            V2Event::InstanceDestroying {
                instance_id,
                class_name,
            } => {
                let handler = handlers
                    .instance_destroying
                    .lock()
                    .expect("instance_destroying handler lock poisoned");
                if let Some(h) = handler.as_ref() {
                    h(*instance_id);
                }
                // Also remove from registry
                let mut reg = registry.lock().expect("instance registry lock poisoned");
                let _ = reg.remove_instance(*instance_id);
                drop(reg);
                let _ = class_name; // used for diagnostics if needed
            }
            V2Event::Command { instance_id, .. }
            | V2Event::PropertyChanged { instance_id, .. }
            | V2Event::Lifecycle { instance_id, .. } => {
                let instance_id = *instance_id;
                let mut reg = registry.lock().expect("instance registry lock poisoned");

                if !reg.contains(instance_id) {
                    tracing::warn!(instance_id, "V2 event for unknown instance, dropping");
                    return;
                }

                if !reg.is_ready(instance_id) {
                    if let Err(e) = reg.enqueue_event(instance_id, event) {
                        tracing::error!(%e, instance_id, "Failed to queue V2 event");
                    }
                    return;
                }
                drop(reg);

                deliver_event(&handlers, &event);
            }
        }
    })
}

/// Deliver a V2 event to the appropriate handler.
///
/// Public so `engine.rs` can replay queued events after `instance_ready`.
///
/// # Panics
///
/// Panics if the handler mutexes are poisoned.
pub fn deliver_event(handlers: &V2Handlers, event: &V2Event) {
    match event {
        V2Event::Command {
            instance_id,
            class_name,
            command_name,
            args_json,
        } => {
            let handler = handlers
                .command_dispatcher
                .lock()
                .expect("command_dispatcher lock poisoned");
            if let Some(h) = handler.as_ref() {
                h(*instance_id, class_name, command_name, args_json);
            }
        }
        V2Event::PropertyChanged {
            instance_id,
            prop_name,
            value_json,
        } => {
            let handler = handlers
                .property_changed
                .lock()
                .expect("property_changed handler lock poisoned");
            if let Some(h) = handler.as_ref() {
                h(*instance_id, prop_name, value_json);
            }
        }
        V2Event::Lifecycle {
            instance_id,
            class_name,
            event: event_name,
        } => {
            let handler = handlers
                .lifecycle_handler
                .lock()
                .expect("lifecycle handler lock poisoned");
            if let Some(h) = handler.as_ref() {
                h(*instance_id, class_name, event_name);
            }
        }
        V2Event::InstanceCreated { .. } | V2Event::InstanceDestroying { .. } => {
            // These are handled directly in the router, not via deliver_event
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::ptr;
    use std::sync::atomic::{AtomicU32, Ordering};

    #[test]
    fn v2_engine_state_creates_with_defaults() {
        let state = V2EngineState::new();
        assert!(state.enabled);
        assert!(state.registry.lock().unwrap().is_empty());
    }

    #[test]
    fn router_delivers_instance_created_immediately() {
        let registry = Arc::new(Mutex::new(InstanceRegistry::new()));
        let handlers = Arc::new(V2Handlers::new());
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.instance_created.lock().unwrap() =
            Some(Box::new(move |_class, id| {
                called2.store(id, Ordering::SeqCst);
            }));

        let router = create_v2_router(registry, handlers);
        router(V2Event::InstanceCreated {
            instance_id: 42,
            class_name: "Login".into(),
        });
        assert_eq!(called.load(Ordering::SeqCst), 42);
    }

    #[test]
    fn router_queues_command_before_ready() {
        let registry = Arc::new(Mutex::new(InstanceRegistry::new()));
        let id = registry
            .lock()
            .unwrap()
            .allocate_instance("A", ptr::null_mut())
            .unwrap();
        let handlers = Arc::new(V2Handlers::new());
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.command_dispatcher.lock().unwrap() =
            Some(Box::new(move |iid, _, _, _| {
                called2.store(iid, Ordering::SeqCst);
            }));

        let router = create_v2_router(registry.clone(), handlers);
        router(V2Event::Command {
            instance_id: id,
            class_name: "A".into(),
            command_name: "x".into(),
            args_json: "[]".into(),
        });
        // Should be queued, not delivered
        assert_eq!(called.load(Ordering::SeqCst), 0);

        // Mark ready and verify event was queued
        let flushed = registry.lock().unwrap().mark_ready(id).unwrap();
        assert_eq!(flushed.len(), 1);
    }

    #[test]
    fn router_delivers_command_after_ready() {
        let registry = Arc::new(Mutex::new(InstanceRegistry::new()));
        let id = registry
            .lock()
            .unwrap()
            .allocate_instance("A", ptr::null_mut())
            .unwrap();
        registry.lock().unwrap().mark_ready(id).unwrap();

        let handlers = Arc::new(V2Handlers::new());
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.command_dispatcher.lock().unwrap() =
            Some(Box::new(move |iid, _, _, _| {
                called2.store(iid, Ordering::SeqCst);
            }));

        let router = create_v2_router(registry, handlers);
        router(V2Event::Command {
            instance_id: id,
            class_name: "A".into(),
            command_name: "x".into(),
            args_json: "[]".into(),
        });
        assert_eq!(called.load(Ordering::SeqCst), id);
    }

    #[test]
    fn router_delivers_instance_destroying_and_removes() {
        let registry = Arc::new(Mutex::new(InstanceRegistry::new()));
        let id = registry
            .lock()
            .unwrap()
            .allocate_instance("A", ptr::null_mut())
            .unwrap();
        let handlers = Arc::new(V2Handlers::new());
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.instance_destroying.lock().unwrap() =
            Some(Box::new(move |iid| {
                called2.store(iid, Ordering::SeqCst);
            }));

        let router = create_v2_router(registry.clone(), handlers);
        router(V2Event::InstanceDestroying {
            instance_id: id,
            class_name: Some("A".into()),
        });
        assert_eq!(called.load(Ordering::SeqCst), id);
        assert!(!registry.lock().unwrap().contains(id));
    }

    #[test]
    fn deliver_event_routes_property_changed() {
        let handlers = V2Handlers::new();
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.property_changed.lock().unwrap() =
            Some(Box::new(move |iid, _, _| {
                called2.store(iid, Ordering::SeqCst);
            }));

        deliver_event(
            &handlers,
            &V2Event::PropertyChanged {
                instance_id: 99,
                prop_name: "username".into(),
                value_json: "\"test\"".into(),
            },
        );
        assert_eq!(called.load(Ordering::SeqCst), 99);
    }

    #[test]
    fn deliver_event_routes_lifecycle() {
        let handlers = V2Handlers::new();
        let called = Arc::new(AtomicU32::new(0));
        let called2 = called.clone();

        *handlers.lifecycle_handler.lock().unwrap() =
            Some(Box::new(move |iid, _, _| {
                called2.store(iid, Ordering::SeqCst);
            }));

        deliver_event(
            &handlers,
            &V2Event::Lifecycle {
                instance_id: 55,
                class_name: "Login".into(),
                event: "onMounted".into(),
            },
        );
        assert_eq!(called.load(Ordering::SeqCst), 55);
    }
}
