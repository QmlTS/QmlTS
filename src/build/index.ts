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
  PhaseResult,
  PipelineRunOptions,
  ProductLayout,
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
// Note: BuildConfig is not re-exported here to avoid collision with
// registry/types.ts BuildConfig. Import directly from './config-types.js'
// or use QmltsConfig['build'] / ResolvedBuildConfig instead.
