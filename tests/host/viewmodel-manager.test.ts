/**
 * Unit tests for ViewModelManager TypeScript class.
 *
 * These tests require the native module to be built.
 * If the module is not built, tests will be skipped.
 */

import { beforeAll, describe, expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const nativeModulePaths = [
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/qmlts-host.win32-x64-msvc.node', import.meta.url),
  ),
  fileURLToPath(
    new URL('../../native/npm/qmlts-host/qmlts-host.linux-x64-gnu.node', import.meta.url),
  ),
];

const isNativeModuleAvailable = nativeModulePaths.some((p) => existsSync(p));

async function flushJsCallbacks(): Promise<void> {
  await Promise.resolve();
  await new Promise((resolve) => setTimeout(resolve, 0));
}

describe.skipIf(!isNativeModuleAvailable)('host/viewmodel-manager', () => {
  let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;
  let ViewModelManager: typeof import('../../native/npm/qmlts-host/src/viewmodel-manager').ViewModelManager;

  const loginSchema = {
    className: 'LoginViewModel',
    states: [
      { name: 'username', deferred: false },
      { name: 'password', deferred: false },
      { name: 'isLoading', deferred: false },
      { name: 'lazyData', deferred: true },
    ],
    commands: [{ name: 'login', commandId: 927957157 }],
    effects: [{ name: 'onLoginCompleted', effectId: 1633635556 }],
    lifecycle: { onMounted: true, onUnmounting: false },
  };

  beforeAll(async () => {
    const hostMod = await import('../../native/npm/qmlts-host/src/qmlts-host.ts');
    const vmMod = await import('../../native/npm/qmlts-host/src/viewmodel-manager.ts');
    QmltsHost = hostMod.QmltsHost;
    ViewModelManager = vmMod.ViewModelManager;
  });

  test('TV-01: register adds a ViewModel to the manager', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = { username: 'u', password: 'p', isLoading: false };
    manager.register(loginSchema, instance);

    expect(manager.has('LoginViewModel')).toBe(true);
    expect(manager.classNames).toContain('LoginViewModel');
    expect(manager.count).toBe(1);
    expect(host.getProperty<string>('LoginViewModel', 'username')).toBe('u');

    host.dispose();
  });

  test('TV-02: unregister removes TS-side registration', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = { username: '', password: '' };
    manager.register(loginSchema, instance);
    expect(manager.has('LoginViewModel')).toBe(true);

    const removed = manager.unregister('LoginViewModel');
    expect(removed).toBe(true);
    expect(manager.has('LoginViewModel')).toBe(false);
    expect(manager.count).toBe(0);

    host.dispose();
  });

  test('TV-03: unregister returns false for unknown class', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    expect(manager.unregister('NoSuch')).toBe(false);
    host.dispose();
  });

  test('TV-04: sync() sends non-deferred state to host', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = {
      username: 'sync-test',
      password: 'pw',
      isLoading: true,
      lazyData: 'should-be-skipped',
    };
    manager.register(loginSchema, instance);
    manager.sync('LoginViewModel');

    // Verify the non-deferred properties were synced
    expect(host.getProperty<string>('LoginViewModel', 'username')).toBe('sync-test');
    expect(host.getProperty<string>('LoginViewModel', 'password')).toBe('pw');
    expect(host.getProperty<boolean>('LoginViewModel', 'isLoading')).toBe(true);

    host.dispose();
  });

  test('TV-05: sync() only writes schema-declared non-deferred states', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = {
      username: 'u',
      password: 'p',
      isLoading: false,
      lazyData: 'deferred-value',
      _internalHelper: 'hidden',
      computedValue: 123,
    };
    manager.register(loginSchema, instance);
    manager.sync('LoginViewModel');

    expect(host.getProperty<string>('LoginViewModel', 'username')).toBe('u');
    expect(() => host.getProperty('LoginViewModel', 'computedValue')).toThrow(/not found/i);
    expect(() => host.getProperty('LoginViewModel', '_internalHelper')).toThrow(/not found/i);

    host.dispose();
  });

  test('TV-06: sync() throws for unregistered class', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    expect(() => manager.sync('NoSuch')).toThrow(/not registered/i);
    host.dispose();
  });

  test('TV-07: sync() reflects current instance state', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = {
      username: 'initial',
      password: 'pw1',
      isLoading: false,
    };
    manager.register(loginSchema, instance);
    manager.sync('LoginViewModel');

    expect(manager.getProperty<string>('LoginViewModel', 'username')).toBe('initial');

    // Mutate the instance and re-sync
    instance.username = 'updated';
    instance.isLoading = true;
    manager.sync('LoginViewModel');

    expect(manager.getProperty<string>('LoginViewModel', 'username')).toBe('updated');
    expect(manager.getProperty<boolean>('LoginViewModel', 'isLoading')).toBe(true);

    host.dispose();
  });

  test('TV-08: sync() skips undefined properties gracefully', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    // Only username is set, password and isLoading are undefined
    const instance: Record<string, unknown> = { username: 'only-this' };
    manager.register(loginSchema, instance);

    // Should not throw — undefined properties are simply skipped
    expect(() => manager.sync('LoginViewModel')).not.toThrow();
    expect(host.getProperty<string>('LoginViewModel', 'username')).toBe('only-this');

    host.dispose();
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Step 4: Command dispatch, lifecycle, and effect tests
  // ─────────────────────────────────────────────────────────────────────

  test('TV-09: register with command handler receives dispatched commands', async () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const calls: Array<[string, number]> = [];
    try {
      const instance = { username: '', password: '', isLoading: false };
      manager.register(loginSchema, instance, {
        onCommand: (name, id) => {
          calls.push([name, id]);
        },
      });

      // Load QML that invokes a command
      host.loadString(
        [
          'import QtQuick',
          'Item {',
          '  Component.onCompleted: __qmlts.invoke(927957157)',
          '}',
        ].join('\n'),
      );
      host.processEvents();
      await flushJsCallbacks();

      expect(calls).toEqual([['login', 927957157]]);
    } finally {
      host.dispose();
    }
  });

  test('TV-10: register with lifecycle handler', async () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const events: string[] = [];
    try {
      const instance = { username: '', password: '', isLoading: false };
      manager.register(loginSchema, instance, {
        onLifecycle: (event) => {
          events.push(event);
        },
      });

      host.loadString(
        ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.onMounted()', '}'].join(
          '\n',
        ),
      );
      host.processEvents();
      await flushJsCallbacks();

      expect(events).toEqual(['onMounted']);
    } finally {
      host.dispose();
    }
  });

  test('TV-11: emitEffect through manager', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    try {
      const instance = { username: '', password: '', isLoading: false };
      manager.register(loginSchema, instance);

      expect(() => manager.emitEffect('LoginViewModel', 'onLoginCompleted', true)).not.toThrow();
    } finally {
      host.dispose();
    }
  });

  test('TV-12: emitEffect throws for unregistered class', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    expect(() => manager.emitEffect('NoSuch', 'onLoginCompleted', true)).toThrow(/not registered/i);

    host.dispose();
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Rehydrate (§8 Hot Reload support)
  // ─────────────────────────────────────────────────────────────────────

  test('TV-13: rehydrate re-syncs all registered ViewModels', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    const instance = {
      username: 'alice',
      password: 'secret',
      isLoading: false,
    };
    manager.register('LoginViewModel', loginSchema, instance);

    // Mutate local state through the instance reference
    instance.username = 'bob';
    manager.sync('LoginViewModel');

    // Rehydrate should re-sync without error
    expect(() => manager.rehydrate()).not.toThrow();

    // Property should still be readable
    const val = manager.getProperty<string>('LoginViewModel', 'username');
    expect(val).toBe('bob');

    host.dispose();
  });

  test('TV-14: rehydrate with no registrations does not throw', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    expect(() => manager.rehydrate()).not.toThrow();

    host.dispose();
  });
});

describe('host/viewmodel-manager (skip check)', () => {
  test('check native module availability', () => {
    if (!isNativeModuleAvailable) {
      console.log('⚠️  Native module not built. Skipping ViewModelManager tests.');
    }
    expect(true).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────
//  DevServer tests
// ─────────────────────────────────────────────────────────────────────

describe.skipIf(!isNativeModuleAvailable)('host/dev-server', () => {
  let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;
  let ViewModelManager: typeof import('../../native/npm/qmlts-host/src/viewmodel-manager').ViewModelManager;
  let DevServer: typeof import('../../native/npm/qmlts-host/src/dev-server').DevServer;

  const loginSchema = {
    className: 'LoginViewModel',
    states: [
      { name: 'username', deferred: false },
      { name: 'password', deferred: false },
    ],
    commands: [],
    effects: [],
    lifecycle: { onMounted: false, onUnmounting: false },
  };

  beforeAll(async () => {
    const hostMod = await import('../../native/npm/qmlts-host/src/qmlts-host.ts');
    const vmMod = await import('../../native/npm/qmlts-host/src/viewmodel-manager.ts');
    const dsMod = await import('../../native/npm/qmlts-host/src/dev-server.ts');
    QmltsHost = hostMod.QmltsHost;
    ViewModelManager = vmMod.ViewModelManager;
    DevServer = dsMod.DevServer;
  });

  test('DS-01: DevServer.reload() performs full four-step cycle', async () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    manager.register(loginSchema, { username: 'alice', password: 'pw' });
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    const devServer = new DevServer(host, manager);

    const events: string[] = [];
    devServer.on('reload-start', () => events.push('start'));
    devServer.on('reload-complete', () => events.push('complete'));

    await devServer.reload('import QtQuick\nRectangle { width: 100; height: 100 }');

    expect(events).toContain('start');
    expect(events).toContain('complete');

    // State should survive the reload
    const val = host.getProperty<string>('LoginViewModel', 'username');
    expect(val).toBe('alice');

    host.dispose();
  });

  test('DS-02: DevServer.reload() emits reload-error on failure', async () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    manager.register(loginSchema, { username: '', password: '' });
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    const devServer = new DevServer(host, manager);

    const errors: unknown[] = [];
    devServer.on('reload-error', (...args) => errors.push(...args));

    // Invalid QML should cause a reload error
    try {
      await devServer.reload('this is not valid QML at all {{{');
    } catch {
      // expected
    }

    expect(errors.length).toBeGreaterThan(0);
    host.dispose();
  });

  test('DS-03: DevServer start/stop lifecycle', () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);
    const devServer = new DevServer(host, manager);

    expect(devServer.isRunning).toBe(false);

    // stop when not running should not throw
    devServer.stop();
    expect(devServer.isRunning).toBe(false);

    host.dispose();
  });

  test('DS-04: consecutive reloads are stable', async () => {
    const host = new QmltsHost();
    const manager = new ViewModelManager(host);

    manager.register(loginSchema, { username: 'test', password: '' });
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    const devServer = new DevServer(host, manager);

    for (let i = 0; i < 3; i++) {
      await devServer.reload(`import QtQuick\nItem { property int idx: ${i} }`);
    }

    // State should survive all reloads
    const val = host.getProperty<string>('LoginViewModel', 'username');
    expect(val).toBe('test');

    host.dispose();
  });
});
