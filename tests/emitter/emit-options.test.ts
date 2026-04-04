import { describe, expect, test } from 'bun:test';
import { astSerializer, createDocument, createObject, v } from '../../src/ast/index.js';
import { emit } from '../../src/emitter/index.js';

// ═══════════════════════════════════════════════════════════════════════════
//  §1: Emit Options (OPT-01..OPT-13)
// ═══════════════════════════════════════════════════════════════════════════

describe('Emit Options', () => {
  // ── Indentation ──────────────────────────────────────────────────────

  test('OPT-01: indentSize=2 produces 2-space indent', () => {
    const doc = createDocument().root(createObject('Item').bind('width', 100));
    const result = emit(doc, { indentSize: 2 });
    expect(result).toContain('  width: 100');
    expect(result).not.toContain('    width');
  });

  test('OPT-02: indentSize=4 (default) produces 4-space indent', () => {
    const doc = createDocument().root(createObject('Item').bind('width', 100));
    const result = emit(doc);
    expect(result).toContain('    width: 100');
  });

  test('OPT-03: indentStyle=tabs uses tab characters', () => {
    const doc = createDocument().root(createObject('Item').bind('width', 100));
    const result = emit(doc, { indentStyle: 'tabs' });
    expect(result).toContain('\twidth: 100');
    expect(result).not.toContain('    width');
  });

  // ── Line Endings ─────────────────────────────────────────────────────

  test('OPT-04: newline=CRLF produces Windows line endings', () => {
    const doc = createDocument().root(createObject('Item').bind('width', 100));
    const result = emit(doc, { newline: '\r\n' });
    expect(result).toContain('\r\n');
    expect(result).not.toMatch(/(?<!\r)\n/);
  });

  // ── Quote Style ──────────────────────────────────────────────────────

  test('OPT-05: quoteStyle=single emits single-quoted strings', () => {
    const doc = createDocument().root(createObject('Text').bind('text', v.str('hello')));
    const result = emit(doc, { quoteStyle: 'single' });
    expect(result).toContain("'hello'");
    expect(result).not.toContain('"hello"');
  });

  test('OPT-06: quoteStyle=preserve keeps AST quote setting', () => {
    const doc = createDocument().root(createObject('Text').bind('text', v.str('hello', "'")));
    const result = emit(doc, { quoteStyle: 'preserve' });
    expect(result).toContain("'hello'");
  });

  // ── Normalize ────────────────────────────────────────────────────────

  test('OPT-07: normalize=true reorders members by category', () => {
    // Deliberately out of order: binding → child → id → property → signal → handler → function → enum
    const doc = createDocument().root(
      createObject('Item')
        .bind('width', 100)
        .child(createObject('Rectangle'))
        .id('root')
        .declareProp('int', 'count', 0)
        .declareSignal('clicked')
        .handler('onClicked', v.expr('console.log("click")'))
        .fn('doWork', { params: [] }, 'return 42')
        .declareEnum('Status', [
          { name: 'Active', value: 0 },
          { name: 'Inactive', value: 1 },
        ]),
    );

    const result = emit(doc, { normalize: true });
    const lines = result.split('\n');

    const idLine = lines.findIndex((l) => l.includes('id: root'));
    const propLine = lines.findIndex((l) => l.includes('property int count'));
    const signalLine = lines.findIndex((l) => l.includes('signal clicked'));
    const bindingLine = lines.findIndex((l) => l.includes('width: 100'));
    const handlerLine = lines.findIndex((l) => l.includes('onClicked'));
    const fnLine = lines.findIndex((l) => l.includes('function doWork'));
    const childLine = lines.findIndex((l) => l.includes('Rectangle'));
    const enumLine = lines.findIndex((l) => l.includes('enum Status'));

    // Expected order: id < properties < signals < bindings < handlers < functions < children < enums
    expect(idLine).toBeLessThan(propLine);
    expect(propLine).toBeLessThan(signalLine);
    expect(signalLine).toBeLessThan(bindingLine);
    expect(bindingLine).toBeLessThan(handlerLine);
    expect(handlerLine).toBeLessThan(fnLine);
    expect(fnLine).toBeLessThan(childLine);
    expect(childLine).toBeLessThan(enumLine);
  });

  // ── Sort Imports ─────────────────────────────────────────────────────

  test('OPT-08: sortImports=true sorts imports alphabetically', () => {
    const doc = createDocument()
      .importModule('QtQuick.Controls', '6.0')
      .importModule('QtQuick', '6.0')
      .importModule('QtCore')
      .root(createObject('Item'));

    const result = emit(doc, { sortImports: true });
    const lines = result.split('\n').filter((l) => l.startsWith('import '));

    expect(lines.length).toBe(3);
    const uris = lines.map((l) => {
      const match = l.match(/import\s+(\S+)/);
      return match ? match[1] : '';
    });
    expect(uris).toEqual([...uris].sort());
  });

  // ── Generated Header ─────────────────────────────────────────────────

  test('OPT-09: emitGeneratedHeader=true adds header comment', () => {
    const doc = createDocument().root(createObject('Item'));
    const result = emit(doc, { emitGeneratedHeader: true });
    expect(result.startsWith('// Generated by QmlTS\n')).toBe(true);
  });

  // ── Trailing Newline ─────────────────────────────────────────────────

  test('OPT-10: trailingNewline=false omits final newline', () => {
    const doc = createDocument().root(createObject('Item'));
    const result = emit(doc, { trailingNewline: false });
    expect(result.endsWith('\n')).toBe(false);
  });

  // ── Blank Line Sections ──────────────────────────────────────────────

  test('OPT-11: insertBlankLinesBetweenSections=false removes inter-section blanks', () => {
    const doc = createDocument().root(
      createObject('Item')
        .id('root')
        .declareProp('int', 'count', 0)
        .bind('width', 100)
        .child(createObject('Rectangle')),
    );

    const withBlanks = emit(doc, { insertBlankLinesBetweenSections: true });
    const withoutBlanks = emit(doc, { insertBlankLinesBetweenSections: false });

    // With blanks should have empty lines between sections
    expect(withBlanks).toContain('\n\n');
    // Without blanks should not have consecutive empty lines between members
    const innerLines = withoutBlanks.split('\n').slice(1, -2); // skip opening/closing braces
    const hasConsecutiveEmptyLines = innerLines.some(
      (line, i) => i > 0 && line.trim() === '' && innerLines[i - 1].trim() === '',
    );
    expect(hasConsecutiveEmptyLines).toBe(false);
  });

  // ── Semicolons ───────────────────────────────────────────────────────

  test('OPT-12: semicolonRule=always appends semicolons', () => {
    const doc = createDocument().root(
      createObject('Item').id('root').bind('width', 100).bind('height', 200),
    );
    const result = emit(doc, { semicolonRule: 'always' });
    expect(result).toContain('id: root;');
    expect(result).toContain('width: 100;');
    expect(result).toContain('height: 200;');
  });

  test('OPT-13: semicolonRule=omit produces no semicolons', () => {
    const doc = createDocument().root(
      createObject('Item').id('root').bind('width', 100).bind('height', 200),
    );
    const result = emit(doc, { semicolonRule: 'omit' });
    expect(result).not.toContain(';');
  });
});
