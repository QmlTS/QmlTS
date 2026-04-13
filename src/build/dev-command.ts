import { createDevConsole } from '../dev-tools/dev-console.js';
import { createDevServer } from '../dev-tools/dev-server.js';
import type { DevConsole, DevServer } from '../dev-tools/dev-types.js';
import type { DevSessionOptions } from './build-types.js';
import { loadConfig } from './config-loader.js';
import { createDevSession, type DevSession } from './dev-session.js';

export interface DevCommandResult {
  readonly session: DevSession;
  readonly server: DevServer;
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

  let devConsole: DevConsole | undefined;
  if (options.verbose) {
    devConsole = createDevConsole({
      level: 'debug',
      color: true,
      timestamp: true,
    });
  }

  // Create DevServer as the primary surface with auto-wired DevConsole
  const server = createDevServer(effectiveConfig, {
    entry: options.entry,
    headless: options.headless,
    verbose: options.verbose,
    debounceMs: options.debounceMs,
    watchPaths: options.watchPaths,
    ignorePatterns: options.ignorePatterns,
    preserveOnError: options.preserveOnError,
    console: devConsole,
  });

  // Create DevSession wrapping the same DevServer for backward compatibility
  const session = createDevSession(effectiveConfig, options, undefined, server);

  const result = await session.start();

  return {
    session,
    server,
    console: devConsole,
    initialBuildSuccess: result.success,
  };
}
