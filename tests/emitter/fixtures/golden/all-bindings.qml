import QtQuick

Item {
    width: 400
    opacity: 0.5
    x: -10
    text: "hello"
    visible: true
    enabled: false
    model: null
    wrapMode: Text.WordWrap
    color: enabled ? "blue" : "gray"
    onClicked: { count++ }
    anchors {
        left: parent.left
        right: parent.right
    }
    Layout.fillWidth: true
    states: [
        "idle",
        "active"
    ]
    Behavior on opacity {
        NumberAnimation {
            duration: 200
        }
    }
}
