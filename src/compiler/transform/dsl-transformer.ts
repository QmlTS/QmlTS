import type {
  AttachedBindingNode,
  BindingNode,
  BindingValue,
  GroupedBindingNode,
  IdAssignmentNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
  SignalHandlerNode,
} from '../../ast/types.js';
import type { RegistryQueryInterface } from '../../registry/types.js';
import type { Diagnostic } from '../diagnostics.js';
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

/**
 * Create a DslTransformer that lowers classified DSL IR to QML AST.
 */
export function createDslTransformer(registry: RegistryQueryInterface): DslTransformer {
  return {
    transform(
      view: AnalyzedView,
      vm?: AnalyzedViewModel,
      v2Options?: V2TransformOptions,
    ): TransformResult {
      const ctx = createTransformContext(registry, vm, v2Options);
      const rootObject = lowerNode(view.dslTree, ctx);

      // Generate required imports from used types
      for (const typeName of view.usedTypes) {
        const resolved = registry.findByQmlName(typeName);
        if (resolved) {
          ctx.requiredImports.push({
            moduleUri: resolved.moduleUri,
            version: pickHighestExportVersion(resolved.moduleUri, resolved.exports),
            injected: true,
          });
        }
      }

      const document: QmlDocument = {
        kind: 'Document',
        pragmas: [],
        imports: [],
        rootObject,
      };

      return {
        document,
        requiredImports: ctx.requiredImports,
        stateBindings: ctx.stateBindings,
        commandBindings: ctx.commandBindings,
        effectListeners: ctx.effectListeners,
        diagnostics: ctx.diagnostics,
      };
    },

    transformNode(node: DslCallNode, vm?: AnalyzedViewModel, v2Options?: V2TransformOptions) {
      const ctx = createTransformContext(registry, vm, v2Options);
      const objectNode = lowerNode(node, ctx);

      return {
        objectNode,
        requiredImports: ctx.requiredImports,
        stateBindings: ctx.stateBindings,
        commandBindings: ctx.commandBindings,
        effectListeners: ctx.effectListeners,
        diagnostics: ctx.diagnostics,
      };
    },
  };
}

// ─── Transform Context ──────────────────────────────────────────────────

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

// ─── Node Lowering ──────────────────────────────────────────────────────

function lowerNode(node: DslCallNode, ctx: TransformContext): ObjectDefinitionNode {
  const members: ObjectMember[] = [];
  const resolved = node.qualifiedName
    ? ctx.registry.findByQualifiedName(node.qualifiedName)
    : ctx.registry.findByQmlName(node.typeName);

  // Collect all bound property names for required-property check
  const boundProperties = new Set<string>();

  // ID
  if (node.id) {
    const idNode: IdAssignmentNode = { kind: 'IdAssignment', id: node.id };
    members.push(idNode);
  }

  // Property bindings
  for (const binding of node.bindings) {
    boundProperties.add(binding.property);
    if (validateBinding(binding, node, resolved?.qualifiedName, ctx)) {
      const bindingNode = lowerBinding(binding, node.typeName, ctx);
      members.push(bindingNode);
    }
  }

  // Expression bindings
  for (const eb of node.expressionBindings) {
    boundProperties.add(eb.property);
    if (validateExpressionBinding(eb, node, resolved?.qualifiedName, ctx)) {
      const bindingNode = lowerExpressionBinding(eb);
      members.push(bindingNode);
    }
  }

  // Grouped bindings
  for (const gb of node.groupedBindings) {
    const groupedNode = lowerGroupedBinding(gb, node.typeName, ctx);
    members.push(groupedNode);
  }

  // Attached bindings
  for (const ab of node.attachedBindings) {
    const attachedNode = lowerAttachedBinding(ab, node.typeName, ctx);
    members.push(attachedNode);
  }

  // Signal handlers
  for (const handler of node.handlers) {
    if (validateHandler(handler, node, resolved?.qualifiedName, ctx)) {
      const handlerNode = lowerHandler(handler, node.typeName, ctx);
      members.push(handlerNode);
    }
  }

  // Children
  for (const child of node.children) {
    const childNode = lowerNode(child, ctx);
    members.push(childNode);
  }

  // Check for required properties not set
  if (resolved) {
    const allProps = ctx.registry.getAllProperties(resolved.qualifiedName, true);
    for (const prop of allProps) {
      if (prop.required && !boundProperties.has(prop.name)) {
        ctx.diagnostics.push({
          severity: 'warning',
          code: 'QMLTS-T006',
          message: `Required property '${prop.name}' is not set on '${node.typeName}'`,
          file: node.sourceLocation?.file,
          line: node.sourceLocation?.line,
          column: node.sourceLocation?.column,
        });
      }
    }
  }

  return {
    kind: 'ObjectDefinition',
    typeName: node.typeName,
    members,
  };
}

// ─── Binding Lowering ───────────────────────────────────────────────────

function lowerBinding(
  binding: DslBinding,
  objectTypeName: string,
  ctx: TransformContext,
): BindingNode {
  const value = lowerValue(binding.value, binding.property, objectTypeName, ctx);
  return {
    kind: 'Binding',
    property: binding.property,
    value,
  };
}

function lowerExpressionBinding(eb: DslExpressionBinding): BindingNode {
  return {
    kind: 'Binding',
    property: eb.property,
    value: { kind: 'expression', code: eb.expression },
  };
}

function lowerGroupedBinding(
  gb: DslGroupedBinding,
  objectTypeName: string,
  ctx: TransformContext,
): GroupedBindingNode {
  const bindings: BindingNode[] = gb.bindings.map((b) => ({
    kind: 'Binding' as const,
    property: b.property,
    value: lowerValue(b.value, `${gb.group}.${b.property}`, objectTypeName, ctx),
  }));

  // Include expression bindings
  for (const eb of gb.expressionBindings) {
    bindings.push({
      kind: 'Binding',
      property: eb.property,
      value: { kind: 'expression', code: eb.expression },
    });
  }

  return {
    kind: 'GroupedBinding',
    group: gb.group,
    bindings,
  };
}

function lowerAttachedBinding(
  ab: DslAttachedBinding,
  objectTypeName: string,
  ctx: TransformContext,
): AttachedBindingNode {
  const bindings: BindingNode[] = ab.bindings.map((b) => ({
    kind: 'Binding' as const,
    property: b.property,
    value: lowerValue(b.value, `${ab.typeName}.${b.property}`, objectTypeName, ctx),
  }));

  // Include expression bindings
  for (const eb of ab.expressionBindings) {
    bindings.push({
      kind: 'Binding',
      property: eb.property,
      value: { kind: 'expression', code: eb.expression },
    });
  }

  // Attached handlers are represented as binding-like entries on the attached surface.
  for (const handler of ab.handlers) {
    bindings.push(lowerAttachedHandlerBinding(handler, objectTypeName, ctx));
  }

  return {
    kind: 'AttachedBinding',
    attachedTypeName: ab.typeName,
    bindings,
  };
}

// ─── Handler Lowering ───────────────────────────────────────────────────

function lowerHandler(
  handler: DslHandler,
  objectTypeName: string,
  ctx: TransformContext,
): SignalHandlerNode {
  if (handler.handlerType === 'command-ref' && handler.commandRef) {
    // Look up commandId from ViewModel if available
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
        body: {
          form: 'expression',
          code: `${ctx.v2Options.qmlId}.${handler.commandRef.methodName}()`,
        },
      };
    }

    // Lower to __qmlts.invoke(N) if we have a commandId, otherwise use method name
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

// ─── Value Lowering ─────────────────────────────────────────────────────

function lowerValue(
  value: DslValue,
  property: string,
  objectTypeName: string,
  ctx: TransformContext,
): BindingValue {
  switch (value.kind) {
    case 'literal':
      return lowerLiteralDirect(value.value);

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

    case 'expression':
      return { kind: 'expression', code: value.code };

    case 'enum-ref':
      return {
        kind: 'enum',
        typeName: value.typeName,
        enumName: value.enumName,
        valueName: value.valueName,
      };

    case 'object': {
      const objNode = lowerNode(value.node, ctx);
      return { kind: 'object', node: objNode };
    }

    case 'array':
      return {
        kind: 'array',
        items: value.items.map((item) => lowerValue(item, property, objectTypeName, ctx)),
      };
  }
}

function lowerAttachedHandlerBinding(
  handler: DslHandler,
  objectTypeName: string,
  ctx: TransformContext,
): BindingNode {
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
  }

  return {
    kind: 'Binding',
    property: `on${handler.signalName[0]!.toUpperCase()}${handler.signalName.slice(1)}`,
    value: lowerAttachedHandlerValue(handler, ctx),
  };
}

function lowerAttachedHandlerValue(handler: DslHandler, ctx: TransformContext): BindingValue {
  if (handler.handlerType === 'command-ref' && handler.commandRef) {
    // V2: direct method call on typed ViewModel instance
    if (ctx.v2Options) {
      return {
        kind: 'expression',
        code: `${ctx.v2Options.qmlId}.${handler.commandRef.methodName}()`,
      };
    }

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

function lowerLiteralDirect(value: string | number | boolean | null): BindingValue {
  if (typeof value === 'number') return { kind: 'number', value };
  if (typeof value === 'string') return { kind: 'string', value };
  if (typeof value === 'boolean') return { kind: 'boolean', value };
  return { kind: 'null' };
}

// ─── Validation ─────────────────────────────────────────────────────────

function validateBinding(
  binding: DslBinding,
  node: DslCallNode,
  qualifiedName: string | undefined,
  ctx: TransformContext,
): boolean {
  if (!qualifiedName) return true;

  const allProps = ctx.registry.getAllProperties(qualifiedName, true);
  const prop = allProps.find((p) => p.name === binding.property);

  if (!prop) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T002',
      message: `Unknown property '${binding.property}' on type '${node.typeName}'`,
      file: binding.sourceLocation?.file,
      line: binding.sourceLocation?.line,
      column: binding.sourceLocation?.column,
    });
    return false;
  }

  // Readonly check
  if (prop.readonly) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T005',
      message: `Cannot bind to readonly property '${binding.property}' on '${node.typeName}'`,
      file: binding.sourceLocation?.file,
      line: binding.sourceLocation?.line,
      column: binding.sourceLocation?.column,
    });
    return false;
  }

  // Type mismatch check (basic)
  if (binding.value.kind === 'literal') {
    const mismatch = checkTypeMismatch(binding.value.value, prop.type);
    if (mismatch) {
      ctx.diagnostics.push({
        severity: 'warning',
        code: 'QMLTS-T003',
        message: `Type mismatch: '${binding.property}' expects '${prop.type}' but got ${mismatch}`,
        file: binding.sourceLocation?.file,
        line: binding.sourceLocation?.line,
        column: binding.sourceLocation?.column,
      });
    }
  }

  return true;
}

function validateExpressionBinding(
  eb: DslExpressionBinding,
  node: DslCallNode,
  qualifiedName: string | undefined,
  ctx: TransformContext,
): boolean {
  if (!qualifiedName) return true;

  const allProps = ctx.registry.getAllProperties(qualifiedName, true);
  const prop = allProps.find((p) => p.name === eb.property);

  if (!prop) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T002',
      message: `Unknown property '${eb.property}' on type '${node.typeName}'`,
      file: eb.sourceLocation?.file,
      line: eb.sourceLocation?.line,
      column: eb.sourceLocation?.column,
    });
    return false;
  }

  if (prop.readonly) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T005',
      message: `Cannot bind to readonly property '${eb.property}' on '${node.typeName}'`,
      file: eb.sourceLocation?.file,
      line: eb.sourceLocation?.line,
      column: eb.sourceLocation?.column,
    });
    return false;
  }

  return true;
}

function validateHandler(
  handler: DslHandler,
  node: DslCallNode,
  qualifiedName: string | undefined,
  ctx: TransformContext,
): boolean {
  if (!qualifiedName) return true;

  const allSignals = ctx.registry.getAllSignals(qualifiedName, true);
  const signal = allSignals.find((s) => s.name === handler.signalName);

  if (!signal) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T004',
      message: `Unknown signal '${handler.signalName}' on type '${node.typeName}'`,
      file: handler.sourceLocation?.file,
      line: handler.sourceLocation?.line,
      column: handler.sourceLocation?.column,
    });
    return false;
  }

  // Validate command-ref against ViewModel
  if (handler.handlerType === 'command-ref' && handler.commandRef && ctx.vm) {
    const cmd = ctx.vm.commands.find((c) => c.methodName === handler.commandRef!.methodName);
    if (!cmd) {
      ctx.diagnostics.push({
        severity: 'error',
        code: 'QMLTS-T011',
        message: `Unresolvable VM reference: '${handler.commandRef.vmName}.${handler.commandRef.methodName}' not found in ViewModel '${ctx.vm.className}'`,
        file: handler.sourceLocation?.file,
        line: handler.sourceLocation?.line,
        column: handler.sourceLocation?.column,
      });
      return false;
    }
  }

  if (handler.handlerType === 'command-ref' && handler.commandRef && !ctx.vm) {
    ctx.diagnostics.push({
      severity: 'error',
      code: 'QMLTS-T011',
      message: `Unresolvable VM reference: '${handler.commandRef.vmName}.${handler.commandRef.methodName}' without ViewModel metadata`,
      file: handler.sourceLocation?.file,
      line: handler.sourceLocation?.line,
      column: handler.sourceLocation?.column,
    });
    return false;
  }

  return true;
}

function pickHighestExportVersion(
  moduleUri: string,
  exports: readonly { readonly module: string; readonly version?: string }[],
): string | undefined {
  let highest: string | undefined;
  for (const entry of exports) {
    if (entry.module !== moduleUri) continue;
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

function checkTypeMismatch(
  value: string | number | boolean | null,
  expectedType: string,
): string | undefined {
  if (value === null) return undefined;

  const numericTypes = new Set(['real', 'double', 'int', 'float', 'qreal']);
  const stringTypes = new Set(['string', 'QString', 'url', 'color']);
  const boolTypes = new Set(['bool', 'boolean']);

  if (typeof value === 'number' && !numericTypes.has(expectedType) && expectedType !== 'var') {
    return `'number'`;
  }
  if (typeof value === 'string' && !stringTypes.has(expectedType) && expectedType !== 'var') {
    return `'string'`;
  }
  if (typeof value === 'boolean' && !boolTypes.has(expectedType) && expectedType !== 'var') {
    return `'boolean'`;
  }

  return undefined;
}
