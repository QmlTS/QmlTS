import { existsSync } from 'node:fs';
import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type { QmltcOptions, QmltcResult, QtInstallation } from './types.js';

export function buildQmltcArgs(filePath: string, options: QmltcOptions): string[] {
  const args: string[] = [];
  args.push('--impl', options.implPath);
  args.push('--header', options.headerPath);
  if (options.importPaths) {
    for (const p of options.importPaths) args.push('-I', p);
  }
  if (options.qmldirFiles) {
    for (const f of options.qmldirFiles) args.push('-i', f);
  }
  if (options.resourceFiles) {
    for (const f of options.resourceFiles) args.push('--resource', f);
  }
  if (options.metaResourceFiles) {
    for (const f of options.metaResourceFiles) args.push('--meta-resource', f);
  }
  if (options.namespace) args.push('--namespace', options.namespace);
  if (options.module) args.push('--module', options.module);
  if (options.exportMacro) args.push('--export', options.exportMacro);
  if (options.exportInclude) args.push('--exportInclude', options.exportInclude);
  if (options.bare) args.push('--bare');
  args.push(filePath);
  return args;
}

function extractErrors(stderr: string): readonly string[] {
  if (!stderr.trim()) return [];
  return stderr
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

export async function compile(
  installation: QtInstallation,
  qmlFilePath: string,
  options: QmltcOptions,
): Promise<QmltcResult> {
  const args = buildQmltcArgs(qmlFilePath, options);
  const result = await runTool(installation, 'qmltc', args);
  const success = result.exitCode === 0;
  const headerFile = success && existsSync(options.headerPath) ? options.headerPath : undefined;
  const implFile = success && existsSync(options.implPath) ? options.implPath : undefined;
  const errors = extractErrors(result.stderr);
  return { ...result, success, headerFile, implFile, errors };
}

export async function compileString(
  installation: QtInstallation,
  qmlSource: string,
  options: QmltcOptions,
): Promise<QmltcResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => compile(installation, tmpPath, options));
}
