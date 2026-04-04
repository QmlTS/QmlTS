import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { lintFile, lintFiles, lintString, listPlugins } from '../../src/qt-tools/qmllint.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QmlLint', () => {
  // LNT-01: valid file
  test('LNT-01: lintFile(valid.qml) is valid', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'valid.qml'));
    expect(result.valid).toBe(true);
  });

  // LNT-02: syntax error
  test('LNT-02: lintFile(syntax-error.qml) is invalid with diagnostics', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'syntax-error.qml'));
    expect(result.valid).toBe(false);
    expect(result.diagnostics.length).toBeGreaterThan(0);
  });

  // LNT-03: type error
  test('LNT-03: lintFile(type-error.qml) has type diagnostics', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'type-error.qml'));
    expect(result.diagnostics.length).toBeGreaterThan(0);
    expect(result.diagnostics.some((d) => d.category === 'incompatible-type')).toBe(true);
  });

  // LNT-04: lintString
  test('LNT-04: lintString("import QtQuick\\nItem {}") is valid', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintString(inst, 'import QtQuick\nItem {}\n');
    expect(result.valid).toBe(true);
  });

  // LNT-05: JSON output parsing
  test('LNT-05: json output is structured', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'type-error.qml'));
    for (const d of result.diagnostics) {
      expect(d.message).toBeTruthy();
      expect(d.file).toBeTruthy();
    }
  });

  // LNT-06: warningLevels override
  test('LNT-06: warningLevels option is accepted', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'valid.qml'), {
      warningLevels: { unqualified: 'error' },
    });
    // Valid file should still pass regardless of warning level override
    expect(result).toBeDefined();
  });

  // LNT-07: warningLevels.deprecated=disable
  test('LNT-07: warningLevels.deprecated=disable suppresses warnings', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintString(inst, 'import QtQuick\nItem {}\n', {
      warningLevels: { deprecated: 'disable' },
    });
    const deprecated = result.diagnostics.filter((d) => d.category === 'deprecated');
    expect(deprecated).toHaveLength(0);
  });

  // LNT-12: lintFiles batch
  test('LNT-12: lintFiles batch returns results per file', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFiles(inst, [
      join(FIXTURES, 'valid.qml'),
      join(FIXTURES, 'type-error.qml'),
    ]);
    expect(result.totalFiles).toBe(2);
    expect(result.passCount).toBe(1);
    expect(result.failCount).toBe(1);
  });

  // LNT-13: diagnostics.line is 1-based
  test('LNT-13: diagnostic line numbers are 1-based', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'type-error.qml'));
    for (const d of result.diagnostics) {
      expect(d.line).toBeGreaterThanOrEqual(1);
    }
  });

  // LNT-14: diagnostics.category
  test('LNT-14: diagnostics have category field', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'type-error.qml'));
    for (const d of result.diagnostics) {
      expect(d.category).toBeTruthy();
    }
  });

  // LNT-15: summary counts
  test('LNT-15: summary has correct counts', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await lintFile(inst, join(FIXTURES, 'type-error.qml'));
    const { summary, diagnostics } = result;
    expect(summary.errors + summary.warnings + summary.infos).toBe(diagnostics.length);
  });

  // LNT-16: listPlugins
  test('LNT-16: listPlugins returns plugin names', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const plugins = await listPlugins(inst);
    expect(plugins.length).toBeGreaterThan(0);
    expect(plugins).toContain('Quick');
  });
});
