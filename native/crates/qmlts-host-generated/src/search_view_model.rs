//! `SearchViewModel` bridge QObject — set as `vm` context property.
//!
//! Properties:
//! - query: `QString` (string)
//! - `resultCount`: i32 (int)

use cxx_qt_lib::QString;

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++Qt" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    #[auto_cxx_name]
    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(QString, query)]
        #[qproperty(i32, result_count, cxx_name = "resultCount")]
        type SearchViewModel = super::SearchViewModelRust;
    }
}

/// Rust backing struct for `SearchViewModel`.
pub struct SearchViewModelRust {
    query: QString,
    result_count: i32,
}

impl Default for SearchViewModelRust {
    fn default() -> Self {
        Self {
            query: QString::from(""),
            result_count: 0,
        }
    }
}
