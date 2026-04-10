import { describe, expect, test } from 'bun:test';
import type { QmltsConfig } from '../../src/build/config-types.js';
import { defineConfig } from '../../src/build/define-config.js';

describe('defineConfig', () => {
  test('BC-05: returns the exact same object (identity)', () => {
    const config: QmltsConfig = {
      entry: './src/main.ts',
      outDir: './dist',
      qt: { dir: '/opt/Qt/6.11.0/gcc_64' },
    };
    const result = defineConfig(config);
    expect(result).toBe(config);
  });

  test('BC-06: preserves all fields', () => {
    const config: QmltsConfig = {
      entry: './src/app.ts',
      outDir: './build',
      qt: {
        dir: 'C:\\Qt\\6.11.0\\msvc2022_64',
        modules: ['QtQuick', 'QtQuick.Controls'],
        targetVersion: '6.11',
      },
      build: { aot: true, lint: false },
      host: { prebuilt: false },
      dev: { hotReload: true, debounceMs: 300 },
      assets: { dir: './assets' },
      distribute: { targets: ['win32-x64'] },
      qmlModulePaths: ['/extra/qml'],
    };
    const result = defineConfig(config);
    expect(result).toEqual(config);
  });

  test('BC-07: works with minimal config', () => {
    const config: QmltsConfig = {};
    const result = defineConfig(config);
    expect(result).toBe(config);
  });
});
