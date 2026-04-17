import { astSerializer, walkAstGeneric } from '../../ast/index.js';
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
import type { RegistryQueryInterface } from '../../registry/types.js';
import type { Diagnostic, DiagnosticCode } from '../diagnostics.js';
import type {
  CommandBindingInfo,
  EffectListenerInfo,
  ImportResolver,
  RequiredImport,
  StateBindingInfo,
  TransformResult,
} from '../transform/transform-types.js';
import type { AnalyzedViewModel } from '../viewmodel/extractor-types.js';
import type {
  InjectionStatistics,
  PostProcessor,
  PostProcessResult,
  V2PostProcessOptions,
} from './postprocess-types.js';

export function createPostProcessor(
  importResolver: ImportResolver,
  registry: RegistryQueryInterface,
): PostProcessor {
  return {
    process(
      transformResult: TransformResult,
      viewModel?: AnalyzedViewModel,
      v2Options?: V2PostProcessOptions,
    ): PostProcessResult {
      const diagnostics: Diagnostic[] = [...transformResult.diagnostics];
      const document = deepCloneDocument(transformResult.document);

      // V2 path
      if (v2Options) {
        return processV2(
          document,
          transformResult,
          viewModel,
          v2Options,
          diagnostics,
          importResolver,
          registry,
        );
      }

      // V1 path
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
  };
}

// ─── V2 Post-Processing ─────────────────────────────────────────────────

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
  const idNode: IdAssignmentNode = { kind: 'IdAssignment', id: v2Options.qmlId };
  vmMembers.push(idNode);

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
    const existingId = existingChild.members.find((m) => m.kind === 'IdAssignment');
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

// ─── Deep Clone ─────────────────────────────────────────────────────────

function deepCloneDocument(doc: QmlDocument): QmlDocument {
  return astSerializer.clone(doc);
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
    version: getHighestExportVersion(type),
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

  const targetBinding: BindingNode = {
    kind: 'Binding',
    property: 'target',
    value: { kind: 'expression', code: '__qmlts' },
  };
  members.push(targetBinding);

  for (const listener of listeners) {
    const effect = vm.effects.find((e) => e.fieldName === listener.effectName);

    const qmlName = effect?.qmlName ?? listener.effectName;
    const handlerName = `on${qmlName.charAt(0).toUpperCase()}${qmlName.slice(1)}`;

    const params: string[] = listener.handlerParameters
      ? [...listener.handlerParameters]
      : (effect?.parameters.map((p) => p.name) ?? []);

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

function detectDuplicateIds(root: ObjectDefinitionNode, diagnostics: Diagnostic[]): void {
  const ids = new Map<string, number>();
  collectIds(root, ids);

  for (const [id, count] of ids) {
    if (count > 1) {
      diagnostics.push(
        createDiagnostic(
          'error',
          'QMLTS-P001',
          `Duplicate object id "${id}" — found ${count} occurrences`,
        ),
      );
    }
  }
}

function collectIds(node: ObjectDefinitionNode, ids: Map<string, number>): void {
  walkAstGeneric(node, {
    enter(current) {
      if (current.kind === 'IdAssignment') {
        ids.set(current.id, (ids.get(current.id) ?? 0) + 1);
      }
    },
  });
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
      diagnostics.push(
        createDiagnostic(
          'error',
          'QMLTS-P003',
          `Command "${cmd.methodName}" requires ${requiredParams.length} parameter(s) ` +
            `(${requiredParams.map((p) => p.name).join(', ')}), ` +
            `but __qmlts.invoke(${binding.commandId ?? `"${binding.methodName}"`}) passes none`,
        ),
      );
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
      diagnostics.push(
        createDiagnostic(
          'warning',
          'QMLTS-P004',
          `State binding "${binding.vmName}.${binding.vmProperty}" references a property ` +
            `not found in ViewModel "${vm.className}"`,
        ),
      );
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

function getHighestExportVersion(type: {
  moduleUri: string;
  exports: readonly { module: string; version: string }[];
}): string | undefined {
  let highest: string | undefined;
  for (const entry of type.exports) {
    if (entry.module !== type.moduleUri) continue;
    highest = pickHigherVersion(highest, entry.version);
  }
  return highest;
}

function pickHigherVersion(a?: string, b?: string): string | undefined {
  if (!a) return b;
  if (!b) return a;
  return compareVersions(a, b) >= 0 ? a : b;
}

function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  const len = Math.max(pa.length, pb.length);

  for (let i = 0; i < len; i++) {
    const va = pa[i] ?? 0;
    const vb = pb[i] ?? 0;
    if (va !== vb) return va - vb;
  }

  return 0;
}
