//! LoginViewModel bridge QObject — set as `vm` context property.
//!
//! Properties match the compiler schema:
//! - username: string (QString)
//! - password: string (QString)
//! - isLoading: bool (read-only in schema, but writable here for host to set)

#[cxx_qt::bridge]
pub mod qobject {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    unsafe extern "RustQt" {
        #[qobject]
        #[qproperty(QString, username)]
        #[qproperty(QString, password)]
        #[qproperty(bool, is_loading, cxx_name = "isLoading")]
        type LoginViewModel = super::LoginViewModelRust;
    }
}

use cxx_qt_lib::QString;

/// Rust backing struct for LoginViewModel.
#[derive(Default)]
pub struct LoginViewModelRust {
    username: QString,
    password: QString,
    is_loading: bool,
}
