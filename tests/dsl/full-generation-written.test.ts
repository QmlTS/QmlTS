/**
 * Written-output full-generation validation.
 * Writes generated output to a temp directory and validates:
 * - All files written without errors (no invalid paths)
 * - Per-module and top-level index.ts files exist
 * - No :: in file paths or import statements
 * - TypeScript compilation passes (tsc --noEmit)
 */
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';
import { writeGeneratedFiles } from '../../src/dsl/generator/orchestration.js';
import type { GeneratorResult } from '../../src/dsl/generator/types.js';

const SNAPSHOT_PATH = join(import.meta.dir, '..', '..', 'data', 'qt-6.11.0-registry.snapshot.json');
const RUNTIME_SRC = join(import.meta.dir, '..', '..', 'src', 'dsl', 'runtime');
const AST_SRC = join(import.meta.dir, '..', '..', 'src', 'ast');

let tempDir: string;
let genDir: string;
let result: GeneratorResult;

beforeAll(() => {
  // 1. Generate all modules
  result = generate({
    registryPath: SNAPSHOT_PATH,
    outputDir: '',
  });

  // 2. Write to temp directory with correct relative path structure
  //    Generated files import from ../../runtime/index.js
  //    So layout: temp/src/dsl/generated/... + temp/src/dsl/runtime/... + temp/src/ast/...
  tempDir = mkdtempSync(join(tmpdir(), 'qmlts-fullgen-'));
  const dslDir = join(tempDir, 'src', 'dsl');
  mkdirSync(dslDir, { recursive: true });

  genDir = join(dslDir, 'generated');
  writeGeneratedFiles(result, genDir);

  // 3. Copy runtime and ast source files for import resolution
  cpSync(RUNTIME_SRC, join(dslDir, 'runtime'), { recursive: true });
  mkdirSync(join(tempDir, 'src', 'ast'), { recursive: true });
  cpSync(AST_SRC, join(tempDir, 'src', 'ast'), { recursive: true });

  // 4. Create tsconfig.json for validation
  const tsconfig = {
    compilerOptions: {
      target: 'ESNext',
      module: 'ESNext',
      moduleResolution: 'bundler',
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      noUnusedLocals: false,
      noUnusedParameters: false,
    },
    include: ['src/**/*.ts'],
  };
  writeFileSync(join(tempDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
});

afterAll(() => {
  if (tempDir && existsSync(tempDir)) {
    try {
      rmSync(tempDir, { recursive: true, force: true });
    } catch {
      // Temp dir cleanup is best-effort; may fail on Windows if files are locked
    }
  }
});

describe('Written-Output Full Generation Validation', () => {
  test('WO-01: full generation succeeds', () => {
    expect(result.success).toBe(true);
  });

  test('WO-02: all files written without errors', () => {
    for (const file of result.files) {
      const fullPath = join(genDir, file.relativePath);
      expect(existsSync(fullPath)).toBe(true);
    }
  });

  test('WO-03: no :: in any file path', () => {
    for (const file of result.files) {
      expect(file.relativePath).not.toContain('::');
    }
  });

  test('WO-04: per-module index.ts files exist for modules with exports', () => {
    const moduleIndexes = result.files.filter(
      (f) => f.relativePath.endsWith('/index.ts') && f.relativePath !== 'index.ts',
    );
    expect(moduleIndexes.length).toBeGreaterThan(50);
    for (const idx of moduleIndexes) {
      expect(existsSync(join(genDir, idx.relativePath))).toBe(true);
    }
  });

  test('WO-05: top-level index.ts exists', () => {
    expect(existsSync(join(genDir, 'index.ts'))).toBe(true);
  });

  test('WO-06: no :: in any import statement', () => {
    for (const file of result.files) {
      if (file.relativePath.endsWith('.ts')) {
        const importLines = file.content.split('\n').filter((l) => l.includes('from '));
        for (const line of importLines) {
          expect(line).not.toContain('::');
        }
      }
    }
  });

  test('WO-07: TypeScript compilation passes', async () => {
    const proc = Bun.spawn(
      ['bunx', 'tsc', '--noEmit', '--project', join(tempDir, 'tsconfig.json')],
      {
        cwd: tempDir,
        stdout: 'pipe',
        stderr: 'pipe',
      },
    );
    const exitCode = await proc.exited;
    if (exitCode !== 0) {
      const stderr = await new Response(proc.stderr).text();
      const errors = stderr.split('\n').slice(0, 20).join('\n');
      throw new Error(`tsc --noEmit failed with exit code ${exitCode}:\n${errors}`);
    }
    expect(exitCode).toBe(0);
  }, 60_000);

  test('WO-08: zero warnings', () => {
    const warnings = result.diagnostics.filter((d) => d.level === 'warning');
    expect(warnings.length).toBe(0);
  });

  test('WO-09: zero errors', () => {
    const errors = result.diagnostics.filter((d) => d.level === 'error');
    expect(errors.length).toBe(0);
  });

  test('WO-10: file count is consistent', () => {
    expect(result.files.length).toBe(result.stats.filesGenerated);
    expect(result.stats.filesGenerated).toBeGreaterThan(1000);
  });

  test('WO-11: modules processed matches expectations', () => {
    expect(result.stats.modulesProcessed).toBeGreaterThan(80);
  });
});
