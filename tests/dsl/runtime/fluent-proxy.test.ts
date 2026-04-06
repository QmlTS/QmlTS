import { describe, expect, test } from 'bun:test';
import { createEnumToken } from '../../../src/dsl/runtime/enum-token.js';
import { createFluentBuilder } from '../../../src/dsl/runtime/fluent-proxy.js';
import type { TypeMetadata } from '../../../src/dsl/runtime/metadata.js';

const testMeta: TypeMetadata = {
  typeName: 'TestRect',
  properties: [
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [
    {
      methodName: 'border',
      groupName: 'border',
      properties: [
        { name: 'width', hasValue: true, hasBinding: true },
        { name: 'color', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [{ name: 'enabled', hasValue: true, hasBinding: true }],
      signals: [{ handlerName: 'onPressed', paramCount: 1 }],
    },
  ],
  defaultProperty: 'data',
};

describe('createFluentBuilder', () => {
  test('creates builder for the given type name', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(builder.__typeName).toBe('TestRect');
  });

  test('property setter calls setProp and returns builder for chaining', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = (builder as any).width(100);
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'number', value: 100 },
    });
  });

  test('binding setter calls setBinding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).widthBind('parent.width');
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'expression', code: 'parent.width' },
    });
  });

  test('signal handler calls handleSignal', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).onClicked('console.log("clicked")');
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'SignalHandler',
      name: 'onClicked',
      body: { form: 'block', code: 'console.log("clicked")' },
    });
  });

  test('grouped callback creates grouped binding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).border((b: any) => {
      b.width(2);
      b.color('black');
    });
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'GroupedBinding',
      group: 'border',
      bindings: [
        {
          kind: 'Binding',
          property: 'width',
          value: { kind: 'number', value: 2 },
        },
        {
          kind: 'Binding',
          property: 'color',
          value: { kind: 'string', value: 'black' },
        },
      ],
    });
  });

  test('attached callback creates attached binding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).keys((b: any) => {
      b.enabled(true);
    });
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'AttachedBinding',
      attachedTypeName: 'Keys',
      bindings: [
        {
          kind: 'Binding',
          property: 'enabled',
          value: { kind: 'boolean', value: true },
        },
      ],
    });
  });

  test('attached callback supports signal handlers', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).keys((b: any) => {
      b.onPressed('event.accepted = true');
    });
    const ast = builder.build();
    const attached = ast.members.find((m) => m.kind === 'AttachedBinding');
    expect(attached).toBeDefined();
    if (attached && attached.kind === 'AttachedBinding') {
      expect(attached.bindings).toContainEqual({
        kind: 'Binding',
        property: 'onPressed',
        value: { kind: 'expression', code: 'event.accepted = true' },
      });
    }
  });

  test('id() works', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = builder.id('myRect');
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({ kind: 'IdAssignment', id: 'myRect' });
  });

  test('child() works', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const childBuilder = createFluentBuilder('Child', {
      typeName: 'Child',
      properties: [],
      signals: [],
      grouped: [],
      attached: [],
    });
    builder.child(childBuilder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'ObjectDefinition',
      typeName: 'Child',
      members: [],
    });
  });

  test('chaining multiple operations', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = (builder as any).width(100).height(50).color('red').onClicked('doStuff()');
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toHaveLength(4);
  });

  test('unknown property throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).nonExistent(42)).toThrow(TypeError);
  });

  test('unknown signal throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).onUnknownSignal('body')).toThrow(TypeError);
  });

  test('unknown grouped property throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).unknownGroup((b: any) => b)).toThrow(TypeError);
  });

  test('enum token value works in property setter', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const token = createEnumToken('TestRect', 'Alignment', 'Center');
    (builder as any).color(token);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'color',
      value: {
        kind: 'enum',
        typeName: 'TestRect',
        enumName: 'Alignment',
        valueName: 'Center',
      },
    });
  });

  test('build() is not proxied and returns AST directly', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const ast = builder.build();
    expect(ast.kind).toBe('ObjectDefinition');
    expect(ast.typeName).toBe('TestRect');
  });

  // ─── Phase 06 Step 1: children() via proxy ────────────────────────────

  test('children() adds multiple child objects', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const child1 = createFluentBuilder('Child1', {
      typeName: 'Child1',
      properties: [],
      signals: [],
      grouped: [],
      attached: [],
    });
    const child2 = createFluentBuilder('Child2', {
      typeName: 'Child2',
      properties: [],
      signals: [],
      grouped: [],
      attached: [],
    });
    builder.children(child1, child2);
    const ast = builder.build();
    const childNodes = ast.members.filter((m) => m.kind === 'ObjectDefinition');
    expect(childNodes.length).toBe(2);
    expect((childNodes[0] as { typeName: string }).typeName).toBe('Child1');
    expect((childNodes[1] as { typeName: string }).typeName).toBe('Child2');
  });

  test('children() returns builder for chaining', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = builder.children();
    expect(result).toBe(builder);
  });

  // ─── Phase 06 Step 1: Arrow handler via proxy ─────────────────────────

  test('signal handler accepts arrow function', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).onClicked(() => console.log('clicked'));
    const ast = builder.build();
    const handler = ast.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.name).toBe('onClicked');
      expect(handler.body.form).toBe('arrow');
    }
  });

  test('signal handler with named function creates expression handler', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    function myHandler() {}
    (builder as any).onClicked(myHandler);
    const ast = builder.build();
    const handler = ast.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('expression');
      if (handler.body.form === 'expression') {
        expect(handler.body.code).toBe('myHandler');
      }
    }
  });

  test('signal handler with method reference (vm.login form)', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const vm = { login() {} };
    (builder as any).onClicked(vm.login);
    const ast = builder.build();
    const handler = ast.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    if (handler && handler.kind === 'SignalHandler') {
      expect(handler.body.form).toBe('expression');
      if (handler.body.form === 'expression') {
        expect(handler.body.code).toBe('login');
      }
    }
  });
});
