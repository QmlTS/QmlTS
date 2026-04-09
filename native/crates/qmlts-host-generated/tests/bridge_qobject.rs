//! Integration tests for generated bridge QObjects.
//!
//! These tests require a real Qt installation. They verify that
//! cxx-qt bridge types can be instantiated and their factory
//! functions produce valid, independent QObject pairs.
//!
//! Run via: `cargo test -p qmlts-host-generated`
//! (requires Qt — skipped automatically on CI without Qt)

use qmlts_host_generated::descriptors;

#[test]
fn test_descriptors_contains_both_types() {
    let descs = descriptors();
    let names: Vec<&str> = descs.iter().map(|d| d.class_name).collect();
    assert!(names.contains(&"LoginViewModel"));
    assert!(names.contains(&"CounterViewModel"));
}

#[test]
fn test_login_view_model_creates_valid_qobjects() {
    let desc = descriptors()
        .iter()
        .find(|d| d.class_name == "LoginViewModel")
        .expect("LoginViewModel descriptor should exist");

    let bridge = (desc.create)();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}

#[test]
fn test_counter_view_model_creates_valid_qobjects() {
    let desc = descriptors()
        .iter()
        .find(|d| d.class_name == "CounterViewModel")
        .expect("CounterViewModel descriptor should exist");

    let bridge = (desc.create)();
    assert!(!bridge.vm_qobject_ptr().is_null());
    assert!(!bridge.runtime_qobject_ptr().is_null());
}

#[test]
fn test_multiple_creates_return_different_instances() {
    let desc = descriptors()
        .iter()
        .find(|d| d.class_name == "LoginViewModel")
        .unwrap();

    let bridge1 = (desc.create)();
    let bridge2 = (desc.create)();

    // Different QObject instances each time
    assert_ne!(bridge1.vm_qobject_ptr(), bridge2.vm_qobject_ptr());
    assert_ne!(
        bridge1.runtime_qobject_ptr(),
        bridge2.runtime_qobject_ptr()
    );
}

#[test]
fn test_bridge_instance_drops_cleanly() {
    let desc = descriptors()
        .iter()
        .find(|d| d.class_name == "CounterViewModel")
        .unwrap();

    // Create and immediately drop — verifies destructor doesn't crash
    let _bridge = (desc.create)();
}
