import { QML_TYPE_MAP } from '../runtime/types.js';
import type { AnalyzedRegistry, AnalyzedType, EnumIndex, GeneratorDiagnostic } from './types.js';

/** Reference to a builder/instance type from another generated file */
export interface PeerTypeRef {
  readonly tsName: string;
  readonly qmlName: string;
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
  private readonly typeNameToAnalyzed = new Map<string, AnalyzedType>();

  constructor(analyzed: AnalyzedRegistry) {
    this.analyzed = analyzed;
    this.enumIndex = analyzed.enumIndex;

    // Build lookup by C++ qualified name and QML name
    for (const [qn, type] of analyzed.allTypes) {
      this.typeNameToAnalyzed.set(qn, type);
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

    // 2. Check list types (QList<X>, list<X>)
    const listMatch = qmlType.match(/^(?:QList|list)<(.+)>$/);
    if (listMatch) {
      const inner = this.mapType(listMatch[1]!);
      return `${inner}[]`;
    }

    // 3. Check QQmlComponent → QmlComponent
    if (qmlType === 'QQmlComponent' || qmlType === 'QQmlComponentAutoParent') {
      this.runtimeImports.add('QmlComponent');
      return 'QmlComponent';
    }

    // 4. Check known types from the analyzed registry
    const analyzed = this.typeNameToAnalyzed.get(qmlType);
    if (analyzed) {
      return this.mapAnalyzedType(analyzed);
    }

    // 5. Try stripping C++ namespace (e.g. Qt::Alignment → Alignment)
    const colonIdx = qmlType.lastIndexOf('::');
    if (colonIdx >= 0) {
      const stripped = qmlType.slice(colonIdx + 2);
      // Check if the stripped name is known
      const strippedResult = this.tryMapKnownType(stripped);
      if (strippedResult) return strippedResult;
    }

    // 6. Check grouped surfaces by qualified name
    const grouped = this.analyzed.groupedSurfaces.get(qmlType);
    if (grouped) {
      return grouped.builderName;
    }

    // 7. Check enum index — resolved enums become QmlEnumToken
    if (this.resolveEnum(qmlType)) {
      this.runtimeImports.add('QmlEnumToken');
      return 'QmlEnumToken';
    }

    // 8. Fallback
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
        const tsName = `${type.qmlName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: type.qmlName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'singleton': {
        const tsName = `${type.qmlName}Instance`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: type.qmlName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'grouped-surface': {
        const surface = this.analyzed.groupedSurfaces.get(type.qualifiedName);
        const tsName = surface ? surface.builderName : `${type.qmlName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: surface ? surface.qmlName : type.qmlName,
          moduleUri: type.moduleUri,
        });
        return tsName;
      }
      case 'attached-type': {
        const attached = this.analyzed.attachedSurfaces.get(type.qualifiedName);
        const tsName = attached ? attached.builderName : `${type.qmlName}Builder`;
        this.peerTypeRefs.set(tsName, {
          tsName,
          qmlName: attached ? attached.ownerQmlName : type.qmlName,
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
    if (tsType.startsWith('Qml')) {
      this.runtimeImports.add(tsType);
    }
  }

  /** Try to map a type string using known static/analyzed/grouped paths (no fallback). */
  private tryMapKnownType(name: string): string | undefined {
    const staticMapping = QML_TYPE_MAP[name];
    if (staticMapping) {
      this.trackRuntimeImport(staticMapping);
      return staticMapping;
    }
    const analyzed = this.typeNameToAnalyzed.get(name);
    if (analyzed) return this.mapAnalyzedType(analyzed);
    if (this.resolveEnum(name)) {
      this.runtimeImports.add('QmlEnumToken');
      return 'QmlEnumToken';
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
