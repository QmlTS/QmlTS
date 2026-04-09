fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .file("src/login_view_model.rs")
        .file("src/counter_view_model.rs")
        .file("src/login_runtime.rs")
        .file("src/counter_runtime.rs")
        .build();
}
