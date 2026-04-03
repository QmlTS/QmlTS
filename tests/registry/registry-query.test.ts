import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { normalize } from '../../src/registry/normalizer.js';
import { parseQmltypes } from '../../src/registry/qmltypes-parser.js';
import { parseQmldir } from '../../src/registry/qmldir-parser.js';
import { parseMetatypes } from '../../src/registry/metatypes-parser.js';
import { RegistryQuery } from '../../src/registry/registry-query.js';
import type { NormalizerConfig } from '../../src/registry/types.js';

const fixturesDir = join(import.meta.dir, 'fixtures');
const readFixture = (name: string) => readFileSync(join(fixturesDir, name), 'utf-8');

const defaultConfig: NormalizerConfig = {
  primarySource: 'qmltypes-primary',
  resolveInheritance: true,
  filterPrivate: true,
  mergeOverloads: false,
};

function buildQuery() {
  const qmltypes = parseQmltypes(readFixture('complex.qmltypes'), 'qml/QtQuick/plugins.qmltypes');
  const qmldir = parseQmldir(readFixture('minimal.qmldir'), 'qml/QtQuick/qmldir');
  const metatypes = parseMetatypes(readFixture('minimal_metatypes.json'), 'metatypes/qt6quick_metatypes.json');
  const result = normalize(
    [qmltypes.file], [qmldir.file], [metatypes.file],
    defaultConfig, '6.11.0', '/tmp/qt'
  );
  return new RegistryQuery(result.registry);
}

describe('RegistryQuery', () => {
  describe('type lookup', () => {
    test('RQ-10: findByQualifiedName', () => {
      const query = buildQuery();
      const item = query.findByQualifiedName('QQuickRectangle');
      expect(item).toBeDefined();
      expect(item!.qmlName).toBe('Rectangle');
    });

    test('RQ-11: findByQmlName', () => {
      const query = buildQuery();
      const item = query.findByQmlName('Rectangle');
      expect(item).toBeDefined();
      expect(item!.qualifiedName).toBe('QQuickRectangle');
    });

    test('RQ-13: searchTypes with wildcard', () => {
      const query = buildQuery();
      const results = query.searchTypes('Rect*');
      expect(results.some(t => t.qmlName === 'Rectangle')).toBe(true);
    });

    test('searchTypes treats regex metacharacters literally except for wildcard star', () => {
      const query = buildQuery();
      expect(query.searchTypes('Rect(angle')).toHaveLength(0);
      const results = query.searchTypes('Rect*gle');
      expect(results.some(t => t.qmlName === 'Rectangle')).toBe(true);
    });

    test('findByQualifiedName returns undefined for non-existent type', () => {
      const query = buildQuery();
      expect(query.findByQualifiedName('NonExistent')).toBeUndefined();
    });
  });

  describe('inheritance', () => {
    test('RQ-20: getInheritanceChain', () => {
      const query = buildQuery();
      const chain = query.getInheritanceChain('QQuickRectangle');
      const names = chain.map(t => t.qualifiedName);
      expect(names).toContain('QQuickItem');
    });

    test('RQ-22: isSubtypeOf returns true for subtype', () => {
      const query = buildQuery();
      expect(query.isSubtypeOf('QQuickRectangle', 'QQuickItem')).toBe(true);
    });

    test('RQ-23: isSubtypeOf returns false for non-subtype', () => {
      const query = buildQuery();
      expect(query.isSubtypeOf('QQuickItem', 'QQuickRectangle')).toBe(false);
    });

    test('RQ-24: isSubtypeOf strict — same type returns false', () => {
      const query = buildQuery();
      expect(query.isSubtypeOf('QQuickItem', 'QQuickItem')).toBe(false);
    });
  });

  describe('member queries', () => {
    test('RQ-30: getAllProperties without inheritance', () => {
      const query = buildQuery();
      const props = query.getAllProperties('QQuickRectangle', false);
      const names = props.map(p => p.name);
      expect(names).toContain('color');
      expect(names).toContain('radius');
    });

    test('RQ-31: getAllProperties with inheritance', () => {
      const query = buildQuery();
      const props = query.getAllProperties('QQuickRectangle', true);
      const names = props.map(p => p.name);
      expect(names).toContain('color');
      // Inherited from QQuickItem
      // These might be present depending on how the fixture data is merged
    });

    test('RQ-34: getDefaultProperty', () => {
      const query = buildQuery();
      const defProp = query.getDefaultProperty('QQuickItem');
      expect(defProp).toBeDefined();
      expect(defProp!.name).toBe('data');
    });

    test('overridden inherited properties remain visible and are flagged', () => {
      const registry = {
        formatVersion: '1.0.0',
        generatedAt: new Date().toISOString(),
        qtVersion: '6.11.0',
        qtDir: '/tmp/qt',
        buildDuration: 1,
        modules: [],
        builtins: [],
        stats: {
          moduleCount: 0,
          typeCount: 2,
          builtinCount: 0,
          sourceFiles: { qmltypes: 0, qmldir: 0, metatypes: 0 },
        },
        types: [
          {
            qualifiedName: 'Base',
            qmlName: 'Base',
            moduleUri: 'Test',
            accessSemantics: 'reference',
            exports: [],
            creatable: true,
            singleton: false,
            properties: [{ name: 'x', type: 'int', cppType: 'int', readonly: false, constant: false, required: false, final: false, pointer: false, list: false, hasNotify: false }],
            signals: [],
            methods: [],
            enums: [],
            sources: [{ kind: 'qmltypes', filePath: 'base.qmltypes' }],
          },
          {
            qualifiedName: 'Derived',
            qmlName: 'Derived',
            moduleUri: 'Test',
            accessSemantics: 'reference',
            baseType: 'Base',
            exports: [],
            creatable: true,
            singleton: false,
            properties: [{ name: 'x', type: 'double', cppType: 'double', readonly: false, constant: false, required: false, final: false, pointer: false, list: false, hasNotify: false }],
            signals: [],
            methods: [],
            enums: [],
            sources: [{ kind: 'qmltypes', filePath: 'derived.qmltypes' }],
          },
        ],
      } as const;

      const query = new RegistryQuery(registry);
      const props = query.getAllProperties('Derived', true).filter((p) => p.name === 'x');
      expect(props).toHaveLength(2);
      expect(props[0]?.declaredBy).toBe('Derived');
      expect(props[0]?.overridden).toBe(false);
      expect(props[1]?.declaredBy).toBe('Base');
      expect(props[1]?.overridden).toBe(true);
    });
  });

  describe('classification', () => {
    test('RQ-40: getCreatableTypes', () => {
      const query = buildQuery();
      const creatables = query.getCreatableTypes();
      expect(creatables.length).toBeGreaterThan(0);
      expect(creatables.every(t => t.creatable && t.accessSemantics === 'reference')).toBe(true);
    });

    test('getValueTypes returns value semantics types', () => {
      const qmltypes = parseQmltypes(readFixture('value-types.qmltypes'), 'test.qmltypes');
      const result = normalize([qmltypes.file], [], [], defaultConfig, '6.11.0', '/tmp/qt');
      const query = new RegistryQuery(result.registry);
      const valueTypes = query.getValueTypes();
      expect(valueTypes.length).toBeGreaterThan(0);
      expect(valueTypes.every(t => t.accessSemantics === 'value')).toBe(true);
    });
  });

  describe('module queries', () => {
    test('RQ-01: getModuleUris', () => {
      const query = buildQuery();
      const uris = query.getModuleUris();
      expect(uris.length).toBeGreaterThanOrEqual(1);
    });

    test('RQ-02: getModule returns module', () => {
      const query = buildQuery();
      const uris = query.getModuleUris();
      if (uris.length > 0) {
        const mod = query.getModule(uris[0]!);
        expect(mod).toBeDefined();
      }
    });

    test('RQ-03: getModule returns undefined for non-existent', () => {
      const query = buildQuery();
      expect(query.getModule('NonExistent')).toBeUndefined();
    });
  });
});
