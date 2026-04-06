# Step 2: Decorators, Metadata Registry, and Shared Schema Types

Phase 06 — Compiler, Step 2 of 8

## Problem

The compiler cannot consume ViewModel declarations without real `@State`,
`@Command`, and `@Effect` decorators, a metadata registry, and shared schema
types. Step 2 provides these foundations so later compiler steps can import
them directly.

## Approach

- TC39 Stage 3 decorators (no `experimentalDecorators`, no `reflect-metadata`)
- WeakMap-based metadata registry (no `context.metadata` / `Symbol.metadata`)
- Metadata populated lazily on first instance construction via `addInitializer`
- Shared schema and lifecycle types exported for later compiler consumption
- All code under `src/viewmodel/`, barrel-exported from root

## File Structure

```
src/viewmodel/
├── decorators.ts      @State, @Command, @Effect factory functions
├── metadata.ts        WeakMap registry, ensureMetadata(), getViewModelMetadata()
├── schema.ts          ViewModelSchema and related shared schema types
├── lifecycle.ts       ViewModelLifecycle + AnalyzedLifecycle shared types
├── types.ts           Decorator option interfaces, internal metadata types
└── index.ts           barrel exports

tests/viewmodel/
├── decorators.test.ts runtime decorator metadata + lazy-registration tests
└── schema.test.ts     schema type structural tests
```

`src/index.ts` adds `export * from './viewmodel/index.js'`.

## Decorator API

### @State

Field decorator. Marks a class field as a reactive QML property.

```typescript
function State(options?: StateDecoratorOptions): (
  value: undefined,
  context: ClassFieldDecoratorContext,
) => void;
```

### @Command

Method decorator. Marks a class method as an invocable command.

```typescript
function Command(options?: CommandDecoratorOptions): (
  value: Function,
  context: ClassMethodDecoratorContext,
) => void;
```

### @Effect

Field decorator. Marks a class field as an effect/signal.

```typescript
function Effect(options?: EffectDecoratorOptions): (
  value: undefined,
  context: ClassFieldDecoratorContext,
) => void;
```

### Usage

```typescript
class LoginViewModel {
  @State() username = '';
  @State({ alias: 'pwd', readonly: true }) password = '';
  @Effect() loginFailed = () => {};
  @Command({ async: true }) async login() { /* ... */ }
}
```

## Decorator Option Interfaces

```typescript
interface StateDecoratorOptions {
  alias?: string;
  qmlType?: string;
  readonly?: boolean;
  deferred?: boolean;
}

interface CommandDecoratorOptions {
  id?: number;
  alias?: string;
  async?: boolean;
  throttle?: 'none' | 'debounce' | 'throttle' | 'drop';
  throttleMs?: number;
}

interface EffectDecoratorOptions {
  id?: number;
  alias?: string;
}
```

## Metadata Registry

### Storage

A module-level `WeakMap<Function, ViewModelMetadata>` stores decorator
metadata keyed by class constructor.

### Lazy Registration

Decorators use `context.addInitializer` to register metadata on first
instance construction. This means:

- `getViewModelMetadata(DecoratedClass)` returns `undefined` if no instance
  has been created yet.
- `getViewModelMetadata(DecoratedClass)` returns metadata after at least one
  instance has been constructed.
- `getViewModelMetadata(instance)` works by resolving `instance.constructor`.
- Multiple instantiations do not duplicate metadata entries (per-decorator
  `processed` flag).

This is acceptable because the compiler (later steps) uses ts-morph for
static AST analysis, not runtime decorator metadata.

### Inheritance Limitation

Inheritance-aware metadata aggregation is explicitly out of scope for
Step 2. The `addInitializer` callback resolves `this.constructor`, which
in a subclass points to the subclass constructor, not the declaring class.
This means metadata from a decorated base class may be incorrectly
attributed to a subclass if the base is first instantiated through the
subclass.

This is acceptable because:

- ViewModels are typically flat classes, not deeply inherited hierarchies.
- The compiler uses ts-morph for static analysis with full class-hierarchy
  awareness.
- If inheritance-aware runtime metadata is needed later, it can be added
  without breaking the existing flat-class behavior.

### Internal Metadata Shape

```typescript
interface ViewModelMetadata {
  className: string;
  states: StateMetadataEntry[];
  commands: CommandMetadataEntry[];
  effects: EffectMetadataEntry[];
}

interface StateMetadataEntry {
  name: string;
  options: StateDecoratorOptions;
}

interface CommandMetadataEntry {
  name: string;
  options: CommandDecoratorOptions;
}

interface EffectMetadataEntry {
  name: string;
  options: EffectDecoratorOptions;
}
```

### Public API

```typescript
function getViewModelMetadata(
  classOrInstance: Function | object,
): ViewModelMetadata | undefined;
```

## Shared Schema Types

Shared types matching the core compiler/host contract. Step 2 defines the
full type shapes so later steps do not need to revise them. Schema
generation logic belongs to later steps.

```typescript
interface ViewModelSchema {
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

interface ViewModelSchemaState {
  name: string;
  qmlName: string;
  qmlType: string;
  memberId: number;
  readonly: boolean;
  deferred: boolean;
  defaultValue?: unknown;
}

interface ViewModelSchemaCommand {
  name: string;
  qmlName: string;
  commandId: number;
  parameters: SchemaParameter[];
  async: boolean;
  throttle: string;
  throttleMs: number;
}

interface ViewModelSchemaEffect {
  name: string;
  qmlName: string;
  effectId: number;
  parameters: SchemaParameter[];
}

interface SchemaParameter {
  name: string;
  type: string;
}
```

## Lifecycle Types

Two distinct lifecycle types are exported. They serve different roles:

### ViewModelLifecycle

The user/ViewModel-facing lifecycle interface. Defines the lifecycle hook
methods a ViewModel class may implement.

```typescript
interface ViewModelLifecycle {
  onMounted?(): void | Promise<void>;
  onUnmounting?(): void;
  onBeforeHotReload?(): Record<string, unknown> | void;
  onAfterHotReload?(snapshot: Record<string, unknown> | null): void;
  onVisibilityChanged?(visible: boolean): void;
}
```

### AnalyzedLifecycle

A compiler-analysis result type. Not inferred by runtime decorators — will
be populated by the ts-morph extractor in a later step.

```typescript
interface AnalyzedLifecycle {
  hasOnMounted: boolean;
  hasOnUnmounting: boolean;
  hasOnBeforeHotReload: boolean;
  hasOnAfterHotReload: boolean;
  hasOnVisibilityChanged: boolean;
}
```

## Testing Plan

### decorators.test.ts (~18-22 tests)

Basic metadata storage:

- DEC-01: `@State()` stores field name in metadata
- DEC-02: `@State({ alias })` propagates alias option
- DEC-03: `@State({ qmlType })` propagates qmlType option
- DEC-04: `@State({ readonly: true })` propagates readonly option
- DEC-05: `@State({ deferred: true })` propagates deferred option
- DEC-06: `@State()` with all options propagates all simultaneously
- DEC-07: `@Command()` stores method name in metadata
- DEC-08: `@Command({ id: 42 })` propagates id as number
- DEC-09: `@Command({ alias, async, throttle, throttleMs })` propagates all options
- DEC-10: `@Effect()` stores field name in metadata
- DEC-11: `@Effect({ id: 7 })` propagates id as number
- DEC-12: `@Effect({ alias })` propagates alias option
- DEC-13: Multiple decorators on one class accumulate correctly
- DEC-14: Empty/omitted options default correctly

Lazy-registration behavior:

- DEC-15: `getViewModelMetadata(DecoratedClass)` returns `undefined` before any instance
- DEC-16: `getViewModelMetadata(DecoratedClass)` returns metadata after first instance
- DEC-17: `getViewModelMetadata(instance)` works with an instance argument
- DEC-18: Second/third instantiation does not duplicate metadata entries
- DEC-19: `getViewModelMetadata(UndecoratedClass)` returns `undefined`

### schema.test.ts (~8-10 tests)

- SCH-01: `ViewModelSchema` has correct structural shape including `lifecycle`
- SCH-02: `ViewModelSchemaState.memberId` is number
- SCH-03: `ViewModelSchemaState` includes `deferred` and optional `defaultValue`
- SCH-04: `ViewModelSchemaCommand.commandId` is number
- SCH-05: `ViewModelSchemaCommand` includes `throttle` and `throttleMs`
- SCH-06: `ViewModelSchemaEffect.effectId` is number
- SCH-07: `ViewModelSchema.version` is number
- SCH-08: `ViewModelSchema.lifecycle` has `onMounted`, `onUnmounting`, `hotReload` booleans
- SCH-09: `AnalyzedLifecycle` has all five boolean flags
- SCH-10: `ViewModelLifecycle` has all five optional hook methods
- SCH-11: Schema objects round-trip through JSON.parse(JSON.stringify())

## Scope Boundaries

Step 2 includes:

- Decorator functions (`@State`, `@Command`, `@Effect`)
- WeakMap metadata registry with lazy registration
- Shared schema type definitions (full compiler/host contract shape)
- Shared lifecycle types (`ViewModelLifecycle` + `AnalyzedLifecycle`)
- Barrel exports from `src/viewmodel/index.ts`
- Root re-export from `src/index.ts`
- Tests for decorator metadata behavior and schema shapes

Step 2 does not include:

- Schema generation logic (later step)
- ViewModelExtractor / ts-morph analysis (later step)
- Compiler pipeline (later step)
- Runtime ViewModel instantiation beyond metadata tests
- Inheritance-aware metadata aggregation (see Inheritance Limitation)
