use cxx_qt_build::CxxQtBuilder;

fn main() {
    CxxQtBuilder::new()
        .qt_module("Qml")
        .qml_module(cxx_qt_build::QmlModule::<&str, &str> {
            uri: "QmlTS.Generated",
            rust_files: &[
                "src/counter_vm.rs",
                "src/login_vm.rs",
                "src/qmlts_runtime.rs",
            ],
            qml_files: &[],
            ..Default::default()
        })
        .build();
}
