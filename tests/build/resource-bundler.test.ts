import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import type { ResolvedAssetsConfig } from '../../src/build/config-types.js';
import { createResourceBundler, dryRunBundle } from '../../src/build/resource-bundler.js';

const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'assets-project');
const TMP_DIR = resolve(__dirname, '.tmp-resource-bundler');

function makeAssetsConfig(overrides: Partial<ResolvedAssetsConfig> = {}): ResolvedAssetsConfig {
  return {
    dir: 'assets',
    include: ['**/*'],
    exclude: [],
    useQrc: false,
    optimize: false,
    ...overrides,
  };
}

beforeEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
  mkdirSync(TMP_DIR, { recursive: true });
});

afterEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
});

describe('ResourceBundler', () => {
  const bundler = createResourceBundler();

  // ─── BP-54: Bundle all assets ────────────────────────────
  test('BP-54: bundles all assets from directory', async () => {
    const config = makeAssetsConfig();
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    expect(result.files.length).toBeGreaterThanOrEqual(6);
    expect(result.totalSize).toBeGreaterThan(0);
    expect(result.qrcFile).toBeUndefined();

    const outputNames = result.files.map((f) => f.outputPath.replace(/\\/g, '/'));
    expect(outputNames.some((n) => n.includes('logo.png'))).toBe(true);
    expect(outputNames.some((n) => n.includes('style.css'))).toBe(true);
    expect(outputNames.some((n) => n.includes('hero.jpg'))).toBe(true);
    expect(outputNames.some((n) => n.includes('icon.svg'))).toBe(true);
    expect(outputNames.some((n) => n.includes('font.ttf'))).toBe(true);
  });

  // ─── BP-55: Include filtering ────────────────────────────
  test('BP-55: applies include glob filter', async () => {
    const config = makeAssetsConfig({ include: ['**/*.png', '**/*.jpg'] });
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    expect(result.files.length).toBe(2);
    const names = result.files.map((f) => f.outputPath.replace(/\\/g, '/'));
    expect(names.some((n) => n.includes('logo.png'))).toBe(true);
    expect(names.some((n) => n.includes('hero.jpg'))).toBe(true);
  });

  // ─── BP-56: Exclude filtering ────────────────────────────
  test('BP-56: applies exclude glob filter', async () => {
    const config = makeAssetsConfig({ exclude: ['**/*.md'] });
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    const names = result.files.map((f) => f.outputPath.replace(/\\/g, '/'));
    expect(names.some((n) => n.includes('readme.md'))).toBe(false);
    expect(result.files.length).toBeGreaterThanOrEqual(5);
  });

  // ─── BP-57: Nested directory traversal ───────────────────
  test('BP-57: traverses nested directories', async () => {
    const config = makeAssetsConfig();
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    const paths = result.files.map((f) => f.outputPath.replace(/\\/g, '/'));
    expect(paths.some((p) => p.includes('images/hero.jpg'))).toBe(true);
    expect(paths.some((p) => p.includes('images/icons/icon.svg'))).toBe(true);
    expect(paths.some((p) => p.includes('fonts/font.ttf'))).toBe(true);
  });

  // ─── BP-58: File size accounting ─────────────────────────
  test('BP-58: tracks file sizes correctly', async () => {
    const config = makeAssetsConfig();
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    let sumSizes = 0;
    for (const file of result.files) {
      expect(file.size).toBeGreaterThan(0);
      sumSizes += file.size;
    }
    expect(result.totalSize).toBe(sumSizes);
  });

  // ─── BP-59: QRC generation ───────────────────────────────
  test('BP-59: generates .qrc file when useQrc is true', async () => {
    const config = makeAssetsConfig({ useQrc: true });
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    expect(result.qrcFile).toBeDefined();
    expect(existsSync(result.qrcFile!)).toBe(true);

    const qrcContent = readFileSync(result.qrcFile!, 'utf-8');
    expect(qrcContent).toContain('<RCC>');
    expect(qrcContent).toContain('<qresource');
    expect(qrcContent).toContain('logo.png');
    expect(qrcContent).toContain('</RCC>');
  });

  // ─── BP-60: Missing assets directory ─────────────────────
  test('BP-60: returns empty result when assets directory does not exist', async () => {
    const config = makeAssetsConfig({ dir: 'nonexistent-assets' });
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    expect(result.files).toHaveLength(0);
    expect(result.totalSize).toBe(0);
    expect(result.qrcFile).toBeUndefined();
  });

  // ─── BP-61: Files are actually copied ────────────────────
  test('BP-61: copies files to output directory', async () => {
    const config = makeAssetsConfig({ include: ['**/*.css'] });
    const result = await bundler.bundle(config, FIXTURES_DIR, TMP_DIR);

    expect(result.files).toHaveLength(1);
    expect(existsSync(result.files[0]!.outputPath)).toBe(true);

    const content = readFileSync(result.files[0]!.outputPath, 'utf-8');
    expect(content).toBe('body { margin: 0; }');
  });
});

describe('ResourceBundler.generateQrc', () => {
  const bundler = createResourceBundler();

  // ─── BP-62: QRC XML structure ────────────────────────────
  test('BP-62: generates valid QRC XML', () => {
    const qrc = bundler.generateQrc(['images/icon.png', 'fonts/font.ttf']);
    expect(qrc).toContain('<RCC>');
    expect(qrc).toContain('<qresource prefix="/">');
    expect(qrc).toContain('<file>images/icon.png</file>');
    expect(qrc).toContain('<file>fonts/font.ttf</file>');
    expect(qrc).toContain('</RCC>');
  });

  // ─── BP-63: Custom QRC prefix ────────────────────────────
  test('BP-63: uses custom prefix', () => {
    const qrc = bundler.generateQrc(['file.txt'], { prefix: '/assets' });
    expect(qrc).toContain('prefix="/assets"');
  });

  // ─── BP-64: Empty files array ────────────────────────────
  test('BP-64: handles empty files array', () => {
    const qrc = bundler.generateQrc([]);
    expect(qrc).toContain('<RCC>');
    expect(qrc).toContain('</RCC>');
  });
});

describe('dryRunBundle', () => {
  // ─── BP-65: Dry run collects files without copying ───────
  test('BP-65: collects files without copying', () => {
    const config = makeAssetsConfig();
    const result = dryRunBundle(config, FIXTURES_DIR);

    expect(result.files.length).toBeGreaterThanOrEqual(6);
    expect(result.totalSize).toBeGreaterThan(0);
    // outputPath should be empty in dry run
    for (const file of result.files) {
      expect(file.outputPath).toBe('');
    }
  });

  // ─── BP-66: Dry run with missing dir ─────────────────────
  test('BP-66: returns empty result for non-existent dir', () => {
    const config = makeAssetsConfig({ dir: 'nope' });
    const result = dryRunBundle(config, FIXTURES_DIR);
    expect(result.files).toHaveLength(0);
    expect(result.totalSize).toBe(0);
  });
});
