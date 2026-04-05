/**
 * Generator intermediate representation types.
 * These types define the shape of analyzed registry data that flows
 * through the generator pipeline stages.
 */

// ─── Type Classification ────────────────────────────────────────────────

export type TypeClassification =
  | 'creatable-object'
  | 'singleton'
  | 'attached-type'
  | 'grouped-surface'
  | 'value-type'
  | 'non-creatable'
  | 'internal';

// ─── Analyzed Registry IR ───────────────────────────────────────────────

export interface AnalyzedRegistry {
  readonly qtVersion: string;
  readonly modules: AnalyzedModule[];
  readonly allTypes: Map<string, AnalyzedType>;
  readonly nameConflicts: NameConflict[];
  readonly groupedSurfaces: Map<string, GroupedSurface>;
  readonly attachedSurfaces: Map<string, AttachedSurface>;
  readonly enumIndex: EnumIndex;
}

export interface AnalyzedModule {
  readonly uri: string;
  readonly types: AnalyzedType[];
  readonly directoryName: string;
}

export interface AnalyzedType {
  readonly qualifiedName: string;
  readonly qmlName: string;
  /** Filesystem/import-safe name — no :: or special chars */
  readonly emitFileName: string;
  /** Public DSL symbol name (factory, builder interface, enum namespace) */
  readonly dslSymbolName: string;
  readonly moduleUri: string;
  readonly classification: TypeClassification;
  readonly baseType?: string;
  readonly defaultProperty?: string;

  readonly ownProperties: AnalyzedProperty[];
  readonly inheritedProperties: AnalyzedProperty[];
  readonly ownSignals: AnalyzedSignal[];
  readonly inheritedSignals: AnalyzedSignal[];
  readonly ownMethods: AnalyzedMethod[];
  readonly inheritedMethods: AnalyzedMethod[];
  readonly ownEnums: AnalyzedEnum[];
  readonly inheritedEnums: AnalyzedEnum[];

  readonly groupedProperties: GroupedPropertyRef[];
  readonly attachedTypes: AttachedTypeRef[];
}

export interface AnalyzedProperty {
  readonly name: string;
  readonly qmlType: string;
  readonly cppType: string;
  readonly readonly: boolean;
  readonly list: boolean;
  readonly required: boolean;
  readonly hasNotify: boolean;
  readonly declaredBy: string;
}

export interface AnalyzedSignal {
  readonly name: string;
  readonly parameters: AnalyzedParameter[];
  readonly declaredBy: string;
}

export interface AnalyzedMethod {
  readonly name: string;
  readonly returnType: string;
  readonly parameters: AnalyzedParameter[];
  readonly declaredBy: string;
}

export interface AnalyzedParameter {
  readonly name: string;
  readonly type: string;
}

export interface AnalyzedEnum {
  readonly name: string;
  readonly isFlag: boolean;
  readonly isScoped: boolean;
  readonly alias?: string;
  readonly members: AnalyzedEnumMember[];
  readonly declaredBy: string;
}

export interface AnalyzedEnumMember {
  readonly name: string;
  readonly value?: number;
}

// ─── Grouped & Attached Surfaces ────────────────────────────────────────

export interface GroupedSurface {
  readonly qualifiedName: string;
  readonly qmlName: string;
  readonly builderName: string;
  readonly properties: AnalyzedProperty[];
  readonly enums: AnalyzedEnum[];
}

export interface AttachedSurface {
  readonly qualifiedName: string;
  readonly ownerQmlName: string;
  readonly methodName: string;
  readonly builderName: string;
  readonly properties: AnalyzedProperty[];
  readonly signals: AnalyzedSignal[];
  readonly enums: AnalyzedEnum[];
}

/** Reference from a type to a grouped property it exposes */
export interface GroupedPropertyRef {
  readonly propertyName: string;
  readonly surfaceQualifiedName: string;
}

/** Reference from a type to an attached type it can use */
export interface AttachedTypeRef {
  readonly methodName: string;
  readonly attachedQualifiedName: string;
}

// ─── Conflicts ──────────────────────────────────────────────────────────

export interface NameConflict {
  readonly name: string;
  readonly modules: string[];
  readonly qualifiedNames: string[];
}

// ─── Enum Index ─────────────────────────────────────────────────────────

/** Resolution result for an enum type reference found on a property */
export interface EnumResolution {
  readonly ownerQualifiedName: string;
  readonly ownerQmlName: string;
  readonly enumName: string;
  readonly moduleUri: string;
  readonly ambiguous: boolean;
}

/** Map from enum type reference string → resolution.
 *  Keys are plain enum names ("Status") and C++ qualified names ("Qt::FocusPolicy").
 */
export type EnumIndex = ReadonlyMap<string, EnumResolution>;

// ─── Generator Config & Result ──────────────────────────────────────────

export interface GeneratorConfig {
  readonly registryPath: string;
  readonly outputDir: string;
  readonly moduleWhitelist?: string[];
  readonly runtimeImportPath?: string;
}

export interface GeneratedFile {
  readonly relativePath: string;
  readonly content: string;
}

export interface GeneratorResult {
  readonly files: GeneratedFile[];
  readonly stats: GeneratorStats;
  readonly diagnostics: GeneratorDiagnostic[];
  readonly success: boolean;
}

export interface GeneratorStats {
  readonly modulesProcessed: number;
  readonly typesProcessed: number;
  readonly creatableTypes: number;
  readonly singletonTypes: number;
  readonly attachedTypes: number;
  readonly groupedSurfaces: number;
  readonly valueTypes: number;
  readonly enumNamespaces: number;
  readonly filesGenerated: number;
  readonly totalLines: number;
}

export interface GeneratorDiagnostic {
  readonly level: 'error' | 'warning' | 'info';
  readonly message: string;
  readonly typeName?: string;
  readonly module?: string;
}
