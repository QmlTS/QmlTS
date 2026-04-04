import { describe, expect, test } from 'bun:test';
import { createDocument, createObject, v } from '../../src/ast/index.js';
import { emit } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §2.1: Binding Value types (BV-01..BV-17)
// ═══════════════════════════════════════════════════════════════════════════

describe('Binding Values', () => {
  // BV-01
  test('BV-01: NumberLiteral integer', () => {
    const doc = createDocument().root(createObject('Item').bind('width', 400));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    width: 400\n' + '}\n');
  });

  // BV-02
  test('BV-02: NumberLiteral decimal', () => {
    const doc = createDocument().root(createObject('Item').bind('opacity', 0.5));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    opacity: 0.5\n' + '}\n');
  });

  // BV-03
  test('BV-03: NumberLiteral negative', () => {
    const doc = createDocument().root(createObject('Item').bind('x', -10));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    x: -10\n' + '}\n');
  });

  // BV-04
  test('BV-04: StringLiteral double quote (default)', () => {
    const doc = createDocument().root(createObject('Text').bind('text', v.str('hello')));
    const result = emit(doc);
    expect(result).toBe('Text {\n' + '    text: "hello"\n' + '}\n');
  });

  // BV-05
  test('BV-05: StringLiteral single quote mode', () => {
    const doc = createDocument().root(createObject('Text').bind('text', v.str('hello')));
    const result = emit(doc, { quoteStyle: 'single' });
    expect(result).toBe('Text {\n' + "    text: 'hello'\n" + '}\n');
  });

  // BV-06
  test('BV-06: StringLiteral with escape chars', () => {
    const doc = createDocument().root(createObject('Text').bind('text', v.str('it\\"s')));
    const result = emit(doc);
    expect(result).toBe('Text {\n' + '    text: "it\\"s"\n' + '}\n');
  });

  // BV-07
  test('BV-07: BooleanLiteral true', () => {
    const doc = createDocument().root(createObject('Item').bind('visible', true));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    visible: true\n' + '}\n');
  });

  // BV-08
  test('BV-08: BooleanLiteral false', () => {
    const doc = createDocument().root(createObject('Item').bind('enabled', false));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    enabled: false\n' + '}\n');
  });

  // BV-09
  test('BV-09: NullLiteral', () => {
    const doc = createDocument().root(createObject('Item').bind('model', null));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    model: null\n' + '}\n');
  });

  // BV-10
  test('BV-10: EnumReference simple', () => {
    const doc = createDocument().root(
      createObject('Text').bind('wrapMode', v.enumRef('Text', 'WordWrap')),
    );
    const result = emit(doc);
    expect(result).toBe('Text {\n' + '    wrapMode: Text.WordWrap\n' + '}\n');
  });

  // BV-11
  test('BV-11: EnumReference with enumName', () => {
    const doc = createDocument().root(
      createObject('Item').bind('alignment', v.enumRef('Qt', 'AlignCenter', 'Alignment')),
    );
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    alignment: Qt.Alignment.AlignCenter\n' + '}\n');
  });

  // BV-12
  test('BV-12: ScriptExpression simple', () => {
    const doc = createDocument().root(createObject('Item').bind('width', v.expr('parent.width')));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    width: parent.width\n' + '}\n');
  });

  // BV-13
  test('BV-13: ScriptExpression complex', () => {
    const doc = createDocument().root(
      createObject('Rectangle').bind('color', v.expr('enabled ? "blue" : "gray"')),
    );
    const result = emit(doc);
    expect(result).toBe('Rectangle {\n' + '    color: enabled ? "blue" : "gray"\n' + '}\n');
  });

  // BV-14
  test('BV-14: ScriptBlock single line', () => {
    const doc = createDocument().root(createObject('Item').bind('width', v.block('return 42')));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    width: { return 42 }\n' + '}\n');
  });

  // BV-15
  test('BV-15: ScriptBlock multi-line', () => {
    const doc = createDocument().root(
      createObject('Item').bind('width', v.block('console.log("a")\nreturn 42')),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    width: {\n' +
        '        console.log("a")\n' +
        '        return 42\n' +
        '    }\n' +
        '}\n',
    );
  });

  // BV-16
  test('BV-16: ObjectValue inline', () => {
    const gradNode = createObject('Gradient').bind('orientation', 1).build();
    const root = createObject('Rectangle');
    root.addMember({
      kind: 'Binding',
      property: 'gradient',
      value: { kind: 'object', node: gradNode },
    });
    const doc = createDocument().root(root);
    const result = emit(doc);
    expect(result).toContain('gradient:');
    expect(result).toContain('Gradient {');
    expect(result).toContain('orientation: 1');
  });

  // BV-17
  test('BV-17: ArrayValue', () => {
    const root = createObject('Item');
    root.addMember({
      kind: 'Binding',
      property: 'values',
      value: { kind: 'array', items: [v.num(1), v.num(2)] },
    });
    const doc = createDocument().root(root);
    const result = emit(doc);
    expect(result).toContain('values: [1, 2]');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §2.2: Complex Bindings (BV-20..BV-27)
// ═══════════════════════════════════════════════════════════════════════════

describe('Complex Bindings', () => {
  // BV-20
  test('BV-20: GroupedBinding single property', () => {
    const doc = createDocument().root(
      createObject('Item').grouped('anchors', (g) => {
        g.bind('left', v.expr('parent.left'));
      }),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' + '    anchors {\n' + '        left: parent.left\n' + '    }\n' + '}\n',
    );
  });

  // BV-21
  test('BV-21: GroupedBinding multiple properties', () => {
    const doc = createDocument().root(
      createObject('Item').grouped('anchors', (g) => {
        g.bind('left', v.expr('parent.left'));
        g.bind('right', v.expr('parent.right'));
        g.bind('top', v.expr('parent.top'));
      }),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    anchors {\n' +
        '        left: parent.left\n' +
        '        right: parent.right\n' +
        '        top: parent.top\n' +
        '    }\n' +
        '}\n',
    );
  });

  // BV-22
  test('BV-22: AttachedBinding single property', () => {
    const doc = createDocument().root(
      createObject('Item').attached('Layout', (a) => {
        a.bind('fillWidth', true);
      }),
    );
    const result = emit(doc);
    expect(result).toContain('Layout.fillWidth: true');
  });

  // BV-23
  test('BV-23: AttachedBinding multiple properties', () => {
    const doc = createDocument().root(
      createObject('Item').attached('Layout', (a) => {
        a.bind('fillWidth', true);
        a.bind('fillHeight', false);
        a.bind('preferredWidth', 200);
      }),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    Layout.fillWidth: true\n' +
        '    Layout.fillHeight: false\n' +
        '    Layout.preferredWidth: 200\n' +
        '}\n',
    );
  });

  // BV-24
  test('BV-24: ArrayBinding multi-element', () => {
    const doc = createDocument().root(
      createObject('Item').arrayBind('model', [v.num(1), v.num(2), v.num(3)]),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    model: [\n' +
        '        1,\n' +
        '        2,\n' +
        '        3\n' +
        '    ]\n' +
        '}\n',
    );
  });

  // BV-25
  test('BV-25: ArrayBinding single element (single line)', () => {
    const doc = createDocument().root(createObject('Item').arrayBind('model', [v.num(1)]));
    const result = emit(doc);
    expect(result).toBe('Item {\n' + '    model: [1]\n' + '}\n');
  });

  // BV-26
  test('BV-26: ArrayBinding with objects', () => {
    const child1 = createObject('ListElement').bind('name', v.str('A')).build();
    const child2 = createObject('ListElement').bind('name', v.str('B')).build();
    const doc = createDocument().root(
      createObject('ListModel').arrayBind('model', [
        { kind: 'object', node: child1 },
        { kind: 'object', node: child2 },
      ]),
    );
    const result = emit(doc);
    expect(result).toContain('model: [');
    expect(result).toContain('ListElement {');
    expect(result).toContain('name: "A"');
    expect(result).toContain('name: "B"');
    expect(result).toContain(']');
  });

  // BV-27
  test('BV-27: BehaviorOn', () => {
    const doc = createDocument().root(
      createObject('Item').behaviorOn(
        'opacity',
        createObject('NumberAnimation').bind('duration', 200),
      ),
    );
    const result = emit(doc);
    expect(result).toBe(
      'Item {\n' +
        '    Behavior on opacity {\n' +
        '        NumberAnimation {\n' +
        '            duration: 200\n' +
        '        }\n' +
        '    }\n' +
        '}\n',
    );
  });
});
