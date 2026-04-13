import { createDevServer, type DevServerInternal } from '../dev-tools/dev-server.js';
import type {
  DevServerEventPayload,
  DevServerFileChangeData,
  DevServerStatus,
} from '../dev-tools/dev-types.js';
import type {
  BuildPipelineResult,
  DevSessionEvent,
  DevSessionEventType,
  DevSessionOptions,
  DevSessionState,
  DevSessionStats,
  FileChangeData,
} from './build-types.js';
import type { ResolvedQmltsConfig } from './config-types.js';

// ─── DevSession interface ───────────────────────────────────
// DevSession is a backward-compatible wrapper over the canonical
// 09-dev-tools DevServer. It preserves the existing BuildPipelineResult
// return shape and event contract for callers in the build layer.

export interface DevSession {
  start(): Promise<BuildPipelineResult>;
  stop(): Promise<void>;
  rebuild(): Promise<BuildPipelineResult>;
  getState(): DevSessionState;
  getStats(): DevSessionStats;
  on(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void;
  off(event: DevSessionEventType, handler: (event: DevSessionEvent) => void): void;
}

interface SessionInternals {
  server: DevServerInternal;
  listeners: Map<DevSessionEventType, Set<(event: DevSessionEvent) => void>>;
}

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

function mapStatus(status: DevServerStatus): DevSessionState {
  switch (status) {
    case 'idle':
      return 'idle';
    case 'starting':
      return 'starting';
    case 'building':
      return 'building';
    case 'running':
      return 'watching';
    case 'reloading':
      return 'rebuilding';
    case 'stopping':
      return 'stopping';
    case 'stopped':
      return 'stopped';
  }
}

function toStateChangeData(data: unknown): { from: DevSessionState; to: DevSessionState } {
  const statusChange = data as { from: DevServerStatus; to: DevServerStatus };
  return {
    from: mapStatus(statusChange.from),
    to: mapStatus(statusChange.to),
  };
}

function attachServerEventBridges(internals: SessionInternals): void {
  const bridge = (
    serverEvent: string,
    sessionEvent: DevSessionEventType,
    mapData?: (data: unknown) => unknown,
  ): void => {
    const handler = (payload: DevServerEventPayload): void => {
      emit(internals, sessionEvent, mapData ? mapData(payload.data) : payload.data);
    };

    internals.server.on(serverEvent as never, handler);
  };

  bridge('build-start', 'build-start');
  bridge('build-success', 'build-success');
  bridge('build-error', 'build-error');
  bridge('rebuild-start', 'rebuild-start');
  bridge('rebuild-success', 'rebuild-success');
  bridge('rebuild-error', 'rebuild-error');
  bridge('hot-reload', 'hot-reload');
  bridge('hot-reload-error', 'hot-reload-error');
  bridge('exit', 'exit');
  bridge('status-change', 'state-change', toStateChangeData);
  const fileChangeHandler = (payload: DevServerEventPayload): void => {
    const batch = payload.data as DevServerFileChangeData;
    for (const file of batch.files) {
      emit(internals, 'file-change', {
        files: [file.path],
        type: file.type,
      } satisfies FileChangeData);
    }
  };
  internals.server.on('file-change', fileChangeHandler);
}

function getPipelineResultOrThrow(
  internals: SessionInternals,
  context: string,
): BuildPipelineResult {
  const result = internals.server.getLastPipelineResult();
  if (!result) {
    throw new Error(`${context} did not produce a BuildPipelineResult`);
  }
  return result;
}

function mapStats(stats: ReturnType<DevServerInternal['getStats']>): DevSessionStats {
  return {
    buildCount: stats.buildCount,
    rebuildCount: stats.rebuildCount,
    hotReloadCount: stats.hotReloadCount,
    errorCount: stats.errorCount,
    totalBuildMs: stats.totalBuildMs,
    lastBuildMs: stats.lastBuildMs,
    uptime: stats.uptime,
  };
}

function wrapSessionError(
  action: 'start' | 'rebuild',
  state: DevSessionState,
  expected: string,
): Error {
  return new Error(
    `Cannot ${action} DevSession: session is in '${state}' state (expected ${expected})`,
  );
}

function assertCanStart(internals: SessionInternals): void {
  const state = mapStatus(internals.server.getStatus());
  if (state !== 'idle') {
    throw wrapSessionError('start', state, "'idle'");
  }
}

function assertCanRebuild(internals: SessionInternals): void {
  const state = mapStatus(internals.server.getStatus());
  if (state !== 'watching' && state !== 'rebuilding') {
    throw wrapSessionError('rebuild', state, "'watching' or 'rebuilding'");
  }
}

function normalizeSessionError(action: 'start' | 'rebuild', error: unknown): never {
  if (error instanceof Error) {
    const statusMatch = error.message.match(/server is in '([^']+)' state/);
    if (statusMatch) {
      const status = statusMatch[1] as DevServerStatus;
      const state = mapStatus(status);
      const expected = action === 'start' ? "'idle'" : "'watching' or 'rebuilding'";
      throw wrapSessionError(action, state, expected);
    }
  }
  throw error;
}

export function createDevSession(
  config: ResolvedQmltsConfig,
  options: DevSessionOptions = {},
  hotReloadClient?: import('./build-types.js').HotReloadClient,
): DevSession {
  const server = createDevServer(config, {
    entry: options.entry,
    headless: options.headless,
    verbose: options.verbose,
    debounceMs: options.debounceMs,
    watchPaths: options.watchPaths,
    ignorePatterns: options.ignorePatterns,
    preserveOnError: options.preserveOnError,
    hotReloadClient,
  });

  const internals: SessionInternals = {
    server,
    listeners: new Map(),
  };

  attachServerEventBridges(internals);

  return {
    async start(): Promise<BuildPipelineResult> {
      assertCanStart(internals);
      try {
        await internals.server.start();
        return getPipelineResultOrThrow(internals, 'DevSession.start()');
      } catch (error) {
        normalizeSessionError('start', error);
      }
    },

    async stop(): Promise<void> {
      await internals.server.stop();
    },

    async rebuild(): Promise<BuildPipelineResult> {
      assertCanRebuild(internals);
      try {
        await internals.server.rebuild();
        return getPipelineResultOrThrow(internals, 'DevSession.rebuild()');
      } catch (error) {
        normalizeSessionError('rebuild', error);
      }
    },

    getState(): DevSessionState {
      return mapStatus(internals.server.getStatus());
    },

    getStats(): DevSessionStats {
      return mapStats(internals.server.getStats());
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
