//! V2 type registration orchestrator.
//!
//! Handles process-global idempotent `qmlRegisterType` registration
//! and per-engine module tracking.

use std::collections::HashMap;
use std::sync::{LazyLock, Mutex};

use qmlts_host_generated::V2BridgeDescriptor;

use crate::error::{QmltsError, Result};

/// Type alias for the process-global registration key.
type RegistrationKey = (String, i32, i32, String);

/// Process-global record of successful type registrations.
/// Key: (module_uri, major, minor, qml_name)
/// Value: class_name from the descriptor
static GLOBAL_REGISTRATIONS: LazyLock<Mutex<HashMap<RegistrationKey, String>>> =
    LazyLock::new(|| Mutex::new(HashMap::new()));

/// Per-engine type registrar state.
pub struct TypeRegistrar {
    /// Which modules this engine has requested registration for.
    registered_modules: Vec<ModuleRegistration>,
    /// Whether QML loading has started for this engine.
    qml_load_started: bool,
}

/// Record of a module registration request.
#[derive(Debug, Clone)]
pub struct ModuleRegistration {
    pub module_uri: String,
    pub version_major: i32,
    pub version_minor: i32,
    pub type_names: Vec<String>,
}

impl TypeRegistrar {
    /// Create a new per-engine type registrar.
    #[must_use]
    pub fn new() -> Self {
        Self {
            registered_modules: Vec::new(),
            qml_load_started: false,
        }
    }

    /// Mark that QML loading has started for this engine.
    /// After this, `registerModule` calls will fail.
    pub fn mark_qml_load_started(&mut self) {
        self.qml_load_started = true;
    }

    /// Whether QML loading has started.
    #[must_use]
    pub fn is_qml_load_started(&self) -> bool {
        self.qml_load_started
    }

    /// Register a module's types. Must be called before QML loading.
    ///
    /// Looks up each `type_name` in the V2 descriptor table.
    /// Calls `descriptor.register_type(uri, major, minor, qml_name)` for each.
    /// Idempotent: re-registering exact same (uri, version, qml_name) is a no-op.
    ///
    /// # Errors
    ///
    /// - Returns error if QML loading has already started.
    /// - Returns error if a `type_name` is not found in V2 descriptors.
    /// - Returns error if a (`qml_name`, uri, version) is already registered
    ///   for a *different* class_name (conflict).
    ///
    /// # Panics
    ///
    /// Panics if the global registrations mutex is poisoned.
    pub fn register_module(
        &mut self,
        module_uri: &str,
        version_major: i32,
        version_minor: i32,
        type_names: &[String],
        descriptors: &[V2BridgeDescriptor],
    ) -> Result<()> {
        if self.qml_load_started {
            return Err(QmltsError::V2ModuleRegistrationFailed(
                "Cannot register module after QML loading has started".to_string(),
            ));
        }

        for type_name in type_names {
            let descriptor = descriptors
                .iter()
                .find(|d| d.class_name == type_name)
                .ok_or_else(|| {
                    QmltsError::V2TypeRegistrationFailed {
                        type_name: type_name.clone(),
                        reason: format!(
                            "Unknown V2 type. Available types: {}",
                            descriptors
                                .iter()
                                .map(|d| d.class_name)
                                .collect::<Vec<_>>()
                                .join(", ")
                        ),
                    }
                })?;

            let qml_name = type_name.as_str();

            let key = (
                module_uri.to_string(),
                version_major,
                version_minor,
                qml_name.to_string(),
            );

            let mut global = GLOBAL_REGISTRATIONS
                .lock()
                .expect("GLOBAL_REGISTRATIONS lock poisoned");

            if let Some(existing_class) = global.get(&key) {
                if existing_class == descriptor.class_name {
                    // Idempotent: same type already registered
                    continue;
                }
                return Err(QmltsError::V2TypeRegistrationFailed {
                    type_name: type_name.clone(),
                    reason: format!(
                        "Conflict: QML type '{qml_name}' in module '{module_uri}' \
                         v{version_major}.{version_minor} is already registered for class \
                         '{existing_class}', cannot re-register for '{}'",
                        descriptor.class_name
                    ),
                });
            }

            (descriptor.register_type)(module_uri, version_major, version_minor, qml_name)
                .map_err(|e| QmltsError::V2TypeRegistrationFailed {
                    type_name: type_name.clone(),
                    reason: format!("Failed to register in '{module_uri}': {e}"),
                })?;

            global.insert(key, descriptor.class_name.to_string());
        }

        self.registered_modules.push(ModuleRegistration {
            module_uri: module_uri.to_string(),
            version_major,
            version_minor,
            type_names: type_names.to_vec(),
        });

        Ok(())
    }

    /// Get all registered modules for this engine.
    #[must_use]
    pub fn registered_modules(&self) -> &[ModuleRegistration] {
        &self.registered_modules
    }
}

impl Default for TypeRegistrar {
    fn default() -> Self {
        Self::new()
    }
}

/// Clear all process-global registrations. For tests only.
///
/// # Panics
///
/// Panics if the global registrations mutex is poisoned.
pub fn clear_global_registrations() {
    GLOBAL_REGISTRATIONS
        .lock()
        .expect("GLOBAL_REGISTRATIONS lock poisoned")
        .clear();
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::atomic::{AtomicI32, Ordering};

    static TEST_MUTEX: LazyLock<Mutex<()>> = LazyLock::new(|| Mutex::new(()));

    fn make_test_descriptors() -> Vec<V2BridgeDescriptor> {
        vec![
            V2BridgeDescriptor {
                class_name: "LoginViewModel",
                schema_json: "{}",
                register_type: |_uri, _maj, _min, _name| Ok(1),
                connect_properties: |_, _, _| true,
            },
            V2BridgeDescriptor {
                class_name: "CounterViewModel",
                schema_json: "{}",
                register_type: |_uri, _maj, _min, _name| Ok(2),
                connect_properties: |_, _, _| true,
            },
        ]
    }

    #[test]
    fn register_module_success() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_global_registrations();
        let mut registrar = TypeRegistrar::new();
        let descriptors = make_test_descriptors();
        registrar
            .register_module(
                "QmlTS.App",
                1,
                0,
                &["LoginViewModel".to_string()],
                &descriptors,
            )
            .unwrap();
        assert_eq!(registrar.registered_modules().len(), 1);
    }

    /// Static counter for idempotent test (fn pointer can't capture).
    static IDEMPOTENT_CALL_COUNT: AtomicI32 = AtomicI32::new(0);

    fn idempotent_register(_uri: &str, _maj: i32, _min: i32, _name: &str) -> std::result::Result<i32, String> {
        IDEMPOTENT_CALL_COUNT.fetch_add(1, Ordering::SeqCst);
        Ok(1)
    }

    #[test]
    fn register_module_idempotent() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_global_registrations();
        IDEMPOTENT_CALL_COUNT.store(0, Ordering::SeqCst);

        let descriptors = vec![V2BridgeDescriptor {
            class_name: "LoginViewModel",
            schema_json: "{}",
            register_type: idempotent_register,
            connect_properties: |_, _, _| true,
        }];
        let mut registrar = TypeRegistrar::new();
        registrar
            .register_module("QmlTS.App", 1, 0, &["LoginViewModel".into()], &descriptors)
            .unwrap();
        registrar
            .register_module("QmlTS.App", 1, 0, &["LoginViewModel".into()], &descriptors)
            .unwrap();
        assert_eq!(IDEMPOTENT_CALL_COUNT.load(Ordering::SeqCst), 1);
    }

    #[test]
    fn register_module_unknown_type() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_global_registrations();
        let mut registrar = TypeRegistrar::new();
        let descriptors = make_test_descriptors();
        let result = registrar.register_module(
            "QmlTS.App",
            1,
            0,
            &["NonExistent".to_string()],
            &descriptors,
        );
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("Unknown V2 type"));
    }

    #[test]
    fn register_module_after_qml_load_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_global_registrations();
        let mut registrar = TypeRegistrar::new();
        let descriptors = make_test_descriptors();
        registrar.mark_qml_load_started();
        let result = registrar.register_module(
            "QmlTS.App",
            1,
            0,
            &["LoginViewModel".to_string()],
            &descriptors,
        );
        assert!(result.is_err());
        assert!(result
            .unwrap_err()
            .to_string()
            .contains("after QML loading"));
    }

    #[test]
    fn register_module_conflict() {
        let _guard = TEST_MUTEX.lock().unwrap();
        clear_global_registrations();
        let descriptors_a = vec![V2BridgeDescriptor {
            class_name: "A",
            schema_json: "{}",
            register_type: |_, _, _, _| Ok(1),
            connect_properties: |_, _, _| true,
        }];
        let descriptors_b = vec![V2BridgeDescriptor {
            class_name: "B",
            schema_json: "{}",
            register_type: |_, _, _, _| Ok(2),
            connect_properties: |_, _, _| true,
        }];
        let mut reg1 = TypeRegistrar::new();
        reg1.register_module("QmlTS.App", 1, 0, &["A".into()], &descriptors_a)
            .unwrap();

        // Manually insert to simulate conflict: same key for different class
        let mut reg2 = TypeRegistrar::new();
        GLOBAL_REGISTRATIONS.lock().unwrap().insert(
            ("QmlTS.App".into(), 1, 0, "B".into()),
            "SomeOtherClass".into(),
        );
        let result = reg2.register_module("QmlTS.App", 1, 0, &["B".into()], &descriptors_b);
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("Conflict"));
    }
}
