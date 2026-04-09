/**
 * Unit tests for QmltsHost TypeScript wrapper.
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

describe.skipIf(!isNativeModuleAvailable)('host/qmlts-host', () => {
  let QmltsHost: typeof import('../../native/npm/qmlts-host/src/qmlts-host').QmltsHost;

  beforeAll(async () => {
    const mod = await import('../../native/npm/qmlts-host/src/qmlts-host.ts');
    QmltsHost = mod.QmltsHost;
  });

  test('TH-01: constructor creates engine, version is accessible', () => {
    const host = new QmltsHost();
    expect(host.isInitialized).toBe(true);
    expect(host.version).toMatch(/^\d+\.\d+\.\d+/);
    host.dispose();
  });

  test('TH-02: dispose() makes subsequent calls throw', () => {
    const host = new QmltsHost();
    host.dispose();
    expect(() => host.version).toThrow(/disposed/i);
    expect(() => host.qtVersion).toThrow(/disposed/i);
  });

  test('TH-03: double dispose does not throw', () => {
    const host = new QmltsHost();
    host.dispose();
    expect(() => host.dispose()).not.toThrow();
  });

  test('TH-04: registerViewModel sets up a bridge', () => {
    const host = new QmltsHost();
    expect(() => host.registerViewModel('LoginViewModel')).not.toThrow();
    host.dispose();
  });

  test('TH-05: registerViewModel throws for unknown type', () => {
    const host = new QmltsHost();
    expect(() => host.registerViewModel('FakeVM')).toThrow(/not found/i);
    host.dispose();
  });

  test('TH-06: syncState + getProperty roundtrip', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');

    host.syncState('LoginViewModel', 'username', 'round-trip');
    const value = host.getProperty<string>('LoginViewModel', 'username');
    expect(value).toBe('round-trip');
    host.dispose();
  });

  test('TH-07: syncStateBatch sets multiple properties', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');

    host.syncStateBatch('LoginViewModel', { username: 'batch-u', password: 'batch-p' });
    expect(host.getProperty<string>('LoginViewModel', 'username')).toBe('batch-u');
    expect(host.getProperty<string>('LoginViewModel', 'password')).toBe('batch-p');
    host.dispose();
  });

  test('TH-08: syncState throws for property not found', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');

    expect(() => host.syncState('LoginViewModel', 'nope', 'x')).toThrow(/not found/i);
    host.dispose();
  });

  test('TH-09: loadString and processEvents work', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.syncState('LoginViewModel', 'username', 'qml-test');

    expect(() =>
      host.loadString('import QtQuick\nItem { property string u: vm.username }'),
    ).not.toThrow();
    host.processEvents();
    host.dispose();
  });

  test('TH-10: isDisposed reflects state', () => {
    const host = new QmltsHost();
    expect(host.isDisposed).toBe(false);
    host.dispose();
    expect(host.isDisposed).toBe(true);
    expect(host.isInitialized).toBe(false);
  });

  test('TH-11: registeredTypes returns known types', () => {
    const host = new QmltsHost();
    const types = host.registeredTypes;
    expect(types).toContain('LoginViewModel');
    expect(types).toContain('CounterViewModel');
    host.dispose();
  });

  test('TH-12: hasBridgeType checks correctly', () => {
    const host = new QmltsHost();
    expect(host.hasBridgeType('LoginViewModel')).toBe(true);
    expect(host.hasBridgeType('NoSuchVM')).toBe(false);
    host.dispose();
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Step 4: Command dispatch, lifecycle, and effect tests
  // ─────────────────────────────────────────────────────────────────────

  test('TH-13: registerInvokeHandler does not throw', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    expect(() => host.registerInvokeHandler((_className, _commandId) => {})).not.toThrow();
    host.dispose();
  });

  test('TH-14: registerLifecycleHandler does not throw', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    expect(() => host.registerLifecycleHandler((_className, _event) => {})).not.toThrow();
    host.dispose();
  });

  test('TH-15: emitEffect succeeds for known effect', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    expect(() => host.emitEffect('LoginViewModel', 'onLoginCompleted', true)).not.toThrow();
    host.dispose();
  });

  test('TH-16: emitEffect throws for unknown effect', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    expect(() => host.emitEffect('LoginViewModel', 'noSuch')).toThrow(/not found/i);
    host.dispose();
  });

  test('TH-17: emitEffectById succeeds for known ID', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    expect(() => host.emitEffectById('LoginViewModel', 1633635556, false)).not.toThrow();
    host.dispose();
  });

  test('TH-18: full flow with command/lifecycle/effect', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');

    host.registerInvokeHandler((_cn, _id) => {});
    host.registerLifecycleHandler((_cn, _ev) => {});

    host.syncState('LoginViewModel', 'username', 'full-flow');
    host.loadString(
      [
        'import QtQuick',
        'Item {',
        '  Component.onCompleted: {',
        '    __qmlts.invoke(927957157)',
        '    __qmlts.onMounted()',
        '  }',
        '}',
      ].join('\n'),
    );
    host.processEvents();

    expect(() => host.emitEffect('LoginViewModel', 'onLoginCompleted', true)).not.toThrow();

    host.dispose();
  });
});

describe('host/qmlts-host (skip check)', () => {
  test('check native module availability', () => {
    if (!isNativeModuleAvailable) {
      console.log('⚠️  Native module not built. Skipping QmltsHost tests.');
    }
    expect(true).toBe(true);
  });
});
