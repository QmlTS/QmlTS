import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, isAbsolute, resolve } from 'node:path';
import type { DoctorCommandOptions, DoctorResult } from './build-types.js';
import { runDoctorChecks } from './doctor.js';

function resolveProjectDir(configPath?: string): string {
  if (!configPath) return process.cwd();
  const resolvedPath = isAbsolute(configPath) ? configPath : resolve(process.cwd(), configPath);
  return dirname(resolvedPath);
}

function detectPackageManager(projectDir: string): 'npm' | 'pnpm' | 'yarn' | 'bun' {
  if (existsSync(resolve(projectDir, 'bun.lockb')) || existsSync(resolve(projectDir, 'bun.lock'))) {
    return 'bun';
  }
  if (existsSync(resolve(projectDir, 'pnpm-lock.yaml'))) {
    return 'pnpm';
  }
  if (existsSync(resolve(projectDir, 'yarn.lock'))) {
    return 'yarn';
  }
  return 'npm';
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
      try {
        execFileSync(packageManager, ['install'], {
          cwd: projectDir,
          stdio: 'pipe',
          timeout: 120_000,
        });
        applied = true;
      } catch {
        // Keep the original failed check in the result; doctor should still return diagnostics.
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
