import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createBuildPipeline } from '../build/build-pipeline.js';
import type { BuildPipelineResult, PipelineRunOptions } from '../build/build-types.js';
import type { ResolvedQmltsConfig } from '../build/config-types.js';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type {
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
  FileChangeBatch,
  FileWatcher,
  HotReloadOrchestrator,
  StatusChangeData,
} from './dev-types.js';
import { diagnosticsToOverlayErrors } from './error-overlay.js';
import { createFileWatcher } from './file-watcher.js';
import { createHotReloadOrchestrator } from './hot-reload-orchestrator.js';

// ─── Internal state ─────────────────────────────────────────

interface ServerInternals {
  status: DevServerStatus;
  config: ResolvedQmltsConfig;
  options: DevServerOptions;
  fileWatcher: FileWatcher | undefined;
  configWatcher: FileWatcher | undefined;
  hotReloadOrchestrator: HotReloadOrchestrator | undefined;
  consoleDisconnect: (() => void) | undefined;
  listeners: Map<DevServerEvent, Set<(payload: DevServerEventPayload) => void>>;
  startTime: number | undefined;
  buildCount: number;
  rebuildCount: number;
  hotReloadCount: number;
  errorCount: number;
  totalBuildMs: number;
  lastBuildMs: number | undefined;
  lastPipelineResult: BuildPipelineResult | undefined;
  lastSuccessfulResult: BuildPipelineResult | undefined;
  rebuildInProgress: boolean;
  pendingRebuild: boolean;
  changedFilesBatch: string[];
  activeRebuildPromise: Promise<DevServerStartResult> | undefined;
  queuedRebuildWaiters: Array<{
    resolve: (result: DevServerStartResult) => void;
    reject: (error: unknown) => void;
  }>;
  restartInProgress: boolean;
}

export interface DevServerInternal extends DevServer {
  getLastPipelineResult(): BuildPipelineResult | undefined;
}

// ─── Helpers ────────────────────────────────────────────────

function emit(internals: ServerInternals, type: DevServerEvent, data?: unknown): void {
  const payload: DevServerEventPayload = {
    type,
    timestamp: Date.now(),
    data,
  };
  const handlers = internals.listeners.get(type);
  if (handlers) {
    for (const handler of handlers) {
      handler(payload);
    }
  }
}

function transition(
  internals: ServerInternals,
  newStatus: DevServerStatus,
  extra?: Partial<StatusChangeData>,
): void {
  const oldStatus = internals.status;
  if (oldStatus === newStatus) return;
  internals.status = newStatus;
  const data: StatusChangeData = { from: oldStatus, to: newStatus, ...extra };
  emit(internals, 'status-change', data);
}

function collectDiagnostics(result: BuildPipelineResult): readonly Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [, phaseResult] of result.phases) {
    for (const d of phaseResult.diagnostics) {
      diagnostics.push(d);
    }
  }
  return diagnostics;
}

function resolveQueuedRebuilds(internals: ServerInternals, result: DevServerStartResult): void {
  const waiters = [...internals.queuedRebuildWaiters];
  internals.queuedRebuildWaiters = [];
  for (const waiter of waiters) {
    waiter.resolve(result);
  }
}

function rejectQueuedRebuilds(internals: ServerInternals, error: unknown): void {
  const waiters = [...internals.queuedRebuildWaiters];
  internals.queuedRebuildWaiters = [];
  for (const waiter of waiters) {
    waiter.reject(error);
  }
}

function toStartResult(result: BuildPipelineResult, durationMs: number): DevServerStartResult {
  return {
    success: result.success,
    durationMs,
    diagnostics: collectDiagnostics(result),
    stats: result.compilationStats,
  };
}

// ─── Rebuild logic ──────────────────────────────────────────

function runRebuild(internals: ServerInternals): Promise<DevServerStartResult> {
  if (internals.activeRebuildPromise) {
    return internals.activeRebuildPromise;
  }

  const rebuildPromise = performRebuild(internals).finally(() => {
    if (internals.activeRebuildPromise === rebuildPromise) {
      internals.activeRebuildPromise = undefined;
    }
  });

  internals.activeRebuildPromise = rebuildPromise;
  return rebuildPromise;
}

async function performRebuild(internals: ServerInternals): Promise<DevServerStartResult> {
  internals.rebuildInProgress = true;
  const changedFiles = [...internals.changedFilesBatch];
  internals.changedFilesBatch = [];

  const previousStatus = internals.status;
  if (previousStatus === 'running' || previousStatus === 'error') {
    transition(internals, 'reloading');
  }
  emit(internals, 'rebuild-start', { files: changedFiles });

  const start = performance.now();

  try {
    const pipelineOpts: PipelineRunOptions = {
      files: changedFiles.length > 0 ? changedFiles : undefined,
    };

    const pipeline = createBuildPipeline(internals.config);
    const pipelineResult = await pipeline.run(pipelineOpts);
    const durationMs = performance.now() - start;

    internals.rebuildCount++;
    internals.totalBuildMs += durationMs;
    internals.lastBuildMs = durationMs;
    internals.lastPipelineResult = pipelineResult;

    const startResult = toStartResult(pipelineResult, durationMs);

    if (pipelineResult.success) {
      internals.lastSuccessfulResult = pipelineResult;

      const buildData: DevServerBuildResultData = {
        success: true,
        durationMs,
        diagnostics: startResult.diagnostics,
        stats: startResult.stats,
      };
      emit(internals, 'rebuild-success', buildData);

      // Trigger hot reload if enabled and connected
      if (
        internals.status !== 'stopping' &&
        internals.status !== 'stopped' &&
        internals.config.dev.hotReload &&
        internals.hotReloadOrchestrator
      ) {
        await performHotReload(internals, changedFiles);
      }
    } else {
      internals.errorCount++;
      const buildData: DevServerBuildResultData = {
        success: false,
        durationMs,
        diagnostics: startResult.diagnostics,
        stats: startResult.stats,
      };
      emit(internals, 'rebuild-error', buildData);

      if (!(internals.options.preserveOnError ?? internals.config.dev.preserveOnError)) {
        internals.lastSuccessfulResult = undefined;
      }
    }

    internals.rebuildInProgress = false;

    if (internals.pendingRebuild) {
      internals.pendingRebuild = false;
      return await performRebuild(internals);
    }

    if (internals.status === 'reloading') {
      if (pipelineResult.success) {
        transition(internals, 'running');
      } else {
        transition(internals, 'error');
      }
    }

    resolveQueuedRebuilds(internals, startResult);
    return startResult;
  } catch (err) {
    internals.rebuildInProgress = false;
    internals.errorCount++;
    const durationMs = performance.now() - start;

    const buildData: DevServerBuildResultData = {
      success: false,
      durationMs,
      diagnostics: [
        {
          severity: 'error' as const,
          code: 'QMLTS-G001' as const,
          message: err instanceof Error ? err.message : String(err),
        },
      ],
    };
    emit(internals, 'rebuild-error', buildData);

    if (internals.status === 'reloading') {
      transition(internals, 'error');
    }

    if (internals.pendingRebuild) {
      internals.pendingRebuild = false;
      return await performRebuild(internals);
    }

    rejectQueuedRebuilds(internals, err);
    throw err;
  }
}

async function performHotReload(
  internals: ServerInternals,
  changedFiles: readonly string[],
): Promise<void> {
  if (!internals.hotReloadOrchestrator) return;

  const result = await internals.hotReloadOrchestrator.reload(
    changedFiles,
    internals.config.outDir,
  );

  if (result.success) {
    internals.hotReloadCount++;
    const data: DevServerHotReloadData = {
      durationMs: result.durationMs,
      filesReloaded: result.filesReloaded,
      sequence: result.sequence,
    };
    emit(internals, 'hot-reload', data);
  } else {
    const data: DevServerHotReloadErrorData = {
      error: result.error ?? 'Hot reload failed',
      durationMs: result.durationMs,
      sequence: result.sequence,
    };
    emit(internals, 'hot-reload-error', data);
  }
}

// ─── Watch integration ──────────────────────────────────────

function setupFileWatcher(internals: ServerInternals): void {
  const watchPaths = (internals.options.watchPaths ?? internals.config.dev.watchPaths).map((p) =>
    resolve(internals.config.configDir, p),
  );
  const ignorePatterns = internals.options.ignorePatterns ?? internals.config.dev.ignorePatterns;
  const effectiveIgnorePatterns = [
    ...ignorePatterns,
    resolve(internals.config.configDir, internals.config.outDir),
  ];
  const debounceMs = internals.options.debounceMs ?? internals.config.dev.debounceMs;

  const fileWatcher = createFileWatcher({
    paths: watchPaths,
    debounceMs,
    ignorePatterns: effectiveIgnorePatterns,
  });

  fileWatcher.on('change', (batch: FileChangeBatch) => {
    if (internals.status === 'stopping' || internals.status === 'stopped') return;

    const changeData: DevServerFileChangeData = {
      files: batch.files,
      rawChangeCount: batch.rawChangeCount,
    };
    emit(internals, 'file-change', changeData);

    for (const file of batch.files) {
      internals.changedFilesBatch.push(file.path);
    }

    if (internals.rebuildInProgress) {
      internals.pendingRebuild = true;
      return;
    }

    runRebuild(internals).catch(() => {
      // Errors already emitted via events
    });
  });

  internals.fileWatcher = fileWatcher;
  fileWatcher.start();
  transition(internals, 'running', {
    entry: internals.config.entry,
    watchPaths: internals.config.dev?.watchPaths ?? internals.options.watchPaths ?? [],
    hotReload: internals.config.dev?.hotReload ?? false,
  });
}

// ─── Config file watching ────────────────────────────────────

const CONFIG_FILE_NAMES = ['qmlts.config.ts', 'qmlts.config.js', 'qmlts.config.mjs'];

function resolveConfigFilePath(configDir: string): string | undefined {
  for (const name of CONFIG_FILE_NAMES) {
    const candidate = resolve(configDir, name);
    if (existsSync(candidate)) return candidate;
  }
  return undefined;
}

function setupConfigWatcher(internals: ServerInternals, serverApi: DevServerInternal): void {
  const configFile = resolveConfigFilePath(internals.config.configDir);
  if (!configFile) return;

  const configWatcher = createFileWatcher({
    paths: [configFile],
    debounceMs: internals.options.debounceMs ?? internals.config.dev.debounceMs,
    ignorePatterns: [],
  });

  configWatcher.on('change', () => {
    if (internals.status === 'stopping' || internals.status === 'stopped') return;
    if (internals.restartInProgress) return;

    emit(internals, 'config-change');

    serverApi.restart().catch(() => {
      // Restart errors are emitted via events
    });
  });

  internals.configWatcher = configWatcher;
  configWatcher.start();
}

// ─── Internal reset ─────────────────────────────────────────

function resetInternals(internals: ServerInternals): void {
  internals.buildCount = 0;
  internals.rebuildCount = 0;
  internals.hotReloadCount = 0;
  internals.errorCount = 0;
  internals.totalBuildMs = 0;
  internals.lastBuildMs = undefined;
  internals.lastPipelineResult = undefined;
  internals.lastSuccessfulResult = undefined;
  internals.rebuildInProgress = false;
  internals.pendingRebuild = false;
  internals.changedFilesBatch = [];
  internals.activeRebuildPromise = undefined;
  internals.queuedRebuildWaiters = [];
  internals.startTime = undefined;
}

// ─── Factory ────────────────────────────────────────────────

export function createDevServer(
  config: ResolvedQmltsConfig,
  options: DevServerOptions = {},
): DevServerInternal {
  const internals: ServerInternals = {
    status: 'idle',
    config,
    options,
    fileWatcher: undefined,
    configWatcher: undefined,
    hotReloadOrchestrator: undefined,
    consoleDisconnect: undefined,
    listeners: new Map(),
    startTime: undefined,
    buildCount: 0,
    rebuildCount: 0,
    hotReloadCount: 0,
    errorCount: 0,
    totalBuildMs: 0,
    lastBuildMs: undefined,
    lastPipelineResult: undefined,
    lastSuccessfulResult: undefined,
    rebuildInProgress: false,
    pendingRebuild: false,
    changedFilesBatch: [],
    activeRebuildPromise: undefined,
    queuedRebuildWaiters: [],
    restartInProgress: false,
  };

  function setupHotReload(): void {
    if (options.hotReloadClient && !internals.hotReloadOrchestrator) {
      internals.hotReloadOrchestrator = createHotReloadOrchestrator({
        client: options.hotReloadClient,
      });
    }
  }

  // Set up hot reload orchestrator if client provided
  setupHotReload();

  // Wire error overlay if provided
  if (options.errorOverlay) {
    const overlay = options.errorOverlay;
    const safeOverlayShow = (errors: ReturnType<typeof diagnosticsToOverlayErrors>): void => {
      try {
        overlay.show(errors);
      } catch (error) {
        console.error('DevServer error overlay show() failed:', error);
      }
    };
    const safeOverlayHide = (): void => {
      try {
        overlay.hide();
      } catch (error) {
        console.error('DevServer error overlay hide() failed:', error);
      }
    };

    const addInternalListener = (
      event: DevServerEvent,
      handler: (payload: DevServerEventPayload) => void,
    ) => {
      if (!internals.listeners.has(event)) {
        internals.listeners.set(event, new Set());
      }
      internals.listeners.get(event)!.add(handler);
    };

    addInternalListener('build-error', (payload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        safeOverlayShow(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('rebuild-error', (payload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        safeOverlayShow(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('hot-reload-error', (payload) => {
      const data = payload.data as DevServerHotReloadErrorData | undefined;
      if (data) {
        safeOverlayShow([
          {
            file: '',
            line: 0,
            column: 0,
            message: data.error,
            severity: 'error',
          },
        ]);
      }
    });

    addInternalListener('hot-reload', () => {
      safeOverlayHide();
    });
  }

  const serverApi: DevServerInternal = {
    async start(): Promise<DevServerStartResult> {
      if (internals.status !== 'idle') {
        throw new Error(
          `Cannot start DevServer: server is in '${internals.status}' state (expected 'idle')`,
        );
      }

      internals.startTime = Date.now();
      transition(internals, 'starting');

      // Apply entry override
      const effectiveConfig = options.entry
        ? { ...config, entry: resolve(config.configDir, options.entry) }
        : config;
      internals.config = effectiveConfig;

      transition(internals, 'building');
      emit(internals, 'build-start');

      const start = performance.now();
      const pipeline = createBuildPipeline(effectiveConfig);
      const pipelineResult = await pipeline.run();
      const durationMs = performance.now() - start;

      internals.buildCount++;
      internals.totalBuildMs += durationMs;
      internals.lastBuildMs = durationMs;
      internals.lastPipelineResult = pipelineResult;

      const startResult = toStartResult(pipelineResult, durationMs);

      if (pipelineResult.success) {
        internals.lastSuccessfulResult = pipelineResult;
        const buildData: DevServerBuildResultData = {
          success: true,
          durationMs,
          diagnostics: startResult.diagnostics,
          stats: startResult.stats,
        };
        emit(internals, 'build-success', buildData);
      } else {
        internals.errorCount++;
        const buildData: DevServerBuildResultData = {
          success: false,
          durationMs,
          diagnostics: startResult.diagnostics,
          stats: startResult.stats,
        };
        emit(internals, 'build-error', buildData);
      }

      setupFileWatcher(internals);
      setupConfigWatcher(internals, serverApi);

      return startResult;
    },

    async stop(): Promise<void> {
      if (internals.status === 'stopped') return;

      transition(internals, 'stopping');

      // Stop file watcher
      if (internals.fileWatcher) {
        internals.fileWatcher.stop();
        internals.fileWatcher = undefined;
      }

      // Stop config watcher
      if (internals.configWatcher) {
        internals.configWatcher.stop();
        internals.configWatcher = undefined;
      }

      internals.pendingRebuild = false;
      internals.changedFilesBatch = [];
      if (internals.queuedRebuildWaiters.length > 0) {
        rejectQueuedRebuilds(
          internals,
          new Error('DevServer stopped before queued rebuild completed'),
        );
      }

      // Wait for active rebuild to finish
      if (internals.activeRebuildPromise) {
        try {
          await internals.activeRebuildPromise;
        } catch {
          // Rebuild errors are already surfaced through events.
        }
      }

      // Dispose hot reload orchestrator
      if (internals.hotReloadOrchestrator) {
        internals.hotReloadOrchestrator.dispose();
        internals.hotReloadOrchestrator = undefined;
      }

      transition(internals, 'stopped');
      emit(internals, 'exit');
    },

    async rebuild(): Promise<DevServerStartResult> {
      if (
        internals.status !== 'running' &&
        internals.status !== 'reloading' &&
        internals.status !== 'error'
      ) {
        throw new Error(
          `Cannot rebuild: server is in '${internals.status}' state (expected 'running', 'reloading', or 'error')`,
        );
      }

      if (internals.rebuildInProgress) {
        internals.pendingRebuild = true;
        return new Promise((resolvePromise, rejectPromise) => {
          internals.queuedRebuildWaiters.push({
            resolve: resolvePromise,
            reject: rejectPromise,
          });
        });
      }

      internals.changedFilesBatch = [];
      return runRebuild(internals);
    },

    async restart(): Promise<DevServerStartResult> {
      if (internals.status === 'stopped' || internals.status === 'idle') {
        throw new Error(
          `Cannot restart DevServer: server is in '${internals.status}' state (expected a running state)`,
        );
      }

      internals.restartInProgress = true;
      try {
        await serverApi.stop();

        // Reset internals to idle for a fresh start
        internals.status = 'idle';
        resetInternals(internals);

        // Re-create hot reload orchestrator for the new session
        setupHotReload();

        return await serverApi.start();
      } finally {
        internals.restartInProgress = false;
      }
    },

    getStatus(): DevServerStatus {
      return internals.status;
    },

    getStats(): DevServerStats {
      return {
        buildCount: internals.buildCount,
        rebuildCount: internals.rebuildCount,
        hotReloadCount: internals.hotReloadCount,
        errorCount: internals.errorCount,
        totalBuildMs: internals.totalBuildMs,
        lastBuildMs: internals.lastBuildMs,
        uptime: internals.startTime ? Date.now() - internals.startTime : 0,
      };
    },

    getLastPipelineResult(): BuildPipelineResult | undefined {
      return internals.lastPipelineResult;
    },

    on(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void): void {
      if (!internals.listeners.has(event)) {
        internals.listeners.set(event, new Set());
      }
      internals.listeners.get(event)!.add(handler);
    },

    off(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void): void {
      internals.listeners.get(event)?.delete(handler);
    },
  };

  // Auto-wire DevConsole if provided
  if (options.console) {
    internals.consoleDisconnect = options.console.connectToDevServer(serverApi);
  }

  return serverApi;
}
