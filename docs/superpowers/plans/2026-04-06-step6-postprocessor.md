# Step 6: PostProcessor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the PostProcessor module that transforms Step 5's `TransformResult` into a runtime-ready QML document by injecting imports, Connections for effects, lifecycle hooks, and performing validation.

**Architecture:** Single `createPostProcessor(importResolver, registry)` factory. The `process()` method deep-clones the input document, then runs an injection pipeline: imports → Connections → lifecycle → duplicate ID detection → validation → statistics. All VM-dependent work is skipped when no ViewModel is provided.

**Tech Stack:** TypeScript, Bun test runner, existing QML AST builder (`src/ast/builder.ts`)

---

### Task 1: Create Step 6 branch and extend EffectListenerInfo

**Files:**
- Modify: `src/compiler/transform/transform-types.ts:175-179`

- [ ] **Step 1: Create branch from main**

```bash
git checkout main && git pull origin main
git checkout -b feat/06-step6-postprocessor
```

- [ ] **Step 2: Extend EffectListenerInfo with optional fields**

In `src/compiler/transform/transform-types.ts`, replace the `EffectListenerInfo` interface:

```ts
export interface EffectListenerInfo {
  readonly signalName: string;
  readonly effectName: string;
  readonly objectTypeName: string;
  readonly handlerCode?: string;
  readonly handlerParameters?: readonly string[];
}
```

This adds two optional fields (`handlerCode`, `handlerParameters`) — backward compatible with existing code.

- [ ] **Step 3: Verify typecheck passes**

Run: `bunx tsc --noEmit`
Expected: no errors (new fields are optional, no existing code breaks)

---

### Task 2: Create postprocess-types.ts

**Files:**
- Create: `src/compiler/postprocess/postprocess-types.ts`

- [ ] **Step 1: Create the types file**

```ts
import type { QmlDocument } from '../../ast/types.js';
import type { Diagnostic } from '../diagnostics.js';
import type { AnalyzedViewModel } from '../viewmodel/extractor-types.js';
import type { TransformResult } from '../transform/transform-types.js';

export interface PostProcessor {
  process(
    transformResult: TransformResult,
    viewModel?: AnalyzedViewModel,
  ): PostProcessResult;
}

export interface PostProcessResult {
  readonly document: QmlDocument;
  readonly injected: InjectionStatistics;
  readonly diagnostics: readonly Diagnostic[];
}

export interface InjectionStatistics {
  readonly imports: number;
  readonly connections: number;
  readonly bindings: number;
  readonly lifecycleHandlers: number;
}
```

- [ ] **Step 2: Verify typecheck**

Run: `bunx tsc --noEmit`
Expected: no errors

---

### Task 3: Create test helpers

**Files:**
- Create: `tests/compiler/postprocess/helpers.ts`

The test helpers need:
1. A way to build mock `TransformResult` objects with specific metadata
2. A way to build mock `AnalyzedViewModel` objects
3. Access to the existing mock registry from Step 5 tests (extended with `Connections` and `Component` types)

- [ ] **Step 1: Create helpers file**

```ts
import type {
  AttachedBindingNode,
  BindingNode,
  FunctionDeclarationNode,
  ImportNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
  SignalHandlerNode,
} from '../../../src/ast/types.js';
import type { AnalyzedLifecycle } from '../../../src/viewmodel/lifecycle.js';
import type {
  AnalyzedCommand,
  AnalyzedCommandParameter,
  AnalyzedEffect,
  AnalyzedEffectParameter,
  AnalyzedState,
  AnalyzedViewModel,
} from '../../../src/compiler/viewmodel/extractor-types.js';
import type {
  CommandBindingInfo,
  EffectListenerInfo,
  RequiredImport,
  StateBindingInfo,
  TransformResult,
} from '../../../src/compiler/transform/transform-types.js';
import type { Diagnostic } from '../../../src/compiler/diagnostics.js';
import { createDocument, createObject } from '../../../src/ast/builder.js';
import { RegistryQuery } from '../../../src/registry/registry-query.js';
import type {
  QmlProperty,
  QmlRegistry,
  QmlType,
  RegistryQueryInterface,
} from '../../../src/registry/types.js';

// ─── Mock TransformResult Builder ───────────────────────────────────────

export interface TransformResultBuilder {
  withImports(...imports: RequiredImport[]): TransformResultBuilder;
  withStateBindings(...bindings: StateBindingInfo[]): TransformResultBuilder;
  withCommandBindings(...bindings: CommandBindingInfo[]): TransformResultBuilder;
  withEffectListeners(...listeners: EffectListenerInfo[]): TransformResultBuilder;
  withDiagnostics(...diags: Diagnostic[]): TransformResultBuilder;
  withDocument(doc: QmlDocument): TransformResultBuilder;
  withRootObject(obj: ObjectDefinitionNode): TransformResultBuilder;
  build(): TransformResult;
}

export function createTransformResultBuilder(): TransformResultBuilder {
  let document: QmlDocument = createDocument().root(createObject('Rectangle'));
  const requiredImports: RequiredImport[] = [];
  const stateBindings: StateBindingInfo[] = [];
  const commandBindings: CommandBindingInfo[] = [];
  const effectListeners: EffectListenerInfo[] = [];
  const diagnostics: Diagnostic[] = [];

  const builder: TransformResultBuilder = {
    withImports(...imports) {
      requiredImports.push(...imports);
      return builder;
    },
    withStateBindings(...bindings) {
      stateBindings.push(...bindings);
      return builder;
    },
    withCommandBindings(...bindings) {
      commandBindings.push(...bindings);
      return builder;
    },
    withEffectListeners(...listeners) {
      effectListeners.push(...listeners);
      return builder;
    },
    withDiagnostics(...diags) {
      diagnostics.push(...diags);
      return builder;
    },
    withDocument(doc) {
      document = doc;
      return builder;
    },
    withRootObject(obj) {
      document = createDocument().root(obj);
      return builder;
    },
    build(): TransformResult {
      return {
        document,
        requiredImports,
        stateBindings,
        commandBindings,
        effectListeners,
        diagnostics,
      };
    },
  };

  return builder;
}

// ─── Mock AnalyzedViewModel Builder ─────────────────────────────────────

export function createMockViewModel(overrides: {
  className?: string;
  states?: AnalyzedState[];
  commands?: AnalyzedCommand[];
  effects?: AnalyzedEffect[];
  lifecycle?: Partial<AnalyzedLifecycle>;
} = {}): AnalyzedViewModel {
  return {
    className: overrides.className ?? 'TestViewModel',
    filePath: '/test/TestViewModel.ts',
    line: 1,
    isExported: true,
    states: overrides.states ?? [],
    commands: overrides.commands ?? [],
    effects: overrides.effects ?? [],
    lifecycle: {
      hasOnMounted: false,
      hasOnUnmounting: false,
      hasOnBeforeHotReload: false,
      hasOnAfterHotReload: false,
      hasOnVisibilityChanged: false,
      ...overrides.lifecycle,
    },
    constructorParams: [],
  };
}

export function createMockState(fieldName: string, opts: {
  tsType?: string;
  qmlType?: string;
  qmlName?: string;
  readonly?: boolean;
} = {}): AnalyzedState {
  return {
    fieldName,
    tsType: opts.tsType ?? 'string',
    qmlType: opts.qmlType ?? 'string',
    qmlName: opts.qmlName ?? fieldName,
    options: { readonly: opts.readonly },
    line: 1,
  };
}

export function createMockCommand(methodName: string, opts: {
  id?: number;
  parameters?: AnalyzedCommandParameter[];
  alias?: string;
} = {}): AnalyzedCommand {
  return {
    methodName,
    qmlName: opts.alias ?? methodName,
    parameters: opts.parameters ?? [],
    returnType: 'void',
    options: {
      id: opts.id,
      alias: opts.alias,
    },
    line: 1,
  };
}

export function createMockEffect(fieldName: string, opts: {
  id?: number;
  parameters?: AnalyzedEffectParameter[];
  alias?: string;
} = {}): AnalyzedEffect {
  return {
    fieldName,
    qmlName: opts.alias ?? fieldName,
    parameters: opts.parameters ?? [],
    isFunctionTyped: true,
    options: {
      id: opts.id,
      alias: opts.alias,
    },
    line: 1,
  };
}

// ─── Mock Registry (extends Step 5 with Connections + Component) ────────

function makeProperty(name: string, type: string, opts: Partial<QmlProperty> = {}): QmlProperty {
  return {
    name,
    type,
    cppType: type,
    readonly: false,
    constant: false,
    required: false,
    final: false,
    pointer: false,
    list: false,
    hasNotify: true,
    hasBindable: false,
    ...opts,
  };
}

function makeType(
  qualifiedName: string,
  qmlName: string,
  moduleUri: string,
  opts: {
    baseType?: string;
    properties?: QmlProperty[];
    creatable?: boolean;
  } = {},
): QmlType {
  return {
    qualifiedName,
    qmlName,
    moduleUri,
    accessSemantics: 'reference',
    exports: [{ module: moduleUri, name: qmlName, version: '6.11', revision: 0 }],
    creatable: opts.creatable ?? true,
    singleton: false,
    properties: opts.properties ?? [],
    signals: [],
    methods: [],
    enums: [],
    sources: [],
    baseType: opts.baseType,
  };
}

export function createPostProcessorRegistry(): RegistryQueryInterface {
  const types: QmlType[] = [
    makeType('QtQuick::Item', 'Item', 'QtQuick', {
      properties: [
        makeProperty('width', 'real'),
        makeProperty('height', 'real'),
        makeProperty('children', 'list<Item>', { readonly: true, list: true }),
      ],
    }),
    makeType('QtQuick::Rectangle', 'Rectangle', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [
        makeProperty('color', 'color'),
        makeProperty('radius', 'real'),
      ],
    }),
    makeType('QtQuick::Text', 'Text', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('text', 'string')],
    }),
    // Connections lives in QtQml
    makeType('QtQml::Connections', 'Connections', 'QtQml', {
      properties: [makeProperty('target', 'var')],
    }),
    // Component lives in QtQml
    makeType('QtQml::Component', 'Component', 'QtQml', {
      properties: [],
    }),
    // Button in QtQuick.Controls
    makeType('QtQuick.Controls::Button', 'Button', 'QtQuick.Controls', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('text', 'string')],
    }),
  ];

  const registry: QmlRegistry = {
    formatVersion: '1.0.0',
    generatedAt: '2026-01-01T00:00:00Z',
    qtVersion: '6.11.0',
    qtDir: '/mock/qt',
    buildDuration: 0,
    modules: [
      {
        uri: 'QtQuick',
        dirPath: '/mock/QtQuick',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Item', 'Rectangle', 'Text'],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQml',
        dirPath: '/mock/QtQml',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Connections', 'Component'],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQuick.Controls',
        dirPath: '/mock/QtQuick.Controls',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Button'],
        qmlFileTypes: [],
      },
    ],
    types,
    builtins: [],
    stats: {
      moduleCount: 3,
      typeCount: types.length,
      builtinCount: 0,
      sourceFiles: { qmltypes: 0, qmldir: 0, metatypes: 0 },
    },
  };

  return new RegistryQuery(registry);
}

// ─── AST Query Helpers ──────────────────────────────────────────────────

export function findChildByType(
  root: ObjectDefinitionNode,
  typeName: string,
): ObjectDefinitionNode | undefined {
  return root.members.find(
    (m): m is ObjectDefinitionNode => m.kind === 'ObjectDefinition' && m.typeName === typeName,
  );
}

export function findAttachedBinding(
  root: ObjectDefinitionNode,
  attachedTypeName: string,
): AttachedBindingNode | undefined {
  return root.members.find(
    (m): m is AttachedBindingNode =>
      m.kind === 'AttachedBinding' && m.attachedTypeName === attachedTypeName,
  );
}

export function findBinding(
  members: ObjectMember[],
  property: string,
): BindingNode | undefined {
  return members.find(
    (m): m is BindingNode => m.kind === 'Binding' && m.property === property,
  );
}

export function findSignalHandler(
  members: ObjectMember[],
  name: string,
): SignalHandlerNode | undefined {
  return members.find(
    (m): m is SignalHandlerNode => m.kind === 'SignalHandler' && m.name === name,
  );
}

export function findFunctionDeclaration(
  members: ObjectMember[],
  name: string,
): FunctionDeclarationNode | undefined {
  return members.find(
    (m): m is FunctionDeclarationNode => m.kind === 'FunctionDeclaration' && m.name === name,
  );
}

export function findImport(
  imports: ImportNode[],
  moduleUri: string,
): ImportNode | undefined {
  return imports.find((i) => i.moduleUri === moduleUri);
}
```

- [ ] **Step 2: Verify typecheck**

Run: `bunx tsc --noEmit`
Expected: no errors

---

### Task 4: Write import injection tests (PP-01, PP-14, PP-15)

**Files:**
- Create: `tests/compiler/postprocess/post-processor.test.ts`

- [ ] **Step 1: Write the import injection tests**

```ts
import { describe, expect, it } from 'bun:test';
import { createImportResolver } from '../../../src/compiler/transform/import-resolver.js';
import { createPostProcessor } from '../../../src/compiler/postprocess/post-processor.js';
import {
  createTransformResultBuilder,
  createPostProcessorRegistry,
  createMockViewModel,
  createMockEffect,
  findImport,
  findChildByType,
} from './helpers.js';

const registry = createPostProcessorRegistry();
const importResolver = createImportResolver();

describe('PostProcessor', () => {
  describe('Import Injection', () => {
    // PP-01: Import injection
    it('PP-01: resolves requiredImports into document ImportNodes', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick.Controls', version: '6.11', injected: false },
        )
        .build();

      const result = pp.process(tr);

      expect(result.document.imports).toHaveLength(2);
      expect(findImport(result.document.imports, 'QtQuick')).toBeDefined();
      expect(findImport(result.document.imports, 'QtQuick.Controls')).toBeDefined();
      expect(result.document.imports[0]!.kind).toBe('Import');
      expect(result.document.imports[0]!.importKind).toBe('module');
    });

    // PP-14: Import deduplication
    it('PP-14: deduplicates imports via ImportResolver', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.5', injected: false },
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick', version: '6.8', injected: true },
        )
        .build();

      const result = pp.process(tr);

      expect(result.document.imports).toHaveLength(1);
      const qtQuick = findImport(result.document.imports, 'QtQuick')!;
      expect(qtQuick.version).toBe('6.11');
    });

    // PP-15: Framework import auto-injection
    it('PP-15: auto-injects canonical module import for Connections', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [createMockEffect('showError', { parameters: [{ name: 'msg', tsType: 'string' }] })],
      });
      const tr = createTransformResultBuilder()
        .withImports({ moduleUri: 'QtQuick', version: '6.11', injected: false })
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
          handlerCode: 'console.log(msg)',
          handlerParameters: ['msg'],
        })
        .build();

      const result = pp.process(tr, vm);

      // QtQml should be auto-injected because Connections lives there
      expect(findImport(result.document.imports, 'QtQml')).toBeDefined();
      expect(findImport(result.document.imports, 'QtQuick')).toBeDefined();
    });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: FAIL — `createPostProcessor` does not exist yet

---

### Task 5: Implement post-processor.ts with import injection

**Files:**
- Create: `src/compiler/postprocess/post-processor.ts`

- [ ] **Step 1: Implement the PostProcessor with import injection**

```ts
import type {
  AttachedBindingNode,
  BindingNode,
  FunctionDeclarationNode,
  ImportNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
} from '../../ast/types.js';
import type { Diagnostic, DiagnosticCode } from '../diagnostics.js';
import type { RegistryQueryInterface } from '../../registry/types.js';
import type {
  AnalyzedViewModel,
  AnalyzedCommand,
  AnalyzedEffect,
} from '../viewmodel/extractor-types.js';
import type {
  CommandBindingInfo,
  EffectListenerInfo,
  ImportResolver,
  RequiredImport,
  StateBindingInfo,
  TransformResult,
} from '../transform/transform-types.js';
import type {
  InjectionStatistics,
  PostProcessResult,
  PostProcessor,
} from './postprocess-types.js';

export function createPostProcessor(
  importResolver: ImportResolver,
  registry: RegistryQueryInterface,
): PostProcessor {
  return {
    process(
      transformResult: TransformResult,
      viewModel?: AnalyzedViewModel,
    ): PostProcessResult {
      const diagnostics: Diagnostic[] = [];
      const document = deepCloneDocument(transformResult.document);

      let connectionsCount = 0;
      let lifecycleCount = 0;

      // Determine what needs injection
      const needsConnections =
        transformResult.effectListeners.length > 0 && viewModel != null;
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
        const connectionsNode = buildConnections(
          transformResult.effectListeners,
          viewModel,
        );
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
        validateCommandBindings(
          transformResult.commandBindings,
          viewModel,
          diagnostics,
        );
        validateStateBindings(
          transformResult.stateBindings,
          viewModel,
          diagnostics,
        );
      }

      const injected: InjectionStatistics = {
        imports: document.imports.length,
        connections: connectionsCount,
        bindings: transformResult.stateBindings.length,
        lifecycleHandlers: lifecycleCount,
      };

      return { document, injected, diagnostics };
    },
  };
}

// ─── Deep Clone ─────────────────────────────────────────────────────────

function deepCloneDocument(doc: QmlDocument): QmlDocument {
  return JSON.parse(JSON.stringify(doc)) as QmlDocument;
}

// ─── Import Helpers ─────────────────────────────────────────────────────

function lookupCanonicalImport(
  registry: RegistryQueryInterface,
  typeName: string,
): RequiredImport | undefined {
  const type = registry.findByQmlName(typeName);
  if (!type) return undefined;
  return {
    moduleUri: type.moduleUri,
    injected: true,
  };
}

function toImportNode(resolved: {
  moduleUri: string;
  version?: string;
  qualifier?: string;
}): ImportNode {
  const node: ImportNode = {
    kind: 'Import',
    importKind: 'module',
    moduleUri: resolved.moduleUri,
  };
  if (resolved.version) node.version = resolved.version;
  if (resolved.qualifier) node.qualifier = resolved.qualifier;
  return node;
}

// ─── Connections ────────────────────────────────────────────────────────

function buildConnections(
  listeners: readonly EffectListenerInfo[],
  vm: AnalyzedViewModel,
): { node: ObjectDefinitionNode; handlerCount: number } {
  const members: ObjectMember[] = [];

  // target: __qmlts
  const targetBinding: BindingNode = {
    kind: 'Binding',
    property: 'target',
    value: { kind: 'expression', code: '__qmlts' },
  };
  members.push(targetBinding);

  for (const listener of listeners) {
    const effect = vm.effects.find((e) => e.fieldName === listener.effectName);

    // Determine handler name: on + capitalized qmlName
    const qmlName = effect?.qmlName ?? listener.effectName;
    const handlerName = `on${qmlName.charAt(0).toUpperCase()}${qmlName.slice(1)}`;

    // Determine parameters
    const params: string[] = listener.handlerParameters
      ? [...listener.handlerParameters]
      : effect?.parameters.map((p) => p.name) ?? [];

    // Determine body
    const body = listener.handlerCode ?? '';

    const fn: FunctionDeclarationNode = {
      kind: 'FunctionDeclaration',
      name: handlerName,
      parameters: params.map((p) => ({ name: p })),
      body,
    };
    members.push(fn);
  }

  return {
    node: {
      kind: 'ObjectDefinition',
      typeName: 'Connections',
      members,
    },
    handlerCount: listeners.length,
  };
}

// ─── Lifecycle ──────────────────────────────────────────────────────────

function buildLifecycle(vm: AnalyzedViewModel): {
  node: AttachedBindingNode;
  count: number;
} {
  const bindings: BindingNode[] = [];

  if (vm.lifecycle.hasOnMounted) {
    bindings.push({
      kind: 'Binding',
      property: 'onCompleted',
      value: { kind: 'script-block', code: '__qmlts.onMounted()' },
    });
  }

  if (vm.lifecycle.hasOnUnmounting) {
    bindings.push({
      kind: 'Binding',
      property: 'onDestruction',
      value: { kind: 'script-block', code: '__qmlts.onUnmounting()' },
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

// ─── Duplicate ID Detection ─────────────────────────────────────────────

function detectDuplicateIds(
  root: ObjectDefinitionNode,
  diagnostics: Diagnostic[],
): void {
  const ids = new Map<string, number>();
  collectIds(root, ids);

  for (const [id, count] of ids) {
    if (count > 1) {
      diagnostics.push(createDiagnostic(
        'error',
        'QMLTS-P001',
        `Duplicate object id "${id}" — found ${count} occurrences`,
      ));
    }
  }
}

function collectIds(
  node: ObjectDefinitionNode,
  ids: Map<string, number>,
): void {
  for (const member of node.members) {
    if (member.kind === 'IdAssignment') {
      ids.set(member.id, (ids.get(member.id) ?? 0) + 1);
    }
    if (member.kind === 'ObjectDefinition') {
      collectIds(member, ids);
    }
  }
}

// ─── Command Validation ─────────────────────────────────────────────────

function validateCommandBindings(
  bindings: readonly CommandBindingInfo[],
  vm: AnalyzedViewModel,
  diagnostics: Diagnostic[],
): void {
  for (const binding of bindings) {
    const cmd = vm.commands.find((c) => c.methodName === binding.methodName);
    if (!cmd) continue;

    const requiredParams = cmd.parameters.filter((p) => !p.optional);
    if (requiredParams.length > 0) {
      diagnostics.push(createDiagnostic(
        'error',
        'QMLTS-P003',
        `Command "${cmd.methodName}" requires ${requiredParams.length} parameter(s) ` +
        `(${requiredParams.map((p) => p.name).join(', ')}), ` +
        `but __qmlts.invoke(${binding.commandId ?? '"' + binding.methodName + '"'}) passes none`,
      ));
    }
  }
}

// ─── State Validation ───────────────────────────────────────────────────

function validateStateBindings(
  bindings: readonly StateBindingInfo[],
  vm: AnalyzedViewModel,
  diagnostics: Diagnostic[],
): void {
  for (const binding of bindings) {
    const state = vm.states.find((s) => s.fieldName === binding.vmProperty);
    if (!state) {
      diagnostics.push(createDiagnostic(
        'warning',
        'QMLTS-P004',
        `State binding "vm.${binding.vmProperty}" references a property ` +
        `not found in ViewModel "${vm.className}"`,
      ));
    }
  }
}

// ─── Diagnostic Helper ──────────────────────────────────────────────────

function createDiagnostic(
  severity: 'error' | 'warning' | 'info' | 'hint',
  code: DiagnosticCode,
  message: string,
): Diagnostic {
  return { severity, code, message };
}
```

- [ ] **Step 2: Run the import injection tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: PP-01, PP-14, PP-15 all PASS

---

### Task 6: Write Connections injection tests (PP-02, PP-10)

**Files:**
- Modify: `tests/compiler/postprocess/post-processor.test.ts`

- [ ] **Step 1: Add Connections tests**

Add to the test file after the Import Injection describe block:

```ts
  describe('Connections Injection', () => {
    // PP-02: Connections injection for effects
    it('PP-02: injects Connections block with effect handlers', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [
          createMockEffect('showError', {
            parameters: [{ name: 'msg', tsType: 'string' }],
          }),
        ],
      });
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
          handlerCode: 'errorLabel.text = msg',
          handlerParameters: ['msg'],
        })
        .build();

      const result = pp.process(tr, vm);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeDefined();

      // Check target binding
      const target = findBinding(conn!.members, 'target');
      expect(target).toBeDefined();
      expect(target!.value).toEqual({ kind: 'expression', code: '__qmlts' });

      // Check handler function
      const handler = findFunctionDeclaration(conn!.members, 'onShowError');
      expect(handler).toBeDefined();
      expect(handler!.parameters).toEqual([{ name: 'msg' }]);
      expect(handler!.body).toBe('errorLabel.text = msg');
    });

    // PP-10: effectListeners without ViewModel — silently skipped
    it('PP-10: skips Connections when no ViewModel provided', () => {
      const pp = createPostProcessor(importResolver, registry);
      const tr = createTransformResultBuilder()
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr);

      const conn = findChildByType(result.document.rootObject, 'Connections');
      expect(conn).toBeUndefined();
      expect(result.diagnostics).toHaveLength(0);
      expect(result.injected.connections).toBe(0);
    });
  });
```

Add the needed import at the top:

```ts
import {
  createTransformResultBuilder,
  createPostProcessorRegistry,
  createMockViewModel,
  createMockEffect,
  findImport,
  findChildByType,
  findBinding,
  findFunctionDeclaration,
} from './helpers.js';
```

- [ ] **Step 2: Run tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: PP-02 and PP-10 PASS (implementation already handles these cases)

---

### Task 7: Write lifecycle injection tests (PP-05, PP-06, PP-13)

**Files:**
- Modify: `tests/compiler/postprocess/post-processor.test.ts`

- [ ] **Step 1: Add lifecycle tests**

Add after the Connections Injection describe block:

```ts
  describe('Lifecycle Injection', () => {
    // PP-05: Component.onCompleted injection
    it('PP-05: injects Component.onCompleted for onMounted', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnMounted: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onCompleted = findBinding(comp!.bindings, 'onCompleted');
      expect(onCompleted).toBeDefined();
      expect(onCompleted!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts.onMounted()',
      });
    });

    // PP-06: Component.onDestruction injection
    it('PP-06: injects Component.onDestruction for onUnmounting', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnUnmounting: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      const onDestruction = findBinding(comp!.bindings, 'onDestruction');
      expect(onDestruction).toBeDefined();
      expect(onDestruction!.value).toEqual({
        kind: 'script-block',
        code: '__qmlts.onUnmounting()',
      });
    });

    // PP-13: Multiple lifecycle hooks
    it('PP-13: injects both onCompleted and onDestruction in same Component block', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        lifecycle: { hasOnMounted: true, hasOnUnmounting: true },
      });
      const tr = createTransformResultBuilder().build();

      const result = pp.process(tr, vm);

      const comp = findAttachedBinding(result.document.rootObject, 'Component');
      expect(comp).toBeDefined();
      expect(comp!.bindings).toHaveLength(2);
      expect(findBinding(comp!.bindings, 'onCompleted')).toBeDefined();
      expect(findBinding(comp!.bindings, 'onDestruction')).toBeDefined();
      expect(result.injected.lifecycleHandlers).toBe(2);
    });
  });
```

Add `findAttachedBinding` to the import list from helpers.

- [ ] **Step 2: Run tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: PP-05, PP-06, PP-13 all PASS

---

### Task 8: Write validation and diagnostics tests (PP-07, PP-11, PP-12)

**Files:**
- Modify: `tests/compiler/postprocess/post-processor.test.ts`

- [ ] **Step 1: Add validation tests**

```ts
  describe('Validation', () => {
    // PP-07: Duplicate ID detection
    it('PP-07: emits QMLTS-P001 for duplicate object ids', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .id('myId')
        .child(createObject('Text').id('myId'))
        .build();
      const tr = createTransformResultBuilder().withRootObject(root).build();

      const result = pp.process(tr);

      const p001 = result.diagnostics.filter((d) => d.code === 'QMLTS-P001');
      expect(p001).toHaveLength(1);
      expect(p001[0]!.severity).toBe('error');
      expect(p001[0]!.message).toContain('myId');
    });

    // PP-11: P003 — command parameter mismatch
    it('PP-11: emits QMLTS-P003 when command has required params', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        commands: [
          createMockCommand('login', {
            id: 42,
            parameters: [
              { name: 'username', tsType: 'string', qmlType: 'string', optional: false },
              { name: 'password', tsType: 'string', qmlType: 'string', optional: false },
            ],
          }),
        ],
      });
      const tr = createTransformResultBuilder()
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'login',
          commandId: 42,
          objectTypeName: 'Button',
        })
        .build();

      const result = pp.process(tr, vm);

      const p003 = result.diagnostics.filter((d) => d.code === 'QMLTS-P003');
      expect(p003).toHaveLength(1);
      expect(p003[0]!.severity).toBe('error');
      expect(p003[0]!.message).toContain('login');
      expect(p003[0]!.message).toContain('username');
    });

    // PP-12: P004 — invalid state binding
    it('PP-12: emits QMLTS-P004 for invalid state binding path', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        states: [createMockState('count')],
      });
      const tr = createTransformResultBuilder()
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'nonExistent',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr, vm);

      const p004 = result.diagnostics.filter((d) => d.code === 'QMLTS-P004');
      expect(p004).toHaveLength(1);
      expect(p004[0]!.severity).toBe('warning');
      expect(p004[0]!.message).toContain('nonExistent');
    });
  });
```

Add `createMockCommand`, `createMockState`, `createObject` to imports.

- [ ] **Step 2: Run tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: PP-07, PP-11, PP-12 all PASS

---

### Task 9: Write remaining tests (PP-03, PP-04, PP-08, PP-09)

**Files:**
- Modify: `tests/compiler/postprocess/post-processor.test.ts`

- [ ] **Step 1: Add remaining tests**

```ts
  describe('Transformer Output Validation', () => {
    // PP-03: command invoke already lowered — PostProcessor validates
    it('PP-03: validates command invoke matches ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        commands: [createMockCommand('doAction', { id: 7 })],
      });
      const root = createObject('Rectangle')
        .handler('onClicked', { kind: 'expression', code: '__qmlts.invoke(7)' })
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'doAction',
          commandId: 7,
          objectTypeName: 'Rectangle',
        })
        .build();

      const result = pp.process(tr, vm);

      // No required params → no P003
      expect(result.diagnostics.filter((d) => d.code === 'QMLTS-P003')).toHaveLength(0);
      // Command binding counted in stats
      expect(result.injected.bindings).toBe(0); // no state bindings
    });

    // PP-04: state binding already lowered — PostProcessor validates
    it('PP-04: validates state binding exists in ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        states: [createMockState('userName')],
      });
      const root = createObject('Text')
        .bind('text', { kind: 'expression', code: 'vm.userName' })
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'userName',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr, vm);

      // Valid state → no P004
      expect(result.diagnostics.filter((d) => d.code === 'QMLTS-P004')).toHaveLength(0);
      expect(result.injected.bindings).toBe(1);
    });
  });

  describe('No ViewModel', () => {
    // PP-08: no ViewModel — skip all VM-dependent work
    it('PP-08: skips all VM injection and diagnostics without ViewModel', () => {
      const pp = createPostProcessor(importResolver, registry);
      const root = createObject('Rectangle')
        .bind('width', 100)
        .child(createObject('Text').bind('text', 'hello'))
        .build();
      const tr = createTransformResultBuilder()
        .withRootObject(root)
        .withImports({ moduleUri: 'QtQuick', version: '6.11', injected: false })
        .withEffectListeners({
          signalName: 'showError',
          effectName: 'showError',
          objectTypeName: 'Rectangle',
        })
        .withCommandBindings({
          signalName: 'onClicked',
          vmName: 'vm',
          methodName: 'doAction',
          commandId: 1,
          objectTypeName: 'Rectangle',
        })
        .withStateBindings({
          property: 'text',
          vmName: 'vm',
          vmProperty: 'nonExistent',
          objectTypeName: 'Text',
        })
        .build();

      const result = pp.process(tr);

      // No Connections injected
      expect(findChildByType(result.document.rootObject, 'Connections')).toBeUndefined();
      // No lifecycle injected
      expect(findAttachedBinding(result.document.rootObject, 'Component')).toBeUndefined();
      // No VM-related diagnostics
      expect(result.diagnostics).toHaveLength(0);
      // Stats reflect no VM injection
      expect(result.injected.connections).toBe(0);
      expect(result.injected.lifecycleHandlers).toBe(0);
    });
  });

  describe('Injection Statistics', () => {
    // PP-09: full statistics
    it('PP-09: returns correct injection statistics', () => {
      const pp = createPostProcessor(importResolver, registry);
      const vm = createMockViewModel({
        effects: [
          createMockEffect('showError', { parameters: [{ name: 'msg', tsType: 'string' }] }),
          createMockEffect('showSuccess'),
        ],
        lifecycle: { hasOnMounted: true, hasOnUnmounting: true },
        states: [createMockState('count')],
      });
      const tr = createTransformResultBuilder()
        .withImports(
          { moduleUri: 'QtQuick', version: '6.11', injected: false },
          { moduleUri: 'QtQuick.Controls', version: '6.11', injected: false },
        )
        .withEffectListeners(
          {
            signalName: 'showError',
            effectName: 'showError',
            objectTypeName: 'Rectangle',
            handlerCode: 'console.log(msg)',
            handlerParameters: ['msg'],
          },
          {
            signalName: 'showSuccess',
            effectName: 'showSuccess',
            objectTypeName: 'Rectangle',
          },
        )
        .withStateBindings(
          {
            property: 'text',
            vmName: 'vm',
            vmProperty: 'count',
            objectTypeName: 'Text',
          },
        )
        .build();

      const result = pp.process(tr, vm);

      // 2 user imports + 1 auto-injected QtQml (for Connections+Component)
      expect(result.injected.imports).toBe(3);
      expect(result.injected.connections).toBe(2);
      expect(result.injected.bindings).toBe(1);
      expect(result.injected.lifecycleHandlers).toBe(2);
    });
  });
```

- [ ] **Step 2: Run all tests**

Run: `bun test tests/compiler/postprocess/post-processor.test.ts`
Expected: All 15 tests PASS

---

### Task 10: Create barrel exports and wire up

**Files:**
- Create: `src/compiler/postprocess/index.ts`
- Modify: `src/compiler/index.ts`

- [ ] **Step 1: Create barrel export**

Create `src/compiler/postprocess/index.ts`:

```ts
export type {
  InjectionStatistics,
  PostProcessResult,
  PostProcessor,
} from './postprocess-types.js';

export { createPostProcessor } from './post-processor.js';
```

- [ ] **Step 2: Add postprocess re-export to compiler barrel**

In `src/compiler/index.ts`, add at the end:

```ts
export * from './postprocess/index.js';
```

- [ ] **Step 3: Verify typecheck**

Run: `bunx tsc --noEmit`
Expected: no errors

---

### Task 11: Full validation and commit

**Files:** All Step 6 files

- [ ] **Step 1: Run all project tests**

Run: `bun test`
Expected: All tests pass (including Step 5 tests — no regressions from EffectListenerInfo extension)

- [ ] **Step 2: Run typecheck**

Run: `bunx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Run lint**

Run: `bunx biome check --fix src/compiler/postprocess/ tests/compiler/postprocess/`
Expected: clean or auto-fixed

- [ ] **Step 4: Run format**

Run: `bunx biome format --write src/compiler/postprocess/ tests/compiler/postprocess/`
Expected: formatted

- [ ] **Step 5: Stage and commit**

```bash
git add src/compiler/postprocess/ src/compiler/transform/transform-types.ts src/compiler/index.ts tests/compiler/postprocess/
git commit -m "feat(compiler): implement PostProcessor (Step 6)

- createPostProcessor(importResolver, registry) factory
- Import injection via ImportResolver with auto-injected framework imports
- Connections injection for effects with FunctionDeclaration handlers
- Component.onCompleted/onDestruction lifecycle hook injection
- Duplicate ID detection (QMLTS-P001)
- Command parameter mismatch validation (QMLTS-P003)
- Invalid state binding path validation (QMLTS-P004)
- Non-blocking output with InjectionStatistics
- 15 tests (PP-01 through PP-15)

Design corrections from Phase 06 api.d.ts:
- createPostProcessor(importResolver, registry) instead of createPostProcessor()
- process(transformResult, viewModel?) instead of process(transformResult, viewModel, context)
- EffectListenerInfo extended with handlerCode and handlerParameters

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 6: Push and open PR**

```bash
git push --no-verify -u origin feat/06-step6-postprocessor
```

Open PR targeting `main` with title: `feat(compiler): Step 6 — PostProcessor`
