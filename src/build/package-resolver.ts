import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type {
  QmltsPackageManifest,
  ResolvedPackageInfo,
  ResolvedPackages,
  ResolvedQmltsModule,
} from './build-types.js';
import { readModuleManifest } from './module-manifest.js';
import { currentPlatform } from './product-layout.js';

// ─── Types ──────────────────────────────────────────────────

export interface PackageResolver {
  resolve(projectDir: string): Promise<ResolvedPackages>;
  resolvePackage(packageDir: string): Promise<QmltsPackageManifest | undefined>;
  resolveModuleManifest(packageDir: string): Promise<ResolvedQmltsModule[]>;
}

// ─── Factory ────────────────────────────────────────────────

export function createPackageResolver(): PackageResolver {
  return {
    async resolve(projectDir: string): Promise<ResolvedPackages> {
      const nodeModules = join(projectDir, 'node_modules', '@qmlts');
      if (!existsSync(nodeModules) || !statSync(nodeModules).isDirectory()) {
        return emptyResult();
      }

      const entries = readdirSync(nodeModules, { withFileTypes: true });
      const packages: ResolvedPackageInfo[] = [];
      const allModules: ResolvedQmltsModule[] = [];

      for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const packageDir = join(nodeModules, entry.name);
        const manifest = await this.resolvePackage(packageDir);
        if (!manifest) continue;

        const pkgJson = readPackageJson(packageDir);
        const moduleManifest = readModuleManifest(packageDir);

        const modules = moduleManifest
          ? resolveModulesFromManifest(`@qmlts/${entry.name}`, resolve(packageDir), moduleManifest)
          : [];
        allModules.push(...modules);

        packages.push({
          name: `@qmlts/${entry.name}`,
          version: (pkgJson?.version as string) ?? '0.0.0',
          dir: resolve(packageDir),
          manifest,
          moduleManifest,
        });
      }

      const base = mergePackages(packages);
      return { ...base, modules: allModules.length > 0 ? allModules : undefined };
    },

    async resolvePackage(packageDir: string): Promise<QmltsPackageManifest | undefined> {
      // Try qmlts.manifest.json first
      const manifestPath = join(packageDir, 'qmlts.manifest.json');
      if (existsSync(manifestPath)) {
        return parseManifestFile(manifestPath);
      }

      // Fallback: package.json "qmlts" field
      const pkgJson = readPackageJson(packageDir);
      if (pkgJson?.qmlts && typeof pkgJson.qmlts === 'object') {
        return pkgJson.qmlts as QmltsPackageManifest;
      }

      // Fallback: if qmlts.module.json exists, synthesize a minimal V1 manifest
      if (existsSync(join(packageDir, 'qmlts.module.json'))) {
        return { qmlImportPath: './qml' };
      }

      return undefined;
    },

    async resolveModuleManifest(packageDir: string): Promise<ResolvedQmltsModule[]> {
      const manifest = readModuleManifest(packageDir);
      if (!manifest) return [];
      const pkgJson = readPackageJson(packageDir);
      const packageName = (pkgJson?.name as string) ?? 'unknown';
      return resolveModulesFromManifest(packageName, resolve(packageDir), manifest);
    },
  };
}

// ─── Helpers ────────────────────────────────────────────────

function emptyResult(): ResolvedPackages {
  return { packages: [], qmlImportPaths: [], nativeLibPaths: [] };
}

function readPackageJson(dir: string): Record<string, unknown> | undefined {
  const pkgPath = join(dir, 'package.json');
  if (!existsSync(pkgPath)) return undefined;
  try {
    return JSON.parse(readFileSync(pkgPath, 'utf-8'));
  } catch {
    return undefined;
  }
}

function parseManifestFile(path: string): QmltsPackageManifest | undefined {
  try {
    return JSON.parse(readFileSync(path, 'utf-8'));
  } catch {
    return undefined;
  }
}

function currentPlatformKey(): 'win32' | 'linux' | 'darwin' {
  if (process.platform === 'win32') return 'win32';
  if (process.platform === 'darwin') return 'darwin';
  return 'linux';
}

function mergePackages(packages: readonly ResolvedPackageInfo[]): ResolvedPackages {
  const qmlImportPaths: string[] = [];
  const nativeLibPaths: string[] = [];
  const seenImportPaths = new Set<string>();
  const seenNativeLibPaths = new Set<string>();
  const platformKey = currentPlatformKey();
  const resolvedPackages: ResolvedPackageInfo[] = [];

  for (const pkg of packages) {
    const m = pkg.manifest;
    let qmlImportPath: string | undefined;
    let nativeLibPath: string | undefined;
    let dslEntryPath: string | undefined;

    if (m.qmlImportPath) {
      const importPath = resolve(pkg.dir, m.qmlImportPath);
      if (existsSync(importPath)) {
        qmlImportPath = importPath;
        if (!seenImportPaths.has(importPath)) {
          seenImportPaths.add(importPath);
          qmlImportPaths.push(importPath);
        }
      }
    }

    if (m.nativeLib) {
      const nativeLibRelative = m.nativeLib[platformKey];
      if (nativeLibRelative) {
        const resolvedNativeLibPath = resolve(pkg.dir, nativeLibRelative);
        if (existsSync(resolvedNativeLibPath)) {
          nativeLibPath = resolvedNativeLibPath;
          if (!seenNativeLibPaths.has(resolvedNativeLibPath)) {
            seenNativeLibPaths.add(resolvedNativeLibPath);
            nativeLibPaths.push(resolvedNativeLibPath);
          }
        }
      }
    }

    if (m.dslEntry) {
      const resolvedDslEntryPath = resolve(pkg.dir, m.dslEntry);
      if (existsSync(resolvedDslEntryPath)) {
        dslEntryPath = resolvedDslEntryPath;
      }
    }

    resolvedPackages.push({
      ...pkg,
      qmlImportPath,
      nativeLibPath,
      dslEntryPath,
    });
  }

  return { packages: resolvedPackages, qmlImportPaths, nativeLibPaths };
}

export function checkQtVersionCompatibility(
  packages: readonly ResolvedPackageInfo[],
  currentQtVersion: string,
): string[] {
  const warnings: string[] = [];

  for (const pkg of packages) {
    if (!pkg.manifest.minQtVersion) continue;

    if (compareVersions(currentQtVersion, pkg.manifest.minQtVersion) < 0) {
      warnings.push(
        `Package ${pkg.name} requires Qt >= ${pkg.manifest.minQtVersion}, but project targets ${currentQtVersion}`,
      );
    }
  }

  return warnings;
}

function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const va = pa[i] ?? 0;
    const vb = pb[i] ?? 0;
    if (va !== vb) return va - vb;
  }
  return 0;
}

// ─── V2 module resolution helpers ───────────────────────────

function resolveModulesFromManifest(
  packageName: string,
  packageDir: string,
  manifest: import('./build-types.js').QmltsModuleManifest,
): ResolvedQmltsModule[] {
  const platform = currentPlatform();
  const nativeArtifactRelPath = manifest.native?.[platform];
  const nativeArtifact = nativeArtifactRelPath
    ? resolve(packageDir, nativeArtifactRelPath)
    : undefined;

  return manifest.modules.map((entry) => ({
    packageName,
    packageDir,
    uri: entry.uri,
    version: entry.version,
    types: {
      native: [...entry.types.native],
      qml: [...entry.types.qml],
    },
    qmldir: entry.qmldir ? resolve(packageDir, entry.qmldir) : undefined,
    qmltypes: entry.qmltypes ? resolve(packageDir, entry.qmltypes) : undefined,
    nativeArtifact,
  }));
}

/** QMLTS-B004: Validate that no two packages register the same module URI. */
export function validateModuleUris(
  modules: readonly ResolvedQmltsModule[],
  projectModuleUri?: string,
): string[] {
  const uriToPackage = new Map<string, string>();
  const errors: string[] = [];

  if (projectModuleUri) {
    uriToPackage.set(projectModuleUri, '<project>');
  }

  for (const mod of modules) {
    const existing = uriToPackage.get(mod.uri);
    if (existing) {
      errors.push(
        `Duplicate module URI "${mod.uri}" registered by both "${existing}" and "${mod.packageName}"`,
      );
    } else {
      uriToPackage.set(mod.uri, mod.packageName);
    }
  }

  return errors;
}

/** QMLTS-B005: Validate that all declared native artifacts exist on the current platform. */
export function validatePlatformArtifacts(modules: readonly ResolvedQmltsModule[]): string[] {
  const errors: string[] = [];
  const platform = currentPlatform();

  for (const mod of modules) {
    if (mod.types.native.length === 0) {
      continue;
    }

    if (!mod.nativeArtifact) {
      errors.push(
        `Package "${mod.packageName}" declares native types for module "${mod.uri}" but no binary is declared for platform "${platform}"`,
      );
      continue;
    }

    if (!existsSync(mod.nativeArtifact)) {
      errors.push(
        `Package "${mod.packageName}" declares native types for module "${mod.uri}" but no binary found for platform "${platform}" at ${mod.nativeArtifact}`,
      );
    }
  }

  return errors;
}
