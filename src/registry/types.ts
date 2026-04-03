// Raw AST types for three source formats

// §1.1 qmltypes raw AST
export interface RawQmltypesFile {
  filePath: string;
  components: RawQmltypesComponent[];
}

export interface RawQmltypesComponent {
  name: string;
  file?: string;
  lineNumber?: number;
  accessSemantics?: 'value' | 'reference' | 'sequence' | 'none';
  prototype?: string;
  extension?: string;
  extensionIsJavaScript?: boolean;
  extensionIsNamespace?: boolean;
  valueType?: string;
  exports?: string[];
  exportMetaObjectRevisions?: number[];
  isCreatable?: boolean;
  isSingleton?: boolean;
  isStructured?: boolean;
  isJavaScriptBuiltin?: boolean;
  defaultProperty?: string;
  parentProperty?: string;
  attachedType?: string;
  deferredNames?: string[];
  immediateNames?: string[];
  interfaces?: string[];
  hasCustomParser?: boolean;
  enforcesScopedEnums?: boolean;
  properties: RawQmltypesProperty[];
  signals: RawQmltypesSignal[];
  methods: RawQmltypesMethod[];
  enums: RawQmltypesEnum[];
}

export interface RawQmltypesProperty {
  name: string;
  type: string;
  read?: string;
  write?: string;
  reset?: string;
  notify?: string;
  bindable?: string;
  index?: number;
  revision?: number;
  lineNumber?: number;
  privateClass?: string;
  isReadonly?: boolean;
  isPropertyConstant?: boolean;
  isFinal?: boolean;
  isList?: boolean;
  isPointer?: boolean;
  isRequired?: boolean;
  isOverride?: boolean;
  isVirtual?: boolean;
  isTypeConstant?: boolean;
}

export interface RawQmltypesSignal {
  name: string;
  revision?: number;
  lineNumber?: number;
  isMethodConstant?: boolean;
  parameters: RawQmltypesParameter[];
}

export interface RawQmltypesMethod {
  name: string;
  type?: string;
  revision?: number;
  lineNumber?: number;
  isPointer?: boolean;
  isCloned?: boolean;
  isConstructor?: boolean;
  isJavaScriptFunction?: boolean;
  isMethodConstant?: boolean;
  isTypeConstant?: boolean;
  parameters: RawQmltypesParameter[];
}

export interface RawQmltypesParameter {
  name?: string;
  type: string;
  isPointer?: boolean;
  isTypeConstant?: boolean;
}

export interface RawQmltypesEnum {
  name: string;
  alias?: string;
  type?: string;
  isFlag?: boolean;
  isScoped?: boolean;
  lineNumber?: number;
  values: string[];
}

// §1.2 qmldir raw AST
export interface RawQmldirFile {
  filePath: string;
  module?: string;
  plugin?: RawQmldirPlugin;
  classname?: string;
  designerSupported?: boolean;
  typeinfo?: string;
  prefer?: string;
  isStatic?: boolean;
  isSystem?: boolean;
  imports: RawQmldirImport[];
  depends: RawQmldirDepend[];
  typeEntries: RawQmldirTypeEntry[];
}

export interface RawQmldirPlugin {
  name: string;
  isOptional: boolean;
  linktarget?: string;
}

export interface RawQmldirImport {
  module: string;
  version: string;
  kind: 'required' | 'optional' | 'default';
}

export interface RawQmldirDepend {
  module: string;
  version: string;
}

export interface RawQmldirTypeEntry {
  name: string;
  version: string;
  filePath: string;
  isSingleton: boolean;
  styleSelector?: string;
}

// §1.3 metatypes JSON raw AST
export interface RawMetatypesFile {
  filePath: string;
  entries: RawMetatypesEntry[];
}

export interface RawMetatypesEntry {
  inputFile: string;
  outputRevision: number;
  classes: RawMetatypesClass[];
}

export interface RawMetatypesClass {
  className: string;
  qualifiedClassName: string;
  lineNumber?: number;
  object?: boolean;
  gadget?: boolean;
  namespace?: boolean;
  superClasses?: RawMetatypesSuperClass[];
  classInfos?: RawMetatypesClassInfo[];
  enums?: RawMetatypesEnum[];
  properties?: RawMetatypesProperty[];
  signals?: RawMetatypesMethod[];
  slots?: RawMetatypesMethod[];
  methods?: RawMetatypesMethod[];
  interfaces?: RawMetatypesInterface[][];
}

export interface RawMetatypesSuperClass {
  name: string;
  access: 'public' | 'protected' | 'private';
}

export interface RawMetatypesClassInfo {
  name: string;
  value: string;
}

export interface RawMetatypesProperty {
  name: string;
  type: string;
  read?: string;
  write?: string;
  notify?: string;
  bindable?: string;
  index: number;
  lineNumber?: number;
  constant: boolean;
  required: boolean;
  designable: boolean;
  scriptable: boolean;
  stored: boolean;
  user: boolean;
  final: boolean;
  override: boolean;
  virtual: boolean;
}

export interface RawMetatypesMethod {
  name: string;
  returnType: string;
  access: 'public' | 'protected' | 'private';
  index: number;
  lineNumber?: number;
  revision?: number;
  isCloned?: boolean;
  isConst?: boolean;
  arguments?: RawMetatypesArgument[];
}

export interface RawMetatypesArgument {
  name: string;
  type: string;
}

export interface RawMetatypesEnum {
  name: string;
  alias?: string;
  type?: string;
  isClass: boolean;
  isFlag: boolean;
  lineNumber?: number;
  values: string[];
}

export interface RawMetatypesInterface {
  className: string;
  id: string;
}

// §2 Unified IR

export interface QmlRegistry {
  formatVersion: '1.0.0';
  generatedAt: string;
  qtVersion: string;
  qtDir: string;
  buildDuration: number;
  modules: QmlModule[];
  types: QmlType[];
  builtins: QmlType[];
  stats: {
    moduleCount: number;
    typeCount: number;
    builtinCount: number;
    sourceFiles: {
      qmltypes: number;
      qmldir: number;
      metatypes: number;
    };
  };
}

export interface QmlModule {
  uri: string;
  dirPath: string;
  qmltypesPath?: string;
  plugin?: {
    name: string;
    linktarget?: string;
    className?: string;
    optional: boolean;
  };
  designerSupported: boolean;
  isStatic: boolean;
  isSystem: boolean;
  preferPath?: string;
  imports: ModuleImport[];
  dependencies: ModuleDependency[];
  exportedTypeNames: string[];
  qmlFileTypes: QmlFileTypeEntry[];
}

export interface ModuleImport {
  module: string;
  version: string;
  kind: 'required' | 'optional' | 'default';
}

export interface ModuleDependency {
  module: string;
  version: string;
}

export interface QmlFileTypeEntry {
  name: string;
  version: string;
  filePath: string;
  isSingleton: boolean;
  styleSelector?: string;
}

export interface QmlType {
  qualifiedName: string;
  qmlName: string;
  moduleUri: string;
  sourceFile?: string;
  sourceLine?: number;
  accessSemantics: 'reference' | 'value' | 'sequence' | 'none';
  baseType?: string;
  extensionType?: string;
  extensionIsJavaScript?: boolean;
  extensionIsNamespace?: boolean;
  valueType?: string;
  exports: QmlTypeExport[];
  creatable: boolean;
  singleton: boolean;
  structured?: boolean;
  javaScriptBuiltin?: boolean;
  defaultProperty?: string;
  parentProperty?: string;
  attachedType?: string;
  deferredNames?: string[];
  immediateNames?: string[];
  interfaces?: string[];
  hasCustomParser?: boolean;
  enforcesScopedEnums?: boolean;
  properties: QmlProperty[];
  signals: QmlSignal[];
  methods: QmlMethod[];
  enums: QmlEnum[];
  sources: TypeSource[];
}

export interface QmlTypeExport {
  module: string;
  name: string;
  version: string;
  revision: number;
}

export interface TypeSource {
  kind: 'qmltypes' | 'metatypes' | 'qmldir';
  filePath: string;
}

export interface QmlProperty {
  name: string;
  type: string;
  cppType: string;
  readonly: boolean;
  constant: boolean;
  required: boolean;
  final: boolean;
  pointer: boolean;
  list: boolean;
  hasNotify: boolean;
  notifySignal?: string;
  hasBindable: boolean;
  resetFunction?: string;
  revision?: number;
  defaultValue?: string;
  fromPrivateClass?: string;
}

export interface QmlSignal {
  name: string;
  parameters: QmlParameter[];
  revision?: number;
}

export interface QmlMethod {
  name: string;
  returnType: string;
  cppReturnType: string;
  returnsPointer: boolean;
  parameters: QmlParameter[];
  cloned: boolean;
  constructor: boolean;
  javaScriptFunction: boolean;
  revision?: number;
}

export interface QmlParameter {
  name: string;
  type: string;
  cppType: string;
  pointer: boolean;
}

export interface QmlEnum {
  name: string;
  alias?: string;
  underlyingType?: string;
  isFlag: boolean;
  isScoped: boolean;
  values: QmlEnumValue[];
}

export interface QmlEnumValue {
  name: string;
  value?: number;
}

// Scanner types
export interface ScannerConfig {
  qtDir: string;
  scanDirs?: string[];
  moduleFilter?: string[];
  includeBuiltins?: boolean;
  includeMetatypes?: boolean;
}

export interface ScanResult {
  qmltypesFiles: DiscoveredFile[];
  qmldirFiles: DiscoveredFile[];
  metatypesFiles: DiscoveredFile[];
  duration: number;
  warnings: string[];
}

export interface DiscoveredFile {
  absolutePath: string;
  relativePath: string;
  size: number;
  inferredModule?: string;
  isBuiltin: boolean;
}

// Parser types
export interface ParseDiagnostic {
  level: 'error' | 'warning' | 'info';
  message: string;
  file?: string;
  line?: number;
  column?: number;
}

export interface QmltypesParseResult {
  file: RawQmltypesFile;
  diagnostics: ParseDiagnostic[];
  success: boolean;
}

export interface QmldirParseResult {
  file: RawQmldirFile;
  diagnostics: ParseDiagnostic[];
  success: boolean;
}

export interface MetatypesParseResult {
  file: RawMetatypesFile;
  diagnostics: ParseDiagnostic[];
  success: boolean;
}

// Normalizer types
export interface NormalizerConfig {
  primarySource: 'qmltypes-primary' | 'metatypes-primary';
  resolveInheritance: boolean;
  filterPrivate: boolean;
  mergeOverloads: boolean;
}

export interface NormalizeResult {
  registry: QmlRegistry;
  diagnostics: ParseDiagnostic[];
  orphanedTypes: string[];
  conflicts: MergeConflict[];
}

export interface MergeConflict {
  typeName: string;
  field: string;
  qmltypesValue: string;
  metatypesValue: string;
  resolution: 'used-qmltypes' | 'used-metatypes';
}

// Query types
export interface ResolvedProperty extends QmlProperty {
  declaredBy: string;
  overridden: boolean;
}

export interface ResolvedSignal extends QmlSignal {
  declaredBy: string;
}

export interface ResolvedMethod extends QmlMethod {
  declaredBy: string;
}

export interface ResolvedEnum extends QmlEnum {
  declaredBy: string;
}

// Builder types
export interface BuildConfig extends ScannerConfig {
  normalizer?: Partial<NormalizerConfig>;
  onProgress?: (phase: BuildPhase, progress: number, detail: string) => void;
}

export type BuildPhase =
  | 'validating'
  | 'scanning'
  | 'parsing-qmltypes'
  | 'parsing-qmldir'
  | 'parsing-metatypes'
  | 'normalizing'
  | 'indexing'
  | 'completed';

export interface BuildResult {
  registry: QmlRegistry;
  query: RegistryQueryInterface;
  diagnostics: ParseDiagnostic[];
  success: boolean;
  duration: number;
}

// Query interface (used by BuildResult)
export interface RegistryQueryInterface {
  readonly registry: QmlRegistry;
  getModuleUris(): string[];
  getModule(uri: string): QmlModule | undefined;
  getModuleTypes(uri: string): QmlType[];
  getModuleDependencies(uri: string, transitive?: boolean): string[];
  findByQualifiedName(qualifiedName: string): QmlType | undefined;
  findByQmlName(qmlName: string, moduleUri?: string): QmlType | undefined;
  searchTypes(pattern: string): QmlType[];
  getInheritanceChain(qualifiedName: string): QmlType[];
  getDirectSubclasses(qualifiedName: string): QmlType[];
  isSubtypeOf(a: string, b: string): boolean;
  getAllProperties(qualifiedName: string, inherited?: boolean): ResolvedProperty[];
  getAllSignals(qualifiedName: string, inherited?: boolean): ResolvedSignal[];
  getAllMethods(qualifiedName: string, inherited?: boolean): ResolvedMethod[];
  getAllEnums(qualifiedName: string, inherited?: boolean): ResolvedEnum[];
  getDefaultProperty(qualifiedName: string): QmlProperty | undefined;
  getAttachedType(qualifiedName: string): QmlType | undefined;
  getCreatableTypes(moduleUri?: string): QmlType[];
  getValueTypes(moduleUri?: string): QmlType[];
  getSingletonTypes(moduleUri?: string): QmlType[];
  getAttachedTypes(moduleUri?: string): QmlType[];
}
