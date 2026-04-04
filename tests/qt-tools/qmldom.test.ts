import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { dumpAst, dumpDom, dumpString } from '../../src/qt-tools/qmldom.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QmlDom', () => {
  test('DOM-01: dumpDom valid.qml returns JSON DOM', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpDom(inst, join(FIXTURES, 'valid.qml'));
    expect(result.success).toBe(true);
    expect(result.dom).toBeDefined();
    expect(typeof result.dom).toBe('object');
  });

  test('DOM-02: dumpAst valid.qml returns AST', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpAst(inst, join(FIXTURES, 'valid.qml'));
    expect(result.success).toBe(true);
    expect(result.ast).toBeTruthy();
    expect(String(result.ast)).toContain('UiProgram');
  });

  test('DOM-03: dumpDom syntax-error.qml handles gracefully', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpDom(inst, join(FIXTURES, 'syntax-error.qml'));
    expect(result).toBeDefined();
  });

  test('DOM-04: dumpString with valid QML', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpString(inst, 'import QtQuick\nItem { width: 100 }\n');
    expect(result.success).toBe(true);
    expect(result.dom).toBeDefined();
  });

  test('DOM-05: dumpString with dumpAst option', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpString(inst, 'import QtQuick\nItem {}\n', { dumpAst: true });
    expect(result.success).toBe(true);
    expect(result.ast).toBeTruthy();
  });

  test('DOM-06: DOM contains file info', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpDom(inst, join(FIXTURES, 'valid.qml'));
    expect(result.success).toBe(true);
    const domStr = JSON.stringify(result.dom);
    expect(domStr).toContain('valid.qml');
  });

  test('DOM-07: timing info present', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await dumpDom(inst, join(FIXTURES, 'valid.qml'));
    expect(result.durationMs).toBeGreaterThan(0);
    expect(result.command).toContain('qmldom');
  });
});
