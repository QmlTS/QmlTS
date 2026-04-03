// Types

// Builder
export { RegistryBuilder } from './builder.js';

// Errors
export { ParseError, ScanError, SnapshotError } from './errors.js';
export { parseMetatypes } from './metatypes-parser.js';
// Normalizer
export { normalize } from './normalizer.js';
export { parseQmldir } from './qmldir-parser.js';
// Parsers
export { parseQmltypes } from './qmltypes-parser.js';
// Query
export { RegistryQuery } from './registry-query.js';
// Scanner
export { QT_VERSION, scan, validateQtDir } from './scanner.js';
// Snapshot
export { RegistrySnapshot } from './snapshot.js';
// Type mapping
export { TypeNameMapper } from './type-name-mapper.js';
export type {
  BuildConfig,
  BuildPhase,
  BuildResult,
  DiscoveredFile,
  MergeConflict,
  MetatypesParseResult,
  ModuleDependency,
  ModuleImport,
  NormalizeResult,
  NormalizerConfig,
  ParseDiagnostic,
  QmldirParseResult,
  QmlEnum,
  QmlEnumValue,
  QmlFileTypeEntry,
  QmlMethod,
  QmlModule,
  QmlParameter,
  QmlProperty,
  // Unified IR
  QmlRegistry,
  QmlSignal,
  QmlType,
  QmlTypeExport,
  QmltypesParseResult,
  RawMetatypesArgument,
  RawMetatypesClass,
  RawMetatypesClassInfo,
  RawMetatypesEntry,
  RawMetatypesEnum,
  RawMetatypesFile,
  RawMetatypesInterface,
  RawMetatypesMethod,
  RawMetatypesProperty,
  RawMetatypesSuperClass,
  RawQmldirDepend,
  RawQmldirFile,
  RawQmldirImport,
  RawQmldirPlugin,
  RawQmldirTypeEntry,
  RawQmltypesComponent,
  RawQmltypesEnum,
  // Raw AST types
  RawQmltypesFile,
  RawQmltypesMethod,
  RawQmltypesParameter,
  RawQmltypesProperty,
  RawQmltypesSignal,
  RegistryQueryInterface,
  ResolvedEnum,
  ResolvedMethod,
  ResolvedProperty,
  ResolvedSignal,
  // Config & Result types
  ScannerConfig,
  ScanResult,
  TypeSource,
} from './types.js';
