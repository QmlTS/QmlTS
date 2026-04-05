import { QML_TYPE_MAP } from '../runtime/types.js';
import type { AnalyzedRegistry, AnalyzedType, EnumIndex, GeneratorDiagnostic } from './types.js';

/** Reference to a builder/instance type from another generated file */
export interface PeerTypeRef {
  readonly tsName: string;
  readonly qmlName: string;
  readonly emitFileName: string;
  readonly moduleUri: string;
}

/**
 * Maps QML/C++ type names to TypeScript type names.
 * Category-aware: produces builder names for creatable types,
 * grouped builder names for grouped surfaces, etc.
 * Tracks which runtime imports are needed for code generation.
 */
export class TypeMapper {
  private readonly analyzed: AnalyzedRegistry;
  private readonly enumIndex: EnumIndex;
  private readonly runtimeImports = new Set<string>();
  private readonly peerTypeRefs = new Map<string, PeerTypeRef>();
  private readonly diagnostics: GeneratorDiagnostic[] = [];
  private readonly qualifiedTypeNameToAnalyzed = new Map<string, AnalyzedType>();
  private readonly qmlNameToAnalyzed = new Map<string, AnalyzedType>();
  private readonly shortCppNameToAnalyzed = new Map<string, AnalyzedType>();

  constructor(analyzed: AnalyzedRegistry) {
    this.analyzed = analyzed;
    this.enumIndex = analyzed.enumIndex;

    // Build lookup by C++ qualified name (primary key)
    for (const [qn, type] of analyzed.allTypes) {
      this.qualifiedTypeNameToAnalyzed.set(qn, type);
    }

    // Build reverse-index by qmlName and short C++ class name.
    // Only index non-ambiguous names; skip if multiple resolvable types share the same short name.
    const shortNameCandidates = new Map<string, AnalyzedType | null>();
    const qmlNameCandidates = new Map<string, AnalyzedType | null>();

    for (const [, type] of analyzed.allTypes) {
      // Skip internal types — they're implementation details
      if (type.classification === 'internal') {
        continue;
      }

      // Index by qmlName (e.g., "Entity" → Qt3DCore::QEntity)
      if (!this.qualifiedTypeNameToAnalyzed.has(type.qmlName)) {
        const existing = qmlNameCandidates.get(type.qmlName);
        if (existing === undefined) {
          qmlNameCandidates.set(type.qmlName, type);
        } else {
          qmlNameCandidates.set(type.qmlName, null); // ambiguous
        }
      }

      // Index by short C++ class name — strip namespace from qualifiedName
      const colonIdx = type.qualifiedName.lastIndexOf('::');
      if (colonIdx >= 0) {
        const shortName = type.qualifiedName.slice(colonIdx + 2);
        if (!this.qualifiedTypeNameToAnalyzed.has(shortName)) {
          const existing = shortNameCandidates.get(shortName);
          if (existing === undefined) {
            shortNameCandidates.set(shortName, type);
          } else {
            shortNameCandidates.set(shortName, null); // ambiguous
          }
        }
      }
    }

    // Keep non-ambiguous reverse indexes separate so enum names continue to win.
    for (const [name, type] of qmlNameCandidates) {
      if (type !== null) {
        this.qmlNameToAnalyzed.set(name, type);
      }
    }
    for (const [name, type] of shortNameCandidates) {
      if (type !== null && !this.qmlNameToAnalyzed.has(name)) {
        this.shortCppNameToAnalyzed.set(name, type);
      }
    }
  }

  /**
   * Map a QML/C++ type string to the corresponding TypeScript type string.
   * Returns builder names for reference types, runtime types for values.
   */
  mapType(qmlType: string): string {
    // 1. Check static QML_TYPE_MAP first (primitives, semantic aliases, value types)
    const staticMapping = QML_TYPE_MAP[qmlType];
    if (staticMapping) {
      this.trackRuntimeImport(staticMapping);
      return staticMapping;
    }

    // 2. Bare list without generic parameter
    if (qmlType === 'list' || qmlType === 'QVariantList') {
      this.runtimeImports.add('QmlValue');
      return 'QmlValue[]';
    }

    // 3. Check list types (QList<X>, list<X>)
    const listMatch = qmlType.match(/^(?:QList|list)<(.+)>$/);
    if (listMatch) {
      const innerType = listMatch[1]!.trim();
      const inner = this.mapType(innerType);
      return `${inner}[]`;
    }

    // 3. Check QQmlComponent → QmlComponent
    if (qmlType === 'QQmlComponent' || qmlType === 'QQmlComponentAutoParent') {
      this.runtimeImports.add('QmlComponent');
      return 'QmlComponent';
    }

    // 4. Check known types from the analyzed registry
    const analyzed = this.qualifiedTypeNameToAnalyzed.get(qmlType);
    if (analyzed) {
      return this.mapAnalyzedType(analyzed);
    }

    // 5. Check grouped surfaces by qualified name
    const grouped = this.analyzed.groupedSurfaces.get(qmlType);
    if (grouped) {
      return grouped.builderName;
    }

    // 6. Check enum index before reverse-index object resolution
    if (this.resolveEnum(qmlType)) {
      this.runtimeImports.add('QmlEnumToken');
      return 'QmlEnumToken';
    }

    // 7. Try stripping C++ namespace (e.g. Qt::Alignment → Alignment)
    const colonIdx = qmlType.lastIndexOf('::');
    if (colonIdx >= 0) {
      const stripped = qmlType.slice(colonIdx + 2);
      const strippedResult = this.tryMapKnownType(stripped);
      if (strippedResult) return strippedResult;
    }

    // 7b. Strip pointer suffix and retry (e.g. QBarSet* → QBarSet)
    if (qmlType.endsWith('*')) {
      const baseType = qmlType.slice(0, -1).trim();
      const result = this.tryMapKnownType(baseType);
      if (result) return result;
    }

    // 8. Finally, try non-qualified reverse indexes (qmlName / short C++ name)
    const reverseMapped = this.tryMapReverseIndexedType(qmlType);
    if (reverseMapped) {
      return reverseMapped;
    }

    // 9. Fallback
    return this.fallback(qmlType);
  }

  /** Get the set of runtime type names that need to be imported */
  getRequiredRuntimeImports(): string[] {
    return [...this.runtimeImports].sort();
  }

  /** Get peer type references (builders/instances from other generated files) */
  getPeerTypeRefs(): PeerTypeRef[] {
    return [...this.peerTypeRefs.values()].sort((a, b) =>
      a.tsName < b.tsName ? -1 : a.tsName > b.tsName ? 1 : 0,
    );
  }

  /** Get accumulated diagnostics (unknown type warnings) */
  getDiagnostics(): GeneratorDiagnostic[] {
    return [...this.diagnostics];
  }

  /** Reset tracked imports (call before emitting a new file) */
  resetImports(): void {
    this.runtimeImports.clear();
    this.peerTypeRefs.clear();
  }

  private mapAnalyzedType(type: AnalyzedType): string {
    switch (type.classification) {
      case 'creatable-object': {
        const tsName = `${type.dslSymbolName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: type.qmlName,
          emitFileName: type.emitFileName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'singleton': {
        const tsName = `${type.dslSymbolName}Instance`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: type.qmlName,
          emitFileName: type.emitFileName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'grouped-surface': {
        const surface = this.analyzed.groupedSurfaces.get(type.qualifiedName);
        const tsName = surface ? surface.builderName : `${type.dslSymbolName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: surface ? surface.qmlName : type.qmlName,
          emitFileName: type.emitFileName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'attached-type': {
        const attached = this.analyzed.attachedSurfaces.get(type.qualifiedName);
        const tsName = attached ? attached.builderName : `${type.dslSymbolName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: attached ? attached.ownerQmlName : type.qmlName,
          emitFileName: type.emitFileName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'value-type':
        this.runtimeImports.add('QmlValue');
        return 'QmlValue';
      case 'non-creatable':
      case 'internal':
        this.runtimeImports.add('QmlValue');
        return 'QmlValue';
    }
  }

  private trackRuntimeImport(tsType: string): void {
    // Only track non-primitive types that need importing
    if (tsType === 'number' || tsType === 'string' || tsType === 'boolean') {
      return;
    }
    // Strip array suffix — import the base type, not `QmlValue[]`
    const baseType = tsType.endsWith('[]') ? tsType.slice(0, -2) : tsType;
    if (baseType.startsWith('Qml')) {
      this.runtimeImports.add(baseType);
    }
  }

  /** Try to map a type string using known static/analyzed/grouped paths (no fallback). */
  private tryMapKnownType(name: string): string | undefined {
    const staticMapping = QML_TYPE_MAP[name];
    if (staticMapping) {
      this.trackRuntimeImport(staticMapping);
      return staticMapping;
    }
    const analyzed = this.qualifiedTypeNameToAnalyzed.get(name);
    if (analyzed) return this.mapAnalyzedType(analyzed);
    const grouped = this.analyzed.groupedSurfaces.get(name);
    if (grouped) {
      return grouped.builderName;
    }
    if (this.resolveEnum(name)) {
      this.runtimeImports.add('QmlEnumToken');
      return 'QmlEnumToken';
    }
    const reverseMapped = this.tryMapReverseIndexedType(name);
    if (reverseMapped) return reverseMapped;
    return undefined;
  }

  private tryMapReverseIndexedType(name: string): string | undefined {
    const byQmlName = this.qmlNameToAnalyzed.get(name);
    if (byQmlName) {
      return this.mapAnalyzedType(byQmlName);
    }
    const byShortCppName = this.shortCppNameToAnalyzed.get(name);
    if (byShortCppName) {
      return this.mapAnalyzedType(byShortCppName);
    }
    return undefined;
  }

  /** Check if a type reference resolves to a known enum in the index. */
  private resolveEnum(typeRef: string): boolean {
    if (this.enumIndex.has(typeRef)) return true;
    if (typeRef.includes('::')) {
      const parts = typeRef.split('::');
      const enumPart = parts[parts.length - 1]!;
      return this.enumIndex.has(enumPart);
    }
    return false;
  }

  private fallback(qmlType: string): string {
    this.diagnostics.push({
      level: 'warning',
      message: `Unknown QML type "${qmlType}", falling back to QmlValue`,
    });
    this.runtimeImports.add('QmlValue');
    return 'QmlValue';
  }
}
