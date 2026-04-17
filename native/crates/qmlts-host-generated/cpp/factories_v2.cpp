// V2 C++ factory functions — type registration, property change forwarding,
// and lifecycle management for V2 QObjects.
//
// Type registration: qmlRegisterType<T>() for each V2 QObject type.
// Property forwarding: typed signal connections for writable property NOTIFY signals.
// Lifecycle: QObject::destroyed handler for instance cleanup.
//
// Returns >= 0 (Qt type ID) on success, < 0 on error (registration functions).

#include <QtQml/qqml.h>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>
#include <QVariant>
#include "qmlts-host-generated/src/login_v2.cxxqt.h"
#include "qmlts-host-generated/src/counter_v2.cxxqt.h"
#include "qmlts-host-generated/src/search_v2.cxxqt.h"

// Rust callbacks (defined in v2_dispatch.rs)
extern "C" void qmlts_v2_route_property_changed(
    int owner_id, int instance_id,
    const char* prop_name, const char* value_json
);
extern "C" void qmlts_v2_route_instance_destroying(
    int owner_id, int instance_id
);

// Helper: serialize QString to JSON string value
static QByteArray qstringToJson(const QString& s) {
    QJsonArray values;
    values.append(s);
    const QByteArray arrayJson = QJsonDocument(values).toJson(QJsonDocument::Compact);
    // QJsonDocument serializes only arrays/objects. Strip the surrounding
    // single-element array brackets to return the JSON string literal.
    return arrayJson.mid(1, arrayJson.size() - 2);
}

extern "C" {

// ─────────────────────────────────────────────────────────────────────────
//  Type Registration
// ─────────────────────────────────────────────────────────────────────────

int qmlts_register_login_v2(const char* uri, int major, int minor, const char* qml_name) {
    if (!uri || !qml_name) return -1;
    return qmlRegisterType<LoginViewModelV2>(uri, major, minor, qml_name);
}

int qmlts_register_counter_v2(const char* uri, int major, int minor, const char* qml_name) {
    if (!uri || !qml_name) return -1;
    return qmlRegisterType<CounterViewModelV2>(uri, major, minor, qml_name);
}

int qmlts_register_search_v2(const char* uri, int major, int minor, const char* qml_name) {
    if (!uri || !qml_name) return -1;
    return qmlRegisterType<SearchViewModelV2>(uri, major, minor, qml_name);
}

// ─────────────────────────────────────────────────────────────────────────
//  Property Change Forwarding (per-type typed signal connections)
// ─────────────────────────────────────────────────────────────────────────

bool qmlts_v2_connect_login_properties(void* qobj, int owner_id, int instance_id) {
    auto* obj = static_cast<LoginViewModelV2*>(qobj);
    if (!obj) return false;

    // username (writable, QString)
    QObject::connect(obj, &LoginViewModelV2::usernameChanged, obj,
        [owner_id, instance_id, obj]() {
            if (obj->property("__qmlts_v2_suppress").toBool()) return;
            QByteArray json = qstringToJson(obj->getUsername());
            qmlts_v2_route_property_changed(owner_id, instance_id, "username", json.constData());
        });

    // password (writable, QString)
    QObject::connect(obj, &LoginViewModelV2::passwordChanged, obj,
        [owner_id, instance_id, obj]() {
            if (obj->property("__qmlts_v2_suppress").toBool()) return;
            QByteArray json = qstringToJson(obj->getPassword());
            qmlts_v2_route_property_changed(owner_id, instance_id, "password", json.constData());
        });

    // isLoading is read-only — no forwarding needed
    return true;
}

bool qmlts_v2_connect_counter_properties(void* qobj, int owner_id, int instance_id) {
    auto* obj = static_cast<CounterViewModelV2*>(qobj);
    if (!obj) return false;

    // count (writable, i32)
    QObject::connect(obj, &CounterViewModelV2::countChanged, obj,
        [owner_id, instance_id, obj]() {
            if (obj->property("__qmlts_v2_suppress").toBool()) return;
            QByteArray json = QByteArray::number(obj->getCount());
            qmlts_v2_route_property_changed(owner_id, instance_id, "count", json.constData());
        });

    return true;
}

bool qmlts_v2_connect_search_properties(void* qobj, int owner_id, int instance_id) {
    auto* obj = static_cast<SearchViewModelV2*>(qobj);
    if (!obj) return false;

    // query (writable, QString)
    QObject::connect(obj, &SearchViewModelV2::queryChanged, obj,
        [owner_id, instance_id, obj]() {
            if (obj->property("__qmlts_v2_suppress").toBool()) return;
            QByteArray json = qstringToJson(obj->getQuery());
            qmlts_v2_route_property_changed(owner_id, instance_id, "query", json.constData());
        });

    // resultCount is read-only — no forwarding needed
    return true;
}

// ─────────────────────────────────────────────────────────────────────────
//  Suppress & Lifecycle
// ─────────────────────────────────────────────────────────────────────────

void qmlts_v2_set_suppress(void* qobj, bool suppress) {
    auto* obj = static_cast<QObject*>(qobj);
    if (obj) obj->setProperty("__qmlts_v2_suppress", suppress);
}

void qmlts_v2_connect_destroy_handler(void* qobj, int owner_id, int instance_id) {
    auto* obj = static_cast<QObject*>(qobj);
    if (!obj) return;
    QObject::connect(obj, &QObject::destroyed, [owner_id, instance_id]() {
        qmlts_v2_route_instance_destroying(owner_id, instance_id);
    });
}

} // extern "C"
