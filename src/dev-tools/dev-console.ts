import type { Diagnostic } from '../compiler/diagnostics.js';
import type {
  BuildSuccessInfo,
  DevConsole,
  DevConsoleLevel,
  DevConsoleOptions,
  DevServer,
  DevServerBuildResultData,
  DevServerEventPayload,
  DevServerFileChangeData,
  DevServerHotReloadData,
  DevServerHotReloadErrorData,
  FileChangeBatch,
  HotReloadOrchestratorResult,
  InstanceContext,
  ServerStatusInfo,
  StatusChangeData,
} from './dev-types.js';

// ─── ANSI helpers ───────────────────────────────────────────

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const CYAN = '\x1b[36m';
const GRAY = '\x1b[90m';

// biome-ignore lint/suspicious/noControlCharactersInRegex: intentional ANSI stripping
const ANSI_RE = /\x1b\[[0-9;]*m/g;

function strip(text: string): string {
  return text.replace(ANSI_RE, '');
}

// ─── Level ordering ─────────────────────────────────────────

const LEVEL_ORDER: Record<DevConsoleLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

function shouldLog(msgLevel: DevConsoleLevel, threshold: DevConsoleLevel): boolean {
  return LEVEL_ORDER[msgLevel] >= LEVEL_ORDER[threshold];
}

function formatInstanceTag(ctx?: InstanceContext): string {
  if (!ctx) return '';
  return `[${ctx.className}#${ctx.instanceId}] `;
}

// ─── Formatting helpers ─────────────────────────────────────

function formatTimestamp(): string {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatDiagnostic(d: Diagnostic, useColor: boolean): string {
  const severity = d.severity === 'error' ? 'error' : d.severity;
  const sevColor = severity === 'error' ? RED : YELLOW;

  const loc =
    d.file == null
      ? ''
      : d.line != null && d.column != null
        ? `${d.file}:${d.line}:${d.column}`
        : d.line != null
          ? `${d.file}:${d.line}`
          : d.file;
  const code = d.code ? ` [${d.code}]` : '';

  if (useColor) {
    const locStr = loc ? `${DIM}${loc}${RESET} ` : '';
    return `  ${sevColor}${severity}${RESET}${code}: ${locStr}${d.message}`;
  }
  const locStr = loc ? `${loc} ` : '';
  return `  ${severity}${code}: ${locStr}${d.message}`;
}

// ─── Factory ────────────────────────────────────────────────

export function createDevConsole(options: DevConsoleOptions = {}): DevConsole {
  const level: DevConsoleLevel = options.level ?? 'info';
  const useColor = options.color ?? true;
  const useTimestamp = options.timestamp ?? false;
  const writeFn = options.write ?? ((text: string) => process.stdout.write(text));

  function output(msgLevel: DevConsoleLevel, text: string): void {
    if (!shouldLog(msgLevel, level)) return;

    let line = text;
    if (!useColor) {
      line = strip(line);
    }
    if (useTimestamp) {
      const ts = useColor ? `${GRAY}${formatTimestamp()}${RESET} ` : `${formatTimestamp()} `;
      line = ts + line;
    }
    writeFn(`${line}\n`);
  }

  const prefix = useColor ? `${CYAN}${BOLD}[qmlts]${RESET}` : '[qmlts]';

  const console: DevConsole = {
    buildStart(files: readonly string[]): void {
      const fileList = files.length > 0 ? ` (${files.length} files)` : '';
      output(
        'info',
        `${prefix} ${useColor ? BLUE : ''}Building...${useColor ? RESET : ''}${fileList}`,
      );
    },

    buildSuccess(info: BuildSuccessInfo): void {
      const dur = formatDuration(info.durationMs);
      const detail = `${info.filesCompiled} files compiled, ${info.qmlFilesGenerated} QML generated`;
      output(
        'info',
        `${prefix} ${useColor ? GREEN : ''}✓ Build succeeded${useColor ? RESET : ''} in ${dur} — ${detail}`,
      );
    },

    buildError(diagnostics: readonly Diagnostic[]): void {
      const errors = diagnostics.filter((d) => d.severity === 'error');
      const warnings = diagnostics.filter((d) => d.severity === 'warning');
      const summary = `${errors.length} error(s), ${warnings.length} warning(s)`;
      output(
        'error',
        `${prefix} ${useColor ? RED : ''}✗ Build failed${useColor ? RESET : ''} — ${summary}`,
      );
      for (const d of diagnostics) {
        if (d.severity === 'error' || d.severity === 'warning') {
          output('error', formatDiagnostic(d, useColor));
        }
      }
    },

    hotReload(result: HotReloadOrchestratorResult): void {
      if (result.success) {
        const dur = formatDuration(result.durationMs);
        const files = result.filesReloaded.length;
        output(
          'info',
          `${prefix} ${useColor ? GREEN : ''}⟳ Hot reload #${result.sequence}${useColor ? RESET : ''} in ${dur} (${files} file(s))`,
        );
      } else {
        const dur = formatDuration(result.durationMs);
        output(
          'error',
          `${prefix} ${useColor ? RED : ''}⟳ Hot reload #${result.sequence} failed${useColor ? RESET : ''} in ${dur}: ${result.error ?? 'unknown error'}`,
        );
      }
    },

    fileChange(batch: FileChangeBatch): void {
      const paths = batch.files.map((f) => f.path);
      const list =
        paths.length <= 3
          ? paths.join(', ')
          : `${paths.slice(0, 3).join(', ')} +${paths.length - 3} more`;
      output(
        'debug',
        `${prefix} ${useColor ? DIM : ''}File change: ${list}${useColor ? RESET : ''}`,
      );
    },

    serverStatus(info: ServerStatusInfo): void {
      const statusColor =
        info.status === 'running' ? GREEN : info.status === 'stopped' ? RED : YELLOW;
      const statusText = useColor ? `${statusColor}${info.status}${RESET}` : info.status;
      const details: string[] = [];
      if (info.entry) {
        details.push(`entry: ${info.entry}`);
      }
      if (info.watchPaths) {
        const count = info.watchPaths.length;
        details.push(`watch paths: ${count}`);
      }
      if (info.hotReload !== undefined) {
        details.push(`hot reload: ${info.hotReload ? 'on' : 'off'}`);
      }
      const detailSuffix = details.length > 0 ? ` — ${details.join(', ')}` : '';
      output('info', `${prefix} Server ${statusText}${detailSuffix}`);
    },

    info(message: string, instanceContext?: InstanceContext): void {
      output('info', `${prefix} ${formatInstanceTag(instanceContext)}${message}`);
    },

    warn(message: string, instanceContext?: InstanceContext): void {
      const tag = formatInstanceTag(instanceContext);
      output(
        'warn',
        `${prefix} ${useColor ? YELLOW : ''}⚠ ${tag}${message}${useColor ? RESET : ''}`,
      );
    },

    error(message: string, instanceContext?: InstanceContext): void {
      const tag = formatInstanceTag(instanceContext);
      output('error', `${prefix} ${useColor ? RED : ''}✗ ${tag}${message}${useColor ? RESET : ''}`);
    },

    debug(message: string, instanceContext?: InstanceContext): void {
      const tag = formatInstanceTag(instanceContext);
      output('debug', `${prefix} ${useColor ? DIM : ''}${tag}${message}${useColor ? RESET : ''}`);
    },

    clear(): void {
      writeFn('\x1b[2J\x1b[H');
    },

    connectToDevServer(server: DevServer): () => void {
      const handlers: Array<{ event: string; handler: (p: DevServerEventPayload) => void }> = [];

      function listen(
        event: Parameters<DevServer['on']>[0],
        handler: (p: DevServerEventPayload) => void,
      ): void {
        server.on(event, handler);
        handlers.push({ event, handler });
      }

      listen('build-start', () => {
        console.buildStart([]);
      });

      listen('build-success', (payload) => {
        const data = payload.data as DevServerBuildResultData | undefined;
        if (data) {
          console.buildSuccess({
            durationMs: data.durationMs,
            filesCompiled: data.stats?.totalFiles ?? 0,
            qmlFilesGenerated: data.stats?.totalViews ?? 0,
          });
        }
      });

      listen('build-error', (payload) => {
        const data = payload.data as DevServerBuildResultData | undefined;
        if (data?.diagnostics) {
          console.buildError(data.diagnostics);
        }
      });

      listen('rebuild-start', (payload) => {
        const data = payload.data as { files?: readonly string[] } | undefined;
        console.buildStart(data?.files ?? []);
      });

      listen('rebuild-success', (payload) => {
        const data = payload.data as DevServerBuildResultData | undefined;
        if (data) {
          console.buildSuccess({
            durationMs: data.durationMs,
            filesCompiled: data.stats?.totalFiles ?? 0,
            qmlFilesGenerated: data.stats?.totalViews ?? 0,
          });
        }
      });

      listen('rebuild-error', (payload) => {
        const data = payload.data as DevServerBuildResultData | undefined;
        if (data?.diagnostics) {
          console.buildError(data.diagnostics);
        }
      });

      listen('file-change', (payload) => {
        const data = payload.data as DevServerFileChangeData | undefined;
        if (data) {
          console.fileChange({
            files: data.files,
            rawChangeCount: data.rawChangeCount,
            timestamp: payload.timestamp,
          });
        }
      });

      listen('hot-reload', (payload) => {
        const data = payload.data as DevServerHotReloadData | undefined;
        if (data) {
          console.hotReload({
            success: true,
            sequence: data.sequence,
            durationMs: data.durationMs,
            filesReloaded: data.filesReloaded,
          });
        }
      });

      listen('hot-reload-error', (payload) => {
        const data = payload.data as DevServerHotReloadErrorData | undefined;
        if (data) {
          console.hotReload({
            success: false,
            sequence: data.sequence,
            durationMs: data.durationMs,
            filesReloaded: [],
            error: data.error,
          });
        }
      });

      listen('status-change', (payload) => {
        const data = payload.data as StatusChangeData | undefined;
        if (data) {
          const status = data.to;
          if (
            status === 'running' ||
            status === 'error' ||
            status === 'stopped' ||
            status === 'starting' ||
            status === 'stopping'
          ) {
            console.serverStatus({
              status,
              ...(data.entry !== undefined && { entry: data.entry }),
              ...(data.watchPaths !== undefined && {
                watchPaths: [...data.watchPaths],
              }),
              ...(data.hotReload !== undefined && { hotReload: data.hotReload }),
            });
          }
        }
      });

      return () => {
        for (const { event, handler } of handlers) {
          server.off(event as Parameters<DevServer['off']>[0], handler);
        }
        handlers.length = 0;
      };
    },
  };

  return console;
}
