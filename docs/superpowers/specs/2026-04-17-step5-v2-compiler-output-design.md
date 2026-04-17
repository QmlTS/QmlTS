# Step 5: Switch Compiler Output to V2 Typed QML

## Problem

The compiler still emits V1-shaped QML when `runtime: "v2"` is enabled. V1 QML uses `__qmlts.invoke(N)` for commands, `vm.property` for state bindings, `Connections { target: __qmlts }` for effects, and `__qmlts.onMounted()` for lifecycle. V2 requires direct method calls on typed ViewModel instances, module imports, signal handler bindings inside the ViewModel instance block, and instance-scoped lifecycle.

## Approach

Two-layer gating: the **DslTransformer** handles inline expression lowering (commands → method calls, state → instance properties), and the **PostProcessor** handles structural QML injection (ViewModel instance block with effect signal handlers, module import, V2 lifecycle). The **compiler** (`compileView`) threads V2 context from slot/schema metadata to both layers. V1 output is completely unchanged when `runtime` is `"v1"` or unset.

**Scope:** Step 5 supports the existing single ViewModel-per-view compiler path. Multi-ViewModel owned/injected placement is deferred to a later step.

## V1 vs V2 QML Output

### Commands

| Aspect | V1 | V2 |
|--------|----|----|
| Handler | `onClicked: __qmlts.invoke(927957157)` | `onClicked: __qmlts_vm0.login()` |
| Mechanism | Numeric dispatch through context property | Direct Q_INVOKABLE call on typed instance |

### State Bindings

| Aspect | V1 | V2 |
|--------|----|----|
| Binding | `text: vm.username` | `text: __qmlts_vm0.username` |
| Source | Context property `vm` | Typed ViewModel instance |

### Effects

| Aspect | V1 | V2 |
|--------|----|----|
| Container | `Connections { target: __qmlts; function onOnLoginCompleted(success) { } }` | `LoginViewModel { id: __qmlts_vm0; onLoginCompleted: function(success) { } }` |
| Syntax | FunctionDeclaration in Connections block | Signal handler binding inside ViewModel instance block |

### Lifecycle

| Aspect | V1 | V2 |
|--------|----|----|
| Mounted | `Component.onCompleted: { __qmlts.onMounted() }` | `Component.onCompleted: { __qmlts_vm0.onMounted() }` |
| Unmounting | `Component.onDestruction: { __qmlts.onUnmounting() }` | `Component.onDestruction: { __qmlts_vm0.onUnmounting() }` |

The V2 lifecycle method names (`onMounted` / `onUnmounting`) match the current Step 4 native bridge: Rust `on_mounted` / `on_unmounting` → cxx-qt camelCase → QML `onMounted()` / `onUnmounting()`. No native bridge changes are required.

### Module Imports

V2 adds: `import <prefix>.ViewModels <major>.<minor>` (e.g., `import MyApp.ViewModels 1.0`). Derived from `moduleConfig.prefix + ".ViewModels"` and `moduleConfig.version`.

### ViewModel Instance Block (V2 only)

Injected as first child of root QML object:
```qml
LoginViewModel {
    id: __qmlts_vm0
    onLoginCompleted: function(success) { }
}
```

The `id` value comes from `ViewModelInstanceSlot.qmlId` (computed in Step 2). Effect signal handlers use signal handler binding syntax (`onSignalName: function(params) { }`).

## Architecture

### Layer 1: DslTransformer

**New type:** `V2TransformOptions` added to `transform-types.ts`:
```typescript
export interface V2TransformOptions {
  readonly qmlId: string;           // e.g., "__qmlts_vm0"
  readonly className: string;       // e.g., "LoginViewModel"
}
```

**Interface change:** `DslTransformer.transform` and `transformNode` gain an optional `v2Options` parameter.

**Behavioral changes in V2 mode:**

1. **Command refs** (`lowerHandler`, `lowerAttachedHandlerValue`): Emit `qmlId.methodName()` instead of `__qmlts.invoke(N)`. The method name comes from `handler.commandRef.methodName`. Command bindings are still recorded for validation.

2. **State refs** (`lowerValue` state-ref case): Emit `qmlId.property` instead of `vmName.property`. State bindings are still recorded.

3. **Internal context:** `TransformContext` gains an optional `v2Options` field threaded through all lowering functions.

### Layer 2: PostProcessor

**New type:** `V2PostProcessOptions` added to `postprocess-types.ts`:
```typescript
export interface V2PostProcessOptions {
  readonly moduleImport: { moduleUri: string; version: string };
  readonly viewModelType: string;   // e.g., "LoginViewModel"
  readonly qmlId: string;           // e.g., "__qmlts_vm0"
  readonly effects: readonly {
    readonly handlerName: string;    // e.g., "onLoginCompleted" — full handler name, never double-prefixed
    readonly parameters: readonly string[];
  }[];
  readonly lifecycle: {
    readonly hasMounted: boolean;
    readonly hasUnmounting: boolean;
  };
}
```

**Interface change:** `PostProcessor.process` gains an optional `v2Options` parameter.

**Behavioral changes in V2 mode:**

1. **ViewModel instance block injection:** Build an `ObjectDefinitionNode` with `typeName` = className, `id` = qmlId, and signal handler bindings for each effect. Prepend as first member of root object.

2. **Module import injection:** Add the V2 module import to `allImports`.

3. **Skip Connections block:** When V2 options are present, do not inject the V1 Connections block.

4. **V2 lifecycle:** Emit `__qmlts_vm0.onMounted()` and `__qmlts_vm0.onUnmounting()` instead of `__qmlts.onMounted()` / `__qmlts.onUnmounting()`.

5. **V2 command validation:** Update diagnostic message to reference method call syntax instead of `__qmlts.invoke(...)`.

### Layer 3: Compiler Threading

`compileView` already computes `isV2`, `slot`, and schema. Changes:

1. Construct `V2TransformOptions` from slot metadata when `isV2 && slot`.
2. Pass to `transformer.transform(analyzedView, vm, v2Options)`.
3. Construct `V2PostProcessOptions` from slot, schema, and ViewModel analysis.
4. Pass to `postProcessor.process(augmentedResult, vm, v2Options)`.
5. When V2, skip the manual `effectListeners` bridge (effects go through post-processor V2 path).

**Fail-fast rule:** If `runtime: "v2"` and the view has a ViewModel, but no V2 slot metadata is available (e.g., `slot` is undefined), the compiler must emit an internal compile error diagnostic. It must **never** silently fall back to V1-shaped output. In V2 mode, emitting `vm.username` or `__qmlts.invoke(...)` for a ViewModel-backed view is always a bug.

## Effect Handler Naming Rules

V2 effect handlers use the `handlerName` field from `V2PostProcessOptions.effects`, which is the complete handler name including the `on` prefix. The handler name is derived as follows:

1. The native bridge signal is named `loginCompleted` (Rust `login_completed` → cxx-qt camelCase).
2. The schema `qmlName` may already be `onLoginCompleted` (with `on` prefix from the effect analyzer).
3. The post-processor **must not double-prefix** `on`. The rule:
   - If the schema `qmlName` already starts with `on` followed by an uppercase letter, use it directly as the handler name.
   - Otherwise, prepend `on` and capitalize the first letter of the signal name.
4. The compiler constructs `handlerName` when building `V2PostProcessOptions` from the schema/ViewModel, applying this rule once. The post-processor consumes the name verbatim.

Examples:
- Schema `qmlName: "onLoginCompleted"` → handlerName: `"onLoginCompleted"` ✓
- Schema `qmlName: "loginCompleted"` → handlerName: `"onLoginCompleted"` ✓
- Schema `qmlName: "onCountChanged"` → handlerName: `"onCountChanged"` ✓
- Never: `"onOnLoginCompleted"` ✗

## Effect Signal Handler AST Detail

V2 effects use signal handler binding syntax inside the ViewModel instance block:
```qml
onLoginCompleted: function(success) { }
```

This is represented in the AST as a `SignalHandlerNode`:
```typescript
{
  kind: 'SignalHandler',
  name: 'onLoginCompleted',  // full handler name including "on" prefix
  body: { form: 'expression', code: 'function(success) { }' }
}
```

The emitter writes `${node.name}: ${body.code}` for expression-form signal handlers, producing `onLoginCompleted: function(success) { }`.

**Important:** The `SignalHandlerNode.name` field holds the full handler name (e.g., `onLoginCompleted`), including the `on` prefix. The emitter does NOT add a prefix — it writes the name verbatim.

For effects with no parameters:
```typescript
{
  kind: 'SignalHandler',
  name: 'onCountChanged',
  body: { form: 'expression', code: 'function() { }' }
}
```
Produces: `onCountChanged: function() { }`

## ViewModel Block Injection Safety

The post-processor must enforce these rules when injecting the ViewModel instance block:

1. **Idempotency:** If the root object already contains a child with the same `id` (matching `qmlId`) and the same `typeName` (matching `viewModelType`), do not inject a duplicate.
2. **Idempotent repair:** If the matching ViewModel child already exists and has the same `id`, ensure required V2 effect handlers are present. If the matching ViewModel child exists but has no `id`, insert `qmlId` and ensure required handlers are present so generated references resolve.
3. **Collision detection:** Emit `QMLTS-V008` if either:
   - a child already uses `qmlId` but has a different `typeName`, or
   - a child with `viewModelType` already exists with a different `id`.
   This prevents both duplicate-id injection and ambiguous multiple owned ViewModel blocks for the same view.
4. **Reserved prefix:** Compiler-generated ids use the `__qmlts_` prefix. This prefix is reserved — user-authored QML ids must not start with `__qmlts_`. The existing duplicate ID detection (`detectDuplicateIds`) will catch same-name collisions, and a V2-specific check can warn if user ids use the reserved prefix.

## Views Without ViewModel

When a view has no ViewModel (`vm === undefined`), V2 output is identical to V1 output: no ViewModel instance block, no module import, no lifecycle. The V2 options are simply not constructed.

## Testing Strategy

### Transformer Tests (inline assertions)

- V2 command lowering: verify `__qmlts_vm0.login()` output
- V2 state-ref lowering: verify `__qmlts_vm0.username` output
- V2 attached handler lowering: verify method call syntax
- V1 tests unchanged and still passing

### PostProcessor Tests (inline assertions)

- V2 ViewModel instance block injection (correct position, id, type)
- V2 effect signal handler bindings inside instance block
- V2 module import injection
- V2 lifecycle method calls (`onMounted` / `onUnmounting`)
- V2 skips Connections block
- V2 idempotency: no duplicate injection
- V2 collision: diagnostic on conflicting ids
- V2 repair: same-type existing block without id receives `qmlId` and required effect handlers
- V1 tests unchanged and still passing

### Pipeline Tests (golden files)

- Add V2 golden files: `CounterView.v2.qml`, `LoginView.v2.qml`
- Update CP-17 to assert V2 QML differs from V1 and matches V2 golden
- Add new CP tests for V2-specific pipeline behavior
- Existing V1 golden files must remain byte-for-byte unchanged
- V2 tests opt in through runtime/config flags and must not replace V1 expectations

## Scope Guard

This step does NOT:
- Change native Rust code or bridge definitions
- Change runtime behavior
- Add qmldir/.qmltypes generation
- Add library/package build behavior
- Change entry generation
- Modify V1 output in any way

## Files Modified

| File | Change |
|------|--------|
| `src/compiler/transform/transform-types.ts` | Add `V2TransformOptions`, update `DslTransformer` interface |
| `src/compiler/transform/dsl-transformer.ts` | V2 command/state/attached handler lowering |
| `src/compiler/postprocess/postprocess-types.ts` | Add `V2PostProcessOptions`, update `PostProcessor` interface |
| `src/compiler/postprocess/post-processor.ts` | V2 ViewModel block, module import, lifecycle, skip Connections |
| `src/compiler/pipeline/compiler.ts` | Thread V2 context to transformer and post-processor |
| `tests/compiler/transform/dsl-transformer.test.ts` | V2 transformer tests |
| `tests/compiler/postprocess/post-processor.test.ts` | V2 post-processor tests |
| `tests/compiler/pipeline/compiler.test.ts` | Update CP-17, add V2 pipeline tests |
| `tests/compiler/pipeline/fixtures/golden/CounterView.v2.qml` | V2 golden fixture |
| `tests/compiler/pipeline/fixtures/golden/LoginView.v2.qml` | V2 golden fixture |
