import { describe, expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  compile,
  createQrcXml,
  generateProjectQrc,
  listEntries,
  listMappings,
} from '../../src/qt-tools/rcc.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe('Rcc', () => {
  test('RCC-01: createQrcXml generates valid XML', () => {
    const xml = createQrcXml(['file1.qml', 'file2.qml'], { prefix: '/qml' });
    expect(xml).toContain('<!DOCTYPE RCC>');
    expect(xml).toContain('<file>file1.qml</file>');
    expect(xml).toContain('<file>file2.qml</file>');
    expect(xml).toContain('prefix="/qml"');
  });

  test('RCC-02: createQrcXml default prefix is /', () => {
    const xml = createQrcXml(['test.qml']);
    expect(xml).toContain('prefix="/"');
  });

  test('RCC-02b: createQrcXml escapes XML special characters', () => {
    const xml = createQrcXml(['a&b<test>.qml'], { prefix: '/qml"&' });
    expect(xml).toContain('&amp;');
    expect(xml).toContain('&lt;test&gt;');
    expect(xml).toContain('prefix="/qml&quot;&amp;"');
  });

  describe.skipIf(!QT_DIR)('with Qt', () => {
    test('RCC-03: compile test.qrc to C++', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const tmpDir = await mkdtemp(join(tmpdir(), 'rcc-'));
      try {
        const outFile = join(tmpDir, 'resources.cpp');
        const result = await compile(inst, join(FIXTURES, 'test.qrc'), {
          outputFile: outFile,
        });
        expect(result.success).toBe(true);
        expect(existsSync(outFile)).toBe(true);
      } finally {
        await rm(tmpDir, { recursive: true, force: true });
      }
    });

    test('RCC-04: compile test.qrc to binary', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const tmpDir = await mkdtemp(join(tmpdir(), 'rcc-'));
      try {
        const outFile = join(tmpDir, 'resources.rcc');
        const result = await compile(inst, join(FIXTURES, 'test.qrc'), {
          outputFile: outFile,
          binary: true,
        });
        expect(result.success).toBe(true);
        expect(existsSync(outFile)).toBe(true);
      } finally {
        await rm(tmpDir, { recursive: true, force: true });
      }
    });

    test('RCC-05: listEntries returns file paths', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const entries = await listEntries(inst, join(FIXTURES, 'test.qrc'));
      expect(entries.length).toBeGreaterThan(0);
      expect(entries.some((e) => e.includes('valid.qml'))).toBe(true);
    });

    test('RCC-06: listMappings returns map', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const mappings = await listMappings(inst, join(FIXTURES, 'test.qrc'));
      expect(mappings.size).toBeGreaterThan(0);
    });

    test('RCC-07: generateProjectQrc produces XML', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const xml = await generateProjectQrc(inst, FIXTURES);
      expect(xml).toContain('<!DOCTYPE RCC>');
      expect(xml).toContain('.qml');
    });

    test('RCC-08: compile with noCompress', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'test.qrc'), {
        noCompress: true,
      });
      expect(result.success).toBe(true);
    });

    test('RCC-09: compile with python generator', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const tmpDir = await mkdtemp(join(tmpdir(), 'rcc-'));
      try {
        const outFile = join(tmpDir, 'resources.py');
        const result = await compile(inst, join(FIXTURES, 'test.qrc'), {
          outputFile: outFile,
          generator: 'python',
        });
        expect(result.success).toBe(true);
        expect(existsSync(outFile)).toBe(true);
      } finally {
        await rm(tmpDir, { recursive: true, force: true });
      }
    });

    test('RCC-10: timing info present', async () => {
      const inst = await discover({ qtDir: QT_DIR! });
      const result = await compile(inst, join(FIXTURES, 'test.qrc'));
      expect(result.durationMs).toBeGreaterThan(0);
      expect(result.command).toContain('rcc');
    });
  });
});
