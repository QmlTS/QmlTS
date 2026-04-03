import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseMetatypes } from '../../src/registry/metatypes-parser.js';

const fixturesDir = join(import.meta.dir, 'fixtures');
const readFixture = (name: string) => readFileSync(join(fixturesDir, name), 'utf-8');

describe('MetatypesParser', () => {
  test('MT-01: minimal JSON with empty classes', () => {
    const result = parseMetatypes('[]', 'empty.json');
    expect(result.success).toBe(true);
    expect(result.file.entries).toHaveLength(0);
  });

  test('MT-02: inputFile and outputRevision', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    expect(result.success).toBe(true);
    expect(result.file.entries.length).toBeGreaterThanOrEqual(1);
    const entry = result.file.entries[0]!;
    expect(entry.inputFile).toBe('qquickitem_p.h');
    expect(entry.outputRevision).toBe(69);
  });

  test('MT-03: className and qualifiedClassName', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.className).toBe('QQuickItem');
    expect(cls.qualifiedClassName).toBe('QQuickItem');
  });

  test('MT-04: object=true for QObject derived', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.object).toBe(true);
  });

  test('MT-06: classInfos QML.Element', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    const elementInfo = cls.classInfos?.find(ci => ci.name === 'QML.Element');
    expect(elementInfo?.value).toBe('Item');
  });

  test('MT-09: superClasses', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.superClasses).toBeDefined();
    expect(cls.superClasses!.length).toBeGreaterThanOrEqual(1);
    expect(cls.superClasses![0]!.name).toBe('QObject');
    expect(cls.superClasses![0]!.access).toBe('public');
  });

  test('MT-10: properties with complete fields', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.properties).toBeDefined();
    expect(cls.properties!.length).toBeGreaterThanOrEqual(3);

    const width = cls.properties!.find(p => p.name === 'width')!;
    expect(width.type).toBe('double');
    expect(width.constant).toBe(false);
    expect(width.required).toBe(false);
    expect(width.final).toBe(false);
  });

  test('MT-11: signals', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.signals).toBeDefined();
    expect(cls.signals!.length).toBeGreaterThanOrEqual(3);

    const widthChanged = cls.signals!.find(s => s.name === 'widthChanged');
    expect(widthChanged).toBeDefined();
    expect(widthChanged!.access).toBe('public');
  });

  test('MT-13: methods', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.methods).toBeDefined();
    expect(cls.methods!.length).toBeGreaterThanOrEqual(1);

    const mapToItem = cls.methods!.find(m => m.name === 'mapToItem');
    expect(mapToItem).toBeDefined();
    expect(mapToItem!.returnType).toBe('QPointF');
  });

  test('MT-14: enums', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const cls = result.file.entries[0]!.classes[0]!;
    expect(cls.enums).toBeDefined();
    const transformOrigin = cls.enums!.find(e => e.name === 'TransformOrigin');
    expect(transformOrigin).toBeDefined();
    expect(transformOrigin!.values).toContain('TopLeft');
  });

  test('multiple classes in one file', () => {
    const result = parseMetatypes(readFixture('minimal_metatypes.json'), 'test.json');
    const allClasses = result.file.entries.flatMap(e => e.classes);
    expect(allClasses.length).toBeGreaterThanOrEqual(2);
    const qobject = allClasses.find(c => c.className === 'QObject');
    expect(qobject).toBeDefined();
  });

  test('malformed JSON returns error diagnostic', () => {
    const result = parseMetatypes('{ invalid json', 'bad.json');
    expect(result.success).toBe(false);
    expect(result.diagnostics.some(d => d.level === 'error')).toBe(true);
  });
});
