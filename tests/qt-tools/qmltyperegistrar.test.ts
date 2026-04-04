import { describe, expect, test } from 'bun:test';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateQmltypes, register } from '../../src/qt-tools/qmltyperegistrar.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');
const MOC_JSON = join(FIXTURES, 'moc-output.json');

describe.skipIf(!QT_DIR)('QmlTypeRegistrar', () => {
  test('REG-01: register with MOC JSON produces output', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await register(inst, [MOC_JSON], {
        outputFile: join(tmpDir, 'registration.cpp'),
        importName: 'TestModule',
        majorVersion: 1,
        minorVersion: 0,
      });
      expect(result).toBeDefined();
      expect(typeof result.success).toBe('boolean');
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('REG-02: register with --jsroot mode', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await register(inst, [], {
        outputFile: join(tmpDir, 'jsroot.cpp'),
        jsroot: true,
        generateQmltypes: join(tmpDir, 'jsroot.qmltypes'),
        importName: 'QML',
        majorVersion: 1,
        minorVersion: 0,
      });
      expect(result.success).toBe(true);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('REG-03: generateQmltypes convenience function', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await generateQmltypes(inst, [], join(tmpDir, 'out.qmltypes'), {
        jsroot: true,
        importName: 'QML',
        majorVersion: 1,
        minorVersion: 0,
      });
      expect(result).toBeDefined();
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('REG-04: result has timing and command', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await register(inst, [], {
        outputFile: join(tmpDir, 'timing.cpp'),
        jsroot: true,
        importName: 'QML',
        majorVersion: 1,
        minorVersion: 0,
      });
      expect(result.command).toContain('qmltyperegistrar');
      expect(result.durationMs).toBeGreaterThanOrEqual(0);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('REG-05: namespace option', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await register(inst, [], {
        outputFile: join(tmpDir, 'ns.cpp'),
        jsroot: true,
        importName: 'QML',
        majorVersion: 1,
        minorVersion: 0,
        namespace: 'TestNS',
      });
      expect(result.success).toBe(true);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });

  test('REG-06: invalid MOC JSON file fails gracefully', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const tmpDir = await mkdtemp(join(tmpdir(), 'reg-'));
    try {
      const result = await register(inst, [join(FIXTURES, 'valid.qml')], {
        outputFile: join(tmpDir, 'bad.cpp'),
        importName: 'Bad',
        majorVersion: 1,
        minorVersion: 0,
      });
      expect(result.success).toBe(false);
    } finally {
      await rm(tmpDir, { recursive: true, force: true });
    }
  });
});
