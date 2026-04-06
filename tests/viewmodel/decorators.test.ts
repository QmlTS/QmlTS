import { describe, expect, test } from 'bun:test';
import { Command, Effect, getViewModelMetadata, State } from '../../src/viewmodel/index.js';

describe('Decorator metadata storage', () => {
  test('DEC-01: @State() stores field name', () => {
    class VM {
      @State() username = '';
    }
    new VM();
    const meta = getViewModelMetadata(VM);
    expect(meta).toBeDefined();
    expect(meta!.states).toHaveLength(1);
    expect(meta!.states[0]!.name).toBe('username');
  });

  test('DEC-02: @State({ alias }) propagates alias', () => {
    class VM {
      @State({ alias: 'user' }) username = '';
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options.alias).toBe('user');
  });

  test('DEC-03: @State({ qmlType }) propagates qmlType', () => {
    class VM {
      @State({ qmlType: 'int' }) count = 0;
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options.qmlType).toBe('int');
  });

  test('DEC-04: @State({ readonly: true }) propagates readonly', () => {
    class VM {
      @State({ readonly: true }) label = 'hi';
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options.readonly).toBe(true);
  });

  test('DEC-05: @State({ deferred: true }) propagates deferred', () => {
    class VM {
      @State({ deferred: true }) heavy = null;
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options.deferred).toBe(true);
  });

  test('DEC-06: @State() with all options propagates all simultaneously', () => {
    class VM {
      @State({ alias: 'a', qmlType: 'string', readonly: true, deferred: true })
      field = '';
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    const opts = meta.states[0]!.options;
    expect(opts.alias).toBe('a');
    expect(opts.qmlType).toBe('string');
    expect(opts.readonly).toBe(true);
    expect(opts.deferred).toBe(true);
  });

  test('DEC-07: @Command() stores method name', () => {
    class VM {
      @Command() login() {}
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.commands).toHaveLength(1);
    expect(meta.commands[0]!.name).toBe('login');
  });

  test('DEC-08: @Command({ id: 42 }) propagates id as number', () => {
    class VM {
      @Command({ id: 42 }) submit() {}
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.commands[0]!.options.id).toBe(42);
    expect(typeof meta.commands[0]!.options.id).toBe('number');
  });

  test('DEC-09: @Command({ alias, async, throttle, throttleMs }) propagates all options', () => {
    class VM {
      @Command({ alias: 'doLogin', async: true, throttle: 'debounce', throttleMs: 300 })
      login() {}
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    const opts = meta.commands[0]!.options;
    expect(opts.alias).toBe('doLogin');
    expect(opts.async).toBe(true);
    expect(opts.throttle).toBe('debounce');
    expect(opts.throttleMs).toBe(300);
  });

  test('DEC-10: @Effect() stores field name', () => {
    class VM {
      @Effect() loginFailed = () => {};
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.effects).toHaveLength(1);
    expect(meta.effects[0]!.name).toBe('loginFailed');
  });

  test('DEC-11: @Effect({ id: 7 }) propagates id as number', () => {
    class VM {
      @Effect({ id: 7 }) notify = () => {};
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.effects[0]!.options.id).toBe(7);
    expect(typeof meta.effects[0]!.options.id).toBe('number');
  });

  test('DEC-12: @Effect({ alias }) propagates alias', () => {
    class VM {
      @Effect({ alias: 'onNotify' }) notify = () => {};
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.effects[0]!.options.alias).toBe('onNotify');
  });

  test('DEC-13: multiple decorators on one class accumulate correctly', () => {
    class VM {
      @State() username = '';
      @State() password = '';
      @Effect() loginFailed = () => {};
      @Command() login() {}
      @Command() logout() {}
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states).toHaveLength(2);
    expect(meta.commands).toHaveLength(2);
    expect(meta.effects).toHaveLength(1);
    expect(meta.states.map((s) => s.name)).toEqual(['username', 'password']);
    expect(meta.commands.map((c) => c.name)).toEqual(['login', 'logout']);
    expect(meta.effects.map((e) => e.name)).toEqual(['loginFailed']);
  });

  test('DEC-14: empty/omitted options default to empty object', () => {
    class VM {
      @State() field = '';
      @Command() method() {}
      @Effect() signal = () => {};
    }
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options).toEqual({});
    expect(meta.commands[0]!.options).toEqual({});
    expect(meta.effects[0]!.options).toEqual({});
  });
});

describe('Lazy-registration behavior', () => {
  test('DEC-15: getViewModelMetadata(DecoratedClass) returns undefined before any instance', () => {
    class VM {
      @State() x = 0;
    }
    expect(getViewModelMetadata(VM)).toBeUndefined();
  });

  test('DEC-16: getViewModelMetadata(DecoratedClass) returns metadata after first instance', () => {
    class VM {
      @State() x = 0;
    }
    expect(getViewModelMetadata(VM)).toBeUndefined();
    new VM();
    const meta = getViewModelMetadata(VM);
    expect(meta).toBeDefined();
    expect(meta!.states).toHaveLength(1);
    expect(meta!.states[0]!.name).toBe('x');
  });

  test('DEC-17: getViewModelMetadata(instance) works with an instance argument', () => {
    class VM {
      @State() x = 0;
    }
    const vm = new VM();
    const meta = getViewModelMetadata(vm);
    expect(meta).toBeDefined();
    expect(meta!.className).toBe('VM');
    expect(meta!.states[0]!.name).toBe('x');
  });

  test('DEC-18: second/third instantiation does not duplicate metadata entries', () => {
    class VM {
      @State() a = 0;
      @Command() b() {}
      @Effect() c = () => {};
    }
    new VM();
    new VM();
    new VM();
    const meta = getViewModelMetadata(VM)!;
    expect(meta.states).toHaveLength(1);
    expect(meta.commands).toHaveLength(1);
    expect(meta.effects).toHaveLength(1);
  });

  test('DEC-19: getViewModelMetadata(UndecoratedClass) returns undefined', () => {
    class Plain {
      x = 0;
    }
    new Plain();
    expect(getViewModelMetadata(Plain)).toBeUndefined();
  });

  test('DEC-20: base metadata still registers after subclass instantiation', () => {
    class BaseVM {
      @State() username = '';
    }

    class DerivedVM extends BaseVM {}

    new DerivedVM();
    expect(getViewModelMetadata(DerivedVM)?.states.map((s) => s.name)).toEqual(['username']);

    new BaseVM();
    expect(getViewModelMetadata(BaseVM)?.states.map((s) => s.name)).toEqual(['username']);
  });

  test('DEC-21: mutating the original options object does not mutate stored metadata', () => {
    const options = { alias: 'user', readonly: false };

    class VM {
      @State(options) username = '';
    }

    new VM();
    options.alias = 'mutated';
    options.readonly = true;

    const meta = getViewModelMetadata(VM)!;
    expect(meta.states[0]!.options.alias).toBe('user');
    expect(meta.states[0]!.options.readonly).toBe(false);
  });
});
