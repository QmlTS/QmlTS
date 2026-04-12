import { resolve } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type {
  FileChangeBatch,
  FileWatcher,
  HotReloadOrchestrator,
} from '../dev-tools/dev-types.js';
import { createFileWatcher } from '../dev-tools/file-watcher.js';
import { createHotReloadOrchestrator } from '../dev-tools/hot-reload-orchestrator.js';
import { createBuildPipeline } from './build-pipeline.js';
import type {
  BuildPipelineResult,
  BuildResultData,
  DevSessionEvent,
  DevSessionEventType,
  DevSessionOptions,
  DevSessionState,
  DevSessionStats,
  FileChangeData,
  HotReloadClient,
  HotReloadData,
  PipelineRunOptions,
} from './build-types.js';
import type { ResolvedQmltsConfig } from './config-types.js';

// ─── DevSession interface ───────────────────────────────────
// DevSession composes the dev-tools primitives (FileWatcher,
// HotReloadOrchestrator) with BuildPipeline. This ensures it
// uses the same unified path as DevServer while preserving
// full BuildPipelineResult backward compatibility.

export interface DevSession {
  start(): Promise<BuildPipelineResult>;
  stop(): Promise<void>;
  rebuild(): Promise<BuildPipelineResult>;
  getState(): DevSessionState;
  getStats(): DevSessionStats;
  on(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void;
  off(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void;
}

// ─── Internal state ─────────────────────────────────────────

interface SessionInternals {
  state: DevSessionState;
  config: ResolvedQmltsConfig;
  options: DevSessionOptions;
  hotReloadClient?: HotReloadClient;
  fileWatcher?: FileWatcher;
  hotReloadOrchestrator?: HotReloadOrchestrator;
  listeners: Map<DevSessionEventType, Set<(event: DevSessionEvent) => void>>;
  startTime?: number;
  buildCount: number;
  rebuildCount: number;
  hotReloadCount: number;
  errorCount: number;
  totalBuildMs: number;
  lastBuildMs?: number;
  lastSuccessfulResult?: BuildPipelineResult;
  pendingRebuild: boolean;
  rebuildInProgress: boolean;
  changedFilesBatch: string[];
  activeRebuildPromise?: Promise<BuildPipelineResult>;
  queuedRebuildWaiters: Array<{
    resolve: (result: BuildPipelineResult) => void;
    reject: (error: unknown) => void;
  }>;
}

// ─── Helpers ────────────────────────────────────────────────

function emit(internals: SessionInternals, type: DevSessionEventType, data?: unknown): void {
  const event: DevSessionEvent = {
    type,
    timestamp: Date.now(),
    data,
  };
  const handlers = internals.listeners.get(type);
  if (handlers) {
    for (const handler of handlers) {
      handler(event);
    }
  }
}

function transition(internals: SessionInternals, newState: DevSessionState): void {
  const oldState = internals.state;
  if (oldState === newState) return;
  internals.state = newState;
  emit(internals, 'state-change', { from: oldState, to: newState });
}

function resolveQueuedRebuilds(internals: SessionInternals, result: BuildPipelineResult): void {
  const waiters = [...internals.queuedRebuildWaiters];
  internals.queuedRebuildWaiters = [];
  for (const waiter of waiters) {
    waiter.resolve(result);
  }
}

function rejectQueuedRebuilds(internals: SessionInternals, error: unknown): void {
  const waiters = [...internals.queuedRebuildWaiters];
  internals.queuedRebuildWaiters = [];
  for (const waiter of waiters) {
    waiter.reject(error);
  }
}

function runRebuild(internals: SessionInternals): Promise<BuildPipelineResult> {
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

function collectDiagnostics(result: BuildPipelineResult): readonly Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [, phaseResult] of result.phases) {
    for (const d of phaseResult.diagnostics) {
      diagnostics.push(d);
    }
  }
  return diagnostics;
}

// ─── Rebuild logic ──────────────────────────────────────────

async function performRebuild(internals: SessionInternals): Promise<BuildPipelineResult> {
  internals.rebuildInProgress = true;
  const changedFiles = [...internals.changedFilesBatch];
  internals.changedFilesBatch = [];

  transition(internals, 'rebuilding');
  emit(internals, 'rebuild-start', { files: changedFiles });

  const start = performance.now();

  try {
    const pipelineOpts: PipelineRunOptions = {
      files: changedFiles.length > 0 ? changedFiles : undefined,
    };

    const pipeline = createBuildPipeline(internals.config);
    const result = await pipeline.run(pipelineOpts);
    const durationMs = performance.now() - start;

    internals.rebuildCount++;
    internals.totalBuildMs += durationMs;
    internals.lastBuildMs = durationMs;

    if (result.success) {
      internals.lastSuccessfulResult = result;

      const buildData: BuildResultData = {
        success: true,
        durationMs,
        diagnostics: collectDiagnostics(result),
        stats: result.compilationStats,
      };
      emit(internals, 'rebuild-success', buildData);

      // Use HotReloadOrchestrator from dev-tools for hot reload
      if (
        internals.state !== 'stopping' &&
        internals.state !== 'stopped' &&
        internals.config.dev.hotReload &&
        internals.hotReloadOrchestrator
      ) {
        await performHotReload(internals, changedFiles);
      }
    } else {
      internals.errorCount++;
      const buildData: BuildResultData = {
        success: false,
        durationMs,
        diagnostics: collectDiagnostics(result),
        stats: result.compilationStats,
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

    if (internals.state === 'rebuilding') {
      transition(internals, 'watching');
    }

    resolveQueuedRebuilds(internals, result);
    return result;
  } catch (err) {
    internals.rebuildInProgress = false;
    internals.errorCount++;
    const durationMs = performance.now() - start;

    const buildData: BuildResultData = {
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

    if (internals.state === 'rebuilding') {
      transition(internals, 'watching');
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
  internals: SessionInternals,
  changedFiles: readonly string[],
): Promise<void> {
  if (!internals.hotReloadOrchestrator) return;

  const result = await internals.hotReloadOrchestrator.reload(
    changedFiles,
    internals.config.outDir,
  );

  if (result.success) {
    internals.hotReloadCount++;
    const data: HotReloadData = {
      durationMs: result.durationMs,
      filesReloaded: [...result.filesReloaded],
    };
    emit(internals, 'hot-reload', data);
  } else {
    emit(internals, 'hot-reload-error', {
      error: result.error ?? 'Hot reload failed',
      durationMs: result.durationMs,
    });
  }
}

// ─── Watch setup (uses dev-tools FileWatcher) ───────────────

function startWatching(internals: SessionInternals): void {
  const watchPaths = (internals.options.watchPaths ?? internals.config.dev.watchPaths).map((p) =>
    resolve(internals.config.configDir, p),
  );
  const ignorePatterns = internals.options.ignorePatterns ?? internals.config.dev.ignorePatterns;
  const effectiveIgnorePatterns = [
    ...ignorePatterns,
    resolve(internals.config.configDir, internals.config.outDir),
  ];
  const debounceMs = internals.options.debounceMs ?? internals.config.dev.debounceMs;

  // Use canonical FileWatcher from dev-tools
  const fileWatcher = createFileWatcher({
    paths: watchPaths,
    debounceMs,
    ignorePatterns: effectiveIgnorePatterns,
  });

  fileWatcher.on('change', (batch: FileChangeBatch) => {
    if (internals.state === 'stopping' || internals.state === 'stopped') return;

    // Emit per-file change events for backward compatibility
    for (const file of batch.files) {
      const changeData: FileChangeData = {
        files: [file.path],
        type: file.type,
      };
      emit(internals, 'file-change', changeData);
    }

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
  transition(internals, 'watching');
}

// ─── Factory ────────────────────────────────────────────────

export function createDevSession(
  config: ResolvedQmltsConfig,
  options: DevSessionOptions = {},
  hotReloadClient?: HotReloadClient,
): DevSession {
  const internals: SessionInternals = {
    state: 'idle',
    config,
    options,
    hotReloadClient,
    listeners: new Map(),
    buildCount: 0,
    rebuildCount: 0,
    hotReloadCount: 0,
    errorCount: 0,
    totalBuildMs: 0,
    pendingRebuild: false,
    rebuildInProgress: false,
    changedFilesBatch: [],
    queuedRebuildWaiters: [],
  };

  // Set up HotReloadOrchestrator from dev-tools if client provided
  if (hotReloadClient) {
    internals.hotReloadOrchestrator = createHotReloadOrchestrator({
      client: hotReloadClient,
    });
  }

  return {
    async start(): Promise<BuildPipelineResult> {
      if (internals.state !== 'idle') {
        throw new Error(
          `Cannot start DevSession: session is in '${internals.state}' state (expected 'idle')`,
        );
      }

      internals.startTime = Date.now();
      transition(internals, 'starting');

      // Apply entry override if provided
      const effectiveConfig = options.entry
        ? { ...config, entry: resolve(config.configDir, options.entry) }
        : config;
      internals.config = effectiveConfig;

      transition(internals, 'building');
      emit(internals, 'build-start');

      const start = performance.now();
      const pipeline = createBuildPipeline(effectiveConfig);
      const result = await pipeline.run();
      const durationMs = performance.now() - start;

      internals.buildCount++;
      internals.totalBuildMs += durationMs;
      internals.lastBuildMs = durationMs;

      if (result.success) {
        internals.lastSuccessfulResult = result;
        const buildData: BuildResultData = {
          success: true,
          durationMs,
          diagnostics: collectDiagnostics(result),
          stats: result.compilationStats,
        };
        emit(internals, 'build-success', buildData);
      } else {
        internals.errorCount++;
        const buildData: BuildResultData = {
          success: false,
          durationMs,
          diagnostics: collectDiagnostics(result),
          stats: result.compilationStats,
        };
        emit(internals, 'build-error', buildData);
      }

      startWatching(internals);

      return result;
    },

    async stop(): Promise<void> {
      if (internals.state === 'stopped') return;

      transition(internals, 'stopping');

      // Stop FileWatcher from dev-tools
      if (internals.fileWatcher) {
        internals.fileWatcher.stop();
        internals.fileWatcher = undefined;
      }

      internals.pendingRebuild = false;
      internals.changedFilesBatch = [];
      if (internals.queuedRebuildWaiters.length > 0) {
        rejectQueuedRebuilds(
          internals,
          new Error('DevSession stopped before queued rebuild completed'),
        );
      }

      if (internals.activeRebuildPromise) {
        try {
          await internals.activeRebuildPromise;
        } catch {
          // Rebuild errors are already surfaced through session events.
        }
      }

      // Dispose HotReloadOrchestrator from dev-tools
      if (internals.hotReloadOrchestrator) {
        internals.hotReloadOrchestrator.dispose();
        internals.hotReloadOrchestrator = undefined;
      }

      transition(internals, 'stopped');
      emit(internals, 'exit');
    },

    async rebuild(): Promise<BuildPipelineResult> {
      if (internals.state !== 'watching' && internals.state !== 'rebuilding') {
        throw new Error(
          `Cannot rebuild: session is in '${internals.state}' state (expected 'watching' or 'rebuilding')`,
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

    getState(): DevSessionState {
      return internals.state;
    },

    getStats(): DevSessionStats {
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

    on(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void {
      if (!internals.listeners.has(event)) {
        internals.listeners.set(event, new Set());
      }
      internals.listeners.get(event)!.add(handler);
    },

    off(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void {
      internals.listeners.get(event)?.delete(handler);
    },
  };
}
