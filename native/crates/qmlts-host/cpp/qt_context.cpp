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
#include <QAbstractListModel>
#include <QHash>
#include <QJsonObject>
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

// ─────────────────────────────────────────────────────────────────────────
//  QmltsListModel — dynamic QAbstractListModel with runtime-defined roles
// ─────────────────────────────────────────────────────────────────────────

class QmltsListModel : public QAbstractListModel {
public:
    explicit QmltsListModel(const QStringList& roleNames, QObject* parent = nullptr)
        : QAbstractListModel(parent)
    {
        // Role indices start at Qt::UserRole + 1
        for (int i = 0; i < roleNames.size(); ++i) {
            m_roleHash[Qt::UserRole + 1 + i] = roleNames[i].toUtf8();
            m_roleNames.append(roleNames[i]);
        }
    }

    [[nodiscard]] int rowCount(const QModelIndex& parent = QModelIndex()) const override {
        if (parent.isValid()) return 0;
        return static_cast<int>(m_data.size());
    }

    [[nodiscard]] QVariant data(const QModelIndex& index, int role) const override {
        if (!index.isValid() || index.row() < 0 || index.row() >= m_data.size()) {
            return {};
        }
        const auto it = m_roleHash.find(role);
        if (it == m_roleHash.end()) {
            return {};
        }
        const QString key = QString::fromUtf8(it.value());
        const QJsonObject& row = m_data[index.row()];
        if (!row.contains(key)) {
            return {};
        }
        return row[key].toVariant();
    }

    [[nodiscard]] QHash<int, QByteArray> roleNames() const override {
        return m_roleHash;
    }

    // ── Mutation API ─────────────────────────────────────────────────

    void setListData(const QJsonArray& rows) {
        beginResetModel();
        m_data.clear();
        m_data.reserve(rows.size());
        for (const auto& val : rows) {
            m_data.append(val.toObject());
        }
        endResetModel();
    }

    bool insertRows(int row, const QJsonArray& rows) {
        if (row < 0 || row > m_data.size() || rows.isEmpty()) {
            return false;
        }
        beginInsertRows(QModelIndex(), row, row + rows.size() - 1);
        for (int i = 0; i < rows.size(); ++i) {
            m_data.insert(row + i, rows[i].toObject());
        }
        endInsertRows();
        return true;
    }

    bool removeRows(int row, int count) {
        if (row < 0 || count <= 0 || row + count > m_data.size()) {
            return false;
        }
        beginRemoveRows(QModelIndex(), row, row + count - 1);
        m_data.erase(m_data.begin() + row, m_data.begin() + row + count);
        endRemoveRows();
        return true;
    }

    bool updateRow(int row, const QJsonObject& newData) {
        if (row < 0 || row >= m_data.size()) {
            return false;
        }
        m_data[row] = newData;
        emit dataChanged(index(row, 0), index(row, 0), {});
        return true;
    }

    bool moveRows(int sourceRow, int destRow, int count) {
        if (count <= 0 || sourceRow < 0 || sourceRow + count > m_data.size()
            || destRow < 0 || destRow > m_data.size()) {
            return false;
        }
        // Qt requires destRow not inside [sourceRow, sourceRow+count)
        if (destRow >= sourceRow && destRow < sourceRow + count) {
            return true; // no-op
        }
        if (!beginMoveRows(QModelIndex(), sourceRow, sourceRow + count - 1,
                           QModelIndex(), destRow)) {
            return false;
        }
        // Extract rows
        QList<QJsonObject> moving;
        moving.reserve(count);
        for (int i = 0; i < count; ++i) {
            moving.append(m_data[sourceRow + i]);
        }
        // Remove from source
        m_data.erase(m_data.begin() + sourceRow, m_data.begin() + sourceRow + count);
        // Insert at destination (adjust if source was before dest)
        int adjustedDest = destRow;
        if (sourceRow < destRow) {
            adjustedDest -= count;
        }
        for (int i = 0; i < count; ++i) {
            m_data.insert(adjustedDest + i, moving[i]);
        }
        endMoveRows();
        return true;
    }

    [[nodiscard]] QJsonObject getRow(int row) const {
        if (row < 0 || row >= m_data.size()) {
            return {};
        }
        return m_data[row];
    }

    [[nodiscard]] int rowCountValue() const {
        return static_cast<int>(m_data.size());
    }

private:
    QHash<int, QByteArray> m_roleHash;
    QStringList m_roleNames;
    QList<QJsonObject> m_data;
};

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
        // Track which type each param uses: 0=string, 1=int, 2=double, 3=bool
        int types[10] = {};

        for (int i = 0; i < count; ++i) {
            const QJsonObject paramDef = paramTypes[i].toObject();
            const QString type = paramDef["type"].toString();
            const QJsonValue val = payload[i];

            if (type == "string") {
                strings[i] = val.toString();
                types[i] = 0;
            } else if (type == "int") {
                ints[i] = val.toInt();
                types[i] = 1;
            } else if (type == "number" || type == "double") {
                doubles[i] = val.toDouble();
                types[i] = 2;
            } else if (type == "boolean") {
                bools[i] = val.toBool();
                types[i] = 3;
            } else {
                // Unknown type — try QString fallback
                strings[i] = val.toString();
                types[i] = 0;
            }
        }

        // Helper macro to produce Q_ARG for the i-th param based on its type
        #define QMLTS_ARG(i) \
            (types[i] == 0 ? Q_ARG(QString, strings[i]) : \
             types[i] == 1 ? Q_ARG(int, ints[i]) : \
             types[i] == 2 ? Q_ARG(double, doubles[i]) : \
                             Q_ARG(bool, bools[i]))

        // Qt 6.11 Q_ARG returns QMetaMethodArgument (not storable in arrays),
        // so we must expand the correct number of args directly:
        switch (count) {
            case 1:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0));
            case 2:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1));
            case 3:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2));
            case 4:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3));
            case 5:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4));
            case 6:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4), QMLTS_ARG(5));
            case 7:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4), QMLTS_ARG(5), QMLTS_ARG(6));
            case 8:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4), QMLTS_ARG(5), QMLTS_ARG(6), QMLTS_ARG(7));
            case 9:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4), QMLTS_ARG(5), QMLTS_ARG(6), QMLTS_ARG(7), QMLTS_ARG(8));
            case 10:
                return QMetaObject::invokeMethod(object, signal_name, QMLTS_ARG(0), QMLTS_ARG(1), QMLTS_ARG(2), QMLTS_ARG(3), QMLTS_ARG(4), QMLTS_ARG(5), QMLTS_ARG(6), QMLTS_ARG(7), QMLTS_ARG(8), QMLTS_ARG(9));
            default:
                return false;
        }
        #undef QMLTS_ARG
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

// ─────────────────────────────────────────────────────────────────────────
//  List model operations (Step 5)
// ─────────────────────────────────────────────────────────────────────────

void* qmlts_create_list_model(const char* schema_json) {
    if (!schema_json) {
        return nullptr;
    }
    const QByteArray bytes(schema_json);
    const QJsonDocument doc = QJsonDocument::fromJson(bytes);
    if (doc.isNull() || !doc.isObject()) {
        return nullptr;
    }
    const QJsonObject obj = doc.object();
    const QJsonArray roles = obj["roles"].toArray();
    QStringList roleNames;
    roleNames.reserve(roles.size());
    for (const auto& r : roles) {
        roleNames.append(r.toString());
    }
    if (roleNames.isEmpty()) {
        return nullptr;
    }
    return static_cast<void*>(new QmltsListModel(roleNames));
}

void qmlts_destroy_list_model(void* model_ptr) {
    delete static_cast<QmltsListModel*>(model_ptr);
}

void qmlts_list_set_data(void* model_ptr, const char* json_array) {
    if (!model_ptr || !json_array) return;
    auto* model = static_cast<QmltsListModel*>(model_ptr);
    const QJsonDocument doc = QJsonDocument::fromJson(QByteArray(json_array));
    if (!doc.isArray()) return;
    model->setListData(doc.array());
}

bool qmlts_list_insert_rows(void* model_ptr, int index, const char* json_rows) {
    if (!model_ptr || !json_rows) return false;
    auto* model = static_cast<QmltsListModel*>(model_ptr);
    const QJsonDocument doc = QJsonDocument::fromJson(QByteArray(json_rows));
    if (!doc.isArray()) return false;
    return model->insertRows(index, doc.array());
}

bool qmlts_list_remove_rows(void* model_ptr, int index, int count) {
    if (!model_ptr) return false;
    return static_cast<QmltsListModel*>(model_ptr)->removeRows(index, count);
}

bool qmlts_list_update_row(void* model_ptr, int index, const char* json_data) {
    if (!model_ptr || !json_data) return false;
    auto* model = static_cast<QmltsListModel*>(model_ptr);
    const QJsonDocument doc = QJsonDocument::fromJson(QByteArray(json_data));
    if (!doc.isObject()) return false;
    return model->updateRow(index, doc.object());
}

bool qmlts_list_move_rows(void* model_ptr, int source_row, int dest_row, int count) {
    if (!model_ptr) return false;
    return static_cast<QmltsListModel*>(model_ptr)->moveRows(source_row, dest_row, count);
}

int qmlts_list_row_count(void* model_ptr) {
    if (!model_ptr) return 0;
    return static_cast<QmltsListModel*>(model_ptr)->rowCountValue();
}

char* qmlts_list_get_row(void* model_ptr, int index) {
    if (!model_ptr) return nullptr;
    const QJsonObject row = static_cast<QmltsListModel*>(model_ptr)->getRow(index);
    if (row.isEmpty()) return nullptr;
    const QJsonDocument doc(row);
    const QByteArray bytes = doc.toJson(QJsonDocument::Compact);
    char* result = static_cast<char*>(malloc(static_cast<size_t>(bytes.size()) + 1));
    if (result) {
        memcpy(result, bytes.constData(), static_cast<size_t>(bytes.size()));
        result[bytes.size()] = '\0';
    }
    return result;
}

} // extern "C"
