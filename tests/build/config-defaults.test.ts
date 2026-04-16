import { describe, expect, test } from 'bun:test';
import { applyDefaults } from '../../src/build/config-defaults.js';
import type { QmltsConfig } from '../../src/build/config-types.js';

describe('applyDefaults', () => {
  const configDir = '/project';

  test('BC-08: fills all defaults for empty config', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.entry).toBe('./src/main.ts');
    expect(resolved.outDir).toBe('./dist');
    expect(resolved.configDir).toBe(configDir);
  });

  test('BC-09: fills qt defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.qt.modules).toEqual([]);
    expect(resolved.qt.targetVersion).toBe('6.11');
    expect(resolved.qt.dir).toBeUndefined();
  });

  test('BC-10: fills build defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.build.aot).toBe(false);
    expect(resolved.build.lint).toBe(true);
    expect(resolved.build.format).toBe(true);
    expect(resolved.build.sourceMaps).toBe(true);
    expect(resolved.build.incremental).toBe(true);
    expect(resolved.build.concurrency).toBeGreaterThan(0);
    expect(resolved.build.qualityGate).toBe('lint');
    expect(resolved.build.mode).toBe('development');
    expect(resolved.build.minify).toBe(false);
  });

  test('BC-11: fills host defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.host.prebuilt).toBe(true);
    expect(resolved.host.cargo.args).toEqual([]);
    expect(resolved.host.cargo.profile).toBe('release');
  });

  test('BC-12: fills dev defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.dev.hotReload).toBe(true);
    expect(resolved.dev.watchPaths).toEqual(['./src']);
    expect(resolved.dev.debounceMs).toBe(200);
    expect(resolved.dev.ignorePatterns).toEqual([]);
    expect(resolved.dev.port).toBe(0);
    expect(resolved.dev.notify).toBe(true);
    expect(resolved.dev.preserveOnError).toBe(true);
  });

  test('BC-13: fills assets defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.assets.dir).toBe('./assets');
    expect(resolved.assets.include).toEqual(['**/*']);
    expect(resolved.assets.exclude).toEqual([]);
    expect(resolved.assets.useQrc).toBe(false);
    expect(resolved.assets.optimize).toBe(false);
  });

  test('BC-14: fills distribute defaults', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.distribute.targets).toEqual([]);
    expect(resolved.distribute.bundleQt).toBe(false);
  });

  test('BC-15: fills qmlModulePaths default', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.qmlModulePaths).toEqual([]);
  });

  test('BC-16: user values override defaults', () => {
    const config: QmltsConfig = {
      entry: './app/entry.ts',
      outDir: './build',
      qt: { dir: '/opt/Qt', modules: ['QtQuick'], targetVersion: '6.8' },
      build: { aot: true, lint: false, concurrency: 4 },
      host: { prebuilt: false, cargo: { profile: 'dev', args: ['--features', 'debug'] } },
      dev: { hotReload: false, debounceMs: 500, watchPaths: ['./app'] },
      assets: { dir: './res', useQrc: true },
      distribute: { targets: ['win32-x64'], bundleQt: true, appName: 'MyApp' },
      qmlModulePaths: ['/extra'],
    };
    const resolved = applyDefaults(config, configDir);

    expect(resolved.entry).toBe('./app/entry.ts');
    expect(resolved.outDir).toBe('./build');
    expect(resolved.qt.dir).toBe('/opt/Qt');
    expect(resolved.qt.modules).toEqual(['QtQuick']);
    expect(resolved.qt.targetVersion).toBe('6.8');
    expect(resolved.build.aot).toBe(true);
    expect(resolved.build.lint).toBe(false);
    expect(resolved.build.concurrency).toBe(4);
    expect(resolved.host.prebuilt).toBe(false);
    expect(resolved.host.cargo.profile).toBe('dev');
    expect(resolved.host.cargo.args).toEqual(['--features', 'debug']);
    expect(resolved.dev.hotReload).toBe(false);
    expect(resolved.dev.debounceMs).toBe(500);
    expect(resolved.dev.watchPaths).toEqual(['./app']);
    expect(resolved.assets.dir).toBe('./res');
    expect(resolved.assets.useQrc).toBe(true);
    expect(resolved.distribute.targets).toEqual(['win32-x64']);
    expect(resolved.distribute.bundleQt).toBe(true);
    expect(resolved.distribute.appName).toBe('MyApp');
    expect(resolved.qmlModulePaths).toEqual(['/extra']);
  });

  test('BC-17: partial nested objects merge with defaults', () => {
    const config: QmltsConfig = {
      build: { aot: true },
      host: { cargo: { profile: 'dev' } },
    };
    const resolved = applyDefaults(config, configDir);

    expect(resolved.build.aot).toBe(true);
    expect(resolved.build.lint).toBe(true);
    expect(resolved.build.sourceMaps).toBe(true);
    expect(resolved.host.prebuilt).toBe(true);
    expect(resolved.host.cargo.profile).toBe('dev');
    expect(resolved.host.cargo.args).toEqual([]);
  });

  // ─── V2 defaults ─────────────────────────────────────────

  test('BC-63: runtime defaults to v1', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.runtime).toBe('v1');
  });

  test('BC-64: v1Compat defaults to false', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.v1Compat).toBe(false);
  });

  test('BC-65: module defaults to undefined', () => {
    const resolved = applyDefaults({}, configDir);
    expect(resolved.module).toBeUndefined();
  });

  test('BC-66: user runtime value is preserved', () => {
    const config: QmltsConfig = {
      runtime: 'v2',
      module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
    };
    const resolved = applyDefaults(config, configDir);
    expect(resolved.runtime).toBe('v2');
    expect(resolved.module).toEqual({ prefix: 'MyApp', version: { major: 1, minor: 0 } });
  });

  test('BC-67: user v1Compat value is preserved', () => {
    const config: QmltsConfig = {
      runtime: 'v2',
      v1Compat: true,
      module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
    };
    const resolved = applyDefaults(config, configDir);
    expect(resolved.v1Compat).toBe(true);
  });
});
