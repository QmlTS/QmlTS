import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { compile } from '../../../src/compiler/pipeline/compiler.js';
import { writeCompilationOutput } from '../../../src/compiler/pipeline/output-writer.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';
import {
  compileWithQt,
  validateCompilationOutput,
} from '../../../src/compiler/pipeline/qt-validation.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('Qt Validation', () => {
  let tempDir: string;
  let outputDir: string;
  let options: CompilerOptions;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-qt-'));
    outputDir = join(tempDir, 'dist');
    options = {
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
      qt: {
        qtDir: QT_DIR!,
        lint: true,
        format: true,
        importScan: true,
      },
    };
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('CP-10a: compileWithQt — output passes qmllint', async () => {
    const result = await compileWithQt(options);

    expect(result.success).toBe(true);
    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.allValid).toBe(true);
    expect(result.qtValidation!.lintResults.size).toBeGreaterThan(0);
  }, 30_000);

  test('CP-10b: compileWithQt — qmlimportscanner returns results', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.importScanResult).toBeDefined();
    expect(result.qtValidation!.importScanResult!.success).toBe(true);
  }, 30_000);

  test('CP-10c: compileWithQt — qmlformat validates output', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.formatResults.size).toBeGreaterThan(0);
  }, 30_000);

  test('CP-10d: compileWithQt — Qt diagnostics merged into result.diagnostics', async () => {
    const result = await compileWithQt(options);

    expect(result.qtValidation).toBeDefined();
    expect(result.qtValidation!.diagnostics).toBeDefined();
    const topLevelErrors = result.diagnostics.filter((d) => d.severity === 'error');
    const qtErrors = result.qtValidation!.diagnostics.filter((d) => d.severity === 'error');
    expect(topLevelErrors.length).toBeGreaterThanOrEqual(qtErrors.length);
  }, 30_000);

  test('validateCompilationOutput standalone works', async () => {
    const result = compile({
      inputDir: FIXTURES,
      outputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });
    writeCompilationOutput(result);

    const qtResult = await validateCompilationOutput(result, {
      qtDir: QT_DIR!,
      lint: true,
    });

    expect(qtResult.allValid).toBe(true);
    expect(qtResult.lintResults.size).toBeGreaterThan(0);
  }, 30_000);
});

describe('Qt Validation discovery failures', () => {
  test('invalid qtDir is converted into graceful validation result', async () => {
    const invalidOutputDir = join(tmpdir(), 'qmlts-qt-invalid');
    const result = compile({
      inputDir: FIXTURES,
      outputDir: invalidOutputDir,
      tsconfigPath: join(FIXTURES, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    });
    writeCompilationOutput(result);

    const qtResult = await validateCompilationOutput(result, {
      qtDir: '/definitely/not/a/real/qt/path',
      lint: true,
    });

    expect(qtResult.allValid).toBe(false);
    expect(qtResult.diagnostics.some((d) => d.code === 'QMLTS-Q002')).toBe(true);
  });
});
