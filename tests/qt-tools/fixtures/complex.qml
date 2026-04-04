import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

ApplicationWindow {
    id: mainWindow
    width: 800
    height: 600
    visible: true
    title: "Complex QML"

    signal clicked(string message)

    property int counter: 0
    property alias label: headerText.text

    function increment(): void {
        counter++;
    }

    ColumnLayout {
        anchors.fill: parent
        spacing: 10

        Text {
            id: headerText
            text: "Count: " + counter
            font.pixelSize: 24
            Layout.alignment: Qt.AlignHCenter
        }

        Button {
            text: "Increment"
            Layout.alignment: Qt.AlignHCenter
            onClicked: {
                mainWindow.increment();
                mainWindow.clicked("Button pressed");
            }
        }

        Rectangle {
            Layout.fillWidth: true
            Layout.preferredHeight: 2
            color: "#cccccc"
        }

        ListView {
            Layout.fillWidth: true
            Layout.fillHeight: true
            model: 10
            delegate: Text {
                required property int index
                text: "Item " + index
                padding: 8
            }
        }
    }
}
