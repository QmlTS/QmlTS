import type { Diagnostic } from '../compiler/diagnostics.js';
import { createBuildPipeline } from './build-pipeline.js';
import type { BuildCommandOptions, BuildCommandResult, PipelineRunOptions } from './build-types.js';
import { loadConfig } from './config-loader.js';

export async function executeBuild(options: BuildCommandOptions = {}): Promise<BuildCommandResult> {
  const start = performance.now();

  const config = await loadConfig(options.config);

  const pipeline = createBuildPipeline(config);
  if (options.verbose) {
    pipeline.onProgress((progress) => {
      console.info(`[qmlts build:${progress.phase}] ${progress.message}`);
    });
  }

  const pipelineOptions: PipelineRunOptions = {
    force: options.force,
    files: options.files,
    dryRun: options.dryRun,
  };

  const result = await pipeline.run(pipelineOptions);

  const allDiagnostics: Diagnostic[] = [];
  for (const [, phaseResult] of result.phases) {
    allDiagnostics.push(...phaseResult.diagnostics);
  }

  const commandResult: BuildCommandResult = {
    success: result.success,
    stats: result.compilationStats ?? null,
    diagnostics: allDiagnostics,
    outputDir: config.outDir,
    durationMs: performance.now() - start,
  };

  if (options.json) {
    console.info(JSON.stringify(commandResult, null, 2));
  }

  return commandResult;
}
