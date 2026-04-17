import { describe, expect, test } from 'bun:test';
import type { ViewModelSchemaJson } from '../../src/build/build-types.js';
import { createQmltypesGenerator } from '../../src/build/qmltypes-generator.js';

function makeSchema(overrides: Partial<ViewModelSchemaJson> = {}): ViewModelSchemaJson {
  return {
    className: 'LoginViewModel',
    version: 2,
    states: [],
    commands: [],
    effects: [],
    lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    ...overrides,
  };
}

describe('QmltypesGenerator', () => {
  const generator = createQmltypesGenerator();
  const baseOpts = {
    moduleUri: 'TestApp.ViewModels',
    moduleVersion: { major: 1, minor: 0 },
  };

  // QT-01
  test('QT-01: generates valid qmltypes preamble', () => {
    const content = generator.generate({ ...baseOpts, schemas: [] });
    expect(content).toContain('import QtQuick.tooling 1.2');
    expect(content).toContain('Module {');
  });

  // QT-02
  test('QT-02: emits Component with correct name and exports', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [makeSchema()],
    });
    expect(content).toContain('name: "LoginViewModel"');
    expect(content).toContain('prototype: "QObject"');
    expect(content).toContain('exports: ["TestApp.ViewModels/LoginViewModel 1.0"]');
    expect(content).toContain('exportMetaObjectRevisions: [0]');
  });

  // QT-03
  test('QT-03: emits Property for each schema state', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          states: [
            {
              name: 'username',
              qmlName: 'username',
              qmlType: 'string',
              memberId: 0,
              readonly: false,
              deferred: false,
            },
            {
              name: 'password',
              qmlName: 'password',
              qmlType: 'string',
              memberId: 1,
              readonly: false,
              deferred: false,
            },
          ],
        }),
      ],
    });
    expect(content).toContain('Property { name: "username"; type: "string" }');
    expect(content).toContain('Property { name: "password"; type: "string" }');
  });

  // QT-04
  test('QT-04: marks readonly properties with isReadonly', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          states: [
            {
              name: 'isLoading',
              qmlName: 'isLoading',
              qmlType: 'bool',
              memberId: 0,
              readonly: true,
              deferred: false,
            },
          ],
        }),
      ],
    });
    expect(content).toContain(
      'Property { name: "isLoading"; type: "bool"; isReadonly: true }',
    );
  });

  // QT-05
  test('QT-05: emits Method for each schema command', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          commands: [
            {
              name: 'login',
              qmlName: 'login',
              commandId: 1,
              parameters: [],
              async: false,
              throttle: 'none',
              throttleMs: 0,
            },
          ],
        }),
      ],
    });
    expect(content).toContain('Method { name: "login" }');
  });

  // QT-06
  test('QT-06: emits Method parameters', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          commands: [
            {
              name: 'setUser',
              qmlName: 'setUser',
              commandId: 1,
              parameters: [
                { name: 'name', type: 'string' },
                { name: 'age', type: 'int' },
              ],
              async: false,
              throttle: 'none',
              throttleMs: 0,
            },
          ],
        }),
      ],
    });
    expect(content).toContain('Method {');
    expect(content).toContain('name: "setUser"');
    expect(content).toContain('Parameter { name: "name"; type: "string" }');
    expect(content).toContain('Parameter { name: "age"; type: "int" }');
  });

  // QT-07
  test('QT-07: emits Signal for each schema effect', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          effects: [
            {
              name: 'loginCompleted',
              qmlName: 'loginCompleted',
              effectId: 1,
              parameters: [],
            },
          ],
        }),
      ],
    });
    expect(content).toContain('Signal { name: "loginCompleted" }');
  });

  // QT-08
  test('QT-08: emits Signal parameters', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          effects: [
            {
              name: 'loginCompleted',
              qmlName: 'loginCompleted',
              effectId: 1,
              parameters: [{ name: 'success', type: 'bool' }],
            },
          ],
        }),
      ],
    });
    expect(content).toContain('Signal {');
    expect(content).toContain('name: "loginCompleted"');
    expect(content).toContain('Parameter { name: "success"; type: "bool" }');
  });

  // QT-09
  test('QT-09: emits lifecycle methods when enabled', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          lifecycle: { onMounted: true, onUnmounting: true, hotReload: false },
        }),
      ],
    });
    expect(content).toContain('Method { name: "onMounted" }');
    expect(content).toContain('Method { name: "onUnmounting" }');
  });

  // QT-10
  test('QT-10: omits lifecycle methods when disabled', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [makeSchema()],
    });
    expect(content).not.toContain('onMounted');
    expect(content).not.toContain('onUnmounting');
  });

  // QT-11
  test('QT-11: handles multiple ViewModels in one module', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({ className: 'CounterViewModel' }),
        makeSchema({ className: 'LoginViewModel' }),
      ],
    });
    expect(content).toContain('name: "CounterViewModel"');
    expect(content).toContain('name: "LoginViewModel"');
    const componentMatches = content.match(/Component \{/g);
    expect(componentMatches).toHaveLength(2);
  });

  // QT-12
  test('QT-12: empty schemas list produces empty Module block', () => {
    const content = generator.generate({ ...baseOpts, schemas: [] });
    expect(content).toContain('Module {');
    expect(content).not.toContain('Component');
  });

  // QT-13
  test('QT-13: does NOT emit state-change notify signals', () => {
    const content = generator.generate({
      ...baseOpts,
      schemas: [
        makeSchema({
          states: [
            {
              name: 'count',
              qmlName: 'count',
              qmlType: 'int',
              memberId: 0,
              readonly: false,
              deferred: false,
            },
          ],
        }),
      ],
    });
    expect(content).not.toContain('countChanged');
    expect(content).not.toContain('Signal');
  });
});
