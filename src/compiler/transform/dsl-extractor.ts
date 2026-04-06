import {
  type ArrowFunction,
  type CallExpression,
  type Expression,
  type FunctionDeclaration,
  Node,
  type PropertyAccessExpression,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph';
import type { Diagnostic } from '../diagnostics.js';
import type {
  ExtractResult,
  RawBinding,
  RawCallbackBinding,
  RawDslNode,
  RawDslValue,
  RawExpressionBinding,
} from './raw-types.js';
import type { DslHandler, SourceLocation } from './transform-types.js';

/**
 * Extract a DSL call tree from a view function's return expression.
 * Pure syntax parsing — no registry dependency.
 */
export function extractDsl(
  sourceFile: SourceFile,
  viewFunctionName: string,
  dslFactoryNames: ReadonlySet<string>,
  vmParamName?: string,
): ExtractResult {
  const fn = sourceFile.getFunction(viewFunctionName);
  if (!fn) {
    return {
      diagnostics: [
        makeDiag(
          'QMLTS-T009',
          `View function '${viewFunctionName}' not found`,
          sourceFile.getFilePath(),
          1,
          1,
        ),
      ],
    };
  }

  const returnExpr = findReturnExpression(fn);
  if (!returnExpr) {
    return {
      diagnostics: [
        makeDiag(
          'QMLTS-T009',
          `No return expression found in '${viewFunctionName}'`,
          sourceFile.getFilePath(),
          fn.getStartLineNumber(),
          1,
        ),
      ],
    };
  }

  // Parse the call chain
  const chain = parseCallChain(returnExpr);
  if (!chain) {
    return {
      diagnostics: [
        makeDiag(
          'QMLTS-T007',
          'Return expression is not a valid DSL call chain',
          sourceFile.getFilePath(),
          returnExpr.getStartLineNumber(),
          returnExpr.getStart() - returnExpr.getStartLinePos() + 1,
        ),
      ],
    };
  }

  // Find the root factory call
  const rootIndex = findRootFactory(chain, dslFactoryNames);
  if (rootIndex < 0) {
    return {
      diagnostics: [
        makeDiag(
          'QMLTS-T009',
          'No DSL factory call found in return expression',
          sourceFile.getFilePath(),
          returnExpr.getStartLineNumber(),
          returnExpr.getStart() - returnExpr.getStartLinePos() + 1,
        ),
      ],
    };
  }

  const diagnostics: Diagnostic[] = [];
  const rawTree = buildRawNode(
    chain,
    rootIndex,
    dslFactoryNames,
    vmParamName,
    sourceFile.getFilePath(),
    diagnostics,
  );

  return { rawTree, diagnostics };
}

// ─── Chain Parsing ──────────────────────────────────────────────────────

interface ChainLink {
  methodName: string;
  args: Expression[];
  callExpr: CallExpression;
}

interface ParsedChain {
  rootCall: CallExpression;
  rootName: string;
  links: ChainLink[];
}

function parseCallChain(expr: Expression): ParsedChain | undefined {
  const links: ChainLink[] = [];
  let current: Expression = expr;

  // Walk outward-in: the outermost call is the last chain link
  while (Node.isCallExpression(current)) {
    const callExpr = current;
    const exprNode = callExpr.getExpression();

    if (Node.isPropertyAccessExpression(exprNode)) {
      const methodName = exprNode.getName();
      const args = callExpr.getArguments() as Expression[];
      links.unshift({ methodName, args, callExpr });
      current = exprNode.getExpression();
    } else if (Node.isIdentifier(exprNode)) {
      // This is the root factory call: FactoryName()
      return {
        rootCall: callExpr,
        rootName: exprNode.getText(),
        links,
      };
    } else {
      return undefined;
    }
  }

  // If we ended on an identifier without a call, it's not valid
  return undefined;
}

function findRootFactory(chain: ParsedChain, factories: ReadonlySet<string>): number {
  if (factories.has(chain.rootName)) {
    return 0;
  }
  return -1;
}

// ─── Node Building ──────────────────────────────────────────────────────

function buildRawNode(
  chain: ParsedChain,
  _rootIndex: number,
  dslFactoryNames: ReadonlySet<string>,
  vmParamName: string | undefined,
  filePath: string,
  diagnostics: Diagnostic[],
): RawDslNode {
  const bindings: RawBinding[] = [];
  const expressionBindings: RawExpressionBinding[] = [];
  const callbackBindings: RawCallbackBinding[] = [];
  const handlers: DslHandler[] = [];
  const children: RawDslNode[] = [];
  let id: string | undefined;

  const loc = getSourceLocation(chain.rootCall, filePath);

  for (const link of chain.links) {
    const { methodName, args, callExpr } = link;
    const linkLoc = getSourceLocation(callExpr, filePath);

    if (methodName === 'id') {
      // ID assignment
      const arg = args[0];
      if (arg && Node.isStringLiteral(arg)) {
        id = arg.getLiteralValue();
      }
    } else if (methodName === 'child') {
      // Single child
      const arg = args[0];
      if (arg) {
        const childNode = tryExtractChildNode(
          arg,
          dslFactoryNames,
          vmParamName,
          filePath,
          diagnostics,
        );
        if (childNode) {
          children.push(childNode);
        }
      }
    } else if (methodName === 'children') {
      // Multiple children
      for (const arg of args) {
        const childNode = tryExtractChildNode(
          arg,
          dslFactoryNames,
          vmParamName,
          filePath,
          diagnostics,
        );
        if (childNode) {
          children.push(childNode);
        }
      }
    } else if (methodName.endsWith('Bind') && methodName.length > 4) {
      // Expression binding: xxxBind("expression")
      const property = methodName.slice(0, -4);
      const arg = args[0];
      if (arg && Node.isStringLiteral(arg)) {
        expressionBindings.push({
          property,
          expression: arg.getLiteralValue(),
          sourceLocation: linkLoc,
        });
      }
    } else if (isHandlerName(methodName)) {
      // Signal handler: onXxx(...)
      const signalName = extractSignalName(methodName);
      const arg = args[0];
      if (arg) {
        const handler = parseHandler(signalName, arg, vmParamName, linkLoc);
        handlers.push(handler);
      }
    } else {
      // Check if the argument is an arrow function (callback binding for grouped/attached)
      const arg = args[0];
      if (arg && Node.isArrowFunction(arg)) {
        const cb = parseCallbackBinding(
          methodName,
          arg,
          dslFactoryNames,
          vmParamName,
          filePath,
          diagnostics,
          linkLoc,
        );
        callbackBindings.push(cb);
      } else if (arg) {
        // Regular property binding
        const value = parseValue(arg, dslFactoryNames, vmParamName, filePath, diagnostics);
        bindings.push({ property: methodName, value, sourceLocation: linkLoc });
      }
    }
  }

  return {
    typeName: chain.rootName,
    bindings,
    expressionBindings,
    callbackBindings,
    handlers,
    children,
    id,
    sourceLocation: loc,
  };
}

// ─── Value Parsing ──────────────────────────────────────────────────────

function parseValue(
  expr: Expression,
  dslFactoryNames: ReadonlySet<string>,
  vmParamName: string | undefined,
  filePath: string,
  diagnostics: Diagnostic[],
): RawDslValue {
  // Numeric literal
  if (Node.isNumericLiteral(expr)) {
    return { kind: 'literal', value: expr.getLiteralValue() };
  }

  // String literal
  if (Node.isStringLiteral(expr)) {
    return { kind: 'literal', value: expr.getLiteralValue() };
  }

  // Boolean: true/false
  if (Node.isTrueLiteral(expr)) {
    return { kind: 'literal', value: true };
  }
  if (Node.isFalseLiteral(expr)) {
    return { kind: 'literal', value: false };
  }

  // null
  if (Node.isNullLiteral(expr)) {
    return { kind: 'literal', value: null };
  }

  // Negative numeric: -100
  if (Node.isPrefixUnaryExpression(expr)) {
    const operand = expr.getOperand();
    if (expr.getOperatorToken() === SyntaxKind.MinusToken && Node.isNumericLiteral(operand)) {
      return { kind: 'literal', value: -operand.getLiteralValue() };
    }
  }

  // vm.xxx → state-ref
  if (vmParamName && Node.isPropertyAccessExpression(expr)) {
    const obj = expr.getExpression();
    if (Node.isIdentifier(obj) && obj.getText() === vmParamName) {
      return {
        kind: 'state-ref',
        vmName: vmParamName,
        property: expr.getName(),
      };
    }
  }

  // A.B.C → enum-ref (3-part property access chain)
  if (Node.isPropertyAccessExpression(expr)) {
    const enumRef = tryParseEnumRef(expr);
    if (enumRef) {
      return enumRef;
    }
  }

  // DSL call → raw-object (nested component)
  if (Node.isCallExpression(expr)) {
    const nestedChain = parseCallChain(expr);
    if (nestedChain && dslFactoryNames.has(nestedChain.rootName)) {
      const childNode = buildRawNode(
        nestedChain,
        0,
        dslFactoryNames,
        vmParamName,
        filePath,
        diagnostics,
      );
      return { kind: 'raw-object', node: childNode };
    }
  }

  // Fallback: expression
  return { kind: 'expression', code: expr.getText() };
}

function tryParseEnumRef(expr: PropertyAccessExpression): RawDslValue | undefined {
  // Pattern: TypeName.EnumName.ValueName
  const valueName = expr.getName();
  const mid = expr.getExpression();
  if (!Node.isPropertyAccessExpression(mid)) return undefined;

  const enumName = mid.getName();
  const top = mid.getExpression();
  if (!Node.isIdentifier(top)) return undefined;

  const typeName = top.getText();

  // Verify it looks like an enum ref: all parts start with uppercase
  if (typeName[0] === typeName[0]?.toUpperCase() && enumName[0] === enumName[0]?.toUpperCase()) {
    return { kind: 'enum-ref', typeName, enumName, valueName };
  }

  return undefined;
}

// ─── Handler Parsing ────────────────────────────────────────────────────

function isHandlerName(name: string): boolean {
  return name.length > 2 && name.startsWith('on') && name[2] === name[2]?.toUpperCase();
}

function extractSignalName(handlerName: string): string {
  // onClicked → clicked, onPressed → pressed
  const signal = handlerName.slice(2);
  return signal[0]!.toLowerCase() + signal.slice(1);
}

function parseHandler(
  signalName: string,
  arg: Expression,
  vmParamName: string | undefined,
  sourceLocation?: SourceLocation,
): DslHandler {
  // vm.xxx → command-ref
  if (vmParamName && Node.isPropertyAccessExpression(arg)) {
    const obj = arg.getExpression();
    if (Node.isIdentifier(obj) && obj.getText() === vmParamName) {
      return {
        signalName,
        handlerType: 'command-ref',
        code: arg.getText(),
        commandRef: {
          vmName: vmParamName,
          methodName: arg.getName(),
        },
        sourceLocation,
      };
    }
  }

  // String literal → expression handler
  if (Node.isStringLiteral(arg)) {
    return {
      signalName,
      handlerType: 'expression',
      code: arg.getLiteralValue(),
      sourceLocation,
    };
  }

  // Arrow function → arrow handler
  if (Node.isArrowFunction(arg)) {
    const body = arg.getBody();
    const code = Node.isBlock(body)
      ? body
          .getStatements()
          .map((s) => s.getText())
          .join('\n')
      : body.getText();

    return {
      signalName,
      handlerType: 'arrow',
      code,
      sourceLocation,
    };
  }

  // Fallback: expression
  return {
    signalName,
    handlerType: 'expression',
    code: arg.getText(),
    sourceLocation,
  };
}

// ─── Callback Binding Parsing ───────────────────────────────────────────

function parseCallbackBinding(
  methodName: string,
  arrowFn: ArrowFunction,
  dslFactoryNames: ReadonlySet<string>,
  vmParamName: string | undefined,
  filePath: string,
  diagnostics: Diagnostic[],
  sourceLocation?: SourceLocation,
): RawCallbackBinding {
  const innerBindings: RawBinding[] = [];
  const innerExpressionBindings: RawExpressionBinding[] = [];
  const innerHandlers: DslHandler[] = [];

  // The arrow function body should be a chain: param => param.prop1(v1).prop2(v2)
  const body = arrowFn.getBody();

  let chainExpr: Expression | undefined;
  if (Node.isBlock(body)) {
    // { return param.prop1(v1); }
    const returnStmt = body.getStatements().find((s) => Node.isReturnStatement(s));
    if (returnStmt && Node.isReturnStatement(returnStmt)) {
      chainExpr = returnStmt.getExpression();
    }
  } else {
    // param => param.prop1(v1).prop2(v2)
    chainExpr = body as Expression;
  }

  if (chainExpr) {
    parseCallbackChain(
      chainExpr,
      innerBindings,
      innerExpressionBindings,
      innerHandlers,
      dslFactoryNames,
      vmParamName,
      filePath,
      diagnostics,
    );
  }

  return {
    methodName,
    innerBindings,
    innerExpressionBindings,
    innerHandlers,
    sourceLocation,
  };
}

function parseCallbackChain(
  expr: Expression,
  bindings: RawBinding[],
  exprBindings: RawExpressionBinding[],
  handlers: DslHandler[],
  dslFactoryNames: ReadonlySet<string>,
  vmParamName: string | undefined,
  filePath: string,
  diagnostics: Diagnostic[],
): void {
  // Walk the chain: a.left("parent.left").margins(10)
  let current: Expression = expr;

  while (Node.isCallExpression(current)) {
    const callExpr = current;
    const exprNode = callExpr.getExpression();

    if (Node.isPropertyAccessExpression(exprNode)) {
      const propName = exprNode.getName();
      const args = callExpr.getArguments() as Expression[];
      const arg = args[0];
      const linkLoc = getSourceLocation(callExpr, filePath);

      if (propName.endsWith('Bind') && propName.length > 4 && arg && Node.isStringLiteral(arg)) {
        exprBindings.unshift({
          property: propName.slice(0, -4),
          expression: arg.getLiteralValue(),
          sourceLocation: linkLoc,
        });
      } else if (isHandlerName(propName) && arg) {
        const handler = parseHandler(extractSignalName(propName), arg, vmParamName, linkLoc);
        handlers.unshift(handler);
      } else if (arg) {
        const value = parseValue(arg, dslFactoryNames, vmParamName, filePath, diagnostics);
        bindings.unshift({ property: propName, value, sourceLocation: linkLoc });
      }

      current = exprNode.getExpression();
    } else {
      break;
    }
  }
}

// ─── Child Node Extraction ──────────────────────────────────────────────

function tryExtractChildNode(
  expr: Expression,
  dslFactoryNames: ReadonlySet<string>,
  vmParamName: string | undefined,
  filePath: string,
  diagnostics: Diagnostic[],
): RawDslNode | undefined {
  if (Node.isCallExpression(expr)) {
    const nestedChain = parseCallChain(expr);
    if (nestedChain && dslFactoryNames.has(nestedChain.rootName)) {
      return buildRawNode(nestedChain, 0, dslFactoryNames, vmParamName, filePath, diagnostics);
    }
  }
  return undefined;
}

// ─── Helpers ────────────────────────────────────────────────────────────

function findReturnExpression(fn: FunctionDeclaration): Expression | undefined {
  const body = fn.getBody();
  if (!body || !Node.isBlock(body)) return undefined;

  for (const stmt of body.getStatements()) {
    if (Node.isReturnStatement(stmt)) {
      return stmt.getExpression();
    }
  }
  return undefined;
}

function getSourceLocation(node: Node, filePath: string): SourceLocation {
  return {
    file: filePath,
    line: node.getStartLineNumber(),
    column: node.getStart() - node.getStartLinePos() + 1,
  };
}

function makeDiag(
  code: Diagnostic['code'],
  message: string,
  file: string,
  line: number,
  column: number,
): Diagnostic {
  return { severity: 'error', code, message, file, line, column };
}
