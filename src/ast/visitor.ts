import type { AstNode, ObjectDefinitionNode, QmlAstVisitor } from './types.js';

/** Walk the AST with a type-safe visitor. Return false from a visitor method to skip children. */
export function walkAst(node: AstNode, visitor: QmlAstVisitor): void {
  visitNode(node, visitor);
}

function visitNode(node: AstNode, visitor: QmlAstVisitor): void {
  switch (node.kind) {
    case 'Document': {
      if (visitor.visitDocument?.(node) === false) return;
      for (const pragma of node.pragmas) visitNode(pragma, visitor);
      for (const imp of node.imports) visitNode(imp, visitor);
      visitNode(node.rootObject, visitor);
      break;
    }
    case 'Import': {
      visitor.visitImport?.(node);
      break;
    }
    case 'Pragma': {
      visitor.visitPragma?.(node);
      break;
    }
    case 'ObjectDefinition': {
      if (visitor.visitObjectDefinition?.(node) === false) return;
      visitMembers(node, visitor);
      break;
    }
    case 'InlineComponent': {
      if (visitor.visitInlineComponent?.(node) === false) return;
      visitNode(node.body, visitor);
      break;
    }
    case 'IdAssignment': {
      visitor.visitIdAssignment?.(node);
      break;
    }
    case 'PropertyDeclaration': {
      visitor.visitPropertyDeclaration?.(node);
      break;
    }
    case 'PropertyAlias': {
      visitor.visitPropertyAlias?.(node);
      break;
    }
    case 'Binding': {
      if (visitor.visitBinding?.(node) === false) return;
      visitBindingValue(node.value, visitor);
      break;
    }
    case 'GroupedBinding': {
      if (visitor.visitGroupedBinding?.(node) === false) return;
      for (const b of node.bindings) visitNode(b, visitor);
      break;
    }
    case 'AttachedBinding': {
      if (visitor.visitAttachedBinding?.(node) === false) return;
      for (const b of node.bindings) visitNode(b, visitor);
      break;
    }
    case 'ArrayBinding': {
      if (visitor.visitArrayBinding?.(node) === false) return;
      for (const el of node.elements) visitBindingValue(el, visitor);
      break;
    }
    case 'BehaviorOn': {
      if (visitor.visitBehaviorOn?.(node) === false) return;
      visitMembersList(node.members, visitor);
      break;
    }
    case 'SignalDeclaration': {
      visitor.visitSignalDeclaration?.(node);
      break;
    }
    case 'SignalHandler': {
      visitor.visitSignalHandler?.(node);
      break;
    }
    case 'FunctionDeclaration': {
      visitor.visitFunctionDeclaration?.(node);
      break;
    }
    case 'EnumDeclaration': {
      visitor.visitEnumDeclaration?.(node);
      break;
    }
    case 'Comment': {
      visitor.visitComment?.(node);
      break;
    }
  }
}

function visitMembers(obj: ObjectDefinitionNode, visitor: QmlAstVisitor): void {
  visitMembersList(obj.members, visitor);
}

function visitMembersList(members: ObjectDefinitionNode['members'], visitor: QmlAstVisitor): void {
  for (const member of members) {
    visitNode(member as AstNode, visitor);
  }
}

function visitBindingValue(value: import('./types.js').BindingValue, visitor: QmlAstVisitor): void {
  if (value.kind === 'object') {
    visitNode(value.node, visitor);
  } else if (value.kind === 'array') {
    for (const item of value.items) visitBindingValue(item, visitor);
  }
}
