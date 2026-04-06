import { createDocument, createObject } from '../../../src/ast/builder.js';
import type {
  AttachedBindingNode,
  BindingNode,
  FunctionDeclarationNode,
  ImportNode,
  ObjectDefinitionNode,
  ObjectMember,
  QmlDocument,
  SignalHandlerNode,
} from '../../../src/ast/types.js';
import type { Diagnostic } from '../../../src/compiler/diagnostics.js';
import type {
  CommandBindingInfo,
  EffectListenerInfo,
  RequiredImport,
  StateBindingInfo,
  TransformResult,
} from '../../../src/compiler/transform/transform-types.js';
import type {
  AnalyzedCommand,
  AnalyzedCommandParameter,
  AnalyzedEffect,
  AnalyzedEffectParameter,
  AnalyzedState,
  AnalyzedViewModel,
} from '../../../src/compiler/viewmodel/extractor-types.js';
import { RegistryQuery } from '../../../src/registry/registry-query.js';
import type {
  QmlProperty,
  QmlRegistry,
  QmlType,
  RegistryQueryInterface,
} from '../../../src/registry/types.js';
import type { AnalyzedLifecycle } from '../../../src/viewmodel/lifecycle.js';

// ─── Mock TransformResult Builder ───────────────────────────────────────

export interface TransformResultBuilder {
  withImports(...imports: RequiredImport[]): TransformResultBuilder;
  withStateBindings(...bindings: StateBindingInfo[]): TransformResultBuilder;
  withCommandBindings(...bindings: CommandBindingInfo[]): TransformResultBuilder;
  withEffectListeners(...listeners: EffectListenerInfo[]): TransformResultBuilder;
  withDiagnostics(...diags: Diagnostic[]): TransformResultBuilder;
  withDocument(doc: QmlDocument): TransformResultBuilder;
  withRootObject(obj: ObjectDefinitionNode): TransformResultBuilder;
  build(): TransformResult;
}

export function createTransformResultBuilder(): TransformResultBuilder {
  let document: QmlDocument = createDocument().root(createObject('Rectangle'));
  const requiredImports: RequiredImport[] = [];
  const stateBindings: StateBindingInfo[] = [];
  const commandBindings: CommandBindingInfo[] = [];
  const effectListeners: EffectListenerInfo[] = [];
  const diagnostics: Diagnostic[] = [];

  const builder: TransformResultBuilder = {
    withImports(...imports) {
      requiredImports.push(...imports);
      return builder;
    },
    withStateBindings(...bindings) {
      stateBindings.push(...bindings);
      return builder;
    },
    withCommandBindings(...bindings) {
      commandBindings.push(...bindings);
      return builder;
    },
    withEffectListeners(...listeners) {
      effectListeners.push(...listeners);
      return builder;
    },
    withDiagnostics(...diags) {
      diagnostics.push(...diags);
      return builder;
    },
    withDocument(doc) {
      document = doc;
      return builder;
    },
    withRootObject(obj) {
      document = createDocument().root(obj);
      return builder;
    },
    build(): TransformResult {
      return {
        document,
        requiredImports,
        stateBindings,
        commandBindings,
        effectListeners,
        diagnostics,
      };
    },
  };

  return builder;
}

// ─── Mock AnalyzedViewModel Builder ─────────────────────────────────────

export function createMockViewModel(
  overrides: {
    className?: string;
    states?: AnalyzedState[];
    commands?: AnalyzedCommand[];
    effects?: AnalyzedEffect[];
    lifecycle?: Partial<AnalyzedLifecycle>;
  } = {},
): AnalyzedViewModel {
  return {
    className: overrides.className ?? 'TestViewModel',
    filePath: '/test/TestViewModel.ts',
    line: 1,
    isExported: true,
    states: overrides.states ?? [],
    commands: overrides.commands ?? [],
    effects: overrides.effects ?? [],
    lifecycle: {
      hasOnMounted: false,
      hasOnUnmounting: false,
      hasOnBeforeHotReload: false,
      hasOnAfterHotReload: false,
      hasOnVisibilityChanged: false,
      ...overrides.lifecycle,
    },
    constructorParams: [],
  };
}

export function createMockState(
  fieldName: string,
  opts: {
    tsType?: string;
    qmlType?: string;
    qmlName?: string;
    readonly?: boolean;
  } = {},
): AnalyzedState {
  return {
    fieldName,
    tsType: opts.tsType ?? 'string',
    qmlType: opts.qmlType ?? 'string',
    qmlName: opts.qmlName ?? fieldName,
    options: { readonly: opts.readonly },
    line: 1,
  };
}

export function createMockCommand(
  methodName: string,
  opts: {
    id?: number;
    parameters?: AnalyzedCommandParameter[];
    alias?: string;
  } = {},
): AnalyzedCommand {
  return {
    methodName,
    qmlName: opts.alias ?? methodName,
    parameters: opts.parameters ?? [],
    returnType: 'void',
    options: {
      id: opts.id,
      alias: opts.alias,
    },
    line: 1,
  };
}

export function createMockEffect(
  fieldName: string,
  opts: {
    id?: number;
    parameters?: AnalyzedEffectParameter[];
    alias?: string;
  } = {},
): AnalyzedEffect {
  return {
    fieldName,
    qmlName: opts.alias ?? fieldName,
    parameters: opts.parameters ?? [],
    isFunctionTyped: true,
    options: {
      id: opts.id,
      alias: opts.alias,
    },
    line: 1,
  };
}

// ─── Mock Registry (extends Step 5 with Connections + Component) ────────

function makeProperty(name: string, type: string, opts: Partial<QmlProperty> = {}): QmlProperty {
  return {
    name,
    type,
    cppType: type,
    readonly: false,
    constant: false,
    required: false,
    final: false,
    pointer: false,
    list: false,
    hasNotify: true,
    hasBindable: false,
    ...opts,
  };
}

function makeType(
  qualifiedName: string,
  qmlName: string,
  moduleUri: string,
  opts: {
    baseType?: string;
    properties?: QmlProperty[];
    creatable?: boolean;
  } = {},
): QmlType {
  return {
    qualifiedName,
    qmlName,
    moduleUri,
    accessSemantics: 'reference',
    exports: [{ module: moduleUri, name: qmlName, version: '6.11', revision: 0 }],
    creatable: opts.creatable ?? true,
    singleton: false,
    properties: opts.properties ?? [],
    signals: [],
    methods: [],
    enums: [],
    sources: [],
    baseType: opts.baseType,
  };
}

export function createPostProcessorRegistry(): RegistryQueryInterface {
  const types: QmlType[] = [
    makeType('QtQuick::Item', 'Item', 'QtQuick', {
      properties: [
        makeProperty('width', 'real'),
        makeProperty('height', 'real'),
        makeProperty('children', 'list<Item>', {
          readonly: true,
          list: true,
        }),
      ],
    }),
    makeType('QtQuick::Rectangle', 'Rectangle', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('color', 'color'), makeProperty('radius', 'real')],
    }),
    makeType('QtQuick::Text', 'Text', 'QtQuick', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('text', 'string')],
    }),
    makeType('QtQml::Connections', 'Connections', 'QtQml', {
      properties: [makeProperty('target', 'var')],
    }),
    makeType('QtQml::Component', 'Component', 'QtQml', {
      properties: [],
    }),
    makeType('QtQuick.Controls::Button', 'Button', 'QtQuick.Controls', {
      baseType: 'QtQuick::Item',
      properties: [makeProperty('text', 'string')],
    }),
  ];

  const registry: QmlRegistry = {
    formatVersion: '1.0.0',
    generatedAt: '2026-01-01T00:00:00Z',
    qtVersion: '6.11.0',
    qtDir: '/mock/qt',
    buildDuration: 0,
    modules: [
      {
        uri: 'QtQuick',
        dirPath: '/mock/QtQuick',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Item', 'Rectangle', 'Text'],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQml',
        dirPath: '/mock/QtQml',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Connections', 'Component'],
        qmlFileTypes: [],
      },
      {
        uri: 'QtQuick.Controls',
        dirPath: '/mock/QtQuick.Controls',
        designerSupported: false,
        isStatic: false,
        isSystem: true,
        imports: [],
        dependencies: [],
        exportedTypeNames: ['Button'],
        qmlFileTypes: [],
      },
    ],
    types,
    builtins: [],
    stats: {
      moduleCount: 3,
      typeCount: types.length,
      builtinCount: 0,
      sourceFiles: { qmltypes: 0, qmldir: 0, metatypes: 0 },
    },
  };

  return new RegistryQuery(registry);
}

// ─── AST Query Helpers ──────────────────────────────────────────────────

export function findChildByType(
  root: ObjectDefinitionNode,
  typeName: string,
): ObjectDefinitionNode | undefined {
  return root.members.find(
    (m): m is ObjectDefinitionNode => m.kind === 'ObjectDefinition' && m.typeName === typeName,
  );
}

export function findAttachedBinding(
  root: ObjectDefinitionNode,
  attachedTypeName: string,
): AttachedBindingNode | undefined {
  return root.members.find(
    (m): m is AttachedBindingNode =>
      m.kind === 'AttachedBinding' && m.attachedTypeName === attachedTypeName,
  );
}

export function findBinding(
  members: readonly (ObjectMember | BindingNode)[],
  property: string,
): BindingNode | undefined {
  return members.find((m): m is BindingNode => m.kind === 'Binding' && m.property === property);
}

export function findSignalHandler(
  members: readonly ObjectMember[],
  name: string,
): SignalHandlerNode | undefined {
  return members.find((m): m is SignalHandlerNode => m.kind === 'SignalHandler' && m.name === name);
}

export function findFunctionDeclaration(
  members: readonly ObjectMember[],
  name: string,
): FunctionDeclarationNode | undefined {
  return members.find(
    (m): m is FunctionDeclarationNode => m.kind === 'FunctionDeclaration' && m.name === name,
  );
}

export function findImport(
  imports: readonly ImportNode[],
  moduleUri: string,
): ImportNode | undefined {
  return imports.find((i) => i.moduleUri === moduleUri);
}
