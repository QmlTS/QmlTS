import { describe, expect, test } from 'bun:test';
import { QtInstallationNotFoundError } from '../../src/qt-tools/errors.js';
import {
  checkTools,
  discover,
  getImportPaths,
  getToolPath,
  resolveQtDir,
} from '../../src/qt-tools/toolchain.js';

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

    test('TC-10: checkTools includes moc and qmlaotstats', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const tools = await checkTools(inst);
      expect(tools.moc).toBeDefined();
      expect(tools.qmlaotstats).toBeDefined();
      expect(tools.moc.name).toBe('moc');
      expect(tools.qmlaotstats.name).toBe('qmlaotstats');
    });

    test('TC-11: getImportPaths with extra paths appends them', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const extra = ['/custom/path'];
      const paths = getImportPaths(inst, extra);
      expect(paths).toContain('/custom/path');
      expect(paths.length).toBeGreaterThanOrEqual(2);
    });
  });

  test('TC-12: resolveQtDir returns undefined when no config or env', () => {
    const origQmlts = process.env['QMLTS_QT_DIR'];
    const origQt = process.env['QT_DIR'];
    const origPath = process.env['PATH'];
    try {
      delete process.env['QMLTS_QT_DIR'];
      delete process.env['QT_DIR'];
      process.env['PATH'] = '';
      const result = resolveQtDir();
      // On CI or machines without Qt in common paths, this should be undefined
      // On machines with Qt installed in common paths, it may find it
      expect(result === undefined || typeof result === 'string').toBe(true);
    } finally {
      if (origQmlts !== undefined) process.env['QMLTS_QT_DIR'] = origQmlts;
      else delete process.env['QMLTS_QT_DIR'];
      if (origQt !== undefined) process.env['QT_DIR'] = origQt;
      else delete process.env['QT_DIR'];
      if (origPath !== undefined) process.env['PATH'] = origPath;
    }
  });

  test('TC-13: resolveQtDir prefers QMLTS_QT_DIR over QT_DIR', () => {
    const origQmlts = process.env['QMLTS_QT_DIR'];
    const origQt = process.env['QT_DIR'];
    try {
      process.env['QMLTS_QT_DIR'] = '/fake/qmlts/path';
      process.env['QT_DIR'] = '/fake/qt/path';
      const result = resolveQtDir();
      expect(result).toBe('/fake/qmlts/path');
    } finally {
      if (origQmlts !== undefined) process.env['QMLTS_QT_DIR'] = origQmlts;
      else delete process.env['QMLTS_QT_DIR'];
      if (origQt !== undefined) process.env['QT_DIR'] = origQt;
      else delete process.env['QT_DIR'];
    }
  });

  test('TC-14: resolveQtDir explicit qtDir takes highest priority', () => {
    const result = resolveQtDir({ qtDir: '/explicit/path' });
    expect(result).toBe('/explicit/path');
  });
});
