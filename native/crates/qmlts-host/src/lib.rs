//! QmlTS Host - Native runtime for QmlTS framework
//!
//! This crate provides the napi-rs native module that bridges TypeScript
//! ViewModels to Qt QML via cxx-qt.
//!
//! # Architecture
//!
//! ```text
//! ┌─────────────────────────────────────────┐
//! │  TypeScript Runtime                      │
//! │  @qmlts/host (napi-rs bindings)          │
//! ├─────────────────────────────────────────┤
//! │  napi-rs boundary                        │
//! │  .node native plugin                     │
//! ├─────────────────────────────────────────┤
//! │  Rust Host (this crate)                  │
//! │  QmltsEngine + PropertySync + Commands   │
//! ├─────────────────────────────────────────┤
//! │  cxx-qt generated QObject types          │
//! ├─────────────────────────────────────────┤
//! │  Qt 6.11.0 (QtQml, QtQuick)              │
//! └─────────────────────────────────────────┘
//! ```

#![deny(unsafe_op_in_unsafe_fn)]
#![warn(clippy::pedantic)]
#![allow(clippy::module_name_repetitions)]
#![allow(clippy::doc_markdown)] // Allow QmlTS, QtQuick, etc. without backticks
#![allow(clippy::must_use_candidate)] // Bootstrap step, will add #[must_use] later
#![allow(clippy::needless_pass_by_value)] // napi-rs requires owned strings
#![allow(clippy::missing_errors_doc)] // Bootstrap step, errors are documented in @throws
#![allow(clippy::unnecessary_wraps)] // napi-rs requires Result return types
#![allow(clippy::unused_self)] // Self may be used in future Qt integration

mod bridge_registry;
mod engine;
mod error;
mod property_sync;
#[cfg(feature = "napi")]
mod exports;
mod qt_context;

pub use bridge_registry::BridgeRegistry;
pub use engine::QmltsEngine;
pub use error::QmltsError;
#[cfg(feature = "napi")]
pub use exports::*;
