import { existsSync, rmSync } from 'node:fs';
import { dirname, join, parse, resolve } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import { compile } from '../compiler/pipeline/compiler.js';
import type { CompilationResult, CompilationStats } from '../compiler/pipeline/pipeline-types.js';
import { BuildError } from './build-error.js';
import type {
  BuildPhase,
  BuildPipelineResult,
  BuildProgress,
  PhaseResult,
  PipelineRunOptions,
  ProductLayout,
} from './build-types.js';
import type { ResolvedQmltsConfig } from './config-types.js';
import {
  alignCompilationResultToLayout,
  createManifest,
  createProductLayout,
  materializeLayout,
  writeCompilationUnits,
  writeEventBindings,
  writeManifest,
} from './product-layout.js';

// ─── Types ──────────────────────────────────────────────────

export interface BuildPipeline {
  onProgress(callback: (progress: BuildProgress) => void): void;
  run(options?: PipelineRunOptions): Promise<BuildPipelineResult>;
}

// ─── Phase runner helper ────────────────────────────────────

interface PhaseContext {
  config: ResolvedQmltsConfig;
  options: PipelineRunOptions;
  compilationResult?: CompilationResult;
  layout?: ProductLayout;
  progressListeners: Array<(progress: BuildProgress) => void>;
}

function emitProgress(ctx: PhaseContext, progress: BuildProgress): void {
  for (const listener of ctx.progressListeners) {
    listener(progress);
  }
}

async function runPhase(
  phase: BuildPhase,
  ctx: PhaseContext,
  fn: () => Promise<{ diagnostics: readonly Diagnostic[] }>,
): Promise<PhaseResult> {
  emitProgress(ctx, { phase, message: `Starting ${phase}` });
  const start = performance.now();
  try {
    const { diagnostics } = await fn();
    const durationMs = performance.now() - start;
    const hasErrors = diagnostics.some((d) => d.severity === 'error');
    return { success: !hasErrors, durationMs, diagnostics };
  } catch (err) {
    const durationMs = performance.now() - start;
    if (err instanceof BuildError) {
      return { success: false, durationMs, diagnostics: err.diagnostics };
    }
    const diag: Diagnostic = {
      severity: 'error',
      code: 'QMLTS-G001',
      message: err instanceof Error ? err.message : String(err),
    };
    return { success: false, durationMs, diagnostics: [diag] };
  }
}

// ─── Individual phase implementations ───────────────────────

function phaseLoadConfig(_ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  return Promise.resolve({ diagnostics: [] });
}

async function phaseDiscoverQt(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];

  if (!ctx.config.qt.dir || !existsSync(ctx.config.qt.dir)) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-Q001',
      message: ctx.config.qt.dir
        ? `Qt directory not found: ${ctx.config.qt.dir}`
        : 'No Qt directory configured; Qt validation will be skipped',
    });
  }

  return { diagnostics };
}

function phaseCompileTs(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const inputDir = dirname(ctx.config.entry);
  const compilerOpts = ctx.config.build.compilerOptions ?? {};

  const tsconfigPath = findTsconfig(inputDir, ctx.config.configDir);

  const result = compile({
    inputDir,
    outputDir: ctx.config.outDir,
    tsconfigPath,
    diagnostics: compilerOpts.diagnostics,
    codegen:
      compilerOpts.codegen ?? (ctx.config.build.sourceMaps ? { sourceMap: true } : undefined),
  });

  const filteredResult = filterCompilationResult(result, ctx.config, ctx.options.files);
  ctx.compilationResult = filteredResult;

  if (!filteredResult.success) {
    throw new BuildError(
      'compiling-ts',
      filteredResult.diagnostics,
      'TypeScript compilation failed',
    );
  }

  emitProgress(ctx, {
    phase: 'compiling-ts',
    message: `Compiled ${filteredResult.units.length} view(s)`,
    current: filteredResult.units.length,
    total: filteredResult.units.length,
  });

  return Promise.resolve({ diagnostics: filteredResult.diagnostics });
}

function findTsconfig(inputDir: string, configDir: string): string | undefined {
  let dir = inputDir;
  const root = parse(dir).root;
  while (true) {
    const candidate = join(dir, 'tsconfig.json');
    if (existsSync(candidate)) return candidate;
    if (dir === root) break;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  const configCandidate = join(configDir, 'tsconfig.json');
  if (existsSync(configCandidate)) return configCandidate;
  return undefined;
}

function filterCompilationResult(
  result: CompilationResult,
  config: ResolvedQmltsConfig,
  files: readonly string[] | undefined,
): CompilationResult {
  if (!files || files.length === 0) {
    return result;
  }

  const selectedFiles = new Set(files.map((file) => resolve(config.configDir, file)));
  const units = result.units.filter((unit) => selectedFiles.has(resolve(unit.sourceFile)));
  const selectedViewModels = new Set(
    units.flatMap(
      (unit) => [unit.viewModelName, unit.schema?.className].filter(Boolean) as string[],
    ),
  );
  const diagnostics = result.diagnostics.filter(
    (diagnostic) => !diagnostic.file || selectedFiles.has(resolve(diagnostic.file)),
  );
  const stats = recomputeCompilationStats(result.stats, units, selectedFiles.size);
  const success = !diagnostics.some((diagnostic) => diagnostic.severity === 'error');

  return {
    ...result,
    units,
    diagnostics,
    success,
    stats,
    eventBindings: {
      commands: result.eventBindings.commands.filter((command) =>
        selectedViewModels.has(command.viewModelClass),
      ),
      effects: result.eventBindings.effects.filter((effect) =>
        selectedViewModels.has(effect.viewModelClass),
      ),
    },
  };
}

function recomputeCompilationStats(
  original: CompilationStats,
  units: readonly CompilationResult['units'][number][],
  totalFiles: number,
): CompilationStats {
  const schemas = units
    .map((unit) => unit.schema)
    .filter((schema): schema is NonNullable<typeof schema> => Boolean(schema));

  return {
    ...original,
    totalFiles,
    totalViewModels: new Set(schemas.map((schema) => schema.className)).size,
    totalViews: units.filter((unit) => unit.qmlContent.length > 0).length,
    totalStates: schemas.reduce((sum, schema) => sum + schema.states.length, 0),
    totalCommands: schemas.reduce((sum, schema) => sum + schema.commands.length, 0),
    totalEffects: schemas.reduce((sum, schema) => sum + schema.effects.length, 0),
  };
}

function phaseCollectDeps(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];
  const nodeModules = join(ctx.config.configDir, 'node_modules');
  if (!existsSync(nodeModules)) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-G002',
      message: 'node_modules not found; dependency collection skipped',
    });
  }
  return Promise.resolve({ diagnostics });
}

function phaseBundleAssets(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];
  const assetsDir = ctx.config.assets.dir;
  if (!existsSync(assetsDir)) {
    diagnostics.push({
      severity: 'info',
      code: 'QMLTS-G003',
      message: `Assets directory not found: ${assetsDir}; asset bundling skipped`,
    });
  }
  return Promise.resolve({ diagnostics });
}

function phaseValidateQml(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];

  if (!ctx.config.build.lint) {
    return Promise.resolve({ diagnostics });
  }

  if (!ctx.config.qt.dir || !existsSync(ctx.config.qt.dir)) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-Q002',
      message: 'QML validation skipped: Qt tools not available',
    });
  }

  return Promise.resolve({ diagnostics });
}

function phasePrepareHost(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  const diagnostics: Diagnostic[] = [];

  if (ctx.config.host.prebuilt) {
    const customPath = ctx.config.host.customPath;
    if (customPath && !existsSync(customPath)) {
      diagnostics.push({
        severity: 'warning',
        code: 'QMLTS-G002',
        message: `Prebuilt host library not found: ${customPath}`,
      });
    }
  }

  return Promise.resolve({ diagnostics });
}

function phaseWriteOutput(ctx: PhaseContext): Promise<{ diagnostics: readonly Diagnostic[] }> {
  if (!ctx.compilationResult) {
    return Promise.resolve({
      diagnostics: [
        {
          severity: 'error',
          code: 'QMLTS-G001',
          message: 'Cannot write output: no compilation result available',
        },
      ],
    });
  }

  const layout = createProductLayout(ctx.config.outDir, ctx.config);
  ctx.layout = layout;
  ctx.compilationResult = alignCompilationResultToLayout(
    ctx.compilationResult,
    layout,
    ctx.config.outDir,
  );

  if (ctx.options.dryRun) {
    return Promise.resolve({ diagnostics: [] });
  }

  materializeLayout(layout);

  writeCompilationUnits(layout, ctx.compilationResult.units, ctx.config.build.sourceMaps);
  writeEventBindings(layout, ctx.compilationResult.eventBindings);

  const manifest = createManifest(layout, ctx.compilationResult, ctx.config);
  writeManifest(layout, manifest);

  emitProgress(ctx, {
    phase: 'writing-output',
    message: `Output written to ${ctx.config.outDir}`,
  });

  return Promise.resolve({ diagnostics: [] });
}

// ─── Pipeline factory ───────────────────────────────────────

const PHASE_RUNNERS: ReadonlyMap<
  BuildPhase,
  (ctx: PhaseContext) => Promise<{ diagnostics: readonly Diagnostic[] }>
> = new Map([
  ['loading-config', phaseLoadConfig],
  ['discovering-qt', phaseDiscoverQt],
  ['compiling-ts', phaseCompileTs],
  ['collecting-deps', phaseCollectDeps],
  ['bundling-assets', phaseBundleAssets],
  ['validating-qml', phaseValidateQml],
  ['preparing-host', phasePrepareHost],
  ['writing-output', phaseWriteOutput],
]);

const EXECUTABLE_PHASES: readonly BuildPhase[] = [
  'loading-config',
  'discovering-qt',
  'compiling-ts',
  'collecting-deps',
  'bundling-assets',
  'validating-qml',
  'preparing-host',
  'writing-output',
];

export function createBuildPipeline(config: ResolvedQmltsConfig): BuildPipeline {
  const progressListeners: Array<(progress: BuildProgress) => void> = [];

  return {
    onProgress(callback) {
      progressListeners.push(callback);
    },

    async run(options: PipelineRunOptions = {}): Promise<BuildPipelineResult> {
      const pipelineStart = performance.now();
      const phases = new Map<BuildPhase, PhaseResult>();

      const ctx: PhaseContext = {
        config,
        options,
        progressListeners,
      };

      if (options.force) {
        const cacheDir = join(config.configDir, '.qmlts');
        if (existsSync(cacheDir)) {
          rmSync(cacheDir, { recursive: true, force: true });
        }
      }

      let compilationFailed = false;

      for (const phase of EXECUTABLE_PHASES) {
        if (compilationFailed && phase === 'writing-output') {
          phases.set(phase, {
            success: false,
            durationMs: 0,
            diagnostics: [
              {
                severity: 'error',
                code: 'QMLTS-G001',
                message: 'Skipped: compilation failed in earlier phase',
              },
            ],
          });
          continue;
        }

        const runner = PHASE_RUNNERS.get(phase)!;
        const result = await runPhase(phase, ctx, () => runner(ctx));
        phases.set(phase, result);

        if (!result.success && phase === 'compiling-ts') {
          compilationFailed = true;
        }
      }

      const output = ctx.layout ?? createProductLayout(config.outDir, config);
      const success = [...phases.values()].every((r) => r.success);
      const durationMs = performance.now() - pipelineStart;

      emitProgress(ctx, {
        phase: 'done',
        message: success ? 'Build succeeded' : 'Build completed with errors',
      });

      return {
        success,
        phases,
        output,
        durationMs,
        compilationStats: ctx.compilationResult?.stats,
      };
    },
  };
}
