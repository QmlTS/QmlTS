//! napi-rs exports for QmlTS Host
//!
//! This module contains all `#[napi]` exported functions that are
//! callable from JavaScript/TypeScript.
//!
//! These exports form the public API of the `@qmlts/host` npm package.

use napi::bindgen_prelude::*;
use napi_derive::napi;
use serde::{Deserialize, Serialize};

use crate::bridge_registry::BridgeRegistry;
use crate::engine::{self, EngineConfig as InternalEngineConfig, QmltsEngine as InternalEngine};

// ─────────────────────────────────────────────────────────────────────────
//  Configuration Types
// ─────────────────────────────────────────────────────────────────────────

/// Engine configuration options.
///
/// These options control Qt plugin/import paths and logging behavior.
#[napi(object)]
#[derive(Debug, Clone, Default, Serialize, Deserialize)]
pub struct EngineConfig {
    /// Qt plugin search paths.
    #[napi(ts_type = "string[] | undefined")]
    pub plugin_paths: Option<Vec<String>>,
    /// QML import search paths.
    #[napi(ts_type = "string[] | undefined")]
    pub import_paths: Option<Vec<String>>,
    /// Enable Qt logging forwarding.
    #[napi(ts_type = "boolean | undefined")]
    pub enable_logging: Option<bool>,
}

impl From<EngineConfig> for InternalEngineConfig {
    fn from(config: EngineConfig) -> Self {
        InternalEngineConfig {
            plugin_paths: config.plugin_paths.unwrap_or_default(),
            import_paths: config.import_paths.unwrap_or_default(),
            enable_logging: config.enable_logging.unwrap_or(false),
        }
    }
}

// ─────────────────────────────────────────────────────────────────────────
//  Engine Class
// ─────────────────────────────────────────────────────────────────────────

/// QmlTS Engine instance.
///
/// This class wraps Qt's QGuiApplication and QQmlEngine.
/// It is created via `createEngine()` and automatically cleaned up
/// when garbage collected, or can be explicitly destroyed via `destroyEngine()`.
///
/// @example
/// ```typescript
/// const engine = createEngine();
/// loadString(engine, 'import QtQuick; Item { }');
/// processEvents(engine);
/// destroyEngine(engine);
/// ```
#[napi]
pub struct QmltsEngine {
    inner: InternalEngine,
    registry: BridgeRegistry,
}

// ─────────────────────────────────────────────────────────────────────────
//  §1 Engine Lifecycle
// ─────────────────────────────────────────────────────────────────────────

/// Create a new QmlTS engine instance.
///
/// Initializes Qt's QGuiApplication (if not already initialized) and
/// creates a new QQmlEngine for loading and running QML documents.
///
/// @param config - Optional engine configuration.
/// @returns A new QmltsEngine instance.
/// @throws Error if Qt initialization fails.
///
/// @example
/// ```typescript
/// // Create with defaults
/// const engine = createEngine();
///
/// // Create with custom paths
/// const engine = createEngine({
///   importPaths: ['./qml'],
///   enableLogging: true
/// });
/// ```
#[napi]
pub fn create_engine(config: Option<EngineConfig>) -> Result<QmltsEngine> {
    let internal_config = config.map(Into::into);
    let inner = InternalEngine::new(internal_config).map_err(|e| -> napi::Error { e.into() })?;
    let registry = BridgeRegistry::new();
    Ok(QmltsEngine { inner, registry })
}

/// Destroy an engine instance.
///
/// Explicitly releases engine resources. This is optional since the engine
/// will be automatically cleaned up when garbage collected.
///
/// @param engine - The engine instance to destroy.
///
/// @example
/// ```typescript
/// const engine = createEngine();
/// // ... use engine ...
/// destroyEngine(engine);
/// ```
#[napi]
pub fn destroy_engine(engine: &mut QmltsEngine) -> Result<()> {
    // Mark engine as destroyed - actual cleanup happens in Drop
    // We use a reference here because napi-rs class instances
    // are owned by the JavaScript runtime
    engine.inner.mark_destroyed();
    Ok(())
}

/// Get the QmlTS runtime version.
///
/// @returns Version string (e.g., "0.1.0").
///
/// @example
/// ```typescript
/// console.log(`QmlTS v${version()}`);
/// ```
#[napi]
pub fn version() -> String {
    engine::VERSION.to_string()
}

/// Get the Qt runtime version.
///
/// @returns Qt version string (e.g., "6.11.0").
///
/// @example
/// ```typescript
/// console.log(`Qt ${qtVersion()}`);
/// ```
#[napi(js_name = "qtVersion")]
pub fn qt_version() -> String {
    engine::qt_version()
}

// ─────────────────────────────────────────────────────────────────────────
//  §2 QML Loading
// ─────────────────────────────────────────────────────────────────────────

/// Load a QML document from a file.
///
/// @param engine - The engine instance.
/// @param path - Path to the QML file.
/// @throws Error if the file is not found or contains QML errors.
///
/// @example
/// ```typescript
/// loadFile(engine, './app/Main.qml');
/// ```
#[napi(js_name = "loadFile")]
pub fn load_file(engine: &mut QmltsEngine, path: String) -> Result<()> {
    engine
        .inner
        .load_file(&path)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Load a QML document from a string.
///
/// @param engine - The engine instance.
/// @param qml_source - QML source code.
/// @param base_url - Optional base URL for resolving relative imports.
/// @throws Error if the QML contains syntax errors.
///
/// @example
/// ```typescript
/// loadString(engine, `
///   import QtQuick
///   Item {
///     width: 400
///     height: 300
///   }
/// `);
/// ```
#[napi(js_name = "loadString")]
pub fn load_string(
    engine: &mut QmltsEngine,
    qml_source: String,
    base_url: Option<String>,
) -> Result<()> {
    engine
        .inner
        .load_string(&qml_source, base_url.as_deref())
        .map_err(|e| -> napi::Error { e.into() })
}

/// Add a QML import search path.
///
/// @param engine - The engine instance.
/// @param path - Directory path to add to import search paths.
///
/// @example
/// ```typescript
/// addImportPath(engine, './qml/imports');
/// ```
#[napi(js_name = "addImportPath")]
pub fn add_import_path(engine: &mut QmltsEngine, path: String) -> Result<()> {
    engine
        .inner
        .add_import_path(&path)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Add a Qt plugin search path.
///
/// @param engine - The engine instance.
/// @param path - Directory path to add to plugin search paths.
///
/// @example
/// ```typescript
/// addPluginPath(engine, '/opt/qt/plugins');
/// ```
#[napi(js_name = "addPluginPath")]
pub fn add_plugin_path(engine: &mut QmltsEngine, path: String) -> Result<()> {
    engine
        .inner
        .add_plugin_path(&path)
        .map_err(|e| -> napi::Error { e.into() })
}

// ─────────────────────────────────────────────────────────────────────────
//  §3 Event Loop
// ─────────────────────────────────────────────────────────────────────────

/// Start the Qt event loop (blocking).
///
/// This starts the Qt event loop and blocks until `quit()` is called.
/// Use `processEvents()` for non-blocking event processing.
///
/// @param engine - The engine instance.
/// @returns Exit code from the event loop.
///
/// @example
/// ```typescript
/// const exitCode = exec(engine);
/// console.log(`Exited with code ${exitCode}`);
/// ```
#[napi]
pub fn exec(engine: &QmltsEngine) -> Result<i32> {
    engine.inner.exec().map_err(|e| -> napi::Error { e.into() })
}

/// Request the Qt event loop to quit.
///
/// @param engine - The engine instance.
/// @param exit_code - Optional exit code (default: 0).
///
/// @example
/// ```typescript
/// quit(engine, 0);
/// ```
#[napi]
pub fn quit(engine: &QmltsEngine, exit_code: Option<i32>) -> Result<()> {
    engine
        .inner
        .quit(exit_code)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Process all pending Qt events.
///
/// This processes the Qt event queue and returns immediately.
/// Call this in a loop or timer for non-blocking event processing.
///
/// @param engine - The engine instance.
///
/// @example
/// ```typescript
/// // Non-blocking event processing
/// setInterval(() => processEvents(engine), 16); // ~60fps
/// ```
#[napi(js_name = "processEvents")]
pub fn process_events(engine: &QmltsEngine) -> Result<()> {
    engine
        .inner
        .process_events()
        .map_err(|e| -> napi::Error { e.into() })
}

/// Process Qt events for up to the specified duration.
///
/// @param engine - The engine instance.
/// @param timeout_ms - Maximum time to process events, in milliseconds.
///
/// @example
/// ```typescript
/// processEventsFor(engine, 100); // Process for up to 100ms
/// ```
#[napi(js_name = "processEventsFor")]
pub fn process_events_for(engine: &QmltsEngine, timeout_ms: u32) -> Result<()> {
    engine
        .inner
        .process_events_for(timeout_ms)
        .map_err(|e| -> napi::Error { e.into() })
}

// ─────────────────────────────────────────────────────────────────────────
//  §4 Bridge Registry
// ─────────────────────────────────────────────────────────────────────────

/// Get the list of registered ViewModel types.
///
/// @param engine - The engine instance.
/// @returns Array of registered ViewModel class names.
///
/// @example
/// ```typescript
/// const types = getRegisteredViewModels(engine);
/// // ['CounterViewModel', 'LoginViewModel']
/// ```
#[napi(js_name = "getRegisteredViewModels")]
pub fn get_registered_viewmodels(engine: &QmltsEngine) -> Vec<String> {
    engine.registry.registered_types()
}

/// Check if a ViewModel type is registered.
///
/// @param engine - The engine instance.
/// @param class_name - The ViewModel class name to check.
/// @returns True if the ViewModel type is registered.
///
/// @example
/// ```typescript
/// if (isViewModelRegistered(engine, 'CounterViewModel')) {
///   activateViewModel(engine, 'CounterViewModel');
/// }
/// ```
#[napi(js_name = "isViewModelRegistered")]
pub fn is_viewmodel_registered(engine: &QmltsEngine, class_name: String) -> bool {
    engine.registry.is_registered(&class_name)
}

/// Activate a ViewModel by class name.
///
/// Creates a new instance of the specified ViewModel and makes it
/// the active ViewModel for the engine. The ViewModel's properties
/// and commands become available via `getVmProperty`, `setVmProperty`,
/// and `invokeVmCommand`.
///
/// @param engine - The engine instance.
/// @param class_name - The ViewModel class name to activate.
/// @throws Error if the ViewModel type is not registered.
///
/// @example
/// ```typescript
/// activateViewModel(engine, 'CounterViewModel');
/// ```
#[napi(js_name = "activateViewModel")]
pub fn activate_viewmodel(engine: &mut QmltsEngine, class_name: String) -> Result<()> {
    engine
        .registry
        .activate(&class_name)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Deactivate the current ViewModel.
///
/// Clears the active ViewModel. After calling this, `getVmProperty`,
/// `setVmProperty`, and `invokeVmCommand` will fail until a new
/// ViewModel is activated.
///
/// @param engine - The engine instance.
///
/// @example
/// ```typescript
/// deactivateViewModel(engine);
/// ```
#[napi(js_name = "deactivateViewModel")]
pub fn deactivate_viewmodel(engine: &mut QmltsEngine) {
    engine.registry.deactivate();
}

/// Check if there is an active ViewModel.
///
/// @param engine - The engine instance.
/// @returns True if a ViewModel is currently active.
///
/// @example
/// ```typescript
/// if (hasActiveViewModel(engine)) {
///   const count = getVmProperty(engine, 'count');
/// }
/// ```
#[napi(js_name = "hasActiveViewModel")]
pub fn has_active_viewmodel(engine: &QmltsEngine) -> bool {
    engine.registry.has_active_vm()
}

/// Get the class name of the active ViewModel.
///
/// @param engine - The engine instance.
/// @returns The class name of the active ViewModel, or null if none.
///
/// @example
/// ```typescript
/// const vmName = getActiveViewModelName(engine);
/// // 'CounterViewModel' or null
/// ```
#[napi(js_name = "getActiveViewModelName")]
pub fn get_active_viewmodel_name(engine: &QmltsEngine) -> Option<String> {
    engine.registry.active_class_name().map(|s| s.to_string())
}

/// Get the property names of the active ViewModel.
///
/// @param engine - The engine instance.
/// @returns Array of property names.
/// @throws Error if no ViewModel is active.
///
/// @example
/// ```typescript
/// const props = getVmPropertyNames(engine);
/// // ['count'] for CounterViewModel
/// ```
#[napi(js_name = "getVmPropertyNames")]
pub fn get_vm_property_names(engine: &QmltsEngine) -> Result<Vec<String>> {
    engine
        .registry
        .property_names()
        .map(|names| names.iter().map(|s| (*s).to_string()).collect())
        .map_err(|e| -> napi::Error { e.into() })
}

/// Get the command names of the active ViewModel.
///
/// @param engine - The engine instance.
/// @returns Array of command names.
/// @throws Error if no ViewModel is active.
///
/// @example
/// ```typescript
/// const cmds = getVmCommandNames(engine);
/// // ['increment', 'decrement', 'reset'] for CounterViewModel
/// ```
#[napi(js_name = "getVmCommandNames")]
pub fn get_vm_command_names(engine: &QmltsEngine) -> Result<Vec<String>> {
    engine
        .registry
        .command_names()
        .map(|names| names.iter().map(|s| (*s).to_string()).collect())
        .map_err(|e| -> napi::Error { e.into() })
}

/// Get a property value from the active ViewModel.
///
/// @param engine - The engine instance.
/// @param name - The property name.
/// @returns The property value as a JSON string.
/// @throws Error if no ViewModel is active or property not found.
///
/// @example
/// ```typescript
/// const countJson = getVmProperty(engine, 'count');
/// const count = JSON.parse(countJson);
/// ```
#[napi(js_name = "getVmProperty")]
pub fn get_vm_property(engine: &QmltsEngine, name: String) -> Result<String> {
    let value = engine
        .registry
        .get_property(&name)
        .map_err(|e| -> napi::Error { e.into() })?;
    serde_json::to_string(&value)
        .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))
}

/// Set a property value on the active ViewModel.
///
/// @param engine - The engine instance.
/// @param name - The property name.
/// @param value_json - The property value as a JSON string.
/// @throws Error if no ViewModel is active, property not found, or type mismatch.
///
/// @example
/// ```typescript
/// setVmProperty(engine, 'count', '42');
/// setVmProperty(engine, 'username', '"testuser"');
/// ```
#[napi(js_name = "setVmProperty")]
pub fn set_vm_property(engine: &mut QmltsEngine, name: String, value_json: String) -> Result<()> {
    let value: serde_json::Value = serde_json::from_str(&value_json)
        .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))?;
    engine
        .registry
        .set_property(&name, value)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Invoke a command on the active ViewModel.
///
/// @param engine - The engine instance.
/// @param name - The command name.
/// @param args_json - Optional command arguments as a JSON string.
/// @returns The command result as a JSON string.
/// @throws Error if no ViewModel is active or command fails.
///
/// @example
/// ```typescript
/// invokeVmCommand(engine, 'increment', null);
/// const result = invokeVmCommand(engine, 'login', '{"remember": true}');
/// ```
#[napi(js_name = "invokeVmCommand")]
pub fn invoke_vm_command(
    engine: &mut QmltsEngine,
    name: String,
    args_json: Option<String>,
) -> Result<String> {
    let args = args_json
        .map(|s| serde_json::from_str(&s))
        .transpose()
        .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))?;
    let result = engine
        .registry
        .invoke_command(&name, args)
        .map_err(|e| -> napi::Error { e.into() })?;
    serde_json::to_string(&result)
        .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))
}

/// Check if the runtime is mounted.
///
/// @param engine - The engine instance.
/// @returns True if the runtime is mounted.
///
/// @example
/// ```typescript
/// if (isRuntimeMounted(engine)) {
///   // Component is ready
/// }
/// ```
#[napi(js_name = "isRuntimeMounted")]
pub fn is_runtime_mounted(engine: &QmltsEngine) -> bool {
    engine.registry.is_mounted()
}

/// Queue an effect to be triggered.
///
/// @param engine - The engine instance.
/// @param effect_id - The effect ID to queue.
///
/// @example
/// ```typescript
/// queueEffect(engine, 'effect_1');
/// ```
#[napi(js_name = "queueEffect")]
pub fn queue_effect(engine: &mut QmltsEngine, effect_id: String) {
    engine.registry.queue_effect(&effect_id);
}

/// Drain all queued effects.
///
/// @param engine - The engine instance.
/// @returns Array of effect IDs that were queued.
///
/// @example
/// ```typescript
/// const effects = drainEffects(engine);
/// for (const effectId of effects) {
///   // Trigger effect
/// }
/// ```
#[napi(js_name = "drainEffects")]
pub fn drain_effects(engine: &mut QmltsEngine) -> Vec<String> {
    engine.registry.drain_effects()
}

// ─────────────────────────────────────────────────────────────────────────
//  Tests
// ─────────────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;

    fn reset_qt() {
        crate::engine::tests_support::reset_app_initialized();
    }

    #[test]
    fn test_version_not_empty() {
        assert!(!version().is_empty());
    }

    #[test]
    fn test_qt_version_format() {
        let v = qt_version();
        assert!(v.contains('.'), "Qt version should contain dots: {v}");
    }

    #[test]
    fn test_create_and_destroy_engine() {
        reset_qt();
        let engine = create_engine(None);
        assert!(engine.is_ok());

        let mut engine = engine.unwrap();
        let result = destroy_engine(&mut engine);
        assert!(result.is_ok());
    }

    #[test]
    fn test_create_engine_with_config() {
        reset_qt();
        let config = EngineConfig {
            plugin_paths: Some(vec!["/opt/qt/plugins".to_string()]),
            import_paths: Some(vec!["/app/qml".to_string()]),
            enable_logging: Some(true),
        };

        let engine = create_engine(Some(config));
        assert!(engine.is_ok());
    }

    #[test]
    fn test_load_string_valid() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        let result = load_string(&mut engine, "import QtQuick\nItem { }".to_string(), None);
        assert!(result.is_ok());
    }

    #[test]
    fn test_load_string_invalid() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        let result = load_string(&mut engine, String::new(), None);
        assert!(result.is_err());
    }

    #[test]
    fn test_add_paths() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();

        let result = add_import_path(&mut engine, "/app/qml".to_string());
        assert!(result.is_ok());

        let result = add_plugin_path(&mut engine, "/opt/qt/plugins".to_string());
        assert!(result.is_ok());
    }

    #[test]
    fn test_process_events() {
        reset_qt();
        let engine = create_engine(None).unwrap();

        let result = process_events(&engine);
        assert!(result.is_ok());

        let result = process_events_for(&engine, 100);
        assert!(result.is_ok());
    }

    #[test]
    fn test_operations_fail_after_destroy() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        destroy_engine(&mut engine).unwrap();

        let result = load_string(&mut engine, "import QtQuick\nItem { }".to_string(), None);
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(err.reason.contains("destroyed"));
    }
}
