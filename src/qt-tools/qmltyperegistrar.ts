import { existsSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runTool } from './tool-runner.js';
import type { QmlTypeRegistrarOptions, QmlTypeRegistrarResult, QtInstallation } from './types.js';

export function buildTypeRegistrarArgs(
  mocJsonFiles: readonly string[],
  options: QmlTypeRegistrarOptions,
): string[] {
  const args: string[] = [];
  // jsroot mode doesn't accept -o (no C++ output)
  if (!options.jsroot) {
    args.push('-o', options.outputFile);
  }
  if (options.importName) args.push('--import-name', options.importName);
  if (options.majorVersion !== undefined)
    args.push('--major-version', String(options.majorVersion));
  if (options.minorVersion !== undefined)
    args.push('--minor-version', String(options.minorVersion));
  if (options.pastMajorVersion !== undefined) {
    args.push('--past-major-version', String(options.pastMajorVersion));
  }
  if (options.namespace) args.push('--namespace', options.namespace);
  if (options.generateQmltypes) args.push('--generate-qmltypes', options.generateQmltypes);
  if (options.foreignTypes && options.foreignTypes.length > 0) {
    args.push('--foreign-types', options.foreignTypes.join(','));
  }
  if (options.privateIncludes) args.push('--private-includes');
  if (options.followForeignVersioning) args.push('--follow-foreign-versioning');
  if (options.jsroot) args.push('--jsroot');
  if (options.extract) args.push('--extract');
  args.push(...mocJsonFiles);
  return args;
}

export async function register(
  installation: QtInstallation,
  mocJsonFiles: readonly string[],
  options: QmlTypeRegistrarOptions,
): Promise<QmlTypeRegistrarResult> {
  const args = buildTypeRegistrarArgs(mocJsonFiles, options);
  const result = await runTool(installation, 'qmltyperegistrar', args);
  const success = result.exitCode === 0;
  const outputFile = success && existsSync(options.outputFile) ? options.outputFile : undefined;
  const qmltypesFile =
    options.generateQmltypes && existsSync(options.generateQmltypes)
      ? options.generateQmltypes
      : undefined;
  return { ...result, success, outputFile, qmltypesFile };
}

export async function generateQmltypes(
  installation: QtInstallation,
  mocJsonFiles: readonly string[],
  outputPath: string,
  options?: Partial<Omit<QmlTypeRegistrarOptions, 'outputFile' | 'generateQmltypes'>>,
): Promise<QmlTypeRegistrarResult> {
  const tempDir = await mkdtemp(join(tmpdir(), 'qmlts-reg-'));
  const tempOutput = join(tempDir, 'registration.cpp');
  try {
    return await register(installation, mocJsonFiles, {
      ...options,
      outputFile: tempOutput,
      generateQmltypes: outputPath,
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
}
