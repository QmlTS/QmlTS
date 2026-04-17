# Step 5: V2 Compiler Output Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Switch compiler QML output to V2 typed patterns (direct method calls on typed ViewModel instances, module imports, signal handler bindings) behind the `runtime: "v2"` flag, while keeping V1 output byte-for-byte unchanged.

**Architecture:** Two-layer gating — the DslTransformer handles inline expression lowering (commands → `qmlId.method()`, state → `qmlId.property`), while the PostProcessor handles structural injection (ViewModel instance block, module import, V2 lifecycle, skip Connections). The compiler (`compileView`) threads V2 context from slot/schema metadata to both layers. V1 output is unchanged when `runtime` is `"v1"` or unset.

**Tech Stack:** TypeScript, Bun test runner, QML AST builder/emitter

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/compiler/transform/transform-types.ts` | Add `V2TransformOptions` type |
| `src/compiler/transform/dsl-transformer.ts` | V2 command/state/attached-handler lowering |
| `src/compiler/transform/index.ts` | Export `V2TransformOptions` |
| `src/compiler/postprocess/postprocess-types.ts` | Add `V2PostProcessOptions` type |
| `src/compiler/postprocess/post-processor.ts` | V2 ViewModel block, module import, lifecycle, skip Connections |
| `src/compiler/postprocess/index.ts` | Export `V2PostProcessOptions` |
| `src/compiler/pipeline/compiler.ts` | Thread V2 context to transformer and post-processor; fail-fast check |
| `src/compiler/diagnostics.ts` | Add V2 diagnostic codes `QMLTS-V007`, `QMLTS-V008` |
| `tests/compiler/transform/dsl-transformer.test.ts` | V2 transformer inline assertion tests |
| `tests/compiler/postprocess/post-processor.test.ts` | V2 post-processor inline assertion tests |
| `tests/compiler/postprocess/helpers.ts` | Add `findSignalHandler`, `findIdAssignment` helpers if missing |
| `tests/compiler/pipeline/compiler.test.ts` | Update CP-17, add V2 pipeline golden + assertion tests |
| `tests/compiler/pipeline/fixtures/golden/CounterView.v2.qml` | V2 golden fixture |
| `tests/compiler/pipeline/fixtures/golden/LoginView.v2.qml` | V2 golden fixture |

---

### Task 1: Create branch and add V2 diagnostic codes

**Files:**
- Modify: `src/compiler/diagnostics.ts:73-78`

- [ ] **Step 1: Create Step 5 branch from main**

```bash
cd C:\MyFile\DevAll\QmlTS
git fetch origin main
git checkout -b step5/v2-compiler-output origin/main
```

- [ ] **Step 2: Add V2 compiler output diagnostic codes**

Add two new codes to the `DiagnosticCode` union in `src/compiler/diagnostics.ts`:

```typescript
  // V2 Schema/IR (V)
  | 'QMLTS-V001'
  | 'QMLTS-V002'
  | 'QMLTS-V003'
  | 'QMLTS-V004'
  | 'QMLTS-V005'
  | 'QMLTS-V006'
  | 'QMLTS-V007'   // V2 missing slot metadata (fail-fast)
  | 'QMLTS-V008';  // V2 reserved __qmlts_ prefix collision
```

Replace the trailing `;` after `QMLTS-V006` with a `|`, add `QMLTS-V007` and `QMLTS-V008`.

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (no errors)

- [ ] **Step 4: Commit**

```bash
git add src/compiler/diagnostics.ts
git commit -m "feat(compiler): add V2 compiler output diagnostic codes V007/V008"
```

---

### Task 2: Add V2TransformOptions type and update DslTransformer interface

**Files:**
- Modify: `src/compiler/transform/transform-types.ts:183-198`
- Modify: `src/compiler/transform/index.ts`

- [ ] **Step 1: Add V2TransformOptions type to transform-types.ts**

Add after the `EffectListenerInfo` interface (before the `DslTransformer` interface):

```typescript
// ─── V2 Transform Options ───────────────────────────────────────────────

export interface V2TransformOptions {
  readonly qmlId: string;
  readonly className: string;
}
```

- [ ] **Step 2: Update DslTransformer interface signatures**

Change the `DslTransformer` interface to accept optional `v2Options`:

```typescript
export interface DslTransformer {
  transform(view: AnalyzedView, vm?: AnalyzedViewModel, v2Options?: V2TransformOptions): TransformResult;
  transformNode(
    node: DslCallNode,
    vm?: AnalyzedViewModel,
    v2Options?: V2TransformOptions,
  ): {
    readonly objectNode: ObjectDefinitionNode;
    readonly requiredImports: readonly RequiredImport[];
    readonly stateBindings: readonly StateBindingInfo[];
    readonly commandBindings: readonly CommandBindingInfo[];
    readonly effectListeners: readonly EffectListenerInfo[];
    readonly diagnostics: readonly Diagnostic[];
  };
}
```

- [ ] **Step 3: Export V2TransformOptions from index.ts**

Add `V2TransformOptions` to the type exports in `src/compiler/transform/index.ts`:

```typescript
export type {
  AnalyzedView,
  CommandBindingInfo,
  DslAttachedBinding,
  DslBinding,
  DslCallNode,
  DslExpressionBinding,
  DslGroupedBinding,
  DslHandler,
  DslInlineComponent,
  DslTransformer,
  DslValue,
  EffectListenerInfo,
  ImportResolver,
  RequiredImport,
  ResolvedImport,
  SourceLocation,
  StateBindingInfo,
  TransformResult,
  V2TransformOptions,
} from './transform-types.js';
```

- [ ] **Step 4: Run typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (signatures are additive — optional params don't break callers)

- [ ] **Step 5: Commit**

```bash
git add src/compiler/transform/transform-types.ts src/compiler/transform/index.ts
git commit -m "feat(compiler): add V2TransformOptions type and update DslTransformer interface"
```

---

### Task 3: Implement V2 lowering in dsl-transformer.ts

**Files:**
- Modify: `src/compiler/transform/dsl-transformer.ts`

- [ ] **Step 1: Add v2Options to TransformContext**

Update the `TransformContext` interface (line 88) and `createTransformContext` (line 98):

```typescript
interface TransformContext {
  readonly registry: RegistryQueryInterface;
  readonly vm?: AnalyzedViewModel;
  readonly v2Options?: V2TransformOptions;
  readonly diagnostics: Diagnostic[];
  readonly requiredImports: RequiredImport[];
  readonly stateBindings: StateBindingInfo[];
  readonly commandBindings: CommandBindingInfo[];
  readonly effectListeners: EffectListenerInfo[];
}

function createTransformContext(
  registry: RegistryQueryInterface,
  vm?: AnalyzedViewModel,
  v2Options?: V2TransformOptions,
): TransformContext {
  return {
    registry,
    vm,
    v2Options,
    diagnostics: [],
    requiredImports: [],
    stateBindings: [],
    commandBindings: [],
    effectListeners: [],
  };
}
```

- [ ] **Step 2: Add V2TransformOptions import**

Add `V2TransformOptions` to the import from `./transform-types.js`:

```typescript
import type {
  AnalyzedView,
  AnalyzedViewModel,
  CommandBindingInfo,
  DslAttachedBinding,
  DslBinding,
  DslCallNode,
  DslExpressionBinding,
  DslGroupedBinding,
  DslHandler,
  DslTransformer,
  DslValue,
  EffectListenerInfo,
  RequiredImport,
  StateBindingInfo,
  TransformResult,
  V2TransformOptions,
} from './transform-types.js';
```

- [ ] **Step 3: Update transform and transformNode to accept v2Options**

Update the `createDslTransformer` return object:

```typescript
export function createDslTransformer(registry: RegistryQueryInterface): DslTransformer {
  return {
    transform(view: AnalyzedView, vm?: AnalyzedViewModel, v2Options?: V2TransformOptions): TransformResult {
      const ctx = createTransformContext(registry, vm, v2Options);
      // ... rest unchanged
    },

    transformNode(node: DslCallNode, vm?: AnalyzedViewModel, v2Options?: V2TransformOptions) {
      const ctx = createTransformContext(registry, vm, v2Options);
      // ... rest unchanged
    },
  };
}
```

- [ ] **Step 4: Update lowerHandler for V2 command refs**

In `lowerHandler` (line 282), update the `command-ref` branch:

```typescript
function lowerHandler(
  handler: DslHandler,
  objectTypeName: string,
  ctx: TransformContext,
): SignalHandlerNode {
  if (handler.handlerType === 'command-ref' && handler.commandRef) {
    let commandId: number | undefined;
    if (ctx.vm) {
      const cmd = ctx.vm.commands.find((c) => c.methodName === handler.commandRef!.methodName);
      commandId = cmd?.options.id;
    }

    ctx.commandBindings.push({
      signalName: handler.signalName,
      vmName: handler.commandRef.vmName,
      methodName: handler.commandRef.methodName,
      commandId,
      objectTypeName,
    });

    // V2: direct method call on typed ViewModel instance
    if (ctx.v2Options) {
      return {
        kind: 'SignalHandler',
        name: handler.signalName,
        body: { form: 'expression', code: `${ctx.v2Options.qmlId}.${handler.commandRef.methodName}()` },
      };
    }

    // V1: __qmlts.invoke(N)
    const invokeCode =
      commandId != null
        ? `__qmlts.invoke(${commandId})`
        : `__qmlts.invoke("${handler.commandRef.methodName}")`;

    return {
      kind: 'SignalHandler',
      name: handler.signalName,
      body: { form: 'expression', code: invokeCode },
    };
  }

  if (handler.handlerType === 'arrow') {
    return {
      kind: 'SignalHandler',
      name: handler.signalName,
      body: { form: 'block', code: handler.code },
    };
  }

  // expression handler
  return {
    kind: 'SignalHandler',
    name: handler.signalName,
    body: { form: 'expression', code: handler.code },
  };
}
```

- [ ] **Step 5: Update lowerValue for V2 state refs**

In `lowerValue` (line 334), update the `state-ref` case:

```typescript
    case 'state-ref':
      ctx.stateBindings.push({
        property,
        vmName: value.vmName,
        vmProperty: value.property,
        objectTypeName,
      });
      // V2: use typed ViewModel instance id
      if (ctx.v2Options) {
        return { kind: 'expression', code: `${ctx.v2Options.qmlId}.${value.property}` };
      }
      // V1: vm.property
      return { kind: 'expression', code: `${value.vmName}.${value.property}` };
```

- [ ] **Step 6: Update lowerAttachedHandlerValue for V2 command refs**

In `lowerAttachedHandlerValue` (line 405), update the `command-ref` branch:

```typescript
function lowerAttachedHandlerValue(handler: DslHandler, ctx: TransformContext): BindingValue {
  if (handler.handlerType === 'command-ref' && handler.commandRef) {
    // V2: direct method call on typed ViewModel instance
    if (ctx.v2Options) {
      return {
        kind: 'expression',
        code: `${ctx.v2Options.qmlId}.${handler.commandRef.methodName}()`,
      };
    }

    // V1: __qmlts.invoke(N)
    let commandId: number | undefined;
    if (ctx.vm) {
      const cmd = ctx.vm.commands.find((c) => c.methodName === handler.commandRef!.methodName);
      commandId = cmd?.options.id;
    }
    return {
      kind: 'expression',
      code:
        commandId != null
          ? `__qmlts.invoke(${commandId})`
          : `__qmlts.invoke("${handler.commandRef.methodName}")`,
    };
  }

  if (handler.handlerType === 'arrow') {
    return { kind: 'script-block', code: handler.code };
  }

  return { kind: 'expression', code: handler.code };
}
```

- [ ] **Step 7: Run existing transformer tests**

Run: `bun test tests/compiler/transform/dsl-transformer.test.ts`
Expected: All existing tests PASS (V1 behavior unchanged — v2Options is undefined by default)

- [ ] **Step 8: Commit**

```bash
git add src/compiler/transform/dsl-transformer.ts
git commit -m "feat(compiler): implement V2 lowering in DslTransformer for commands and state refs"
```

---

### Task 4: Write V2 transformer tests

**Files:**
- Modify: `tests/compiler/transform/dsl-transformer.test.ts`

- [ ] **Step 1: Write V2 command lowering test**

Add a new `describe('V2 mode')` block at the end, inside the outer `describe('DslTransformer')`:

```typescript
  describe('V2 mode', () => {
    const v2Options: import('../../../src/compiler/transform/transform-types.js').V2TransformOptions = {
      qmlId: '__qmlts_vm0',
      className: 'TestVm',
    };

    test('DT-V2-01: command-ref lowers to qmlId.method() in V2 mode', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm, v2Options);
      const handler = result.document.rootObject.members.find(
        (m) => m.kind === 'SignalHandler' && m.name === 'clicked',
      );
      expect(handler).toBeDefined();
      if (handler && handler.kind === 'SignalHandler') {
        expect(handler.body.code).toBe('__qmlts_vm0.handleClick()');
        expect(handler.body.code).not.toContain('__qmlts.invoke');
      }
    });

    test('DT-V2-02: state-ref lowers to qmlId.property in V2 mode', () => {
      const view = buildView(
        `function MyView(vm: any) { return Text().text(vm.title); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, undefined, v2Options);
      const binding = result.document.rootObject.members.find(
        (m) => m.kind === 'Binding' && m.property === 'text',
      );
      expect(binding).toBeDefined();
      if (binding && binding.kind === 'Binding') {
        expect(binding.value).toEqual({ kind: 'expression', code: '__qmlts_vm0.title' });
      }
    });

    test('DT-V2-03: V1 mode still emits __qmlts.invoke when v2Options absent', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm);
      const handler = result.document.rootObject.members.find(
        (m) => m.kind === 'SignalHandler' && m.name === 'clicked',
      );
      expect(handler).toBeDefined();
      if (handler && handler.kind === 'SignalHandler') {
        expect(handler.body.code).toContain('__qmlts.invoke');
      }
    });

    test('DT-V2-04: V2 command bindings metadata still collected', () => {
      const view = buildView(
        `function MyView(vm: any) { return Rectangle().onClicked(vm.handleClick); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, commandVm, v2Options);
      expect(result.commandBindings).toHaveLength(1);
      expect(result.commandBindings[0]!.methodName).toBe('handleClick');
    });

    test('DT-V2-05: V2 state bindings metadata still collected', () => {
      const view = buildView(
        `function MyView(vm: any) { return Text().text(vm.title); }`,
        'MyView',
        'vm',
      );
      const result = transformer.transform(view, undefined, v2Options);
      expect(result.stateBindings).toHaveLength(1);
      expect(result.stateBindings[0]!.vmProperty).toBe('title');
    });
  });
```

- [ ] **Step 2: Run transformer tests to verify V2 tests pass**

Run: `bun test tests/compiler/transform/dsl-transformer.test.ts`
Expected: All tests PASS including new V2 tests

- [ ] **Step 3: Commit**

```bash
git add tests/compiler/transform/dsl-transformer.test.ts
git commit -m "test(compiler): add V2 DslTransformer lowering tests"
```

---

### Task 5: Add V2PostProcessOptions type and update PostProcessor interface

**Files:**
- Modify: `src/compiler/postprocess/postprocess-types.ts`
- Modify: `src/compiler/postprocess/index.ts`

- [ ] **Step 1: Add V2PostProcessOptions type**

Add after the `InjectionStatistics` interface in `postprocess-types.ts`:

```typescript
// ─── V2 PostProcess Options ─────────────────────────────────────────────

export interface V2PostProcessOptions {
  readonly moduleImport: { readonly moduleUri: string; readonly version: string };
  readonly viewModelType: string;
  readonly qmlId: string;
  readonly effects: readonly {
    readonly handlerName: string;
    readonly parameters: readonly string[];
  }[];
  readonly lifecycle: {
    readonly hasMounted: boolean;
    readonly hasUnmounting: boolean;
  };
}
```

- [ ] **Step 2: Update PostProcessor interface**

Update the `PostProcessor` interface to accept optional V2 options:

```typescript
export interface PostProcessor {
  process(
    transformResult: TransformResult,
    viewModel?: AnalyzedViewModel,
    v2Options?: V2PostProcessOptions,
  ): PostProcessResult;
}
```

- [ ] **Step 3: Export V2PostProcessOptions from index.ts**

Update `src/compiler/postprocess/index.ts`:

```typescript
export { createPostProcessor } from './post-processor.js';
export type {
  InjectionStatistics,
  PostProcessor,
  PostProcessResult,
  V2PostProcessOptions,
} from './postprocess-types.js';
```

- [ ] **Step 4: Run typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/compiler/postprocess/postprocess-types.ts src/compiler/postprocess/index.ts
git commit -m "feat(compiler): add V2PostProcessOptions type and update PostProcessor interface"
```

---

### Task 6: Implement V2 path in post-processor.ts

**Files:**
- Modify: `src/compiler/postprocess/post-processor.ts`

- [ ] **Step 1: Add V2PostProcessOptions import**

Add the import at the top:

```typescript
import type {
  InjectionStatistics,
  PostProcessor,
  PostProcessResult,
  V2PostProcessOptions,
} from './postprocess-types.js';
```

- [ ] **Step 2: Update process() signature and add V2 branching**

Update the `process` method signature and add V2 mode gating. The full updated `process` method:

```typescript
    process(
      transformResult: TransformResult,
      viewModel?: AnalyzedViewModel,
      v2Options?: V2PostProcessOptions,
    ): PostProcessResult {
      const diagnostics: Diagnostic[] = [...transformResult.diagnostics];
      const document = deepCloneDocument(transformResult.document);

      // V2 path: ViewModel instance block, module import, V2 lifecycle
      if (v2Options) {
        return processV2(document, transformResult, viewModel, v2Options, diagnostics, importResolver, registry);
      }

      // V1 path (unchanged)
      let connectionsCount = 0;
      let lifecycleCount = 0;

      const needsConnections = transformResult.effectListeners.length > 0 && viewModel != null;
      const needsLifecycle =
        viewModel != null &&
        (viewModel.lifecycle.hasOnMounted || viewModel.lifecycle.hasOnUnmounting);

      // Collect imports
      const allImports: RequiredImport[] = [...transformResult.requiredImports];

      if (needsConnections) {
        const connectionsImport = lookupCanonicalImport(registry, 'Connections');
        if (connectionsImport) allImports.push(connectionsImport);
      }

      if (needsLifecycle) {
        const componentImport = lookupCanonicalImport(registry, 'Component');
        if (componentImport) allImports.push(componentImport);
      }

      // Resolve and set imports
      const resolved = importResolver.resolve(allImports);
      document.imports = resolved.map(toImportNode);

      // Connections injection
      if (needsConnections && viewModel) {
        const connectionsNode = buildConnections(transformResult.effectListeners, viewModel);
        connectionsCount = connectionsNode.handlerCount;
        (document.rootObject.members as ObjectMember[]).push(connectionsNode.node);
      }

      // Lifecycle injection
      if (needsLifecycle && viewModel) {
        const lifecycleNode = buildLifecycle(viewModel);
        lifecycleCount = lifecycleNode.count;
        (document.rootObject.members as ObjectMember[]).push(lifecycleNode.node);
      }

      // Duplicate ID detection
      detectDuplicateIds(document.rootObject, diagnostics);

      // Validation (only with ViewModel)
      if (viewModel) {
        validateCommandBindings(transformResult.commandBindings, viewModel, diagnostics);
        validateStateBindings(transformResult.stateBindings, viewModel, diagnostics);
      }

      const injected: InjectionStatistics = {
        imports: document.imports.length,
        connections: connectionsCount,
        bindings: transformResult.stateBindings.length,
        lifecycleHandlers: lifecycleCount,
      };

      return { document, injected, diagnostics };
    },
```

- [ ] **Step 3: Implement processV2 function**

Add a new `processV2` function after the `createPostProcessor` factory:

```typescript
function processV2(
  document: QmlDocument,
  transformResult: TransformResult,
  viewModel: AnalyzedViewModel | undefined,
  v2Options: V2PostProcessOptions,
  diagnostics: Diagnostic[],
  importResolver: ImportResolver,
  registry: RegistryQueryInterface,
): PostProcessResult {
  // Build ViewModel instance block
  const vmMembers: ObjectMember[] = [];

  // id assignment
  vmMembers.push({ kind: 'IdAssignment', id: v2Options.qmlId } as import('../../ast/types.js').IdAssignmentNode);

  // Effect signal handler bindings
  for (const effect of v2Options.effects) {
    const paramList = effect.parameters.length > 0 ? effect.parameters.join(', ') : '';
    const handlerNode: SignalHandlerNode = {
      kind: 'SignalHandler',
      name: effect.handlerName,
      body: { form: 'expression', code: `function(${paramList}) { }` },
    };
    vmMembers.push(handlerNode);
  }

  const vmBlock: ObjectDefinitionNode = {
    kind: 'ObjectDefinition',
    typeName: v2Options.viewModelType,
    members: vmMembers,
  };

  // Idempotency: check if identical block already exists
  const existingChild = (document.rootObject.members as ObjectMember[]).find(
    (m): m is ObjectDefinitionNode =>
      m.kind === 'ObjectDefinition' && m.typeName === v2Options.viewModelType,
  );
  if (existingChild) {
    const existingId = existingChild.members.find(
      (m) => m.kind === 'IdAssignment',
    );
    if (existingId && existingId.kind === 'IdAssignment' && existingId.id === v2Options.qmlId) {
      // Identical — skip injection (idempotency)
    } else if (existingId && existingId.kind === 'IdAssignment') {
      // Same type, different id — collision diagnostic
      diagnostics.push(
        createDiagnostic(
          'error',
          'QMLTS-V008',
          `ViewModel block collision: type "${v2Options.viewModelType}" already exists with id "${existingId.id}" (expected "${v2Options.qmlId}")`,
        ),
      );
    }
  } else {
    // Prepend as first child of root object
    (document.rootObject.members as ObjectMember[]).unshift(vmBlock);
  }

  // Collect imports — add module import + transform imports
  const allImports: RequiredImport[] = [...transformResult.requiredImports];
  allImports.push({
    moduleUri: v2Options.moduleImport.moduleUri,
    version: v2Options.moduleImport.version,
    injected: true,
  });

  // V2 lifecycle needs Component import
  if (v2Options.lifecycle.hasMounted || v2Options.lifecycle.hasUnmounting) {
    const componentImport = lookupCanonicalImport(registry, 'Component');
    if (componentImport) allImports.push(componentImport);
  }

  // Resolve and set imports (no Connections import in V2)
  const resolved = importResolver.resolve(allImports);
  document.imports = resolved.map(toImportNode);

  // V2 lifecycle injection
  let lifecycleCount = 0;
  if (v2Options.lifecycle.hasMounted || v2Options.lifecycle.hasUnmounting) {
    const lifecycleNode = buildV2Lifecycle(v2Options);
    lifecycleCount = lifecycleNode.count;
    (document.rootObject.members as ObjectMember[]).push(lifecycleNode.node);
  }

  // Duplicate ID detection
  detectDuplicateIds(document.rootObject, diagnostics);

  // Validation (only with ViewModel)
  if (viewModel) {
    validateV2CommandBindings(transformResult.commandBindings, viewModel, diagnostics);
    validateStateBindings(transformResult.stateBindings, viewModel, diagnostics);
  }

  const injected: InjectionStatistics = {
    imports: document.imports.length,
    connections: 0, // V2 has no Connections block
    bindings: transformResult.stateBindings.length,
    lifecycleHandlers: lifecycleCount,
  };

  return { document, injected, diagnostics };
}
```

- [ ] **Step 4: Implement buildV2Lifecycle helper**

```typescript
function buildV2Lifecycle(v2Options: V2PostProcessOptions): {
  node: AttachedBindingNode;
  count: number;
} {
  const bindings: BindingNode[] = [];

  if (v2Options.lifecycle.hasMounted) {
    bindings.push({
      kind: 'Binding',
      property: 'onCompleted',
      value: { kind: 'script-block', code: `${v2Options.qmlId}.onMounted()` },
    });
  }

  if (v2Options.lifecycle.hasUnmounting) {
    bindings.push({
      kind: 'Binding',
      property: 'onDestruction',
      value: { kind: 'script-block', code: `${v2Options.qmlId}.onUnmounting()` },
    });
  }

  return {
    node: {
      kind: 'AttachedBinding',
      attachedTypeName: 'Component',
      bindings,
    },
    count: bindings.length,
  };
}
```

- [ ] **Step 5: Implement validateV2CommandBindings helper**

```typescript
function validateV2CommandBindings(
  bindings: readonly CommandBindingInfo[],
  vm: AnalyzedViewModel,
  diagnostics: Diagnostic[],
): void {
  for (const binding of bindings) {
    const cmd = vm.commands.find((c) => c.methodName === binding.methodName);
    if (!cmd) continue;

    const requiredParams = cmd.parameters.filter((p) => !p.optional);
    if (requiredParams.length > 0) {
      diagnostics.push(
        createDiagnostic(
          'error',
          'QMLTS-P003',
          `Command "${cmd.methodName}" requires ${requiredParams.length} parameter(s) ` +
            `(${requiredParams.map((p) => p.name).join(', ')}), ` +
            `but ${binding.methodName}() passes none`,
        ),
      );
    }
  }
}
```

- [ ] **Step 6: Add SignalHandlerNode to imports**

Ensure `SignalHandlerNode` is imported at the top of `post-processor.ts`. The existing import line already imports some types from `../../ast/types.js`. Add `SignalHandlerNode` and `IdAssignmentNode` if not present:

```typescript
import type {
  AttachedBindingNode,
  BindingNode,
  FunctionDeclarationNode,
  IdAssignmentNode,
  ImportNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
  SignalHandlerNode,
} from '../../ast/types.js';
```

Also add the `V2PostProcessOptions` import:

```typescript
import type {
  InjectionStatistics,
  PostProcessor,
  PostProcessResult,
  V2PostProcessOptions,
} from './postprocess-types.js';
```

- [ ] **Step 7: Run existing post-processor tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: All existing V1 tests PASS (V2 path only activated when `v2Options` is provided)

- [ ] **Step 8: Commit**

```bash
git add src/compiler/postprocess/post-processor.ts
git commit -m "feat(compiler): implement V2 post-processor path with ViewModel block, module import, lifecycle"
```

---

### Task 7: Write V2 post-processor tests

**Files:**
- Modify: `tests/compiler/postprocess/post-processor.test.ts`
- Modify: `tests/compiler/postprocess/helpers.ts`

- [ ] **Step 1: Add findIdAssignment helper if needed**

Check `helpers.ts` — `findSignalHandler` is already there. Add `findIdAssignment`:

```typescript
export function findIdAssignment(
  members: readonly ObjectMember[],
  id: string,
): import('../../../src/ast/types.js').IdAssignmentNode | undefined {
  return members.find(
    (m): m is import('../../../src/ast/types.js').IdAssignmentNode =>
      m.kind === 'IdAssignment' && m.id === id,
  );
}
```

- [ ] **Step 2: Write V2 post-processor tests**

Add a new `describe('V2 mode')` block in the post-processor test file:

```typescript
  describe('V2 mode', () => {
    const v2BaseOptions: import('../../../src/compiler/postprocess/postprocess-types.js').V2PostProcessOptions = {
      moduleImport: { moduleUri: 'MyApp.ViewModels', version: '1.0' },
      viewModelType: 'LoginViewModel',
      qmlId: '__qmlts_vm0',
      effects: [
        { handlerName: 'onLoginCompleted', parameters: ['success'] },
      ],
      lifecycle: { hasMounted: true, hasUnmounting: false },
    };

    it('PP-V2-01: injects ViewModel instance block as first child', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        className: 'LoginViewModel',
        effects: [createMockEffect('onLoginCompleted', { parameters: [{ name: 'success', tsType: 'boolean' }] })],
        lifecycle: { hasOnMounted: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const firstChild = result.document.rootObject.members[0]!;
      expect(firstChild.kind).toBe('ObjectDefinition');
      if (firstChild.kind === 'ObjectDefinition') {
        expect(firstChild.typeName).toBe('LoginViewModel');
        const idNode = findIdAssignment(firstChild.members, '__qmlts_vm0');
        expect(idNode).toBeDefined();
      }
    });

    it('PP-V2-02: ViewModel block contains effect signal handler bindings', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ className: 'LoginViewModel' });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const vmBlock = findChildByType(result.document.rootObject, 'LoginViewModel')!;
      expect(vmBlock).toBeDefined();
      const handler = findSignalHandler(vmBlock.members, 'onLoginCompleted');
      expect(handler).toBeDefined();
      expect(handler!.body.form).toBe('expression');
      expect(handler!.body.code).toBe('function(success) { }');
    });

    it('PP-V2-03: injects module import for ViewModel type', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ className: 'LoginViewModel' });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const moduleImport = findImport(result.document.imports, 'MyApp.ViewModels');
      expect(moduleImport).toBeDefined();
      expect(moduleImport!.version).toBe('1.0');
    });

    it('PP-V2-04: V2 does not inject Connections block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        className: 'LoginViewModel',
        effects: [createMockEffect('onLoginCompleted')],
      });
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'onLoginCompleted',
          effectName: 'onLoginCompleted',
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeUndefined();
      expect(result.injected.connections).toBe(0);
    });

    it('PP-V2-05: V2 lifecycle emits qmlId.onMounted()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ lifecycle: { hasOnMounted: true } });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm, v2BaseOptions);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onCompleted = findBinding(comp!.bindings, 'onCompleted');
      expect(onCompleted).toBeDefined();
      expect(onCompleted!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts_vm0.onMounted()',
      });
    });

    it('PP-V2-06: V2 lifecycle emits qmlId.onUnmounting()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({ lifecycle: { hasOnUnmounting: true } });
      const tr = createTransformResultBuilder().build();
      const opts = { ...v2BaseOptions, lifecycle: { hasMounted: false, hasUnmounting: true } };

      const result = pp.process(tr, vm, opts);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onDestruction = findBinding(comp!.bindings, 'onDestruction');
      expect(onDestruction).toBeDefined();
      expect(onDestruction!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts_vm0.onUnmounting()',
      });
    });

    it('PP-V2-07: V2 idempotency — no duplicate ViewModel block injection', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .child(
          createObject('LoginViewModel').id('__qmlts_vm0'),
        )
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr, undefined, v2BaseOptions);

      const vmBlocks = result.document.rootObject.members.filter(
        (m) => m.kind === 'ObjectDefinition' && m.typeName === 'LoginViewModel',
      );
      expect(vmBlocks).toHaveLength(1);
    });

    it('PP-V2-08: V2 collision — diagnostic on same type with different id', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .child(
          createObject('LoginViewModel').id('someOtherId'),
        )
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr, undefined, v2BaseOptions);

      const v008 = result.diagnostics.filter((d) => d.code === 'QMLTS-V008');
      expect(v008).toHaveLength(1);
      expect(v008[0]!.severity).toBe('error');
      expect(v008[0]!.message).toContain('someOtherId');
    });

    it('PP-V2-09: effects with no parameters produce empty function()', () => {
      const pp = createPostProcessor(importResolver, registry);
      const opts = {
        ...v2BaseOptions,
        effects: [{ handlerName: 'onCountChanged', parameters: [] as string[] }],
      };
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, undefined, opts);

      const vmBlock = findChildByType(result.document.rootObject, 'LoginViewModel')!;
      const handler = findSignalHandler(vmBlock.members, 'onCountChanged');
      expect(handler).toBeDefined();
      expect(handler!.body.code).toBe('function() { }');
    });

    it('PP-V2-10: V2 mode with no lifecycle produces no Component block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const opts = { ...v2BaseOptions, lifecycle: { hasMounted: false, hasUnmounting: false } };
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, undefined, opts);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeUndefined();
    });
  });
```

- [ ] **Step 3: Run post-processor tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: All tests PASS (V1 and V2)

- [ ] **Step 4: Commit**

```bash
git add tests/compiler/postprocess/post-processor.test.ts tests/compiler/postprocess/helpers.ts
git commit -m "test(compiler): add V2 post-processor tests for ViewModel block, lifecycle, effects"
```

---

### Task 8: Thread V2 context in compiler.ts (compileView)

**Files:**
- Modify: `src/compiler/pipeline/compiler.ts:427-541`

- [ ] **Step 1: Import V2 types**

Add imports at the top of `compiler.ts`:

```typescript
import type { V2TransformOptions } from '../transform/transform-types.js';
import type { V2PostProcessOptions } from '../postprocess/postprocess-types.js';
```

- [ ] **Step 2: Construct V2TransformOptions and pass to transformer**

In `compileView`, after the slot computation (line 508) and before the transform call (line 443), restructure:

```typescript
  // V2 slot metadata
  const isV2 = options?.runtime === 'v2';
  const slot: ViewModelInstanceSlot | undefined =
    isV2 && vm && schema
      ? {
          viewName,
          parameterName: vmParamName ?? 'vm',
          className: vm.className,
          qmlId: '__qmlts_vm0',
          compilerSlotKey: `${viewName}::__qmlts_vm0`,
          ownership: 'owned' as const,
          moduleUri: schema.moduleUri,
          moduleVersion: schema.moduleVersion
            ? { major: schema.moduleVersion.major, minor: schema.moduleVersion.minor }
            : undefined,
        }
      : undefined;

  // V2 fail-fast: ViewModel-backed view in V2 mode MUST have slot metadata
  if (isV2 && vm && !slot) {
    reporter.report({
      severity: 'error',
      code: 'QMLTS-V007',
      message: `V2 mode requires slot metadata for ViewModel-backed view "${viewName}" ` +
        `(className: "${vm.className}"). Ensure runtime: "v2" has moduleConfig set and schema is generated.`,
    });
  }

  // V2 transform options
  const v2TransformOptions: V2TransformOptions | undefined =
    isV2 && slot
      ? { qmlId: slot.qmlId, className: slot.className }
      : undefined;

  // Transform: DSL IR → QML AST
  const transformResult = transformer.transform(analyzedView, vm, v2TransformOptions);
  for (const d of transformResult.diagnostics) reporter.report(d);
```

- [ ] **Step 3: Construct V2PostProcessOptions and pass to post-processor**

Replace the effectListeners bridge and postProcessor call:

```typescript
  // V2 post-process options
  const v2PostProcessOptions: V2PostProcessOptions | undefined =
    isV2 && slot && schema
      ? {
          moduleImport: {
            moduleUri: schema.moduleUri!,
            version: schema.moduleVersion
              ? `${schema.moduleVersion.major}.${schema.moduleVersion.minor}`
              : '1.0',
          },
          viewModelType: slot.className,
          qmlId: slot.qmlId,
          effects: vm!.effects.map((e) => ({
            handlerName: deriveHandlerName(e.qmlName),
            parameters: e.parameters.map((p) => p.name),
          })),
          lifecycle: {
            hasMounted: vm!.lifecycle.hasOnMounted,
            hasUnmounting: vm!.lifecycle.hasOnUnmounting,
          },
        }
      : undefined;

  // Bridge ViewModel effects → effectListeners for V1 PostProcessor path.
  // In V2, effects go through the V2 post-processor path as signal handlers.
  let augmentedResult: TransformResult;
  if (v2PostProcessOptions) {
    augmentedResult = transformResult;
  } else {
    const effectListeners: EffectListenerInfo[] = vm
      ? vm.effects.map((e) => ({
          signalName: e.qmlName,
          effectName: e.fieldName,
          objectTypeName: analyzedView.dslTree.typeName,
          handlerParameters: e.parameters.map((p) => p.name),
        }))
      : [];
    augmentedResult = {
      ...transformResult,
      effectListeners: [...transformResult.effectListeners, ...effectListeners],
    };
  }

  // PostProcess: inject imports, Connections/ViewModel block, lifecycle
  const postResult = postProcessor.process(augmentedResult, vm, v2PostProcessOptions);
  for (const d of postResult.diagnostics) reporter.report(d);
```

- [ ] **Step 4: Add deriveHandlerName helper**

Add a helper function at the bottom of `compiler.ts`:

```typescript
/**
 * Derive the QML signal handler name from an effect's qmlName.
 * If qmlName already starts with "on" followed by an uppercase letter,
 * use it directly. Otherwise, prepend "on" and capitalize.
 */
function deriveHandlerName(qmlName: string): string {
  if (qmlName.length >= 3 && qmlName.startsWith('on') && qmlName[2] === qmlName[2]!.toUpperCase() && qmlName[2] !== qmlName[2]!.toLowerCase()) {
    return qmlName;
  }
  return `on${qmlName.charAt(0).toUpperCase()}${qmlName.slice(1)}`;
}
```

- [ ] **Step 5: Move slot computation before transform call**

Ensure the slot computation block (currently lines 492-508) is moved to BEFORE the transform call (currently line 443), so `v2TransformOptions` can be constructed before calling `transformer.transform()`.

- [ ] **Step 6: Run existing compiler tests**

Run: `bun test tests/compiler/pipeline/compiler.test.ts`
Expected: CP-13 through CP-16, CP-18, CP-19 pass. CP-17 will now FAIL because V2 QML output is different from V1.

- [ ] **Step 7: Commit**

```bash
git add src/compiler/pipeline/compiler.ts
git commit -m "feat(compiler): thread V2 context to transformer and post-processor in compileView"
```

---

### Task 9: Create V2 golden fixtures

**Files:**
- Create: `tests/compiler/pipeline/fixtures/golden/CounterView.v2.qml`
- Create: `tests/compiler/pipeline/fixtures/golden/LoginView.v2.qml`

- [ ] **Step 1: Generate V2 golden outputs**

Run a quick script to generate the actual V2 output so we can capture it as golden:

```bash
cd C:\MyFile\DevAll\QmlTS
bun -e "
const { compileFile } = require('./src/compiler/pipeline/compiler.js');
const { join, resolve } = require('path');
const FIXTURES_DIR = resolve('tests/compiler/pipeline/fixtures');

const login = compileFile(join(FIXTURES_DIR, 'LoginView.ts'), {
  runtime: 'v2',
  moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
  diagnostics: { suppress: ['QMLTS-A011'] },
});
console.log('=== LoginView.v2.qml ===');
console.log(login.qmlContent);

const counter = compileFile(join(FIXTURES_DIR, 'CounterView.ts'), {
  runtime: 'v2',
  moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
  diagnostics: { suppress: ['QMLTS-A011'] },
});
console.log('=== CounterView.v2.qml ===');
console.log(counter.qmlContent);
"
```

- [ ] **Step 2: Create CounterView.v2.qml golden file**

Expected content (based on CounterView — has ViewModel with state, command, no effects, no lifecycle):

```qml
import MyApp.ViewModels 1.0
import QtQuick 6.7

Rectangle {
    CounterViewModel {
        id: __qmlts_vm0
    }

    width: 200
    height: 100

    Text {
        text: __qmlts_vm0.count
    }
}
```

Create `tests/compiler/pipeline/fixtures/golden/CounterView.v2.qml` with the actual generated content (verify by running the generation script first).

- [ ] **Step 3: Create LoginView.v2.qml golden file**

Expected content (based on LoginView — has ViewModel with states, command, effect, lifecycle):

```qml
import MyApp.ViewModels 1.0
import QtQuick 6.7
import QtQml 6.0
import QML 1.0

Rectangle {
    LoginViewModel {
        id: __qmlts_vm0

        onOnLoginCompleted: function(success) { }
    }

    width: 400
    height: 300

    Column {
        Text {
            text: __qmlts_vm0.username
        }

        Text {
            text: __qmlts_vm0.password
        }

        Text {
            text: __qmlts_vm0.isLoading
        }
    }

    Component.onCompleted: { __qmlts_vm0.onMounted() }
}
```

Create `tests/compiler/pipeline/fixtures/golden/LoginView.v2.qml` with the actual generated content.

**Important:** The actual content must be captured from the generation script output in Step 1. The examples above are approximations — trust the actual compiler output.

- [ ] **Step 4: Verify V1 golden files unchanged**

Run: `git diff tests/compiler/pipeline/fixtures/golden/CounterView.qml tests/compiler/pipeline/fixtures/golden/LoginView.qml`
Expected: No changes

- [ ] **Step 5: Commit**

```bash
git add tests/compiler/pipeline/fixtures/golden/CounterView.v2.qml tests/compiler/pipeline/fixtures/golden/LoginView.v2.qml
git commit -m "test(compiler): add V2 golden QML fixtures"
```

---

### Task 10: Update CP-17 and add V2 pipeline tests

**Files:**
- Modify: `tests/compiler/pipeline/compiler.test.ts`

- [ ] **Step 1: Update CP-17 to assert V2 output differs from V1**

Replace the current CP-17 test:

```typescript
    test('CP-17: V2 mode — QML output differs from V1 and matches V2 golden', () => {
      const v1Unit = compileSource(VIEW_WITH_VM_SOURCE);
      const v2Unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
      });

      // V2 output must differ from V1
      expect(v2Unit.qmlContent).not.toBe(v1Unit.qmlContent);

      // V2 output must contain V2 patterns
      expect(v2Unit.qmlContent).toContain('__qmlts_vm0.');
      expect(v2Unit.qmlContent).toContain('CounterViewModel {');
      expect(v2Unit.qmlContent).toContain('id: __qmlts_vm0');
      expect(v2Unit.qmlContent).toContain('import MyApp.ViewModels 1.0');

      // V2 output must NOT contain V1 patterns
      expect(v2Unit.qmlContent).not.toContain('vm.count');
      expect(v2Unit.qmlContent).not.toContain('__qmlts.invoke');
      expect(v2Unit.qmlContent).not.toContain('Connections {');
    });
```

- [ ] **Step 2: Add V2 golden file pipeline tests**

Add a new `describe('V2 golden files')` inside the `describe('compile (project)')` block:

```typescript
    describe('V2 golden files', () => {
      function compileV2Project() {
        return compile({
          inputDir: FIXTURES_DIR,
          outputDir: 'dist',
          tsconfigPath: TSCONFIG_PATH,
          runtime: 'v2',
          moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
          diagnostics: { suppress: ['QMLTS-A011'] },
        });
      }

      test('CP-V2-01: LoginView V2 QML matches golden file', () => {
        const result = compileV2Project();
        const loginUnit = result.units.find((u) => u.viewName === 'LoginView');
        expect(loginUnit).toBeDefined();
        expect(loginUnit!.qmlContent).toBe(readGolden('LoginView.v2.qml'));
      });

      test('CP-V2-02: CounterView V2 QML matches golden file', () => {
        const result = compileV2Project();
        const counterUnit = result.units.find((u) => u.viewName === 'CounterView');
        expect(counterUnit).toBeDefined();
        expect(counterUnit!.qmlContent).toBe(readGolden('CounterView.v2.qml'));
      });

      test('CP-V2-03: V1 golden files are byte-for-byte unchanged', () => {
        const v1Result = compile({
          inputDir: FIXTURES_DIR,
          outputDir: 'dist',
          tsconfigPath: TSCONFIG_PATH,
          diagnostics: { suppress: ['QMLTS-A011'] },
        });
        const loginUnit = v1Result.units.find((u) => u.viewName === 'LoginView');
        expect(loginUnit!.qmlContent).toBe(readGolden('LoginView.qml'));
        const counterUnit = v1Result.units.find((u) => u.viewName === 'CounterView');
        expect(counterUnit!.qmlContent).toBe(readGolden('CounterView.qml'));
      });

      test('CP-V2-04: V2 output does not contain V1 protocol patterns', () => {
        const result = compileV2Project();
        for (const unit of result.units) {
          if (unit.viewModelName) {
            expect(unit.qmlContent).not.toContain('__qmlts.invoke(');
            expect(unit.qmlContent).not.toContain('Connections {');
            expect(unit.qmlContent).not.toMatch(/\bvm\./);
          }
        }
      });

      test('CP-V2-05: V2 view without ViewModel is unchanged from V1', () => {
        const v2Unit = compileSource(SIMPLE_VIEW_SOURCE, {
          runtime: 'v2',
          moduleConfig: { prefix: 'MyApp', version: { major: 1, minor: 0 } },
        });
        const v1Unit = compileSource(SIMPLE_VIEW_SOURCE);
        expect(v2Unit.qmlContent).toBe(v1Unit.qmlContent);
      });
    });
```

- [ ] **Step 3: Add V2 fail-fast test**

Add in the `describe('V2 schema/IR metadata')` block:

```typescript
    test('CP-V2-06: V2 mode with ViewModel but no moduleConfig emits V007 diagnostic', () => {
      const unit = compileSource(VIEW_WITH_VM_SOURCE, {
        runtime: 'v2',
        // no moduleConfig → no schema moduleUri → no slot
      });
      const v007 = unit.diagnostics.filter((d) => d.code === 'QMLTS-V007');
      expect(v007).toHaveLength(1);
      expect(v007[0]!.severity).toBe('error');
      expect(v007[0]!.message).toContain('slot metadata');
    });
```

- [ ] **Step 4: Run all compiler pipeline tests**

Run: `bun test tests/compiler/pipeline/compiler.test.ts`
Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add tests/compiler/pipeline/compiler.test.ts
git commit -m "test(compiler): update CP-17 and add V2 pipeline golden/assertion tests"
```

---

### Task 11: Full verification

**Files:** None (verification only)

- [ ] **Step 1: TypeScript typecheck**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 2: Biome format**

Run: `bunx biome format --write src/ tests/`
Expected: Files formatted

- [ ] **Step 3: Biome lint**

Run: `bunx biome check --fix src/ tests/`
Expected: Files linted

- [ ] **Step 4: Run focused compiler tests**

Run: `bun test tests/compiler/`
Expected: All PASS

- [ ] **Step 5: Run full test suite**

Run: `bun test`
Expected: All PASS

- [ ] **Step 6: Stage and commit any formatting fixes**

```bash
git add -A
git status
# If any formatting changes:
git commit -m "style: biome format/lint fixes"
```

---

### Task 12: Push and open PR

- [ ] **Step 1: Push branch**

```bash
git push -u origin step5/v2-compiler-output
```

- [ ] **Step 2: Open PR**

Create a pull request targeting `main` with:
- Title: `feat: Step 5 — Switch compiler output to V2 typed QML`
- Body summarizing the changes

- [ ] **Step 3: Do not merge**

The PR is opened for review. Do not merge to main.
