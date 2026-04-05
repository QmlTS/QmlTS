import { describe, expect, test } from 'bun:test';
import { DslBuilderImpl } from '../../../src/dsl/runtime/builder-base.js';
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
});
