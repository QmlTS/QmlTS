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
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);

// Try to locate the native module
const nativeModulePaths = [
  // Development build paths
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/qmlts-host.win32-x64-msvc.node', import.meta.url),
  ),
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/qmlts-host.linux-x64-gnu.node', import.meta.url),
  ),
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/qmlts-host.darwin-arm64.node', import.meta.url),
  ),
  fileURLToPath(new URL('../../native/npm/qmlts-host/qmlts-host.darwin-x64.node', import.meta.url)),
  // Common napi-rs CLI output folders
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/build/Release/qmlts-host.node', import.meta.url),
  ),
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/build/Debug/qmlts-host.node', import.meta.url),
  ),
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
  // §4 Bridge registry
  'getRegisteredViewModels',
  'isViewModelRegistered',
  'activateViewModel',
  'deactivateViewModel',
  'hasActiveViewModel',
  'getActiveViewModelName',
  'getVmPropertyNames',
  'getVmCommandNames',
  'getVmProperty',
  'setVmProperty',
  'invokeVmCommand',
  'isRuntimeMounted',
  'queueEffect',
  'drainEffects',
];

describe.skipIf(!isNativeModuleAvailable)('host/napi-bindings', () => {
  let nativeModule: Record<string, unknown>;

  beforeAll(async () => {
    if (!nativeModulePath) {
      throw new Error('Native module not found');
    }
    // Node-API addons must be loaded via require()/dlopen
    nativeModule = require(nativeModulePath) as Record<string, unknown>;
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

  // ─────────────────────────────────────────────────────────────────────────
  // Bridge Registry Tests
  // ─────────────────────────────────────────────────────────────────────────

  test('TB-14: getRegisteredViewModels() returns builtin types', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const getRegisteredViewModels = nativeModule.getRegisteredViewModels as (
      engine: object,
    ) => string[];

    const engine = createEngine();
    const types = getRegisteredViewModels(engine);

    expect(Array.isArray(types)).toBe(true);
    expect(types).toContain('CounterViewModel');
    expect(types).toContain('LoginViewModel');
  });

  test('TB-15: isViewModelRegistered() returns correct values', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const isViewModelRegistered = nativeModule.isViewModelRegistered as (
      engine: object,
      name: string,
    ) => boolean;

    const engine = createEngine();

    expect(isViewModelRegistered(engine, 'CounterViewModel')).toBe(true);
    expect(isViewModelRegistered(engine, 'LoginViewModel')).toBe(true);
    expect(isViewModelRegistered(engine, 'UnknownViewModel')).toBe(false);
  });

  test('TB-16: activateViewModel() activates CounterViewModel', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const hasActiveViewModel = nativeModule.hasActiveViewModel as (engine: object) => boolean;
    const getActiveViewModelName = nativeModule.getActiveViewModelName as (
      engine: object,
    ) => string | null;

    const engine = createEngine();

    expect(hasActiveViewModel(engine)).toBe(false);

    activateViewModel(engine, 'CounterViewModel');

    expect(hasActiveViewModel(engine)).toBe(true);
    expect(getActiveViewModelName(engine)).toBe('CounterViewModel');
  });

  test('TB-17: deactivateViewModel() clears active ViewModel', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const deactivateViewModel = nativeModule.deactivateViewModel as (engine: object) => void;
    const hasActiveViewModel = nativeModule.hasActiveViewModel as (engine: object) => boolean;

    const engine = createEngine();

    activateViewModel(engine, 'CounterViewModel');
    expect(hasActiveViewModel(engine)).toBe(true);

    deactivateViewModel(engine);
    expect(hasActiveViewModel(engine)).toBe(false);
  });

  test('TB-18: getVmPropertyNames() returns CounterViewModel properties', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const getVmPropertyNames = nativeModule.getVmPropertyNames as (engine: object) => string[];

    const engine = createEngine();
    activateViewModel(engine, 'CounterViewModel');

    const props = getVmPropertyNames(engine);
    expect(Array.isArray(props)).toBe(true);
    expect(props).toContain('count');
  });

  test('TB-19: getVmCommandNames() returns CounterViewModel commands', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const getVmCommandNames = nativeModule.getVmCommandNames as (engine: object) => string[];

    const engine = createEngine();
    activateViewModel(engine, 'CounterViewModel');

    const cmds = getVmCommandNames(engine);
    expect(Array.isArray(cmds)).toBe(true);
    expect(cmds).toContain('increment');
    expect(cmds).toContain('decrement');
    expect(cmds).toContain('reset');
  });

  test('TB-20: getVmProperty() and setVmProperty() work correctly', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const getVmProperty = nativeModule.getVmProperty as (engine: object, name: string) => string;
    const setVmProperty = nativeModule.setVmProperty as (
      engine: object,
      name: string,
      value: string,
    ) => void;

    const engine = createEngine();
    activateViewModel(engine, 'CounterViewModel');

    // Get initial count
    const initialCount = JSON.parse(getVmProperty(engine, 'count'));
    expect(initialCount).toBe(0);

    // Set count to 42
    setVmProperty(engine, 'count', '42');

    // Verify count changed
    const newCount = JSON.parse(getVmProperty(engine, 'count'));
    expect(newCount).toBe(42);
  });

  test('TB-21: invokeVmCommand() executes commands correctly', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const getVmProperty = nativeModule.getVmProperty as (engine: object, name: string) => string;
    const invokeVmCommand = nativeModule.invokeVmCommand as (
      engine: object,
      name: string,
      args: string | null,
    ) => string;

    const engine = createEngine();
    activateViewModel(engine, 'CounterViewModel');

    // Initial count is 0
    expect(JSON.parse(getVmProperty(engine, 'count'))).toBe(0);

    // Increment
    invokeVmCommand(engine, 'increment', null);
    expect(JSON.parse(getVmProperty(engine, 'count'))).toBe(1);

    // Increment again
    invokeVmCommand(engine, 'increment', null);
    expect(JSON.parse(getVmProperty(engine, 'count'))).toBe(2);

    // Decrement
    invokeVmCommand(engine, 'decrement', null);
    expect(JSON.parse(getVmProperty(engine, 'count'))).toBe(1);

    // Reset
    invokeVmCommand(engine, 'reset', null);
    expect(JSON.parse(getVmProperty(engine, 'count'))).toBe(0);
  });

  test('TB-22: isRuntimeMounted() returns correct state', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const deactivateViewModel = nativeModule.deactivateViewModel as (engine: object) => void;
    const isRuntimeMounted = nativeModule.isRuntimeMounted as (engine: object) => boolean;

    const engine = createEngine();

    // Not mounted before activation
    expect(isRuntimeMounted(engine)).toBe(false);

    activateViewModel(engine, 'CounterViewModel');
    expect(isRuntimeMounted(engine)).toBe(true);

    deactivateViewModel(engine);
    expect(isRuntimeMounted(engine)).toBe(false);
  });

  test('TB-23: queueEffect() and drainEffects() work correctly', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const queueEffect = nativeModule.queueEffect as (engine: object, effectId: string) => void;
    const drainEffects = nativeModule.drainEffects as (engine: object) => string[];

    const engine = createEngine();
    activateViewModel(engine, 'CounterViewModel');

    // Queue some effects
    queueEffect(engine, 'effect_1');
    queueEffect(engine, 'effect_2');

    // Drain and verify
    const effects = drainEffects(engine);
    expect(Array.isArray(effects)).toBe(true);
    expect(effects).toContain('effect_1');
    expect(effects).toContain('effect_2');

    // Queue should be empty after drain
    const emptyEffects = drainEffects(engine);
    expect(emptyEffects).toEqual([]);
  });

  test('TB-24: LoginViewModel properties and commands', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;
    const getVmProperty = nativeModule.getVmProperty as (engine: object, name: string) => string;
    const setVmProperty = nativeModule.setVmProperty as (
      engine: object,
      name: string,
      value: string,
    ) => void;
    const invokeVmCommand = nativeModule.invokeVmCommand as (
      engine: object,
      name: string,
      args: string | null,
    ) => string;

    const engine = createEngine();
    activateViewModel(engine, 'LoginViewModel');

    // Set username and password
    setVmProperty(engine, 'username', '"testuser"');
    setVmProperty(engine, 'password', '"secret123"');

    // Verify
    expect(JSON.parse(getVmProperty(engine, 'username'))).toBe('testuser');
    expect(JSON.parse(getVmProperty(engine, 'password'))).toBe('secret123');

    // Clear
    invokeVmCommand(engine, 'clear', null);

    // Verify cleared
    expect(JSON.parse(getVmProperty(engine, 'username'))).toBe('');
    expect(JSON.parse(getVmProperty(engine, 'password'))).toBe('');
  });

  test('TB-25: activateViewModel() with unknown type throws error', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const activateViewModel = nativeModule.activateViewModel as (
      engine: object,
      name: string,
    ) => void;

    const engine = createEngine();

    expect(() => activateViewModel(engine, 'UnknownViewModel')).toThrow(
      /not found|UnknownViewModel/i,
    );
  });

  test('TB-26: getVmProperty() without active ViewModel throws error', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const getVmProperty = nativeModule.getVmProperty as (engine: object, name: string) => string;

    const engine = createEngine();

    expect(() => getVmProperty(engine, 'count')).toThrow(/no active|activateViewModel/i);
  });
});

describe('host/napi-bindings (skip check)', () => {
  test('check native module availability', () => {
    if (!isNativeModuleAvailable) {
      console.log(
        '⚠️  Native module not built. Run `bunx @napi-rs/cli@3.0.0-alpha.65 build --manifest-path ../../crates/qmlts-host/Cargo.toml --package-json-path package.json --output-dir . --platform --release --no-js` in native/npm/qmlts-host/.',
      );
      console.log('   Skipping native binding tests.');
    } else {
      console.log(`✓ Native module found at: ${nativeModulePath}`);
    }
    // This test always passes - it's just for visibility
    expect(true).toBe(true);
  });
});
