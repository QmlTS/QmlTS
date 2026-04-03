import { describe, test, expect, beforeAll } from 'bun:test';
import { RegistryBuilder } from '../../src/registry/builder.js';
import { QT_VERSION } from '../../src/registry/scanner.js';
import { scan } from '../../src/registry/scanner.js';

const QT_DIR = process.env['QT_DIR']!;

beforeAll(() => {
  if (!process.env['QT_DIR']) {
    throw new Error('QT_DIR environment variable is required to run tests');
  }
});

describe('RegistryBuilder', () => {
  describe('with Qt installation', () => {
    test('B-01: build() completes successfully', async () => {
      const builder = new RegistryBuilder();
      const result = await builder.build({ qtDir: QT_DIR });
      expect(result.success).toBe(true);
      expect(result.registry.types.length).toBeGreaterThan(0);
      expect(result.registry.modules.length).toBeGreaterThan(0);
      expect(result.registry.qtVersion).toBe(QT_VERSION);
    });

    test('B-02: build() calls progress callback', async () => {
      const phases: string[] = [];
      const builder = new RegistryBuilder();
      await builder.build({
        qtDir: QT_DIR,
        onProgress: (phase) => {
          phases.push(phase);
        },
      });
      expect(phases).toContain('validating');
      expect(phases).toContain('scanning');
      expect(phases).toContain('completed');
    });

    test('B-03: build() produces correct stats', async () => {
      const builder = new RegistryBuilder();
      const result = await builder.build({ qtDir: QT_DIR });
      const scanned = await scan({ qtDir: QT_DIR });
      expect(result.registry.stats.sourceFiles.qmltypes).toBe(scanned.qmltypesFiles.length);
      expect(result.registry.stats.sourceFiles.qmldir).toBe(scanned.qmldirFiles.length);
      expect(result.registry.stats.sourceFiles.metatypes).toBe(scanned.metatypesFiles.length);
      expect(result.registry.stats.sourceFiles.qmltypes).toBeGreaterThan(0);
      expect(result.registry.stats.sourceFiles.qmldir).toBeGreaterThan(0);
      expect(result.registry.stats.sourceFiles.metatypes).toBeGreaterThan(0);
      expect(result.registry.stats.moduleCount).toBeGreaterThan(0);
      expect(result.registry.stats.typeCount).toBeGreaterThan(0);
    });
  });

  describe('error handling', () => {
    test('B-06: invalid Qt path throws ScanError', async () => {
      const builder = new RegistryBuilder();
      await expect(
        builder.build({ qtDir: '/nonexistent/qt' })
      ).rejects.toThrow();
    });

    test('build with invalid path throws', async () => {
      const builder = new RegistryBuilder();
      await expect(
        builder.build({ qtDir: '/definitely/not/a/qt/installation' })
      ).rejects.toThrow();
    });
  });

  test('RegistryBuilder is instantiable', () => {
    const builder = new RegistryBuilder();
    expect(builder).toBeDefined();
    expect(typeof builder.build).toBe('function');
    expect(typeof builder.buildCached).toBe('function');
  });
});
