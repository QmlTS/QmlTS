import { describe, expect, test } from 'bun:test';
import { Project, ScriptTarget } from 'ts-morph';
import { extractDsl } from '../../../src/compiler/transform/dsl-extractor.js';
import type { RawDslNode } from '../../../src/compiler/transform/raw-types.js';
import type { DslHandler } from '../../../src/compiler/transform/transform-types.js';

function createProject(): Project {
  return new Project({
    compilerOptions: { target: ScriptTarget.ESNext, strict: true },
    useInMemoryFileSystem: true,
  });
}

function extract(
  code: string,
  viewName = 'MyView',
  vmParam?: string,
): { rawTree?: RawDslNode; diagnostics: readonly { code: string }[] } {
  const project = createProject();
  const sourceFile = project.createSourceFile('test.ts', code);
  const factories = new Set([
    'Item',
    'Rectangle',
    'Text',
    'MouseArea',
    'Column',
    'Row',
    'LinearGradient',
    'Button',
    'RequiredItem',
  ]);
  return extractDsl(sourceFile, viewName, factories, vmParam);
}

describe('DslExtractor', () => {
  // DT-01: Empty factory call
  test('DT-01: Item() produces empty raw tree', () => {
    const { rawTree, diagnostics } = extract(`
      function MyView() { return Item(); }
    `);
    expect(diagnostics).toHaveLength(0);
    expect(rawTree).toBeDefined();
    expect(rawTree!.typeName).toBe('Item');
    expect(rawTree!.bindings).toHaveLength(0);
    expect(rawTree!.children).toHaveLength(0);
    expect(rawTree!.handlers).toHaveLength(0);
    expect(rawTree!.callbackBindings).toHaveLength(0);
    expect(rawTree!.expressionBindings).toHaveLength(0);
  });

  // DT-02: Number binding
  test('DT-02: .width(100) produces literal number binding', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().width(100); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.bindings).toHaveLength(1);
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('width');
    expect(b.value.kind).toBe('literal');
    if (b.value.kind === 'literal') {
      expect(b.value.value).toBe(100);
    }
  });

  // DT-03: String binding
  test('DT-03: .text("hi") produces literal string binding', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().text("hi"); }
    `);
    expect(rawTree).toBeDefined();
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('text');
    expect(b.value.kind).toBe('literal');
    if (b.value.kind === 'literal') {
      expect(b.value.value).toBe('hi');
    }
  });

  // DT-04: Boolean binding
  test('DT-04: .visible(true) produces literal boolean binding', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().visible(true); }
    `);
    expect(rawTree).toBeDefined();
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('visible');
    expect(b.value.kind).toBe('literal');
    if (b.value.kind === 'literal') {
      expect(b.value.value).toBe(true);
    }
  });

  // DT-05: Expression binding (xxxBind)
  test('DT-05: .widthBind("parent.width") produces expression binding', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().widthBind("parent.width"); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.expressionBindings).toHaveLength(1);
    const eb = rawTree!.expressionBindings[0]!;
    expect(eb.property).toBe('width');
    expect(eb.expression).toBe('parent.width');
  });

  // DT-06: State-ref (vm.xxx in property position)
  test('DT-06: .text(vm.name) produces state-ref value', () => {
    const { rawTree } = extract(
      `function MyView(vm: any) { return Item().text(vm.name); }`,
      'MyView',
      'vm',
    );
    expect(rawTree).toBeDefined();
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('text');
    expect(b.value.kind).toBe('state-ref');
    if (b.value.kind === 'state-ref') {
      expect(b.value.vmName).toBe('vm');
      expect(b.value.property).toBe('name');
    }
  });

  // DT-07: Command-ref handler
  test('DT-07: .onClicked(vm.login) produces command-ref handler', () => {
    const { rawTree } = extract(
      `function MyView(vm: any) { return Item().onClicked(vm.login); }`,
      'MyView',
      'vm',
    );
    expect(rawTree).toBeDefined();
    expect(rawTree!.handlers).toHaveLength(1);
    const h: DslHandler = rawTree!.handlers[0]!;
    expect(h.signalName).toBe('clicked');
    expect(h.handlerType).toBe('command-ref');
    expect(h.commandRef).toBeDefined();
    expect(h.commandRef!.vmName).toBe('vm');
    expect(h.commandRef!.methodName).toBe('login');
  });

  // DT-08: Arrow handler
  test('DT-08: .onClicked(() => count++) produces arrow handler', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().onClicked(() => count++); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.handlers).toHaveLength(1);
    const h: DslHandler = rawTree!.handlers[0]!;
    expect(h.signalName).toBe('clicked');
    expect(h.handlerType).toBe('arrow');
    expect(h.code).toContain('count++');
  });

  // DT-09: Single child
  test('DT-09: .child(Text()) produces single recursive child', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().child(Text()); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.children).toHaveLength(1);
    expect(rawTree!.children[0]!.typeName).toBe('Text');
  });

  // DT-10: Multiple children
  test('DT-10: .children(A(), B()) produces two child nodes', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().children(Rectangle(), Text()); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.children).toHaveLength(2);
    expect(rawTree!.children[0]!.typeName).toBe('Rectangle');
    expect(rawTree!.children[1]!.typeName).toBe('Text');
  });

  // DT-13: Id assignment
  test('DT-13: .id("root") produces id assignment', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().id("root"); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.id).toBe('root');
  });

  // EX-01: Malformed chain
  test('EX-01: malformed chain produces QMLTS-T007 diagnostic', () => {
    const { rawTree, diagnostics } = extract(`
      function MyView() { return 42; }
    `);
    expect(rawTree).toBeUndefined();
    expect(diagnostics.length).toBeGreaterThan(0);
    expect(diagnostics.some((d) => d.code === 'QMLTS-T007' || d.code === 'QMLTS-T009')).toBe(true);
  });

  // EX-02: No DSL return
  test('EX-02: no DSL return produces QMLTS-T009 diagnostic', () => {
    const { rawTree, diagnostics } = extract(`
      function MyView() { const x = 1; }
    `);
    expect(rawTree).toBeUndefined();
    expect(diagnostics.some((d) => d.code === 'QMLTS-T009')).toBe(true);
  });

  // EX-03: Non-DSL function
  test('EX-03: non-DSL function produces QMLTS-T009 diagnostic', () => {
    const { rawTree, diagnostics } = extract(`
      function MyView() { return someOtherFunction(); }
    `);
    expect(rawTree).toBeUndefined();
    expect(diagnostics.some((d) => d.code === 'QMLTS-T009')).toBe(true);
  });

  // Additional: String handler (expression handler)
  test('string handler produces expression handler', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().onClicked("console.log('hi')"); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.handlers).toHaveLength(1);
    const h: DslHandler = rawTree!.handlers[0]!;
    expect(h.signalName).toBe('clicked');
    expect(h.handlerType).toBe('expression');
    expect(h.code).toBe("console.log('hi')");
  });

  // Additional: Callback binding (arrow function argument for grouped/attached)
  test('callback binding produces RawCallbackBinding', () => {
    const { rawTree } = extract(`
      function MyView() { return Item().anchors(a => a.left("parent.left").margins(10)); }
    `);
    expect(rawTree).toBeDefined();
    expect(rawTree!.callbackBindings).toHaveLength(1);
    const cb = rawTree!.callbackBindings[0]!;
    expect(cb.methodName).toBe('anchors');
    expect(cb.innerBindings.length).toBeGreaterThanOrEqual(1);
  });

  // Additional: Enum reference
  test('enum reference produces enum-ref value', () => {
    const { rawTree } = extract(`
      function MyView() { return Text().horizontalAlignment(Text.HAlignment.AlignLeft); }
    `);
    expect(rawTree).toBeDefined();
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('horizontalAlignment');
    expect(b.value.kind).toBe('enum-ref');
    if (b.value.kind === 'enum-ref') {
      expect(b.value.typeName).toBe('Text');
      expect(b.value.enumName).toBe('HAlignment');
      expect(b.value.valueName).toBe('AlignLeft');
    }
  });

  // Additional: Nested DSL object as property value
  test('nested DSL object produces raw-object value', () => {
    const { rawTree } = extract(`
      function MyView() { return Rectangle().gradient(LinearGradient()); }
    `);
    expect(rawTree).toBeDefined();
    const b = rawTree!.bindings[0]!;
    expect(b.property).toBe('gradient');
    expect(b.value.kind).toBe('raw-object');
    if (b.value.kind === 'raw-object') {
      expect(b.value.node.typeName).toBe('LinearGradient');
    }
  });
});
