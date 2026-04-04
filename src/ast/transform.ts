import type {
  BindingNode,
  BindingValue,
  ObjectDefinitionNode,
  ObjectMember,
  QmlAstTransformer,
  QmlDocument,
} from './types.js';

/** Apply a transformer to produce a new AST. The original AST is not modified. */
export function transformAst(doc: QmlDocument, transformer: QmlAstTransformer): QmlDocument {
  let result: QmlDocument = { ...doc };

  // Transform pragmas
  if (transformer.transformPragma) {
    const newPragmas = [];
    for (const p of result.pragmas) {
      const transformed = transformer.transformPragma(p);
      if (transformed === null) continue;
      newPragmas.push(transformed ?? p);
    }
    result = { ...result, pragmas: newPragmas };
  }

  // Transform imports
  if (transformer.transformImport) {
    const newImports = [];
    for (const imp of result.imports) {
      const transformed = transformer.transformImport(imp);
      if (transformed === null) continue;
      newImports.push(transformed ?? imp);
    }
    result = { ...result, imports: newImports };
  }

  // Transform root object
  result = { ...result, rootObject: transformObject(result.rootObject, transformer) };

  // Transform document itself
  if (transformer.transformDocument) {
    const docResult = transformer.transformDocument(result);
    if (docResult !== undefined) result = docResult;
  }

  return result;
}

function transformObject(
  obj: ObjectDefinitionNode,
  transformer: QmlAstTransformer,
): ObjectDefinitionNode {
  // Transform members
  const newMembers = transformMembers(obj.members, transformer);
  let result: ObjectDefinitionNode = { ...obj, members: newMembers };

  // Apply object-level transform
  if (transformer.transformObjectDefinition) {
    const transformed = transformer.transformObjectDefinition(result);
    if (transformed !== undefined) result = transformed;
  }

  return result;
}

function transformMembers(members: ObjectMember[], transformer: QmlAstTransformer): ObjectMember[] {
  const result: ObjectMember[] = [];

  for (const member of members) {
    // Apply specific transforms first
    let transformed: ObjectMember | null | undefined;

    switch (member.kind) {
      case 'Binding': {
        const newValue = transformBindingValue(member.value, transformer);
        const updated: BindingNode =
          newValue !== member.value ? { ...member, value: newValue } : member;
        transformed = transformer.transformBinding?.(updated);
        if (transformed === null) continue;
        transformed = transformed ?? updated;
        break;
      }
      case 'GroupedBinding': {
        const newBindings = [];
        for (const b of member.bindings) {
          const newVal = transformBindingValue(b.value, transformer);
          const updated: BindingNode = newVal !== b.value ? { ...b, value: newVal } : b;
          const t = transformer.transformBinding?.(updated);
          if (t === null) continue;
          newBindings.push(t ?? updated);
        }
        const updated = { ...member, bindings: newBindings };
        transformed = transformer.transformGroupedBinding?.(updated);
        if (transformed === null) continue;
        transformed = transformed ?? updated;
        break;
      }
      case 'AttachedBinding': {
        const newBindings = [];
        for (const b of member.bindings) {
          const newVal = transformBindingValue(b.value, transformer);
          const updated: BindingNode = newVal !== b.value ? { ...b, value: newVal } : b;
          const t = transformer.transformBinding?.(updated);
          if (t === null) continue;
          newBindings.push(t ?? updated);
        }
        const updated = { ...member, bindings: newBindings };
        transformed = transformer.transformAttachedBinding?.(updated);
        if (transformed === null) continue;
        transformed = transformed ?? updated;
        break;
      }
      case 'SignalHandler': {
        transformed = transformer.transformSignalHandler?.(member);
        if (transformed === null) continue;
        transformed = transformed ?? member;
        break;
      }
      case 'PropertyDeclaration': {
        let updated = member;
        if (member.initialValue) {
          const newVal = transformBindingValue(member.initialValue, transformer);
          if (newVal !== member.initialValue) {
            updated = { ...member, initialValue: newVal };
          }
        }
        transformed = transformer.transformPropertyDeclaration?.(updated);
        if (transformed === null) continue;
        transformed = transformed ?? updated;
        break;
      }
      case 'ObjectDefinition': {
        transformed = transformObject(member, transformer);
        break;
      }
      case 'InlineComponent': {
        transformed = { ...member, body: transformObject(member.body, transformer) };
        break;
      }
      case 'BehaviorOn': {
        transformed = { ...member, members: transformMembers(member.members, transformer) };
        break;
      }
      default: {
        transformed = member;
        break;
      }
    }

    // Apply generic member transform
    if (transformer.transformMember) {
      const memberResult = transformer.transformMember(transformed as ObjectMember);
      if (memberResult === null) continue;
      if (memberResult !== undefined) transformed = memberResult;
    }

    result.push(transformed as ObjectMember);
  }

  return result;
}

function transformBindingValue(value: BindingValue, transformer: QmlAstTransformer): BindingValue {
  if (value.kind === 'object') {
    const newNode = transformObject(value.node, transformer);
    return newNode !== value.node ? { ...value, node: newNode } : value;
  }
  if (value.kind === 'array') {
    const newItems = value.items.map((item) => transformBindingValue(item, transformer));
    const changed = newItems.some((item, i) => item !== value.items[i]);
    return changed ? { ...value, items: newItems } : value;
  }
  return value;
}
