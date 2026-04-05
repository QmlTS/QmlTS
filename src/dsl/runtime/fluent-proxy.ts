import { DslBuilderImpl, type QmlObjectBuilder } from './builder-base.js';
import type { AttachedMeta, GroupedMeta, TypeMetadata } from './metadata.js';
import { createPropertyCollector } from './property-collector.js';

const BUILTIN_METHODS = new Set(['id', 'child', 'build', '__typeName', 'addRawMember']);

/**
 * Create a Proxy-backed fluent builder for a QML type.
 * Dispatches method calls based on per-type metadata.
 * Throws TypeError on unknown methods (fail-fast).
 */
export function createFluentBuilder(typeName: string, metadata: TypeMetadata): QmlObjectBuilder {
  const impl = new DslBuilderImpl(typeName);

  const propMap = new Map(metadata.properties.map((p) => [p.name, p]));
  const signalMap = new Map(metadata.signals.map((s) => [s.handlerName, s]));
  const groupedMap = new Map(metadata.grouped.map((g) => [g.methodName, g]));
  const attachedMap = new Map(metadata.attached.map((a) => [a.methodName, a]));

  const handler: ProxyHandler<DslBuilderImpl> = {
    get(target, prop: string): unknown {
      // Built-in methods → delegate to DslBuilderImpl
      if (BUILTIN_METHODS.has(prop)) {
        const val = Reflect.get(target, prop, target);
        if (typeof val === 'function') {
          return (...args: unknown[]) => {
            const result = (val as (...a: unknown[]) => unknown).apply(target, args);
            return result === target ? proxy : result;
          };
        }
        return val;
      }

      // Bind suffix → setBinding
      if (prop.endsWith('Bind')) {
        const baseName = prop.slice(0, -4);
        const meta = propMap.get(baseName);
        if (meta?.hasBinding) {
          return (expr: string) => {
            target.setBinding(baseName, expr);
            return proxy;
          };
        }
        // Fall through to unknown method error below
      }

      // Signal handler (onXxx)
      const sig = signalMap.get(prop);
      if (sig) {
        return (body: string) => {
          target.handleSignal(prop, body);
          return proxy;
        };
      }

      // Grouped property callback
      const grouped = groupedMap.get(prop);
      if (grouped) {
        return (setup: (b: unknown) => void) => {
          dispatchGrouped(target, grouped, setup);
          return proxy;
        };
      }

      // Attached type callback
      const attached = attachedMap.get(prop);
      if (attached) {
        return (setup: (b: unknown) => void) => {
          dispatchAttached(target, attached, setup);
          return proxy;
        };
      }

      // Value property setter
      const meta = propMap.get(prop);
      if (meta?.hasValue) {
        return (value: unknown) => {
          target.setProp(prop, value as Parameters<typeof target.setProp>[1]);
          return proxy;
        };
      }

      throw new TypeError(
        `Unknown method "${prop}" on ${typeName}Builder. ` +
          `Known properties: ${[...propMap.keys()].slice(0, 5).join(', ')}${propMap.size > 5 ? '...' : ''}`,
      );
    },
  };

  const proxy = new Proxy(impl, handler) as unknown as QmlObjectBuilder;
  return proxy;
}

function dispatchGrouped(
  impl: DslBuilderImpl,
  meta: GroupedMeta,
  setup: (b: unknown) => void,
): void {
  const collector = createPropertyCollector(meta.properties, []);
  setup(collector);
  const entries = collector.__entries();
  impl.addGrouped(meta.groupName, entries);
}

function dispatchAttached(
  impl: DslBuilderImpl,
  meta: AttachedMeta,
  setup: (b: unknown) => void,
): void {
  const collector = createPropertyCollector(meta.properties, meta.signals);
  setup(collector);
  const entries = collector.__entries();
  impl.addAttached(meta.attachedTypeName, entries);
}
