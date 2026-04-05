/**
 * End-to-end acceptance tests for generated fluent DSL API.
 * These tests import actual generated factories and verify:
 * - Runtime fluent API works (property setters, signal handlers, etc.)
 * - Enum tokens are properly accessible via namespaces
 * - Grouped/attached builders work through callbacks
 * - Built AST nodes produce correct QML via emitter
 */
import { describe, expect, test } from 'bun:test';
import { createDocument } from '../../src/ast/builder.js';
import { emit } from '../../src/emitter/emitter.js';
import type { QmlColor } from '../../src/dsl/runtime/types.js';

// Import generated DSL factories and namespaces
import { Rectangle } from '../../src/dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../src/dsl/generated/QtQuick/Text.js';
import { Item } from '../../src/dsl/generated/QtQuick/Item.js';
import { Column } from '../../src/dsl/generated/QtQuick/Column.js';
import { Row } from '../../src/dsl/generated/QtQuick/Row.js';
import { Image } from '../../src/dsl/generated/QtQuick/Image.js';
import { MouseArea } from '../../src/dsl/generated/QtQuick/MouseArea.js';

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

      const doc = createDocument()
        .importModule('QtQuick')
        .root(rect);
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
      const result = rect
        .id('myRect')
        .width(100)
        .height(50)
        .visible(true)
        .opacity(0.8)
        .x(10)
        .y(20);

      // Chaining should return the same builder
      expect(result.build().typeName).toBe('Rectangle');
      expect(result.build().members.length).toBe(7);
    });
  });

  describe('ACC-03: Binding expressions', () => {
    test('widthBind creates binding expression', () => {
      const rect = Rectangle()
        .widthBind('parent.width')
        .heightBind('parent.height / 2');

      const doc = createDocument()
        .importModule('QtQuick')
        .root(rect);
      const qml = emit(doc);

      expect(qml).toContain('width: parent.width');
      expect(qml).toContain('height: parent.height / 2');
    });
  });

  describe('ACC-04: Child objects', () => {
    test('Column with child Text and Rectangle', () => {
      const col = Column()
        .spacing(10)
        .child(
          Text().text('Hello World'),
        )
        .child(
          Rectangle()
            .width(100)
            .height(50)
            .color('green' as QmlColor),
        );

      const doc = createDocument()
        .importModule('QtQuick')
        .root(col);
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
      const area = MouseArea()
        .onClicked('console.log("clicked")');

      const doc = createDocument()
        .importModule('QtQuick')
        .root(area);
      const qml = emit(doc);

      expect(qml).toContain('MouseArea {');
      expect(qml).toContain('onClicked:');
      expect(qml).toContain('console.log("clicked")');
    });

    test('multiple signal handlers', () => {
      const area = MouseArea()
        .onClicked('handleClick()')
        .onPressed('handlePress()');

      const node = area.build();
      const handlers = node.members.filter(m => m.kind === 'SignalHandler');
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
      const t = Text()
        .text('Hello')
        .horizontalAlignment(Text.HAlignment.AlignHCenter);

      const doc = createDocument()
        .importModule('QtQuick')
        .root(t);
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
        .border(b => {
          b.width(2);
          b.color('black' as QmlColor);
        });

      const doc = createDocument()
        .importModule('QtQuick')
        .root(rect);
      const qml = emit(doc);

      expect(qml).toContain('Rectangle {');
      expect(qml).toContain('border {');
      expect(qml).toContain('width: 2');
      expect(qml).toContain('color: "black"');
    });

    test('Item anchors grouped property', () => {
      const rect = Rectangle()
        .anchors(a => {
          a.fill('parent');
          a.margins(10);
        });

      const doc = createDocument()
        .importModule('QtQuick')
        .root(rect);
      const qml = emit(doc);

      expect(qml).toContain('anchors {');
      expect(qml).toContain('fill: "parent"');
      expect(qml).toContain('margins: 10');
    });
  });

  describe('ACC-08: id assignment', () => {
    test('id() sets QML id', () => {
      const rect = Rectangle()
        .id('myRect')
        .width(100);

      const doc = createDocument()
        .importModule('QtQuick')
        .root(rect);
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
                    .border(b => {
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
            .child(
              MouseArea()
                .widthBind('parent.width')
                .height(40)
                .onClicked('Qt.quit()'),
            ),
        );

      const doc = createDocument()
        .importModule('QtQuick')
        .root(scene);
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
      const img = Image()
        .source('qrc:/images/logo.png')
        .width(200)
        .height(200);

      const doc = createDocument()
        .importModule('QtQuick')
        .root(img);
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
