import { describe, expect, test } from 'bun:test';
import { Project, ScriptTarget } from 'ts-morph';
import { analyzeView } from '../../../src/compiler/transform/dsl-classifier.js';
import { createDslTransformer } from '../../../src/compiler/transform/dsl-transformer.js';
import type { AnalyzedView } from '../../../src/compiler/transform/transform-types.js';
import type { AnalyzedViewModel } from '../../../src/compiler/viewmodel/extractor-types.js';
import { createMockRegistryQuery, TEST_DSL_FACTORIES } from './helpers.js';

function createProject(): Project {
  return new Project({
    compilerOptions: { target: ScriptTarget.ESNext, strict: true },
    useInMemoryFileSystem: true,
  });
}

function buildView(code: string, viewName = 'MyView', vmParam?: string): AnalyzedView {
  const project = createProject();
  const sourceFile = project.createSourceFile('test.ts', code);
  const registry = createMockRegistryQuery();
  const discovered = {
    functionName: viewName,
    exportKind: 'named' as const,
    filePath: 'test.ts',
    line: 1,
    vmParam: vmParam ? { name: vmParam, type: 'any' } : undefined,
  };
  const { analyzedView } = analyzeView(discovered, sourceFile, registry, TEST_DSL_FACTORIES);
  if (!analyzedView) throw new Error('Failed to analyze view');
  return analyzedView;
}

describe('DslTransformer', () => {
  const registry = createMockRegistryQuery();
  const transformer = createDslTransformer(registry);
  const commandVm: AnalyzedViewModel = {
    className: 'TestVm',
    filePath: 'vm.ts',
    line: 1,
    isExported: true,
    states: [],
    commands: [
      {
        methodName: 'handleClick',
        qmlName: 'handleClick',
        parameters: [],
        returnType: 'void',
        options: { id: 7 },
        line: 1,
      },
    ],
    effects: [],
    lifecycle: {
      hasOnMounted: false,
      hasOnUnmounting: false,
      hasOnBeforeHotReload: false,
      hasOnAfterHotReload: false,
      hasOnVisibilityChanged: false,
    },
    constructorParams: [],
  };

  // DT-15: Nested object value
  test('DT-15: gradient(LinearGradient()) → ObjectValue in AST', () => {
    const view = buildView(`
      function MyView() { return Rectangle().gradient(LinearGradient()); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    expect(root.typeName).toBe('Rectangle');
    const gradientBinding = root.members.find(
      (m) => m.kind === 'Binding' && m.property === 'gradient',
    );
    expect(gradientBinding).toBeDefined();
    if (gradientBinding && gradientBinding.kind === 'Binding') {
      expect(gradientBinding.value.kind).toBe('object');
      if (gradientBinding.value.kind === 'object') {
        expect(gradientBinding.value.node.typeName).toBe('LinearGradient');
      }
    }
  });

  // DT-16: Basic lowering
  test('DT-16: width(100).height(200) → two BindingNodes', () => {
    const view = buildView(`
      function MyView() { return Rectangle().width(100).height(200); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    const bindings = root.members.filter((m) => m.kind === 'Binding');
    expect(bindings.length).toBeGreaterThanOrEqual(2);
    const widthBinding = bindings.find((b) => b.kind === 'Binding' && b.property === 'width');
    const heightBinding = bindings.find((b) => b.kind === 'Binding' && b.property === 'height');
    expect(widthBinding).toBeDefined();
    expect(heightBinding).toBeDefined();
    if (widthBinding && widthBinding.kind === 'Binding') {
      expect(widthBinding.value.kind).toBe('number');
    }
    if (heightBinding && heightBinding.kind === 'Binding') {
      expect(heightBinding.value.kind).toBe('number');
    }
  });

  // DT-18: Unknown property
  test('DT-18: unknown property produces QMLTS-T002 diagnostic', () => {
    const view = buildView(`
      function MyView() { return Rectangle().nonExistentProp(42); }
    `);
    const result = transformer.transform(view);
    const t002 = result.diagnostics.filter((d) => d.code === 'QMLTS-T002');
    expect(t002.length).toBeGreaterThan(0);
    expect(
      result.document.rootObject.members.some(
        (m) => m.kind === 'Binding' && m.property === 'nonExistentProp',
      ),
    ).toBe(false);
  });

  // DT-19: Type mismatch (warning)
  test('DT-19: type mismatch produces QMLTS-T003 warning', () => {
    const view = buildView(`
      function MyView() { return Rectangle().width("not a number"); }
    `);
    const result = transformer.transform(view);
    const t003 = result.diagnostics.filter((d) => d.code === 'QMLTS-T003');
    expect(t003.length).toBeGreaterThan(0);
    expect(t003[0]!.severity).toBe('warning');
  });

  // DT-20: Readonly property
  test('DT-20: readonly property binding produces QMLTS-T005 diagnostic', () => {
    const view = buildView(`
      function MyView() { return Item().implicitWidth(100); }
    `);
    const result = transformer.transform(view);
    const t005 = result.diagnostics.filter((d) => d.code === 'QMLTS-T005');
    expect(t005.length).toBeGreaterThan(0);
    expect(
      result.document.rootObject.members.some(
        (m) => m.kind === 'Binding' && m.property === 'implicitWidth',
      ),
    ).toBe(false);
  });

  // DT-21: Required property not set
  test('DT-21: required property not set produces QMLTS-T006 warning', () => {
    const view = buildView(`
      function MyView() { return RequiredItem().optionalNum(42); }
    `);
    const result = transformer.transform(view);
    const t006 = result.diagnostics.filter((d) => d.code === 'QMLTS-T006');
    expect(t006.length).toBeGreaterThan(0);
    expect(t006[0]!.severity).toBe('warning');
    expect(t006[0]!.message).toContain('requiredText');
  });

  // Additional: State binding metadata
  test('state bindings collected in TransformResult', () => {
    const view = buildView(
      `function MyView(vm: any) { return Text().text(vm.title); }`,
      'MyView',
      'vm',
    );
    const result = transformer.transform(view);
    expect(result.stateBindings).toHaveLength(1);
    expect(result.stateBindings[0]!.vmProperty).toBe('title');
    expect(result.stateBindings[0]!.property).toBe('text');
  });

  // Additional: Command binding metadata
  test('command bindings collected in TransformResult', () => {
    const view = buildView(
      `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
      'MyView',
      'vm',
    );
    const result = transformer.transform(view, commandVm);
    expect(result.commandBindings).toHaveLength(1);
    expect(result.commandBindings[0]!.methodName).toBe('handleClick');
    expect(result.commandBindings[0]!.signalName).toBe('clicked');
  });

  // Additional: Required imports from used types
  test('required imports generated from used types', () => {
    const view = buildView(`
      function MyView() { return Rectangle().child(Text().text("hi")); }
    `);
    const result = transformer.transform(view);
    expect(result.requiredImports.length).toBeGreaterThanOrEqual(1);
    expect(result.requiredImports.some((i) => i.moduleUri === 'QtQuick')).toBe(true);
  });

  // Additional: Grouped binding lowering
  test('grouped binding lowers to GroupedBindingNode', () => {
    const view = buildView(`
      function MyView() { return Rectangle().border(b => b.width(2).color("red")); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    const grouped = root.members.filter((m) => m.kind === 'GroupedBinding');
    expect(grouped).toHaveLength(1);
    if (grouped[0] && grouped[0].kind === 'GroupedBinding') {
      expect(grouped[0].group).toBe('border');
      expect(grouped[0].bindings.length).toBeGreaterThanOrEqual(2);
    }
  });

  // Additional: Attached binding lowering
  test('attached binding lowers to AttachedBindingNode', () => {
    const view = buildView(`
      function MyView() { return Item().layout(l => l.fillWidth(true)); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    const attached = root.members.filter((m) => m.kind === 'AttachedBinding');
    expect(attached).toHaveLength(1);
    if (attached[0] && attached[0].kind === 'AttachedBinding') {
      expect(attached[0].attachedTypeName).toBe('Layout');
    }
  });

  test('readonly expression binding produces QMLTS-T005 and is not emitted', () => {
    const view = buildView(`
      function MyView() { return Item().implicitWidthBind("parent.width"); }
    `);
    const result = transformer.transform(view);
    expect(result.diagnostics.some((d) => d.code === 'QMLTS-T005')).toBe(true);
    expect(
      result.document.rootObject.members.some(
        (m) => m.kind === 'Binding' && m.property === 'implicitWidth',
      ),
    ).toBe(false);
  });

  // Additional: Signal handler lowering
  test('signal handler lowers to SignalHandlerNode', () => {
    const view = buildView(`
      function MyView() { return MouseArea().onClicked("console.log('clicked')"); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    const handlers = root.members.filter((m) => m.kind === 'SignalHandler');
    expect(handlers).toHaveLength(1);
    if (handlers[0] && handlers[0].kind === 'SignalHandler') {
      expect(handlers[0].name).toBe('clicked');
      expect(handlers[0].body.form).toBe('expression');
    }
  });

  // Additional: Id lowering
  test('id lowers to IdAssignmentNode', () => {
    const view = buildView(`
      function MyView() { return Rectangle().id("root"); }
    `);
    const result = transformer.transform(view);
    const root = result.document.rootObject;
    const idNode = root.members.find((m) => m.kind === 'IdAssignment');
    expect(idNode).toBeDefined();
    if (idNode && idNode.kind === 'IdAssignment') {
      expect(idNode.id).toBe('root');
    }
  });

  describe('V2 mode', () => {
    const v2Options: import('../../../src/compiler/transform/transform-types.js').V2TransformOptions =
      {
        qmlId: '__qmlts_vm0',
        className: 'TestVm',
      };

    test('DT-V2-01: command-ref lowers to qmlId.method() in V2 mode', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm, v2Options);
      const handler = result.document.rootObject.members.find(
        (m) => m.kind === 'SignalHandler' && m.name === 'clicked',
      );
      expect(handler).toBeDefined();
      if (handler && handler.kind === 'SignalHandler') {
        expect(handler.body.code).toBe('__qmlts_vm0.handleClick()');
        expect(handler.body.code).not.toContain('__qmlts.invoke');
      }
    });

    test('DT-V2-02: state-ref lowers to qmlId.property in V2 mode', () => {
      const view = buildView(
        `function MyView(vm: any) { return Text().text(vm.title); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, undefined, v2Options);
      const binding = result.document.rootObject.members.find(
        (m) => m.kind === 'Binding' && m.property === 'text',
      );
      expect(binding).toBeDefined();
      if (binding && binding.kind === 'Binding') {
        expect(binding.value).toEqual({ kind: 'expression', code: '__qmlts_vm0.title' });
      }
    });

    test('DT-V2-03: V1 mode still emits __qmlts.invoke when v2Options absent', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm);
      const handler = result.document.rootObject.members.find(
        (m) => m.kind === 'SignalHandler' && m.name === 'clicked',
      );
      expect(handler).toBeDefined();
      if (handler && handler.kind === 'SignalHandler') {
        expect(handler.body.code).toContain('__qmlts.invoke');
      }
    });

    test('DT-V2-04: V2 command bindings metadata still collected', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm, v2Options);
      expect(result.commandBindings).toHaveLength(1);
      expect(result.commandBindings[0]!.methodName).toBe('handleClick');
    });

    test('DT-V2-05: V2 state bindings metadata still collected', () => {
      const view = buildView(
        `function MyView(vm: any) { return Text().text(vm.title); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, undefined, v2Options);
      expect(result.stateBindings).toHaveLength(1);
      expect(result.stateBindings[0]!.vmProperty).toBe('title');
    });
  });
});
