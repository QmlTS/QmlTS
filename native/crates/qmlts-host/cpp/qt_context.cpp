// Qt context shim — thin C wrappers around QQmlApplicationEngine and context operations.
//
// These functions are called from Rust via extern "C" FFI to set context
// properties on the QML engine's root context.

#include <QByteArray>
#include <QCoreApplication>
#include <QEventLoop>
#include <QGuiApplication>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonValue>
#include <QObject>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QString>
#include <QUrl>
#include <QVariant>
#include <cstddef>
#include <cstdint>
#include <cstdlib>
#include <cstring>

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

// ─────────────────────────────────────────────────────────────────────────
//  Property set functions (Step 3)
// ─────────────────────────────────────────────────────────────────────────

bool qmlts_set_string_property(void* qobject_ptr, const char* name, const char* value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, QString::fromUtf8(value));
}

bool qmlts_set_int_property(void* qobject_ptr, const char* name, std::int32_t value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, static_cast<int>(value));
}

bool qmlts_set_double_property(void* qobject_ptr, const char* name, double value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, value);
}

bool qmlts_set_bool_property(void* qobject_ptr, const char* name, bool value) {
    if (!qobject_ptr || !name) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    return object->setProperty(name, value);
}

bool qmlts_set_property_json(void* qobject_ptr, const char* name, const char* json) {
    if (!qobject_ptr || !name || !json) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QByteArray bytes(json);
    const QJsonDocument doc = QJsonDocument::fromJson(bytes);
    if (doc.isNull()) {
        return false;
    }
    return object->setProperty(name, doc.toVariant());
}

// ─────────────────────────────────────────────────────────────────────────
//  Property read functions (Step 3)
// ─────────────────────────────────────────────────────────────────────────

char* qmlts_read_string_property(void* qobject_ptr, const char* name) {
    if (!qobject_ptr || !name) {
        return nullptr;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return nullptr;
    }
    const QByteArray utf8 = value.toString().toUtf8();
    char* result = static_cast<char*>(std::malloc(static_cast<std::size_t>(utf8.size()) + 1));
    if (result) {
        std::memcpy(result, utf8.constData(), static_cast<std::size_t>(utf8.size()));
        result[utf8.size()] = '\0';
    }
    return result;
}

char* qmlts_read_property_json(void* qobject_ptr, const char* name) {
    if (!qobject_ptr || !name) {
        return nullptr;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return nullptr;
    }

    const QByteArray utf8 = QJsonValue::fromVariant(value).toJson(QJsonValue::JsonFormat::Compact);
    char* result = static_cast<char*>(std::malloc(static_cast<std::size_t>(utf8.size()) + 1));
    if (result) {
        std::memcpy(result, utf8.constData(), static_cast<std::size_t>(utf8.size()));
        result[utf8.size()] = '\0';
    }
    return result;
}

bool qmlts_read_bool_property(void* qobject_ptr, const char* name, bool* out_value) {
    if (!qobject_ptr || !name || !out_value) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return false;
    }
    *out_value = value.toBool();
    return true;
}

bool qmlts_read_double_property(void* qobject_ptr, const char* name, double* out_value) {
    if (!qobject_ptr || !name || !out_value) {
        return false;
    }
    auto* object = static_cast<QObject*>(qobject_ptr);
    const QVariant value = object->property(name);
    if (!value.isValid()) {
        return false;
    }
    bool ok = false;
    const double converted = value.toDouble(&ok);
    if (!ok) {
        return false;
    }
    *out_value = converted;
    return true;
}

void qmlts_free_string(char* ptr) {
    std::free(ptr);
}

// ─────────────────────────────────────────────────────────────────────────
//  Root object helper (Step 3 — integration testing)
// ─────────────────────────────────────────────────────────────────────────

void* qmlts_root_object(void* engine_ptr) {
    if (!engine_ptr) {
        return nullptr;
    }
    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    const auto roots = engine->rootObjects();
    if (roots.isEmpty()) {
        return nullptr;
    }
    return static_cast<void*>(roots.first());
}

// ─────────────────────────────────────────────────────────────────────────
//  Signal emission (Step 4 — effects, Step 5 — multi-param)
// ─────────────────────────────────────────────────────────────────────────

bool qmlts_emit_signal(void* qobject_ptr, const char* signal_name,
                       const char* payload_json, const char* param_types_json) {
    if (!qobject_ptr || !signal_name) {
        return false;
    }

    auto* object = static_cast<QObject*>(qobject_ptr);

    // No payload — emit signal with no arguments
    if (!payload_json || payload_json[0] == '\0') {
        return QMetaObject::invokeMethod(object, signal_name);
    }

    // Parse payload JSON array
    const QByteArray bytes(payload_json);
    const QJsonDocument doc = QJsonDocument::fromJson(bytes);
    if (doc.isNull()) {
        return false;
    }

    // ── Multi-parameter path (schema-aware) ──────────────────────────
    //
    // When param_types_json is provided, use schema type info to build
    // properly typed arguments for QMetaObject::invokeMethod.
    if (param_types_json && param_types_json[0] != '\0') {
        const QByteArray typesBytes(param_types_json);
        const QJsonDocument typesDoc = QJsonDocument::fromJson(typesBytes);
        if (typesDoc.isNull() || !typesDoc.isArray()) {
            return false;
        }
        const QJsonArray paramTypes = typesDoc.array();

        // Payload must be an array matching param count
        if (!doc.isArray()) {
            return false;
        }
        const QJsonArray payload = doc.array();
        if (payload.size() != paramTypes.size()) {
            return false;
        }

        const int count = payload.size();
        if (count == 0) {
            return QMetaObject::invokeMethod(object, signal_name);
        }

        // Build typed QVariant storage with proper types
        // We allocate typed storage on the stack and build QGenericArgument array.
        // Max 10 params supported.
        if (count > 10) {
            return false;
        }

        // Storage for typed values
        QString strings[10];
        int ints[10];
        double doubles[10];
        bool bools[10];

        QGenericArgument args[10];

        for (int i = 0; i < count; ++i) {
            const QJsonObject paramDef = paramTypes[i].toObject();
            const QString type = paramDef["type"].toString();
            const QJsonValue val = payload[i];

            if (type == "string") {
                strings[i] = val.toString();
                args[i] = Q_ARG(QString, strings[i]);
            } else if (type == "int") {
                ints[i] = val.toInt();
                args[i] = Q_ARG(int, ints[i]);
            } else if (type == "number" || type == "double") {
                doubles[i] = val.toDouble();
                args[i] = Q_ARG(double, doubles[i]);
            } else if (type == "boolean") {
                bools[i] = val.toBool();
                args[i] = Q_ARG(bool, bools[i]);
            } else {
                // Unknown type — try QString fallback
                strings[i] = val.toString();
                args[i] = Q_ARG(QString, strings[i]);
            }
        }

        return QMetaObject::invokeMethod(object, signal_name,
            args[0],
            count > 1 ? args[1] : QGenericArgument(),
            count > 2 ? args[2] : QGenericArgument(),
            count > 3 ? args[3] : QGenericArgument(),
            count > 4 ? args[4] : QGenericArgument(),
            count > 5 ? args[5] : QGenericArgument(),
            count > 6 ? args[6] : QGenericArgument(),
            count > 7 ? args[7] : QGenericArgument(),
            count > 8 ? args[8] : QGenericArgument(),
            count > 9 ? args[9] : QGenericArgument());
    }

    // ── Single-parameter fallback (heuristic, backward-compat) ───────

    QJsonValue val;
    if (doc.isArray()) {
        const QJsonArray array = doc.array();
        if (array.size() != 1) {
            return false;
        }
        val = array.first();
    } else {
        val = QJsonValue::fromVariant(doc.toVariant());
    }

    if (val.isBool()) {
        return QMetaObject::invokeMethod(object, signal_name,
            Q_ARG(bool, val.toBool()));
    }
    if (val.isDouble()) {
        // Try integer first
        const double d = val.toDouble();
        if (d == static_cast<double>(static_cast<int>(d))) {
            return QMetaObject::invokeMethod(object, signal_name,
                Q_ARG(int, static_cast<int>(d)));
        }
        return QMetaObject::invokeMethod(object, signal_name,
            Q_ARG(double, d));
    }
    if (val.isString()) {
        const QString s = val.toString();
        return QMetaObject::invokeMethod(object, signal_name,
            Q_ARG(QString, s));
    }

    // Fallback: emit with no arguments
    return QMetaObject::invokeMethod(object, signal_name);
}

} // extern "C"
