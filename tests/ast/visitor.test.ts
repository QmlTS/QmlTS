import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import type { QmlAstVisitor } from '../../src/ast/types.js';
import { v } from '../../src/ast/values.js';
import { walkAst } from '../../src/ast/visitor.js';

function makeComplexDoc() {
  return createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Column')
        .id('root')
        .child(createObject('Text').id('label').bind('text', v.str('hello')))
        .child(createObject('Rectangle').id('rect').child(createObject('MouseArea').id('area'))),
    );
}

describe('walkAst (Visitor)', () => {
  // VI-01
  test('collect all ids', () => {
    const doc = makeComplexDoc();
    const ids: string[] = [];
    const visitor: QmlAstVisitor = {
      visitIdAssignment(node) {
        ids.push(node.id);
      },
    };
    walkAst(doc, visitor);
    expect(ids).toEqual(['root', 'label', 'rect', 'area']);
  });

  // VI-02
  test('collect all type names', () => {
    const doc = makeComplexDoc();
    const types: string[] = [];
    const visitor: QmlAstVisitor = {
      visitObjectDefinition(node) {
        types.push(node.typeName);
      },
    };
    walkAst(doc, visitor);
    expect(types).toEqual(['Column', 'Text', 'Rectangle', 'MouseArea']);
  });

  // VI-03
  test('count objects', () => {
    const doc = makeComplexDoc();
    let count = 0;
    walkAst(doc, {
      visitObjectDefinition() {
        count++;
      },
    });
    expect(count).toBe(4);
  });

  // VI-04
  test('return false skips children', () => {
    const doc = makeComplexDoc();
    const types: string[] = [];
    walkAst(doc, {
      visitObjectDefinition(node) {
        types.push(node.typeName);
        if (node.typeName === 'Rectangle') return false;
      },
    });
    // MouseArea is a child of Rectangle, so it should be skipped
    expect(types).toEqual(['Column', 'Text', 'Rectangle']);
    expect(types).not.toContain('MouseArea');
  });

  // VI-05
  test('partial visitor implementation', () => {
    const doc = makeComplexDoc();
    const ids: string[] = [];
    // Only implement visitIdAssignment — other nodes are silently skipped
    walkAst(doc, {
      visitIdAssignment(node) {
        ids.push(node.id);
      },
    });
    expect(ids.length).toBeGreaterThan(0);
  });

  // VI-06
  test('empty document visits Document and ObjectDefinition', () => {
    const doc = createDocument().root(createObject('Item'));
    const visited: string[] = [];
    walkAst(doc, {
      visitDocument() {
        visited.push('Document');
      },
      visitObjectDefinition() {
        visited.push('ObjectDefinition');
      },
    });
    expect(visited).toEqual(['Document', 'ObjectDefinition']);
  });

  // VI-07
  test('deeply nested traversal', () => {
    const doc = createDocument().root(
      createObject('A').child(
        createObject('B').child(
          createObject('C').child(createObject('D').child(createObject('E'))),
        ),
      ),
    );
    const types: string[] = [];
    walkAst(doc, {
      visitObjectDefinition(node) {
        types.push(node.typeName);
      },
    });
    expect(types).toEqual(['A', 'B', 'C', 'D', 'E']);
  });
});
