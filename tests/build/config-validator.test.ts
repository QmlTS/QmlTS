import { describe, expect, test } from 'bun:test';
import { ConfigError } from '../../src/build/config-error.js';
import type { QmltsConfig } from '../../src/build/config-types.js';
import { validateConfig } from '../../src/build/config-validator.js';

describe('validateConfig', () => {
  test('BC-17a: rejects non-object config roots', () => {
    const config = [] as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
      expect.unreachable('should have thrown');
    } catch (e) {
      expect((e as ConfigError).field).toBe('config');
    }
  });

  test('BC-18: accepts valid minimal config', () => {
    const config: QmltsConfig = {
      entry: './src/main.ts',
      outDir: './dist',
    };
    expect(() => validateConfig(config)).not.toThrow();
  });

  test('BC-19: accepts valid complete config', () => {
    const config: QmltsConfig = {
      entry: './src/main.ts',
      outDir: './dist',
      qt: {
        dir: 'C:\\Qt\\6.11.0\\msvc2022_64',
        modules: ['QtQuick', 'QtQuick.Controls', 'QtQuick.Layouts'],
        targetVersion: '6.11',
      },
      build: {
        aot: false,
        lint: true,
        format: true,
        sourceMaps: true,
        incremental: true,
        concurrency: 4,
        qualityGate: 'lint',
        mode: 'development',
        minify: false,
      },
      host: { prebuilt: true, cargo: { profile: 'release', args: [] } },
      dev: { hotReload: true, watchPaths: ['./src'], debounceMs: 200 },
      assets: { dir: './assets' },
      distribute: { targets: ['win32-x64'] },
      qmlModulePaths: ['/extra/qml'],
    };
    expect(() => validateConfig(config)).not.toThrow();
  });

  test('BC-20: rejects non-string entry', () => {
    const config = { entry: 123 } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      const err = e as ConfigError;
      expect(err.field).toBe('entry');
      expect(err.value).toBe(123);
    }
  });

  test('BC-21: rejects empty-string entry', () => {
    const config: QmltsConfig = { entry: '' };
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('entry');
    }
  });

  test('BC-22: rejects non-string outDir', () => {
    const config = { outDir: true } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('outDir');
    }
  });

  test('BC-23: rejects invalid Qt module names', () => {
    const config: QmltsConfig = {
      qt: { modules: ['QtQuick', '123invalid', 'QtQuick.Controls'] },
    };
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      const err = e as ConfigError;
      expect(err.field).toBe('qt.modules');
      expect(err.value).toContain('123invalid');
    }
  });

  test('BC-24: accepts valid Qt module names with dots', () => {
    const config: QmltsConfig = {
      qt: {
        modules: ['QtQuick', 'QtQuick.Controls', 'QtQuick.Layouts', 'Qt5Compat.GraphicalEffects'],
      },
    };
    expect(() => validateConfig(config)).not.toThrow();
  });

  test('BC-24a: rejects non-array qt.modules values with ConfigError', () => {
    const config = { qt: { modules: 'QtQuick' } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('qt.modules');
    }
  });

  test('BC-24b: rejects non-string qt.modules entries with ConfigError', () => {
    const config = { qt: { modules: ['QtQuick', 42] } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('qt.modules');
    }
  });

  test('BC-24c: rejects non-object qt config values', () => {
    const config = { qt: true } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('qt');
    }
  });

  test('BC-25: rejects negative concurrency', () => {
    const config: QmltsConfig = { build: { concurrency: -1 } };
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      const err = e as ConfigError;
      expect(err.field).toBe('build.concurrency');
      expect(err.value).toBe(-1);
    }
  });

  test('BC-26: rejects zero concurrency', () => {
    const config: QmltsConfig = { build: { concurrency: 0 } };
    expect(() => validateConfig(config)).toThrow(ConfigError);
  });

  test('BC-27: rejects negative debounceMs', () => {
    const config: QmltsConfig = { dev: { debounceMs: -50 } };
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('dev.debounceMs');
    }
  });

  test('BC-27a: rejects non-string dev.watchPaths entries', () => {
    const config = { dev: { watchPaths: ['./src', 42] } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('dev.watchPaths');
    }
  });

  test('BC-28: rejects negative port', () => {
    const config: QmltsConfig = { dev: { port: -1 } };
    expect(() => validateConfig(config)).toThrow(ConfigError);
  });

  test('BC-29: rejects invalid platform target', () => {
    const config = {
      distribute: { targets: ['win32-x64', 'invalid-platform'] },
    } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('distribute.targets');
    }
  });

  test('BC-29a: rejects non-array distribute.targets values with ConfigError', () => {
    const config = { distribute: { targets: 'win32-x64' } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('distribute.targets');
    }
  });

  test('BC-29b: rejects non-object distribute config values', () => {
    const config = { distribute: ['win32-x64'] } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('distribute');
    }
  });

  test('BC-30: rejects invalid build mode', () => {
    const config = { build: { mode: 'staging' } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('build.mode');
    }
  });

  test('BC-31: rejects invalid quality gate', () => {
    const config = { build: { qualityGate: 'maximum' } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
  });

  test('BC-32: rejects invalid cargo profile', () => {
    const config = { host: { cargo: { profile: 'fast' } } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('host.cargo.profile');
    }
  });

  test('BC-32a: rejects non-string host.cargo.args entries', () => {
    const config = { host: { cargo: { args: ['--release', 123] } } } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('host.cargo.args');
    }
  });

  test('BC-33: accepts empty config (all optional)', () => {
    expect(() => validateConfig({})).not.toThrow();
  });

  test('BC-33a: rejects non-array qmlModulePaths values', () => {
    const config = { qmlModulePaths: './qml' } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('qmlModulePaths');
    }
  });

  test('BC-33b: rejects empty qmlModulePaths entries', () => {
    const config = { qmlModulePaths: ['./qml', ''] } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      expect((e as ConfigError).field).toBe('qmlModulePaths[1]');
    }
  });

  test('BC-34: rejects unknown top-level fields', () => {
    const config = { entry: './src/main.ts', foo: 'bar' } as unknown as QmltsConfig;
    expect(() => validateConfig(config)).toThrow(ConfigError);
    try {
      validateConfig(config);
    } catch (e) {
      const err = e as ConfigError;
      expect(err.field).toBe('foo');
    }
  });
});
