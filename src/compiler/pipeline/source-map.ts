import type { SourceLocation } from '../transform/transform-types.js';
import type { CompilerSourceMap, CompilerSourceMapEntry, SourceMapKind } from './pipeline-types.js';

// ─── Builder ────────────────────────────────────────────────────────────

export interface SourceMapBuilder {
  addMapping(entry: CompilerSourceMapEntry): void;
  build(): CompilerSourceMap;
}

export function createSourceMapBuilder(sourceFile: string, targetFile: string): SourceMapBuilder {
  const mappings: CompilerSourceMapEntry[] = [];

  return {
    addMapping(entry: CompilerSourceMapEntry): void {
      mappings.push(entry);
    },

    build(): CompilerSourceMap {
      return {
        sourceFile,
        targetFile,
        mappings: [...mappings],
      };
    },
  };
}

// ─── Lookup ─────────────────────────────────────────────────────────────

export function findSource(
  map: CompilerSourceMap,
  qmlLine: number,
  qmlColumn?: number,
): SourceLocation | undefined {
  const candidates = map.mappings.filter((m) => m.target.line === qmlLine);
  if (candidates.length === 0) return undefined;

  if (qmlColumn !== undefined && candidates.length > 1) {
    let best = candidates[0]!;
    for (const c of candidates) {
      if (Math.abs(c.target.column - qmlColumn) < Math.abs(best.target.column - qmlColumn)) {
        best = c;
      }
    }
    return { line: best.source.line, column: best.source.column };
  }

  const first = candidates[0]!;
  return { line: first.source.line, column: first.source.column };
}

export function findTarget(
  map: CompilerSourceMap,
  tsLine: number,
  tsColumn?: number,
): { line: number; column: number } | undefined {
  const candidates = map.mappings.filter((m) => m.source.line === tsLine);
  if (candidates.length === 0) return undefined;

  if (tsColumn !== undefined && candidates.length > 1) {
    let best = candidates[0]!;
    for (const c of candidates) {
      if (Math.abs(c.source.column - tsColumn) < Math.abs(best.source.column - tsColumn)) {
        best = c;
      }
    }
    return { line: best.target.line, column: best.target.column };
  }

  const first = candidates[0]!;
  return { line: first.target.line, column: first.target.column };
}

// ─── Serialization ──────────────────────────────────────────────────────

interface SourceMapJSON {
  sourceFile: string;
  targetFile: string;
  mappings: {
    source: { line: number; column: number };
    target: { line: number; column: number };
    kind: SourceMapKind;
  }[];
}

export function sourceMapToJson(map: CompilerSourceMap): string {
  const json: SourceMapJSON = {
    sourceFile: map.sourceFile,
    targetFile: map.targetFile,
    mappings: map.mappings.map((m) => ({
      source: { line: m.source.line, column: m.source.column },
      target: { line: m.target.line, column: m.target.column },
      kind: m.kind,
    })),
  };
  return JSON.stringify(json, null, 2);
}

export function sourceMapFromJson(json: string): CompilerSourceMap {
  const parsed = JSON.parse(json) as SourceMapJSON;
  return {
    sourceFile: parsed.sourceFile,
    targetFile: parsed.targetFile,
    mappings: parsed.mappings.map((m) => ({
      source: { line: m.source.line, column: m.source.column },
      target: { line: m.target.line, column: m.target.column },
      kind: m.kind,
    })),
  };
}
