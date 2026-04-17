import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { BuildManifest } from '../../src/build/build-types.js';
import { applyDefaults } from '../../src/build/config-defaults.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import {
  attachModuleDir,
  createManifest,
  createProductLayout,
  hostLibFilename,
  materializeLayout,
  writeCompilationUnits,
  writeEntryFile,
  writeEventBindings,
  writeManifest,
} from '../../src/build/product-layout.js';
import type { CompilationResult } from '../../src/compiler/pipeline/pipeline-types.js';

const TMP_DIR = resolve('tests/build/.tmp-product-layout');

function makeConfig(overrides?: Partial<ResolvedQmltsConfig>): ResolvedQmltsConfig {
  const base = applyDefaults({ entry: './src/main.ts', outDir: TMP_DIR }, '.');
  return { ...base, outDir: TMP_DIR, ...overrides };
}

function makeCompilationResult(overrides?: Partial<CompilationResult>): CompilationResult {
  return {
    units: [
      {
        sourceFile: '/src/CounterView.ts',
        viewName: 'CounterView',
        viewModelName: 'CounterViewModel',
        qmlOutputPath: join(TMP_DIR, 'qml', 'CounterView.qml'),
        qmlContent: 'import QtQuick\nItem { }',
        schema: {
          className: 'CounterViewModel',
          states: [{ name: 'count', type: 'int', readonly: false, defaultValue: '0' }],
          commands: [],
          effects: [],
          lifecycle: [],
        } as any,
        schemaOutputPath: join(TMP_DIR, 'schemas', 'CounterViewModel.schema.json'),
        diagnostics: [],
      },
    ],
    eventBindings: { commands: [], effects: [] },
    diagnostics: [],
    success: true,
    stats: {
      totalFiles: 1,
      totalViewModels: 1,
      totalViews: 1,
      totalStates: 1,
      totalCommands: 0,
      totalEffects: 0,
      durationMs: 100,
    },
    ...overrides,
  };
}

beforeEach(() => {
  if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true });
});

afterEach(() => {
  if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true });
});

describe('ProductLayout', () => {
  test('BP-06: createProductLayout returns correct paths', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);

    expect(layout.rootDir).toBe(TMP_DIR);
    expect(layout.qmlDir).toBe(join(TMP_DIR, 'qml'));
    expect(layout.schemasDir).toBe(join(TMP_DIR, 'schemas'));
    expect(layout.assetsDir).toBe(join(TMP_DIR, 'assets'));
    expect(layout.manifest).toBe(join(TMP_DIR, 'manifest.json'));
    expect(layout.eventBindings).toBe(join(TMP_DIR, 'event-bindings.json'));
  });

  test('BP-07: createProductLayout includes sourceMapsDir when sourceMaps enabled', () => {
    const config = makeConfig({
      build: {
        ...applyDefaults({}, '.').build,
        sourceMaps: true,
      },
    });
    const layout = createProductLayout(TMP_DIR, config);
    expect(layout.sourceMapsDir).toBe(join(TMP_DIR, 'source-maps'));
  });

  test('BP-08: createProductLayout omits sourceMapsDir when sourceMaps disabled', () => {
    const config = makeConfig({
      build: {
        ...applyDefaults({}, '.').build,
        sourceMaps: false,
      },
    });
    const layout = createProductLayout(TMP_DIR, config);
    expect(layout.sourceMapsDir).toBeUndefined();
  });

  test('BP-09: hostLib includes platform in filename', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    expect(layout.hostLib).toContain('qmlts_host.');
    expect(layout.hostLib).toContain('.node');
  });

  test('BP-10: hostLibFilename generates platform-specific name', () => {
    expect(hostLibFilename('win32-x64')).toBe('qmlts_host.win32-x64.node');
    expect(hostLibFilename('linux-x64')).toBe('qmlts_host.linux-x64.node');
    expect(hostLibFilename('darwin-arm64')).toBe('qmlts_host.darwin-arm64.node');
  });
});

describe('materializeLayout', () => {
  test('BP-11: creates directories on disk', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    expect(existsSync(layout.rootDir)).toBe(true);
    expect(existsSync(layout.qmlDir)).toBe(true);
    expect(existsSync(layout.schemasDir)).toBe(true);
    expect(existsSync(layout.assetsDir)).toBe(true);
  });

  test('BP-12: dryRun=true does not create directories', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout, true);

    expect(existsSync(layout.rootDir)).toBe(false);
  });
});

describe('BuildManifest', () => {
  test('BP-13: createManifest generates correct structure', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const result = makeCompilationResult();
    const manifest = createManifest(layout, result, config);

    expect(manifest.version).toBe('0.1.0');
    expect(manifest.buildTime).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(manifest.entry).toBe('./main.ts');
    expect(manifest.qmlFiles).toEqual(['./qml/CounterView.qml']);
    expect(manifest.schemas).toEqual(['./schemas/CounterViewModel.schema.json']);
    expect(manifest.qtVersion).toBe('6.11');
    expect(manifest.hostLib).toContain('qmlts_host.');
  });

  test('BP-13a: createManifest uses authoritative unit output paths', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const result = makeCompilationResult({
      units: [
        {
          ...makeCompilationResult().units[0]!,
          qmlOutputPath: join(layout.qmlDir, 'nested', 'CounterView.qml'),
          schemaOutputPath: join(layout.schemasDir, 'viewmodels', 'CounterViewModel.schema.json'),
        },
      ],
    });

    const manifest = createManifest(layout, result, config);

    expect(manifest.qmlFiles).toEqual(['./qml/nested/CounterView.qml']);
    expect(manifest.schemas).toEqual(['./schemas/viewmodels/CounterViewModel.schema.json']);
  });

  test('BP-14: writeManifest writes JSON to disk', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const manifest: BuildManifest = {
      version: '0.1.0',
      buildTime: '2026-01-01T00:00:00.000Z',
      entry: './main.ts',
      qmlFiles: ['./qml/CounterView.qml'],
      schemas: ['./schemas/CounterViewModel.schema.json'],
      hostLib: './qmlts_host.win32-x64.node',
      qtVersion: '6.11',
      platform: 'win32-x64',
    };
    writeManifest(layout, manifest);

    const content = JSON.parse(readFileSync(layout.manifest, 'utf-8'));
    expect(content.version).toBe('0.1.0');
    expect(content.qmlFiles).toEqual(['./qml/CounterView.qml']);
  });
});

describe('writeCompilationUnits', () => {
  test('BP-15: writes QML files to qmlDir', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const result = makeCompilationResult();
    writeCompilationUnits(layout, result.units, false);

    const qmlPath = join(layout.qmlDir, 'CounterView.qml');
    expect(existsSync(qmlPath)).toBe(true);
    expect(readFileSync(qmlPath, 'utf-8')).toBe('import QtQuick\nItem { }');
  });

  test('BP-15a: writes QML files to the unit qmlOutputPath', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const nestedQmlPath = join(layout.qmlDir, 'nested', 'CounterView.qml');
    const result = makeCompilationResult({
      units: [
        {
          ...makeCompilationResult().units[0]!,
          qmlOutputPath: nestedQmlPath,
        },
      ],
    });
    writeCompilationUnits(layout, result.units, false);

    expect(existsSync(nestedQmlPath)).toBe(true);
    expect(readFileSync(nestedQmlPath, 'utf-8')).toBe('import QtQuick\nItem { }');
  });

  test('BP-16: writes schema files to schemasDir', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const result = makeCompilationResult();
    writeCompilationUnits(layout, result.units, false);

    const schemaPath = join(layout.schemasDir, 'CounterViewModel.schema.json');
    expect(existsSync(schemaPath)).toBe(true);
    const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));
    expect(schema.className).toBe('CounterViewModel');
  });

  test('BP-16a: writes schema files to the unit schemaOutputPath', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const nestedSchemaPath = join(layout.schemasDir, 'viewmodels', 'CounterViewModel.schema.json');
    const result = makeCompilationResult({
      units: [
        {
          ...makeCompilationResult().units[0]!,
          schemaOutputPath: nestedSchemaPath,
        },
      ],
    });
    writeCompilationUnits(layout, result.units, false);

    expect(existsSync(nestedSchemaPath)).toBe(true);
    const schema = JSON.parse(readFileSync(nestedSchemaPath, 'utf-8'));
    expect(schema.className).toBe('CounterViewModel');
  });

  test('BP-17: writes source maps when enabled', () => {
    const config = makeConfig({
      build: { ...applyDefaults({}, '.').build, sourceMaps: true },
    });
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const units = [
      {
        ...makeCompilationResult().units[0]!,
        sourceMap: {
          sourceFile: '/src/CounterView.ts',
          targetFile: '/dist/qml/CounterView.qml',
          mappings: [],
        },
      },
    ];
    writeCompilationUnits(layout, units, true);

    const mapPath = join(layout.sourceMapsDir!, 'CounterView.qml.map');
    expect(existsSync(mapPath)).toBe(true);
  });
});

describe('writeEntryFile', () => {
  test('BP-17a: copies the entry file into the product layout', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    const sourceEntry = join(TMP_DIR, 'source-entry.ts');
    rmSync(sourceEntry, { force: true });
    writeFileSync(sourceEntry, 'export const boot = true;\n', 'utf-8');

    writeEntryFile(layout, sourceEntry);

    expect(existsSync(layout.entryFile)).toBe(true);
    expect(readFileSync(layout.entryFile, 'utf-8')).toContain('boot = true');
  });
});

describe('writeEventBindings', () => {
  test('BP-18: writes event-bindings.json', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    materializeLayout(layout);

    writeEventBindings(layout, { commands: [], effects: [] });

    expect(existsSync(layout.eventBindings)).toBe(true);
    const content = JSON.parse(readFileSync(layout.eventBindings, 'utf-8'));
    expect(content).toEqual({ commands: [], effects: [] });
  });
});

describe('V2 ProductLayout', () => {
  // PL-01
  test('PL-01: attachModuleDir adds moduleDir for V2 with ViewModels', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const meta = {
      moduleUri: 'TestApp.ViewModels',
      versionMajor: 1,
      versionMinor: 0,
      versionString: '1.0',
      moduleRelDir: 'TestApp/ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
      typeNames: ['CounterViewModel'] as readonly string[],
    };
    const v2Layout = attachModuleDir(layout, meta);
    expect(v2Layout.moduleDir).toBe(join(TMP_DIR, 'qml', 'TestApp', 'ViewModels'));
  });

  // PL-02
  test('PL-02: V1 layout does not include moduleDir', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    expect(layout.moduleDir).toBeUndefined();
  });

  // PL-03
  test('PL-03: materializeLayout creates moduleDir when present', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const meta = {
      moduleUri: 'TestApp.ViewModels',
      versionMajor: 1,
      versionMinor: 0,
      versionString: '1.0',
      moduleRelDir: 'TestApp/ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
      typeNames: ['CounterViewModel'] as readonly string[],
    };
    const v2Layout = attachModuleDir(layout, meta);
    materializeLayout(v2Layout);
    expect(existsSync(v2Layout.moduleDir!)).toBe(true);
  });

  // PL-04
  test('PL-04: attachModuleDir returns undefined moduleDir when meta is undefined', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const v2Layout = attachModuleDir(layout, undefined);
    expect(v2Layout.moduleDir).toBeUndefined();
  });
});

describe('V2 BuildManifest', () => {
  test('BP-V2-03a: V2 manifest includes runtime and modules with portable paths', () => {
    const config = makeConfig({ runtime: 'v2' as const });
    const layout = createProductLayout(TMP_DIR, config);
    const result = makeCompilationResult();
    const meta = {
      moduleUri: 'TestApp.ViewModels',
      versionMajor: 1,
      versionMinor: 0,
      versionString: '1.0',
      moduleRelDir: 'TestApp/ViewModels',
      qmltypesFilename: 'testapp_viewmodels.qmltypes',
      typeNames: ['CounterViewModel'] as readonly string[],
    };
    const manifest = createManifest(layout, result, config, meta);

    expect(manifest.runtime).toBe('v2');
    expect(manifest.modules).toBeDefined();
    expect(manifest.modules).toHaveLength(1);
    const mod = manifest.modules![0]!;
    expect(mod.uri).toBe('TestApp.ViewModels');
    expect(mod.version).toBe('1.0');
    expect(mod.types).toEqual(['CounterViewModel']);
    expect(mod.qmldir).toBe('./qml/TestApp/ViewModels/qmldir');
    expect(mod.qmltypes).toBe('./qml/TestApp/ViewModels/testapp_viewmodels.qmltypes');
  });

  test('BP-V2-03b: V1 manifest has no runtime or modules', () => {
    const config = makeConfig();
    const layout = createProductLayout(TMP_DIR, config);
    const result = makeCompilationResult();
    const manifest = createManifest(layout, result, config);

    expect(manifest.runtime).toBeUndefined();
    expect(manifest.modules).toBeUndefined();
  });

  test('BP-V2-06a: V2 manifest with no ViewModels has empty modules', () => {
    const config = makeConfig({ runtime: 'v2' as const });
    const layout = createProductLayout(TMP_DIR, config);
    const result = makeCompilationResult();
    const manifest = createManifest(layout, result, config, undefined);

    expect(manifest.runtime).toBe('v2');
    expect(manifest.modules).toEqual([]);
  });
});
