import type { TypeMapper } from './type-mapper.js';
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

  constructor(analyzed: AnalyzedRegistry, mapper: TypeMapper) {
    this.analyzed = analyzed;
    this.mapper = mapper;
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
  emitGroupedSurfaceCode(surface: GroupedSurface): string {
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

    // Imports
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const importSection = this.buildRuntimeImportSection(runtimeImports, false);
    const header = this.buildHeader(`Grouped surface: ${surface.qmlName}`, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  /** Emit an attached surface builder file */
  emitAttachedSurfaceCode(surface: AttachedSurface): string {
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

    // Imports
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const importSection = this.buildRuntimeImportSection(runtimeImports, false);
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

    // Attached type methods
    for (const ref of type.attachedTypes) {
      const surface = this.analyzed.attachedSurfaces.get(ref.attachedQualifiedName);
      if (surface) {
        lines.push(
          `  ${ref.methodName}(setup: (b: ${surface.builderName}) => void): ${builderName};`,
        );
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
      lines.push(`export namespace ${type.qmlName} {`);
      for (const en of sortedByName(allEnums)) {
        for (const member of en.members) {
          lines.push(
            `  export const ${member.name} = createEnumToken('${type.qmlName}', '${en.name}', '${member.name}');`,
          );
        }
      }
      lines.push('}');
    }

    // ─── Build imports and header ───────────────────────────────────────
    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const importSection = this.buildRuntimeImportSection(runtimeImports, hasEnums);
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

    // Const declaration
    lines.push(`export const ${type.qmlName} = {} as ${interfaceName};`);

    // Enum namespace
    if (hasEnums) {
      lines.push('');
      lines.push(`export namespace ${type.qmlName} {`);
      for (const en of sortedByName(allEnums)) {
        for (const member of en.members) {
          lines.push(
            `  export const ${member.name} = createEnumToken('${type.qmlName}', '${en.name}', '${member.name}');`,
          );
        }
      }
      lines.push('}');
    }

    const runtimeImports = this.mapper.getRequiredRuntimeImports();
    const importSection = this.buildRuntimeImportSection(runtimeImports, hasEnums);
    const header = this.buildHeader(type.qmlName, importSection);

    return `${header}\n${lines.join('\n')}\n`;
  }

  private emitGroupedSurfaceFile(type: AnalyzedType): string {
    const surface = this.analyzed.groupedSurfaces.get(type.qualifiedName);
    if (surface) {
      return this.emitGroupedSurfaceCode(surface);
    }
    return this.emitCreatable(type);
  }

  private emitAttachedTypeFile(type: AnalyzedType): string {
    const surface = this.analyzed.attachedSurfaces.get(type.qualifiedName);
    if (surface) {
      return this.emitAttachedSurfaceCode(surface);
    }
    return this.emitCreatable(type);
  }

  private formatSignalParams(sig: AnalyzedSignal): string {
    if (sig.parameters.length === 0) {
      return '() => void';
    }
    const params = sig.parameters
      .map((p) => `${safeName(p.name)}: ${this.mapper.mapType(p.type)}`)
      .join(', ');
    return `(${params}) => void`;
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

  private buildRuntimeImportSection(runtimeImports: string[], needsEnumToken: boolean): string {
    const lines: string[] = [];

    // Runtime builder import
    const builderImports = ['DslBuilderImpl', 'QmlObjectBuilder'];
    if (needsEnumToken) {
      builderImports.push('createEnumToken');
    }
    // Add runtime type imports
    const allImports = [...builderImports, ...runtimeImports];
    allImports.sort();

    lines.push(`import { ${allImports.join(', ')} } from '../../runtime/index.js';`);

    return lines.join('\n');
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
