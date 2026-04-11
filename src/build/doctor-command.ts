import { dirname, isAbsolute, resolve } from 'node:path';
import type { DoctorCommandOptions, DoctorResult } from './build-types.js';
import { runDoctorChecks } from './doctor.js';
import { detectPackageManager, runPackageManagerInstall } from './package-manager.js';

function resolveProjectDir(configPath?: string): string {
  if (!configPath) return process.cwd();
  const resolvedPath = isAbsolute(configPath) ? configPath : resolve(process.cwd(), configPath);
  return dirname(resolvedPath);
}

async function applySupportedFixes(
  result: DoctorResult,
  options: DoctorCommandOptions,
): Promise<boolean> {
  let applied = false;
  const projectDir = resolveProjectDir(options.config);

  for (const check of result.checks) {
    if (check.status !== 'fail' || !check.fixable) continue;

    if (check.name === 'dependencies-resolved') {
      const packageManager = detectPackageManager(projectDir);
      if (runPackageManagerInstall(packageManager, projectDir)) {
        applied = true;
      }
    }
  }

  return applied;
}

export async function executeDoctor(options: DoctorCommandOptions = {}): Promise<DoctorResult> {
  let result = await runDoctorChecks(options);

  if (options.fix) {
    const applied = await applySupportedFixes(result, options);
    if (applied) {
      result = await runDoctorChecks(options);
    }
  }

  if (options.verbose) {
    for (const check of result.checks) {
      const icon = check.status === 'pass' ? '✓' : check.status === 'warn' ? '⚠' : '✗';
      console.info(`[qmlts doctor] ${icon} ${check.name}: ${check.message}`);
    }
    console.info(`[qmlts doctor] ${result.allPassed ? 'All checks passed' : 'Some checks failed'}`);
  }

  return result;
}
