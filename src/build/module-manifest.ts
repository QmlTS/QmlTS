import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { QmltsModuleManifest, QmltsModuleManifestEntry } from './build-types.js';
import type { PlatformTarget } from './config-types.js';
import type { ModuleMeta } from './module-meta.js';

export function generateModuleManifest(
  moduleMeta: ModuleMeta,
  outDir: string,
  qmlTypes: readonly string[],
  platform: PlatformTarget,
  hostLibPath: string,
): QmltsModuleManifest {
  const relDir = moduleMeta.moduleRelDir.split('/');
  const qmldirPath = `./${['qml', ...relDir, 'qmldir'].join('/')}`;
  const qmltypesPath = `./${['qml', ...relDir, moduleMeta.qmltypesFilename].join('/')}`;

  const entry: QmltsModuleManifestEntry = {
    uri: moduleMeta.moduleUri,
    version: moduleMeta.versionString,
    types: {
      native: [...moduleMeta.typeNames],
      qml: [...qmlTypes],
    },
    qmldir: qmldirPath,
    qmltypes: qmltypesPath,
  };

  const hostLibRelative = `./${relative(outDir, hostLibPath).replace(/\\/g, '/')}`;

  return {
    modules: [entry],
    native: { [platform]: hostLibRelative },
  };
}

export function writeModuleManifest(outDir: string, manifest: QmltsModuleManifest): string {
  const manifestPath = join(outDir, 'qmlts.module.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  return manifestPath;
}

export function readModuleManifest(packageDir: string): QmltsModuleManifest | undefined {
  const manifestPath = join(packageDir, 'qmlts.module.json');
  if (!existsSync(manifestPath)) return undefined;
  try {
    const content = JSON.parse(readFileSync(manifestPath, 'utf-8'));
    if (!isValidModuleManifest(content)) return undefined;
    return content as QmltsModuleManifest;
  } catch {
    return undefined;
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isStringRecord(value: unknown): value is Record<string, string> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  return Object.values(value).every((item) => typeof item === 'string');
}

function isValidModuleManifest(value: unknown): boolean {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  const obj = value as Record<string, unknown>;
  if (!Array.isArray(obj.modules)) return false;
  if (obj.native !== undefined && !isStringRecord(obj.native)) return false;
  for (const mod of obj.modules) {
    if (typeof mod !== 'object' || mod === null || Array.isArray(mod)) return false;
    const m = mod as Record<string, unknown>;
    if (typeof m.uri !== 'string') return false;
    if (typeof m.version !== 'string') return false;
    if (typeof m.qmldir !== 'string') return false;
    if (typeof m.qmltypes !== 'string') return false;
    if (typeof m.types !== 'object' || m.types === null || Array.isArray(m.types)) return false;
    const types = m.types as Record<string, unknown>;
    if (!isStringArray(types.native)) return false;
    if (!isStringArray(types.qml)) return false;
  }
  return true;
}
