import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseQmldir } from '../../src/registry/qmldir-parser.js';

const fixturesDir = join(import.meta.dir, 'fixtures');
const readFixture = (name: string) => readFileSync(join(fixturesDir, name), 'utf-8');

describe('QmldirParser', () => {
  test('QD-01: module directive', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.success).toBe(true);
    expect(result.file.module).toBe('QtQuick');
  });

  test('QD-02: plugin directive', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.plugin).toBeDefined();
    expect(result.file.plugin!.name).toBe('qtquick2plugin');
  });

  test('QD-03: optional plugin', () => {
    const result = parseQmldir('optional plugin myplugin\n', 'test.qmldir');
    expect(result.file.plugin?.isOptional).toBe(true);
  });

  test('QD-04: classname', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.classname).toBe('QtQuick2Plugin');
  });

  test('QD-05: designersupported', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.designerSupported).toBe(true);
  });

  test('QD-06: typeinfo', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.typeinfo).toBe('plugins.qmltypes');
  });

  test('QD-07: prefer', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.prefer).toBe(':/qt-project.org/imports/QtQuick/');
  });

  test('QD-08: static', () => {
    const result = parseQmldir('module Test\nstatic\n', 'test.qmldir');
    expect(result.file.isStatic).toBe(true);
  });

  test('QD-09: system', () => {
    const result = parseQmldir('module Test\nsystem\n', 'test.qmldir');
    expect(result.file.isSystem).toBe(true);
  });

  test('QD-10: import directive', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    const qtqmlImport = result.file.imports.find((i) => i.module === 'QtQml');
    expect(qtqmlImport).toBeDefined();
    expect(qtqmlImport!.kind).toBe('required');
    expect(qtqmlImport!.version).toBe('auto');
  });

  test('QD-11: optional import', () => {
    const result = parseQmldir('optional import QtGraphicalEffects auto\n', 'test.qmldir');
    const imp = result.file.imports.find((i) => i.module === 'QtGraphicalEffects');
    expect(imp?.kind).toBe('optional');
  });

  test('QD-12: default import', () => {
    const result = parseQmldir('default import QtQuick.Controls.Material auto\n', 'test.qmldir');
    const imp = result.file.imports.find((i) => i.module === 'QtQuick.Controls.Material');
    expect(imp?.kind).toBe('default');
  });

  test('QD-13: depends', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    const dep = result.file.depends.find((d) => d.module === 'QtQml');
    expect(dep).toBeDefined();
    expect(dep!.version).toBe('auto');
  });

  test('QD-14: type entry', () => {
    const content = 'module Test\nButton 6.0 Button.qml\n';
    const result = parseQmldir(content, 'test.qmldir');
    expect(result.file.typeEntries).toHaveLength(1);
    expect(result.file.typeEntries[0]?.name).toBe('Button');
    expect(result.file.typeEntries[0]?.version).toBe('6.0');
    expect(result.file.typeEntries[0]?.filePath).toBe('Button.qml');
  });

  test('QD-15: singleton type entry', () => {
    const content = 'module Test\nsingleton Material 6.0 Material.qml\n';
    const result = parseQmldir(content, 'test.qmldir');
    expect(result.file.typeEntries[0]?.isSingleton).toBe(true);
  });

  test('QD-16: style variant', () => {
    const content = 'module Test\nButton 6.0 +Material/Button.qml\n';
    const result = parseQmldir(content, 'test.qmldir');
    const entry = result.file.typeEntries[0]!;
    expect(entry.styleSelector).toBe('Material');
  });

  test('QD-17: comment lines are skipped', () => {
    const content = '# This is a comment\nmodule Test\n# Another comment\n';
    const result = parseQmldir(content, 'test.qmldir');
    expect(result.success).toBe(true);
    expect(result.file.module).toBe('Test');
  });

  test('QD-18: empty lines skipped', () => {
    const content = '\n\nmodule Test\n\n\n';
    const result = parseQmldir(content, 'test.qmldir');
    expect(result.success).toBe(true);
    expect(result.file.module).toBe('Test');
  });

  test('linktarget parsed', () => {
    const result = parseQmldir(readFixture('minimal.qmldir'), 'minimal.qmldir');
    expect(result.file.plugin?.linktarget).toBe('Qt6::qtquick2plugin');
  });

  test('empty file returns empty result', () => {
    const result = parseQmldir('', 'empty.qmldir');
    expect(result.success).toBe(true);
    expect(result.file.imports).toHaveLength(0);
    expect(result.file.depends).toHaveLength(0);
    expect(result.file.typeEntries).toHaveLength(0);
  });
});
