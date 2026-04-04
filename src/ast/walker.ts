import type { AstNode, ObjectDefinitionNode, WalkerCallbacks } from './types.js';

/** Walk the AST with generic enter/leave callbacks, tracking parent and path. */
export function walkAstGeneric(node: AstNode, callbacks: WalkerCallbacks): void {
  walk(node, null, [], callbacks);
}

function walk(
  node: AstNode,
  parent: AstNode | null,
  path: string[],
  callbacks: WalkerCallbacks,
): void {
  if (callbacks.enter) {
    const result = callbacks.enter(node, parent, path);
    if (result === false) return;
  }

  walkChildren(node, path, callbacks);

  callbacks.leave?.(node, parent, path);
}

function walkChildren(node: AstNode, path: string[], callbacks: WalkerCallbacks): void {
  switch (node.kind) {
    case 'Document': {
      for (let i = 0; i < node.pragmas.length; i++) {
        walk(node.pragmas[i]!, node, [...path, `pragmas[${i}]`], callbacks);
      }
      for (let i = 0; i < node.imports.length; i++) {
        walk(node.imports[i]!, node, [...path, `imports[${i}]`], callbacks);
      }
      walk(node.rootObject, node, [...path, 'rootObject'], callbacks);
      break;
    }
    case 'ObjectDefinition': {
      walkMembers(node.members, node, path, callbacks);
      break;
    }
    case 'InlineComponent': {
      walk(node.body, node, [...path, 'body'], callbacks);
      break;
    }
    case 'Binding': {
      walkBindingValue(node.value, node, [...path, 'value'], callbacks);
      break;
    }
    case 'GroupedBinding': {
      for (let i = 0; i < node.bindings.length; i++) {
        walk(node.bindings[i]!, node, [...path, `bindings[${i}]`], callbacks);
      }
      break;
    }
    case 'AttachedBinding': {
      for (let i = 0; i < node.bindings.length; i++) {
        walk(node.bindings[i]!, node, [...path, `bindings[${i}]`], callbacks);
      }
      break;
    }
    case 'ArrayBinding': {
      for (let i = 0; i < node.elements.length; i++) {
        walkBindingValue(node.elements[i]!, node, [...path, `elements[${i}]`], callbacks);
      }
      break;
    }
    case 'BehaviorOn': {
      walkMembers(node.members, node, path, callbacks);
      break;
    }
    // Leaf nodes — no children
    default:
      break;
  }
}

function walkMembers(
  members: ObjectDefinitionNode['members'],
  parent: AstNode,
  path: string[],
  callbacks: WalkerCallbacks,
): void {
  for (let i = 0; i < members.length; i++) {
    walk(members[i] as AstNode, parent, [...path, `members[${i}]`], callbacks);
  }
}

function walkBindingValue(
  value: import('./types.js').BindingValue,
  parent: AstNode,
  path: string[],
  callbacks: WalkerCallbacks,
): void {
  if (value.kind === 'object') {
    walk(value.node, parent, [...path, 'node'], callbacks);
  } else if (value.kind === 'array') {
    for (let i = 0; i < value.items.length; i++) {
      walkBindingValue(value.items[i]!, parent, [...path, `items[${i}]`], callbacks);
    }
  }
}
