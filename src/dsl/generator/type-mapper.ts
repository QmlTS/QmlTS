import { QML_TYPE_MAP } from '../runtime/types.js';
import type { AnalyzedRegistry, AnalyzedType, GeneratorDiagnostic } from './types.js';

/**
 * Maps QML/C++ type names to TypeScript type names.
 * Category-aware: produces builder names for creatable types,
 * grouped builder names for grouped surfaces, etc.
 * Tracks which runtime imports are needed for code generation.
 */
export class TypeMapper {
  private readonly analyzed: AnalyzedRegistry;
  private readonly runtimeImports = new Set<string>();
  private readonly diagnostics: GeneratorDiagnostic[] = [];
  private readonly typeNameToAnalyzed = new Map<string, AnalyzedType>();

  constructor(analyzed: AnalyzedRegistry) {
    this.analyzed = analyzed;

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
      // This is likely an enum type, just return QmlValue
      return this.mapType(stripped) || this.fallback(qmlType);
    }

    // 6. Check grouped surfaces by qualified name
    const grouped = this.analyzed.groupedSurfaces.get(qmlType);
    if (grouped) {
      return grouped.builderName;
    }

    // 7. Fallback
    return this.fallback(qmlType);
  }

  /** Get the set of runtime type names that need to be imported */
  getRequiredRuntimeImports(): string[] {
    return [...this.runtimeImports].sort();
  }

  /** Get accumulated diagnostics (unknown type warnings) */
  getDiagnostics(): GeneratorDiagnostic[] {
    return [...this.diagnostics];
  }

  /** Reset tracked imports (call before emitting a new file) */
  resetImports(): void {
    this.runtimeImports.clear();
  }

  private mapAnalyzedType(type: AnalyzedType): string {
    switch (type.classification) {
      case 'creatable-object':
        return `${type.qmlName}Builder`;
      case 'singleton':
        return `${type.qmlName}Instance`;
      case 'grouped-surface': {
        const surface = this.analyzed.groupedSurfaces.get(type.qualifiedName);
        return surface ? surface.builderName : `${type.qmlName}Builder`;
      }
      case 'attached-type': {
        const attached = this.analyzed.attachedSurfaces.get(type.qualifiedName);
        return attached ? attached.builderName : `${type.qmlName}Builder`;
      }
      case 'value-type':
        return 'QmlValue';
      case 'non-creatable':
      case 'internal':
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

  private fallback(qmlType: string): string {
    this.diagnostics.push({
      level: 'warning',
      message: `Unknown QML type "${qmlType}", falling back to QmlValue`,
    });
    this.runtimeImports.add('QmlValue');
    return 'QmlValue';
  }
}
