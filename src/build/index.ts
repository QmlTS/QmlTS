// ─── Config ─────────────────────────────────────────────────

export type { CompilerModuleConfig } from '../compiler/pipeline/pipeline-types.js';
export type { SchemaGenerationContext } from '../compiler/viewmodel/extractor-types.js';
// ─── Dev Tools ──────────────────────────────────────────────
export type {
  BuildSuccessInfo,
  DevConsole,
  DevConsoleLevel,
  DevConsoleOptions,
  DevServer,
  DevServerBuildResultData,
  DevServerEvent,
  DevServerEventPayload,
  DevServerFileChangeData,
  DevServerHotReloadData,
  DevServerHotReloadErrorData,
  DevServerOptions,
  DevServerStartResult,
  DevServerStats,
  DevServerStatus,
  ErrorOverlay,
  ErrorOverlayOptions,
  FileChange,
  FileChangeBatch,
  FileWatcher,
  FileWatcherOptions,
  HostOverlayApi,
  HotReloadContext,
  HotReloadOrchestrator,
  HotReloadOrchestratorOptions,
  HotReloadOrchestratorResult,
  OverlayError,
  PerfCategory,
  PerfProfiler,
  PerfRecord,
  PerfSpan,
  PerfSummary,
  QmltsRepl,
  ReplHost,
  ReplMode,
  ReplOptions,
  ReplResult,
  ServerStatusInfo,
  StatusChangeData,
} from '../dev-tools/index.js';
export {
  createDevConsole,
  createDevServer,
  createErrorOverlay,
  createFileWatcher,
  createHotReloadOrchestrator,
  createPerfProfiler,
  createRepl,
  diagnosticsToOverlayErrors,
} from '../dev-tools/index.js';
// ─── V2 types re-exported for convenience ───────────────────
export type { ViewModelInstanceSlot } from '../viewmodel/schema.js';
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
  BuildResultData,
  BundledFile,
  BundleResult,
  CleanCommandOptions,
  CleanResult,
  DevSessionEvent,
  DevSessionEventType,
  DevSessionOptions,
  DevSessionState,
  DevSessionStats,
  DistributeCommandOptions,
  DistributeResult,
  DoctorCheck,
  DoctorCheckName,
  DoctorCommandOptions,
  DoctorResult,
  EntryGeneratorOptions,
  FileChangeData,
  HostPrepMode,
  HostPrepResult,
  HotReloadClient,
  HotReloadData,
  HotReloadResult,
  InitCommandOptions,
  InitResult,
  InitTemplate,
  PackageManager,
  PhaseResult,
  PipelineRunOptions,
  ProductLayout,
  QmltsModuleManifest,
  QmltsModuleManifestEntry,
  QmltsPackageManifest,
  ResolvedPackageInfo,
  ResolvedPackages,
  ResolvedQmltsModule,
  RustBridgeOutput,
  SchemaFile,
  ViewModelSchemaJson,
} from './build-types.js';
export { BUILD_PHASES } from './build-types.js';
// ─── Clean Command ──────────────────────────────────────────
export { executeClean } from './clean-command.js';
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
  DEFAULT_RUNTIME,
  DEFAULT_TARGET_VERSION,
  DEFAULT_V1_COMPAT,
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
  ModuleConfig,
  ModuleVersion,
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
  RuntimeVersion,
} from './config-types.js';
export { resetDeprecationWarnings, validateConfig } from './config-validator.js';
export { defineConfig } from './define-config.js';
export type { DevCommandResult } from './dev-command.js';
export { executeDev } from './dev-command.js';
// ─── Dev Session ────────────────────────────────────────────
export type { DevSession } from './dev-session.js';
export { createDevSession } from './dev-session.js';
// ─── Doctor ─────────────────────────────────────────────────
export { getDoctorCheckNames, runDoctorChecks } from './doctor.js';
export { executeDoctor } from './doctor-command.js';
// ─── Entry Generator ────────────────────────────────────────
export type { EntryGenerator } from './entry-generator.js';
export { createEntryGenerator } from './entry-generator.js';
// ─── Host Preparer ──────────────────────────────────────────
export type { HostPreparer, HostPrepOptions, HostPrepOutput } from './host-preparer.js';
export { createHostPreparer } from './host-preparer.js';
// ─── Init Command ───────────────────────────────────────────
export { executeInit } from './init-command.js';
// ─── Library Builder ────────────────────────────────────────
export type { LibraryBuildResult } from './library-builder.js';
export { writeLibraryManifest } from './library-builder.js';
// ─── Module Manifest ────────────────────────────────────────
export {
  generateModuleManifest,
  readModuleManifest,
  writeModuleManifest,
} from './module-manifest.js';
// ─── Module Metadata ────────────────────────────────────────
export type { ModuleMeta } from './module-meta.js';
export {
  deriveModuleMeta,
  deriveModuleRelDir,
  deriveModuleUri,
  deriveQmltypesFilename,
  validateSchemaConsistency,
} from './module-meta.js';
// ─── Package Resolver ───────────────────────────────────────
export type { PackageResolver } from './package-resolver.js';
export {
  checkQtVersionCompatibility,
  createPackageResolver,
  validateModuleUris,
  validatePlatformArtifacts,
} from './package-resolver.js';
// ─── Platform Distributor ───────────────────────────────────
export type { PlatformDistributor } from './platform-distributor.js';
export { createPlatformDistributor } from './platform-distributor.js';
export {
  attachModuleDir,
  createManifest,
  createProductLayout,
  currentPlatform,
  hostLibFilename,
  materializeLayout,
  writeCompilationUnits,
  writeEntryFile,
  writeEventBindings,
  writeManifest,
} from './product-layout.js';
// ─── Qmldir Generator ──────────────────────────────────────
export type { QmldirGenerator, QmldirGeneratorOptions } from './qmldir-generator.js';
export { createQmldirGenerator } from './qmldir-generator.js';
// ─── Qmltypes Generator ────────────────────────────────────
export type { QmltypesGenerator, QmltypesGeneratorOptions } from './qmltypes-generator.js';
export { createQmltypesGenerator } from './qmltypes-generator.js';
// ─── Resource Bundler ───────────────────────────────────────
export type { ResourceBundler } from './resource-bundler.js';
export { createResourceBundler, dryRunBundle } from './resource-bundler.js';
// ─── Rust Bridge Generator ──────────────────────────────────
export type { RustBridgeGenerator } from './rust-bridge-generator.js';
export { createRustBridgeGenerator, validateSchemas } from './rust-bridge-generator.js';
// Note: BuildConfig is not re-exported here to avoid collision with
// registry/types.ts BuildConfig. Import directly from './config-types.js'
// or use QmltsConfig['build'] / ResolvedBuildConfig instead.
