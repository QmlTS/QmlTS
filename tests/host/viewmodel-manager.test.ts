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
});

describe('host/viewmodel-manager (skip check)', () => {
  test('check native module availability', () => {
    if (!isNativeModuleAvailable) {
      console.log('⚠️  Native module not built. Skipping ViewModelManager tests.');
    }
    expect(true).toBe(true);
  });
});
