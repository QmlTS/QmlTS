import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { normalize } from '../../src/registry/normalizer.js';
import { parseQmltypes } from '../../src/registry/qmltypes-parser.js';
import { parseQmldir } from '../../src/registry/qmldir-parser.js';
import { parseMetatypes } from '../../src/registry/metatypes-parser.js';
import type { NormalizerConfig, RawQmltypesFile, RawQmldirFile, RawMetatypesFile } from '../../src/registry/types.js';

const fixturesDir = join(import.meta.dir, 'fixtures');
const readFixture = (name: string) => readFileSync(join(fixturesDir, name), 'utf-8');

const defaultConfig: NormalizerConfig = {
  primarySource: 'qmltypes-primary',
  resolveInheritance: true,
  filterPrivate: true,
  mergeOverloads: false,
};

function loadFixtures() {
  const qmltypes = parseQmltypes(readFixture('complex.qmltypes'), 'qml/QtQuick/plugins.qmltypes');
  const qmldir = parseQmldir(readFixture('minimal.qmldir'), 'qml/QtQuick/qmldir');
  const metatypes = parseMetatypes(readFixture('minimal_metatypes.json'), 'metatypes/qt6quick_metatypes.json');
  return {
    qmltypesFiles: [qmltypes.file],
    qmldirFiles: [qmldir.file],
    metatypesFiles: [metatypes.file],
  };
}

describe('Normalizer', () => {
  test('NM-01: empty input produces empty registry', () => {
    const result = normalize([], [], [], defaultConfig, '6.11.0', '/tmp/qt');
    expect(result.registry.types).toHaveLength(0);
    expect(result.registry.modules).toHaveLength(0);
  });

  test('NM-02: only qmltypes produces valid registry', () => {
    const qmltypes = parseQmltypes(readFixture('minimal.qmltypes'), 'qml/QtQuick/plugins.qmltypes');
    const result = normalize([qmltypes.file], [], [], defaultConfig, '6.11.0', '/tmp/qt');
    expect(result.registry.types.length).toBeGreaterThanOrEqual(1);
  });

  test('NM-03: three source merge produces types', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    expect(result.registry.types.length).toBeGreaterThanOrEqual(1);
  });

  test('NM-05: exports parsing', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    const rect = result.registry.types.find(t => t.qualifiedName === 'QQuickRectangle');
    expect(rect).toBeDefined();
    expect(rect!.exports.length).toBeGreaterThanOrEqual(1);
    const exp = rect!.exports[0]!;
    expect(exp.module).toBe('QtQuick');
    expect(exp.name).toBe('Rectangle');
  });

  test('NM-06: qmlName extracted from exports', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    const rect = result.registry.types.find(t => t.qualifiedName === 'QQuickRectangle');
    expect(rect?.qmlName).toBe('Rectangle');
  });

  test('NM-08: base type (prototype) is set', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    const rect = result.registry.types.find(t => t.qualifiedName === 'QQuickRectangle');
    expect(rect?.baseType).toBe('QQuickItem');
  });

  test('NM-10: property type mapping', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    const rect = result.registry.types.find(t => t.qualifiedName === 'QQuickRectangle');
    const colorProp = rect?.properties.find(p => p.name === 'color');
    expect(colorProp).toBeDefined();
    expect(colorProp!.type).toBe('color');
    expect(colorProp!.cppType).toBe('QColor');
  });

  test('registry metadata is populated', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    expect(result.registry.formatVersion).toBe('1.0.0');
    expect(result.registry.qtVersion).toBe('6.11.0');
    expect(result.registry.stats.typeCount).toBeGreaterThan(0);
  });

  test('value types have correct accessSemantics', () => {
    const qmltypes = parseQmltypes(readFixture('value-types.qmltypes'), 'qml/QtQuick/plugins.qmltypes');
    const result = normalize([qmltypes.file], [], [], defaultConfig, '6.11.0', '/tmp/qt');
    const color = result.registry.types.find(t => t.qualifiedName === 'QColor');
    expect(color?.accessSemantics).toBe('value');
    expect(color?.creatable).toBe(false);
  });

  test('module info is created from qmldir', () => {
    const { qmltypesFiles, qmldirFiles, metatypesFiles } = loadFixtures();
    const result = normalize(qmltypesFiles, qmldirFiles, metatypesFiles, defaultConfig, '6.11.0', '/tmp/qt');
    expect(result.registry.modules.length).toBeGreaterThanOrEqual(1);
    const qtquick = result.registry.modules.find(m => m.uri === 'QtQuick');
    expect(qtquick).toBeDefined();
  });
});
