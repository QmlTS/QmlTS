# Step 6: PostProcessor — Design Spec

## Overview

The PostProcessor is the final injection stage before QML emission. It takes the transformer's output (`TransformResult` from Step 5) and an optional `AnalyzedViewModel` (from Step 4), then produces a runtime-ready `QmlDocument` by injecting imports, Connections for effects, lifecycle hooks, and performing validation.

**Position in pipeline:**
```
DslTransformer (Step 5) → PostProcessor (Step 6) → QmlEmitter (existing)
```

The transformer produces a raw QML AST with metadata about state bindings, command bindings, and effect listeners. The PostProcessor turns that metadata into concrete QML constructs (Connections blocks, Component attached handlers) and merges all imports into the document.

## Public API

### Factory Function

```ts
function createPostProcessor(
  importResolver: ImportResolver,
  registry: RegistryQueryInterface,
): PostProcessor;
```

**Design correction from Phase 06 `api.d.ts`:**
The original design specified `createPostProcessor()` with no arguments, and `process()` took a `CompilationContext` parameter that bundled `importResolver`, `diagnosticReporter`, `sourceMapManager`, and `idAllocator`. This is corrected to follow the simplified dependency pattern established in Steps 3–5:
- `importResolver` is a direct constructor dependency (needed for import merging).
- `registry` is a direct constructor dependency (needed for canonical module lookups when injecting framework constructs).
- `CompilationContext` is deferred to Step 8 (orchestration layer).
- Diagnostics are returned in the result, not routed through a `diagnosticReporter`.
- `sourceMapManager` is not required at this stage.

### PostProcessor Interface

```ts
interface PostProcessor {
  process(
    transformResult: TransformResult,
    viewModel?: AnalyzedViewModel,
  ): PostProcessResult;
}
```

**Design correction from Phase 06 `api.d.ts`:**
The original `process(transformResult, viewModel, context: CompilationContext)` signature is simplified. The `viewModel` parameter is optional — when absent, all VM-related injection (Connections, lifecycle hooks, state/command validation) is skipped.

### PostProcessResult

```ts
interface PostProcessResult {
  readonly document: QmlDocument;
  readonly injected: InjectionStatistics;
  readonly diagnostics: readonly Diagnostic[];
}

interface InjectionStatistics {
  readonly imports: number;
  readonly connections: number;
  readonly bindings: number;
  readonly lifecycleHandlers: number;
}
```

Where:
- `imports` — count of `ImportNode`s in the final document
- `connections` — count of effect listener functions injected inside the Connections block (0 if no effects)
- `bindings` — count of state bindings present in the document (from `TransformResult.stateBindings`)
- `lifecycleHandlers` — count of lifecycle hooks injected (Component.onCompleted, Component.onDestruction)

## Step 5 Type Extension: EffectListenerInfo

The current `EffectListenerInfo` from Step 5 only has `signalName`, `effectName`, and `objectTypeName`. It lacks the handler body code and parameter names needed for Connections injection.

**Required extension (backward compatible — new optional fields):**

```ts
interface EffectListenerInfo {
  readonly signalName: string;
  readonly effectName: string;
  readonly objectTypeName: string;
  readonly handlerCode?: string;          // NEW: user-specified handler body
  readonly handlerParameters?: readonly string[];  // NEW: parameter names for handler signature
}
```

This extension is added in Step 6's `transform-types.ts` modification. It is backward compatible — existing code that creates `EffectListenerInfo` without these fields continues to work.

**Current gap:** The Step 5 transformer never populates `effectListeners` (the array stays empty). End-to-end effect wiring requires transformer changes in a later step. Step 6 tests will manually construct `EffectListenerInfo` entries in test inputs.

**Handler body rules:**
- If `handlerCode` is provided → use it as the handler function body
- If `handlerCode` is absent → generate an empty handler body (signal subscription is declared but no custom code runs)
- `handlerParameters` provides the function parameter names (e.g., `["msg"]` → `function onShowError(msg) { ... }`). If absent, fall back to the ViewModel's `AnalyzedEffect.parameters[].name`.

## Injection Pipeline

The PostProcessor executes these steps in order:

### Step 1: Deep Clone

Deep-clone the input `TransformResult.document` to avoid mutating the transformer's output. All subsequent modifications operate on the clone.

### Step 2: Import Injection

1. Collect all `requiredImports` from `TransformResult`.
2. If the PostProcessor is about to inject a `Connections` block, add a `RequiredImport` for the canonical module of `Connections` (looked up via `registry.findByQmlName("Connections")` → `QmlType.moduleUri`), marked `injected: true`.
3. If the PostProcessor is about to inject `Component.onCompleted` or `Component.onDestruction`, add a `RequiredImport` for the canonical module of `Component` (looked up via `registry.findByQmlName("Component")` → `QmlType.moduleUri`), marked `injected: true`.
4. Pass all collected `RequiredImport[]` through `importResolver.resolve()` to deduplicate and merge.
5. Convert each `ResolvedImport` to an `ImportNode` and set as `document.imports`.

### Step 3: Connections Injection (Effects)

**Condition:** `TransformResult.effectListeners` is non-empty AND `viewModel` is provided.

**Action:** Create a single `ObjectDefinitionNode` with `typeName: "Connections"` containing:

- A `BindingNode` with `property: "target"` and `value: ScriptExpression("__qmlts")`.
- For each `EffectListenerInfo`, create a `FunctionDeclarationNode`:
  - `name`: the effect's `qmlName` from the corresponding `AnalyzedEffect` in the ViewModel, prefixed with `on` and capitalized (e.g., effect `showError` → handler `onShowError`).
  - `parameters`: taken from `handlerParameters` or `AnalyzedEffect.parameters[].name`.
  - `body`: the generated function body text.
  - The emitted form is `function onShowError(msg) { ... }`.

**Effect body generation:**
The `EffectListenerInfo` from the transformer contains `signalName`, `effectName`, and optionally `handlerCode` and `handlerParameters`. The PostProcessor:
1. Looks up the matching `AnalyzedEffect` from the ViewModel by `effectName`.
2. Determines handler parameter names: uses `handlerParameters` from `EffectListenerInfo` if present, otherwise uses `AnalyzedEffect.parameters[].name`.
3. Determines handler body: uses `handlerCode` from `EffectListenerInfo` if present, otherwise uses an empty body.
4. Generates a function declaration: `function onEffectQmlName(param1, param2) { handlerBody }` — where `onEffectQmlName` is the `qmlName` from `AnalyzedEffect` prefixed with `on` and capitalized.

**Placement:** The Connections object is added as a child of the root `ObjectDefinitionNode`.

**Edge case:** If `effectListeners` is non-empty but `viewModel` is not provided, the PostProcessor skips Connections injection silently. Effects are a ViewModel concept; without a ViewModel, the PostProcessor has no effect metadata to resolve. This is consistent with the "no ViewModel → skip VM-dependent work" rule (see PP-08).

### Step 4: Lifecycle Hook Injection

**Condition:** `viewModel` is provided AND `viewModel.lifecycle` has enabled hooks.

**Action:** For each enabled lifecycle hook, inject an `AttachedBindingNode` on the root object:

| Lifecycle Field | QML Construct | Injected Code |
|---|---|---|
| `hasOnMounted` | `Component.onCompleted` | `__qmlts.onMounted()` |
| `hasOnUnmounting` | `Component.onDestruction` | `__qmlts.onUnmounting()` |

The `AttachedBindingNode` structure:
```ts
{
  kind: 'AttachedBinding',
  attachedTypeName: 'Component',
  bindings: [
    {
      kind: 'Binding',
      property: 'onCompleted',    // or 'onDestruction'
      value: { kind: 'script-block', code: '__qmlts.onMounted()' }
    }
  ]
}
```

**Note:** `hasOnBeforeHotReload`, `hasOnAfterHotReload`, and `hasOnVisibilityChanged` are not injected by the PostProcessor. These hooks have different runtime integration paths that are beyond Step 6 scope.

### Step 5: Duplicate ID Detection

Walk the full AST rooted at the document's `rootObject` and collect all `IdAssignmentNode`s, including ids nested inside object-valued bindings and other AST containers. If any `id` appears more than once, emit a single `QMLTS-P001` diagnostic (error severity) for that duplicated `id`, including the total number of occurrences.

### Step 6: Validation

**No-ViewModel rule:** When `viewModel` is not provided, the PostProcessor skips ALL VM-dependent injection (Connections, lifecycle hooks) and ALL VM-dependent validation (P002, P003, P004). No diagnostics are emitted for the absence of a ViewModel. This is the PP-08 rule.

**P002 — Connections target doesn't exist (error):**
Emitted when a Connections block is injected but the target object reference cannot be validated. In Step 6, the target is always `__qmlts` (the injected runtime bridge). P002 fires if the PostProcessor injects a Connections block and determines that the target object is not resolvable in the document scope — for example, if `__qmlts` is referenced but no corresponding runtime bridge object exists in the root's children. In practice, `__qmlts` is a well-known runtime identifier, so P002 is reserved for future validation when the PostProcessor can verify target existence against a scope model.

**P003 — Command invoke parameter mismatch (error):**
For each `CommandBindingInfo` in `TransformResult.commandBindings`, look up the corresponding `AnalyzedCommand` in the ViewModel by `methodName`. The transformer generates `__qmlts.invoke(N)` as the handler body, which passes no arguments. If the `AnalyzedCommand` has required parameters (non-optional `AnalyzedCommandParameter` entries), the invoke call cannot satisfy the command's parameter contract — emit P003 (error).

This matches the original Phase 06 meaning of P003: the invoke call's argument list does not match the command's declared parameter signature.

**P004 — Invalid state binding path (warning):**
For each `StateBindingInfo` in `TransformResult.stateBindings`, look up the ViewModel's `states` by `vmProperty`. If no matching state field exists, emit P004 (warning).

### Step 7: Statistics

Count and return `InjectionStatistics`:
- `imports`: `document.imports.length`
- `connections`: number of `SignalHandlerNode`s inside the injected Connections block (0 if no Connections)
- `bindings`: `transformResult.stateBindings.length`
- `lifecycleHandlers`: number of lifecycle hooks injected (0, 1, or 2)

## Diagnostic Codes

All P-series codes are already defined in `src/compiler/diagnostics.ts`.

| Code | Meaning | Severity | Step 6 Trigger |
|---|---|---|---|
| `QMLTS-P001` | Duplicate object id | error | Two or more objects share the same `id` |
| `QMLTS-P002` | Connections target doesn't exist | error | Reserved — fires when injected Connections target is unresolvable. Not triggered in Step 6 (target is always well-known `__qmlts`). |
| `QMLTS-P003` | Command invoke parameter mismatch | error | `__qmlts.invoke(N)` passes no arguments but AnalyzedCommand has required parameters |
| `QMLTS-P004` | Invalid state binding path | warning | `stateBindings[].vmProperty` not found in ViewModel states |

**Non-blocking behavior:** The PostProcessor always produces a `PostProcessResult` with a `document`, even when diagnostics are emitted. Consumers decide whether to halt on errors.

**No-ViewModel behavior:** When no ViewModel is provided, the PostProcessor does not emit P002, P003, or P004. It skips all VM-dependent validation and injection silently.

## File Structure

```
src/compiler/postprocess/
  ├── post-processor.ts     # PostProcessor implementation
  ├── postprocess-types.ts  # PostProcessResult, InjectionStatistics, PostProcessor interface
  ├── index.ts              # Barrel exports

src/compiler/transform/transform-types.ts  # Extend EffectListenerInfo with handlerCode, handlerParameters
src/compiler/index.ts                      # Add postprocess barrel re-export

tests/compiler/postprocess/
  ├── helpers.ts            # Test utilities (mock TransformResult builder, etc.)
  ├── post-processor.test.ts  # PP-01 through PP-15 tests
```

## Test Plan

9 tests covering the PP-* test cases from the Phase 06 test spec:

| ID | Test | Assertion |
|---|---|---|
| PP-01 | Import injection | Document has correct `ImportNode[]` after merging `requiredImports` |
| PP-02 | Connections injection (effects) | Root object has `Connections { target: __qmlts }` child with effect handler functions |
| PP-03 | Command invoke validation | Handler body contains `__qmlts.invoke(N)` (already lowered by transformer; PostProcessor validates command parameter consistency) |
| PP-04 | State binding injection | Binding value is `vm.propName` expression (already lowered by transformer; PostProcessor validates against ViewModel states) |
| PP-05 | `Component.onCompleted` injection | Root object has `AttachedBindingNode("Component")` with `onCompleted` handler calling `__qmlts.onMounted()` |
| PP-06 | `Component.onDestruction` injection | Root object has `AttachedBindingNode("Component")` with `onDestruction` handler calling `__qmlts.onUnmounting()` |
| PP-07 | Duplicate id detection | Two objects with same `id` → `QMLTS-P001` error diagnostic |
| PP-08 | No ViewModel | No Connections injected, no lifecycle hooks injected, no VM-related diagnostics, effectListeners silently skipped |
| PP-09 | Injection statistics | `injected.imports`, `injected.connections`, `injected.bindings`, `injected.lifecycleHandlers` all correct |

### Additional edge-case tests

| ID | Test | Assertion |
|---|---|---|
| PP-10 | No ViewModel with effectListeners | effectListeners silently skipped, no Connections injected, no P002 emitted |
| PP-11 | P003: command parameter mismatch | `QMLTS-P003` error when command has required parameters but `__qmlts.invoke(N)` passes none |
| PP-12 | P004: invalid state binding | `QMLTS-P004` warning when `stateBindings[].vmProperty` not found in ViewModel states |
| PP-13 | Multiple lifecycle hooks | Both `onMounted` and `onUnmounting` → two bindings in same `Component` attached block |
| PP-14 | Import deduplication | Duplicate `requiredImports` merged into single `ImportNode` |
| PP-15 | Framework import auto-injection | Connections injection adds canonical module import for `Connections` |

**Total: 15 tests**

## Barrel Exports

`src/compiler/postprocess/index.ts` exports:

```ts
// Public types
export type { PostProcessResult, InjectionStatistics } from './postprocess-types.js';
export type { PostProcessor } from './postprocess-types.js';

// Factory function
export { createPostProcessor } from './post-processor.js';
```

`src/compiler/index.ts` adds:
```ts
export * from './postprocess/index.js';
```

## Dependencies

| Dependency | Source | Purpose |
|---|---|---|
| `ImportResolver` | `src/compiler/transform/` | Import deduplication and version merging |
| `RegistryQueryInterface` | `src/registry/types.ts` | Canonical module lookup for injected framework constructs |
| `TransformResult` | `src/compiler/transform/` | Primary input — QML AST + metadata |
| `AnalyzedViewModel` | `src/compiler/viewmodel/` | Lifecycle hooks, effect metadata, command/state validation |
| QML AST types | `src/ast/types.ts` | Building injection nodes |
| QML AST builder | `src/ast/builder.ts` | Convenient AST node construction |
| `Diagnostic` | `src/compiler/diagnostics.ts` | Diagnostic reporting |

## Non-Goals for Step 6

- **No `CompilationContext`** — deferred to Step 8
- **No source map generation** — deferred to Step 8
- **No hot-reload lifecycle hooks** (`onBeforeHotReload`, `onAfterHotReload`, `onVisibilityChanged`) — different runtime integration path
- **No inline component support** — forward-compat field exists but not populated
- **No multi-document processing** — PostProcessor handles one document at a time
