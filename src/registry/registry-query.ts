import type {
  QmlRegistry,
  QmlModule,
  QmlType,
  QmlProperty,
  ResolvedProperty,
  ResolvedSignal,
  ResolvedMethod,
  ResolvedEnum,
  RegistryQueryInterface,
} from './types.js';

export class RegistryQuery implements RegistryQueryInterface {
  public readonly registry: QmlRegistry;

  private readonly qualifiedNameIndex: Map<string, QmlType>;
  private readonly qmlNameIndex: Map<string, QmlType[]>;
  private readonly moduleIndex: Map<string, QmlModule>;
  private readonly subclassIndex: Map<string, string[]>;

  constructor(registry: QmlRegistry) {
    this.registry = registry;
    this.qualifiedNameIndex = new Map();
    this.qmlNameIndex = new Map();
    this.moduleIndex = new Map();
    this.subclassIndex = new Map();

    this.buildIndexes();
  }

  private buildIndexes(): void {
    // Index modules
    for (const mod of this.registry.modules) {
      this.moduleIndex.set(mod.uri, mod);
    }

    // Index all types (regular + builtins)
    const allTypes = [...this.registry.types, ...this.registry.builtins];

    for (const type of allTypes) {
      this.qualifiedNameIndex.set(type.qualifiedName, type);

      const existing = this.qmlNameIndex.get(type.qmlName);
      if (existing) {
        existing.push(type);
      } else {
        this.qmlNameIndex.set(type.qmlName, [type]);
      }

      // Build subclass index
      if (type.baseType) {
        const children = this.subclassIndex.get(type.baseType);
        if (children) {
          children.push(type.qualifiedName);
        } else {
          this.subclassIndex.set(type.baseType, [type.qualifiedName]);
        }
      }
    }
  }

  private static escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getModuleUris(): string[] {
    return [...this.moduleIndex.keys()];
  }

  getModule(uri: string): QmlModule | undefined {
    return this.moduleIndex.get(uri);
  }

  getModuleTypes(uri: string): QmlType[] {
    return this.registry.types.filter((t) => t.moduleUri === uri);
  }

  getModuleDependencies(uri: string, transitive = false): string[] {
    const mod = this.moduleIndex.get(uri);
    if (!mod) return [];

    if (!transitive) {
      const deps = new Set<string>();
      for (const imp of mod.imports) deps.add(imp.module);
      for (const dep of mod.dependencies) deps.add(dep.module);
      return [...deps];
    }

    // Transitive: BFS
    const visited = new Set<string>();
    const queue: string[] = [uri];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current)) continue;
      visited.add(current);

      const currentMod = this.moduleIndex.get(current);
      if (!currentMod) continue;

      for (const imp of currentMod.imports) {
        if (!visited.has(imp.module)) queue.push(imp.module);
      }
      for (const dep of currentMod.dependencies) {
        if (!visited.has(dep.module)) queue.push(dep.module);
      }
    }

    // Remove the starting module itself
    visited.delete(uri);
    return [...visited];
  }

  findByQualifiedName(qualifiedName: string): QmlType | undefined {
    return this.qualifiedNameIndex.get(qualifiedName);
  }

  findByQmlName(qmlName: string, moduleUri?: string): QmlType | undefined {
    const types = this.qmlNameIndex.get(qmlName);
    if (!types || types.length === 0) return undefined;

    if (moduleUri !== undefined) {
      return types.find((t) => t.moduleUri === moduleUri);
    }

    return types[0];
  }

  searchTypes(pattern: string): QmlType[] {
    const regexStr = '^'
      + pattern
        .split('*')
        .map((segment) => RegistryQuery.escapeRegExp(segment))
        .join('.*')
      + '$';
    const regex = new RegExp(regexStr);
    const allTypes = [...this.registry.types, ...this.registry.builtins];
    return allTypes.filter((t) => regex.test(t.qmlName));
  }

  getInheritanceChain(qualifiedName: string): QmlType[] {
    const chain: QmlType[] = [];
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return chain;

    let current = type.baseType;
    const visited = new Set<string>([qualifiedName]);

    while (current) {
      if (visited.has(current)) break; // circular reference guard
      visited.add(current);
      const parent = this.qualifiedNameIndex.get(current);
      if (!parent) break;
      chain.push(parent);
      current = parent.baseType;
    }

    return chain;
  }

  getDirectSubclasses(qualifiedName: string): QmlType[] {
    const childNames = this.subclassIndex.get(qualifiedName);
    if (!childNames) return [];

    const result: QmlType[] = [];
    for (const name of childNames) {
      const type = this.qualifiedNameIndex.get(name);
      if (type) result.push(type);
    }
    return result;
  }

  isSubtypeOf(a: string, b: string): boolean {
    if (a === b) return false;

    const type = this.qualifiedNameIndex.get(a);
    if (!type) return false;

    let current = type.baseType;
    const visited = new Set<string>([a]);

    while (current) {
      if (current === b) return true;
      if (visited.has(current)) break;
      visited.add(current);
      const parent = this.qualifiedNameIndex.get(current);
      if (!parent) break;
      current = parent.baseType;
    }

    return false;
  }

  getAllProperties(qualifiedName: string, inherited = true): ResolvedProperty[] {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return [];

    // Own properties
    const result: ResolvedProperty[] = type.properties.map((p) => ({
      ...p,
      declaredBy: qualifiedName,
      overridden: false,
    }));

    if (!inherited) return result;

    const chain = this.getInheritanceChain(qualifiedName);
    for (const ancestor of chain) {
      for (const prop of ancestor.properties) {
        result.push({
          ...prop,
          declaredBy: ancestor.qualifiedName,
          overridden: false,
        });
      }
    }

    // Mark properties that are overridden by descendants
    this.markOverriddenProperties(result);

    return result;
  }

  private markOverriddenProperties(properties: ResolvedProperty[]): void {
    const seen = new Map<string, number>();
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i]!;
      const existing = seen.get(prop.name);
      if (existing !== undefined) {
        // Earlier entry (from a more derived class) overrides this one
        properties[i] = { ...prop, overridden: true };
      } else {
        seen.set(prop.name, i);
      }
    }
  }

  getAllSignals(qualifiedName: string, inherited = true): ResolvedSignal[] {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return [];

    const result: ResolvedSignal[] = type.signals.map((s) => ({
      ...s,
      declaredBy: qualifiedName,
    }));

    if (!inherited) return result;

    const ownNames = new Set(result.map((s) => s.name));
    const chain = this.getInheritanceChain(qualifiedName);
    for (const ancestor of chain) {
      for (const sig of ancestor.signals) {
        if (ownNames.has(sig.name)) continue;
        ownNames.add(sig.name);
        result.push({ ...sig, declaredBy: ancestor.qualifiedName });
      }
    }

    return result;
  }

  getAllMethods(qualifiedName: string, inherited = true): ResolvedMethod[] {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return [];

    const result: ResolvedMethod[] = type.methods.map((m) => ({
      ...m,
      declaredBy: qualifiedName,
    }));

    if (!inherited) return result;

    const ownNames = new Set(result.map((m) => m.name));
    const chain = this.getInheritanceChain(qualifiedName);
    for (const ancestor of chain) {
      for (const meth of ancestor.methods) {
        if (ownNames.has(meth.name)) continue;
        ownNames.add(meth.name);
        result.push({ ...meth, declaredBy: ancestor.qualifiedName });
      }
    }

    return result;
  }

  getAllEnums(qualifiedName: string, inherited = true): ResolvedEnum[] {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return [];

    const result: ResolvedEnum[] = type.enums.map((e) => ({
      ...e,
      declaredBy: qualifiedName,
    }));

    if (!inherited) return result;

    const ownNames = new Set(result.map((e) => e.name));
    const chain = this.getInheritanceChain(qualifiedName);
    for (const ancestor of chain) {
      for (const en of ancestor.enums) {
        if (ownNames.has(en.name)) continue;
        ownNames.add(en.name);
        result.push({ ...en, declaredBy: ancestor.qualifiedName });
      }
    }

    return result;
  }

  getDefaultProperty(qualifiedName: string): QmlProperty | undefined {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type) return undefined;

    // Check own type first
    if (type.defaultProperty) {
      return type.properties.find((p) => p.name === type.defaultProperty);
    }

    // Walk inheritance chain
    const chain = this.getInheritanceChain(qualifiedName);
    for (const ancestor of chain) {
      if (ancestor.defaultProperty) {
        return ancestor.properties.find((p) => p.name === ancestor.defaultProperty);
      }
    }

    return undefined;
  }

  getAttachedType(qualifiedName: string): QmlType | undefined {
    const type = this.qualifiedNameIndex.get(qualifiedName);
    if (!type?.attachedType) return undefined;

    return this.qualifiedNameIndex.get(type.attachedType);
  }

  getCreatableTypes(moduleUri?: string): QmlType[] {
    let types = this.registry.types;
    if (moduleUri !== undefined) {
      types = types.filter((t) => t.moduleUri === moduleUri);
    }
    return types.filter((t) => t.creatable && t.accessSemantics === 'reference');
  }

  getValueTypes(moduleUri?: string): QmlType[] {
    let types = this.registry.types;
    if (moduleUri !== undefined) {
      types = types.filter((t) => t.moduleUri === moduleUri);
    }
    return types.filter((t) => t.accessSemantics === 'value');
  }

  getSingletonTypes(moduleUri?: string): QmlType[] {
    let types = this.registry.types;
    if (moduleUri !== undefined) {
      types = types.filter((t) => t.moduleUri === moduleUri);
    }
    return types.filter((t) => t.singleton);
  }

  getAttachedTypes(moduleUri?: string): QmlType[] {
    let types = this.registry.types;
    if (moduleUri !== undefined) {
      types = types.filter((t) => t.moduleUri === moduleUri);
    }
    return types.filter((t) => t.attachedType !== undefined);
  }
}
