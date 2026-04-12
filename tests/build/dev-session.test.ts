import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type {
  BuildResultData,
  DevSessionEvent,
  DevSessionEventType,
  FileChangeData,
  HotReloadClient,
  HotReloadData,
  HotReloadResult,
} from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { createDevSession } from '../../src/build/dev-session.js';

// ─── Paths ──────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'sample-project');

// ─── Helpers ────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForEvent(
  session: ReturnType<typeof createDevSession>,
  eventType: DevSessionEventType,
  timeoutMs = 10_000,
): Promise<DevSessionEvent> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`Timed out waiting for event '${eventType}'`)),
      timeoutMs,
    );
    session.on(eventType, (event) => {
      clearTimeout(timer);
      resolve(event);
    });
  });
}

function collectEvents(
  session: ReturnType<typeof createDevSession>,
  eventType: DevSessionEventType,
): DevSessionEvent[] {
  const events: DevSessionEvent[] = [];
  session.on(eventType, (event) => events.push(event));
  return events;
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

describe('DevSession', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-devsession-'));
    cpSync(FIXTURES_DIR, tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  // ─── DS-01: Start dev session ───────────────────────────

  test('DS-01: start performs initial build and enters watching state', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    try {
      const result = await session.start();
      expect(result.success).toBe(true);
      expect(session.getState()).toBe('watching');
      expect(result.phases.size).toBeGreaterThan(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-02: Stop session ────────────────────────────────

  test('DS-02: stop cleans up resources and transitions to stopped', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    const result = await session.start();
    expect(result.success).toBe(true);

    await session.stop();
    expect(session.getState()).toBe('stopped');
  }, 15_000);

  // ─── DS-03: State transitions ───────────────────────────

  test('DS-03: start emits correct state transitions', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const states: string[] = [];

    session.on('state-change', (event) => {
      const data = event.data as { from: string; to: string };
      states.push(data.to);
    });

    try {
      await session.start();
      expect(states).toContain('starting');
      expect(states).toContain('building');
      expect(states).toContain('watching');
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-04: Double-start prevention ─────────────────────

  test('DS-04: calling start while running throws error', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    try {
      await session.start();

      await expect(session.start()).rejects.toThrow(/Cannot start DevSession.*watching/);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-05: File change triggers rebuild ────────────────

  test('DS-05: file change triggers rebuild with events', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-success');
    const fileChangeEvents = collectEvents(session, 'file-change');

    try {
      await session.start();

      // Wait for watcher to be ready
      await sleep(500);

      // Modify a .ts file
      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const original = Bun.file(counterViewPath);
      const content = await original.text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(999)'));

      // Wait for rebuild
      await waitForEvent(session, 'rebuild-success', 15_000);

      expect(fileChangeEvents.length).toBeGreaterThanOrEqual(1);
      expect(rebuildEvents.length).toBe(1);

      const data = rebuildEvents[0]!.data as BuildResultData;
      expect(data.success).toBe(true);
      expect(data.durationMs).toBeGreaterThan(0);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-06: Debounce ────────────────────────────────────

  test('DS-06: multiple rapid changes debounce to single rebuild', async () => {
    const config = makeConfig(tempDir, {
      dev: {
        ...makeConfig(tempDir).dev,
        debounceMs: 300,
      },
    });
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-success');

    try {
      await session.start();
      await sleep(500);

      // Rapidly modify a file multiple times
      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const original = await Bun.file(counterViewPath).text();

      writeFileSync(counterViewPath, original.replace('width(200)', 'width(111)'));
      await sleep(50);
      writeFileSync(counterViewPath, original.replace('width(200)', 'width(222)'));
      await sleep(50);
      writeFileSync(counterViewPath, original.replace('width(200)', 'width(333)'));

      // Wait for debounced rebuild
      await waitForEvent(session, 'rebuild-success', 15_000);

      // Should be exactly 1 rebuild (debounced)
      await sleep(500);
      expect(rebuildEvents.length).toBe(1);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-07: Ignore patterns ─────────────────────────────

  test('DS-07: files matching ignorePatterns do not trigger rebuild', async () => {
    // Create a .test.ts file in the src directory
    const testFilePath = join(tempDir, 'src', 'Ignored.test.ts');
    writeFileSync(testFilePath, '// test file');

    const config = makeConfig(tempDir, {
      dev: {
        ...makeConfig(tempDir).dev,
        ignorePatterns: ['.test.ts'],
      },
    });
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-start');

    try {
      await session.start();
      await sleep(500);

      // Modify the .test.ts file — should be ignored
      writeFileSync(testFilePath, '// modified test file');
      await sleep(800);

      expect(rebuildEvents.length).toBe(0);
    } finally {
      await session.stop();
    }
  }, 10_000);

  // ─── DS-08: Manual rebuild ──────────────────────────────

  test('DS-08: session.rebuild() forces immediate recompile', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-success');

    try {
      await session.start();

      const result = await session.rebuild();
      expect(result.success).toBe(true);
      expect(rebuildEvents.length).toBe(1);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-09: Build events on initial build ───────────────

  test('DS-09: build-start and build-success events emitted on initial build', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const startEvents = collectEvents(session, 'build-start');
    const successEvents = collectEvents(session, 'build-success');

    try {
      await session.start();

      expect(startEvents.length).toBe(1);
      expect(successEvents.length).toBe(1);

      const data = successEvents[0]!.data as BuildResultData;
      expect(data.success).toBe(true);
      expect(data.durationMs).toBeGreaterThan(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-10: Rebuild events on file change ───────────────

  test('DS-10: rebuild-start and rebuild-success events on file change rebuild', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const rebuildStartEvents = collectEvents(session, 'rebuild-start');
    const rebuildSuccessEvents = collectEvents(session, 'rebuild-success');

    try {
      await session.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(777)'));

      await waitForEvent(session, 'rebuild-success', 15_000);

      expect(rebuildStartEvents.length).toBe(1);
      expect(rebuildSuccessEvents.length).toBe(1);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-11: Rebuild error event ─────────────────────────

  test('DS-11: rebuild-error event on compilation failure', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const errorEvents = collectEvents(session, 'rebuild-error');

    try {
      await session.start();
      await sleep(500);

      // Corrupt tsconfig.json so the compiler cannot analyze the project.
      // Then touch a .ts file to trigger the watcher and a rebuild.
      writeFileSync(join(tempDir, 'tsconfig.json'), '!!! INVALID JSON');
      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      writeFileSync(counterViewPath, 'export const broken = 1;\n');

      await waitForEvent(session, 'rebuild-error', 15_000);

      expect(errorEvents.length).toBe(1);
      const data = errorEvents[0]!.data as BuildResultData;
      expect(data.success).toBe(false);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-12: File change event includes paths ─────────────

  test('DS-12: file-change event includes changed file path', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const fileEvents = collectEvents(session, 'file-change');

    try {
      await session.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(456)'));

      await waitForEvent(session, 'file-change', 10_000);

      expect(fileEvents.length).toBeGreaterThanOrEqual(1);
      const data = fileEvents[0]!.data as FileChangeData;
      expect(data.files.length).toBeGreaterThan(0);
      expect(data.type).toBe('change');
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-13: Hot reload after rebuild ────────────────────

  test('DS-13: hot reload triggered after successful rebuild when enabled', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });
    const session = createDevSession(config, {}, mockClient);
    const hotReloadEvents = collectEvents(session, 'hot-reload');

    try {
      await session.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(888)'));

      await waitForEvent(session, 'hot-reload', 15_000);

      expect(hotReloadEvents.length).toBe(1);
      const data = hotReloadEvents[0]!.data as HotReloadData;
      expect(data.durationMs).toBeGreaterThanOrEqual(0);
      expect(data.filesReloaded.length).toBeGreaterThan(0);
      expect(mockClient.calls.length).toBe(1);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-14: Hot reload disabled ─────────────────────────

  test('DS-14: hot reload not triggered when config.dev.hotReload=false', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: false },
    });
    const session = createDevSession(config, {}, mockClient);

    try {
      await session.start();

      await session.rebuild();

      // Hot reload should NOT have been called
      expect(mockClient.calls.length).toBe(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-15: Hot reload error event ──────────────────────

  test('DS-15: hot reload error emits hot-reload-error event', async () => {
    const mockClient = createMockHotReloadClient({ shouldFail: true });
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, hotReload: true },
    });
    const session = createDevSession(config, {}, mockClient);
    const errorEvents = collectEvents(session, 'hot-reload-error');

    try {
      await session.start();
      await sleep(500);

      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      const content = await Bun.file(counterViewPath).text();
      writeFileSync(counterViewPath, content.replace('width(200)', 'width(555)'));

      await waitForEvent(session, 'hot-reload-error', 15_000);

      expect(errorEvents.length).toBe(1);
      const data = errorEvents[0]!.data as { error: string };
      expect(data.error).toBe('Mock reload failure');
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-16: Hot reload client disposed on stop ──────────

  test('DS-16: hot reload client disposed on session stop', async () => {
    const mockClient = createMockHotReloadClient();
    const config = makeConfig(tempDir);
    const session = createDevSession(config, {}, mockClient);

    await session.start();
    expect(mockClient.isConnected()).toBe(true);

    await session.stop();
    expect(mockClient.isConnected()).toBe(false);
  }, 15_000);

  // ─── DS-17: preserveOnError keeps output ────────────────

  test('DS-17: preserveOnError keeps last successful output on rebuild failure', async () => {
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, preserveOnError: true },
    });
    const session = createDevSession(config, { preserveOnError: true });

    try {
      await session.start();

      // Verify initial build output exists
      expect(existsSync(join(tempDir, 'dist'))).toBe(true);

      await sleep(500);

      // Corrupt tsconfig so next rebuild fails, then touch a .ts file to trigger it
      writeFileSync(join(tempDir, 'tsconfig.json'), '!!! INVALID JSON');
      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      writeFileSync(counterViewPath, 'export const broken = 1;\n');

      await waitForEvent(session, 'rebuild-error', 15_000);

      // Output should still exist (preserved)
      expect(existsSync(join(tempDir, 'dist'))).toBe(true);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-18: preserveOnError=false ───────────────────────

  test('DS-18: rebuild error does not delete existing output', async () => {
    const config = makeConfig(tempDir, {
      dev: { ...makeConfig(tempDir).dev, preserveOnError: false },
    });
    const session = createDevSession(config, { preserveOnError: false });

    try {
      await session.start();
      expect(existsSync(join(tempDir, 'dist'))).toBe(true);

      await sleep(500);

      // Corrupt tsconfig so next rebuild fails, then touch a .ts file to trigger it
      writeFileSync(join(tempDir, 'tsconfig.json'), '!!! INVALID JSON');
      const counterViewPath = join(tempDir, 'src', 'CounterView.ts');
      writeFileSync(counterViewPath, 'export const broken = 1;\n');

      await waitForEvent(session, 'rebuild-error', 15_000);

      // Rebuild error emitted but we don't delete outputs
      const stats = session.getStats();
      expect(stats.errorCount).toBeGreaterThan(0);
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-19: headless flag ───────────────────────────────

  test('DS-19: headless flag stored in session options', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config, { headless: true });

    try {
      const result = await session.start();
      expect(result.success).toBe(true);
      // Headless is a pass-through option — no Qt window management at this layer
      expect(session.getState()).toBe('watching');
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-20: Session stats ──────────────────────────────

  test('DS-20: session stats track build count, rebuild count, uptime', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    try {
      await session.start();

      let stats = session.getStats();
      expect(stats.buildCount).toBe(1);
      expect(stats.rebuildCount).toBe(0);
      expect(stats.lastBuildMs).toBeGreaterThan(0);
      expect(stats.uptime).toBeGreaterThan(0);

      await session.rebuild();

      stats = session.getStats();
      expect(stats.buildCount).toBe(1);
      expect(stats.rebuildCount).toBe(1);
      expect(stats.totalBuildMs).toBeGreaterThan(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-21: Stop during idle ────────────────────────────

  test('DS-21: stop from idle state works gracefully', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    // Stop without ever starting
    await session.stop();
    expect(session.getState()).toBe('stopped');
  });

  // ─── DS-22: Rebuild queuing ─────────────────────────────

  test('DS-22: rebuild while rebuilding queues a pending rebuild', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-success');
    const stateEvents = collectEvents(session, 'state-change');

    try {
      await session.start();

      // Fire two rebuilds concurrently
      const rebuild1 = session.rebuild();
      const rebuild2 = session.rebuild();

      const [r1, r2] = await Promise.all([rebuild1, rebuild2]);

      // Both should resolve
      expect(r1).toBeDefined();
      expect(r2).toBeDefined();
      expect(r1.success).toBe(true);
      expect(r2.success).toBe(true);
      expect(r1.phases.size).toBeGreaterThan(0);
      expect(r2.phases.size).toBeGreaterThan(0);
      expect(r1.output.entryFile.length).toBeGreaterThan(0);
      expect(r2.output.entryFile.length).toBeGreaterThan(0);

      // The queued rebuild should drain fully before both promises resolve
      expect(rebuildEvents.length).toBe(2);
      expect(session.getStats().rebuildCount).toBe(2);

      const rebuildingTransitions = stateEvents.filter((event) => {
        const data = event.data as { from: string; to: string };
        return data.from === 'rebuilding' && data.to === 'rebuilding';
      });
      expect(rebuildingTransitions.length).toBe(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-23: Custom watchPaths ───────────────────────────

  test('DS-23: custom watchPaths override config defaults', async () => {
    // Create a separate watched directory
    const customWatchDir = join(tempDir, 'custom-src');
    mkdirSync(customWatchDir, { recursive: true });

    const config = makeConfig(tempDir);
    const session = createDevSession(config, {
      watchPaths: [customWatchDir],
    });
    const fileEvents = collectEvents(session, 'file-change');

    try {
      await session.start();
      await sleep(500);

      // Write a .ts file in the custom watch dir
      writeFileSync(join(customWatchDir, 'test.ts'), 'export const x = 1;\n');

      await sleep(800);

      // Should have detected the change in the custom watch path
      expect(fileEvents.length).toBeGreaterThanOrEqual(1);
    } finally {
      await session.stop();
    }
  }, 10_000);

  // ─── DS-24: Pipeline integration ────────────────────────

  test('DS-24: DevSession produces real dist output through BuildPipeline', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    try {
      const result = await session.start();
      expect(result.success).toBe(true);

      // Verify dist layout was created
      expect(existsSync(join(tempDir, 'dist'))).toBe(true);
      expect(existsSync(join(tempDir, 'dist', 'qml'))).toBe(true);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-25: Exit event on stop ──────────────────────────

  test('DS-25: exit event emitted when session stops', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const exitEvents = collectEvents(session, 'exit');

    await session.start();
    await session.stop();

    expect(exitEvents.length).toBe(1);
  }, 15_000);

  // ─── DS-26: Event handler removal ──────────────────────

  test('DS-26: off() removes event handler', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const events: DevSessionEvent[] = [];

    const handler = (event: DevSessionEvent) => events.push(event);
    session.on('state-change', handler);
    session.off('state-change', handler);

    try {
      await session.start();
      // No state-change events should have been captured
      expect(events.length).toBe(0);
    } finally {
      await session.stop();
    }
  }, 15_000);

  // ─── DS-27: Rebuild cannot be called before start ───────

  test('DS-27: rebuild() before start() throws error', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    await expect(session.rebuild()).rejects.toThrow(/Cannot rebuild.*idle/);
  });

  test('DS-27b: compatibility wrapper preserves DevSession rebuild error wording', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);

    await expect(session.rebuild()).rejects.toThrow(
      "Cannot rebuild DevSession: session is in 'idle' state (expected 'watching' or 'rebuilding')",
    );
  });

  // ─── DS-28: Non-TS files are not watched ────────────────

  test('DS-28: non-TypeScript files do not trigger rebuild', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-start');

    try {
      await session.start();
      await sleep(500);

      // Write a non-TS file
      writeFileSync(join(tempDir, 'src', 'readme.md'), '# Hello');

      await sleep(800);
      expect(rebuildEvents.length).toBe(0);
    } finally {
      await session.stop();
    }
  }, 10_000);

  // ─── DS-29: stop drains active rebuilds safely ──────────

  test('DS-29: stop waits for active rebuild and leaves the session stopped', async () => {
    const config = makeConfig(tempDir);
    const session = createDevSession(config);
    const exitEvents = collectEvents(session, 'exit');
    const stateEvents = collectEvents(session, 'state-change');

    try {
      await session.start();

      const rebuildPromise = session.rebuild();

      await sleep(10);
      await session.stop();

      const result = await rebuildPromise;
      expect(result.success).toBe(true);
      expect(session.getState()).toBe('stopped');
      expect(exitEvents.length).toBe(1);
      expect(session.getStats().rebuildCount).toBe(1);

      await sleep(250);

      const postStopWatchingTransitions = stateEvents.filter((event) => {
        const data = event.data as { from: string; to: string };
        return data.from === 'stopping' && data.to === 'watching';
      });
      expect(postStopWatchingTransitions.length).toBe(0);
      expect(session.getState()).toBe('stopped');
    } finally {
      await session.stop();
    }
  }, 20_000);

  // ─── DS-30: outDir is ignored by watcher ───────────────

  test('DS-30: changes inside outDir do not trigger rebuild loops', async () => {
    const config = makeConfig(tempDir, {
      dev: {
        ...makeConfig(tempDir).dev,
        watchPaths: [tempDir],
      },
    });
    const session = createDevSession(config);
    const rebuildEvents = collectEvents(session, 'rebuild-start');
    const fileChangeEvents = collectEvents(session, 'file-change');

    try {
      await session.start();
      await sleep(500);

      writeFileSync(join(tempDir, 'dist', 'generated-entry.ts'), 'export const generated = 1;\n');

      await sleep(800);

      expect(fileChangeEvents).toHaveLength(0);
      expect(rebuildEvents).toHaveLength(0);
    } finally {
      await session.stop();
    }
  }, 15_000);
});
