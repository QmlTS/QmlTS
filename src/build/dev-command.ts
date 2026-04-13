import { createDevConsole } from '../dev-tools/dev-console.js';
import type { DevConsole, FileChangeBatch } from '../dev-tools/dev-types.js';
import type { BuildResultData, DevSessionOptions } from './build-types.js';
import { loadConfig } from './config-loader.js';
import { createDevSession, type DevSession } from './dev-session.js';

export interface DevCommandResult {
  readonly session: DevSession;
  readonly console?: DevConsole;
  readonly initialBuildSuccess: boolean;
}

export async function executeDev(options: DevSessionOptions = {}): Promise<DevCommandResult> {
  const config = await loadConfig(options.config);

  const effectiveConfig = {
    ...config,
    dev: {
      ...config.dev,
      ...(options.debounceMs !== undefined && { debounceMs: options.debounceMs }),
      ...(options.preserveOnError !== undefined && {
        preserveOnError: options.preserveOnError,
      }),
      ...(options.watchPaths !== undefined && { watchPaths: options.watchPaths }),
      ...(options.ignorePatterns !== undefined && {
        ignorePatterns: options.ignorePatterns,
      }),
    },
  };

  const session = createDevSession(effectiveConfig, options);
  let devConsole: DevConsole | undefined;

  if (options.verbose) {
    devConsole = createDevConsole({
      level: 'debug',
      color: true,
      timestamp: true,
    });

    session.on('build-start', () => {
      devConsole!.buildStart([]);
    });

    session.on('build-success', (event) => {
      const data = event.data as BuildResultData | undefined;
      devConsole!.buildSuccess({
        durationMs: data?.durationMs ?? 0,
        filesCompiled: data?.stats?.totalFiles ?? 0,
        qmlFilesGenerated: data?.stats?.totalViews ?? 0,
      });
    });

    session.on('build-error', (event) => {
      const data = event.data as BuildResultData | undefined;
      devConsole!.buildError(data?.diagnostics ?? []);
    });

    session.on('file-change', (event) => {
      const data = event.data as { files: readonly string[] } | undefined;
      const batch: FileChangeBatch = {
        files: (data?.files ?? []).map((f) => ({ path: f, type: 'change' as const })),
        rawChangeCount: data?.files.length ?? 0,
        timestamp: event.timestamp,
      };
      devConsole!.fileChange(batch);
    });

    session.on('rebuild-start', () => {
      devConsole!.buildStart([]);
    });

    session.on('rebuild-success', (event) => {
      const data = event.data as BuildResultData | undefined;
      devConsole!.buildSuccess({
        durationMs: data?.durationMs ?? 0,
        filesCompiled: data?.stats?.totalFiles ?? 0,
        qmlFilesGenerated: data?.stats?.totalViews ?? 0,
      });
    });

    session.on('rebuild-error', (event) => {
      const data = event.data as BuildResultData | undefined;
      devConsole!.buildError(data?.diagnostics ?? []);
    });

    session.on('hot-reload', (event) => {
      const data = event.data as
        | { durationMs: number; filesReloaded?: string[]; sequence?: number }
        | undefined;
      devConsole!.hotReload({
        success: true,
        durationMs: data?.durationMs ?? 0,
        filesReloaded: data?.filesReloaded ?? [],
        sequence: data?.sequence ?? 0,
      });
    });

    session.on('hot-reload-error', (event) => {
      const data = event.data as
        | { error: string; durationMs?: number; sequence?: number }
        | undefined;
      devConsole!.hotReload({
        success: false,
        durationMs: data?.durationMs ?? 0,
        filesReloaded: [],
        sequence: data?.sequence ?? 0,
        error: data?.error ?? 'Unknown error',
      });
    });

    session.on('state-change', (event) => {
      const data = event.data as { from: string; to: string } | undefined;
      if (data) {
        devConsole!.serverStatus({
          status: data.to as 'running' | 'stopped' | 'starting' | 'stopping',
          entry: config.entry,
          watchPaths: config.dev?.watchPaths ?? [],
          hotReload: true,
        });
      }
    });
  }

  const result = await session.start();

  return {
    session,
    console: devConsole,
    initialBuildSuccess: result.success,
  };
}
