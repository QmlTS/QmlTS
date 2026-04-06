// Public types

export { analyzeView } from './dsl-classifier.js';

// Factory functions
export { createDslTransformer } from './dsl-transformer.js';
export { createImportResolver } from './import-resolver.js';
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
} from './transform-types.js';
