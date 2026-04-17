import type { ObjectDefinitionNode, QmlDocument } from '../../ast/types.js';
import type { DiscoveredView } from '../analyzer/analyzer-types.js';
import type { Diagnostic } from '../diagnostics.js';
import type { AnalyzedViewModel } from '../viewmodel/extractor-types.js';

export type { AnalyzedViewModel };

// ─── Source Location ────────────────────────────────────────────────────

export interface SourceLocation {
  readonly file?: string;
  readonly line: number;
  readonly column: number;
}

// ─── DSL Value (discriminated union) ────────────────────────────────────

export type DslValue =
  | DslLiteralValue
  | DslStateRefValue
  | DslExpressionValue
  | DslEnumRefValue
  | DslObjectValue
  | DslArrayValue;

export interface DslLiteralValue {
  readonly kind: 'literal';
  readonly value: string | number | boolean | null;
}

export interface DslStateRefValue {
  readonly kind: 'state-ref';
  readonly vmName: string;
  readonly property: string;
}

export interface DslExpressionValue {
  readonly kind: 'expression';
  readonly code: string;
}

export interface DslEnumRefValue {
  readonly kind: 'enum-ref';
  readonly typeName: string;
  readonly enumName: string;
  readonly valueName: string;
}

export interface DslObjectValue {
  readonly kind: 'object';
  readonly node: DslCallNode;
}

export interface DslArrayValue {
  readonly kind: 'array';
  readonly items: readonly DslValue[];
}

// ─── DSL Binding Surfaces ───────────────────────────────────────────────

export interface DslBinding {
  readonly property: string;
  readonly value: DslValue;
  readonly sourceLocation?: SourceLocation;
}

export interface DslExpressionBinding {
  readonly property: string;
  readonly expression: string;
  readonly sourceLocation?: SourceLocation;
}

export interface DslGroupedBinding {
  readonly group: string;
  readonly bindings: readonly DslBinding[];
  readonly expressionBindings: readonly DslExpressionBinding[];
  readonly sourceLocation?: SourceLocation;
}

export interface DslAttachedBinding {
  readonly typeName: string;
  readonly bindings: readonly DslBinding[];
  readonly expressionBindings: readonly DslExpressionBinding[];
  readonly handlers: readonly DslHandler[];
  readonly sourceLocation?: SourceLocation;
}

// ─── DSL Handler ────────────────────────────────────────────────────────

export interface DslHandler {
  readonly signalName: string;
  readonly handlerType: 'expression' | 'command-ref' | 'arrow';
  readonly code: string;
  readonly commandRef?: {
    readonly vmName: string;
    readonly methodName: string;
  };
  readonly sourceLocation?: SourceLocation;
}

// ─── DSL Inline Component (forward compat) ──────────────────────────────

export interface DslInlineComponent {
  readonly name: string;
  readonly node: DslCallNode;
}

// ─── DSL Call Node (classified IR) ──────────────────────────────────────

export interface DslCallNode {
  readonly typeName: string;
  readonly qualifiedName?: string;
  readonly bindings: readonly DslBinding[];
  readonly expressionBindings: readonly DslExpressionBinding[];
  readonly groupedBindings: readonly DslGroupedBinding[];
  readonly attachedBindings: readonly DslAttachedBinding[];
  readonly handlers: readonly DslHandler[];
  readonly children: readonly DslCallNode[];
  readonly inlineComponents: readonly DslInlineComponent[];
  readonly id?: string;
  readonly sourceLocation?: SourceLocation;
}

// ─── Analyzed View ──────────────────────────────────────────────────────

export interface AnalyzedView extends DiscoveredView {
  readonly dslTree: DslCallNode;
  readonly usedTypes: readonly string[];
}

// ─── Transform Result ───────────────────────────────────────────────────

export interface TransformResult {
  readonly document: QmlDocument;
  readonly requiredImports: readonly RequiredImport[];
  readonly stateBindings: readonly StateBindingInfo[];
  readonly commandBindings: readonly CommandBindingInfo[];
  readonly effectListeners: readonly EffectListenerInfo[];
  readonly diagnostics: readonly Diagnostic[];
}

// ─── Import Types ───────────────────────────────────────────────────────

export interface RequiredImport {
  readonly moduleUri: string;
  readonly version?: string;
  readonly qualifier?: string;
  readonly injected: boolean;
}

export interface ResolvedImport {
  readonly moduleUri: string;
  readonly version?: string;
  readonly qualifier?: string;
  readonly injected: boolean;
}

// ─── Metadata Info Types ────────────────────────────────────────────────

export interface StateBindingInfo {
  readonly property: string;
  readonly vmName: string;
  readonly vmProperty: string;
  readonly objectTypeName: string;
}

export interface CommandBindingInfo {
  readonly signalName: string;
  readonly vmName: string;
  readonly methodName: string;
  readonly commandId?: number;
  readonly objectTypeName: string;
}

export interface EffectListenerInfo {
  readonly signalName: string;
  readonly effectName: string;
  readonly objectTypeName: string;
  readonly handlerCode?: string;
  readonly handlerParameters?: readonly string[];
}

// ─── V2 Transform Options ───────────────────────────────────────────────

export interface V2TransformOptions {
  readonly qmlId: string;
  readonly className: string;
}

// ─── Transformer Interface ──────────────────────────────────────────────

export interface DslTransformer {
  transform(
    view: AnalyzedView,
    vm?: AnalyzedViewModel,
    v2Options?: V2TransformOptions,
  ): TransformResult;
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

// ─── Import Resolver Interface ──────────────────────────────────────────

export interface ImportResolver {
  resolve(requiredImports: readonly RequiredImport[]): readonly ResolvedImport[];
  merge(imports: readonly RequiredImport[]): readonly ResolvedImport[];
}
