import { describe, test, expect } from 'bun:test';
import { scan, validateQtDir } from '../../src/registry/scanner.js';

// These tests use fixture data and don't need actual Qt installation
// Integration tests with real Qt are skipped unless QT_DIR is set

const QT_DIR = process.env['QT_DIR'];

describe('Scanner', () => {
  describe('validateQtDir', () => {
    test('S-02: non-existent path returns null', async () => {
      const result = await validateQtDir('/nonexistent/path');
      expect(result).toBeNull();
    });

    test('S-03: existing but non-Qt directory returns null', async () => {
      const result = await validateQtDir('/tmp');
      expect(result).toBeNull();
    });
  });

  // Integration tests — only run when QT_DIR is set
  describe.skipIf(!QT_DIR)('with Qt installation', () => {
    test('S-01: valid Qt directory returns version', async () => {
      const result = await validateQtDir(QT_DIR!);
      expect(result).not.toBeNull();
      expect(result).toMatch(/^\d+\.\d+\.\d+$/);
    });

    test('S-10: discovers qmltypes files', async () => {
      const result = await scan({ qtDir: QT_DIR! });
      expect(result.qmltypesFiles.length).toBeGreaterThanOrEqual(100);
    });

    test('S-11: discovers qmldir files', async () => {
      const result = await scan({ qtDir: QT_DIR! });
      expect(result.qmldirFiles.length).toBeGreaterThanOrEqual(100);
    });

    test('S-12: discovers metatypes files', async () => {
      const result = await scan({ qtDir: QT_DIR! });
      expect(result.metatypesFiles.length).toBeGreaterThanOrEqual(150);
    });

    test('S-13: builtins.qmltypes is marked as builtin', async () => {
      const result = await scan({ qtDir: QT_DIR! });
      const builtins = result.qmltypesFiles.find(f =>
        f.relativePath.includes('builtins.qmltypes')
      );
      if (builtins) {
        expect(builtins.isBuiltin).toBe(true);
      }
    });

    test('S-15: inferred module URI', async () => {
      const result = await scan({ qtDir: QT_DIR! });
      const qtquick = result.qmltypesFiles.find(f =>
        f.relativePath.includes('QtQuick') &&
        !f.relativePath.includes('QtQuick3D') &&
        !f.relativePath.includes('QtQuickControls') &&
        f.relativePath.endsWith('plugins.qmltypes')
      );
      if (qtquick) {
        expect(qtquick.inferredModule).toContain('QtQuick');
      }
    });

    test('S-20: moduleFilter only scans specified modules', async () => {
      const result = await scan({
        qtDir: QT_DIR!,
        moduleFilter: ['QtQuick'],
      });
      for (const f of result.qmltypesFiles) {
        if (!f.isBuiltin) {
          expect(f.inferredModule).toContain('QtQuick');
        }
      }
    });

    test('S-22: includeMetatypes=false skips metatypes', async () => {
      const result = await scan({
        qtDir: QT_DIR!,
        includeMetatypes: false,
      });
      expect(result.metatypesFiles).toHaveLength(0);
    });
  });

  describe('scan error handling', () => {
    test('throws ScanError for non-existent qtDir', async () => {
      await expect(
        scan({ qtDir: '/nonexistent/qt/dir' })
      ).rejects.toThrow();
    });
  });
});
