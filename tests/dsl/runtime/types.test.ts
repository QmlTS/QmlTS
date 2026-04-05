import { describe, expect, test } from 'bun:test';
import type {
  QmlBinding,
  QmlColor,
  QmlFont,
  QmlPoint,
  QmlRect,
  QmlSize,
  QmlValue,
} from '../../../src/dsl/runtime/types.js';
import {
  isQmlPrimitive,
  isQmlSemanticAlias,
  isQmlValueType,
  QML_TYPE_MAP,
} from '../../../src/dsl/runtime/types.js';

describe('QML Type System', () => {
  describe('type map', () => {
    test('TY-01: maps int/double/real/float to number', () => {
      expect(QML_TYPE_MAP['int']).toBe('number');
      expect(QML_TYPE_MAP['double']).toBe('number');
      expect(QML_TYPE_MAP['real']).toBe('number');
      expect(QML_TYPE_MAP['float']).toBe('number');
    });

    test('TY-02: maps string to string', () => {
      expect(QML_TYPE_MAP['string']).toBe('string');
      expect(QML_TYPE_MAP['QString']).toBe('string');
    });

    test('TY-03: maps bool to boolean', () => {
      expect(QML_TYPE_MAP['bool']).toBe('boolean');
    });

    test('TY-04: maps color to QmlColor', () => {
      expect(QML_TYPE_MAP['color']).toBe('QmlColor');
      expect(QML_TYPE_MAP['QColor']).toBe('QmlColor');
    });

    test('TY-05: maps url to QmlUrl', () => {
      expect(QML_TYPE_MAP['url']).toBe('QmlUrl');
      expect(QML_TYPE_MAP['QUrl']).toBe('QmlUrl');
    });

    test('TY-06: maps point/size/rect to value types', () => {
      expect(QML_TYPE_MAP['point']).toBe('QmlPoint');
      expect(QML_TYPE_MAP['size']).toBe('QmlSize');
      expect(QML_TYPE_MAP['rect']).toBe('QmlRect');
    });

    test('TY-07: maps date to QmlDate', () => {
      expect(QML_TYPE_MAP['date']).toBe('QmlDate');
      expect(QML_TYPE_MAP['QDate']).toBe('QmlDate');
      expect(QML_TYPE_MAP['QDateTime']).toBe('QmlDate');
    });

    test('TY-08: maps var/variant to QmlValue', () => {
      expect(QML_TYPE_MAP['var']).toBe('QmlValue');
      expect(QML_TYPE_MAP['variant']).toBe('QmlValue');
      expect(QML_TYPE_MAP['QVariant']).toBe('QmlValue');
    });

    test('TY-09: maps vector types', () => {
      expect(QML_TYPE_MAP['vector2d']).toBe('QmlVector2d');
      expect(QML_TYPE_MAP['vector3d']).toBe('QmlVector3d');
      expect(QML_TYPE_MAP['vector4d']).toBe('QmlVector4d');
    });

    test('TY-10: maps matrix4x4 and quaternion', () => {
      expect(QML_TYPE_MAP['matrix4x4']).toBe('QmlMatrix4x4');
      expect(QML_TYPE_MAP['quaternion']).toBe('QmlQuaternion');
    });
  });

  describe('classification helpers', () => {
    test('TY-11: isQmlPrimitive identifies primitives', () => {
      expect(isQmlPrimitive('number')).toBe(true);
      expect(isQmlPrimitive('string')).toBe(true);
      expect(isQmlPrimitive('boolean')).toBe(true);
      expect(isQmlPrimitive('QmlColor')).toBe(false);
    });

    test('TY-12: isQmlSemanticAlias identifies branded types', () => {
      expect(isQmlSemanticAlias('QmlColor')).toBe(true);
      expect(isQmlSemanticAlias('QmlUrl')).toBe(true);
      expect(isQmlSemanticAlias('QmlDate')).toBe(true);
      expect(isQmlSemanticAlias('number')).toBe(false);
    });

    test('TY-13: isQmlValueType identifies structured value types', () => {
      expect(isQmlValueType('QmlPoint')).toBe(true);
      expect(isQmlValueType('QmlSize')).toBe(true);
      expect(isQmlValueType('QmlRect')).toBe(true);
      expect(isQmlValueType('QmlFont')).toBe(true);
      expect(isQmlValueType('QmlColor')).toBe(false);
    });
  });

  describe('type shapes (compile-time checks)', () => {
    test('TY-14: QmlPoint has x and y', () => {
      const p: QmlPoint = { x: 0, y: 0 };
      expect(p.x).toBe(0);
      expect(p.y).toBe(0);
    });

    test('TY-15: QmlSize has width and height', () => {
      const s: QmlSize = { width: 100, height: 50 };
      expect(s.width).toBe(100);
    });

    test('TY-16: QmlRect has x, y, width, height', () => {
      const r: QmlRect = { x: 0, y: 0, width: 100, height: 50 };
      expect(r.width).toBe(100);
    });

    test('TY-17: QmlFont has optional properties', () => {
      const f: QmlFont = { family: 'Arial' };
      expect(f.family).toBe('Arial');
      expect(f.pointSize).toBeUndefined();
    });

    test('TY-18: QmlColor accepts string values', () => {
      const c: QmlColor = 'red' as QmlColor;
      expect(typeof c).toBe('string');
    });

    test('TY-19: QmlValue union accepts various types', () => {
      const vals: QmlValue[] = [42, 'hello', true, null, { x: 1, y: 2 } as QmlPoint];
      expect(vals.length).toBe(5);
    });

    test('TY-20: QmlBinding is a string brand', () => {
      const b: QmlBinding = 'parent.width' as QmlBinding;
      expect(typeof b).toBe('string');
    });
  });
});
