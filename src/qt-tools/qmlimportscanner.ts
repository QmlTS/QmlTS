import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type {
  QmlImportScannerOptions,
  QmlImportScannerResult,
  QtInstallation,
  ScannedImport,
} from './types.js';

export function buildImportScannerArgs(options: QmlImportScannerOptions): string[] {
  const args: string[] = [];
  switch (options.mode.type) {
    case 'rootPath':
      args.push('-rootPath', options.mode.path);
      break;
    case 'qmlFiles':
      args.push('-qmlFiles');
      args.push(...options.mode.files);
      break;
    case 'qrcFiles':
      args.push('-qrcFiles');
      args.push(...options.mode.files);
      break;
  }
  for (const p of options.importPaths) {
    args.push('-importPath', p);
  }
  if (options.excludeDirs) {
    for (const d of options.excludeDirs) {
      args.push('-exclude', d);
    }
  }
  return args;
}

function parseImports(stdout: string): ScannedImport[] {
  try {
    const raw = JSON.parse(stdout) as unknown[];
    if (!Array.isArray(raw)) return [];
    return raw.map((entry: unknown) => {
      const e = entry as Record<string, unknown>;
      return {
        name: (e.name as string) ?? '',
        version: e.version as string | undefined,
        type: (e.type as ScannedImport['type']) ?? 'module',
        path: e.path as string | undefined,
        classname: e.classname as string | undefined,
        plugin: e.plugin as string | undefined,
      };
    });
  } catch {
    return [];
  }
}

export async function scanDir(
  installation: QtInstallation,
  rootPath: string,
  importPaths: readonly string[],
  options?: { readonly excludeDirs?: readonly string[] },
): Promise<QmlImportScannerResult> {
  const scanOptions: QmlImportScannerOptions = {
    mode: { type: 'rootPath', path: rootPath },
    importPaths: [...importPaths],
    excludeDirs: options?.excludeDirs ? [...options.excludeDirs] : undefined,
  };
  const args = buildImportScannerArgs(scanOptions);
  const result = await runTool(installation, 'qmlimportscanner', args);
  const success = result.exitCode === 0;
  const imports = success ? parseImports(result.stdout) : [];
  return { ...result, success, imports };
}

export async function scanFiles(
  installation: QtInstallation,
  qmlFiles: readonly string[],
  importPaths: readonly string[],
): Promise<QmlImportScannerResult> {
  const scanOptions: QmlImportScannerOptions = {
    mode: { type: 'qmlFiles', files: [...qmlFiles] },
    importPaths: [...importPaths],
  };
  const args = buildImportScannerArgs(scanOptions);
  const result = await runTool(installation, 'qmlimportscanner', args);
  const success = result.exitCode === 0;
  const imports = success ? parseImports(result.stdout) : [];
  return { ...result, success, imports };
}

export async function scanQrcFiles(
  installation: QtInstallation,
  qrcFiles: readonly string[],
  importPaths: readonly string[],
): Promise<QmlImportScannerResult> {
  const scanOptions: QmlImportScannerOptions = {
    mode: { type: 'qrcFiles', files: [...qrcFiles] },
    importPaths: [...importPaths],
  };
  const args = buildImportScannerArgs(scanOptions);
  const result = await runTool(installation, 'qmlimportscanner', args);
  const success = result.exitCode === 0;
  const imports = success ? parseImports(result.stdout) : [];
  return { ...result, success, imports };
}

export async function scanString(
  installation: QtInstallation,
  qmlSource: string,
  importPaths: readonly string[],
): Promise<QmlImportScannerResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => scanFiles(installation, [tmpPath], importPaths));
}
