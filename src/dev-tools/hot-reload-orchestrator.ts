import type {
  HotReloadClient,
  HotReloadContext,
  HotReloadDiagnostic,
  HotReloadOrchestrator,
  HotReloadOrchestratorOptions,
  HotReloadOrchestratorResult,
  InstanceRestorePair,
  InstanceSlotInfo,
  NativeInstanceSnapshot,
} from './dev-types.js';

interface OrchestratorInternals {
  client: HotReloadClient;
  sequence: number;
  lastResult: HotReloadOrchestratorResult | undefined;
  reloadInProgress: boolean;
  beforeHooks: Set<(ctx: HotReloadContext) => void | Promise<void>>;
  afterHooks: Set<(result: HotReloadOrchestratorResult) => void | Promise<void>>;
  disposed: boolean;
  getInstanceSlots?: () => InstanceSlotInfo[];
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

function matchSnapshots(
  nativeSnapshots: readonly NativeInstanceSnapshot[],
  oldSlots: readonly InstanceSlotInfo[],
  newSlots: readonly InstanceSlotInfo[],
): { pairs: InstanceRestorePair[]; unmatched: number } {
  const pairs: InstanceRestorePair[] = [];
  let unmatched = 0;

  // Build lookup: old instanceId → (className, compilerSlotKey)
  const oldSlotMap = new Map<number, { className: string; compilerSlotKey?: string }>();
  for (const slot of oldSlots) {
    oldSlotMap.set(slot.instanceId, {
      className: slot.className,
      compilerSlotKey: slot.compilerSlotKey,
    });
  }

  // Build lookup: (className, compilerSlotKey) → new instanceId
  const newSlotMap = new Map<string, number>();
  for (const slot of newSlots) {
    if (slot.compilerSlotKey) {
      newSlotMap.set(`${slot.className}::${slot.compilerSlotKey}`, slot.instanceId);
    }
  }

  for (const snapshot of nativeSnapshots) {
    const oldMeta = oldSlotMap.get(snapshot.instanceId);
    if (!oldMeta?.compilerSlotKey) {
      unmatched++;
      continue;
    }

    const matchKey = `${oldMeta.className}::${oldMeta.compilerSlotKey}`;
    const newInstanceId = newSlotMap.get(matchKey);

    if (newInstanceId !== undefined) {
      pairs.push({
        instanceId: newInstanceId,
        properties: snapshot.properties,
      });
    } else {
      unmatched++;
    }
  }

  return { pairs, unmatched };
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
    getInstanceSlots: options.getInstanceSlots,
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
          // V2 Phase 1: Capture (before reload)
          let oldSlots: InstanceSlotInfo[] | undefined;
          let capturedSnapshots: NativeInstanceSnapshot[] | undefined;
          const v2Diagnostics: HotReloadDiagnostic[] = [];
          let degraded: boolean | undefined;

          if (internals.getInstanceSlots && internals.client.captureInstanceStates) {
            oldSlots = internals.getInstanceSlots();
            try {
              capturedSnapshots = await internals.client.captureInstanceStates();
            } catch (err) {
              v2Diagnostics.push({
                code: 'HR_CAPTURE_FAILED',
                message: `Capture failed: ${toErrorMessage(err)}`,
              });
            }
          } else if (internals.getInstanceSlots && !internals.client.captureInstanceStates) {
            degraded = true;
            v2Diagnostics.push({
              code: 'HR_DEGRADED',
              message: 'V2 hot reload degraded: native captureInstanceStates not available',
            });
          }

          // V2 Phase 2: Reload
          const clientResult = await internals.client.reload(changedFiles, outputDir);
          const durationMs = performance.now() - start;

          // V2 Phase 3: Restore (after reload)
          let instancesRestored: number | undefined;
          let instancesUnmatched: number | undefined;

          if (
            clientResult.success &&
            capturedSnapshots &&
            oldSlots &&
            internals.getInstanceSlots &&
            internals.client.restoreInstanceStates
          ) {
            const newSlots = internals.getInstanceSlots();
            const { pairs, unmatched } = matchSnapshots(capturedSnapshots, oldSlots, newSlots);
            instancesUnmatched = unmatched;

            if (pairs.length > 0) {
              try {
                const restoreResult = await internals.client.restoreInstanceStates(pairs);
                instancesRestored = pairs.length;
                v2Diagnostics.push(...restoreResult.diagnostics);
              } catch (err) {
                v2Diagnostics.push({
                  code: 'HR_RESTORE_FAILED',
                  message: `Restore failed: ${toErrorMessage(err)}`,
                });
              }
            } else {
              instancesRestored = 0;
            }
          }

          result = {
            success: clientResult.success,
            sequence: currentSequence,
            durationMs,
            filesReloaded: [...changedFiles],
            error: clientResult.error,
            instancesRestored,
            instancesUnmatched,
            degraded,
            diagnostics: v2Diagnostics.length > 0 ? v2Diagnostics : undefined,
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
