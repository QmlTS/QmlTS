//! Error types for QmlTS Host.

use thiserror::Error;

/// Errors that can occur in QmlTS Host operations.
#[derive(Error, Debug)]
pub enum QmltsError {
    /// Engine has not been initialized.
    #[error("Engine not initialized")]
    EngineNotInitialized,

    /// Engine was explicitly destroyed and can no longer be used.
    #[error("Engine has been destroyed")]
    EngineDestroyed,

    /// QML document failed to load.
    #[error("QML load failed: {0}")]
    QmlLoadFailed(String),

    /// QML document contains syntax errors.
    #[error("QML syntax error at line {line}: {message}")]
    QmlSyntaxError { line: u32, message: String },

    /// File not found.
    #[error("File not found: {0}")]
    FileNotFound(String),

    /// File read error.
    #[error("Failed to read file '{path}': {message}")]
    FileReadError { path: String, message: String },

    /// Property not found on ViewModel.
    #[error("Property '{prop}' not found on ViewModel '{vm}'")]
    PropertyNotFound { vm: String, prop: String },

    /// Type mismatch when setting property.
    #[error("Type mismatch: expected {expected}, got {actual} for '{prop}' on '{vm}'")]
    TypeMismatch {
        vm: String,
        prop: String,
        expected: String,
        actual: String,
    },

    /// Schema validation failed.
    #[error("Schema validation failed: {0}")]
    SchemaValidation(String),

    /// Command dispatcher not registered.
    #[error("Command dispatcher not registered")]
    DispatcherNotRegistered,

    /// Lifecycle callback not registered.
    #[error("Lifecycle callback not registered")]
    LifecycleCallbackNotRegistered,

    /// Effect not found on ViewModel.
    #[error("Effect '{effect}' not found on ViewModel '{vm}'")]
    EffectNotFound { vm: String, effect: String },

    /// List model operation error.
    #[error("List model error: {0}")]
    ListModelError(String),

    /// Hot reload failed.
    #[error("Hot reload failed: {0}")]
    HotReloadFailed(String),

    /// Qt initialization failed.
    #[error("Qt initialization failed: {0}")]
    QtInitFailed(String),

    /// Internal error.
    #[error("Internal error: {0}")]
    Internal(String),

    /// Bridge type not found in the generated registry.
    #[error("Bridge type not found: '{0}'")]
    BridgeTypeNotFound(String),

    /// Cannot register bridge types after engine has loaded QML.
    #[error("Cannot register bridge type: engine has already loaded QML")]
    BridgeAlreadyLoaded,

    /// One or more properties failed during batch sync.
    /// Successfully synced properties remain written.
    #[error("Batch sync partial failure ({count} of {total} failed): {details}")]
    BatchSyncPartialFailure {
        count: usize,
        total: usize,
        details: String,
    },
}

#[cfg(feature = "napi")]
impl From<QmltsError> for napi::Error {
    fn from(e: QmltsError) -> Self {
        napi::Error::new(napi::Status::GenericFailure, e.to_string())
    }
}

/// Result type for QmlTS Host operations.
pub type Result<T> = std::result::Result<T, QmltsError>;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_error_display() {
        let err = QmltsError::QmlLoadFailed("test.qml: invalid syntax".to_string());
        assert_eq!(err.to_string(), "QML load failed: test.qml: invalid syntax");
    }

    #[test]
    fn test_property_not_found_display() {
        let err = QmltsError::PropertyNotFound {
            vm: "LoginViewModel".to_string(),
            prop: "username".to_string(),
        };
        assert_eq!(
            err.to_string(),
            "Property 'username' not found on ViewModel 'LoginViewModel'"
        );
    }

    #[cfg(feature = "napi")]
    #[test]
    fn test_napi_error_conversion() {
        let err = QmltsError::EngineNotInitialized;
        let napi_err: napi::Error = err.into();
        assert_eq!(napi_err.status, napi::Status::GenericFailure);
        assert!(napi_err.reason.contains("Engine not initialized"));
    }

    #[test]
    fn test_bridge_type_not_found_display() {
        let err = QmltsError::BridgeTypeNotFound("FooViewModel".to_string());
        assert_eq!(err.to_string(), "Bridge type not found: 'FooViewModel'");
    }

    #[test]
    fn test_bridge_already_loaded_display() {
        let err = QmltsError::BridgeAlreadyLoaded;
        assert_eq!(
            err.to_string(),
            "Cannot register bridge type: engine has already loaded QML"
        );
    }

    #[test]
    fn test_batch_sync_partial_failure_display() {
        let err = QmltsError::BatchSyncPartialFailure {
            count: 1,
            total: 3,
            details: "Property 'foo' not found on ViewModel 'X'".to_string(),
        };
        assert_eq!(
            err.to_string(),
            "Batch sync partial failure (1 of 3 failed): Property 'foo' not found on ViewModel 'X'"
        );
    }
}
