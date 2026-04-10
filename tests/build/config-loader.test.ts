import { describe, expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chdir, cwd } from 'node:process';
import { ConfigError } from '../../src/build/config-error.js';
import { loadConfig } from '../../src/build/config-loader.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('loadConfig', () => {
  test('BC-35: loads minimal config from fixture', async () => {
    const configPath = join(FIXTURES, 'minimal-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.entry).toBe(join(FIXTURES, 'minimal-config', 'src', 'main.ts'));
    expect(resolved.outDir).toBe(join(FIXTURES, 'minimal-config', 'dist'));
    expect(resolved.configDir).toBe(join(FIXTURES, 'minimal-config'));
    expect(resolved.qt.dir).toBe(join(FIXTURES, 'minimal-config', 'qt'));
  });

  test('BC-36: loads complete config and preserves all user values', async () => {
    const configPath = join(FIXTURES, 'complete-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.entry).toBe(join(FIXTURES, 'complete-config', 'src', 'app.ts'));
    expect(resolved.outDir).toBe(join(FIXTURES, 'complete-config', 'build'));
    expect(resolved.qt.modules).toEqual(['QtQuick', 'QtQuick.Controls', 'QtQuick.Layouts']);
    expect(resolved.qt.targetVersion).toBe('6.11');
    expect(resolved.build.aot).toBe(false);
    expect(resolved.build.mode).toBe('production');
    expect(resolved.build.minify).toBe(true);
    expect(resolved.build.concurrency).toBe(2);
    expect(resolved.host.prebuilt).toBe(false);
    expect(resolved.host.cargo.profile).toBe('release');
    expect(resolved.host.cargo.args).toEqual(['--features', 'debug-log']);
    expect(resolved.dev.hotReload).toBe(true);
    expect(resolved.dev.debounceMs).toBe(300);
    expect(resolved.dev.watchPaths).toEqual([
      join(FIXTURES, 'complete-config', 'src'),
      join(FIXTURES, 'complete-config', 'lib'),
    ]);
    expect(resolved.dev.port).toBe(9000);
    expect(resolved.assets.dir).toBe(join(FIXTURES, 'complete-config', 'res'));
    expect(resolved.assets.useQrc).toBe(true);
    expect(resolved.assets.optimize).toBe(true);
    expect(resolved.distribute.targets).toEqual(['win32-x64', 'linux-x64']);
    expect(resolved.distribute.bundleQt).toBe(true);
    expect(resolved.distribute.appName).toBe('MyQmlApp');
    expect(resolved.distribute.icon).toBe(join(FIXTURES, 'complete-config', 'res', 'icon.png'));
    expect(resolved.qmlModulePaths).toEqual([join(FIXTURES, 'complete-config', 'qml-modules')]);
  });

  test('BC-37: fills defaults for minimal config', async () => {
    const configPath = join(FIXTURES, 'minimal-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.build.lint).toBe(true);
    expect(resolved.build.format).toBe(true);
    expect(resolved.build.sourceMaps).toBe(true);
    expect(resolved.build.incremental).toBe(true);
    expect(resolved.build.aot).toBe(false);
    expect(resolved.build.qualityGate).toBe('lint');
    expect(resolved.host.prebuilt).toBe(true);
    expect(resolved.dev.hotReload).toBe(true);
    expect(resolved.dev.debounceMs).toBe(200);
    expect(resolved.assets.dir).toBe(join(FIXTURES, 'minimal-config', 'assets'));
    expect(resolved.qmlModulePaths).toEqual([]);
  });

  test('BC-38: throws ConfigError for missing config file', async () => {
    const configPath = join(FIXTURES, 'nonexistent', 'qmlts.config.ts');
    try {
      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      const err = e as ConfigError;
      expect(err.field).toBe('configPath');
      expect(err.value).toBe(configPath);
    }
  });

  test('BC-39: throws ConfigError for syntax error in config file', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-build-invalid-syntax-'));
    const configPath = join(tempDir, 'qmlts.config.ts');
    try {
      writeFileSync(configPath, 'export default {{{\n', 'utf8');

      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      const err = e as ConfigError;
      expect(err.field).toBe('configFile');
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('BC-40: throws ConfigError for invalid entry in config', async () => {
    const configPath = join(FIXTURES, 'invalid-entry', 'qmlts.config.ts');
    try {
      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      const err = e as ConfigError;
      expect(err.field).toBe('entry');
      expect(err.value).toBe('./src/missing.ts');
    }
  });

  test('BC-41: throws ConfigError for invalid Qt modules in config', async () => {
    const configPath = join(FIXTURES, 'invalid-qt-modules', 'qmlts.config.ts');
    try {
      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      expect((e as ConfigError).field).toBe('qt.modules');
    }
  });

  test('BC-42: TypeScript config file is executed correctly', async () => {
    const configPath = join(FIXTURES, 'complete-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved).toBeDefined();
    expect(typeof resolved.entry).toBe('string');
    expect(typeof resolved.outDir).toBe('string');
  });

  test('BC-43: configDir is set to the directory containing the config file', async () => {
    const configPath = join(FIXTURES, 'minimal-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.configDir).toBe(join(FIXTURES, 'minimal-config'));
  });

  test('BC-44: loadConfig() defaults to ./qmlts.config.ts in cwd', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-build-config-'));
    const originalCwd = cwd();
    const configPath = join(tempDir, 'qmlts.config.ts');
    const entryPath = join(tempDir, 'src', 'main.ts');

    try {
      writeFileSync(
        configPath,
        ['export default {', "  entry: './src/main.ts',", "  outDir: './dist',", '};'].join('\n'),
        'utf8',
      );
      mkdirSync(join(tempDir, 'src'), { recursive: true });
      writeFileSync(entryPath, 'export const temp = true;\n', 'utf8');
      chdir(tempDir);

      const resolved = await loadConfig();
      expect(resolved.configDir).toBe(tempDir);
      expect(resolved.entry).toBe(entryPath);
      expect(resolved.outDir).toBe(join(tempDir, 'dist'));
    } finally {
      chdir(originalCwd);
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('BC-45: auto-detects qt.dir when omitted', async () => {
    const originalQmltsQtDir = process.env['QMLTS_QT_DIR'];
    const originalQtDir = process.env['QT_DIR'];
    const tempProjectDir = mkdtempSync(join(tmpdir(), 'qmlts-build-project-'));
    const tempQtDir = mkdtempSync(join(tmpdir(), 'qmlts-build-qt-dir-'));
    const binDir = join(tempQtDir, 'bin');
    const qmlDir = join(tempQtDir, 'qml');
    const configPath = join(tempProjectDir, 'qmlts.config.ts');

    try {
      mkdirSync(binDir, { recursive: true });
      mkdirSync(qmlDir, { recursive: true });
      writeFileSync(join(binDir, process.platform === 'win32' ? 'qmlformat.exe' : 'qmlformat'), '');
      mkdirSync(join(tempProjectDir, 'src'), { recursive: true });
      writeFileSync(join(tempProjectDir, 'src', 'main.ts'), 'export const ok = true;\n', 'utf8');
      writeFileSync(
        configPath,
        ['export default {', "  entry: './src/main.ts',", "  outDir: './dist',", '};'].join('\n'),
        'utf8',
      );
      process.env['QMLTS_QT_DIR'] = tempQtDir;
      delete process.env['QT_DIR'];

      const resolved = await loadConfig(configPath);
      expect(resolved.qt.dir).toBe(tempQtDir);
    } finally {
      if (originalQmltsQtDir !== undefined) process.env['QMLTS_QT_DIR'] = originalQmltsQtDir;
      else delete process.env['QMLTS_QT_DIR'];
      if (originalQtDir !== undefined) process.env['QT_DIR'] = originalQtDir;
      else delete process.env['QT_DIR'];
      rmSync(tempProjectDir, { recursive: true, force: true });
      rmSync(tempQtDir, { recursive: true, force: true });
    }
  });

  test('BC-46: rejects config files without an object default export', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-build-invalid-export-'));
    const configPath = join(tempDir, 'qmlts.config.ts');
    try {
      writeFileSync(configPath, 'export default [];\n', 'utf8');

      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      const err = e as ConfigError;
      expect(err.field).toBe('configFile');
      expect(err.value).toEqual([]);
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });
});
