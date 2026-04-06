import type { SourceFile } from 'ts-morph';
import type { RegistryQueryInterface } from '../../registry/types.js';
import type { DiscoveredView } from '../analyzer/analyzer-types.js';
import type { Diagnostic } from '../diagnostics.js';
import { extractDsl } from './dsl-extractor.js';
import type { RawBinding, RawCallbackBinding, RawDslNode, RawDslValue } from './raw-types.js';
import type {
  AnalyzedView,
  DslAttachedBinding,
  DslBinding,
  DslCallNode,
  DslExpressionBinding,
  DslGroupedBinding,
  DslHandler,
  DslValue,
  SourceLocation,
} from './transform-types.js';

// ─── Public API ─────────────────────────────────────────────────────────

export interface ClassifyResult {
  readonly classifiedTree: DslCallNode;
  readonly usedTypes: readonly string[];
  readonly diagnostics: readonly Diagnostic[];
}

/**
 * Classify a raw DSL tree using registry-backed type resolution.
 * Resolves callback bindings into grouped or attached bindings.
 */
export function classifyDslTree(
  rawTree: RawDslNode,
  registry: RegistryQueryInterface,
): ClassifyResult {
  const diagnostics: Diagnostic[] = [];
  const usedTypes: string[] = [];
  const classifiedTree = classifyNode(rawTree, registry, diagnostics, usedTypes);
  return { classifiedTree, usedTypes, diagnostics };
}

/**
 * Public entry point: orchestrates extract → classify → assemble AnalyzedView.
 * Design correction: new public API not in original Phase 06 api.d.ts.
 */
export function analyzeView(
  discoveredView: DiscoveredView,
  sourceFile: SourceFile,
  registry: RegistryQueryInterface,
  dslFactoryNames: ReadonlySet<string>,
): { analyzedView?: AnalyzedView; diagnostics: readonly Diagnostic[] } {
  const vmParam = discoveredView.vmParam?.name;

  const extractResult = extractDsl(
    sourceFile,
    discoveredView.functionName,
    dslFactoryNames,
    vmParam,
  );
  if (!extractResult.rawTree) {
    return { diagnostics: extractResult.diagnostics };
  }

  const classifyResult = classifyDslTree(extractResult.rawTree, registry);
  const allDiags = [...extractResult.diagnostics, ...classifyResult.diagnostics];

  const analyzedView: AnalyzedView = {
    ...discoveredView,
    dslTree: classifyResult.classifiedTree,
    usedTypes: classifyResult.usedTypes,
  };

  return { analyzedView, diagnostics: allDiags };
}

// ─── Internal Classification ────────────────────────────────────────────

function classifyNode(
  raw: RawDslNode,
  registry: RegistryQueryInterface,
  diagnostics: Diagnostic[],
  usedTypes: string[],
): DslCallNode {
  // Resolve the type via registry
  const resolved = registry.findByQmlName(raw.typeName);
  let qualifiedName: string | undefined;
  let isUnknownType = false;

  if (resolved) {
    qualifiedName = resolved.qualifiedName;
    if (!usedTypes.includes(raw.typeName)) {
      usedTypes.push(raw.typeName);
    }
  } else {
    isUnknownType = true;
    diagnostics.push(
      makeDiag('QMLTS-T001', `Unknown QML type '${raw.typeName}'`, raw.sourceLocation),
    );
  }

  // Convert bindings (raw-object → object values)
  const bindings = raw.bindings.map((b) => convertBinding(b, registry, diagnostics, usedTypes));
  const expressionBindings: DslExpressionBinding[] = raw.expressionBindings.map((eb) => ({
    property: eb.property,
    expression: eb.expression,
    sourceLocation: eb.sourceLocation,
  }));

  // Classify callback bindings
  const groupedBindings: DslGroupedBinding[] = [];
  const attachedBindings: DslAttachedBinding[] = [];

  if (!isUnknownType) {
    for (const cb of raw.callbackBindings) {
      classifyCallback(
        cb,
        qualifiedName!,
        registry,
        diagnostics,
        usedTypes,
        groupedBindings,
        attachedBindings,
      );
    }
  } else {
    // For unknown types, emit diagnostics for callbacks but don't cascade T002
    for (const cb of raw.callbackBindings) {
      diagnostics.push(
        makeDiag(
          'QMLTS-T001',
          `Cannot classify '${cb.methodName}' — parent type '${raw.typeName}' is unknown`,
          cb.sourceLocation,
        ),
      );
    }
  }

  // Handlers pass through
  const handlers: DslHandler[] = [...raw.handlers];

  // Recursively classify children
  const children = raw.children.map((c) => classifyNode(c, registry, diagnostics, usedTypes));

  return {
    typeName: raw.typeName,
    qualifiedName,
    bindings,
    expressionBindings,
    groupedBindings,
    attachedBindings,
    handlers,
    children,
    inlineComponents: [],
    id: raw.id,
    sourceLocation: raw.sourceLocation,
  };
}

function classifyCallback(
  cb: RawCallbackBinding,
  parentQualifiedName: string,
  registry: RegistryQueryInterface,
  diagnostics: Diagnostic[],
  usedTypes: string[],
  groupedBindings: DslGroupedBinding[],
  attachedBindings: DslAttachedBinding[],
): void {
  // Check if the callback method name matches a property on the parent type
  const allProps = registry.getAllProperties(parentQualifiedName, true);
  const matchingProp = allProps.find((p) => p.name === cb.methodName);

  if (matchingProp) {
    // Check if this property's type is a group type (has its own properties)
    const propTypeQName = matchingProp.type;
    const propType = registry.findByQualifiedName(propTypeQName);

    if (propType && propType.properties.length > 0) {
      // This is a grouped binding
      const innerBindings = cb.innerBindings.map((b) =>
        convertBinding(b, registry, diagnostics, usedTypes),
      );
      groupedBindings.push({
        group: cb.methodName,
        bindings: innerBindings,
        expressionBindings: cb.innerExpressionBindings.map((eb) => ({
          property: eb.property,
          expression: eb.expression,
          sourceLocation: eb.sourceLocation,
        })),
        sourceLocation: cb.sourceLocation,
      });
      return;
    }
  }

  // Check attached types: capitalize first letter and look for a matching type
  const capitalizedName = cb.methodName.charAt(0).toUpperCase() + cb.methodName.slice(1);
  const attachedQmlType = registry.findByQmlName(capitalizedName);
  if (attachedQmlType) {
    // Verify it's actually an attached type (not creatable, or referenced as attachedType)
    const innerBindings = cb.innerBindings.map((b) =>
      convertBinding(b, registry, diagnostics, usedTypes),
    );
    if (!usedTypes.includes(capitalizedName)) {
      usedTypes.push(capitalizedName);
    }
    attachedBindings.push({
      typeName: capitalizedName,
      bindings: innerBindings,
      expressionBindings: cb.innerExpressionBindings.map((eb) => ({
        property: eb.property,
        expression: eb.expression,
        sourceLocation: eb.sourceLocation,
      })),
      handlers: cb.innerHandlers,
      sourceLocation: cb.sourceLocation,
    });
    return;
  }

  // Neither grouped nor attached — emit diagnostic
  diagnostics.push(
    makeDiag(
      'QMLTS-T002',
      `Unknown callback method '${cb.methodName}' on type — not a group property or attached type`,
      cb.sourceLocation,
    ),
  );
}

// ─── Value Conversion ───────────────────────────────────────────────────

function convertBinding(
  raw: RawBinding,
  registry: RegistryQueryInterface,
  diagnostics: Diagnostic[],
  usedTypes: string[],
): DslBinding {
  return {
    property: raw.property,
    value: convertValue(raw.value, registry, diagnostics, usedTypes),
    sourceLocation: raw.sourceLocation,
  };
}

function convertValue(
  raw: RawDslValue,
  registry: RegistryQueryInterface,
  diagnostics: Diagnostic[],
  usedTypes: string[],
): DslValue {
  switch (raw.kind) {
    case 'literal':
    case 'state-ref':
    case 'expression':
    case 'enum-ref':
      return raw;
    case 'raw-object': {
      const classified = classifyNode(raw.node, registry, diagnostics, usedTypes);
      return { kind: 'object', node: classified };
    }
    case 'array':
      return {
        kind: 'array',
        items: raw.items.map((item) => convertValue(item, registry, diagnostics, usedTypes)),
      };
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────

function makeDiag(
  code: Diagnostic['code'],
  message: string,
  sourceLocation?: SourceLocation,
): Diagnostic {
  return {
    severity: 'error',
    code,
    message,
    file: sourceLocation?.file,
    line: sourceLocation?.line,
    column: sourceLocation?.column,
  };
}
