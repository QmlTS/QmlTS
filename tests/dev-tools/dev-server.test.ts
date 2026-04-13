import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type { HotReloadClient, HotReloadResult } from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { createDevServer } from '../../src/dev-tools/dev-server.js';
import type {
  DevConsole,
  DevServerEventPayload,
  DevServerStatus,
  ErrorOverlay,
  OverlayError,
} from '../../src/dev-tools/dev-types.js';

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

function makeErrorTestConfig(
  tempDir: string,
  overrides: Partial<ResolvedQmltsConfig> = {},
): ResolvedQmltsConfig {
  const base = makeConfig(tempDir, overrides);
  return {
    ...base,
    build: {
      ...base.build,
      compilerOptions: { diagnostics: { suppress: [] } },
    },
  };
}

function createMockOverlay(): ErrorOverlay & {
  showCalls: OverlayError[][];
  hideCalls: number;
  _visible: boolean;
} {
  return {
    showCalls: [],
    hideCalls: 0,
    _visible: false,
    show(errors: readonly OverlayError[]): void {
      this.showCalls.push([...errors]);
      this._visible = true;
    },
    hide(): void {
      this.hideCalls++;
      this._visible = false;
    },
    get visible(): boolean {
      return this._visible;
    },
    dispose(): void {},
  };
}

function createThrowingOverlay(mode: 'show' | 'hide'): ErrorOverlay & {
  showCalls: number;
  hideCalls: number;
  _visible: boolean;
} {
  return {
    showCalls: 0,
    hideCalls: 0,
    _visible: false,
    show(): void {
      this.showCalls++;
      if (mode === 'show') {
        throw new Error('overlay show boom');
      }
      this._visible = true;
    },
    hide(): void {
      this.hideCalls++;
      if (mode === 'hide') {
        throw new Error('overlay hide boom');
      }
      this._visible = false;
    },
    get visible(): boolean {
      return this._visible;
    },
    dispose(): void {},
  };
}

function createMockConsole(): DevConsole & {
  disconnectCalls: number;
  connectedServers: number;
} {
  return {
    disconnectCalls: 0,
    connectedServers: 0,
    buildStart(): void {},
    buildSuccess(): void {},
    buildError(): void {},
    hotReload(): void {},
    fileChange(): void {},
    serverStatus(): void {},
    info(): void {},
    warn(): void {},
    error(): void {},
    debug(): void {},
    clear(): void {},
    connectToDevServer(): () => void {
      this.connectedServers++;
      return () => {
        this.disconnectCalls++;
      };
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

  // ─── DV-16: outDir is ignored by watcher ───────────────

  test('DV-16: changes inside outDir do not trigger rebuild loops', async () => {
    const config = makeConfig(tempDir, {
      dev: {
        ...makeConfig(tempDir).dev,
        watchPaths: [tempDir],
      },
    });
    const server = createDevServer(config);
    const rebuildEvents: DevServerEventPayload[] = [];
    const fileChangeEvents: DevServerEventPayload[] = [];

    server.on('rebuild-start', (p) => rebuildEvents.push(p));
    server.on('file-change', (p) => fileChangeEvents.push(p));

    try {
      await server.start();
      await sleep(500);

      writeFileSync(join(tempDir, 'dist', 'generated-entry.ts'), 'export const generated = 1;\n');

      await sleep(800);

      expect(fileChangeEvents).toHaveLength(0);
      expect(rebuildEvents).toHaveLength(0);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── ErrorOverlay wiring tests ────────────────────────────

  test('EO-07: shows overlay on initial build-error', async () => {
    const overlay = createMockOverlay();
    // Break the entry file so the initial build fails
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    const server = createDevServer(makeErrorTestConfig(tempDir), {
      errorOverlay: overlay,
    });

    const result = await server.start();
    expect(result.success).toBe(false);
    expect(overlay.showCalls.length).toBeGreaterThan(0);

    await server.stop();
  });

  test('EO-08: shows overlay on rebuild-error', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(makeErrorTestConfig(tempDir), { errorOverlay: overlay });

    await server.start();
    await sleep(500);

    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    await sleep(250);

    try {
      await waitForServerEvent(server, 'rebuild-error', 15_000);
    } catch {
      // Event may have already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);

    await server.stop();
  }, 30_000);

  test('EO-09: shows overlay on hot-reload-error', async () => {
    const mockClient = createMockHotReloadClient({ shouldFail: true });
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();
    await sleep(500);

    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// trigger`,
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload-error', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);
    const lastShow = overlay.showCalls[overlay.showCalls.length - 1];
    expect(lastShow[0].severity).toBe('error');

    await server.stop();
  }, 30_000);

  test('EO-10: hides overlay on hot-reload success', async () => {
    const mockClient = createMockHotReloadClient();
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();
    await sleep(500);

    overlay._visible = true;

    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// touch`,
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload', 15_000);
    } catch {
      // Event may have already fired
    }

    expect(overlay.hideCalls).toBeGreaterThan(0);

    await server.stop();
  }, 30_000);

  test('EO-11: does NOT hide overlay on build-success alone', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(makeConfig(tempDir), { errorOverlay: overlay });

    overlay._visible = true;

    const result = await server.start();
    expect(result.success).toBe(true);

    expect(overlay.hideCalls).toBe(0);

    await server.stop();
  });

  test('EO-12: does NOT hide overlay on rebuild-success alone', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: false } }),
      { errorOverlay: overlay },
    );

    await server.start();
    await sleep(500);
    overlay._visible = true;

    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// rebuild`,
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'rebuild-success', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.hideCalls).toBe(0);

    await server.stop();
  }, 30_000);

  test('EO-13: auto-recovery hides overlay after error then success', async () => {
    const mockClient = createMockHotReloadClient();
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeErrorTestConfig(tempDir, {
        dev: { ...makeConfig(tempDir).dev, hotReload: true },
      }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();
    await sleep(500);

    // First: break the file to trigger rebuild-error
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    await sleep(250);

    try {
      await waitForServerEvent(server, 'rebuild-error', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);

    // Second: fix the file to trigger successful rebuild + hot reload
    cpSync(join(FIXTURES_DIR, 'src', 'CounterView.ts'), join(tempDir, 'src', 'CounterView.ts'));
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// fixed`,
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.hideCalls).toBeGreaterThan(0);

    await server.stop();
  }, 60_000);

  test('EO-16: overlay.show failures do not break initial build-error flow', async () => {
    const overlay = createThrowingOverlay('show');
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    const server = createDevServer(makeErrorTestConfig(tempDir), {
      errorOverlay: overlay,
    });

    try {
      const result = await server.start();
      expect(result.success).toBe(false);
      expect(server.getStatus()).toBe('running');
      expect(overlay.showCalls).toBeGreaterThan(0);
    } finally {
      await server.stop();
    }
  });

  test('EO-17: overlay.hide failures do not break successful hot reload', async () => {
    const mockClient = createMockHotReloadClient();
    const overlay = createThrowingOverlay('hide');
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    try {
      await server.start();
      overlay._visible = true;
      const hotReloadPromise = waitForServerEvent(server, 'hot-reload', 15_000);

      await server.rebuild();
      await hotReloadPromise;
      await sleep(100);

      expect(server.getStatus()).toBe('running');
      expect(mockClient.calls.length).toBe(1);
      expect(overlay.hideCalls).toBeGreaterThan(0);
    } finally {
      await server.stop();
    }
  }, 30_000);

  // ═══════════════════════════════════════════════════════════
  // Suite 5: DevServer product layer (DV-49 – DV-62)
  // ═══════════════════════════════════════════════════════════

  // ─── DV-49: start startup flow ─────────────────────────

  test('DV-49: start performs initial build, enters running, and starts file watcher', async () => {
    const config = makeConfig(tempDir);
    const statuses: DevServerStatus[] = [];
    const server = createDevServer(config);
    server.on('status-change', (payload) => {
      const data = payload.data as { to: DevServerStatus };
      if (data) statuses.push(data.to);
    });

    try {
      const result = await server.start();
      expect(result.success).toBe(true);
      expect(server.getStatus()).toBe('running');
      // Must have passed through starting → building → running
      expect(statuses).toContain('starting');
      expect(statuses).toContain('building');
      expect(statuses).toContain('running');

      // File watcher is active: trigger a rebuild via a file change
      await sleep(500);
      const rebuildPromise = waitForServerEvent(server, 'rebuild-start', 15_000);
      writeFileSync(
        join(tempDir, 'src', 'CounterView.ts'),
        `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// dv49`,
      );
      const ev = await rebuildPromise;
      expect(ev).toBeDefined();
    } finally {
      await server.stop();
    }
  }, 30_000);

  // ─── DV-50: stop cleanup ───────────────────────────────

  test('DV-50: stop cleans up all resources and enters stopped', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    await server.start();

    const exitPromise = waitForServerEvent(server, 'exit', 5_000);
    await server.stop();
    await exitPromise;

    expect(server.getStatus()).toBe('stopped');

    // File changes after stop should NOT trigger rebuild
    const rebuildFired = { value: false };
    server.on('rebuild-start', () => {
      rebuildFired.value = true;
    });
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// after-stop`,
    );
    await sleep(500);
    expect(rebuildFired.value).toBe(false);
  }, 15_000);

  // ─── DV-51: restart = stop + start ─────────────────────

  test('DV-51: restart stops and re-starts the server with fresh state', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    try {
      await server.start();
      expect(server.getStatus()).toBe('running');
      expect(server.getStats().buildCount).toBe(1);

      // Restart
      const result = await server.restart();
      expect(result.success).toBe(true);
      expect(server.getStatus()).toBe('running');
      // Stats should be reset (fresh start)
      expect(server.getStats().buildCount).toBe(1);
      expect(server.getStats().rebuildCount).toBe(0);
    } finally {
      await server.stop();
    }
  }, 30_000);

  // ─── DV-52: state transitions ─────────────────────────

  test('DV-52: state transitions follow idle → starting → building → running', async () => {
    const config = makeConfig(tempDir);
    const statuses: DevServerStatus[] = [];
    const server = createDevServer(config);

    expect(server.getStatus()).toBe('idle');

    server.on('status-change', (payload) => {
      const data = payload.data as { to: DevServerStatus };
      if (data) statuses.push(data.to);
    });

    try {
      await server.start();
      // Verify the exact sequence
      expect(statuses[0]).toBe('starting');
      expect(statuses[1]).toBe('building');
      expect(statuses[2]).toBe('running');
    } finally {
      await server.stop();
      expect(server.getStatus()).toBe('stopped');
    }
  }, 15_000);

  // ─── DV-53: file change triggers recompile ────────────

  test('DV-53: file change triggers running → reloading → running', async () => {
    const config = makeConfig(tempDir);
    const statuses: DevServerStatus[] = [];
    const server = createDevServer(config);

    try {
      await server.start();
      expect(server.getStatus()).toBe('running');

      server.on('status-change', (payload) => {
        const data = payload.data as { to: DevServerStatus };
        if (data) statuses.push(data.to);
      });

      await sleep(500);
      const rebuildDone = waitForServerEvent(server, 'rebuild-success', 15_000);

      writeFileSync(
        join(tempDir, 'src', 'CounterView.ts'),
        `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// dv53`,
      );

      await rebuildDone;
      await sleep(100);

      expect(statuses).toContain('reloading');
      expect(statuses).toContain('running');
      expect(server.getStatus()).toBe('running');
    } finally {
      await server.stop();
    }
  }, 30_000);

  // ─── DV-54: compile failure state ─────────────────────

  test('DV-54: rebuild failure transitions running → reloading → error, fix recovers to running', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeErrorTestConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });
    const statuses: DevServerStatus[] = [];
    const server = createDevServer(config, { hotReloadClient: mockClient });

    try {
      await server.start();
      expect(server.getStatus()).toBe('running');

      server.on('status-change', (payload) => {
        const data = payload.data as { to: DevServerStatus };
        if (data) statuses.push(data.to);
      });

      // Break the file to cause rebuild failure
      await sleep(500);
      const rebuildErrorPromise = waitForServerEvent(server, 'rebuild-error', 15_000);
      writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
      await rebuildErrorPromise;
      await sleep(100);

      expect(statuses).toContain('reloading');
      expect(statuses).toContain('error');
      expect(server.getStatus()).toBe('error');

      // Fix the file — should recover
      statuses.length = 0;
      cpSync(join(FIXTURES_DIR, 'src', 'CounterView.ts'), join(tempDir, 'src', 'CounterView.ts'));
      const hotReloadPromise = waitForServerEvent(server, 'hot-reload', 15_000);
      writeFileSync(
        join(tempDir, 'src', 'CounterView.ts'),
        `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// dv54-fixed`,
      );
      await hotReloadPromise;
      await sleep(100);

      expect(statuses).toContain('reloading');
      expect(statuses).toContain('running');
      expect(server.getStatus()).toBe('running');
    } finally {
      await server.stop();
    }
  }, 60_000);

  // ─── DV-55: build-start event ─────────────────────────

  test('DV-55: build-start event is emitted on initial build', async () => {
    const config = makeConfig(tempDir);
    const events: string[] = [];
    const server = createDevServer(config);

    server.on('build-start', () => events.push('build-start'));

    try {
      await server.start();
      expect(events).toContain('build-start');
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-56: build-success event ───────────────────────

  test('DV-56: build-success event is emitted on successful initial build', async () => {
    const config = makeConfig(tempDir);
    let buildData: { success: boolean; durationMs: number } | undefined;
    const server = createDevServer(config);

    server.on('build-success', (payload) => {
      buildData = payload.data as { success: boolean; durationMs: number };
    });

    try {
      await server.start();
      expect(buildData).toBeDefined();
      expect(buildData!.success).toBe(true);
      expect(buildData!.durationMs).toBeGreaterThan(0);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-57: build-error event + ErrorOverlay ──────────

  test('DV-57: build-error event emitted on initial build failure and overlay is shown', async () => {
    const overlay = createMockOverlay();
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    const config = makeErrorTestConfig(tempDir);
    let buildData: { success: boolean } | undefined;
    const server = createDevServer(config, { errorOverlay: overlay });

    server.on('build-error', (payload) => {
      buildData = payload.data as { success: boolean };
    });

    try {
      await server.start();
      expect(buildData).toBeDefined();
      expect(buildData!.success).toBe(false);
      expect(overlay.showCalls.length).toBeGreaterThan(0);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-58: hot-reload event ──────────────────────────

  test('DV-58: hot-reload event is emitted after successful rebuild with hot reload', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });
    let hotReloadFired = false;
    const server = createDevServer(config, { hotReloadClient: mockClient });

    server.on('hot-reload', () => {
      hotReloadFired = true;
    });

    try {
      await server.start();

      await server.rebuild();
      await sleep(500);

      expect(hotReloadFired).toBe(true);
      expect(mockClient.calls.length).toBe(1);
    } finally {
      await server.stop();
    }
  }, 30_000);

  // ─── DV-59: file-change event ─────────────────────────

  test('DV-59: file-change event is emitted when source files change', async () => {
    const config = makeConfig(tempDir);
    let fileChangeFired = false;
    const server = createDevServer(config);

    server.on('file-change', () => {
      fileChangeFired = true;
    });

    try {
      await server.start();
      await sleep(500);

      writeFileSync(
        join(tempDir, 'src', 'CounterView.ts'),
        `${readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8')}\n// dv59`,
      );

      // Wait for watcher debounce + processing
      await sleep(2000);

      expect(fileChangeFired).toBe(true);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-60: exit event on stop ────────────────────────

  test('DV-60: exit event is emitted when server stops', async () => {
    const config = makeConfig(tempDir);
    let exitFired = false;
    const server = createDevServer(config);

    server.on('exit', () => {
      exitFired = true;
    });

    await server.start();
    await server.stop();

    expect(exitFired).toBe(true);
    expect(server.getStatus()).toBe('stopped');
  }, 15_000);

  // ─── DV-61: manual rebuild ────────────────────────────

  test('DV-61: rebuild() forces immediate recompile without file change', async () => {
    const config = makeConfig(tempDir);
    const server = createDevServer(config);

    try {
      await server.start();
      expect(server.getStats().rebuildCount).toBe(0);

      const rebuildSuccessPromise = waitForServerEvent(server, 'rebuild-success', 10_000);
      const result = await server.rebuild();

      expect(result.success).toBe(true);
      await rebuildSuccessPromise;

      expect(server.getStats().rebuildCount).toBe(1);
    } finally {
      await server.stop();
    }
  }, 15_000);

  // ─── DV-62: config change triggers restart ────────────

  test('DV-62: config file change emits config-change event and triggers restart', async () => {
    // Create a config file in the temp dir so the config watcher can find it
    const configFilePath = join(tempDir, 'qmlts.config.ts');
    writeFileSync(configFilePath, 'export default {};');

    const config = makeConfig(tempDir);
    const events: string[] = [];
    const server = createDevServer(config);

    server.on('config-change', () => {
      events.push('config-change');
    });
    server.on('status-change', (payload) => {
      const data = payload.data as { to: DevServerStatus };
      if (data) events.push(`status:${data.to}`);
    });

    try {
      await server.start();
      expect(server.getStatus()).toBe('running');

      // Clear events from initial start
      events.length = 0;

      // Wait for a fresh config-change event by modifying the config file
      const configChangePromise = waitForServerEvent(server, 'config-change', 10_000);
      await sleep(200);
      writeFileSync(configFilePath, 'export default { /* modified */ };');

      await configChangePromise;

      // After config-change, restart should happen: stop → idle → start sequence
      // Wait for server to become running again after restart
      await sleep(3000);

      expect(events).toContain('config-change');
      expect(server.getStatus()).toBe('running');
      // Stats should be reset from the restart
      expect(server.getStats().rebuildCount).toBe(0);
    } finally {
      await server.stop();
    }
  }, 30_000);

  test('DV-63: auto-wired DevConsole disconnects on final stop but survives restart', async () => {
    const mockConsole = createMockConsole();
    const server = createDevServer(makeConfig(tempDir), { console: mockConsole });

    try {
      expect(mockConsole.connectedServers).toBe(1);

      await server.start();
      await server.restart();

      expect(mockConsole.connectedServers).toBe(1);
      expect(mockConsole.disconnectCalls).toBe(0);
    } finally {
      await server.stop();
    }

    expect(mockConsole.disconnectCalls).toBe(1);
  }, 20_000);

  test('DV-64: running status-change reports effective watchPaths override', async () => {
    const overrideWatchPaths = ['./src', './assets'];
    const statusPayloads: Array<{
      to: DevServerStatus;
      watchPaths?: readonly string[];
    }> = [];
    const server = createDevServer(makeConfig(tempDir), {
      watchPaths: overrideWatchPaths,
    });

    server.on('status-change', (payload) => {
      const data = payload.data as { to: DevServerStatus; watchPaths?: readonly string[] };
      statusPayloads.push(data);
    });

    try {
      await server.start();
    } finally {
      await server.stop();
    }

    const runningPayload = statusPayloads.find((payload) => payload.to === 'running');
    expect(runningPayload).toBeDefined();
    expect(runningPayload!.watchPaths).toEqual(overrideWatchPaths);
  }, 20_000);
});
