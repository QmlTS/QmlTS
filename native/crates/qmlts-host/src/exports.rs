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
    engine.inner.add_import_path(&path);
    Ok(())
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
    engine.inner.add_plugin_path(&path);
    Ok(())
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
    Ok(engine.inner.exec())
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
    engine.inner.quit(exit_code);
    Ok(())
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
    engine.inner.process_events();
    Ok(())
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
    engine.inner.process_events_for(timeout_ms);
    Ok(())
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
}
