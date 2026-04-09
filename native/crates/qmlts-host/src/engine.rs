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
use crate::property_sync;
use crate::qt_context;
use qmlts_host_generated::{BridgeInstance, ViewModelSchema};
use std::path::Path;
#[cfg(not(feature = "mock-qt"))]
use std::ptr;
use std::sync::atomic::{AtomicBool, Ordering};

/// Global flag to track if QGuiApplication has been initialized.
/// Qt requires exactly one QGuiApplication per process.
static APP_INITIALIZED: AtomicBool = AtomicBool::new(false);

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

        #[cfg(not(feature = "mock-qt"))]
        {
            if self.engine_ptr.is_null() {
                return Err(QmltsError::QtInitFailed(
                    "QQmlApplicationEngine was not created".to_string(),
                ));
            }

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
            if !vm_set || !runtime_set {
                return Err(QmltsError::Internal(
                    "Failed to publish bridge objects into the QML context".to_string(),
                ));
            }
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
    pub fn register_invoke_handler(&self, handler: Box<dyn Fn(&str, u32) + Send>) -> Result<()> {
        self.ensure_alive()?;
        qmlts_host_generated::dispatch::set_command_dispatcher(handler);
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
        handler: Box<dyn Fn(&str, &str) + Send>,
    ) -> Result<()> {
        self.ensure_alive()?;
        qmlts_host_generated::dispatch::set_lifecycle_dispatcher(handler);
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
        let ok = qt_context::emit_signal(runtime_ptr, &effect.qml_name, payload_json);
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
        let ok = qt_context::emit_signal(runtime_ptr, &effect.qml_name, payload_json);
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

    fn find_brace_mismatch_line(&self, source: &str) -> Option<u32> {
        let mut open_lines = Vec::new();

        for (line_index, line) in source.lines().enumerate() {
            let line_number = u32::try_from(line_index + 1).unwrap_or(u32::MAX);
            for ch in line.chars() {
                match ch {
                    '{' => open_lines.push(line_number),
                    '}' => {
                        if open_lines.pop().is_none() {
                            return Some(line_number);
                        }
                    }
                    _ => {}
                }
            }
        }

        open_lines.first().copied()
    }

    fn cleanup_qt_resources(&mut self) {
        qmlts_host_generated::dispatch::clear_dispatchers();

        #[cfg(not(feature = "mock-qt"))]
        {
            if !self.engine_ptr.is_null() {
                unsafe {
                    let _ = qt_context::clear_context_property(self.engine_ptr, "vm");
                    let _ = qt_context::clear_context_property(self.engine_ptr, "__qmlts");
                }
                self.active_bridge = None;
                self.active_schema = None;
                unsafe {
                    qt_context::destroy_engine(self.engine_ptr);
                }
                self.engine_ptr = ptr::null_mut();
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
    use tests_support::reset_app_initialized;

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
        assert_eq!(types, vec!["CounterViewModel", "LoginViewModel"]);
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
        reset_app_initialized();

        let mut engine = QmltsEngine::new(None).unwrap();
        engine.mark_destroyed();
        let result = engine.register_invoke_handler(Box::new(|_class, _id| {}));
        assert!(result.is_err());
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
}
