import { resolve } from 'node:path';
import chokidar from 'chokidar';
import type { Diagnostic } from '../compiler/diagnostics.js';
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
  watcher?: ReturnType<typeof chokidar.watch>;
  debounceTimer?: ReturnType<typeof setTimeout>;
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

function effectiveDebounceMs(internals: SessionInternals): number {
  return internals.options.debounceMs ?? internals.config.dev.debounceMs;
}

function effectiveWatchPaths(internals: SessionInternals): readonly string[] {
  const paths = internals.options.watchPaths ?? internals.config.dev.watchPaths;
  return paths.map((p) => resolve(internals.config.configDir, p));
}

function effectiveIgnorePatterns(internals: SessionInternals): readonly string[] {
  return internals.options.ignorePatterns ?? internals.config.dev.ignorePatterns;
}

function shouldIgnoreFile(filePath: string, patterns: readonly string[]): boolean {
  if (patterns.length === 0) return false;
  const normalized = filePath.replace(/\\/g, '/');
  for (const pattern of patterns) {
    if (normalized.includes(pattern)) return true;
    if (pattern.startsWith('*.')) {
      const ext = pattern.slice(1);
      if (normalized.endsWith(ext)) return true;
    }
  }
  return false;
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

      if (internals.config.dev.hotReload && internals.hotReloadClient?.isConnected()) {
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
  if (!internals.hotReloadClient) return;

  const start = performance.now();
  try {
    const result = await internals.hotReloadClient.reload(changedFiles, internals.config.outDir);
    const durationMs = performance.now() - start;

    if (result.success) {
      internals.hotReloadCount++;
      const data: HotReloadData = {
        durationMs,
        filesReloaded: changedFiles,
      };
      emit(internals, 'hot-reload', data);
    } else {
      emit(internals, 'hot-reload-error', {
        error: result.error ?? 'Hot reload failed',
        durationMs,
      });
    }
  } catch (err) {
    const durationMs = performance.now() - start;
    emit(internals, 'hot-reload-error', {
      error: err instanceof Error ? err.message : String(err),
      durationMs,
    });
  }
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

// ─── Watch setup ────────────────────────────────────────────

function startWatching(internals: SessionInternals): void {
  const watchPaths = effectiveWatchPaths(internals);
  const ignorePatterns = effectiveIgnorePatterns(internals);
  const debounceMs = effectiveDebounceMs(internals);

  const ignored = ['**/node_modules/**', '**/.git/**', internals.config.outDir];

  const watcher = chokidar.watch(watchPaths as string[], {
    ignored,
    ignoreInitial: true,
    usePolling: true,
    interval: 100,
  });

  function handleFileEvent(eventType: 'add' | 'change' | 'unlink', filePath: string): void {
    if (internals.state === 'stopping' || internals.state === 'stopped') return;

    if (shouldIgnoreFile(filePath, ignorePatterns)) return;

    // Only watch .ts files (match compiler-watcher behavior)
    const normalized = filePath.replace(/\\/g, '/');
    if (!normalized.endsWith('.ts') && !normalized.endsWith('/tsconfig.json')) return;

    const changeData: FileChangeData = {
      files: [filePath],
      type: eventType,
    };
    emit(internals, 'file-change', changeData);

    internals.changedFilesBatch.push(filePath);

    if (internals.rebuildInProgress) {
      internals.pendingRebuild = true;
      return;
    }

    if (internals.debounceTimer) {
      clearTimeout(internals.debounceTimer);
    }

    internals.debounceTimer = setTimeout(() => {
      internals.debounceTimer = undefined;
      performRebuild(internals).catch(() => {
        // Errors already emitted via events
      });
    }, debounceMs);
  }

  watcher.on('change', (path) => handleFileEvent('change', path));
  watcher.on('add', (path) => handleFileEvent('add', path));
  watcher.on('unlink', (path) => handleFileEvent('unlink', path));

  internals.watcher = watcher;
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

      if (internals.debounceTimer) {
        clearTimeout(internals.debounceTimer);
        internals.debounceTimer = undefined;
      }

      if (internals.watcher) {
        await internals.watcher.close();
        internals.watcher = undefined;
      }

      if (internals.hotReloadClient) {
        internals.hotReloadClient.dispose();
      }

      transition(internals, 'stopped');
      emit(internals, 'exit');
    },

    async rebuild(): Promise<BuildPipelineResult> {
      if (internals.state !== 'watching' && internals.state !== 'rebuilding') {
        throw new Error(
          `Cannot rebuild: session is in '${internals.state}' state (expected 'watching')`,
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
      return performRebuild(internals);
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
