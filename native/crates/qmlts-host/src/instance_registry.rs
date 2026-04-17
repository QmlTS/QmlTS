//! Per-engine instance registry for V2 QObject lifecycle management.
//!
//! Tracks active V2 QObject instances, manages the instanceReady queue,
//! and provides instance lookup by instanceId.

use std::collections::{HashMap, VecDeque};
use std::ffi::c_void;

use qmlts_host_generated::v2_dispatch::V2Event;

use crate::error::{QmltsError, Result};

/// Default maximum queue depth per instance before overflow error.
const DEFAULT_MAX_QUEUE_DEPTH: usize = 1000;
const MAX_QML_INSTANCE_ID: u32 = i32::MAX as u32;

/// Internal entry for a tracked V2 QObject instance.
struct InstanceEntry {
    class_name: String,
    qobject_ptr: *mut c_void,
    ready: bool,
    pending_queue: VecDeque<V2Event>,
}

/// Per-engine registry of V2 QObject instances.
///
/// Manages instance allocation, ready-gate queueing, and lifecycle tracking.
/// Owned by `QmltsEngine` (one per engine, behind `Mutex`).
pub struct InstanceRegistry {
    instances: HashMap<u32, InstanceEntry>,
    next_id: u32,
    max_queue_depth: usize,
}

// SAFETY: InstanceRegistry contains *mut c_void (QObject pointers) which are !Send.
// The registry is always behind a Mutex and QObject pointers are only dereferenced
// on the Qt main thread. The Mutex ensures exclusive access to the HashMap.
unsafe impl Send for InstanceRegistry {}

impl InstanceRegistry {
    /// Create a new empty registry.
    #[must_use]
    pub fn new() -> Self {
        Self {
            instances: HashMap::new(),
            next_id: 0,
            max_queue_depth: DEFAULT_MAX_QUEUE_DEPTH,
        }
    }

    /// Create a registry with a custom max queue depth (for testing).
    #[must_use]
    pub fn with_max_queue_depth(max_depth: usize) -> Self {
        Self {
            instances: HashMap::new(),
            next_id: 0,
            max_queue_depth: max_depth,
        }
    }

    /// Allocate a new instance ID and register the QObject.
    /// Returns the assigned `instance_id` (u32).
    ///
    /// # Errors
    ///
    /// Returns error if `next_id` can no longer be represented by the QML
    /// `instanceId` property type (`i32`).
    pub fn allocate_instance(&mut self, class_name: &str, qobject_ptr: *mut c_void) -> Result<u32> {
        if self.next_id > MAX_QML_INSTANCE_ID {
            return Err(QmltsError::Internal(
                "V2 instance ID overflow: i32::MAX reached within engine lifetime".to_string(),
            ));
        }
        let id = self.next_id;
        self.next_id = self.next_id.saturating_add(1);

        self.instances.insert(
            id,
            InstanceEntry {
                class_name: class_name.to_string(),
                qobject_ptr,
                ready: false,
                pending_queue: VecDeque::new(),
            },
        );

        Ok(id)
    }

    /// Mark an instance as ready, returning any queued events in FIFO order.
    ///
    /// # Errors
    ///
    /// Returns `V2InstanceNotFound` if `instanceId` is unknown.
    /// Idempotent: marking an already-ready instance returns empty vec.
    pub fn mark_ready(&mut self, instance_id: u32) -> Result<Vec<V2Event>> {
        let entry = self
            .instances
            .get_mut(&instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;

        if entry.ready {
            return Ok(Vec::new());
        }

        entry.ready = true;
        let queued: Vec<V2Event> = entry.pending_queue.drain(..).collect();
        Ok(queued)
    }

    /// Remove an instance from the registry.
    /// Returns the class_name and any dropped pending events (for diagnostics).
    pub fn remove_instance(&mut self, instance_id: u32) -> Option<(String, Vec<V2Event>)> {
        self.instances.remove(&instance_id).map(|entry| {
            let dropped: Vec<V2Event> = entry.pending_queue.into();
            if !dropped.is_empty() {
                tracing::warn!(
                    instance_id,
                    dropped_count = dropped.len(),
                    "V2 instance destroyed before ready; dropping queued events"
                );
            }
            (entry.class_name, dropped)
        })
    }

    /// Check whether an instance is ready.
    #[must_use]
    pub fn is_ready(&self, instance_id: u32) -> bool {
        self.instances.get(&instance_id).is_some_and(|e| e.ready)
    }

    /// Get the class name of an instance.
    #[must_use]
    pub fn get_class_name(&self, instance_id: u32) -> Option<&str> {
        self.instances
            .get(&instance_id)
            .map(|e| e.class_name.as_str())
    }

    /// Get the QObject pointer for an instance.
    #[must_use]
    pub fn get_qobject_ptr(&self, instance_id: u32) -> Option<*mut c_void> {
        self.instances.get(&instance_id).map(|e| e.qobject_ptr)
    }

    /// Enqueue an event for a not-yet-ready instance.
    ///
    /// # Errors
    ///
    /// - `V2InstanceNotFound` if `instanceId` is unknown.
    /// - `V2QueueOverflow` if the queue exceeds `max_queue_depth`.
    pub fn enqueue_event(&mut self, instance_id: u32, event: V2Event) -> Result<()> {
        let entry = self
            .instances
            .get_mut(&instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;

        if entry.pending_queue.len() >= self.max_queue_depth {
            return Err(QmltsError::V2QueueOverflow {
                instance_id,
                max_depth: self.max_queue_depth,
            });
        }

        entry.pending_queue.push_back(event);
        Ok(())
    }

    /// Check whether any instances are registered.
    #[must_use]
    pub fn is_empty(&self) -> bool {
        self.instances.is_empty()
    }

    /// Return the number of active instances.
    #[must_use]
    pub fn len(&self) -> usize {
        self.instances.len()
    }

    /// Check if an instance exists.
    #[must_use]
    pub fn contains(&self, instance_id: u32) -> bool {
        self.instances.contains_key(&instance_id)
    }

    /// Iterate over all instances: `(instance_id, class_name, qobject_ptr, ready)`.
    pub fn iter_instances(&self) -> Vec<(u32, String, *mut c_void, bool)> {
        self.instances
            .iter()
            .map(|(&id, entry)| (id, entry.class_name.clone(), entry.qobject_ptr, entry.ready))
            .collect()
    }
}

impl Default for InstanceRegistry {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::ptr;

    #[test]
    fn allocate_assigns_sequential_ids() {
        let mut reg = InstanceRegistry::new();
        let id0 = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        let id1 = reg.allocate_instance("B", ptr::null_mut()).unwrap();
        assert_eq!(id0, 0);
        assert_eq!(id1, 1);
    }

    #[test]
    fn mark_ready_returns_queued_events() {
        let mut reg = InstanceRegistry::new();
        let id = reg.allocate_instance("Login", ptr::null_mut()).unwrap();
        assert!(!reg.is_ready(id));

        reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "Login".into(),
                command_name: "login".into(),
                args_json: "[]".into(),
            },
        )
        .unwrap();
        reg.enqueue_event(
            id,
            V2Event::Lifecycle {
                instance_id: id,
                class_name: "Login".into(),
                event: "onMounted".into(),
            },
        )
        .unwrap();

        let flushed = reg.mark_ready(id).unwrap();
        assert_eq!(flushed.len(), 2);
        assert!(reg.is_ready(id));

        // Verify FIFO order
        assert!(matches!(flushed[0], V2Event::Command { .. }));
        assert!(matches!(flushed[1], V2Event::Lifecycle { .. }));
    }

    #[test]
    fn mark_ready_idempotent() {
        let mut reg = InstanceRegistry::new();
        let id = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "A".into(),
                command_name: "x".into(),
                args_json: "[]".into(),
            },
        )
        .unwrap();
        let first = reg.mark_ready(id).unwrap();
        assert_eq!(first.len(), 1);
        let second = reg.mark_ready(id).unwrap();
        assert!(second.is_empty());
    }

    #[test]
    fn mark_ready_unknown_instance() {
        let mut reg = InstanceRegistry::new();
        let result = reg.mark_ready(999);
        assert!(result.is_err());
    }

    #[test]
    fn remove_instance_returns_dropped_events() {
        let mut reg = InstanceRegistry::new();
        let id = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "A".into(),
                command_name: "x".into(),
                args_json: "[]".into(),
            },
        )
        .unwrap();
        let (name, dropped) = reg.remove_instance(id).unwrap();
        assert_eq!(name, "A");
        assert_eq!(dropped.len(), 1);
        assert!(!reg.contains(id));
    }

    #[test]
    fn remove_unknown_instance_returns_none() {
        let mut reg = InstanceRegistry::new();
        assert!(reg.remove_instance(999).is_none());
    }

    #[test]
    fn queue_overflow() {
        let mut reg = InstanceRegistry::with_max_queue_depth(2);
        let id = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "A".into(),
                command_name: "a".into(),
                args_json: "[]".into(),
            },
        )
        .unwrap();
        reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "A".into(),
                command_name: "b".into(),
                args_json: "[]".into(),
            },
        )
        .unwrap();
        // Third should overflow
        let result = reg.enqueue_event(
            id,
            V2Event::Command {
                instance_id: id,
                class_name: "A".into(),
                command_name: "c".into(),
                args_json: "[]".into(),
            },
        );
        assert!(matches!(result, Err(QmltsError::V2QueueOverflow { .. })));

        // After mark_ready drains, queue is empty again
        let flushed = reg.mark_ready(id).unwrap();
        assert_eq!(flushed.len(), 2);
    }

    #[test]
    fn get_class_name_and_ptr() {
        let mut reg = InstanceRegistry::new();
        let fake_ptr = 0x1234 as *mut c_void;
        let id = reg.allocate_instance("Login", fake_ptr).unwrap();
        assert_eq!(reg.get_class_name(id), Some("Login"));
        assert_eq!(reg.get_qobject_ptr(id), Some(fake_ptr));
    }

    #[test]
    fn stale_instance_operations_fail() {
        let mut reg = InstanceRegistry::new();
        let id = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        reg.remove_instance(id);
        assert!(!reg.contains(id));
        assert!(reg.mark_ready(id).is_err());
        assert!(
            reg.enqueue_event(
                id,
                V2Event::Command {
                    instance_id: id,
                    class_name: "A".into(),
                    command_name: "x".into(),
                    args_json: "[]".into(),
                },
            )
            .is_err()
        );
    }

    #[test]
    fn allocation_rejects_ids_that_do_not_fit_qml_i32() {
        let mut reg = InstanceRegistry::new();
        reg.next_id = i32::MAX as u32;
        let max_id = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        assert_eq!(max_id, i32::MAX as u32);

        let result = reg.allocate_instance("B", ptr::null_mut());
        assert!(result.is_err());
        assert!(!reg.contains((i32::MAX as u32) + 1));
    }

    #[test]
    fn iter_instances_returns_all_entries() {
        let mut reg = InstanceRegistry::new();
        let id0 = reg.allocate_instance("A", ptr::null_mut()).unwrap();
        let id1 = reg
            .allocate_instance("B", 0x1234 as *mut c_void)
            .unwrap();
        reg.mark_ready(id1).unwrap();

        let entries = reg.iter_instances();
        assert_eq!(entries.len(), 2);

        let a = entries.iter().find(|(id, ..)| *id == id0).unwrap();
        assert_eq!(a.1, "A");
        assert!(!a.3); // not ready

        let b = entries.iter().find(|(id, ..)| *id == id1).unwrap();
        assert_eq!(b.1, "B");
        assert!(b.3); // ready
    }
}
