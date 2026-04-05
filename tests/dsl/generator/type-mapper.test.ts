import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { analyze } from '../../../src/dsl/generator/analyzer.js';
import { TypeMapper } from '../../../src/dsl/generator/type-mapper.js';
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
const analyzed = analyze(registry, query);
const mapper = new TypeMapper(analyzed);

describe('TypeMapper', () => {
  describe('primitive mappings', () => {
    test('TM-01: int maps to number', () => {
      expect(mapper.mapType('int')).toBe('number');
    });

    test('TM-02: double maps to number', () => {
      expect(mapper.mapType('double')).toBe('number');
    });

    test('TM-03: bool maps to boolean', () => {
      expect(mapper.mapType('bool')).toBe('boolean');
    });

    test('TM-04: string maps to string', () => {
      expect(mapper.mapType('string')).toBe('string');
    });
  });

  describe('semantic aliases', () => {
    test('TM-10: color maps to QmlColor', () => {
      expect(mapper.mapType('color')).toBe('QmlColor');
    });

    test('TM-11: url maps to QmlUrl', () => {
      expect(mapper.mapType('url')).toBe('QmlUrl');
    });

    test('TM-12: date maps to QmlDate', () => {
      expect(mapper.mapType('date')).toBe('QmlDate');
    });

    test('TM-13: font maps to QmlFont', () => {
      expect(mapper.mapType('font')).toBe('QmlFont');
    });
  });

  describe('value types', () => {
    test('TM-20: point maps to QmlPoint', () => {
      expect(mapper.mapType('point')).toBe('QmlPoint');
    });

    test('TM-21: size maps to QmlSize', () => {
      expect(mapper.mapType('size')).toBe('QmlSize');
    });

    test('TM-22: rect maps to QmlRect', () => {
      expect(mapper.mapType('rect')).toBe('QmlRect');
    });

    test('TM-23: vector3d maps to QmlVector3d', () => {
      expect(mapper.mapType('vector3d')).toBe('QmlVector3d');
    });
  });

  describe('catch-all', () => {
    test('TM-30: var maps to QmlValue', () => {
      expect(mapper.mapType('var')).toBe('QmlValue');
    });

    test('TM-31: variant maps to QmlValue', () => {
      expect(mapper.mapType('variant')).toBe('QmlValue');
    });
  });

  describe('object type references', () => {
    test('TM-40: known creatable type maps to builder name', () => {
      const result = mapper.mapType('QQuickItem');
      expect(result).toBe('ItemBuilder');
    });

    test('TM-41: grouped surface maps to grouped builder name', () => {
      const result = mapper.mapType('QQuickPen');
      expect(result).toBe('BorderBuilder');
    });
  });

  describe('unknown types', () => {
    test('TM-50: unknown type falls back to QmlValue', () => {
      const result = mapper.mapType('SomeUnknownType');
      expect(result).toBe('QmlValue');
    });

    test('TM-51: unknown type records diagnostic', () => {
      const m2 = new TypeMapper(analyzed);
      m2.mapType('TotallyUnknown');
      const diags = m2.getDiagnostics();
      expect(diags.length).toBeGreaterThan(0);
      expect(diags.some((d) => d.message.includes('TotallyUnknown'))).toBe(true);
    });
  });

  describe('C++ qualified types', () => {
    test('TM-60: Qt::Alignment is handled without crash', () => {
      const result = mapper.mapType('Qt::Alignment');
      expect(typeof result).toBe('string');
    });

    test('TM-61: QQmlComponent maps to QmlComponent', () => {
      expect(mapper.mapType('QQmlComponent')).toBe('QmlComponent');
    });
  });

  describe('import tracking', () => {
    test('TM-70: mapping QmlColor triggers runtime import need', () => {
      const m2 = new TypeMapper(analyzed);
      m2.mapType('color');
      const imports = m2.getRequiredRuntimeImports();
      expect(imports).toContain('QmlColor');
    });

    test('TM-71: mapping number does not trigger runtime import', () => {
      const m2 = new TypeMapper(analyzed);
      m2.mapType('int');
      const imports = m2.getRequiredRuntimeImports();
      expect(imports).not.toContain('number');
    });

    test('TM-72: resetImports clears tracked imports', () => {
      const m2 = new TypeMapper(analyzed);
      m2.mapType('color');
      expect(m2.getRequiredRuntimeImports()).toContain('QmlColor');
      m2.resetImports();
      expect(m2.getRequiredRuntimeImports().length).toBe(0);
    });
  });
});
