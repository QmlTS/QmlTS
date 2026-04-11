import type { DevSessionOptions } from './build-types.js';
import { loadConfig } from './config-loader.js';
import { createDevSession, type DevSession } from './dev-session.js';

export interface DevCommandResult {
  readonly session: DevSession;
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

  if (options.verbose) {
    session.on('build-start', () => {
      console.info('[qmlts dev] Starting initial build...');
    });
    session.on('build-success', (event) => {
      const data = event.data as { durationMs: number };
      console.info(`[qmlts dev] Build succeeded in ${Math.round(data.durationMs)}ms`);
    });
    session.on('build-error', (event) => {
      const data = event.data as { durationMs: number };
      console.info(`[qmlts dev] Build failed after ${Math.round(data.durationMs)}ms`);
    });
    session.on('file-change', (event) => {
      const data = event.data as { files: string[] };
      console.info(`[qmlts dev] File changed: ${data.files.join(', ')}`);
    });
    session.on('rebuild-start', () => {
      console.info('[qmlts dev] Rebuilding...');
    });
    session.on('rebuild-success', (event) => {
      const data = event.data as { durationMs: number };
      console.info(`[qmlts dev] Rebuild succeeded in ${Math.round(data.durationMs)}ms`);
    });
    session.on('rebuild-error', (event) => {
      const data = event.data as { durationMs: number };
      console.info(`[qmlts dev] Rebuild failed after ${Math.round(data.durationMs)}ms`);
    });
    session.on('hot-reload', (event) => {
      const data = event.data as { durationMs: number };
      console.info(`[qmlts dev] Hot reload completed in ${Math.round(data.durationMs)}ms`);
    });
    session.on('hot-reload-error', (event) => {
      const data = event.data as { error: string };
      console.info(`[qmlts dev] Hot reload failed: ${data.error}`);
    });
    session.on('state-change', (event) => {
      const data = event.data as { from: string; to: string };
      console.info(`[qmlts dev] ${data.from} → ${data.to}`);
    });
  }

  const result = await session.start();

  return {
    session,
    initialBuildSuccess: result.success,
  };
}
