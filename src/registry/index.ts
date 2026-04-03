// Types
export type {
  // Raw AST types
  RawQmltypesFile, RawQmltypesComponent, RawQmltypesProperty,
  RawQmltypesSignal, RawQmltypesMethod, RawQmltypesParameter, RawQmltypesEnum,
  RawQmldirFile, RawQmldirPlugin, RawQmldirImport, RawQmldirDepend, RawQmldirTypeEntry,
  RawMetatypesFile, RawMetatypesEntry, RawMetatypesClass, RawMetatypesSuperClass,
  RawMetatypesClassInfo, RawMetatypesProperty, RawMetatypesMethod,
  RawMetatypesArgument, RawMetatypesEnum, RawMetatypesInterface,

  // Unified IR
  QmlRegistry, QmlModule, QmlType, QmlProperty, QmlSignal, QmlMethod,
  QmlParameter, QmlEnum, QmlEnumValue, QmlTypeExport, TypeSource,
  ModuleImport, ModuleDependency, QmlFileTypeEntry,

  // Config & Result types
  ScannerConfig, ScanResult, DiscoveredFile,
  ParseDiagnostic, QmltypesParseResult, QmldirParseResult, MetatypesParseResult,
  NormalizerConfig, NormalizeResult, MergeConflict,
  BuildConfig, BuildResult, BuildPhase,
  ResolvedProperty, ResolvedSignal, ResolvedMethod, ResolvedEnum,
  RegistryQueryInterface,
} from './types.js';

// Errors
export { ScanError, ParseError, SnapshotError } from './errors.js';

// Scanner
export { scan, validateQtDir, QT_VERSION } from './scanner.js';

// Parsers
export { parseQmltypes } from './qmltypes-parser.js';
export { parseQmldir } from './qmldir-parser.js';
export { parseMetatypes } from './metatypes-parser.js';

// Type mapping
export { TypeNameMapper } from './type-name-mapper.js';

// Normalizer
export { normalize } from './normalizer.js';

// Query
export { RegistryQuery } from './registry-query.js';

// Snapshot
export { RegistrySnapshot } from './snapshot.js';

// Builder
export { RegistryBuilder } from './builder.js';
