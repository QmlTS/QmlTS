# DSL Generator Completion — Design Specification

## Problem Statement

Module 05 (dsl-generator) has a solid generator skeleton and committed core snapshot, but has gaps preventing "full QML coverage":

1. **Runtime fluent API is type-only** — `Rectangle().width(100)` fails at runtime because `DslBuilderImpl` has only generic methods, not typed fluent ones
2. **Enum-typed properties degrade to QmlValue** — 4277 warnings on full gen; many enum properties untyped
3. **formatOutput/validateOutput flags are no-ops** — declared in GeneratorConfig but not implemented
4. **Testing gaps** — usage tests exercise `DslBuilderImpl` directly, never the generated fluent API
5. **Full snapshot not committed** — only P0 modules (7/111); full gen available via CLI but quality bar not yet met

## Approach

Metadata-driven Proxy runtime + two-tier enum resolution + orchestration layer + end-to-end acceptance tests.

## Design

### 1. Metadata-Driven Proxy Runtime

#### 1.1 Metadata Model

Each generated type produces a `TypeMetadata` descriptor alongside its TypeScript interface:

```typescript
interface PropertyMeta {
  readonly name: string;
  readonly hasValue: boolean;    // supports value setter: .width(100)
  readonly hasBinding: boolean;  // supports bind setter: .widthBind("parent.width")
}

interface SignalMeta {
  readonly handlerName: string;  // e.g. 'onWidthChanged'
  readonly paramCount: number;   // parameter count for validation
}

interface GroupedMeta {
  readonly methodName: string;   // e.g. 'border'
  readonly groupName: string;    // for addGrouped() — the QML group name
  readonly properties: PropertyMeta[];
}

interface AttachedMeta {
  readonly methodName: string;         // e.g. 'accessible'
  readonly attachedTypeName: string;   // e.g. 'Accessible'
  readonly properties: PropertyMeta[];
  readonly signals: SignalMeta[];
}

interface TypeMetadata {
  readonly typeName: string;
  readonly properties: PropertyMeta[];
  readonly signals: SignalMeta[];
  readonly grouped: GroupedMeta[];
  readonly attached: AttachedMeta[];
  readonly defaultProperty?: string;   // e.g. 'data' for Item
}
```

#### 1.2 Proxy Handler

`createFluentBuilder(typeName: string, metadata: TypeMetadata): QmlObjectBuilder`

Returns a Proxy-backed `DslBuilderImpl` instance. The Proxy `get` trap dispatches:

| Method pattern | Lookup | Delegation |
|---|---|---|
| `id` | built-in | `impl.id(value)` |
| `child` | built-in | `impl.child(value)` |
| `build` | built-in | `impl.build()` |
| `propName` | `metadata.properties` by name | `impl.setProp(name, value)` |
| `propNameBind` | strip `Bind`, check `metadata.properties` | `impl.setBinding(name, expr)` |
| `onXxx` | `metadata.signals` by handlerName | `impl.handleSignal(name, body)` |
| `groupName` | `metadata.grouped` by methodName | create PropertyCollector with GroupedMeta.properties, call callback, `impl.addGrouped()` |
| `attachedName` | `metadata.attached` by methodName | create PropertyCollector with AttachedMeta, call callback, `impl.addAttached()` |
| anything else | — | **throw TypeError** |

All dispatched methods return `this` (the Proxy) for chaining.

#### 1.3 PropertyCollector (Sub-Builder Proxy)

Used inside grouped/attached callbacks. Receives the surface's property metadata.

```typescript
rect.border(b => {
  b.width(2);        // PropertyCollector records { property: 'width', value: 2 }
  b.color("black");  // PropertyCollector records { property: 'color', value: "black" }
});
```

- Value setter: records `{ property, value }` entry
- Bind setter: records `{ property, expression }` entry
- Signal handler (attached only): records signal handler entry
- Unknown method: **throw TypeError**

#### 1.4 Generated Factory Functions

Code emitter changes factory output from:
```typescript
export function Rectangle(): RectangleBuilder {
  return new DslBuilderImpl('Rectangle') as unknown as RectangleBuilder;
}
```
to:
```typescript
export function Rectangle(): RectangleBuilder {
  return createFluentBuilder('Rectangle', RECTANGLE_META) as RectangleBuilder;
}

const RECTANGLE_META: TypeMetadata = {
  typeName: 'Rectangle',
  properties: [
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    // ... all writable properties
  ],
  signals: [
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    // ... all signals
  ],
  grouped: [
    {
      methodName: 'border',
      groupName: 'border',
      properties: [
        { name: 'width', hasValue: true, hasBinding: true },
        { name: 'color', hasValue: true, hasBinding: true },
        { name: 'pixelAligned', hasValue: true, hasBinding: true },
      ],
    },
    // ... anchors, layer
  ],
  attached: [
    {
      methodName: 'accessible',
      attachedTypeName: 'Accessible',
      properties: [ /* ... */ ],
      signals: [ /* ... */ ],
    },
    // ... keys, layout, etc.
  ],
  defaultProperty: 'data',
};
```

### 2. Two-Tier Enum Type Resolution

#### 2.1 Global Enum Index (Analyzer Enhancement)

During analysis, build a reverse index of all enum types:

```typescript
interface EnumResolution {
  readonly ownerQmlName: string;   // type that declares the enum
  readonly enumName: string;       // enum namespace name
  readonly moduleUri: string;      // module where owner lives
  readonly ambiguous: boolean;     // true if same name appears on multiple types
}

// Map: C++ enum type name → EnumResolution
type EnumIndex = Map<string, EnumResolution>;
```

Built by walking all types and their `ownEnums`. If the same enum name appears in multiple types under different qualified names, mark as ambiguous.

#### 2.2 TypeMapper Enhancement

Before QmlValue fallback, check the enum index:

1. **Unambiguous resolution** → emit specific enum-token type reference (to the owning type's enum namespace)
2. **Ambiguous resolution** → emit `QmlEnumToken` (branded generic)
3. **No resolution** → emit `QmlValue` with warning (existing behavior)

This should reduce warnings dramatically (est. from 4277 to hundreds).

#### 2.3 Import Impact

Properties with resolved enum types need imports to the enum-owning type's file. The peer import system already handles cross-type references — enum resolution plugs into the same mechanism.

### 3. Orchestration Layer

#### 3.1 Pure Core (Unchanged)

`generate(config: GeneratorConfig): GeneratorResult` stays pure in-memory.

#### 3.2 GeneratorConfig Cleanup

Remove `formatOutput` and `validateOutput` from `GeneratorConfig`. These concerns move to the orchestration layer.

Keep `runtimeImportPath` and make code emitter actually use it.

#### 3.3 New Orchestration Module (`src/dsl/generator/orchestration.ts`)

```typescript
interface WriteResult {
  filesWritten: number;
  bytesWritten: number;
}

interface FormatResult {
  success: boolean;
  filesFormatted: number;
  errors: string[];
}

interface ValidateResult {
  success: boolean;
  errors: string[];
}

function writeGeneratedFiles(result: GeneratorResult, outputDir: string): Promise<WriteResult>;
function formatGeneratedFiles(outputDir: string): Promise<FormatResult>;
function validateGeneratedFiles(outputDir: string): Promise<ValidateResult>;
```

- `writeGeneratedFiles` — creates directories, writes all files
- `formatGeneratedFiles` — invokes `biome check --write --unsafe` on output dir
- `validateGeneratedFiles` — invokes `tsc --noEmit` scoped to output dir

#### 3.4 CLI Script Update (`scripts/generate-dsl.ts`)

```
Usage: bun run generate:dsl [options]

Options:
  --all         Generate all modules (default: P0 modules only)
  --format      Run biome formatting after generation
  --validate    Run TypeScript type checking after generation

The CLI prints generation statistics after generation completes.
```

### 4. Testing Strategy

#### 4.1 End-to-End Acceptance Tests (`tests/dsl/acceptance.test.ts`)

Import generated types from committed snapshot and verify runtime behavior:

- `Rectangle().width(100).color("red").build()` produces correct AST
- `Rectangle().border(b => b.width(2).color("black")).build()` produces GroupedBindingNode
- `rect.layout(b => b.fillWidth(true))` produces AttachedBindingNode
- `Text.HAlignment.AlignHCenter` works as enum token in property setters
- `Rectangle().nonExistent(1)` throws TypeError
- Full round-trip: fluent DSL → AST → QML emission → verify QML text

#### 4.2 Full-Generation Acceptance (`tests/dsl/full-generation.test.ts`)

- Run `generate()` with no whitelist (all modules)
- Assert warning count below budget threshold
- Assert all generated files have valid structure
- Assert deterministic regeneration (run twice, compare)

#### 4.3 Proxy Runtime Unit Tests (`tests/dsl/runtime/proxy.test.ts`)

- Proxy dispatch for each method category
- Fail-fast on unknown methods at top level
- PropertyCollector for grouped/attached
- Fail-fast on unknown methods inside sub-builders
- Chaining returns same Proxy instance

#### 4.4 Existing Tests Updated

- Usage tests (`tests/dsl/usage.test.ts`) — keep as-is (they test DslBuilderImpl directly, which is still valid)
- Validation tests — update expected file structure if generated output shape changes

### 5. Rollout Sequence

1. Proxy runtime layer (runtime changes + tests)
2. Enum index + TypeMapper enhancement (analyzer + mapper changes + tests)
3. Code emitter update (metadata generation + factory functions)
4. Orchestration layer (write/format/validate + CLI update)
5. Regenerate committed snapshot (P0 modules with new metadata-aware factories)
6. End-to-end acceptance tests
7. Full-generation acceptance tests

### 6. Out of Scope

- Committing full 111-module snapshot (deferred until quality bar met)
- Analyzer heuristic improvements for grouped surface detection (current approach works, can improve later)
- `runtimeImportPath` customization (low priority)
