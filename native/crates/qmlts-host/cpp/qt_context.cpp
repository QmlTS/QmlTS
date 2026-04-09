// Qt context shim — thin C wrappers around QQmlEngine context operations.
//
// These functions are called from Rust via extern "C" FFI to set context
// properties on the QML engine's root context.

#include <QObject>
#include <QQmlEngine>
#include <QQmlContext>
#include <QString>

extern "C" {

/// Set a context property on the engine's root context.
///
/// # Safety
/// - `engine_ptr` must be a valid QQmlEngine pointer
/// - `name` must be a valid null-terminated C string
/// - `qobject_ptr` must be a valid QObject pointer (or null to clear)
void qmlts_set_context_property(void* engine_ptr, const char* name, void* qobject_ptr) {
    auto* engine = static_cast<QQmlEngine*>(engine_ptr);
    auto* obj = static_cast<QObject*>(qobject_ptr);
    engine->rootContext()->setContextProperty(QString::fromUtf8(name), obj);
}

/// Clear (remove) a context property by setting it to null.
void qmlts_clear_context_property(void* engine_ptr, const char* name) {
    auto* engine = static_cast<QQmlEngine*>(engine_ptr);
    engine->rootContext()->setContextProperty(
        QString::fromUtf8(name), static_cast<QObject*>(nullptr));
}

} // extern "C"
