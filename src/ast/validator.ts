import type {
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
  RegistryQueryLike,
  ValidationDiagnostic,
  ValidationResult,
} from './types.js';
import { DiagnosticCode } from './types.js';
import { walkAst } from './visitor.js';

const MAX_NESTING_DEPTH = 50;

/** Validate the structural correctness of a QML AST (no registry needed). */
export function validateStructure(doc: QmlDocument): ValidationResult {
  const diagnostics: ValidationDiagnostic[] = [];

  // E001: Duplicate IDs
  const ids = new Map<string, number>();
  walkAst(doc, {
    visitIdAssignment(node) {
      const count = ids.get(node.id) ?? 0;
      ids.set(node.id, count + 1);
    },
  });
  for (const [id, count] of ids) {
    if (count > 1) {
      diagnostics.push({
        level: 'error',
        code: DiagnosticCode.DUPLICATE_ID,
        message: `Duplicate id '${id}'`,
        nodeKind: 'IdAssignment',
        context: { id },
      });
    }
  }

  // E002: Invalid ID format (must start with lowercase letter, alphanumeric/underscore only)
  walkAst(doc, {
    visitIdAssignment(node) {
      if (!/^[a-z_][a-zA-Z0-9_]*$/.test(node.id)) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.INVALID_ID_FORMAT,
          message: `Invalid id format '${node.id}': must start with lowercase letter or underscore`,
          nodeKind: 'IdAssignment',
          context: { id: node.id },
        });
      }
    },
  });

  // Per-object structural checks
  checkObjectMembers(doc.rootObject, diagnostics, 1);

  // E007: Invalid import paths
  for (const imp of doc.imports) {
    if (imp.importKind === 'directory' || imp.importKind === 'javascript') {
      if (imp.path !== undefined && imp.path.length === 0) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.INVALID_IMPORT_PATH,
          message: 'Import path cannot be empty',
          nodeKind: 'Import',
        });
      }
    }
  }

  return {
    valid: diagnostics.filter((d) => d.level === 'error').length === 0,
    diagnostics,
  };
}

function checkObjectMembers(
  obj: ObjectDefinitionNode,
  diagnostics: ValidationDiagnostic[],
  depth: number,
): void {
  // E010: Max nesting depth
  if (depth > MAX_NESTING_DEPTH) {
    diagnostics.push({
      level: 'error',
      code: DiagnosticCode.MAX_NESTING_EXCEEDED,
      message: `Object nesting depth ${depth} exceeds maximum of ${MAX_NESTING_DEPTH}`,
      nodeKind: 'ObjectDefinition',
      context: { depth: String(depth), typeName: obj.typeName },
    });
    return;
  }

  // E003: Duplicate property names
  const propNames = new Set<string>();
  // E004: Duplicate signal names
  const signalNames = new Set<string>();

  for (const member of obj.members) {
    if (member.kind === 'PropertyDeclaration' || member.kind === 'PropertyAlias') {
      if (propNames.has(member.name)) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.DUPLICATE_PROPERTY_NAME,
          message: `Duplicate property name '${member.name}'`,
          nodeKind: member.kind,
          context: { name: member.name },
        });
      }
      propNames.add(member.name);
    }

    if (member.kind === 'SignalDeclaration') {
      if (signalNames.has(member.name)) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.DUPLICATE_SIGNAL_NAME,
          message: `Duplicate signal name '${member.name}'`,
          nodeKind: 'SignalDeclaration',
          context: { name: member.name },
        });
      }
      signalNames.add(member.name);
    }

    // E005: Handler name must start with "on"
    if (member.kind === 'SignalHandler') {
      if (
        !member.name.startsWith('on') ||
        member.name.length < 3 ||
        member.name[2] !== member.name[2]!.toUpperCase()
      ) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.INVALID_HANDLER_NAME,
          message: `Signal handler name '${member.name}' must start with 'on' followed by uppercase letter`,
          nodeKind: 'SignalHandler',
          context: { name: member.name },
        });
      }
    }

    // E006: required + readonly conflict
    if (member.kind === 'PropertyDeclaration' && member.isRequired && member.isReadonly) {
      diagnostics.push({
        level: 'error',
        code: DiagnosticCode.REQUIRED_READONLY_CONFLICT,
        message: `Property '${member.name}' cannot be both required and readonly`,
        nodeKind: 'PropertyDeclaration',
        context: { name: member.name },
      });
    }

    // E008: Duplicate enum members
    if (member.kind === 'EnumDeclaration') {
      const enumMemberNames = new Set<string>();
      for (const em of member.members) {
        if (enumMemberNames.has(em.name)) {
          diagnostics.push({
            level: 'error',
            code: DiagnosticCode.DUPLICATE_ENUM_MEMBER,
            message: `Duplicate enum member '${em.name}' in enum '${member.name}'`,
            nodeKind: 'EnumDeclaration',
            context: { enumName: member.name, memberName: em.name },
          });
        }
        enumMemberNames.add(em.name);
      }
    }

    // E009: Inline component name must start with uppercase
    if (member.kind === 'InlineComponent') {
      if (!/^[A-Z]/.test(member.name)) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.INVALID_COMPONENT_NAME,
          message: `Inline component name '${member.name}' must start with an uppercase letter`,
          nodeKind: 'InlineComponent',
          context: { name: member.name },
        });
      }
    }

    // Recurse into children
    recurseMembers(member, diagnostics, depth);
  }
}

function recurseMembers(
  member: ObjectMember,
  diagnostics: ValidationDiagnostic[],
  depth: number,
): void {
  if (member.kind === 'ObjectDefinition') {
    checkObjectMembers(member, diagnostics, depth + 1);
  } else if (member.kind === 'InlineComponent') {
    checkObjectMembers(member.body, diagnostics, depth + 1);
  } else if (member.kind === 'BehaviorOn') {
    for (const m of member.members) {
      recurseMembers(m, diagnostics, depth + 1);
    }
  } else if (member.kind === 'Binding' && member.value.kind === 'object') {
    checkObjectMembers(member.value.node, diagnostics, depth + 1);
  } else if (member.kind === 'ArrayBinding') {
    for (const el of member.elements) {
      if (el.kind === 'object') {
        checkObjectMembers(el.node, diagnostics, depth + 1);
      }
    }
  }
}

/** Validate semantic correctness (requires registry). */
export function validateSemantics(doc: QmlDocument, registry: RegistryQueryLike): ValidationResult {
  const diagnostics: ValidationDiagnostic[] = [];

  // Collect imported modules
  const importedModules = new Set<string>();
  for (const imp of doc.imports) {
    if (imp.importKind === 'module' && imp.moduleUri) {
      importedModules.add(imp.moduleUri);
    }
  }

  // Track used types for W001
  const usedTypes = new Set<string>();

  // Validate root object and all children
  validateObject(doc.rootObject, registry, diagnostics, importedModules, usedTypes);

  // W001: Unused imports
  // Check if any module import's types are used
  for (const imp of doc.imports) {
    if (imp.importKind === 'module' && imp.moduleUri) {
      // Skip built-in modules that are implicitly used
      if (imp.moduleUri === 'QtQml') continue;
      let isUsed = false;
      for (const typeName of usedTypes) {
        const found = registry.findByQmlName(typeName, imp.moduleUri);
        if (found) {
          isUsed = true;
          break;
        }
      }
      if (!isUsed) {
        diagnostics.push({
          level: 'warning',
          code: DiagnosticCode.UNUSED_IMPORT,
          message: `Import '${imp.moduleUri}' appears unused`,
          nodeKind: 'Import',
          context: { moduleUri: imp.moduleUri },
        });
      }
    }
  }

  return {
    valid: diagnostics.filter((d) => d.level === 'error').length === 0,
    diagnostics,
  };
}

function validateObject(
  obj: ObjectDefinitionNode,
  registry: RegistryQueryLike,
  diagnostics: ValidationDiagnostic[],
  importedModules: Set<string>,
  usedTypes: Set<string>,
): void {
  usedTypes.add(obj.typeName);

  // E100: Unknown type
  const typeInfo = findType(obj.typeName, registry, importedModules);
  if (!typeInfo) {
    diagnostics.push({
      level: 'error',
      code: DiagnosticCode.UNKNOWN_TYPE,
      message: `Unknown type '${obj.typeName}'`,
      nodeKind: 'ObjectDefinition',
      context: { typeName: obj.typeName },
    });
    // Can't validate further without type info
    // Still recurse children
    for (const member of obj.members) {
      recurseSemanticMembers(member, registry, diagnostics, importedModules, usedTypes);
    }
    return;
  }

  const qualifiedName = typeInfo.qualifiedName;
  const properties = registry.getAllProperties(qualifiedName, true);
  const signals = registry.getAllSignals(qualifiedName, true);
  const localPropertyNames = new Set(
    obj.members
      .filter(
        (member): member is Extract<ObjectMember, { name: string }> =>
          member.kind === 'PropertyDeclaration' || member.kind === 'PropertyAlias',
      )
      .map((member) => member.name),
  );

  for (const member of obj.members) {
    if (member.kind === 'Binding') {
      // E101: Unknown property
      const propInfo = properties.find((p) => p.name === member.property);
      if (!propInfo) {
        // Only report if it's not a signal handler pattern
        if (!member.property.startsWith('on')) {
          diagnostics.push({
            level: 'error',
            code: DiagnosticCode.UNKNOWN_PROPERTY,
            message: `Unknown property '${member.property}' on type '${obj.typeName}'`,
            nodeKind: 'Binding',
            context: { property: member.property, typeName: obj.typeName },
          });
        }
      } else if (propInfo.readonly) {
        // E105: Readonly property bound
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.READONLY_PROP_BOUND,
          message: `Cannot bind to readonly property '${member.property}'`,
          nodeKind: 'Binding',
          context: { property: member.property, typeName: obj.typeName },
        });
      }

      // Check enum references in values
      if (member.value.kind === 'enum') {
        validateEnumRef(member.value, registry, diagnostics, importedModules, usedTypes);
      }
    }

    // E102: Unknown signal (handler has no matching signal)
    if (member.kind === 'SignalHandler') {
      const signalName = member.name.replace(/^on/, '');
      const lowerSignal = signalName.charAt(0).toLowerCase() + signalName.slice(1);
      const isChangeSignal = lowerSignal.endsWith('Changed');
      const changedProperty = isChangeSignal ? lowerSignal.slice(0, -'Changed'.length) : undefined;
      const propertyExists =
        changedProperty !== undefined &&
        (properties.some((p) => p.name === changedProperty) ||
          localPropertyNames.has(changedProperty));
      const signalExists = signals.some((s) => s.name === lowerSignal);
      if (!signalExists && !propertyExists) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.UNKNOWN_SIGNAL,
          message: `No signal '${lowerSignal}' found for handler '${member.name}' on type '${obj.typeName}'`,
          nodeKind: 'SignalHandler',
          context: { handler: member.name, typeName: obj.typeName },
        });
      }
    }

    // E103: Unknown attached type
    if (member.kind === 'AttachedBinding') {
      usedTypes.add(member.attachedTypeName);
      const attachedInfo = findType(member.attachedTypeName, registry, importedModules);
      if (!attachedInfo) {
        diagnostics.push({
          level: 'error',
          code: DiagnosticCode.UNKNOWN_ATTACHED_TYPE,
          message: `Unknown attached type '${member.attachedTypeName}'`,
          nodeKind: 'AttachedBinding',
          context: { typeName: member.attachedTypeName },
        });
      }
    }

    recurseSemanticMembers(member, registry, diagnostics, importedModules, usedTypes);
  }
}

function recurseSemanticMembers(
  member: ObjectMember,
  registry: RegistryQueryLike,
  diagnostics: ValidationDiagnostic[],
  importedModules: Set<string>,
  usedTypes: Set<string>,
): void {
  if (member.kind === 'ObjectDefinition') {
    validateObject(member, registry, diagnostics, importedModules, usedTypes);
  } else if (member.kind === 'InlineComponent') {
    validateObject(member.body, registry, diagnostics, importedModules, usedTypes);
  } else if (member.kind === 'BehaviorOn') {
    for (const m of member.members) {
      recurseSemanticMembers(m, registry, diagnostics, importedModules, usedTypes);
    }
  } else if (member.kind === 'Binding' && member.value.kind === 'object') {
    validateObject(member.value.node, registry, diagnostics, importedModules, usedTypes);
  } else if (member.kind === 'ArrayBinding') {
    for (const el of member.elements) {
      if (el.kind === 'object') {
        validateObject(el.node, registry, diagnostics, importedModules, usedTypes);
      }
    }
  }
}

function validateEnumRef(
  enumRef: import('./types.js').EnumReference,
  registry: RegistryQueryLike,
  diagnostics: ValidationDiagnostic[],
  importedModules: Set<string>,
  usedTypes: Set<string>,
): void {
  usedTypes.add(enumRef.typeName);
  const typeInfo = findType(enumRef.typeName, registry, importedModules);
  if (!typeInfo) {
    diagnostics.push({
      level: 'error',
      code: DiagnosticCode.INVALID_ENUM_REF,
      message: `Unknown type '${enumRef.typeName}' in enum reference '${enumRef.typeName}.${enumRef.valueName}'`,
      nodeKind: 'Binding',
      context: { typeName: enumRef.typeName, valueName: enumRef.valueName },
    });
  }
}

function findType(
  typeName: string,
  registry: RegistryQueryLike,
  importedModules: Set<string>,
): { qualifiedName: string } | undefined {
  // Try without module first
  let result = registry.findByQmlName(typeName);
  if (result) return result;

  // Try with each imported module
  for (const uri of importedModules) {
    result = registry.findByQmlName(typeName, uri);
    if (result) return result;
  }

  return undefined;
}
