import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseQmltypes } from '../../src/registry/qmltypes-parser.js';

const fixturesDir = join(import.meta.dir, 'fixtures');
const readFixture = (name: string) => readFileSync(join(fixturesDir, name), 'utf-8');

describe('QmltypesParser', () => {
  describe('minimal parsing', () => {
    test('QT-01: empty file returns empty components', () => {
      const result = parseQmltypes('', 'empty.qmltypes');
      expect(result.success).toBe(true);
      expect(result.file.components).toHaveLength(0);
    });

    test('QT-02: minimal Component parses name correctly', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      expect(result.success).toBe(true);
      expect(result.file.components.length).toBeGreaterThanOrEqual(1);
      const item = result.file.components[0];
      expect(item?.name).toBe('QQuickItem');
    });

    test('QT-03: Component with properties has complete Property fields', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      expect(item.properties.length).toBeGreaterThanOrEqual(4);

      const widthProp = item.properties.find((p) => p.name === 'width');
      expect(widthProp).toBeDefined();
      expect(widthProp!.type).toBe('double');
    });
  });

  describe('complete field parsing', () => {
    test('QT-10: accessSemantics parsed correctly', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      expect(item.accessSemantics).toBe('reference');
    });

    test('QT-10b: value accessSemantics', () => {
      const result = parseQmltypes(readFixture('value-types.qmltypes'), 'value-types.qmltypes');
      const color = result.file.components.find((c) => c.name === 'QColor');
      expect(color?.accessSemantics).toBe('value');
    });

    test('QT-11: multiple exports parsed', () => {
      const result = parseQmltypes(readFixture('complex.qmltypes'), 'complex.qmltypes');
      const rect = result.file.components.find((c) => c.name === 'QQuickRectangle');
      expect(rect?.exports).toEqual(['QtQuick/Rectangle 2.0', 'QtQuick/Rectangle 6.0']);
    });

    test('QT-12: exportMetaObjectRevisions decoded', () => {
      const result = parseQmltypes(readFixture('complex.qmltypes'), 'complex.qmltypes');
      const rect = result.file.components.find((c) => c.name === 'QQuickRectangle');
      expect(rect?.exportMetaObjectRevisions).toEqual([512, 1536]);
    });

    test('QT-13: Property.isList', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const children = item.properties.find((p) => p.name === 'children');
      expect(children?.isList).toBe(true);
    });

    test('QT-14: Property.isPointer', () => {
      const result = parseQmltypes(readFixture('complex.qmltypes'), 'complex.qmltypes');
      const rect = result.file.components.find((c) => c.name === 'QQuickRectangle')!;
      const gradient = rect.properties.find((p) => p.name === 'gradient');
      expect(gradient?.isPointer).toBe(true);
    });

    test('QT-15: Property.isReadonly', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const children = item.properties.find((p) => p.name === 'children');
      expect(children?.isReadonly).toBe(true);
    });

    test('QT-17: Signal with parameters', () => {
      const result = parseQmltypes(readFixture('complex.qmltypes'), 'complex.qmltypes');
      const text = result.file.components.find((c) => c.name === 'QQuickText')!;
      const linkActivated = text.signals.find((s) => s.name === 'linkActivated');
      expect(linkActivated).toBeDefined();
      expect(linkActivated!.parameters).toHaveLength(1);
      expect(linkActivated!.parameters[0]?.type).toBe('QString');
    });

    test('QT-18: Method return type', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const mapToItem = item.methods.find((m) => m.name === 'mapToItem');
      expect(mapToItem?.type).toBe('QPointF');
    });

    test('QT-20: Enum.isFlag and alias', () => {
      const result = parseQmltypes(readFixture('enums.qmltypes'), 'enums.qmltypes');
      const item = result.file.components[0]!;
      const flags = item.enums.find((e) => e.name === 'Flags');
      expect(flags?.isFlag).toBe(true);
      expect(flags?.alias).toBe('Flag');
    });

    test('QT-21: Enum.isScoped', () => {
      const result = parseQmltypes(readFixture('enums.qmltypes'), 'enums.qmltypes');
      const item = result.file.components[0]!;
      const focusPolicy = item.enums.find((e) => e.name === 'FocusPolicy');
      expect(focusPolicy?.isScoped).toBe(true);
      expect(focusPolicy?.type).toBe('quint8');
    });

    test('QT-24: attachedType', () => {
      const result = parseQmltypes(
        readFixture('attached-types.qmltypes'),
        'attached-types.qmltypes',
      );
      const item = result.file.components.find((c) => c.name === 'QQuickItem');
      expect(item?.attachedType).toBe('QQuickKeysAttached');
    });

    test('QT-25: extension and extensionIsNamespace', () => {
      const result = parseQmltypes(readFixture('value-types.qmltypes'), 'value-types.qmltypes');
      const color = result.file.components.find((c) => c.name === 'QColor');
      expect(color?.extension).toBe('QColorValueType');
    });
  });

  describe('multi-component parsing', () => {
    test('parses multiple components in one file', () => {
      const result = parseQmltypes(readFixture('complex.qmltypes'), 'complex.qmltypes');
      expect(result.success).toBe(true);
      expect(result.file.components.length).toBe(4);
    });

    test('value-types file parses 4 value types', () => {
      const result = parseQmltypes(readFixture('value-types.qmltypes'), 'value-types.qmltypes');
      expect(result.success).toBe(true);
      expect(result.file.components.length).toBe(4);
    });
  });

  describe('edge cases', () => {
    test('prototype field is parsed', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      expect(item.prototype).toBe('QObject');
    });

    test('defaultProperty is parsed', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      expect(item.defaultProperty).toBe('data');
    });

    test('enforcesScopedEnums is parsed', () => {
      const result = parseQmltypes(readFixture('enums.qmltypes'), 'enums.qmltypes');
      const item = result.file.components[0]!;
      expect(item.enforcesScopedEnums).toBe(true);
    });

    test('Enum values array is parsed correctly', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const transformOrigin = item.enums.find((e) => e.name === 'TransformOrigin');
      expect(transformOrigin?.values).toEqual(['TopLeft', 'Top', 'TopRight', 'Left', 'Center']);
    });

    test('Method parameters with isPointer', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const mapToItem = item.methods.find((m) => m.name === 'mapToItem')!;
      expect(mapToItem.parameters).toHaveLength(2);
      const itemParam = mapToItem.parameters.find((p) => p.name === 'item');
      expect(itemParam?.isPointer).toBe(true);
    });

    test('Property.notify signal', () => {
      const result = parseQmltypes(readFixture('minimal.qmltypes'), 'minimal.qmltypes');
      const item = result.file.components[0]!;
      const visible = item.properties.find((p) => p.name === 'visible');
      expect(visible?.notify).toBe('visibleChanged');
    });
  });
});
