import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import type { HotReloadClient, HotReloadResult } from '../../src/build/build-types.js';
import type { ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { createDevServer } from '../../src/dev-tools/dev-server.js';
import type { DevServerEventPayload, PerfRecord } from '../../src/dev-tools/dev-types.js';
import { createPerfProfiler } from '../../src/dev-tools/perf-profiler.js';

// ─── Helpers ────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Suite 7: PerfProfiler ──────────────────────────────────

describe('Suite 7: PerfProfiler', () => {
  // PERF-73: startSpan returns PerfSpan
  test('PERF-73: startSpan returns PerfSpan', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test-span', 'compile');

    expect(span).toBeDefined();
    expect(typeof span.end).toBe('function');
    expect(typeof span.addMetadata).toBe('function');

    span.end();
  });

  // PERF-74: span.end() records → getRecords contains it
  test('PERF-74: span.end() records entry in getRecords', async () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('compile-view', 'compile');

    await sleep(5);
    span.end();

    const records = profiler.getRecords();
    expect(records).toHaveLength(1);
    expect(records[0]!.name).toBe('compile-view');
    expect(records[0]!.category).toBe('compile');
    expect(records[0]!.durationMs).toBeGreaterThan(0);
    expect(records[0]!.startMs).toBeGreaterThan(0);
  });

  // PERF-75: metadata added to record
  test('PERF-75: addMetadata attaches data to record', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('reload', 'hot-reload');

    span.addMetadata('files', 3);
    span.addMetadata('success', true);
    span.addMetadata('output', 'main.qml');
    span.end();

    const records = profiler.getRecords();
    expect(records[0]!.metadata).toBeDefined();
    expect(records[0]!.metadata!.files).toBe(3);
    expect(records[0]!.metadata!.success).toBe(true);
    expect(records[0]!.metadata!.output).toBe('main.qml');
  });

  test('PERF-75c: addMetadata after end does not mutate recorded span', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('immutable', 'compile');

    span.addMetadata('success', true);
    span.end();
    span.addMetadata('late', 'ignored');

    const records = profiler.getRecords();
    expect(records).toHaveLength(1);
    expect(records[0]!.metadata).toEqual({ success: true });
  });

  // PERF-76: category grouping correct
  test('PERF-76: records are grouped by category correctly', () => {
    const profiler = createPerfProfiler();

    const s1 = profiler.startSpan('compile-1', 'compile');
    s1.end();
    const s2 = profiler.startSpan('reload-1', 'hot-reload');
    s2.end();
    const s3 = profiler.startSpan('compile-2', 'compile');
    s3.end();
    const s4 = profiler.startSpan('capture-1', 'capture');
    s4.end();

    const records = profiler.getRecords();
    expect(records).toHaveLength(4);

    const compileRecords = records.filter((r) => r.category === 'compile');
    const hotReloadRecords = records.filter((r) => r.category === 'hot-reload');
    const captureRecords = records.filter((r) => r.category === 'capture');

    expect(compileRecords).toHaveLength(2);
    expect(hotReloadRecords).toHaveLength(1);
    expect(captureRecords).toHaveLength(1);
  });

  // PERF-77: getSummary averageByCategory correct
  test('PERF-77: getSummary computes averageByCategory correctly', async () => {
    const profiler = createPerfProfiler();

    const s1 = profiler.startSpan('compile-1', 'compile');
    await sleep(10);
    s1.end();

    const s2 = profiler.startSpan('compile-2', 'compile');
    await sleep(10);
    s2.end();

    const summary = profiler.getSummary();
    const records = profiler.getRecords();

    const compileRecords = records.filter((r) => r.category === 'compile');
    const expectedAvg =
      compileRecords.reduce((sum, r) => sum + r.durationMs, 0) / compileRecords.length;

    expect(summary.averageByCategory.compile).toBeCloseTo(expectedAvg, 0);
  });

  // PERF-78: totalByCategory correct
  test('PERF-78: getSummary computes totalByCategory correctly', async () => {
    const profiler = createPerfProfiler();

    const s1 = profiler.startSpan('reload-1', 'hot-reload');
    await sleep(5);
    s1.end();

    const s2 = profiler.startSpan('reload-2', 'hot-reload');
    await sleep(5);
    s2.end();

    const summary = profiler.getSummary();
    const records = profiler.getRecords();
    const expectedTotal = records.reduce((sum, r) => sum + r.durationMs, 0);

    expect(summary.totalByCategory['hot-reload']).toBeCloseTo(expectedTotal, 0);
  });

  // PERF-79: countByCategory correct
  test('PERF-79: getSummary computes countByCategory correctly', () => {
    const profiler = createPerfProfiler();

    for (let i = 0; i < 3; i++) {
      const s = profiler.startSpan(`compile-${i}`, 'compile');
      s.end();
    }
    for (let i = 0; i < 2; i++) {
      const s = profiler.startSpan(`reload-${i}`, 'hot-reload');
      s.end();
    }
    const s = profiler.startSpan('capture', 'capture');
    s.end();

    const summary = profiler.getSummary();

    expect(summary.countByCategory.compile).toBe(3);
    expect(summary.countByCategory['hot-reload']).toBe(2);
    expect(summary.countByCategory.capture).toBe(1);
    expect(summary.totalRecords).toBe(6);
  });

  // PERF-80: clear empties records
  test('PERF-80: clear() removes all records', () => {
    const profiler = createPerfProfiler();

    const s1 = profiler.startSpan('compile-1', 'compile');
    s1.end();
    const s2 = profiler.startSpan('reload-1', 'hot-reload');
    s2.end();

    expect(profiler.getRecords()).toHaveLength(2);

    profiler.clear();

    expect(profiler.getRecords()).toHaveLength(0);
    expect(profiler.getSummary().totalRecords).toBe(0);
  });

  // PERF-81: exportChromeTrace outputs valid JSON
  test('PERF-81: exportChromeTrace outputs valid JSON', () => {
    const profiler = createPerfProfiler();

    const s = profiler.startSpan('compile', 'compile');
    s.addMetadata('files', 5);
    s.end();

    const json = profiler.exportChromeTrace();
    const parsed = JSON.parse(json);

    expect(parsed).toBeDefined();
    expect(parsed.traceEvents).toBeDefined();
    expect(Array.isArray(parsed.traceEvents)).toBe(true);
    expect(parsed.traceEvents).toHaveLength(1);
  });

  // PERF-82: Chrome Trace format has name, ph, ts, dur fields
  test('PERF-82: Chrome Trace events have correct format', async () => {
    const profiler = createPerfProfiler();

    const s = profiler.startSpan('rebuild', 'compile');
    s.addMetadata('changedFiles', 2);
    await sleep(5);
    s.end();

    const json = profiler.exportChromeTrace();
    const parsed = JSON.parse(json);
    const event = parsed.traceEvents[0];

    expect(event.name).toBe('rebuild');
    expect(event.cat).toBe('compile');
    expect(event.ph).toBe('X');
    expect(typeof event.ts).toBe('number');
    expect(event.ts).toBeGreaterThan(0);
    expect(typeof event.dur).toBe('number');
    expect(event.dur).toBeGreaterThan(0);
    expect(event.pid).toBe(1);
    expect(event.tid).toBe(1);
    expect(event.args).toBeDefined();
    expect(event.args.changedFiles).toBe(2);
  });

  // ─── Additional coverage ────────────────────────────────

  test('PERF-73b: unended span is not recorded', () => {
    const profiler = createPerfProfiler();
    profiler.startSpan('never-ended', 'compile');

    expect(profiler.getRecords()).toHaveLength(0);
  });

  test('PERF-74b: span.end() is idempotent', async () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    await sleep(2);
    span.end();
    span.end(); // second end should be no-op

    expect(profiler.getRecords()).toHaveLength(1);
  });

  test('PERF-75b: record without metadata has no metadata field', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('bare', 'compile');
    span.end();

    const records = profiler.getRecords();
    expect(records[0]!.metadata).toBeUndefined();
  });

  test('PERF-81b: Chrome Trace with no metadata omits args', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('bare', 'compile');
    span.end();

    const json = profiler.exportChromeTrace();
    const parsed = JSON.parse(json);
    expect(parsed.traceEvents[0].args).toBeUndefined();
  });

  test('PERF-79b: summary for unused categories returns partial record', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('compile-only', 'compile');
    span.end();

    const summary = profiler.getSummary();
    expect(summary.countByCategory.compile).toBe(1);
    expect(summary.countByCategory['hot-reload']).toBeUndefined();
    expect(summary.countByCategory.capture).toBeUndefined();
  });
});

// ─── DevServer profiler integration ─────────────────────────

const FIXTURES_DIR = resolve(__dirname, '..', 'build', 'fixtures', 'sample-project');

function waitForServerEvent(
  server: ReturnType<typeof createDevServer>,
  event: string,
  timeoutMs = 10_000,
): Promise<DevServerEventPayload> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error(`Timeout waiting for ${event}`)), timeoutMs);
    server.on(event as any, (payload: DevServerEventPayload) => {
      clearTimeout(timeout);
      resolve(payload);
    });
  });
}

describe('DevServer profiler integration', () => {
  let tmpDir: string;

  beforeEach(() => {
    tmpDir = mkdtempSync(join(tmpdir(), 'perf-devserver-'));
    cpSync(FIXTURES_DIR, tmpDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tmpDir, { recursive: true, force: true });
  });

  function makeConfig(overrides?: Partial<ResolvedQmltsConfig>): ResolvedQmltsConfig {
    return {
      entry: join(tmpDir, 'src', 'CounterView.ts'),
      outDir: join(tmpDir, 'dist'),
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
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 100,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
      assets: {
        dir: join(tmpDir, 'assets'),
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
      configDir: tmpDir,
      ...overrides,
    } as ResolvedQmltsConfig;
  }

  test('PERF-91: profiler records initial build span from DevServer', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig();
    const server = createDevServer(config, { profiler });

    await server.start();

    const records = profiler.getRecords();
    const buildRecords = records.filter(
      (r: PerfRecord) => r.name === 'initial-build' && r.category === 'compile',
    );

    expect(buildRecords.length).toBeGreaterThanOrEqual(1);
    expect(buildRecords[0]!.durationMs).toBeGreaterThan(0);
    expect(buildRecords[0]!.metadata).toBeDefined();
    expect(typeof buildRecords[0]!.metadata!.success).toBe('boolean');

    await server.stop();
  });

  test('PERF-91b: profiler records rebuild span from DevServer', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: false,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);
    const server = createDevServer(config, { profiler });

    await server.start();

    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    writeFileSync(
      srcFile,
      `
import { View } from "@qmlts/dsl";
export class CounterView extends View {
  body() { return this.Rectangle({ width: 200, height: 200 }); }
}
`,
    );

    const rebuildResult = await server.rebuild();
    expect(rebuildResult.success).toBe(true);

    const records = profiler.getRecords();
    const rebuildRecords = records.filter(
      (r: PerfRecord) => r.name === 'rebuild' && r.category === 'compile',
    );

    expect(rebuildRecords.length).toBeGreaterThanOrEqual(1);
    expect(rebuildRecords[0]!.durationMs).toBeGreaterThan(0);

    await server.stop();
  });

  test('PERF-91b2: rebuild failure records consistent compile metadata', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: false,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);
    const server = createDevServer(config, { profiler });

    await server.start();

    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    writeFileSync(
      srcFile,
      `
import type { CounterViewModel } from './CounterViewModel.js';
import { Rectangle } from './dsl/generated/QtQuick/Rectangle.js';

export default function CounterView(_vm: CounterViewModel) {
  return Rectangle().unknownProperty(42);
}
`,
    );

    const rebuildResult = await server.rebuild();
    expect(rebuildResult.success).toBe(false);
    await server.stop();

    const rebuildRecords = profiler
      .getRecords()
      .filter((r: PerfRecord) => r.name === 'rebuild' && r.category === 'compile');

    expect(rebuildRecords.length).toBeGreaterThanOrEqual(1);
    const lastRecord = rebuildRecords.at(-1)!;
    expect(lastRecord.metadata).toBeDefined();
    expect(lastRecord.metadata!.success).toBe(false);
    expect(typeof lastRecord.metadata!.durationMs).toBe('number');
    expect(lastRecord.metadata!.changedFiles).toBe(0);
  });

  test('PERF-91c: profiler records hot-reload span when client provided', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: true,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);

    const mockClient: HotReloadClient = {
      isConnected: () => true,
      reload: async (): Promise<HotReloadResult> => ({ success: true }),
      dispose: () => {},
    };

    const server = createDevServer(config, {
      profiler,
      hotReloadClient: mockClient,
    });

    await server.start();

    const hotReloadDone = waitForServerEvent(server, 'hot-reload');

    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    await sleep(150);
    writeFileSync(
      srcFile,
      `
import { View } from "@qmlts/dsl";
export class CounterView extends View {
  body() { return this.Rectangle({ width: 300, height: 300 }); }
}
`,
    );

    await hotReloadDone;

    const records = profiler.getRecords();
    const hrRecords = records.filter(
      (r: PerfRecord) => r.name === 'hot-reload' && r.category === 'hot-reload',
    );

    expect(hrRecords.length).toBeGreaterThanOrEqual(1);
    expect(hrRecords[0]!.metadata).toBeDefined();
    expect(hrRecords[0]!.metadata!.success).toBe(true);

    await server.stop();
  });

  test('PERF-91c2: hot-reload failure records changedFiles metadata', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: true,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);

    const mockClient: HotReloadClient = {
      isConnected: () => true,
      reload: async (): Promise<HotReloadResult> => ({
        success: false,
        durationMs: 7,
        error: 'reload failed',
      }),
      dispose: () => {},
    };

    const server = createDevServer(config, {
      profiler,
      hotReloadClient: mockClient,
    });

    await server.start();

    const hotReloadError = waitForServerEvent(server, 'hot-reload-error');
    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    await sleep(150);
    writeFileSync(
      srcFile,
      `
import { View } from "@qmlts/dsl";
export class CounterView extends View {
  body() { return this.Text({ text: "reload-fail" }); }
}
`,
    );

    await hotReloadError;
    await server.stop();

    const hotReloadRecords = profiler
      .getRecords()
      .filter((r: PerfRecord) => r.name === 'hot-reload' && r.category === 'hot-reload');

    expect(hotReloadRecords.length).toBeGreaterThanOrEqual(1);
    const lastRecord = hotReloadRecords.at(-1)!;
    expect(lastRecord.metadata).toBeDefined();
    expect(lastRecord.metadata!.success).toBe(false);
    expect(typeof lastRecord.metadata!.durationMs).toBe('number');
    expect(Number(lastRecord.metadata!.durationMs)).toBeGreaterThan(0);
    expect(typeof lastRecord.metadata!.changedFiles).toBe('number');
    expect(Number(lastRecord.metadata!.changedFiles)).toBeGreaterThanOrEqual(1);
  });

  test('PERF-91e: listener errors after successful rebuild do not mutate ended span metadata', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: false,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);
    const server = createDevServer(config, { profiler });

    await server.start();

    server.on('rebuild-success', () => {
      throw new Error('listener boom');
    });

    const rebuildError = waitForServerEvent(server, 'rebuild-error');
    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    await sleep(150);
    writeFileSync(
      srcFile,
      `
import { View } from "@qmlts/dsl";
export class CounterView extends View {
  body() { return this.Rectangle({ width: 320, height: 180 }); }
}
`,
    );

    await rebuildError;
    await server.stop();

    const rebuildRecords = profiler
      .getRecords()
      .filter((r: PerfRecord) => r.name === 'rebuild' && r.category === 'compile');

    expect(rebuildRecords.length).toBeGreaterThanOrEqual(1);
    const lastRecord = rebuildRecords.at(-1)!;
    expect(lastRecord.metadata).toBeDefined();
    expect(lastRecord.metadata!.success).toBe(true);
    expect(lastRecord.metadata!.error).toBeUndefined();
  });

  test('PERF-91d: full dev cycle produces complete profiler record chain', async () => {
    const profiler = createPerfProfiler();
    const config = makeConfig({
      dev: {
        hotReload: true,
        watchPaths: [join(tmpDir, 'src')],
        debounceMs: 50,
        ignorePatterns: [],
        port: 0,
        notify: false,
        preserveOnError: true,
      },
    } as Partial<ResolvedQmltsConfig>);

    const mockClient: HotReloadClient = {
      isConnected: () => true,
      reload: async (): Promise<HotReloadResult> => ({ success: true }),
      dispose: () => {},
    };

    const server = createDevServer(config, {
      profiler,
      hotReloadClient: mockClient,
    });

    await server.start();

    const hotReloadDone = waitForServerEvent(server, 'hot-reload');

    const srcFile = join(tmpDir, 'src', 'CounterView.ts');
    await sleep(150);
    writeFileSync(
      srcFile,
      `
import { View } from "@qmlts/dsl";
export class CounterView extends View {
  body() { return this.Text({ text: "updated" }); }
}
`,
    );

    await hotReloadDone;
    await server.stop();

    const records = profiler.getRecords();
    const categories = new Set(records.map((r: PerfRecord) => r.category));

    // Should have both compile and hot-reload categories
    expect(categories.has('compile')).toBe(true);
    expect(categories.has('hot-reload')).toBe(true);

    // Should have initial-build + rebuild + hot-reload
    expect(records.filter((r: PerfRecord) => r.name === 'initial-build')).toHaveLength(1);
    expect(records.filter((r: PerfRecord) => r.name === 'rebuild').length).toBeGreaterThanOrEqual(
      1,
    );
    expect(
      records.filter((r: PerfRecord) => r.name === 'hot-reload').length,
    ).toBeGreaterThanOrEqual(1);

    // Verify Chrome Trace export includes all records
    const json = profiler.exportChromeTrace();
    const parsed = JSON.parse(json);
    expect(parsed.traceEvents.length).toBe(records.length);
  });
});

// ─── V2 Instance Context Tests ──────────────────────────────

describe('PerfProfiler V2', () => {
  test('PP-V2-01: span with instance context includes instanceId in record', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    span.setInstanceContext?.(42, 'LoginViewModel', 'login-slot');
    span.end();
    const records = profiler.getRecords();
    expect(records[0]!.instanceId).toBe(42);
    expect(records[0]!.className).toBe('LoginViewModel');
    expect(records[0]!.compilerSlotKey).toBe('login-slot');
  });

  test('PP-V2-02: getRecordsByInstance filters correctly', () => {
    const profiler = createPerfProfiler();
    const s1 = profiler.startSpan('a', 'compile');
    s1.setInstanceContext?.(1, 'A');
    s1.end();
    const s2 = profiler.startSpan('b', 'compile');
    s2.setInstanceContext?.(2, 'B');
    s2.end();
    const s3 = profiler.startSpan('c', 'compile');
    s3.end(); // no instance context
    expect(profiler.getRecordsByInstance?.(1)).toHaveLength(1);
    expect(profiler.getRecordsByInstance?.(2)).toHaveLength(1);
    expect(profiler.getRecordsByInstance?.(99)).toHaveLength(0);
  });

  test('PP-V2-03: getRecordsByClass filters correctly', () => {
    const profiler = createPerfProfiler();
    const s1 = profiler.startSpan('a', 'compile');
    s1.setInstanceContext?.(1, 'Login');
    s1.end();
    const s2 = profiler.startSpan('b', 'compile');
    s2.setInstanceContext?.(2, 'Login');
    s2.end();
    const s3 = profiler.startSpan('c', 'compile');
    s3.setInstanceContext?.(3, 'Counter');
    s3.end();
    expect(profiler.getRecordsByClass?.('Login')).toHaveLength(2);
    expect(profiler.getRecordsByClass?.('Counter')).toHaveLength(1);
  });

  test('PP-V2-04: getRecordsBySlotKey filters correctly', () => {
    const profiler = createPerfProfiler();
    const s1 = profiler.startSpan('a', 'compile');
    s1.setInstanceContext?.(1, 'A', 'slot-a');
    s1.end();
    const s2 = profiler.startSpan('b', 'compile');
    s2.setInstanceContext?.(2, 'B', 'slot-b');
    s2.end();
    expect(profiler.getRecordsBySlotKey?.('slot-a')).toHaveLength(1);
    expect(profiler.getRecordsBySlotKey?.('slot-b')).toHaveLength(1);
    expect(profiler.getRecordsBySlotKey?.('nonexistent')).toHaveLength(0);
  });

  test('PP-V2-05: Chrome trace includes instance args', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    span.setInstanceContext?.(42, 'Login', 'login-slot');
    span.end();
    const trace = JSON.parse(profiler.exportChromeTrace());
    expect(trace.traceEvents[0].args.instanceId).toBe(42);
    expect(trace.traceEvents[0].args.className).toBe('Login');
    expect(trace.traceEvents[0].args.compilerSlotKey).toBe('login-slot');
  });

  test('PP-V2-06: setInstanceContext after end is ignored', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    span.end();
    span.setInstanceContext?.(42, 'Login');
    const records = profiler.getRecords();
    expect(records[0]!.instanceId).toBeUndefined();
  });

  test('PP-V2-07: record without instance context omits instance fields', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    span.end();
    const records = profiler.getRecords();
    expect(records[0]!.instanceId).toBeUndefined();
    expect(records[0]!.className).toBeUndefined();
    expect(records[0]!.compilerSlotKey).toBeUndefined();
  });

  test('PP-V2-08: setInstanceContext without compilerSlotKey', () => {
    const profiler = createPerfProfiler();
    const span = profiler.startSpan('test', 'compile');
    span.setInstanceContext?.(10, 'Counter');
    span.end();
    const records = profiler.getRecords();
    expect(records[0]!.instanceId).toBe(10);
    expect(records[0]!.className).toBe('Counter');
    expect(records[0]!.compilerSlotKey).toBeUndefined();
  });
});
