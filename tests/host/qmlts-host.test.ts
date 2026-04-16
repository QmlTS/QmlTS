/**
 * Unit tests for QmltsHost TypeScript wrapper.
 *
 * These tests require the native module to be built.
 * If the module is not built, tests will be skipped.
 */

import { beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
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

  test('TH-19: emitEffect rejects multi-argument payloads', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');

    expect(() => host.emitEffect('LoginViewModel', 'onLoginCompleted', true, false)).toThrow(
      /failed to emit signal|internal/i,
    );

    host.dispose();
  });

  test('TH-20: multiple hosts keep independent invoke handlers', async () => {
    const host1 = new QmltsHost();
    const host2 = new QmltsHost();
    const host1Calls: Array<[string, number]> = [];
    const host2Calls: Array<[string, number]> = [];

    try {
      host1.registerViewModel('LoginViewModel');
      host2.registerViewModel('LoginViewModel');

      host1.registerInvokeHandler((className, commandId) => {
        host1Calls.push([className, commandId]);
      });
      host2.registerInvokeHandler((className, commandId) => {
        host2Calls.push([className, commandId]);
      });

      host1.loadString(
        ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.invoke(101)', '}'].join(
          '\n',
        ),
      );
      host2.loadString(
        ['import QtQuick', 'Item {', '  Component.onCompleted: __qmlts.invoke(202)', '}'].join(
          '\n',
        ),
      );

      host1.processEvents();
      host2.processEvents();
      await flushJsCallbacks();

      expect(host1Calls).toEqual([['LoginViewModel', 101]]);
      expect(host2Calls).toEqual([['LoginViewModel', 202]]);
    } finally {
      host1.dispose();
      host2.dispose();
    }
  });

  // ─────────────────────────────────────────────────────────────────────
  //  Step 5: List model and multi-param effect tests
  // ─────────────────────────────────────────────────────────────────────

  test('TH-22: createListModel returns valid ID', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name', 'value']);
    expect(typeof modelId).toBe('number');
    expect(modelId).toBeGreaterThanOrEqual(0);
    host.dispose();
  });

  test('TH-23: setListData + listRowCount round-trip', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name']);
    host.setListData(modelId, [{ name: 'alice' }, { name: 'bob' }]);
    expect(host.listRowCount(modelId)).toBe(2);
    host.dispose();
  });

  test('TH-24: insertRows + getListRow round-trip', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name', 'age']);
    host.insertRows(modelId, 0, [{ name: 'charlie', age: 30 }]);
    expect(host.listRowCount(modelId)).toBe(1);
    const row = host.getListRow(modelId, 0);
    expect(row.name).toBe('charlie');
    host.dispose();
  });

  test('TH-25: removeRows works correctly', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name']);
    host.setListData(modelId, [{ name: 'a' }, { name: 'b' }, { name: 'c' }]);
    expect(host.listRowCount(modelId)).toBe(3);
    host.removeRows(modelId, 1, 1);
    expect(host.listRowCount(modelId)).toBe(2);
    host.dispose();
  });

  test('TH-26: updateRow updates in-place', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name']);
    host.setListData(modelId, [{ name: 'before' }]);
    host.updateRow(modelId, 0, { name: 'after' });
    const row = host.getListRow(modelId, 0);
    expect(row.name).toBe('after');
    expect(host.listRowCount(modelId)).toBe(1);
    host.dispose();
  });

  test('TH-27: moveRows reorders without changing count', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name']);
    host.setListData(modelId, [{ name: 'a' }, { name: 'b' }, { name: 'c' }]);
    host.moveRows(modelId, 0, 2, 1);
    expect(host.listRowCount(modelId)).toBe(3);
    host.dispose();
  });

  test('TH-28: destroyListModel does not throw', () => {
    const host = new QmltsHost();
    const modelId = host.createListModel(['name']);
    expect(() => host.destroyListModel(modelId)).not.toThrow();
    host.dispose();
  });

  test('TH-29: multi-param emitEffect with SearchViewModel', () => {
    const host = new QmltsHost();
    host.registerViewModel('SearchViewModel');
    expect(() =>
      host.emitEffect('SearchViewModel', 'onSearchCompleted', 'test query', 42),
    ).not.toThrow();
    host.dispose();
  });

  test('TH-30: SearchViewModel property sync', () => {
    const host = new QmltsHost();
    host.registerViewModel('SearchViewModel');
    host.syncState('SearchViewModel', 'query', 'hello world');
    const value = host.getProperty<string>('SearchViewModel', 'query');
    expect(value).toBe('hello world');
    host.dispose();
  });

  // ─────────────────────────────────────────────────────────────────────
  //  §8 Hot Reload
  // ─────────────────────────────────────────────────────────────────────

  test('TH-31: captureSnapshot returns parseable JSON', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    const snapshot = host.captureSnapshot();
    expect(typeof snapshot).toBe('string');
    const parsed = JSON.parse(snapshot);
    expect(parsed).toHaveProperty('window');
    host.dispose();
  });

  test('TH-32: captureSnapshot fails before QML loaded', () => {
    const host = new QmltsHost();
    expect(() => host.captureSnapshot()).toThrow();
    host.dispose();
  });

  test('TH-33: reloadQml succeeds after load', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    expect(() =>
      host.reloadQml('import QtQuick\nRectangle { width: 200; height: 100 }'),
    ).not.toThrow();
    host.processEvents();
    host.dispose();
  });

  test('TH-34: restoreSnapshot after reload', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    const snapshot = host.captureSnapshot();
    host.reloadQml('import QtQuick\nRectangle { }');
    host.processEvents();
    expect(() => host.restoreSnapshot(snapshot)).not.toThrow();
    host.dispose();
  });

  test('TH-35: full four-step reload cycle preserves state', () => {
    const host = new QmltsHost();
    host.registerViewModel('LoginViewModel');
    host.syncState('LoginViewModel', 'username', 'bob');
    host.loadString('import QtQuick\nItem { }');
    host.processEvents();

    // 1. Capture
    const snapshot = host.captureSnapshot();
    // 2. Reload
    host.reloadQml('import QtQuick\nRectangle { }');
    host.processEvents();
    // 3. Rehydrate
    host.syncState('LoginViewModel', 'username', 'bob');
    // 4. Restore
    host.restoreSnapshot(snapshot);
    host.processEvents();

    const val = host.getProperty<string>('LoginViewModel', 'username');
    expect(val).toBe('bob');
    host.dispose();
  });

  test('TH-36: showErrorOverlay is visible before any QML load', () => {
    const host = new QmltsHost();

    try {
      expect(host.isErrorOverlayVisible()).toBe(false);
      expect(() => host.showErrorOverlay('startup failure')).not.toThrow();
      host.processEvents();
      expect(host.isErrorOverlayVisible()).toBe(true);
    } finally {
      host.dispose();
    }
  });

  test('TH-37: startup error shell can be replaced by reloadQml', () => {
    const host = new QmltsHost();

    try {
      host.showErrorOverlay('startup failure');
      host.processEvents();

      expect(() =>
        host.reloadQml(
          [
            'import QtQuick',
            'import QtQuick.Window',
            'Window { width: 100; height: 80; visible: true }',
          ].join('\n'),
        ),
      ).not.toThrow();
      host.processEvents();

      expect(host.isErrorOverlayVisible()).toBe(true);
    } finally {
      host.dispose();
    }
  });

  test('TH-38: hideErrorOverlay is idempotent through QmltsHost', () => {
    const host = new QmltsHost();

    try {
      expect(() => host.hideErrorOverlay()).not.toThrow();
      host.showErrorOverlay('runtime error');
      host.processEvents();
      expect(host.isErrorOverlayVisible()).toBe(true);

      expect(() => host.hideErrorOverlay()).not.toThrow();
      host.processEvents();
      expect(host.isErrorOverlayVisible()).toBe(false);
    } finally {
      host.dispose();
    }
  });
  // ─────────────────────────────────────────────────────────────────────
  //  V2 Host Contract (integration — requires native module)
  // ─────────────────────────────────────────────────────────────────────

  test('TH-41: supportsV2() returns false (native V2 not implemented)', () => {
    const host = new QmltsHost();
    try {
      expect(host.supportsV2()).toBe(false);
    } finally {
      host.dispose();
    }
  });

  test('TH-42: registerModule throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() =>
        host.registerModule({
          moduleUri: 'Test.Module',
          versionMajor: 1,
          versionMinor: 0,
          typeNames: ['TestVM'],
        }),
      ).toThrow(/V2 native host API 'registerModule' is not available/);
    } finally {
      host.dispose();
    }
  });

  test('TH-43: syncStateForInstance throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() => host.syncStateForInstance(1, 'prop', 'val')).toThrow(
        /V2 native host API 'syncStateV2' is not available/,
      );
    } finally {
      host.dispose();
    }
  });

  test('TH-44: instanceReady throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() => host.instanceReady(1)).toThrow(
        /V2 native host API 'instanceReady' is not available/,
      );
    } finally {
      host.dispose();
    }
  });

  test('TH-45: emitEffectForInstance throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() => host.emitEffectForInstance(1, 'onDone')).toThrow(
        /V2 native host API 'emitEffectV2' is not available/,
      );
    } finally {
      host.dispose();
    }
  });

  test('TH-46: registerInstanceCreatedHandler throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() => host.registerInstanceCreatedHandler(() => {})).toThrow(
        /V2 native host API 'registerInstanceCreatedHandler' is not available/,
      );
    } finally {
      host.dispose();
    }
  });

  test('TH-47: registerCommandDispatcherV2 throws clear unsupported error', () => {
    const host = new QmltsHost();
    try {
      expect(() => host.registerCommandDispatcherV2(() => {})).toThrow(
        /V2 native host API 'registerCommandDispatcherV2' is not available/,
      );
    } finally {
      host.dispose();
    }
  });

  test('TH-48: V1 APIs still work unchanged after V2 additions', () => {
    const host = new QmltsHost();
    try {
      host.registerViewModel('LoginViewModel');
      expect(host.registeredTypes).toContain('LoginViewModel');
      expect(host.hasBridgeType('LoginViewModel')).toBe(true);
    } finally {
      host.dispose();
    }
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

describe('host/package-types', () => {
  test('TH-21: published index.d.ts is the curated package surface', () => {
    const indexDtsPath = fileURLToPath(
      new URL('../../native/npm/qmlts-host/index.d.ts', import.meta.url),
    );
    const content = readFileSync(indexDtsPath, 'utf8');

    expect(content).not.toContain('export declare export declare');
    expect(content).toContain("export * from './src/index';");
  });
});
