export { createDiagnosticReporter } from './diagnostic-reporter.js';
export { buildEventBindings } from './event-bindings.js';

export { compile, compileFile, compileSource } from './compiler.js';
export type {
  CodegenOptions,
  CompilationResult,
  CompilationStats,
  CompilationUnit,
  CompilerOptions,
  CompilerSourceMap,
  CompilerSourceMapEntry,
  DiagnosticOptions,
  DiagnosticReporter,
  EventBindingCommand,
  EventBindingEffect,
  EventBindingIndex,
  SourceMapKind,
} from './pipeline-types.js';
export {
  annotateFromDslTree,
  annotateInjectedNodes,
  buildCompilerSourceMap,
} from './source-location-annotator.js';
export type { SourceMapBuilder } from './source-map.js';
export {
  createSourceMapBuilder,
  findSource,
  findTarget,
  sourceMapFromJson,
  sourceMapToJson,
} from './source-map.js';
