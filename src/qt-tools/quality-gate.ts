import { compile } from './qmlcachegen.js';
import { formatFile } from './qmlformat.js';
import { lintFile } from './qmllint.js';
import { withTempQmlFile } from './temp-file.js';
import type {
  QmlCachegenResult,
  QmlFormatResult,
  QmlLintDiagnostic,
  QmlLintResult,
  QtInstallation,
  QualityGateBatchResult,
  QualityGateLevel,
  QualityGateOptions,
  QualityGateResult,
} from './types.js';

const LEVEL_ORDER: readonly QualityGateLevel[] = ['syntax', 'lint', 'compile'];

function shouldRunStage(target: QualityGateLevel, stage: QualityGateLevel): boolean {
  return LEVEL_ORDER.indexOf(stage) <= LEVEL_ORDER.indexOf(target);
}

export async function check(
  installation: QtInstallation,
  filePath: string,
  options: QualityGateOptions,
): Promise<QualityGateResult> {
  const { level, lintOptions, cachegenOptions, onProgress } = options;
  const diagnostics: QmlLintDiagnostic[] = [];
  let passed = true;
  let formatResult: QmlFormatResult | undefined;
  let lintResult: QmlLintResult | undefined;
  let cachegenResult: QmlCachegenResult | undefined;

  // Stage 1: Syntax (via qmlformat parse check)
  if (shouldRunStage(level, 'syntax')) {
    onProgress?.('syntax', 0, 1);
    formatResult = await formatFile(installation, filePath, { force: true });
    if (formatResult.exitCode !== 0) {
      passed = false;
      onProgress?.('syntax', 1, 1);
      return { filePath, passed, formatResult, diagnostics };
    }
    onProgress?.('syntax', 1, 1);
  }

  // Stage 2: Lint
  if (shouldRunStage(level, 'lint')) {
    onProgress?.('lint', 0, 1);
    lintResult = await lintFile(installation, filePath, lintOptions);
    diagnostics.push(...lintResult.diagnostics);
    if (!lintResult.valid) passed = false;
    onProgress?.('lint', 1, 1);
    if (!passed) {
      return { filePath, passed, formatResult, lintResult, diagnostics };
    }
  }

  // Stage 3: Compile
  if (shouldRunStage(level, 'compile')) {
    onProgress?.('compile', 0, 1);
    cachegenResult = await compile(installation, filePath, cachegenOptions);
    if (!cachegenResult.success) passed = false;
    onProgress?.('compile', 1, 1);
  }

  return {
    filePath,
    passed,
    formatResult,
    lintResult,
    cachegenResult,
    diagnostics,
  };
}

export async function checkString(
  installation: QtInstallation,
  qmlSource: string,
  options: QualityGateOptions,
): Promise<QualityGateResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => check(installation, tmpPath, options));
}

export async function checkFiles(
  installation: QtInstallation,
  filePaths: readonly string[],
  options: QualityGateOptions,
): Promise<QualityGateBatchResult> {
  const start = performance.now();
  const entries: [string, QualityGateResult][] = [];

  for (let i = 0; i < filePaths.length; i++) {
    options.onProgress?.('file', i, filePaths.length);
    const r = await check(installation, filePaths[i]!, options);
    entries.push([filePaths[i]!, r]);
  }

  const results = new Map(entries);
  const passedCount = entries.filter(([, r]) => r.passed).length;
  const totalDiagnostics = entries.reduce((sum, [, r]) => sum + r.diagnostics.length, 0);
  const durationMs = Math.round(performance.now() - start);

  return {
    results,
    totalFiles: filePaths.length,
    passedCount,
    failedCount: filePaths.length - passedCount,
    totalDiagnostics,
    durationMs,
  };
}
