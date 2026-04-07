import type {
  AstNode,
  AttachedBindingNode,
  BindingNode,
  GroupedBindingNode,
  ObjectDefinitionNode,
  QmlDocument,
  SignalHandlerNode,
} from '../../ast/types.js';
import type { SourceMap } from '../../emitter/types.js';
import type {
  DslAttachedBinding,
  DslBinding,
  DslCallNode,
  DslExpressionBinding,
  DslGroupedBinding,
  SourceLocation,
} from '../transform/transform-types.js';
import type { AnalyzedViewModel } from '../viewmodel/extractor-types.js';
import type { CompilerSourceMap, CompilerSourceMapEntry, SourceMapKind } from './pipeline-types.js';
import { createSourceMapBuilder } from './source-map.js';

// ─── Public API ─────────────────────────────────────────────────────────

/**
 * Annotate QML AST nodes with TS source locations by walking the DSL tree
 * and QML document in parallel. Sets `span` on QML nodes and records
 * `SourceMapKind` per node in the provided WeakMap.
 */
export function annotateFromDslTree(
  document: QmlDocument,
  dslTree: DslCallNode,
  kindMap: WeakMap<AstNode, SourceMapKind>,
): void {
  annotateObject(document.rootObject, dslTree, kindMap, true);
}

/**
 * Annotate PostProcessor-injected nodes (Connections, lifecycle, imports)
 * with ViewModel source locations.
 */
export function annotateInjectedNodes(
  document: QmlDocument,
  viewModel: AnalyzedViewModel | undefined,
  kindMap: WeakMap<AstNode, SourceMapKind>,
  tsSourceLine?: number,
): void {
  // Annotate imports
  for (const imp of document.imports) {
    if (!imp.span) {
      setSpan(imp, tsSourceLine ?? 1, 1);
      kindMap.set(imp, 'import');
    }
  }

  if (!viewModel) return;

  for (const member of document.rootObject.members) {
    // Connections objects (effect listeners) injected by PostProcessor
    if (member.kind === 'ObjectDefinition' && member.typeName === 'Connections') {
      if (!member.span) {
        // Use the first effect's line or ViewModel line
        const effectLine = viewModel.effects[0]?.line ?? viewModel.line ?? 1;
        setSpan(member, effectLine, 1);
        kindMap.set(member, 'effect-listener');
      }
    }

    // Component.onCompleted / Component.onDestruction (lifecycle)
    if (member.kind === 'AttachedBinding' && member.attachedTypeName === 'Component') {
      if (!member.span) {
        const vmLine = viewModel.line ?? 1;
        setSpan(member, vmLine, 1);
        kindMap.set(member, 'lifecycle');
      }
    }
  }
}

/**
 * Build a CompilerSourceMap by bridging:
 * - TS source locations (stored in AST node `span` fields)
 * - QML output positions (from the emitter source map)
 * - SourceMapKind hints (from the kindMap)
 */
export function buildCompilerSourceMap(
  emitterSourceMap: SourceMap,
  kindMap: WeakMap<AstNode, SourceMapKind>,
  tsFile: string,
  qmlFile: string,
): CompilerSourceMap {
  const builder = createSourceMapBuilder(tsFile, qmlFile);

  for (const entry of emitterSourceMap.entries) {
    const node = entry.node;
    const kind = kindMap.get(node);
    if (!node.span || !kind) continue;

    const mapping: CompilerSourceMapEntry = {
      source: {
        line: node.span.startLine,
        column: node.span.startColumn,
      },
      target: {
        line: entry.outputSpan.startLine,
        column: entry.outputSpan.startColumn,
      },
      kind,
    };
    builder.addMapping(mapping);
  }

  return builder.build();
}

// ─── Internal ───────────────────────────────────────────────────────────

function setSpan(node: AstNode, line: number, column: number): void {
  node.span = {
    startLine: line,
    startColumn: column,
    endLine: line,
    endColumn: column,
  };
}

function annotateFromLocation(node: AstNode, loc: SourceLocation | undefined): void {
  if (loc) {
    setSpan(node, loc.line, loc.column);
  }
}

function annotateObject(
  obj: ObjectDefinitionNode,
  dsl: DslCallNode,
  kindMap: WeakMap<AstNode, SourceMapKind>,
  isRoot: boolean,
): void {
  // Annotate the object node itself
  annotateFromLocation(obj, dsl.sourceLocation);
  kindMap.set(obj, isRoot ? 'child' : 'child');

  // Collect QML members by kind for matching
  const qmlBindings: BindingNode[] = [];
  const qmlGrouped: GroupedBindingNode[] = [];
  const qmlAttached: AttachedBindingNode[] = [];
  const qmlHandlers: SignalHandlerNode[] = [];
  const qmlChildren: ObjectDefinitionNode[] = [];

  for (const member of obj.members) {
    switch (member.kind) {
      case 'Binding':
        qmlBindings.push(member);
        break;
      case 'GroupedBinding':
        qmlGrouped.push(member);
        break;
      case 'AttachedBinding':
        qmlAttached.push(member);
        break;
      case 'SignalHandler':
        qmlHandlers.push(member);
        break;
      case 'ObjectDefinition':
        qmlChildren.push(member);
        break;
    }
  }

  // Match property bindings by name
  annotateBindings(qmlBindings, dsl.bindings, dsl.expressionBindings, kindMap);

  // Match grouped bindings by group name
  for (const dslGb of dsl.groupedBindings) {
    const qmlGb = qmlGrouped.find((g) => g.group === dslGb.group);
    if (qmlGb) {
      annotateFromLocation(qmlGb, dslGb.sourceLocation);
      kindMap.set(qmlGb, 'binding');
      annotateGroupedInner(qmlGb, dslGb, kindMap);
    }
  }

  // Match attached bindings by type name
  for (const dslAb of dsl.attachedBindings) {
    const qmlAb = qmlAttached.find((a) => a.attachedTypeName === dslAb.typeName);
    if (qmlAb) {
      annotateFromLocation(qmlAb, dslAb.sourceLocation);
      kindMap.set(qmlAb, 'binding');
      annotateAttachedInner(qmlAb, dslAb, kindMap);
    }
  }

  // Match signal handlers by name
  for (const dslH of dsl.handlers) {
    const handlerName = `on${dslH.signalName[0]!.toUpperCase()}${dslH.signalName.slice(1)}`;
    const qmlH = qmlHandlers.find((h) => h.name === handlerName);
    if (qmlH) {
      annotateFromLocation(qmlH, dslH.sourceLocation);
      kindMap.set(qmlH, dslH.handlerType === 'command-ref' ? 'command-binding' : 'handler');
    }
  }

  // Match children by index (they preserve order from DSL tree)
  for (let i = 0; i < dsl.children.length && i < qmlChildren.length; i++) {
    annotateObject(qmlChildren[i]!, dsl.children[i]!, kindMap, false);
  }
}

function annotateBindings(
  qmlBindings: BindingNode[],
  dslBindings: readonly DslBinding[],
  dslExprBindings: readonly DslExpressionBinding[],
  kindMap: WeakMap<AstNode, SourceMapKind>,
): void {
  for (const dslB of dslBindings) {
    const qmlB = qmlBindings.find((b) => b.property === dslB.property);
    if (qmlB) {
      annotateFromLocation(qmlB, dslB.sourceLocation);
      kindMap.set(qmlB, dslB.value.kind === 'state-ref' ? 'state-binding' : 'binding');
    }
  }

  for (const dslEb of dslExprBindings) {
    const qmlB = qmlBindings.find((b) => b.property === dslEb.property);
    if (qmlB) {
      annotateFromLocation(qmlB, dslEb.sourceLocation);
      kindMap.set(qmlB, 'binding');
    }
  }
}

function annotateGroupedInner(
  qmlGb: GroupedBindingNode,
  dslGb: DslGroupedBinding,
  kindMap: WeakMap<AstNode, SourceMapKind>,
): void {
  for (const dslB of dslGb.bindings) {
    const qmlB = qmlGb.bindings.find((b) => b.property === dslB.property);
    if (qmlB) {
      annotateFromLocation(qmlB, dslB.sourceLocation);
      kindMap.set(qmlB, dslB.value.kind === 'state-ref' ? 'state-binding' : 'binding');
    }
  }
  for (const dslEb of dslGb.expressionBindings) {
    const qmlB = qmlGb.bindings.find((b) => b.property === dslEb.property);
    if (qmlB) {
      annotateFromLocation(qmlB, dslEb.sourceLocation);
      kindMap.set(qmlB, 'binding');
    }
  }
}

function annotateAttachedInner(
  qmlAb: AttachedBindingNode,
  dslAb: DslAttachedBinding,
  kindMap: WeakMap<AstNode, SourceMapKind>,
): void {
  for (const dslB of dslAb.bindings) {
    const qmlB = qmlAb.bindings.find((b) => b.property === dslB.property);
    if (qmlB) {
      annotateFromLocation(qmlB, dslB.sourceLocation);
      kindMap.set(qmlB, dslB.value.kind === 'state-ref' ? 'state-binding' : 'binding');
    }
  }

  for (const dslH of dslAb.handlers) {
    // Attached handlers are lowered as bindings in QML (e.g., Component.onCompleted)
    const handlerProp = `on${dslH.signalName[0]!.toUpperCase()}${dslH.signalName.slice(1)}`;
    const qmlB = qmlAb.bindings.find((b) => b.property === handlerProp);
    if (qmlB) {
      annotateFromLocation(qmlB, dslH.sourceLocation);
      kindMap.set(qmlB, dslH.handlerType === 'command-ref' ? 'command-binding' : 'handler');
    }
  }
}
