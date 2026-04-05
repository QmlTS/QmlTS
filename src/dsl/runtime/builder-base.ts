import type {
  AttachedBindingNode,
  BindingNode,
  BindingValue,
  GroupedBindingNode,
  IdAssignmentNode,
  ObjectDefinitionNode,
  ObjectMember,
  SignalHandlerNode,
} from '../../ast/types.js';
import { isEnumToken, type QmlEnumToken } from './enum-token.js';

/** Common interface for all DSL object builders. */
export interface QmlObjectBuilder {
  readonly __typeName: string;
  id(id: string): this;
  child(obj: QmlObjectBuilder): this;
  build(): ObjectDefinitionNode;
}

/** Value that can be passed to a property setter */
export type DslPropertyValue = number | string | boolean | null | QmlEnumToken;

/** A single property entry for grouped/attached callbacks */
export interface BuilderEntry {
  readonly property: string;
  readonly value?: DslPropertyValue;
  readonly expression?: string;
}

/**
 * Base implementation for generated DSL builders.
 * Generated per-type builders extend this and add typed property methods.
 */
export class DslBuilderImpl implements QmlObjectBuilder {
  readonly __typeName: string;
  protected readonly members: ObjectMember[] = [];

  constructor(typeName: string) {
    this.__typeName = typeName;
  }

  id(id: string): this {
    const node: IdAssignmentNode = { kind: 'IdAssignment', id };
    this.members.push(node);
    return this;
  }

  child(obj: QmlObjectBuilder): this {
    this.members.push(obj.build());
    return this;
  }

  /** Set a property to a literal value. */
  setProp(property: string, value: DslPropertyValue): this {
    const bindingValue = toDslBindingValue(value);
    const node: BindingNode = { kind: 'Binding', property, value: bindingValue };
    this.members.push(node);
    return this;
  }

  /** Set a property to a binding expression (evaluated at QML runtime). */
  setBinding(property: string, expression: string): this {
    const node: BindingNode = {
      kind: 'Binding',
      property,
      value: { kind: 'expression', code: expression },
    };
    this.members.push(node);
    return this;
  }

  /** Add a signal handler. */
  handleSignal(name: string, body: string): this {
    const node: SignalHandlerNode = {
      kind: 'SignalHandler',
      name,
      body: { form: 'block', code: body },
    };
    this.members.push(node);
    return this;
  }

  /** Add a grouped property binding (e.g., border { width: 2; color: "black" }). */
  addGrouped(group: string, entries: BuilderEntry[]): this {
    const bindings: BindingNode[] = entries.map((e) => ({
      kind: 'Binding' as const,
      property: e.property,
      value:
        e.expression !== undefined
          ? { kind: 'expression' as const, code: e.expression }
          : toDslBindingValue(e.value!),
    }));
    const node: GroupedBindingNode = { kind: 'GroupedBinding', group, bindings };
    this.members.push(node);
    return this;
  }

  /** Add an attached property binding (e.g., Layout.fillWidth: true). */
  addAttached(attachedTypeName: string, entries: BuilderEntry[]): this {
    const bindings: BindingNode[] = entries.map((e) => ({
      kind: 'Binding' as const,
      property: e.property,
      value:
        e.expression !== undefined
          ? { kind: 'expression' as const, code: e.expression }
          : toDslBindingValue(e.value!),
    }));
    const node: AttachedBindingNode = {
      kind: 'AttachedBinding',
      attachedTypeName,
      bindings,
    };
    this.members.push(node);
    return this;
  }

  /** Add a raw AST member (escape hatch for advanced usage). */
  addRawMember(member: ObjectMember): this {
    this.members.push(member);
    return this;
  }

  build(): ObjectDefinitionNode {
    return {
      kind: 'ObjectDefinition',
      typeName: this.__typeName,
      members: [...this.members],
    };
  }
}

function toDslBindingValue(value: DslPropertyValue): BindingValue {
  if (value === null) return { kind: 'null' };
  if (typeof value === 'number') return { kind: 'number', value };
  if (typeof value === 'boolean') return { kind: 'boolean', value };
  if (typeof value === 'string') return { kind: 'string', value };
  if (isEnumToken(value)) {
    return {
      kind: 'enum',
      typeName: value.owner,
      enumName: value.enumName,
      valueName: value.member,
    };
  }
  return { kind: 'null' };
}
