import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { compileSource } from '../compiler/pipeline/compiler.js';
import type { QmltsRepl, ReplMode, ReplOptions, ReplResult } from './dev-types.js';

const DEFAULT_MAX_HISTORY = 100;

/**
 * Create an interactive REPL for evaluating QML or TypeScript DSL expressions.
 *
 * - **QML mode**: Input is treated as raw QML and loaded directly into the host.
 * - **TS mode**: Input is compiled through the QmlTS compiler pipeline first,
 *   then the resulting QML is loaded into the host.
 */
export function createRepl(options: ReplOptions): QmltsRepl {
  const host = options.host;
  const maxHistory = options.maxHistory ?? DEFAULT_MAX_HISTORY;
  const historyFile = options.historyFile;

  let currentMode: ReplMode = options.defaultMode ?? 'qml';
  let started = false;
  let hasLoadedOnce = false;
  const entries: string[] = [];

  const repl: QmltsRepl = {
    get mode(): ReplMode {
      return currentMode;
    },

    get history(): readonly string[] {
      return entries;
    },

    async start(): Promise<void> {
      if (started) return;
      started = true;
      hasLoadedOnce = false;
      loadHistory();
    },

    async stop(): Promise<void> {
      if (!started) return;
      saveHistory();
      started = false;
      hasLoadedOnce = false;
    },

    setMode(mode: ReplMode): void {
      currentMode = mode;
    },

    async eval(input: string): Promise<ReplResult> {
      if (!started) {
        throw new Error('REPL is not started. Call start() first.');
      }

      addHistoryEntry(input);

      const startTime = performance.now();

      if (currentMode === 'qml') {
        return evalQml(input, startTime);
      }
      return evalTs(input, startTime);
    },
  };

  function evalQml(input: string, startTime: number): ReplResult {
    try {
      loadOrReload(input);
      host.processEvents();
      const durationMs = Math.round(performance.now() - startTime);
      return { success: true, durationMs };
    } catch (err) {
      const durationMs = Math.round(performance.now() - startTime);
      return { success: false, durationMs, error: errorMessage(err) };
    }
  }

  function evalTs(input: string, startTime: number): ReplResult {
    try {
      const unit = compileSource(input);
      const errors = unit.diagnostics.filter((d) => d.severity === 'error');

      if (errors.length > 0) {
        const durationMs = Math.round(performance.now() - startTime);
        const msg = errors.map((d) => d.message).join('\n');
        return { success: false, durationMs, error: msg };
      }

      if (!unit.qmlContent) {
        const durationMs = Math.round(performance.now() - startTime);
        return {
          success: false,
          durationMs,
          error: 'Compilation produced no QML output',
        };
      }

      loadOrReload(unit.qmlContent);
      host.processEvents();
      const durationMs = Math.round(performance.now() - startTime);
      return { success: true, durationMs, qmlOutput: unit.qmlContent };
    } catch (err) {
      const durationMs = Math.round(performance.now() - startTime);
      return { success: false, durationMs, error: errorMessage(err) };
    }
  }

  function loadOrReload(qml: string): void {
    if (hasLoadedOnce) {
      host.reloadQml(qml);
    } else {
      host.loadString(qml);
      hasLoadedOnce = true;
    }
  }

  function addHistoryEntry(input: string): void {
    entries.push(input);
    if (maxHistory > 0 && entries.length > maxHistory) {
      entries.splice(0, entries.length - maxHistory);
    }
  }

  function loadHistory(): void {
    if (!historyFile) return;
    entries.length = 0;
    try {
      if (!existsSync(historyFile)) {
        return;
      }

      const raw = readFileSync(historyFile, 'utf-8');
      const loadedEntries = parseHistoryEntries(raw);
      const start = maxHistory > 0 ? Math.max(0, loadedEntries.length - maxHistory) : 0;
      for (let i = start; i < loadedEntries.length; i++) {
        entries.push(loadedEntries[i]!);
      }
    } catch {
      // Ignore history load failures — non-critical
    }
  }

  function saveHistory(): void {
    if (!historyFile) return;
    try {
      const dir = dirname(historyFile);
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      writeFileSync(historyFile, `${JSON.stringify(entries, null, 2)}\n`, 'utf-8');
    } catch {
      // Ignore history save failures — non-critical
    }
  }

  function parseHistoryEntries(raw: string): string[] {
    const trimmed = raw.trim();
    if (trimmed.length === 0) {
      return [];
    }

    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.filter((entry): entry is string => typeof entry === 'string');
      }
    } catch {
      // Fall through to legacy line-based parsing for backward compatibility.
    }

    return raw.split('\n').filter((line) => line.length > 0);
  }

  function errorMessage(err: unknown): string {
    if (err instanceof Error) return err.message;
    return String(err);
  }

  return repl;
}
