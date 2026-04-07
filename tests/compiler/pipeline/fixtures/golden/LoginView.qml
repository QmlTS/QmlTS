import QtQuick 6.7
import QtQml 6.0
import QML 1.0

Rectangle {
    width: 400
    height: 300

    Column {
        Text {
            text: vm.username
        }

        Text {
            text: vm.password
        }

        Text {
            text: vm.isLoading
        }
    }

    Connections {
        target: __qmlts

        function onOnLoginCompleted(success) {  }
    }

    Component.onCompleted: { __qmlts.onMounted() }
}
