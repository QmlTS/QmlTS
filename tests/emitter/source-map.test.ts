import { describe, expect, test } from 'bun:test';
import { createDocument, createObject, v } from '../../src/ast/index.js';
import { emitWithSourceMap } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §1: emitWithSourceMap (SM-01..SM-08)
// ═══════════════════════════════════════════════════════════════════════════

function buildTestDoc() {
  return createDocument()
    .importModule('QtQuick', '6.0')
    .root(
      createObject('Item')
        .id('root')
        .bind('width', 800)
        .bind('height', 600)
        .child(
          createObject('Rectangle')
            .bind('color', v.str('red'))
            .bind('anchors.fill', v.expr('parent')),
        ),
    );
}

describe('emitWithSourceMap', () => {
  // ── Output Spans ─────────────────────────────────────────────────────

  test('SM-01: getOutputSpan(rootObject) covers the full object', () => {
    const doc = buildTestDoc();
    const { text, sourceMap } = emitWithSourceMap(doc);

    const span = sourceMap.getOutputSpan(doc.rootObject);
    expect(span).toBeDefined();
    expect(span!.startLine).toBeGreaterThanOrEqual(1);
    expect(span!.endLine).toBeGreaterThan(span!.startLine);

    // The root object should span multiple lines (at least opening + bindings + closing)
    const totalLines = text.split('\n').length;
    expect(span!.endLine).toBeLessThanOrEqual(totalLines);
  });

  test('SM-02: getOutputSpan(binding) covers exactly one source line', () => {
    const doc = buildTestDoc();
    const { sourceMap } = emitWithSourceMap(doc);

    const bindingNode = doc.rootObject.members.find(
      (m) => m.kind === 'Binding' && m.property === 'width',
    );
    expect(bindingNode).toBeDefined();

    const span = sourceMap.getOutputSpan(bindingNode!);
    expect(span).toBeDefined();
    // endLine is the writer position after the newline, so endLine = startLine + 1
    expect(span!.endLine - span!.startLine).toBeLessThanOrEqual(1);
  });

  test('SM-03: getOutputSpan(import) covers exactly one source line', () => {
    const doc = buildTestDoc();
    const { sourceMap } = emitWithSourceMap(doc);

    const importNode = doc.imports[0];
    expect(importNode).toBeDefined();

    const span = sourceMap.getOutputSpan(importNode);
    expect(span).toBeDefined();
    // endLine is the writer position after the newline, so endLine = startLine + 1
    expect(span!.endLine - span!.startLine).toBeLessThanOrEqual(1);
  });

  // ── Line/Column Lookups ──────────────────────────────────────────────

  test('SM-04: getNodesAtLine returns nodes spanning that line', () => {
    const doc = buildTestDoc();
    const { sourceMap } = emitWithSourceMap(doc);

    // Line 1 should be the import line → should have at least Import and Document
    const nodesAtLine1 = sourceMap.getNodesAtLine(1);
    expect(nodesAtLine1.length).toBeGreaterThan(0);
    const kinds = nodesAtLine1.map((n) => n.kind);
    expect(kinds).toContain('Import');
  });

  test('SM-05: getInnermostNodeAt returns most specific node', () => {
    const doc = buildTestDoc();
    const { text, sourceMap } = emitWithSourceMap(doc);

    // Find the line with 'width: 800' binding
    const lines = text.split('\n');
    const widthLineIdx = lines.findIndex((l) => l.includes('width: 800'));
    expect(widthLineIdx).toBeGreaterThan(-1);

    // Line numbers are 1-based
    const innermost = sourceMap.getInnermostNodeAt(widthLineIdx + 1, 4);
    expect(innermost).toBeDefined();
    // The innermost node should be the Binding or IdAssignment, not the parent object
    expect(innermost!.kind).not.toBe('Document');
  });

  // ── Nested Binding Mapping ───────────────────────────────────────────

  test('SM-06: nested binding inside child object is correctly mapped', () => {
    const doc = buildTestDoc();
    const { text, sourceMap } = emitWithSourceMap(doc);

    // Find the Rectangle's color binding
    const rectNode = doc.rootObject.members.find((m) => m.kind === 'ObjectDefinition');
    expect(rectNode).toBeDefined();
    if (rectNode && rectNode.kind === 'ObjectDefinition') {
      const colorBinding = rectNode.members.find(
        (m) => m.kind === 'Binding' && m.property === 'color',
      );
      expect(colorBinding).toBeDefined();

      const span = sourceMap.getOutputSpan(colorBinding!);
      expect(span).toBeDefined();

      // Verify the mapped line actually contains 'color'
      const lines = text.split('\n');
      const mappedLine = lines[span!.startLine - 1];
      expect(mappedLine).toContain('color');
    }
  });

  // ── Serialization ────────────────────────────────────────────────────

  test('SM-07: toJSON returns serializable data', () => {
    const doc = buildTestDoc();
    const { sourceMap } = emitWithSourceMap(doc);

    const json = sourceMap.toJSON();
    expect(json).toBeDefined();
    expect(json.entries).toBeInstanceOf(Array);
    expect(json.entries.length).toBeGreaterThan(0);

    // Each entry should have the expected shape
    for (const entry of json.entries) {
      expect(typeof entry.nodeKind).toBe('string');
      expect(typeof entry.startLine).toBe('number');
      expect(typeof entry.startColumn).toBe('number');
      expect(typeof entry.endLine).toBe('number');
      expect(typeof entry.endColumn).toBe('number');
    }

    // Should survive JSON round-trip
    const serialized = JSON.stringify(json);
    const parsed = JSON.parse(serialized);
    expect(parsed.entries.length).toBe(json.entries.length);
  });

  // ── Coverage ─────────────────────────────────────────────────────────

  test('SM-08: all major AST node kinds have source map entries', () => {
    const doc = buildTestDoc();
    const { sourceMap } = emitWithSourceMap(doc);

    const entryKinds = new Set(sourceMap.entries.map((e) => e.nodeKind));

    expect(entryKinds.has('Document')).toBe(true);
    expect(entryKinds.has('Import')).toBe(true);
    expect(entryKinds.has('ObjectDefinition')).toBe(true);
    expect(entryKinds.has('Binding')).toBe(true);
  });

  test('attached binding child entries get source map spans', () => {
    const doc = createDocument().root(
      createObject('Item').addMember({
        kind: 'AttachedBinding',
        attachedTypeName: 'Layout',
        bindings: [
          { kind: 'Binding', property: 'fillWidth', value: { kind: 'boolean', value: true } },
        ],
      }),
    );

    const attached = doc.rootObject.members[0];
    expect(attached?.kind).toBe('AttachedBinding');
    if (attached?.kind !== 'AttachedBinding') {
      return;
    }

    const { sourceMap } = emitWithSourceMap(doc);
    const span = sourceMap.getOutputSpan(attached.bindings[0]!);
    expect(span).toBeDefined();
  });
});
