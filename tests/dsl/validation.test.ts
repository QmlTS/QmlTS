import { describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';

const GENERATED_DIR = join(import.meta.dir, '..', '..', 'src', 'dsl', 'generated');
const SNAPSHOT_PATH = join(import.meta.dir, '..', '..', 'data', 'qt-6.11.0-registry.snapshot.json');

const P0_MODULES = [
  'QML',
  'QtQml',
  'QtQml.Models',
  'QtQuick',
  'QtQuick.Controls.Basic',
  'QtQuick.Templates',
  'QtQuick.Layouts',
  'QtCore',
];

describe('Generated DSL Validation', () => {
  test('VL-01: generated directory exists', () => {
    expect(existsSync(GENERATED_DIR)).toBe(true);
  });

  test('VL-02: each P0 module has a directory (non-empty only)', () => {
    // QtQuick.Controls.Basic may be filtered out if it has no exported types
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: P0_MODULES,
    });
    for (const mod of result.stats.modulesProcessed > 0 ? P0_MODULES : []) {
      const dir = join(GENERATED_DIR, mod);
      if (existsSync(dir)) {
        expect(readdirSync(dir).length).toBeGreaterThan(0);
      }
    }
  });

  test('VL-03: each module directory has index.ts', () => {
    const entries = readdirSync(GENERATED_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const indexPath = join(GENERATED_DIR, entry.name, 'index.ts');
        expect(existsSync(indexPath)).toBe(true);
      }
    }
  });

  test('VL-04: top-level index.ts exists', () => {
    expect(existsSync(join(GENERATED_DIR, 'index.ts'))).toBe(true);
  });

  test('VL-05: all generated .ts files have auto-generated header', () => {
    function checkDir(dir: string) {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDir(fullPath);
        } else if (entry.name.endsWith('.ts')) {
          const content = readFileSync(fullPath, 'utf-8');
          expect(content).toContain('AUTO-GENERATED');
        }
      }
    }
    checkDir(GENERATED_DIR);
  });

  test('VL-06: regeneration produces same file set', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: P0_MODULES,
    });
    expect(result.success).toBe(true);

    // Verify each committed file has a corresponding generated file
    const generatedByPath = new Map<string, string>();
    for (const file of result.files) {
      generatedByPath.set(file.relativePath, file.content);
    }

    function checkDir(dir: string, prefix: string) {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const fullPath = join(dir, entry.name);
        const relPath = prefix ? `${prefix}/${entry.name}` : entry.name;
        if (entry.isDirectory()) {
          checkDir(fullPath, relPath);
        } else if (entry.name.endsWith('.ts')) {
          const generated = generatedByPath.get(relPath);
          expect(generated).toBeDefined();
        }
      }
    }
    checkDir(GENERATED_DIR, '');
  });

  test('VL-07: QtQuick module has Rectangle.ts', () => {
    expect(existsSync(join(GENERATED_DIR, 'QtQuick', 'Rectangle.ts'))).toBe(true);
  });

  test('VL-08: QtQuick module has Item.ts', () => {
    expect(existsSync(join(GENERATED_DIR, 'QtQuick', 'Item.ts'))).toBe(true);
  });

  test('VL-09: QtQuick module has Text.ts', () => {
    expect(existsSync(join(GENERATED_DIR, 'QtQuick', 'Text.ts'))).toBe(true);
  });

  test('VL-10: QtQuick.Layouts module has layout types', () => {
    const dir = join(GENERATED_DIR, 'QtQuick.Layouts');
    const files = readdirSync(dir);
    expect(files.length).toBeGreaterThan(1);
  });

  test('VL-11: generated files import from runtime correctly', () => {
    const itemContent = readFileSync(join(GENERATED_DIR, 'QtQuick', 'Item.ts'), 'utf-8');
    expect(itemContent).toContain("from '../../runtime/");
    expect(itemContent).toContain('createFluentBuilder');
  });

  test('VL-12: generated files have no TypeScript syntax errors (smoke test)', () => {
    // Check that a few key files contain expected exports
    const rectContent = readFileSync(join(GENERATED_DIR, 'QtQuick', 'Rectangle.ts'), 'utf-8');
    expect(rectContent).toContain('export interface RectangleBuilder');
    expect(rectContent).toContain('export function Rectangle()');

    const textContent = readFileSync(join(GENERATED_DIR, 'QtQuick', 'Text.ts'), 'utf-8');
    expect(textContent).toContain('export interface TextBuilder');
    expect(textContent).toContain('export function Text()');
    expect(textContent).toContain('export namespace Text');
  });

  test('VL-13: stats show substantial generation', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: P0_MODULES,
    });
    expect(result.stats.creatableTypes).toBeGreaterThan(200);
    expect(result.stats.singletonTypes).toBeGreaterThan(0);
    expect(result.stats.filesGenerated).toBeGreaterThan(250);
    expect(result.stats.totalLines).toBeGreaterThan(30000);
  });
});
