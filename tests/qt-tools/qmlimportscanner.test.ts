import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { scanDir, scanFiles, scanString } from '../../src/qt-tools/qmlimportscanner.js';
import { discover, getImportPaths } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QmlImportScanner', () => {
  test('IMP-01: scanFiles finds QtQuick import', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(inst, [join(FIXTURES, 'valid.qml')], importPaths);
    expect(result.success).toBe(true);
    expect(result.imports.length).toBeGreaterThan(0);
    expect(result.imports.some((i) => i.name === 'QtQuick')).toBe(true);
  });

  test('IMP-02: scanFiles for complex.qml finds multiple imports', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(inst, [join(FIXTURES, 'complex.qml')], importPaths);
    expect(result.success).toBe(true);
    const names = result.imports.map((i) => i.name);
    expect(names).toContain('QtQuick');
    expect(names).toContain('QtQuick.Controls');
    expect(names).toContain('QtQuick.Layouts');
  });

  test('IMP-03: scanString detects imports from source', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanString(
      inst,
      'import QtQuick\nimport QtQuick.Controls\nItem {}\n',
      importPaths,
    );
    expect(result.success).toBe(true);
    expect(result.imports.some((i) => i.name === 'QtQuick.Controls')).toBe(true);
  });

  test('IMP-04: scanDir on fixtures directory', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanDir(inst, FIXTURES, importPaths);
    expect(result.success).toBe(true);
    expect(result.imports.length).toBeGreaterThan(0);
  });

  test('IMP-05: imports have type field', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(inst, [join(FIXTURES, 'valid.qml')], importPaths);
    for (const imp of result.imports) {
      expect(['module', 'directory', 'javascript']).toContain(imp.type);
    }
  });

  test('IMP-06: imports have path field for modules', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(inst, [join(FIXTURES, 'valid.qml')], importPaths);
    const qtQuick = result.imports.find((i) => i.name === 'QtQuick');
    expect(qtQuick).toBeDefined();
    expect(qtQuick!.path).toBeTruthy();
  });

  test('IMP-07: result contains timing', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(inst, [join(FIXTURES, 'valid.qml')], importPaths);
    expect(result.durationMs).toBeGreaterThan(0);
  });

  test('IMP-08: multiple files in single scan', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const importPaths = getImportPaths(inst);
    const result = await scanFiles(
      inst,
      [join(FIXTURES, 'valid.qml'), join(FIXTURES, 'complex.qml')],
      importPaths,
    );
    expect(result.success).toBe(true);
    const names = result.imports.map((i) => i.name);
    expect(names).toContain('QtQuick');
  });
});
