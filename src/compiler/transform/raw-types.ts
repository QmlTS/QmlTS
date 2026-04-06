import type { DslHandler, SourceLocation } from './transform-types.js';

// ─── Raw DSL Value (pre-classification) ─────────────────────────────────

export type RawDslValue =
  | RawLiteralValue
  | RawStateRefValue
  | RawExpressionValue
  | RawEnumRefValue
  | RawObjectValue
  | RawArrayValue;

export interface RawLiteralValue {
  readonly kind: 'literal';
  readonly value: string | number | boolean | null;
}

export interface RawStateRefValue {
  readonly kind: 'state-ref';
  readonly vmName: string;
  readonly property: string;
}

export interface RawExpressionValue {
  readonly kind: 'expression';
  readonly code: string;
}

export interface RawEnumRefValue {
  readonly kind: 'enum-ref';
  readonly typeName: string;
  readonly enumName: string;
  readonly valueName: string;
}

export interface RawObjectValue {
  readonly kind: 'raw-object';
  readonly node: RawDslNode;
}

export interface RawArrayValue {
  readonly kind: 'array';
  readonly items: readonly RawDslValue[];
}

// ─── Raw Bindings ───────────────────────────────────────────────────────

export interface RawBinding {
  readonly property: string;
  readonly value: RawDslValue;
  readonly sourceLocation?: SourceLocation;
}

export interface RawExpressionBinding {
  readonly property: string;
  readonly expression: string;
  readonly sourceLocation?: SourceLocation;
}

export interface RawCallbackBinding {
  readonly methodName: string;
  readonly innerBindings: readonly RawBinding[];
  readonly innerExpressionBindings: readonly RawExpressionBinding[];
  readonly innerHandlers: readonly DslHandler[];
  readonly sourceLocation?: SourceLocation;
}

// ─── Raw DSL Node ───────────────────────────────────────────────────────

export interface RawDslNode {
  readonly typeName: string;
  readonly bindings: readonly RawBinding[];
  readonly expressionBindings: readonly RawExpressionBinding[];
  readonly callbackBindings: readonly RawCallbackBinding[];
  readonly handlers: readonly DslHandler[];
  readonly children: readonly RawDslNode[];
  readonly id?: string;
  readonly sourceLocation?: SourceLocation;
}

// ─── Extract Result ─────────────────────────────────────────────────────

export interface ExtractResult {
  readonly rawTree?: RawDslNode;
  readonly diagnostics: readonly import('../diagnostics.js').Diagnostic[];
}
