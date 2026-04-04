import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { astSerializer } from '../../src/ast/serializer.js';
import { transformAst } from '../../src/ast/transform.js';
import { astUtils } from '../../src/ast/utils.js';
import { validateSemantics, validateStructure } from '../../src/ast/validator.js';
import { v } from '../../src/ast/values.js';
import { walkAst } from '../../src/ast/visitor.js';
import { getQuery } from '../../src/index.js';

function makeFullDoc() {
  return createDocument()
    .pragma('Singleton')
    .pragma('ComponentBehavior', 'Bound')
    .importModule('QtQuick')
    .importModule('QtQuick.Controls')
    .root(
      createObject('ApplicationWindow')
        .id('window')
        .declareProp('int', 'count', v.num(0))
        .declareProp('string', 'title', v.str('My App'))
        .declareAlias('labelText', 'label.text')
        .bind('width', 800)
        .bind('height', 600)
        .bind('visible', true)
        .bind('color', v.str('#ffffff'))
        .grouped('anchors', (g) => g.bind('fill', v.expr('parent')).bind('margins', 10))
        .attached('Layout', (a) => a.bind('fillWidth', true).bind('preferredHeight', 50))
        .declareSignal('submitted', [
          { name: 'data', type: 'var' },
          { name: 'index', type: 'int' },
        ])
        .handler('onWidthChanged', v.block('console.log("width changed")'))
        .fn(
          'calculate',
          { params: [{ name: 'x', type: 'int' }], returnType: 'real' },
          'return x * 2',
        )
        .declareEnum('Status', [
          { name: 'Idle' },
          { name: 'Loading' },
          { name: 'Error', value: 99 },
        ])
        .inlineComponent(
          'Badge',
          createObject('Rectangle').bind('radius', 10).bind('color', v.str('red')),
        )
        .comment('Main content')
        .child(
          createObject('Column')
            .id('content')
            .child(
              createObject('Text')
                .id('label')
                .bind('text', v.expr('window.title'))
                .bind('font', v.expr('({ pixelSize: 24 })')),
            )
            .child(
              createObject('Button')
                .id('btn')
                .bind('text', v.str('Click me'))
                .handler('onClicked', v.block('window.count++')),
            ),
        )
        .child(
          createObject('Rectangle')
            .id('footer')
            .bind('height', 40)
            .bind('color', v.str('#eeeeee'))
            .behaviorOn('opacity', createObject('NumberAnimation').bind('duration', 150)),
        ),
    );
}

describe('E2E Integration', () => {
  // E2E-01: Builder → Validator → passes
  test('built AST passes structural validation', () => {
    const doc = makeFullDoc();
    const result = validateStructure(doc);
    expect(result.valid).toBe(true);
    expect(result.diagnostics).toEqual([]);
  });

  // E2E-02: Builder → Serializer → Deserialize → Equal
  test('serialization roundtrip preserves AST', () => {
    const doc = makeFullDoc();
    const json = astSerializer.serialize(doc);
    const restored = astSerializer.deserialize(json);
    expect(astUtils.structuralEqual(doc, restored)).toBe(true);
  });

  // E2E-03: Builder → Walker collectIds matches collectIds utility
  test('walker ids match collectIds', () => {
    const doc = makeFullDoc();

    // Collect via utility
    const utilIds = astUtils.collectIds(doc);

    // Collect via manual walkAst
    const manualIds: string[] = [];
    walkAst(doc, {
      visitIdAssignment(node) {
        manualIds.push(node.id);
      },
    });

    expect(manualIds.sort()).toEqual([...utilIds.keys()].sort());
  });

  // E2E-04: Builder → Transform → still valid
  test('transformed AST still passes structural validation', () => {
    const doc = makeFullDoc();
    const transformed = transformAst(doc, {
      transformBinding(node) {
        if (node.property === 'width') {
          return { ...node, value: { kind: 'number', value: 1024 } };
        }
      },
    });
    const result = validateStructure(transformed);
    expect(result.valid).toBe(true);
  });

  // E2E-05: Full syntax document passes all structural checks
  test('full syntax document validates structurally', () => {
    const doc = makeFullDoc();
    const result = validateStructure(doc);
    expect(result.valid).toBe(true);

    // Verify the doc has substantial content
    const nodeCount = astUtils.countNodes(doc);
    expect(nodeCount).toBeGreaterThan(20);

    const types = astUtils.collectTypeNames(doc);
    expect(types.length).toBeGreaterThanOrEqual(5);

    const depth = astUtils.maxDepth(doc);
    expect(depth).toBeGreaterThanOrEqual(3);
  });

  // E2E-06: Semantic validation with Qt snapshot
  test('semantic validation with Qt registry', () => {
    const query = getQuery();
    const doc = createDocument()
      .importModule('QtQuick')
      .root(
        createObject('Rectangle')
          .id('root')
          .bind('width', 400)
          .bind('height', 300)
          .bind('color', v.str('red'))
          .child(
            createObject('Text')
              .id('label')
              .bind('text', v.str('Hello'))
              .bind('font', v.expr('({ pixelSize: 16 })')),
          )
          .child(
            createObject('MouseArea')
              .bind('anchors', v.expr('parent'))
              .handler('onClicked', v.block('console.log("clicked")')),
          ),
      );

    // Structural should pass
    const structural = validateStructure(doc);
    expect(structural.valid).toBe(true);

    // Semantic should pass for known types
    const semantic = validateSemantics(doc, query);
    // Rectangle, Text, MouseArea are all valid Qt types
    expect(semantic.diagnostics.filter((d) => d.code === 'E100')).toEqual([]);
  });
});
