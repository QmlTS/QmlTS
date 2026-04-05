/**
 * End-to-end acceptance tests for generated fluent DSL API.
 * These tests import actual generated factories and verify:
 * - Runtime fluent API works (property setters, signal handlers, etc.)
 * - Enum tokens are properly accessible via namespaces
 * - Grouped/attached builders work through callbacks
 * - Built AST nodes produce correct QML via emitter
 * - Non-P0 long-tail modules work at runtime
 */
import { describe, expect, test } from 'bun:test';
import { createDocument } from '../../src/ast/builder.js';
import { Entity } from '../../src/dsl/generated/Qt3D.Core/Entity.js';
import { ChartView } from '../../src/dsl/generated/QtCharts/ChartView.js';
import { LineSeries } from '../../src/dsl/generated/QtCharts/LineSeries.js';
import { Settings } from '../../src/dsl/generated/QtCore/Settings.js';
import { MediaPlayer } from '../../src/dsl/generated/QtMultimedia/MediaPlayer.js';
import { CoordinateAnimation } from '../../src/dsl/generated/QtPositioning/CoordinateAnimation.js';
import { Connections } from '../../src/dsl/generated/QtQml/Connections.js';
import { Timer } from '../../src/dsl/generated/QtQml/Timer.js';
import { Column } from '../../src/dsl/generated/QtQuick/Column.js';
import { Image } from '../../src/dsl/generated/QtQuick/Image.js';
import { Item } from '../../src/dsl/generated/QtQuick/Item.js';
import { MouseArea } from '../../src/dsl/generated/QtQuick/MouseArea.js';
import { Rectangle } from '../../src/dsl/generated/QtQuick/Rectangle.js';
import { Repeater } from '../../src/dsl/generated/QtQuick/Repeater.js';
import { Row } from '../../src/dsl/generated/QtQuick/Row.js';
import { Text } from '../../src/dsl/generated/QtQuick/Text.js';
import { FileDialog } from '../../src/dsl/generated/QtQuick.Dialogs/FileDialog.js';
import { MultiEffect } from '../../src/dsl/generated/QtQuick.Effects/MultiEffect.js';
import { ColumnLayout } from '../../src/dsl/generated/QtQuick.Layouts/ColumnLayout.js';
import { RowLayout } from '../../src/dsl/generated/QtQuick.Layouts/RowLayout.js';
import { StackLayout } from '../../src/dsl/generated/QtQuick.Layouts/StackLayout.js';
import { ParticleSystem } from '../../src/dsl/generated/QtQuick.Particles/ParticleSystem.js';
import { Shape } from '../../src/dsl/generated/QtQuick.Shapes/Shape.js';
import { Button } from '../../src/dsl/generated/QtQuick.Templates/Button.js';
import { Label } from '../../src/dsl/generated/QtQuick.Templates/Label.js';
import { Slider } from '../../src/dsl/generated/QtQuick.Templates/Slider.js';
import { TextField } from '../../src/dsl/generated/QtQuick.Templates/TextField.js';
import { Timeline } from '../../src/dsl/generated/QtQuick.Timeline/Timeline.js';
import { KeyboardObserver } from '../../src/dsl/generated/QtQuick.VirtualKeyboard.Core/KeyboardObserver.js';
import { View3D } from '../../src/dsl/generated/QtQuick3D/View3D.js';
import { StateMachineLoader } from '../../src/dsl/generated/QtScxml/StateMachineLoader.js';
import { Accelerometer } from '../../src/dsl/generated/QtSensors/Accelerometer.js';
import { WebEngineView } from '../../src/dsl/generated/QtWebEngine/WebEngineView.js';
import type { QmlColor } from '../../src/dsl/runtime/types.js';
import { emit } from '../../src/emitter/emitter.js';

describe('Acceptance: Generated Fluent API', () => {
  describe('ACC-01: Basic property setters', () => {
    test('Rectangle().width(100).height(50) works at runtime', () => {
      const rect = Rectangle()
        .width(100)
        .height(50)
        .color('red' as QmlColor);

      const node = rect.build();
      expect(node.kind).toBe('ObjectDefinition');
      expect(node.typeName).toBe('Rectangle');
      expect(node.members.length).toBe(3);
    });

    test('Rectangle produces correct QML', () => {
      const rect = Rectangle()
        .width(200)
        .height(100)
        .color('blue' as QmlColor);

      const doc = createDocument().importModule('QtQuick').root(rect);
      const qml = emit(doc);

      expect(qml).toContain('import QtQuick');
      expect(qml).toContain('Rectangle {');
      expect(qml).toContain('width: 200');
      expect(qml).toContain('height: 100');
      expect(qml).toContain('color: "blue"');
    });
  });

  describe('ACC-02: Chaining fluency', () => {
    test('long chain returns same proxy (chaining)', () => {
      const rect = Rectangle();
      const result = rect.id('myRect').width(100).height(50).visible(true).opacity(0.8).x(10).y(20);

      // Chaining should return the same builder
      expect(result.build().typeName).toBe('Rectangle');
      expect(result.build().members.length).toBe(7);
    });
  });

  describe('ACC-03: Binding expressions', () => {
    test('widthBind creates binding expression', () => {
      const rect = Rectangle().widthBind('parent.width').heightBind('parent.height / 2');

      const doc = createDocument().importModule('QtQuick').root(rect);
      const qml = emit(doc);

      expect(qml).toContain('width: parent.width');
      expect(qml).toContain('height: parent.height / 2');
    });
  });

  describe('ACC-04: Child objects', () => {
    test('Column with child Text and Rectangle', () => {
      const col = Column()
        .spacing(10)
        .child(Text().text('Hello World'))
        .child(
          Rectangle()
            .width(100)
            .height(50)
            .color('green' as QmlColor),
        );

      const doc = createDocument().importModule('QtQuick').root(col);
      const qml = emit(doc);

      expect(qml).toContain('Column {');
      expect(qml).toContain('spacing: 10');
      expect(qml).toContain('Text {');
      expect(qml).toContain('text: "Hello World"');
      expect(qml).toContain('Rectangle {');
      expect(qml).toContain('color: "green"');
    });
  });

  describe('ACC-05: Signal handlers', () => {
    test('onClicked signal handler', () => {
      const area = MouseArea().onClicked('console.log("clicked")');

      const doc = createDocument().importModule('QtQuick').root(area);
      const qml = emit(doc);

      expect(qml).toContain('MouseArea {');
      expect(qml).toContain('onClicked:');
      expect(qml).toContain('console.log("clicked")');
    });

    test('multiple signal handlers', () => {
      const area = MouseArea().onClicked('handleClick()').onPressed('handlePress()');

      const node = area.build();
      const handlers = node.members.filter((m) => m.kind === 'SignalHandler');
      expect(handlers.length).toBe(2);
    });
  });

  describe('ACC-06: Enum token usage', () => {
    test('Text enum namespace has HAlignment members', () => {
      expect(Text.HAlignment).toBeDefined();
      expect(Text.HAlignment.AlignLeft).toBeDefined();
      expect(Text.HAlignment.AlignRight).toBeDefined();
      expect(Text.HAlignment.AlignHCenter).toBeDefined();
    });

    test('enum token carries correct metadata', () => {
      const token = Text.HAlignment.AlignHCenter;
      expect(token.__brand).toBe('QmlEnumToken');
      expect(token.owner).toBe('Text');
      expect(token.enumName).toBe('HAlignment');
      expect(token.member).toBe('AlignHCenter');
    });

    test('Text with enum property produces correct QML', () => {
      const t = Text().text('Hello').horizontalAlignment(Text.HAlignment.AlignHCenter);

      const doc = createDocument().importModule('QtQuick').root(t);
      const qml = emit(doc);

      expect(qml).toContain('Text {');
      expect(qml).toContain('text: "Hello"');
      expect(qml).toContain('horizontalAlignment: Text.HAlignment.AlignHCenter');
    });

    test('Item TransformOrigin enum', () => {
      expect(Item.TransformOrigin).toBeDefined();
      expect(Item.TransformOrigin.Center).toBeDefined();
      expect(Item.TransformOrigin.TopLeft).toBeDefined();
    });
  });

  describe('ACC-07: Grouped property builders', () => {
    test('Rectangle border grouped property', () => {
      const rect = Rectangle()
        .width(200)
        .height(100)
        .border((b) => {
          b.width(2);
          b.color('black' as QmlColor);
        });

      const doc = createDocument().importModule('QtQuick').root(rect);
      const qml = emit(doc);

      expect(qml).toContain('Rectangle {');
      expect(qml).toContain('border {');
      expect(qml).toContain('width: 2');
      expect(qml).toContain('color: "black"');
    });

    test('Item anchors grouped property', () => {
      const rect = Rectangle().anchors((a) => {
        a.fill('parent');
        a.margins(10);
      });

      const doc = createDocument().importModule('QtQuick').root(rect);
      const qml = emit(doc);

      expect(qml).toContain('anchors {');
      expect(qml).toContain('fill: "parent"');
      expect(qml).toContain('margins: 10');
    });
  });

  describe('ACC-08: id assignment', () => {
    test('id() sets QML id', () => {
      const rect = Rectangle().id('myRect').width(100);

      const doc = createDocument().importModule('QtQuick').root(rect);
      const qml = emit(doc);

      expect(qml).toContain('id: myRect');
    });
  });

  describe('ACC-09: Unknown method throws TypeError', () => {
    test('nonExistent method throws TypeError', () => {
      const rect = Rectangle();
      expect(() => {
        (rect as Record<string, unknown>)['nonExistentProperty'];
      }).toThrow(TypeError);
    });
  });

  describe('ACC-10: Complex nested scene', () => {
    test('full scene with layout, controls, and enums', () => {
      const scene = Item()
        .id('root')
        .width(800)
        .height(600)
        .child(
          Column()
            .spacing(20)
            .child(
              Text()
                .text('Welcome')
                .horizontalAlignment(Text.HAlignment.AlignHCenter)
                .color('navy' as QmlColor),
            )
            .child(
              Row()
                .spacing(10)
                .child(
                  Rectangle()
                    .width(100)
                    .height(100)
                    .color('red' as QmlColor)
                    .border((b) => {
                      b.width(2);
                      b.color('darkred' as QmlColor);
                    }),
                )
                .child(
                  Rectangle()
                    .width(100)
                    .height(100)
                    .color('green' as QmlColor)
                    .radius(10),
                ),
            )
            .child(MouseArea().widthBind('parent.width').height(40).onClicked('Qt.quit()')),
        );

      const doc = createDocument().importModule('QtQuick').root(scene);
      const qml = emit(doc);

      // Verify structure
      expect(qml).toContain('Item {');
      expect(qml).toContain('id: root');
      expect(qml).toContain('Column {');
      expect(qml).toContain('Text {');
      expect(qml).toContain('horizontalAlignment: Text.HAlignment.AlignHCenter');
      expect(qml).toContain('Row {');
      expect(qml).toContain('border {');
      expect(qml).toContain('radius: 10');
      expect(qml).toContain('MouseArea {');
      expect(qml).toContain('width: parent.width');
      expect(qml).toContain('onClicked:');
    });
  });

  describe('ACC-11: Image with source', () => {
    test('Image with source and fillMode', () => {
      const img = Image().source('qrc:/images/logo.png').width(200).height(200);

      const doc = createDocument().importModule('QtQuick').root(img);
      const qml = emit(doc);

      expect(qml).toContain('Image {');
      expect(qml).toContain('source: "qrc:/images/logo.png"');
      expect(qml).toContain('width: 200');
    });
  });

  describe('ACC-12: Multiple enum types on same builder', () => {
    test('Text has multiple enum namespaces', () => {
      // Text should have HAlignment, VAlignment, TextElideMode, etc.
      expect(Text.HAlignment).toBeDefined();
      expect(Text.VAlignment).toBeDefined();
      expect(Text.TextElideMode).toBeDefined();
      expect(Text.TextFormat).toBeDefined();
    });
  });
});

describe('Acceptance: QtQuick.Layouts', () => {
  test('ACC-13: ColumnLayout with spacing and children', () => {
    const layout = ColumnLayout()
      .spacing(10)
      .child(Rectangle().width(100).height(50))
      .child(Rectangle().width(100).height(50));

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Layouts')
      .root(layout);
    const qml = emit(doc);

    expect(qml).toContain('ColumnLayout {');
    expect(qml).toContain('spacing: 10');
    expect(qml).toContain('Rectangle {');
  });

  test('ACC-14: RowLayout with Layout attached via addAttached (cross-module)', () => {
    // Cross-module attached types (Layout on Rectangle from QtQuick) correctly
    // use addAttached — this is the intended API for cross-module usage
    const rect = Rectangle()
      .color('red' as QmlColor)
      .addAttached('Layout', [
        { property: 'fillWidth', value: true },
        { property: 'fillHeight', value: true },
      ]);

    const layout = RowLayout().child(rect);
    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Layouts')
      .root(layout);
    const qml = emit(doc);

    expect(qml).toContain('RowLayout {');
    expect(qml).toContain('Layout.fillWidth: true');
    expect(qml).toContain('Layout.fillHeight: true');
  });

  test('ACC-14b: ColumnLayout with typed layout() attached method (within-module)', () => {
    // Within-module attached types use the typed fluent API
    const cl = ColumnLayout()
      .spacing(10)
      .layout((b) => {
        b.fillWidth(true);
        b.preferredHeight(100);
      });

    const doc = createDocument().importModule('QtQuick.Layouts').root(cl);
    const qml = emit(doc);

    expect(qml).toContain('ColumnLayout {');
    expect(qml).toContain('spacing: 10');
    expect(qml).toContain('Layout.fillWidth: true');
    expect(qml).toContain('Layout.preferredHeight: 100');
  });

  test('ACC-15: ColumnLayout binding expression', () => {
    const layout = ColumnLayout().spacingBind('parent.height / 10');

    const node = layout.build();
    const binding = node.members.find((m) => m.kind === 'Binding' && m.property === 'spacing');
    expect(binding).toBeDefined();
    if (binding && binding.kind === 'Binding') {
      expect(binding.value.kind).toBe('expression');
    }
  });
});

describe('Acceptance: QtQml', () => {
  test('ACC-16: Timer with interval and signal handler', () => {
    const timer = Timer().interval(1000).repeat(true).running(true).onTriggered('count++');

    const doc = createDocument().importModule('QtQml').root(timer);
    const qml = emit(doc);

    expect(qml).toContain('Timer {');
    expect(qml).toContain('interval: 1000');
    expect(qml).toContain('repeat: true');
    expect(qml).toContain('running: true');
    expect(qml).toContain('onTriggered:');
  });

  test('ACC-17: Connections with target binding and signal handler', () => {
    const conn = Connections().targetBind('myButton').handleSignal('onClicked', 'handleClick()');

    const doc = createDocument().importModule('QtQml').root(conn);
    const qml = emit(doc);

    expect(qml).toContain('Connections {');
    expect(qml).toContain('target: myButton');
    expect(qml).toContain('onClicked:');
  });
});

describe('Acceptance: QtCore', () => {
  test('ACC-18: Settings with category', () => {
    const settings = Settings().category('app');

    const doc = createDocument().importModule('QtCore').root(settings);
    const qml = emit(doc);

    expect(qml).toContain('Settings {');
    expect(qml).toContain('category: "app"');
  });
});

describe('Acceptance: QtQuick.Templates', () => {
  test('ACC-19: Button with text and click handler', () => {
    const btn = Button().text('Click Me').onClicked('doSomething()');

    const doc = createDocument().importModule('QtQuick.Controls').root(btn);
    const qml = emit(doc);

    expect(qml).toContain('Button {');
    expect(qml).toContain('text: "Click Me"');
    expect(qml).toContain('onClicked:');
  });

  test('ACC-20: Slider with range and step', () => {
    const slider = Slider().from(0).to(100).value(50).stepSize(5);

    const doc = createDocument().importModule('QtQuick.Controls').root(slider);
    const qml = emit(doc);

    expect(qml).toContain('Slider {');
    expect(qml).toContain('from: 0');
    expect(qml).toContain('to: 100');
    expect(qml).toContain('value: 50');
    expect(qml).toContain('stepSize: 5');
  });

  test('ACC-21: TextField with placeholder and id', () => {
    const field = TextField().id('nameField').placeholderText('Enter name...');

    const doc = createDocument().importModule('QtQuick.Controls').root(field);
    const qml = emit(doc);

    expect(qml).toContain('TextField {');
    expect(qml).toContain('id: nameField');
    expect(qml).toContain('placeholderText: "Enter name..."');
  });

  test('ACC-22: Label with text and wrapping', () => {
    const label = Label().text('Hello World');

    const doc = createDocument().importModule('QtQuick.Controls').root(label);
    const qml = emit(doc);

    expect(qml).toContain('Label {');
    expect(qml).toContain('text: "Hello World"');
  });

  test('ACC-23: Complex form layout with Controls and Layouts', () => {
    const form = ColumnLayout()
      .spacing(16)
      .child(Label().text('Username:'))
      .child(
        TextField()
          .id('usernameField')
          .placeholderText('Enter username...')
          .addAttached('Layout', [{ property: 'fillWidth', value: true }]),
      )
      .child(
        Button()
          .text('Submit')
          .onClicked('submitForm(usernameField.text)')
          .addAttached('Layout', [{ property: 'fillWidth', value: true }]),
      );

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .importModule('QtQuick.Layouts')
      .root(form);
    const qml = emit(doc);

    expect(qml).toContain('ColumnLayout {');
    expect(qml).toContain('Label {');
    expect(qml).toContain('TextField {');
    expect(qml).toContain('Button {');
    expect(qml).toContain('Layout.fillWidth: true');
    expect(qml).toContain('onClicked:');
  });
});

describe('Acceptance: Non-P0 Long-Tail Modules', () => {
  test('ACC-24: QtMultimedia MediaPlayer with source', () => {
    const mp = MediaPlayer().source('qrc:/videos/intro.mp4');

    const doc = createDocument().importModule('QtMultimedia').root(mp);
    const qml = emit(doc);

    expect(qml).toContain('MediaPlayer {');
    expect(qml).toContain('source: "qrc:/videos/intro.mp4"');
  });

  test('ACC-25: QtQuick.Shapes Shape with dimensions', () => {
    const shape = Shape().width(200).height(200);

    const doc = createDocument().importModule('QtQuick.Shapes').root(shape);
    const qml = emit(doc);

    expect(qml).toContain('Shape {');
    expect(qml).toContain('width: 200');
    expect(qml).toContain('height: 200');
  });

  test('ACC-26: QtQuick.Particles ParticleSystem running', () => {
    const ps = ParticleSystem().running(true);

    const doc = createDocument().importModule('QtQuick.Particles').root(ps);
    const qml = emit(doc);

    expect(qml).toContain('ParticleSystem {');
    expect(qml).toContain('running: true');
  });

  test('ACC-27: Repeater with model count', () => {
    const rep = Repeater().modelBind('10').child(Rectangle().width(50).height(50));

    const doc = createDocument().importModule('QtQuick').root(rep);
    const qml = emit(doc);

    expect(qml).toContain('Repeater {');
    expect(qml).toContain('model: 10');
    expect(qml).toContain('Rectangle {');
  });

  test('ACC-28: StackLayout with currentIndex', () => {
    const sl = StackLayout()
      .currentIndex(1)
      .child(Rectangle().color('red' as QmlColor))
      .child(Rectangle().color('blue' as QmlColor));

    const doc = createDocument().importModule('QtQuick').importModule('QtQuick.Layouts').root(sl);
    const qml = emit(doc);

    expect(qml).toContain('StackLayout {');
    expect(qml).toContain('currentIndex: 1');
  });

  test('ACC-29: Complex scene mixing P0 and non-P0 modules', () => {
    const scene = Item()
      .id('root')
      .width(800)
      .height(600)
      .child(
        ColumnLayout()
          .spacing(20)
          .layout((b) => {
            b.fillWidth(true);
          })
          .child(Text().text('Multimedia App'))
          .child(MediaPlayer().source('qrc:/video.mp4'))
          .child(
            RowLayout()
              .spacing(10)
              .child(
                Button()
                  .text('Play')
                  .onClicked('player.play()')
                  .addAttached('Layout', [{ property: 'fillWidth', value: true }]),
              )
              .child(Slider().from(0).to(100).value(0)),
          ),
      );

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .importModule('QtQuick.Layouts')
      .importModule('QtMultimedia')
      .root(scene);
    const qml = emit(doc);

    expect(qml).toContain('Item {');
    expect(qml).toContain('ColumnLayout {');
    expect(qml).toContain('Layout.fillWidth: true');
    expect(qml).toContain('MediaPlayer {');
    expect(qml).toContain('Button {');
    expect(qml).toContain('Slider {');
  });
});

describe('Acceptance: Extended Module Coverage', () => {
  test('ACC-30: QtCharts — ChartView with LineSeries child', () => {
    const chart = ChartView()
      .id('chart')
      .animationDuration(500)
      .child(LineSeries().name('Temperature'));

    const doc = createDocument().importModule('QtCharts').root(chart);
    const qml = emit(doc);

    expect(qml).toContain('ChartView {');
    expect(qml).toContain('animationDuration: 500');
    expect(qml).toContain('LineSeries {');
    expect(qml).toContain('name: "Temperature"');
  });

  test('ACC-31: Qt3D.Core — Entity with enabled property', () => {
    const entity = Entity().id('rootEntity').enabled(true);

    const doc = createDocument().importModule('Qt3D.Core').root(entity);
    const qml = emit(doc);

    expect(qml).toContain('Entity {');
    expect(qml).toContain('id: rootEntity');
    expect(qml).toContain('enabled: true');
  });

  test('ACC-32: QtQuick3D — View3D with dimensions', () => {
    const view = View3D().id('viewport').width(800).height(600);

    const doc = createDocument().importModule('QtQuick3D').root(view);
    const qml = emit(doc);

    expect(qml).toContain('View3D {');
    expect(qml).toContain('id: viewport');
    expect(qml).toContain('width: 800');
    expect(qml).toContain('height: 600');
  });

  test('ACC-33: QtQuick.Dialogs — FileDialog with title and accept label', () => {
    const dialog = FileDialog().id('openDialog').title('Open File').acceptLabel('Open');

    const doc = createDocument().importModule('QtQuick.Dialogs').root(dialog);
    const qml = emit(doc);

    expect(qml).toContain('FileDialog {');
    expect(qml).toContain('title: "Open File"');
    expect(qml).toContain('acceptLabel: "Open"');
  });

  test('ACC-34: QtSensors — Accelerometer with active state', () => {
    const sensor = Accelerometer().id('accel').active(true);

    const doc = createDocument().importModule('QtSensors').root(sensor);
    const qml = emit(doc);

    expect(qml).toContain('Accelerometer {');
    expect(qml).toContain('active: true');
  });

  test('ACC-35: QtWebEngine — WebEngineView with url binding', () => {
    const webView = WebEngineView().id('browser').urlBind('"https://qt.io"');

    const doc = createDocument().importModule('QtWebEngine').root(webView);
    const qml = emit(doc);

    expect(qml).toContain('WebEngineView {');
    expect(qml).toContain('url: "https://qt.io"');
  });

  test('ACC-36: QtQuick.Timeline — Timeline with frame range', () => {
    const tl = Timeline().id('timeline').startFrame(0).endFrame(1000).enabled(true);

    const doc = createDocument().importModule('QtQuick.Timeline').root(tl);
    const qml = emit(doc);

    expect(qml).toContain('Timeline {');
    expect(qml).toContain('startFrame: 0');
    expect(qml).toContain('endFrame: 1000');
    expect(qml).toContain('enabled: true');
  });

  test('ACC-37: QtScxml — StateMachineLoader with source', () => {
    const loader = StateMachineLoader().source('qrc:/statemachine.scxml');

    const doc = createDocument().importModule('QtScxml').root(loader);
    const qml = emit(doc);

    expect(qml).toContain('StateMachineLoader {');
    expect(qml).toContain('source: "qrc:/statemachine.scxml"');
  });

  test('ACC-38: QtQuick.VirtualKeyboard — KeyboardObserver with signal and attached type', () => {
    const observer = KeyboardObserver()
      .id('kbObserver')
      .onLayoutChanged('console.log("layout changed")');

    const doc = createDocument().importModule('QtQuick.VirtualKeyboard.Core').root(observer);
    const qml = emit(doc);

    expect(qml).toContain('KeyboardObserver {');
    expect(qml).toContain('onLayoutChanged:');
  });

  test('ACC-39: QtQuick.Effects — MultiEffect with blur', () => {
    const effect = MultiEffect().blurEnabled(true).blur(0.5);

    const doc = createDocument().importModule('QtQuick.Effects').root(effect);
    const qml = emit(doc);

    expect(qml).toContain('MultiEffect {');
    expect(qml).toContain('blurEnabled: true');
    expect(qml).toContain('blur: 0.5');
  });

  test('ACC-40: QtPositioning — CoordinateAnimation with basic properties', () => {
    const anim = CoordinateAnimation().duration(2000).running(true);

    const doc = createDocument().importModule('QtPositioning').root(anim);
    const qml = emit(doc);

    expect(qml).toContain('CoordinateAnimation {');
    expect(qml).toContain('duration: 2000');
    expect(qml).toContain('running: true');
  });

  test('ACC-41: Complex scene — Qt3D Entity tree', () => {
    const scene = Entity()
      .id('sceneRoot')
      .child(Entity().id('cameraEntity').enabled(true))
      .child(Entity().id('lightEntity').enabled(true));

    const doc = createDocument().importModule('Qt3D.Core').root(scene);
    const qml = emit(doc);

    expect(qml).toContain('Entity {');
    expect(qml).toContain('id: sceneRoot');
    expect(qml).toContain('id: cameraEntity');
    expect(qml).toContain('id: lightEntity');
  });

  test('ACC-42: Complex scene — dashboard mixing charts, 3D, and dialogs', () => {
    const dashboard = Item()
      .id('dashboard')
      .width(1200)
      .height(800)
      .child(
        Row()
          .spacing(10)
          .child(ChartView().id('performanceChart').animationDuration(300))
          .child(View3D().id('preview3d').width(400).height(400)),
      );

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtCharts')
      .importModule('QtQuick3D')
      .root(dashboard);
    const qml = emit(doc);

    expect(qml).toContain('Item {');
    expect(qml).toContain('ChartView {');
    expect(qml).toContain('View3D {');
    expect(qml).toContain('id: performanceChart');
    expect(qml).toContain('id: preview3d');
  });
});
