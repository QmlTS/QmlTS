import { describe, expect, test } from 'bun:test';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { QmltsModuleManifest, ResolvedQmltsModule } from '../../src/build/build-types.js';
import { applyDefaults, DEFAULT_RUNTIME } from '../../src/build/config-defaults.js';
import type { QmltsConfig, ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { validateConfig } from '../../src/build/config-validator.js';
import {
  generateModuleManifest,
  readModuleManifest,
  writeModuleManifest,
} from '../../src/build/module-manifest.js';
import type { ModuleMeta } from '../../src/build/module-meta.js';
import {
  deriveModuleMeta,
  deriveModuleRelDir,
  deriveModuleUri,
  deriveQmltypesFilename,
} from '../../src/build/module-meta.js';
import { validateModuleUris, validatePlatformArtifacts } from '../../src/build/package-resolver.js';

const TMP_DIR = join(import.meta.dir, '__tmp_v2_contract__');

function cleanup() {
  rmSync(TMP_DIR, { recursive: true, force: true });
}

function ensureTmpDir() {
  cleanup();
  mkdirSync(TMP_DIR, { recursive: true });
}

describe('V2 Contract Tests', () => {
  // ─── CT-01 to CT-04: Config / Default contracts ──────────

  test('CT-01: V2 is the default runtime', () => {
    expect(DEFAULT_RUNTIME).toBe('v2');
  });

  test('CT-02: V2 config requires module when runtime explicitly set', () => {
    expect(() => validateConfig({ runtime: 'v2' })).toThrow();
  });

  test('CT-03: V2 config accepts module with valid prefix and version', () => {
    expect(() =>
      validateConfig({
        runtime: 'v2',
        module: { prefix: 'Com.Example', version: { major: 1, minor: 0 } },
      }),
    ).not.toThrow();
  });

  test('CT-04: Empty config resolves to V2 without requiring module at config time', () => {
    validateConfig({});
    const resolved = applyDefaults({}, '/project');
    expect(resolved.runtime).toBe('v2');
    expect(resolved.module).toBeUndefined();
  });

  // ─── CT-05 to CT-08: Module metadata derivation contracts ─

  test('CT-05: deriveModuleUri appends .ViewModels to prefix', () => {
    expect(deriveModuleUri('Com.Example')).toBe('Com.Example.ViewModels');
  });

  test('CT-06: deriveModuleRelDir converts dots to path separators', () => {
    expect(deriveModuleRelDir('Com.Example.ViewModels')).toBe('Com/Example/ViewModels');
  });

  test('CT-07: deriveQmltypesFilename uses module URI lowercase', () => {
    const filename = deriveQmltypesFilename('Com.Example.ViewModels');
    expect(filename).toMatch(/\.qmltypes$/);
    expect(filename.length).toBeGreaterThan(0);
  });

  test('CT-08: deriveModuleMeta produces consistent metadata', () => {
    const moduleConfig = { prefix: 'Com.Example', version: { major: 2, minor: 3 } };
    const schemas = [
      {
        className: 'CounterViewModel',
        properties: [],
        commands: [],
        effects: [],
        states: [],
        initialState: 'idle',
        lifecycle: { onMount: false, onUnmount: false },
      },
    ] as any[];

    const meta = deriveModuleMeta(moduleConfig, schemas);
    expect(meta).toBeDefined();
    expect(meta!.moduleUri).toBe('Com.Example.ViewModels');
    expect(meta!.versionMajor).toBe(2);
    expect(meta!.versionMinor).toBe(3);
    expect(meta!.typeNames).toContain('CounterViewModel');
  });

  // ─── CT-09 to CT-11: Module manifest contracts ───────────

  test('CT-09: Generated module manifest contains valid modules array', () => {
    const meta: ModuleMeta = {
      moduleUri: 'Com.Test.ViewModels',
      moduleRelDir: 'Com/Test/ViewModels',
      qmltypesFilename: 'viewmodels.qmltypes',
      versionString: '1.0',
      versionMajor: 1,
      versionMinor: 0,
      typeNames: new Set(['TestVM']),
    };

    const manifest = generateModuleManifest(
      meta,
      '/dist',
      ['TestVM'],
      'win32-x64',
      '/dist/qmlts_host.win32-x64.node',
    );

    expect(manifest.modules).toHaveLength(1);
    expect(manifest.modules[0]!.uri).toBe('Com.Test.ViewModels');
    expect(manifest.modules[0]!.types.native).toContain('TestVM');
  });

  test('CT-10: Module manifest round-trips through write/read', () => {
    ensureTmpDir();

    const meta: ModuleMeta = {
      moduleUri: 'Com.RoundTrip.ViewModels',
      moduleRelDir: 'Com/RoundTrip/ViewModels',
      qmltypesFilename: 'viewmodels.qmltypes',
      versionString: '1.0',
      versionMajor: 1,
      versionMinor: 0,
      typeNames: new Set(['RoundTripVM']),
    };

    const manifest = generateModuleManifest(
      meta,
      TMP_DIR,
      ['RoundTripVM'],
      'win32-x64',
      join(TMP_DIR, 'qmlts_host.win32-x64.node'),
    );

    writeModuleManifest(TMP_DIR, manifest);
    const read = readModuleManifest(TMP_DIR);

    expect(read).toBeDefined();
    expect(read!.modules[0]!.uri).toBe('Com.RoundTrip.ViewModels');
    expect(read!.modules[0]!.types.native).toContain('RoundTripVM');

    cleanup();
  });

  test('CT-11: Module manifest includes platform-specific native paths', () => {
    const meta: ModuleMeta = {
      moduleUri: 'Com.Native.ViewModels',
      moduleRelDir: 'Com/Native/ViewModels',
      qmltypesFilename: 'viewmodels.qmltypes',
      versionString: '1.0',
      versionMajor: 1,
      versionMinor: 0,
      typeNames: new Set(['NativeVM']),
    };

    const manifest = generateModuleManifest(
      meta,
      '/dist',
      ['NativeVM'],
      'linux-x64',
      '/dist/qmlts_host.linux-x64.node',
    );

    expect(manifest.native).toBeDefined();
    expect(manifest.native!['linux-x64']).toContain('qmlts_host');
  });

  // ─── CT-12 to CT-14: Duplicate URI / platform validation contracts ─

  test('CT-12: Duplicate module URI between packages is detected', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/a',
        packageDir: '/a',
        uri: 'Com.Shared.ViewModels',
        version: '1.0',
        types: { native: ['VM'], qml: ['VM'] },
      },
      {
        packageName: '@qmlts/b',
        packageDir: '/b',
        uri: 'Com.Shared.ViewModels',
        version: '1.0',
        types: { native: ['VM2'], qml: ['VM2'] },
      },
    ];

    const errors = validateModuleUris(modules);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain('QMLTS-B004');
  });

  test('CT-13: Duplicate module URI with project is detected', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/collision',
        packageDir: '/collision',
        uri: 'MyApp.ViewModels',
        version: '1.0',
        types: { native: ['VM'], qml: ['VM'] },
      },
    ];

    const errors = validateModuleUris(modules, 'MyApp.ViewModels');
    expect(errors.length).toBeGreaterThan(0);
  });

  test('CT-14: Missing platform binary is reported for native modules', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/native',
        packageDir: '/native',
        uri: 'Com.Native.ViewModels',
        version: '1.0',
        types: { native: ['NativeVM'], qml: [] },
        nativeArtifact: '/nonexistent/path/lib.node',
      },
    ];

    const errors = validatePlatformArtifacts(modules);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0]).toContain('QMLTS-B005');
  });

  // ─── CT-15 to CT-16: V1 backward compatibility contracts ──

  test('CT-15: V1 explicit config is still accepted and functional', () => {
    expect(() => validateConfig({ runtime: 'v1' })).not.toThrow();
    const resolved = applyDefaults({ runtime: 'v1' }, '/project');
    expect(resolved.runtime).toBe('v1');
    expect(resolved.module).toBeUndefined();
  });

  test('CT-16: V2 config with v1Compat flag is accepted', () => {
    expect(() =>
      validateConfig({
        runtime: 'v2',
        v1Compat: true,
        module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      }),
    ).not.toThrow();

    const resolved = applyDefaults(
      {
        runtime: 'v2',
        v1Compat: true,
        module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      },
      '/project',
    );
    expect(resolved.runtime).toBe('v2');
    expect(resolved.v1Compat).toBe(true);
    expect(resolved.module).toBeDefined();
  });
});
