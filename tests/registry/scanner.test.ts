import { describe, test, expect, beforeAll } from 'bun:test';
import { scan, validateQtDir, QT_VERSION } from '../../src/registry/scanner.js';

const QT_DIR = process.env['QT_DIR']!;

beforeAll(() => {
  if (!process.env['QT_DIR']) {
    throw new Error('QT_DIR environment variable is required to run tests');
  }
});

describe('Scanner', () => {
  describe('validateQtDir', () => {
    test('S-01: valid Qt directory returns hardcoded version', async () => {
      const result = await validateQtDir(QT_DIR);
      expect(result).toBe(QT_VERSION);
    });

    test('S-02: non-existent path returns null', async () => {
      const result = await validateQtDir('/nonexistent/path');
      expect(result).toBeNull();
    });

    test('S-03: existing but non-Qt directory returns null', async () => {
      // Use the system temp dir which won't have qml/
      const tmpDir = process.platform === 'win32' ? 'C:\\Windows\\Temp' : '/tmp';
      const result = await validateQtDir(tmpDir);
      expect(result).toBeNull();
    });
  });

  describe('with Qt installation', () => {
    test('S-10: discovers qmltypes files', async () => {
      const result = await scan({ qtDir: QT_DIR });
      expect(result.qmltypesFiles.length).toBeGreaterThan(0);
    });

    test('S-11: discovers qmldir files', async () => {
      const result = await scan({ qtDir: QT_DIR });
      expect(result.qmldirFiles.length).toBeGreaterThan(0);
    });

    test('S-12: discovers metatypes files', async () => {
      const result = await scan({ qtDir: QT_DIR });
      expect(result.metatypesFiles.length).toBeGreaterThan(0);
    });

    test('S-13: builtins.qmltypes is marked as builtin', async () => {
      const result = await scan({ qtDir: QT_DIR });
      const builtins = result.qmltypesFiles.find(f =>
        f.relativePath.includes('builtins.qmltypes')
      );
      expect(builtins).toBeDefined();
      expect(builtins!.isBuiltin).toBe(true);
    });

    test('S-15: inferred module URI for QtQuick', async () => {
      const result = await scan({ qtDir: QT_DIR });
      const qtquick = result.qmltypesFiles.find(f =>
        f.inferredModule === 'QtQuick' &&
        f.relativePath.endsWith('plugins.qmltypes')
      );
      expect(qtquick).toBeDefined();
      expect(qtquick!.inferredModule).toBe('QtQuick');
    });

    test('S-20: moduleFilter only scans specified modules', async () => {
      const result = await scan({
        qtDir: QT_DIR,
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
        qtDir: QT_DIR,
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
