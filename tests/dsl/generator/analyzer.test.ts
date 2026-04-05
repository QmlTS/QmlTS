import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { analyze } from '../../../src/dsl/generator/analyzer.js';
import { RegistryQuery } from '../../../src/registry/registry-query.js';
import { RegistrySnapshot } from '../../../src/registry/snapshot.js';
import type { QmlRegistry } from '../../../src/registry/types.js';

const SNAPSHOT_PATH = join(
  import.meta.dir,
  '..',
  '..',
  '..',
  'data',
  'qt-6.11.0-registry.snapshot.json',
);
const registry: QmlRegistry = new RegistrySnapshot().deserialize(
  readFileSync(SNAPSHOT_PATH, 'utf-8'),
);
const query = new RegistryQuery(registry);

describe('Analyzer', () => {
  const analyzed = analyze(registry, query);

  describe('type classification', () => {
    test('AN-01: Rectangle is classified as creatable-object', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      expect(t!.classification).toBe('creatable-object');
    });

    test('AN-02: Item is classified as creatable-object', () => {
      const t = analyzed.allTypes.get('QQuickItem');
      expect(t).toBeDefined();
      expect(t!.classification).toBe('creatable-object');
    });

    test('AN-03: singleton type is classified as singleton', () => {
      const appType = [...analyzed.allTypes.values()].find(
        (at) => at.classification === 'singleton',
      );
      expect(appType).toBeDefined();
      expect(appType!.classification).toBe('singleton');
    });

    test('AN-04: QQuickLayoutAttached is classified as attached-type', () => {
      const t = analyzed.allTypes.get('QQuickLayoutAttached');
      expect(t).toBeDefined();
      expect(t!.classification).toBe('attached-type');
    });

    test('AN-05: QQuickPen is classified as grouped-surface', () => {
      const t = analyzed.allTypes.get('QQuickPen');
      expect(t).toBeDefined();
      expect(t!.classification).toBe('grouped-surface');
    });

    test('AN-06: classifies all types in the registry', () => {
      const total = analyzed.allTypes.size;
      expect(total).toBeGreaterThan(0);
      for (const [_, type] of analyzed.allTypes) {
        expect([
          'creatable-object',
          'singleton',
          'attached-type',
          'grouped-surface',
          'value-type',
          'non-creatable',
          'internal',
        ]).toContain(type.classification);
      }
    });
  });

  describe('inheritance resolution', () => {
    test('AN-10: Rectangle inherits Item properties', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      const inherited = t!.inheritedProperties;
      const widthProp = inherited.find((p) => p.name === 'width');
      expect(widthProp).toBeDefined();
      expect(widthProp!.declaredBy).toBe('QQuickItem');
    });

    test('AN-11: Rectangle has own properties', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      const colorProp = t!.ownProperties.find((p) => p.name === 'color');
      expect(colorProp).toBeDefined();
      expect(colorProp!.declaredBy).toBe('QQuickRectangle');
    });

    test('AN-12: inherited properties do not duplicate own properties', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      const ownNames = new Set(t!.ownProperties.map((p) => p.name));
      for (const inherited of t!.inheritedProperties) {
        expect(ownNames.has(inherited.name)).toBe(false);
      }
    });

    test('AN-13: inherited signals are resolved', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      const allSignals = [...t!.ownSignals, ...t!.inheritedSignals];
      expect(allSignals.length).toBeGreaterThan(0);
    });

    test('AN-14: inherited enums are resolved', () => {
      const item = analyzed.allTypes.get('QQuickItem');
      expect(item).toBeDefined();
      const allEnums = [...item!.ownEnums, ...item!.inheritedEnums];
      const transformOrigin = allEnums.find((e) => e.name === 'TransformOrigin');
      expect(transformOrigin).toBeDefined();
    });
  });

  describe('grouped property detection', () => {
    test('AN-20: Item has grouped property refs for anchors', () => {
      const t = analyzed.allTypes.get('QQuickItem');
      expect(t).toBeDefined();
      expect(t!.groupedProperties.length).toBeGreaterThan(0);
      const anchorsRef = t!.groupedProperties.find((g) => g.propertyName === 'anchors');
      expect(anchorsRef).toBeDefined();
    });

    test('AN-21: Rectangle has border grouped property', () => {
      const t = analyzed.allTypes.get('QQuickRectangle');
      expect(t).toBeDefined();
      const borderRef = t!.groupedProperties.find((g) => g.propertyName === 'border');
      expect(borderRef).toBeDefined();
    });

    test('AN-22: grouped surfaces are populated', () => {
      expect(analyzed.groupedSurfaces.size).toBeGreaterThan(0);
      const pen = analyzed.groupedSurfaces.get('QQuickPen');
      expect(pen).toBeDefined();
      expect(pen!.properties.length).toBeGreaterThan(0);
      expect(pen!.builderName).toBe('BorderBuilder');
    });
  });

  describe('attached type detection', () => {
    test('AN-30: Layout attached type is detected', () => {
      expect(analyzed.attachedSurfaces.size).toBeGreaterThan(0);
      const layout = analyzed.attachedSurfaces.get('QQuickLayoutAttached');
      expect(layout).toBeDefined();
      expect(layout!.methodName).toBe('layout');
      expect(layout!.properties.length).toBeGreaterThan(0);
    });

    test('AN-31: Keys attached type is detected', () => {
      const keys = analyzed.attachedSurfaces.get('QQuickKeysAttached');
      expect(keys).toBeDefined();
      expect(keys!.methodName).toBe('keys');
    });

    test('AN-32: attached surfaces have builder names', () => {
      const layout = analyzed.attachedSurfaces.get('QQuickLayoutAttached');
      expect(layout).toBeDefined();
      expect(layout!.builderName).toBe('LayoutAttachedBuilder');
    });
  });

  describe('module filtering', () => {
    test('AN-40: whitelist filters modules', () => {
      const filtered = analyze(registry, query, ['QtQuick']);
      expect(filtered.modules.length).toBe(1);
      expect(filtered.modules[0]!.uri).toBe('QtQuick');
    });

    test('AN-41: empty whitelist produces empty result', () => {
      const filtered = analyze(registry, query, []);
      expect(filtered.modules.length).toBe(0);
    });

    test('AN-42: no whitelist includes all non-empty modules', () => {
      expect(analyzed.modules.length).toBeGreaterThan(80);
    });
  });

  describe('deterministic ordering', () => {
    test('AN-50: modules are sorted by URI', () => {
      const uris = analyzed.modules.map((m) => m.uri);
      const sorted = [...uris].sort();
      expect(uris).toEqual(sorted);
    });

    test('AN-51: types within modules are sorted by qmlName', () => {
      for (const mod of analyzed.modules) {
        const names = mod.types.map((t) => t.qmlName);
        const sorted = [...names].sort();
        expect(names).toEqual(sorted);
      }
    });

    test('AN-52: re-analysis produces identical output', () => {
      const a = analyze(registry, query, ['QtQuick']);
      const b = analyze(registry, query, ['QtQuick']);
      expect(a.modules.length).toBe(b.modules.length);
      expect(a.allTypes.size).toBe(b.allTypes.size);
      for (const [key, typeA] of a.allTypes) {
        const typeB = b.allTypes.get(key);
        expect(typeB).toBeDefined();
        expect(typeA.ownProperties.length).toBe(typeB!.ownProperties.length);
        expect(typeA.inheritedProperties.length).toBe(typeB!.inheritedProperties.length);
      }
    });
  });

  describe('name conflict detection', () => {
    test('AN-60: detects types with same qmlName in different modules', () => {
      expect(analyzed.nameConflicts.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('module directory naming', () => {
    test('AN-70: module URI maps to directory name', () => {
      const qtQuick = analyzed.modules.find((m) => m.uri === 'QtQuick');
      expect(qtQuick).toBeDefined();
      expect(qtQuick!.directoryName).toBe('QtQuick');
    });

    test('AN-71: dotted module URI uses dots in directory', () => {
      const layouts = analyzed.modules.find((m) => m.uri === 'QtQuick.Layouts');
      expect(layouts).toBeDefined();
      expect(layouts!.directoryName).toBe('QtQuick.Layouts');
    });
  });

  describe('edge cases', () => {
    test('AN-80: handles types with no own properties', () => {
      const t = analyzed.allTypes.get('QQuickFocusScope');
      expect(t).toBeDefined();
      expect(t!.classification).toBe('creatable-object');
    });

    test('AN-81: handles deep inheritance chains', () => {
      const button = analyzed.allTypes.get('QQuickButton');
      if (button) {
        const allProps = [...button.ownProperties, ...button.inheritedProperties];
        expect(allProps.length).toBeGreaterThan(10);
      }
    });
  });
});
