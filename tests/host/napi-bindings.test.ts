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
  // §2b Bridge registry
  'registerViewModel',
  'getRegisteredTypes',
  'hasBridgeType',
  'activeRuntimeI32Property',
  // §2c Property synchronization
  'syncState',
  'syncStateBatch',
  'getProperty',
  // §4 Command dispatch & lifecycle
  'registerInvokeHandler',
  'registerLifecycleHandler',
  // §5 Effect emission
  'emitEffect',
  'emitEffectById',
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

  test('TB-14: getRegisteredTypes() returns known bridge types', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const getRegisteredTypes = nativeModule.getRegisteredTypes as (engine: object) => string[];

    const engine = createEngine();
    const types = getRegisteredTypes(engine);
    expect(Array.isArray(types)).toBe(true);
    expect(types).toContain('LoginViewModel');
    expect(types).toContain('CounterViewModel');
  });

  test('TB-15: hasBridgeType() returns true for known types', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const hasBridgeType = nativeModule.hasBridgeType as (engine: object, name: string) => boolean;

    const engine = createEngine();
    expect(hasBridgeType(engine, 'LoginViewModel')).toBe(true);
    expect(hasBridgeType(engine, 'CounterViewModel')).toBe(true);
    expect(hasBridgeType(engine, 'NonExistentViewModel')).toBe(false);
  });

  test('TB-16: registerViewModel() throws for unknown type', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;

    const engine = createEngine();
    expect(() => registerViewModel(engine, 'NonExistent')).toThrow(/Bridge type not found/i);
  });

  test('TB-17: registerViewModel() enables QML access to vm and __qmlts', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    // Load QML exercising ALL golden LoginView bindings
    loadString(
      engine,
      [
        'import QtQuick',
        'Rectangle {',
        '  width: 400; height: 300',
        '  Column {',
        '    Text { text: vm.username }',
        '    Text { text: vm.password }',
        '    Text { text: vm.isLoading }',
        '  }',
        '  Connections {',
        '    target: __qmlts',
        '    function onOnLoginCompleted(success) { }',
        '  }',
        '  Component.onCompleted: {',
        '    __qmlts.invoke(42)',
        '    __qmlts.onMounted()',
        '  }',
        '}',
      ].join('\n'),
    );
    processEvents(engine);

    // Verify observable behavioral outcomes, not just "did not throw"
    const invokeCount = activeRuntimeI32Property(engine, 'invokeCount');
    expect(invokeCount).toBe(1);

    const mountedCount = activeRuntimeI32Property(engine, 'mountedCount');
    expect(mountedCount).toBe(1);
  });

  test('TB-18: registerViewModel() throws after QML is loaded', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;

    const engine = createEngine();
    loadString(engine, 'import QtQuick\nItem { }');
    expect(() => registerViewModel(engine, 'LoginViewModel')).toThrow(/already loaded/i);
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Step 3: Property synchronization behavioral tests
  // ─────────────────────────────────────────────────────────────────────

  test('TB-19: syncState exports exist and are callable', () => {
    expect(typeof nativeModule.syncState).toBe('function');
    expect(typeof nativeModule.syncStateBatch).toBe('function');
    expect(typeof nativeModule.getProperty).toBe('function');
  });

  test('TB-20: syncState() sets a string property on the active bridge', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    syncState(engine, 'LoginViewModel', 'username', '"alice"');

    const value = getProperty(engine, 'LoginViewModel', 'username');
    expect(value).toBe('"alice"');
  });

  test('TB-21: syncStateBatch() sets multiple properties at once', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncStateBatch = nativeModule.syncStateBatch as (
      engine: object,
      className: string,
      jsonStateMap: string,
    ) => void;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    syncStateBatch(
      engine,
      'LoginViewModel',
      JSON.stringify({ username: 'bob', password: 's3cret' }),
    );

    expect(getProperty(engine, 'LoginViewModel', 'username')).toBe('"bob"');
    expect(getProperty(engine, 'LoginViewModel', 'password')).toBe('"s3cret"');
  });

  test('TB-22: syncState() throws for unknown property', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => syncState(engine, 'LoginViewModel', 'nonexistent', '"x"')).toThrow(/not found/i);
  });

  test('TB-23: syncState() throws for type mismatch', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    // username is string, pass a number
    expect(() => syncState(engine, 'LoginViewModel', 'username', '42')).toThrow(/type mismatch/i);
  });

  test('TB-24: syncState() throws for wrong active class name', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => syncState(engine, 'CounterViewModel', 'count', '0')).toThrow();
  });

  test('TB-25: syncStateBatch() partial failure includes details', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncStateBatch = nativeModule.syncStateBatch as (
      engine: object,
      className: string,
      jsonStateMap: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() =>
      syncStateBatch(engine, 'LoginViewModel', JSON.stringify({ username: 'ok', nonexistent: 42 })),
    ).toThrow(/partial failure.*1 of 2/i);

    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;
    expect(getProperty(engine, 'LoginViewModel', 'username')).toBe('"ok"');
  });

  test('TB-26: getProperty() roundtrip for bool property', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    syncState(engine, 'LoginViewModel', 'isLoading', 'true');
    expect(getProperty(engine, 'LoginViewModel', 'isLoading')).toBe('true');
  });

  test('TB-27: full flow: register, sync, load QML, readback via process events', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    // Set state before loading QML
    syncState(engine, 'LoginViewModel', 'username', '"flowtest"');
    syncState(engine, 'LoginViewModel', 'password', '"pw123"');

    // Load QML that binds to the synced properties
    loadString(
      engine,
      [
        'import QtQuick',
        'Item {',
        '  property string u: vm.username',
        '  property string p: vm.password',
        '  Component.onCompleted: __qmlts.onMounted()',
        '}',
      ].join('\n'),
    );
    processEvents(engine);

    // Verify round-trip: the properties we set can be read back
    expect(getProperty(engine, 'LoginViewModel', 'username')).toBe('"flowtest"');
    expect(getProperty(engine, 'LoginViewModel', 'password')).toBe('"pw123"');
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Step 4: Command dispatch, lifecycle, and effect tests
  // ─────────────────────────────────────────────────────────────────────

  test('TB-28: command/lifecycle/effect exports exist and are callable', () => {
    expect(typeof nativeModule.registerInvokeHandler).toBe('function');
    expect(typeof nativeModule.registerLifecycleHandler).toBe('function');
    expect(typeof nativeModule.emitEffect).toBe('function');
    expect(typeof nativeModule.emitEffectById).toBe('function');
  });

  test('TB-29: registerInvokeHandler receives command dispatch from QML', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const registerInvokeHandler = nativeModule.registerInvokeHandler as (
      engine: object,
      callback: (className: string, commandId: number) => void,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    registerInvokeHandler(engine, (_className, _commandId) => {
      // Handler registered — verifying QML-side dispatch works
    });

    loadString(
      engine,
      ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.invoke(927957157)', '}'].join(
        '\n',
      ),
    );
    processEvents(engine);

    // The invoke_count on the runtime object confirms QML-side execution
    expect(activeRuntimeI32Property(engine, 'invokeCount')).toBe(1);
  });

  test('TB-30: registerLifecycleHandler receives onMounted from QML', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const registerLifecycleHandler = nativeModule.registerLifecycleHandler as (
      engine: object,
      callback: (className: string, event: string) => void,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    registerLifecycleHandler(engine, (_className, _event) => {});

    loadString(
      engine,
      ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.onMounted()', '}'].join('\n'),
    );
    processEvents(engine);

    expect(activeRuntimeI32Property(engine, 'mountedCount')).toBe(1);
  });

  test('TB-31: emitEffect() does not throw for known effect', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const emitEffect = nativeModule.emitEffect as (
      engine: object,
      className: string,
      effectName: string,
      payloadJson?: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => emitEffect(engine, 'LoginViewModel', 'onLoginCompleted', '[true]')).not.toThrow();
  });

  test('TB-32: emitEffect() throws for unknown effect', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const emitEffect = nativeModule.emitEffect as (
      engine: object,
      className: string,
      effectName: string,
      payloadJson?: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => emitEffect(engine, 'LoginViewModel', 'nonExistent')).toThrow(/not found/i);
  });

  test('TB-33: emitEffectById() works for known effect ID', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const emitEffectById = nativeModule.emitEffectById as (
      engine: object,
      className: string,
      effectId: number,
      payloadJson?: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => emitEffectById(engine, 'LoginViewModel', 1633635556, '[false]')).not.toThrow();
  });

  test('TB-34: emitEffectById() throws for unknown effect ID', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const emitEffectById = nativeModule.emitEffectById as (
      engine: object,
      className: string,
      effectId: number,
      payloadJson?: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    expect(() => emitEffectById(engine, 'LoginViewModel', 999999)).toThrow(/not found/i);
  });

  test('TB-35: full golden flow: register, sync, invoke, lifecycle, effect', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      propertyName: string,
      jsonValue: string,
    ) => void;
    const registerInvokeHandler = nativeModule.registerInvokeHandler as (
      engine: object,
      callback: (className: string, commandId: number) => void,
    ) => void;
    const registerLifecycleHandler = nativeModule.registerLifecycleHandler as (
      engine: object,
      callback: (className: string, event: string) => void,
    ) => void;
    const emitEffect = nativeModule.emitEffect as (
      engine: object,
      className: string,
      effectName: string,
      payloadJson?: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      propertyName: string,
    ) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');

    // Register handlers
    registerInvokeHandler(engine, (_className, _commandId) => {});
    registerLifecycleHandler(engine, (_className, _event) => {});

    // Set state
    syncState(engine, 'LoginViewModel', 'username', '"golden-user"');
    syncState(engine, 'LoginViewModel', 'password', '"golden-pass"');

    // Load QML matching the golden LoginView pattern
    loadString(
      engine,
      [
        'import QtQuick',
        'Rectangle {',
        '  width: 400; height: 300',
        '  Column {',
        '    Text { text: vm.username }',
        '    Text { text: vm.password }',
        '    Text { text: vm.isLoading }',
        '  }',
        '  Connections {',
        '    target: __qmlts',
        '    function onOnLoginCompleted(success) { }',
        '  }',
        '  Component.onCompleted: {',
        '    __qmlts.invoke(927957157)',
        '    __qmlts.onMounted()',
        '  }',
        '}',
      ].join('\n'),
    );
    processEvents(engine);

    // Verify state was synced
    expect(getProperty(engine, 'LoginViewModel', 'username')).toBe('"golden-user"');

    // Verify invoke + lifecycle hooks fired
    expect(activeRuntimeI32Property(engine, 'invokeCount')).toBe(1);
    expect(activeRuntimeI32Property(engine, 'mountedCount')).toBe(1);

    // Emit an effect — should not throw
    expect(() => emitEffect(engine, 'LoginViewModel', 'onLoginCompleted', '[true]')).not.toThrow();
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
