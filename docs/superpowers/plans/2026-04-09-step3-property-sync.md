# Step 3: Property Synchronization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement property sync (`syncState`, `syncStateBatch`, `getProperty`), schema-aware type conversion, and the TypeScript runtime wrapper layer (`QmltsHost` + `ViewModelManager`) so that TypeScript ViewModel state can be synchronized into Qt properties and observed from QML.

**Architecture:** The generated crate embeds schema JSON in each `BridgeDescriptor`. The bridge registry stores schemas alongside factories. A new `property_sync` module dispatches type-specific C++ FFI calls based on schema `qmlType`. The engine delegates sync/read to `property_sync`. N-API exports serialize through JSON. TypeScript `QmltsHost` wraps the native bindings; `ViewModelManager` manages TS instances and syncs only schema-declared state fields.

**Tech Stack:** Rust (serde_json, thiserror, cxx-qt), C++ (Qt 6.11 QObject property system), TypeScript (Bun runtime), napi-rs

**Spec:** `docs/superpowers/specs/2026-04-09-step3-property-sync-design.md`

---

### Task 1: Create branch

**Files:** None

- [ ] **Step 1: Create and push the Step 3 branch**

```bash
cd C:\MyFile\DevAll\QmlTS
git checkout main
git pull origin main
git checkout -b step-3/property-sync
git push -u origin step-3/property-sync
```

---

### Task 2: Schema types and BridgeDescriptor extension in generated crate

**Files:**
- Modify: `native/crates/qmlts-host-generated/Cargo.toml`
- Modify: `native/crates/qmlts-host-generated/src/lib.rs`

- [ ] **Step 1: Add serde dependencies to qmlts-host-generated**

In `native/crates/qmlts-host-generated/Cargo.toml`, add under `[dependencies]`:

```toml
serde = { workspace = true }
serde_json = { workspace = true }
```

- [ ] **Step 2: Add ViewModelSchema and related types**

In `native/crates/qmlts-host-generated/src/lib.rs`, add after the existing `use` statements:

```rust
use serde::Deserialize;

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ViewModelSchema {
    pub class_name: String,
    pub version: u32,
    pub states: Vec<SchemaState>,
    #[serde(default)]
    pub commands: Vec<SchemaCommand>,
    #[serde(default)]
    pub effects: Vec<SchemaEffect>,
    #[serde(default)]
    pub lifecycle: SchemaLifecycle,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaState {
    pub name: String,
    pub qml_name: String,
    pub qml_type: String,
    pub member_id: u32,
    pub readonly: bool,
    pub deferred: bool,
    pub default_value: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaCommand {
    pub name: String,
    pub qml_name: String,
    pub command_id: u32,
    #[serde(default)]
    pub parameters: Vec<serde_json::Value>,
    pub r#async: bool,
    #[serde(default)]
    pub throttle: Option<String>,
    #[serde(default)]
    pub throttle_ms: Option<u32>,
}

#[derive(Debug, Clone, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaEffect {
    pub name: String,
    pub qml_name: String,
    pub effect_id: u32,
    #[serde(default)]
    pub parameters: Vec<serde_json::Value>,
}

#[derive(Debug, Clone, Default, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SchemaLifecycle {
    #[serde(default)]
    pub on_mounted: bool,
    #[serde(default)]
    pub on_unmounting: bool,
    #[serde(default)]
    pub hot_reload: bool,
}
```

- [ ] **Step 3: Add schema_json to BridgeDescriptor**

In `native/crates/qmlts-host-generated/src/lib.rs`, modify `BridgeDescriptor`:

```rust
pub struct BridgeDescriptor {
    pub class_name: &'static str,
    pub create: fn() -> BridgeInstance,
    pub schema_json: &'static str,
}
```

- [ ] **Step 4: Add embedded schema JSON constants**

In `native/crates/qmlts-host-generated/src/lib.rs`, add before `fn create_login_instance()`:

```rust
const LOGIN_VIEW_MODEL_SCHEMA: &str = r#"{
  "className": "LoginViewModel",
  "version": 1,
  "states": [
    {"name": "username", "qmlName": "username", "qmlType": "string", "memberId": 0, "readonly": false, "deferred": false, "defaultValue": "''"},
    {"name": "password", "qmlName": "password", "qmlType": "string", "memberId": 1, "readonly": false, "deferred": false, "defaultValue": "''"},
    {"name": "isLoading", "qmlName": "isLoading", "qmlType": "bool", "memberId": 2, "readonly": true, "deferred": false, "defaultValue": "false"}
  ],
  "commands": [{"name": "login", "qmlName": "login", "commandId": 927957157, "parameters": [], "async": true}],
  "effects": [{"name": "onLoginCompleted", "qmlName": "onLoginCompleted", "effectId": 1633635556, "parameters": [{"name": "success", "type": "boolean"}]}],
  "lifecycle": {"onMounted": true, "onUnmounting": false, "hotReload": false}
}"#;

const COUNTER_VIEW_MODEL_SCHEMA: &str = r#"{
  "className": "CounterViewModel",
  "version": 1,
  "states": [
    {"name": "count", "qmlName": "count", "qmlType": "int", "memberId": 0, "readonly": false, "deferred": false, "defaultValue": "0"}
  ],
  "commands": [],
  "effects": [],
  "lifecycle": {"onMounted": false, "onUnmounting": false, "hotReload": false}
}"#;
```

- [ ] **Step 5: Update descriptors() to include schema_json**

Update the `descriptors()` function:

```rust
pub fn descriptors() -> &'static [BridgeDescriptor] {
    &[
        BridgeDescriptor {
            class_name: "LoginViewModel",
            create: create_login_instance,
            schema_json: LOGIN_VIEW_MODEL_SCHEMA,
        },
        BridgeDescriptor {
            class_name: "CounterViewModel",
            create: create_counter_instance,
            schema_json: COUNTER_VIEW_MODEL_SCHEMA,
        },
    ]
}
```

- [ ] **Step 6: Add schema deserialization tests**

Add at the bottom of `native/crates/qmlts-host-generated/src/lib.rs`:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn login_schema_deserializes() {
        let schema: ViewModelSchema =
            serde_json::from_str(LOGIN_VIEW_MODEL_SCHEMA).expect("should parse login schema");
        assert_eq!(schema.class_name, "LoginViewModel");
        assert_eq!(schema.version, 1);
        assert_eq!(schema.states.len(), 3);
        assert_eq!(schema.states[0].name, "username");
        assert_eq!(schema.states[0].qml_type, "string");
        assert!(!schema.states[0].readonly);
        assert_eq!(schema.states[2].name, "isLoading");
        assert_eq!(schema.states[2].qml_type, "bool");
        assert!(schema.states[2].readonly);
        assert_eq!(schema.commands.len(), 1);
        assert_eq!(schema.effects.len(), 1);
        assert!(schema.lifecycle.on_mounted);
    }

    #[test]
    fn counter_schema_deserializes() {
        let schema: ViewModelSchema =
            serde_json::from_str(COUNTER_VIEW_MODEL_SCHEMA).expect("should parse counter schema");
        assert_eq!(schema.class_name, "CounterViewModel");
        assert_eq!(schema.states.len(), 1);
        assert_eq!(schema.states[0].name, "count");
        assert_eq!(schema.states[0].qml_type, "int");
        assert!(schema.commands.is_empty());
        assert!(schema.effects.is_empty());
        assert!(!schema.lifecycle.on_mounted);
    }

    #[test]
    fn golden_schema_file_matches_embedded() {
        let golden_path = std::path::Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("../../..")
            .join("tests/compiler/pipeline/fixtures/golden/LoginViewModel.schema.json");
        let golden: ViewModelSchema = serde_json::from_str(
            &std::fs::read_to_string(&golden_path).expect("should read golden schema"),
        )
        .expect("golden schema should parse");
        let embedded: ViewModelSchema =
            serde_json::from_str(LOGIN_VIEW_MODEL_SCHEMA).expect("embedded should parse");
        assert_eq!(golden.class_name, embedded.class_name);
        assert_eq!(golden.states.len(), embedded.states.len());
        for (g, e) in golden.states.iter().zip(embedded.states.iter()) {
            assert_eq!(g.name, e.name);
            assert_eq!(g.qml_type, e.qml_type);
            assert_eq!(g.readonly, e.readonly);
        }
    }

    #[test]
    fn descriptors_include_schema_json() {
        for desc in descriptors() {
            let schema: ViewModelSchema =
                serde_json::from_str(desc.schema_json).expect("descriptor schema should parse");
            assert_eq!(schema.class_name, desc.class_name);
        }
    }
}
```

- [ ] **Step 7: Run generated crate tests**

Run: `cd native && cargo test -p qmlts-host-generated`
Expected: All 4 new tests pass.

- [ ] **Step 8: Commit**

```bash
git add native/crates/qmlts-host-generated/
git commit -m "feat(generated): add ViewModelSchema types and embed schema JSON in BridgeDescriptor"
```

---

### Task 3: Bridge registry extension

**Files:**
- Modify: `native/crates/qmlts-host/src/bridge_registry.rs`

- [ ] **Step 1: Refactor registry to store BridgeEntry with schema_json**

Replace the entire `bridge_registry.rs` content:

```rust
//! Bridge registry — maps ViewModel class names to factory functions and schemas.
//!
//! The registry is populated from `qmlts_host_generated::descriptors()` at
//! engine construction time. It provides lookup-by-name so the engine can
//! instantiate bridge QObject pairs on demand and retrieve their schemas.

use qmlts_host_generated::{BridgeDescriptor, BridgeInstance};
use std::collections::HashMap;

struct BridgeEntry {
    create: fn() -> BridgeInstance,
    schema_json: &'static str,
}

/// Registry mapping ViewModel class names to their bridge factory functions and schemas.
pub struct BridgeRegistry {
    entries: HashMap<&'static str, BridgeEntry>,
}

impl BridgeRegistry {
    /// Build a registry from a slice of bridge descriptors.
    pub fn from_descriptors(descriptors: &[BridgeDescriptor]) -> Self {
        let entries = descriptors
            .iter()
            .map(|d| {
                (
                    d.class_name,
                    BridgeEntry {
                        create: d.create,
                        schema_json: d.schema_json,
                    },
                )
            })
            .collect();
        Self { entries }
    }

    /// Look up a factory by class name and create an instance.
    ///
    /// Returns `None` if no bridge type with that name is registered.
    pub fn create_instance(&self, class_name: &str) -> Option<BridgeInstance> {
        self.entries.get(class_name).map(|e| (e.create)())
    }

    /// Get the raw schema JSON for a class name.
    ///
    /// Returns `None` if no bridge type with that name is registered.
    pub fn get_schema_json(&self, class_name: &str) -> Option<&'static str> {
        self.entries.get(class_name).map(|e| e.schema_json)
    }

    /// Check whether a bridge type is registered.
    #[must_use]
    pub fn has_type(&self, class_name: &str) -> bool {
        self.entries.contains_key(class_name)
    }

    /// Return all registered class names (sorted for deterministic output).
    #[must_use]
    pub fn registered_types(&self) -> Vec<&'static str> {
        let mut names: Vec<&'static str> = self.entries.keys().copied().collect();
        names.sort_unstable();
        names
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use qmlts_host_generated::descriptors;

    #[test]
    fn registry_from_descriptors_has_expected_types() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        assert!(registry.has_type("LoginViewModel"));
        assert!(registry.has_type("CounterViewModel"));
        assert!(!registry.has_type("NonExistent"));
    }

    #[test]
    fn registered_types_returns_sorted_names() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        let types = registry.registered_types();
        assert_eq!(types, vec!["CounterViewModel", "LoginViewModel"]);
    }

    #[test]
    fn get_schema_json_returns_valid_json() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        let json = registry.get_schema_json("LoginViewModel").unwrap();
        let schema: qmlts_host_generated::ViewModelSchema =
            serde_json::from_str(json).expect("schema JSON should parse");
        assert_eq!(schema.class_name, "LoginViewModel");
    }

    #[test]
    fn get_schema_json_returns_none_for_unknown() {
        let registry = BridgeRegistry::from_descriptors(descriptors());
        assert!(registry.get_schema_json("NonExistent").is_none());
    }
}
```

- [ ] **Step 2: Run registry tests**

Run: `cd native && cargo test -p qmlts-host --features mock-qt -- bridge_registry`
Expected: All 4 tests pass.

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host/src/bridge_registry.rs
git commit -m "feat(registry): store schema_json alongside factory, add get_schema_json()"
```

---

### Task 4: Add BatchSyncPartialFailure error variant

**Files:**
- Modify: `native/crates/qmlts-host/src/error.rs`

- [ ] **Step 1: Add BatchSyncPartialFailure variant**

In `native/crates/qmlts-host/src/error.rs`, add after the `BridgeAlreadyLoaded` variant:

```rust
    /// One or more properties failed during batch sync.
    /// Successfully synced properties remain written.
    #[error("Batch sync partial failure ({count} of {total} failed): {details}")]
    BatchSyncPartialFailure {
        count: usize,
        total: usize,
        details: String,
    },
```

- [ ] **Step 2: Add test for the new variant**

Add to the `tests` module in `error.rs`:

```rust
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
```

- [ ] **Step 3: Run error tests**

Run: `cd native && cargo test -p qmlts-host --features mock-qt -- error`
Expected: All error tests pass.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host/src/error.rs
git commit -m "feat(error): add BatchSyncPartialFailure variant for batch sync errors"
```

---

### Task 5: C++ FFI additions

**Files:**
- Modify: `native/crates/qmlts-host/cpp/qt_context.cpp`

- [ ] **Step 1: Add set property functions**

In `native/crates/qmlts-host/cpp/qt_context.cpp`, add before the closing `} // extern "C"`:

```cpp
bool qmlts_set_string_property(void* qobject_ptr, const char* name, const char* value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, QString::fromUtf8(value));
}

bool qmlts_set_int_property(void* qobject_ptr, const char* name, std::int32_t value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, static_cast<int>(value));
}

bool qmlts_set_double_property(void* qobject_ptr, const char* name, double value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, value);
}

bool qmlts_set_bool_property(void* qobject_ptr, const char* name, bool value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, value);
}

bool qmlts_set_property_json(void* qobject_ptr, const char* name, const char* json) {
    if (!qobject_ptr || !name || !json) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    // For complex types, parse JSON and set as QVariant
    const QByteArray bytes(json);
    const QJsonDocument doc = QJsonDocument::fromJson(bytes);
    if (doc.isNull()) {
        return false;
    }
    return object->setProperty(name, doc.toVariant());
}
```

- [ ] **Step 2: Add read property functions**

Add before the closing `} // extern "C"`:

```cpp
char* qmlts_read_string_property(void* qobject_ptr, const char* name) {
    if (!qobject_ptr || !name) {
        return nullptr;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return nullptr;
    }
    const QByteArray utf8 = value.toString().toUtf8();
    char* result = static_cast<char*>(malloc(static_cast<size_t>(utf8.size()) + 1));
    if (result) {
        memcpy(result, utf8.constData(), static_cast<size_t>(utf8.size()));
        result[utf8.size()] = '\0';
    }
    return result;
}

bool qmlts_read_bool_property(void* qobject_ptr, const char* name, bool* out_value) {
    if (!qobject_ptr || !name || !out_value) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return false;
    }
    *out_value = value.toBool();
    return true;
}

bool qmlts_read_double_property(void* qobject_ptr, const char* name, double* out_value) {
    if (!qobject_ptr || !name || !out_value) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return false;
    }
    bool ok = false;
    const double converted = value.toDouble(&ok);
    if (!ok) {
        return false;
    }
    *out_value = converted;
    return true;
}

void qmlts_free_string(char* ptr) {
    free(ptr);
}
```

- [ ] **Step 3: Add root object helper**

Add before the closing `} // extern "C"`:

```cpp
void* qmlts_root_object(void* engine_ptr) {
    if (!engine_ptr) {
        return nullptr;
    }
    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    const auto roots = engine->rootObjects();
    if (roots.isEmpty()) {
        return nullptr;
    }
    return static_cast<void*>(roots.first());
}
```

- [ ] **Step 4: Add required includes**

At the top of `qt_context.cpp`, add after the existing includes:

```cpp
#include <QJsonDocument>
#include <cstdlib>
#include <cstring>
```

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/cpp/qt_context.cpp
git commit -m "feat(ffi): add type-specific property set/read, free_string, root_object C++ helpers"
```

---

### Task 6: Rust FFI wrappers in qt_context.rs

**Files:**
- Modify: `native/crates/qmlts-host/src/qt_context.rs`

- [ ] **Step 1: Add extern "C" declarations for new functions**

In `native/crates/qmlts-host/src/qt_context.rs`, add to the existing `#[cfg(not(feature = "mock-qt"))] unsafe extern "C"` block, after the `qmlts_read_int_property` declaration:

```rust
    fn qmlts_set_string_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_set_int_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: i32,
    ) -> bool;
    fn qmlts_set_double_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: f64,
    ) -> bool;
    fn qmlts_set_bool_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        value: bool,
    ) -> bool;
    fn qmlts_set_property_json(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        json: *const std::ffi::c_char,
    ) -> bool;
    fn qmlts_read_string_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
    ) -> *mut std::ffi::c_char;
    fn qmlts_read_bool_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        out_value: *mut bool,
    ) -> bool;
    fn qmlts_read_double_property(
        qobject_ptr: *mut c_void,
        name: *const std::ffi::c_char,
        out_value: *mut f64,
    ) -> bool;
    fn qmlts_free_string(ptr: *mut std::ffi::c_char);
    fn qmlts_root_object(engine_ptr: *mut c_void) -> *mut c_void;
```

- [ ] **Step 2: Add real-Qt wrapper functions**

Add after the existing `clear_context_property` real-Qt implementation, before the mock block:

```rust
#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_string_property(qobject_ptr: *mut c_void, name: &str, value: &str) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let c_value = CString::new(value).expect("string value must not contain NUL");
    unsafe { qmlts_set_string_property(qobject_ptr, c_name.as_ptr(), c_value.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_int_property(qobject_ptr: *mut c_void, name: &str, value: i32) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_int_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_double_property(qobject_ptr: *mut c_void, name: &str, value: f64) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_double_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_bool_property(qobject_ptr: *mut c_void, name: &str, value: bool) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    unsafe { qmlts_set_bool_property(qobject_ptr, c_name.as_ptr(), value) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn set_property_json(qobject_ptr: *mut c_void, name: &str, json: &str) -> bool {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let c_json = CString::new(json).expect("JSON must not contain NUL");
    unsafe { qmlts_set_property_json(qobject_ptr, c_name.as_ptr(), c_json.as_ptr()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_string_property(qobject_ptr: *mut c_void, name: &str) -> Option<String> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let ptr = unsafe { qmlts_read_string_property(qobject_ptr, c_name.as_ptr()) };
    if ptr.is_null() {
        return None;
    }
    let result = unsafe { std::ffi::CStr::from_ptr(ptr) }
        .to_string_lossy()
        .into_owned();
    unsafe { qmlts_free_string(ptr) };
    Some(result)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_bool_property(qobject_ptr: *mut c_void, name: &str) -> Option<bool> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let mut out_value = false;
    let ok = unsafe { qmlts_read_bool_property(qobject_ptr, c_name.as_ptr(), &mut out_value) };
    ok.then_some(out_value)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn read_double_property(qobject_ptr: *mut c_void, name: &str) -> Option<f64> {
    let c_name = CString::new(name).expect("property name must not contain NUL");
    let mut out_value = 0.0_f64;
    let ok = unsafe { qmlts_read_double_property(qobject_ptr, c_name.as_ptr(), &mut out_value) };
    ok.then_some(out_value)
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn root_object(engine_ptr: *mut c_void) -> *mut c_void {
    unsafe { qmlts_root_object(engine_ptr) }
}
```

- [ ] **Step 3: Add mock-qt implementations**

Add after the mock `clear_context_property`:

```rust
#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_string_property(_qobject_ptr: *mut c_void, name: &str, value: &str) -> bool {
    tracing::debug!("Mock: set_string_property('{name}', '{value}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_int_property(_qobject_ptr: *mut c_void, name: &str, value: i32) -> bool {
    tracing::debug!("Mock: set_int_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_double_property(_qobject_ptr: *mut c_void, name: &str, value: f64) -> bool {
    tracing::debug!("Mock: set_double_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_bool_property(_qobject_ptr: *mut c_void, name: &str, value: bool) -> bool {
    tracing::debug!("Mock: set_bool_property('{name}', {value})");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn set_property_json(_qobject_ptr: *mut c_void, name: &str, json: &str) -> bool {
    tracing::debug!("Mock: set_property_json('{name}', '{json}')");
    true
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_string_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<String> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_bool_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<bool> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn read_double_property(_qobject_ptr: *mut c_void, _name: &str) -> Option<f64> {
    None
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn root_object(_engine_ptr: *mut c_void) -> *mut c_void {
    std::ptr::null_mut()
}
```

- [ ] **Step 4: Run mock-qt build check**

Run: `cd native && cargo check -p qmlts-host --features mock-qt`
Expected: Compiles without errors.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/qt_context.rs
git commit -m "feat(ffi): add Rust wrappers for property set/read, free_string, root_object"
```

---

### Task 7: property_sync module

**Files:**
- Create: `native/crates/qmlts-host/src/property_sync.rs`
- Modify: `native/crates/qmlts-host/src/lib.rs`

- [ ] **Step 1: Add module declaration**

In `native/crates/qmlts-host/src/lib.rs`, add after `mod error;`:

```rust
mod property_sync;
```

- [ ] **Step 2: Create property_sync.rs with core functions**

Create `native/crates/qmlts-host/src/property_sync.rs`:

```rust
//! Property synchronization — schema-aware property set/read with type dispatch.
//!
//! This module maps JSON values to Qt property types using the ViewModel schema.
//! It dispatches to type-specific FFI calls based on `qmlType` from the schema.

use crate::error::QmltsError;
use crate::qt_context;
use qmlts_host_generated::{SchemaState, ViewModelSchema};
use std::ffi::c_void;

/// Find a state definition in the schema by property name.
fn find_state<'a>(schema: &'a ViewModelSchema, prop_name: &str) -> Option<&'a SchemaState> {
    schema.states.iter().find(|s| s.name == prop_name)
}

/// Sync a single property value from JSON into the bridge QObject.
///
/// Looks up the property in the schema, validates the JSON type against the
/// declared `qmlType`, and dispatches to the appropriate FFI call.
pub fn sync_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
    value: &serde_json::Value,
) -> Result<(), QmltsError> {
    let state = find_state(schema, prop_name).ok_or_else(|| QmltsError::PropertyNotFound {
        vm: schema.class_name.clone(),
        prop: prop_name.to_string(),
    })?;

    write_property(vm_ptr, &schema.class_name, state, value)
}

/// Sync multiple properties at once (best-effort with error collection).
///
/// Attempts all properties in the map. Successfully synced properties remain
/// written even if others fail. Returns a `BatchSyncPartialFailure` error
/// if any properties failed.
pub fn sync_batch(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    state_map: &serde_json::Map<String, serde_json::Value>,
) -> Result<(), QmltsError> {
    let total = state_map.len();
    let mut errors: Vec<String> = Vec::new();

    for (prop_name, value) in state_map {
        if let Err(e) = sync_one(vm_ptr, schema, prop_name, value) {
            errors.push(e.to_string());
        }
    }

    if errors.is_empty() {
        Ok(())
    } else {
        Err(QmltsError::BatchSyncPartialFailure {
            count: errors.len(),
            total,
            details: errors.join("; "),
        })
    }
}

/// Read a single property value from the bridge QObject as JSON.
pub fn read_one(
    vm_ptr: *mut c_void,
    schema: &ViewModelSchema,
    prop_name: &str,
) -> Result<serde_json::Value, QmltsError> {
    let state = find_state(schema, prop_name).ok_or_else(|| QmltsError::PropertyNotFound {
        vm: schema.class_name.clone(),
        prop: prop_name.to_string(),
    })?;

    read_property(vm_ptr, &schema.class_name, state)
}

/// Dispatch a property write based on qmlType.
fn write_property(
    vm_ptr: *mut c_void,
    class_name: &str,
    state: &SchemaState,
    value: &serde_json::Value,
) -> Result<(), QmltsError> {
    let prop = &state.qml_name;

    match state.qml_type.as_str() {
        "string" => {
            let s = value.as_str().ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: prop.clone(),
                expected: "string".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_string_property(vm_ptr, prop, s);
            Ok(())
        }
        "bool" => {
            let b = value.as_bool().ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: prop.clone(),
                expected: "bool".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_bool_property(vm_ptr, prop, b);
            Ok(())
        }
        "int" => {
            let n = value
                .as_i64()
                .and_then(|n| i32::try_from(n).ok())
                .ok_or_else(|| QmltsError::TypeMismatch {
                    vm: class_name.to_string(),
                    prop: prop.clone(),
                    expected: "int".to_string(),
                    actual: json_type_name(value),
                })?;
            qt_context::set_int_property(vm_ptr, prop, n);
            Ok(())
        }
        "real" => {
            let f = value.as_f64().ok_or_else(|| QmltsError::TypeMismatch {
                vm: class_name.to_string(),
                prop: prop.clone(),
                expected: "real (number)".to_string(),
                actual: json_type_name(value),
            })?;
            qt_context::set_double_property(vm_ptr, prop, f);
            Ok(())
        }
        other if other == "date" || other.starts_with("list<") => {
            let json_str = serde_json::to_string(value).map_err(|e| {
                QmltsError::Internal(format!("Failed to serialize value for '{prop}': {e}"))
            })?;
            qt_context::set_property_json(vm_ptr, prop, &json_str);
            Ok(())
        }
        unknown => Err(QmltsError::TypeMismatch {
            vm: class_name.to_string(),
            prop: prop.clone(),
            expected: format!("known qmlType, got '{unknown}'"),
            actual: json_type_name(value),
        }),
    }
}

/// Dispatch a property read based on qmlType.
fn read_property(
    vm_ptr: *mut c_void,
    class_name: &str,
    state: &SchemaState,
) -> Result<serde_json::Value, QmltsError> {
    let prop = &state.qml_name;

    match state.qml_type.as_str() {
        "string" => {
            let s = qt_context::read_string_property(vm_ptr, prop);
            Ok(s.map_or(serde_json::Value::String(String::new()), |v| {
                serde_json::Value::String(v)
            }))
        }
        "bool" => {
            let b = qt_context::read_bool_property(vm_ptr, prop);
            Ok(serde_json::Value::Bool(b.unwrap_or(false)))
        }
        "int" => {
            let n = qt_context::read_int_property(vm_ptr, prop);
            Ok(serde_json::json!(n.unwrap_or(0)))
        }
        "real" => {
            let f = qt_context::read_double_property(vm_ptr, prop);
            Ok(serde_json::json!(f.unwrap_or(0.0)))
        }
        _ => Err(QmltsError::Internal(format!(
            "Read not supported for qmlType '{}' on '{class_name}.{prop}'",
            state.qml_type
        ))),
    }
}

fn json_type_name(value: &serde_json::Value) -> String {
    match value {
        serde_json::Value::Null => "null".to_string(),
        serde_json::Value::Bool(_) => "boolean".to_string(),
        serde_json::Value::Number(_) => "number".to_string(),
        serde_json::Value::String(_) => "string".to_string(),
        serde_json::Value::Array(_) => "array".to_string(),
        serde_json::Value::Object(_) => "object".to_string(),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn login_schema() -> ViewModelSchema {
        serde_json::from_str(qmlts_host_generated::LOGIN_VIEW_MODEL_SCHEMA)
            .expect("login schema should parse")
    }

    fn counter_schema() -> ViewModelSchema {
        serde_json::from_str(qmlts_host_generated::COUNTER_VIEW_MODEL_SCHEMA)
            .expect("counter schema should parse")
    }

    #[test]
    fn find_state_found() {
        let schema = login_schema();
        let state = find_state(&schema, "username");
        assert!(state.is_some());
        assert_eq!(state.unwrap().qml_type, "string");
    }

    #[test]
    fn find_state_not_found() {
        let schema = login_schema();
        assert!(find_state(&schema, "nonexistent").is_none());
    }

    #[test]
    fn sync_one_property_not_found() {
        let schema = login_schema();
        let result = sync_one(
            std::ptr::null_mut(),
            &schema,
            "nonexistent",
            &serde_json::json!("hello"),
        );
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(
            err.to_string().contains("not found"),
            "expected PropertyNotFound, got: {err}"
        );
    }

    #[test]
    fn sync_one_type_mismatch_string_expects_string() {
        let schema = login_schema();
        let result = sync_one(
            std::ptr::null_mut(),
            &schema,
            "username",
            &serde_json::json!(42),
        );
        assert!(result.is_err());
        let err = result.unwrap_err();
        assert!(
            err.to_string().contains("Type mismatch"),
            "expected TypeMismatch, got: {err}"
        );
    }

    #[test]
    fn sync_one_type_mismatch_bool_expects_bool() {
        let schema = login_schema();
        let result = sync_one(
            std::ptr::null_mut(),
            &schema,
            "isLoading",
            &serde_json::json!("not a bool"),
        );
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("Type mismatch"));
    }

    #[test]
    fn sync_one_type_mismatch_int_expects_number() {
        let schema = counter_schema();
        let result = sync_one(
            std::ptr::null_mut(),
            &schema,
            "count",
            &serde_json::json!("not a number"),
        );
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("Type mismatch"));
    }

    #[test]
    fn sync_one_readonly_does_not_block_write() {
        // isLoading is readonly in schema, but host should still be able to write
        let schema = login_schema();
        // With mock-qt this returns Ok because mock always returns true
        let result = sync_one(
            std::ptr::null_mut(),
            &schema,
            "isLoading",
            &serde_json::json!(true),
        );
        assert!(result.is_ok(), "readonly should not block host writes");
    }

    #[test]
    fn sync_batch_all_fail_gracefully() {
        let schema = login_schema();
        let mut map = serde_json::Map::new();
        map.insert("badProp1".to_string(), serde_json::json!("a"));
        map.insert("badProp2".to_string(), serde_json::json!("b"));
        let result = sync_batch(std::ptr::null_mut(), &schema, &map);
        assert!(result.is_err());
        match result.unwrap_err() {
            QmltsError::BatchSyncPartialFailure {
                count,
                total,
                details,
            } => {
                assert_eq!(count, 2);
                assert_eq!(total, 2);
                assert!(details.contains("not found"));
            }
            other => panic!("expected BatchSyncPartialFailure, got: {other}"),
        }
    }

    #[test]
    fn sync_batch_partial_failure() {
        let schema = login_schema();
        let mut map = serde_json::Map::new();
        map.insert("username".to_string(), serde_json::json!("alice"));
        map.insert("nonexistent".to_string(), serde_json::json!("x"));
        let result = sync_batch(std::ptr::null_mut(), &schema, &map);
        assert!(result.is_err());
        match result.unwrap_err() {
            QmltsError::BatchSyncPartialFailure {
                count,
                total,
                details,
            } => {
                assert_eq!(count, 1, "only one property should fail");
                assert_eq!(total, 2);
                assert!(details.contains("nonexistent"));
            }
            other => panic!("expected BatchSyncPartialFailure, got: {other}"),
        }
    }

    #[test]
    fn json_type_name_variants() {
        assert_eq!(json_type_name(&serde_json::json!(null)), "null");
        assert_eq!(json_type_name(&serde_json::json!(true)), "boolean");
        assert_eq!(json_type_name(&serde_json::json!(42)), "number");
        assert_eq!(json_type_name(&serde_json::json!("hi")), "string");
        assert_eq!(json_type_name(&serde_json::json!([1, 2])), "array");
        assert_eq!(json_type_name(&serde_json::json!({"a": 1})), "object");
    }
}
```

- [ ] **Step 3: Make schema constants public in generated crate**

In `native/crates/qmlts-host-generated/src/lib.rs`, change the schema constants from private to public:

```rust
pub const LOGIN_VIEW_MODEL_SCHEMA: &str = r#"..."#;
pub const COUNTER_VIEW_MODEL_SCHEMA: &str = r#"..."#;
```

- [ ] **Step 4: Run property_sync tests**

Run: `cd native && cargo test -p qmlts-host --features mock-qt -- property_sync`
Expected: All tests pass (9 tests).

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/property_sync.rs native/crates/qmlts-host/src/lib.rs native/crates/qmlts-host-generated/src/lib.rs
git commit -m "feat(property_sync): add schema-aware property sync with type dispatch and unit tests"
```

---

### Task 8: Engine sync/read methods

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs`

- [ ] **Step 1: Add active_schema field**

In `engine.rs`, add to the `QmltsEngine` struct after `active_bridge`:

```rust
    /// Parsed schema for the currently active bridge.
    active_schema: Option<qmlts_host_generated::ViewModelSchema>,
```

And update `QmltsEngine::new()` to initialize it:

```rust
            active_schema: None,
```

- [ ] **Step 2: Update register_view_model to parse and store schema**

In the `register_view_model` method, after `self.active_bridge = Some(instance);`, add:

```rust
        // Parse and store the schema for property sync
        let schema_json = self
            .registry
            .get_schema_json(class_name)
            .ok_or_else(|| QmltsError::Internal(format!("Schema not found for '{class_name}'")))?;
        let schema: qmlts_host_generated::ViewModelSchema =
            serde_json::from_str(schema_json).map_err(|e| {
                QmltsError::SchemaValidation(format!(
                    "Failed to parse schema for '{class_name}': {e}"
                ))
            })?;
        self.active_schema = Some(schema);
```

- [ ] **Step 3: Add sync_state method**

Add after `active_runtime_i32_property`:

```rust
    /// Sync a single property value from JSON into the active bridge.
    pub fn sync_state(
        &self,
        prop_name: &str,
        json_value: &serde_json::Value,
    ) -> Result<()> {
        self.ensure_alive()?;
        let bridge = self
            .active_bridge
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        let schema = self
            .active_schema
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        crate::property_sync::sync_one(bridge.vm_qobject_ptr(), schema, prop_name, json_value)
    }

    /// Sync multiple properties at once (best-effort with error collection).
    pub fn sync_state_batch(
        &self,
        state_map: &serde_json::Map<String, serde_json::Value>,
    ) -> Result<()> {
        self.ensure_alive()?;
        let bridge = self
            .active_bridge
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        let schema = self
            .active_schema
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        crate::property_sync::sync_batch(bridge.vm_qobject_ptr(), schema, state_map)
    }

    /// Read a single property value from the active bridge as JSON.
    pub fn get_property(&self, prop_name: &str) -> Result<serde_json::Value> {
        self.ensure_alive()?;
        let bridge = self
            .active_bridge
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        let schema = self
            .active_schema
            .as_ref()
            .ok_or(QmltsError::EngineNotInitialized)?;
        crate::property_sync::read_one(bridge.vm_qobject_ptr(), schema, prop_name)
    }

    /// Get the engine's root QObject pointer (for integration tests).
    #[must_use]
    pub fn root_object_ptr(&self) -> *mut std::ffi::c_void {
        qt_context::root_object(self.engine_ptr)
    }

    /// Get the active ViewModel class name, if any.
    #[must_use]
    pub fn active_class_name(&self) -> Option<&str> {
        self.active_schema.as_ref().map(|s| s.class_name.as_str())
    }
```

- [ ] **Step 4: Clear active_schema in cleanup**

In `cleanup_qt_resources`, add `self.active_schema = None;` alongside `self.active_bridge = None;` in both the real and mock branches.

- [ ] **Step 5: Run build check**

Run: `cd native && cargo check -p qmlts-host --features mock-qt`
Expected: Compiles without errors.

- [ ] **Step 6: Commit**

```bash
git add native/crates/qmlts-host/src/engine.rs
git commit -m "feat(engine): add active_schema, sync_state, sync_state_batch, get_property methods"
```

---

### Task 9: N-API exports for sync/read

**Files:**
- Modify: `native/crates/qmlts-host/src/exports.rs`

- [ ] **Step 1: Add sync/read exports**

In `native/crates/qmlts-host/src/exports.rs`, add a new section after the `§2b Bridge Registry` section (before `§3 Event Loop`):

```rust
// ─────────────────────────────────────────────────────────────────────────
//  §2c Property Sync
// ─────────────────────────────────────────────────────────────────────────

/// Sync a single property on the active bridge ViewModel.
///
/// @param engine - The engine instance.
/// @param className - ViewModel class name (must match the active bridge).
/// @param propertyName - Property name from the schema.
/// @param jsonValue - JSON-serialized property value.
/// @throws Error if no bridge is active, property not found, or type mismatch.
///
/// @example
/// ```typescript
/// registerViewModel(engine, 'LoginViewModel');
/// syncState(engine, 'LoginViewModel', 'username', '"alice"');
/// ```
#[napi(js_name = "syncState")]
pub fn sync_state(
    engine: &mut QmltsEngine,
    class_name: String,
    property_name: String,
    json_value: String,
) -> Result<()> {
    // Verify class_name matches active bridge
    let active = engine
        .inner
        .active_class_name()
        .ok_or_else(|| napi::Error::new(napi::Status::GenericFailure, "No active bridge"))?;
    if active != class_name {
        return Err(napi::Error::new(
            napi::Status::GenericFailure,
            format!("Active bridge is '{active}', not '{class_name}'"),
        ));
    }
    let value: serde_json::Value =
        serde_json::from_str(&json_value).map_err(|e| -> napi::Error {
            napi::Error::new(
                napi::Status::GenericFailure,
                format!("Invalid JSON value: {e}"),
            )
        })?;
    engine
        .inner
        .sync_state(&property_name, &value)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Sync multiple properties on the active bridge ViewModel (batch).
///
/// Attempts all properties. Successfully synced properties remain written
/// even if others fail.
///
/// @param engine - The engine instance.
/// @param className - ViewModel class name (must match the active bridge).
/// @param jsonStateMap - JSON-serialized object of property name → value pairs.
/// @throws Error if no bridge is active or any properties fail.
///
/// @example
/// ```typescript
/// syncStateBatch(engine, 'LoginViewModel', '{"username":"alice","password":"secret"}');
/// ```
#[napi(js_name = "syncStateBatch")]
pub fn sync_state_batch(
    engine: &mut QmltsEngine,
    class_name: String,
    json_state_map: String,
) -> Result<()> {
    let active = engine
        .inner
        .active_class_name()
        .ok_or_else(|| napi::Error::new(napi::Status::GenericFailure, "No active bridge"))?;
    if active != class_name {
        return Err(napi::Error::new(
            napi::Status::GenericFailure,
            format!("Active bridge is '{active}', not '{class_name}'"),
        ));
    }
    let state_map: serde_json::Map<String, serde_json::Value> =
        serde_json::from_str(&json_state_map).map_err(|e| -> napi::Error {
            napi::Error::new(
                napi::Status::GenericFailure,
                format!("Invalid JSON state map: {e}"),
            )
        })?;
    engine
        .inner
        .sync_state_batch(&state_map)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Read a single property value from the active bridge ViewModel.
///
/// @param engine - The engine instance.
/// @param className - ViewModel class name (must match the active bridge).
/// @param propertyName - Property name from the schema.
/// @returns JSON-serialized property value.
/// @throws Error if no bridge is active or property not found.
///
/// @example
/// ```typescript
/// const json = getProperty(engine, 'LoginViewModel', 'username');
/// const value = JSON.parse(json); // "alice"
/// ```
#[napi(js_name = "getProperty")]
pub fn get_property(
    engine: &QmltsEngine,
    class_name: String,
    property_name: String,
) -> Result<String> {
    let active = engine
        .inner
        .active_class_name()
        .ok_or_else(|| napi::Error::new(napi::Status::GenericFailure, "No active bridge"))?;
    if active != class_name {
        return Err(napi::Error::new(
            napi::Status::GenericFailure,
            format!("Active bridge is '{active}', not '{class_name}'"),
        ));
    }
    let value = engine
        .inner
        .get_property(&property_name)
        .map_err(|e| -> napi::Error { e.into() })?;
    serde_json::to_string(&value).map_err(|e| -> napi::Error {
        napi::Error::new(
            napi::Status::GenericFailure,
            format!("Failed to serialize property value: {e}"),
        )
    })
}
```

- [ ] **Step 2: Add napi export tests**

Add to the `tests` module in `exports.rs`:

```rust
    #[test]
    fn test_sync_state_no_active_bridge() {
        reset_qt();
        let mut engine = create_engine(None).unwrap();
        let result = sync_state(
            &mut engine,
            "LoginViewModel".to_string(),
            "username".to_string(),
            r#""alice""#.to_string(),
        );
        assert!(result.is_err());
    }

    #[test]
    fn test_get_property_no_active_bridge() {
        reset_qt();
        let engine = create_engine(None).unwrap();
        let result = get_property(
            &engine,
            "LoginViewModel".to_string(),
            "username".to_string(),
        );
        assert!(result.is_err());
    }
```

- [ ] **Step 3: Run export tests**

Run: `cd native && cargo test -p qmlts-host --features mock-qt,napi -- exports`
Expected: All export tests pass.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host/src/exports.rs
git commit -m "feat(napi): add syncState, syncStateBatch, getProperty N-API exports"
```

---

### Task 10: Rust real-Qt integration tests

**Files:**
- Modify: `native/crates/qmlts-host/tests/bridge_integration.rs`

- [ ] **Step 1: Add property sync integration tests**

Add at the bottom of `bridge_integration.rs`:

```rust
// ─────────────────────────────────────────────────────────────────────────
//  Property synchronization tests
// ─────────────────────────────────────────────────────────────────────────

#[test]
fn test_sync_string_property_observable_via_binding() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // Sync property BEFORE loading QML
    engine
        .sync_state("username", &serde_json::json!("alice"))
        .unwrap();

    // Load QML that binds vm.username to a root property
    engine
        .load_string(
            r#"import QtQuick
Item {
    property string displayedUsername: vm.username
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    // Read back via root object to prove binding propagated
    let root = engine.root_object_ptr();
    assert!(!root.is_null(), "root object should exist");
    let displayed = qmlts_host::qt_context_test::read_string_property(root, "displayedUsername");
    assert_eq!(displayed.as_deref(), Some("alice"));
}

#[test]
fn test_sync_int_property_observable_via_binding() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("CounterViewModel").unwrap();

    engine
        .sync_state("count", &serde_json::json!(42))
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property int displayedCount: vm.count
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert!(!root.is_null());
    let displayed = qmlts_host::qt_context_test::read_int_property(root, "displayedCount");
    assert_eq!(displayed, Some(42));
}

#[test]
fn test_sync_bool_property_observable_via_binding() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state("isLoading", &serde_json::json!(true))
        .unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property bool displayedIsLoading: vm.isLoading
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert!(!root.is_null());
    let displayed = qmlts_host::qt_context_test::read_bool_property(root, "displayedIsLoading");
    assert_eq!(displayed, Some(true));
}

#[test]
fn test_sync_batch_multiple_properties() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let mut state_map = serde_json::Map::new();
    state_map.insert("username".to_string(), serde_json::json!("bob"));
    state_map.insert("password".to_string(), serde_json::json!("secret"));
    state_map.insert("isLoading".to_string(), serde_json::json!(true));
    engine.sync_state_batch(&state_map).unwrap();

    engine
        .load_string(
            r#"import QtQuick
Item {
    property string displayedUsername: vm.username
    property string displayedPassword: vm.password
    property bool displayedIsLoading: vm.isLoading
}"#,
            None,
        )
        .unwrap();
    engine.process_events().unwrap();

    let root = engine.root_object_ptr();
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "displayedUsername").as_deref(),
        Some("bob")
    );
    assert_eq!(
        qmlts_host::qt_context_test::read_string_property(root, "displayedPassword").as_deref(),
        Some("secret")
    );
    assert_eq!(
        qmlts_host::qt_context_test::read_bool_property(root, "displayedIsLoading"),
        Some(true)
    );
}

#[test]
fn test_get_property_round_trip() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    engine
        .sync_state("username", &serde_json::json!("carol"))
        .unwrap();

    let value = engine.get_property("username").unwrap();
    assert_eq!(value, serde_json::json!("carol"));
}

#[test]
fn test_sync_property_not_found() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.sync_state("nonexistent", &serde_json::json!("x"));
    assert!(result.is_err());
    assert!(result.unwrap_err().to_string().contains("not found"));
}

#[test]
fn test_sync_type_mismatch() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let result = engine.sync_state("username", &serde_json::json!(123));
    assert!(result.is_err());
    assert!(result.unwrap_err().to_string().contains("Type mismatch"));
}

#[test]
fn test_sync_batch_partial_failure() {
    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    let mut state_map = serde_json::Map::new();
    state_map.insert("username".to_string(), serde_json::json!("valid_user"));
    state_map.insert("nonexistent".to_string(), serde_json::json!("x"));
    let result = engine.sync_state_batch(&state_map);
    assert!(result.is_err());
    let err_str = result.unwrap_err().to_string();
    assert!(err_str.contains("1 of 2 failed"));
    assert!(err_str.contains("nonexistent"));

    // The valid property should still have been written
    let value = engine.get_property("username").unwrap();
    assert_eq!(value, serde_json::json!("valid_user"));
}

#[test]
fn test_golden_login_view_with_synced_state() {
    let golden = std::path::Path::new(env!("CARGO_MANIFEST_DIR"))
        .join("../../..")
        .join("tests/compiler/pipeline/fixtures/golden/LoginView.qml");
    assert!(golden.exists(), "Golden fixture should exist at {golden:?}");

    let mut engine = QmltsEngine::new(None).unwrap();
    engine.register_view_model("LoginViewModel").unwrap();

    // Sync state values
    let mut state_map = serde_json::Map::new();
    state_map.insert("username".to_string(), serde_json::json!("goldenUser"));
    state_map.insert("password".to_string(), serde_json::json!("goldenPass"));
    state_map.insert("isLoading".to_string(), serde_json::json!(false));
    engine.sync_state_batch(&state_map).unwrap();

    // Load the exact golden QML fixture
    let golden_content =
        std::fs::read_to_string(&golden).expect("should read golden LoginView.qml");
    engine.load_string(&golden_content, None).unwrap();
    engine.process_events().unwrap();

    // Verify synced values round-trip correctly
    let username = engine.get_property("username").unwrap();
    assert_eq!(username, serde_json::json!("goldenUser"));
    let password = engine.get_property("password").unwrap();
    assert_eq!(password, serde_json::json!("goldenPass"));
}
```

- [ ] **Step 2: Expose qt_context read functions for integration tests**

In `native/crates/qmlts-host/src/lib.rs`, add a test-support module:

```rust
/// Test-only re-exports of qt_context read functions for integration tests.
#[cfg(not(feature = "mock-qt"))]
pub mod qt_context_test {
    pub use crate::qt_context::{read_bool_property, read_int_property, read_string_property};
}
```

- [ ] **Step 3: Run real-Qt integration tests (local only — requires Qt)**

Run: `cd native && cargo test -p qmlts-host --no-default-features -- property`
Expected: All new property sync tests pass.

(These tests will also run on CI which has Qt installed.)

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host/tests/bridge_integration.rs native/crates/qmlts-host/src/lib.rs
git commit -m "test(integration): add property sync, batch, round-trip, golden fixture tests"
```

---

### Task 11: QmltsHost TypeScript class

**Files:**
- Create: `native/npm/qmlts-host/src/qmlts-host.ts`

- [ ] **Step 1: Create the QmltsHost wrapper class**

Create `native/npm/qmlts-host/src/qmlts-host.ts`:

```typescript
/**
 * QmltsHost — typed wrapper around the low-level N-API engine bindings.
 *
 * Encapsulates engine lifecycle, property sync, and QML loading into a
 * single disposable object. The constructor creates the engine immediately.
 */

import type { EngineConfig, QmltsEngine } from './types';

// The native module is loaded lazily to avoid circular imports.
// We import from the index which re-exports native bindings.
let _native: typeof import('./types') | null = null;

function native(): typeof import('./types') {
  if (!_native) {
    // Dynamic import of the native bindings
    // biome-ignore lint: dynamic require needed for native module
    _native = require('../index.js') as typeof import('./types');
  }
  return _native!;
}

export class QmltsHost {
  private engine: QmltsEngine | null;

  constructor(config?: EngineConfig) {
    this.engine = native().createEngine(config);
  }

  get isInitialized(): boolean {
    return this.engine !== null;
  }

  private ensureAlive(): QmltsEngine {
    if (this.engine === null) {
      throw new Error('QmltsHost has been disposed');
    }
    return this.engine;
  }

  registerViewModel(className: string): void {
    native().registerViewModel(this.ensureAlive(), className);
  }

  syncState(className: string, propertyName: string, value: unknown): void {
    const jsonValue = JSON.stringify(value);
    native().syncState(this.ensureAlive(), className, propertyName, jsonValue);
  }

  syncStateBatch(className: string, state: Record<string, unknown>): void {
    const jsonStateMap = JSON.stringify(state);
    native().syncStateBatch(this.ensureAlive(), className, jsonStateMap);
  }

  getProperty(className: string, propertyName: string): unknown {
    const json = native().getProperty(this.ensureAlive(), className, propertyName);
    return JSON.parse(json);
  }

  loadQml(source: string): void {
    native().loadString(this.ensureAlive(), source);
  }

  loadFile(filePath: string): void {
    native().loadFile(this.ensureAlive(), filePath);
  }

  processEvents(maxMs?: number): void {
    if (maxMs !== undefined) {
      native().processEventsFor(this.ensureAlive(), maxMs);
    } else {
      native().processEvents(this.ensureAlive());
    }
  }

  dispose(): void {
    if (this.engine !== null) {
      native().destroyEngine(this.engine);
      this.engine = null;
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add native/npm/qmlts-host/src/qmlts-host.ts
git commit -m "feat(ts): add QmltsHost wrapper class"
```

---

### Task 12: ViewModelManager TypeScript class

**Files:**
- Create: `native/npm/qmlts-host/src/viewmodel-manager.ts`

- [ ] **Step 1: Create the ViewModelManager class**

Create `native/npm/qmlts-host/src/viewmodel-manager.ts`:

```typescript
/**
 * ViewModelManager — manages TypeScript ViewModel instances and their
 * synchronization with the native Qt host.
 *
 * Boundary rules (Step 3):
 * - Depends only on schema.className and schema.states[].{name, deferred}
 * - Does NOT touch commands, effects, or lifecycle
 * - Only one ViewModel can be active per engine (single-active-bridge constraint)
 */

import type { QmltsHost } from './qmlts-host';

/**
 * Minimal schema interface — only the fields ViewModelManager needs.
 */
export interface ViewModelSchema {
  className: string;
  states: ReadonlyArray<{
    name: string;
    deferred: boolean;
  }>;
}

interface Registration {
  schema: ViewModelSchema;
  instance: object;
}

export class ViewModelManager {
  private readonly host: QmltsHost;
  private readonly registrations = new Map<string, Registration>();

  constructor(host: QmltsHost) {
    this.host = host;
  }

  /**
   * Register a ViewModel instance with its schema.
   *
   * Creates the native bridge and performs an initial state sync.
   * Under the single-active-bridge model, calling register() a second
   * time replaces the active bridge in the native engine.
   */
  register<T extends object>(schema: ViewModelSchema, instance: T): void {
    this.registrations.set(schema.className, { schema, instance });
    this.host.registerViewModel(schema.className);
    this.sync(schema.className);
  }

  /**
   * Sync state from the TypeScript instance to the native bridge.
   *
   * Reads ONLY schema-declared, non-deferred state fields from the instance.
   * Does NOT enumerate arbitrary instance fields.
   */
  sync(className: string): void {
    const reg = this.registrations.get(className);
    if (!reg) {
      throw new Error(`ViewModel '${className}' is not registered`);
    }

    const stateMap: Record<string, unknown> = {};
    for (const state of reg.schema.states) {
      if (!state.deferred) {
        stateMap[state.name] = (reg.instance as Record<string, unknown>)[state.name];
      }
    }

    this.host.syncStateBatch(className, stateMap);
  }

  /**
   * Read a property value from the native bridge (round-trip through Qt).
   */
  getProperty<T>(className: string, propertyName: string): T {
    return this.host.getProperty(className, propertyName) as T;
  }

  /**
   * Remove a registration from the manager (TS-side only).
   *
   * Does NOT remove the native bridge from the engine.
   */
  unregister(className: string): void {
    this.registrations.delete(className);
  }

  get count(): number {
    return this.registrations.size;
  }

  get classNames(): string[] {
    return [...this.registrations.keys()];
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add native/npm/qmlts-host/src/viewmodel-manager.ts
git commit -m "feat(ts): add ViewModelManager with schema-only sync"
```

---

### Task 13: TypeScript exports and types wiring

**Files:**
- Modify: `native/npm/qmlts-host/src/types.ts`
- Modify: `native/npm/qmlts-host/src/index.ts`
- Modify: `native/npm/qmlts-host/index.d.ts`
- Modify: `native/npm/qmlts-host/index.js`

- [ ] **Step 1: Add new function declarations to types.ts**

In `native/npm/qmlts-host/src/types.ts`, add a new section `§2c Property Sync` after the `§2b Bridge Registry` section (before `§3 Event Loop`):

```typescript
// ────────────────────────────────────────────────────────────────────────────
// §2c Property Sync
// ────────────────────────────────────────────────────────────────────────────

/**
 * Sync a single property on the active bridge ViewModel.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param propertyName - Property name from the schema.
 * @param jsonValue - JSON-serialized property value.
 * @throws Error if no bridge is active, property not found, or type mismatch.
 */
export declare function syncState(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
  jsonValue: string,
): void;

/**
 * Sync multiple properties on the active bridge ViewModel (batch).
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param jsonStateMap - JSON-serialized object of property name → value pairs.
 * @throws Error if no bridge is active or any properties fail.
 */
export declare function syncStateBatch(
  engine: QmltsEngine,
  className: string,
  jsonStateMap: string,
): void;

/**
 * Read a single property value from the active bridge ViewModel.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param propertyName - Property name from the schema.
 * @returns JSON-serialized property value.
 * @throws Error if no bridge is active or property not found.
 */
export declare function getProperty(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
): string;
```

- [ ] **Step 2: Update index.ts to re-export new bindings and classes**

In `native/npm/qmlts-host/src/index.ts`, update the re-export block to include new functions:

```typescript
export const {
  // Engine lifecycle
  createEngine,
  destroyEngine,
  version,
  qtVersion,
  // QML loading
  loadFile,
  loadString,
  addImportPath,
  addPluginPath,
  // Bridge registry
  registerViewModel,
  getRegisteredTypes,
  hasBridgeType,
  // Property sync
  syncState,
  syncStateBatch,
  getProperty,
  // Event loop
  exec,
  quit,
  processEvents,
  processEventsFor,
} = nativeModule;
```

And add at the bottom:

```typescript
// Higher-level classes
export { QmltsHost } from './qmlts-host';
export { ViewModelManager } from './viewmodel-manager';
export type { ViewModelSchema } from './viewmodel-manager';
```

- [ ] **Step 3: Update index.d.ts**

In `native/npm/qmlts-host/index.d.ts`, add before the `activeRuntimeI32Property` declaration:

```typescript
export declare function syncState(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
  jsonValue: string,
): void;
export declare function syncStateBatch(
  engine: QmltsEngine,
  className: string,
  jsonStateMap: string,
): void;
export declare function getProperty(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
): string;
```

And add at the bottom:

```typescript
export { QmltsHost } from './src/qmlts-host';
export { ViewModelManager } from './src/viewmodel-manager';
export type { ViewModelSchema } from './src/viewmodel-manager';
```

- [ ] **Step 4: Update index.js**

In `native/npm/qmlts-host/index.js`, update the destructuring to include new exports:

```javascript
export const {
  createEngine,
  destroyEngine,
  version,
  qtVersion,
  loadFile,
  loadString,
  addImportPath,
  addPluginPath,
  exec,
  quit,
  processEvents,
  processEventsFor,
  registerViewModel,
  getRegisteredTypes,
  hasBridgeType,
  activeRuntimeI32Property,
  syncState,
  syncStateBatch,
  getProperty,
} = nativeModule;

export { QmltsHost } from './src/qmlts-host.ts';
export { ViewModelManager } from './src/viewmodel-manager.ts';
```

- [ ] **Step 5: Commit**

```bash
git add native/npm/qmlts-host/src/types.ts native/npm/qmlts-host/src/index.ts native/npm/qmlts-host/index.d.ts native/npm/qmlts-host/index.js
git commit -m "feat(ts): wire syncState, syncStateBatch, getProperty, QmltsHost, ViewModelManager exports"
```

---

### Task 14: TypeScript N-API behavioral tests

**Files:**
- Modify: `tests/host/napi-bindings.test.ts`

- [ ] **Step 1: Add new expected exports**

In `tests/host/napi-bindings.test.ts`, add to the `expectedExports` array:

```typescript
  // §2c Property sync
  'syncState',
  'syncStateBatch',
  'getProperty',
```

- [ ] **Step 2: Add round-trip sync test**

Add to the describe block in `napi-bindings.test.ts`:

```typescript
  test('TB-19: syncState → getProperty round-trip', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (engine: object, name: string) => void;
    const syncState = nativeModule.syncState as (engine: object, className: string, propName: string, jsonValue: string) => void;
    const getProperty = nativeModule.getProperty as (engine: object, className: string, propName: string) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    syncState(engine, 'LoginViewModel', 'username', '"alice"');

    const result = JSON.parse(getProperty(engine, 'LoginViewModel', 'username'));
    expect(result).toBe('alice');
  });

  test('TB-20: syncStateBatch → getProperty for multiple properties', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (engine: object, name: string) => void;
    const syncStateBatch = nativeModule.syncStateBatch as (engine: object, className: string, jsonMap: string) => void;
    const getProperty = nativeModule.getProperty as (engine: object, className: string, propName: string) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    syncStateBatch(engine, 'LoginViewModel', JSON.stringify({
      username: 'bob',
      password: 'secret123',
    }));

    expect(JSON.parse(getProperty(engine, 'LoginViewModel', 'username'))).toBe('bob');
    expect(JSON.parse(getProperty(engine, 'LoginViewModel', 'password'))).toBe('secret123');
  });

  test('TB-21: syncState with unknown property throws', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (engine: object, name: string) => void;
    const syncState = nativeModule.syncState as (engine: object, className: string, propName: string, jsonValue: string) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    expect(() => syncState(engine, 'LoginViewModel', 'nonexistent', '"x"')).toThrow(/not found/i);
  });

  test('TB-22: syncState with type mismatch throws', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (engine: object, name: string) => void;
    const syncState = nativeModule.syncState as (engine: object, className: string, propName: string, jsonValue: string) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    expect(() => syncState(engine, 'LoginViewModel', 'username', '42')).toThrow(/Type mismatch/i);
  });

  test('TB-23: syncState with unregistered ViewModel throws', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const syncState = nativeModule.syncState as (engine: object, className: string, propName: string, jsonValue: string) => void;

    const engine = createEngine();
    expect(() => syncState(engine, 'LoginViewModel', 'username', '"x"')).toThrow(/No active bridge/i);
  });
```

- [ ] **Step 3: Add QmltsHost class tests**

Add a new describe block:

```typescript
describe.skipIf(!isNativeModuleAvailable)('host/QmltsHost', () => {
  // Dynamic import - these tests exercise the TS wrapper class
  let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;

  beforeAll(async () => {
    const mod = await import('../../native/npm/qmlts-host/src/qmlts-host');
    QmltsHost = mod.QmltsHost;
  });

  test('TH-01: QmltsHost construction and disposal', () => {
    const host = new QmltsHost();
    expect(host.isInitialized).toBe(true);
    host.dispose();
    expect(host.isInitialized).toBe(false);
  });

  test('TH-02: QmltsHost syncState → getProperty round-trip', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.syncState('LoginViewModel', 'username', 'charlie');

    const value = host.getProperty('LoginViewModel', 'username');
    expect(value).toBe('charlie');
    host.dispose();
  });

  test('TH-03: QmltsHost throws after dispose', () => {
    const host = new QmltsHost();
    host.dispose();
    expect(() => host.registerViewModel('LoginViewModel')).toThrow(/disposed/i);
  });
});
```

- [ ] **Step 4: Add ViewModelManager tests**

Add a new describe block:

```typescript
describe.skipIf(!isNativeModuleAvailable)('host/ViewModelManager', () => {
  let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;
  let ViewModelManager: typeof import('../../native/npm/qmlts-host/src/viewmodel-manager').ViewModelManager;

  beforeAll(async () => {
    const hostMod = await import('../../native/npm/qmlts-host/src/qmlts-host');
    QmltsHost = hostMod.QmltsHost;
    const managerMod = await import('../../native/npm/qmlts-host/src/viewmodel-manager');
    ViewModelManager = managerMod.ViewModelManager;
  });

  const loginSchema = {
    className: 'LoginViewModel',
    states: [
      { name: 'username', deferred: false },
      { name: 'password', deferred: false },
      { name: 'isLoading', deferred: false },
    ],
  };

  test('TVM-01: register syncs initial state', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const instance = { username: 'dave', password: 'pw123', isLoading: false };

    manager.register(loginSchema, instance);

    expect(manager.count).toBe(1);
    expect(manager.classNames).toEqual(['LoginViewModel']);

    const username = manager.getProperty<string>('LoginViewModel', 'username');
    expect(username).toBe('dave');
    host.dispose();
  });

  test('TVM-02: sync reads only schema-declared fields', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const instance = {
      username: 'eve',
      password: 'pass',
      isLoading: false,
      _internalHelper: 'should not sync',
      computedValue: 42,
    };

    manager.register(loginSchema, instance);

    // Schema-declared fields are synced
    expect(manager.getProperty<string>('LoginViewModel', 'username')).toBe('eve');

    // Non-schema fields should NOT be written as Qt properties
    // Attempting to read them via getProperty should throw (not found in schema)
    expect(() => manager.getProperty('LoginViewModel', '_internalHelper')).toThrow(/not found/i);
    host.dispose();
  });

  test('TVM-03: unregister removes TS-side tracking', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const instance = { username: 'frank', password: '', isLoading: false };

    manager.register(loginSchema, instance);
    expect(manager.count).toBe(1);

    manager.unregister('LoginViewModel');
    expect(manager.count).toBe(0);
    expect(manager.classNames).toEqual([]);
    host.dispose();
  });

  test('TVM-04: sync unregistered className throws', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    expect(() => manager.sync('LoginViewModel')).toThrow(/not registered/i);
    host.dispose();
  });
});
```

- [ ] **Step 5: Commit**

```bash
git add tests/host/napi-bindings.test.ts
git commit -m "test(ts): add property sync, QmltsHost, ViewModelManager behavioral tests"
```

---

### Task 15: Build verification, format, push, and PR

**Files:** None (build/test/CI)

- [ ] **Step 1: Run Rust mock-qt tests**

Run: `cd native && cargo test -p qmlts-host --features mock-qt`
Expected: All tests pass.

- [ ] **Step 2: Run Rust real-Qt tests (local)**

Run: `cd native && cargo test -p qmlts-host --no-default-features`
Expected: All tests pass (including new property sync integration tests).

- [ ] **Step 3: Run generated crate tests**

Run: `cd native && cargo test -p qmlts-host-generated`
Expected: All tests pass.

- [ ] **Step 4: Build N-API module**

Run: `cd native/npm/qmlts-host && bunx @napi-rs/cli@3.0.0-alpha.65 build --manifest-path ../../crates/qmlts-host/Cargo.toml --package-json-path package.json --output-dir . --platform --release --no-js --features napi`
Expected: Build succeeds, produces `.node` file.

- [ ] **Step 5: Run TypeScript tests**

Run: `cd C:\MyFile\DevAll\QmlTS && bun test tests/host/napi-bindings.test.ts`
Expected: All tests pass including new TB-19 through TB-23, TH-01 through TH-03, TVM-01 through TVM-04.

- [ ] **Step 6: Run biome format/lint**

Run: `cd C:\MyFile\DevAll\QmlTS && bunx biome format --write native/npm/ tests/host/ && bunx biome check --fix native/npm/ tests/host/`
Expected: Files formatted with LF line endings.

- [ ] **Step 7: Commit any format fixes**

```bash
git add -A
git diff --cached --stat
git commit -m "style: format TypeScript files with biome" --allow-empty
```

- [ ] **Step 8: Push and open PR**

```bash
git push origin step-3/property-sync
```

Then open a PR:
- Title: `feat: Step 3 — property synchronization and TypeScript runtime layer`
- Base: `main`
- Body: summarize what was implemented, link to spec
