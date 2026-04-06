import { describe, expect, test } from 'bun:test';
import { type ClassDeclaration, Project } from 'ts-morph';
import { createIdAllocator } from '../../../src/compiler/ids/id-allocator.js';
import type { AnalyzedViewModel } from '../../../src/compiler/viewmodel/extractor-types.js';
import { createViewModelExtractor } from '../../../src/compiler/viewmodel/viewmodel-extractor.js';

function getClass(source: string, className = 'TestVM'): ClassDeclaration {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      strict: true,
      target: 99, // ESNext
      module: 99,
      experimentalDecorators: false,
    },
  });
  // Add stub decorator definitions so the source typechecks
  project.createSourceFile(
    'decorators.ts',
    `
    export function State(opts?: any): any { return () => {}; }
    export function Command(opts?: any): any { return () => {}; }
    export function Effect(opts?: any): any { return () => {}; }
  `,
  );
  const sf = project.createSourceFile('test.ts', source);
  const cls = sf.getClass(className);
  if (!cls) throw new Error(`Class ${className} not found in source`);
  return cls;
}

const extractor = createViewModelExtractor();

describe('ViewModelExtractor — extract()', () => {
  test('VE-01: @State field extraction — 2 fields', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM {
        @State() name = '';
        @State() count = 0;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states).toHaveLength(2);
    expect(vm.states[0]!.fieldName).toBe('name');
    expect(vm.states[1]!.fieldName).toBe('count');
    expect(vm.className).toBe('TestVM');
  });

  test('VE-02: @State type inference — string', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() name = ''; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.tsType).toBe('string');
    expect(vm.states[0]!.qmlType).toBe('string');
  });

  test('VE-03: @State type inference — number', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() count = 0; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.tsType).toBe('number');
    expect(vm.states[0]!.qmlType).toBe('real');
  });

  test('VE-04: @State type inference — boolean', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() active = false; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.tsType).toBe('boolean');
    expect(vm.states[0]!.qmlType).toBe('bool');
  });

  test('VE-05: @State alias', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State({ alias: 'userName' }) name = ''; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.qmlName).toBe('userName');
  });

  test('VE-06: @State readonly', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State({ readonly: true }) name = ''; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.options.readonly).toBe(true);
  });

  test('VE-07: @State defaultValue', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() count = 42; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.defaultValue).toBe('42');
  });

  test('VE-08: @Command extraction', () => {
    const cls = getClass(`
      import { Command, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Command() login() {}
        @Command() logout() {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.commands).toHaveLength(2);
    expect(vm.commands[0]!.methodName).toBe('login');
    expect(vm.commands[1]!.methodName).toBe('logout');
  });

  test('VE-09: @Command async', () => {
    const cls = getClass(`
      import { Command, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Command({ async: true }) async login() {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.commands[0]!.options.async).toBe(true);
  });

  test('VE-10: @Command parameters', () => {
    const cls = getClass(`
      import { Command, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Command() add(a: number, b: string) {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.commands[0]!.parameters).toHaveLength(2);
    expect(vm.commands[0]!.parameters[0]!.name).toBe('a');
    expect(vm.commands[0]!.parameters[0]!.tsType).toBe('number');
    expect(vm.commands[0]!.parameters[0]!.qmlType).toBe('real');
    expect(vm.commands[0]!.parameters[1]!.name).toBe('b');
    expect(vm.commands[0]!.parameters[1]!.tsType).toBe('string');
    expect(vm.commands[0]!.parameters[1]!.qmlType).toBe('string');
  });

  test('VE-11: @Command throttle', () => {
    const cls = getClass(`
      import { Command, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Command({ throttle: 'debounce', throttleMs: 300 }) search() {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.commands[0]!.options.throttle).toBe('debounce');
    expect(vm.commands[0]!.options.throttleMs).toBe(300);
  });

  test('VE-12: @Effect extraction', () => {
    const cls = getClass(`
      import { Effect, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Effect() notify!: () => void;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.effects).toHaveLength(1);
    expect(vm.effects[0]!.fieldName).toBe('notify');
    expect(vm.effects[0]!.isFunctionTyped).toBe(true);
  });

  test('VE-13: @Effect alias', () => {
    const cls = getClass(`
      import { Effect, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Effect({ alias: 'alert' }) notify!: () => void;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.effects[0]!.qmlName).toBe('alert');
  });

  test('VE-14: lifecycle methods detected', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        onMounted() {}
        onUnmounting() {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.lifecycle.hasOnMounted).toBe(true);
    expect(vm.lifecycle.hasOnUnmounting).toBe(true);
    expect(vm.lifecycle.hasOnBeforeHotReload).toBe(false);
    expect(vm.lifecycle.hasOnAfterHotReload).toBe(false);
    expect(vm.lifecycle.hasOnVisibilityChanged).toBe(false);
  });

  test('VE-19: @State explicit qmlType override', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State({ qmlType: 'int' }) count = 0; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.qmlType).toBe('int');
  });

  test('VE-20: @State deferred', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State({ deferred: true }) data = ''; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.options.deferred).toBe(true);
  });

  test('VE-21: @Effect with parameters — structured', () => {
    const cls = getClass(`
      import { Effect, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Effect() show!: (msg: string) => void;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.effects[0]!.parameters).toHaveLength(1);
    expect(vm.effects[0]!.parameters[0]!.name).toBe('msg');
    expect(vm.effects[0]!.parameters[0]!.tsType).toBe('string');
  });

  test('VE-21b: @Effect function type alias is treated as function-typed', () => {
    const cls = getClass(`
      import { Effect, State } from './decorators.js';
      type Notify = (msg: string) => void;
      export class TestVM {
        @State() x = 0;
        @Effect() notify!: Notify;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.effects[0]!.isFunctionTyped).toBe(true);
    expect(vm.effects[0]!.parameters).toEqual([{ name: 'msg', tsType: 'string' }]);
  });

  test('negative numeric decorator options are parsed as numbers', () => {
    const cls = getClass(`
      import { Command, Effect, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Command({ throttleMs: -1 }) search() {}
        @Effect({ id: -7 }) notify!: () => void;
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.commands[0]!.options.throttleMs).toBe(-1);
    expect(vm.effects[0]!.options.id).toBe(-7);
  });

  test('VE-23: constructor param extraction', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      class SomeService {}
      export class TestVM {
        @State() x = 0;
        constructor(service: SomeService) {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.constructorParams).toHaveLength(1);
    expect(vm.constructorParams[0]!.name).toBe('service');
    expect(vm.constructorParams[0]!.type).toBe('SomeService');
    expect(vm.constructorParams[0]!.isService).toBe(false);
  });

  test('VE-25: non-exported ViewModel still extracts', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      class TestVM { @State() x = 0; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.className).toBe('TestVM');
    expect(vm.states).toHaveLength(1);
    expect(vm.isExported).toBe(false);
  });

  test('VE-27: @State with any type still extracts', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() data: any; }
    `);
    const vm = extractor.extract(cls);
    expect(vm.states[0]!.fieldName).toBe('data');
  });

  test('VE-28: all 5 lifecycle methods detected', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        onMounted() {}
        onUnmounting() {}
        onBeforeHotReload() {}
        onAfterHotReload(snapshot: Record<string, unknown> | null) {}
        onVisibilityChanged(visible: boolean) {}
      }
    `);
    const vm = extractor.extract(cls);
    expect(vm.lifecycle.hasOnMounted).toBe(true);
    expect(vm.lifecycle.hasOnUnmounting).toBe(true);
    expect(vm.lifecycle.hasOnBeforeHotReload).toBe(true);
    expect(vm.lifecycle.hasOnAfterHotReload).toBe(true);
    expect(vm.lifecycle.hasOnVisibilityChanged).toBe(true);
  });
});

describe('ViewModelExtractor — validate()', () => {
  test('VE-16: duplicate alias triggers QMLTS-A006', () => {
    const cls = getClass(`
      import { State, Command } from './decorators.js';
      export class TestVM {
        @State({ alias: 'name' }) firstName = '';
        @Command({ alias: 'name' }) doSomething() {}
      }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    expect(diags.some((d) => d.code === 'QMLTS-A006')).toBe(true);
  });

  test('VE-17: unmappable type triggers QMLTS-A003', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() data!: Map<string, number>; }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    expect(diags.some((d) => d.code === 'QMLTS-A003')).toBe(true);
  });

  test('VE-18: no @State ViewModel triggers QMLTS-A001 warning', () => {
    const cls = getClass(`
      import { Command } from './decorators.js';
      export class TestVM { @Command() doIt() {} }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    const a001 = diags.find((d) => d.code === 'QMLTS-A001');
    expect(a001).toBeDefined();
    expect(a001!.severity).toBe('warning');
  });

  test('VE-22: @Effect non-function type triggers QMLTS-A005', () => {
    const cls = getClass(`
      import { Effect, State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        @Effect() broken!: string;
      }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    expect(diags.some((d) => d.code === 'QMLTS-A005')).toBe(true);
  });

  test('VE-24: constructor param without type triggers QMLTS-A010', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM {
        @State() x = 0;
        constructor(x: any) {}
      }
    `);
    const vm = extractor.extract(cls);
    // Simulate untyped param (empty type string) since ts-morph always resolves 'any'
    const vm2 = {
      ...vm,
      constructorParams: [{ name: 'x', type: '', isService: false }],
    };
    const diags = extractor.validate(vm2 as AnalyzedViewModel);
    expect(diags.some((d) => d.code === 'QMLTS-A010')).toBe(true);
  });

  test('VE-25-validate: non-exported ViewModel triggers QMLTS-A007 warning', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      class TestVM { @State() x = 0; }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    const a007 = diags.find((d) => d.code === 'QMLTS-A007');
    expect(a007).toBeDefined();
    expect(a007!.severity).toBe('warning');
  });

  test('VE-26: @Command on abstract method triggers QMLTS-A004', () => {
    const cls = getClass(`
      import { Command, State } from './decorators.js';
      export abstract class TestVM {
        @State() x = 0;
        @Command() abstract doSomething(): void;
      }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    expect(diags.some((d) => d.code === 'QMLTS-A004')).toBe(true);
  });

  test('VE-27-validate: @State with unmappable type triggers diagnostic', () => {
    const cls = getClass(`
      import { State } from './decorators.js';
      export class TestVM { @State() data: any; }
    `);
    const vm = extractor.extract(cls);
    const diags = extractor.validate(vm);
    // 'any' type cannot be mapped to QML, so A003 fires
    expect(diags.some((d) => d.code === 'QMLTS-A003' || d.code === 'QMLTS-A002')).toBe(true);
  });
});

describe('ViewModelExtractor — generateSchema()', () => {
  test('VE-15: generates correct ViewModelSchema', () => {
    const cls = getClass(`
      import { State, Command, Effect } from './decorators.js';
      export class TestVM {
        @State() username = '';
        @State({ readonly: true }) isLoading = false;
        @Command({ async: true }) async login() {}
        @Effect() focusPassword!: () => void;
        onMounted() {}
      }
    `);
    const vm = extractor.extract(cls);
    const idAlloc = createIdAllocator();
    const schema = extractor.generateSchema(vm, idAlloc);

    expect(schema.className).toBe('TestVM');
    expect(schema.version).toBe(1);

    expect(schema.states).toHaveLength(2);
    expect(schema.states[0]!.name).toBe('username');
    expect(schema.states[0]!.qmlType).toBe('string');
    expect(schema.states[0]!.memberId).toBe(0);
    expect(schema.states[0]!.readonly).toBe(false);
    expect(schema.states[1]!.name).toBe('isLoading');
    expect(schema.states[1]!.qmlType).toBe('bool');
    expect(schema.states[1]!.memberId).toBe(1);
    expect(schema.states[1]!.readonly).toBe(true);

    expect(schema.commands).toHaveLength(1);
    expect(schema.commands[0]!.name).toBe('login');
    expect(schema.commands[0]!.async).toBe(true);
    expect(schema.commands[0]!.commandId).toBeGreaterThan(0);

    expect(schema.effects).toHaveLength(1);
    expect(schema.effects[0]!.name).toBe('focusPassword');
    expect(schema.effects[0]!.effectId).toBeGreaterThan(0);

    expect(schema.lifecycle.onMounted).toBe(true);
    expect(schema.lifecycle.onUnmounting).toBe(false);
    expect(schema.lifecycle.hotReload).toBe(false);
  });
});
