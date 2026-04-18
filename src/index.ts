import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RegistryQuery } from './registry/registry-query.js';
import { RegistrySnapshot } from './registry/snapshot.js';
import type { QmlRegistry, RegistryQueryInterface } from './registry/types.js';

// ─── Pre-built snapshot path ────────────────────────────────
const SNAPSHOT_PATH = join(import.meta.dir, '..', 'data', 'qt-6.11.0-registry.snapshot.json');

let _registry: QmlRegistry | null = null;
let _query: RegistryQueryInterface | null = null;

/** Get the pre-built Qt 6.11 type registry. Lazily loaded on first call. */
export function getRegistry(): QmlRegistry {
  if (!_registry) {
    const json = readFileSync(SNAPSHOT_PATH, 'utf-8');
    _registry = new RegistrySnapshot().deserialize(json);
  }
  return _registry;
}

/** Get a query engine over the pre-built registry. Lazily loaded on first call. */
export function getQuery(): RegistryQueryInterface {
  if (!_query) {
    _query = new RegistryQuery(getRegistry());
  }
  return _query;
}

// ─── Re-export AST module ───────────────────────────────────
export * from './ast/index.js';
export type {
  AssetsConfig,
  BuildCommandOptions,
  BuildCommandResult,
  BuildManifest,
  BuildPipeline,
  BuildPipelineResult,
  BuildProgress,
  BuildResultData,
  BuildSuccessInfo,
  BundledFile,
  BundleResult,
  CargoConfig,
  CleanCommandOptions,
  CleanResult,
  CompilerModuleConfig,
  DevCommandResult,
  DevConfig,
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
  DevSession,
  DevSessionEvent,
  DevSessionEventType,
  DevSessionOptions,
  DevSessionState,
  DevSessionStats,
  DistributeCommandOptions,
  DistributeConfig,
  DistributeResult,
  DoctorCheck,
  DoctorCheckName,
  DoctorCommandOptions,
  DoctorResult,
  EntryGenerator,
  EntryGeneratorOptions,
  ErrorOverlay,
  ErrorOverlayOptions,
  FileChange,
  FileChangeBatch,
  FileChangeData,
  FileWatcher,
  FileWatcherOptions,
  HostConfig,
  HostOverlayApi,
  HostPreparer,
  HostPrepMode,
  HostPrepOptions,
  HostPrepOutput,
  HostPrepResult,
  HotReloadClient,
  HotReloadContext,
  HotReloadData,
  HotReloadOrchestrator,
  HotReloadOrchestratorOptions,
  HotReloadOrchestratorResult,
  HotReloadResult,
  InitCommandOptions,
  InitResult,
  InitTemplate,
  LibraryBuildResult,
  ModuleConfig,
  ModuleVersion,
  OverlayError,
  PackageManager,
  PackageResolver,
  PerfCategory,
  PerfProfiler,
  PerfRecord,
  PerfSpan,
  PerfSummary,
  PhaseResult,
  PipelineRunOptions,
  PlatformDistributor,
  PlatformTarget,
  ProductLayout,
  QmltsConfig,
  QmltsModuleManifest,
  QmltsModuleManifestEntry,
  QmltsPackageManifest,
  QmltsRepl,
  QtConfig,
  ReplHost,
  ReplMode,
  ReplOptions,
  ReplResult,
  ResolvedAssetsConfig,
  ResolvedBuildConfig,
  ResolvedCargoConfig,
  ResolvedDevConfig,
  ResolvedDistributeConfig,
  ResolvedHostConfig,
  ResolvedPackageInfo,
  ResolvedPackages,
  ResolvedQmltsConfig,
  ResolvedQmltsModule,
  ResolvedQtConfig,
  ResourceBundler,
  RuntimeVersion,
  RustBridgeGenerator,
  RustBridgeOutput,
  SchemaFile,
  SchemaGenerationContext,
  ServerStatusInfo,
  StatusChangeData,
  ViewModelInstanceSlot,
  ViewModelSchemaJson,
} from './build/index.js';
// ─── Re-export Build module ─────────────────────────────────
// Note: BuildPhase is not re-exported here to avoid collision with
// registry/types.ts BuildPhase. Import from '@qmlts/build' or
// directly from './build/build-types.js'.
export {
  applyDefaults,
  BUILD_PHASES,
  BuildError,
  ConfigError,
  checkQtVersionCompatibility,
  createBuildPipeline,
  createDevConsole,
  createDevServer,
  createDevSession,
  createEntryGenerator,
  createErrorOverlay,
  createFileWatcher,
  createHostPreparer,
  createHotReloadOrchestrator,
  createManifest,
  createPackageResolver,
  createPerfProfiler,
  createPlatformDistributor,
  createProductLayout,
  createRepl,
  createResourceBundler,
  createRustBridgeGenerator,
  currentPlatform,
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
  defineConfig,
  diagnosticsToOverlayErrors,
  dryRunBundle,
  executeBuild,
  executeClean,
  executeDev,
  executeDoctor,
  executeInit,
  generateModuleManifest,
  getDoctorCheckNames,
  hostLibFilename,
  loadConfig,
  materializeLayout,
  readModuleManifest,
  resetDeprecationWarnings,
  runDoctorChecks,
  validateConfig,
  validateModuleUris,
  validatePlatformArtifacts,
  validateSchemas,
  writeCompilationUnits,
  writeEventBindings,
  writeLibraryManifest,
  writeManifest,
  writeModuleManifest,
} from './build/index.js';
// ─── Re-export Compiler module ──────────────────────────────
export * from './compiler/index.js';
export * from './dsl/generator/index.js';
// ─── Re-export DSL runtime + generator ──────────────────────
export * from './dsl/runtime/index.js';
// ─── Re-export Emitter module ───────────────────────────────
export * from './emitter/index.js';
// ─── Re-export Qt Tools module ──────────────────────────────
export * from './qt-tools/index.js';
// ─── Re-export everything for advanced / maintainer use ─────
export * from './registry/index.js';
// ─── Re-export ViewModel module ─────────────────────────────
export * from './viewmodel/index.js';
