//! List model handle type for QmlTS list operations.
//!
//! Wraps the C++ `QmltsListModel` (a `QAbstractListModel` subclass) with
//! runtime-defined roles and JSON-based row storage.

use crate::error::{QmltsError, Result};
use crate::qt_context;
use std::ffi::c_void;

/// Opaque handle to a `QmltsListModel` (C++ `QAbstractListModel` subclass).
///
/// The handle owns the underlying C++ object and destroys it on drop.
pub struct ListModelHandle {
    ptr: *mut c_void,
}

impl ListModelHandle {
    /// Create a new list model with the given schema JSON.
    ///
    /// Schema format: `{"roles": ["name", "value", "checked"]}`
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the schema is invalid or model creation fails.
    pub fn new(schema_json: &str) -> Result<Self> {
        // Validate schema before calling C++
        let parsed: serde_json::Value = serde_json::from_str(schema_json)
            .map_err(|e| QmltsError::ListModelError(format!("Invalid schema JSON: {e}")))?;
        if let Some(roles) = parsed.get("roles").and_then(|v| v.as_array()) {
            let mut seen = std::collections::HashSet::new();
            for role in roles {
                if let Some(name) = role.as_str() {
                    if !seen.insert(name) {
                        return Err(QmltsError::ListModelError(format!(
                            "Duplicate role name: {name}"
                        )));
                    }
                }
            }
        }

        let ptr = qt_context::create_list_model(schema_json);
        if ptr.is_null() {
            return Err(QmltsError::ListModelError(
                "Failed to create list model (null pointer from C++)".to_string(),
            ));
        }
        Ok(Self { ptr })
    }

    /// Replace all data in the model with the given JSON array of row objects.
    pub fn set_data(&self, json_array: &str) -> Result<()> {
        // Validate that input is a JSON array
        let parsed: serde_json::Value = serde_json::from_str(json_array)
            .map_err(|e| QmltsError::ListModelError(format!("Invalid JSON for set_data: {e}")))?;
        if !parsed.is_array() {
            return Err(QmltsError::ListModelError(
                "set_data failed: expected a JSON array of row objects".to_string(),
            ));
        }

        if qt_context::list_set_data(self.ptr, json_array) {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(
                "set_data failed: C++ rejected the data".to_string(),
            ))
        }
    }

    /// Insert rows at the given index.
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the index is out of range or data is invalid.
    pub fn insert_rows(&self, index: i32, json_rows: &str) -> Result<()> {
        if qt_context::list_insert_rows(self.ptr, index, json_rows) {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(format!(
                "insert_rows failed at index {index}"
            )))
        }
    }

    /// Remove `count` rows starting at `index`.
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the range is out of bounds.
    pub fn remove_rows(&self, index: i32, count: i32) -> Result<()> {
        if qt_context::list_remove_rows(self.ptr, index, count) {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(format!(
                "remove_rows failed at index {index}, count {count}"
            )))
        }
    }

    /// Update the row at `index` with new data.
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the index is out of range.
    pub fn update_row(&self, index: i32, json_data: &str) -> Result<()> {
        if qt_context::list_update_row(self.ptr, index, json_data) {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(format!(
                "update_row failed at index {index}"
            )))
        }
    }

    /// Move `count` rows from `source` to `dest`.
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the move is invalid.
    pub fn move_rows(&self, source: i32, dest: i32, count: i32) -> Result<()> {
        if qt_context::list_move_rows(self.ptr, source, dest, count) {
            Ok(())
        } else {
            Err(QmltsError::ListModelError(format!(
                "move_rows failed from {source} to {dest}, count {count}"
            )))
        }
    }

    /// Get the current row count.
    #[must_use]
    pub fn row_count(&self) -> i32 {
        qt_context::list_row_count(self.ptr)
    }

    /// Get the data for a single row as a JSON string.
    ///
    /// # Errors
    ///
    /// Returns `ListModelError` if the index is out of range.
    pub fn get_row(&self, index: i32) -> Result<String> {
        if index < 0 || index >= self.row_count() {
            return Err(QmltsError::ListModelError(format!(
                "get_row failed at index {index}: out of range (row_count={})",
                self.row_count()
            )));
        }
        qt_context::list_get_row(self.ptr, index)
            .ok_or_else(|| QmltsError::ListModelError(format!("get_row failed at index {index}")))
    }

    /// Get the raw C pointer for use with `QQmlContext::setContextProperty`.
    #[must_use]
    pub fn as_ptr(&self) -> *mut c_void {
        self.ptr
    }
}

impl Drop for ListModelHandle {
    fn drop(&mut self) {
        if !self.ptr.is_null() {
            qt_context::destroy_list_model(self.ptr);
            self.ptr = std::ptr::null_mut();
        }
    }
}

#[cfg(all(test, feature = "mock-qt"))]
mod tests {
    use super::*;

    #[test]
    fn create_list_model_succeeds() {
        let model = ListModelHandle::new(r#"{"roles": ["name", "value"]}"#);
        assert!(model.is_ok());
    }

    #[test]
    fn list_model_row_count_default_zero() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        assert_eq!(model.row_count(), 0);
    }

    #[test]
    fn list_model_set_data_does_not_panic() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        let result = model.set_data(r#"[{"name": "alice"}, {"name": "bob"}]"#);
        assert!(result.is_ok());
    }

    #[test]
    fn list_model_insert_rows_succeeds() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        let result = model.insert_rows(0, r#"[{"name": "carol"}]"#);
        assert!(result.is_ok());
    }

    #[test]
    fn list_model_remove_rows_succeeds() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        let result = model.remove_rows(0, 1);
        assert!(result.is_ok());
    }

    #[test]
    fn list_model_update_row_succeeds() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        let result = model.update_row(0, r#"{"name": "updated"}"#);
        assert!(result.is_ok());
    }

    #[test]
    fn list_model_move_rows_succeeds() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        let result = model.move_rows(0, 1, 1);
        assert!(result.is_ok());
    }

    #[test]
    fn list_model_get_row_out_of_bounds_returns_error() {
        let model = ListModelHandle::new(r#"{"roles": ["name"]}"#).unwrap();
        // Mock row_count returns 0, so index 0 is out of bounds
        let row = model.get_row(0);
        assert!(row.is_err());
    }

    #[test]
    fn list_model_drop_does_not_panic() {
        let model = ListModelHandle::new(r#"{"roles": ["a", "b"]}"#).unwrap();
        drop(model);
    }
}
