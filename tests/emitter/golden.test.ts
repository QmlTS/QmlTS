import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { QmlDocument } from '../../src/ast/index.js';
import { astSerializer } from '../../src/ast/index.js';
import { emit } from '../../src/emitter/index.js';

const FIXTURES = join(import.meta.dir, 'fixtures');
const AST_DIR = join(FIXTURES, 'ast');
const GOLDEN_DIR = join(FIXTURES, 'golden');

function normalizeNewlines(text: string): string {
  return text.replace(/\r\n/g, '\n');
}

function loadFixture(name: string): { doc: QmlDocument; expected: string } {
  const json = readFileSync(join(AST_DIR, `${name}.json`), 'utf-8');
  const doc = astSerializer.deserialize(json) as QmlDocument;
  const expected = normalizeNewlines(readFileSync(join(GOLDEN_DIR, `${name}.qml`), 'utf-8'));
  return { doc, expected };
}

describe('Golden File Tests', () => {
  const fixtures = ['minimal', 'full-syntax', 'nested', 'all-bindings', 'all-members', 'comments'];

  for (const name of fixtures) {
    test(`golden: ${name}`, () => {
      const { doc, expected } = loadFixture(name);
      const result = normalizeNewlines(emit(doc));
      expect(result).toBe(expected);
    });
  }

  test('golden: normalized (with normalize option)', () => {
    const { doc, expected } = loadFixture('normalized');
    const result = normalizeNewlines(emit(doc, { normalize: true }));
    expect(result).toBe(expected);
  });
});
