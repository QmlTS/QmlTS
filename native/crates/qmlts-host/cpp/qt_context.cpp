// Qt context shim — thin C wrappers around QQmlApplicationEngine and context operations.
//
// These functions are called from Rust via extern "C" FFI to set context
// properties on the QML engine's root context.

#include <QByteArray>
#include <QCoreApplication>
#include <QEventLoop>
#include <QGuiApplication>
#include <QObject>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QString>
#include <QUrl>
#include <QVariant>
#include <cstddef>
#include <cstdint>

namespace {
QGuiApplication* ensure_application()
{
    if (auto* existing = qobject_cast<QGuiApplication*>(QCoreApplication::instance())) {
        return existing;
    }

    static int argc = 1;
    static char app_name[] = "qmlts-host";
    static char* argv[] = { app_name, nullptr };
    static QGuiApplication* app = new QGuiApplication(argc, argv);
    return app;
}
}

extern "C" {

void* qmlts_create_engine() {
    ensure_application();
    return static_cast<void*>(new QQmlApplicationEngine());
}

void qmlts_destroy_engine(void* engine_ptr) {
    if (!engine_ptr) {
        return;
    }
    delete static_cast<QQmlApplicationEngine*>(engine_ptr);
}

/// Set a context property on the engine's root context.
///
/// # Safety
/// - `engine_ptr` must be a valid QQmlEngine pointer
/// - `name` must be a valid null-terminated C string
/// - `qobject_ptr` must be a valid QObject pointer (or null to clear)
bool qmlts_set_context_property(void* engine_ptr, const char* name, void* qobject_ptr) {
    if (!engine_ptr || !name) {
        return false;
    }

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    auto* obj = static_cast<QObject*>(qobject_ptr);
    engine->rootContext()->setContextProperty(QString::fromUtf8(name), obj);
    return true;
}

/// Clear (remove) a context property by setting it to null.
bool qmlts_clear_context_property(void* engine_ptr, const char* name) {
    if (!engine_ptr || !name) {
        return false;
    }

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    engine->rootContext()->setContextProperty(
        QString::fromUtf8(name), static_cast<QObject*>(nullptr));
    return true;
}

bool qmlts_has_context_property(void* engine_ptr, const char* name) {
    if (!engine_ptr || !name) {
        return false;
    }

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    const QVariant property = engine->rootContext()->contextProperty(QString::fromUtf8(name));
    return property.isValid() && !property.isNull();
}

bool qmlts_load_data(void* engine_ptr, const char* data, std::size_t data_len, const char* url) {
    if (!engine_ptr || !data) {
        return false;
    }

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    const QByteArray bytes(data, static_cast<qsizetype>(data_len));
    const QUrl base_url = (url && url[0] != '\0')
        ? QUrl(QString::fromUtf8(url))
        : QUrl();

    const auto root_count = engine->rootObjects().size();
    engine->loadData(bytes, base_url);
    return engine->rootObjects().size() > root_count;
}

bool qmlts_load_url(void* engine_ptr, const char* path) {
    if (!engine_ptr || !path) {
        return false;
    }

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    const auto root_count = engine->rootObjects().size();
    engine->load(QUrl::fromLocalFile(QString::fromUtf8(path)));
    return engine->rootObjects().size() > root_count;
}

void qmlts_process_events() {
    if (auto* app = QCoreApplication::instance()) {
        app->processEvents();
    }
}

void qmlts_process_events_for(std::uint32_t timeout_ms) {
    if (auto* app = QCoreApplication::instance()) {
        app->processEvents(QEventLoop::AllEvents, static_cast<int>(timeout_ms));
    }
}

int qmlts_exec() {
    if (QCoreApplication::instance()) {
        return QCoreApplication::exec();
    }
    return 0;
}

void qmlts_quit(int exit_code) {
    if (auto* app = QCoreApplication::instance()) {
        app->exit(exit_code);
    }
}

bool qmlts_read_int_property(void* qobject_ptr, const char* name, std::int32_t* out_value) {
    if (!qobject_ptr || !name || !out_value) {
        return false;
    }

    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return false;
    }

    bool ok = false;
    const int converted = value.toInt(&ok);
    if (!ok) {
        return false;
    }

    *out_value = static_cast<std::int32_t>(converted);
    return true;
}

} // extern "C"
