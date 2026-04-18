import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { ProductLayout } from '../../src/build/build-types.js';
import { applyDefaults } from '../../src/build/config-defaults.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { writeLibraryManifest } from '../../src/build/library-builder.js';
import type { ModuleMeta } from '../../src/build/module-meta.js';
import type { CompilationResult } from '../../src/compiler/pipeline/pipeline-types.js';

const TMP_DIR = join(import.meta.dir, '__tmp_library_builder__');

beforeAll(() => {
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(TMP_DIR, { recursive: true });
});

afterAll(() => {
  rmSync(TMP_DIR, { recursive: true, force: true });
});

function makeModuleMeta(): ModuleMeta {
  return {
    moduleUri: 'Com.Example.ViewModels',
    moduleRelDir: 'Com/Example/ViewModels',
    qmltypesFilename: 'viewmodels.qmltypes',
    versionString: '1.0',
    versionMajor: 1,
    versionMinor: 0,
    typeNames: new Set(['CounterViewModel']),
  };
}

function makeConfig(outDir: string): ResolvedQmltsConfig {
  return applyDefaults(
    {
      runtime: 'v2',
      module: { prefix: 'Com.Example', version: { major: 1, minor: 0 } },
      outDir,
    },
    TMP_DIR,
  );
}

function makeLayout(outDir: string): ProductLayout {
  return {
    rootDir: outDir,
    entryFile: join(outDir, 'main.ts'),
    qmlDir: join(outDir, 'qml'),
    schemasDir: join(outDir, 'schemas'),
    assetsDir: join(outDir, 'assets'),
    hostLib: join(outDir, 'qmlts_host.win32-x64.node'),
    manifest: join(outDir, 'manifest.json'),
    eventBindings: join(outDir, 'event-bindings.json'),
    moduleDir: join(outDir, 'qml', 'Com', 'Example', 'ViewModels'),
  };
}

function makeCompilationResult(): CompilationResult {
  return {
    units: [
      {
        sourceFile: 'src/Counter.viewmodel.ts',
        qmlOutputPath: join(TMP_DIR, 'dist', 'qml', 'Counter.qml'),
        qmlContent: '<QML content>',
        schema: {
          className: 'CounterViewModel',
          properties: [],
          commands: [],
          effects: [],
          states: [],
          initialState: 'idle',
          lifecycle: { onMount: false, onUnmount: false },
        } as any,
        schemaOutputPath: join(TMP_DIR, 'dist', 'schemas', 'CounterViewModel.schema.json'),
        dependencies: [],
      },
    ],
    eventBindings: { bindings: [] },
    diagnostics: [],
  };
}

describe('Library Builder', () => {
  test('LB-01: writeLibraryManifest creates qmlts.module.json', () => {
    const outDir = join(TMP_DIR, 'lb01');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult = makeCompilationResult();
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    expect(existsSync(result.manifestPath)).toBe(true);
    expect(result.manifestPath).toContain('qmlts.module.json');
  });

  test('LB-02: writeLibraryManifest produces valid manifest content', () => {
    const outDir = join(TMP_DIR, 'lb02');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult = makeCompilationResult();
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    const content = JSON.parse(readFileSync(result.manifestPath, 'utf-8'));
    expect(content.modules).toHaveLength(1);
    expect(content.modules[0].uri).toBe('Com.Example.ViewModels');
    expect(content.modules[0].version).toBe('1.0');
    expect(content.modules[0].types.native).toContain('CounterViewModel');
    expect(content.modules[0].qmldir).toContain('qmldir');
    expect(content.modules[0].qmltypes).toContain('viewmodels.qmltypes');
  });

  test('LB-03: writeLibraryManifest includes platform in native section', () => {
    const outDir = join(TMP_DIR, 'lb03');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult = makeCompilationResult();
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    const content = JSON.parse(readFileSync(result.manifestPath, 'utf-8'));
    expect(content.native).toBeDefined();
    expect(typeof content.native).toBe('object');
    const platforms = Object.keys(content.native);
    expect(platforms.length).toBeGreaterThan(0);
    expect(result.platform).toBeDefined();
  });

  test('LB-04: writeLibraryManifest extracts qmlTypes from compilation units', () => {
    const outDir = join(TMP_DIR, 'lb04');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult = makeCompilationResult();
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    expect(result.qmlTypes).toContain('CounterViewModel');
  });

  test('LB-05: writeLibraryManifest handles compilation result with no schemas', () => {
    const outDir = join(TMP_DIR, 'lb05');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult: CompilationResult = {
      units: [
        {
          sourceFile: 'src/Pure.ts',
          qmlOutputPath: join(TMP_DIR, 'dist', 'qml', 'Pure.qml'),
          qmlContent: '<QML content>',
          dependencies: [],
        },
      ],
      eventBindings: { bindings: [] },
      diagnostics: [],
    };
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    expect(result.qmlTypes).toHaveLength(0);
  });

  test('LB-06: writeLibraryManifest uses relative paths for qmldir/qmltypes', () => {
    const outDir = join(TMP_DIR, 'lb06');
    mkdirSync(outDir, { recursive: true });

    const layout = makeLayout(outDir);
    const config = makeConfig(outDir);
    const compilationResult = makeCompilationResult();
    const moduleMeta = makeModuleMeta();

    const result = writeLibraryManifest(layout, config, compilationResult, moduleMeta);

    const content = JSON.parse(readFileSync(result.manifestPath, 'utf-8'));
    const mod = content.modules[0];
    expect(mod.qmldir).toMatch(/^\.\//);
    expect(mod.qmltypes).toMatch(/^\.\//);
  });
});
