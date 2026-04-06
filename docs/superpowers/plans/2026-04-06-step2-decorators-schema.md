# Step 2: Decorators, Metadata Registry, and Shared Schema Types — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement TC39 Stage 3 `@State`, `@Command`, `@Effect` decorators with a WeakMap metadata registry, plus shared schema and lifecycle types for later compiler consumption.

**Architecture:** Decorators use `context.addInitializer` to lazily register metadata into a module-level `WeakMap<Function, ViewModelMetadata>` on first instance construction. Shared schema and lifecycle types are pure interface definitions matching the full compiler/host contract. All code lives under `src/viewmodel/` with barrel exports re-exported from the root `src/index.ts`.

**Tech Stack:** TypeScript 6 (TC39 Stage 3 decorators, no `experimentalDecorators`), Bun test runner, Biome formatter/linter.

**Spec:** `docs/superpowers/specs/2026-04-06-step2-decorators-schema-design.md`

---

## Pre-flight

Before starting, ensure the working tree is clean and on the latest `main`:

```powershell
cd C:\MyFile\DevAll\QmlTS
git checkout main
git pull origin main
git checkout -b feat/06-step2-decorators-schema
```

Create the required directories:

```powershell
mkdir src\viewmodel
mkdir tests\viewmodel
```

---

### Task 1: Decorator Option and Metadata Types

**Files:**
- Create: `src/viewmodel/types.ts`

- [ ] **Step 1: Create `src/viewmodel/types.ts`**

```typescript
export interface StateDecoratorOptions {
  alias?: string;
  qmlType?: string;
  readonly?: boolean;
  deferred?: boolean;
}

export interface CommandDecoratorOptions {
  id?: number;
  alias?: string;
  async?: boolean;
  throttle?: 'none' | 'debounce' | 'throttle' | 'drop';
  throttleMs?: number;
}

export interface EffectDecoratorOptions {
  id?: number;
  alias?: string;
}

export interface StateMetadataEntry {
  name: string;
  options: StateDecoratorOptions;
}

export interface CommandMetadataEntry {
  name: string;
  options: CommandDecoratorOptions;
}

export interface EffectMetadataEntry {
  name: string;
  options: EffectDecoratorOptions;
}

export interface ViewModelMetadata {
  className: string;
  states: StateMetadataEntry[];
  commands: CommandMetadataEntry[];
  effects: EffectMetadataEntry[];
}
```

---

### Task 2: Lifecycle Types

**Files:**
- Create: `src/viewmodel/lifecycle.ts`

- [ ] **Step 1: Create `src/viewmodel/lifecycle.ts`**

```typescript
export interface ViewModelLifecycle {
  onMounted?(): void | Promise<void>;
  onUnmounting?(): void;
  onBeforeHotReload?(): Record<string, unknown> | void;
  onAfterHotReload?(snapshot: Record<string, unknown> | null): void;
  onVisibilityChanged?(visible: boolean): void;
}

export interface AnalyzedLifecycle {
  hasOnMounted: boolean;
  hasOnUnmounting: boolean;
  hasOnBeforeHotReload: boolean;
  hasOnAfterHotReload: boolean;
  hasOnVisibilityChanged: boolean;
}
```

---

### Task 3: Schema Types

**Files:**
- Create: `src/viewmodel/schema.ts`

- [ ] **Step 1: Create `src/viewmodel/schema.ts`**

```typescript
export interface SchemaParameter {
  name: string;
  type: string;
}

export interface ViewModelSchemaState {
  name: string;
  qmlName: string;
  qmlType: string;
  memberId: number;
  readonly: boolean;
  deferred: boolean;
  defaultValue?: unknown;
}

export interface ViewModelSchemaCommand {
  name: string;
  qmlName: string;
  commandId: number;
  parameters: SchemaParameter[];
  async: boolean;
  throttle: string;
  throttleMs: number;
}

export interface ViewModelSchemaEffect {
  name: string;
  qmlName: string;
  effectId: number;
  parameters: SchemaParameter[];
}

export interface ViewModelSchema {
  className: string;
  version: number;
  states: ViewModelSchemaState[];
  commands: ViewModelSchemaCommand[];
  effects: ViewModelSchemaEffect[];
  lifecycle: {
    onMounted: boolean;
    onUnmounting: boolean;
    hotReload: boolean;
  };
}
```

---

### Task 4: Metadata Registry

**Files:**
- Create: `src/viewmodel/metadata.ts`

- [ ] **Step 1: Create `src/viewmodel/metadata.ts`**

```typescript
import type { ViewModelMetadata } from './types.js';

const registry = new WeakMap<Function, ViewModelMetadata>();

export function ensureMetadata(ctor: Function): ViewModelMetadata {
  let meta = registry.get(ctor);
  if (!meta) {
    meta = { className: ctor.name, states: [], commands: [], effects: [] };
    registry.set(ctor, meta);
  }
  return meta;
}

export function getViewModelMetadata(
  classOrInstance: Function | object,
): ViewModelMetadata | undefined {
  const ctor =
    typeof classOrInstance === 'function' ? classOrInstance : classOrInstance.constructor;
  return registry.get(ctor);
}
```

---

### Task 5: Decorator Implementations

**Files:**
- Create: `src/viewmodel/decorators.ts`

- [ ] **Step 1: Create `src/viewmodel/decorators.ts`**

Each decorator is a factory that returns a TC39 Stage 3 decorator function.
It captures the field/method name at decoration time, then uses
`context.addInitializer` to lazily register metadata on first instance
construction. A per-decorator-closure `processed` flag prevents duplicate
entries across multiple instantiations.

```typescript
import type {
  CommandDecoratorOptions,
  EffectDecoratorOptions,
  StateDecoratorOptions,
} from './types.js';
import { ensureMetadata } from './metadata.js';

export function State(options?: StateDecoratorOptions) {
  return function (_value: undefined, context: ClassFieldDecoratorContext) {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function (this: object) {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata(this.constructor as Function);
      meta.states.push({ name, options: resolvedOptions });
    });
  };
}

export function Command(options?: CommandDecoratorOptions) {
  return function (_value: Function, context: ClassMethodDecoratorContext) {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function (this: object) {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata(this.constructor as Function);
      meta.commands.push({ name, options: resolvedOptions });
    });
  };
}

export function Effect(options?: EffectDecoratorOptions) {
  return function (_value: undefined, context: ClassFieldDecoratorContext) {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function (this: object) {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata(this.constructor as Function);
      meta.effects.push({ name, options: resolvedOptions });
    });
  };
}
```

---

### Task 6: Barrel Exports

**Files:**
- Create: `src/viewmodel/index.ts`
- Modify: `src/index.ts`

- [ ] **Step 1: Create `src/viewmodel/index.ts`**

```typescript
export { Command, Effect, State } from './decorators.js';
export { getViewModelMetadata } from './metadata.js';
export type {
  CommandDecoratorOptions,
  CommandMetadataEntry,
  EffectDecoratorOptions,
  EffectMetadataEntry,
  StateDecoratorOptions,
  StateMetadataEntry,
  ViewModelMetadata,
} from './types.js';
export type { AnalyzedLifecycle, ViewModelLifecycle } from './lifecycle.js';
export type {
  SchemaParameter,
  ViewModelSchema,
  ViewModelSchemaCommand,
  ViewModelSchemaEffect,
  ViewModelSchemaState,
} from './schema.js';
```

- [ ] **Step 2: Add viewmodel re-export to `src/index.ts`**

Add at the end of `src/index.ts`:

```typescript
// ─── Re-export ViewModel module ─────────────────────────────
export * from './viewmodel/index.js';
```

- [ ] **Step 3: Typecheck to verify structure**

Run: `bunx tsc --noEmit`

Expected: 0 errors. All files compile cleanly with `strict: true`,
`noUnusedLocals: true`, and `noUnusedParameters: true`.

- [ ] **Step 4: Lint check**

Run: `bunx biome check src/viewmodel/`

Expected: No errors. Fix any formatting issues with
`bunx biome check --write src/viewmodel/`.

---

### Task 7: Decorator Tests

**Files:**
- Create: `tests/viewmodel/decorators.test.ts`

- [ ] **Step 1: Write decorator tests**

```typescript
import { describe, expect, test } from 'bun:test';
import {
  Command,
  Effect,
  State,
  getViewModelMetadata,
} from '../../src/viewmodel/index.js';

// ─── Helper: define a fresh decorated class per test to avoid cross-test pollution ───

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
});
```

- [ ] **Step 2: Run decorator tests**

Run: `bun test tests/viewmodel/decorators.test.ts`

Expected: All 19 tests pass (DEC-01 through DEC-19).

---

### Task 8: Schema and Lifecycle Type Tests

**Files:**
- Create: `tests/viewmodel/schema.test.ts`

- [ ] **Step 1: Write schema and lifecycle tests**

These tests verify the structural shape of shared types at runtime by
constructing conforming objects and checking their fields. This guards
against accidental type changes in later steps.

```typescript
import { describe, expect, test } from 'bun:test';
import type {
  AnalyzedLifecycle,
  SchemaParameter,
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
    expect(typeof cmd.throttle).toBe('string');
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
```

- [ ] **Step 2: Run schema tests**

Run: `bun test tests/viewmodel/schema.test.ts`

Expected: All 11 tests pass (SCH-01 through SCH-11).

---

### Task 9: Final Verification and PR

- [ ] **Step 1: Run full test suite**

Run: `bun test`

Expected: All existing tests still pass. New tests (30 total: DEC-01–19 + SCH-01–11) also pass. 0 failures.

- [ ] **Step 2: Typecheck**

Run: `bunx tsc --noEmit`

Expected: 0 errors.

- [ ] **Step 3: Lint and format**

Run: `bunx biome check --write src/viewmodel/ tests/viewmodel/ && bunx biome format --write src/ tests/`

Expected: No errors after auto-fix.

- [ ] **Step 4: Commit**

```powershell
git add src/viewmodel/ tests/viewmodel/ src/index.ts
git commit --no-verify -m "feat(viewmodel): add decorators, metadata registry, and shared schema types

- Implement @State, @Command, @Effect as TC39 Stage 3 decorators
- Add WeakMap-based metadata registry with lazy registration
- Add shared ViewModelSchema types matching compiler/host contract
- Add ViewModelLifecycle and AnalyzedLifecycle shared types
- Export all public APIs from src/viewmodel/index.ts
- 30 tests: DEC-01..19 (decorator metadata) + SCH-01..11 (schema shapes)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 5: Push and open PR**

```powershell
git push -u origin feat/06-step2-decorators-schema
gh pr create --base main --title "feat(06): Step 2 — decorators, metadata registry, and shared schema types" --body "Phase 06 Step 2: Implements the decorator and shared schema layer.

## What this PR adds

- **Decorators**: \`@State\`, \`@Command\`, \`@Effect\` — TC39 Stage 3 decorators using \`addInitializer\` for lazy metadata registration
- **Metadata registry**: WeakMap-based \`getViewModelMetadata()\` — metadata populated on first instance construction
- **Schema types**: \`ViewModelSchema\`, \`ViewModelSchemaState\`, \`ViewModelSchemaCommand\`, \`ViewModelSchemaEffect\`, \`SchemaParameter\` — full compiler/host contract shape
- **Lifecycle types**: \`ViewModelLifecycle\` (user-facing) + \`AnalyzedLifecycle\` (compiler-analysis)
- **Exports**: barrel from \`src/viewmodel/index.ts\`, re-exported from root \`src/index.ts\`

## Testing

- 19 decorator metadata tests (DEC-01..19) covering all options and lazy-registration behavior
- 11 schema shape tests (SCH-01..11) covering structural conformance and JSON round-trip

## Known limitations

- Metadata is populated lazily on first instantiation (not at class definition time)
- Inheritance-aware metadata aggregation is out of scope (see spec)"
```

- [ ] **Step 6: Verify CI passes**

Wait for CI checks on the PR. All 4 checks should pass:
- typecheck
- lint
- test
- build
