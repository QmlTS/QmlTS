fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .qt_module("Qml")
        // V1 bridge files
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .file("src/search_view_model.rs")
        .file("src/login_runtime.rs")
        .file("src/counter_runtime.rs")
        .file("src/search_runtime.rs")
        // V2 bridge files
        .file("src/login_v2.rs")
        .file("src/counter_v2.rs")
        .file("src/search_v2.rs")
        .cc_builder(|cc| {
            cc.file("cpp/factories.cpp");
            cc.file("cpp/factories_v2.cpp");
        })
        .build();
}
