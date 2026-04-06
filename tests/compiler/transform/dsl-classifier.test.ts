import { describe, expect, test } from 'bun:test';
import { Project, ScriptTarget } from 'ts-morph';
import { analyzeView, classifyDslTree } from '../../../src/compiler/transform/dsl-classifier.js';
import { extractDsl } from '../../../src/compiler/transform/dsl-extractor.js';
import { createMockRegistryQuery, TEST_DSL_FACTORIES } from './helpers.js';

function createProject(): Project {
  return new Project({
    compilerOptions: { target: ScriptTarget.ESNext, strict: true },
    useInMemoryFileSystem: true,
  });
}

function extractAndClassify(code: string, viewName = 'MyView', vmParam?: string) {
  const project = createProject();
  const sourceFile = project.createSourceFile('test.ts', code);
  const registry = createMockRegistryQuery();
  const { rawTree, diagnostics: extractDiags } = extractDsl(
    sourceFile,
    viewName,
    TEST_DSL_FACTORIES,
    vmParam,
  );
  if (!rawTree) {
    return { classifiedTree: undefined, usedTypes: [], diagnostics: extractDiags };
  }
  const result = classifyDslTree(rawTree, registry);
  return {
    classifiedTree: result.classifiedTree,
    usedTypes: result.usedTypes,
    diagnostics: [...extractDiags, ...result.diagnostics],
  };
}

describe('DslClassifier', () => {
  // DT-11: Grouped binding (anchors)
  test('DT-11: .anchors(a => a.left(...)) classified as groupedBindings', () => {
    const { classifiedTree, diagnostics } = extractAndClassify(`
      function MyView() {
        return Item().anchors(a => a.left("parent.left").margins(10));
      }
    `);
    expect(classifiedTree).toBeDefined();
    const errorDiags = diagnostics.filter((d) => d.severity === 'error');
    expect(errorDiags).toHaveLength(0);
    expect(classifiedTree!.groupedBindings).toHaveLength(1);
    const gb = classifiedTree!.groupedBindings[0]!;
    expect(gb.group).toBe('anchors');
    expect(gb.bindings.length).toBeGreaterThanOrEqual(2);
    expect(gb.bindings.some((b) => b.property === 'left')).toBe(true);
    expect(gb.bindings.some((b) => b.property === 'margins')).toBe(true);
  });

  // DT-12: Attached binding (layout)
  test('DT-12: .layout(l => l.fillWidth(true)) classified as attachedBindings', () => {
    const { classifiedTree, diagnostics } = extractAndClassify(`
      function MyView() {
        return Item().layout(l => l.fillWidth(true));
      }
    `);
    expect(classifiedTree).toBeDefined();
    const errorDiags = diagnostics.filter((d) => d.severity === 'error');
    expect(errorDiags).toHaveLength(0);
    expect(classifiedTree!.attachedBindings).toHaveLength(1);
    const ab = classifiedTree!.attachedBindings[0]!;
    expect(ab.typeName).toBe('Layout');
    expect(ab.bindings.some((b) => b.property === 'fillWidth')).toBe(true);
  });

  // DT-14: Enum reference preserved through classification
  test('DT-14: enum reference preserved through classification', () => {
    const { classifiedTree } = extractAndClassify(`
      function MyView() {
        return Text().horizontalAlignment(Text.HAlignment.AlignLeft);
      }
    `);
    expect(classifiedTree).toBeDefined();
    const b = classifiedTree!.bindings[0]!;
    expect(b.value.kind).toBe('enum-ref');
    if (b.value.kind === 'enum-ref') {
      expect(b.value.typeName).toBe('Text');
      expect(b.value.enumName).toBe('HAlignment');
      expect(b.value.valueName).toBe('AlignLeft');
    }
  });

  // DT-17: Unknown type
  test('DT-17: unknown type produces QMLTS-T001 diagnostic, no T002 cascade', () => {
    const project = createProject();
    const sourceFile = project.createSourceFile(
      'test.ts',
      `
      function MyView() {
        return UnknownWidget().width(100);
      }
    `,
    );
    const registry = createMockRegistryQuery();
    // Include UnknownWidget in factories so extractor parses it,
    // then classifier emits T001 for the unknown type
    const factories = new Set([...TEST_DSL_FACTORIES, 'UnknownWidget']);
    const { rawTree } = extractDsl(sourceFile, 'MyView', factories);
    expect(rawTree).toBeDefined();
    const { diagnostics } = classifyDslTree(rawTree!, registry);

    const t001 = diagnostics.filter((d) => d.code === 'QMLTS-T001');
    expect(t001.length).toBeGreaterThan(0);
    // Should NOT cascade T002 for properties of unknown type
    const t002 = diagnostics.filter((d) => d.code === 'QMLTS-T002');
    expect(t002).toHaveLength(0);
  });

  // CL-01: Callback not in registry → diagnostic
  test('CL-01: callback method not matching property/attached emits diagnostic', () => {
    const { classifiedTree, diagnostics } = extractAndClassify(`
      function MyView() {
        return Item().unknownGroup(g => g.foo("bar"));
      }
    `);
    expect(classifiedTree).toBeDefined();
    // Should have a diagnostic about the unresolved callback
    expect(diagnostics.length).toBeGreaterThan(0);
  });

  // analyzeView() integration
  test('analyzeView() orchestrates extract → classify → AnalyzedView', () => {
    const project = createProject();
    const sourceFile = project.createSourceFile(
      'test.ts',
      `
      function MyView() {
        return Rectangle().width(100).child(Text().text("hello"));
      }
    `,
    );
    const registry = createMockRegistryQuery();
    const discoveredView = {
      functionName: 'MyView',
      exportKind: 'named' as const,
      filePath: 'test.ts',
      line: 2,
    };
    const { analyzedView, diagnostics } = analyzeView(
      discoveredView,
      sourceFile,
      registry,
      TEST_DSL_FACTORIES,
    );
    expect(diagnostics).toHaveLength(0);
    expect(analyzedView).toBeDefined();
    expect(analyzedView!.dslTree.typeName).toBe('Rectangle');
    expect(analyzedView!.dslTree.children).toHaveLength(1);
    expect(analyzedView!.usedTypes.length).toBeGreaterThanOrEqual(2);
  });
});
