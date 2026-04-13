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
  hotReloadOrchestrator: HotReloadOrchestrator | undefined;
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

function transition(internals: ServerInternals, newStatus: DevServerStatus): void {
  const oldStatus = internals.status;
  if (oldStatus === newStatus) return;
  internals.status = newStatus;
  const data: StatusChangeData = { from: oldStatus, to: newStatus };
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
  if (previousStatus === 'running') {
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
      transition(internals, 'running');
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
      transition(internals, 'running');
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
  transition(internals, 'running');
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
    hotReloadOrchestrator: undefined,
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
  };

  // Set up hot reload orchestrator if client provided
  if (options.hotReloadClient) {
    internals.hotReloadOrchestrator = createHotReloadOrchestrator({
      client: options.hotReloadClient,
    });
  }

  // Wire error overlay if provided
  if (options.errorOverlay) {
    const overlay = options.errorOverlay;

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
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('rebuild-error', (payload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('hot-reload-error', (payload) => {
      const data = payload.data as DevServerHotReloadErrorData | undefined;
      if (data) {
        overlay.show([
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
      overlay.hide();
    });
  }

  return {
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
      if (internals.status !== 'running' && internals.status !== 'reloading') {
        throw new Error(
          `Cannot rebuild: server is in '${internals.status}' state (expected 'running' or 'reloading')`,
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
}
