import {
  type ArrowFunction,
  type Expression,
  type FunctionDeclaration,
  type FunctionExpression,
  Node,
  type SourceFile,
} from 'ts-morph';
import type { DiscoveredImport, DiscoveredView } from './analyzer-types.js';

type FunctionLike = FunctionDeclaration | ArrowFunction | FunctionExpression;

export function discoverViews(
  sourceFile: SourceFile,
  dslImports: readonly DiscoveredImport[],
): DiscoveredView[] {
  const dslFactoryNames = buildDslFactoryNameSet(dslImports);
  if (dslFactoryNames.size === 0) return [];

  const views: DiscoveredView[] = [];
  const filePath = sourceFile.getFilePath();

  // Case 1 & 2: exported function declarations
  for (const func of sourceFile.getFunctions()) {
    if (!func.isExported() && !func.isDefaultExport()) continue;
    if (!returnsQmlDslChain(func, dslFactoryNames)) continue;
    views.push({
      functionName: func.getName() || 'default',
      exportKind: func.isDefaultExport() ? 'default' : 'named',
      vmParam: extractVmParam(func),
      filePath,
      line: func.getStartLineNumber(),
    });
  }

  // Case 3: exported variable declarations with arrow/function expression
  for (const stmt of sourceFile.getVariableStatements()) {
    if (!stmt.isExported()) continue;
    for (const decl of stmt.getDeclarations()) {
      const init = decl.getInitializer();
      if (!init) continue;
      if (!Node.isArrowFunction(init) && !Node.isFunctionExpression(init)) continue;
      if (!returnsQmlDslChain(init, dslFactoryNames)) continue;
      views.push({
        functionName: decl.getName(),
        exportKind: 'named',
        vmParam: extractVmParam(init),
        filePath,
        line: decl.getStartLineNumber(),
      });
    }
  }

  // Case 4: export default <identifier> referencing a function variable
  for (const exportDecl of sourceFile.getExportAssignments()) {
    if (exportDecl.isExportEquals()) continue;
    const expr = exportDecl.getExpression();
    if (!Node.isIdentifier(expr)) continue;

    const symbol = expr.getSymbol();
    const valueDecl = symbol?.getValueDeclaration();
    if (!valueDecl) continue;

    let func: FunctionLike | undefined;
    let name = expr.getText();

    if (Node.isVariableDeclaration(valueDecl)) {
      const init = valueDecl.getInitializer();
      if (init && (Node.isArrowFunction(init) || Node.isFunctionExpression(init))) {
        func = init;
      }
    } else if (Node.isFunctionDeclaration(valueDecl)) {
      func = valueDecl;
      name = valueDecl.getName() || name;
    }

    if (!func) continue;
    if (!returnsQmlDslChain(func, dslFactoryNames)) continue;
    views.push({
      functionName: name,
      exportKind: 'default',
      vmParam: extractVmParam(func),
      filePath,
      line: valueDecl.getStartLineNumber(),
    });
  }

  return views;
}

function buildDslFactoryNameSet(dslImports: readonly DiscoveredImport[]): Set<string> {
  const names = new Set<string>();
  for (const imp of dslImports) {
    if (!imp.isDslImport) continue;
    for (const name of imp.namedImports) {
      names.add(name);
    }
    if (imp.defaultImport) {
      names.add(imp.defaultImport);
    }
  }
  return names;
}

function returnsQmlDslChain(func: FunctionLike, dslFactoryNames: ReadonlySet<string>): boolean {
  const returnExpr = getReturnExpression(func);
  if (!returnExpr) return false;
  return isDslCallChain(returnExpr, dslFactoryNames);
}

function getReturnExpression(func: FunctionLike): Expression | undefined {
  if (Node.isArrowFunction(func)) {
    const body = func.getBody();
    if (!Node.isBlock(body)) {
      return body as Expression;
    }
  }

  const body = Node.isArrowFunction(func) ? func.getBody() : func.getBody();
  if (body && Node.isBlock(body)) {
    for (const stmt of body.getStatements()) {
      if (Node.isReturnStatement(stmt)) {
        return stmt.getExpression();
      }
    }
  }
  return undefined;
}

function isDslCallChain(expr: Expression, dslFactoryNames: ReadonlySet<string>): boolean {
  const rootName = getCallChainRoot(expr);
  return rootName !== undefined && dslFactoryNames.has(rootName);
}

function getCallChainRoot(node: Node): string | undefined {
  if (Node.isCallExpression(node)) {
    return getCallChainRoot(node.getExpression());
  }
  if (Node.isPropertyAccessExpression(node)) {
    return getCallChainRoot(node.getExpression());
  }
  if (Node.isParenthesizedExpression(node)) {
    return getCallChainRoot(node.getExpression());
  }
  if (Node.isIdentifier(node)) {
    return node.getText();
  }
  return undefined;
}

function extractVmParam(
  func: FunctionLike,
): { readonly name: string; readonly type: string } | undefined {
  const params = func.getParameters();
  const first = params[0];
  if (!first) return undefined;
  const typeNode = first.getTypeNode();
  if (!typeNode) return undefined;
  return {
    name: first.getName(),
    type: typeNode.getText(),
  };
}
