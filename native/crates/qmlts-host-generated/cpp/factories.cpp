// C++ factory functions for cxx-qt generated QObject types.
//
// These thin wrappers call the generated QObject constructors and
// return opaque void* pointers that Rust can store and pass to
// QQmlContext::setContextProperty().

#include "qmlts-host-generated/src/login_view_model.cxxqt.h"
#include "qmlts-host-generated/src/counter_view_model.cxxqt.h"
#include "qmlts-host-generated/src/login_runtime.cxxqt.h"
#include "qmlts-host-generated/src/counter_runtime.cxxqt.h"

extern "C" {

void* qmlts_create_login_view_model() {
    return static_cast<QObject*>(new LoginViewModel());
}

void* qmlts_create_counter_view_model() {
    return static_cast<QObject*>(new CounterViewModel());
}

void* qmlts_create_login_runtime() {
    return static_cast<QObject*>(new LoginRuntime());
}

void* qmlts_create_counter_runtime() {
    return static_cast<QObject*>(new CounterRuntime());
}

void qmlts_destroy_qobject(void* ptr) {
    delete static_cast<QObject*>(ptr);
}

} // extern "C"
