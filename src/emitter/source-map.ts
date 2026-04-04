import type { AstNode } from '../ast/index.js';
import type { OutputSpan, SourceMap, SourceMapEntry, SourceMapJSON } from './types.js';

export class SourceMapImpl implements SourceMap {
  private readonly _entries: SourceMapEntry[] = [];
  private readonly nodeMap = new Map<AstNode, SourceMapEntry>();

  get entries(): SourceMapEntry[] {
    return this._entries;
  }

  addEntry(node: AstNode, nodeKind: string, outputSpan: OutputSpan): void {
    const entry: SourceMapEntry = { node, nodeKind, outputSpan };
    this._entries.push(entry);
    this.nodeMap.set(node, entry);
  }

  getOutputSpan(node: AstNode): OutputSpan | undefined {
    return this.nodeMap.get(node)?.outputSpan;
  }

  getNodesAtLine(line: number): AstNode[] {
    const result: AstNode[] = [];
    for (const entry of this._entries) {
      const s = entry.outputSpan;
      if (line >= s.startLine && line <= s.endLine) {
        result.push(entry.node);
      }
    }
    return result;
  }

  getInnermostNodeAt(line: number, column: number): AstNode | undefined {
    let best: SourceMapEntry | undefined;
    let bestSize = Number.POSITIVE_INFINITY;

    for (const entry of this._entries) {
      const s = entry.outputSpan;
      // Check if (line, column) is within this span
      const afterStart = line > s.startLine || (line === s.startLine && column >= s.startColumn);
      const beforeEnd = line < s.endLine || (line === s.endLine && column <= s.endColumn);

      if (afterStart && beforeEnd) {
        const size = (s.endLine - s.startLine) * 1000 + (s.endColumn - s.startColumn);
        if (size < bestSize) {
          bestSize = size;
          best = entry;
        }
      }
    }

    return best?.node;
  }

  toJSON(): SourceMapJSON {
    return {
      entries: this._entries.map((e) => ({
        nodeKind: e.nodeKind,
        startLine: e.outputSpan.startLine,
        startColumn: e.outputSpan.startColumn,
        endLine: e.outputSpan.endLine,
        endColumn: e.outputSpan.endColumn,
      })),
    };
  }
}
