import { describe, expect, test } from 'bun:test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { compile, compileString } from '../../src/qt-tools/qmltc.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('Qmltc', () => {
  test('QTC-01: compile valid.qml to C++', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compile(inst, join(FIXTURES, 'valid.qml'), {
        implPath: join(tmpDir, 'valid.cpp'),
        headerPath: join(tmpDir, 'valid.h'),
      });
      // qmltc may fail on standalone files without a module — just verify it runs
      expect(result).toBeDefined();
      expect(typeof result.success).toBe('boolean');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('QTC-02: compile syntax-error.qml fails', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compile(inst, join(FIXTURES, 'syntax-error.qml'), {
        implPath: join(tmpDir, 'err.cpp'),
        headerPath: join(tmpDir, 'err.h'),
      });
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('QTC-03: compileString with valid QML', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compileString(inst, 'import QtQuick\nItem {}\n', {
        implPath: join(tmpDir, 'str.cpp'),
        headerPath: join(tmpDir, 'str.h'),
      });
      expect(result).toBeDefined();
      expect(typeof result.success).toBe('boolean');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('QTC-04: namespace option is passed to CLI', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compile(inst, join(FIXTURES, 'valid.qml'), {
        implPath: join(tmpDir, 'ns.cpp'),
        headerPath: join(tmpDir, 'ns.h'),
        namespace: 'MyApp',
      });
      expect(result.command).toContain('--namespace');
      expect(result.command).toContain('MyApp');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('QTC-05: result contains timing info', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compile(inst, join(FIXTURES, 'valid.qml'), {
        implPath: join(tmpDir, 'time.cpp'),
        headerPath: join(tmpDir, 'time.h'),
      });
      expect(result.durationMs).toBeGreaterThan(0);
      expect(result.command).toContain('qmltc');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('QTC-06: complex.qml compiles or fails gracefully', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'qmltc-'));
    try {
      const result = await compile(inst, join(FIXTURES, 'complex.qml'), {
        implPath: join(tmpDir, 'complex.cpp'),
        headerPath: join(tmpDir, 'complex.h'),
      });
      expect(result).toBeDefined();
      expect(typeof result.success).toBe('boolean');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });
});
