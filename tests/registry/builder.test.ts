import { describe, test, expect } from 'bun:test';
import { RegistryBuilder } from '../../src/registry/builder.js';

const QT_DIR = process.env['QT_DIR'];

describe('RegistryBuilder', () => {
  // Integration tests — only run when QT_DIR is set
  describe.skipIf(!QT_DIR)('with Qt installation', () => {
    test('B-01: build() completes successfully', async () => {
      const builder = new RegistryBuilder();
      const result = await builder.build({ qtDir: QT_DIR! });
      expect(result.success).toBe(true);
      expect(result.registry.types.length).toBeGreaterThan(0);
      expect(result.registry.modules.length).toBeGreaterThan(0);
    });

    test('B-02: build() calls progress callback', async () => {
      const phases: string[] = [];
      const builder = new RegistryBuilder();
      await builder.build({
        qtDir: QT_DIR!,
        onProgress: (phase) => {
          phases.push(phase);
        },
      });
      expect(phases).toContain('validating');
      expect(phases).toContain('scanning');
      expect(phases).toContain('completed');
    });

    test('B-06: invalid Qt path throws ScanError', async () => {
      const builder = new RegistryBuilder();
      await expect(
        builder.build({ qtDir: '/nonexistent/qt' })
      ).rejects.toThrow();
    });
  });

  // Unit tests (no Qt required)
  describe('error handling', () => {
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
