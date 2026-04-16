import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { executeDev } from '../../src/build/dev-command.js';

const FIXTURES_DIR = join(import.meta.dir, 'fixtures', 'sample-project');

function writeConfig(tempDir: string, entry = './src/CounterView.ts', extraFields = ''): string {
  const configPath = join(tempDir, 'qmlts.config.ts');
  writeFileSync(
    configPath,
    `export default {
  entry: ${JSON.stringify(entry)},
  outDir: "./dist",
${extraFields}
  qt: { modules: ["QtQuick"] },
  build: {
    lint: false,
    format: false,
    incremental: false,
    sourceMaps: false,
    qualityGate: "syntax",
  },
  dev: {
    hotReload: false,
    watchPaths: ["./src"],
    debounceMs: 100,
    ignorePatterns: [],
    port: 0,
    notify: false,
    preserveOnError: true,
  },
  host: {
    prebuilt: true,
    cargo: { args: [], profile: "dev" },
  },
  assets: {
    dir: "./assets",
    include: ["**/*"],
    exclude: [],
    useQrc: false,
    optimize: false,
  },
  distribute: {
    targets: [],
    bundleQt: false,
  },
  qmlModulePaths: [],
};
`,
    'utf-8',
  );
  return configPath;
}

describe('executeDev', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-dev-command-'));
    cpSync(FIXTURES_DIR, tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  test('DC-01: executeDev loads config, starts session, and returns initial build result', async () => {
    const configPath = writeConfig(tempDir);

    const { session, initialBuildSuccess } = await executeDev({ config: configPath });

    try {
      expect(initialBuildSuccess).toBe(true);
      expect(session.getState()).toBe('watching');
      expect(existsSync(join(tempDir, 'dist', 'qml'))).toBe(true);
    } finally {
      await session.stop();
    }
  }, 20_000);

  test('DC-02: executeDev entry override is applied before starting the session', async () => {
    const configPath = writeConfig(tempDir, './src/CounterViewModel.ts');

    const { session, initialBuildSuccess } = await executeDev({
      config: configPath,
      entry: './src/CounterView.ts',
    });

    try {
      expect(initialBuildSuccess).toBe(true);
      expect(existsSync(join(tempDir, 'dist', 'CounterView.ts'))).toBe(true);
      expect(existsSync(join(tempDir, 'dist', 'CounterViewModel.ts'))).toBe(false);
    } finally {
      await session.stop();
    }
  }, 20_000);

  test('DC-03: verbose mode logs lifecycle messages for start and rebuild', async () => {
    const configPath = writeConfig(tempDir);
    const logs: string[] = [];
    const originalWrite = process.stdout.write;
    process.stdout.write = (chunk: string | Uint8Array, ..._rest: unknown[]) => {
      logs.push(String(chunk));
      return true;
    };

    try {
      const { session } = await executeDev({
        config: configPath,
        verbose: true,
      });

      try {
        await session.rebuild();
      } finally {
        await session.stop();
      }
    } finally {
      process.stdout.write = originalWrite;
    }

    expect(logs.some((line) => line.includes('Building...'))).toBe(true);
    expect(logs.some((line) => line.includes('Build succeeded'))).toBe(true);
  }, 20_000);

  test('DC-04: verbose mode returns dev console and logs effective status details', async () => {
    const configPath = writeConfig(tempDir);
    const logs: string[] = [];
    const originalWrite = process.stdout.write;
    process.stdout.write = (chunk: string | Uint8Array, ..._rest: unknown[]) => {
      logs.push(String(chunk));
      return true;
    };

    try {
      const { session, console } = await executeDev({
        config: configPath,
        verbose: true,
        entry: './src/CounterView.ts',
      });

      try {
        expect(console).toBeDefined();
      } finally {
        await session.stop();
      }
    } finally {
      process.stdout.write = originalWrite;
    }

    expect(logs.some((line) => line.includes('entry:'))).toBe(true);
    expect(logs.some((line) => line.includes('watch paths: 1'))).toBe(true);
    expect(logs.some((line) => line.includes('hot reload: off'))).toBe(true);
  }, 20_000);

  test('DC-05: verbose mode logs normalized running status instead of raw watching state', async () => {
    const configPath = writeConfig(tempDir);
    const logs: string[] = [];
    const originalWrite = process.stdout.write;
    process.stdout.write = (chunk: string | Uint8Array, ..._rest: unknown[]) => {
      logs.push(String(chunk));
      return true;
    };

    try {
      const { session } = await executeDev({
        config: configPath,
        verbose: true,
      });

      try {
        expect(session.getState()).toBe('watching');
      } finally {
        await session.stop();
      }
    } finally {
      process.stdout.write = originalWrite;
    }

    expect(logs.some((line) => line.includes('Server') && line.includes('running'))).toBe(true);
    expect(logs.some((line) => line.includes('Server') && line.includes('watching'))).toBe(false);
  }, 20_000);

  test('DC-06: executeDev accepts V2 rollout config without switching runtime behavior', async () => {
    const configPath = writeConfig(
      tempDir,
      './src/CounterView.ts',
      [
        '  runtime: "v2",',
        '  v1Compat: true,',
        '  module: { prefix: "MyApp", version: { major: 1, minor: 0 } },',
      ].join('\n'),
    );

    const { session, initialBuildSuccess } = await executeDev({ config: configPath });

    try {
      expect(initialBuildSuccess).toBe(true);
      const entryContent = readFileSync(join(tempDir, 'dist', 'CounterView.ts'), 'utf-8');
      expect(entryContent).toContain('host.registerViewModel("CounterViewModel")');
      expect(entryContent).not.toContain('host.registerModule');
    } finally {
      await session.stop();
    }
  }, 20_000);
});
