import QtQuick 6.7
import TestApp.ViewModels 1.0
import QML 1.0

Rectangle {
    LoginViewModel {
        id: __qmlts_vm0

        onLoginCompleted: function(success) { }
    }

    width: 400
    height: 300

    Column {
        Text {
            text: __qmlts_vm0.username
        }

        Text {
            text: __qmlts_vm0.password
        }

        Text {
            text: __qmlts_vm0.isLoading
        }
    }

    Component.onCompleted: { __qmlts_vm0.onMounted() }
}
