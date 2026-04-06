import type {
  AttachedBindingNode,
  BindingNode,
  FunctionDeclarationNode,
  ImportNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
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
import type { InjectionStatistics, PostProcessor, PostProcessResult } from './postprocess-types.js';

export function createPostProcessor(
  importResolver: ImportResolver,
  registry: RegistryQueryInterface,
): PostProcessor {
  return {
    process(transformResult: TransformResult, viewModel?: AnalyzedViewModel): PostProcessResult {
      const diagnostics: Diagnostic[] = [];
      const document = deepCloneDocument(transformResult.document);

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
          `State binding "vm.${binding.vmProperty}" references a property ` +
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
