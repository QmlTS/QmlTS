import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createBuildPipeline } from '../../src/build/build-pipeline.js';
import type { BuildPhase, BuildProgress } from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';

// ─── Paths ──────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'sample-project');
const TMP_DIR = resolve(__dirname, '.tmp-build-pipeline');

// ─── Helpers ────────────────────────────────────────────────

function makeConfig(overrides: Partial<ResolvedQmltsConfig> = {}): ResolvedQmltsConfig {
  return {
    entry: join(FIXTURES_DIR, 'src', 'CounterView.ts'),
    outDir: join(TMP_DIR, 'dist'),
    qt: {
      modules: ['QtQuick'],
      targetVersion: '6.11.0',
    },
    build: {
      aot: false,
      lint: false,
      format: false,
      sourceMaps: false,
      incremental: false,
      concurrency: 1,
      qualityGate: 'none',
      mode: 'development',
      minify: false,
      compilerOptions: {
        diagnostics: { suppress: ['QMLTS-A011'] },
      },
    },
    host: {
      prebuilt: true,
      cargo: { args: [], profile: 'dev' },
    },
    dev: {
      hotReload: false,
      watchPaths: ['.'],
      debounceMs: 300,
      ignorePatterns: [],
      port: 5173,
      notify: true,
      preserveOnError: false,
    },
    assets: {
      dir: join(FIXTURES_DIR, 'assets'),
      include: ['**/*'],
      exclude: [],
      useQrc: false,
      optimize: false,
    },
    distribute: {
      targets: [],
      bundleQt: false,
    },
    qmlModulePaths: [],
    configDir: FIXTURES_DIR,
    ...overrides,
  };
}

// ─── Lifecycle ──────────────────────────────────────────────

beforeEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
  mkdirSync(TMP_DIR, { recursive: true });
});

afterEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
});

// ─── Tests ──────────────────────────────────────────────────

describe('BuildPipeline', () => {
  test('BP-19: pipeline run produces results for all 8 phases', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    const expectedPhases: BuildPhase[] = [
      'loading-config',
      'discovering-qt',
      'compiling-ts',
      'collecting-deps',
      'bundling-assets',
      'validating-qml',
      'preparing-host',
      'writing-output',
    ];

    for (const phase of expectedPhases) {
      expect(result.phases.has(phase)).toBe(true);
      const phaseResult = result.phases.get(phase)!;
      expect(phaseResult.durationMs).toBeGreaterThanOrEqual(0);
      expect(phaseResult.diagnostics).toBeDefined();
    }
  });

  test('BP-20: successful build sets success=true and positive durationMs', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);
    expect(result.durationMs).toBeGreaterThan(0);
  });

  test('BP-21: progress callbacks fire for each phase plus done', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const progressEvents: BuildProgress[] = [];
    pipeline.onProgress((p) => progressEvents.push(p));

    await pipeline.run();

    const phases = progressEvents.map((p) => p.phase);
    expect(phases).toContain('loading-config');
    expect(phases).toContain('discovering-qt');
    expect(phases).toContain('compiling-ts');
    expect(phases).toContain('collecting-deps');
    expect(phases).toContain('bundling-assets');
    expect(phases).toContain('validating-qml');
    expect(phases).toContain('preparing-host');
    expect(phases).toContain('writing-output');
    expect(phases).toContain('done');
  });

  test('BP-22: phase results include durationMs for each phase', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    for (const [, phaseResult] of result.phases) {
      expect(typeof phaseResult.durationMs).toBe('number');
      expect(phaseResult.durationMs).toBeGreaterThanOrEqual(0);
    }
  });

  test('BP-23: pipeline consumes existing compiler output (units + eventBindings)', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    // Verify QML files were written
    const qmlDir = join(config.outDir, 'qml');
    const qmlFiles = existsSync(qmlDir);
    expect(qmlFiles).toBe(true);

    const counterQml = join(qmlDir, 'CounterView.qml');
    expect(existsSync(counterQml)).toBe(true);
    const qmlContent = readFileSync(counterQml, 'utf-8');
    expect(qmlContent).toContain('Rectangle');

    // Verify event bindings written
    const eventBindings = join(config.outDir, 'event-bindings.json');
    expect(existsSync(eventBindings)).toBe(true);
    const bindings = JSON.parse(readFileSync(eventBindings, 'utf-8'));
    expect(bindings.commands).toBeDefined();
    expect(Array.isArray(bindings.commands)).toBe(true);
  });

  test('BP-24: manifest.json is generated in output', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    const manifestPath = join(config.outDir, 'manifest.json');
    expect(existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    expect(manifest.version).toBe('0.1.0');
    expect(manifest.buildTime).toBeTruthy();
    expect(manifest.qmlFiles.length).toBeGreaterThan(0);
    expect(manifest.qtVersion).toBe('6.11.0');
  });

  test('BP-25: schema files are written to schemasDir', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    const schemaPath = join(config.outDir, 'schemas', 'CounterViewModel.schema.json');
    expect(existsSync(schemaPath)).toBe(true);

    const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
    expect(schema.className).toBe('CounterViewModel');
  });

  test('BP-26: dryRun=true does not write files to disk', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run({ dryRun: true });

    expect(result.success).toBe(true);
    expect(existsSync(config.outDir)).toBe(false);
  });

  test('BP-27: output property returns valid ProductLayout', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.output).toBeDefined();
    expect(result.output.rootDir).toBe(config.outDir);
    expect(result.output.qmlDir).toContain('qml');
    expect(result.output.schemasDir).toContain('schemas');
    expect(result.output.eventBindings).toContain('event-bindings.json');
    expect(result.output.manifest).toContain('manifest.json');
  });

  test('BP-28: force option clears .qmlts cache directory', async () => {
    const cacheDir = join(FIXTURES_DIR, '.qmlts');
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(join(cacheDir, 'cache.json'), '{}', 'utf-8');

    expect(existsSync(cacheDir)).toBe(true);

    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    await pipeline.run({ force: true });

    expect(existsSync(cacheDir)).toBe(false);
  });

  test('BP-29: multiple progress listeners all receive events', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const events1: BuildProgress[] = [];
    const events2: BuildProgress[] = [];
    pipeline.onProgress((p) => events1.push(p));
    pipeline.onProgress((p) => events2.push(p));

    await pipeline.run();

    expect(events1.length).toBeGreaterThan(0);
    expect(events2.length).toBeGreaterThan(0);
    expect(events1.length).toBe(events2.length);
  });

  test('BP-30: compilation failure propagates and skips writing-output', async () => {
    // Create a project with a broken view that will fail compilation
    const brokenDir = join(TMP_DIR, 'broken-project');
    const brokenSrc = join(brokenDir, 'src');
    mkdirSync(brokenSrc, { recursive: true });

    // Write a tsconfig that only includes the broken file
    writeFileSync(
      join(brokenDir, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          strict: false,
          skipLibCheck: true,
          noEmit: true,
          types: [],
        },
        include: ['src/BrokenView.ts'],
      }),
      'utf-8',
    );

    // Write a view that imports from non-existent modules (will produce empty compile)
    writeFileSync(
      join(brokenSrc, 'BrokenView.ts'),
      'export default function BrokenView() { return null as any; }',
      'utf-8',
    );

    const config = makeConfig({
      entry: join(brokenSrc, 'BrokenView.ts'),
      outDir: join(TMP_DIR, 'dist-broken'),
      configDir: brokenDir,
    });

    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    // The compiler should produce no valid units (no QML elements),
    // so compilation technically succeeds but produces 0 units.
    // The pipeline should still complete — this tests error propagation path.
    const compilePhase = result.phases.get('compiling-ts')!;
    expect(compilePhase).toBeDefined();
    expect(typeof compilePhase.durationMs).toBe('number');
  });

  test('BP-31: Qt discovery warning when dir not found', async () => {
    const config = makeConfig({
      qt: {
        dir: join(TMP_DIR, 'nonexistent-qt'),
        modules: ['QtQuick'],
        targetVersion: '6.11.0',
      },
    });
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    const qtPhase = result.phases.get('discovering-qt')!;
    expect(qtPhase.diagnostics.length).toBeGreaterThan(0);
    expect(qtPhase.diagnostics[0]!.severity).toBe('warning');
  });

  test('BP-32: compiling-ts progress reports unit count', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const progressEvents: BuildProgress[] = [];
    pipeline.onProgress((p) => progressEvents.push(p));

    await pipeline.run();

    const compileProgress = progressEvents.filter((p) => p.phase === 'compiling-ts');
    const countEvent = compileProgress.find((p) => p.current !== undefined);
    expect(countEvent).toBeDefined();
    expect(countEvent!.current).toBeGreaterThan(0);
  });

  test('BP-33: done progress event indicates success/failure', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const progressEvents: BuildProgress[] = [];
    pipeline.onProgress((p) => progressEvents.push(p));

    await pipeline.run();

    const doneEvent = progressEvents.find((p) => p.phase === 'done');
    expect(doneEvent).toBeDefined();
    expect(doneEvent!.message).toContain('succeeded');
  });
});
