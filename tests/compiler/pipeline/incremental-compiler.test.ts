import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createIncrementalCompiler } from '../../../src/compiler/pipeline/incremental-compiler.js';
import type { CompilerOptions } from '../../../src/compiler/pipeline/pipeline-types.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('IncrementalCompiler', () => {
  let tempDir: string;
  let options: CompilerOptions;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-ic-'));
    cpSync(FIXTURES, tempDir, { recursive: true });
    options = {
      inputDir: tempDir,
      outputDir: join(tempDir, 'dist'),
      tsconfigPath: join(tempDir, 'tsconfig.json'),
      diagnostics: { suppress: ['QMLTS-A011'] },
    };
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('IC-01: first compile — all files compiled, cache populated', () => {
    const ic = createIncrementalCompiler();
    const result = ic.compile(options);

    expect(result.success).toBe(true);
    expect(result.units.length).toBeGreaterThan(0);

    const stats = ic.getCacheStats();
    expect(stats.entries).toBeGreaterThan(0);
  });

  test('IC-02: second compile (no changes) — all from cache', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const stats1 = ic.getCacheStats();
    const entries1 = stats1.entries;

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    const stats2 = ic.getCacheStats();
    expect(stats2.entries).toBe(entries1);
    expect(stats2.hitRate).toBeGreaterThan(0);
  });

  test('IC-03: file modified — only that file recompiled', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const counterViewPath = join(tempDir, 'CounterView.ts');
    const original = readFileSync(counterViewPath, 'utf-8');
    writeFileSync(counterViewPath, original.replace('width(200)', 'width(300)'));

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    const counterUnit = result2.units.find((u) => u.viewName === 'CounterView');
    expect(counterUnit).toBeDefined();
    expect(counterUnit!.qmlContent).toContain('300');
  });

  test('IC-04: ViewModel change — dependent View also recompiled', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const vmPath = join(tempDir, 'LoginViewModel.ts');
    const original = readFileSync(vmPath, 'utf-8');
    writeFileSync(
      vmPath,
      original.replace(
        '@State({ readonly: true }) isLoading = false;',
        '@State({ readonly: true }) isLoading = false;\n  @State() rememberMe = false;',
      ),
    );

    const result2 = ic.compile(options);
    expect(result2.success).toBe(true);

    const loginUnit = result2.units.find((u) => u.viewModelName === 'LoginViewModel');
    expect(loginUnit).toBeDefined();
    expect(loginUnit!.schema).toBeDefined();
    expect(loginUnit!.schema!.states.length).toBe(4);
  });

  test('schema-stable ViewModel edit does not invalidate dependent views', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const vmPath = join(tempDir, 'LoginViewModel.ts');
    const original = readFileSync(vmPath, 'utf-8');
    writeFileSync(vmPath, original.replace('/* login logic */', '/* updated login logic */'));

    ic.compile(options);
    const dirtyFiles = new Set(ic.getChangedFiles());

    expect(dirtyFiles.has(vmPath)).toBe(true);
    expect(dirtyFiles.has(join(tempDir, 'LoginView.ts'))).toBe(false);
  });

  test('dirty view can still pair with clean cached ViewModel metadata', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const viewPath = join(tempDir, 'LoginView.ts');
    const original = readFileSync(viewPath, 'utf-8');
    writeFileSync(viewPath, original.replace('width(400)', 'width(444)'));

    const result = ic.compile(options);
    const loginUnit = result.units.find((u) => u.viewName === 'LoginView');

    expect(loginUnit).toBeDefined();
    expect(loginUnit!.qmlContent).toContain('width: 444');
    expect(loginUnit!.qmlContent).toContain('Connections');
    expect(loginUnit!.qmlContent).toContain('Component.onCompleted');
  });

  test('IC-05: clearCache — full recompile', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const stats1 = ic.getCacheStats();
    expect(stats1.entries).toBeGreaterThan(0);

    ic.clearCache();

    const stats2 = ic.getCacheStats();
    expect(stats2.entries).toBe(0);
    expect(stats2.hitRate).toBe(0);

    const result = ic.compile(options);
    expect(result.success).toBe(true);
    expect(result.units.length).toBeGreaterThan(0);
  });

  test('IC-06: getCacheStats — hitRate correct', () => {
    const ic = createIncrementalCompiler();

    const stats0 = ic.getCacheStats();
    expect(stats0.entries).toBe(0);
    expect(stats0.hitRate).toBe(0);
    expect(stats0.sizeBytes).toBe(0);

    ic.compile(options);
    const stats1 = ic.getCacheStats();
    expect(stats1.entries).toBeGreaterThan(0);
    expect(stats1.sizeBytes).toBeGreaterThan(0);

    ic.compile(options);
    const stats2 = ic.getCacheStats();
    expect(stats2.hitRate).toBeGreaterThan(0);
  });

  test('needsRecompile returns true for unknown files', () => {
    const ic = createIncrementalCompiler();
    expect(ic.needsRecompile('/nonexistent/file.ts')).toBe(true);
  });

  test('cacheUnit / getCachedUnit compatibility facades', () => {
    const ic = createIncrementalCompiler();
    ic.compile(options);

    const cached = ic.getCachedUnit(join(tempDir, 'LoginView.ts'));
    expect(cached).toBeDefined();
    expect(cached!.viewName).toBe('LoginView');
  });

  test('IC-07: switching runtime V1→V2 regenerates schema (no cache contamination)', () => {
    const ic = createIncrementalCompiler();

    const v1Result = ic.compile({ ...options, runtime: 'v1' });
    expect(v1Result.success).toBe(true);
    const v1Schema = v1Result.units.find((u) => u.schema)?.schema;
    expect(v1Schema).toBeDefined();
    expect(v1Schema!.version).toBe(1);
    expect(v1Schema!.moduleUri).toBeUndefined();

    const v2Result = ic.compile({
      ...options,
      outputDir: join(tempDir, 'dist-v2'),
      runtime: 'v2',
      moduleConfig: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
    });
    expect(v2Result.success).toBe(true);
    const v2Schema = v2Result.units.find((u) => u.schema)?.schema;
    expect(v2Schema).toBeDefined();
    expect(v2Schema!.version).toBe(2);
    expect(v2Schema!.moduleUri).toBe('TestApp.ViewModels');
  });

  test('IC-08: switching runtime V2→V1 regenerates schema', () => {
    const ic = createIncrementalCompiler();

    const v2Result = ic.compile({
      ...options,
      runtime: 'v2',
      moduleConfig: { prefix: 'App', version: { major: 1, minor: 0 } },
    });
    expect(v2Result.success).toBe(true);

    const v1Result = ic.compile({
      ...options,
      outputDir: join(tempDir, 'dist-v1'),
      runtime: 'v1',
    });
    expect(v1Result.success).toBe(true);
    const v1Schema = v1Result.units.find((u) => u.schema)?.schema;
    expect(v1Schema).toBeDefined();
    expect(v1Schema!.version).toBe(1);
    expect(v1Schema!.moduleUri).toBeUndefined();
  });
});
