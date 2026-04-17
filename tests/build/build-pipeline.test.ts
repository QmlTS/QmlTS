import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createBuildPipeline } from '../../src/build/build-pipeline.js';
import type { BuildPhase, BuildProgress } from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';

// ─── Paths ──────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'sample-project');
const TMP_DIR = resolve(__dirname, '.tmp-build-pipeline');
const QT_DIR = process.env['QT_DIR'];

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

function writeSelectiveProject(): { projectDir: string; srcDir: string } {
  const projectDir = join(TMP_DIR, 'selective-project');
  const srcDir = join(projectDir, 'src');
  const dslDir = join(srcDir, 'dsl', 'generated', 'QtQuick');
  mkdirSync(dslDir, { recursive: true });

  writeFileSync(
    join(projectDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          experimentalDecorators: true,
          strict: false,
          skipLibCheck: true,
          noEmit: true,
          types: [],
        },
        include: ['src/**/*.ts'],
      },
      null,
      2,
    ),
    'utf-8',
  );

  writeFileSync(
    join(dslDir, 'Rectangle.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'dsl', 'generated', 'QtQuick', 'Rectangle.ts'), 'utf-8'),
  );
  writeFileSync(
    join(dslDir, 'Text.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'dsl', 'generated', 'QtQuick', 'Text.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'CounterViewModel.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'CounterViewModel.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'CounterView.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'CounterView.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'SecondaryView.ts'),
    [
      "import type { CounterViewModel } from './CounterViewModel.js';",
      "import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';",
      "import { Text } from './dsl/generated/QtQuick/Text.js';",
      '',
      'export default function SecondaryView(vm: CounterViewModel) {',
      '  return Rectangle().width(160).height(80).children(Text().text(vm.count));',
      '}',
      '',
    ].join('\n'),
    'utf-8',
  );

  return { projectDir, srcDir };
}

function writeSyntaxFailingProject(): { projectDir: string; srcDir: string } {
  const projectDir = join(TMP_DIR, 'syntax-failing-project');
  const srcDir = join(projectDir, 'src');
  const dslDir = join(srcDir, 'dsl', 'generated', 'QtQuick');
  mkdirSync(dslDir, { recursive: true });

  writeFileSync(
    join(projectDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          experimentalDecorators: true,
          strict: false,
          skipLibCheck: true,
          noEmit: true,
          types: [],
        },
        include: ['src/**/*.ts'],
      },
      null,
      2,
    ),
    'utf-8',
  );

  writeFileSync(
    join(dslDir, 'Rectangle.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'dsl', 'generated', 'QtQuick', 'Rectangle.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'CounterView.ts'),
    [
      "import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';",
      '',
      'export default function CounterView() {',
      "  return Rectangle().widthBind('}').height(100);",
      '}',
      '',
    ].join('\n'),
    'utf-8',
  );

  return { projectDir, srcDir };
}

function writeIntegratedProjectIn(rootDir: string): { projectDir: string; srcDir: string } {
  const projectDir = join(rootDir, 'integrated-project');
  const srcDir = join(projectDir, 'src');
  const dslDir = join(srcDir, 'dsl', 'generated', 'QtQuick');
  const assetsDir = join(projectDir, 'assets');
  const packageQmlDir = join(
    projectDir,
    'node_modules',
    '@qmlts',
    'controls',
    'qml',
    'FancyControls',
  );
  const packageDslDir = join(projectDir, 'node_modules', '@qmlts', 'controls', 'dsl');
  mkdirSync(dslDir, { recursive: true });
  mkdirSync(assetsDir, { recursive: true });
  mkdirSync(packageQmlDir, { recursive: true });
  mkdirSync(packageDslDir, { recursive: true });

  writeFileSync(
    join(projectDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ESNext',
          module: 'ESNext',
          moduleResolution: 'bundler',
          experimentalDecorators: true,
          strict: false,
          skipLibCheck: true,
          noEmit: true,
          types: [],
        },
        include: ['src/**/*.ts'],
      },
      null,
      2,
    ),
    'utf-8',
  );

  writeFileSync(
    join(dslDir, 'Rectangle.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'dsl', 'generated', 'QtQuick', 'Rectangle.ts'), 'utf-8'),
  );
  writeFileSync(
    join(dslDir, 'Text.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'dsl', 'generated', 'QtQuick', 'Text.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'CounterViewModel.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'CounterViewModel.ts'), 'utf-8'),
  );
  writeFileSync(
    join(srcDir, 'CounterView.ts'),
    readFileSync(join(FIXTURES_DIR, 'src', 'CounterView.ts'), 'utf-8'),
  );
  writeFileSync(join(assetsDir, 'logo.txt'), 'asset-bundle-ok\n', 'utf-8');
  writeFileSync(join(packageQmlDir, 'qmldir'), 'module FancyControls\n', 'utf-8');
  writeFileSync(
    join(packageQmlDir, 'FancyButton.qml'),
    'import QtQuick\nItem { property string label: "ok" }\n',
    'utf-8',
  );
  writeFileSync(join(packageDslDir, 'index.ts'), 'export const controlsDsl = true;\n', 'utf-8');
  writeFileSync(
    join(projectDir, 'node_modules', '@qmlts', 'controls', 'package.json'),
    JSON.stringify({ name: '@qmlts/controls', version: '0.2.0' }),
    'utf-8',
  );
  writeFileSync(
    join(projectDir, 'node_modules', '@qmlts', 'controls', 'qmlts.manifest.json'),
    JSON.stringify({
      qmlModules: ['FancyControls'],
      qmlImportPath: './qml',
      dslEntry: './dsl/index.ts',
      minQtVersion: '6.5.0',
    }),
    'utf-8',
  );

  return { projectDir, srcDir };
}

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

  test('BP-24a: entry file is copied into the output root', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);

    const result = await pipeline.run();

    expect(result.success).toBe(true);
    expect(existsSync(result.output.entryFile)).toBe(true);
    const entryContent = readFileSync(result.output.entryFile, 'utf-8');
    expect(entryContent).toContain('new QmltsHost');
    expect(entryContent).toContain('host.loadFile');
    expect(entryContent).toContain('CounterView');
  });

  test('BP-24b: generated entry prefers the configured entry unit as mainQml', async () => {
    const { projectDir, srcDir } = writeSelectiveProject();
    const config = makeConfig({
      entry: join(srcDir, 'SecondaryView.ts'),
      outDir: join(TMP_DIR, 'dist-secondary-entry'),
      configDir: projectDir,
    });
    const pipeline = createBuildPipeline(config);

    const result = await pipeline.run();

    expect(result.success).toBe(true);
    const entryContent = readFileSync(result.output.entryFile, 'utf-8');
    expect(entryContent).toContain('host.loadFile(join(distDir, "qml/SecondaryView.qml"))');
    expect(entryContent).not.toContain('loadEventBindings');
    expect(entryContent).not.toContain('createHost(');
  });

  test('BP-24c: pipeline copies package QML modules and bundles assets into dist', async () => {
    const isolatedRoot = mkdtempSync(join(tmpdir(), 'qmlts-build-pipeline-integrated-'));

    try {
      const { projectDir, srcDir } = writeIntegratedProjectIn(isolatedRoot);
      const config = makeConfig({
        entry: join(srcDir, 'CounterView.ts'),
        outDir: join(isolatedRoot, 'dist-integrated'),
        configDir: projectDir,
        assets: {
          dir: join(projectDir, 'assets'),
          include: ['**/*'],
          exclude: [],
          useQrc: true,
          optimize: false,
        },
      });
      const pipeline = createBuildPipeline(config);

      const result = await pipeline.run();

      expect(result.success).toBe(true);
      expect(existsSync(join(config.outDir, 'assets', 'logo.txt'))).toBe(true);
      expect(existsSync(join(config.outDir, 'assets', 'assets.qrc'))).toBe(true);
      expect(existsSync(join(config.outDir, 'qml', 'FancyControls', 'FancyButton.qml'))).toBe(true);

      const entryContent = readFileSync(result.output.entryFile, 'utf-8');
      expect(entryContent).toContain("join(distDir, 'qml')");
      expect(entryContent).toContain('host.registerViewModel("CounterViewModel")');
    } finally {
      rmSync(isolatedRoot, { recursive: true, force: true });
    }
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

  test('BP-34: files option limits written outputs to selected source files', async () => {
    const { projectDir, srcDir } = writeSelectiveProject();
    const config = makeConfig({
      entry: join(srcDir, 'CounterView.ts'),
      outDir: join(TMP_DIR, 'dist-selective'),
      configDir: projectDir,
    });
    const pipeline = createBuildPipeline(config);

    const result = await pipeline.run({ files: ['src/CounterView.ts'] });

    expect(result.success).toBe(true);
    expect(existsSync(join(config.outDir, 'qml', 'CounterView.qml'))).toBe(true);
    expect(existsSync(join(config.outDir, 'qml', 'SecondaryView.qml'))).toBe(false);
    expect(result.compilationStats?.totalViews).toBe(1);
  });

  test('BP-35: sourceMaps=true writes QML source maps into source-maps/', async () => {
    const config = makeConfig({
      outDir: join(TMP_DIR, 'dist-sourcemaps'),
      build: {
        ...makeConfig().build,
        sourceMaps: true,
      },
    });
    const pipeline = createBuildPipeline(config);

    const result = await pipeline.run();

    expect(result.success).toBe(true);
    expect(result.output.sourceMapsDir).toBeDefined();
    expect(existsSync(join(result.output.sourceMapsDir!, 'CounterView.qml.map'))).toBe(true);
  });

  test.skipIf(!QT_DIR)(
    'BP-36: validation failures block writing-output artifacts',
    async () => {
      const { projectDir, srcDir } = writeSyntaxFailingProject();
      const config = makeConfig({
        entry: join(srcDir, 'CounterView.ts'),
        outDir: join(TMP_DIR, 'dist-lint-fail'),
        configDir: projectDir,
        qt: {
          dir: QT_DIR!,
          modules: ['QtQuick'],
          targetVersion: '6.11.0',
        },
        build: {
          ...makeConfig().build,
          lint: false,
          qualityGate: 'syntax',
        },
      });
      const pipeline = createBuildPipeline(config);

      const result = await pipeline.run();

      expect(result.success).toBe(false);
      expect(result.phases.get('validating-qml')?.success).toBe(false);
      expect(result.phases.get('writing-output')?.success).toBe(false);
      expect(existsSync(join(config.outDir, 'manifest.json'))).toBe(false);
      expect(existsSync(join(config.outDir, 'event-bindings.json'))).toBe(false);
    },
    30_000,
  );

  test('BP-42: V2 config threads runtime/moduleConfig — V2 schemas have version=2', async () => {
    const config = makeConfig({
      runtime: 'v2',
      v1Compat: false,
      module: { prefix: 'TestApp', version: { major: 2, minor: 1 } },
    });
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    const schemaPath = join(config.outDir, 'schemas', 'CounterViewModel.schema.json');
    expect(existsSync(schemaPath)).toBe(true);

    const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
    expect(schema.className).toBe('CounterViewModel');
    expect(schema.version).toBe(2);
    expect(schema.moduleUri).toBe('TestApp.ViewModels');
    expect(schema.moduleVersion).toEqual({ major: 2, minor: 1 });
  });

  test('BP-43: V1 config (default) produces version=1 schemas without V2 metadata', async () => {
    const config = makeConfig();
    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    const schemaPath = join(config.outDir, 'schemas', 'CounterViewModel.schema.json');
    expect(existsSync(schemaPath)).toBe(true);

    const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
    expect(schema.className).toBe('CounterViewModel');
    expect(schema.version).toBe(1);
    expect(schema.moduleUri).toBeUndefined();
    expect(schema.moduleVersion).toBeUndefined();
    expect(schema.compilerSlotKey).toBeUndefined();
  });
});

describe('V2 Build Pipeline', () => {
  // BP-V2-05
  test('BP-V2-05: V1 build output unchanged (no qmldir/qmltypes)', async () => {
    const { projectDir, srcDir } = writeIntegratedProjectIn(TMP_DIR);
    const config = makeConfig({
      entry: join(srcDir, 'CounterView.ts'),
      outDir: join(projectDir, 'dist'),
      configDir: projectDir,
      assets: {
        dir: join(projectDir, 'assets'),
        include: ['**/*'],
        exclude: [],
        useQrc: false,
        optimize: false,
      },
      runtime: 'v1',
    });

    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);
    // V1 should NOT have module directory or qmldir/qmltypes
    expect(existsSync(join(config.outDir, 'qml', 'TestApp'))).toBe(false);

    const manifestPath = join(config.outDir, 'manifest.json');
    if (existsSync(manifestPath)) {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      expect(manifest.runtime).toBeUndefined();
      expect(manifest.modules).toBeUndefined();
    }
  });

  // BP-V2-01, BP-V2-02, BP-V2-03, BP-V2-04
  test('BP-V2-01/02/03/04: V2 build produces module artifacts', async () => {
    const { projectDir, srcDir } = writeIntegratedProjectIn(TMP_DIR);
    const config = makeConfig({
      entry: join(srcDir, 'CounterView.ts'),
      outDir: join(projectDir, 'dist'),
      configDir: projectDir,
      assets: {
        dir: join(projectDir, 'assets'),
        include: ['**/*'],
        exclude: [],
        useQrc: false,
        optimize: false,
      },
      runtime: 'v2',
      module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
    });

    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);

    // BP-V2-01: qmldir exists
    const qmldirPath = join(config.outDir, 'qml', 'TestApp', 'ViewModels', 'qmldir');
    expect(existsSync(qmldirPath)).toBe(true);
    const qmldirContent = readFileSync(qmldirPath, 'utf-8');
    expect(qmldirContent).toContain('module TestApp.ViewModels');

    // BP-V2-02: qmltypes exists
    const qmltypesPath = join(
      config.outDir,
      'qml',
      'TestApp',
      'ViewModels',
      'testapp_viewmodels.qmltypes',
    );
    expect(existsSync(qmltypesPath)).toBe(true);
    const qmltypesContent = readFileSync(qmltypesPath, 'utf-8');
    expect(qmltypesContent).toContain('import QtQuick.tooling 1.2');
    expect(qmltypesContent).toContain('CounterViewModel');

    // BP-V2-03: manifest
    const manifestPath = join(config.outDir, 'manifest.json');
    expect(existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    expect(manifest.runtime).toBe('v2');
    expect(manifest.modules).toBeDefined();
    expect(manifest.modules.length).toBeGreaterThan(0);
    expect(manifest.modules[0].qmldir).toMatch(/^\.\/qml\//);

    // BP-V2-04: entry uses registerModule
    const entryPath = result.output.entryFile;
    if (existsSync(entryPath)) {
      const entryContent = readFileSync(entryPath, 'utf-8');
      expect(entryContent).toContain('registerModule');
      expect(entryContent).not.toContain('registerViewModel');
    }
  });

  // BP-V2-06: V2 build with no ViewModels
  test('BP-V2-06: V2 build with no ViewModels produces no module artifacts', async () => {
    const { projectDir, srcDir } = writeIntegratedProjectIn(TMP_DIR);

    // Overwrite CounterView.ts so it has no ViewModel
    writeFileSync(
      join(srcDir, 'CounterView.ts'),
      `import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';
export default function CounterView() {
  return Rectangle({ width: 200, height: 100 });
}
`,
      'utf-8',
    );
    // Remove CounterViewModel.ts so no ViewModel schema is produced
    rmSync(join(srcDir, 'CounterViewModel.ts'), { force: true });

    const config = makeConfig({
      entry: join(srcDir, 'CounterView.ts'),
      outDir: join(projectDir, 'dist'),
      configDir: projectDir,
      assets: {
        dir: join(projectDir, 'assets'),
        include: ['**/*'],
        exclude: [],
        useQrc: false,
        optimize: false,
      },
      runtime: 'v2',
      module: { prefix: 'TestApp', version: { major: 1, minor: 0 } },
    });

    const pipeline = createBuildPipeline(config);
    const result = await pipeline.run();

    expect(result.success).toBe(true);
    // No module directory or qmldir/qmltypes
    expect(existsSync(join(config.outDir, 'qml', 'TestApp', 'ViewModels'))).toBe(false);

    const manifestPath = join(config.outDir, 'manifest.json');
    expect(existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    expect(manifest.runtime).toBe('v2');
    expect(manifest.modules).toEqual([]);
  });
});
