import type { QmlDocument } from '../../ast/types.js';
import type { Diagnostic } from '../diagnostics.js';
import type { TransformResult } from '../transform/transform-types.js';
import type { AnalyzedViewModel } from '../viewmodel/extractor-types.js';

export interface PostProcessor {
  process(transformResult: TransformResult, viewModel?: AnalyzedViewModel): PostProcessResult;
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
