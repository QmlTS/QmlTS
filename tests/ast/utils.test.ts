import { describe, expect, test } from 'bun:test';
import { createDocument, createObject } from '../../src/ast/builder.js';
import { astUtils } from '../../src/ast/utils.js';
import { v } from '../../src/ast/values.js';

function makeDoc() {
  return createDocument()
    .importModule('QtQuick')
    .importModule('QtQuick.Controls')
    .importJs('logic.js', 'Logic')
    .root(
      createObject('Column')
        .id('root')
        .bind('width', 400)
        .child(createObject('Text').id('label').bind('text', v.str('hello')))
        .child(createObject('Text').id('subtitle').bind('text', v.str('world')))
        .child(createObject('Rectangle').id('box').child(createObject('MouseArea'))),
    );
}

describe('astUtils', () => {
  // UT-01
  test('collectIds returns all id→object mappings', () => {
    const doc = makeDoc();
    const ids = astUtils.collectIds(doc);
    expect(ids.size).toBe(4);
    expect(ids.has('root')).toBe(true);
    expect(ids.has('label')).toBe(true);
    expect(ids.has('subtitle')).toBe(true);
    expect(ids.has('box')).toBe(true);
    expect(ids.get('root')!.typeName).toBe('Column');
    expect(ids.get('label')!.typeName).toBe('Text');
  });

  // UT-02
  test('collectTypeNames returns deduplicated list', () => {
    const doc = makeDoc();
    const types = astUtils.collectTypeNames(doc);
    expect(types).toContain('Column');
    expect(types).toContain('Text');
    expect(types).toContain('Rectangle');
    expect(types).toContain('MouseArea');
    // Text appears twice but should be deduplicated
    expect(types.filter((t) => t === 'Text')).toHaveLength(1);
  });

  // UT-03
  test('collectImportedModules returns only module URIs', () => {
    const doc = makeDoc();
    const modules = astUtils.collectImportedModules(doc);
    expect(modules).toEqual(['QtQuick', 'QtQuick.Controls']);
    // JS import should not be included
    expect(modules).not.toContain('Logic');
  });

  // UT-04
  test('findObjectsByType("Text")', () => {
    const doc = makeDoc();
    const texts = astUtils.findObjectsByType(doc, 'Text');
    expect(texts).toHaveLength(2);
    expect(texts.every((t) => t.typeName === 'Text')).toBe(true);
  });

  // UT-05
  test('findObjectById finds correct object', () => {
    const doc = makeDoc();
    const obj = astUtils.findObjectById(doc, 'root');
    expect(obj).toBeDefined();
    expect(obj!.typeName).toBe('Column');
  });

  // UT-06
  test('findObjectById returns undefined for nonexistent', () => {
    const doc = makeDoc();
    expect(astUtils.findObjectById(doc, 'nonexist')).toBeUndefined();
  });

  // UT-07
  test('getBindingValue returns correct value', () => {
    const doc = makeDoc();
    const val = astUtils.getBindingValue(doc.rootObject, 'width');
    expect(val).toBeDefined();
    expect(val).toEqual({ kind: 'number', value: 400 });
  });

  // UT-08
  test('getBindingValue returns undefined for missing', () => {
    const doc = makeDoc();
    expect(astUtils.getBindingValue(doc.rootObject, 'nonexist')).toBeUndefined();
  });

  // UT-09
  test('getObjectId returns id', () => {
    const doc = makeDoc();
    expect(astUtils.getObjectId(doc.rootObject)).toBe('root');
  });

  // UT-10
  test('getObjectId returns undefined when no id', () => {
    const obj = createObject('Item').bind('width', 100).build();
    expect(astUtils.getObjectId(obj)).toBeUndefined();
  });

  // UT-11
  test('getChildren returns direct child objects only', () => {
    const doc = makeDoc();
    const children = astUtils.getChildren(doc.rootObject);
    expect(children).toHaveLength(3);
    expect(children[0]!.typeName).toBe('Text');
    expect(children[1]!.typeName).toBe('Text');
    expect(children[2]!.typeName).toBe('Rectangle');
  });

  // UT-12
  test('countNodes counts all nodes', () => {
    const doc = makeDoc();
    const count = astUtils.countNodes(doc);
    // Document + 3 imports + Column + id(root) + Binding(width) +
    // Text + id(label) + Binding(text) + Text + id(subtitle) + Binding(text) +
    // Rectangle + id(box) + MouseArea = at least 15
    expect(count).toBeGreaterThanOrEqual(15);
  });

  // UT-13
  test('maxDepth', () => {
    const doc = makeDoc();
    const depth = astUtils.maxDepth(doc);
    // Column → Rectangle → MouseArea = 3 levels
    expect(depth).toBe(3);
  });

  // UT-14
  test('structuralEqual same tree', () => {
    const doc = makeDoc();
    expect(astUtils.structuralEqual(doc, doc)).toBe(true);
  });

  // UT-15
  test('structuralEqual different tree', () => {
    const doc1 = createDocument().root(createObject('Item').bind('width', 100));
    const doc2 = createDocument().root(createObject('Item').bind('width', 200));
    expect(astUtils.structuralEqual(doc1, doc2)).toBe(false);
  });

  // UT-16
  test('structuralEqual ignores span', () => {
    const doc1 = createDocument().root(createObject('Item'));
    const doc2 = createDocument().root(createObject('Item'));
    // Add span to doc2
    doc2.rootObject.span = { startLine: 1, startColumn: 0, endLine: 1, endColumn: 10 };
    expect(astUtils.structuralEqual(doc1, doc2)).toBe(true);
  });

  // UT-17
  test('summarize returns non-empty string', () => {
    const doc = makeDoc();
    const summary = astUtils.summarize(doc);
    expect(summary.length).toBeGreaterThan(0);
    expect(summary).toContain('Column');
    expect(summary).toContain('root');
    expect(summary).toContain('QtQuick');
  });
});
