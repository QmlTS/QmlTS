//! QmltsRuntime bridge module.
//!
//! The `__qmlts` runtime object exposed to QML providing:
//! - `invoke(commandId, args)` - Invokes a command by ID
//! - `onMounted()` - Lifecycle hook called in Component.onCompleted
//! - `onUnmounting()` - Lifecycle hook called in Component.onDestruction
//! - Effect signals for reactive updates

use cxx_qt::CxxQtType;
use std::collections::HashMap;

#[cxx_qt::bridge]
pub mod ffi {
    unsafe extern "C++" {
        include!("cxx-qt-lib/qstring.h");
        type QString = cxx_qt_lib::QString;
    }

    unsafe extern "RustQt" {
        #[qobject]
        #[qml_element]
        type QmltsRuntime = super::QmltsRuntimeRust;

        /// Signal emitted to trigger an effect by ID
        #[qsignal]
        fn effect_triggered(self: Pin<&mut QmltsRuntime>, effect_id: QString);

        /// Signal emitted when a command completes
        #[qsignal]
        fn command_completed(self: Pin<&mut QmltsRuntime>, command_id: QString, result: QString);

        /// Signal emitted when a command fails
        #[qsignal]
        fn command_failed(self: Pin<&mut QmltsRuntime>, command_id: QString, error: QString);

        /// Invoke a command by ID with optional JSON arguments
        #[qinvokable]
        fn invoke(self: Pin<&mut QmltsRuntime>, command_id: &QString, args: &QString) -> QString;

        /// Called when the QML component is mounted (Component.onCompleted)
        #[qinvokable]
        fn on_mounted(self: Pin<&mut QmltsRuntime>);

        /// Called when the QML component is about to be destroyed (Component.onDestruction)
        #[qinvokable]
        fn on_unmounting(self: Pin<&mut QmltsRuntime>);

        /// Queue an effect to be triggered
        #[qinvokable]
        fn queue_effect(self: Pin<&mut QmltsRuntime>, effect_id: &QString);

        /// Process all queued effects (emits effect_triggered for each)
        #[qinvokable]
        fn process_effects(self: Pin<&mut QmltsRuntime>);

        /// Set the command handler callback ID (for routing to TS)
        #[qinvokable]
        fn set_command_handler(self: Pin<&mut QmltsRuntime>, handler_id: &QString);

        /// Check if the runtime is mounted
        #[qinvokable]
        fn is_mounted(self: &QmltsRuntime) -> bool;
    }
}

/// Rust-side implementation for QmltsRuntime
#[derive(Default)]
pub struct QmltsRuntimeRust {
    mounted: bool,
    effect_queue: Vec<String>,
    command_handler_id: Option<String>,
    pending_commands: HashMap<String, String>, // command_id -> args
}

impl ffi::QmltsRuntime {
    fn invoke(
        mut self: std::pin::Pin<&mut Self>,
        command_id: &cxx_qt_lib::QString,
        args: &cxx_qt_lib::QString,
    ) -> cxx_qt_lib::QString {
        let cmd_id = command_id.to_string();
        let args_str = args.to_string();

        // Store the pending command
        self.as_mut()
            .rust_mut()
            .pending_commands
            .insert(cmd_id.clone(), args_str);

        // Return a placeholder result - actual execution happens on TS side
        cxx_qt_lib::QString::from(&format!(r#"{{"pending":"{}"}}"#, cmd_id))
    }

    fn on_mounted(mut self: std::pin::Pin<&mut Self>) {
        self.as_mut().rust_mut().mounted = true;
        // Process any effects that were queued before mount
        self.process_effects();
    }

    fn on_unmounting(mut self: std::pin::Pin<&mut Self>) {
        self.as_mut().rust_mut().mounted = false;
        // Clear pending state
        self.as_mut().rust_mut().effect_queue.clear();
        self.as_mut().rust_mut().pending_commands.clear();
    }

    fn queue_effect(mut self: std::pin::Pin<&mut Self>, effect_id: &cxx_qt_lib::QString) {
        let id = effect_id.to_string();
        if !self.rust().effect_queue.contains(&id) {
            self.as_mut().rust_mut().effect_queue.push(id);
        }
    }

    fn process_effects(mut self: std::pin::Pin<&mut Self>) {
        // Take ownership of the queue to avoid borrow issues
        let effects: Vec<String> = std::mem::take(&mut self.as_mut().rust_mut().effect_queue);

        for effect_id in effects {
            let qstr = cxx_qt_lib::QString::from(&effect_id);
            self.as_mut().effect_triggered(qstr);
        }
    }

    fn set_command_handler(mut self: std::pin::Pin<&mut Self>, handler_id: &cxx_qt_lib::QString) {
        let id = handler_id.to_string();
        self.as_mut().rust_mut().command_handler_id = if id.is_empty() { None } else { Some(id) };
    }

    fn is_mounted(&self) -> bool {
        self.rust().mounted
    }
}

/// Wrapper providing Rust-side access to QmltsRuntime functionality
pub struct QmltsRuntimeBridge {
    mounted: bool,
    effect_queue: Vec<String>,
}

impl Default for QmltsRuntimeBridge {
    fn default() -> Self {
        Self::new()
    }
}

impl QmltsRuntimeBridge {
    pub fn new() -> Self {
        Self {
            mounted: false,
            effect_queue: Vec::new(),
        }
    }

    pub fn is_mounted(&self) -> bool {
        self.mounted
    }

    pub fn on_mounted(&mut self) {
        self.mounted = true;
    }

    pub fn on_unmounting(&mut self) {
        self.mounted = false;
        self.effect_queue.clear();
    }

    pub fn queue_effect(&mut self, effect_id: &str) {
        if !self.effect_queue.contains(&effect_id.to_string()) {
            self.effect_queue.push(effect_id.to_string());
        }
    }

    pub fn drain_effects(&mut self) -> Vec<String> {
        std::mem::take(&mut self.effect_queue)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_runtime_bridge_lifecycle() {
        let mut runtime = QmltsRuntimeBridge::new();
        assert!(!runtime.is_mounted());

        runtime.on_mounted();
        assert!(runtime.is_mounted());

        runtime.on_unmounting();
        assert!(!runtime.is_mounted());
    }

    #[test]
    fn test_runtime_bridge_effect_queue() {
        let mut runtime = QmltsRuntimeBridge::new();

        runtime.queue_effect("effect1");
        runtime.queue_effect("effect2");
        runtime.queue_effect("effect1"); // Duplicate should be ignored

        let effects = runtime.drain_effects();
        assert_eq!(effects, vec!["effect1", "effect2"]);

        // Queue should be empty after drain
        let effects = runtime.drain_effects();
        assert!(effects.is_empty());
    }

    #[test]
    fn test_runtime_bridge_unmount_clears_queue() {
        let mut runtime = QmltsRuntimeBridge::new();
        runtime.on_mounted();
        runtime.queue_effect("effect1");

        runtime.on_unmounting();

        let effects = runtime.drain_effects();
        assert!(effects.is_empty());
    }
}
