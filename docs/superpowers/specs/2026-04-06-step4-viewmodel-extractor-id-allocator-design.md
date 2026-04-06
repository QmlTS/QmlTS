# Step 4 — ViewModelExtractor & IdAllocator Design Spec

## Problem Statement

Step 3 (TsAnalyzer) discovers ViewModel class candidates (className, filePath, line, isExported) but does not extract their internals. Step 4 must deeply analyze each ViewModel class declaration to extract `@State` fields, `@Command` methods, `@Effect` fields, lifecycle methods, and constructor parameters — then produce a `ViewModelSchema` JSON structure for C++ host consumption.

Additionally, the compiler needs a stable ID allocation system for `memberId`, `commandId`, `effectId`, and auto-generated QML object IDs, supporting incremental compilation via snapshot/restore.

## Design Correction: TypeMapper Dependency

The original `QML/06-compiler/api.d.ts` specifies:

```typescript
export declare function createViewModelExtractor(
  typeMapper: import('../05-dsl-generator/api').TypeMapper,
): ViewModelExtractor;
```

**This is corrected.** The Phase 05 DSL generator's `TypeMapper` maps **QML → TypeScript** (for DSL code generation from Qt registry types). Step 4 needs the **reverse direction** — **TypeScript → QML** type inference for ViewModel extraction.

**Corrected design:**
- Step 4 implements a **compiler-local TS→QML type mapper** (`TsQmlTypeMap`)
- `createViewModelExtractor()` takes no external type mapper dependency
- The TS→QML type map is a simple static lookup, not registry-dependent
- This eliminates the incorrect coupling between compiler extraction and DSL generation

### Additional API Signature Corrections

The following API signatures are also corrected from the original `QML/06-compiler/api.d.ts`:

| Original (api.d.ts) | Corrected (Step 4) | Reason |
|---|---|---|
| `extract(classDeclaration: unknown, options?: AnalysisOptions)` | `extract(classDeclaration: ClassDeclaration)` | The parameter is always a ts-morph `ClassDeclaration`, not `unknown`. `AnalysisOptions` is a compiler-level config, not a per-extraction parameter; analysis behavior should be configured at the extractor factory level if needed, not per-call. |
| `generateSchema(vm: AnalyzedViewModel)` | `generateSchema(vm: AnalyzedViewModel, idAllocator: IdAllocator)` | Schema generation requires ID allocation. The original design implicitly assumed the extractor owns an internal allocator, but ID allocation is a cross-cutting concern shared by later compiler steps. Making the dependency explicit keeps the extractor and allocator properly separated. |
| `AnalyzedEffect.parameterTypes: readonly string[]` | `AnalyzedEffect.parameters: readonly AnalyzedEffectParameter[]` | The original design discards parameter names available from the TS function signature. Structured parameters preserve both name and type, so `generateSchema()` can use real extracted names instead of synthetic `arg0`, `arg1`. |

---

## Architecture

### File Layout

```
src/compiler/
├── viewmodel/                      # ViewModel extraction domain
│   ├── extractor-types.ts          # AnalyzedViewModel, AnalyzedState, AnalyzedCommand, etc.
│   ├── ts-qml-type-map.ts          # Compiler-local TS→QML type mapping
│   ├── viewmodel-extractor.ts      # ViewModelExtractorImpl + createViewModelExtractor()
│   └── index.ts                    # Barrel exports
├── ids/                            # ID allocation (reused by later compiler steps)
│   ├── id-allocator.ts             # IdAllocatorImpl + createIdAllocator()
│   └── index.ts                    # Barrel exports
└── index.ts                        # Updated compiler barrel
```

### Component Relationships

```
DiscoveredViewModel (from Step 3)
        │
        ▼
ViewModelExtractor.extract(classDeclaration)
        │
        ├── extractStates()      → AnalyzedState[]      (uses TsQmlTypeMap)
        ├── extractCommands()    → AnalyzedCommand[]     (uses TsQmlTypeMap)
        ├── extractEffects()     → AnalyzedEffect[]
        ├── extractLifecycle()   → AnalyzedLifecycle
        └── extractConstructor() → AnalyzedConstructorParam[]
        │
        ▼
AnalyzedViewModel
        │
        ├── ViewModelExtractor.validate(vm) → Diagnostic[]
        │
        ├── ViewModelExtractor.generateSchema(vm, idAllocator) → ViewModelSchema
        │       │
        │       ├── IdAllocator.allocateMemberId()   (states)
        │       ├── IdAllocator.allocateCommandId()  (commands)
        │       └── IdAllocator.allocateEffectId()   (effects)
        │
        ▼
ViewModelSchema JSON → C++ host
```

---

## Type Definitions

### extractor-types.ts

```typescript
import type { ClassDeclaration } from 'ts-morph';
import type { AnalyzedLifecycle } from '../../viewmodel/lifecycle.js';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic } from '../diagnostics.js';
import type { IdAllocator } from '../ids/index.js';

// Re-export AnalyzedLifecycle from viewmodel module (shared type)
export type { AnalyzedLifecycle };

export interface AnalyzedViewModel {
  readonly className: string;
  readonly filePath: string;
  readonly line: number;
  readonly states: readonly AnalyzedState[];
  readonly commands: readonly AnalyzedCommand[];
  readonly effects: readonly AnalyzedEffect[];
  readonly lifecycle: AnalyzedLifecycle;
  readonly constructorParams: readonly AnalyzedConstructorParam[];
}

export interface AnalyzedState {
  readonly fieldName: string;
  readonly tsType: string;
  readonly qmlType: string;
  readonly qmlName: string;
  readonly defaultValue?: string;
  readonly options: AnalyzedStateOptions;
  readonly line: number;
}

export interface AnalyzedStateOptions {
  readonly alias?: string;
  readonly qmlType?: string;
  readonly readonly?: boolean;
  readonly deferred?: boolean;
}

export interface AnalyzedCommand {
  readonly methodName: string;
  readonly qmlName: string;
  readonly parameters: readonly AnalyzedParameter[];
  readonly returnType: string;
  readonly options: AnalyzedCommandOptions;
  readonly bodyText?: string;
  readonly line: number;
}

export interface AnalyzedCommandOptions {
  readonly id?: number;
  readonly alias?: string;
  readonly async?: boolean;
  readonly throttle?: 'none' | 'debounce' | 'throttle' | 'drop';
  readonly throttleMs?: number;
}

export interface AnalyzedEffect {
  readonly fieldName: string;
  readonly qmlName: string;
  readonly parameters: readonly AnalyzedEffectParameter[];
  readonly options: AnalyzedEffectOptions;
  readonly line: number;
}

export interface AnalyzedEffectParameter {
  readonly name: string;
  readonly tsType: string;
}

export interface AnalyzedEffectOptions {
  readonly id?: number;
  readonly alias?: string;
}

export interface AnalyzedParameter {
  readonly name: string;
  readonly tsType: string;
  readonly qmlType: string;
  readonly optional: boolean;
  readonly defaultValue?: string;
}

export interface AnalyzedConstructorParam {
  readonly name: string;
  readonly type: string;
  readonly isService: boolean;
}

export interface ViewModelExtractor {
  extract(classDeclaration: ClassDeclaration): AnalyzedViewModel;
  generateSchema(vm: AnalyzedViewModel, idAllocator: IdAllocator): ViewModelSchema;
  validate(vm: AnalyzedViewModel): readonly Diagnostic[];
}
```

### Key Type Notes

- `AnalyzedStateOptions`, `AnalyzedCommandOptions`, `AnalyzedEffectOptions` mirror the user-facing decorator option types from `src/viewmodel/types.ts` but are compiler-side read-only extracted versions.
- `AnalyzedEffectParameter` is a narrower struct than `AnalyzedParameter` (used by commands). Effect parameters carry name and TS type only — no QML type mapping, optional flag, or default value — because effect parameters describe signal payloads, not callable method signatures.
- `AnalyzedConstructorParam.isService` is always `false` in Step 4. DI service classification is deferred to a later step. This is explicitly documented as a Step 4 limitation.
- `generateSchema()` takes an `IdAllocator` parameter so the extractor doesn't own ID allocation internally.

---

## TS→QML Type Map

### ts-qml-type-map.ts

A static, compiler-local mapping from TypeScript type text to QML type names. No registry dependency.

```typescript
const TS_TO_QML_MAP: Record<string, string> = {
  // Primitives
  string: 'string',
  number: 'real',
  boolean: 'bool',
  // Void
  void: 'void',
  // Common Qt value types
  Date: 'date',
  // QML special types
  'string[]': 'list<string>',
  'number[]': 'list<real>',
  'boolean[]': 'list<bool>',
};

export function mapTsTypeToQml(tsType: string): string | undefined {
  return TS_TO_QML_MAP[tsType];
}
```

**Behavior:**
- Returns `undefined` for unmappable types → triggers QMLTS-A003
- If a `@State` has an explicit `qmlType` option, that overrides the map lookup
- Array types (`T[]`) that aren't in the static map fall through to undefined

---

## ViewModelExtractor Implementation

### extract(classDeclaration)

1. **Read class metadata**: className, filePath (from source file), line number
2. **Extract @State fields**: iterate class properties, find those with `@State()` decorator
   - Resolve field type via `getType().getText()` (ts-morph type inference)
   - Map TS type → QML type via `TsQmlTypeMap`
   - If `options.qmlType` is set, use that override instead
   - Read initializer expression as `defaultValue` (source text)
   - Resolve `qmlName` = `options.alias ?? fieldName`
   - Read `readonly`, `deferred` from decorator options
3. **Extract @Command methods**: iterate class methods with `@Command()` decorator
   - Extract parameter list (name, type, optional, default)
   - Map parameter TS types → QML types
   - Read return type text
   - Detect async methods (either `options.async` or TS `async` keyword)
   - Read `throttle`, `throttleMs` from options
   - Capture body text for debugging
   - Resolve `qmlName` = `options.alias ?? methodName`
4. **Extract @Effect fields**: iterate class properties with `@Effect()` decorator
   - Validate field type is function-typed (e.g., `() => void`, `(msg: string) => void`)
   - Extract structured parameters from the function signature (name + TS type)
   - Resolve `qmlName` = `options.alias ?? fieldName`
5. **Extract lifecycle methods**: check for known method names
   - `onMounted`, `onUnmounting`, `onBeforeHotReload`, `onAfterHotReload`, `onVisibilityChanged`
   - Set boolean flags in `AnalyzedLifecycle`
6. **Extract constructor params**: iterate constructor parameters
   - Read name and type text
   - Set `isService = false` (DI classification deferred)

### Decorator Option Extraction

Decorators are read from the ts-morph AST as call expressions:
```typescript
@State({ alias: 'userName', readonly: true })
```
The extractor parses the first argument (object literal) to extract option values.

### validate(vm)

Produces `Diagnostic[]` for:

| Code | Condition | Severity |
|------|-----------|----------|
| QMLTS-A001 | ViewModel has no `@State` fields | warning |
| QMLTS-A002 | State field type cannot be inferred (no annotation, no initializer) | error |
| QMLTS-A003 | State field type not mappable to QML (and no explicit `qmlType`) | error |
| QMLTS-A004 | Command method has invalid signature (e.g., getter/setter) | error |
| QMLTS-A005 | Effect field is not function-typed | error |
| QMLTS-A006 | Duplicate `qmlName` across states/commands/effects | error |
| QMLTS-A007 | ViewModel class is not exported | warning |
| QMLTS-A010 | Constructor parameter type cannot be resolved | warning |

**Deferred diagnostics (not in Step 4):**
- QMLTS-A008: Unknown decorator option (TypeScript already rejects invalid option keys)
- QMLTS-A009: ViewModel nesting too deep (recursive analysis deferred)

### generateSchema(vm, idAllocator)

Produces a `ViewModelSchema` object:

```typescript
{
  className: vm.className,
  version: 1,
  states: vm.states.map(s => ({
    name: s.fieldName,
    qmlName: s.qmlName,
    qmlType: s.qmlType,
    memberId: idAllocator.allocateMemberId(vm.className, s.fieldName),
    readonly: s.options.readonly ?? false,
    deferred: s.options.deferred ?? false,
    defaultValue: s.defaultValue,
  })),
  commands: vm.commands.map(c => ({
    name: c.methodName,
    qmlName: c.qmlName,
    commandId: idAllocator.allocateCommandId(vm.className, c.methodName),
    parameters: c.parameters.map(p => ({ name: p.name, type: p.qmlType })),
    async: c.options.async ?? false,
    throttle: c.options.throttle ?? 'none',
    throttleMs: c.options.throttleMs ?? 0,
  })),
  effects: vm.effects.map(e => ({
    name: e.fieldName,
    qmlName: e.qmlName,
    effectId: idAllocator.allocateEffectId(vm.className, e.fieldName),
    parameters: e.parameters.map(p => ({ name: p.name, type: p.tsType })),
  })),
  lifecycle: {
    onMounted: vm.lifecycle.hasOnMounted,
    onUnmounting: vm.lifecycle.hasOnUnmounting,
    hotReload: vm.lifecycle.hasOnBeforeHotReload || vm.lifecycle.hasOnAfterHotReload,
  },
}
```

### Factory Function

```typescript
export function createViewModelExtractor(): ViewModelExtractor;
```

No external dependencies. The TS→QML type map is internal.

---

## IdAllocator Implementation

### id-allocator.ts

```typescript
export interface IdAllocator {
  allocateMemberId(vmClass: string, fieldName: string): number;
  allocateCommandId(vmClass: string, methodName: string): number;
  allocateEffectId(vmClass: string, fieldName: string): number;
  allocateObjectId(typeName: string): string;
  snapshot(): IdAllocationSnapshot;
  restore(snapshot: IdAllocationSnapshot): void;
}

export interface IdAllocationSnapshot {
  readonly members: ReadonlyMap<string, number>;
  readonly commands: ReadonlyMap<string, number>;
  readonly effects: ReadonlyMap<string, number>;
  readonly objectIds: ReadonlyMap<string, number>;
}
```

### Allocation Strategies

**memberId** — Sequential 0-based counter per ViewModel class.
- Key: `"ClassName.fieldName"`
- First allocation → 0, second → 1, etc.
- Same key returns the same ID on repeated calls.
- Tracked in `members` map.

**commandId** — Deterministic FNV-1a hash with collision resolution.
- Input: `"ClassName.methodName"`
- Algorithm: FNV-1a 32-bit hash, output as positive integer (bitwise AND with `0x7FFFFFFF` to ensure positive)
- Same input always produces the same output — stable across compilation runs without snapshot/restore
- Different classes with same method name produce different IDs (because the class name is part of the input)
- **Collision handling**: if the computed hash is already assigned to a *different* key, apply deterministic linear probing (increment by 1, re-check) until a free positive integer is found. The resolved mapping is stored so the same key always returns the same final ID on repeated calls.

**effectId** — Same FNV-1a hash algorithm and collision resolution as commandId.
- Input: `"ClassName.fieldName"`
- Commands and effects share a **single hash namespace** — effectId collision checks also consider allocated commandIds and vice versa. This ensures no commandId ever equals an effectId within the same allocator instance.

**objectId** — Counter-based with type prefix.
- `allocateObjectId("Text")` → `"text_1"`, `"text_2"`, etc.
- Type name lowercased, counter per type stored in `objectIds` map.

### FNV-1a 32-bit Hash

```typescript
function fnv1a32(input: string): number {
  let hash = 0x811c9dc5; // FNV offset basis
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193); // FNV prime
  }
  return (hash >>> 0) & 0x7FFFFFFF; // ensure positive 32-bit integer
}
```

### snapshot() / restore()

- `snapshot()` returns a frozen copy of all four internal maps
- `restore(snapshot)` replaces internal state with the snapshot's data
- Enables incremental compilation: save allocation state, restore on next run

### Factory Function

```typescript
export function createIdAllocator(snapshot?: IdAllocationSnapshot): IdAllocator;
```

---

## Diagnostics

Step 4 uses the existing `Diagnostic` type from `src/compiler/diagnostics.ts`. No new diagnostic codes need to be added — all A-series codes (A001–A010) are already defined there.

### Diagnostic Messages

| Code | Message | Severity |
|------|---------|----------|
| QMLTS-A001 | `ViewModel '${className}' has no @State fields` | warning |
| QMLTS-A002 | `Cannot infer type for @State field '${fieldName}'` | error |
| QMLTS-A003 | `Type '${tsType}' cannot be mapped to a QML type` | error |
| QMLTS-A004 | `@Command '${methodName}' has an invalid signature` | error |
| QMLTS-A005 | `@Effect field '${fieldName}' must be function-typed` | error |
| QMLTS-A006 | `Duplicate QML name '${qmlName}' in ViewModel '${className}'` | error |
| QMLTS-A007 | `ViewModel '${className}' is not exported` | warning |
| QMLTS-A010 | `Cannot resolve type for constructor parameter '${paramName}'` | warning |

---

## Exports

### src/compiler/viewmodel/index.ts
```typescript
export { createViewModelExtractor } from './viewmodel-extractor.js';
export type { ViewModelExtractor, AnalyzedViewModel, AnalyzedState, AnalyzedCommand,
  AnalyzedEffect, AnalyzedEffectParameter, AnalyzedParameter, AnalyzedConstructorParam,
  AnalyzedStateOptions, AnalyzedCommandOptions, AnalyzedEffectOptions } from './extractor-types.js';
export { mapTsTypeToQml } from './ts-qml-type-map.js';
```

### src/compiler/ids/index.ts
```typescript
export { createIdAllocator } from './id-allocator.js';
export type { IdAllocator, IdAllocationSnapshot } from './id-allocator.js';
```

### src/compiler/index.ts (updated)
```typescript
export * from './analyzer/index.js';
export * from './viewmodel/index.js';
export * from './ids/index.js';
export type { Diagnostic, DiagnosticCode as CompilerDiagnosticCode, ... } from './diagnostics.js';
```

---

## Test Plan

### ViewModelExtractor Tests (VE-01 through VE-18)

| ID | Test Case | Input | Expected |
|----|-----------|-------|----------|
| VE-01 | @State field extraction | Class with 2 @State fields | `states` length = 2, correct fieldNames |
| VE-02 | @State type inference (string) | `@State() name = ''` | `tsType='string'`, `qmlType='string'` |
| VE-03 | @State type inference (number) | `@State() count = 0` | `tsType='number'`, `qmlType='real'` |
| VE-04 | @State type inference (boolean) | `@State() active = false` | `tsType='boolean'`, `qmlType='bool'` |
| VE-05 | @State alias | `@State({ alias: 'userName' }) name = ''` | `qmlName='userName'` |
| VE-06 | @State readonly | `@State({ readonly: true }) name = ''` | `options.readonly=true` |
| VE-07 | @State defaultValue | `@State() count = 42` | `defaultValue='42'` |
| VE-08 | @Command extraction | Method with @Command | `commands` length correct |
| VE-09 | @Command async | `@Command({ async: true }) async login()` | `options.async=true` |
| VE-10 | @Command parameters | `@Command() add(a: number, b: string)` | parameters with correct types |
| VE-11 | @Command throttle | `@Command({ throttle: 'debounce', throttleMs: 300 })` | options correct |
| VE-12 | @Effect extraction | `@Effect() notify!: () => void` | `effects` length correct |
| VE-13 | @Effect alias | `@Effect({ alias: 'alert' }) notify!: () => void` | `qmlName='alert'` |
| VE-14 | Lifecycle methods | Class with `onMounted()`, `onUnmounting()` | lifecycle flags correct |
| VE-15 | generateSchema | Full ViewModel → schema | JSON structure matches ViewModelSchema |
| VE-16 | Validate duplicate alias | Two fields with same qmlName | QMLTS-A006 diagnostic |
| VE-17 | Validate unmappable type | `@State() data: Map<string, number>` | QMLTS-A003 diagnostic |
| VE-18 | No @State ViewModel | Command-only class | QMLTS-A001 warning |

### Additional Extractor Tests

| ID | Test Case | Input | Expected |
|----|-----------|-------|----------|
| VE-19 | @State explicit qmlType override | `@State({ qmlType: 'int' }) count = 0` | `qmlType='int'` (not 'real') |
| VE-20 | @State deferred | `@State({ deferred: true }) data = ''` | `options.deferred=true` |
| VE-21 | @Effect with parameters | `@Effect() show!: (msg: string) => void` | `parameters=[{ name: 'msg', tsType: 'string' }]` |
| VE-22 | @Effect non-function type | `@Effect() broken!: string` | QMLTS-A005 diagnostic |
| VE-23 | Constructor param extraction | `constructor(service: SomeService)` | `constructorParams` has entry, `isService=false` |
| VE-24 | Constructor param unresolvable | `constructor(x)` (no type annotation) | QMLTS-A010 diagnostic |
| VE-25 | ViewModel not exported | `class MyVM { @State() x = 0 }` | QMLTS-A007 warning |
| VE-26 | @Command invalid (getter) | `@Command() get value()` | QMLTS-A004 diagnostic |
| VE-27 | @State type cannot be inferred | `@State() data` (no init, no type) | QMLTS-A002 diagnostic |
| VE-28 | Multiple lifecycle methods | All 5 lifecycle methods present | All flags true |

### IdAllocator Tests (ID-01 through ID-09)

| ID | Test Case | Expected |
|----|-----------|----------|
| ID-01 | allocateMemberId first call | returns 0 |
| ID-02 | allocateMemberId second field | returns 1 |
| ID-03 | allocateMemberId same field twice | returns same ID (0) |
| ID-04 | allocateCommandId | unique positive integer |
| ID-05 | allocateEffectId | unique positive integer |
| ID-06 | allocateObjectId("Text") | `"text_1"` |
| ID-07 | allocateObjectId("Text") second call | `"text_2"` |
| ID-08 | snapshot + restore | IDs unchanged after restore |
| ID-09 | Different classes, same method name | different commandIds |
| ID-10 | Hash collision resolution | two keys that produce the same FNV-1a hash get distinct positive IDs |

**Total: 38 tests** (28 VE-* + 10 ID-*)

---

## Scope Boundaries

### In Scope
- Full @State, @Command, @Effect extraction from ts-morph ClassDeclaration
- TS→QML type mapping (static, compiler-local)
- Lifecycle method detection
- Basic constructor parameter extraction (name, type, isService=false)
- Schema generation with IdAllocator integration
- Validation diagnostics: A001–A007, A010
- IdAllocator with FNV-1a deterministic hashing
- Snapshot/restore for incremental compilation

### Out of Scope (Deferred)
- `isService` DI classification — always `false` in Step 4; real service detection requires DI design
- QMLTS-A008: Unknown decorator option — TypeScript handles this at the type level
- QMLTS-A009: ViewModel nesting too deep — requires recursive analysis
- Inheritance-aware extraction (analyzing base class decorators)
- `decoratorOptions` on `AnalyzedViewModel` — class-level decorators not defined in current design
