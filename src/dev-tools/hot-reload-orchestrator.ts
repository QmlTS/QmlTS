import type {
  HotReloadClient,
  HotReloadContext,
  HotReloadOrchestrator,
  HotReloadOrchestratorOptions,
  HotReloadOrchestratorResult,
} from './dev-types.js';

interface OrchestratorInternals {
  client: HotReloadClient;
  sequence: number;
  lastResult: HotReloadOrchestratorResult | undefined;
  reloadInProgress: boolean;
  beforeHooks: Set<(ctx: HotReloadContext) => void | Promise<void>>;
  afterHooks: Set<(result: HotReloadOrchestratorResult) => void | Promise<void>>;
  disposed: boolean;
}

async function runBeforeHooks(
  internals: OrchestratorInternals,
  ctx: HotReloadContext,
): Promise<void> {
  for (const hook of internals.beforeHooks) {
    await hook(ctx);
  }
}

async function runAfterHooks(
  internals: OrchestratorInternals,
  result: HotReloadOrchestratorResult,
): Promise<void> {
  for (const hook of internals.afterHooks) {
    await hook(result);
  }
}

export function createHotReloadOrchestrator(
  options: HotReloadOrchestratorOptions,
): HotReloadOrchestrator {
  const internals: OrchestratorInternals = {
    client: options.client,
    sequence: 0,
    lastResult: undefined,
    reloadInProgress: false,
    beforeHooks: new Set(),
    afterHooks: new Set(),
    disposed: false,
  };

  return {
    async reload(
      changedFiles: readonly string[],
      outputDir: string,
    ): Promise<HotReloadOrchestratorResult> {
      if (internals.disposed) {
        return {
          success: false,
          sequence: internals.sequence,
          durationMs: 0,
          filesReloaded: [],
          error: 'Orchestrator is disposed',
        };
      }

      // Concurrent protection: reject if already reloading
      if (internals.reloadInProgress) {
        return {
          success: false,
          sequence: internals.sequence,
          durationMs: 0,
          filesReloaded: [],
          error: 'Reload already in progress',
        };
      }

      internals.reloadInProgress = true;
      const currentSequence = ++internals.sequence;
      const start = performance.now();

      try {
        // Run before hooks
        const ctx: HotReloadContext = {
          sequence: currentSequence,
          changedFiles,
        };
        await runBeforeHooks(internals, ctx);

        // Check client connection
        if (!internals.client.isConnected()) {
          const result: HotReloadOrchestratorResult = {
            success: false,
            sequence: currentSequence,
            durationMs: performance.now() - start,
            filesReloaded: [],
            error: 'Hot reload client is not connected',
          };
          internals.lastResult = result;
          await runAfterHooks(internals, result);
          return result;
        }

        // Perform reload via client
        const clientResult = await internals.client.reload(changedFiles, outputDir);
        const durationMs = performance.now() - start;

        const result: HotReloadOrchestratorResult = {
          success: clientResult.success,
          sequence: currentSequence,
          durationMs,
          filesReloaded: [...changedFiles],
          error: clientResult.error,
        };

        internals.lastResult = result;
        await runAfterHooks(internals, result);
        return result;
      } catch (err) {
        const durationMs = performance.now() - start;
        const result: HotReloadOrchestratorResult = {
          success: false,
          sequence: currentSequence,
          durationMs,
          filesReloaded: [],
          error: err instanceof Error ? err.message : String(err),
        };
        internals.lastResult = result;
        await runAfterHooks(internals, result);
        return result;
      } finally {
        internals.reloadInProgress = false;
      }
    },

    onBefore(hook: (ctx: HotReloadContext) => void | Promise<void>): void {
      internals.beforeHooks.add(hook);
    },

    onAfter(hook: (result: HotReloadOrchestratorResult) => void | Promise<void>): void {
      internals.afterHooks.add(hook);
    },

    offBefore(hook: (ctx: HotReloadContext) => void | Promise<void>): void {
      internals.beforeHooks.delete(hook);
    },

    offAfter(hook: (result: HotReloadOrchestratorResult) => void | Promise<void>): void {
      internals.afterHooks.delete(hook);
    },

    get lastResult(): HotReloadOrchestratorResult | undefined {
      return internals.lastResult;
    },

    get reloadCount(): number {
      return internals.sequence;
    },

    dispose(): void {
      internals.disposed = true;
      internals.beforeHooks.clear();
      internals.afterHooks.clear();
      internals.client.dispose();
    },
  };
}
