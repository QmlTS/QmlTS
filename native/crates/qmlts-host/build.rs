//! Build script for qmlts-host
//!
//! This script integrates:
//! - napi-rs for Node.js/Bun native module generation
//! - cxx-qt-build for Qt/C++ interop (when Qt is available)

fn main() {
    // napi-rs build setup
    napi_build::setup();

    // cxx-qt-build integration will be added when we implement
    // the actual Qt bindings. For the bootstrap step, we just
    // ensure the napi-rs setup is correct.

    // TODO: Add cxx-qt-build integration
    // let qt_modules = ["Core", "Gui", "Qml", "Quick"];
    // cxx_qt_build::CxxQtBuilder::new()
    //     .qt_modules(&qt_modules)
    //     .build();

    println!("cargo:rerun-if-changed=src/");
}
