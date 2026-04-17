//! QmlTS Engine - Core Qt engine wrapper
//!
//! This module provides `QmltsEngine`, which encapsulates:
//! - `QGuiApplication` lifetime management
//! - `QQmlEngine` for loading and running QML
//! - `QQmlComponent` for QML document instantiation
//!
//! The engine uses cxx-qt for safe Qt interop.

use crate::bridge_registry::BridgeRegistry;
use crate::error::{QmltsError, Result};
use crate::list_model;
use crate::property_sync;
use crate::qt_context;
use crate::v2_runtime;
use qmlts_host_generated::{BridgeInstance, ViewModelSchema};
use std::path::Path;
#[cfg(not(feature = "mock-qt"))]
use std::ptr;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};

/// Global flag to track if QGuiApplication has been initialized.
/// Qt requires exactly one QGuiApplication per process.
static APP_INITIALIZED: AtomicBool = AtomicBool::new(false);
static NEXT_DISPATCH_OWNER_ID: AtomicUsize = AtomicUsize::new(1);

/// QmlTS Engine version (matches package version).
#[allow(dead_code)]
pub const VERSION: &str = env!("CARGO_PKG_VERSION");

/// Qt version this crate is built against.
/// This is determined at compile time via cxx-qt-build.
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn qt_version() -> String {
    // cxx-qt-lib provides qVersion() which returns the runtime Qt version
    // For now, we return the target version
    // TODO: Use cxx_qt_lib::core::qs::version() when available
    "6.11.0".to_string()
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn qt_version() -> String {
    "6.11.0-mock".to_string()
}

/// Configuration options for engine creation.
#[derive(Debug, Clone, Default)]
pub struct EngineConfig {
    /// Qt plugin search paths.
    pub plugin_paths: Vec<String>,
    /// QML import search paths.
    pub import_paths: Vec<String>,
    /// Enable Qt logging (QtDebugMsg, etc.) forwarding.
    pub enable_logging: bool,
}

/// QmlTS Engine instance.
///
/// Wraps Qt's QGuiApplication and QQmlEngine for safe Rust usage.
/// When dropped, resources are cleaned up automatically (RAII).
///
/// # Thread Safety
///
/// Qt GUI operations must occur on the main thread. The engine enforces
/// this via `Send` and `Sync` trait bounds (or lack thereof).
///
/// # Example
///
/// ```ignore
/// let engine = QmltsEngine::new(None)?;
/// engine.load_string(r#"import QtQuick; Item { }"#, None)?;
/// engine.process_events();
/// ```
pub struct QmltsEngine {
    /// Engine configuration.
    config: EngineConfig,
    /// Whether the engine has been properly initialized.
    initialized: bool,
    /// Whether the engine has been explicitly destroyed.
    destroyed: bool,
    /// Cached QML components (by URL or inline source hash).
    #[allow(dead_code)]
    loaded_components: Vec<String>,
    /// Registry of generated bridge types.
    registry: BridgeRegistry,
    /// Currently active bridge instance (one ViewModel at a time).
    active_bridge: Option<BridgeInstance>,
    /// Parsed schema of the currently active ViewModel.
    active_schema: Option<ViewModelSchema>,
    /// Whether QML has been loaded (prevents further registrations).
    qml_loaded: bool,
    /// Opaque pointer to the backing `QQmlApplicationEngine`.
    #[allow(dead_code)]
    engine_ptr: *mut std::ffi::c_void,
    /// Owner token for process-global Step 4 dispatchers.
    dispatch_owner_id: usize,
    /// Active list models managed by this engine.
    list_models: Vec<Option<list_model::ListModelHandle>>,
    /// V2 runtime state. None until `register_module()` is first called.
    v2_state: Option<v2_runtime::V2EngineState>,
}

impl QmltsEngine {
    /// Create a new QmlTS engine instance.
    ///
    /// This initializes Qt's QGuiApplication (if not already initialized)
    /// and creates a new QQmlEngine.
    ///
    /// # Arguments
    ///
    /// * `config` - Optional engine configuration. If `None`, defaults are used.
    ///
    /// # Errors
    ///
    /// Returns `QmltsError::QtInitFailed` if Qt initialization fails.
    pub fn new(config: Option<EngineConfig>) -> Result<Self> {
        let config = config.unwrap_or_default();

        // Initialize QGuiApplication if this is the first engine
        Self::ensure_qt_initialized(&config)?;

        let engine_ptr = qt_context::create_engine();
        #[cfg(not(feature = "mock-qt"))]
        if engine_ptr.is_null() {
            return Err(QmltsError::QtInitFailed(
                "Failed to create QQmlApplicationEngine".to_string(),
            ));
        }

        Ok(Self {
            config,
            initialized: true,
            destroyed: false,
            loaded_components: Vec::new(),
            registry: BridgeRegistry::from_descriptors(qmlts_host_generated::descriptors()),
            active_bridge: None,
            active_schema: None,
            qml_loaded: false,
            engine_ptr,
            dispatch_owner_id: NEXT_DISPATCH_OWNER_ID.fetch_add(1, Ordering::Relaxed),
            list_models: Vec::new(),
            v2_state: None,
        })
    }

    /// Mark the engine as destroyed.
    ///
    /// Called by `destroyEngine()` to explicitly release resources.
    /// Further operations on this engine will fail.
    pub fn mark_destroyed(&mut self) {
        self.cleanup_qt_resources();
        self.destroyed = true;
        self.initialized = false;
        tracing::debug!("Engine marked as destroyed");
    }

    /// Ensure the engine is still valid for use.
    fn ensure_alive(&self) -> Result<()> {
        if self.destroyed {
            return Err(QmltsError::EngineDestroyed);
        }
        if !self.initialized {
            return Err(QmltsError::EngineNotInitialized);
        }
        Ok(())
    }

    /// Ensure Qt is initialized (exactly once per process).
    #[cfg(not(feature = "mock-qt"))]
    fn ensure_qt_initialized(config: &EngineConfig) -> Result<()> {
        if APP_INITIALIZED.swap(true, Ordering::SeqCst) {
            // Already initialized, just apply config to new engine
            tracing::debug!("Qt already initialized, creating additional QQmlEngine");
            return Ok(());
        }

        tracing::info!("Initializing Qt application");

        // In cxx-qt, we need to use the bridge to initialize Qt.
        // For the bootstrap step, we use a minimal initialization approach.
        // The actual Qt initialization will be done via the cxx-qt bridge.

        if config.enable_logging {
            tracing::debug!("Qt logging enabled");
        }

        Ok(())
    }

    #[cfg(feature = "mock-qt")]
    fn ensure_qt_initialized(_config: &EngineConfig) -> Result<()> {
        if APP_INITIALIZED.swap(true, Ordering::SeqCst) {
            tracing::debug!("Mock Qt already initialized");
            return Ok(());
        }
        tracing::info!("Initializing mock Qt application");
        Ok(())
    }

    /// Check if the engine is properly initialized.
    #[must_use]
    pub fn is_initialized(&self) -> bool {
        self.initialized
    }

    /// Register a ViewModel bridge type by class name.
    ///
    /// Creates the bridge QObject pair and sets it as the active bridge.
    /// Must be called before loading QML.
    ///
    /// # Errors
    ///
    /// Returns `BridgeAlreadyLoaded` if QML has already been loaded.
    /// Returns `BridgeTypeNotFound` if the class name is not in the registry.
    pub fn register_view_model(&mut self, class_name: &str) -> Result<()> {
        self.ensure_alive()?;

        if self.qml_loaded {
            return Err(QmltsError::BridgeAlreadyLoaded);
        }

        let instance = self
            .registry
            .create_instance(class_name)
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.to_string()))?;

        // Parse and store schema
        let schema_json = self.registry.get_schema_json(class_name).ok_or_else(|| {
            QmltsError::SchemaValidation(format!("No schema found for '{class_name}'"))
        })?;
        let schema: ViewModelSchema = serde_json::from_str(schema_json).map_err(|e| {
            QmltsError::SchemaValidation(format!("Failed to parse schema for '{class_name}': {e}"))
        })?;

        let dispatch_owner_id = i32::try_from(self.dispatch_owner_id).map_err(|_| {
            QmltsError::Internal("dispatch owner id exceeded i32 range".to_string())
        })?;

        #[cfg(not(feature = "mock-qt"))]
        {
            if self.engine_ptr.is_null() {
                return Err(QmltsError::QtInitFailed(
                    "QQmlApplicationEngine was not created".to_string(),
                ));
            }

            let owner_set = qt_context::set_int_property(
                instance.runtime_qobject_ptr(),
                "dispatchOwnerId",
                dispatch_owner_id,
            );
            let vm_set = unsafe {
                qt_context::set_context_property(self.engine_ptr, "vm", instance.vm_qobject_ptr())
            };
            let runtime_set = unsafe {
                qt_context::set_context_property(
                    self.engine_ptr,
                    "__qmlts",
                    instance.runtime_qobject_ptr(),
                )
            };
            if !owner_set || !vm_set || !runtime_set {
                return Err(QmltsError::Internal(
                    "Failed to publish bridge objects into the QML context".to_string(),
                ));
            }
        }

        #[cfg(feature = "mock-qt")]
        {
            let _ = dispatch_owner_id;
        }

        tracing::debug!("Registered bridge for '{class_name}'");
        self.active_bridge = Some(instance);
        self.active_schema = Some(schema);
        Ok(())
    }

    /// Check whether a bridge type is available in the registry.
    #[must_use]
    pub fn has_bridge_type(&self, class_name: &str) -> bool {
        self.registry.has_type(class_name)
    }

    /// Return all registered bridge type names (sorted).
    #[must_use]
    pub fn get_registered_types(&self) -> Vec<&'static str> {
        self.registry.registered_types()
    }

    /// Get a reference to the active bridge instance, if any.
    #[must_use]
    pub fn active_bridge(&self) -> Option<&BridgeInstance> {
        self.active_bridge.as_ref()
    }

    /// Get a reference to the active schema, if any.
    #[must_use]
    pub fn active_schema(&self) -> Option<&ViewModelSchema> {
        self.active_schema.as_ref()
    }

    // ─────────────────────────────────────────────────────────────────────
    //  Property synchronization (Step 3)
    // ─────────────────────────────────────────────────────────────────────

    /// Synchronize a single TypeScript property value into the active ViewModel.
    ///
    /// # Errors
    ///
    /// - `EngineNotInitialized` / `EngineDestroyed` if the engine is invalid.
    /// - `BridgeTypeNotFound` if `class_name` doesn't match the active bridge.
    /// - `PropertyNotFound` if the property is not in the schema.
    /// - `TypeMismatch` if the JSON value doesn't match the property's qmlType.
    pub fn sync_state(
        &self,
        class_name: &str,
        property_name: &str,
        json_value: &str,
    ) -> Result<()> {
        self.ensure_alive()?;

        let (bridge, schema) = self.require_active_bridge(class_name)?;
        let vm_ptr = bridge.vm_qobject_ptr();
        property_sync::sync_one(vm_ptr, schema, property_name, json_value)
    }

    /// Synchronize a batch of property values into the active ViewModel.
    ///
    /// Uses best-effort semantics: all properties are attempted, failures collected.
    ///
    /// # Errors
    ///
    /// - `BatchSyncPartialFailure` if one or more properties fail.
    pub fn sync_state_batch(&self, class_name: &str, json_state_map: &str) -> Result<()> {
        self.ensure_alive()?;

        let (bridge, schema) = self.require_active_bridge(class_name)?;
        let vm_ptr = bridge.vm_qobject_ptr();
        property_sync::sync_batch(vm_ptr, schema, json_state_map)
    }

    /// Read a property value from the active ViewModel as a JSON string.
    ///
    /// # Errors
    ///
    /// - `PropertyNotFound` if the property is not in the schema.
    pub fn get_property(&self, class_name: &str, property_name: &str) -> Result<String> {
        self.ensure_alive()?;

        let (bridge, schema) = self.require_active_bridge(class_name)?;
        let vm_ptr = bridge.vm_qobject_ptr();
        let value = property_sync::read_one(vm_ptr, schema, property_name)?;
        serde_json::to_string(&value)
            .map_err(|e| QmltsError::Internal(format!("JSON serialization failed: {e}")))
    }

    /// Get a pointer to the first QML root object (for integration testing).
    #[must_use]
    pub fn root_object_ptr(&self) -> *mut std::ffi::c_void {
        qt_context::root_object(self.engine_ptr)
    }

    /// Validate that `class_name` matches the active bridge, then return refs.
    fn require_active_bridge(
        &self,
        class_name: &str,
    ) -> Result<(&BridgeInstance, &ViewModelSchema)> {
        let bridge = self
            .active_bridge
            .as_ref()
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.to_string()))?;

        let schema = self
            .active_schema
            .as_ref()
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.to_string()))?;

        if schema.class_name != class_name {
            return Err(QmltsError::BridgeTypeNotFound(format!(
                "Active bridge is '{}', not '{class_name}'",
                schema.class_name
            )));
        }

        Ok((bridge, schema))
    }

    // ─────────────────────────────────────────────────────────────────────
    //  Command dispatch & lifecycle routing (Step 4)
    // ─────────────────────────────────────────────────────────────────────

    /// Register a command invoke handler.
    ///
    /// The handler is called when QML calls `__qmlts.invoke(commandId)`.
    /// The handler receives `(className: &str, commandId: u32)`.
    ///
    /// # Errors
    ///
    /// Returns an error if the engine is destroyed.
    #[allow(clippy::type_complexity)]
    pub fn register_invoke_handler(
        &self,
        handler: Box<dyn Fn(&str, u32) + Send + Sync>,
    ) -> Result<()> {
        self.ensure_alive()?;
        qmlts_host_generated::dispatch::set_command_dispatcher(self.dispatch_owner_id, handler)
            .map_err(|e| QmltsError::Internal(e.to_string()))?;
        tracing::debug!("Registered invoke handler");
        Ok(())
    }

    /// Register a lifecycle event handler.
    ///
    /// The handler is called when QML calls `__qmlts.onMounted()` or
    /// `__qmlts.onUnmounting()`.
    /// The handler receives `(className: &str, event: &str)` where
    /// event is `"onMounted"` or `"onUnmounting"`.
    ///
    /// # Errors
    ///
    /// Returns an error if the engine is destroyed.
    #[allow(clippy::type_complexity)]
    pub fn register_lifecycle_handler(
        &self,
        handler: Box<dyn Fn(&str, &str) + Send + Sync>,
    ) -> Result<()> {
        self.ensure_alive()?;
        qmlts_host_generated::dispatch::set_lifecycle_dispatcher(self.dispatch_owner_id, handler)
            .map_err(|e| QmltsError::Internal(e.to_string()))?;
        tracing::debug!("Registered lifecycle handler");
        Ok(())
    }

    /// Emit an effect signal on the active runtime QObject by effect name.
    ///
    /// Looks up the effect in the active schema to find its `qml_name`,
    /// then emits the corresponding Qt signal on the runtime QObject.
    ///
    /// # Errors
    ///
    /// - `EffectNotFound` if the effect name is not in the schema.
    /// - `BridgeTypeNotFound` if no bridge is active or class name doesn't match.
    pub fn emit_effect(
        &self,
        class_name: &str,
        effect_name: &str,
        payload_json: Option<&str>,
    ) -> Result<()> {
        self.ensure_alive()?;

        let (bridge, schema) = self.require_active_bridge(class_name)?;

        let effect = schema
            .effects
            .iter()
            .find(|e| e.name == effect_name)
            .ok_or_else(|| QmltsError::EffectNotFound {
                vm: class_name.to_string(),
                effect: effect_name.to_string(),
            })?;

        let runtime_ptr = bridge.runtime_qobject_ptr();
        let param_types = if effect.parameters.is_empty() {
            None
        } else {
            Some(serde_json::to_string(&effect.parameters).unwrap_or_default())
        };
        let ok = qt_context::emit_signal(
            runtime_ptr,
            &effect.qml_name,
            payload_json,
            param_types.as_deref(),
        );
        if ok {
            tracing::debug!("Emitted effect '{}' on '{}'", effect_name, class_name);
            Ok(())
        } else {
            Err(QmltsError::Internal(format!(
                "Failed to emit signal '{}' on '{class_name}'",
                effect.qml_name
            )))
        }
    }

    /// Emit an effect signal on the active runtime QObject by effect ID.
    ///
    /// Looks up the effect in the active schema by `effect_id`,
    /// then emits the corresponding Qt signal on the runtime QObject.
    ///
    /// # Errors
    ///
    /// - `EffectNotFound` if no effect with the given ID exists.
    /// - `BridgeTypeNotFound` if no bridge is active or class name doesn't match.
    pub fn emit_effect_by_id(
        &self,
        class_name: &str,
        effect_id: u32,
        payload_json: Option<&str>,
    ) -> Result<()> {
        self.ensure_alive()?;

        let (bridge, schema) = self.require_active_bridge(class_name)?;

        let effect = schema
            .effects
            .iter()
            .find(|e| e.effect_id == effect_id)
            .ok_or_else(|| QmltsError::EffectNotFound {
                vm: class_name.to_string(),
                effect: format!("effectId={effect_id}"),
            })?;

        let runtime_ptr = bridge.runtime_qobject_ptr();
        let param_types = if effect.parameters.is_empty() {
            None
        } else {
            Some(serde_json::to_string(&effect.parameters).unwrap_or_default())
        };
        let ok = qt_context::emit_signal(
            runtime_ptr,
            &effect.qml_name,
            payload_json,
            param_types.as_deref(),
        );
        if ok {
            tracing::debug!(
                "Emitted effect id={} ('{}') on '{}'",
                effect_id,
                effect.name,
                class_name
            );
            Ok(())
        } else {
            Err(QmltsError::Internal(format!(
                "Failed to emit signal '{}' on '{class_name}'",
                effect.qml_name
            )))
        }
    }

    // ─────────────────────────────────────────────────────────────────────
    //  §7 List Model Operations
    // ─────────────────────────────────────────────────────────────────────

    /// Create a new list model and return its ID (index).
    ///
    /// The `schema_json` must contain a `roles` array, e.g.:
    /// `{"roles": ["name", "value"]}`.
    pub fn create_list_model(&mut self, schema_json: &str) -> Result<usize> {
        self.ensure_alive()?;
        let handle = list_model::ListModelHandle::new(schema_json)?;
        let id = self.list_models.len();
        self.list_models.push(Some(handle));
        tracing::debug!("Created list model id={id}");
        Ok(id)
    }

    /// Destroy a list model by ID.
    pub fn destroy_list_model(&mut self, model_id: usize) -> Result<()> {
        self.ensure_alive()?;
        let slot = self.get_list_model_slot_mut(model_id)?;
        *slot = None;
        tracing::debug!("Destroyed list model id={model_id}");
        Ok(())
    }

    /// Replace all data in a list model.
    pub fn set_list_data(&self, model_id: usize, json_array: &str) -> Result<()> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.set_data(json_array)
    }

    /// Insert rows into a list model at the given index.
    pub fn insert_list_rows(&self, model_id: usize, index: i32, json_rows: &str) -> Result<()> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.insert_rows(index, json_rows)
    }

    /// Remove rows from a list model.
    pub fn remove_list_rows(&self, model_id: usize, index: i32, count: i32) -> Result<()> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.remove_rows(index, count)
    }

    /// Update a single row in a list model.
    pub fn update_list_row(&self, model_id: usize, index: i32, json_data: &str) -> Result<()> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.update_row(index, json_data)
    }

    /// Move rows within a list model.
    pub fn move_list_rows(
        &self,
        model_id: usize,
        source: i32,
        dest: i32,
        count: i32,
    ) -> Result<()> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.move_rows(source, dest, count)
    }

    /// Get the row count of a list model.
    pub fn list_row_count(&self, model_id: usize) -> Result<i32> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        Ok(model.row_count())
    }

    /// Get a single row from a list model as JSON.
    pub fn get_list_row(&self, model_id: usize, index: i32) -> Result<String> {
        self.ensure_alive()?;
        let model = self.get_list_model(model_id)?;
        model.get_row(index)
    }

    /// Get a reference to a list model handle by ID.
    fn get_list_model(&self, model_id: usize) -> Result<&list_model::ListModelHandle> {
        self.list_models
            .get(model_id)
            .and_then(|slot| slot.as_ref())
            .ok_or_else(|| {
                QmltsError::ListModelError(format!("List model id={model_id} not found"))
            })
    }

    /// Get a mutable reference to a list model slot by ID.
    fn get_list_model_slot_mut(
        &mut self,
        model_id: usize,
    ) -> Result<&mut Option<list_model::ListModelHandle>> {
        self.list_models.get_mut(model_id).ok_or_else(|| {
            QmltsError::ListModelError(format!("List model id={model_id} not found"))
        })
    }

    /// Get the raw C pointer for a list model (for QML context property binding).
    #[must_use]
    pub fn list_model_ptr(&self, model_id: usize) -> Option<*mut std::ffi::c_void> {
        self.list_models
            .get(model_id)
            .and_then(|slot| slot.as_ref())
            .map(list_model::ListModelHandle::as_ptr)
    }

    /// Set a list model as a QML context property.
    ///
    /// # Errors
    ///
    /// Returns an error if `model_id` is invalid or if the engine is not
    /// initialized.
    pub fn set_list_model_context_property(&mut self, name: &str, model_id: usize) -> Result<()> {
        let ptr = self.list_model_ptr(model_id).ok_or_else(|| {
            QmltsError::ListModelError(format!("List model id={model_id} not found"))
        })?;
        let ok = unsafe { qt_context::set_context_property(self.engine_ptr, name, ptr) };
        if ok {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(format!(
                "Failed to set list model id={model_id} as context property '{name}'"
            )))
        }
    }

    /// Check whether a QML context property is currently published.
    #[must_use]
    pub fn has_context_property(&self, name: &str) -> bool {
        #[cfg(not(feature = "mock-qt"))]
        {
            return !self.engine_ptr.is_null()
                && qt_context::has_context_property(self.engine_ptr, name);
        }

        #[cfg(feature = "mock-qt")]
        {
            let _ = name;
            false
        }
    }

    /// Read an integer property from the active runtime object.
    #[must_use]
    pub fn active_runtime_i32_property(&self, name: &str) -> Option<i32> {
        let runtime_ptr = self.active_bridge.as_ref()?.runtime_qobject_ptr();
        qt_context::read_int_property(runtime_ptr, name)
    }

    /// Read a string property from the root QML object.
    #[must_use]
    pub fn root_string_property(&self, name: &str) -> Option<String> {
        let root_ptr = self.root_object_ptr();
        if root_ptr.is_null() {
            return None;
        }
        qt_context::read_string_property(root_ptr, name)
    }

    /// Read an integer property from the root QML object.
    #[must_use]
    pub fn root_i32_property(&self, name: &str) -> Option<i32> {
        let root_ptr = self.root_object_ptr();
        if root_ptr.is_null() {
            return None;
        }
        qt_context::read_int_property(root_ptr, name)
    }

    /// Load a QML document from a file.
    ///
    /// # Arguments
    ///
    /// * `path` - Path to the QML file.
    ///
    /// # Errors
    ///
    /// Returns `QmltsError::FileNotFound` if the file doesn't exist.
    /// Returns `QmltsError::QmlLoadFailed` if the QML has errors.
    pub fn load_file(&mut self, path: &str) -> Result<()> {
        self.ensure_alive()?;

        let file_path = Path::new(path);

        if !file_path.exists() {
            return Err(QmltsError::FileNotFound(path.to_string()));
        }

        // Read the file content
        let content =
            std::fs::read_to_string(file_path).map_err(|e| QmltsError::FileReadError {
                path: path.to_string(),
                message: e.to_string(),
            })?;

        // Validate QML syntax (basic check)
        self.validate_qml_syntax(&content)?;

        // Set up V2 init context if V2 is enabled (guard auto-clears on drop)
        let _v2_guard = self.create_v2_context_guard();

        // Mark type registrar that QML loading has started
        if let Some(ref mut state) = self.v2_state {
            state.type_registrar.mark_qml_load_started();
        }

        #[cfg(not(feature = "mock-qt"))]
        {
            let loaded = qt_context::load_url(self.engine_ptr, path);
            if !loaded {
                return Err(QmltsError::QmlLoadFailed(format!(
                    "Qt failed to load QML file: {path}"
                )));
            }
        }

        // Store the loaded component path
        self.loaded_components.push(path.to_string());
        self.qml_loaded = true;

        tracing::debug!("Loaded QML file: {}", path);
        Ok(())
    }

    /// Load a QML document from a string.
    ///
    /// # Arguments
    ///
    /// * `source` - QML source code.
    /// * `base_url` - Optional base URL for resolving relative imports.
    ///
    /// # Errors
    ///
    /// Returns `QmltsError::QmlLoadFailed` if the QML has syntax errors.
    pub fn load_string(&mut self, source: &str, base_url: Option<&str>) -> Result<()> {
        self.ensure_alive()?;

        if source.trim().is_empty() {
            return Err(QmltsError::QmlLoadFailed("Empty QML source".to_string()));
        }

        // Validate QML syntax (basic check)
        self.validate_qml_syntax(source)?;

        // Set up V2 init context if V2 is enabled (guard auto-clears on drop)
        let _v2_guard = self.create_v2_context_guard();

        // Mark type registrar that QML loading has started
        if let Some(ref mut state) = self.v2_state {
            state.type_registrar.mark_qml_load_started();
        }

        #[cfg(not(feature = "mock-qt"))]
        {
            let loaded = qt_context::load_data(self.engine_ptr, source.as_bytes(), base_url);
            if !loaded {
                return Err(QmltsError::QmlLoadFailed(
                    "Qt failed to load QML source".to_string(),
                ));
            }
        }

        // Store a marker for inline component
        let marker = base_url.unwrap_or("<inline>");
        self.loaded_components.push(marker.to_string());
        self.qml_loaded = true;

        tracing::debug!("Loaded QML from string (base_url: {:?})", base_url);
        Ok(())
    }

    /// Basic QML syntax validation.
    ///
    /// This performs a quick structural check to catch obvious errors
    /// before passing to Qt's QML engine.
    fn validate_qml_syntax(&self, source: &str) -> Result<()> {
        let trimmed = source.trim();

        // Check for empty content
        if trimmed.is_empty() {
            return Err(QmltsError::QmlSyntaxError {
                line: 1,
                message: "Empty QML document".to_string(),
            });
        }

        // Very basic check: QML should start with 'import' or a type name
        // This catches completely malformed input
        let first_line = trimmed.lines().next().unwrap_or("");
        let first_word = first_line.split_whitespace().next().unwrap_or("");

        // Valid QML starts with: import, pragma, or a component type (capitalized)
        let valid_start = first_word == "import"
            || first_word == "pragma"
            || first_word.chars().next().is_some_and(char::is_uppercase);

        if !valid_start {
            return Err(QmltsError::QmlSyntaxError {
                line: 1,
                message: format!(
                    "Invalid QML start: expected 'import' or component type, got '{first_word}'"
                ),
            });
        }

        // Check for basic brace matching and report an approximate 1-based line.
        let open_braces = source.chars().filter(|&c| c == '{').count();
        let close_braces = source.chars().filter(|&c| c == '}').count();

        if open_braces != close_braces {
            return Err(QmltsError::QmlSyntaxError {
                line: self.find_brace_mismatch_line(source).unwrap_or(1),
                message: format!(
                    "Brace mismatch: {open_braces} opening braces vs {close_braces} closing braces"
                ),
            });
        }

        Ok(())
    }

    /// Add a QML import search path.
    ///
    /// # Arguments
    ///
    /// * `path` - Directory path to add to import search paths.
    pub fn add_import_path(&mut self, path: &str) -> Result<()> {
        self.ensure_alive()?;
        self.config.import_paths.push(path.to_string());
        tracing::debug!("Added import path: {}", path);
        Ok(())
    }

    /// Add a Qt plugin search path.
    ///
    /// # Arguments
    ///
    /// * `path` - Directory path to add to plugin search paths.
    pub fn add_plugin_path(&mut self, path: &str) -> Result<()> {
        self.ensure_alive()?;
        self.config.plugin_paths.push(path.to_string());
        tracing::debug!("Added plugin path: {}", path);
        Ok(())
    }

    /// Process all pending Qt events.
    ///
    /// This processes the Qt event queue and returns immediately.
    /// Call this in a loop for non-blocking event processing.
    #[cfg(not(feature = "mock-qt"))]
    pub fn process_events(&self) -> Result<()> {
        self.ensure_alive()?;
        qt_context::process_events();
        tracing::trace!("Processing Qt events");
        Ok(())
    }

    #[cfg(feature = "mock-qt")]
    pub fn process_events(&self) -> Result<()> {
        self.ensure_alive()?;
        tracing::trace!("Processing Qt events (mock)");
        Ok(())
    }

    /// Process Qt events for up to the specified duration.
    ///
    /// # Arguments
    ///
    /// * `timeout_ms` - Maximum time to process events, in milliseconds.
    #[cfg(not(feature = "mock-qt"))]
    pub fn process_events_for(&self, timeout_ms: u32) -> Result<()> {
        self.ensure_alive()?;
        qt_context::process_events_for(timeout_ms);
        tracing::trace!("Processing Qt events for {}ms", timeout_ms);
        Ok(())
    }

    #[cfg(feature = "mock-qt")]
    pub fn process_events_for(&self, timeout_ms: u32) -> Result<()> {
        self.ensure_alive()?;
        tracing::trace!("Processing Qt events for {}ms (mock)", timeout_ms);
        Ok(())
    }

    /// Run the Qt event loop (blocking).
    ///
    /// This starts the Qt event loop and blocks until `quit()` is called.
    /// Returns the exit code.
    #[cfg(not(feature = "mock-qt"))]
    pub fn exec(&self) -> Result<i32> {
        self.ensure_alive()?;
        tracing::info!("Starting Qt event loop");
        Ok(qt_context::exec())
    }

    #[cfg(feature = "mock-qt")]
    pub fn exec(&self) -> Result<i32> {
        self.ensure_alive()?;
        tracing::info!("Starting Qt event loop (mock)");
        Ok(0)
    }

    /// Request the Qt event loop to quit.
    ///
    /// # Arguments
    ///
    /// * `exit_code` - Exit code to return from `exec()`.
    #[cfg(not(feature = "mock-qt"))]
    pub fn quit(&self, exit_code: Option<i32>) -> Result<()> {
        self.ensure_alive()?;
        let code = exit_code.unwrap_or(0);
        qt_context::quit(code);
        tracing::info!("Requesting Qt event loop quit with code {}", code);
        Ok(())
    }

    #[cfg(feature = "mock-qt")]
    pub fn quit(&self, exit_code: Option<i32>) -> Result<()> {
        self.ensure_alive()?;
        let code = exit_code.unwrap_or(0);
        tracing::info!("Requesting Qt event loop quit with code {} (mock)", code);
        Ok(())
    }

    // ─────────────────────────────────────────────────────────────────────
    //  §8 Hot Reload
    // ─────────────────────────────────────────────────────────────────────

    /// Capture the current UI state as a JSON snapshot.
    ///
    /// Returns a JSON string containing window geometry, focus state,
    /// and scroll positions. The snapshot can later be restored with
    /// `restore_snapshot` after a QML reload.
    pub fn capture_snapshot(&self) -> Result<String> {
        self.ensure_alive()?;
        if !self.qml_loaded {
            return Err(QmltsError::HotReloadFailed(
                "cannot capture snapshot: no QML loaded".to_string(),
            ));
        }
        qt_context::capture_snapshot(self.engine_ptr).ok_or_else(|| {
            QmltsError::HotReloadFailed("failed to capture UI state snapshot".to_string())
        })
    }

    /// Reload QML: destroy existing root objects, clear component cache,
    /// and load new QML source.
    ///
    /// Context properties (`vm`, `__qmlts`) survive because they are set
    /// on the engine's root context, which is NOT destroyed during reload.
    /// After reload, the `qml_loaded` flag remains `true`.
    pub fn reload_qml(&mut self, new_source: &str, base_url: Option<&str>) -> Result<()> {
        self.ensure_alive()?;
        if !self.qml_loaded {
            return Err(QmltsError::HotReloadFailed(
                "cannot reload: no QML has been loaded yet".to_string(),
            ));
        }

        let ok = qt_context::reload_qml(self.engine_ptr, new_source.as_bytes(), base_url);
        if ok {
            tracing::info!("QML reloaded successfully");
            Ok(())
        } else {
            Err(QmltsError::HotReloadFailed(
                "QML reload failed: new source did not produce a root object".to_string(),
            ))
        }
    }

    /// Restore UI state from a previously captured snapshot.
    ///
    /// Applies window geometry and focus from the snapshot JSON. Unknown
    /// fields are silently ignored for forward compatibility.
    pub fn restore_snapshot(&self, snapshot_json: &str) -> Result<()> {
        self.ensure_alive()?;
        if !self.qml_loaded {
            return Err(QmltsError::HotReloadFailed(
                "cannot restore snapshot: no QML loaded".to_string(),
            ));
        }

        let ok = qt_context::restore_snapshot(self.engine_ptr, snapshot_json);
        if ok {
            tracing::info!("UI state snapshot restored");
            Ok(())
        } else {
            Err(QmltsError::HotReloadFailed(
                "failed to restore UI state snapshot".to_string(),
            ))
        }
    }

    // ─── Error overlay ──────────────────────────────────────────────────

    /// Show the error overlay with the given message.
    ///
    /// If QML has not been loaded yet, this sets `qml_loaded = true` so
    /// that `reload_qml()` can later replace the error shell.
    pub fn show_error_overlay(&mut self, message: &str) -> Result<()> {
        self.ensure_alive()?;
        let ok = qt_context::show_error_overlay(self.engine_ptr, message);
        if ok {
            self.qml_loaded = true;
            tracing::debug!("Error overlay shown");
            Ok(())
        } else {
            Err(QmltsError::OverlayFailed(
                "failed to show error overlay".to_string(),
            ))
        }
    }

    /// Hide the error overlay.
    pub fn hide_error_overlay(&self) -> Result<()> {
        self.ensure_alive()?;
        let ok = qt_context::hide_error_overlay(self.engine_ptr);
        if ok {
            tracing::debug!("Error overlay hidden");
            Ok(())
        } else {
            Err(QmltsError::OverlayFailed(
                "failed to hide error overlay".to_string(),
            ))
        }
    }

    /// Query whether the error overlay is currently visible.
    #[must_use]
    pub fn is_error_overlay_visible(&self) -> bool {
        if self.ensure_alive().is_err() {
            return false;
        }
        qt_context::is_error_overlay_visible(self.engine_ptr)
    }

    // ─────────────────────────────────────────────────────────────────────
    //  §10 V2 Instance Runtime
    // ─────────────────────────────────────────────────────────────────────

    /// Initialize V2 runtime state (idempotent).
    ///
    /// Creates `V2EngineState` and installs the V2 event router on first call.
    fn ensure_v2_initialized(&mut self) -> Result<()> {
        self.ensure_alive()?;
        if self.v2_state.is_none() {
            let state = v2_runtime::V2EngineState::new();
            let router = v2_runtime::create_v2_router(
                Arc::clone(&state.registry),
                Arc::clone(&state.handlers),
            );
            qmlts_host_generated::v2_dispatch::set_v2_router(self.dispatch_owner_id, router)
                .map_err(|e| QmltsError::Internal(e.to_string()))?;
            self.v2_state = Some(state);
        }
        Ok(())
    }

    /// Get a reference to V2 state, or error if V2 is not enabled.
    fn require_v2(&self) -> Result<&v2_runtime::V2EngineState> {
        self.ensure_alive()?;
        self.v2_state.as_ref().ok_or(QmltsError::V2NotEnabled)
    }

    /// Get a mutable reference to V2 state, or error if V2 is not enabled.
    #[allow(dead_code)]
    fn require_v2_mut(&mut self) -> Result<&mut v2_runtime::V2EngineState> {
        self.ensure_alive()?;
        self.v2_state.as_mut().ok_or(QmltsError::V2NotEnabled)
    }

    /// Register a V2 module's types. Must be called before QML loading.
    ///
    /// Initializes V2 runtime state on first call, then delegates to
    /// `TypeRegistrar` for idempotent type registration.
    ///
    /// # Errors
    ///
    /// - `V2ModuleRegistrationFailed` if QML loading has already started.
    /// - `V2TypeRegistrationFailed` if a type name is not found in V2 descriptors.
    ///
    /// # Panics
    ///
    /// Panics if the V2 state mutex is poisoned (should not happen in practice).
    pub fn register_module(
        &mut self,
        module_uri: &str,
        version_major: i32,
        version_minor: i32,
        type_names: &[String],
        v1_compat: bool,
    ) -> Result<()> {
        self.ensure_v2_initialized()?;
        let descriptors = qmlts_host_generated::v2_descriptors();
        let state = self.v2_state.as_mut().expect("V2 state just initialized");
        // V1 compat is sticky: once enabled, stays enabled for this engine
        if v1_compat {
            state.v1_compat = true;
        }
        state.type_registrar.register_module(
            module_uri,
            version_major,
            version_minor,
            type_names,
            descriptors,
        )
    }

    /// Sync a single property to a V2 QObject instance.
    ///
    /// Does NOT require instance ready (outbound TS→QML is always allowed).
    /// Suppresses property change notifications during sync to prevent echo.
    ///
    /// # Errors
    ///
    /// - `V2NotEnabled` if V2 runtime is not initialized.
    /// - `V2InstanceNotFound` if `instance_id` is not in the registry.
    /// - `PropertyNotFound` if the property is not in the schema.
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn sync_state_v2(&self, instance_id: u32, prop_name: &str, value_json: &str) -> Result<()> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let ptr = reg
            .get_qobject_ptr(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;
        let class_name = reg
            .get_class_name(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?
            .to_string();
        drop(reg);

        let schema = self.find_v2_schema(&class_name)?;
        let _suppress = qt_context::SuppressGuard::new(ptr);
        property_sync::sync_one(ptr, &schema, prop_name, value_json)
    }

    /// Batch-sync properties to a V2 QObject instance.
    ///
    /// Suppresses property change notifications during sync.
    ///
    /// # Errors
    ///
    /// - `V2NotEnabled` if V2 runtime is not initialized.
    /// - `V2InstanceNotFound` if `instance_id` is not in the registry.
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn sync_state_batch_v2(&self, instance_id: u32, properties_json: &str) -> Result<()> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let ptr = reg
            .get_qobject_ptr(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;
        let class_name = reg
            .get_class_name(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?
            .to_string();
        drop(reg);

        let schema = self.find_v2_schema(&class_name)?;
        let _suppress = qt_context::SuppressGuard::new(ptr);
        property_sync::sync_batch(ptr, &schema, properties_json)
    }

    /// Look up the V2 schema for a class name from V2 descriptors.
    fn find_v2_schema(&self, class_name: &str) -> Result<ViewModelSchema> {
        let descriptors = qmlts_host_generated::v2_descriptors();
        let desc = descriptors
            .iter()
            .find(|d| d.class_name == class_name)
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.to_string()))?;
        serde_json::from_str(desc.schema_json).map_err(|e| {
            QmltsError::SchemaValidation(format!(
                "Failed to parse V2 schema for '{class_name}': {e}"
            ))
        })
    }

    /// Confirm TS-side initialization complete for a V2 instance.
    ///
    /// Connects property change forwarder and destroy handler, then
    /// flushes queued events in FIFO order.
    ///
    /// # Errors
    ///
    /// - `V2NotEnabled` if V2 runtime is not initialized.
    /// - `V2InstanceNotFound` if `instance_id` is not in the registry.
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn instance_ready(&self, instance_id: u32) -> Result<()> {
        let state = self.require_v2()?;
        let mut reg = state.registry.lock().expect("registry lock poisoned");

        // Connect per-type property change forwarder and destroy handler
        let ptr = reg
            .get_qobject_ptr(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;
        let class_name = reg
            .get_class_name(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?
            .to_string();
        if reg.is_ready(instance_id) {
            return Ok(());
        }
        let owner_id = i32::try_from(self.dispatch_owner_id).map_err(|_| {
            QmltsError::Internal(format!(
                "V2 dispatch owner id {} does not fit in i32",
                self.dispatch_owner_id
            ))
        })?;
        let instance_id_i32 = i32::try_from(instance_id).map_err(|_| {
            QmltsError::Internal(format!("V2 instance id {instance_id} does not fit in i32"))
        })?;
        let descriptors = qmlts_host_generated::v2_descriptors();
        let desc = descriptors
            .iter()
            .find(|d| d.class_name == class_name)
            .ok_or_else(|| QmltsError::BridgeTypeNotFound(class_name.clone()))?;
        if !(desc.connect_properties)(ptr, owner_id, instance_id_i32) {
            return Err(QmltsError::Internal(format!(
                "Failed to connect V2 property forwarder for '{class_name}'"
            )));
        }
        qt_context::v2_connect_destroy_handler(ptr, owner_id, instance_id_i32);

        let flushed = reg.mark_ready(instance_id)?;
        drop(reg);

        // Deliver flushed events in FIFO order
        for event in &flushed {
            v2_runtime::deliver_event(&state.handlers, event);
        }

        Ok(())
    }

    /// Emit an effect signal on a V2 QObject instance.
    ///
    /// # Errors
    ///
    /// - `V2NotEnabled` if V2 runtime is not initialized.
    /// - `V2InstanceNotFound` if `instance_id` is not in the registry.
    /// - `EffectNotFound` if the effect name is not in the schema.
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn emit_effect_v2(
        &self,
        instance_id: u32,
        effect_name: &str,
        payload_json: Option<&str>,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let ptr = reg
            .get_qobject_ptr(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?;
        let class_name = reg
            .get_class_name(instance_id)
            .ok_or(QmltsError::V2InstanceNotFound(instance_id))?
            .to_string();
        drop(reg);

        let schema = self.find_v2_schema(&class_name)?;
        let effect = schema
            .effects
            .iter()
            .find(|e| e.name == effect_name)
            .ok_or_else(|| QmltsError::EffectNotFound {
                vm: class_name.clone(),
                effect: effect_name.to_string(),
            })?;

        let param_types = if effect.parameters.is_empty() {
            None
        } else {
            Some(serde_json::to_string(&effect.parameters).unwrap_or_default())
        };

        let ok =
            qt_context::emit_signal(ptr, &effect.qml_name, payload_json, param_types.as_deref());
        if ok {
            Ok(())
        } else {
            Err(QmltsError::Internal(format!(
                "Failed to emit V2 effect '{effect_name}' on '{class_name}'"
            )))
        }
    }

    /// Register V2 instance-created handler.
    ///
    /// Called by the N-API layer when TS registers an instance-created callback.
    ///
    /// # Errors
    ///
    /// Returns `V2NotEnabled` if V2 runtime is not initialized.
    ///
    /// # Panics
    ///
    /// Panics if the handler mutex is poisoned.
    pub fn register_instance_created_handler(
        &self,
        handler: v2_runtime::InstanceCreatedHandler,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let mut slot = state
            .handlers
            .instance_created
            .lock()
            .expect("instance_created lock poisoned");
        if slot.is_some() {
            return Err(QmltsError::V2HandlerAlreadyRegistered(
                self.dispatch_owner_id,
            ));
        }
        *slot = Some(handler);
        Ok(())
    }

    /// Register V2 instance-destroying handler.
    ///
    /// # Errors
    ///
    /// Returns `V2NotEnabled` if V2 runtime is not initialized.
    ///
    /// # Panics
    ///
    /// Panics if the handler mutex is poisoned.
    pub fn register_instance_destroying_handler(
        &self,
        handler: v2_runtime::InstanceDestroyingHandler,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let mut slot = state
            .handlers
            .instance_destroying
            .lock()
            .expect("instance_destroying lock poisoned");
        if slot.is_some() {
            return Err(QmltsError::V2HandlerAlreadyRegistered(
                self.dispatch_owner_id,
            ));
        }
        *slot = Some(handler);
        Ok(())
    }

    /// Register V2 property-changed handler.
    ///
    /// # Errors
    ///
    /// Returns `V2NotEnabled` if V2 runtime is not initialized.
    ///
    /// # Panics
    ///
    /// Panics if the handler mutex is poisoned.
    pub fn register_property_changed_handler(
        &self,
        handler: v2_runtime::PropertyChangedHandler,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let mut slot = state
            .handlers
            .property_changed
            .lock()
            .expect("property_changed lock poisoned");
        if slot.is_some() {
            return Err(QmltsError::V2HandlerAlreadyRegistered(
                self.dispatch_owner_id,
            ));
        }
        *slot = Some(handler);
        Ok(())
    }

    /// Register V2 command dispatcher.
    ///
    /// # Errors
    ///
    /// Returns `V2NotEnabled` if V2 runtime is not initialized.
    ///
    /// # Panics
    ///
    /// Panics if the handler mutex is poisoned.
    pub fn register_command_dispatcher_v2(
        &self,
        handler: v2_runtime::CommandDispatcherV2,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let mut slot = state
            .handlers
            .command_dispatcher
            .lock()
            .expect("command_dispatcher lock poisoned");
        if slot.is_some() {
            return Err(QmltsError::V2HandlerAlreadyRegistered(
                self.dispatch_owner_id,
            ));
        }
        *slot = Some(handler);
        Ok(())
    }

    /// Register V2 lifecycle handler.
    ///
    /// # Errors
    ///
    /// Returns `V2NotEnabled` if V2 runtime is not initialized.
    ///
    /// # Panics
    ///
    /// Panics if the handler mutex is poisoned.
    pub fn register_lifecycle_handler_v2(
        &self,
        handler: v2_runtime::LifecycleHandlerV2,
    ) -> Result<()> {
        let state = self.require_v2()?;
        let mut slot = state
            .handlers
            .lifecycle_handler
            .lock()
            .expect("lifecycle_handler lock poisoned");
        if slot.is_some() {
            return Err(QmltsError::V2HandlerAlreadyRegistered(
                self.dispatch_owner_id,
            ));
        }
        *slot = Some(handler);
        Ok(())
    }

    /// Capture state of all ready V2 instances.
    ///
    /// Returns JSON: `{"snapshots": [...], "diagnostics": [...]}`
    /// Each snapshot: `{"instanceId": N, "className": "...", "properties": {...}}`
    ///
    /// Only ready instances are captured. Unready instances produce a diagnostic.
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn capture_instance_states(&self) -> Result<String> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let descriptors = qmlts_host_generated::v2_descriptors();

        let mut snapshots = Vec::new();
        let mut diagnostics = Vec::new();

        for (instance_id, class_name, ptr, ready) in reg.iter_instances() {
            if !ready {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INSTANCE_NOT_READY",
                    "message": format!("Instance {} ({}) not ready, skipped", instance_id, class_name),
                    "instanceId": instance_id,
                    "className": class_name,
                }));
                continue;
            }

            let desc = descriptors.iter().find(|d| d.class_name == class_name);
            let Some(desc) = desc else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_NO_DESCRIPTOR",
                    "message": format!("No V2 descriptor for class '{}'", class_name),
                    "instanceId": instance_id,
                    "className": class_name,
                }));
                continue;
            };

            let prop_names: Vec<&str> =
                desc.state_properties.iter().map(|p| p.qml_name).collect();
            let names_json = serde_json::to_string(&prop_names)
                .map_err(|e| QmltsError::Internal(e.to_string()))?;

            let read_result = qt_context::v2_read_properties(ptr, &names_json);
            match read_result {
                Some(json_str) => {
                    if let Ok(parsed) = serde_json::from_str::<serde_json::Value>(&json_str) {
                        let props =
                            parsed.get("props").cloned().unwrap_or(serde_json::json!({}));
                        if let Some(read_diags) = parsed.get("diagnostics") {
                            if let Some(arr) = read_diags.as_array() {
                                for d in arr {
                                    let mut diag = d.clone();
                                    if let Some(obj) = diag.as_object_mut() {
                                        obj.insert(
                                            "instanceId".to_string(),
                                            serde_json::json!(instance_id),
                                        );
                                        obj.insert(
                                            "className".to_string(),
                                            serde_json::json!(class_name),
                                        );
                                    }
                                    diagnostics.push(diag);
                                }
                            }
                        }
                        snapshots.push(serde_json::json!({
                            "instanceId": instance_id,
                            "className": class_name,
                            "properties": props,
                        }));
                    }
                }
                None => {
                    diagnostics.push(serde_json::json!({
                        "code": "HR_READ_FAILED",
                        "message": format!("Failed to read properties for instance {}", instance_id),
                        "instanceId": instance_id,
                        "className": class_name,
                    }));
                }
            }
        }

        let result = serde_json::json!({ "snapshots": snapshots, "diagnostics": diagnostics });
        Ok(result.to_string())
    }

    /// Restore state to matched V2 instances.
    ///
    /// `matched_pairs_json`: JSON array of `{"instanceId": N, "properties": {...}}`
    /// Returns JSON: `{"diagnostics": [...]}`
    ///
    /// # Panics
    ///
    /// Panics if the instance registry mutex is poisoned.
    pub fn restore_instance_states(&self, matched_pairs_json: &str) -> Result<String> {
        let state = self.require_v2()?;
        let reg = state.registry.lock().expect("registry lock poisoned");
        let descriptors = qmlts_host_generated::v2_descriptors();

        let pairs: Vec<serde_json::Value> = serde_json::from_str(matched_pairs_json)
            .map_err(|e| QmltsError::Internal(format!("Invalid matched pairs JSON: {e}")))?;

        let mut diagnostics = Vec::new();

        for pair in &pairs {
            let instance_id = pair.get("instanceId").and_then(serde_json::Value::as_u64).and_then(|v| u32::try_from(v).ok());
            let properties = pair.get("properties");

            let Some(instance_id) = instance_id else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INVALID_PAIR",
                    "message": "Restore pair missing instanceId",
                }));
                continue;
            };

            let Some(properties) = properties else {
                continue;
            };

            let ptr = reg.get_qobject_ptr(instance_id);
            let class_name = reg.get_class_name(instance_id);

            let Some(ptr) = ptr else {
                diagnostics.push(serde_json::json!({
                    "code": "HR_INSTANCE_NOT_FOUND",
                    "message": format!("Instance {} not found in registry", instance_id),
                    "instanceId": instance_id,
                }));
                continue;
            };

            let Some(class_name) = class_name else {
                continue;
            };

            // Validate property names against descriptor allowlist
            let desc = descriptors.iter().find(|d| d.class_name == class_name);
            if let Some(desc) = desc {
                if let Some(obj) = properties.as_object() {
                    let allowed: std::collections::HashSet<&str> =
                        desc.state_properties.iter().map(|p| p.qml_name).collect();
                    for key in obj.keys() {
                        if !allowed.contains(key.as_str()) {
                            diagnostics.push(serde_json::json!({
                                "code": "HR_UNKNOWN_PROPERTY",
                                "message": format!("Property '{}' not in schema for '{}'", key, class_name),
                                "instanceId": instance_id,
                                "className": class_name,
                            }));
                        }
                    }
                }
            }

            let _suppress = qt_context::SuppressGuard::new(ptr);
            let props_json = serde_json::to_string(properties)
                .map_err(|e| QmltsError::Internal(e.to_string()))?;

            if !qt_context::v2_write_properties(ptr, &props_json) {
                diagnostics.push(serde_json::json!({
                    "code": "HR_WRITE_FAILED",
                    "message": format!("Failed to write properties for instance {}", instance_id),
                    "instanceId": instance_id,
                    "className": class_name.to_string(),
                }));
            }
        }

        let result = serde_json::json!({ "diagnostics": diagnostics });
        Ok(result.to_string())
    }

    /// Create a V2 init context guard if V2 is enabled.
    ///
    /// The guard sets thread-local V2InitContext for the duration of QML loading
    /// so V2 QObjects can register themselves during construction.
    fn create_v2_context_guard(&self) -> Option<qmlts_host_generated::v2_dispatch::V2ContextGuard> {
        let state = self.v2_state.as_ref()?;
        let registry = Arc::clone(&state.registry);
        let owner_id = self.dispatch_owner_id;
        if i32::try_from(owner_id).is_err() {
            tracing::error!(
                owner_id,
                "V2 dispatch owner id does not fit in i32; V2 QObjects will be inert"
            );
            return None;
        }

        // V1 compat: capture state for context property setup during first instance creation
        let v1_compat = state.v1_compat;
        let v1_compat_applied = Arc::clone(&state.v1_compat_applied);
        // Capture engine_ptr as usize for Send safety (raw pointers are !Send).
        // This is safe because the closure runs on the Qt main thread during QML loading,
        // which is the same thread that owns the engine pointer.
        let engine_ptr_addr = self.engine_ptr as usize;

        let ctx = qmlts_host_generated::v2_dispatch::V2InitContext {
            owner_id,
            register_instance: Arc::new(move |class_name, ptr| {
                let id = {
                    let mut reg = registry.lock().expect("registry lock poisoned");
                    match reg.allocate_instance(class_name, ptr) {
                        Ok(id) => id,
                        Err(e) => {
                            tracing::error!(%e, "Failed to allocate V2 instance");
                            return -1;
                        }
                    }
                };

                // V1 compat: set context properties for the first instance only.
                // Do this after releasing the registry lock; Qt may evaluate
                // bindings while context properties are updated.
                if v1_compat
                    && v1_compat_applied
                        .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
                        .is_ok()
                {
                    let engine_ptr = engine_ptr_addr as *mut std::ffi::c_void;
                    // SAFETY: Called on Qt main thread during QML loading.
                    // engine_ptr is valid for the lifetime of the engine.
                    // ptr is the just-constructed QObject, valid for its lifetime.
                    unsafe {
                        let vm_ok = qt_context::set_context_property(engine_ptr, "vm", ptr);
                        let qmlts_ok = qt_context::set_context_property(engine_ptr, "__qmlts", ptr);
                        if vm_ok && qmlts_ok {
                            tracing::info!(
                                instance_id = id,
                                class_name,
                                "V1 compat: installed vm/__qmlts context properties"
                            );
                        } else {
                            tracing::warn!(
                                instance_id = id,
                                vm_ok,
                                qmlts_ok,
                                "V1 compat: partial context property setup"
                            );
                        }
                    }
                }

                if let Ok(qml_id) = i32::try_from(id) {
                    qml_id
                } else {
                    tracing::error!(
                        instance_id = id,
                        "Allocated V2 instance id does not fit in i32; removing inert instance"
                    );
                    let mut reg = registry.lock().expect("registry lock poisoned");
                    let _ = reg.remove_instance(id);
                    -1
                }
            }),
        };
        Some(qmlts_host_generated::v2_dispatch::V2ContextGuard::new(ctx))
    }

    fn find_brace_mismatch_line(&self, source: &str) -> Option<u32> {
        let mut open_lines = Vec::new();

        for (line_index, line) in source.lines().enumerate() {
            let line_number = u32::try_from(line_index + 1).unwrap_or(u32::MAX);
            for ch in line.chars() {
                match ch {
                    '{' => open_lines.push(line_number),
                    '}' if open_lines.pop().is_none() => return Some(line_number),
                    _ => {}
                }
            }
        }

        open_lines.first().copied()
    }

    fn cleanup_qt_resources(&mut self) {
        // Clean up V2 state first (removes router, drops handlers)
        if self.v2_state.is_some() {
            qmlts_host_generated::v2_dispatch::clear_v2_router(self.dispatch_owner_id);
            self.v2_state = None;
        }

        qmlts_host_generated::dispatch::clear_dispatchers_for_owner(self.dispatch_owner_id);

        #[cfg(not(feature = "mock-qt"))]
        {
            if !self.engine_ptr.is_null() {
                // Keep bridge-backed context properties alive until the engine and
                // its root objects are gone. Clearing them first can trigger
                // teardown-time binding reevaluations against `null`, which is noisy
                // at best and can destabilize native Qt tests.
                unsafe {
                    qt_context::destroy_engine(self.engine_ptr);
                }
                self.engine_ptr = ptr::null_mut();
                self.active_bridge = None;
                self.active_schema = None;
            }
        }

        #[cfg(feature = "mock-qt")]
        {
            self.active_bridge = None;
            self.active_schema = None;
        }
    }
}

impl Drop for QmltsEngine {
    fn drop(&mut self) {
        tracing::debug!("Dropping QmltsEngine, cleaning up resources");
        self.cleanup_qt_resources();
        // Note: We don't reset APP_INITIALIZED because Qt's QGuiApplication
        // cannot be cleanly destroyed and recreated within a process.
        // The engine resources are released, but the Qt application persists.
    }
}

/// Test support module for resetting global state.
#[cfg(test)]
pub mod tests_support {
    use super::*;

    /// Reset the app initialized flag for testing.
    pub fn reset_app_initialized() {
        APP_INITIALIZED.store(false, Ordering::SeqCst);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::{LazyLock, Mutex};
    use tests_support::reset_app_initialized;

    static TEST_MUTEX: LazyLock<Mutex<()>> = LazyLock::new(|| Mutex::new(()));

    #[test]
    fn test_engine_creation() {
        // Reset the global state for testing
        reset_app_initialized();

        let engine = QmltsEngine::new(None);
        assert!(engine.is_ok());
        let engine = engine.unwrap();
        assert!(engine.is_initialized());
    }

    #[test]
    fn test_engine_creation_with_config() {
        reset_app_initialized();

        let config = EngineConfig {
            plugin_paths: vec!["/opt/qt/plugins".to_string()],
            import_paths: vec!["/app/qml".to_string()],
            enable_logging: true,
        };

        let engine = QmltsEngine::new(Some(config));
        assert!(engine.is_ok());
    }

    #[test]
    fn test_multiple_engines() {
        reset_app_initialized();

        let engine1 = QmltsEngine::new(None);
        assert!(engine1.is_ok());

        let engine2 = QmltsEngine::new(None);
        assert!(engine2.is_ok());

        // Both engines should be initialized
        assert!(engine1.unwrap().is_initialized());
        assert!(engine2.unwrap().is_initialized());
    }

    #[test]
    fn test_version() {
        assert!(!VERSION.is_empty());
    }

    #[test]
    fn test_qt_version() {
        let version = qt_version();
        assert!(version.starts_with("6.11"));
    }

    #[test]
    fn test_load_string_valid_qml() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_string("import QtQuick\nItem { }", None);
        assert!(result.is_ok());
    }

    #[test]
    fn test_load_string_empty() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_string("", None);
        assert!(result.is_err());

        if let Err(QmltsError::QmlLoadFailed(msg)) = result {
            assert!(msg.contains("Empty"));
        } else {
            panic!("Expected QmlLoadFailed error");
        }
    }

    #[test]
    fn test_load_string_invalid_syntax() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_string("this is not valid qml", None);
        assert!(result.is_err());
    }

    #[test]
    fn test_load_string_unmatched_braces() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_string("import QtQuick\nItem {", None);
        assert!(result.is_err());

        if let Err(QmltsError::QmlSyntaxError { message, .. }) = result {
            assert!(message.contains("Brace mismatch"));
        } else {
            panic!("Expected QmlSyntaxError");
        }
    }

    #[test]
    fn test_load_file_not_found() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_file("/nonexistent/path/to/file.qml");
        assert!(result.is_err());

        if let Err(QmltsError::FileNotFound(path)) = result {
            assert!(path.contains("nonexistent"));
        } else {
            panic!("Expected FileNotFound error");
        }
    }

    #[test]
    fn test_add_paths() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.add_import_path("/app/qml").unwrap();
        engine.add_plugin_path("/opt/qt/plugins").unwrap();

        assert!(engine.config.import_paths.contains(&"/app/qml".to_string()));
        assert!(
            engine
                .config
                .plugin_paths
                .contains(&"/opt/qt/plugins".to_string())
        );
    }

    #[test]
    fn test_process_events() {
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        // Should not panic
        engine.process_events().unwrap();
        engine.process_events_for(100).unwrap();
    }

    #[test]
    fn test_operations_fail_after_destroy() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.mark_destroyed();

        let load_result = engine.load_string("import QtQuick\nItem { }", None);
        assert!(matches!(load_result, Err(QmltsError::EngineDestroyed)));

        let path_result = engine.add_import_path("/app/qml");
        assert!(matches!(path_result, Err(QmltsError::EngineDestroyed)));
    }

    #[test]
    fn test_brace_mismatch_reports_one_based_line() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.load_string("import QtQuick\nItem {\n  Text {", None);
        assert!(result.is_err());

        if let Err(QmltsError::QmlSyntaxError { line, .. }) = result {
            assert_eq!(line, 2);
        } else {
            panic!("Expected QmlSyntaxError");
        }
    }

    #[test]
    fn test_has_bridge_type() {
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.has_bridge_type("LoginViewModel"));
        assert!(engine.has_bridge_type("CounterViewModel"));
        assert!(!engine.has_bridge_type("NonExistentViewModel"));
    }

    #[test]
    fn test_get_registered_types() {
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        let types = engine.get_registered_types();
        assert_eq!(
            types,
            vec!["CounterViewModel", "LoginViewModel", "SearchViewModel"]
        );
    }

    #[test]
    fn test_register_view_model_unknown_type() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_view_model("NonExistent");
        assert!(matches!(result, Err(QmltsError::BridgeTypeNotFound(_))));
    }

    #[test]
    fn test_register_after_load_fails() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();

        let result = engine.register_view_model("LoginViewModel");
        assert!(matches!(result, Err(QmltsError::BridgeAlreadyLoaded)));
    }

    #[test]
    fn test_register_view_model_publishes_context_properties() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        #[cfg(not(feature = "mock-qt"))]
        {
            assert!(engine.has_context_property("vm"));
            assert!(engine.has_context_property("__qmlts"));
        }
    }

    #[test]
    fn test_register_view_model_stores_schema() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let schema = engine.active_schema().expect("schema should be set");
        assert_eq!(schema.class_name, "LoginViewModel");
        assert!(!schema.states.is_empty());
    }

    #[test]
    fn test_sync_state_succeeds() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.sync_state("LoginViewModel", "username", "\"alice\"");
        assert!(result.is_ok());
    }

    #[test]
    fn test_sync_state_wrong_class_name() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.sync_state("CounterViewModel", "username", "\"alice\"");
        assert!(matches!(result, Err(QmltsError::BridgeTypeNotFound(_))));
    }

    #[test]
    fn test_sync_state_no_active_bridge() {
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.sync_state("LoginViewModel", "username", "\"alice\"");
        assert!(matches!(result, Err(QmltsError::BridgeTypeNotFound(_))));
    }

    #[test]
    fn test_sync_state_property_not_found() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.sync_state("LoginViewModel", "nonexistent", "\"x\"");
        assert!(matches!(result, Err(QmltsError::PropertyNotFound { .. })));
    }

    #[test]
    fn test_sync_state_type_mismatch() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        // username is "string", pass a number
        let result = engine.sync_state("LoginViewModel", "username", "42");
        assert!(matches!(result, Err(QmltsError::TypeMismatch { .. })));
    }

    #[test]
    fn test_sync_state_batch_succeeds() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.sync_state_batch(
            "LoginViewModel",
            r#"{"username": "bob", "password": "secret"}"#,
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_sync_state_batch_partial_failure() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.sync_state_batch(
            "LoginViewModel",
            r#"{"username": "bob", "nonexistent": 42}"#,
        );
        assert!(matches!(
            result,
            Err(QmltsError::BatchSyncPartialFailure { .. })
        ));
    }

    #[test]
    fn test_sync_state_after_destroy_fails() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();
        engine.mark_destroyed();

        let result = engine.sync_state("LoginViewModel", "username", "\"x\"");
        assert!(matches!(result, Err(QmltsError::EngineDestroyed)));
    }

    // ─────────────────────────────────────────────────────────────────────
    //  Step 4: Command dispatch, lifecycle, effect tests
    // ─────────────────────────────────────────────────────────────────────

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_register_invoke_handler() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_invoke_handler(Box::new(|_class, _id| {}));
        assert!(result.is_ok());
        assert!(qmlts_host_generated::dispatch::has_command_dispatcher());
        qmlts_host_generated::dispatch::clear_dispatchers();
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_register_lifecycle_handler() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();

        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_lifecycle_handler(Box::new(|_class, _event| {}));
        assert!(result.is_ok());
        assert!(qmlts_host_generated::dispatch::has_lifecycle_dispatcher());
        qmlts_host_generated::dispatch::clear_dispatchers();
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_register_handler_fails_after_destroy() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.mark_destroyed();
        let result = engine.register_invoke_handler(Box::new(|_class, _id| {}));
        assert!(result.is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_multiple_engines_can_register_independent_invoke_handlers() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        qmlts_host_generated::dispatch::clear_dispatchers();

        let engine1 = QmltsEngine::new(None).unwrap();
        engine1
            .register_invoke_handler(Box::new(|_class, _id| {}))
            .unwrap();

        let engine2 = QmltsEngine::new(None).unwrap();
        let result = engine2.register_invoke_handler(Box::new(|_class, _id| {}));
        assert!(result.is_ok());

        qmlts_host_generated::dispatch::clear_dispatchers();
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_unowned_engine_drop_does_not_clear_global_dispatcher() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        qmlts_host_generated::dispatch::clear_dispatchers();

        let engine1 = QmltsEngine::new(None).unwrap();
        engine1
            .register_invoke_handler(Box::new(|_class, _id| {}))
            .unwrap();
        {
            let engine2 = QmltsEngine::new(None).unwrap();
            engine2
                .register_invoke_handler(Box::new(|_class, _id| {}))
                .unwrap();
        }

        assert!(qmlts_host_generated::dispatch::has_command_dispatcher());
        qmlts_host_generated::dispatch::clear_dispatchers();
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_by_name() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.emit_effect("LoginViewModel", "onLoginCompleted", Some("[true]"));
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_by_id() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.emit_effect_by_id("LoginViewModel", 1_633_635_556, Some("[true]"));
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_unknown_name() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.emit_effect("LoginViewModel", "nonExistent", None);
        assert!(matches!(
            result,
            Err(QmltsError::EffectNotFound { ref vm, ref effect })
            if vm == "LoginViewModel" && effect == "nonExistent"
        ));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_unknown_id() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.emit_effect_by_id("LoginViewModel", 999_999, None);
        assert!(matches!(result, Err(QmltsError::EffectNotFound { .. })));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_no_effects_on_counter() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("CounterViewModel").unwrap();

        let result = engine.emit_effect("CounterViewModel", "anything", None);
        assert!(matches!(result, Err(QmltsError::EffectNotFound { .. })));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_without_payload() {
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();

        let result = engine.emit_effect("LoginViewModel", "onLoginCompleted", None);
        assert!(result.is_ok());
    }

    #[test]
    fn test_cleanup_clears_dispatchers() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_invoke_handler(Box::new(|_, _| {})).unwrap();
        engine
            .register_lifecycle_handler(Box::new(|_, _| {}))
            .unwrap();

        assert!(qmlts_host_generated::dispatch::has_command_dispatcher());
        assert!(qmlts_host_generated::dispatch::has_lifecycle_dispatcher());

        engine.mark_destroyed();

        assert!(!qmlts_host_generated::dispatch::has_command_dispatcher());
        assert!(!qmlts_host_generated::dispatch::has_lifecycle_dispatcher());
    }

    // ─────────────────────────────────────────────────────────────────────
    //  §7 List Model Tests
    // ─────────────────────────────────────────────────────────────────────

    #[test]
    fn test_create_list_model() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name", "value"]}"#);
        assert!(id.is_ok());
        assert_eq!(id.unwrap(), 0);
    }

    #[test]
    fn test_create_multiple_list_models() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id0 = engine.create_list_model(r#"{"roles": ["a"]}"#).unwrap();
        let id1 = engine.create_list_model(r#"{"roles": ["b"]}"#).unwrap();
        assert_eq!(id0, 0);
        assert_eq!(id1, 1);
    }

    #[test]
    fn test_destroy_list_model() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        let result = engine.destroy_list_model(id);
        assert!(result.is_ok());
    }

    #[test]
    fn test_destroy_invalid_model_id() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let result = engine.destroy_list_model(999);
        assert!(result.is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_set_list_data_and_row_count() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        engine
            .set_list_data(id, r#"[{"name":"a"},{"name":"b"}]"#)
            .unwrap();
        // Mock always returns 0 for row_count
        let count = engine.list_row_count(id).unwrap();
        assert_eq!(count, 0); // mock
    }

    #[test]
    fn test_insert_list_rows() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        let result = engine.insert_list_rows(id, 0, r#"[{"name":"c"}]"#);
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_remove_list_rows() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        let result = engine.remove_list_rows(id, 0, 1);
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_update_list_row() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        let result = engine.update_list_row(id, 0, r#"{"name":"updated"}"#);
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_move_list_rows() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        let result = engine.move_list_rows(id, 0, 1, 1);
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_get_list_row_out_of_bounds() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["name"]}"#).unwrap();
        // Mock row_count returns 0, so index 0 is out of bounds
        let row = engine.get_list_row(id, 0);
        assert!(row.is_err());
    }

    #[test]
    fn test_list_operations_on_invalid_id() {
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.set_list_data(99, "[]").is_err());
        assert!(engine.insert_list_rows(99, 0, "[]").is_err());
        assert!(engine.remove_list_rows(99, 0, 1).is_err());
        assert!(engine.update_list_row(99, 0, "{}").is_err());
        assert!(engine.move_list_rows(99, 0, 1, 1).is_err());
        assert!(engine.list_row_count(99).is_err());
        assert!(engine.get_list_row(99, 0).is_err());
    }

    #[test]
    fn test_list_model_ptr_returns_some() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["x"]}"#).unwrap();
        assert!(engine.list_model_ptr(id).is_some());
    }

    #[test]
    fn test_list_model_ptr_returns_none_after_destroy() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        let id = engine.create_list_model(r#"{"roles": ["x"]}"#).unwrap();
        engine.destroy_list_model(id).unwrap();
        assert!(engine.list_model_ptr(id).is_none());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_multi_param_search() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("SearchViewModel").unwrap();

        let result = engine.emit_effect(
            "SearchViewModel",
            "onSearchCompleted",
            Some(r#"["test query", 42]"#),
        );
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_by_id_search() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("SearchViewModel").unwrap();

        let result = engine.emit_effect_by_id(
            "SearchViewModel",
            1_234_567_890,
            Some(r#"["query text", 100]"#),
        );
        assert!(result.is_ok());
    }

    // ─────────────────────────────────────────────────────────────────────
    //  §8 Hot Reload
    // ─────────────────────────────────────────────────────────────────────

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_capture_snapshot_requires_qml() {
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.capture_snapshot().is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_capture_snapshot_after_load() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();
        let snap = engine.capture_snapshot().unwrap();
        assert!(snap.contains("window"));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_reload_qml_requires_qml() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        assert!(engine.reload_qml("import QtQuick\nItem { }", None).is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_reload_qml_after_load() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();
        assert!(
            engine
                .reload_qml("import QtQuick\nRectangle { }", None)
                .is_ok()
        );
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_restore_snapshot_requires_qml() {
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.restore_snapshot(r#"{"window":{}}"#).is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_restore_snapshot_after_load() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();
        assert!(
            engine
                .restore_snapshot(r#"{"window":{"x":0,"y":0,"width":800,"height":600}}"#)
                .is_ok()
        );
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_full_reload_cycle_mock() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.register_view_model("LoginViewModel").unwrap();
        engine
            .sync_state("LoginViewModel", "username", "\"test\"")
            .unwrap();
        engine
            .load_string("import QtQuick\nItem { }", None)
            .unwrap();

        // Capture
        let snap = engine.capture_snapshot().unwrap();
        // Reload
        engine
            .reload_qml("import QtQuick\nRectangle { }", None)
            .unwrap();
        // Rehydrate
        engine
            .sync_state("LoginViewModel", "username", "\"test\"")
            .unwrap();
        // Restore
        engine.restore_snapshot(&snap).unwrap();
    }

    // ─── V2 engine integration tests ────────────────────────────────────

    #[test]
    fn v2_not_enabled_by_default() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        assert!(engine.require_v2().is_err());
    }

    #[test]
    fn v2_register_module_enables_v2() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        assert!(engine.require_v2().is_ok());
    }

    #[test]
    fn v2_sync_state_before_v2_init_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.sync_state_v2(0, "username", "\"test\"");
        assert!(matches!(result, Err(QmltsError::V2NotEnabled)));
    }

    #[test]
    fn v2_handler_registration_requires_v2() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.register_instance_created_handler(Box::new(|_class, _id| {}));
        assert!(matches!(result, Err(QmltsError::V2NotEnabled)));
    }

    #[test]
    fn v2_handler_registration_after_init() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        engine
            .register_instance_created_handler(Box::new(|_class, _id| {}))
            .unwrap();
        engine
            .register_instance_destroying_handler(Box::new(|_id| {}))
            .unwrap();
        engine
            .register_property_changed_handler(Box::new(|_id, _prop, _val| {}))
            .unwrap();
        engine
            .register_command_dispatcher_v2(Box::new(|_id, _class, _cmd, _args| {}))
            .unwrap();
        engine
            .register_lifecycle_handler_v2(Box::new(|_id, _class, _event| {}))
            .unwrap();
    }

    #[test]
    fn v2_handler_registration_rejects_duplicates() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();

        engine
            .register_instance_created_handler(Box::new(|_class, _id| {}))
            .unwrap();
        assert!(matches!(
            engine.register_instance_created_handler(Box::new(|_class, _id| {})),
            Err(QmltsError::V2HandlerAlreadyRegistered(_))
        ));

        engine
            .register_instance_destroying_handler(Box::new(|_id| {}))
            .unwrap();
        assert!(matches!(
            engine.register_instance_destroying_handler(Box::new(|_id| {})),
            Err(QmltsError::V2HandlerAlreadyRegistered(_))
        ));

        engine
            .register_property_changed_handler(Box::new(|_id, _prop, _val| {}))
            .unwrap();
        assert!(matches!(
            engine.register_property_changed_handler(Box::new(|_id, _prop, _val| {})),
            Err(QmltsError::V2HandlerAlreadyRegistered(_))
        ));

        engine
            .register_command_dispatcher_v2(Box::new(|_id, _class, _cmd, _args| {}))
            .unwrap();
        assert!(matches!(
            engine.register_command_dispatcher_v2(Box::new(|_id, _class, _cmd, _args| {})),
            Err(QmltsError::V2HandlerAlreadyRegistered(_))
        ));

        engine
            .register_lifecycle_handler_v2(Box::new(|_id, _class, _event| {}))
            .unwrap();
        assert!(matches!(
            engine.register_lifecycle_handler_v2(Box::new(|_id, _class, _event| {})),
            Err(QmltsError::V2HandlerAlreadyRegistered(_))
        ));
    }

    #[test]
    fn v2_cleanup_clears_router() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        assert!(qmlts_host_generated::v2_dispatch::has_v2_router());
        engine.mark_destroyed();
        // After destroy, our router should be cleared
        // (other tests may have their own routers, so we check engine state)
        assert!(engine.v2_state.is_none());
    }

    #[test]
    fn v2_instance_ready_unknown_instance_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let result = engine.instance_ready(999);
        assert!(matches!(result, Err(QmltsError::V2InstanceNotFound(999))));
    }

    #[test]
    fn v2_emit_effect_before_v2_init_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.emit_effect_v2(0, "loginCompleted", None);
        assert!(matches!(result, Err(QmltsError::V2NotEnabled)));
    }

    #[test]
    fn v2_context_guard_created_when_v2_enabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();

        // Should create a guard
        let guard = engine.create_v2_context_guard();
        assert!(guard.is_some());

        // While guard is alive, init context should be available
        let ctx = qmlts_host_generated::v2_dispatch::take_v2_init_context();
        assert!(ctx.is_some());
        assert_eq!(ctx.unwrap().owner_id, engine.dispatch_owner_id);

        drop(guard);

        // After guard drops, context should be cleared
        let ctx = qmlts_host_generated::v2_dispatch::take_v2_init_context();
        assert!(ctx.is_none());
    }

    #[test]
    fn v2_context_guard_none_when_v2_not_enabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let guard = engine.create_v2_context_guard();
        assert!(guard.is_none());
    }

    // ─── V1 Compat Tests ────────────────────────────────────────

    #[test]
    fn v1_compat_sticky_once_enabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        // First register with v1_compat = true
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], true)
            .unwrap();
        let state = engine.require_v2().unwrap();
        assert!(state.v1_compat);
        // Register again with v1_compat = false — should stay true (sticky)
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let state = engine.require_v2().unwrap();
        assert!(state.v1_compat, "v1_compat should be sticky once enabled");
    }

    #[test]
    fn v1_compat_false_by_default() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let state = engine.require_v2().unwrap();
        assert!(!state.v1_compat);
    }

    #[test]
    fn v1_compat_context_guard_installs_aliases() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], true)
            .unwrap();
        // Creating a V2 context guard should succeed when v1_compat is enabled
        let guard = engine.create_v2_context_guard();
        assert!(
            guard.is_some(),
            "V2 context guard should be created when v1_compat is enabled"
        );
        // The v1_compat_applied flag should start as false (no instance created yet)
        let state = engine.require_v2().unwrap();
        assert!(
            !state.v1_compat_applied.load(Ordering::SeqCst),
            "v1_compat_applied should be false before any instance is created"
        );

        let _guard = guard.unwrap();
        let ctx = qmlts_host_generated::v2_dispatch::take_v2_init_context()
            .expect("V2 init context should be installed while guard is alive");
        let instance_id = (ctx.register_instance)("LoginViewModel", std::ptr::null_mut());
        assert!(instance_id >= 0);

        let state = engine.require_v2().unwrap();
        assert!(
            state.v1_compat_applied.load(Ordering::SeqCst),
            "v1_compat_applied should flip after the first instance is registered"
        );
    }

    #[test]
    fn v1_compat_not_applied_when_disabled() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let guard = engine.create_v2_context_guard();
        assert!(guard.is_some());
        let _guard = guard.unwrap();
        let ctx = qmlts_host_generated::v2_dispatch::take_v2_init_context()
            .expect("V2 init context should be installed while guard is alive");
        let instance_id = (ctx.register_instance)("LoginViewModel", std::ptr::null_mut());
        assert!(instance_id >= 0);

        let state = engine.require_v2().unwrap();
        assert!(
            !state.v1_compat_applied.load(Ordering::SeqCst),
            "v1_compat_applied should always be false when v1_compat is disabled"
        );
    }

    // ─── capture / restore ───────────────────────────────────────────────

    #[test]
    fn capture_v2_not_enabled_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.capture_instance_states();
        assert!(result.is_err());
    }

    #[test]
    fn capture_empty_registry_returns_empty_snapshots() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let json = engine.capture_instance_states().unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        assert_eq!(parsed["snapshots"].as_array().unwrap().len(), 0);
    }

    #[test]
    fn capture_unready_instance_produces_diagnostic() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();

        // Allocate an instance but don't mark ready
        {
            let state = engine.require_v2().unwrap();
            let mut reg = state.registry.lock().unwrap();
            reg.allocate_instance("LoginViewModel", std::ptr::null_mut())
                .unwrap();
        }

        let json = engine.capture_instance_states().unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        assert_eq!(parsed["snapshots"].as_array().unwrap().len(), 0);
        assert!(parsed["diagnostics"].as_array().unwrap().len() >= 1);
        assert_eq!(
            parsed["diagnostics"][0]["code"],
            "HR_INSTANCE_NOT_READY"
        );
    }

    #[test]
    fn capture_ready_instance_returns_snapshot() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        qt_context::mock_clear_v2_properties();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();

        // Allocate and mark ready
        let id = {
            let state = engine.require_v2().unwrap();
            let mut reg = state.registry.lock().unwrap();
            let id = reg
                .allocate_instance("LoginViewModel", 0xABCD as *mut std::ffi::c_void)
                .unwrap();
            reg.mark_ready(id).unwrap();
            id
        };

        // Seed mock properties
        qt_context::mock_seed_v2_properties(
            0xABCD as *mut std::ffi::c_void,
            &[("username", "\"alice\""), ("password", "\"secret\"")],
        );

        let json = engine.capture_instance_states().unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        let snapshots = parsed["snapshots"].as_array().unwrap();
        assert_eq!(snapshots.len(), 1);
        assert_eq!(snapshots[0]["instanceId"], id);
        assert_eq!(snapshots[0]["className"], "LoginViewModel");
        qt_context::mock_clear_v2_properties();
    }

    #[test]
    fn restore_v2_not_enabled_fails() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();
        let result = engine.restore_instance_states("[]");
        assert!(result.is_err());
    }

    #[test]
    fn restore_to_nonexistent_instance_produces_diagnostic() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();
        let pairs =
            r#"[{"instanceId": 999, "properties": {"username": "\"alice\""}}]"#;
        let json = engine.restore_instance_states(pairs).unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        let diags = parsed["diagnostics"].as_array().unwrap();
        assert!(diags.len() >= 1);
        assert_eq!(diags[0]["code"], "HR_INSTANCE_NOT_FOUND");
    }

    #[test]
    fn restore_writes_properties() {
        let _guard = TEST_MUTEX.lock().unwrap();
        reset_app_initialized();
        crate::type_registrar::clear_global_registrations();
        qt_context::mock_clear_v2_properties();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine
            .register_module("QmlTS.Test", 1, 0, &["LoginViewModel".into()], false)
            .unwrap();

        let ptr = 0xBEEF as *mut std::ffi::c_void;
        let id = {
            let state = engine.require_v2().unwrap();
            let mut reg = state.registry.lock().unwrap();
            let id = reg.allocate_instance("LoginViewModel", ptr).unwrap();
            reg.mark_ready(id).unwrap();
            id
        };

        let pairs = format!(
            r#"[{{"instanceId": {}, "properties": {{"username": "\"bob\""}}}}]"#,
            id
        );
        let json = engine.restore_instance_states(&pairs).unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();
        let diags = parsed["diagnostics"].as_array().unwrap();
        // Should succeed with no diagnostics (mock write always returns true)
        assert!(diags.is_empty(), "Expected no diagnostics, got: {:?}", diags);
        qt_context::mock_clear_v2_properties();
    }
}
