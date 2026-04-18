import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { QmltsModuleManifest, ResolvedQmltsModule } from '../../src/build/build-types.js';
import {
  createPackageResolver,
  validateModuleUris,
  validatePlatformArtifacts,
} from '../../src/build/package-resolver.js';

const TMP_DIR = join(import.meta.dir, '__tmp_pkg_discovery__');

beforeAll(() => {
  rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(TMP_DIR, { recursive: true });
});

afterAll(() => {
  rmSync(TMP_DIR, { recursive: true, force: true });
});

function createModuleManifest(
  uri: string,
  platform?: string,
  nativePath?: string,
): QmltsModuleManifest {
  return {
    modules: [
      {
        uri,
        version: '1.0',
        types: { native: ['TestVM'], qml: ['TestVM'] },
        qmldir: './qml/Test/qmldir',
        qmltypes: './qml/Test/test.qmltypes',
      },
    ],
    native: platform && nativePath ? { [platform]: nativePath } : undefined,
  };
}

function setupPackage(
  projectDir: string,
  packageName: string,
  opts: {
    manifest?: QmltsModuleManifest;
    pkgManifest?: Record<string, unknown>;
    packageJson?: Record<string, unknown>;
  } = {},
): string {
  const pkgDir = join(projectDir, 'node_modules', '@qmlts', packageName);
  mkdirSync(pkgDir, { recursive: true });

  if (opts.packageJson) {
    writeFileSync(join(pkgDir, 'package.json'), JSON.stringify(opts.packageJson), 'utf-8');
  } else {
    writeFileSync(
      join(pkgDir, 'package.json'),
      JSON.stringify({ name: `@qmlts/${packageName}`, version: '1.0.0' }),
      'utf-8',
    );
  }

  if (opts.manifest) {
    writeFileSync(join(pkgDir, 'qmlts.module.json'), JSON.stringify(opts.manifest), 'utf-8');
  }

  if (opts.pkgManifest) {
    writeFileSync(join(pkgDir, 'qmlts.manifest.json'), JSON.stringify(opts.pkgManifest), 'utf-8');
  }

  return pkgDir;
}

describe('V2 Package Discovery', () => {
  test('PD-01: resolveModuleManifest returns modules from valid qmlts.module.json', async () => {
    const resolver = createPackageResolver();
    const pkgDir = join(TMP_DIR, 'pd01-pkg');
    mkdirSync(pkgDir, { recursive: true });

    writeFileSync(
      join(pkgDir, 'package.json'),
      JSON.stringify({ name: '@qmlts/test-lib', version: '1.0.0' }),
      'utf-8',
    );
    writeFileSync(
      join(pkgDir, 'qmlts.module.json'),
      JSON.stringify(createModuleManifest('Com.Test.ViewModels')),
      'utf-8',
    );

    const modules = await resolver.resolveModuleManifest(pkgDir);
    expect(modules).toHaveLength(1);
    expect(modules[0]!.uri).toBe('Com.Test.ViewModels');
    expect(modules[0]!.version).toBe('1.0');
  });

  test('PD-02: resolveModuleManifest returns empty for missing manifest', async () => {
    const resolver = createPackageResolver();
    const pkgDir = join(TMP_DIR, 'pd02-pkg');
    mkdirSync(pkgDir, { recursive: true });

    const modules = await resolver.resolveModuleManifest(pkgDir);
    expect(modules).toHaveLength(0);
  });

  test('PD-03: resolve() discovers V2 modules alongside V1 packages', async () => {
    const projectDir = join(TMP_DIR, 'pd03-project');
    mkdirSync(projectDir, { recursive: true });

    setupPackage(projectDir, 'charts', {
      manifest: createModuleManifest('Com.Charts.ViewModels'),
      pkgManifest: { qmlImportPath: './qml' },
    });

    const resolver = createPackageResolver();
    const resolved = await resolver.resolve(projectDir);

    expect(resolved.packages).toHaveLength(1);
    expect(resolved.packages[0]!.moduleManifest).toBeDefined();
    expect(resolved.modules).toBeDefined();
    expect(resolved.modules).toHaveLength(1);
    expect(resolved.modules![0]!.uri).toBe('Com.Charts.ViewModels');
  });

  test('PD-04: resolve() synthesizes V1 manifest for packages with only qmlts.module.json', async () => {
    const projectDir = join(TMP_DIR, 'pd04-project');
    mkdirSync(projectDir, { recursive: true });

    // Package with qmlts.module.json but no qmlts.manifest.json
    setupPackage(projectDir, 'widgets', {
      manifest: createModuleManifest('Com.Widgets.ViewModels'),
    });

    const resolver = createPackageResolver();
    const resolved = await resolver.resolve(projectDir);

    expect(resolved.packages).toHaveLength(1);
    expect(resolved.packages[0]!.manifest).toBeDefined();
    expect(resolved.packages[0]!.manifest.qmlImportPath).toBe('./qml');
  });

  test('PD-05: resolve() returns no modules when no V2 packages exist', async () => {
    const projectDir = join(TMP_DIR, 'pd05-project');
    mkdirSync(projectDir, { recursive: true });

    setupPackage(projectDir, 'old-lib', {
      pkgManifest: { qmlImportPath: './qml' },
    });

    const resolver = createPackageResolver();
    const resolved = await resolver.resolve(projectDir);

    expect(resolved.packages).toHaveLength(1);
    expect(resolved.modules).toBeUndefined();
  });
});

describe('Module URI Validation (QMLTS-B004)', () => {
  test('PD-06: validateModuleUris detects duplicate URIs between packages', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/lib-a',
        packageDir: '/lib-a',
        uri: 'Com.Shared.ViewModels',
        version: '1.0',
        types: { native: ['SharedVM'], qml: ['SharedVM'] },
      },
      {
        packageName: '@qmlts/lib-b',
        packageDir: '/lib-b',
        uri: 'Com.Shared.ViewModels',
        version: '1.0',
        types: { native: ['OtherVM'], qml: ['OtherVM'] },
      },
    ];

    const errors = validateModuleUris(modules);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('Duplicate module URI');
    expect(errors[0]).not.toContain('QMLTS-B004');
    expect(errors[0]).toContain('Com.Shared.ViewModels');
    expect(errors[0]).toContain('@qmlts/lib-a');
    expect(errors[0]).toContain('@qmlts/lib-b');
  });

  test('PD-07: validateModuleUris detects conflict with project URI', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/lib-a',
        packageDir: '/lib-a',
        uri: 'MyApp.ViewModels',
        version: '1.0',
        types: { native: ['VM'], qml: ['VM'] },
      },
    ];

    const errors = validateModuleUris(modules, 'MyApp.ViewModels');
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('Duplicate module URI');
    expect(errors[0]).not.toContain('QMLTS-B004');
    expect(errors[0]).toContain('<project>');
  });

  test('PD-08: validateModuleUris passes for unique URIs', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/lib-a',
        packageDir: '/lib-a',
        uri: 'Com.Alpha.ViewModels',
        version: '1.0',
        types: { native: ['AlphaVM'], qml: ['AlphaVM'] },
      },
      {
        packageName: '@qmlts/lib-b',
        packageDir: '/lib-b',
        uri: 'Com.Beta.ViewModels',
        version: '1.0',
        types: { native: ['BetaVM'], qml: ['BetaVM'] },
      },
    ];

    const errors = validateModuleUris(modules, 'MyApp.ViewModels');
    expect(errors).toHaveLength(0);
  });
});

describe('Platform Artifact Validation (QMLTS-B005)', () => {
  test('PD-09: validatePlatformArtifacts reports missing native binary', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/native-lib',
        packageDir: '/fake-pkg',
        uri: 'Com.Native.ViewModels',
        version: '1.0',
        types: { native: ['NativeVM'], qml: ['NativeVM'] },
        nativeArtifact: '/nonexistent/path/to/lib.node',
      },
    ];

    const errors = validatePlatformArtifacts(modules);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('no binary found');
    expect(errors[0]).not.toContain('QMLTS-B005');
    expect(errors[0]).toContain('@qmlts/native-lib');
  });

  test('PD-09b: validatePlatformArtifacts reports native types with no platform binary entry', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/native-lib',
        packageDir: '/fake-pkg',
        uri: 'Com.Native.ViewModels',
        version: '1.0',
        types: { native: ['NativeVM'], qml: ['NativeVM'] },
      },
    ];

    const errors = validatePlatformArtifacts(modules);
    expect(errors).toHaveLength(1);
    expect(errors[0]).toContain('no binary is declared');
    expect(errors[0]).not.toContain('QMLTS-B005');
  });

  test('PD-10: validatePlatformArtifacts passes when artifact exists', () => {
    const artifactDir = join(TMP_DIR, 'pd10-artifact');
    mkdirSync(artifactDir, { recursive: true });
    const artifactPath = join(artifactDir, 'qmlts_host.node');
    writeFileSync(artifactPath, 'fake-binary', 'utf-8');

    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/native-lib',
        packageDir: artifactDir,
        uri: 'Com.Native.ViewModels',
        version: '1.0',
        types: { native: ['NativeVM'], qml: ['NativeVM'] },
        nativeArtifact: artifactPath,
      },
    ];

    const errors = validatePlatformArtifacts(modules);
    expect(errors).toHaveLength(0);
  });

  test('PD-11: validatePlatformArtifacts skips modules without native artifacts', () => {
    const modules: ResolvedQmltsModule[] = [
      {
        packageName: '@qmlts/pure-qml-lib',
        packageDir: '/pure-lib',
        uri: 'Com.Pure.ViewModels',
        version: '1.0',
        types: { native: [], qml: ['PureVM'] },
      },
    ];

    const errors = validatePlatformArtifacts(modules);
    expect(errors).toHaveLength(0);
  });
});
