import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import chokidar from 'chokidar';
import { createIncrementalCompiler } from './incremental-compiler.js';
import type { CompilationResult, CompilerOptions, CompilerWatcher } from './pipeline-types.js';

/**
 * Watch a project directory for .ts file changes and trigger incremental
 * recompilation on each change.
 *
 * The initial compile callback is deferred until chokidar is ready to
 * detect file changes, so consumers can safely modify files after
 * receiving the first callback.
 */
export function watch(
  options: CompilerOptions,
  callback: (result: CompilationResult) => void,
): CompilerWatcher {
  const ic = createIncrementalCompiler();
  const debounceMs = options.watch?.debounceMs ?? 100;
  let closed = false;
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;
  const resolvedInputDir = resolve(options.inputDir).replace(/\\/g, '/').toLowerCase();
  const resolvedOutputDir = resolve(options.outputDir).replace(/\\/g, '/').toLowerCase();

  function isDirectoryPath(path: string, stats?: { isDirectory(): boolean }): boolean {
    if (stats) {
      return stats.isDirectory();
    }
    try {
      return statSync(path).isDirectory();
    } catch {
      return false;
    }
  }

  // Run initial compile synchronously but defer callback until watcher ready
  let initialResult: CompilationResult | undefined;
  try {
    initialResult = ic.compile(options);
  } catch {
    // Initial compile failure — still start watching
  }

  const watcher = chokidar.watch(options.inputDir, {
    ignored: (path: string, stats?: { isDirectory(): boolean }) => {
      const normalized = resolve(path).replace(/\\/g, '/').toLowerCase();
      const isDirectory = isDirectoryPath(path, stats);

      if (!normalized.startsWith(resolvedInputDir)) {
        return true;
      }
      if (normalized.startsWith(resolvedOutputDir)) {
        return true;
      }
      if (normalized.includes('/node_modules/')) {
        return true;
      }
      if (isDirectory) {
        return false;
      }

      return !normalized.endsWith('.ts') && !normalized.endsWith('/tsconfig.json');
    },
    ignoreInitial: true,
    usePolling: true,
    interval: 100,
  });

  function scheduleRecompile(): void {
    if (closed) return;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      if (closed) return;

      try {
        const result = ic.compile(options);
        if (!closed) callback(result);
      } catch {
        // Compilation error — watcher continues
      }
    }, debounceMs);
  }

  // Attach handlers immediately so events queued during scan are handled
  watcher.on('change', scheduleRecompile);
  watcher.on('add', scheduleRecompile);
  watcher.on('unlink', () => {
    ic.clearCache();
    scheduleRecompile();
  });
  watcher.on('ready', () => {
    if (!closed && initialResult) {
      callback(initialResult);
    }
  });

  function close(): void {
    closed = true;
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    watcher.close();
  }

  async function rebuild(): Promise<CompilationResult> {
    ic.clearCache();
    return ic.compile(options);
  }

  return { close, rebuild };
}
