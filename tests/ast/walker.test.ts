import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { v } from '../../src/ast/values.js';
import { walkAstGeneric } from '../../src/ast/walker.js';

function makeDoc() {
  return createDocument()
    .importModule('QtQuick')
    .root(
      createObject('Column')
        .id('root')
        .child(createObject('Text').bind('text', v.str('hello'))),
    );
}

describe('walkAstGeneric (Walker)', () => {
  // WK-01
  test('enter order is depth-first pre-order', () => {
    const doc = makeDoc();
    const kinds: string[] = [];
    walkAstGeneric(doc, {
      enter(node) {
        kinds.push(node.kind);
      },
    });
    expect(kinds[0]).toBe('Document');
    expect(kinds[1]).toBe('Import');
    expect(kinds[2]).toBe('ObjectDefinition'); // Column
    // Subsequent nodes follow depth-first
    expect(kinds.length).toBeGreaterThan(4);
  });

  // WK-02
  test('leave order is depth-first post-order', () => {
    const doc = makeDoc();
    const kinds: string[] = [];
    walkAstGeneric(doc, {
      enter() {},
      leave(node) {
        kinds.push(node.kind);
      },
    });
    // Document should be last in post-order
    expect(kinds[kinds.length - 1]).toBe('Document');
  });

  // WK-03
  test('enter returning false skips subtree', () => {
    const doc = createDocument().root(
      createObject('Column').child(createObject('Text').id('skip')),
    );
    const entered: string[] = [];
    const left: string[] = [];
    walkAstGeneric(doc, {
      enter(node) {
        entered.push(node.kind);
        // Skip Text's children
        if (node.kind === 'ObjectDefinition' && 'typeName' in node && node.typeName === 'Text') {
          return false;
        }
      },
      leave(node) {
        left.push(node.kind);
      },
    });
    // Text was entered but its children (IdAssignment) were not
    expect(entered).toContain('ObjectDefinition');
    // IdAssignment should not appear in entered
    expect(entered).not.toContain('IdAssignment');
    // Text should not appear in left (skipped subtree doesn't get leave)
    const textLeftCount = left.filter((k) => k === 'ObjectDefinition').length;
    // Column still gets leave
    expect(textLeftCount).toBeGreaterThanOrEqual(1);
  });

  // WK-04
  test('path parameter reflects nesting', () => {
    const doc = createDocument().root(createObject('Column').child(createObject('Text')));
    const paths: string[][] = [];
    walkAstGeneric(doc, {
      enter(node, _parent, path) {
        if (node.kind === 'ObjectDefinition') {
          paths.push([...path]);
        }
      },
    });
    // Column: rootObject
    expect(paths[0]).toEqual(['rootObject']);
    // Text: rootObject → members[0]
    expect(paths[1]).toEqual(['rootObject', 'members[0]']);
  });

  // WK-05
  test('parent parameter', () => {
    const doc = createDocument().root(createObject('Column').child(createObject('Text')));
    const parentKinds: (string | null)[] = [];
    walkAstGeneric(doc, {
      enter(node, parent) {
        if (node.kind === 'ObjectDefinition') {
          parentKinds.push(parent?.kind ?? null);
        }
      },
    });
    // Column's parent is Document
    expect(parentKinds[0]).toBe('Document');
    // Text's parent is Column (ObjectDefinition)
    expect(parentKinds[1]).toBe('ObjectDefinition');
  });

  // WK-06
  test('only enter (no leave)', () => {
    const doc = createDocument().root(createObject('Item'));
    const entered: string[] = [];
    walkAstGeneric(doc, {
      enter(node) {
        entered.push(node.kind);
      },
    });
    expect(entered.length).toBeGreaterThan(0);
    expect(entered).toContain('Document');
  });

  // WK-07
  test('only leave (no enter)', () => {
    const doc = createDocument().root(createObject('Item'));
    const left: string[] = [];
    walkAstGeneric(doc, {
      leave(node) {
        left.push(node.kind);
      },
    });
    expect(left.length).toBeGreaterThan(0);
    expect(left).toContain('Document');
  });
});
