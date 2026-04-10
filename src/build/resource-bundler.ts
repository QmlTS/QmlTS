import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import type { BundledFile, BundleResult } from './build-types.js';
import type { ResolvedAssetsConfig } from './config-types.js';

// ─── Types ──────────────────────────────────────────────────

export interface ResourceBundler {
  bundle(config: ResolvedAssetsConfig, sourceDir: string, outputDir: string): Promise<BundleResult>;
  generateQrc(files: readonly string[], options?: { prefix?: string }): string;
}

// ─── Factory ────────────────────────────────────────────────

export function createResourceBundler(): ResourceBundler {
  return {
    async bundle(
      config: ResolvedAssetsConfig,
      sourceDir: string,
      outputDir: string,
    ): Promise<BundleResult> {
      const assetsDir = resolve(sourceDir, config.dir);
      if (!existsSync(assetsDir) || !statSync(assetsDir).isDirectory()) {
        return { files: [], totalSize: 0 };
      }

      const allFiles = collectFiles(assetsDir, assetsDir);
      const matched = filterFiles(allFiles, config.include, config.exclude);

      const bundled: BundledFile[] = [];
      let totalSize = 0;

      for (const relPath of matched) {
        const sourcePath = join(assetsDir, relPath);
        const outputPath = join(outputDir, relPath);
        const size = statSync(sourcePath).size;

        mkdirSync(dirname(outputPath), { recursive: true });
        copyFileSync(sourcePath, outputPath);

        bundled.push({ sourcePath, outputPath, size });
        totalSize += size;
      }

      let qrcFile: string | undefined;
      if (config.useQrc) {
        const qrcContent = this.generateQrc(matched);
        qrcFile = join(outputDir, 'assets.qrc');
        mkdirSync(dirname(qrcFile), { recursive: true });
        writeFileSync(qrcFile, qrcContent, 'utf-8');
      }

      return { files: bundled, totalSize, qrcFile };
    },

    generateQrc(files: readonly string[], options?: { prefix?: string }): string {
      const prefix = options?.prefix ?? '/';
      const lines: string[] = [];
      lines.push('<RCC>');
      lines.push(`  <qresource prefix="${escapeXml(prefix)}">`);
      for (const file of files) {
        lines.push(`    <file>${escapeXml(file.replace(/\\/g, '/'))}</file>`);
      }
      lines.push('  </qresource>');
      lines.push('</RCC>');
      return `${lines.join('\n')}\n`;
    },
  };
}

// ─── Helpers ────────────────────────────────────────────────

function collectFiles(dir: string, baseDir: string): string[] {
  const results: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      results.push(relative(baseDir, fullPath).replace(/\\/g, '/'));
    }
  }

  return results;
}

function filterFiles(
  files: readonly string[],
  include: readonly string[],
  exclude: readonly string[],
): string[] {
  let result = [...files];

  if (include.length > 0) {
    result = result.filter((f) => include.some((pattern) => matchGlob(f, pattern)));
  }

  if (exclude.length > 0) {
    result = result.filter((f) => !exclude.some((pattern) => matchGlob(f, pattern)));
  }

  return result;
}

function matchGlob(filePath: string, pattern: string): boolean {
  const normalized = filePath.replace(/\\/g, '/');
  const regexStr = globToRegex(pattern);
  return new RegExp(`^${regexStr}$`).test(normalized);
}

function globToRegex(pattern: string): string {
  let result = '';
  let i = 0;

  while (i < pattern.length) {
    const char = pattern[i]!;

    if (char === '*' && pattern[i + 1] === '*') {
      if (pattern[i + 2] === '/') {
        result += '(?:.+/)?';
        i += 3;
      } else {
        result += '.*';
        i += 2;
      }
    } else if (char === '*') {
      result += '[^/]*';
      i++;
    } else if (char === '?') {
      result += '[^/]';
      i++;
    } else if (char === '.') {
      result += '\\.';
      i++;
    } else {
      result += char;
      i++;
    }
  }

  return result;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function dryRunBundle(config: ResolvedAssetsConfig, sourceDir: string): BundleResult {
  const assetsDir = resolve(sourceDir, config.dir);
  if (!existsSync(assetsDir) || !statSync(assetsDir).isDirectory()) {
    return { files: [], totalSize: 0 };
  }

  const allFiles = collectFiles(assetsDir, assetsDir);
  const matched = filterFiles(allFiles, config.include, config.exclude);

  const bundled: BundledFile[] = [];
  let totalSize = 0;

  for (const relPath of matched) {
    const sourcePath = join(assetsDir, relPath);
    const size = statSync(sourcePath).size;
    bundled.push({ sourcePath, outputPath: '', size });
    totalSize += size;
  }

  return { files: bundled, totalSize };
}
