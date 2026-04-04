import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { check, checkFiles, checkString } from '../../src/qt-tools/quality-gate.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QualityGate', () => {
  // QG-01: syntax level, valid file
  test('QG-01: syntax level passes for valid file', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'valid.qml'), {
      level: 'syntax',
    });
    expect(result.passed).toBe(true);
    expect(result.formatResult).toBeDefined();
  });

  // QG-02: syntax level, syntax error
  test('QG-02: syntax level fails for syntax error', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'syntax-error.qml'), {
      level: 'syntax',
    });
    expect(result.passed).toBe(false);
  });

  // QG-03: lint level, valid
  test('QG-03: lint level passes for valid file', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'valid.qml'), {
      level: 'lint',
    });
    expect(result.passed).toBe(true);
    expect(result.lintResult).toBeDefined();
  });

  // QG-04: lint level, type error
  test('QG-04: lint level fails for type error', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'type-error.qml'), {
      level: 'lint',
    });
    expect(result.passed).toBe(false);
    expect(result.diagnostics.length).toBeGreaterThan(0);
  });

  // QG-05: compile level produces cachegenResult
  test('QG-05: compile level produces cachegenResult', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'valid.qml'), {
      level: 'compile',
    });
    expect(result.cachegenResult).toBeDefined();
    expect(result.passed).toBe(true);
  });

  // QG-06: compile level with syntax error skips lint/compile
  test('QG-06: syntax error at compile level skips later stages', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'syntax-error.qml'), {
      level: 'compile',
    });
    expect(result.passed).toBe(false);
    expect(result.lintResult).toBeUndefined();
    expect(result.cachegenResult).toBeUndefined();
  });

  // QG-07: checkString
  test('QG-07: checkString works for valid QML', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await checkString(inst, 'import QtQuick\nItem {}\n', {
      level: 'syntax',
    });
    expect(result.passed).toBe(true);
  });

  // QG-08: checkFiles batch
  test('QG-08: checkFiles returns per-file results', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await checkFiles(
      inst,
      [join(FIXTURES, 'valid.qml'), join(FIXTURES, 'syntax-error.qml')],
      { level: 'syntax' },
    );
    expect(result.totalFiles).toBe(2);
    expect(result.passedCount).toBe(1);
    expect(result.failedCount).toBe(1);
  });

  // QG-09: onProgress callback fires per stage
  test('QG-09: onProgress fires per stage', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const stages: string[] = [];
    await check(inst, join(FIXTURES, 'valid.qml'), {
      level: 'lint',
      onProgress: (stage) => stages.push(stage),
    });
    expect(stages).toContain('syntax');
    expect(stages).toContain('lint');
  });

  // QG-10: lint level with type error has diagnostics but no cachegenResult
  test('QG-10: lint failure skips compile stage', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await check(inst, join(FIXTURES, 'type-error.qml'), {
      level: 'compile',
    });
    expect(result.passed).toBe(false);
    expect(result.cachegenResult).toBeUndefined();
    expect(result.diagnostics.length).toBeGreaterThan(0);
  });

  // QG-11: durationMs is positive
  test('QG-11: durationMs is positive', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await checkFiles(inst, [join(FIXTURES, 'valid.qml')], { level: 'syntax' });
    expect(result.durationMs).toBeGreaterThan(0);
  });
});
