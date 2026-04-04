import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { transformAst } from '../../src/ast/transform.js';
import { v } from '../../src/ast/values.js';

function makeDoc() {
  return createDocument()
    .importModule('QtQuick')
    .importModule('QtQuick.Controls')
    .root(
      createObject('Rectangle')
        .id('root')
        .bind('width', 400)
        .bind('color', v.str('red'))
        .child(createObject('Text').bind('text', v.str('hello'))),
    );
}

describe('transformAst', () => {
  // TF-01
  test('empty transformer returns equivalent tree', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {});
    expect(result.rootObject.typeName).toBe('Rectangle');
    expect(result.imports).toHaveLength(2);
  });

  // TF-02
  test('modify binding value', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {
      transformBinding(node) {
        if (node.property === 'width') {
          return { ...node, value: { kind: 'number', value: 800 } };
        }
      },
    });
    const widthBinding = result.rootObject.members.find(
      (m) => m.kind === 'Binding' && m.property === 'width',
    );
    expect(widthBinding).toBeDefined();
    if (widthBinding?.kind === 'Binding') {
      expect(widthBinding.value).toEqual({ kind: 'number', value: 800 });
    }
    // Original unchanged
    const origWidth = doc.rootObject.members.find(
      (m) => m.kind === 'Binding' && m.property === 'width',
    );
    if (origWidth?.kind === 'Binding') {
      expect(origWidth.value).toEqual({ kind: 'number', value: 400 });
    }
  });

  // TF-03
  test('delete binding (return null)', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {
      transformBinding(node) {
        if (node.property === 'color') return null;
      },
    });
    const colorBinding = result.rootObject.members.find(
      (m) => m.kind === 'Binding' && m.property === 'color',
    );
    expect(colorBinding).toBeUndefined();
  });

  // TF-04
  test('replace import', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {
      transformImport(node) {
        if (node.moduleUri === 'QtQuick') {
          return { ...node, version: '6.0' };
        }
      },
    });
    expect(result.imports[0]!.version).toBe('6.0');
  });

  // TF-05
  test('delete import', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {
      transformImport(node) {
        if (node.moduleUri === 'QtQuick.Controls') return null;
      },
    });
    expect(result.imports).toHaveLength(1);
    expect(result.imports[0]!.moduleUri).toBe('QtQuick');
  });

  // TF-06
  test('modify ObjectDefinition.typeName', () => {
    const doc = makeDoc();
    const result = transformAst(doc, {
      transformObjectDefinition(node) {
        if (node.typeName === 'Text') {
          return { ...node, typeName: 'Label' };
        }
      },
    });
    const child = result.rootObject.members.find((m) => m.kind === 'ObjectDefinition');
    if (child?.kind === 'ObjectDefinition') {
      expect(child.typeName).toBe('Label');
    }
  });

  // TF-07
  test('immutability — original AST unchanged', () => {
    const doc = makeDoc();
    const originalJson = JSON.stringify(doc);
    transformAst(doc, {
      transformBinding(node) {
        if (node.property === 'width') {
          return { ...node, value: { kind: 'number', value: 999 } };
        }
      },
      transformImport() {
        return null;
      },
    });
    expect(JSON.stringify(doc)).toBe(originalJson);
  });

  // TF-08
  test('deep nested transformation', () => {
    const doc = createDocument().root(
      createObject('A').child(createObject('B').child(createObject('C').bind('x', 1))),
    );
    const result = transformAst(doc, {
      transformBinding(node) {
        if (node.property === 'x') {
          return { ...node, value: { kind: 'number', value: 42 } };
        }
      },
    });
    const b = result.rootObject.members[0];
    if (b?.kind === 'ObjectDefinition') {
      const c = b.members[0];
      if (c?.kind === 'ObjectDefinition') {
        const x = c.members[0];
        if (x?.kind === 'Binding') {
          expect(x.value).toEqual({ kind: 'number', value: 42 });
        }
      }
    }
  });
});
