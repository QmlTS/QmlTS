import type { QmlRegistry, QmlType, RegistryQueryInterface } from '../../registry/types.js';
import type {
  AnalyzedEnum,
  AnalyzedMethod,
  AnalyzedModule,
  AnalyzedParameter,
  AnalyzedProperty,
  AnalyzedRegistry,
  AnalyzedSignal,
  AnalyzedType,
  AttachedSurface,
  AttachedTypeRef,
  EnumResolution,
  GroupedPropertyRef,
  GroupedSurface,
  NameConflict,
  TypeClassification,
} from './types.js';

/**
 * Analyze a QmlRegistry into the generator's intermediate representation.
 * Classifies types, resolves inheritance, detects grouped/attached patterns.
 * Output is fully deterministic (sorted modules, sorted types).
 */
export function analyze(
  registry: QmlRegistry,
  query: RegistryQueryInterface,
  moduleWhitelist?: string[],
): AnalyzedRegistry {
  const allRegistryTypes = [...registry.types, ...registry.builtins];

  // Determine which modules to process
  const targetModuleUris = moduleWhitelist
    ? registry.modules.filter((m) => moduleWhitelist.includes(m.uri)).map((m) => m.uri)
    : registry.modules.map((m) => m.uri);

  const targetModuleSet = new Set(targetModuleUris);

  // Get types belonging to target modules
  const targetTypes = allRegistryTypes.filter((t) => targetModuleSet.has(t.moduleUri));

  // ─── Pass 1: identify attached types ──────────────────────────────────
  // attached type qualified name → owner type(s)
  const attachedTypeOwners = new Map<string, QmlType[]>();
  for (const type of allRegistryTypes) {
    if (type.attachedType) {
      const existing = attachedTypeOwners.get(type.attachedType);
      if (existing) {
        existing.push(type);
      } else {
        attachedTypeOwners.set(type.attachedType, [type]);
      }
    }
  }

  // ─── Pass 2: identify grouped surfaces ────────────────────────────────
  // A grouped surface is a type with:
  //   - no QML exports (not independently usable)
  //   - accessSemantics === 'reference'
  //   - has writable properties
  //   - referenced by readonly pointer properties from other types
  const groupedCandidateProps = new Map<string, { propName: string; ownerQN: string }[]>();
  for (const type of allRegistryTypes) {
    for (const prop of type.properties) {
      if (!prop.readonly || !prop.pointer) continue;
      const target = query.findByQualifiedName(prop.type);
      if (!target) continue;
      if (target.accessSemantics !== 'reference') continue;
      if (target.exports.length > 0) continue; // has QML name → not a grouped surface
      const writableProps = target.properties.filter((p) => !p.readonly);
      if (writableProps.length === 0) continue;
      const existing = groupedCandidateProps.get(target.qualifiedName);
      if (existing) {
        existing.push({ propName: prop.name, ownerQN: type.qualifiedName });
      } else {
        groupedCandidateProps.set(target.qualifiedName, [
          { propName: prop.name, ownerQN: type.qualifiedName },
        ]);
      }
    }
  }

  const groupedSurfaceSet = new Set(groupedCandidateProps.keys());

  // ─── Pass 3: classify every type ──────────────────────────────────────
  function classifyType(type: QmlType): TypeClassification {
    // Singletons first
    if (type.singleton) return 'singleton';

    // Attached types
    if (attachedTypeOwners.has(type.qualifiedName)) return 'attached-type';

    // Grouped surfaces
    if (groupedSurfaceSet.has(type.qualifiedName)) return 'grouped-surface';

    // Creatable objects (must have QML exports or a usable qmlName)
    if (type.creatable && type.accessSemantics === 'reference' && type.exports.length > 0) {
      return 'creatable-object';
    }

    // Value types
    if (type.accessSemantics === 'value') return 'value-type';

    // Namespace types
    if (type.accessSemantics === 'none') return 'internal';

    // Non-creatable reference types (abstract bases, etc.)
    if (type.accessSemantics === 'reference' && !type.creatable) {
      return 'non-creatable';
    }

    // Creatable but no exports → internal
    if (type.exports.length === 0) return 'internal';

    return 'non-creatable';
  }

  // ─── Build grouped surfaces map ───────────────────────────────────────
  const groupedSurfaces = new Map<string, GroupedSurface>();
  for (const [qualifiedName, refs] of groupedCandidateProps) {
    const type = query.findByQualifiedName(qualifiedName);
    if (!type) continue;

    // Derive builder name from first property name reference
    const primaryPropName = refs[0]!.propName;
    const builderName = `${primaryPropName.charAt(0).toUpperCase() + primaryPropName.slice(1)}Builder`;

    const properties = resolveProperties(type, query);
    const enums = resolveEnums(type, query);

    groupedSurfaces.set(qualifiedName, {
      qualifiedName,
      qmlName: type.qmlName,
      builderName,
      properties: properties.own,
      enums: enums.own,
    });
  }

  // ─── Build attached surfaces map ──────────────────────────────────────
  const attachedSurfaces = new Map<string, AttachedSurface>();
  for (const [attachedQN, owners] of attachedTypeOwners) {
    const attachedType = query.findByQualifiedName(attachedQN);
    if (!attachedType) continue;

    const primaryOwner = owners[0]!;
    const ownerQmlName = primaryOwner.qmlName;
    const methodName = ownerQmlName.charAt(0).toLowerCase() + ownerQmlName.slice(1);
    const builderName = `${ownerQmlName}AttachedBuilder`;

    const properties = resolveProperties(attachedType, query);
    const signals = resolveSignals(attachedType, query);
    const enums = resolveEnums(attachedType, query);

    attachedSurfaces.set(attachedQN, {
      qualifiedName: attachedQN,
      ownerQmlName,
      methodName,
      builderName,
      properties: [...properties.own, ...properties.inherited],
      signals: [...signals.own, ...signals.inherited],
      enums: [...enums.own, ...enums.inherited],
    });
  }

  // ─── Pass 4: build analyzed types ─────────────────────────────────────
  const allAnalyzedTypes = new Map<string, AnalyzedType>();

  for (const type of targetTypes) {
    const classification = classifyType(type);
    const properties = resolveProperties(type, query);
    const signals = resolveSignals(type, query);
    const methods = resolveMethods(type, query);
    const enums = resolveEnums(type, query);

    // Grouped property refs: find readonly pointer properties whose
    // target type is a known grouped surface
    const groupedProperties: GroupedPropertyRef[] = [];
    const allProps = query.getAllProperties(type.qualifiedName, true);
    for (const prop of allProps) {
      if (!prop.readonly || !prop.pointer) continue;
      if (groupedSurfaces.has(prop.type)) {
        groupedProperties.push({
          propertyName: prop.name,
          surfaceQualifiedName: prop.type,
        });
      }
    }

    // Attached type refs: attached types from the module scope
    const attachedTypes: AttachedTypeRef[] = [];
    for (const [attachedQN, surface] of attachedSurfaces) {
      // Check if the attached type's owner is in the same module or imported
      const owners = attachedTypeOwners.get(attachedQN);
      if (owners?.some((o) => o.moduleUri === type.moduleUri)) {
        attachedTypes.push({
          methodName: surface.methodName,
          attachedQualifiedName: attachedQN,
        });
      }
    }

    const analyzed: AnalyzedType = {
      qualifiedName: type.qualifiedName,
      qmlName: type.qmlName,
      moduleUri: type.moduleUri,
      classification,
      baseType: type.baseType,
      defaultProperty: type.defaultProperty,
      ownProperties: properties.own,
      inheritedProperties: properties.inherited,
      ownSignals: signals.own,
      inheritedSignals: signals.inherited,
      ownMethods: methods.own,
      inheritedMethods: methods.inherited,
      ownEnums: enums.own,
      inheritedEnums: enums.inherited,
      groupedProperties: dedupeGroupedRefs(groupedProperties),
      attachedTypes: dedupeAttachedRefs(attachedTypes),
    };

    allAnalyzedTypes.set(type.qualifiedName, analyzed);
  }

  // ─── Build modules ────────────────────────────────────────────────────
  const moduleMap = new Map<string, AnalyzedType[]>();
  for (const [_, analyzed] of allAnalyzedTypes) {
    const existing = moduleMap.get(analyzed.moduleUri);
    if (existing) {
      existing.push(analyzed);
    } else {
      moduleMap.set(analyzed.moduleUri, [analyzed]);
    }
  }

  const modules: AnalyzedModule[] = [];
  for (const uri of targetModuleUris) {
    const types = moduleMap.get(uri) ?? [];
    types.sort((a, b) => cmp(a.qmlName, b.qmlName));
    modules.push({
      uri,
      types,
      directoryName: uri,
    });
  }
  modules.sort((a, b) => cmp(a.uri, b.uri));

  // Filter out empty modules
  const nonEmptyModules = modules.filter((m) => m.types.length > 0);

  // ─── Detect name conflicts ────────────────────────────────────────────
  const nameConflicts = detectNameConflicts(allAnalyzedTypes);

  // ─── Build global enum index ─────────────────────────────────────────
  const enumIndex = buildEnumIndex(allRegistryTypes);

  return {
    qtVersion: registry.qtVersion,
    modules: nonEmptyModules,
    allTypes: allAnalyzedTypes,
    nameConflicts,
    groupedSurfaces,
    attachedSurfaces,
    enumIndex,
  };
}

// ─── Internal helpers ──────────────────────────────────────────────────

/** Simple string comparison for deterministic sorting (no locale dependency) */
function cmp(a: string, b: string): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function resolveProperties(
  type: QmlType,
  query: RegistryQueryInterface,
): { own: AnalyzedProperty[]; inherited: AnalyzedProperty[] } {
  const all = query.getAllProperties(type.qualifiedName, true);
  const own: AnalyzedProperty[] = [];
  const inherited: AnalyzedProperty[] = [];
  const seenNames = new Set<string>();

  for (const prop of all) {
    if (seenNames.has(prop.name)) continue;
    seenNames.add(prop.name);

    const analyzed: AnalyzedProperty = {
      name: prop.name,
      qmlType: prop.type,
      cppType: prop.cppType,
      readonly: prop.readonly,
      list: prop.list,
      required: prop.required,
      hasNotify: prop.hasNotify,
      declaredBy: prop.declaredBy,
    };

    if (prop.declaredBy === type.qualifiedName) {
      own.push(analyzed);
    } else {
      inherited.push(analyzed);
    }
  }

  own.sort((a, b) => cmp(a.name, b.name));
  inherited.sort((a, b) => cmp(a.name, b.name));
  return { own, inherited };
}

function resolveSignals(
  type: QmlType,
  query: RegistryQueryInterface,
): { own: AnalyzedSignal[]; inherited: AnalyzedSignal[] } {
  const all = query.getAllSignals(type.qualifiedName, true);
  const own: AnalyzedSignal[] = [];
  const inherited: AnalyzedSignal[] = [];
  const seenNames = new Set<string>();

  for (const sig of all) {
    if (seenNames.has(sig.name)) continue;
    seenNames.add(sig.name);

    const analyzed: AnalyzedSignal = {
      name: sig.name,
      parameters: sig.parameters.map(toAnalyzedParam),
      declaredBy: sig.declaredBy,
    };

    if (sig.declaredBy === type.qualifiedName) {
      own.push(analyzed);
    } else {
      inherited.push(analyzed);
    }
  }

  own.sort((a, b) => cmp(a.name, b.name));
  inherited.sort((a, b) => cmp(a.name, b.name));
  return { own, inherited };
}

function resolveMethods(
  type: QmlType,
  query: RegistryQueryInterface,
): { own: AnalyzedMethod[]; inherited: AnalyzedMethod[] } {
  const all = query.getAllMethods(type.qualifiedName, true);
  const own: AnalyzedMethod[] = [];
  const inherited: AnalyzedMethod[] = [];
  const seenNames = new Set<string>();

  for (const meth of all) {
    if (seenNames.has(meth.name)) continue;
    seenNames.add(meth.name);

    const analyzed: AnalyzedMethod = {
      name: meth.name,
      returnType: meth.returnType,
      parameters: meth.parameters.map(toAnalyzedParam),
      declaredBy: meth.declaredBy,
    };

    if (meth.declaredBy === type.qualifiedName) {
      own.push(analyzed);
    } else {
      inherited.push(analyzed);
    }
  }

  own.sort((a, b) => cmp(a.name, b.name));
  inherited.sort((a, b) => cmp(a.name, b.name));
  return { own, inherited };
}

function resolveEnums(
  type: QmlType,
  query: RegistryQueryInterface,
): { own: AnalyzedEnum[]; inherited: AnalyzedEnum[] } {
  const all = query.getAllEnums(type.qualifiedName, true);
  const own: AnalyzedEnum[] = [];
  const inherited: AnalyzedEnum[] = [];
  const seenNames = new Set<string>();

  for (const en of all) {
    if (seenNames.has(en.name)) continue;
    seenNames.add(en.name);

    const analyzed: AnalyzedEnum = {
      name: en.name,
      isFlag: en.isFlag,
      isScoped: en.isScoped,
      alias: en.alias,
      members: en.values.map((v) => ({
        name: v.name,
        value: v.value,
      })),
      declaredBy: en.declaredBy,
    };

    if (en.declaredBy === type.qualifiedName) {
      own.push(analyzed);
    } else {
      inherited.push(analyzed);
    }
  }

  own.sort((a, b) => cmp(a.name, b.name));
  inherited.sort((a, b) => cmp(a.name, b.name));
  return { own, inherited };
}

function toAnalyzedParam(p: { name: string; type: string }): AnalyzedParameter {
  return { name: p.name, type: p.type };
}

function dedupeGroupedRefs(refs: GroupedPropertyRef[]): GroupedPropertyRef[] {
  const seen = new Set<string>();
  const result: GroupedPropertyRef[] = [];
  for (const ref of refs) {
    const key = ref.propertyName;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(ref);
  }
  return result.sort((a, b) => cmp(a.propertyName, b.propertyName));
}

function dedupeAttachedRefs(refs: AttachedTypeRef[]): AttachedTypeRef[] {
  const seen = new Set<string>();
  const result: AttachedTypeRef[] = [];
  for (const ref of refs) {
    const key = ref.attachedQualifiedName;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(ref);
  }
  return result.sort((a, b) => cmp(a.methodName, b.methodName));
}

function buildEnumIndex(allTypes: QmlType[]): Map<string, EnumResolution> {
  const index = new Map<string, EnumResolution>();
  const nameOwners = new Map<string, { qn: string; qmlName: string; moduleUri: string }[]>();

  for (const type of allTypes) {
    for (const en of type.enums) {
      const entry = {
        qn: type.qualifiedName,
        qmlName: type.qmlName,
        moduleUri: type.moduleUri,
      };

      const existing = nameOwners.get(en.name);
      if (existing) {
        existing.push(entry);
      } else {
        nameOwners.set(en.name, [entry]);
      }

      if (en.alias && en.alias !== en.name) {
        const aliasExisting = nameOwners.get(en.alias);
        if (aliasExisting) {
          aliasExisting.push(entry);
        } else {
          nameOwners.set(en.alias, [entry]);
        }
      }
    }
  }

  for (const [name, owners] of nameOwners) {
    const uniqueQNs = [...new Set(owners.map((o) => o.qn))];
    const isAmbiguous = uniqueQNs.length > 1;
    const primary = owners[0]!;

    index.set(name, {
      ownerQualifiedName: primary.qn,
      ownerQmlName: primary.qmlName,
      enumName: name,
      moduleUri: primary.moduleUri,
      ambiguous: isAmbiguous,
    });
  }

  return index;
}

function detectNameConflicts(allTypes: Map<string, AnalyzedType>): NameConflict[] {
  const nameToTypes = new Map<string, AnalyzedType[]>();

  for (const [_, type] of allTypes) {
    if (type.classification !== 'creatable-object' && type.classification !== 'singleton') {
      continue;
    }
    const existing = nameToTypes.get(type.qmlName);
    if (existing) {
      existing.push(type);
    } else {
      nameToTypes.set(type.qmlName, [type]);
    }
  }

  const conflicts: NameConflict[] = [];
  for (const [name, types] of nameToTypes) {
    const modules = [...new Set(types.map((t) => t.moduleUri))];
    if (modules.length > 1) {
      conflicts.push({
        name,
        modules,
        qualifiedNames: types.map((t) => t.qualifiedName),
      });
    }
  }

  return conflicts.sort((a, b) => cmp(a.name, b.name));
}
