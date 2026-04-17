// ─── Dev Tools Types ────────────────────────────────────────

// ─── Factory Functions ──────────────────────────────────────
export { createDevConsole } from './dev-console.js';
export { createDevServer } from './dev-server.js';
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
  // V2 instance-scoped types
  HotReloadDiagnostic,
  HotReloadOrchestrator,
  HotReloadOrchestratorOptions,
  HotReloadOrchestratorResult,
  InstanceContext,
  InstanceRestorePair,
  InstanceSlotInfo,
  NativeInstanceSnapshot,
  OverlayError,
  PerfCategory,
  PerfProfiler,
  PerfRecord,
  PerfSpan,
  PerfSummary,
  QmltsRepl,
  ReplEvalOptions,
  ReplHost,
  ReplMode,
  ReplOptions,
  ReplResult,
  RestoreDiagnostics,
  ServerStatusInfo,
  StatusChangeData,
} from './dev-types.js';
export {
  createErrorOverlay,
  diagnosticsToOverlayErrors,
  formatOverlayErrors,
} from './error-overlay.js';
export { createFileWatcher } from './file-watcher.js';
export { createHotReloadOrchestrator } from './hot-reload-orchestrator.js';
export {
  isSelectorError,
  parseInstanceSelector,
  resolveInstanceSelector,
} from './instance-selector.js';
export { createPerfProfiler } from './perf-profiler.js';
export { createRepl } from './repl.js';
