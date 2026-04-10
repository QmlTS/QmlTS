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

async function flushJsCallbacks(): Promise<void> {
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 0));
}

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
  // §7 List model
  'createListModel',
  'destroyListModel',
  'setListData',
  'insertRows',
  'removeRows',
  'updateRow',
  'moveRows',
  'rowCount',
  'getRow',
  // §8 Hot reload
  'captureSnapshot',
  'reloadQml',
  'restoreSnapshot',
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

  test('TB-29: registerInvokeHandler receives command dispatch from QML', async () => {
    const createEngine = nativeModule.createEngine as () => object;
    const destroyEngine = nativeModule.destroyEngine as (engine: object) => void;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const registerInvokeHandler = nativeModule.registerInvokeHandler as (
      engine: object,
      callback: (error: Error | null, className: string, commandId: number) => void,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const calls: Array<[string, number]> = [];
    const errors: Array<Error | null> = [];
    const engine = createEngine();
    try {
      registerViewModel(engine, 'LoginViewModel');

      registerInvokeHandler(engine, (error, className, commandId) => {
        errors.push(error);
        calls.push([className, commandId]);
      });

      loadString(
        engine,
        [
          'import QtQuick',
          'Item {',
          '  Component.onCompleted: __qmlts.invoke(927957157)',
          '}',
        ].join('\n'),
      );
      processEvents(engine);
      await flushJsCallbacks();

      // The invoke_count on the runtime object confirms QML-side execution
      expect(activeRuntimeI32Property(engine, 'invokeCount')).toBe(1);
      expect(errors).toEqual([null]);
      expect(calls).toEqual([['LoginViewModel', 927957157]]);
    } finally {
      destroyEngine(engine);
    }
  });

  test('TB-30: registerLifecycleHandler receives onMounted from QML', async () => {
    const createEngine = nativeModule.createEngine as () => object;
    const destroyEngine = nativeModule.destroyEngine as (engine: object) => void;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const registerLifecycleHandler = nativeModule.registerLifecycleHandler as (
      engine: object,
      callback: (error: Error | null, className: string, event: string) => void,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const activeRuntimeI32Property = nativeModule.activeRuntimeI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const calls: Array<[string, string]> = [];
    const errors: Array<Error | null> = [];
    const engine = createEngine();
    try {
      registerViewModel(engine, 'LoginViewModel');

      registerLifecycleHandler(engine, (error, className, event) => {
        errors.push(error);
        calls.push([className, event]);
      });

      loadString(
        engine,
        ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.onMounted()', '}'].join(
          '\n',
        ),
      );
      processEvents(engine);
      await flushJsCallbacks();

      expect(activeRuntimeI32Property(engine, 'mountedCount')).toBe(1);
      expect(errors).toEqual([null]);
      expect(calls).toEqual([['LoginViewModel', 'onMounted']]);
    } finally {
      destroyEngine(engine);
    }
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

  test('TB-35: full golden flow: register, sync, invoke, lifecycle, effect', async () => {
    const createEngine = nativeModule.createEngine as () => object;
    const destroyEngine = nativeModule.destroyEngine as (engine: object) => void;
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
      callback: (error: Error | null, className: string, commandId: number) => void,
    ) => void;
    const registerLifecycleHandler = nativeModule.registerLifecycleHandler as (
      engine: object,
      callback: (error: Error | null, className: string, event: string) => void,
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
    const commandCalls: Array<[string, number]> = [];
    const lifecycleCalls: Array<[string, string]> = [];
    const commandErrors: Array<Error | null> = [];
    const lifecycleErrors: Array<Error | null> = [];

    try {
      registerViewModel(engine, 'LoginViewModel');

      // Register handlers
      registerInvokeHandler(engine, (error, className, commandId) => {
        commandErrors.push(error);
        commandCalls.push([className, commandId]);
      });
      registerLifecycleHandler(engine, (error, className, event) => {
        lifecycleErrors.push(error);
        lifecycleCalls.push([className, event]);
      });

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
      await flushJsCallbacks();

      // Verify state was synced
      expect(getProperty(engine, 'LoginViewModel', 'username')).toBe('"golden-user"');

      // Verify invoke + lifecycle hooks fired
      expect(activeRuntimeI32Property(engine, 'invokeCount')).toBe(1);
      expect(activeRuntimeI32Property(engine, 'mountedCount')).toBe(1);
      expect(commandErrors).toEqual([null]);
      expect(lifecycleErrors).toEqual([null]);
      expect(commandCalls).toEqual([['LoginViewModel', 927957157]]);
      expect(lifecycleCalls).toEqual([['LoginViewModel', 'onMounted']]);

      // Emit an effect — should not throw
      expect(() =>
        emitEffect(engine, 'LoginViewModel', 'onLoginCompleted', '[true]'),
      ).not.toThrow();
    } finally {
      destroyEngine(engine);
    }
  });

  test('TB-36: emitEffect() rejects multi-argument payloads instead of dropping extras', () => {
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

    expect(() => emitEffect(engine, 'LoginViewModel', 'onLoginCompleted', '[true,false]')).toThrow(
      /failed to emit signal|internal/i,
    );
  });

  // ─────────────────────────────────────────────────────────────────────
  //  §7 List Model Tests
  // ─────────────────────────────────────────────────────────────────────

  test('TB-37: createListModel returns a model ID', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name","value"]}');
    expect(typeof modelId).toBe('number');
    expect(modelId).toBeGreaterThanOrEqual(0);
  });

  test('TB-38: setListData + rowCount round-trip', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    setListData(engine, modelId, '[{"name":"a"},{"name":"b"}]');
    expect(rowCount(engine, modelId)).toBe(2);
  });

  test('TB-38a: createListModel rejects invalid role definitions', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;

    const engine = createEngine();
    expect(() => createListModel(engine, '{"roles":["name","name"]}')).toThrow();
    expect(() => createListModel(engine, '{"roles":[""]}')).toThrow();
    expect(() => createListModel(engine, '{"roles":["name",42]}')).toThrow();
  });

  test('TB-38b: setListData rejects non-array JSON', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    expect(() => setListData(engine, modelId, '{"name":"not-an-array"}')).toThrow();
  });

  test('TB-39: insertRows increases count', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const insertRows = nativeModule.insertRows as (
      engine: object,
      modelId: number,
      index: number,
      rows: string,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    expect(rowCount(engine, modelId)).toBe(0);
    insertRows(engine, modelId, 0, '[{"name":"a"},{"name":"b"}]');
    expect(rowCount(engine, modelId)).toBe(2);
  });

  test('TB-40: removeRows decreases count', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const removeRows = nativeModule.removeRows as (
      engine: object,
      modelId: number,
      index: number,
      count: number,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    setListData(engine, modelId, '[{"name":"a"},{"name":"b"},{"name":"c"}]');
    expect(rowCount(engine, modelId)).toBe(3);
    removeRows(engine, modelId, 0, 1);
    expect(rowCount(engine, modelId)).toBe(2);
  });

  test('TB-41: updateRow does not change count', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const updateRow = nativeModule.updateRow as (
      engine: object,
      modelId: number,
      index: number,
      data: string,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    setListData(engine, modelId, '[{"name":"a"}]');
    updateRow(engine, modelId, 0, '{"name":"updated"}');
    expect(rowCount(engine, modelId)).toBe(1);
  });

  test('TB-42: moveRows does not change count', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const moveRows = nativeModule.moveRows as (
      engine: object,
      modelId: number,
      source: number,
      dest: number,
      count: number,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    setListData(engine, modelId, '[{"name":"a"},{"name":"b"},{"name":"c"}]');
    moveRows(engine, modelId, 0, 2, 1);
    expect(rowCount(engine, modelId)).toBe(3);
  });

  test('TB-43: getRow returns JSON data', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const getRow = nativeModule.getRow as (
      engine: object,
      modelId: number,
      index: number,
    ) => string;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name","value"]}');
    setListData(engine, modelId, '[{"name":"alice","value":"100"}]');
    const row = JSON.parse(getRow(engine, modelId, 0));
    expect(row.name).toBe('alice');
    expect(row.value).toBe('100');
  });

  test('TB-43a: getRow preserves valid empty-object rows', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const setListData = nativeModule.setListData as (
      engine: object,
      modelId: number,
      data: string,
    ) => void;
    const getRow = nativeModule.getRow as (
      engine: object,
      modelId: number,
      index: number,
    ) => string;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    setListData(engine, modelId, '[{}]');
    expect(JSON.parse(getRow(engine, modelId, 0))).toEqual({});
    expect(() => getRow(engine, modelId, 1)).toThrow();
  });

  test('TB-44: destroyListModel does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const destroyListModel = nativeModule.destroyListModel as (
      engine: object,
      modelId: number,
    ) => void;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    expect(() => destroyListModel(engine, modelId)).not.toThrow();
  });

  test('TB-45: operations on destroyed list model throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const createListModel = nativeModule.createListModel as (
      engine: object,
      schemaJson: string,
    ) => number;
    const destroyListModel = nativeModule.destroyListModel as (
      engine: object,
      modelId: number,
    ) => void;
    const rowCount = nativeModule.rowCount as (engine: object, modelId: number) => number;

    const engine = createEngine();
    const modelId = createListModel(engine, '{"roles":["name"]}');
    destroyListModel(engine, modelId);
    expect(() => rowCount(engine, modelId)).toThrow();
  });

  test('TB-46: multi-param emitEffect with SearchViewModel does not throw', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const emitEffect = nativeModule.emitEffect as (
      engine: object,
      className: string,
      effectName: string,
      payloadJson?: string,
    ) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const rootStringProperty = nativeModule.rootStringProperty as (
      engine: object,
      name: string,
    ) => string | null;
    const rootI32Property = nativeModule.rootI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const engine = createEngine();
    registerViewModel(engine, 'SearchViewModel');
    loadString(
      engine,
      [
        'import QtQuick',
        'Item {',
        '  property string receivedQuery: ""',
        '  property int receivedCount: -1',
        '  Connections {',
        '    target: __qmlts',
        '    function onOnSearchCompleted(query, resultCount) {',
        '      receivedQuery = query',
        '      receivedCount = resultCount',
        '    }',
        '  }',
        '}',
      ].join('\n'),
    );
    processEvents(engine);

    expect(() =>
      emitEffect(engine, 'SearchViewModel', 'onSearchCompleted', '["test query", 42]'),
    ).not.toThrow();
    processEvents(engine);
    expect(rootStringProperty(engine, 'receivedQuery')).toBe('test query');
    expect(rootI32Property(engine, 'receivedCount')).toBe(42);
  });

  test('TB-46a: multi-param emitEffect rejects wrong payload order/types', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      name: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const emitEffect = nativeModule.emitEffect as (
      engine: object,
      className: string,
      effectName: string,
      payloadJson?: string,
    ) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const rootStringProperty = nativeModule.rootStringProperty as (
      engine: object,
      name: string,
    ) => string | null;
    const rootI32Property = nativeModule.rootI32Property as (
      engine: object,
      name: string,
    ) => number | null;

    const engine = createEngine();
    registerViewModel(engine, 'SearchViewModel');
    loadString(
      engine,
      [
        'import QtQuick',
        'Item {',
        '  property string receivedQuery: "unset"',
        '  property int receivedCount: -1',
        '  Connections {',
        '    target: __qmlts',
        '    function onOnSearchCompleted(query, resultCount) {',
        '      receivedQuery = query',
        '      receivedCount = resultCount',
        '    }',
        '  }',
        '}',
      ].join('\n'),
    );
    processEvents(engine);

    expect(() =>
      emitEffect(engine, 'SearchViewModel', 'onSearchCompleted', '[42,"wrong-order"]'),
    ).toThrow(/failed to emit signal|internal/i);
    processEvents(engine);
    expect(rootStringProperty(engine, 'receivedQuery')).toBe('unset');
    expect(rootI32Property(engine, 'receivedCount')).toBe(-1);
  });

  // ─────────────────────────────────────────────────────────────────────
  //  §8 Hot Reload
  // ─────────────────────────────────────────────────────────────────────

  test('TB-47: captureSnapshot returns valid JSON', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const captureSnapshot = nativeModule.captureSnapshot as (engine: object) => string;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    loadString(engine, 'import QtQuick\nItem { }');
    processEvents(engine);

    const snapshot = captureSnapshot(engine);
    expect(typeof snapshot).toBe('string');
    const parsed = JSON.parse(snapshot);
    expect(parsed).toHaveProperty('window');
    expect(parsed).toHaveProperty('focusId');
  });

  test('TB-48: captureSnapshot fails before QML loaded', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const captureSnapshot = nativeModule.captureSnapshot as (engine: object) => string;

    const engine = createEngine();
    expect(() => captureSnapshot(engine)).toThrow();
  });

  test('TB-49: reloadQml succeeds after load', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const reloadQml = nativeModule.reloadQml as (engine: object, source: string) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    loadString(engine, 'import QtQuick\nItem { }');
    processEvents(engine);

    expect(() =>
      reloadQml(engine, 'import QtQuick\nRectangle { width: 200; height: 100 }'),
    ).not.toThrow();
    processEvents(engine);
  });

  test('TB-50: reloadQml fails before QML loaded', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const reloadQml = nativeModule.reloadQml as (engine: object, source: string) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    expect(() => reloadQml(engine, 'import QtQuick\nItem { }')).toThrow();
  });

  test('TB-51: restoreSnapshot succeeds after load', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const captureSnapshot = nativeModule.captureSnapshot as (engine: object) => string;
    const restoreSnapshot = nativeModule.restoreSnapshot as (
      engine: object,
      snapshot: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    loadString(engine, 'import QtQuick\nItem { }');
    processEvents(engine);

    const snapshot = captureSnapshot(engine);
    expect(() => restoreSnapshot(engine, snapshot)).not.toThrow();
  });

  test('TB-52: full capture-reload-restore cycle', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const syncState = nativeModule.syncState as (
      engine: object,
      className: string,
      prop: string,
      val: string,
    ) => void;
    const getProperty = nativeModule.getProperty as (
      engine: object,
      className: string,
      prop: string,
    ) => string;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const captureSnapshot = nativeModule.captureSnapshot as (engine: object) => string;
    const reloadQml = nativeModule.reloadQml as (engine: object, source: string) => void;
    const restoreSnapshot = nativeModule.restoreSnapshot as (
      engine: object,
      snapshot: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    syncState(engine, 'LoginViewModel', 'username', '"alice"');
    loadString(engine, 'import QtQuick\nItem { }');
    processEvents(engine);

    // Step 1: Capture
    const snapshot = captureSnapshot(engine);

    // Step 2: Reload
    reloadQml(engine, 'import QtQuick\nRectangle { width: 320; height: 240 }');
    processEvents(engine);

    // Step 3: Rehydrate (re-sync)
    syncState(engine, 'LoginViewModel', 'username', '"alice"');

    // Step 4: Restore
    restoreSnapshot(engine, snapshot);
    processEvents(engine);

    // Verify state survives
    const val = getProperty(engine, 'LoginViewModel', 'username');
    expect(val).toBe('"alice"');
  });

  test('TB-53: consecutive reloads remain stable', () => {
    const createEngine = nativeModule.createEngine as () => object;
    const registerViewModel = nativeModule.registerViewModel as (
      engine: object,
      className: string,
    ) => void;
    const loadString = nativeModule.loadString as (engine: object, qml: string) => void;
    const processEvents = nativeModule.processEvents as (engine: object) => void;
    const captureSnapshot = nativeModule.captureSnapshot as (engine: object) => string;
    const reloadQml = nativeModule.reloadQml as (engine: object, source: string) => void;
    const restoreSnapshot = nativeModule.restoreSnapshot as (
      engine: object,
      snapshot: string,
    ) => void;

    const engine = createEngine();
    registerViewModel(engine, 'LoginViewModel');
    loadString(engine, 'import QtQuick\nItem { }');
    processEvents(engine);

    for (let i = 0; i < 3; i++) {
      const snap = captureSnapshot(engine);
      reloadQml(engine, `import QtQuick\nItem { property int idx: ${i} }`);
      processEvents(engine);
      restoreSnapshot(engine, snap);
      processEvents(engine);
    }
    // If we got here without throwing, consecutive reloads are stable
    expect(true).toBe(true);
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
