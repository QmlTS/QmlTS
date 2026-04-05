# DSL Generator Completion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete module 05 by making the generated fluent DSL work at runtime (metadata-driven Proxy), resolving enum types (two-tier), adding an orchestration layer, and writing end-to-end acceptance tests.

**Architecture:** Each generated factory function produces a Proxy-backed builder whose dispatch is driven by per-type metadata (properties, signals, grouped, attached). The analyzer builds a global enum index for two-tier enum→QmlEnumToken resolution. A new orchestration layer provides write/format/validate as separate post-generation steps. Acceptance tests import generated types and verify full round-trip (fluent API → AST → QML).

**Tech Stack:** TypeScript 6.0 / Bun / Biome / Qt 6.11.0 registry snapshot

**Branch:** `05-dsl-generator-completion` from `main`

**Spec:** `docs/superpowers/specs/2026-04-05-dsl-generator-completion-design.md`

---

## File Map

### New Files

| File | Responsibility |
|------|---------------|
| `src/dsl/runtime/metadata.ts` | TypeMetadata, PropertyMeta, SignalMeta, GroupedMeta, AttachedMeta interfaces |
| `src/dsl/runtime/property-collector.ts` | PropertyCollector Proxy for grouped/attached callbacks |
| `src/dsl/runtime/fluent-proxy.ts` | `createFluentBuilder()` — Proxy handler dispatching by metadata |
| `src/dsl/generator/orchestration.ts` | `writeGeneratedFiles()`, `formatGeneratedFiles()`, `validateGeneratedFiles()` |
| `tests/dsl/runtime/fluent-proxy.test.ts` | Proxy dispatch tests + fail-fast |
| `tests/dsl/runtime/property-collector.test.ts` | PropertyCollector tests |
| `tests/dsl/acceptance.test.ts` | End-to-end fluent API tests (import generated Rectangle, Text, etc.) |
| `tests/dsl/full-generation.test.ts` | Full-registry generation acceptance (warning budget, determinism) |

### Modified Files

| File | Changes |
|------|---------|
| `src/dsl/runtime/builder-base.ts` | Extend `GroupedEntry` to support expression bindings; export entry types |
| `src/dsl/runtime/index.ts` | Re-export metadata, PropertyCollector, createFluentBuilder |
| `src/dsl/generator/types.ts` | Add `EnumIndex`/`EnumResolution` to IR; remove `formatOutput`/`validateOutput` from `GeneratorConfig` |
| `src/dsl/generator/analyzer.ts` | Build `EnumIndex` during analysis; add to `AnalyzedRegistry` |
| `src/dsl/generator/type-mapper.ts` | Accept `EnumIndex`; two-tier enum resolution (QmlEnumToken / QmlValue) |
| `src/dsl/generator/code-emitter.ts` | Generate TypeMetadata per type; change signal handler sigs from function to string; use `createFluentBuilder` in factories; enum-typed properties → QmlEnumToken |
| `src/dsl/generator/generator.ts` | Pass enum index from analyzer to TypeMapper |
| `src/dsl/generator/index.ts` | Re-export orchestration module |
| `scripts/generate-dsl.ts` | Use orchestration layer; add `--format`/`--validate` flags and print generation statistics |
| `src/dsl/generated/**` | Regenerated P0 snapshot with metadata + new signatures |
| `src/index.ts` | Add orchestration to DSL exports |

---

## Task 1: Runtime Metadata Types

**Files:**
- Create: `src/dsl/runtime/metadata.ts`

- [ ] **Step 1: Create metadata type definitions**

```typescript
// src/dsl/runtime/metadata.ts

/** Metadata for a single writable property on a QML type */
export interface PropertyMeta {
  readonly name: string;
  readonly hasValue: boolean;
  readonly hasBinding: boolean;
}

/** Metadata for a signal handler on a QML type */
export interface SignalMeta {
  readonly handlerName: string;
  readonly paramCount: number;
}

/** Metadata for a grouped property surface (e.g., border, anchors) */
export interface GroupedMeta {
  readonly methodName: string;
  readonly groupName: string;
  readonly properties: readonly PropertyMeta[];
}

/** Metadata for an attached type surface (e.g., Layout, Keys) */
export interface AttachedMeta {
  readonly methodName: string;
  readonly attachedTypeName: string;
  readonly properties: readonly PropertyMeta[];
  readonly signals: readonly SignalMeta[];
}

/** Complete runtime metadata for one QML type, used by Proxy dispatch */
export interface TypeMetadata {
  readonly typeName: string;
  readonly properties: readonly PropertyMeta[];
  readonly signals: readonly SignalMeta[];
  readonly grouped: readonly GroupedMeta[];
  readonly attached: readonly AttachedMeta[];
  readonly defaultProperty?: string;
}
```

- [ ] **Step 2: Verify typecheck**

Run: `bunx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 3: Commit**

```
git add src/dsl/runtime/metadata.ts
git commit -m "feat(dsl): add TypeMetadata runtime types for Proxy dispatch"
```

---

## Task 2: Extend DslBuilderImpl for Expression Entries

**Files:**
- Modify: `src/dsl/runtime/builder-base.ts`

The current `GroupedEntry` only supports literal values. We need expression binding support for grouped/attached sub-builders.

- [ ] **Step 1: Extend entry types and addGrouped/addAttached**

In `src/dsl/runtime/builder-base.ts`, change:

```typescript
// REPLACE the GroupedEntry interface and related code:

interface GroupedEntry {
  property: string;
  value: DslPropertyValue;
}
```

with:

```typescript
/** A single property entry for grouped/attached callbacks */
export interface BuilderEntry {
  readonly property: string;
  readonly value?: DslPropertyValue;
  readonly expression?: string;
}
```

Update `addGrouped` to handle expression entries:

```typescript
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
```

Update `addAttached` the same way:

```typescript
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
```

Also export `BuilderEntry` from the file.

- [ ] **Step 2: Update existing tests that use GroupedEntry**

Check `tests/dsl/runtime/builder-base.test.ts` — existing tests use the old `{ property, value }` shape which is still valid (property + value fields are still present). The new `BuilderEntry` is backward-compatible. Run:

Run: `bun test tests/dsl/runtime/builder-base.test.ts`
Expected: all pass

- [ ] **Step 3: Update runtime index exports**

In `src/dsl/runtime/index.ts`, add the `BuilderEntry` export:

```typescript
export type { BuilderEntry, DslPropertyValue, QmlObjectBuilder } from './builder-base.js';
```

- [ ] **Step 4: Verify typecheck + tests**

Run: `bunx tsc --noEmit && bun test tests/dsl/`
Expected: 0 errors, all tests pass

- [ ] **Step 5: Commit**

```
git add src/dsl/runtime/builder-base.ts src/dsl/runtime/index.ts
git commit -m "feat(dsl): extend BuilderEntry for expression bindings in grouped/attached"
```

---

## Task 3: PropertyCollector

**Files:**
- Create: `src/dsl/runtime/property-collector.ts`
- Create: `tests/dsl/runtime/property-collector.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// tests/dsl/runtime/property-collector.test.ts
import { describe, expect, test } from 'bun:test';
import { createPropertyCollector } from '../../src/dsl/runtime/property-collector.js';
import type { AttachedMeta, GroupedMeta } from '../../src/dsl/runtime/metadata.js';

describe('PropertyCollector', () => {
  const borderMeta: GroupedMeta = {
    methodName: 'border',
    groupName: 'border',
    properties: [
      { name: 'width', hasValue: true, hasBinding: true },
      { name: 'color', hasValue: true, hasBinding: true },
      { name: 'pixelAligned', hasValue: true, hasBinding: true },
    ],
  };

  test('records value entries from setter calls', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    collector.width(2);
    collector.color('black');
    const entries = collector.__entries();
    expect(entries).toEqual([
      { property: 'width', value: 2 },
      { property: 'color', value: 'black' },
    ]);
  });

  test('records bind entries from Bind calls', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    collector.widthBind('parent.borderWidth');
    const entries = collector.__entries();
    expect(entries).toEqual([
      { property: 'width', expression: 'parent.borderWidth' },
    ]);
  });

  test('throws TypeError on unknown property', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    expect(() => collector.nonExistent(1)).toThrow(TypeError);
  });

  test('throws TypeError on unknown Bind property', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    expect(() => collector.nonExistentBind('x')).toThrow(TypeError);
  });

  test('supports signal handlers on attached surfaces', () => {
    const keysMeta: AttachedMeta = {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [
        { name: 'enabled', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onPressed', paramCount: 1 },
        { handlerName: 'onReleased', paramCount: 1 },
      ],
    };
    const collector = createPropertyCollector(keysMeta.properties, keysMeta.signals);
    collector.enabled(true);
    collector.onPressed('event.accepted = true');
    const entries = collector.__entries();
    expect(entries).toEqual([
      { property: 'enabled', value: true },
      { property: 'onPressed', expression: 'event.accepted = true' },
    ]);
  });

  test('throws on unknown signal in attached surface', () => {
    const keysMeta: AttachedMeta = {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [],
      signals: [{ handlerName: 'onPressed', paramCount: 1 }],
    };
    const collector = createPropertyCollector(keysMeta.properties, keysMeta.signals);
    expect(() => collector.onUnknown('body')).toThrow(TypeError);
  });

  test('returns entries in insertion order', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    collector.color('red');
    collector.width(1);
    collector.pixelAligned(true);
    const entries = collector.__entries();
    expect(entries.map((e) => e.property)).toEqual(['color', 'width', 'pixelAligned']);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dsl/runtime/property-collector.test.ts`
Expected: FAIL (module not found)

- [ ] **Step 3: Implement PropertyCollector**

```typescript
// src/dsl/runtime/property-collector.ts
import type { BuilderEntry } from './builder-base.js';
import type { PropertyMeta, SignalMeta } from './metadata.js';

/**
 * Proxy-based collector for grouped/attached sub-builder callbacks.
 * Records property values, binding expressions, and signal handlers.
 * Throws TypeError on unknown methods (fail-fast).
 */
export interface PropertyCollectorProxy {
  [key: string]: (...args: unknown[]) => PropertyCollectorProxy;
  __entries(): BuilderEntry[];
}

export function createPropertyCollector(
  properties: readonly PropertyMeta[],
  signals: readonly SignalMeta[],
): PropertyCollectorProxy {
  const entries: BuilderEntry[] = [];
  const propSet = new Map<string, PropertyMeta>();
  const signalSet = new Map<string, SignalMeta>();

  for (const p of properties) {
    propSet.set(p.name, p);
  }
  for (const s of signals) {
    signalSet.set(s.handlerName, s);
  }

  const target = {} as PropertyCollectorProxy;

  return new Proxy(target, {
    get(_target, prop: string) {
      if (prop === '__entries') {
        return () => [...entries];
      }

      // Check Bind suffix
      if (prop.endsWith('Bind')) {
        const baseName = prop.slice(0, -4);
        const meta = propSet.get(baseName);
        if (meta?.hasBinding) {
          return (expr: string) => {
            entries.push({ property: baseName, expression: expr });
            return proxy;
          };
        }
        throw new TypeError(
          `Unknown binding method "${prop}" on sub-builder. Known properties: ${[...propSet.keys()].join(', ')}`,
        );
      }

      // Check signal handler (onXxx pattern)
      if (prop.length > 2 && prop.startsWith('on') && prop[2] === prop[2]!.toUpperCase()) {
        const sig = signalSet.get(prop);
        if (sig) {
          return (body: string) => {
            entries.push({ property: prop, expression: body });
            return proxy;
          };
        }
        throw new TypeError(
          `Unknown signal handler "${prop}" on sub-builder. Known signals: ${[...signalSet.keys()].join(', ')}`,
        );
      }

      // Check value property
      const meta = propSet.get(prop);
      if (meta?.hasValue) {
        return (value: unknown) => {
          entries.push({ property: prop, value: value as BuilderEntry['value'] });
          return proxy;
        };
      }

      throw new TypeError(
        `Unknown method "${prop}" on sub-builder. Known properties: ${[...propSet.keys()].join(', ')}`,
      );
    },
  }) as PropertyCollectorProxy;

  // Need to capture proxy reference for chaining
  // Move proxy into a variable before the Proxy creation
}
```

**Important:** The implementation above has a bug — `proxy` is referenced before assignment. Fix by restructuring:

```typescript
export function createPropertyCollector(
  properties: readonly PropertyMeta[],
  signals: readonly SignalMeta[],
): PropertyCollectorProxy {
  const entries: BuilderEntry[] = [];
  const propSet = new Map<string, PropertyMeta>();
  const signalSet = new Map<string, SignalMeta>();

  for (const p of properties) {
    propSet.set(p.name, p);
  }
  for (const s of signals) {
    signalSet.set(s.handlerName, s);
  }

  const handler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop: string): unknown {
      if (prop === '__entries') {
        return () => [...entries];
      }

      // Bind suffix → binding expression
      if (prop.endsWith('Bind')) {
        const baseName = prop.slice(0, -4);
        const meta = propSet.get(baseName);
        if (meta?.hasBinding) {
          return (expr: string) => {
            entries.push({ property: baseName, expression: expr });
            return proxy;
          };
        }
        throw new TypeError(
          `Unknown binding "${prop}" on sub-builder. Known: ${[...propSet.keys()].join(', ')}`,
        );
      }

      // Signal handler (onXxx)
      if (prop.length > 2 && prop.startsWith('on') && prop[2] === prop[2]!.toUpperCase()) {
        const sig = signalSet.get(prop);
        if (sig) {
          return (body: string) => {
            entries.push({ property: prop, expression: body });
            return proxy;
          };
        }
        throw new TypeError(
          `Unknown signal "${prop}" on sub-builder. Known: ${[...signalSet.keys()].join(', ')}`,
        );
      }

      // Value property
      const meta = propSet.get(prop);
      if (meta?.hasValue) {
        return (value: unknown) => {
          entries.push({ property: prop, value: value as BuilderEntry['value'] });
          return proxy;
        };
      }

      throw new TypeError(
        `Unknown method "${prop}" on sub-builder. Known: ${[...propSet.keys()].join(', ')}`,
      );
    },
  };

  const proxy = new Proxy({} as Record<string, unknown>, handler) as unknown as PropertyCollectorProxy;
  return proxy;
}
```

- [ ] **Step 4: Run tests**

Run: `bun test tests/dsl/runtime/property-collector.test.ts`
Expected: 7 pass

- [ ] **Step 5: Add to runtime index**

In `src/dsl/runtime/index.ts`, add:

```typescript
export type { PropertyCollectorProxy } from './property-collector.js';
export { createPropertyCollector } from './property-collector.js';
export type {
  AttachedMeta,
  GroupedMeta,
  PropertyMeta,
  SignalMeta,
  TypeMetadata,
} from './metadata.js';
```

- [ ] **Step 6: Commit**

```
git add src/dsl/runtime/property-collector.ts src/dsl/runtime/metadata.ts src/dsl/runtime/index.ts tests/dsl/runtime/property-collector.test.ts
git commit -m "feat(dsl): add PropertyCollector Proxy for grouped/attached sub-builders"
```

---

## Task 4: Fluent Proxy (createFluentBuilder)

**Files:**
- Create: `src/dsl/runtime/fluent-proxy.ts`
- Create: `tests/dsl/runtime/fluent-proxy.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
// tests/dsl/runtime/fluent-proxy.test.ts
import { describe, expect, test } from 'bun:test';
import { createFluentBuilder } from '../../src/dsl/runtime/fluent-proxy.js';
import { createEnumToken } from '../../src/dsl/runtime/enum-token.js';
import type { TypeMetadata } from '../../src/dsl/runtime/metadata.js';

const testMeta: TypeMetadata = {
  typeName: 'TestRect',
  properties: [
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [
    {
      methodName: 'border',
      groupName: 'border',
      properties: [
        { name: 'width', hasValue: true, hasBinding: true },
        { name: 'color', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [{ name: 'enabled', hasValue: true, hasBinding: true }],
      signals: [{ handlerName: 'onPressed', paramCount: 1 }],
    },
  ],
  defaultProperty: 'data',
};

describe('createFluentBuilder', () => {
  test('creates builder for the given type name', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(builder.__typeName).toBe('TestRect');
  });

  test('property setter calls setProp and returns builder for chaining', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = (builder as any).width(100);
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'number', value: 100 },
    });
  });

  test('binding setter calls setBinding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).widthBind('parent.width');
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'width',
      value: { kind: 'expression', code: 'parent.width' },
    });
  });

  test('signal handler calls handleSignal', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).onClicked('console.log("clicked")');
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'SignalHandler',
      name: 'onClicked',
      body: { form: 'block', code: 'console.log("clicked")' },
    });
  });

  test('grouped callback creates grouped binding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).border((b: any) => {
      b.width(2);
      b.color('black');
    });
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'GroupedBinding',
      group: 'border',
      bindings: [
        { kind: 'Binding', property: 'width', value: { kind: 'number', value: 2 } },
        { kind: 'Binding', property: 'color', value: { kind: 'string', value: 'black' } },
      ],
    });
  });

  test('attached callback creates attached binding', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).keys((b: any) => {
      b.enabled(true);
    });
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'AttachedBinding',
      attachedTypeName: 'Keys',
      bindings: [
        { kind: 'Binding', property: 'enabled', value: { kind: 'boolean', value: true } },
      ],
    });
  });

  test('attached callback supports signal handlers', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    (builder as any).keys((b: any) => {
      b.onPressed('event.accepted = true');
    });
    const ast = builder.build();
    const attached = ast.members.find((m) => m.kind === 'AttachedBinding');
    expect(attached).toBeDefined();
    if (attached && attached.kind === 'AttachedBinding') {
      expect(attached.bindings).toContainEqual({
        kind: 'Binding',
        property: 'onPressed',
        value: { kind: 'expression', code: 'event.accepted = true' },
      });
    }
  });

  test('id() works', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = builder.id('myRect');
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({ kind: 'IdAssignment', id: 'myRect' });
  });

  test('child() works', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const childBuilder = createFluentBuilder('Child', {
      typeName: 'Child', properties: [], signals: [], grouped: [], attached: [],
    });
    builder.child(childBuilder);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'ObjectDefinition',
      typeName: 'Child',
      members: [],
    });
  });

  test('chaining multiple operations', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const result = (builder as any)
      .width(100)
      .height(50)
      .color('red')
      .onClicked('doStuff()');
    expect(result).toBe(builder);
    const ast = builder.build();
    expect(ast.members).toHaveLength(4);
  });

  test('unknown property throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).nonExistent(42)).toThrow(TypeError);
  });

  test('unknown signal throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).onUnknownSignal('body')).toThrow(TypeError);
  });

  test('unknown grouped property throws TypeError', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    expect(() => (builder as any).unknownGroup((b: any) => b)).toThrow(TypeError);
  });

  test('enum token value works in property setter', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const token = createEnumToken('TestRect', 'Alignment', 'Center');
    (builder as any).color(token);
    const ast = builder.build();
    expect(ast.members).toContainEqual({
      kind: 'Binding',
      property: 'color',
      value: {
        kind: 'enum',
        typeName: 'TestRect',
        enumName: 'Alignment',
        valueName: 'Center',
      },
    });
  });

  test('build() is not proxied and returns AST directly', () => {
    const builder = createFluentBuilder('TestRect', testMeta);
    const ast = builder.build();
    expect(ast.kind).toBe('ObjectDefinition');
    expect(ast.typeName).toBe('TestRect');
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dsl/runtime/fluent-proxy.test.ts`
Expected: FAIL (module not found)

- [ ] **Step 3: Implement createFluentBuilder**

```typescript
// src/dsl/runtime/fluent-proxy.ts
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

  // Build lookup maps for O(1) dispatch
  const propMap = new Map(metadata.properties.map((p) => [p.name, p]));
  const signalMap = new Map(metadata.signals.map((s) => [s.handlerName, s]));
  const groupedMap = new Map(metadata.grouped.map((g) => [g.methodName, g]));
  const attachedMap = new Map(metadata.attached.map((a) => [a.methodName, a]));

  const handler: ProxyHandler<DslBuilderImpl> = {
    get(target, prop: string, receiver): unknown {
      // Built-in methods → delegate directly to DslBuilderImpl
      if (BUILTIN_METHODS.has(prop)) {
        const val = Reflect.get(target, prop, target);
        if (typeof val === 'function') {
          return (...args: unknown[]) => {
            const result = (val as Function).apply(target, args);
            // id() and child() return `this` for chaining — return proxy instead
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
        // Fall through to unknown method error
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
          dispatchGrouped(target, grouped, setup, proxy);
          return proxy;
        };
      }

      // Attached type callback
      const attached = attachedMap.get(prop);
      if (attached) {
        return (setup: (b: unknown) => void) => {
          dispatchAttached(target, attached, setup, proxy);
          return proxy;
        };
      }

      // Value property setter
      const meta = propMap.get(prop);
      if (meta?.hasValue) {
        return (value: unknown) => {
          target.setProp(prop, value as any);
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
  _proxy: unknown,
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
  _proxy: unknown,
): void {
  const collector = createPropertyCollector(meta.properties, meta.signals);
  setup(collector);
  const entries = collector.__entries();
  impl.addAttached(meta.attachedTypeName, entries);
}
```

- [ ] **Step 4: Update runtime index**

In `src/dsl/runtime/index.ts`, add:

```typescript
export { createFluentBuilder } from './fluent-proxy.js';
```

- [ ] **Step 5: Run tests**

Run: `bun test tests/dsl/runtime/fluent-proxy.test.ts`
Expected: 14 pass

- [ ] **Step 6: Run full test suite**

Run: `bun test tests/dsl/`
Expected: all pass (existing + new tests)

- [ ] **Step 7: Commit**

```
git add src/dsl/runtime/fluent-proxy.ts src/dsl/runtime/index.ts tests/dsl/runtime/fluent-proxy.test.ts
git commit -m "feat(dsl): add createFluentBuilder Proxy with metadata-driven dispatch"
```

---

## Task 5: Enum Index in Analyzer

**Files:**
- Modify: `src/dsl/generator/types.ts`
- Modify: `src/dsl/generator/analyzer.ts`
- Modify: `tests/dsl/generator/analyzer.test.ts`

- [ ] **Step 1: Add EnumIndex types to IR**

In `src/dsl/generator/types.ts`, after the `NameConflict` interface, add:

```typescript
// ─── Enum Index ─────────────────────────────────────────────────────────

/** Resolution result for an enum type reference found on a property */
export interface EnumResolution {
  readonly ownerQualifiedName: string;
  readonly ownerQmlName: string;
  readonly enumName: string;
  readonly moduleUri: string;
  readonly ambiguous: boolean;
}

/** Map from enum type reference string → resolution.
 *  Keys are plain enum names ("Status") and C++ qualified names ("Qt::FocusPolicy").
 */
export type EnumIndex = ReadonlyMap<string, EnumResolution>;
```

In the `AnalyzedRegistry` interface, add:

```typescript
readonly enumIndex: EnumIndex;
```

Also remove `formatOutput` and `validateOutput` from `GeneratorConfig`:

Change:
```typescript
export interface GeneratorConfig {
  readonly registryPath: string;
  readonly outputDir: string;
  readonly moduleWhitelist?: string[];
  readonly runtimeImportPath?: string;
  readonly formatOutput?: boolean;
  readonly validateOutput?: boolean;
}
```
to:
```typescript
export interface GeneratorConfig {
  readonly registryPath: string;
  readonly outputDir: string;
  readonly moduleWhitelist?: string[];
  readonly runtimeImportPath?: string;
}
```

- [ ] **Step 2: Build enum index in analyzer**

In `src/dsl/generator/analyzer.ts`, add an `buildEnumIndex` function before the `return` statement:

```typescript
function buildEnumIndex(allTypes: QmlType[]): Map<string, EnumResolution> {
  const index = new Map<string, EnumResolution>();

  // Track names seen by multiple types (ambiguity detection)
  const nameOwners = new Map<string, { qn: string; qmlName: string; moduleUri: string }[]>();

  for (const type of allTypes) {
    for (const en of type.enums) {
      const entry = { qn: type.qualifiedName, qmlName: type.qmlName, moduleUri: type.moduleUri };
      const existing = nameOwners.get(en.name);
      if (existing) {
        existing.push(entry);
      } else {
        nameOwners.set(en.name, [entry]);
      }
      // Also index by alias
      if (en.alias && en.alias !== en.name) {
        const aliasExisting = nameOwners.get(en.alias);
        if (aliasExisting) {
          aliasExisting.push(entry);
        } else {
          nameOwners.set(en.alias, [entry]);
        }
      }
    }
  }

  for (const [name, owners] of nameOwners) {
    const uniqueQNs = [...new Set(owners.map((o) => o.qn))];
    const isAmbiguous = uniqueQNs.length > 1;
    const primary = owners[0]!;

    index.set(name, {
      ownerQualifiedName: primary.qn,
      ownerQmlName: primary.qmlName,
      enumName: name,
      moduleUri: primary.moduleUri,
      ambiguous: isAmbiguous,
    });
  }

  return index;
}
```

Call it in the `analyze` function and add to the return value:

```typescript
const enumIndex = buildEnumIndex(allRegistryTypes);

return {
  qtVersion: registry.qtVersion,
  modules: nonEmptyModules,
  allTypes: allAnalyzedTypes,
  nameConflicts,
  groupedSurfaces,
  attachedSurfaces,
  enumIndex,
};
```

Add the import for `EnumResolution` at the top of analyzer.ts.

- [ ] **Step 3: Write enum index tests**

Add tests to `tests/dsl/generator/analyzer.test.ts`:

```typescript
test('builds enum index from registry types', () => {
  const analyzed = analyze(registry, query);
  expect(analyzed.enumIndex.size).toBeGreaterThan(100);

  // TransformOrigin should resolve (declared on QQuickItem)
  const transformOrigin = analyzed.enumIndex.get('TransformOrigin');
  expect(transformOrigin).toBeDefined();
  expect(transformOrigin!.ownerQmlName).toBe('Item');
  expect(transformOrigin!.enumName).toBe('TransformOrigin');
  expect(transformOrigin!.ambiguous).toBe(false);
});

test('enum index detects ambiguous enum names', () => {
  const analyzed = analyze(registry, query);
  // "Status" appears on multiple types (QQmlComponent, etc.)
  const status = analyzed.enumIndex.get('Status');
  expect(status).toBeDefined();
  expect(status!.ambiguous).toBe(true);
});
```

- [ ] **Step 4: Fix any compilation errors and run tests**

Run: `bunx tsc --noEmit && bun test tests/dsl/generator/analyzer.test.ts`
Expected: all pass

- [ ] **Step 5: Commit**

```
git add src/dsl/generator/types.ts src/dsl/generator/analyzer.ts tests/dsl/generator/analyzer.test.ts
git commit -m "feat(dsl): build global enum index in analyzer for two-tier resolution"
```

---

## Task 6: TypeMapper Enum Resolution

**Files:**
- Modify: `src/dsl/generator/type-mapper.ts`
- Modify: `tests/dsl/generator/type-mapper.test.ts`

- [ ] **Step 1: Write failing tests**

Add tests to `tests/dsl/generator/type-mapper.test.ts`:

```typescript
test('maps same-type enum property to QmlEnumToken', () => {
  // TransformOrigin is a non-ambiguous enum
  const result = mapper.mapType('TransformOrigin');
  expect(result).toBe('QmlEnumToken');
});

test('maps C++ namespace enum (Qt::FocusPolicy) to QmlEnumToken', () => {
  const result = mapper.mapType('Qt::FocusPolicy');
  expect(result).toBe('QmlEnumToken');
});

test('maps ambiguous enum to QmlEnumToken', () => {
  // Status is ambiguous (on QQmlComponent, QQuickFolderListModel, etc.)
  const result = mapper.mapType('Status');
  expect(result).toBe('QmlEnumToken');
});

test('still falls back to QmlValue for unknown non-enum types', () => {
  const result = mapper.mapType('QAccessibilityHints');
  expect(result).toBe('QmlValue');
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: FAIL (TransformOrigin currently maps to QmlValue)

- [ ] **Step 3: Update TypeMapper constructor to accept EnumIndex**

In `src/dsl/generator/type-mapper.ts`:

Change constructor:
```typescript
constructor(analyzed: AnalyzedRegistry) {
```
to:
```typescript
constructor(analyzed: AnalyzedRegistry) {
  this.analyzed = analyzed;
  this.enumIndex = analyzed.enumIndex;
  // ...existing lookup building...
}
```

Add field:
```typescript
private readonly enumIndex: ReadonlyMap<string, import('./types.js').EnumResolution>;
```

Add enum resolution before the fallback in `mapType()`. After the grouped surface check (step 6) and before the fallback (step 7):

```typescript
// 6.5. Check enum index — resolved enums become QmlEnumToken
const enumRes = this.resolveEnum(qmlType);
if (enumRes) {
  this.runtimeImports.add('QmlEnumToken');
  return 'QmlEnumToken';
}

// 7. Fallback
return this.fallback(qmlType);
```

Add the resolveEnum helper:

```typescript
private resolveEnum(typeRef: string): boolean {
  // Direct match by plain name
  if (this.enumIndex.has(typeRef)) return true;

  // C++ namespace match (Qt::FocusPolicy → strip namespace, check last segment)
  if (typeRef.includes('::')) {
    const parts = typeRef.split('::');
    const enumPart = parts[parts.length - 1]!;
    if (this.enumIndex.has(enumPart)) return true;
  }

  return false;
}
```

Import `QmlEnumToken` from the runtime types re-export. No — `QmlEnumToken` is already a known type name. The TypeMapper just needs to return the string `'QmlEnumToken'` and track it as a runtime import. The runtime `index.ts` already exports `QmlEnumToken`.

- [ ] **Step 4: Run tests**

Run: `bun test tests/dsl/generator/type-mapper.test.ts`
Expected: all pass

- [ ] **Step 5: Run full suite**

Run: `bun test tests/dsl/`
Expected: all pass

- [ ] **Step 6: Commit**

```
git add src/dsl/generator/type-mapper.ts tests/dsl/generator/type-mapper.test.ts
git commit -m "feat(dsl): two-tier enum resolution in TypeMapper (QmlEnumToken / QmlValue)"
```

---

## Task 7: Code Emitter Updates

**Files:**
- Modify: `src/dsl/generator/code-emitter.ts`
- Modify: `tests/dsl/generator/code-emitter.test.ts`

This is the largest task. Three changes in one:
1. Signal handler parameter type: `(handler: (...) => void)` → `(body: string)`
2. Factory functions: `new DslBuilderImpl(...)` → `createFluentBuilder(..., META)`
3. Generate TypeMetadata constant per type

- [ ] **Step 1: Change signal handler signatures to string**

In `src/dsl/generator/code-emitter.ts`, replace the `formatSignalParams` method:

From:
```typescript
private formatSignalParams(sig: AnalyzedSignal): string {
  if (sig.parameters.length === 0) {
    return '() => void';
  }
  const params = sig.parameters
    .map((p, i) => {
      const name = p.name || `arg${i}`;
      return `${safeName(name)}: ${this.mapper.mapType(p.type)}`;
    })
    .join(', ');
  return `(${params}) => void`;
}
```

To:
```typescript
private formatSignalParams(_sig: AnalyzedSignal): string {
  return 'string';
}
```

And update signal handler line generation. In `emitCreatable`, change:

```typescript
const params = this.formatSignalParams(sig);
lines.push(`  ${handlerName}(handler: ${params}): ${builderName};`);
```

to:

```typescript
lines.push(`  ${handlerName}(body: string): ${builderName};`);
```

Same change in `emitAttachedSurfaceCode`:

```typescript
const params = this.formatSignalParams(sig);
lines.push(`  ${handlerName}(handler: ${params}): ${builderName};`);
```

→

```typescript
lines.push(`  ${handlerName}(body: string): ${builderName};`);
```

We still map signal parameter types in the pre-mapping phase (for import tracking), but the interface signature is always `(body: string)`.

- [ ] **Step 2: Generate TypeMetadata constant + factory using createFluentBuilder**

In `emitCreatable`, replace the factory function generation:

From:
```typescript
// ─── Factory function ───────────────────────────────────────────────
lines.push(`export function ${type.qmlName}(): ${builderName} {`);
lines.push(`  return new DslBuilderImpl('${type.qmlName}') as unknown as ${builderName};`);
lines.push('}');
```

To:
```typescript
// ─── TypeMetadata ───────────────────────────────────────────────────
lines.push('');
const metaConstName = `${type.qmlName.toUpperCase()}_META`;
this.emitTypeMetadata(metaConstName, type, lines);
lines.push('');

// ─── Factory function ───────────────────────────────────────────────
lines.push(`export function ${type.qmlName}(): ${builderName} {`);
lines.push(`  return createFluentBuilder('${type.qmlName}', ${metaConstName}) as ${builderName};`);
lines.push('}');
```

Add `emitTypeMetadata` method:

```typescript
private emitTypeMetadata(
  constName: string,
  type: AnalyzedType,
  lines: string[],
): void {
  const allProps = [...type.ownProperties, ...type.inheritedProperties];
  const allSignals = [...type.ownSignals, ...type.inheritedSignals];

  lines.push(`const ${constName}: TypeMetadata = {`);
  lines.push(`  typeName: '${type.qmlName}',`);

  // Properties
  lines.push('  properties: [');
  for (const prop of sortedByName(allProps)) {
    if (prop.readonly) continue;
    lines.push(`    { name: '${prop.name}', hasValue: true, hasBinding: true },`);
  }
  lines.push('  ],');

  // Signals
  lines.push('  signals: [');
  for (const sig of sortedByName(allSignals)) {
    const handlerName = `on${capitalize(sig.name)}`;
    lines.push(`    { handlerName: '${handlerName}', paramCount: ${sig.parameters.length} },`);
  }
  lines.push('  ],');

  // Grouped
  lines.push('  grouped: [');
  for (const ref of type.groupedProperties) {
    const surface = this.analyzed.groupedSurfaces.get(ref.surfaceQualifiedName);
    if (!surface) continue;
    lines.push('    {');
    lines.push(`      methodName: '${ref.propertyName}',`);
    lines.push(`      groupName: '${ref.propertyName}',`);
    lines.push('      properties: [');
    for (const p of surface.properties) {
      if (p.readonly) continue;
      lines.push(`        { name: '${p.name}', hasValue: true, hasBinding: true },`);
    }
    lines.push('      ],');
    lines.push('    },');
  }
  lines.push('  ],');

  // Attached
  lines.push('  attached: [');
  const usedNames = new Set<string>();
  for (const prop of sortedByName(allProps)) {
    if (!prop.readonly) usedNames.add(safeName(prop.name));
  }
  for (const ref of type.groupedProperties) {
    usedNames.add(ref.propertyName);
  }
  for (const ref of type.attachedTypes) {
    const surface = this.analyzed.attachedSurfaces.get(ref.attachedQualifiedName);
    if (!surface) continue;
    let methodName = ref.methodName;
    if (usedNames.has(methodName)) {
      methodName = `${methodName}Attached`;
    }
    lines.push('    {');
    lines.push(`      methodName: '${methodName}',`);
    lines.push(`      attachedTypeName: '${surface.ownerQmlName}',`);
    lines.push('      properties: [');
    for (const p of surface.properties) {
      if (p.readonly) continue;
      lines.push(`        { name: '${p.name}', hasValue: true, hasBinding: true },`);
    }
    lines.push('      ],');
    lines.push('      signals: [');
    for (const sig of surface.signals) {
      const handlerName = `on${capitalize(sig.name)}`;
      lines.push(`        { handlerName: '${handlerName}', paramCount: ${sig.parameters.length} },`);
    }
    lines.push('      ],');
    lines.push('    },');
  }
  lines.push('  ],');

  // Default property
  if (type.defaultProperty) {
    lines.push(`  defaultProperty: '${type.defaultProperty}',`);
  }

  lines.push('};');
}
```

- [ ] **Step 3: Update import sections**

In `buildCreatableImportSection`, change value imports:

From:
```typescript
const valueImports = ['DslBuilderImpl'];
```

To:
```typescript
const valueImports = ['createFluentBuilder'];
```

And add `TypeMetadata` to type imports:

```typescript
const typeImports = ['QmlObjectBuilder', 'TypeMetadata', ...runtimeImports];
```

Remove `DslBuilderImpl` from value imports since we no longer use it directly.

- [ ] **Step 4: Update code-emitter tests**

Update `tests/dsl/generator/code-emitter.test.ts` to match the new generated shapes:
- Signal handlers now have `(body: string)` instead of `(handler: (...) => void)`
- Factory functions now use `createFluentBuilder` instead of `new DslBuilderImpl`
- Each type file now has a `_META` constant

- [ ] **Step 5: Run all tests**

Run: `bunx tsc --noEmit && bun test tests/dsl/`
Expected: 0 errors, all pass (test assertions updated)

- [ ] **Step 6: Commit**

```
git add src/dsl/generator/code-emitter.ts tests/dsl/generator/code-emitter.test.ts
git commit -m "feat(dsl): generate TypeMetadata + createFluentBuilder factories + string signal handlers"
```

---

## Task 8: Generator Pipeline Integration

**Files:**
- Modify: `src/dsl/generator/generator.ts`
- Modify: `scripts/generate-dsl.ts`

- [ ] **Step 1: Remove formatOutput/validateOutput from generator call sites**

In `scripts/generate-dsl.ts`, remove the `formatOutput` and `validateOutput` fields from the `generate()` call:

```typescript
const result = generate({
  registryPath,
  outputDir,
  moduleWhitelist,
});
```

- [ ] **Step 2: Run typecheck to catch any other references**

Run: `bunx tsc --noEmit`
Expected: 0 errors (if any references remain to the removed fields, fix them)

- [ ] **Step 3: Commit**

```
git add src/dsl/generator/generator.ts scripts/generate-dsl.ts
git commit -m "refactor(dsl): remove no-op formatOutput/validateOutput from GeneratorConfig"
```

---

## Task 9: Orchestration Layer

**Files:**
- Create: `src/dsl/generator/orchestration.ts`
- Modify: `src/dsl/generator/index.ts`

- [ ] **Step 1: Implement orchestration functions**

```typescript
// src/dsl/generator/orchestration.ts
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { GeneratorResult } from './types.js';

export interface WriteResult {
  readonly filesWritten: number;
  readonly bytesWritten: number;
}

export interface FormatResult {
  readonly success: boolean;
  readonly errors: string[];
}

export interface ValidateResult {
  readonly success: boolean;
  readonly errors: string[];
}

/** Write generated files to disk. Cleans output directory first. */
export function writeGeneratedFiles(
  result: GeneratorResult,
  outputDir: string,
): WriteResult {
  // Clean output directory
  try {
    rmSync(outputDir, { recursive: true, force: true });
  } catch {
    // ignore
  }

  let bytesWritten = 0;
  for (const file of result.files) {
    const filePath = join(outputDir, file.relativePath);
    const dir = dirname(filePath);
    mkdirSync(dir, { recursive: true });
    writeFileSync(filePath, file.content, 'utf-8');
    bytesWritten += Buffer.byteLength(file.content, 'utf-8');
  }

  return {
    filesWritten: result.files.length,
    bytesWritten,
  };
}

/** Format generated files using biome. */
export async function formatGeneratedFiles(outputDir: string): Promise<FormatResult> {
  try {
    const proc = Bun.spawn(['bunx', 'biome', 'check', '--write', '--unsafe', outputDir], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    if (exitCode === 0) {
      return { success: true, errors: [] };
    }
    const stderr = await new Response(proc.stderr).text();
    return { success: false, errors: [stderr] };
  } catch (error) {
    return {
      success: false,
      errors: [error instanceof Error ? error.message : 'biome format failed'],
    };
  }
}

/** Validate generated files via TypeScript typecheck (uses project tsconfig). */
export async function validateGeneratedFiles(_outputDir: string): Promise<ValidateResult> {
  try {
    const proc = Bun.spawn(['bunx', 'tsc', '--noEmit'], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    if (exitCode === 0) {
      return { success: true, errors: [] };
    }
    const stdout = await new Response(proc.stdout).text();
    const stderr = await new Response(proc.stderr).text();
    return { success: false, errors: [stdout, stderr].filter(Boolean) };
  } catch (error) {
    return {
      success: false,
      errors: [error instanceof Error ? error.message : 'tsc validation failed'],
    };
  }
}
```

- [ ] **Step 2: Update generator index**

In `src/dsl/generator/index.ts`, add:

```typescript
export { writeGeneratedFiles, formatGeneratedFiles, validateGeneratedFiles } from './orchestration.js';
export type { WriteResult, FormatResult, ValidateResult } from './orchestration.js';
```

- [ ] **Step 3: Update CLI script to use orchestration**

Replace `scripts/generate-dsl.ts` content to use the orchestration layer and support `--format`/`--validate` flags. The script should:
- Use `writeGeneratedFiles()` instead of manual file writing
- Call `formatGeneratedFiles()` when `--format` is passed
- Call `validateGeneratedFiles()` when `--validate` is passed
- Print generation statistics after generation completes

- [ ] **Step 4: Verify typecheck and run**

Run: `bunx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 5: Commit**

```
git add src/dsl/generator/orchestration.ts src/dsl/generator/index.ts scripts/generate-dsl.ts
git commit -m "feat(dsl): add orchestration layer (write/format/validate) and update CLI"
```

---

## Task 10: Regenerate P0 Snapshot

**Files:**
- Modify: `src/dsl/generated/**` (all regenerated)
- Modify: `src/index.ts` (if needed)

- [ ] **Step 1: Regenerate**

Run: `bun run generate:dsl`
Expected: Completes successfully with updated stats

- [ ] **Step 2: Format**

Run: `bunx biome check --write --unsafe src/dsl/generated/`
Expected: 0 errors remaining

- [ ] **Step 3: Typecheck**

Run: `bunx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 4: Run existing tests (may need updates)**

Run: `bun test tests/dsl/`

Some existing tests in `validation.test.ts` and `code-emitter.test.ts` may need updates to match the new generated shape (signal handler string types, createFluentBuilder factories, TypeMetadata presence). Fix any failing assertions.

- [ ] **Step 5: Commit**

```
git add -A
git commit -m "feat(dsl): regenerate P0 snapshot with metadata-driven factories"
```

---

## Task 11: End-to-End Acceptance Tests

**Files:**
- Create: `tests/dsl/acceptance.test.ts`

These tests import from the committed generated snapshot and verify the fluent API actually works at runtime.

- [ ] **Step 1: Write acceptance tests**

```typescript
// tests/dsl/acceptance.test.ts
import { describe, expect, test } from 'bun:test';
import { createDocument } from '../../src/ast/builder.js';
import { emit } from '../../src/emitter/emitter.js';

// Import directly from generated snapshot
import { Rectangle } from '../../src/dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../src/dsl/generated/QtQuick/Text.js';
import { Column } from '../../src/dsl/generated/QtQuick/Column.js';
import { Item } from '../../src/dsl/generated/QtQuick/Item.js';
import { MouseArea } from '../../src/dsl/generated/QtQuick/MouseArea.js';

describe('DSL Acceptance — Fluent API at Runtime', () => {
  test('ACC-01: Rectangle().width(100) works at runtime', () => {
    const rect = Rectangle().width(100).height(50).color('red');
    const ast = rect.build();
    expect(ast.kind).toBe('ObjectDefinition');
    expect(ast.typeName).toBe('Rectangle');
    expect(ast.members.length).toBe(3);
  });

  test('ACC-02: full round-trip Rectangle → QML', () => {
    const rect = Rectangle().width(200).height(100).color('blue');
    const doc = createDocument().importModule('QtQuick').root(rect.build());
    const qml = emit(doc);
    expect(qml).toContain('import QtQuick');
    expect(qml).toContain('Rectangle {');
    expect(qml).toContain('width: 200');
    expect(qml).toContain('height: 100');
    expect(qml).toContain('color: "blue"');
  });

  test('ACC-03: binding setters work', () => {
    const rect = Rectangle().widthBind('parent.width').heightBind('parent.height / 2');
    const doc = createDocument().importModule('QtQuick').root(rect.build());
    const qml = emit(doc);
    expect(qml).toContain('width: parent.width');
    expect(qml).toContain('height: parent.height / 2');
  });

  test('ACC-04: signal handlers accept string body', () => {
    const ma = MouseArea().onClicked('console.log("hi")');
    const doc = createDocument().importModule('QtQuick').root(ma.build());
    const qml = emit(doc);
    expect(qml).toContain('onClicked:');
  });

  test('ACC-05: grouped property callback (border)', () => {
    const rect = Rectangle().border((b: any) => {
      b.width(2);
      b.color('black');
    });
    const doc = createDocument().importModule('QtQuick').root(rect.build());
    const qml = emit(doc);
    expect(qml).toContain('border {');
    expect(qml).toContain('width: 2');
    expect(qml).toContain('"black"');
  });

  test('ACC-06: enum token usage', () => {
    const txt = Text().text('Hello');
    txt.horizontalAlignment(Text.HAlignment.AlignHCenter);
    const doc = createDocument().importModule('QtQuick').root(txt.build());
    const qml = emit(doc);
    expect(qml).toContain('horizontalAlignment: Text.HAlignment.AlignHCenter');
  });

  test('ACC-07: child nesting', () => {
    const col = Column().spacing(10);
    col.child(Text().text('Hello'));
    col.child(Rectangle().width(100).height(50));
    const doc = createDocument().importModule('QtQuick').root(col.build());
    const qml = emit(doc);
    expect(qml).toContain('Column {');
    expect(qml).toContain('Text {');
    expect(qml).toContain('Rectangle {');
  });

  test('ACC-08: id assignment', () => {
    const item = Item().id('root').width(800).height(600);
    const doc = createDocument().importModule('QtQuick').root(item.build());
    const qml = emit(doc);
    expect(qml).toContain('id: root');
  });

  test('ACC-09: unknown method throws TypeError', () => {
    const rect = Rectangle();
    expect(() => (rect as any).nonExistentProperty(42)).toThrow(TypeError);
  });

  test('ACC-10: unknown method in grouped callback throws TypeError', () => {
    expect(() => {
      Rectangle().border((b: any) => {
        b.unknownProp(1);
      });
    }).toThrow(TypeError);
  });

  test('ACC-11: chaining preserves builder identity', () => {
    const rect = Rectangle();
    const result = rect.width(100).height(50).color('red');
    expect(result).toBe(rect);
  });
});
```

- [ ] **Step 2: Run acceptance tests**

Run: `bun test tests/dsl/acceptance.test.ts`
Expected: 11 pass

- [ ] **Step 3: Commit**

```
git add tests/dsl/acceptance.test.ts
git commit -m "test(dsl): add end-to-end acceptance tests for fluent API runtime"
```

---

## Task 12: Full-Generation Acceptance Test

**Files:**
- Create: `tests/dsl/full-generation.test.ts`

- [ ] **Step 1: Write full-generation tests**

```typescript
// tests/dsl/full-generation.test.ts
import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { generate } from '../../src/dsl/generator/generator.js';

const registryPath = join(import.meta.dir, '..', '..', 'data', 'qt-6.11.0-registry.snapshot.json');

describe('Full-Generation Acceptance', () => {
  test('FG-01: full generation succeeds for all modules', () => {
    const result = generate({ registryPath, outputDir: '' });
    expect(result.success).toBe(true);
    expect(result.stats.modulesProcessed).toBeGreaterThan(80);
    expect(result.stats.typesProcessed).toBeGreaterThan(1000);
    expect(result.stats.filesGenerated).toBeGreaterThan(900);
  });

  test('FG-02: warning count is within budget', () => {
    const result = generate({ registryPath, outputDir: '' });
    const warnings = result.diagnostics.filter((d) => d.level === 'warning');
    // After enum resolution, warnings should be dramatically reduced
    // Budget: no more than 500 warnings (down from 4277)
    expect(warnings.length).toBeLessThan(500);
  });

  test('FG-03: no error diagnostics', () => {
    const result = generate({ registryPath, outputDir: '' });
    const errors = result.diagnostics.filter((d) => d.level === 'error');
    expect(errors).toEqual([]);
  });

  test('FG-04: deterministic regeneration', () => {
    const result1 = generate({ registryPath, outputDir: '' });
    const result2 = generate({ registryPath, outputDir: '' });

    expect(result1.files.length).toBe(result2.files.length);
    for (let i = 0; i < result1.files.length; i++) {
      expect(result1.files[i]!.relativePath).toBe(result2.files[i]!.relativePath);
      expect(result1.files[i]!.content).toBe(result2.files[i]!.content);
    }
  });

  test('FG-05: P0 generation stats are reasonable', () => {
    const P0 = ['QML', 'QtQml', 'QtQml.Models', 'QtQuick', 'QtQuick.Controls.Basic',
      'QtQuick.Templates', 'QtQuick.Layouts', 'QtCore'];
    const result = generate({ registryPath, outputDir: '', moduleWhitelist: P0 });
    expect(result.success).toBe(true);
    expect(result.stats.creatableTypes).toBeGreaterThan(200);
    expect(result.stats.filesGenerated).toBeGreaterThan(250);
  });

  test('FG-06: all generated files have AUTO-GENERATED header', () => {
    const result = generate({ registryPath, outputDir: '' });
    for (const file of result.files) {
      if (file.relativePath.endsWith('index.ts')) continue;
      expect(file.content.startsWith('// AUTO-GENERATED')).toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run**

Run: `bun test tests/dsl/full-generation.test.ts`
Expected: 6 pass

- [ ] **Step 3: Commit**

```
git add tests/dsl/full-generation.test.ts
git commit -m "test(dsl): add full-generation acceptance tests (warning budget, determinism)"
```

---

## Task 13: Update Main Index Exports

**Files:**
- Modify: `src/index.ts`

- [ ] **Step 1: Add orchestration exports**

Ensure `src/index.ts` re-exports the orchestration layer and new runtime types (createFluentBuilder, TypeMetadata, etc.). Check current exports and add any missing ones.

- [ ] **Step 2: Run full test suite**

Run: `bunx tsc --noEmit && bun test`
Expected: 0 errors, all tests pass

- [ ] **Step 3: Commit**

```
git add src/index.ts
git commit -m "feat(dsl): update main index with orchestration and runtime exports"
```

---

## Task 14: Push Branch and Create PR

- [ ] **Step 1: Final verification**

Run: `bun test`
Expected: all pass (old 677 + new tests)

Run: `bunx tsc --noEmit`
Expected: 0 errors

- [ ] **Step 2: Push branch**

```
git push -u origin 05-dsl-generator-completion
```

- [ ] **Step 3: Create PR**

Title: `feat: 05-dsl-generator completion — runtime Proxy, enum resolution, orchestration`

PR body covers:
- Metadata-driven Proxy runtime (createFluentBuilder)
- Two-tier enum resolution (QmlEnumToken)
- Orchestration layer (write/format/validate)
- Signal handler string body lowering
- Acceptance tests (fluent API + full-generation)
- Warning budget reduction
