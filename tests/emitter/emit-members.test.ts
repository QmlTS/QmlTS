import { describe, expect, test } from 'bun:test';
import type { ObjectMember } from '../../src/ast/index.js';
import { createDocument, createObject, v } from '../../src/ast/index.js';
import { emit } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §3.1: Property Declarations (MM-01..MM-09)
// ═══════════════════════════════════════════════════════════════════════════

describe('Property Declarations', () => {
  // MM-01
  test('MM-01: simple property with initial value', () => {
    const obj = createObject('Item').declareProp('int', 'count', 0);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    property int count: 0');
  });

  // MM-02
  test('MM-02: property without initial value', () => {
    const obj = createObject('Item').declareProp('string', 'name');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    property string name');
    expect(result).not.toContain('property string name:');
  });

  // MM-03
  test('MM-03: required property', () => {
    const obj = createObject('Item').declareProp('string', 'name', undefined, { required: true });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    required property string name');
  });

  // MM-04
  test('MM-04: readonly property with expression', () => {
    const obj = createObject('Item').declareProp('real', 'area', v.expr('w * h'), {
      readonly: true,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    readonly property real area: w * h');
  });

  // MM-05
  test('MM-05: default property', () => {
    const obj = createObject('Item').declareProp('list<Item>', 'content', undefined, {
      default: true,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    default property list<Item> content');
  });

  // MM-06
  test('MM-06: multiple modifiers (default readonly alias)', () => {
    const obj = createObject('Item').declareAlias('content', 'inner.data', {
      default: true,
      readonly: true,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    default readonly property alias content: inner.data');
  });

  // MM-07
  test('MM-07: list type property', () => {
    const obj = createObject('Item').declareProp('list<Rectangle>', 'items');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    property list<Rectangle> items');
  });

  // MM-08
  test('MM-08: property alias', () => {
    const obj = createObject('Item').declareAlias('text', 'label.text');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    property alias text: label.text');
  });

  // MM-09
  test('MM-09: readonly alias', () => {
    const obj = createObject('Item').declareAlias('count', 'counter.value', { readonly: true });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    readonly property alias count: counter.value');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §3.2: Signals (MM-10..MM-17)
// ═══════════════════════════════════════════════════════════════════════════

describe('Signals', () => {
  // MM-10
  test('MM-10: no-param signal', () => {
    const obj = createObject('Item').declareSignal('clicked');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    signal clicked()');
  });

  // MM-11
  test('MM-11: typed params signal', () => {
    const obj = createObject('Item').declareSignal('moved', [
      { name: 'x', type: 'int' },
      { name: 'y', type: 'int' },
    ]);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    signal moved(x: int, y: int)');
  });

  // MM-12
  test('MM-12: untyped param signal', () => {
    const obj = createObject('Item').declareSignal('pressed', [{ name: 'point' }]);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    signal pressed(point)');
  });

  // MM-13
  test('MM-13: handler expression', () => {
    const obj = createObject('Item').handler('onClicked', v.expr('doStuff()'));
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    onClicked: doStuff()');
  });

  // MM-14
  test('MM-14: handler block', () => {
    const obj = createObject('Item').handler('onClicked', v.block('count++'));
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    onClicked: { count++ }');
  });

  // MM-15
  test('MM-15: handler arrow (no params)', () => {
    const obj = createObject('Item').handler('onClicked', {
      params: [],
      body: 'doStuff()',
      isBlock: false,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    onClicked: () => doStuff()');
  });

  // MM-16
  test('MM-16: handler arrow (with param, block)', () => {
    const obj = createObject('Item').handler('onPressed', {
      params: ['event'],
      body: 'handlePress(event)',
      isBlock: true,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    onPressed: (event) => { handlePress(event) }');
  });

  // MM-17
  test('MM-17: handler arrow (multi params)', () => {
    const obj = createObject('Item').handler('onActivated', {
      params: ['x', 'y'],
      body: 'handleActivate(x, y)',
      isBlock: true,
    });
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    onActivated: (x, y) => { handleActivate(x, y) }');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §3.3: Functions and Enums (MM-20..MM-24)
// ═══════════════════════════════════════════════════════════════════════════

describe('Functions and Enums', () => {
  // MM-20
  test('MM-20: simple function', () => {
    const obj = createObject('Item').fn('doStuff', {}, 'console.log("hi")');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    function doStuff() { console.log("hi") }');
  });

  // MM-21
  test('MM-21: typed params + return type', () => {
    const obj = createObject('Item').fn(
      'calc',
      {
        params: [
          { name: 'x', type: 'int' },
          { name: 'y', type: 'real' },
        ],
        returnType: 'real',
      },
      'return x * y',
    );
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    function calc(x: int, y: real): real { return x * y }');
  });

  // MM-22
  test('MM-22: no return type', () => {
    const obj = createObject('Item').fn(
      'doNothing',
      { params: [{ name: 'x', type: 'int' }] },
      'x++',
    );
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    function doNothing(x: int) { x++ }');
    expect(result).not.toMatch(/function doNothing\(x: int\):/);
  });

  // MM-23
  test('MM-23: enum declaration', () => {
    const obj = createObject('Item').declareEnum('Status', [{ name: 'Idle' }, { name: 'Loading' }]);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    enum Status {');
    expect(result).toContain('        Idle,');
    expect(result).toContain('        Loading');
    expect(result).toContain('    }');
  });

  // MM-24
  test('MM-24: enum with values', () => {
    const obj = createObject('Item').declareEnum('Status', [
      { name: 'Idle', value: 0 },
      { name: 'Loading', value: 1 },
    ]);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('        Idle = 0,');
    expect(result).toContain('        Loading = 1');
  });
});

// ═══════════════════════════════════════════════════════════════════════════
//  §3.4: Comments (MM-30..MM-34)
// ═══════════════════════════════════════════════════════════════════════════

describe('Comments', () => {
  // MM-30
  test('MM-30: CommentNode line', () => {
    const obj = createObject('Item').comment('comment text', 'line');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    // comment text');
  });

  // MM-31
  test('MM-31: CommentNode block', () => {
    const obj = createObject('Item').comment('comment text', 'block');
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    /* comment text */');
  });

  // MM-32
  test('MM-32: leadingComments on a node', () => {
    const obj = createObject('Item');
    obj.addMember({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'number', value: 100 },
      leadingComments: ['This sets the width'],
    } as ObjectMember);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('    // This sets the width');
    expect(result).toContain('    width: 100');
    const lines = result.split('\n');
    const commentIdx = lines.findIndex((l) => l.includes('// This sets the width'));
    const bindingIdx = lines.findIndex((l) => l.includes('width: 100'));
    expect(commentIdx).toBeLessThan(bindingIdx);
  });

  // MM-33
  test('MM-33: trailingComment on a node', () => {
    const obj = createObject('Item');
    obj.addMember({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'number', value: 100 },
      trailingComment: 'set width',
    } as ObjectMember);
    const doc = createDocument().root(obj);
    const result = emit(doc);
    expect(result).toContain('width: 100');
    expect(result).toContain('// set width');
    const line = result.split('\n').find((l) => l.includes('width: 100'));
    expect(line).toContain('// set width');
  });

  // MM-34
  test('MM-34: emitComments=false suppresses all comments', () => {
    const obj = createObject('Item')
      .comment('line comment', 'line')
      .comment('block comment', 'block');
    obj.addMember({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'number', value: 100 },
      leadingComments: ['leading'],
      trailingComment: 'trailing',
    } as ObjectMember);
    const doc = createDocument().root(obj);
    const result = emit(doc, { emitComments: false });
    expect(result).not.toContain('//');
    expect(result).not.toContain('/*');
    expect(result).toContain('width: 100');
  });
});
