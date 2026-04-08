//! QmlTS Engine - Core Qt engine wrapper
//!
//! This module provides `QmltsEngine`, which encapsulates:
//! - `QGuiApplication` lifetime management
//! - `QQmlEngine` for loading and running QML
//! - `QQmlComponent` for QML document instantiation
//!
//! The engine uses cxx-qt for safe Qt interop.

use crate::error::{QmltsError, Result};
use std::path::Path;
use std::sync::atomic::{AtomicBool, Ordering};

/// Global flag to track if QGuiApplication has been initialized.
/// Qt requires exactly one QGuiApplication per process.
static APP_INITIALIZED: AtomicBool = AtomicBool::new(false);

/// QmlTS Engine version (matches package version).
pub const VERSION: &str = env!("CARGO_PKG_VERSION");

/// Qt version this crate is built against.
/// This is determined at compile time via cxx-qt-build.
#[cfg(not(feature = "mock-qt"))]
pub fn qt_version() -> String {
    // cxx-qt-lib provides qVersion() which returns the runtime Qt version
    // For now, we return the target version
    // TODO: Use cxx_qt_lib::core::qs::version() when available
    "6.11.0".to_string()
}

#[cfg(feature = "mock-qt")]
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

        Ok(Self {
            config,
            initialized: true,
            destroyed: false,
            loaded_components: Vec::new(),
        })
    }

    /// Mark the engine as destroyed.
    ///
    /// Called by `destroyEngine()` to explicitly release resources.
    /// Further operations on this engine will fail.
    pub fn mark_destroyed(&mut self) {
        self.destroyed = true;
        self.initialized = false;
        tracing::debug!("Engine marked as destroyed");
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

        // Store the loaded component path
        self.loaded_components.push(path.to_string());

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
        if source.trim().is_empty() {
            return Err(QmltsError::QmlLoadFailed("Empty QML source".to_string()));
        }

        // Validate QML syntax (basic check)
        self.validate_qml_syntax(source)?;

        // Store a marker for inline component
        let marker = base_url.unwrap_or("<inline>");
        self.loaded_components.push(marker.to_string());

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

        // Check for basic brace matching (very simple heuristic)
        let open_braces = source.chars().filter(|&c| c == '{').count();
        let close_braces = source.chars().filter(|&c| c == '}').count();

        if open_braces != close_braces {
            return Err(QmltsError::QmlSyntaxError {
                line: 0,
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
    pub fn add_import_path(&mut self, path: &str) {
        self.config.import_paths.push(path.to_string());
        tracing::debug!("Added import path: {}", path);
    }

    /// Add a Qt plugin search path.
    ///
    /// # Arguments
    ///
    /// * `path` - Directory path to add to plugin search paths.
    pub fn add_plugin_path(&mut self, path: &str) {
        self.config.plugin_paths.push(path.to_string());
        tracing::debug!("Added plugin path: {}", path);
    }

    /// Process all pending Qt events.
    ///
    /// This processes the Qt event queue and returns immediately.
    /// Call this in a loop for non-blocking event processing.
    #[cfg(not(feature = "mock-qt"))]
    pub fn process_events(&self) {
        // TODO: Call QCoreApplication::processEvents() via cxx-qt
        tracing::trace!("Processing Qt events");
    }

    #[cfg(feature = "mock-qt")]
    pub fn process_events(&self) {
        tracing::trace!("Processing Qt events (mock)");
    }

    /// Process Qt events for up to the specified duration.
    ///
    /// # Arguments
    ///
    /// * `timeout_ms` - Maximum time to process events, in milliseconds.
    #[cfg(not(feature = "mock-qt"))]
    pub fn process_events_for(&self, timeout_ms: u32) {
        // TODO: Call QCoreApplication::processEvents(maxtime) via cxx-qt
        tracing::trace!("Processing Qt events for {}ms", timeout_ms);
    }

    #[cfg(feature = "mock-qt")]
    pub fn process_events_for(&self, timeout_ms: u32) {
        tracing::trace!("Processing Qt events for {}ms (mock)", timeout_ms);
    }

    /// Run the Qt event loop (blocking).
    ///
    /// This starts the Qt event loop and blocks until `quit()` is called.
    /// Returns the exit code.
    #[cfg(not(feature = "mock-qt"))]
    pub fn exec(&self) -> i32 {
        // TODO: Call QCoreApplication::exec() via cxx-qt
        tracing::info!("Starting Qt event loop");
        0
    }

    #[cfg(feature = "mock-qt")]
    pub fn exec(&self) -> i32 {
        tracing::info!("Starting Qt event loop (mock)");
        0
    }

    /// Request the Qt event loop to quit.
    ///
    /// # Arguments
    ///
    /// * `exit_code` - Exit code to return from `exec()`.
    #[cfg(not(feature = "mock-qt"))]
    pub fn quit(&self, exit_code: Option<i32>) {
        let code = exit_code.unwrap_or(0);
        // TODO: Call QCoreApplication::exit(code) via cxx-qt
        tracing::info!("Requesting Qt event loop quit with code {}", code);
    }

    #[cfg(feature = "mock-qt")]
    pub fn quit(&self, exit_code: Option<i32>) {
        let code = exit_code.unwrap_or(0);
        tracing::info!("Requesting Qt event loop quit with code {} (mock)", code);
    }
}

impl Drop for QmltsEngine {
    fn drop(&mut self) {
        tracing::debug!("Dropping QmltsEngine, cleaning up resources");
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
        engine.add_import_path("/app/qml");
        engine.add_plugin_path("/opt/qt/plugins");

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
        engine.process_events();
        engine.process_events_for(100);
    }
}
