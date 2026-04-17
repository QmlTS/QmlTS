import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative } from 'node:path';
import type { CompilationResult, CompilationUnit } from '../compiler/pipeline/pipeline-types.js';
import type { BuildManifest, ProductLayout } from './build-types.js';
import type { PlatformTarget, ResolvedQmltsConfig } from './config-types.js';

import type { ModuleMeta } from './module-meta.js';

const IS_WINDOWS = process.platform === 'win32';

export function currentPlatform(): PlatformTarget {
  if (IS_WINDOWS) {
    if (process.arch === 'x64') return 'win32-x64';
    throw new Error(`Unsupported host platform: ${process.platform}-${process.arch}`);
  }
  if (process.platform === 'darwin') {
    if (process.arch === 'x64') return 'darwin-x64';
    if (process.arch === 'arm64') return 'darwin-arm64';
    throw new Error(`Unsupported host platform: ${process.platform}-${process.arch}`);
  }
  if (process.platform === 'linux') {
    if (process.arch === 'x64') return 'linux-x64';
    throw new Error(`Unsupported host platform: ${process.platform}-${process.arch}`);
  }
  throw new Error(`Unsupported host platform: ${process.platform}-${process.arch}`);
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

export function attachModuleDir(
  layout: ProductLayout,
  moduleMeta: ModuleMeta | undefined,
): ProductLayout {
  if (!moduleMeta) return layout;
  return {
    ...layout,
    moduleDir: join(layout.qmlDir, ...moduleMeta.moduleRelDir.split('/')),
  };
}

export function createManifest(
  layout: ProductLayout,
  compilationResult: CompilationResult,
  config: ResolvedQmltsConfig,
  moduleMeta?: ModuleMeta,
): BuildManifest {
  const platform =
    config.distribute.targets.length > 0 ? config.distribute.targets[0]! : currentPlatform();

  const qmlFiles = compilationResult.units
    .filter((u) => u.qmlContent)
    .map((u) => `./${relative(layout.rootDir, u.qmlOutputPath).replace(/\\/g, '/')}`);

  const schemas = compilationResult.units
    .filter((u) => u.schema && u.schemaOutputPath)
    .map((u) => `./${relative(layout.rootDir, u.schemaOutputPath!).replace(/\\/g, '/')}`);

  const base: BuildManifest = {
    version: '0.1.0',
    buildTime: new Date().toISOString(),
    entry: `./${basename(config.entry)}`,
    qmlFiles,
    schemas,
    hostLib: `./${hostLibFilename(platform)}`,
    qtVersion: config.qt.targetVersion,
    platform,
  };

  if (config.runtime === 'v2') {
    const modules = moduleMeta
      ? [
          {
            uri: moduleMeta.moduleUri,
            version: moduleMeta.versionString,
            types: [...moduleMeta.typeNames],
            qmldir: `./qml/${moduleMeta.moduleRelDir}/qmldir`,
            qmltypes: `./qml/${moduleMeta.moduleRelDir}/${moduleMeta.qmltypesFilename}`,
          },
        ]
      : [];
    return {
      ...base,
      runtime: 'v2',
      modules,
      ...(config.v1Compat ? { v1Compat: true } : {}),
    };
  }

  return base;
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
  if (layout.moduleDir) {
    mkdirSync(layout.moduleDir, { recursive: true });
  }
}

export function writeManifest(layout: ProductLayout, manifest: BuildManifest): void {
  writeFileSync(layout.manifest, JSON.stringify(manifest, null, 2), 'utf-8');
}

export function writeEntryFile(layout: ProductLayout, entryFile: string): void {
  mkdirSync(dirname(layout.entryFile), { recursive: true });
  copyFileSync(entryFile, layout.entryFile);
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
      const qmlPath = unit.qmlOutputPath;
      mkdirSync(dirname(qmlPath), { recursive: true });
      writeFileSync(qmlPath, unit.qmlContent, 'utf-8');

      if (sourceMaps && unit.sourceMap && layout.sourceMapsDir) {
        const mapPath = join(
          layout.sourceMapsDir,
          `${relative(layout.qmlDir, qmlPath).replace(/\\/g, '/')}.map`,
        );
        mkdirSync(dirname(mapPath), { recursive: true });
        writeFileSync(mapPath, JSON.stringify(unit.sourceMap, null, 2), 'utf-8');
      }
    }

    if (unit.schema && unit.schemaOutputPath) {
      const schemaPath = unit.schemaOutputPath;
      mkdirSync(dirname(schemaPath), { recursive: true });
      writeFileSync(schemaPath, JSON.stringify(unit.schema, null, 2), 'utf-8');
    }
  }
}

export function alignCompilationResultToLayout(
  result: CompilationResult,
  layout: ProductLayout,
  originalOutDir: string,
): CompilationResult {
  const normalizedOutDir = originalOutDir.replace(/\\/g, '/');

  const units = result.units.map((unit) => {
    const qmlRelative = relative(originalOutDir, unit.qmlOutputPath);
    const qmlPath = join(layout.qmlDir, qmlRelative);
    const schemaRelativeDir =
      unit.schema && unit.schemaOutputPath
        ? dirname(relative(originalOutDir, unit.schemaOutputPath))
        : '.';
    const schemaPath = unit.schema
      ? join(
          layout.schemasDir,
          schemaRelativeDir === '.' ? '' : schemaRelativeDir,
          `${unit.schema.className}.schema.json`,
        )
      : undefined;

    return {
      ...unit,
      qmlOutputPath: qmlPath,
      schemaOutputPath: schemaPath,
      sourceMap: unit.sourceMap
        ? {
            ...unit.sourceMap,
            targetFile: qmlPath.replace(/\\/g, '/'),
          }
        : undefined,
      diagnostics: unit.diagnostics.map((diagnostic) => {
        if (!diagnostic.file) return diagnostic;
        const normalizedFile = diagnostic.file.replace(/\\/g, '/');
        if (!normalizedFile.startsWith(normalizedOutDir)) return diagnostic;
        return {
          ...diagnostic,
          file: join(layout.qmlDir, relative(originalOutDir, diagnostic.file)),
        };
      }),
    };
  });

  return {
    ...result,
    units,
  };
}
