import { describe, expect, test } from 'bun:test';
import type { SourceMapKind } from '../../../src/compiler/pipeline/pipeline-types.js';
import {
  createSourceMapBuilder,
  findSource,
  findTarget,
  sourceMapFromJson,
  sourceMapToJson,
} from '../../../src/compiler/pipeline/source-map.js';

describe('CompilerSourceMap', () => {
  // SM-01: Create + add mapping → entries non-empty
  test('SM-01: create builder and add mapping produces non-empty entries', () => {
    const builder = createSourceMapBuilder('src/Login.ts', 'output/Login.qml');
    builder.addMapping({
      source: { line: 5, column: 3 },
      target: { line: 10, column: 4 },
      kind: 'binding',
    });
    const map = builder.build();
    expect(map.sourceFile).toBe('src/Login.ts');
    expect(map.targetFile).toBe('output/Login.qml');
    expect(map.mappings.length).toBe(1);
    expect(map.mappings[0]!.source.line).toBe(5);
    expect(map.mappings[0]!.target.line).toBe(10);
    expect(map.mappings[0]!.kind).toBe('binding');
  });

  // SM-02: findSource(qmlLine) → returns TS line
  test('SM-02: findSource returns TS source location for QML line', () => {
    const builder = createSourceMapBuilder('a.ts', 'a.qml');
    builder.addMapping({
      source: { line: 3, column: 1 },
      target: { line: 7, column: 4 },
      kind: 'binding',
    });
    builder.addMapping({
      source: { line: 10, column: 2 },
      target: { line: 15, column: 8 },
      kind: 'handler',
    });
    const map = builder.build();

    const result = findSource(map, 15);
    expect(result).toBeDefined();
    expect(result!.line).toBe(10);
    expect(result!.column).toBe(2);
  });

  // SM-03: findTarget(tsLine) → returns QML line
  test('SM-03: findTarget returns QML location for TS line', () => {
    const builder = createSourceMapBuilder('a.ts', 'a.qml');
    builder.addMapping({
      source: { line: 5, column: 1 },
      target: { line: 12, column: 4 },
      kind: 'child',
    });
    const map = builder.build();

    const result = findTarget(map, 5);
    expect(result).toBeDefined();
    expect(result!.line).toBe(12);
    expect(result!.column).toBe(4);
  });

  // SM-04: toJson + fromJson roundtrip → content matches
  test('SM-04: toJson and fromJson roundtrip preserves content', () => {
    const builder = createSourceMapBuilder('view.ts', 'view.qml');
    builder.addMapping({
      source: { line: 1, column: 1 },
      target: { line: 1, column: 1 },
      kind: 'import',
    });
    builder.addMapping({
      source: { line: 5, column: 4 },
      target: { line: 8, column: 4 },
      kind: 'binding',
    });
    const original = builder.build();

    const json = sourceMapToJson(original);
    expect(() => JSON.parse(json)).not.toThrow();

    const restored = sourceMapFromJson(json);
    expect(restored.sourceFile).toBe(original.sourceFile);
    expect(restored.targetFile).toBe(original.targetFile);
    expect(restored.mappings.length).toBe(original.mappings.length);
    for (let i = 0; i < original.mappings.length; i++) {
      const orig = original.mappings[i]!;
      const rest = restored.mappings[i]!;
      expect(rest.source.line).toBe(orig.source.line);
      expect(rest.source.column).toBe(orig.source.column);
      expect(rest.target.line).toBe(orig.target.line);
      expect(rest.target.column).toBe(orig.target.column);
      expect(rest.kind).toBe(orig.kind);
    }
  });

  // SM-05: All SourceMapKind values map correctly
  test('SM-05: all SourceMapKind values are correctly stored and retrieved', () => {
    const kinds: SourceMapKind[] = [
      'binding',
      'handler',
      'child',
      'import',
      'state-binding',
      'command-binding',
      'effect-listener',
      'lifecycle',
    ];
    const builder = createSourceMapBuilder('test.ts', 'test.qml');
    for (let i = 0; i < kinds.length; i++) {
      builder.addMapping({
        source: { line: i + 1, column: 1 },
        target: { line: (i + 1) * 2, column: 1 },
        kind: kinds[i]!,
      });
    }
    const map = builder.build();
    expect(map.mappings.length).toBe(kinds.length);
    for (let i = 0; i < kinds.length; i++) {
      expect(map.mappings[i]!.kind).toBe(kinds[i]);
    }

    // Also verify roundtrip preserves kinds
    const restored = sourceMapFromJson(sourceMapToJson(map));
    for (let i = 0; i < kinds.length; i++) {
      expect(restored.mappings[i]!.kind).toBe(kinds[i]);
    }
  });

  // findSource with no match returns undefined
  test('findSource returns undefined when no match at target line', () => {
    const builder = createSourceMapBuilder('a.ts', 'a.qml');
    builder.addMapping({
      source: { line: 5, column: 1 },
      target: { line: 10, column: 1 },
      kind: 'binding',
    });
    const map = builder.build();
    expect(findSource(map, 999)).toBeUndefined();
  });

  // findTarget with no match returns undefined
  test('findTarget returns undefined when no match at source line', () => {
    const builder = createSourceMapBuilder('a.ts', 'a.qml');
    builder.addMapping({
      source: { line: 5, column: 1 },
      target: { line: 10, column: 1 },
      kind: 'binding',
    });
    const map = builder.build();
    expect(findTarget(map, 999)).toBeUndefined();
  });

  // findSource with column disambiguation
  test('findSource uses column to disambiguate multiple matches on same line', () => {
    const builder = createSourceMapBuilder('a.ts', 'a.qml');
    builder.addMapping({
      source: { line: 3, column: 1 },
      target: { line: 10, column: 4 },
      kind: 'binding',
    });
    builder.addMapping({
      source: { line: 7, column: 2 },
      target: { line: 10, column: 20 },
      kind: 'handler',
    });
    const map = builder.build();

    const result = findSource(map, 10, 18);
    expect(result).toBeDefined();
    expect(result!.line).toBe(7);
  });
});
