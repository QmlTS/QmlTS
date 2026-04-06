import type { ClassDeclaration, MethodDeclaration, PropertyDeclaration } from 'ts-morph';
import { Node, SyntaxKind } from 'ts-morph';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic, DiagnosticSeverity } from '../diagnostics.js';
import type { IdAllocator } from '../ids/id-allocator.js';
import type {
  AnalyzedCommand,
  AnalyzedCommandOptions,
  AnalyzedCommandParameter,
  AnalyzedConstructorParam,
  AnalyzedEffect,
  AnalyzedEffectParameter,
  AnalyzedState,
  AnalyzedStateOptions,
  AnalyzedViewModel,
  ViewModelExtractor,
} from './extractor-types.js';
import { mapTsTypeToQml } from './ts-qml-type-map.js';

const LIFECYCLE_METHODS = new Set([
  'onMounted',
  'onUnmounting',
  'onBeforeHotReload',
  'onAfterHotReload',
  'onVisibilityChanged',
]);

function hasDecorator(node: PropertyDeclaration | MethodDeclaration, name: string): boolean {
  return node.getDecorators().some((d) => d.getName() === name);
}

function getDecoratorOptions(
  node: PropertyDeclaration | MethodDeclaration,
  decoratorName: string,
): Record<string, unknown> {
  const decorator = node.getDecorators().find((d) => d.getName() === decoratorName);
  if (!decorator) return {};
  const args = decorator.getArguments();
  if (args.length === 0) return {};
  const arg = args[0]!;
  if (arg.getKind() !== SyntaxKind.ObjectLiteralExpression) return {};
  const obj = arg.asKind(SyntaxKind.ObjectLiteralExpression);
  if (!obj) return {};
  const result: Record<string, unknown> = {};
  for (const prop of obj.getProperties()) {
    if (prop.getKind() === SyntaxKind.PropertyAssignment) {
      const pa = prop.asKind(SyntaxKind.PropertyAssignment);
      if (!pa) continue;
      const propName = pa.getName();
      const init = pa.getInitializer();
      if (!init) continue;
      const text = init.getText();
      if (Node.isStringLiteral(init)) {
        result[propName] = text.slice(1, -1);
      } else if (Node.isNumericLiteral(init)) {
        result[propName] = Number(text);
      } else if (Node.isPrefixUnaryExpression(init) && Node.isNumericLiteral(init.getOperand())) {
        const operand = Number(init.getOperand().getText());
        switch (init.getOperatorToken()) {
          case SyntaxKind.MinusToken:
            result[propName] = -operand;
            break;
          case SyntaxKind.PlusToken:
            result[propName] = operand;
            break;
          default:
            result[propName] = text;
            break;
        }
      } else if (
        init.getKind() === SyntaxKind.TrueKeyword ||
        init.getKind() === SyntaxKind.FalseKeyword
      ) {
        result[propName] = init.getKind() === SyntaxKind.TrueKeyword;
      } else {
        result[propName] = text;
      }
    }
  }
  return result;
}

function inferTsType(prop: PropertyDeclaration): string {
  const typeNode = prop.getTypeNode();
  if (typeNode) {
    return typeNode.getText();
  }
  // Use the property-level type which gives widened types (string, not "")
  return prop.getType().getText();
}

function makeDiag(
  severity: DiagnosticSeverity,
  code: Diagnostic['code'],
  message: string,
  file?: string,
  line?: number,
): Diagnostic {
  return { severity, code, message, file, line };
}

function extractStates(cls: ClassDeclaration): AnalyzedState[] {
  const states: AnalyzedState[] = [];
  for (const prop of cls.getProperties()) {
    if (!hasDecorator(prop, 'State')) continue;
    const fieldName = prop.getName();
    const opts = getDecoratorOptions(prop, 'State') as Partial<AnalyzedStateOptions>;
    const tsType = inferTsType(prop);
    const qmlType = (opts.qmlType as string | undefined) ?? mapTsTypeToQml(tsType) ?? '';
    const initializer = prop.getInitializer();
    states.push({
      fieldName,
      tsType,
      qmlType,
      qmlName: (opts.alias as string | undefined) ?? fieldName,
      defaultValue: initializer?.getText(),
      options: {
        alias: opts.alias as string | undefined,
        qmlType: opts.qmlType as string | undefined,
        readonly: opts.readonly as boolean | undefined,
        deferred: opts.deferred as boolean | undefined,
      },
      line: prop.getStartLineNumber(),
    });
  }
  return states;
}

function extractCommands(cls: ClassDeclaration): AnalyzedCommand[] {
  const commands: AnalyzedCommand[] = [];
  for (const method of cls.getMethods()) {
    if (!hasDecorator(method, 'Command')) continue;
    if (LIFECYCLE_METHODS.has(method.getName())) continue;
    const methodName = method.getName();
    const opts = getDecoratorOptions(method, 'Command') as Partial<AnalyzedCommandOptions>;
    const isAsync = opts.async === true || method.isAsync();
    const parameters: AnalyzedCommandParameter[] = method.getParameters().map((p) => {
      const tsType = p.getTypeNode()?.getText() ?? p.getType().getText();
      return {
        name: p.getName(),
        tsType,
        qmlType: mapTsTypeToQml(tsType) ?? tsType,
        optional: p.isOptional(),
        defaultValue: p.getInitializer()?.getText(),
      };
    });
    const returnTypeNode = method.getReturnTypeNode();
    const returnType = returnTypeNode ? returnTypeNode.getText() : method.getReturnType().getText();
    commands.push({
      methodName,
      qmlName: (opts.alias as string | undefined) ?? methodName,
      parameters,
      returnType,
      options: {
        id: opts.id as number | undefined,
        alias: opts.alias as string | undefined,
        async: isAsync || undefined,
        throttle: opts.throttle as AnalyzedCommandOptions['throttle'],
        throttleMs: opts.throttleMs as number | undefined,
      },
      bodyText: method.getBody()?.getText(),
      line: method.getStartLineNumber(),
    });
  }
  return commands;
}

function extractEffects(cls: ClassDeclaration): AnalyzedEffect[] {
  const effects: AnalyzedEffect[] = [];
  for (const prop of cls.getProperties()) {
    if (!hasDecorator(prop, 'Effect')) continue;
    const fieldName = prop.getName();
    const opts = getDecoratorOptions(prop, 'Effect');
    const parameters: AnalyzedEffectParameter[] = [];
    const callSignatures = prop.getType().getCallSignatures();
    const isFunctionTyped = callSignatures.length > 0;
    if (isFunctionTyped) {
      const signature = callSignatures[0]!;
      for (const param of signature.getParameters()) {
        const declaration = param.getDeclarations()[0];
        let tsType = param.getTypeAtLocation(prop).getText();
        if (declaration && Node.isParameterDeclaration(declaration)) {
          tsType = declaration.getTypeNode()?.getText() ?? declaration.getType().getText();
        }
        parameters.push({
          name: param.getName(),
          tsType,
        });
      }
    }
    effects.push({
      fieldName,
      qmlName: (opts.alias as string | undefined) ?? fieldName,
      parameters,
      isFunctionTyped,
      options: {
        id: opts.id as number | undefined,
        alias: opts.alias as string | undefined,
      },
      line: prop.getStartLineNumber(),
    });
  }
  return effects;
}

function extractLifecycle(cls: ClassDeclaration) {
  const methods = new Set(cls.getMethods().map((m) => m.getName()));
  return {
    hasOnMounted: methods.has('onMounted'),
    hasOnUnmounting: methods.has('onUnmounting'),
    hasOnBeforeHotReload: methods.has('onBeforeHotReload'),
    hasOnAfterHotReload: methods.has('onAfterHotReload'),
    hasOnVisibilityChanged: methods.has('onVisibilityChanged'),
  };
}

function extractConstructorParams(cls: ClassDeclaration): AnalyzedConstructorParam[] {
  const ctors = cls.getConstructors();
  if (ctors.length === 0) return [];
  const ctor = ctors[0]!;
  return ctor.getParameters().map((p) => ({
    name: p.getName(),
    type: p.getTypeNode()?.getText() ?? '',
    isService: false,
  }));
}

class ViewModelExtractorImpl implements ViewModelExtractor {
  extract(classDeclaration: ClassDeclaration): AnalyzedViewModel {
    const sf = classDeclaration.getSourceFile();
    return {
      className: classDeclaration.getName() ?? '<anonymous>',
      filePath: sf.getFilePath(),
      line: classDeclaration.getStartLineNumber(),
      isExported: classDeclaration.isExported() || classDeclaration.isDefaultExport(),
      states: extractStates(classDeclaration),
      commands: extractCommands(classDeclaration),
      effects: extractEffects(classDeclaration),
      lifecycle: extractLifecycle(classDeclaration),
      constructorParams: extractConstructorParams(classDeclaration),
    };
  }

  generateSchema(vm: AnalyzedViewModel, idAllocator: IdAllocator): ViewModelSchema {
    return {
      className: vm.className,
      version: 1,
      states: vm.states.map((s) => ({
        name: s.fieldName,
        qmlName: s.qmlName,
        qmlType: s.qmlType,
        memberId: idAllocator.allocateMemberId(vm.className, s.fieldName),
        readonly: s.options.readonly ?? false,
        deferred: s.options.deferred ?? false,
        defaultValue: s.defaultValue,
      })),
      commands: vm.commands.map((c) => ({
        name: c.methodName,
        qmlName: c.qmlName,
        commandId: idAllocator.allocateCommandId(vm.className, c.methodName),
        parameters: c.parameters.map((p) => ({ name: p.name, type: p.qmlType })),
        async: c.options.async ?? false,
        throttle: c.options.throttle ?? 'none',
        throttleMs: c.options.throttleMs ?? 0,
      })),
      effects: vm.effects.map((e) => ({
        name: e.fieldName,
        qmlName: e.qmlName,
        effectId: idAllocator.allocateEffectId(vm.className, e.fieldName),
        parameters: e.parameters.map((p) => ({ name: p.name, type: p.tsType })),
      })),
      lifecycle: {
        onMounted: vm.lifecycle.hasOnMounted,
        onUnmounting: vm.lifecycle.hasOnUnmounting,
        hotReload: vm.lifecycle.hasOnBeforeHotReload || vm.lifecycle.hasOnAfterHotReload,
      },
    };
  }

  validate(vm: AnalyzedViewModel): readonly Diagnostic[] {
    const diagnostics: Diagnostic[] = [];
    const file = vm.filePath;

    // A001: no @State fields
    if (vm.states.length === 0) {
      diagnostics.push(
        makeDiag(
          'warning',
          'QMLTS-A001',
          `ViewModel '${vm.className}' has no @State fields`,
          file,
          vm.line,
        ),
      );
    }

    // A002/A003: type inference and mapping
    for (const s of vm.states) {
      if (!s.tsType) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A002',
            `Cannot infer type for @State field '${s.fieldName}'`,
            file,
            s.line,
          ),
        );
      } else if (!s.qmlType) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A003',
            `Type '${s.tsType}' cannot be mapped to a QML type`,
            file,
            s.line,
          ),
        );
      }
    }

    // A004: abstract/bodyless command
    for (const c of vm.commands) {
      if (c.bodyText === undefined) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A004',
            `@Command '${c.methodName}' has an invalid signature`,
            file,
            c.line,
          ),
        );
      }
    }

    // A005: effect field must be function-typed
    for (const e of vm.effects) {
      if (!e.isFunctionTyped) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A005',
            `@Effect field '${e.fieldName}' must be function-typed`,
            file,
            e.line,
          ),
        );
      }
    }

    // A006: duplicate qmlName
    const qmlNames = new Map<string, string>();
    for (const s of vm.states) {
      const existing = qmlNames.get(s.qmlName);
      if (existing) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A006',
            `Duplicate QML name '${s.qmlName}' in ViewModel '${vm.className}'`,
            file,
            s.line,
          ),
        );
      } else {
        qmlNames.set(s.qmlName, 'state');
      }
    }
    for (const c of vm.commands) {
      const existing = qmlNames.get(c.qmlName);
      if (existing) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A006',
            `Duplicate QML name '${c.qmlName}' in ViewModel '${vm.className}'`,
            file,
            c.line,
          ),
        );
      } else {
        qmlNames.set(c.qmlName, 'command');
      }
    }
    for (const e of vm.effects) {
      const existing = qmlNames.get(e.qmlName);
      if (existing) {
        diagnostics.push(
          makeDiag(
            'error',
            'QMLTS-A006',
            `Duplicate QML name '${e.qmlName}' in ViewModel '${vm.className}'`,
            file,
            e.line,
          ),
        );
      } else {
        qmlNames.set(e.qmlName, 'effect');
      }
    }

    // A007: ViewModel not exported
    if (!vm.isExported) {
      diagnostics.push(
        makeDiag(
          'warning',
          'QMLTS-A007',
          `ViewModel '${vm.className}' is not exported`,
          file,
          vm.line,
        ),
      );
    }

    // A010: constructor param unresolvable
    for (const cp of vm.constructorParams) {
      if (!cp.type) {
        diagnostics.push(
          makeDiag(
            'warning',
            'QMLTS-A010',
            `Cannot resolve type for constructor parameter '${cp.name}'`,
            file,
            vm.line,
          ),
        );
      }
    }

    return diagnostics;
  }
}

export function createViewModelExtractor(): ViewModelExtractor {
  return new ViewModelExtractorImpl();
}
