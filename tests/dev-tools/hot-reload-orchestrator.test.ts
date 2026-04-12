import { describe, expect, test } from 'bun:test';
import type { HotReloadClient, HotReloadResult } from '../../src/build/build-types.js';
import type {
  HotReloadContext,
  HotReloadOrchestratorResult,
} from '../../src/dev-tools/dev-types.js';
import { createHotReloadOrchestrator } from '../../src/dev-tools/hot-reload-orchestrator.js';

function createMockClient(
  options: { connected?: boolean; shouldFail?: boolean; delay?: number } = {},
): HotReloadClient & { calls: Array<{ files: readonly string[]; dir: string }> } {
  const calls: Array<{ files: readonly string[]; dir: string }> = [];
  let disposed = false;

  return {
    calls,
    async reload(changedFiles: readonly string[], outputDir: string): Promise<HotReloadResult> {
      if (options.delay) {
        await new Promise((resolve) => setTimeout(resolve, options.delay));
      }
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

describe('HotReloadOrchestrator', () => {
  // ─── HR-01: Basic reload ───────────────────────────────

  test('HR-01: reload delegates to client and returns result', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    const result = await orch.reload(['file.ts'], '/output');

    expect(result.success).toBe(true);
    expect(result.sequence).toBe(1);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(result.filesReloaded).toEqual(['file.ts']);
    expect(client.calls.length).toBe(1);
    expect(client.calls[0]!.files).toEqual(['file.ts']);
    expect(client.calls[0]!.dir).toBe('/output');
  });

  // ─── HR-02: Sequence tracking ──────────────────────────

  test('HR-02: reload count and sequence increment on each reload', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    expect(orch.reloadCount).toBe(0);

    await orch.reload(['a.ts'], '/out');
    expect(orch.reloadCount).toBe(1);

    await orch.reload(['b.ts'], '/out');
    expect(orch.reloadCount).toBe(2);

    const result = await orch.reload(['c.ts'], '/out');
    expect(result.sequence).toBe(3);
    expect(orch.reloadCount).toBe(3);
  });

  // ─── HR-03: lastResult tracking ────────────────────────

  test('HR-03: lastResult tracks most recent reload result', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    expect(orch.lastResult).toBeUndefined();

    await orch.reload(['first.ts'], '/out');
    expect(orch.lastResult).toBeDefined();
    expect(orch.lastResult!.success).toBe(true);
    expect(orch.lastResult!.sequence).toBe(1);

    const failClient = createMockClient({ shouldFail: true });
    const failOrch = createHotReloadOrchestrator({ client: failClient });

    await failOrch.reload(['fail.ts'], '/out');
    expect(failOrch.lastResult!.success).toBe(false);
    expect(failOrch.lastResult!.error).toBe('Mock reload failure');
  });

  // ─── HR-04: Before hooks ───────────────────────────────

  test('HR-04: onBefore hooks are called before reload', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    const beforeCalls: HotReloadContext[] = [];
    orch.onBefore((ctx) => {
      beforeCalls.push(ctx);
    });

    await orch.reload(['hook.ts'], '/out');

    expect(beforeCalls.length).toBe(1);
    expect(beforeCalls[0]!.sequence).toBe(1);
    expect(beforeCalls[0]!.changedFiles).toEqual(['hook.ts']);
  });

  // ─── HR-05: After hooks ────────────────────────────────

  test('HR-05: onAfter hooks are called after reload with result', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    const afterCalls: HotReloadOrchestratorResult[] = [];
    orch.onAfter((result) => {
      afterCalls.push(result);
    });

    await orch.reload(['after.ts'], '/out');

    expect(afterCalls.length).toBe(1);
    expect(afterCalls[0]!.success).toBe(true);
    expect(afterCalls[0]!.sequence).toBe(1);
  });

  // ─── HR-06: Hook removal ──────────────────────────────

  test('HR-06: offBefore/offAfter removes hooks', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    const calls: string[] = [];
    const beforeHook = () => {
      calls.push('before');
    };
    const afterHook = () => {
      calls.push('after');
    };

    orch.onBefore(beforeHook);
    orch.onAfter(afterHook);

    await orch.reload(['a.ts'], '/out');
    expect(calls).toEqual(['before', 'after']);

    orch.offBefore(beforeHook);
    orch.offAfter(afterHook);

    await orch.reload(['b.ts'], '/out');
    expect(calls).toEqual(['before', 'after']); // No new calls
  });

  // ─── HR-07: Client not connected ───────────────────────

  test('HR-07: reload returns error when client is not connected', async () => {
    const client = createMockClient({ connected: false });
    const orch = createHotReloadOrchestrator({ client });

    const result = await orch.reload(['nc.ts'], '/out');

    expect(result.success).toBe(false);
    expect(result.error).toContain('not connected');
    expect(client.calls.length).toBe(0); // Should not have called reload
  });

  // ─── HR-08: Concurrent protection ─────────────────────

  test('HR-08: concurrent reload is rejected while one is in progress', async () => {
    const client = createMockClient({ delay: 100 });
    const orch = createHotReloadOrchestrator({ client });

    // Start first reload (will take 100ms)
    const reload1 = orch.reload(['a.ts'], '/out');

    // Try second reload immediately — should be rejected
    const result2 = await orch.reload(['b.ts'], '/out');

    expect(result2.success).toBe(false);
    expect(result2.error).toContain('already in progress');

    // First reload should succeed
    const result1 = await reload1;
    expect(result1.success).toBe(true);
  });

  // ─── HR-09: Client error handling ──────────────────────

  test('HR-09: client exception is caught and returned as error result', async () => {
    const client: HotReloadClient = {
      async reload(): Promise<HotReloadResult> {
        throw new Error('Connection reset');
      },
      isConnected: () => true,
      dispose: () => {},
    };
    const orch = createHotReloadOrchestrator({ client });

    const result = await orch.reload(['err.ts'], '/out');

    expect(result.success).toBe(false);
    expect(result.error).toContain('Connection reset');
    // After hooks should still be called
    expect(orch.lastResult).toBeDefined();
    expect(orch.lastResult!.success).toBe(false);
  });

  // ─── HR-10: Dispose ────────────────────────────────────

  test('HR-10: dispose disposes client and rejects subsequent reloads', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    orch.dispose();

    expect(client.isConnected()).toBe(false);

    const result = await orch.reload(['d.ts'], '/out');
    expect(result.success).toBe(false);
    expect(result.error).toContain('disposed');
  });

  // ─── HR-11: Failed reload result ───────────────────────

  test('HR-11: client failure returns error result with proper metadata', async () => {
    const client = createMockClient({ shouldFail: true });
    const orch = createHotReloadOrchestrator({ client });

    const result = await orch.reload(['fail.ts'], '/out');

    expect(result.success).toBe(false);
    expect(result.error).toBe('Mock reload failure');
    expect(result.sequence).toBe(1);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(result.filesReloaded).toEqual(['fail.ts']);
  });

  // ─── HR-12: After hooks on error ───────────────────────

  test('HR-12: after hooks are called even when reload fails', async () => {
    const client = createMockClient({ shouldFail: true });
    const orch = createHotReloadOrchestrator({ client });

    const afterResults: HotReloadOrchestratorResult[] = [];
    orch.onAfter((result) => afterResults.push(result));

    await orch.reload(['fail.ts'], '/out');

    expect(afterResults.length).toBe(1);
    expect(afterResults[0]!.success).toBe(false);
  });

  // ─── HR-13: After hook failures are isolated ───────────

  test('HR-13: after hook failures do not throw or trigger hooks twice', async () => {
    const client = createMockClient();
    const orch = createHotReloadOrchestrator({ client });

    let throwingHookCalls = 0;
    const successfulResults: HotReloadOrchestratorResult[] = [];

    orch.onAfter(() => {
      throwingHookCalls++;
      throw new Error('after hook boom');
    });
    orch.onAfter((result) => {
      successfulResults.push(result);
    });

    const result = await orch.reload(['hook-failure.ts'], '/out');

    expect(result.success).toBe(false);
    expect(result.error).toMatch(/after hook failed/i);
    expect(throwingHookCalls).toBe(1);
    expect(successfulResults).toHaveLength(1);
    expect(orch.lastResult?.error).toMatch(/after hook failed/i);
  });
});
