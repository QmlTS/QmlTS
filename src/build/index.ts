// ─── Config ─────────────────────────────────────────────────

export { executeBuild } from './build-command.js';
// ─── Build Pipeline ─────────────────────────────────────────
export { BuildError } from './build-error.js';
export type { BuildPipeline } from './build-pipeline.js';
export { createBuildPipeline } from './build-pipeline.js';
export type {
  BuildCommandOptions,
  BuildCommandResult,
  BuildManifest,
  BuildPhase,
  BuildPipelineResult,
  BuildProgress,
  BundledFile,
  BundleResult,
  EntryGeneratorOptions,
  PhaseResult,
  PipelineRunOptions,
  ProductLayout,
  QmltsPackageManifest,
  ResolvedPackageInfo,
  ResolvedPackages,
} from './build-types.js';
export { BUILD_PHASES } from './build-types.js';
export {
  applyDefaults,
  DEFAULT_ASSETS_DIR,
  DEFAULT_ASSETS_INCLUDE,
  DEFAULT_BUILD_MODE,
  DEFAULT_CARGO_PROFILE,
  DEFAULT_DEBOUNCE_MS,
  DEFAULT_ENTRY,
  DEFAULT_OUT_DIR,
  DEFAULT_QUALITY_GATE,
  DEFAULT_TARGET_VERSION,
  DEFAULT_WATCH_PATHS,
} from './config-defaults.js';
export { ConfigError } from './config-error.js';
export { loadConfig } from './config-loader.js';
// ─── Types ──────────────────────────────────────────────────
export type {
  AssetsConfig,
  CargoConfig,
  DevConfig,
  DistributeConfig,
  HostConfig,
  PlatformTarget,
  QmltsConfig,
  QtConfig,
  ResolvedAssetsConfig,
  ResolvedBuildConfig,
  ResolvedCargoConfig,
  ResolvedDevConfig,
  ResolvedDistributeConfig,
  ResolvedHostConfig,
  ResolvedQmltsConfig,
  ResolvedQtConfig,
} from './config-types.js';
export { validateConfig } from './config-validator.js';
export { defineConfig } from './define-config.js';
// ─── Entry Generator ────────────────────────────────────────
export type { EntryGenerator } from './entry-generator.js';
export { createEntryGenerator } from './entry-generator.js';
// ─── Package Resolver ───────────────────────────────────────
export type { PackageResolver } from './package-resolver.js';
export { checkQtVersionCompatibility, createPackageResolver } from './package-resolver.js';
export {
  createManifest,
  createProductLayout,
  hostLibFilename,
  materializeLayout,
  writeCompilationUnits,
  writeEntryFile,
  writeEventBindings,
  writeManifest,
} from './product-layout.js';
// ─── Resource Bundler ───────────────────────────────────────
export type { ResourceBundler } from './resource-bundler.js';
export { createResourceBundler, dryRunBundle } from './resource-bundler.js';
// Note: BuildConfig is not re-exported here to avoid collision with
// registry/types.ts BuildConfig. Import directly from './config-types.js'
// or use QmltsConfig['build'] / ResolvedBuildConfig instead.
