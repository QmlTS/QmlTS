import { describe, expect, test } from 'bun:test';
import { createImportResolver } from '../../../src/compiler/transform/import-resolver.js';
import type { RequiredImport } from '../../../src/compiler/transform/transform-types.js';

describe('ImportResolver', () => {
  const resolver = createImportResolver();

  // IM-01: Single import preserved
  test('IM-01: single import preserved with version', () => {
    const imports: RequiredImport[] = [{ moduleUri: 'QtQuick', version: '6.11', injected: true }];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(1);
    expect(result[0]!.moduleUri).toBe('QtQuick');
    expect(result[0]!.version).toBe('6.11');
    expect(result[0]!.injected).toBe(true);
  });

  // IM-02: Different module
  test('IM-02: different module resolved separately', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
      { moduleUri: 'QtQuick.Controls', version: '6.11', injected: true },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(2);
    expect(result.find((r) => r.moduleUri === 'QtQuick')).toBeDefined();
    expect(result.find((r) => r.moduleUri === 'QtQuick.Controls')).toBeDefined();
  });

  // IM-03: Same module twice → deduplicated
  test('IM-03: same module twice deduplicated to 1', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(1);
    expect(result[0]!.moduleUri).toBe('QtQuick');
  });

  // IM-04: Injected flag preserved
  test('IM-04: injected flag preserved', () => {
    const imports: RequiredImport[] = [{ moduleUri: 'QtQuick', version: '6.11', injected: true }];
    const result = resolver.resolve(imports);
    expect(result[0]!.injected).toBe(true);
  });

  // IM-05: Different versions → highest kept
  test('IM-05: different versions — highest version kept', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.5', injected: true },
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(1);
    expect(result[0]!.version).toBe('6.11');
  });

  // IM-06: Different qualifiers → kept separate
  test('IM-06: different qualifiers kept separate', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
      { moduleUri: 'QtQuick', version: '6.11', qualifier: 'QQ', injected: true },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(2);
  });

  // IM-07: Explicit overrides injected
  test('IM-07: explicit import overrides injected for same module', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
      { moduleUri: 'QtQuick', version: '6.11', injected: false },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(1);
    expect(result[0]!.injected).toBe(false);
  });

  // Additional: merge() produces same result as resolve()
  test('merge() and resolve() produce same results', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.5', injected: true },
      { moduleUri: 'QtQuick', version: '6.11', injected: false },
    ];
    const resolved = resolver.resolve(imports);
    const merged = resolver.merge(imports);
    expect(resolved).toEqual(merged);
  });

  // Additional: Missing version doesn't override explicit
  test('missing version does not override explicit version', () => {
    const imports: RequiredImport[] = [
      { moduleUri: 'QtQuick', version: '6.11', injected: true },
      { moduleUri: 'QtQuick', injected: true },
    ];
    const result = resolver.resolve(imports);
    expect(result).toHaveLength(1);
    expect(result[0]!.version).toBe('6.11');
  });
});
