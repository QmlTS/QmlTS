import { describe, expect, test } from 'bun:test';
import { QtInstallationNotFoundError } from '../../src/qt-tools/errors.js';
import { checkTools, discover, getImportPaths, getToolPath } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];

describe('QtToolchain', () => {
  test('TC-02: discover() with invalid path throws', async () => {
    await expect(discover({ qtDir: '/nonexistent/qt/path' })).rejects.toBeInstanceOf(
      QtInstallationNotFoundError,
    );
  });

  describe.skipIf(!QT_DIR)('with Qt installation', () => {
    test('TC-01: discover() with explicit qtDir', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      expect(inst.rootDir).toBe(QT_DIR!);
      expect(inst.binDir).toContain('bin');
      expect(inst.qmlDir).toContain('qml');
    });

    test('TC-03: discover() from QT_DIR env var', async () => {
      const inst = await discover();
      expect(inst.rootDir).toBeTruthy();
    });

    test('TC-04: checkTools() reports available tools', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const tools = await checkTools(inst);
      expect(tools.qmlformat.available).toBe(true);
      expect(tools.qmllint.available).toBe(true);
      expect(tools.qmlcachegen.available).toBe(true);
    });

    test('TC-05: getToolPath(qmlformat) returns valid path', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const path = getToolPath(inst, 'qmlformat');
      expect(path).toContain('qmlformat');
    });

    test('TC-06: getToolPath for non-existent tool throws', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      expect(() => getToolPath(inst, 'nonexistent' as unknown as 'qmlformat')).toThrow();
    });

    test('TC-07: getImportPaths includes qml directory', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const paths = getImportPaths(inst);
      expect(paths.some((p) => p.includes('qml'))).toBe(true);
    });

    test('TC-08: version parsing', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      expect(inst.version.major).toBe(6);
      expect(inst.version.minor).toBe(11);
      expect(inst.version.patch).toBe(0);
    });

    test('TC-09: platform detection', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      expect(inst.platform).toBeTruthy();
      expect(inst.platform.length).toBeGreaterThan(0);
    });
  });
});
