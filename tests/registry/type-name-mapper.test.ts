import { describe, test, expect } from 'bun:test';
import { TypeNameMapper } from '../../src/registry/type-name-mapper.js';

describe('TypeNameMapper', () => {
  const mapper = new TypeNameMapper();

  test('TM-01: QString → string', () => {
    expect(mapper.mapCppToQml('QString')).toBe('string');
  });

  test('TM-02: bool → bool', () => {
    expect(mapper.mapCppToQml('bool')).toBe('bool');
  });

  test('TM-03: int → int', () => {
    expect(mapper.mapCppToQml('int')).toBe('int');
  });

  test('TM-04: double → double', () => {
    expect(mapper.mapCppToQml('double')).toBe('double');
  });

  test('TM-05: float → real', () => {
    expect(mapper.mapCppToQml('float')).toBe('real');
  });

  test('TM-06: qreal → real', () => {
    expect(mapper.mapCppToQml('qreal')).toBe('real');
  });

  test('TM-07: QColor → color', () => {
    expect(mapper.mapCppToQml('QColor')).toBe('color');
  });

  test('TM-08: QUrl → url', () => {
    expect(mapper.mapCppToQml('QUrl')).toBe('url');
  });

  test('TM-09: QDateTime → date', () => {
    expect(mapper.mapCppToQml('QDateTime')).toBe('date');
  });

  test('TM-10: QPointF → point', () => {
    expect(mapper.mapCppToQml('QPointF')).toBe('point');
  });

  test('TM-11: QSizeF → size', () => {
    expect(mapper.mapCppToQml('QSizeF')).toBe('size');
  });

  test('TM-12: QRectF → rect', () => {
    expect(mapper.mapCppToQml('QRectF')).toBe('rect');
  });

  test('TM-13: QFont → font', () => {
    expect(mapper.mapCppToQml('QFont')).toBe('font');
  });

  test('TM-14: QMatrix4x4 → matrix4x4', () => {
    expect(mapper.mapCppToQml('QMatrix4x4')).toBe('matrix4x4');
  });

  test('TM-15: QVector3D → vector3d', () => {
    expect(mapper.mapCppToQml('QVector3D')).toBe('vector3d');
  });

  test('TM-16: QVariant → var', () => {
    expect(mapper.mapCppToQml('QVariant')).toBe('var');
  });

  test('TM-17: QJSValue → var', () => {
    expect(mapper.mapCppToQml('QJSValue')).toBe('var');
  });

  test('TM-18: QVariantList → list', () => {
    expect(mapper.mapCppToQml('QVariantList')).toBe('list');
  });

  test('TM-19: QStringList → list<string>', () => {
    expect(mapper.mapCppToQml('QStringList')).toBe('list<string>');
  });

  test('TM-20: void → void', () => {
    expect(mapper.mapCppToQml('void')).toBe('void');
  });

  test('TM-21: unknown type is preserved', () => {
    expect(mapper.mapCppToQml('UnknownType')).toBe('UnknownType');
  });

  test('TM-22: custom mapping works', () => {
    const m = new TypeNameMapper();
    m.addMapping('MyCustomType', 'customQml');
    expect(m.mapCppToQml('MyCustomType')).toBe('customQml');
  });

  test('TM-23: reverse mapping string → QString', () => {
    expect(mapper.mapQmlToCpp('string')).toBe('QString');
  });

  test('QPoint → point', () => {
    expect(mapper.mapCppToQml('QPoint')).toBe('point');
  });

  test('QVector2D → vector2d', () => {
    expect(mapper.mapCppToQml('QVector2D')).toBe('vector2d');
  });

  test('QVector4D → vector4d', () => {
    expect(mapper.mapCppToQml('QVector4D')).toBe('vector4d');
  });

  test('QQuaternion → quaternion', () => {
    expect(mapper.mapCppToQml('QQuaternion')).toBe('quaternion');
  });

  test('reverse mapping for real → float or qreal', () => {
    const result = mapper.mapQmlToCpp('real');
    expect(['float', 'qreal']).toContain(result);
  });

  test('reverse mapping unknown preserved', () => {
    expect(mapper.mapQmlToCpp('unknownQmlType')).toBe('unknownQmlType');
  });
});
