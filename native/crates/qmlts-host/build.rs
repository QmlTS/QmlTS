//! Build script for qmlts-host
//!
//! This script integrates:
//! - napi-rs for Node.js/Bun native module generation
//! - C++ Qt context shim compiled via cxx-qt-build (when Qt is available)

fn main() {
    // napi-rs build setup
    napi_build::setup();

    // Compile the Qt context C++ shim.
    // When mock-qt feature is active, we skip Qt compilation.
    #[cfg(not(feature = "mock-qt"))]
    {
        cxx_qt_build::CxxQtBuilder::new()
            .qt_module("Core")
            .qt_module("Gui")
            .qt_module("Qml")
            .cc_builder(|cc| {
                cc.file("cpp/qt_context.cpp");
            })
            .build();
    }

    println!("cargo:rerun-if-changed=src/");
    println!("cargo:rerun-if-changed=cpp/");
}
