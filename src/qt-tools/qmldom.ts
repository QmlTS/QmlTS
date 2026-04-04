import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type { QmlDomOptions, QmlDomResult, QtInstallation } from './types.js';

export function buildDomArgs(filePath: string, options?: QmlDomOptions): string[] {
  const args: string[] = [];
  if (options?.dumpAst) {
    args.push('--dump-ast');
  } else if (options?.reformat) {
    args.push('-r');
  } else {
    args.push('-d');
  }
  if (options?.reformatDir) args.push('--reformat-dir', options.reformatDir);
  if (options?.filterFields) args.push('-f', options.filterFields);
  if (options?.importPaths) {
    for (const p of options.importPaths) args.push('-I', p);
  }
  if (options?.qmltypesFiles) {
    for (const f of options.qmltypesFiles) args.push('-i', f);
  }
  if (options?.pathToDump) args.push('-p', options.pathToDump);
  if (options?.dependencies) args.push('-D', options.dependencies);
  if (options?.backups !== undefined) args.push('--backups', String(options.backups));
  args.push(filePath);
  return args;
}

function tryParseJson(text: string): unknown | undefined {
  const trimmed = text.trim();
  const jsonStart = trimmed.indexOf('{');
  if (jsonStart < 0) return undefined;
  try {
    return JSON.parse(trimmed.slice(jsonStart));
  } catch {
    return undefined;
  }
}

export async function dumpDom(
  installation: QtInstallation,
  filePath: string,
  options?: Omit<QmlDomOptions, 'dump' | 'dumpAst'>,
): Promise<QmlDomResult> {
  const args = buildDomArgs(filePath, { ...options, dump: true });
  const result = await runTool(installation, 'qmldom', args);
  const success = result.exitCode === 0;
  const dom = success ? tryParseJson(result.stdout) : undefined;
  return { ...result, success, dom, ast: undefined };
}

export async function dumpAst(
  installation: QtInstallation,
  filePath: string,
  options?: Omit<QmlDomOptions, 'dump' | 'dumpAst'>,
): Promise<QmlDomResult> {
  const args = buildDomArgs(filePath, { ...options, dumpAst: true });
  const result = await runTool(installation, 'qmldom', args);
  const success = result.exitCode === 0;
  const ast = success ? result.stdout : undefined;
  return { ...result, success, dom: undefined, ast };
}

export async function dumpString(
  installation: QtInstallation,
  qmlSource: string,
  options?: QmlDomOptions,
): Promise<QmlDomResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => {
    if (options?.dumpAst) {
      return dumpAst(installation, tmpPath, options);
    }
    return dumpDom(installation, tmpPath, options);
  });
}
