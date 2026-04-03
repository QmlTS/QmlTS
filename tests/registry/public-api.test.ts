import { describe, test, expect } from 'bun:test';
import { getRegistry, getQuery, QT_VERSION } from '../../src/index.js';

describe('Public API (pre-built snapshot)', () => {
  test('getRegistry() returns a valid QmlRegistry', () => {
    const registry = getRegistry();
    expect(registry.formatVersion).toBe('1.0.0');
    expect(registry.qtVersion).toBe(QT_VERSION);
    expect(registry.types.length).toBeGreaterThan(0);
    expect(registry.modules.length).toBeGreaterThan(0);
    expect(registry.builtins.length).toBeGreaterThan(0);
  });

  test('getRegistry() returns same instance on repeated calls', () => {
    const a = getRegistry();
    const b = getRegistry();
    expect(a).toBe(b);
  });

  test('getQuery() returns a usable query engine', () => {
    const query = getQuery();
    expect(query.getModuleUris().length).toBeGreaterThan(0);
  });

  test('getQuery() returns same instance on repeated calls', () => {
    const a = getQuery();
    const b = getQuery();
    expect(a).toBe(b);
  });

  test('can find Rectangle type', () => {
    const query = getQuery();
    const rect = query.findByQmlName('Rectangle');
    expect(rect).toBeDefined();
    expect(rect!.qualifiedName).toBe('QQuickRectangle');
    expect(rect!.moduleUri).toBe('QtQuick');
  });

  test('can query properties with inheritance', () => {
    const query = getQuery();
    const props = query.getAllProperties('QQuickRectangle', true);
    const names = props.map(p => p.name);
    expect(names).toContain('color');
    expect(names).toContain('radius');
  });

  test('can traverse inheritance chain', () => {
    const query = getQuery();
    const chain = query.getInheritanceChain('QQuickRectangle');
    const names = chain.map(t => t.qualifiedName);
    expect(names).toContain('QQuickItem');
  });

  test('can list modules', () => {
    const query = getQuery();
    const uris = query.getModuleUris();
    expect(uris).toContain('QtQuick');
    expect(uris).toContain('QtQml');
  });

  test('can get creatable types', () => {
    const query = getQuery();
    const creatables = query.getCreatableTypes('QtQuick');
    expect(creatables.length).toBeGreaterThan(0);
    expect(creatables.every(t => t.creatable)).toBe(true);
  });

  test('registry stats match expected Qt 6.11 data', () => {
    const { stats } = getRegistry();
    expect(stats.sourceFiles.qmltypes).toBeGreaterThanOrEqual(100);
    expect(stats.sourceFiles.qmldir).toBeGreaterThanOrEqual(100);
    expect(stats.sourceFiles.metatypes).toBeGreaterThanOrEqual(150);
    expect(stats.typeCount).toBeGreaterThan(1000);
    expect(stats.moduleCount).toBeGreaterThan(50);
  });
});
