import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  createDiagnosticParser,
  createQmlFormat,
  createQmlLint,
  createQmlRunner,
  createQualityGate,
  createRcc,
  createToolRunner,
} from '../../src/qt-tools/factories.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe('Factories', () => {
  test('FAC-01: createDiagnosticParser works without Qt', () => {
    const parser = createDiagnosticParser();
    const result = parser.parseStderr('file.qml:1:1: error: test');
    expect(result).toHaveLength(1);
    expect(result[0]!.level).toBe('error');
  });

  describe.skipIf(!QT_DIR)('with Qt', () => {
    test('FAC-02: createQmlFormat.formatString', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const fmt = createQmlFormat(inst);
      const result = await fmt.formatString('import QtQuick\nItem {}\n');
      expect(result.exitCode).toBe(0);
    });

    test('FAC-03: createQmlLint.lintFile', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const linter = createQmlLint(inst);
      const result = await linter.lintFile(join(FIXTURES, 'valid.qml'));
      expect(result.valid).toBe(true);
    });

    test('FAC-04: createQualityGate.check', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const qg = createQualityGate(inst);
      const result = await qg.check(join(FIXTURES, 'valid.qml'), { level: 'syntax' });
      expect(result.passed).toBe(true);
    });

    test('FAC-05: createRcc.createQrcXml (pure TS method)', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const rcc = createRcc(inst);
      const xml = rcc.createQrcXml(['test.qml']);
      expect(xml).toContain('test.qml');
    });

    test('FAC-06: createQmlRunner.listConfigs', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const qmlRunner = createQmlRunner(inst);
      const configs = await qmlRunner.listConfigs();
      expect(Array.isArray(configs)).toBe(true);
    });

    test('FAC-07: createToolRunner.run executes qmlformat --help', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const runner = createToolRunner(inst);
      const result = await runner.run('qmlformat', ['--help']);
      expect(result.exitCode).toBe(0);
      expect(result.stdout).toContain('qmlformat');
    });

    test('FAC-08: createQmlFormat.writeDefaults creates ini file', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const fmt = createQmlFormat(inst);
      const tmpDir = await mkdtemp(join(tmpdir(), 'fac-fmt-wd-'));
      try {
        await fmt.writeDefaults(tmpDir);
        const content = readFileSync(join(tmpDir, '.qmlformat.ini'), 'utf-8');
        expect(content).toContain('[General]');
      } finally {
        await rm(tmpDir, { recursive: true, force: true });
      }
    });

    test('FAC-09: createQmlLint.writeDefaults creates ini file', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const linter = createQmlLint(inst);
      const tmpDir = await mkdtemp(join(tmpdir(), 'fac-lint-wd-'));
      try {
        await linter.writeDefaults(tmpDir);
        const content = readFileSync(join(tmpDir, '.qmllint.ini'), 'utf-8');
        expect(content).toContain('[Warnings]');
      } finally {
        await rm(tmpDir, { recursive: true, force: true });
      }
    });

    test('FAC-10: createQmlLint.parseJsonOutput parses JSON', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const linter = createQmlLint(inst);
      const json = JSON.stringify({
        files: [{ filename: 'a.qml', success: true, warnings: [] }],
        revision: 3,
      });
      const parsed = linter.parseJsonOutput(json);
      expect(parsed.files).toHaveLength(1);
      expect(parsed.files[0]!.filename).toBe('a.qml');
    });
  });
});
