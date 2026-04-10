import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  checkQtVersionCompatibility,
  createPackageResolver,
} from '../../src/build/package-resolver.js';

const TMP_DIR = resolve(__dirname, '.tmp-package-resolver');

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

function createPkgProject(): string {
  const projectDir = join(TMP_DIR, 'pkg-project');
  const qmltsDir = join(projectDir, 'node_modules', '@qmlts');

  // @qmlts/charts — has qmlts.manifest.json + qml dir
  const chartsDir = join(qmltsDir, 'charts');
  mkdirSync(join(chartsDir, 'qml'), { recursive: true });
  mkdirSync(join(chartsDir, 'lib'), { recursive: true });
  mkdirSync(join(chartsDir, 'dsl'), { recursive: true });
  writeFileSync(
    join(chartsDir, 'package.json'),
    JSON.stringify({ name: '@qmlts/charts', version: '1.2.0' }),
  );
  writeFileSync(
    join(chartsDir, 'qmlts.manifest.json'),
    JSON.stringify({
      qmlModules: ['QtCharts'],
      qmlImportPath: './qml',
      nativeLib: {
        win32: './lib/charts.dll',
        linux: './lib/libcharts.so',
        darwin: './lib/libcharts.dylib',
      },
      dslEntry: './dsl/index.ts',
      minQtVersion: '6.5.0',
    }),
  );
  writeFileSync(join(chartsDir, 'lib', 'charts.dll'), '');
  writeFileSync(join(chartsDir, 'lib', 'libcharts.so'), '');
  writeFileSync(join(chartsDir, 'lib', 'libcharts.dylib'), '');
  writeFileSync(join(chartsDir, 'dsl', 'index.ts'), 'export const chartsDsl = true;\n');

  // @qmlts/widgets — has qmlts.manifest.json, no qml dir
  const widgetsDir = join(qmltsDir, 'widgets');
  mkdirSync(widgetsDir, { recursive: true });
  writeFileSync(
    join(widgetsDir, 'package.json'),
    JSON.stringify({ name: '@qmlts/widgets', version: '0.3.1' }),
  );
  writeFileSync(
    join(widgetsDir, 'qmlts.manifest.json'),
    JSON.stringify({ qmlModules: ['QtWidgets'], minQtVersion: '6.8.0' }),
  );

  // @qmlts/no-manifest — no qmlts manifest at all
  const noManifestDir = join(qmltsDir, 'no-manifest');
  mkdirSync(noManifestDir, { recursive: true });
  writeFileSync(
    join(noManifestDir, 'package.json'),
    JSON.stringify({ name: '@qmlts/no-manifest', version: '0.1.0' }),
  );

  // @qmlts/pkgjson-manifest — manifest via package.json qmlts field
  const pkgjsonDir = join(qmltsDir, 'pkgjson-manifest');
  mkdirSync(join(pkgjsonDir, 'qml'), { recursive: true });
  writeFileSync(
    join(pkgjsonDir, 'package.json'),
    JSON.stringify({
      name: '@qmlts/pkgjson-manifest',
      version: '2.0.0',
      qmlts: {
        qmlModules: ['CustomModule'],
        qmlImportPath: './qml',
        minQtVersion: '6.2.0',
      },
    }),
  );

  return projectDir;
}

describe('PackageResolver', () => {
  const resolver = createPackageResolver();

  // ─── BP-41: Resolve zero packages ────────────────────────
  test('BP-41: returns empty result when no @qmlts packages exist', async () => {
    const emptyDir = join(TMP_DIR, 'empty-project');
    mkdirSync(emptyDir, { recursive: true });
    const result = await resolver.resolve(emptyDir);
    expect(result.packages).toHaveLength(0);
    expect(result.qmlImportPaths).toHaveLength(0);
    expect(result.nativeLibPaths).toHaveLength(0);
  });

  // ─── BP-42: Resolve multiple packages ────────────────────
  test('BP-42: resolves multiple @qmlts packages from node_modules', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);

    expect(result.packages.length).toBeGreaterThanOrEqual(3);

    const names = result.packages.map((p) => p.name);
    expect(names).toContain('@qmlts/charts');
    expect(names).toContain('@qmlts/widgets');
    expect(names).toContain('@qmlts/pkgjson-manifest');
    expect(names).not.toContain('@qmlts/no-manifest');
  });

  // ─── BP-43: Manifest parsing (qmlts.manifest.json) ──────
  test('BP-43: parses qmlts.manifest.json correctly', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);
    const charts = result.packages.find((p) => p.name === '@qmlts/charts');

    expect(charts).toBeDefined();
    expect(charts!.version).toBe('1.2.0');
    expect(charts!.manifest.qmlModules).toEqual(['QtCharts']);
    expect(charts!.manifest.dslEntry).toBe('./dsl/index.ts');
    expect(charts!.manifest.minQtVersion).toBe('6.5.0');
    expect(charts!.manifest.nativeLib).toBeDefined();
    expect(charts!.manifest.qmlImportPath).toBe('./qml');
    expect(charts!.qmlImportPath).toBe(resolve(charts!.dir, 'qml'));
    expect(charts!.dslEntryPath).toBe(resolve(charts!.dir, 'dsl', 'index.ts'));
  });

  // ─── BP-44: Fallback to package.json qmlts field ─────────
  test('BP-44: falls back to package.json qmlts field', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);
    const pkg = result.packages.find((p) => p.name === '@qmlts/pkgjson-manifest');

    expect(pkg).toBeDefined();
    expect(pkg!.version).toBe('2.0.0');
    expect(pkg!.manifest.qmlModules).toEqual(['CustomModule']);
    expect(pkg!.manifest.minQtVersion).toBe('6.2.0');
  });

  // ─── BP-45: Silently skip packages without manifest ──────
  test('BP-45: silently skips packages without qmlts manifest', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);
    const names = result.packages.map((p) => p.name);
    expect(names).not.toContain('@qmlts/no-manifest');
  });

  // ─── BP-46: QML import path merging ──────────────────────
  test('BP-46: merges QML import paths from packages', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);

    // charts and pkgjson-manifest both have qmlImportPath with existing dirs
    expect(result.qmlImportPaths.length).toBeGreaterThanOrEqual(2);
    for (const p of result.qmlImportPaths) {
      expect(typeof p).toBe('string');
      expect(p.length).toBeGreaterThan(0);
    }
  });

  test('BP-46a: resolves DSL entry paths when the target file exists', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);
    const charts = result.packages.find((p) => p.name === '@qmlts/charts');

    expect(charts?.dslEntryPath).toBeDefined();
    expect(charts?.dslEntryPath).toBe(resolve(charts!.dir, 'dsl', 'index.ts'));
  });

  // ─── BP-47: Native lib path handling ─────────────────────
  test('BP-47: collects native lib paths for current platform', async () => {
    const projectDir = createPkgProject();
    const result = await resolver.resolve(projectDir);
    // charts has nativeLib for all platforms; widgets does not
    expect(result.nativeLibPaths.length).toBeGreaterThanOrEqual(1);
  });

  test('BP-47a: skips missing native lib paths', async () => {
    const projectDir = createPkgProject();
    const missingDir = join(projectDir, 'node_modules', '@qmlts', 'missing-native');
    mkdirSync(missingDir, { recursive: true });
    writeFileSync(
      join(missingDir, 'package.json'),
      JSON.stringify({ name: '@qmlts/missing-native', version: '0.0.1' }),
    );
    writeFileSync(
      join(missingDir, 'qmlts.manifest.json'),
      JSON.stringify({
        nativeLib: {
          win32: './lib/missing.dll',
          linux: './lib/libmissing.so',
          darwin: './lib/libmissing.dylib',
        },
      }),
    );

    const result = await resolver.resolve(projectDir);

    expect(result.nativeLibPaths.some((path) => path.includes('missing-native'))).toBe(false);
  });

  // ─── BP-48: resolvePackage returns undefined for no manifest ─
  test('BP-48: resolvePackage returns undefined for package without manifest', async () => {
    const projectDir = createPkgProject();
    const noManifestDir = join(projectDir, 'node_modules', '@qmlts', 'no-manifest');
    const manifest = await resolver.resolvePackage(noManifestDir);
    expect(manifest).toBeUndefined();
  });

  // ─── BP-49: resolvePackage returns manifest for valid package ─
  test('BP-49: resolvePackage returns manifest for package with qmlts.manifest.json', async () => {
    const projectDir = createPkgProject();
    const chartsDir = join(projectDir, 'node_modules', '@qmlts', 'charts');
    const manifest = await resolver.resolvePackage(chartsDir);
    expect(manifest).toBeDefined();
    expect(manifest!.qmlModules).toEqual(['QtCharts']);
  });

  // ─── BP-50: Returns empty when no node_modules ───────────
  test('BP-50: returns empty result for non-existent directory', async () => {
    const result = await resolver.resolve(join(TMP_DIR, 'nonexistent'));
    expect(result.packages).toHaveLength(0);
  });
});

describe('checkQtVersionCompatibility', () => {
  // ─── BP-51: No warnings when compatible ──────────────────
  test('BP-51: returns no warnings when all packages are compatible', () => {
    const packages = [
      {
        name: '@qmlts/charts',
        version: '1.0.0',
        dir: '/fake',
        manifest: { minQtVersion: '6.5.0' },
      },
      {
        name: '@qmlts/widgets',
        version: '1.0.0',
        dir: '/fake',
        manifest: { minQtVersion: '6.8.0' },
      },
    ];
    const warnings = checkQtVersionCompatibility(packages, '6.11.0');
    expect(warnings).toHaveLength(0);
  });

  // ─── BP-52: Warning when incompatible ────────────────────
  test('BP-52: returns warnings when package requires newer Qt', () => {
    const packages = [
      {
        name: '@qmlts/future-pkg',
        version: '1.0.0',
        dir: '/fake',
        manifest: { minQtVersion: '7.0.0' },
      },
    ];
    const warnings = checkQtVersionCompatibility(packages, '6.11.0');
    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain('@qmlts/future-pkg');
    expect(warnings[0]).toContain('7.0.0');
    expect(warnings[0]).toContain('6.11.0');
  });

  // ─── BP-53: Skips packages without minQtVersion ──────────
  test('BP-53: skips packages without minQtVersion', () => {
    const packages = [
      {
        name: '@qmlts/no-version',
        version: '1.0.0',
        dir: '/fake',
        manifest: {},
      },
    ];
    const warnings = checkQtVersionCompatibility(packages, '6.11.0');
    expect(warnings).toHaveLength(0);
  });
});
