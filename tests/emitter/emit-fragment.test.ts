import { describe, expect, test } from 'bun:test';
import { createObject, v } from '../../src/ast/index.js';
import { emitFragment } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §1: emitFragment (FE-01..FE-07)
// ═══════════════════════════════════════════════════════════════════════════

describe('emitFragment', () => {
  // ── Object Fragment ──────────────────────────────────────────────────

  test('FE-01: emitFragment(ObjectDefinition) emits full object text', () => {
    const obj = createObject('Item').bind('width', 100).build();
    const result = emitFragment(obj);
    expect(result).toContain('Item {');
    expect(result).toContain('    width: 100');
    expect(result).toContain('}');
  });

  // ── Binding Fragment ─────────────────────────────────────────────────

  test('FE-02: emitFragment(Binding) emits single binding line', () => {
    const binding = {
      kind: 'Binding' as const,
      property: 'width',
      value: { kind: 'number' as const, value: 100 },
    };
    const result = emitFragment(binding);
    expect(result).toContain('width: 100');
  });

  // ── Signal Handler Fragment ──────────────────────────────────────────

  test('FE-03: emitFragment(SignalHandler) emits handler text', () => {
    const obj = createObject('Item').handler('onClicked', v.expr('console.log("click")')).build();
    const handler = obj.members.find((m) => m.kind === 'SignalHandler');
    expect(handler).toBeDefined();
    const result = emitFragment(handler!);
    expect(result).toContain('onClicked');
  });

  // ── Import Fragment ──────────────────────────────────────────────────

  test('FE-04: emitFragment(Import) emits import statement', () => {
    const importNode = {
      kind: 'Import' as const,
      importKind: 'module' as const,
      moduleUri: 'QtQuick',
    };
    const result = emitFragment(importNode);
    expect(result).toContain('import QtQuick');
  });

  // ── Indent Level ─────────────────────────────────────────────────────

  test('FE-05: indentLevel=0 produces no base indentation', () => {
    const obj = createObject('Item').bind('width', 100).build();
    const result = emitFragment(obj, { indentLevel: 0 });
    // The object type name should start at column 0
    expect(result).toMatch(/^Item \{/);
  });

  test('FE-06: indentLevel=2 produces 8-space starting indent (4*2)', () => {
    const obj = createObject('Item').bind('width', 100).build();
    const result = emitFragment(obj, { indentLevel: 2 });
    // Object type name should start at column 8 (2 * 4 spaces)
    expect(result).toMatch(/^ {8}Item \{/);
  });

  test('FE-07: nested object with indentLevel indents correctly from base', () => {
    const obj = createObject('Item')
      .child(createObject('Rectangle').bind('color', v.str('red')))
      .build();
    const result = emitFragment(obj, { indentLevel: 1 });
    const lines = result.split('\n');
    // Base object at indentLevel=1 → 4 spaces
    expect(lines[0]).toMatch(/^ {4}Item \{/);
    // Nested object at indentLevel=1 + 1 → 8 spaces
    const rectLine = lines.find((l) => l.includes('Rectangle'));
    expect(rectLine).toBeDefined();
    expect(rectLine!).toMatch(/^ {8}Rectangle \{/);
  });
});
