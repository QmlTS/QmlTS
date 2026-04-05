import type { PeerTypeRef, TypeMapper } from './type-mapper.js';
import type { AnalyzedRegistry, AnalyzedType, AttachedSurface, GroupedSurface } from './types.js';

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

    // Imports — surface files are type-only, filter to actually used
    const codeBody = lines.join('\n');
    const runtimeImports = filterUsedImports(this.mapper.getRequiredRuntimeImports(), codeBody);
    const peerRefs = filterUsedPeerRefs(this.mapper.getPeerTypeRefs(), codeBody);
    const importSection = this.buildSurfaceImportSection(runtimeImports, peerRefs, moduleUri);
    const header = this.buildHeader(`Grouped surface: ${surface.qmlName}`, importSection);

    return `${header}\n${codeBody}\n`;
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
      lines.push(`  ${handlerName}(body: string): ${builderName};`);
    }
    lines.push('}');

    // Imports — surface files are type-only, filter to actually used
    const codeBody = lines.join('\n');
    const runtimeImports = filterUsedImports(this.mapper.getRequiredRuntimeImports(), codeBody);
    const peerRefs = filterUsedPeerRefs(this.mapper.getPeerTypeRefs(), codeBody);
    const importSection = this.buildSurfaceImportSection(runtimeImports, peerRefs, moduleUri);
    const header = this.buildHeader(`Attached type: ${surface.ownerQmlName}`, importSection);

    return `${header}\n${codeBody}\n`;
  }

  private emitCreatable(type: AnalyzedType): string {
    this.mapper.resetImports();
    const builderName = `${type.dslSymbolName}Builder`;
    const allProps = [...type.ownProperties, ...type.inheritedProperties];
    const allSignals = [...type.ownSignals, ...type.inheritedSignals];
    const allEnums = [...type.ownEnums, ...type.inheritedEnums];
    const hasEnums = allEnums.length > 0;

    // Pre-map writable property types to collect imports
    const propTypes = new Map<string, string>();
    for (const prop of allProps) {
      if (!prop.readonly) {
        propTypes.set(prop.name, this.mapper.mapType(prop.qmlType));
      }
    }

    // ─── Builder interface (peer type refs appear here as type annotations) ──
    const ifaceLines: string[] = [];
    ifaceLines.push(`export interface ${builderName} {`);
    ifaceLines.push(`  id(id: string): ${builderName};`);
    ifaceLines.push(`  child(obj: QmlObjectBuilder): ${builderName};`);
    ifaceLines.push('');

    // Properties (writable only)
    for (const prop of sortedByName(allProps)) {
      if (prop.readonly) continue;
      const tsType = propTypes.get(prop.name) ?? 'QmlValue';
      ifaceLines.push(`  ${safeName(prop.name)}(value: ${tsType}): ${builderName};`);
      ifaceLines.push(`  ${safeName(prop.name)}Bind(expr: string): ${builderName};`);
    }

    // Signal handlers
    for (const sig of sortedByName(allSignals)) {
      const handlerName = `on${capitalize(sig.name)}`;
      ifaceLines.push(`  ${handlerName}(body: string): ${builderName};`);
    }

    // Grouped property methods
    for (const ref of type.groupedProperties) {
      const surface = this.analyzed.groupedSurfaces.get(ref.surfaceQualifiedName);
      if (surface) {
        ifaceLines.push(
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
        ifaceLines.push(
          `  ${methodName}(setup: (b: ${surface.builderName}) => void): ${builderName};`,
        );
      }
    }

    ifaceLines.push('}');

    // ─── Resolve peer import collisions ONLY in interface body ──────────
    let ifaceBody = ifaceLines.join('\n');
    const ownSymbols = new Set([type.dslSymbolName, builderName]);
    const allPeerRefs = this.collectAllPeerRefs(type);
    const usedPeerRefs = filterUsedPeerRefs(allPeerRefs, ifaceBody);
    const { refs: resolvedPeerRefs, body: resolvedIfaceBody } = resolvePeerNameCollisions(
      usedPeerRefs,
      ownSymbols,
      ifaceBody,
    );
    ifaceBody = resolvedIfaceBody;

    // ─── TypeMetadata + Factory + Enums (no peer ref replacement here) ──
    const restLines: string[] = [];
    restLines.push('');
    const metaConstName = `${type.dslSymbolName.toUpperCase()}_META`;
    this.emitTypeMetadata(metaConstName, type, restLines);
    restLines.push('');

    restLines.push(`export function ${type.dslSymbolName}(): ${builderName} {`);
    const factoryLine = `  return createFluentBuilder('${type.qmlName}', ${metaConstName}) as unknown as ${builderName};`;
    if (factoryLine.length > 100) {
      restLines.push('  return createFluentBuilder(');
      restLines.push(`    '${type.qmlName}',`);
      restLines.push(`    ${metaConstName},`);
      restLines.push(`  ) as unknown as ${builderName};`);
    } else {
      restLines.push(factoryLine);
    }
    restLines.push('}');

    if (hasEnums) {
      restLines.push('');
      this.emitEnumNamespace(type.dslSymbolName, allEnums, restLines);
    }

    // ─── Build imports and header ───────────────────────────────────────
    const codeBody = `${ifaceBody}\n${restLines.join('\n')}`;
    const runtimeImports = filterUsedImports(this.mapper.getRequiredRuntimeImports(), codeBody);

    const importSection = this.buildCreatableImportSection(
      runtimeImports,
      resolvedPeerRefs,
      hasEnums,
      type.moduleUri,
    );
    const header = this.buildHeader(type.dslSymbolName, importSection);

    return `${header}\n${codeBody}\n`;
  }

  private emitSingleton(type: AnalyzedType): string {
    this.mapper.resetImports();
    const lines: string[] = [];
    const interfaceName = `${type.dslSymbolName}Instance`;
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
      lines.push(`export function ${type.dslSymbolName}(): ${interfaceName} {`);
      lines.push(`  return {} as ${interfaceName};`);
      lines.push('}');
      lines.push('');
      this.emitEnumNamespace(type.dslSymbolName, allEnums, lines);
    } else {
      // Simple const for singletons without enums
      lines.push(`export const ${type.dslSymbolName} = {} as ${interfaceName};`);
    }

    const codeBody = lines.join('\n');
    const runtimeImports = filterUsedImports(this.mapper.getRequiredRuntimeImports(), codeBody);
    const peerRefs = filterUsedPeerRefs(this.collectAllPeerRefs(type), codeBody);
    const importSection = this.buildSingletonImportSection(
      runtimeImports,
      peerRefs,
      hasEnums,
      type.moduleUri,
    );
    const header = this.buildHeader(type.dslSymbolName, importSection);

    return `${header}\n${codeBody}\n`;
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

  /** Emit TypeMetadata constant for Proxy-based runtime dispatch */
  private emitTypeMetadata(constName: string, type: AnalyzedType, lines: string[]): void {
    const allProps = [...type.ownProperties, ...type.inheritedProperties];
    const allSignals = [...type.ownSignals, ...type.inheritedSignals];

    lines.push(`const ${constName}: TypeMetadata = {`);
    lines.push(`  typeName: '${type.qmlName}',`);

    // Properties (writable only)
    lines.push('  properties: [');
    for (const prop of sortedByName(allProps)) {
      if (prop.readonly) continue;
      lines.push(`    { name: '${prop.name}', hasValue: true, hasBinding: true },`);
    }
    lines.push('  ],');

    // Signals
    lines.push('  signals: [');
    for (const sig of sortedByName(allSignals)) {
      const handlerName = `on${capitalize(sig.name)}`;
      lines.push(`    { handlerName: '${handlerName}', paramCount: ${sig.parameters.length} },`);
    }
    lines.push('  ],');

    // Grouped
    const groupedEntries: string[] = [];
    for (const ref of type.groupedProperties) {
      const surface = this.analyzed.groupedSurfaces.get(ref.surfaceQualifiedName);
      if (!surface) continue;
      const entry: string[] = [];
      entry.push('    {');
      entry.push(`      methodName: '${ref.propertyName}',`);
      entry.push(`      groupName: '${ref.propertyName}',`);
      entry.push('      properties: [');
      for (const p of surface.properties) {
        if (p.readonly) continue;
        entry.push(`        { name: '${p.name}', hasValue: true, hasBinding: true },`);
      }
      entry.push('      ],');
      entry.push('    },');
      groupedEntries.push(entry.join('\n'));
    }
    if (groupedEntries.length > 0) {
      lines.push('  grouped: [');
      for (const e of groupedEntries) lines.push(e);
      lines.push('  ],');
    } else {
      lines.push('  grouped: [],');
    }

    // Attached
    const attachedEntries: string[] = [];
    const usedNames = new Set<string>();
    for (const prop of sortedByName(allProps)) {
      if (!prop.readonly) usedNames.add(safeName(prop.name));
    }
    for (const ref of type.groupedProperties) {
      usedNames.add(ref.propertyName);
    }
    for (const ref of type.attachedTypes) {
      const surface = this.analyzed.attachedSurfaces.get(ref.attachedQualifiedName);
      if (!surface) continue;
      let methodName = ref.methodName;
      if (usedNames.has(methodName)) {
        methodName = `${methodName}Attached`;
      }
      const entry: string[] = [];
      entry.push('    {');
      entry.push(`      methodName: '${methodName}',`);
      entry.push(`      attachedTypeName: '${surface.ownerQmlName}',`);
      entry.push('      properties: [');
      for (const p of surface.properties) {
        if (p.readonly) continue;
        entry.push(`        { name: '${p.name}', hasValue: true, hasBinding: true },`);
      }
      entry.push('      ],');
      entry.push('      signals: [');
      for (const sig of surface.signals) {
        const handlerName = `on${capitalize(sig.name)}`;
        entry.push(
          `        { handlerName: '${handlerName}', paramCount: ${sig.parameters.length} },`,
        );
      }
      entry.push('      ],');
      entry.push('    },');
      attachedEntries.push(entry.join('\n'));
    }
    if (attachedEntries.length > 0) {
      lines.push('  attached: [');
      for (const e of attachedEntries) lines.push(e);
      lines.push('  ],');
    } else {
      lines.push('  attached: [],');
    }

    // Default property
    if (type.defaultProperty) {
      lines.push(`  defaultProperty: '${type.defaultProperty}',`);
    }

    lines.push('};');
  }

  /**
   * Collect all peer type refs: from TypeMapper (property types) +
   * grouped/attached surface builders used in the interface.
   * Filter out self-references.
   */
  private collectAllPeerRefs(type: AnalyzedType): PeerTypeRef[] {
    const selfNames = new Set<string>();
    selfNames.add(`${type.dslSymbolName}Builder`);
    selfNames.add(`${type.dslSymbolName}Instance`);

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
        const surfaceType = this.analyzed.allTypes.get(ref.surfaceQualifiedName);
        const moduleUri = surfaceType?.moduleUri ?? type.moduleUri;
        allRefs.set(surface.builderName, {
          tsName: surface.builderName,
          qmlName: surface.qmlName,
          emitFileName: surfaceType?.emitFileName ?? surface.qmlName,
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
          emitFileName: surfaceType?.emitFileName ?? surface.ownerQmlName,
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
    const valueImports = ['createFluentBuilder'];
    if (needsEnumToken) {
      valueImports.push('createEnumToken');
    }
    valueImports.sort();

    // Type-only imports (used only in type positions)
    const typeImports = ['QmlObjectBuilder', 'TypeMetadata', ...runtimeImports];
    typeImports.sort();

    lines.push(`import type { ${typeImports.join(', ')} } from '../../runtime/index.js';`);
    lines.push(`import { ${valueImports.join(', ')} } from '../../runtime/index.js';`);

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

    if (runtimeImports.length > 0) {
      const sorted = [...runtimeImports].sort();
      lines.push(`import type { ${sorted.join(', ')} } from '../../runtime/index.js';`);
    }

    if (needsEnumToken) {
      lines.push(`import { createEnumToken } from '../../runtime/index.js';`);
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
  private emitPeerImports(
    lines: string[],
    peerRefs: (PeerTypeRef & { originalName?: string })[],
    currentModule: string,
  ): void {
    if (peerRefs.length === 0) return;

    // Group by source file
    const byFile = new Map<string, { tsName: string; originalName?: string }[]>();
    for (const ref of peerRefs) {
      const moduleDir = this.moduleDirs.get(ref.moduleUri) ?? ref.moduleUri;
      let relativePath: string;
      if (ref.moduleUri === currentModule) {
        relativePath = `./${ref.emitFileName}.js`;
      } else {
        relativePath = `../${moduleDir}/${ref.emitFileName}.js`;
      }
      const existing = byFile.get(relativePath);
      const entry = { tsName: ref.tsName, originalName: ref.originalName };
      if (existing) {
        existing.push(entry);
      } else {
        byFile.set(relativePath, [entry]);
      }
    }

    // Sort by file path for determinism
    const sortedPaths = [...byFile.keys()].sort();
    for (const filePath of sortedPaths) {
      const entries = byFile.get(filePath)!.sort((a, b) => a.tsName.localeCompare(b.tsName));
      const importNames = entries.map((e) =>
        e.originalName ? `${e.originalName} as ${e.tsName}` : e.tsName,
      );
      lines.push(`import type { ${importNames.join(', ')} } from '${filePath}';`);
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

/** Filter runtime import names to only those actually used in the code body */
function filterUsedImports(imports: string[], codeBody: string): string[] {
  return imports.filter((name) => {
    // Use word-boundary check to avoid false positives
    const pattern = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
    return pattern.test(codeBody);
  });
}

function filterUsedPeerRefs(peerRefs: PeerTypeRef[], codeBody: string): PeerTypeRef[] {
  return peerRefs.filter((ref) => {
    const pattern = new RegExp(`\\b${ref.tsName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
    return pattern.test(codeBody);
  });
}

/**
 * Resolve name collisions between peer import names and this type's own exported symbols.
 * Returns the alias map (original name → alias) and rewritten code body.
 */
function resolvePeerNameCollisions(
  peerRefs: PeerTypeRef[],
  ownSymbols: Set<string>,
  codeBody: string,
): { refs: PeerTypeRef[]; body: string } {
  let body = codeBody;

  for (const ref of peerRefs) {
    if (ownSymbols.has(ref.tsName)) {
      const alias = `${ref.tsName}_Ref`;
      // Replace usages in code body with the alias
      const pattern = new RegExp(`\\b${ref.tsName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      body = body.replace(pattern, alias);
    }
  }

  // Create new refs with aliased names
  const resolvedRefs = peerRefs.map((ref) => {
    if (ownSymbols.has(ref.tsName)) {
      return { ...ref, tsName: `${ref.tsName}_Ref`, originalName: ref.tsName };
    }
    return ref;
  });

  return { refs: resolvedRefs, body };
}
