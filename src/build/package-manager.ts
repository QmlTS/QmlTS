import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import type { PackageManager } from './build-types.js';

const VALID_PACKAGE_MANAGERS = new Set<PackageManager>(['npm', 'pnpm', 'yarn', 'bun']);

export function normalizePackageManager(packageManager: string | undefined): PackageManager {
  if (!packageManager) return 'npm';
  if (VALID_PACKAGE_MANAGERS.has(packageManager as PackageManager)) {
    return packageManager as PackageManager;
  }
  throw new Error(
    `Invalid package manager '${packageManager}'. Must be one of: ${[...VALID_PACKAGE_MANAGERS].join(', ')}`,
  );
}

export function detectPackageManager(projectDir: string): PackageManager {
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

export function getPackageManagerScriptCommand(
  packageManager: PackageManager,
  script: string,
): string {
  switch (packageManager) {
    case 'yarn':
      return `yarn ${script}`;
    case 'bun':
      return `bun run ${script}`;
    case 'pnpm':
      return `pnpm run ${script}`;
    case 'npm':
      return `npm run ${script}`;
  }
}

export function runPackageManagerInstall(packageManager: PackageManager, cwd: string): boolean {
  try {
    if (process.platform === 'win32') {
      execFileSync(
        process.env.ComSpec ?? 'cmd.exe',
        ['/d', '/s', '/c', `${packageManager} install`],
        {
          cwd,
          env: { ...process.env },
          stdio: 'pipe',
          timeout: 120_000,
        },
      );
    } else {
      execFileSync(packageManager, ['install'], {
        cwd,
        env: { ...process.env },
        stdio: 'pipe',
        timeout: 120_000,
      });
    }

    return true;
  } catch {
    return false;
  }
}
