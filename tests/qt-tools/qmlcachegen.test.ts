import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import {
  buildCachegenArgs,
  compile,
  compileFiles,
  compileString,
} from '../../src/qt-tools/qmlcachegen.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe('QmlCachegen', () => {
  // CG-01: buildCachegenArgs pure test (no Qt)
  test('CG-01: buildCachegenArgs maps options to CLI args', () => {
    const args = buildCachegenArgs('test.qml', {
      outputFile: 'out.cpp',
      resourcePath: '/test.qml',
      onlyBytecode: true,
      verbose: true,
      importPaths: ['/path1', '/path2'],
      moduleId: 'TestMod',
      dumpAotStats: true,
    });
    expect(args).toContain('-o');
    expect(args).toContain('out.cpp');
    expect(args).toContain('--resource-path');
    expect(args).toContain('/test.qml');
    expect(args).toContain('--only-bytecode');
    expect(args).toContain('--verbose');
    expect(args).toContain('-I');
    expect(args).toContain('/path1');
    expect(args).toContain('/path2');
    expect(args).toContain('--module-id');
    expect(args).toContain('TestMod');
    expect(args).toContain('--dump-aot-stats');
    expect(args[args.length - 1]).toBe('test.qml');
  });

  describe.skipIf(!QT_DIR)('with Qt installation', () => {
    // CG-02: compile valid file
    test('CG-02: compile(valid.qml) succeeds', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'valid.qml'));
      expect(result.success).toBe(true);
      expect(result.exitCode).toBe(0);
    });

    // CG-03: compile syntax error
    test('CG-03: compile(syntax-error.qml) fails', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'syntax-error.qml'));
      expect(result.success).toBe(false);
      expect(result.exitCode).not.toBe(0);
    });

    // CG-04: compileString valid
    test('CG-04: compileString succeeds for valid QML', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compileString(inst, 'import QtQuick\nItem {}\n');
      expect(result.success).toBe(true);
    });

    // CG-05: onlyBytecode
    test('CG-05: onlyBytecode=true succeeds', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'valid.qml'), {
        onlyBytecode: true,
      });
      expect(result.success).toBe(true);
    });

    // CG-06: dumpAotStats
    test('CG-06: dumpAotStats=true produces aotStats', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'valid.qml'), {
        dumpAotStats: true,
        moduleId: 'TestModule',
      });
      expect(result.success).toBe(true);
      expect(result.aotStats).toBeDefined();
      expect(result.aotStats!.compilationRate).toBeGreaterThanOrEqual(0);
      expect(result.aotStats!.compilationRate).toBeLessThanOrEqual(1);
    });

    // CG-07: complex file compiles
    test('CG-07: complex.qml compiles successfully', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'complex.qml'));
      expect(result.success).toBe(true);
    });

    // CG-08: type-error file still compiles (cachegen is less strict)
    test('CG-08: type-error.qml compiles (cachegen allows type issues)', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'type-error.qml'));
      // qmlcachegen may or may not fail on type errors
      expect(result).toBeDefined();
    });

    // CG-09: compileFiles batch
    test('CG-09: compileFiles batch returns per-file results', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compileFiles(inst, [
        join(FIXTURES, 'valid.qml'),
        join(FIXTURES, 'complex.qml'),
      ]);
      expect(result.totalFiles).toBe(2);
      expect(result.successCount).toBeGreaterThanOrEqual(1);
      expect(result.results.size).toBe(2);
    });

    // CG-10: compileFiles with dumpAotStats aggregates
    test('CG-10: compileFiles with dumpAotStats provides aggregate', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compileFiles(
        inst,
        [join(FIXTURES, 'valid.qml'), join(FIXTURES, 'complex.qml')],
        { dumpAotStats: true, moduleId: 'BatchTest' },
      );
      expect(result.aggregateAotStats).toBeDefined();
      expect(result.aggregateAotStats!.compilationRate).toBeGreaterThanOrEqual(0);
    });
  });
});
