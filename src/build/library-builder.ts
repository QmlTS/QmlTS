import { join } from 'node:path';
import type { CompilationResult } from '../compiler/pipeline/pipeline-types.js';
import type { ProductLayout } from './build-types.js';
import type { PlatformTarget, ResolvedQmltsConfig } from './config-types.js';
import { generateModuleManifest, writeModuleManifest } from './module-manifest.js';
import type { ModuleMeta } from './module-meta.js';
import { currentPlatform, hostLibFilename } from './product-layout.js';

export interface LibraryBuildResult {
  readonly manifestPath: string;
  readonly qmlTypes: readonly string[];
  readonly platform: PlatformTarget;
}

/**
 * Generates and writes the qmlts.module.json manifest for library builds.
 * This is called from phaseWriteOutput after the standard compilation units,
 * qmldir, and qmltypes have already been written.
 */
export function writeLibraryManifest(
  layout: ProductLayout,
  config: ResolvedQmltsConfig,
  compilationResult: CompilationResult,
  moduleMeta: ModuleMeta,
): LibraryBuildResult {
  const qmlTypes = compilationResult.units
    .filter((u) => u.qmlContent && u.schema)
    .map((u) => u.schema!.className);

  const platform =
    config.distribute.targets.length > 0 ? config.distribute.targets[0]! : currentPlatform();

  const hostLibPath = join(layout.rootDir, hostLibFilename(platform));

  const manifest = generateModuleManifest(
    moduleMeta,
    layout.rootDir,
    qmlTypes,
    platform,
    hostLibPath,
  );
  const manifestPath = writeModuleManifest(layout.rootDir, manifest);

  return { manifestPath, qmlTypes, platform };
}
