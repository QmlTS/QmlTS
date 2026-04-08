//! Error types for QmlTS Host
//!
//! All errors are converted to napi::Error for JS interop.

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

    /// ViewModel type not found in registry.
    #[error("ViewModel '{0}' not found in registry")]
    ViewModelNotFound(String),

    /// No active ViewModel.
    #[error("No active ViewModel - call activateViewModel first")]
    NoActiveViewModel,

    /// Property not found on ViewModel (simple form).
    #[error("Property '{0}' not found")]
    PropertyNotFound(String),

    /// Property not found on ViewModel (detailed form).
    #[error("Property '{prop}' not found on ViewModel '{vm}'")]
    PropertyNotFoundDetailed { vm: String, prop: String },

    /// Type mismatch when setting property.
    #[error("Type mismatch: expected {expected}, got {actual} for '{prop}' on '{vm}'")]
    TypeMismatch {
        vm: String,
        prop: String,
        expected: String,
        actual: String,
    },

    /// Command invocation failed.
    #[error("Command failed: {0}")]
    CommandFailed(String),

    /// Schema validation failed.
    #[error("Schema validation failed: {0}")]
    SchemaValidation(String),

    /// Command dispatcher not registered.
    #[error("Command dispatcher not registered")]
    DispatcherNotRegistered,

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
}

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
        let err = QmltsError::PropertyNotFoundDetailed {
            vm: "LoginViewModel".to_string(),
            prop: "username".to_string(),
        };
        assert_eq!(
            err.to_string(),
            "Property 'username' not found on ViewModel 'LoginViewModel'"
        );
    }

    #[test]
    fn test_viewmodel_not_found_display() {
        let err = QmltsError::ViewModelNotFound("UnknownVM".to_string());
        assert_eq!(
            err.to_string(),
            "ViewModel 'UnknownVM' not found in registry"
        );
    }

    #[test]
    fn test_no_active_vm_display() {
        let err = QmltsError::NoActiveViewModel;
        assert_eq!(
            err.to_string(),
            "No active ViewModel - call activateViewModel first"
        );
    }

    #[test]
    fn test_command_failed_display() {
        let err = QmltsError::CommandFailed("increment: overflow".to_string());
        assert_eq!(err.to_string(), "Command failed: increment: overflow");
    }

    #[test]
    fn test_napi_error_conversion() {
        let err = QmltsError::EngineNotInitialized;
        let napi_err: napi::Error = err.into();
        assert_eq!(napi_err.status, napi::Status::GenericFailure);
        assert!(napi_err.reason.contains("Engine not initialized"));
    }
}
