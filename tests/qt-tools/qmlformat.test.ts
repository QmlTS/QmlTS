import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  formatFile,
  formatFiles,
  formatString,
  getDefaultOptions,
  writeDefaults,
} from '../../src/qt-tools/qmlformat.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QmlFormat', () => {
  // FMT-01: formatFile valid
  test('FMT-01: formatFile(valid.qml) succeeds', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatFile(inst, join(FIXTURES, 'valid.qml'));
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toBeTruthy();
  });

  // FMT-02: formatFile syntax error
  test('FMT-02: formatFile(syntax-error.qml) fails', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatFile(inst, join(FIXTURES, 'syntax-error.qml'));
    expect(result.exitCode).not.toBe(0);
  });

  // FMT-03: formatString
  test('FMT-03: formatString("import QtQuick\\nItem {}") succeeds', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatString(inst, 'import QtQuick\nItem {}\n');
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toContain('Item');
  });

  // FMT-04: indentWidth
  test('FMT-04: indentWidth=2 produces 2-space indent', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatString(inst, 'import QtQuick\nItem { width: 100 }\n', {
      indentWidth: 2,
    });
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toContain('  width');
    expect(result.formattedText).not.toContain('    width');
  });

  // FMT-05: tabs
  test('FMT-05: tabs=true uses tab indent', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatString(inst, 'import QtQuick\nItem { width: 100 }\n', {
      tabs: true,
    });
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toContain('\twidth');
  });

  // FMT-06: normalize
  test('FMT-06: normalize=true reorders properties', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const source = 'import QtQuick\nRectangle { color: "red"; id: root; width: 100 }\n';
    const result = await formatString(inst, source, { normalize: true });
    expect(result.exitCode).toBe(0);
    const text = result.formattedText!;
    const idPos = text.indexOf('id:');
    const widthPos = text.indexOf('width:');
    expect(idPos).toBeLessThan(widthPos);
  });

  // FMT-07: sortImports
  test('FMT-07: sortImports=true sorts imports', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const source = 'import QtQuick.Controls\nimport QtQuick\nItem {}\n';
    const result = await formatString(inst, source, { sortImports: true });
    expect(result.exitCode).toBe(0);
    const text = result.formattedText!;
    const pos1 = text.indexOf('import QtQuick\n');
    const pos2 = text.indexOf('import QtQuick.Controls');
    expect(pos1).toBeLessThan(pos2);
  });

  // FMT-08: semicolonRule flag
  test('FMT-08: semicolonRule=always succeeds', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const source = 'import QtQuick\nItem { width: 100 }\n';
    const result = await formatString(inst, source, {
      semicolonRule: 'always',
    });
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toContain('width: 100');
  });

  // FMT-10: newline='unix'
  test('FMT-10: newline=unix flag is accepted', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatString(inst, 'import QtQuick\nItem {}\n', { newline: 'unix' });
    expect(result.exitCode).toBe(0);
    expect(result.formattedText).toBeTruthy();
  });

  // FMT-13: formatFiles batch
  test('FMT-13: formatFiles returns result per file', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatFiles(inst, [
      join(FIXTURES, 'valid.qml'),
      join(FIXTURES, 'complex.qml'),
    ]);
    expect(result.totalFiles).toBe(2);
    expect(result.successCount).toBe(2);
    expect(result.results.size).toBe(2);
  });

  // FMT-14: hasChanges accuracy
  test('FMT-14: hasChanges is false when already formatted', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const first = await formatFile(inst, join(FIXTURES, 'valid.qml'));
    const second = await formatString(inst, first.formattedText!);
    expect(second.hasChanges).toBe(false);
  });

  // FMT-15: getDefaultOptions
  test('FMT-15: getDefaultOptions returns JSON', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const opts = await getDefaultOptions(inst);
    expect(opts).toHaveProperty('options');
    expect(Array.isArray((opts as { options: unknown }).options)).toBe(true);
  });

  // FMT-16: force with error file
  test('FMT-16: force=true does not throw on error file', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await formatFile(inst, join(FIXTURES, 'syntax-error.qml'), { force: true });
    expect(result).toBeDefined();
  });

  test('FMT-17: inplace mode returns post-format file content and change status', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmlformat-'));
    const filePath = join(tmpDir, 'inplace.qml');
    try {
      await writeFile(filePath, 'import QtQuick\nItem { width: 100 }\n', 'utf-8');
      const result = await formatFile(inst, filePath, { inplace: true });
      const afterText = readFileSync(filePath, 'utf-8');
      expect(result.exitCode).toBe(0);
      expect(result.formattedText).toBe(afterText);
      expect(result.hasChanges).toBe(true);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('FMT-18: writeDefaults creates .qmlformat.ini', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmlformat-wd-'));
    try {
      await writeDefaults(inst, tmpDir);
      const iniPath = join(tmpDir, '.qmlformat.ini');
      const content = readFileSync(iniPath, 'utf-8');
      expect(content).toContain('[General]');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });
});
