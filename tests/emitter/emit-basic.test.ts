import { describe, expect, test } from 'bun:test';
import { createDocument, createObject, v } from '../../src/ast/index.js';
import { emit } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §1.1: Document Structure (EB-01..EB-13)
// ═══════════════════════════════════════════════════════════════════════════

describe('Document Structure', () => {
  // EB-01
  test('EB-01: minimal document (root object only, singleLineEmptyObjects default)', () => {
    const doc = createDocument().root(createObject('Item'));
    const result = emit(doc);
    expect(result).toBe('Item { }\n');
  });

  // EB-02
  test('EB-02: pragma Singleton', () => {
    const doc = createDocument().pragma('Singleton').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('pragma Singleton');
  });

  // EB-03
  test('EB-03: pragma ComponentBehavior: Bound', () => {
    const doc = createDocument().pragma('ComponentBehavior', 'Bound').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('pragma ComponentBehavior: Bound');
  });

  // EB-04
  test('EB-04: pragma with no value (NativeTextRendering)', () => {
    const doc = createDocument().pragma('NativeTextRendering').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('pragma NativeTextRendering');
  });

  // EB-05
  test('EB-05: multiple pragmas output in order, no blank lines between', () => {
    const doc = createDocument()
      .pragma('Singleton')
      .pragma('ComponentBehavior', 'Bound')
      .root(createObject('Item'));
    const result = emit(doc);
    const lines = result.split('\n');
    expect(lines[0]).toBe('pragma Singleton');
    expect(lines[1]).toBe('pragma ComponentBehavior: Bound');
  });

  // EB-06
  test('EB-06: import module (no version)', () => {
    const doc = createDocument().importModule('QtQuick').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('import QtQuick');
  });

  // EB-07
  test('EB-07: import module (with version)', () => {
    const doc = createDocument().importModule('QtQuick', '2.15').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('import QtQuick 2.15');
  });

  // EB-08
  test('EB-08: import module (with qualifier)', () => {
    const doc = createDocument()
      .importModule('QtQuick', undefined, 'QQ')
      .root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('import QtQuick as QQ');
  });

  // EB-09
  test('EB-09: import directory', () => {
    const doc = createDocument().importDirectory('../components').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('import "../components"');
  });

  // EB-10
  test('EB-10: import JS', () => {
    const doc = createDocument().importJs('logic.js', 'Logic').root(createObject('Item'));
    const result = emit(doc);
    const firstLine = result.split('\n')[0];
    expect(firstLine).toBe('import "logic.js" as Logic');
  });

  // EB-11
  test('EB-11: multiple imports output in order, no blank lines between', () => {
    const doc = createDocument()
      .importModule('QtQuick', '2.15')
      .importModule('QtQuick.Controls', '2.15')
      .root(createObject('Item'));
    const result = emit(doc);
    const lines = result.split('\n');
    expect(lines[0]).toBe('import QtQuick 2.15');
    expect(lines[1]).toBe('import QtQuick.Controls 2.15');
  });

  // EB-12
  test('EB-12: one blank line between imports and root object', () => {
    const doc = createDocument().importModule('QtQuick').root(createObject('Item'));
    const result = emit(doc);
    // Expected: "import QtQuick\n\nItem { }\n"
    expect(result).toBe('import QtQuick\n\nItem { }\n');
  });

  // EB-13
  test('EB-13: pragma + import + object complete ordering', () => {
    const doc = createDocument()
      .pragma('Singleton')
      .importModule('QtQuick', '2.15')
      .root(createObject('Item'));
    const result = emit(doc);
    // Expected: "pragma Singleton\nimport QtQuick 2.15\n\nItem { }\n"
    expect(result).toBe('pragma Singleton\nimport QtQuick 2.15\n\nItem { }\n');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §1.2: Objects (EB-20..EB-25)
// ═══════════════════════════════════════════════════════════════════════════

describe('Objects', () => {
  // EB-20
  test('EB-20: empty object (singleLineEmptyObjects=true, default)', () => {
    const doc = createDocument().root(createObject('Rectangle'));
    const result = emit(doc);
    expect(result).toBe('Rectangle { }\n');
  });

  // EB-21
  test('EB-21: empty object (singleLineEmptyObjects=false)', () => {
    const doc = createDocument().root(createObject('Rectangle'));
    const result = emit(doc, { singleLineEmptyObjects: false });
    expect(result).toBe('Rectangle {\n}\n');
  });

  // EB-22
  test('EB-22: object with id', () => {
    const doc = createDocument().root(createObject('Rectangle').id('root').bind('width', 100));
    const result = emit(doc);
    const lines = result.split('\n');
    expect(lines[0]).toBe('Rectangle {');
    expect(lines[1]).toBe('    id: root');
  });

  // EB-23
  test('EB-23: nested object (child correctly indented)', () => {
    const doc = createDocument().root(
      createObject('Column').child(createObject('Rectangle').bind('width', 100)),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Column {\n' + '    Rectangle {\n' + '        width: 100\n' + '    }\n' + '}\n',
    );
  });

  // EB-24
  test('EB-24: 3-level nesting (each level indented correctly)', () => {
    const doc = createDocument().root(
      createObject('Window').child(
        createObject('Column').child(createObject('Text').bind('text', v.str('hello'))),
      ),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Window {\n' +
        '    Column {\n' +
        '        Text {\n' +
        '            text: "hello"\n' +
        '        }\n' +
        '    }\n' +
        '}\n',
    );
  });

  // EB-25
  test('EB-25: inline component', () => {
    const doc = createDocument().root(
      createObject('Item').inlineComponent(
        'MyButton',
        createObject('Button').bind('text', v.str('Click')),
      ),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    component MyButton: Button {\n' +
        '        text: "Click"\n' +
        '    }\n' +
        '}\n',
    );
  });
});
