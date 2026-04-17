import QtQuick 6.7
import TestApp.ViewModels 1.0

Rectangle {
    CounterViewModel {
        id: __qmlts_vm0
    }

    width: 200
    height: 100

    Text {
        text: __qmlts_vm0.count
    }
}
