import { describe, expect, test } from 'bun:test';
import { astSerializer, createDocument, createObject, v } from '../../src/ast/index.js';
import { emit, emitFragment, emitWithSourceMap } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §1: Determinism (DT-01..DT-04)
// ═══════════════════════════════════════════════════════════════════════════

function buildComplexDoc() {
  return createDocument()
    .importModule('QtQuick', '6.0')
    .importModule('QtQuick.Controls', '6.0')
    .importModule('QtQuick.Layouts', '6.0')
    .root(
      createObject('ApplicationWindow')
        .id('mainWindow')
        .bind('width', 1024)
        .bind('height', 768)
        .bind('visible', true)
        .bind('title', v.str('My Application'))
        .declareProp('int', 'clickCount', 0)
        .declareProp('bool', 'isActive', true)
        .declareSignal('appStarted')
        .handler('onAppStarted', v.expr('console.log("started")'))
        .fn('reset', { params: [] }, 'clickCount = 0')
        .child(
          createObject('ColumnLayout')
            .bind('anchors.fill', v.expr('parent'))
            .child(
              createObject('Label').bind('text', v.str('Hello World')).bind('font.pixelSize', 24),
            )
            .child(
              createObject('Button')
                .bind('text', v.str('Click Me'))
                .handler('onClicked', v.block('clickCount++\nconsole.log(clickCount)')),
            ),
        ),
    );
}

describe('Determinism', () => {
  test('DT-01: same AST emitted twice produces identical output', () => {
    const doc = buildComplexDoc();
    const result1 = emit(doc);
    const result2 = emit(doc);
    expect(result1).toBe(result2);
  });

  test('DT-02: different EmitOptions produce different output', () => {
    const doc = buildComplexDoc();
    const defaultResult = emit(doc);
    const indent2Result = emit(doc, { indentSize: 2 });
    expect(defaultResult).not.toBe(indent2Result);
  });

  test('DT-03: clone via serialize/deserialize emits identically', () => {
    const doc = buildComplexDoc();
    const original = emit(doc);

    const json = astSerializer.serialize(doc);
    const cloned = astSerializer.deserialize(json);
    const clonedResult = emit(cloned as typeof doc);

    expect(clonedResult).toBe(original);
  });

  test('DT-04: 100x loop emission produces identical output every time', () => {
    const doc = buildComplexDoc();
    const baseline = emit(doc);

    for (let i = 0; i < 100; i++) {
      expect(emit(doc)).toBe(baseline);
    }
  });
});
