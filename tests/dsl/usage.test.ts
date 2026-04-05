import { describe, expect, test } from 'bun:test';
import { createDocument } from '../../src/ast/builder.js';
import { DslBuilderImpl } from '../../src/dsl/runtime/builder-base.js';
import { createEnumToken } from '../../src/dsl/runtime/enum-token.js';
import { emit } from '../../src/emitter/emitter.js';

describe('DSL Usage Integration', () => {
  test('US-01: simple Rectangle with properties', () => {
    const rect = new DslBuilderImpl('Rectangle');
    rect.setProp('width', 100);
    rect.setProp('height', 50);
    rect.setProp('color', 'red');

    const doc = createDocument().importModule('QtQuick').root(rect.build());

    const qml = emit(doc);
    expect(qml).toContain('import QtQuick');
    expect(qml).toContain('Rectangle {');
    expect(qml).toContain('width: 100');
    expect(qml).toContain('height: 50');
    expect(qml).toContain('color: "red"');
  });

  test('US-02: nested children', () => {
    const col = new DslBuilderImpl('Column');
    col.setProp('spacing', 10);

    const text = new DslBuilderImpl('Text');
    text.setProp('text', 'Hello');
    col.child(text);

    const rect = new DslBuilderImpl('Rectangle');
    rect.setProp('width', 100);
    rect.setProp('height', 50);
    col.child(rect);

    const doc = createDocument().importModule('QtQuick').root(col.build());

    const qml = emit(doc);
    expect(qml).toContain('Column {');
    expect(qml).toContain('Text {');
    expect(qml).toContain('Rectangle {');
  });

  test('US-03: enum reference via QmlEnumToken', () => {
    const text = new DslBuilderImpl('Text');
    text.setProp('text', 'Hello World');
    const token = createEnumToken('Text', 'HorizontalAlignment', 'AlignHCenter');
    text.setProp('horizontalAlignment', token);

    const doc = createDocument().importModule('QtQuick').root(text.build());

    const qml = emit(doc);
    expect(qml).toContain('Text {');
    expect(qml).toContain('horizontalAlignment: Text.HorizontalAlignment.AlignHCenter');
  });

  test('US-04: binding expression', () => {
    const rect = new DslBuilderImpl('Rectangle');
    rect.setBinding('width', 'parent.width');
    rect.setBinding('height', 'parent.height / 2');
    rect.setProp('color', 'blue');

    const doc = createDocument().importModule('QtQuick').root(rect.build());

    const qml = emit(doc);
    expect(qml).toContain('width: parent.width');
    expect(qml).toContain('height: parent.height / 2');
  });

  test('US-05: grouped property (border)', () => {
    const rect = new DslBuilderImpl('Rectangle');
    rect.setProp('width', 200);
    rect.setProp('height', 100);
    rect.addGrouped('border', [
      { property: 'width', value: 2 },
      { property: 'color', value: 'black' },
    ]);

    const doc = createDocument().importModule('QtQuick').root(rect.build());

    const qml = emit(doc);
    // Grouped bindings use block format in QML
    expect(qml).toContain('border {');
    expect(qml).toContain('width: 2');
    expect(qml).toContain('"black"');
  });

  test('US-06: attached property (Layout)', () => {
    const rect = new DslBuilderImpl('Rectangle');
    rect.setProp('color', 'green');
    rect.addAttached('Layout', [
      { property: 'fillWidth', value: true },
      { property: 'fillHeight', value: true },
    ]);

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Layouts')
      .root(rect.build());

    const qml = emit(doc);
    expect(qml).toContain('Layout.fillWidth: true');
    expect(qml).toContain('Layout.fillHeight: true');
  });

  test('US-07: signal handler', () => {
    const mouseArea = new DslBuilderImpl('MouseArea');
    mouseArea.setBinding('anchors.fill', 'parent');
    mouseArea.handleSignal('onClicked', 'console.log("clicked")');

    const doc = createDocument().importModule('QtQuick').root(mouseArea.build());

    const qml = emit(doc);
    expect(qml).toContain('MouseArea {');
    expect(qml).toContain('onClicked:');
  });

  test('US-08: complex nested layout with controls', () => {
    const page = new DslBuilderImpl('Page');
    page.setProp('title', 'My Page');

    const layout = new DslBuilderImpl('ColumnLayout');
    layout.setProp('spacing', 20);

    const label = new DslBuilderImpl('Label');
    label.setProp('text', 'Enter your name:');
    layout.child(label);

    const field = new DslBuilderImpl('TextField');
    field.id('nameField');
    field.setProp('placeholderText', 'Name...');
    layout.child(field);

    const button = new DslBuilderImpl('Button');
    button.setProp('text', 'Submit');
    button.handleSignal('onClicked', 'console.log(nameField.text)');
    layout.child(button);

    page.child(layout);

    const doc = createDocument()
      .importModule('QtQuick')
      .importModule('QtQuick.Controls')
      .importModule('QtQuick.Layouts')
      .root(page.build());

    const qml = emit(doc);
    expect(qml).toContain('Page {');
    expect(qml).toContain('ColumnLayout {');
    expect(qml).toContain('Label {');
    expect(qml).toContain('TextField {');
    expect(qml).toContain('id: nameField');
    expect(qml).toContain('Button {');
    expect(qml).toContain('onClicked:');
  });

  test('US-09: animation with properties', () => {
    const rect = new DslBuilderImpl('Rectangle');
    rect.id('animRect');
    rect.setProp('width', 100);
    rect.setProp('height', 100);
    rect.setProp('color', 'red');

    const anim = new DslBuilderImpl('NumberAnimation');
    anim.setBinding('target', 'animRect');
    anim.setProp('property', 'x');
    anim.setProp('from', 0);
    anim.setProp('to', 200);
    anim.setProp('duration', 1000);
    rect.child(anim);

    const doc = createDocument().importModule('QtQuick').root(rect.build());

    const qml = emit(doc);
    expect(qml).toContain('NumberAnimation {');
    expect(qml).toContain('duration: 1000');
  });

  test('US-10: id assignment', () => {
    const item = new DslBuilderImpl('Item');
    item.id('rootItem');
    item.setProp('width', 800);
    item.setProp('height', 600);

    const doc = createDocument().importModule('QtQuick').root(item.build());

    const qml = emit(doc);
    expect(qml).toContain('id: rootItem');
  });
});
