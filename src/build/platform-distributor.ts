import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';
import type { DistributeResult, ProductLayout } from './build-types.js';
import type { PlatformTarget, ResolvedDistributeConfig } from './config-types.js';
import { currentPlatform } from './product-layout.js';

export interface PlatformDistributor {
  package(layout: ProductLayout, config: ResolvedDistributeConfig): Promise<DistributeResult>;
}

function collectFiles(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;

  function walk(currentDir: string): void {
    for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

function computeSize(files: readonly string[]): number {
  let total = 0;
  for (const file of files) {
    try {
      total += statSync(file).size;
    } catch {
      // Skip files that can't be stat'd
    }
  }
  return total;
}

function copyDirRecursive(src: string, dest: string): void {
  if (!existsSync(src)) return;

  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function resolveQtLibDir(qtDir: string | undefined, target: PlatformTarget): string | undefined {
  if (!qtDir || !existsSync(qtDir)) return undefined;

  if (target.startsWith('win32')) {
    const binDir = join(qtDir, 'bin');
    if (existsSync(binDir)) return binDir;
  } else {
    const libDir = join(qtDir, 'lib');
    if (existsSync(libDir)) return libDir;
  }
  return undefined;
}

function getQtRuntimeFiles(qtLibDir: string, target: PlatformTarget): string[] {
  if (!existsSync(qtLibDir)) return [];

  const files: string[] = [];
  const entries = readdirSync(qtLibDir);

  for (const entry of entries) {
    const fullPath = join(qtLibDir, entry);
    let isFile = false;
    let isDirectory = false;
    try {
      const stats = statSync(fullPath);
      isFile = stats.isFile();
      isDirectory = stats.isDirectory();
    } catch {
      continue;
    }

    if (target.startsWith('win32') && isFile && entry.endsWith('.dll') && entry.startsWith('Qt6')) {
      files.push(fullPath);
    } else if (
      target.startsWith('linux') &&
      isFile &&
      entry.includes('.so') &&
      entry.startsWith('libQt6')
    ) {
      files.push(fullPath);
    } else if (
      target.startsWith('darwin') &&
      ((isFile && entry.endsWith('.dylib')) || (isDirectory && entry.endsWith('.framework'))) &&
      entry.startsWith('Qt')
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

export function createPlatformDistributor(qtDir?: string): PlatformDistributor {
  return {
    async package(
      layout: ProductLayout,
      config: ResolvedDistributeConfig,
    ): Promise<DistributeResult> {
      const target = config.targets.length > 0 ? config.targets[0]! : currentPlatform();

      const distDir = join(layout.rootDir, '..', `dist-${target}`);
      rmSync(distDir, { recursive: true, force: true });
      mkdirSync(distDir, { recursive: true });

      const includes: string[] = [];

      copyDirRecursive(layout.rootDir, distDir);
      includes.push(...collectFiles(distDir));

      if (config.bundleQt) {
        const qtLibDir = resolveQtLibDir(qtDir, target);
        if (qtLibDir) {
          const qtFiles = getQtRuntimeFiles(qtLibDir, target);
          const qtOutDir = join(distDir, 'Qt6');
          mkdirSync(qtOutDir, { recursive: true });

          for (const file of qtFiles) {
            const destPath = join(qtOutDir, basename(file));
            const stats = statSync(file);
            if (stats.isDirectory()) {
              copyDirRecursive(file, destPath);
              includes.push(...collectFiles(destPath));
            } else {
              copyFileSync(file, destPath);
              includes.push(destPath);
            }
          }
        }
      }

      if (config.icon && existsSync(config.icon)) {
        const iconDest = join(distDir, basename(config.icon));
        copyFileSync(config.icon, iconDest);
        includes.push(iconDest);
      }

      const size = computeSize(includes);

      return {
        target,
        outputPath: distDir,
        size,
        includes: includes.map((f) => f.replace(/\\/g, '/')),
      };
    },
  };
}
