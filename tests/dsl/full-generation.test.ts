/**
 * Full-generation acceptance tests.
 * Validates that the generator can process all registry modules
 * and produces deterministic, well-formed output.
 */
import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';

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

describe('Full Generation Acceptance', () => {
  describe('P0 modules', () => {
    const p0Result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: P0_MODULES,
    });

    test('FG-01: P0 generation succeeds', () => {
      expect(p0Result.success).toBe(true);
    });

    test('FG-02: P0 processes whitelisted modules with exportable types', () => {
      // QtQuick.Controls.Basic has only non-creatable types, so it's excluded
      expect(p0Result.stats.modulesProcessed).toBeGreaterThanOrEqual(7);
    });

    test('FG-03: P0 generates substantial type count', () => {
      expect(p0Result.stats.typesProcessed).toBeGreaterThan(400);
    });

    test('FG-04: P0 has zero errors', () => {
      const errors = p0Result.diagnostics.filter((d) => d.level === 'error');
      expect(errors.length).toBe(0);
    });

    test('FG-05: P0 warning count is zero', () => {
      const warnings = p0Result.diagnostics.filter((d) => d.level === 'warning');
      expect(warnings.length).toBe(0);
    });

    test('FG-06: P0 generates creatables', () => {
      expect(p0Result.stats.creatableTypes).toBeGreaterThan(100);
    });

    test('FG-07: P0 generates singletons', () => {
      expect(p0Result.stats.singletonTypes).toBeGreaterThan(0);
    });

    test('FG-08: P0 generates attached types', () => {
      expect(p0Result.stats.attachedTypes).toBeGreaterThan(5);
    });

    test('FG-09: P0 generates grouped surfaces', () => {
      expect(p0Result.stats.groupedSurfaces).toBeGreaterThan(3);
    });

    test('FG-10: P0 generates index files for modules with types', () => {
      const generatedModules = p0Result.files
        .filter((f) => f.relativePath.endsWith('/index.ts') && f.relativePath !== 'index.ts')
        .map((f) => f.relativePath.replace('/index.ts', ''));
      expect(generatedModules.length).toBeGreaterThanOrEqual(7);
      // Core modules with types should always be present
      expect(generatedModules).toContain('QtQuick');
      expect(generatedModules).toContain('QtQuick.Layouts');
      expect(generatedModules).toContain('QML');
    });

    test('FG-11: P0 generates top-level index', () => {
      const topIndex = p0Result.files.find((f) => f.relativePath === 'index.ts');
      expect(topIndex).toBeDefined();
    });

    test('FG-12: all files have content', () => {
      for (const file of p0Result.files) {
        expect(file.content.length).toBeGreaterThan(0);
      }
    });

    test('FG-13: all .ts files have auto-generated header', () => {
      for (const file of p0Result.files) {
        if (file.relativePath.endsWith('.ts')) {
          expect(file.content).toContain('AUTO-GENERATED');
        }
      }
    });
  });

  describe('determinism', () => {
    test('FG-20: two P0 runs produce identical output', () => {
      const a = generate({
        registryPath: SNAPSHOT_PATH,
        outputDir: '',
        moduleWhitelist: ['QtQuick.Layouts'],
      });
      const b = generate({
        registryPath: SNAPSHOT_PATH,
        outputDir: '',
        moduleWhitelist: ['QtQuick.Layouts'],
      });
      expect(a.files.length).toBe(b.files.length);
      for (let i = 0; i < a.files.length; i++) {
        expect(a.files[i]!.relativePath).toBe(b.files[i]!.relativePath);
        expect(a.files[i]!.content).toBe(b.files[i]!.content);
      }
    });

    test('FG-21: file order is deterministic (sorted)', () => {
      const result = generate({
        registryPath: SNAPSHOT_PATH,
        outputDir: '',
        moduleWhitelist: ['QtQuick'],
      });
      const typeFiles = result.files
        .filter(
          (f) => f.relativePath.startsWith('QtQuick/') && f.relativePath !== 'QtQuick/index.ts',
        )
        .map((f) => f.relativePath);
      const sorted = [...typeFiles].sort();
      expect(typeFiles).toEqual(sorted);
    });
  });

  describe('all-modules generation', () => {
    const allResult = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      // No whitelist → all modules
    });

    test('FG-30: all-modules generation succeeds', () => {
      expect(allResult.success).toBe(true);
    });

    test('FG-31: processes more modules than P0', () => {
      expect(allResult.stats.modulesProcessed).toBeGreaterThan(P0_MODULES.length);
    });

    test('FG-32: processes more types than P0', () => {
      expect(allResult.stats.typesProcessed).toBeGreaterThan(1000);
    });

    test('FG-33: all-modules has zero errors', () => {
      const errors = allResult.diagnostics.filter((d) => d.level === 'error');
      expect(errors.length).toBe(0);
    });

    test('FG-34: all-modules warning budget (<10)', () => {
      const warnings = allResult.diagnostics.filter((d) => d.level === 'warning');
      expect(warnings.length).toBeLessThan(10);
    });

    test('FG-35: generates 500+ files', () => {
      expect(allResult.stats.filesGenerated).toBeGreaterThan(500);
    });

    test('FG-36: generates substantial line count', () => {
      expect(allResult.stats.totalLines).toBeGreaterThan(100000);
    });
  });

  describe('single module isolation', () => {
    test('FG-40: single module generates independent output', () => {
      const result = generate({
        registryPath: SNAPSHOT_PATH,
        outputDir: '',
        moduleWhitelist: ['QtQuick.Layouts'],
      });
      expect(result.success).toBe(true);
      expect(result.stats.modulesProcessed).toBe(1);
      // Should have layout types + index
      expect(result.files.length).toBeGreaterThan(2);
    });

    test('FG-41: empty whitelist generates nothing', () => {
      const result = generate({
        registryPath: SNAPSHOT_PATH,
        outputDir: '',
        moduleWhitelist: [],
      });
      expect(result.success).toBe(true);
      expect(result.stats.modulesProcessed).toBe(0);
      expect(result.files.length).toBe(1); // just top-level index
    });
  });
});
