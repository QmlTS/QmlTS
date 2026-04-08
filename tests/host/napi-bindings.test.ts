/**
 * Smoke tests for @qmlts/host native bindings
 *
 * These tests verify that the napi-rs native module:
 * 1. Loads successfully in the Bun/Node runtime
 * 2. Exports all expected functions
 * 3. Functions can be called without crashing
 *
 * Note: These tests require the native module to be built first.
 * If the module is not built, tests will be skipped.
 */

import { beforeAll, describe, expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Try to locate the native module
const nativeModulePaths = [
  // Development build paths
  join(import.meta.dirname, '../../native/npm/qmlts-host/qmlts-host.win32-x64-msvc.node'),
  join(import.meta.dirname, '../../native/npm/qmlts-host/qmlts-host.linux-x64-gnu.node'),
  join(import.meta.dirname, '../../native/npm/qmlts-host/qmlts-host.darwin-arm64.node'),
  join(import.meta.dirname, '../../native/npm/qmlts-host/qmlts-host.darwin-x64.node'),
  // Cargo build output
  join(import.meta.dirname, '../../native/target/release/qmlts_host.node'),
  join(import.meta.dirname, '../../native/target/debug/qmlts_host.node'),
];

function findNativeModule(): string | null {
  for (const path of nativeModulePaths) {
    if (existsSync(path)) {
      return path;
    }
  }
  return null;
}

const nativeModulePath = findNativeModule();
const isNativeModuleAvailable = nativeModulePath !== null;

// Define expected exports based on Rust #[napi] functions
const expectedExports = [
  // §1 Engine lifecycle
  'createEngine',
  'destroyEngine',
  'version',
  'qtVersion',
  // §2 QML loading
  'loadFile',
  'loadString',
  'addImportPath',
  'addPluginPath',
  // §3 Event loop
  'exec',
  'quit',
  'processEvents',
  'processEventsFor',
];

describe.skipIf(!isNativeModuleAvailable)('host/napi-bindings', () => {
  let nativeModule: Record<string, unknown>;

  beforeAll(async () => {
    if (!nativeModulePath) {
      throw new Error('Native module not found');
    }
    // Dynamic import of native module
    nativeModule = await import(nativeModulePath);
  });

  test('TB-01: native module loads successfully', () => {
    expect(nativeModule).toBeDefined();
    expect(typeof nativeModule).toBe('object');
  });

  test('TB-02: all expected exports exist and are functions', () => {
    for (const name of expectedExports) {
      expect(typeof nativeModule[name]).toBe('function');
    }
  });

  test('TB-03: createEngine() returns a non-null object', () => {
    const createEngine = nativeModule.createEngine as () => unknown;
    const engine = createEngine();
    expect(engine).toBeDefined();
    expect(engine).not.toBeNull();
    expect(typeof engine).toBe('object');
  });

  test('TB-04: version() returns a version string', () => {
    const version = nativeModule.version as () => string;
    const v = version();
    expect(typeof v).toBe('string');
    expect(v.length).toBeGreaterThan(0);
    // Should be semver-like
    expect(v).toMatch(/^\d+\.\d+\.\d+/);
  });

  test('TB-05: destroyEngine(engine) does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const destroyEngine = nativeModule.destroyEngine as (engine: object) => void;
    const engine = createEngine();
    expect(() => destroyEngine(engine)).not.toThrow();
  });

  test('TB-06: qtVersion() returns a valid Qt version string', () => {
    const qtVersion = nativeModule.qtVersion as () => string;
    const v = qtVersion();
    expect(typeof v).toBe('string');
    expect(v.length).toBeGreaterThan(0);
    // Should be major.minor.patch format
    expect(v).toMatch(/^\d+\.\d+\.\d+/);
    // Should be Qt 6.x
    expect(v.startsWith('6.')).toBe(true);
  });

  test('TB-07: loadString() with valid QML does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const loadString = nativeModule.loadString as (
      engine: object,
      qml: string,
      baseUrl?: string,
    ) => void;

    const engine = createEngine();
    expect(() => loadString(engine, 'import QtQuick\nItem { }')).not.toThrow();
  });

  test('TB-08: loadString() with invalid QML throws an error', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const loadString = nativeModule.loadString as (
      engine: object,
      qml: string,
      baseUrl?: string,
    ) => void;

    const engine = createEngine();
    expect(() => loadString(engine, '')).toThrow();
  });

  test('TB-09: processEvents() does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const processEvents = nativeModule.processEvents as (engine: object) => void;

    const engine = createEngine();
    expect(() => processEvents(engine)).not.toThrow();
  });

  test('TB-10: processEventsFor() does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const processEventsFor = nativeModule.processEventsFor as (
      engine: object,
      timeout: number,
    ) => void;

    const engine = createEngine();
    expect(() => processEventsFor(engine, 10)).not.toThrow();
  });

  test('TB-11: addImportPath() does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const addImportPath = nativeModule.addImportPath as (engine: object, path: string) => void;

    const engine = createEngine();
    expect(() => addImportPath(engine, '/app/qml')).not.toThrow();
  });

  test('TB-12: addPluginPath() does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const addPluginPath = nativeModule.addPluginPath as (engine: object, path: string) => void;

    const engine = createEngine();
    expect(() => addPluginPath(engine, '/opt/qt/plugins')).not.toThrow();
  });

  test('TB-13: loadFile() with non-existent file throws FileNotFound', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const loadFile = nativeModule.loadFile as (engine: object, path: string) => void;

    const engine = createEngine();
    expect(() => loadFile(engine, '/nonexistent/path/to/file.qml')).toThrow(
      /not found|FileNotFound/i,
    );
  });
});

describe('host/napi-bindings (skip check)', () => {
  test('check native module availability', () => {
    if (!isNativeModuleAvailable) {
      console.log('⚠️  Native module not built. Run `cargo build` in native/ to build it.');
      console.log('   Skipping native binding tests.');
    } else {
      console.log(`✓ Native module found at: ${nativeModulePath}`);
    }
    // This test always passes - it's just for visibility
    expect(true).toBe(true);
  });
});
