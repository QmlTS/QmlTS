//! napi-rs exports for QmlTS Host
//!
//! This module contains all `#[napi]` exported functions that are
//! callable from JavaScript/TypeScript.
//!
//! These exports form the public API of the `@qmlts/host` npm package.

use napi::bindgen_prelude::*;
use napi_derive::napi;
use serde::{Deserialize, Serialize};

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
    Ok(QmltsEngine { inner })
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
//  §2b Bridge Registry
// ─────────────────────────────────────────────────────────────────────────

/// Register a ViewModel bridge type by class name.
///
/// Creates the bridge QObject pair and makes it available as `vm` and
/// `__qmlts` context properties in the QML engine. Must be called
/// before loading QML.
///
/// @param engine - The engine instance.
/// @param class_name - ViewModel class name (e.g., "LoginViewModel").
/// @throws Error if the class name is not found or QML already loaded.
///
/// @example
/// ```typescript
/// registerViewModel(engine, 'LoginViewModel');
/// loadFile(engine, './app/LoginView.qml');
/// ```
#[napi(js_name = "registerViewModel")]
pub fn register_view_model(engine: &mut QmltsEngine, class_name: String) -> Result<()> {
    engine
        .inner
        .register_view_model(&class_name)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Get all registered bridge type names.
///
/// @param engine - The engine instance.
/// @returns Sorted array of ViewModel class names.
///
/// @example
/// ```typescript
/// const types = getRegisteredTypes(engine);
/// // ['CounterViewModel', 'LoginViewModel', 'SearchViewModel']
/// ```
#[napi(js_name = "getRegisteredTypes")]
pub fn get_registered_types(engine: &QmltsEngine) -> Vec<String> {
    engine
        .inner
        .get_registered_types()
        .into_iter()
        .map(String::from)
        .collect()
}

/// Check whether a bridge type is available.
///
/// @param engine - The engine instance.
/// @param class_name - ViewModel class name to check.
/// @returns `true` if the bridge type exists in the registry.
///
/// @example
/// ```typescript
/// if (hasBridgeType(engine, 'LoginViewModel')) {
///   registerViewModel(engine, 'LoginViewModel');
/// }
/// ```
#[napi(js_name = "hasBridgeType")]
pub fn has_bridge_type(engine: &QmltsEngine, class_name: String) -> bool {
    engine.inner.has_bridge_type(&class_name)
}

/// Read an integer property from the active runtime QObject.
///
/// Returns the property value if a bridge is registered and the property
/// exists on the runtime object. Returns `null` if no bridge is active
/// or the property is not found.
///
/// @param engine - The engine instance.
/// @param name - The property name (e.g., "invokeCount", "mountedCount").
/// @returns The integer property value, or `null`.
///
/// @example
/// ```typescript
/// registerViewModel(engine, 'LoginViewModel');
/// loadString(engine, qml);
/// processEvents(engine);
/// const count = activeRuntimeI32Property(engine, 'invokeCount');
/// ```
#[napi(js_name = "activeRuntimeI32Property")]
pub fn active_runtime_i32_property(engine: &QmltsEngine, name: String) -> Option<i32> {
    engine.inner.active_runtime_i32_property(&name)
}

// ─────────────────────────────────────────────────────────────────────────
//  §2c Property Synchronization
// ─────────────────────────────────────────────────────────────────────────

/// Synchronize a single TypeScript property value into the active ViewModel.
///
/// @param engine - The engine instance.
/// @param class_name - ViewModel class name (must match the active bridge).
/// @param property_name - Property name as declared in the schema.
/// @param json_value - JSON-encoded value to set.
/// @throws Error if the class name doesn't match, property not found, or type mismatch.
///
/// @example
/// ```typescript
/// registerViewModel(engine, 'LoginViewModel');
/// syncState(engine, 'LoginViewModel', 'username', '"alice"');
/// ```
#[napi(js_name = "syncState")]
pub fn sync_state(
    engine: &QmltsEngine,
    class_name: String,
    property_name: String,
    json_value: String,
) -> Result<()> {
    engine
        .inner
        .sync_state(&class_name, &property_name, &json_value)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Synchronize a batch of property values into the active ViewModel.
///
/// Uses best-effort semantics: all properties are attempted, failures collected.
///
/// @param engine - The engine instance.
/// @param class_name - ViewModel class name (must match the active bridge).
/// @param json_state_map - JSON object mapping property names to values.
/// @throws Error with details of any failed properties.
///
/// @example
/// ```typescript
/// syncStateBatch(engine, 'LoginViewModel', '{"username":"bob","password":"secret"}');
/// ```
#[napi(js_name = "syncStateBatch")]
pub fn sync_state_batch(
    engine: &QmltsEngine,
    class_name: String,
    json_state_map: String,
) -> Result<()> {
    engine
        .inner
        .sync_state_batch(&class_name, &json_state_map)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Read a property value from the active ViewModel as a JSON string.
///
/// @param engine - The engine instance.
/// @param class_name - ViewModel class name (must match the active bridge).
/// @param property_name - Property name to read.
/// @returns JSON-encoded property value.
/// @throws Error if the class name doesn't match or property not found.
///
/// @example
/// ```typescript
/// const value = getProperty(engine, 'LoginViewModel', 'username');
/// // '"alice"'
/// ```
#[napi(js_name = "getProperty")]
pub fn get_property(
    engine: &QmltsEngine,
    class_name: String,
    property_name: String,
) -> Result<String> {
    engine
        .inner
        .get_property(&class_name, &property_name)
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
//  §4 Command Dispatch & Lifecycle
// ─────────────────────────────────────────────────────────────────────────

/// Register a command invoke handler.
///
/// The handler is called when QML calls `__qmlts.invoke(commandId)`.
/// It receives `(className: string, commandId: number)`.
///
/// @param engine - The engine instance.
/// @param callback - Handler function `(error, className, commandId) => void`.
///
/// @example
/// ```typescript
/// registerInvokeHandler(engine, (className, commandId) => {
///   console.log(`${className} invoked command ${commandId}`);
/// });
/// ```
#[napi(js_name = "registerInvokeHandler")]
pub fn register_invoke_handler(
    engine: &QmltsEngine,
    #[napi(ts_arg_type = "(error: Error | null, className: string, commandId: number) => void")]
    callback: napi::JsFunction,
) -> Result<()> {
    use napi::threadsafe_function::{ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction};

    let tsfn: ThreadsafeFunction<(String, u32), ErrorStrategy::CalleeHandled> = callback
        .create_threadsafe_function(0, |ctx: ThreadSafeCallContext<(String, u32)>| {
            let (class_name, command_id) = ctx.value;
            Ok(vec![
                ctx.env.create_string_from_std(class_name)?.into_unknown(),
                ctx.env.create_uint32(command_id)?.into_unknown(),
            ])
        })?;

    let handler = Box::new(move |class_name: &str, command_id: u32| {
        tsfn.call(
            Ok((class_name.to_string(), command_id)),
            napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking,
        );
    });

    engine
        .inner
        .register_invoke_handler(handler)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Register a lifecycle event handler.
///
/// The handler is called when QML calls `__qmlts.onMounted()` or
/// `__qmlts.onUnmounting()`.
/// It receives `(className: string, event: string)`.
///
/// @param engine - The engine instance.
/// @param callback - Handler function `(error, className, event) => void`.
///
/// @example
/// ```typescript
/// registerLifecycleHandler(engine, (className, event) => {
///   console.log(`${className}: ${event}`);
/// });
/// ```
#[napi(js_name = "registerLifecycleHandler")]
pub fn register_lifecycle_handler(
    engine: &QmltsEngine,
    #[napi(ts_arg_type = "(error: Error | null, className: string, event: string) => void")]
    callback: napi::JsFunction,
) -> Result<()> {
    use napi::threadsafe_function::{ErrorStrategy, ThreadSafeCallContext, ThreadsafeFunction};

    let tsfn: ThreadsafeFunction<(String, String), ErrorStrategy::CalleeHandled> = callback
        .create_threadsafe_function(0, |ctx: ThreadSafeCallContext<(String, String)>| {
            let (class_name, event) = ctx.value;
            Ok(vec![
                ctx.env.create_string_from_std(class_name)?.into_unknown(),
                ctx.env.create_string_from_std(event)?.into_unknown(),
            ])
        })?;

    let handler = Box::new(move |class_name: &str, event: &str| {
        tsfn.call(
            Ok((class_name.to_string(), event.to_string())),
            napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking,
        );
    });

    engine
        .inner
        .register_lifecycle_handler(handler)
        .map_err(|e| -> napi::Error { e.into() })
}

// ─────────────────────────────────────────────────────────────────────────
//  §5 Effect Emission
// ─────────────────────────────────────────────────────────────────────────

/// Emit an effect signal on the active runtime QObject by effect name.
///
/// @param engine - The engine instance.
/// @param className - ViewModel class name (must match the active bridge).
/// @param effectName - Effect name as declared in the schema.
/// @param payloadJson - Optional JSON-encoded payload (e.g., `"[true]"`).
/// @throws Error if the effect name is not found or no bridge is active.
///
/// @example
/// ```typescript
/// emitEffect(engine, 'LoginViewModel', 'onLoginCompleted', '[true]');
/// ```
#[napi(js_name = "emitEffect")]
pub fn emit_effect(
    engine: &QmltsEngine,
    class_name: String,
    effect_name: String,
    payload_json: Option<String>,
) -> Result<()> {
    engine
        .inner
        .emit_effect(&class_name, &effect_name, payload_json.as_deref())
        .map_err(|e| -> napi::Error { e.into() })
}

/// Emit an effect signal on the active runtime QObject by effect ID.
///
/// @param engine - The engine instance.
/// @param className - ViewModel class name (must match the active bridge).
/// @param effectId - Numeric effect ID as declared in the schema.
/// @param payloadJson - Optional JSON-encoded payload.
/// @throws Error if no effect with the given ID exists or no bridge is active.
///
/// @example
/// ```typescript
/// emitEffectById(engine, 'LoginViewModel', 1633635556, '[true]');
/// ```
#[napi(js_name = "emitEffectById")]
pub fn emit_effect_by_id(
    engine: &QmltsEngine,
    class_name: String,
    effect_id: u32,
    payload_json: Option<String>,
) -> Result<()> {
    engine
        .inner
        .emit_effect_by_id(&class_name, effect_id, payload_json.as_deref())
        .map_err(|e| -> napi::Error { e.into() })
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

    #[test]
    fn test_get_registered_types_napi() {
        reset_qt();
        let engine = create_engine(None).unwrap();
        let types = get_registered_types(&engine);
        assert!(types.contains(&"LoginViewModel".to_string()));
        assert!(types.contains(&"CounterViewModel".to_string()));
    }

    #[test]
    fn test_has_bridge_type_napi() {
        reset_qt();
        let engine = create_engine(None).unwrap();
        assert!(has_bridge_type(&engine, "LoginViewModel".to_string()));
        assert!(!has_bridge_type(&engine, "FakeViewModel".to_string()));
    }

    #[test]
    fn test_register_view_model_unknown_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        let result = register_view_model(&mut engine, "NonExistent".to_string());
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(err.reason.contains("Bridge type not found"));
    }

    #[test]
    fn test_register_after_load_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        load_string(&mut engine, "import QtQuick\nItem { }".to_string(), None).unwrap();
        let result = register_view_model(&mut engine, "LoginViewModel".to_string());
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(err.reason.contains("already loaded"));
    }

    #[test]
    fn test_sync_state_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = sync_state(
            &engine,
            "LoginViewModel".to_string(),
            "username".to_string(),
            "\"alice\"".to_string(),
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_sync_state_wrong_class_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = sync_state(
            &engine,
            "CounterViewModel".to_string(),
            "username".to_string(),
            "\"alice\"".to_string(),
        );
        assert!(result.is_err());
    }

    #[test]
    fn test_sync_state_batch_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = sync_state_batch(
            &engine,
            "LoginViewModel".to_string(),
            r#"{"username":"bob","password":"secret"}"#.to_string(),
        );
        assert!(result.is_ok());
    }

    #[test]
    fn test_sync_state_batch_partial_failure_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = sync_state_batch(
            &engine,
            "LoginViewModel".to_string(),
            r#"{"username":"bob","nonexistent":42}"#.to_string(),
        );
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(err.reason.contains("partial failure"));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = emit_effect(
            &engine,
            "LoginViewModel".to_string(),
            "onLoginCompleted".to_string(),
            Some("[true]".to_string()),
        );
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_unknown_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = emit_effect(
            &engine,
            "LoginViewModel".to_string(),
            "nonExistent".to_string(),
            None,
        );
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(err.reason.contains("Effect"));
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_by_id_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = emit_effect_by_id(
            &engine,
            "LoginViewModel".to_string(),
            1_633_635_556,
            Some("[false]".to_string()),
        );
        assert!(result.is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn test_emit_effect_by_id_unknown_napi() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        register_view_model(&mut engine, "LoginViewModel".to_string()).unwrap();

        let result = emit_effect_by_id(&engine, "LoginViewModel".to_string(), 999_999, None);
        assert!(result.is_err());
    }
}
