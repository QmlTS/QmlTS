//! `CounterViewModel` bridge QObject — set as `vm` context property.
//!
//! Properties match the compiler schema:
//! - count: number (`i32`)

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(i32, count)]
        type CounterViewModel = super::CounterViewModelRust;
    }
}

/// Rust backing struct for `CounterViewModel`.
#[derive(Default)]
pub struct CounterViewModelRust {
    count: i32,
}
