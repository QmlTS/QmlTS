fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .file("src/search_view_model.rs")
        .file("src/login_runtime.rs")
        .file("src/counter_runtime.rs")
        .file("src/search_runtime.rs")
        .cc_builder(|cc| {
            cc.file("cpp/factories.cpp");
        })
        .build();
}
