import { describe, expect, test } from 'bun:test';
import { applyDefaults } from '../../src/build/config-defaults.js';
import type { QmltsConfig, ResolvedQmltsConfig } from '../../src/build/config-types.js';
import { validateConfig } from '../../src/build/config-validator.js';

describe('V2 config surface', () => {
  const configDir = '/project';

  function resolveV2Config(config: QmltsConfig): ResolvedQmltsConfig {
    validateConfig(config);
    return applyDefaults(config, configDir);
  }

  test('BC-70: default config resolves to V2 runtime with no module', () => {
    const resolved = resolveV2Config({});
    expect(resolved.runtime).toBe('v2');
    expect(resolved.v1Compat).toBe(false);
    expect(resolved.module).toBeUndefined();
  });

  test('BC-71: V2 config resolves runtime, module, and v1Compat', () => {
    const resolved = resolveV2Config({
      runtime: 'v2',
      v1Compat: true,
      module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
    });
    expect(resolved.runtime).toBe('v2');
    expect(resolved.v1Compat).toBe(true);
    expect(resolved.module).toEqual({
      prefix: 'MyApp',
      version: { major: 1, minor: 0 },
    });
  });

  test('BC-72: V1 explicit config is fully backward compatible', () => {
    const resolved = resolveV2Config({
      entry: './src/main.ts',
      outDir: './dist',
      runtime: 'v1',
    });
    expect(resolved.runtime).toBe('v1');
    expect(resolved.v1Compat).toBe(false);
    expect(resolved.module).toBeUndefined();
    expect(resolved.entry).toBe('./src/main.ts');
    expect(resolved.outDir).toBe('./dist');
    expect(resolved.build.lint).toBe(true);
    expect(resolved.dev.hotReload).toBe(true);
  });

  test('BC-73: V2 fields coexist with all existing config fields', () => {
    const resolved = resolveV2Config({
      entry: './app/entry.ts',
      outDir: './build',
      runtime: 'v2',
      module: { prefix: 'Com.Example', version: { major: 2, minor: 1 } },
      qt: { modules: ['QtQuick'] },
      build: { aot: true, mode: 'production' },
      dev: { hotReload: false },
    });
    expect(resolved.runtime).toBe('v2');
    expect(resolved.module?.prefix).toBe('Com.Example');
    expect(resolved.entry).toBe('./app/entry.ts');
    expect(resolved.build.aot).toBe(true);
    expect(resolved.dev.hotReload).toBe(false);
  });
});
