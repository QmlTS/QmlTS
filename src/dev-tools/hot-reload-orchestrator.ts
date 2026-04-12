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

function toErrorMessage(err: unknown): string {
  return err instanceof Error ? err.message : String(err);
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
): Promise<Error | undefined> {
  let firstError: Error | undefined;
  for (const hook of internals.afterHooks) {
    try {
      await hook(result);
    } catch (err) {
      if (!firstError) {
        firstError = err instanceof Error ? err : new Error(String(err));
      }
    }
  }
  return firstError;
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
        let result: HotReloadOrchestratorResult;

        // Run before hooks
        const ctx: HotReloadContext = {
          sequence: currentSequence,
          changedFiles,
        };
        await runBeforeHooks(internals, ctx);

        // Check client connection
        if (!internals.client.isConnected()) {
          result = {
            success: false,
            sequence: currentSequence,
            durationMs: performance.now() - start,
            filesReloaded: [],
            error: 'Hot reload client is not connected',
          };
        } else {
          // Perform reload via client
          const clientResult = await internals.client.reload(changedFiles, outputDir);
          const durationMs = performance.now() - start;

          result = {
            success: clientResult.success,
            sequence: currentSequence,
            durationMs,
            filesReloaded: [...changedFiles],
            error: clientResult.error,
          };
        }

        internals.lastResult = result;

        const afterHookError = await runAfterHooks(internals, result);
        if (afterHookError) {
          result = {
            success: false,
            sequence: currentSequence,
            durationMs: performance.now() - start,
            filesReloaded: [...result.filesReloaded],
            error: result.error
              ? `${result.error}; after hook failed: ${afterHookError.message}`
              : `After hook failed: ${afterHookError.message}`,
          };
          internals.lastResult = result;
        }

        return result;
      } catch (err) {
        const result: HotReloadOrchestratorResult = {
          success: false,
          sequence: currentSequence,
          durationMs: performance.now() - start,
          filesReloaded: [],
          error: toErrorMessage(err),
        };
        internals.lastResult = result;

        const afterHookError = await runAfterHooks(internals, result);
        if (afterHookError) {
          const finalResult: HotReloadOrchestratorResult = {
            success: false,
            sequence: currentSequence,
            durationMs: performance.now() - start,
            filesReloaded: [],
            error: `${result.error}; after hook failed: ${afterHookError.message}`,
          };
          internals.lastResult = finalResult;
          return finalResult;
        }

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
