import { mkdirSync, writeFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import type { CompilationResult, CompilationUnit } from '../compiler/pipeline/pipeline-types.js';
import type { BuildManifest, ProductLayout } from './build-types.js';
import type { PlatformTarget, ResolvedQmltsConfig } from './config-types.js';

const IS_WINDOWS = process.platform === 'win32';

function currentPlatform(): PlatformTarget {
  const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
  if (IS_WINDOWS) return `win32-${arch}` as PlatformTarget;
  if (process.platform === 'darwin') return `darwin-${arch}` as PlatformTarget;
  return `linux-${arch}` as PlatformTarget;
}

export function hostLibFilename(platform: PlatformTarget): string {
  return `qmlts_host.${platform}.node`;
}

export function createProductLayout(outDir: string, config: ResolvedQmltsConfig): ProductLayout {
  const platform =
    config.distribute.targets.length > 0 ? config.distribute.targets[0]! : currentPlatform();

  const layout: ProductLayout = {
    rootDir: outDir,
    entryFile: join(outDir, basename(config.entry)),
    qmlDir: join(outDir, 'qml'),
    schemasDir: join(outDir, 'schemas'),
    assetsDir: join(outDir, 'assets'),
    hostLib: join(outDir, hostLibFilename(platform)),
    manifest: join(outDir, 'manifest.json'),
    eventBindings: join(outDir, 'event-bindings.json'),
  };

  if (config.build.sourceMaps) {
    return { ...layout, sourceMapsDir: join(outDir, 'source-maps') };
  }

  return layout;
}

export function createManifest(
  layout: ProductLayout,
  compilationResult: CompilationResult,
  config: ResolvedQmltsConfig,
): BuildManifest {
  const platform =
    config.distribute.targets.length > 0 ? config.distribute.targets[0]! : currentPlatform();

  const qmlFiles = compilationResult.units
    .filter((u) => u.qmlContent)
    .map(
      (u) =>
        `./${relative(layout.rootDir, join(layout.qmlDir, `${u.viewName}.qml`)).replace(/\\/g, '/')}`,
    );

  const schemas = compilationResult.units
    .filter((u) => u.schema)
    .map(
      (u) =>
        `./${relative(layout.rootDir, join(layout.schemasDir, `${u.schema!.className}.schema.json`)).replace(/\\/g, '/')}`,
    );

  return {
    version: '0.1.0',
    buildTime: new Date().toISOString(),
    entry: `./${basename(config.entry)}`,
    qmlFiles,
    schemas,
    hostLib: `./${hostLibFilename(platform)}`,
    qtVersion: config.qt.targetVersion,
    platform,
  };
}

export function materializeLayout(layout: ProductLayout, dryRun = false): void {
  if (dryRun) return;

  mkdirSync(layout.rootDir, { recursive: true });
  mkdirSync(layout.qmlDir, { recursive: true });
  mkdirSync(layout.schemasDir, { recursive: true });
  mkdirSync(layout.assetsDir, { recursive: true });
  if (layout.sourceMapsDir) {
    mkdirSync(layout.sourceMapsDir, { recursive: true });
  }
}

export function writeManifest(layout: ProductLayout, manifest: BuildManifest): void {
  writeFileSync(layout.manifest, JSON.stringify(manifest, null, 2), 'utf-8');
}

export function writeEventBindings(
  layout: ProductLayout,
  eventBindings: CompilationResult['eventBindings'],
): void {
  writeFileSync(layout.eventBindings, JSON.stringify(eventBindings, null, 2), 'utf-8');
}

export function writeCompilationUnits(
  layout: ProductLayout,
  units: readonly CompilationUnit[],
  sourceMaps: boolean,
): void {
  for (const unit of units) {
    if (unit.qmlContent) {
      const qmlPath = join(layout.qmlDir, `${unit.viewName}.qml`);
      writeFileSync(qmlPath, unit.qmlContent, 'utf-8');

      if (sourceMaps && unit.sourceMap && layout.sourceMapsDir) {
        const mapPath = join(layout.sourceMapsDir, `${unit.viewName}.qml.map`);
        writeFileSync(mapPath, JSON.stringify(unit.sourceMap, null, 2), 'utf-8');
      }
    }

    if (unit.schema) {
      const schemaPath = join(layout.schemasDir, `${unit.schema.className}.schema.json`);
      writeFileSync(schemaPath, JSON.stringify(unit.schema, null, 2), 'utf-8');
    }
  }
}
