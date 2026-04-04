import type { AstNode, AstSerializer } from './types.js';

/** AST serializer — serialize/deserialize/clone AST nodes via JSON. */
export const astSerializer: AstSerializer = {
  serialize(node: AstNode, pretty?: boolean): string {
    return JSON.stringify(node, null, pretty ? 2 : undefined);
  },

  deserialize(json: string): AstNode {
    let parsed: unknown;
    try {
      parsed = JSON.parse(json);
    } catch {
      throw new Error(`Invalid JSON: failed to parse`);
    }
    if (typeof parsed !== 'object' || parsed === null || !('kind' in parsed)) {
      throw new Error(`Invalid AST: missing 'kind' field`);
    }
    return parsed as AstNode;
  },

  clone<T extends AstNode>(node: T): T {
    return JSON.parse(JSON.stringify(node)) as T;
  },
};
