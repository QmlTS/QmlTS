import { withTempQmlFile } from './temp-file.js';
import { runTool } from './tool-runner.js';
import type { QmlRunOptions, QmlRunResult, QmlSmokeTestResult, QtInstallation } from './types.js';

const RUNTIME_ERROR_PATTERNS = [
  /QQmlApplicationEngine failed/,
  /is not a type/,
  /ReferenceError:/,
  /TypeError:/,
  /module .+ is not installed/i,
  /Component is not ready/,
];

export function buildRunArgs(filePath: string, options?: QmlRunOptions): string[] {
  const args: string[] = [];
  if (options?.appType) args.push('-a', options.appType);
  if (options?.importPaths) {
    for (const p of options.importPaths) args.push('-I', p);
  }
  if (options?.config) args.push('-c', options.config);
  if (options?.translationFile) args.push('--translation', options.translationFile);
  if (options?.quiet) args.push('--quiet');
  if (options?.verbose) args.push('--verbose');
  if (options?.rhi) args.push('-r', options.rhi);
  if (options?.software) args.push('--software');
  if (options?.transparent) args.push('--transparent');
  if (options?.fixedAnimations) args.push('--fixed-animations');
  if (options?.selectors) {
    for (const s of options.selectors) args.push('-S', s);
  }
  if (options?.platform) args.push('--platform', options.platform);
  args.push('--', filePath);
  if (options?.qmlArgs) args.push(...options.qmlArgs);
  return args;
}

function detectRuntimeErrors(stderr: string): readonly string[] {
  const errors: string[] = [];
  for (const line of stderr.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    for (const pattern of RUNTIME_ERROR_PATTERNS) {
      if (pattern.test(trimmed)) {
        errors.push(trimmed);
        break;
      }
    }
  }
  return errors;
}

export async function run(
  installation: QtInstallation,
  filePath: string,
  options?: QmlRunOptions,
): Promise<QmlRunResult> {
  const timeout = options?.timeout ?? 10_000;
  const args = buildRunArgs(filePath, options);
  try {
    const result = await runTool(installation, 'qml', args, { timeout });
    const success = result.exitCode === 0;
    return { ...result, success, timedOut: false };
  } catch (e: unknown) {
    if (e instanceof Error && e.name === 'QtToolTimeoutError') {
      return {
        exitCode: -1,
        stdout: '',
        stderr: e.message,
        durationMs: timeout,
        command: (e as { command?: string }).command ?? '',
        success: false,
        timedOut: true,
      };
    }
    throw e;
  }
}

export async function runString(
  installation: QtInstallation,
  qmlSource: string,
  options?: QmlRunOptions,
): Promise<QmlRunResult> {
  return withTempQmlFile(qmlSource, (tmpPath) => run(installation, tmpPath, options));
}

export async function smokeTest(
  installation: QtInstallation,
  filePath: string,
  options?: Omit<QmlRunOptions, 'platform'>,
): Promise<QmlSmokeTestResult> {
  const mergedOptions: QmlRunOptions = {
    ...options,
    platform: 'offscreen',
    software: true,
    timeout: options?.timeout ?? 5_000,
  };
  const result = await run(installation, filePath, mergedOptions);
  const runtimeErrors = detectRuntimeErrors(result.stderr);
  // loaded = exited cleanly OR timed out with no runtime errors
  const loaded =
    (result.exitCode === 0 && !result.timedOut) || (result.timedOut && runtimeErrors.length === 0);
  return { ...result, loaded, runtimeErrors };
}

export async function listConfigs(installation: QtInstallation): Promise<readonly string[]> {
  const result = await runTool(installation, 'qml', ['--list-conf']);
  const configs: string[] = [];
  for (const line of result.stdout.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.includes('configurations:')) continue;
    configs.push(trimmed);
  }
  return configs;
}
