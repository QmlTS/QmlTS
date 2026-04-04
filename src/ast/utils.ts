import type {
  AstNode,
  AstUtils,
  BindingValue,
  ObjectDefinitionNode,
  QmlDocument,
} from './types.js';
import { walkAst } from './visitor.js';
import { walkAstGeneric } from './walker.js';

/** AST utility functions. */
export const astUtils: AstUtils = {
  collectIds(doc: QmlDocument): Map<string, ObjectDefinitionNode> {
    const result = new Map<string, ObjectDefinitionNode>();
    let currentObj: ObjectDefinitionNode | null = null;

    walkAst(doc, {
      visitObjectDefinition(node) {
        currentObj = node;
      },
      visitIdAssignment(node) {
        if (currentObj) {
          result.set(node.id, currentObj);
        }
      },
    });

    // Use walker for proper parent tracking
    result.clear();
    walkAstGeneric(doc, {
      enter(node, parent) {
        if (node.kind === 'IdAssignment' && parent?.kind === 'ObjectDefinition') {
          result.set(node.id, parent);
        }
      },
    });

    return result;
  },

  collectTypeNames(doc: QmlDocument): string[] {
    const types = new Set<string>();
    walkAst(doc, {
      visitObjectDefinition(node) {
        types.add(node.typeName);
      },
    });
    return [...types];
  },

  collectImportedModules(doc: QmlDocument): string[] {
    return doc.imports
      .filter((imp) => imp.importKind === 'module' && imp.moduleUri !== undefined)
      .map((imp) => imp.moduleUri!);
  },

  findObjectsByType(doc: QmlDocument, typeName: string): ObjectDefinitionNode[] {
    const results: ObjectDefinitionNode[] = [];
    walkAst(doc, {
      visitObjectDefinition(node) {
        if (node.typeName === typeName) {
          results.push(node);
        }
      },
    });
    return results;
  },

  findObjectById(doc: QmlDocument, id: string): ObjectDefinitionNode | undefined {
    let found: ObjectDefinitionNode | undefined;
    walkAstGeneric(doc, {
      enter(node, parent) {
        if (node.kind === 'IdAssignment' && node.id === id && parent?.kind === 'ObjectDefinition') {
          found = parent;
        }
      },
    });
    return found;
  },

  getBindingValue(object: ObjectDefinitionNode, property: string): BindingValue | undefined {
    for (const member of object.members) {
      if (member.kind === 'Binding' && member.property === property) {
        return member.value;
      }
    }
    return undefined;
  },

  getObjectId(object: ObjectDefinitionNode): string | undefined {
    for (const member of object.members) {
      if (member.kind === 'IdAssignment') {
        return member.id;
      }
    }
    return undefined;
  },

  getChildren(object: ObjectDefinitionNode): ObjectDefinitionNode[] {
    return object.members.filter((m): m is ObjectDefinitionNode => m.kind === 'ObjectDefinition');
  },

  countNodes(doc: QmlDocument): number {
    let count = 0;
    walkAstGeneric(doc, {
      enter() {
        count++;
      },
    });
    return count;
  },

  maxDepth(doc: QmlDocument): number {
    let max = 0;
    let depth = 0;
    walkAstGeneric(doc, {
      enter(node) {
        if (node.kind === 'ObjectDefinition') {
          depth++;
          if (depth > max) max = depth;
        }
      },
      leave(node) {
        if (node.kind === 'ObjectDefinition') {
          depth--;
        }
      },
    });
    return max;
  },

  structuralEqual(a: AstNode, b: AstNode): boolean {
    return deepEqual(a, b, true);
  },

  summarize(doc: QmlDocument): string {
    const types = astUtils.collectTypeNames(doc);
    const ids = astUtils.collectIds(doc);
    const modules = astUtils.collectImportedModules(doc);
    const nodeCount = astUtils.countNodes(doc);
    const depth = astUtils.maxDepth(doc);

    const parts = [
      `QmlDocument: ${doc.rootObject.typeName}`,
      `  Types: ${types.join(', ')}`,
      `  IDs: ${[...ids.keys()].join(', ') || '(none)'}`,
      `  Imports: ${modules.join(', ') || '(none)'}`,
      `  Nodes: ${nodeCount}, Max depth: ${depth}`,
    ];
    return parts.join('\n');
  },
};

function deepEqual(a: unknown, b: unknown, ignoreSpan: boolean): boolean {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (typeof a !== typeof b) return false;

  if (typeof a !== 'object') return a === b;

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], ignoreSpan)) return false;
    }
    return true;
  }

  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;

  const aKeys = Object.keys(aObj).filter((k) => !ignoreSpan || k !== 'span');
  const bKeys = Object.keys(bObj).filter((k) => !ignoreSpan || k !== 'span');

  if (aKeys.length !== bKeys.length) return false;

  for (const key of aKeys) {
    if (!deepEqual(aObj[key], bObj[key], ignoreSpan)) return false;
  }

  return true;
}
