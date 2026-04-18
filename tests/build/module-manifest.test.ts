import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { QmltsModuleManifest } from '../../src/build/build-types.js';
import {
  generateModuleManifest,
  readModuleManifest,
  writeModuleManifest,
} from '../../src/build/module-manifest.js';
import type { ModuleMeta } from '../../src/build/module-meta.js';

const TMP_DIR = join(import.meta.dir, '__tmp_module_manifest__');

beforeAll(() => {
  mkdirSync(TMP_DIR, { recursive: true });
});

afterAll(() => {
  rmSync(TMP_DIR, { recursive: true, force: true });
});

function createModuleMeta(): ModuleMeta {
  return {
    moduleUri: 'Com.Example.ViewModels',
    moduleRelDir: 'Com/Example/ViewModels',
    qmltypesFilename: 'viewmodels.qmltypes',
    versionString: '1.0',
    versionMajor: 1,
    versionMinor: 0,
    typeNames: new Set(['CounterViewModel', 'LoginViewModel']),
  };
}

describe('Module Manifest', () => {
  test('MM-V2-01: generateModuleManifest creates valid manifest structure', () => {
    const meta = createModuleMeta();
    const manifest = generateModuleManifest(
      meta,
      '/project/dist',
      ['CounterViewModel', 'LoginViewModel'],
      'win32-x64',
      '/project/dist/qmlts_host.win32-x64.node',
    );

    expect(manifest.modules).toHaveLength(1);
    expect(manifest.modules[0]!.uri).toBe('Com.Example.ViewModels');
    expect(manifest.modules[0]!.version).toBe('1.0');
    expect(manifest.modules[0]!.types.native).toEqual(['CounterViewModel', 'LoginViewModel']);
    expect(manifest.modules[0]!.types.qml).toEqual(['CounterViewModel', 'LoginViewModel']);
    expect(manifest.modules[0]!.qmldir).toBe('./qml/Com/Example/ViewModels/qmldir');
    expect(manifest.modules[0]!.qmltypes).toBe('./qml/Com/Example/ViewModels/viewmodels.qmltypes');
    expect(manifest.native).toBeDefined();
    expect(manifest.native!['win32-x64']).toBe('./qmlts_host.win32-x64.node');
  });

  test('MM-V2-02: generateModuleManifest handles empty qmlTypes', () => {
    const meta = createModuleMeta();
    const manifest = generateModuleManifest(
      meta,
      '/project/dist',
      [],
      'linux-x64',
      '/project/dist/qmlts_host.linux-x64.node',
    );

    expect(manifest.modules[0]!.types.qml).toEqual([]);
    expect(manifest.modules[0]!.types.native).toEqual(['CounterViewModel', 'LoginViewModel']);
    expect(manifest.native!['linux-x64']).toBe('./qmlts_host.linux-x64.node');
  });

  test('MM-V2-03: writeModuleManifest writes valid JSON file', () => {
    const outDir = join(TMP_DIR, 'write-test');
    mkdirSync(outDir, { recursive: true });

    const manifest: QmltsModuleManifest = {
      modules: [
        {
          uri: 'Com.Test.ViewModels',
          version: '2.0',
          types: { native: ['TestVM'], qml: ['TestVM'] },
          qmldir: './qml/Com/Test/ViewModels/qmldir',
          qmltypes: './qml/Com/Test/ViewModels/test.qmltypes',
        },
      ],
      native: { 'win32-x64': './qmlts_host.win32-x64.node' },
    };

    const manifestPath = writeModuleManifest(outDir, manifest);

    expect(existsSync(manifestPath)).toBe(true);
    const content = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    expect(content.modules).toHaveLength(1);
    expect(content.modules[0].uri).toBe('Com.Test.ViewModels');
    expect(content.native['win32-x64']).toBe('./qmlts_host.win32-x64.node');
  });

  test('MM-V2-04: readModuleManifest reads valid manifest', () => {
    const pkgDir = join(TMP_DIR, 'read-test');
    mkdirSync(pkgDir, { recursive: true });

    const manifest: QmltsModuleManifest = {
      modules: [
        {
          uri: 'Com.Lib.ViewModels',
          version: '1.0',
          types: { native: ['LibVM'], qml: ['LibVM'] },
          qmldir: './qml/Com/Lib/ViewModels/qmldir',
          qmltypes: './qml/Com/Lib/ViewModels/lib.qmltypes',
        },
      ],
      native: { 'darwin-x64': './qmlts_host.darwin-x64.node' },
    };

    writeFileSync(join(pkgDir, 'qmlts.module.json'), JSON.stringify(manifest), 'utf-8');

    const result = readModuleManifest(pkgDir);
    expect(result).toBeDefined();
    expect(result!.modules).toHaveLength(1);
    expect(result!.modules[0]!.uri).toBe('Com.Lib.ViewModels');
  });

  test('MM-V2-05: readModuleManifest returns undefined for missing file', () => {
    const pkgDir = join(TMP_DIR, 'no-manifest');
    mkdirSync(pkgDir, { recursive: true });

    const result = readModuleManifest(pkgDir);
    expect(result).toBeUndefined();
  });

  test('MM-V2-06: readModuleManifest returns undefined for invalid JSON', () => {
    const pkgDir = join(TMP_DIR, 'bad-json');
    mkdirSync(pkgDir, { recursive: true });
    writeFileSync(join(pkgDir, 'qmlts.module.json'), 'not-json!!!', 'utf-8');

    const result = readModuleManifest(pkgDir);
    expect(result).toBeUndefined();
  });

  test('MM-V2-07: readModuleManifest returns undefined for invalid structure', () => {
    const pkgDir = join(TMP_DIR, 'bad-structure');
    mkdirSync(pkgDir, { recursive: true });
    writeFileSync(join(pkgDir, 'qmlts.module.json'), JSON.stringify({ noModules: true }), 'utf-8');

    const result = readModuleManifest(pkgDir);
    expect(result).toBeUndefined();
  });

  test('MM-V2-08: readModuleManifest rejects modules with missing required fields', () => {
    const pkgDir = join(TMP_DIR, 'bad-module');
    mkdirSync(pkgDir, { recursive: true });
    writeFileSync(
      join(pkgDir, 'qmlts.module.json'),
      JSON.stringify({ modules: [{ uri: 'Test' }] }),
      'utf-8',
    );

    const result = readModuleManifest(pkgDir);
    expect(result).toBeUndefined();
  });
});
