/**
 * Full-generation acceptance tests.
 * Validates that the generator can process all registry modules
 * and produces deterministic, well-formed output.
 */
import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';

const SNAPSHOT_PATH = join(import.meta.dir, '..', '..', 'data', 'qt-6.11.0-registry.snapshot.json');

const CORE_MODULES = [
  'QML',
  'QtQml',
  'QtQml.Models',
  'QtQuick',
  'QtQuick.Templates',
  'QtQuick.Layouts',
  'QtCore',
];

describe('Full Generation Acceptance', () => {
  describe('core modules subset', () => {
    const coreResult = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: CORE_MODULES,
    });

    test('FG-01: core generation succeeds', () => {
      expect(coreResult.success).toBe(true);
    });

    test('FG-02: core processes all whitelisted modules', () => {
      expect(coreResult.stats.modulesProcessed).toBe(7);
    });

    test('FG-03: core generates substantial type count', () => {
      expect(coreResult.stats.typesProcessed).toBeGreaterThan(400);
    });

    test('FG-04: core has zero errors', () => {
      const errors = coreResult.diagnostics.filter((d) => d.level === 'error');
      expect(errors.length).toBe(0);
    });

    test('FG-05: core warning count is zero', () => {
      const warnings = coreResult.diagnostics.filter((d) => d.level === 'warning');
      expect(warnings.length).toBe(0);
    });

    test('FG-06: core generates creatables', () => {
      expect(coreResult.stats.creatableTypes).toBeGreaterThan(100);
    });

    test('FG-07: core generates singletons', () => {
      expect(coreResult.stats.singletonTypes).toBeGreaterThan(0);
    });

    test('FG-08: core generates attached types', () => {
      expect(coreResult.stats.attachedTypes).toBeGreaterThan(5);
    });

    test('FG-09: core generates grouped surfaces', () => {
      expect(coreResult.stats.groupedSurfaces).toBeGreaterThan(3);
    });

    test('FG-10: core generates index files for modules with types', () => {
      const generatedModules = coreResult.files
        .filter((f) => f.relativePath.endsWith('/index.ts') && f.relativePath !== 'index.ts')
        .map((f) => f.relativePath.replace('/index.ts', ''));
      expect(generatedModules.length).toBeGreaterThanOrEqual(7);
      expect(generatedModules).toContain('QtQuick');
      expect(generatedModules).toContain('QtQuick.Layouts');
      expect(generatedModules).toContain('QML');
    });

    test('FG-11: core generates top-level index', () => {
      const topIndex = coreResult.files.find((f) => f.relativePath === 'index.ts');
      expect(topIndex).toBeDefined();
    });

    test('FG-12: all files have content', () => {
      for (const file of coreResult.files) {
        expect(file.content.length).toBeGreaterThan(0);
      }
    });

    test('FG-13: all .ts files have auto-generated header', () => {
      for (const file of coreResult.files) {
        if (file.relativePath.endsWith('.ts')) {
          expect(file.content).toContain('AUTO-GENERATED');
        }
      }
    });
  });

  describe('determinism', () => {
    test('FG-20: two runs produce identical output', () => {
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
    });

    test('FG-30: all-modules generation succeeds', () => {
      expect(allResult.success).toBe(true);
    });

    test('FG-31: processes 80+ modules', () => {
      expect(allResult.stats.modulesProcessed).toBeGreaterThan(80);
    });

    test('FG-32: processes 1000+ types', () => {
      expect(allResult.stats.typesProcessed).toBeGreaterThan(1000);
    });

    test('FG-33: all-modules has zero errors', () => {
      const errors = allResult.diagnostics.filter((d) => d.level === 'error');
      expect(errors.length).toBe(0);
    });

    test('FG-34: all-modules has zero warnings', () => {
      const warnings = allResult.diagnostics.filter((d) => d.level === 'warning');
      expect(warnings.length).toBe(0);
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
