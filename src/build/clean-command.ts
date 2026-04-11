import { existsSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { CleanCommandOptions, CleanResult } from './build-types.js';
import { loadConfig } from './config-loader.js';

export async function executeClean(options: CleanCommandOptions = {}): Promise<CleanResult> {
  const removedPaths: string[] = [];
  const errors: string[] = [];

  let outDir: string;
  let configDir: string;

  try {
    const config = await loadConfig(options.config);
    outDir = config.outDir;
    configDir = config.configDir;
  } catch {
    outDir = resolve('dist');
    configDir = resolve('.');
  }

  removePath(outDir, removedPaths, errors);

  if (options.cache) {
    const cacheDir = join(configDir, '.qmlts');
    removePath(cacheDir, removedPaths, errors);
  }

  if (options.nodeModules) {
    const nodeModulesDir = join(configDir, 'node_modules');
    if (existsSync(nodeModulesDir)) {
      cleanNodeModulesCache(nodeModulesDir, removedPaths, errors);
    }
  }

  return { removedPaths, errors };
}

function removePath(targetPath: string, removedPaths: string[], errors: string[]): void {
  if (!existsSync(targetPath)) return;

  try {
    rmSync(targetPath, { recursive: true, force: true });
    removedPaths.push(targetPath);
  } catch (err) {
    errors.push(
      `Failed to remove ${targetPath}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

function cleanNodeModulesCache(
  nodeModulesDir: string,
  removedPaths: string[],
  errors: string[],
): void {
  try {
    const qmltsScope = join(nodeModulesDir, '@qmlts');
    if (existsSync(qmltsScope)) {
      for (const pkg of readdirSync(qmltsScope)) {
        const cacheDir = join(qmltsScope, pkg, '.qmlts');
        removePath(cacheDir, removedPaths, errors);
      }
    }

    const topCache = join(nodeModulesDir, '.qmlts');
    removePath(topCache, removedPaths, errors);
  } catch (err) {
    errors.push(
      `Failed to clean node_modules cache: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}
