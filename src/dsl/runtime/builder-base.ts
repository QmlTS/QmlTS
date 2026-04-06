import type {
  AttachedBindingNode,
  BindingNode,
  BindingValue,
  GroupedBindingNode,
  IdAssignmentNode,
  ObjectDefinitionNode,
  ObjectMember,
  SignalHandlerBody,
  SignalHandlerNode,
} from '../../ast/types.js';
import { isEnumToken, type QmlEnumToken } from './enum-token.js';

/** Common interface for all DSL object builders. */
export interface QmlObjectBuilder {
  readonly __typeName: string;
  id(id: string): this;
  child(obj: QmlObjectBuilder): this;
  children(...objs: QmlObjectBuilder[]): this;
  build(): ObjectDefinitionNode;
}

/** Value that can be passed to a property setter */
export type DslPropertyValue = number | string | boolean | null | QmlEnumToken;

/**
 * A callable signal handler — arrow function for inline handlers,
 * or function/method reference for compiler-resolved command references.
 * Uses bivariant callback pattern so inline arrow handlers retain
 * contextual typing while command-reference functions are also accepted.
 */
export type DslSignalHandlerFn = {
  bivarianceHack(...args: unknown[]): unknown;
}['bivarianceHack'];

/**
 * Value accepted by signal handler methods (onXxx).
 * - `string`: block handler body — emitted as `onXxx: { code }`
 * - Arrow function: parsed at runtime — emitted as `onXxx: (params) => body`
 * - Function/method reference: command reference — stored as expression, resolved by compiler
 */
export type DslSignalHandlerValue = string | DslSignalHandlerFn;

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

  children(...objs: QmlObjectBuilder[]): this {
    for (const obj of objs) {
      this.members.push(obj.build());
    }
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

  /** Add a signal handler. Accepts a string body, an arrow function, or a command reference. */
  handleSignal(name: string, handler: DslSignalHandlerValue): this {
    const body = toSignalHandlerBody(handler);
    const node: SignalHandlerNode = { kind: 'SignalHandler', name, body };
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

// ─── Signal Handler Parsing ─────────────────────────────────────────────

function toSignalHandlerBody(handler: DslSignalHandlerValue): SignalHandlerBody {
  if (typeof handler === 'string') {
    return { form: 'block', code: handler };
  }

  if (typeof handler === 'function') {
    const parsed = parseArrowFunction(handler as (...args: unknown[]) => unknown);
    if (parsed) {
      return {
        form: 'arrow',
        parameters: parsed.params,
        body: parsed.body,
        isBlock: parsed.isBlock,
      };
    }
    // Reject bound methods — they are not a supported command-reference form
    const fnName = (handler as { name: string }).name;
    if (fnName.startsWith('bound ')) {
      throw new TypeError(
        `Bound methods are not supported as signal handlers. ` +
          `Use the unbound form: onXxx(vm.methodName)`,
      );
    }
    // Command reference — store function name as expression for compiler resolution
    return { form: 'expression', code: fnName || 'commandRef' };
  }

  throw new TypeError(`Invalid signal handler value: ${typeof handler}`);
}

/**
 * Parse a JavaScript arrow function's toString() into its components.
 * Returns null if the function is not an arrow function (e.g., bound method, named function).
 */
export function parseArrowFunction(fn: (...args: unknown[]) => unknown): {
  params: string[];
  body: string;
  isBlock: boolean;
} | null {
  const source = fn.toString().trim();

  // Named/bound functions are not arrow functions
  if (
    source.startsWith('function') ||
    source.startsWith('class') ||
    source.includes('[native code]')
  ) {
    return null;
  }

  // Match arrow function: [async] params => body
  // Handles: () => expr, (a, b) => expr, x => expr, (a) => { stmts }
  const match = source.match(/^(?:async\s+)?(?:\(([^)]*)\)|(\w+))\s*=>\s*([\s\S]*)$/);
  if (!match) return null;

  const paramStr = (match[1] ?? match[2] ?? '').trim();
  const params = paramStr ? paramStr.split(',').map((p) => p.trim()) : [];

  let body = match[3]!.trim();
  let isBlock = false;

  if (body.startsWith('{') && body.endsWith('}')) {
    isBlock = true;
    body = body.slice(1, -1).trim();
  }

  return { params, body, isBlock };
}
