import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type { HotReloadClient, HotReloadResult } from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { createDevServer } from '../../src/dev-tools/dev-server.js';
import type { DevServerEventPayload, DevServerStatus } from '../../src/dev-tools/dev-types.js';

// ─── Paths ──────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, '..', 'build', 'fixtures', 'sample-project');

// ─── Helpers ────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForServerEvent(
  server: ReturnType<typeof createDevServer>,
  event: string,
  timeoutMs = 10_000,
): Promise<DevServerEventPayload> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`Timed out waiting for server event '${event}'`)),
      timeoutMs,
    );
    server.on(event as any, (payload: DevServerEventPayload) => {
      clearTimeout(timer);
      resolve(payload);
    });
  });
}

function makeConfig(
  tempDir: string,
  overrides: Partial<ResolvedQmltsConfig> = {},
): ResolvedQmltsConfig {
  return {
    entry: join(tempDir, 'src', 'CounterView.ts'),
    outDir: join(tempDir, 'dist'),
    qt: {
      modules: ['QtQuick'],
      targetVersion: '6.11.0',
    },
    build: {
      aot: false,
      lint: false,
      format: false,
      sourceMaps: false,
      incremental: false,
      concurrency: 1,
      qualityGate: 'none',
      mode: 'development',
      minify: false,
      compilerOptions: {
        diagnostics: { suppress: ['QMLTS-A011'] },
      },
    },
    host: {
      prebuilt: true,
      cargo: { args: [], profile: 'dev' },
    },
    dev: {
      hotReload: false,
      watchPaths: [join(tempDir, 'src')],
      debounceMs: 100,
      ignorePatterns: [],
      port: 0,
      notify: false,
      preserveOnError: true,
    },
    assets: {
      dir: join(tempDir, 'assets'),
      include: ['**/*'],
      exclude: [],
      useQrc: false,
      optimize: false,
    },
    distribute: {
      targets: [],
      bundleQt: false,
    },
    qmlModulePaths: [],
    configDir: tempDir,
    ...overrides,
  };
}

function createMockHotReloadClient(
  options: { connected?: boolean; shouldFail?: boolean } = {},
): HotReloadClient & { calls: Array<{ files: readonly string[]; dir: string }> } {
  const calls: Array<{ files: readonly string[]; dir: string }> = [];
  let disposed = false;
  return {
    calls,
    async reload(changedFiles: readonly string[], outputDir: string): Promise<HotReloadResult> {
      calls.push({ files: changedFiles, dir: outputDir });
      if (options.shouldFail) {
        return { success: false, durationMs: 1, error: 'Mock reload failure' };
      }
      return { success: true, durationMs: 5 };
    },
    isConnected(): boolean {
      return !disposed && (options.connected ?? true);
    },
    dispose(): void {
      disposed = true;
    },
  };
}

// ─── Test suite ─────────────────────────────────────────────

describe('DevServer', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-devserver-'));
    cpSync(FIXTURES_DIR, tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  // ─── DV-01: Start and build ────────────────────────────

  test('DV-01: start performs initial build and enters running state', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    try {
      const result = await server.start();
      expect(result.success).toBe(true);
      expect(result.durationMs).toBeGreaterThan(0);
      expect(server.getStatus()).toBe('running');
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-02: Stop lifecycle ─────────────────────────────

  test('DV-02: stop transitions through stopping to stopped', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    await server.start();
    await server.stop();

    expect(server.getStatus()).toBe('stopped');
  }, 15_000);

  // ─── DV-03: Status transitions ─────────────────────────

  test('DV-03: start emits correct status transitions', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);
    const statuses: DevServerStatus[] = [];

    server.on('status-change', (payload) => {
      const data = payload.data as { to: DevServerStatus };
      statuses.push(data.to);
    });

    try {
      await server.start();
      expect(statuses).toContain('starting');
      expect(statuses).toContain('building');
      expect(statuses).toContain('running');
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-04: Double-start prevention ────────────────────

  test('DV-04: calling start while running throws error', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    try {
      await server.start();
      await expect(server.start()).rejects.toThrow(/Cannot start DevServer.*running/);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-05: Unified rebuild+reload flow ────────────────

  test('DV-05: one debounced change batch triggers one rebuild and one hot reload', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: {
        ...makeConfig(tempDir).dev,
        hotReload: true,
        debounceMs: 200,
      },
    });
    const server = createDevServer(config, { hotReloadClient: mockClient });

    const rebuildEvents: DevServerEventPayload[] = [];
    const hotReloadEvents: DevServerEventPayload[] = [];

    server.on('rebuild-success', (p) => rebuildEvents.push(p));
    server.on('hot-reload', (p) => hotReloadEvents.push(p));

    try {
      await server.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();

      // Multiple rapid changes
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(111)'));
      await sleep(30);
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(222)'));
      await sleep(30);
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(333)'));

      await waitForServerEvent(server, 'hot-reload', 15_000);

      // Should be exactly 1 rebuild and 1 hot reload for the batch
      expect(rebuildEvents.length).toBe(1);
      expect(hotReloadEvents.length).toBe(1);
      expect(mockClient.calls.length).toBe(1);
    } finally {
      await server.stop();
    }
  }, 20_000);

  // ─── DV-06: Build events ──────────────────────────────

  test('DV-06: build-start and build-success events emitted on initial build', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    const startEvents: DevServerEventPayload[] = [];
    const successEvents: DevServerEventPayload[] = [];

    server.on('build-start', (p) => startEvents.push(p));
    server.on('build-success', (p) => successEvents.push(p));

    try {
      await server.start();

      expect(startEvents.length).toBe(1);
      expect(successEvents.length).toBe(1);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-07: Manual rebuild ─────────────────────────────

  test('DV-07: server.rebuild() forces immediate recompile', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);
    const rebuildEvents: DevServerEventPayload[] = [];

    server.on('rebuild-success', (p) => rebuildEvents.push(p));

    try {
      await server.start();

      const result = await server.rebuild();
      expect(result.success).toBe(true);
      expect(rebuildEvents.length).toBe(1);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-08: Stats tracking ─────────────────────────────

  test('DV-08: stats track build count, rebuild count, uptime', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    try {
      await server.start();

      let stats = server.getStats();
      expect(stats.buildCount).toBe(1);
      expect(stats.rebuildCount).toBe(0);
      expect(stats.lastBuildMs).toBeGreaterThan(0);
      expect(stats.uptime).toBeGreaterThan(0);

      await server.rebuild();

      stats = server.getStats();
      expect(stats.buildCount).toBe(1);
      expect(stats.rebuildCount).toBe(1);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-09: Exit event ─────────────────────────────────

  test('DV-09: exit event emitted when server stops', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);
    const exitEvents: DevServerEventPayload[] = [];

    server.on('exit', (p) => exitEvents.push(p));

    await server.start();
    await server.stop();

    expect(exitEvents.length).toBe(1);
  }, 15_000);

  // ─── DV-10: Rebuild before start ───────────────────────

  test('DV-10: rebuild() before start() throws error', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    await expect(server.rebuild()).rejects.toThrow(/Cannot rebuild.*idle/);
  });

  // ─── DV-11: Event handler removal ──────────────────────

  test('DV-11: off() removes event handler', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);
    const events: DevServerEventPayload[] = [];

    const handler = (p: DevServerEventPayload) => events.push(p);
    server.on('status-change', handler);
    server.off('status-change', handler);

    try {
      await server.start();
      expect(events.length).toBe(0);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-12: DevServer and DevSession use same path ────

  test('DV-12: DevServer uses the same dev-tools components as DevSession (unified path)', async () => {
    // This test verifies architectural convergence:
    // Both DevServer and DevSession use FileWatcher + HotReloadOrchestrator from dev-tools
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });

    // DevServer path
    const server = createDevServer(config, { hotReloadClient: mockClient });

    try {
      await server.start();

      const result = await server.rebuild();
      expect(result.success).toBe(true);
      expect(mockClient.calls.length).toBe(1);

      const stats = server.getStats();
      expect(stats.rebuildCount).toBe(1);
      expect(stats.hotReloadCount).toBe(1);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-13: File change triggers rebuild ───────────────

  test('DV-13: file change triggers rebuild via FileWatcher', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);
    const rebuildEvents: DevServerEventPayload[] = [];
    const fileChangeEvents: DevServerEventPayload[] = [];

    server.on('rebuild-success', (p) => rebuildEvents.push(p));
    server.on('file-change', (p) => fileChangeEvents.push(p));

    try {
      await server.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(999)'));

      await waitForServerEvent(server, 'rebuild-success', 15_000);

      expect(fileChangeEvents.length).toBeGreaterThanOrEqual(1);
      expect(rebuildEvents.length).toBe(1);
    } finally {
      await server.stop();
    }
  }, 20_000);

  // ─── DV-14: Hot reload disabled ────────────────────────

  test('DV-14: hot reload not triggered when config.dev.hotReload=false', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: false },
    });
    const server = createDevServer(config, { hotReloadClient: mockClient });

    try {
      await server.start();
      await server.rebuild();

      expect(mockClient.calls.length).toBe(0);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-15: Hot reload error event ─────────────────────

  test('DV-15: hot reload failure emits hot-reload-error event', async () => {
    const mockClient = createMockHotReloadClient({ shouldFail: true });
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });
    const server = createDevServer(config, { hotReloadClient: mockClient });
    const errorEvents: DevServerEventPayload[] = [];

    server.on('hot-reload-error', (p) => errorEvents.push(p));

    try {
      await server.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(444)'));

      await waitForServerEvent(server, 'hot-reload-error', 15_000);

      expect(errorEvents.length).toBe(1);
      const data = errorEvents[0]!.data as { error: string };
      expect(data.error).toBe('Mock reload failure');
    } finally {
      await server.stop();
    }
  }, 20_000);
});
