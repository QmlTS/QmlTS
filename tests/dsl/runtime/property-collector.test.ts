import { describe, expect, test } from 'bun:test';
import type { AttachedMeta, GroupedMeta } from '../../../src/dsl/runtime/metadata.js';
import { createPropertyCollector } from '../../../src/dsl/runtime/property-collector.js';

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
    expect(entries).toEqual([{ property: 'width', expression: 'parent.borderWidth' }]);
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
      properties: [{ name: 'enabled', hasValue: true, hasBinding: true }],
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

  test('chaining returns the proxy for fluent usage', () => {
    const collector = createPropertyCollector(borderMeta.properties, []);
    const result = collector.width(2);
    expect(result).toBe(collector);
    const result2 = result.color('black');
    expect(result2).toBe(collector);
  });
});
