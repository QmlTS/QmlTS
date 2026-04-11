import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { executeClean } from '../../src/build/clean-command.js';

describe('executeClean', () => {
  let tempDir: string;
  let originalCwd: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-clean-'));
    originalCwd = process.cwd();
    process.chdir(tempDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('CL-01: cleans dist output directory', async () => {
    const distDir = join(tempDir, 'dist');
    mkdirSync(distDir, { recursive: true });
    writeFileSync(join(distDir, 'manifest.json'), '{}', 'utf-8');

    expect(existsSync(distDir)).toBe(true);

    const result = await executeClean();

    expect(existsSync(distDir)).toBe(false);
    expect(result.removedPaths.length).toBeGreaterThan(0);
  });

  test('CL-02: cache option removes .qmlts directory', async () => {
    const distDir = join(tempDir, 'dist');
    const cacheDir = join(tempDir, '.qmlts');
    mkdirSync(distDir, { recursive: true });
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(join(cacheDir, 'cache.json'), '{}', 'utf-8');

    const result = await executeClean({ cache: true });

    expect(existsSync(distDir)).toBe(false);
    expect(existsSync(cacheDir)).toBe(false);
    expect(result.removedPaths).toContain(resolve(cacheDir));
  });

  test('CL-03: nodeModules option removes .qmlts caches in node_modules', async () => {
    const distDir = join(tempDir, 'dist');
    mkdirSync(distDir, { recursive: true });

    const pkgCacheDir = join(tempDir, 'node_modules', '@qmlts', 'core', '.qmlts');
    mkdirSync(pkgCacheDir, { recursive: true });
    writeFileSync(join(pkgCacheDir, 'cache.json'), '{}', 'utf-8');

    const topCache = join(tempDir, 'node_modules', '.qmlts');
    mkdirSync(topCache, { recursive: true });
    writeFileSync(join(topCache, 'cached.json'), '{}', 'utf-8');

    await executeClean({ nodeModules: true });

    expect(existsSync(pkgCacheDir)).toBe(false);
    expect(existsSync(topCache)).toBe(false);
    // The package directory itself should still exist
    expect(existsSync(join(tempDir, 'node_modules', '@qmlts', 'core'))).toBe(true);
  });

  test('CL-04: silently succeeds when dist directory does not exist', async () => {
    const result = await executeClean();

    expect(result.errors).toHaveLength(0);
  });

  test('CL-05: result contains removedPaths and errors arrays', async () => {
    const result = await executeClean();

    expect(Array.isArray(result.removedPaths)).toBe(true);
    expect(Array.isArray(result.errors)).toBe(true);
  });

  test('CL-06: all options clean everything', async () => {
    const distDir = join(tempDir, 'dist');
    const cacheDir = join(tempDir, '.qmlts');
    const nmCache = join(tempDir, 'node_modules', '.qmlts');
    mkdirSync(distDir, { recursive: true });
    mkdirSync(cacheDir, { recursive: true });
    mkdirSync(nmCache, { recursive: true });
    writeFileSync(join(distDir, 'out.json'), '{}', 'utf-8');
    writeFileSync(join(cacheDir, 'c.json'), '{}', 'utf-8');
    writeFileSync(join(nmCache, 'nm.json'), '{}', 'utf-8');

    const result = await executeClean({ cache: true, nodeModules: true });

    expect(existsSync(distDir)).toBe(false);
    expect(existsSync(cacheDir)).toBe(false);
    expect(existsSync(nmCache)).toBe(false);
    expect(result.removedPaths.length).toBe(3);
  });

  test('CL-07: target option removes generated Rust target directory', async () => {
    const distDir = join(tempDir, 'dist');
    const rustTargetDir = join(distDir, '.host-generated', 'target', 'debug');
    mkdirSync(rustTargetDir, { recursive: true });
    writeFileSync(join(rustTargetDir, 'qmlts_host.node'), '', 'utf-8');

    const result = await executeClean({ target: true });

    expect(existsSync(join(distDir, '.host-generated', 'target'))).toBe(false);
    expect(result.removedPaths).toContain(resolve(join(distDir, '.host-generated', 'target')));
  });
});
