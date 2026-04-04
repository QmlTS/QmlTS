import { readFileSync } from 'node:fs';
import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type {
  QmlFormatBatchResult,
  QmlFormatOptions,
  QmlFormatResult,
  QtInstallation,
} from './types.js';

export function buildFormatArgs(filePath: string, options?: QmlFormatOptions): string[] {
  const args: string[] = [];
  if (options?.ignoreSettings) args.push('--ignore-settings');
  if (options?.force) args.push('--force');
  if (options?.verbose) args.push('--verbose');
  if (options?.inplace) args.push('--inplace');
  if (options?.dryRun) args.push('--dry-run');
  if (options?.tabs) args.push('--tabs');
  if (options?.indentWidth !== undefined) args.push('--indent-width', String(options.indentWidth));
  if (options?.columnWidth !== undefined) args.push('--column-width', String(options.columnWidth));
  if (options?.normalize) args.push('--normalize');
  if (options?.newline) args.push('--newline', options.newline);
  if (options?.sortImports) args.push('--sort-imports');
  if (options?.semicolonRule) args.push('--semicolon-rule', options.semicolonRule);
  if (options?.objectsSpacing) args.push('--objects-spacing');
  if (options?.functionsSpacing) args.push('--functions-spacing');
  if (options?.singleLineEmptyObjects) args.push('--single-line-empty-objects');
  if (options?.groupAttributesTogether) args.push('--group-attributes-together');
  if (options?.settingsFile) args.push('--settings', options.settingsFile);
  args.push(filePath);
  return args;
}

export async function formatFile(
  installation: QtInstallation,
  filePath: string,
  options?: QmlFormatOptions,
): Promise<QmlFormatResult> {
  const beforeText = readFileSync(filePath, 'utf-8');
  const args = buildFormatArgs(filePath, options);
  const result = await runTool(installation, 'qmlformat', args);
  const formattedText =
    result.exitCode === 0
      ? options?.inplace
        ? readFileSync(filePath, 'utf-8')
        : result.stdout
      : undefined;
  // Normalize line endings (strip all \r) and trailing whitespace for comparison
  const normalizeForCompare = (s: string) => s.replace(/\r/g, '').trimEnd();
  const hasChanges =
    formattedText !== undefined &&
    normalizeForCompare(formattedText) !== normalizeForCompare(beforeText);
  return { ...result, formattedText, hasChanges };
}

export async function formatString(
  installation: QtInstallation,
  qmlSource: string,
  options?: QmlFormatOptions,
): Promise<QmlFormatResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => formatFile(installation, tmpPath, options));
}

export async function formatFiles(
  installation: QtInstallation,
  filePaths: readonly string[],
  options?: QmlFormatOptions,
): Promise<QmlFormatBatchResult> {
  const entries = await Promise.all(
    filePaths.map(async (fp) => {
      const r = await formatFile(installation, fp, options);
      return [fp, r] as const;
    }),
  );
  const results = new Map(entries);
  const successCount = entries.filter(([, r]) => r.exitCode === 0).length;
  return {
    results,
    totalFiles: filePaths.length,
    successCount,
    failCount: filePaths.length - successCount,
  };
}

export async function getDefaultOptions(
  installation: QtInstallation,
): Promise<Record<string, unknown>> {
  const result = await runTool(installation, 'qmlformat', ['--output-options']);
  return JSON.parse(result.stdout);
}

export async function writeDefaults(
  installation: QtInstallation,
  targetDir: string,
): Promise<void> {
  await runTool(installation, 'qmlformat', ['--write-defaults'], { cwd: targetDir });
}
