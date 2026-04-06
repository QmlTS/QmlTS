import { describe, expect, test } from 'bun:test';
import type {
  AnalyzedLifecycle,
  ViewModelCommandThrottleMode,
  ViewModelLifecycle,
  ViewModelSchema,
  ViewModelSchemaCommand,
  ViewModelSchemaEffect,
  ViewModelSchemaState,
} from '../../src/viewmodel/index.js';

describe('Schema type shapes', () => {
  const sampleSchema: ViewModelSchema = {
    className: 'LoginViewModel',
    version: 1,
    states: [
      {
        name: 'username',
        qmlName: 'username',
        qmlType: 'string',
        memberId: 1,
        readonly: false,
        deferred: false,
        defaultValue: '',
      },
    ],
    commands: [
      {
        name: 'login',
        qmlName: 'login',
        commandId: 100,
        parameters: [{ name: 'force', type: 'bool' }],
        async: true,
        throttle: 'none',
        throttleMs: 0,
      },
    ],
    effects: [
      {
        name: 'loginFailed',
        qmlName: 'loginFailed',
        effectId: 200,
        parameters: [{ name: 'reason', type: 'string' }],
      },
    ],
    lifecycle: {
      onMounted: true,
      onUnmounting: false,
      hotReload: false,
    },
  };

  test('SCH-01: ViewModelSchema has correct structural shape including lifecycle', () => {
    expect(sampleSchema.className).toBe('LoginViewModel');
    expect(sampleSchema.states).toHaveLength(1);
    expect(sampleSchema.commands).toHaveLength(1);
    expect(sampleSchema.effects).toHaveLength(1);
    expect(sampleSchema.lifecycle).toBeDefined();
  });

  test('SCH-02: ViewModelSchemaState.memberId is number', () => {
    const state: ViewModelSchemaState = sampleSchema.states[0]!;
    expect(typeof state.memberId).toBe('number');
  });

  test('SCH-03: ViewModelSchemaState includes deferred and optional defaultValue', () => {
    const state: ViewModelSchemaState = sampleSchema.states[0]!;
    expect(typeof state.deferred).toBe('boolean');
    expect(state.defaultValue).toBe('');

    const noDefault: ViewModelSchemaState = {
      name: 'x',
      qmlName: 'x',
      qmlType: 'int',
      memberId: 2,
      readonly: false,
      deferred: false,
    };
    expect(noDefault.defaultValue).toBeUndefined();
  });

  test('SCH-04: ViewModelSchemaCommand.commandId is number', () => {
    const cmd: ViewModelSchemaCommand = sampleSchema.commands[0]!;
    expect(typeof cmd.commandId).toBe('number');
  });

  test('SCH-05: ViewModelSchemaCommand includes throttle and throttleMs', () => {
    const cmd: ViewModelSchemaCommand = sampleSchema.commands[0]!;
    const throttleMode: ViewModelCommandThrottleMode = cmd.throttle;
    expect(typeof throttleMode).toBe('string');
    expect(typeof cmd.throttleMs).toBe('number');
  });

  test('SCH-06: ViewModelSchemaEffect.effectId is number', () => {
    const effect: ViewModelSchemaEffect = sampleSchema.effects[0]!;
    expect(typeof effect.effectId).toBe('number');
  });

  test('SCH-07: ViewModelSchema.version is number', () => {
    expect(typeof sampleSchema.version).toBe('number');
  });

  test('SCH-08: ViewModelSchema.lifecycle has onMounted, onUnmounting, hotReload booleans', () => {
    const lc = sampleSchema.lifecycle;
    expect(typeof lc.onMounted).toBe('boolean');
    expect(typeof lc.onUnmounting).toBe('boolean');
    expect(typeof lc.hotReload).toBe('boolean');
  });

  test('SCH-09: AnalyzedLifecycle has all five boolean flags', () => {
    const analyzed: AnalyzedLifecycle = {
      hasOnMounted: true,
      hasOnUnmounting: false,
      hasOnBeforeHotReload: true,
      hasOnAfterHotReload: true,
      hasOnVisibilityChanged: false,
    };
    expect(typeof analyzed.hasOnMounted).toBe('boolean');
    expect(typeof analyzed.hasOnUnmounting).toBe('boolean');
    expect(typeof analyzed.hasOnBeforeHotReload).toBe('boolean');
    expect(typeof analyzed.hasOnAfterHotReload).toBe('boolean');
    expect(typeof analyzed.hasOnVisibilityChanged).toBe('boolean');
  });

  test('SCH-10: ViewModelLifecycle has all five optional hook methods', () => {
    const lifecycle: ViewModelLifecycle = {
      onMounted: () => {},
      onUnmounting: () => {},
      onBeforeHotReload: () => ({ key: 'value' }),
      onAfterHotReload: (_snapshot) => {},
      onVisibilityChanged: (_visible) => {},
    };
    expect(typeof lifecycle.onMounted).toBe('function');
    expect(typeof lifecycle.onUnmounting).toBe('function');
    expect(typeof lifecycle.onBeforeHotReload).toBe('function');
    expect(typeof lifecycle.onAfterHotReload).toBe('function');
    expect(typeof lifecycle.onVisibilityChanged).toBe('function');

    const empty: ViewModelLifecycle = {};
    expect(empty.onMounted).toBeUndefined();
  });

  test('SCH-11: schema objects round-trip through JSON', () => {
    const json = JSON.stringify(sampleSchema);
    const parsed = JSON.parse(json) as ViewModelSchema;
    expect(parsed.className).toBe(sampleSchema.className);
    expect(parsed.version).toBe(sampleSchema.version);
    expect(parsed.states).toEqual(sampleSchema.states);
    expect(parsed.commands).toEqual(sampleSchema.commands);
    expect(parsed.effects).toEqual(sampleSchema.effects);
    expect(parsed.lifecycle).toEqual(sampleSchema.lifecycle);
  });
});
