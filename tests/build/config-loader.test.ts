import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { ConfigError } from '../../src/build/config-error.js';
import { loadConfig } from '../../src/build/config-loader.js';

const FIXTURES = join(import.meta.dir, 'fixtures');

describe('loadConfig', () => {
  test('BC-35: loads minimal config from fixture', async () => {
    const configPath = join(FIXTURES, 'minimal-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.entry).toBe('./src/main.ts');
    expect(resolved.outDir).toBe('./dist');
    expect(resolved.configDir).toBe(join(FIXTURES, 'minimal-config'));
  });

  test('BC-36: loads complete config and preserves all user values', async () => {
    const configPath = join(FIXTURES, 'complete-config', 'qmlts.config.ts');
    const resolved = await loadConfig(configPath);
    expect(resolved.entry).toBe('./src/app.ts');
    expect(resolved.outDir).toBe('./build');
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
    expect(resolved.dev.watchPaths).toEqual(['./src', './lib']);
    expect(resolved.dev.port).toBe(9000);
    expect(resolved.assets.dir).toBe('./res');
    expect(resolved.assets.useQrc).toBe(true);
    expect(resolved.assets.optimize).toBe(true);
    expect(resolved.distribute.targets).toEqual(['win32-x64', 'linux-x64']);
    expect(resolved.distribute.bundleQt).toBe(true);
    expect(resolved.distribute.appName).toBe('MyQmlApp');
    expect(resolved.qmlModulePaths).toEqual(['/extra/qml/modules']);
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
    expect(resolved.assets.dir).toBe('./assets');
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
    const configPath = join(FIXTURES, 'invalid-syntax', 'qmlts.config.ts');
    try {
      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      const err = e as ConfigError;
      expect(err.field).toBe('configFile');
    }
  });

  test('BC-40: throws ConfigError for invalid entry in config', async () => {
    const configPath = join(FIXTURES, 'invalid-entry', 'qmlts.config.ts');
    try {
      await loadConfig(configPath);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect(e).toBeInstanceOf(ConfigError);
      expect((e as ConfigError).field).toBe('entry');
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
});
