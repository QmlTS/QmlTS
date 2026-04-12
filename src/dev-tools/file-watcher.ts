import { resolve } from 'node:path';
import chokidar from 'chokidar';
import type { FileChange, FileChangeBatch, FileWatcher, FileWatcherOptions } from './dev-types.js';

const DEFAULT_DEBOUNCE_MS = 200;
const DEFAULT_INCLUDE = ['**/*.ts', '**/tsconfig.json'];
const DEFAULT_EXCLUDE = ['**/node_modules/**', '**/.git/**'];

type FileWatcherEventMap = {
  change: (batch: FileChangeBatch) => void;
  error: (error: Error) => void;
  ready: () => void;
};

interface WatcherInternals {
  options: Required<
    Pick<FileWatcherOptions, 'debounceMs' | 'include' | 'exclude' | 'ignorePatterns'>
  >;
  paths: string[];
  watcher: ReturnType<typeof chokidar.watch> | undefined;
  running: boolean;
  debounceTimer: ReturnType<typeof setTimeout> | undefined;
  pendingChanges: FileChange[];
  rawChangeCount: number;
  listeners: {
    [K in keyof FileWatcherEventMap]: Set<FileWatcherEventMap[K]>;
  };
}

function emitEvent<K extends keyof FileWatcherEventMap>(
  internals: WatcherInternals,
  event: K,
  ...args: Parameters<FileWatcherEventMap[K]>
): void {
  const handlers = internals.listeners[event];
  for (const handler of handlers) {
    (handler as (...a: unknown[]) => void)(...args);
  }
}

function shouldIncludeFile(filePath: string, include: readonly string[]): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  for (const pattern of include) {
    if (pattern.startsWith('**/*.')) {
      const ext = pattern.slice(4);
      if (normalized.endsWith(ext)) return true;
    } else if (pattern.startsWith('*.')) {
      const ext = pattern.slice(1);
      if (normalized.endsWith(ext)) return true;
    } else if (pattern.endsWith('.json')) {
      if (normalized.endsWith(pattern.replace(/\*\*\//, ''))) return true;
    }
  }
  return false;
}

function shouldExcludeFile(filePath: string, patterns: readonly string[]): boolean {
  if (patterns.length === 0) return false;
  const normalized = filePath.replace(/\\/g, '/');
  for (const pattern of patterns) {
    const normalizedPattern = pattern.replace(/\\/g, '/');
    if (normalized.includes(normalizedPattern.replace(/\*\*/g, '').replace(/\*/g, ''))) {
      return true;
    }
    if (normalizedPattern.startsWith('*.')) {
      const ext = normalizedPattern.slice(1);
      if (normalized.endsWith(ext)) return true;
    }
  }
  return false;
}

function flushBatch(internals: WatcherInternals): void {
  if (internals.pendingChanges.length === 0) return;

  // Deduplicate: keep only the latest change per path
  const byPath = new Map<string, FileChange>();
  for (const change of internals.pendingChanges) {
    byPath.set(change.path, change);
  }

  const batch: FileChangeBatch = {
    files: [...byPath.values()],
    rawChangeCount: internals.rawChangeCount,
    timestamp: Date.now(),
  };

  internals.pendingChanges = [];
  internals.rawChangeCount = 0;

  emitEvent(internals, 'change', batch);
}

function handleFileEvent(
  internals: WatcherInternals,
  eventType: 'add' | 'change' | 'unlink',
  filePath: string,
): void {
  if (!internals.running) return;

  // Apply include filter
  if (!shouldIncludeFile(filePath, internals.options.include)) return;

  // Apply exclude filter
  if (shouldExcludeFile(filePath, internals.options.exclude)) return;

  // Apply ignore patterns
  if (shouldExcludeFile(filePath, internals.options.ignorePatterns)) return;

  internals.pendingChanges.push({ path: filePath, type: eventType });
  internals.rawChangeCount++;

  // Reset debounce timer
  if (internals.debounceTimer) {
    clearTimeout(internals.debounceTimer);
  }

  internals.debounceTimer = setTimeout(() => {
    internals.debounceTimer = undefined;
    flushBatch(internals);
  }, internals.options.debounceMs);
}

export function createFileWatcher(options: FileWatcherOptions): FileWatcher {
  const internals: WatcherInternals = {
    options: {
      debounceMs: options.debounceMs ?? DEFAULT_DEBOUNCE_MS,
      include: options.include ?? DEFAULT_INCLUDE,
      exclude: options.exclude ?? DEFAULT_EXCLUDE,
      ignorePatterns: options.ignorePatterns ?? [],
    },
    paths: options.paths.map((p) => resolve(p)),
    watcher: undefined,
    running: false,
    debounceTimer: undefined,
    pendingChanges: [],
    rawChangeCount: 0,
    listeners: {
      change: new Set(),
      error: new Set(),
      ready: new Set(),
    },
  };

  return {
    start(): void {
      if (internals.running) return;
      internals.running = true;

      const ignored = [...DEFAULT_EXCLUDE];

      const watcher = chokidar.watch(internals.paths, {
        ignored,
        ignoreInitial: true,
        usePolling: true,
        interval: 100,
      });

      watcher.on('change', (path) => handleFileEvent(internals, 'change', path));
      watcher.on('add', (path) => handleFileEvent(internals, 'add', path));
      watcher.on('unlink', (path) => handleFileEvent(internals, 'unlink', path));
      watcher.on('ready', () => emitEvent(internals, 'ready'));
      watcher.on('error', (err: unknown) =>
        emitEvent(internals, 'error', err instanceof Error ? err : new Error(String(err))),
      );

      internals.watcher = watcher;
    },

    stop(): void {
      if (!internals.running) return;
      internals.running = false;

      if (internals.debounceTimer) {
        clearTimeout(internals.debounceTimer);
        internals.debounceTimer = undefined;
      }

      internals.pendingChanges = [];
      internals.rawChangeCount = 0;

      if (internals.watcher) {
        const watcher = internals.watcher;
        internals.watcher = undefined;
        void watcher
          .close()
          .catch((err: unknown) =>
            emitEvent(internals, 'error', err instanceof Error ? err : new Error(String(err))),
          );
      }
    },

    get running(): boolean {
      return internals.running;
    },

    addPath(path: string): void {
      const resolved = resolve(path);
      if (!internals.paths.includes(resolved)) {
        internals.paths.push(resolved);
        internals.watcher?.add(resolved);
      }
    },

    removePath(path: string): void {
      const resolved = resolve(path);
      const idx = internals.paths.indexOf(resolved);
      if (idx !== -1) {
        internals.paths.splice(idx, 1);
        internals.watcher?.unwatch(resolved);
      }
    },

    on(event: string, handler: any): void {
      const key = event as keyof FileWatcherEventMap;
      if (key in internals.listeners) {
        (internals.listeners[key] as Set<any>).add(handler);
      }
    },

    off(event: string, handler: any): void {
      const key = event as keyof FileWatcherEventMap;
      if (key in internals.listeners) {
        (internals.listeners[key] as Set<any>).delete(handler);
      }
    },
  };
}
