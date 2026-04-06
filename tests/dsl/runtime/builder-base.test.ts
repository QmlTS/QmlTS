import { describe, expect, test } from 'bun:test';
import { DslBuilderImpl, parseArrowFunction } from '../../../src/dsl/runtime/builder-base.js';
import { createEnumToken } from '../../../src/dsl/runtime/enum-token.js';

describe('DslBuilderImpl', () => {
  test('BB-01: constructor sets __typeName', () => {
    const b = new DslBuilderImpl('Rectangle');
    expect(b.__typeName).toBe('Rectangle');
  });

  test('BB-02: id() sets the object id', () => {
    const b = new DslBuilderImpl('Rectangle');
    const result = b.id('myRect');
    expect(result).toBe(b);
    const node = b.build();
    const idMember = node.members.find((m) => m.kind === 'IdAssignment');
    expect(idMember).toBeDefined();
    expect(idMember!.kind === 'IdAssignment' && idMember!.id).toBe('myRect');
  });

  test('BB-03: child() adds child object', () => {
    const parent = new DslBuilderImpl('Column');
    const child = new DslBuilderImpl('Rectangle');
    parent.child(child);
    const node = parent.build();
    const children = node.members.filter((m) => m.kind === 'ObjectDefinition');
    expect(children.length).toBe(1);
    expect(children[0]!.kind === 'ObjectDefinition' && children[0]!.typeName).toBe('Rectangle');
  });

  test('BB-04: setProp() adds a property binding with literal value', () => {
    const b = new DslBuilderImpl('Rectangle');
    b.setProp('width', 100);
    const node = b.build();
    const binding = node.members.find((m) => m.kind === 'Binding' && m.property === 'width');
    expect(binding).toBeDefined();
  });

  test('BB-05: setBinding() adds a binding expression', () => {
    const b = new DslBuilderImpl('Rectangle');
    b.setBinding('width', 'parent.width');
    const node = b.build();
    const binding = node.members.find((m) => m.kind === 'Binding' && m.property === 'width');
    expect(binding).toBeDefined();
    if (binding && binding.kind === 'Binding') {
      expect(binding.value.kind).toBe('expression');
    }
  });

  test('BB-06: setProp with string value creates string binding', () => {
    const b = new DslBuilderImpl('Text');
    b.setProp('text', 'Hello');
    const node = b.build();
    const binding = node.members.find((m) => m.kind === 'Binding' && m.property === 'text');
    expect(binding).toBeDefined();
    if (binding && binding.kind === 'Binding') {
      expect(binding.value.kind).toBe('string');
    }
  });

  test('BB-07: setProp with boolean value', () => {
    const b = new DslBuilderImpl('Rectangle');
    b.setProp('visible', true);
    const node = b.build();
    const binding = node.members.find((m) => m.kind === 'Binding' && m.property === 'visible');
    expect(binding).toBeDefined();
    if (binding && binding.kind === 'Binding') {
      expect(binding.value.kind).toBe('boolean');
    }
  });

  test('BB-08: setProp with enum token creates enum reference', () => {
    const token = createEnumToken('Text', 'HorizontalAlignment', 'AlignLeft');
    const b = new DslBuilderImpl('Text');
    b.setProp('horizontalAlignment', token);
    const node = b.build();
    const binding = node.members.find(
      (m) => m.kind === 'Binding' && m.property === 'horizontalAlignment',
    );
    expect(binding).toBeDefined();
    if (binding && binding.kind === 'Binding') {
      expect(binding.value.kind).toBe('enum');
      if (binding.value.kind === 'enum') {
        expect(binding.value.typeName).toBe('Text');
        expect(binding.value.enumName).toBe('HorizontalAlignment');
        expect(binding.value.valueName).toBe('AlignLeft');
      }
    }
  });

  test('BB-09: handleSignal() adds signal handler with block body', () => {
    const b = new DslBuilderImpl('MouseArea');
    b.handleSignal('onClicked', 'console.log("clicked")');
    const node = b.build();
    const handler = node.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.name).toBe('onClicked');
    }
  });

  test('BB-10: addGrouped() adds grouped binding', () => {
    const b = new DslBuilderImpl('Rectangle');
    b.addGrouped('border', [
      { property: 'width', value: 2 },
      { property: 'color', value: 'black' },
    ]);
    const node = b.build();
    const grouped = node.members.find((m) => m.kind === 'GroupedBinding');
    expect(grouped).toBeDefined();
    if (grouped && grouped.kind === 'GroupedBinding') {
      expect(grouped.group).toBe('border');
      expect(grouped.bindings.length).toBe(2);
    }
  });

  test('BB-11: addAttached() adds attached binding', () => {
    const b = new DslBuilderImpl('Rectangle');
    b.addAttached('Layout', [{ property: 'fillWidth', value: true }]);
    const node = b.build();
    const attached = node.members.find((m) => m.kind === 'AttachedBinding');
    expect(attached).toBeDefined();
    if (attached && attached.kind === 'AttachedBinding') {
      expect(attached.attachedTypeName).toBe('Layout');
      expect(attached.bindings.length).toBe(1);
    }
  });

  test('BB-12: build() produces valid ObjectDefinitionNode', () => {
    const b = new DslBuilderImpl('Item');
    b.id('root');
    b.setProp('width', 800);
    b.setProp('height', 600);
    const child = new DslBuilderImpl('Rectangle');
    child.setProp('color', 'red');
    b.child(child);
    const node = b.build();
    expect(node.kind).toBe('ObjectDefinition');
    expect(node.typeName).toBe('Item');
    expect(node.members.length).toBe(4);
  });

  test('BB-13: multiple children preserve order', () => {
    const b = new DslBuilderImpl('Column');
    b.child(new DslBuilderImpl('Text'));
    b.child(new DslBuilderImpl('Rectangle'));
    b.child(new DslBuilderImpl('Image'));
    const node = b.build();
    const children = node.members.filter((m) => m.kind === 'ObjectDefinition');
    expect(children.length).toBe(3);
    expect((children[0] as { typeName: string }).typeName).toBe('Text');
    expect((children[1] as { typeName: string }).typeName).toBe('Rectangle');
    expect((children[2] as { typeName: string }).typeName).toBe('Image');
  });

  test('BB-14: child() returns this for chaining', () => {
    const b = new DslBuilderImpl('Column');
    const result = b.child(new DslBuilderImpl('Text'));
    expect(result).toBe(b);
  });

  // ─── Phase 06 Step 1: children() ──────────────────────────────────────

  test('BB-15: children() adds multiple children', () => {
    const b = new DslBuilderImpl('Column');
    b.children(
      new DslBuilderImpl('Text'),
      new DslBuilderImpl('Rectangle'),
      new DslBuilderImpl('Image'),
    );
    const node = b.build();
    const children = node.members.filter((m) => m.kind === 'ObjectDefinition');
    expect(children.length).toBe(3);
    expect((children[0] as { typeName: string }).typeName).toBe('Text');
    expect((children[1] as { typeName: string }).typeName).toBe('Rectangle');
    expect((children[2] as { typeName: string }).typeName).toBe('Image');
  });

  test('BB-16: children() returns this for chaining', () => {
    const b = new DslBuilderImpl('Column');
    const result = b.children(new DslBuilderImpl('Text'));
    expect(result).toBe(b);
  });

  test('BB-17: children() with zero args is a no-op', () => {
    const b = new DslBuilderImpl('Column');
    b.children();
    const node = b.build();
    expect(node.members.length).toBe(0);
  });

  test('BB-18: children() preserves order with child() interleaving', () => {
    const b = new DslBuilderImpl('Column');
    b.child(new DslBuilderImpl('A'));
    b.children(new DslBuilderImpl('B'), new DslBuilderImpl('C'));
    b.child(new DslBuilderImpl('D'));
    const node = b.build();
    const children = node.members.filter((m) => m.kind === 'ObjectDefinition');
    expect(children.length).toBe(4);
    expect((children[0] as { typeName: string }).typeName).toBe('A');
    expect((children[1] as { typeName: string }).typeName).toBe('B');
    expect((children[2] as { typeName: string }).typeName).toBe('C');
    expect((children[3] as { typeName: string }).typeName).toBe('D');
  });

  // ─── Phase 06 Step 1: Signal handler forms ────────────────────────────

  test('BB-19: handleSignal with string creates block handler', () => {
    const b = new DslBuilderImpl('MouseArea');
    b.handleSignal('onClicked', 'console.log("clicked")');
    const node = b.build();
    const handler = node.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('block');
      if (handler.body.form === 'block') {
        expect(handler.body.code).toBe('console.log("clicked")');
      }
    }
  });

  test('BB-20: handleSignal with arrow function creates arrow handler', () => {
    const b = new DslBuilderImpl('MouseArea');
    b.handleSignal('onClicked', () => console.log('clicked'));
    const node = b.build();
    const handler = node.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('arrow');
    }
  });

  test('BB-21: handleSignal with arrow function preserves parameters', () => {
    const b = new DslBuilderImpl('MouseArea');
    b.handleSignal('onPressed', (mouse: any) => {
      mouse.accepted = true;
    });
    const node = b.build();
    const handler = node.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('arrow');
      if (handler.body.form === 'arrow') {
        expect(handler.body.parameters.length).toBeGreaterThanOrEqual(1);
        expect(handler.body.isBlock).toBe(true);
      }
    }
  });

  test('BB-22: handleSignal with named function throws TypeError', () => {
    const b = new DslBuilderImpl('MouseArea');
    function myHandler() {
      console.log('handler');
    }
    expect(() => b.handleSignal('onClicked', myHandler)).toThrow(TypeError);
  });

  test('BB-23: handleSignal command-ref error mentions compiler', () => {
    const b = new DslBuilderImpl('Button');
    function login() {}
    expect(() => b.handleSignal('onClicked', login)).toThrow(/compiler processing/);
  });
});

// ─── Phase 06 Step 1: parseArrowFunction ──────────────────────────────────

describe('parseArrowFunction', () => {
  test('parses expression arrow: () => expr', () => {
    const result = parseArrowFunction(() => 42);
    expect(result).not.toBeNull();
    expect(result!.params).toEqual([]);
    expect(result!.isBlock).toBe(false);
  });

  test('parses block arrow: () => { stmts }', () => {
    const result = parseArrowFunction(() => {
      console.log('hello');
    });
    expect(result).not.toBeNull();
    expect(result!.params).toEqual([]);
    expect(result!.isBlock).toBe(true);
  });

  test('parses arrow with single param', () => {
    const result = parseArrowFunction((x: any) => x + 1);
    expect(result).not.toBeNull();
    expect(result!.params.length).toBe(1);
    expect(result!.isBlock).toBe(false);
  });

  test('parses arrow with multiple params', () => {
    const result = parseArrowFunction((a: any, b: any) => a + b);
    expect(result).not.toBeNull();
    expect(result!.params.length).toBe(2);
    expect(result!.isBlock).toBe(false);
  });

  test('returns null for named function', () => {
    function myFunc() {
      return 42;
    }
    const result = parseArrowFunction(myFunc);
    expect(result).toBeNull();
  });

  test('returns null for bound function', () => {
    const obj = {
      method() {
        return 42;
      },
    };
    const result = parseArrowFunction(obj.method.bind(obj));
    expect(result).toBeNull();
  });
});
