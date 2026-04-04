import { existsSync, readFileSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join } from 'node:path';
import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type {
  QmlAotStats,
  QmlCachegenBatchResult,
  QmlCachegenOptions,
  QmlCachegenResult,
  QtInstallation,
} from './types.js';

export function buildCachegenArgs(filePath: string, options?: QmlCachegenOptions): string[] {
  const args: string[] = [];

  if (options?.outputFile) args.push('-o', options.outputFile);
  if (options?.importPaths) {
    for (const p of options.importPaths) args.push('-I', p);
  }
  if (options?.qmldirFiles) {
    for (const f of options.qmldirFiles) args.push('-i', f);
  }
  if (options?.resourceFiles) {
    for (const f of options.resourceFiles) args.push('--resource', f);
  }
  if (options?.resourcePath) {
    args.push('--resource-path', options.resourcePath);
  }
  if (options?.bare) args.push('--bare');
  if (options?.onlyBytecode) args.push('--only-bytecode');
  if (options?.verbose) args.push('--verbose');
  if (options?.warningsAreErrors) args.push('--warnings-are-errors');
  if (options?.validateBasicBlocks) args.push('--validate-basic-blocks');
  if (options?.dumpAotStats) args.push('--dump-aot-stats');
  if (options?.moduleId) args.push('--module-id', options.moduleId);
  if (options?.filterResourceFile) args.push('--filter-resource-file');
  if (options?.resourceFileMappings) {
    for (const m of options.resourceFileMappings) args.push('--resource-file-mapping', m);
  }
  if (options?.resourceName) args.push('--resource-name', options.resourceName);

  args.push(filePath);
  return args;
}

function parseAotStats(statsPath: string): QmlAotStats | undefined {
  if (!existsSync(statsPath)) return undefined;
  try {
    const raw = JSON.parse(readFileSync(statsPath, 'utf-8'));
    let totalBindings = 0;
    let compiledBindings = 0;
    let totalFunctions = 0;
    let compiledFunctions = 0;

    const modules = raw.modules ?? [];
    for (const mod of modules) {
      for (const file of mod.moduleFiles ?? []) {
        for (const entry of file.entries ?? []) {
          // codegenResult: 0 = compiled, non-zero = not compiled
          if (entry.functionName === 'program') {
            totalBindings++;
            if (entry.codegenResult === 0) compiledBindings++;
          } else {
            totalFunctions++;
            if (entry.codegenResult === 0) compiledFunctions++;
          }
        }
      }
    }

    const total = totalBindings + totalFunctions;
    const compiled = compiledBindings + compiledFunctions;
    const compilationRate = total > 0 ? compiled / total : 1;

    return {
      totalBindings,
      compiledBindings,
      totalFunctions,
      compiledFunctions,
      compilationRate,
    };
  } catch {
    return undefined;
  }
}

function extractWarnings(stderr: string): readonly string[] {
  if (!stderr.trim()) return [];
  return stderr
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

export async function compile(
  installation: QtInstallation,
  filePath: string,
  options?: QmlCachegenOptions,
): Promise<QmlCachegenResult> {
  // Auto-generate temp output directory if no outputFile specified
  const needsTempDir = !options?.outputFile;
  let tempDir: string | undefined;
  let outputFile: string;

  if (needsTempDir) {
    tempDir = await mkdtemp(join(tmpdir(), 'qmlts-cg-'));
    outputFile = join(tempDir, `${basename(filePath)}.cpp`);
  } else {
    outputFile = options!.outputFile!;
  }

  // Auto-generate resourcePath if not provided
  const resourcePath = options?.resourcePath ?? `/${basename(filePath)}`;

  const mergedOptions: QmlCachegenOptions = {
    ...options,
    outputFile,
    resourcePath,
  };

  const args = buildCachegenArgs(filePath, mergedOptions);
  const result = await runTool(installation, 'qmlcachegen', args);
  const success = result.exitCode === 0;
  const warnings = extractWarnings(result.stderr);

  let aotStats: QmlAotStats | undefined;
  if (options?.dumpAotStats && success) {
    aotStats = parseAotStats(`${outputFile}.aotstats`);
  }

  // Clean up temp dir
  if (tempDir) {
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }

  return {
    ...result,
    success,
    outputFile: needsTempDir ? undefined : outputFile,
    aotStats,
    warnings,
  };
}

export async function compileString(
  installation: QtInstallation,
  qmlSource: string,
  options?: QmlCachegenOptions,
): Promise<QmlCachegenResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => compile(installation, tmpPath, options));
}

export async function compileFiles(
  installation: QtInstallation,
  filePaths: readonly string[],
  options?: QmlCachegenOptions,
): Promise<QmlCachegenBatchResult> {
  const entries: [string, QmlCachegenResult][] = [];

  for (const fp of filePaths) {
    const r = await compile(installation, fp, options);
    entries.push([fp, r]);
  }

  const results = new Map(entries);
  const successCount = entries.filter(([, r]) => r.success).length;

  // Aggregate AOT stats if available
  let aggregateAotStats: QmlAotStats | undefined;
  if (options?.dumpAotStats) {
    let totalBindings = 0;
    let compiledBindings = 0;
    let totalFunctions = 0;
    let compiledFunctions = 0;

    for (const [, r] of entries) {
      if (r.aotStats) {
        totalBindings += r.aotStats.totalBindings;
        compiledBindings += r.aotStats.compiledBindings;
        totalFunctions += r.aotStats.totalFunctions;
        compiledFunctions += r.aotStats.compiledFunctions;
      }
    }

    const total = totalBindings + totalFunctions;
    const compiled = compiledBindings + compiledFunctions;
    aggregateAotStats = {
      totalBindings,
      compiledBindings,
      totalFunctions,
      compiledFunctions,
      compilationRate: total > 0 ? compiled / total : 1,
    };
  }

  return {
    results,
    totalFiles: filePaths.length,
    successCount,
    failCount: filePaths.length - successCount,
    aggregateAotStats,
  };
}
