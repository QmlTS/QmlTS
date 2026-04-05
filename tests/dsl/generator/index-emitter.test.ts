import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { analyze } from '../../../src/dsl/generator/analyzer.js';
import { IndexEmitter } from '../../../src/dsl/generator/index-emitter.js';
import type { AnalyzedRegistry, AnalyzedType } from '../../../src/dsl/generator/types.js';
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

describe('IndexEmitter', () => {
  const analyzed = analyze(registry, query, ['QtQuick', 'QtQuick.Layouts']);
  const ie = new IndexEmitter(analyzed);

  test('IE-01: emitModuleIndex generates re-exports for types', () => {
    const mod = analyzed.modules.find((m) => m.uri === 'QtQuick.Layouts')!;
    const code = ie.emitModuleIndex(mod);
    expect(code).toContain('AUTO-GENERATED');
    expect(code).toContain("from './");
    expect(code).toContain('export');
  });

  test('IE-02: emitTopLevelIndex generates module re-exports', () => {
    const code = ie.emitTopLevelIndex();
    expect(code).toContain('AUTO-GENERATED');
    expect(code).toContain("from './QtQuick/index.js'");
    expect(code).toContain("from './QtQuick.Layouts/index.js'");
  });

  test('IE-03: module index sorts exports alphabetically', () => {
    const mod = analyzed.modules.find((m) => m.uri === 'QtQuick')!;
    const code = ie.emitModuleIndex(mod);
    const lines = code.split('\n').filter((l) => l.includes('export'));
    const sorted = [...lines].sort();
    expect(lines).toEqual(sorted);
  });

  test('IE-04: top-level index has modules in URI-sorted order', () => {
    const code = ie.emitTopLevelIndex();
    // QtQuick should come before QtQuick.Layouts (URI sort)
    const qtQuickIdx = code.indexOf('QtQuick/');
    const layoutsIdx = code.indexOf('QtQuick.Layouts/');
    expect(qtQuickIdx).toBeGreaterThan(-1);
    expect(layoutsIdx).toBeGreaterThan(-1);
    expect(qtQuickIdx).toBeLessThan(layoutsIdx);
  });

  test('IE-05: getGeneratedFiles returns index files', () => {
    const files = ie.getGeneratedFiles();
    expect(files.some((f) => f.relativePath === 'QtQuick/index.ts')).toBe(true);
    expect(files.some((f) => f.relativePath === 'QtQuick.Layouts/index.ts')).toBe(true);
    expect(files.some((f) => f.relativePath === 'index.ts')).toBe(true);
  });

  test('IE-06: duplicated symbols keep a deterministic winner', () => {
    const makeType = (qualifiedName: string, emitFileName: string): AnalyzedType => ({
      qualifiedName,
      qmlName: 'Internal::Thing',
      emitFileName,
      dslSymbolName: 'Thing',
      moduleUri: 'Test.Module',
      classification: 'creatable-object',
      ownProperties: [],
      inheritedProperties: [],
      ownSignals: [],
      inheritedSignals: [],
      ownMethods: [],
      inheritedMethods: [],
      ownEnums: [],
      inheritedEnums: [],
      groupedProperties: [],
      attachedTypes: [],
    });

    const mod = {
      uri: 'Test.Module',
      directoryName: 'Test.Module',
      types: [makeType('A', 'AlphaThing'), makeType('B', 'BetaThing')],
    };
    const emitter = new IndexEmitter({
      qtVersion: 'test',
      modules: [mod],
      allTypes: new Map(),
      nameConflicts: [],
      groupedSurfaces: new Map(),
      attachedSurfaces: new Map(),
      enumIndex: new Map(),
    } as AnalyzedRegistry);

    const code = emitter.emitModuleIndex(mod);
    expect(code).toContain("export { ThingBuilder, Thing } from './AlphaThing.js';");
    expect(code).not.toContain("export { ThingBuilder, Thing } from './BetaThing.js';");
  });
});
