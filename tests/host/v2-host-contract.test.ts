/**
 * V2 Host Contract — Unit Tests
 *
 * These tests validate the V2 TypeScript host API surface without
 * requiring the native module. They use mocked v2Native bindings
 * to verify wrapper delegation and fail-fast behavior.
 */

import { describe, expect, mock, test } from 'bun:test';
import type {
  InstanceCreatedEvent,
  ModuleRegistration,
  PropertyChangedEvent,
  V2CommandPayload,
  V2NativeBindings,
} from '../../native/npm/qmlts-host/src/v2-types';
import {
  supportsV2NativeBindings,
  V2_REQUIRED_METHODS,
} from '../../native/npm/qmlts-host/src/v2-types';

// ─── Mock Setup ─────────────────────────────────────────────

/**
 * Create a mock that exercises the getV2Fn fail-fast logic
 * identically to QmltsHost without requiring the native module.
 */
function createMockHost(v2Bindings: Partial<V2NativeBindings> = {}) {
  const mockEngine = { __brand: 'QmltsEngine' as const };

  return {
    engine: mockEngine,
    v2Bindings,

    getV2Fn<K extends keyof V2NativeBindings>(name: K): V2NativeBindings[K] {
      const fn = v2Bindings[name];
      if (typeof fn !== 'function') {
        throw new Error(`V2 native host API '${name}' is not available in this native build`);
      }
      return fn as V2NativeBindings[K];
    },

    requireEngine() {
      return mockEngine;
    },
  };
}

function createCompleteV2Bindings(): V2NativeBindings {
  return {
    registerModule: mock(() => {}),
    syncStateV2: mock(() => {}),
    syncStateBatchV2: mock(() => {}),
    emitEffectV2: mock(() => {}),
    instanceReady: mock(() => {}),
    registerInstanceCreatedHandler: mock(() => {}),
    registerInstanceDestroyingHandler: mock(() => {}),
    registerPropertyChangedHandler: mock(() => {}),
    registerCommandDispatcherV2: mock(() => {}),
  };
}

// ─── Tests ──────────────────────────────────────────────────

describe('V2 Host Contract', () => {
  // ─── V2 Capability Detection ────────────────────────────

  describe('supportsV2()', () => {
    test('V2C-01: returns false when no V2 native methods exist', () => {
      expect(supportsV2NativeBindings({})).toBe(false);
    });

    test('V2C-02: returns false when only some V2 methods exist', () => {
      const partial: Partial<V2NativeBindings> = {
        registerModule: mock(() => {}),
        syncStateV2: mock(() => {}),
      };
      expect(supportsV2NativeBindings(partial)).toBe(false);
    });

    test('V2C-02b: returns true when all V2 methods exist', () => {
      expect(supportsV2NativeBindings(createCompleteV2Bindings())).toBe(true);
    });
  });

  // ─── Fail-Fast Capability Checks ────────────────────────

  describe('getV2Fn() fail-fast', () => {
    test('V2C-03: throws clear error for missing registerModule', () => {
      const host = createMockHost({});
      expect(() => host.getV2Fn('registerModule')).toThrow(
        "V2 native host API 'registerModule' is not available in this native build",
      );
    });

    test('V2C-04: throws clear error for missing syncStateV2', () => {
      const host = createMockHost({});
      expect(() => host.getV2Fn('syncStateV2')).toThrow(
        "V2 native host API 'syncStateV2' is not available in this native build",
      );
    });

    test('V2C-05: throws clear error for missing instanceReady', () => {
      const host = createMockHost({});
      expect(() => host.getV2Fn('instanceReady')).toThrow(
        "V2 native host API 'instanceReady' is not available in this native build",
      );
    });

    test('V2C-06: returns function when present', () => {
      const mockFn = mock(() => {});
      const host = createMockHost({ registerModule: mockFn });
      const fn = host.getV2Fn('registerModule');
      expect(fn).toBe(mockFn);
    });
  });

  // ─── V2 Module Registration ─────────────────────────────

  describe('registerModule delegation', () => {
    test('V2C-07: registerModule delegates with correct args', () => {
      const mockRegister = mock(() => {});
      const host = createMockHost({ registerModule: mockRegister });

      const reg: ModuleRegistration = {
        moduleUri: 'MyApp.ViewModels',
        versionMajor: 1,
        versionMinor: 0,
        typeNames: ['LoginViewModel', 'SignupViewModel'],
      };

      const fn = host.getV2Fn('registerModule');
      fn(host.requireEngine(), reg.moduleUri, reg.versionMajor, reg.versionMinor, [
        ...reg.typeNames,
      ]);

      expect(mockRegister).toHaveBeenCalledTimes(1);
      expect(mockRegister).toHaveBeenCalledWith(host.engine, 'MyApp.ViewModels', 1, 0, [
        'LoginViewModel',
        'SignupViewModel',
      ]);
    });
  });

  // ─── V2 Instance State Sync ─────────────────────────────

  describe('syncStateV2 delegation', () => {
    test('V2C-08: syncStateV2 delegates with JSON-serialized value', () => {
      const mockSync = mock(() => {});
      const host = createMockHost({ syncStateV2: mockSync });

      const fn = host.getV2Fn('syncStateV2');
      fn(host.requireEngine(), 42, 'username', JSON.stringify('alice'));

      expect(mockSync).toHaveBeenCalledWith(host.engine, 42, 'username', '"alice"');
    });

    test('V2C-09: syncStateBatchV2 delegates with JSON-serialized properties', () => {
      const mockBatch = mock(() => {});
      const host = createMockHost({ syncStateBatchV2: mockBatch });

      const fn = host.getV2Fn('syncStateBatchV2');
      const props = { username: 'bob', count: 5 };
      fn(host.requireEngine(), 42, JSON.stringify(props));

      expect(mockBatch).toHaveBeenCalledWith(host.engine, 42, '{"username":"bob","count":5}');
    });
  });

  // ─── V2 Effect Emission ─────────────────────────────────

  describe('emitEffectV2 delegation', () => {
    test('V2C-10: emitEffectV2 delegates with JSON payload', () => {
      const mockEmit = mock(() => {});
      const host = createMockHost({ emitEffectV2: mockEmit });

      const fn = host.getV2Fn('emitEffectV2');
      fn(host.requireEngine(), 7, 'onLoginCompleted', JSON.stringify({ success: true }));

      expect(mockEmit).toHaveBeenCalledWith(host.engine, 7, 'onLoginCompleted', '{"success":true}');
    });

    test('V2C-11: emitEffectV2 without payload passes undefined', () => {
      const mockEmit = mock(() => {});
      const host = createMockHost({ emitEffectV2: mockEmit });

      const fn = host.getV2Fn('emitEffectV2');
      fn(host.requireEngine(), 7, 'onDone', undefined);

      expect(mockEmit).toHaveBeenCalledWith(host.engine, 7, 'onDone', undefined);
    });
  });

  // ─── V2 instanceReady ───────────────────────────────────

  describe('instanceReady delegation', () => {
    test('V2C-12: instanceReady delegates with instanceId', () => {
      const mockReady = mock(() => {});
      const host = createMockHost({ instanceReady: mockReady });

      const fn = host.getV2Fn('instanceReady');
      fn(host.requireEngine(), 99);

      expect(mockReady).toHaveBeenCalledWith(host.engine, 99);
    });
  });

  // ─── V2 Lifecycle Callback Wrapping ─────────────────────

  describe('lifecycle callback wrapping', () => {
    test('V2C-13: registerInstanceCreatedHandler wraps positional → InstanceCreatedEvent', () => {
      let capturedCallback: ((...args: unknown[]) => void) | null = null;
      const mockRegister = mock((_eng: unknown, cb: (...args: unknown[]) => void) => {
        capturedCallback = cb;
      });
      const host = createMockHost({
        registerInstanceCreatedHandler:
          mockRegister as V2NativeBindings['registerInstanceCreatedHandler'],
      });

      const events: InstanceCreatedEvent[] = [];
      const fn = host.getV2Fn('registerInstanceCreatedHandler');

      fn(host.requireEngine(), (error: Error | null, className: string, instanceId: number) => {
        if (error) return;
        events.push({ instanceId, className });
      });

      expect(capturedCallback).not.toBeNull();
      capturedCallback!(null, 'LoginViewModel', 1);

      expect(events).toEqual([{ instanceId: 1, className: 'LoginViewModel' }]);
    });

    test('V2C-14: registerPropertyChangedHandler wraps + parses JSON value', () => {
      let capturedCallback: ((...args: unknown[]) => void) | null = null;
      const mockRegister = mock((_eng: unknown, cb: (...args: unknown[]) => void) => {
        capturedCallback = cb;
      });
      const host = createMockHost({
        registerPropertyChangedHandler:
          mockRegister as V2NativeBindings['registerPropertyChangedHandler'],
      });

      const events: PropertyChangedEvent[] = [];
      const fn = host.getV2Fn('registerPropertyChangedHandler');

      fn(
        host.requireEngine(),
        (error: Error | null, instanceId: number, propName: string, valueJson: string) => {
          if (error) return;
          events.push({ instanceId, propName, value: JSON.parse(valueJson) });
        },
      );

      capturedCallback!(null, 42, 'username', '"alice"');

      expect(events).toEqual([{ instanceId: 42, propName: 'username', value: 'alice' }]);
    });

    test('V2C-15: registerCommandDispatcherV2 wraps + parses args JSON', () => {
      let capturedCallback: ((...args: unknown[]) => void) | null = null;
      const mockRegister = mock((_eng: unknown, cb: (...args: unknown[]) => void) => {
        capturedCallback = cb;
      });
      const host = createMockHost({
        registerCommandDispatcherV2:
          mockRegister as V2NativeBindings['registerCommandDispatcherV2'],
      });

      const payloads: V2CommandPayload[] = [];
      const fn = host.getV2Fn('registerCommandDispatcherV2');

      fn(
        host.requireEngine(),
        (
          error: Error | null,
          instanceId: number,
          vmClass: string,
          commandName: string,
          argsJson: string,
        ) => {
          if (error) return;
          payloads.push({
            instanceId,
            vmClass,
            commandName,
            args: JSON.parse(argsJson),
          });
        },
      );

      capturedCallback!(null, 5, 'LoginViewModel', 'login', '["user","pass"]');

      expect(payloads).toEqual([
        {
          instanceId: 5,
          vmClass: 'LoginViewModel',
          commandName: 'login',
          args: ['user', 'pass'],
        },
      ]);
    });
  });

  // ─── V2 Type Definitions ────────────────────────────────

  describe('V2 type definitions', () => {
    test('V2C-16: InstanceId is a number type', () => {
      const id: import('../../native/npm/qmlts-host/src/v2-types').InstanceId = 42;
      expect(typeof id).toBe('number');
    });

    test('V2C-17: ModuleRegistration has required fields', () => {
      const reg: ModuleRegistration = {
        moduleUri: 'Test.Module',
        versionMajor: 1,
        versionMinor: 0,
        typeNames: ['TestVM'],
      };
      expect(reg.moduleUri).toBe('Test.Module');
      expect(reg.typeNames).toEqual(['TestVM']);
    });

    test('V2C-18: InstanceCreatedEvent includes slot metadata fields', () => {
      const event: InstanceCreatedEvent = {
        instanceId: 1,
        className: 'TestVM',
        compilerSlotKey: 'TestView::__qmlts_vm0',
        qmlId: '__qmlts_vm0',
        ownership: 'owned',
      };
      expect(event.compilerSlotKey).toBe('TestView::__qmlts_vm0');
      expect(event.ownership).toBe('owned');
    });

    test('V2C-19: V2_REQUIRED_METHODS lists all 9 core methods', () => {
      expect(V2_REQUIRED_METHODS).toHaveLength(9);
      expect(V2_REQUIRED_METHODS).toContain('registerModule');
      expect(V2_REQUIRED_METHODS).toContain('instanceReady');
      expect(V2_REQUIRED_METHODS).toContain('registerCommandDispatcherV2');
    });
  });

  // ─── V2 ViewModelManager ────────────────────────────────

  describe('ViewModelManager V2 contract', () => {
    const testSchema = {
      className: 'TestVM',
      states: [
        { name: 'name', deferred: false },
        { name: 'count', deferred: false },
        { name: 'lazy', deferred: true },
      ],
      commands: [{ name: 'submit', commandId: 100 }],
      effects: [{ name: 'onDone', effectId: 200 }],
      lifecycle: { onMounted: true, onUnmounting: false },
    };

    function createMockVMManager() {
      const mockHost = {
        registerViewModel: mock(() => {}),
        syncStateBatch: mock(() => {}),
        syncState: mock(() => {}),
        getProperty: mock(() => '""'),
        emitEffect: mock(() => {}),
        registerInvokeHandler: mock(() => {}),
        registerLifecycleHandler: mock(() => {}),
        syncStateForInstance: mock(() => {}),
        syncStateBatchForInstance: mock(() => {}),
        emitEffectForInstance: mock(() => {}),
        instanceReady: mock(() => {}),
        registerInstanceCreatedHandler: mock(() => {}),
        registerInstanceDestroyingHandler: mock(() => {}),
        registerPropertyChangedHandler: mock(() => {}),
        registerCommandDispatcherV2: mock(() => {}),
        supportsV2: mock(() => true),
      };

      const { ViewModelManager } = require('../../native/npm/qmlts-host/src/viewmodel-manager');
      const manager = new ViewModelManager(mockHost as any);
      return { manager, mockHost };
    }

    test('V2C-20: registerClass stores registration in TS-side map', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: (_event: InstanceCreatedEvent) => {
          return { name: '', count: 0 };
        },
      });

      expect(manager.hasClass('TestVM')).toBe(true);
    });

    test('V2C-20b: registerClass wires V2 native handlers once when supported', () => {
      const { manager, mockHost } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: '', count: 0 }),
      });
      manager.registerClass({
        className: 'OtherVM',
        schema: { ...testSchema, className: 'OtherVM' },
        factory: () => ({ name: '', count: 0 }),
      });

      expect(mockHost.registerInstanceCreatedHandler).toHaveBeenCalledTimes(1);
      expect(mockHost.registerInstanceDestroyingHandler).toHaveBeenCalledTimes(1);
      expect(mockHost.registerPropertyChangedHandler).toHaveBeenCalledTimes(1);
      expect(mockHost.registerCommandDispatcherV2).toHaveBeenCalledTimes(1);
    });

    test('V2C-21: registerClass throws for duplicate className', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: '', count: 0 }),
      });

      expect(() =>
        manager.registerClass({
          className: 'TestVM',
          schema: testSchema,
          factory: () => ({ name: '', count: 0 }),
        }),
      ).toThrow(/already registered/i);
    });

    test('V2C-21b: registerClass rejects schema/className mismatch', () => {
      const { manager } = createMockVMManager();

      expect(() =>
        manager.registerClass({
          className: 'TestVM',
          schema: { ...testSchema, className: 'OtherVM' },
          factory: () => ({ name: '', count: 0 }),
        }),
      ).toThrow(/schema\.className.*does not match/i);
    });

    test('V2C-22: getInstance returns undefined for unknown instanceId', () => {
      const { manager } = createMockVMManager();
      expect(manager.getInstance(999)).toBeUndefined();
    });

    test('V2C-23: getInstanceSlots returns empty array initially', () => {
      const { manager } = createMockVMManager();
      expect(manager.getInstanceSlots()).toEqual([]);
    });

    test('V2C-24: handleInstanceCreated creates instance, syncs state, and marks ready', () => {
      const { manager, mockHost } = createMockVMManager();
      const instances: unknown[] = [];

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: (event: InstanceCreatedEvent) => {
          const inst = { name: 'created', count: event.instanceId };
          instances.push(inst);
          return inst;
        },
      });

      manager.handleInstanceCreated({
        instanceId: 1,
        className: 'TestVM',
        compilerSlotKey: 'TestView::__qmlts_vm0',
        qmlId: '__qmlts_vm0',
        ownership: 'owned',
      });

      expect(instances).toHaveLength(1);
      expect(manager.getInstance(1)).toEqual({ name: 'created', count: 1 });
      expect(mockHost.syncStateBatchForInstance).toHaveBeenCalledWith(1, {
        name: 'created',
        count: 1,
      });
      expect(mockHost.instanceReady).toHaveBeenCalledWith(1);
    });

    test('V2C-25: handleInstanceCreated ignores unknown className', () => {
      const { manager } = createMockVMManager();

      expect(() =>
        manager.handleInstanceCreated({
          instanceId: 1,
          className: 'UnknownVM',
        }),
      ).not.toThrow();

      expect(manager.getInstance(1)).toBeUndefined();
    });

    test('V2C-25b: handleInstanceCreated rolls back instance when native sync fails', () => {
      const { manager, mockHost } = createMockVMManager();
      mockHost.syncStateBatchForInstance = mock(() => {
        throw new Error("V2 native host API 'syncStateBatchV2' is not available");
      });

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: 'test', count: 1 }),
      });

      expect(() =>
        manager.handleInstanceCreated({
          instanceId: 8,
          className: 'TestVM',
        }),
      ).toThrow(/syncStateBatchV2/);

      expect(manager.getInstance(8)).toBeUndefined();
      expect(mockHost.instanceReady).not.toHaveBeenCalledWith(8);
    });

    test('V2C-26: getInstanceSlots returns metadata for active instances', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: 'test', count: 0, lazy: null }),
      });

      manager.handleInstanceCreated({
        instanceId: 10,
        className: 'TestVM',
        compilerSlotKey: 'View::__qmlts_vm0',
        qmlId: '__qmlts_vm0',
        ownership: 'owned',
      });

      const slots = manager.getInstanceSlots();
      expect(slots).toHaveLength(1);
      expect(slots[0]!.instanceId).toBe(10);
      expect(slots[0]!.className).toBe('TestVM');
      expect(slots[0]!.compilerSlotKey).toBe('View::__qmlts_vm0');
    });

    test('V2C-27: handleInstanceDestroying removes instance from map', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: '', count: 0 }),
      });

      manager.handleInstanceCreated({ instanceId: 5, className: 'TestVM' });
      expect(manager.getInstance(5)).toBeDefined();

      manager.handleInstanceDestroying({ instanceId: 5 });
      expect(manager.getInstance(5)).toBeUndefined();
    });

    test('V2C-28: dispatchCommand routes to correct instance', () => {
      const { manager } = createMockVMManager();
      const calls: string[] = [];

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({
          name: '',
          count: 0,
          submit: () => calls.push('submit-called'),
        }),
      });

      manager.handleInstanceCreated({ instanceId: 3, className: 'TestVM' });

      manager.dispatchCommand({
        instanceId: 3,
        vmClass: 'TestVM',
        commandName: 'submit',
        args: [],
      });

      expect(calls).toEqual(['submit-called']);
    });

    test('V2C-28b: dispatchCommand rejects class mismatch for tracked instance', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({
          name: '',
          count: 0,
          submit: () => {},
        }),
      });
      manager.handleInstanceCreated({ instanceId: 3, className: 'TestVM' });

      expect(() =>
        manager.dispatchCommand({
          instanceId: 3,
          vmClass: 'OtherVM',
          commandName: 'submit',
          args: [],
        }),
      ).toThrow(/targeted class/i);
    });

    test('V2C-28c: handlePropertyChanged updates tracked instance', () => {
      const { manager } = createMockVMManager();

      manager.registerClass({
        className: 'TestVM',
        schema: testSchema,
        factory: () => ({ name: 'before', count: 0 }),
      });
      manager.handleInstanceCreated({ instanceId: 11, className: 'TestVM' });
      manager.handlePropertyChanged({
        instanceId: 11,
        propName: 'name',
        value: 'after',
      });

      expect(manager.getInstance(11)).toEqual({ name: 'after', count: 0 });
    });

    test('V2C-29: dispatchCommand ignores unknown instanceId', () => {
      const { manager } = createMockVMManager();

      expect(() =>
        manager.dispatchCommand({
          instanceId: 999,
          vmClass: 'TestVM',
          commandName: 'submit',
          args: [],
        }),
      ).not.toThrow();
    });

    test('V2C-30: V1 register still works alongside V2 registerClass', () => {
      const { manager, mockHost } = createMockVMManager();

      // V1 registration
      const instance = { name: 'v1', count: 0 };
      manager.register(testSchema, instance);
      expect(manager.has('TestVM')).toBe(true);
      expect(mockHost.registerViewModel).toHaveBeenCalled();

      // V2 registration (different class)
      const schema2 = { ...testSchema, className: 'OtherVM' };
      manager.registerClass({
        className: 'OtherVM',
        schema: schema2,
        factory: () => ({ name: 'v2' }),
      });
      expect(manager.hasClass('OtherVM')).toBe(true);
    });
  });

  // ─── DevServer V2 Awareness ─────────────────────────────

  describe('DevServer V2 awareness', () => {
    test('V2C-31: DevServer defaults to V1 runtime mode', () => {
      const { DevServer } = require('../../native/npm/qmlts-host/src/dev-server');
      const server = new DevServer({} as any, {} as any);
      expect(server.runtimeMode).toBe('v1');
    });

    test('V2C-32: DevServer accepts V2 runtime mode in constructor', () => {
      const { DevServer } = require('../../native/npm/qmlts-host/src/dev-server');
      const server = new DevServer({} as any, {} as any, { runtimeMode: 'v2' });
      expect(server.runtimeMode).toBe('v2');
    });

    test('V2C-33: setTargetInstance stores string selector', () => {
      const { DevServer } = require('../../native/npm/qmlts-host/src/dev-server');
      const server = new DevServer({} as any, {} as any, { runtimeMode: 'v2' });

      server.setTargetInstance('LoginView::__qmlts_vm0');
      expect(server.targetInstance).toBe('LoginView::__qmlts_vm0');
    });

    test('V2C-34: setTargetInstance accepts numeric instanceId', () => {
      const { DevServer } = require('../../native/npm/qmlts-host/src/dev-server');
      const server = new DevServer({} as any, {} as any, { runtimeMode: 'v2' });

      server.setTargetInstance(42);
      expect(server.targetInstance).toBe(42);
    });

    test('V2C-35: setTargetInstance(null) clears the target', () => {
      const { DevServer } = require('../../native/npm/qmlts-host/src/dev-server');
      const server = new DevServer({} as any, {} as any, { runtimeMode: 'v2' });

      server.setTargetInstance('some-key');
      server.setTargetInstance(null);
      expect(server.targetInstance).toBeNull();
    });
  });
});
