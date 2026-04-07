export { watch } from './compiler-watcher.js';
export { compile, compileFile, compileSource } from './compiler.js';
export { createDiagnosticReporter } from './diagnostic-reporter.js';
export { buildEventBindings } from './event-bindings.js';
export { fnv1a32, hashContent } from './hash-utils.js';
export { createIncrementalCompiler } from './incremental-compiler.js';
export { writeCompilationOutput } from './output-writer.js';
export { compileWithQt, validateCompilationOutput } from './qt-validation.js';
export type {
  CodegenOptions,
  CompilationResult,
  CompilationStats,
  CompilationUnit,
  CompilerOptions,
  CompilerSourceMap,
  CompilerSourceMapEntry,
  CompilerWatcher,
  DiagnosticOptions,
  DiagnosticReporter,
  EventBindingCommand,
  EventBindingEffect,
  EventBindingIndex,
  FileCacheEntry,
  IncrementalCompiler,
  QtValidationOptions,
  QtValidationResult,
  SourceMapKind,
  WatchOptions,
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
