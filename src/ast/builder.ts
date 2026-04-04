import type {
  ArrayBindingNode,
  ArrowHandlerDef,
  AttachedBindingBuilder,
  AttachedBindingNode,
  BehaviorOnNode,
  BindableValue,
  BindingNode,
  CommentNode,
  DocumentBuilder,
  EnumDeclarationNode,
  EnumMemberNode,
  FunctionDeclarationNode,
  FunctionSignature,
  GroupedBindingBuilder,
  GroupedBindingNode,
  IdAssignmentNode,
  ImportNode,
  InlineComponentNode,
  ObjectBuilder,
  ObjectDefinitionNode,
  ObjectMember,
  ParameterNode,
  PragmaName,
  PragmaNode,
  PropertyAliasNode,
  PropertyDeclarationNode,
  PropertyModifiers,
  QmlDocument,
  SignalDeclarationNode,
  SignalHandlerNode,
} from './types.js';
import { toBindingValue } from './values.js';

function resolveObject(obj: ObjectBuilder | ObjectDefinitionNode): ObjectDefinitionNode {
  return 'build' in obj ? obj.build() : obj;
}

/** Create a DocumentBuilder for constructing QmlDocument ASTs. */
export function createDocument(): DocumentBuilder {
  const pragmas: PragmaNode[] = [];
  const imports: ImportNode[] = [];

  const builder: DocumentBuilder = {
    pragma(name: PragmaName, value?: string) {
      const node: PragmaNode = { kind: 'Pragma', name };
      if (value !== undefined) node.value = value;
      pragmas.push(node);
      return builder;
    },

    importModule(uri: string, version?: string, qualifier?: string) {
      const node: ImportNode = { kind: 'Import', importKind: 'module', moduleUri: uri };
      if (version !== undefined) node.version = version;
      if (qualifier !== undefined) node.qualifier = qualifier;
      imports.push(node);
      return builder;
    },

    importDirectory(path: string, qualifier?: string) {
      const node: ImportNode = { kind: 'Import', importKind: 'directory', path };
      if (qualifier !== undefined) node.qualifier = qualifier;
      imports.push(node);
      return builder;
    },

    importJs(path: string, qualifier: string) {
      imports.push({ kind: 'Import', importKind: 'javascript', path, qualifier });
      return builder;
    },

    addImport(node: ImportNode) {
      imports.push(node);
      return builder;
    },

    root(object: ObjectBuilder | ObjectDefinitionNode): QmlDocument {
      return {
        kind: 'Document',
        pragmas: [...pragmas],
        imports: [...imports],
        rootObject: resolveObject(object),
      };
    },
  };

  return builder;
}

/** Create an ObjectBuilder for constructing ObjectDefinitionNode ASTs. */
export function createObject(typeName: string): ObjectBuilder {
  const members: ObjectMember[] = [];

  const builder: ObjectBuilder = {
    id(id: string) {
      const node: IdAssignmentNode = { kind: 'IdAssignment', id };
      members.push(node);
      return builder;
    },

    declareProp(
      type: string,
      name: string,
      initialValue?: BindableValue,
      modifiers?: PropertyModifiers,
    ) {
      const node: PropertyDeclarationNode = {
        kind: 'PropertyDeclaration',
        name,
        typeName: type,
      };
      if (modifiers?.default) node.isDefault = true;
      if (modifiers?.virtual) node.isVirtual = true;
      if (modifiers?.override) node.isOverride = true;
      if (modifiers?.final) node.isFinal = true;
      if (modifiers?.required) node.isRequired = true;
      if (modifiers?.readonly) node.isReadonly = true;
      if (initialValue !== undefined) node.initialValue = toBindingValue(initialValue);
      members.push(node);
      return builder;
    },

    declareAlias(
      name: string,
      targetPath: string,
      modifiers?: Pick<PropertyModifiers, 'default' | 'readonly'>,
    ) {
      const node: PropertyAliasNode = { kind: 'PropertyAlias', name, targetPath };
      if (modifiers?.default) node.isDefault = true;
      if (modifiers?.readonly) node.isReadonly = true;
      members.push(node);
      return builder;
    },

    bind(property: string, value: BindableValue) {
      const node: BindingNode = {
        kind: 'Binding',
        property,
        value: toBindingValue(value),
      };
      members.push(node);
      return builder;
    },

    grouped(group: string, setup: (g: GroupedBindingBuilder) => void) {
      const bindings: BindingNode[] = [];
      const g: GroupedBindingBuilder = {
        bind(property: string, value: BindableValue) {
          bindings.push({
            kind: 'Binding',
            property,
            value: toBindingValue(value),
          });
          return g;
        },
      };
      setup(g);
      const node: GroupedBindingNode = { kind: 'GroupedBinding', group, bindings };
      members.push(node);
      return builder;
    },

    attached(typeName: string, setup: (a: AttachedBindingBuilder) => void) {
      const bindings: BindingNode[] = [];
      const a: AttachedBindingBuilder = {
        bind(property: string, value: BindableValue) {
          bindings.push({
            kind: 'Binding',
            property,
            value: toBindingValue(value),
          });
          return a;
        },
        handler(name: string, body: BindableValue | ArrowHandlerDef) {
          // Attached handlers are stored as BindingNodes with signal handler semantics
          // But the spec says AttachedBindingNode.bindings is BindingNode[]
          // So handlers in attached context become Binding nodes
          if (isArrowHandlerDef(body)) {
            bindings.push({
              kind: 'Binding',
              property: name,
              value: toBindingValue(v_block_from_arrow(body)),
            });
          } else {
            bindings.push({
              kind: 'Binding',
              property: name,
              value: toBindingValue(body),
            });
          }
          return a;
        },
      };
      setup(a);
      const node: AttachedBindingNode = {
        kind: 'AttachedBinding',
        attachedTypeName: typeName,
        bindings,
      };
      members.push(node);
      return builder;
    },

    arrayBind(property: string, elements: BindableValue[]) {
      const node: ArrayBindingNode = {
        kind: 'ArrayBinding',
        property,
        elements: elements.map(toBindingValue),
      };
      members.push(node);
      return builder;
    },

    behaviorOn(property: string, animationObject: ObjectBuilder | ObjectDefinitionNode) {
      const resolved = resolveObject(animationObject);
      const node: BehaviorOnNode = {
        kind: 'BehaviorOn',
        property,
        members: [resolved],
      };
      members.push(node);
      return builder;
    },

    declareSignal(name: string, parameters?: ParameterNode[]) {
      const node: SignalDeclarationNode = {
        kind: 'SignalDeclaration',
        name,
        parameters: parameters ?? [],
      };
      members.push(node);
      return builder;
    },

    handler(name: string, body: BindableValue | ArrowHandlerDef) {
      let handlerNode: SignalHandlerNode;
      if (isArrowHandlerDef(body)) {
        handlerNode = {
          kind: 'SignalHandler',
          name,
          body: {
            form: 'arrow',
            parameters: body.params,
            body: body.body,
            isBlock: body.isBlock ?? false,
          },
        };
      } else {
        const val = toBindingValue(body);
        if (val.kind === 'script-block') {
          handlerNode = {
            kind: 'SignalHandler',
            name,
            body: { form: 'block', code: val.code },
          };
        } else if (val.kind === 'expression') {
          handlerNode = {
            kind: 'SignalHandler',
            name,
            body: { form: 'expression', code: val.code },
          };
        } else {
          // For other value types, treat as expression
          handlerNode = {
            kind: 'SignalHandler',
            name,
            body: {
              form: 'expression',
              code: String(
                val.kind === 'number' ? val.value : val.kind === 'boolean' ? val.value : 'null',
              ),
            },
          };
        }
      }
      members.push(handlerNode);
      return builder;
    },

    fn(name: string, signature: FunctionSignature, body: string) {
      const node: FunctionDeclarationNode = {
        kind: 'FunctionDeclaration',
        name,
        parameters: signature.params ?? [],
        body,
      };
      if (signature.returnType !== undefined) node.returnType = signature.returnType;
      members.push(node);
      return builder;
    },

    child(object: ObjectBuilder | ObjectDefinitionNode) {
      members.push(resolveObject(object));
      return builder;
    },

    inlineComponent(name: string, object: ObjectBuilder | ObjectDefinitionNode) {
      const node: InlineComponentNode = {
        kind: 'InlineComponent',
        name,
        body: resolveObject(object),
      };
      members.push(node);
      return builder;
    },

    declareEnum(name: string, enumMembers: EnumMemberNode[]) {
      const node: EnumDeclarationNode = {
        kind: 'EnumDeclaration',
        name,
        members: enumMembers,
      };
      members.push(node);
      return builder;
    },

    comment(text: string, style: 'line' | 'block' = 'line') {
      const node: CommentNode = { kind: 'Comment', text, style };
      members.push(node);
      return builder;
    },

    addMember(member: ObjectMember) {
      members.push(member);
      return builder;
    },

    build(): ObjectDefinitionNode {
      return {
        kind: 'ObjectDefinition',
        typeName,
        members: [...members],
      };
    },
  };

  return builder;
}

function isArrowHandlerDef(body: unknown): body is ArrowHandlerDef {
  return (
    typeof body === 'object' &&
    body !== null &&
    'params' in body &&
    'body' in body &&
    !('kind' in body)
  );
}

function v_block_from_arrow(def: ArrowHandlerDef): import('./types.js').ScriptBlock {
  return { kind: 'script-block', code: def.body };
}
