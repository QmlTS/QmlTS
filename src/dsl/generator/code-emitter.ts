import type { PeerTypeRef, TypeMapper } from './type-mapper.js';
import type {
  AnalyzedRegistry,
  AnalyzedSignal,
  AnalyzedType,
  AttachedSurface,
  GroupedSurface,
} from './types.js';

/**
 * Emits TypeScript source code for analyzed types.
 * Produces per-type .ts files with builder interfaces, factory functions,
 * enum namespaces, and grouped/attached builders.
 */
export class CodeEmitter {
  private readonly analyzed: AnalyzedRegistry;
  private readonly mapper: TypeMapper;
  // Module directory lookup: moduleUri → directoryName
  private readonly moduleDirs = new Map<string, string>();

  constructor(analyzed: AnalyzedRegistry, mapper: TypeMapper) {
    this.analyzed = analyzed;
    this.mapper = mapper;
    for (const mod of analyzed.modules) {
      this.moduleDirs.set(mod.uri, mod.directoryName);
    }
  }

  /** Emit a complete TypeScript file for one analyzed type */
  emitType(type: AnalyzedType): string {
    switch (type.classification) {
      case 'creatable-object':
        return this.emitCreatable(type);
      case 'singleton':
        return this.emitSingleton(type);
      case 'grouped-surface':
        return this.emitGroupedSurfaceFile(type);
      case 'attached-type':
        return this.emitAttachedTypeFile(type);
      default:
        return this.emitCreatable(type);
    }
  }

  /** Emit a grouped surface builder file */
  emitGroupedSurfaceCode(surface: GroupedSurface, moduleUri = ''): string {
    this.mapper.resetImports();
    const lines: string[] = [];
    const builderName = surface.builderName;

    // Collect mapped types for properties
    const propTypes = new Map<string, string>();
    for (const prop of surface.properties) {
      if (!prop.readonly) {
        propTypes.set(prop.name, this.mapper.mapType(prop.qmlType));
      }
    }

    // Builder interface
    lines.push(`export interface ${builderName} {`);
    for (const prop of surface.properties) {
      if (prop.readonly) continue;
      const tsType = propTypes.get(prop.name) ?? 'QmlValue';
      lines.push(`  ${prop.name}(value: ${tsType}): ${builderName};`);
      lines.push(`  ${prop.name}Bind(expr: string): ${builderName};`);
    }
    lines.push('}');

    // Imports — surface files are type-only
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const peerRefs = this.mapper.getPeerTypeRefs();
    const importSection = this.buildSurfaceImportSection(runtimeImports, peerRefs, moduleUri);
    const header = this.buildHeader(`Grouped surface: ${surface.qmlName}`, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  /** Emit an attached surface builder file */
  emitAttachedSurfaceCode(surface: AttachedSurface, moduleUri = ''): string {
    this.mapper.resetImports();
    const lines: string[] = [];
    const builderName = surface.builderName;

    // Collect mapped types
    const propTypes = new Map<string, string>();
    for (const prop of surface.properties) {
      if (!prop.readonly) {
        propTypes.set(prop.name, this.mapper.mapType(prop.qmlType));
      }
    }

    // Builder interface
    lines.push(`export interface ${builderName} {`);
    for (const prop of surface.properties) {
      if (prop.readonly) continue;
      const tsType = propTypes.get(prop.name) ?? 'QmlValue';
      lines.push(`  ${prop.name}(value: ${tsType}): ${builderName};`);
      lines.push(`  ${prop.name}Bind(expr: string): ${builderName};`);
    }

    // Signal handlers
    for (const sig of surface.signals) {
      const handlerName = `on${capitalize(sig.name)}`;
      const params = this.formatSignalParams(sig);
      lines.push(`  ${handlerName}(handler: ${params}): ${builderName};`);
    }
    lines.push('}');

    // Imports — surface files are type-only
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const peerRefs = this.mapper.getPeerTypeRefs();
    const importSection = this.buildSurfaceImportSection(runtimeImports, peerRefs, moduleUri);
    const header = this.buildHeader(`Attached type: ${surface.ownerQmlName}`, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  private emitCreatable(type: AnalyzedType): string {
    this.mapper.resetImports();
    const lines: string[] = [];
    const builderName = `${type.qmlName}Builder`;
    const allProps = [...type.ownProperties, ...type.inheritedProperties];
    const allSignals = [...type.ownSignals, ...type.inheritedSignals];
    const allEnums = [...type.ownEnums, ...type.inheritedEnums];
    const hasEnums = allEnums.length > 0;

    // Pre-map all property types to collect imports
    const propTypes = new Map<string, string>();
    for (const prop of allProps) {
      if (!prop.readonly) {
        propTypes.set(prop.name, this.mapper.mapType(prop.qmlType));
      }
    }

    // Also pre-map signal parameter types
    for (const sig of allSignals) {
      for (const p of sig.parameters) {
        this.mapper.mapType(p.type);
      }
    }

    // ─── Builder interface ──────────────────────────────────────────────
    lines.push(`export interface ${builderName} {`);
    lines.push(`  id(id: string): ${builderName};`);
    lines.push(`  child(obj: QmlObjectBuilder): ${builderName};`);
    lines.push('');

    // Properties (writable only)
    for (const prop of sortedByName(allProps)) {
      if (prop.readonly) continue;
      const tsType = propTypes.get(prop.name) ?? 'QmlValue';
      lines.push(`  ${safeName(prop.name)}(value: ${tsType}): ${builderName};`);
      lines.push(`  ${safeName(prop.name)}Bind(expr: string): ${builderName};`);
    }

    // Signal handlers
    for (const sig of sortedByName(allSignals)) {
      const handlerName = `on${capitalize(sig.name)}`;
      const params = this.formatSignalParams(sig);
      lines.push(`  ${handlerName}(handler: ${params}): ${builderName};`);
    }

    // Grouped property methods
    for (const ref of type.groupedProperties) {
      const surface = this.analyzed.groupedSurfaces.get(ref.surfaceQualifiedName);
      if (surface) {
        lines.push(
          `  ${ref.propertyName}(setup: (b: ${surface.builderName}) => void): ${builderName};`,
        );
      }
    }

    // Attached type methods (detect name conflicts with properties/grouped)
    const usedNames = new Set<string>();
    for (const prop of sortedByName(allProps)) {
      if (!prop.readonly) usedNames.add(safeName(prop.name));
    }
    for (const ref of type.groupedProperties) {
      usedNames.add(ref.propertyName);
    }
    for (const ref of type.attachedTypes) {
      const surface = this.analyzed.attachedSurfaces.get(ref.attachedQualifiedName);
      if (surface) {
        let methodName = ref.methodName;
        if (usedNames.has(methodName)) {
          methodName = `${methodName}Attached`;
        }
        lines.push(`  ${methodName}(setup: (b: ${surface.builderName}) => void): ${builderName};`);
      }
    }

    lines.push('}');
    lines.push('');

    // ─── Factory function ───────────────────────────────────────────────
    lines.push(`export function ${type.qmlName}(): ${builderName} {`);
    lines.push(`  return new DslBuilderImpl('${type.qmlName}') as unknown as ${builderName};`);
    lines.push('}');

    // ─── Enum namespace ─────────────────────────────────────────────────
    if (hasEnums) {
      lines.push('');
      this.emitEnumNamespace(type.qmlName, allEnums, lines);
    }

    // ─── Build imports and header ───────────────────────────────────────
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const peerRefs = this.collectAllPeerRefs(type);
    const importSection = this.buildCreatableImportSection(
      runtimeImports,
      peerRefs,
      hasEnums,
      type.moduleUri,
    );
    const header = this.buildHeader(type.qmlName, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  private emitSingleton(type: AnalyzedType): string {
    this.mapper.resetImports();
    const lines: string[] = [];
    const interfaceName = `${type.qmlName}Instance`;
    const allProps = [...type.ownProperties, ...type.inheritedProperties];
    const allEnums = [...type.ownEnums, ...type.inheritedEnums];
    const hasEnums = allEnums.length > 0;

    // Pre-map property types
    for (const prop of allProps) {
      this.mapper.mapType(prop.qmlType);
    }

    // Interface
    lines.push(`export interface ${interfaceName} {`);
    for (const prop of sortedByName(allProps)) {
      const tsType = this.mapper.mapType(prop.qmlType);
      if (prop.readonly) {
        lines.push(`  readonly ${safeName(prop.name)}: ${tsType};`);
      } else {
        lines.push(`  ${safeName(prop.name)}: ${tsType};`);
      }
    }
    lines.push('}');
    lines.push('');

    if (hasEnums) {
      // Use function pattern for namespace merging with enums
      lines.push(`export function ${type.qmlName}(): ${interfaceName} {`);
      lines.push(`  return {} as ${interfaceName};`);
      lines.push('}');
      lines.push('');
      this.emitEnumNamespace(type.qmlName, allEnums, lines);
    } else {
      // Simple const for singletons without enums
      lines.push(`export const ${type.qmlName} = {} as ${interfaceName};`);
    }

    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const peerRefs = this.collectAllPeerRefs(type);
    const importSection = this.buildSingletonImportSection(
      runtimeImports,
      peerRefs,
      hasEnums,
      type.moduleUri,
    );
    const header = this.buildHeader(type.qmlName, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  private emitGroupedSurfaceFile(type: AnalyzedType): string {
    const surface = this.analyzed.groupedSurfaces.get(type.qualifiedName);
    if (surface) {
      return this.emitGroupedSurfaceCode(surface, type.moduleUri);
    }
    return this.emitCreatable(type);
  }

  private emitAttachedTypeFile(type: AnalyzedType): string {
    const surface = this.analyzed.attachedSurfaces.get(type.qualifiedName);
    if (surface) {
      return this.emitAttachedSurfaceCode(surface, type.moduleUri);
    }
    return this.emitCreatable(type);
  }

  private formatSignalParams(sig: AnalyzedSignal): string {
    if (sig.parameters.length === 0) {
      return '() => void';
    }
    const params = sig.parameters
      .map((p, i) => {
        const name = p.name || `arg${i}`;
        return `${safeName(name)}: ${this.mapper.mapType(p.type)}`;
      })
      .join(', ');
    return `(${params}) => void`;
  }

  /** Emit nested enum namespace: TypeName.EnumName.MemberName */
  private emitEnumNamespace(
    typeName: string,
    allEnums: { name: string; members: { name: string }[] }[],
    lines: string[],
  ): void {
    lines.push(`export namespace ${typeName} {`);
    for (const en of sortedByName(allEnums)) {
      lines.push(`  export namespace ${en.name} {`);
      for (const member of en.members) {
        lines.push(
          `    export const ${member.name} = createEnumToken('${typeName}', '${en.name}', '${member.name}');`,
        );
      }
      lines.push('  }');
    }
    lines.push('}');
  }

  /**
   * Collect all peer type refs: from TypeMapper (property types) +
   * grouped/attached surface builders used in the interface.
   * Filter out self-references.
   */
  private collectAllPeerRefs(type: AnalyzedType): PeerTypeRef[] {
    const selfNames = new Set<string>();
    selfNames.add(`${type.qmlName}Builder`);
    selfNames.add(`${type.qmlName}Instance`);

    // Start with mapper's peer refs (from property type mapping)
    const allRefs = new Map<string, PeerTypeRef>();
    for (const ref of this.mapper.getPeerTypeRefs()) {
      if (!selfNames.has(ref.tsName)) {
        allRefs.set(ref.tsName, ref);
      }
    }

    // Add grouped surface builder refs
    for (const ref of type.groupedProperties) {
      const surface = this.analyzed.groupedSurfaces.get(ref.surfaceQualifiedName);
      if (surface && !selfNames.has(surface.builderName)) {
        // Find which module the grouped surface type lives in
        const surfaceType = this.analyzed.allTypes.get(ref.surfaceQualifiedName);
        const moduleUri = surfaceType?.moduleUri ?? type.moduleUri;
        allRefs.set(surface.builderName, {
          tsName: surface.builderName,
          qmlName: surface.qmlName,
          moduleUri,
        });
      }
    }

    // Add attached surface builder refs
    for (const ref of type.attachedTypes) {
      const surface = this.analyzed.attachedSurfaces.get(ref.attachedQualifiedName);
      if (surface && !selfNames.has(surface.builderName)) {
        const surfaceType = this.analyzed.allTypes.get(ref.attachedQualifiedName);
        const moduleUri = surfaceType?.moduleUri ?? type.moduleUri;
        allRefs.set(surface.builderName, {
          tsName: surface.builderName,
          qmlName: surfaceType?.qmlName ?? surface.ownerQmlName,
          moduleUri,
        });
      }
    }

    return [...allRefs.values()].sort((a, b) =>
      a.tsName < b.tsName ? -1 : a.tsName > b.tsName ? 1 : 0,
    );
  }

  private buildHeader(typeName: string, importSection: string): string {
    return [
      '// AUTO-GENERATED — DO NOT EDIT',
      `// Type: ${typeName}`,
      `// Generated from Qt ${this.analyzed.qtVersion}`,
      '',
      importSection,
    ].join('\n');
  }

  private buildCreatableImportSection(
    runtimeImports: string[],
    peerRefs: PeerTypeRef[],
    needsEnumToken: boolean,
    currentModule: string,
  ): string {
    const lines: string[] = [];

    // Value imports (used at runtime)
    const valueImports = ['DslBuilderImpl'];
    if (needsEnumToken) {
      valueImports.push('createEnumToken');
    }
    valueImports.sort();

    // Type-only imports (used only in type positions)
    const typeImports = ['QmlObjectBuilder', ...runtimeImports];
    typeImports.sort();

    lines.push(`import { ${valueImports.join(', ')} } from '../../runtime/index.js';`);
    if (typeImports.length > 0) {
      lines.push(`import type { ${typeImports.join(', ')} } from '../../runtime/index.js';`);
    }

    // Peer imports
    this.emitPeerImports(lines, peerRefs, currentModule);

    return lines.join('\n');
  }

  /** Import section for singleton types */
  private buildSingletonImportSection(
    runtimeImports: string[],
    peerRefs: PeerTypeRef[],
    needsEnumToken: boolean,
    currentModule: string,
  ): string {
    const lines: string[] = [];

    if (needsEnumToken) {
      lines.push(`import { createEnumToken } from '../../runtime/index.js';`);
    }

    if (runtimeImports.length > 0) {
      const sorted = [...runtimeImports].sort();
      lines.push(`import type { ${sorted.join(', ')} } from '../../runtime/index.js';`);
    }

    // Peer imports
    this.emitPeerImports(lines, peerRefs, currentModule);

    return lines.join('\n');
  }

  /** Import section for grouped/attached surface files (type-only) */
  private buildSurfaceImportSection(
    runtimeImports: string[],
    peerRefs: PeerTypeRef[],
    currentModule: string,
  ): string {
    const lines: string[] = [];

    if (runtimeImports.length > 0) {
      const sorted = [...runtimeImports].sort();
      lines.push(`import type { ${sorted.join(', ')} } from '../../runtime/index.js';`);
    }

    this.emitPeerImports(lines, peerRefs, currentModule);

    return lines.join('\n');
  }

  /** Generate peer type import statements grouped by source file */
  private emitPeerImports(lines: string[], peerRefs: PeerTypeRef[], currentModule: string): void {
    if (peerRefs.length === 0) return;

    // Group by source file
    const byFile = new Map<string, string[]>();
    for (const ref of peerRefs) {
      const moduleDir = this.moduleDirs.get(ref.moduleUri) ?? ref.moduleUri;
      let relativePath: string;
      if (ref.moduleUri === currentModule) {
        relativePath = `./${ref.qmlName}.js`;
      } else {
        relativePath = `../${moduleDir}/${ref.qmlName}.js`;
      }
      const existing = byFile.get(relativePath);
      if (existing) {
        existing.push(ref.tsName);
      } else {
        byFile.set(relativePath, [ref.tsName]);
      }
    }

    // Sort by file path for determinism
    const sortedPaths = [...byFile.keys()].sort();
    for (const filePath of sortedPaths) {
      const names = byFile.get(filePath)!.sort();
      lines.push(`import type { ${names.join(', ')} } from '${filePath}';`);
    }
  }
}

// ─── Utility functions ──────────────────────────────────────────────────

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function safeName(name: string): string {
  const RESERVED = new Set([
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'finally',
    'for',
    'function',
    'if',
    'in',
    'instanceof',
    'new',
    'return',
    'switch',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'class',
    'const',
    'enum',
    'export',
    'extends',
    'import',
    'super',
    'implements',
    'interface',
    'let',
    'package',
    'private',
    'protected',
    'public',
    'static',
    'yield',
  ]);
  if (RESERVED.has(name)) return `${name}_`;
  return name;
}

function sortedByName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}
