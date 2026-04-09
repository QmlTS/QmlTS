fn main() {
    cxx_qt_build::CxxQtBuilder::new()
        .qt_module("Core")
        .build();
}
