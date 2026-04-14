import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { generate } from '../../../src/dsl/generator/generator.js';

const SNAPSHOT_PATH = join(
  import.meta.dir,
  '..',
  '..',
  '..',
  'data',
  'qt-6.11.0-registry.snapshot.json',
);

describe('Generator Orchestrator', () => {
  test('GO-01: generates files for whitelisted modules', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    expect(result.success).toBe(true);
    expect(result.files.length).toBeGreaterThan(0);
    expect(result.files.some((f) => f.relativePath.startsWith('QtQuick.Layouts/'))).toBe(true);
  });

  test('GO-02: stats are populated correctly', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    expect(result.stats.modulesProcessed).toBe(1);
    expect(result.stats.typesProcessed).toBeGreaterThan(0);
    expect(result.stats.filesGenerated).toBeGreaterThan(0);
  });

  test('GO-03: generates index files', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    expect(result.files.some((f) => f.relativePath === 'QtQuick.Layouts/index.ts')).toBe(true);
    expect(result.files.some((f) => f.relativePath === 'index.ts')).toBe(true);
  });

  test('GO-04: deterministic output', () => {
    const a = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    const b = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    expect(a.files.length).toBe(b.files.length);
    for (let i = 0; i < a.files.length; i++) {
      expect(a.files[i]!.relativePath).toBe(b.files[i]!.relativePath);
      expect(a.files[i]!.content).toBe(b.files[i]!.content);
    }
  });

  test('GO-05: core modules generate successfully', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: [
        'QML',
        'QtQml',
        'QtQml.Models',
        'QtQuick',
        'QtQuick.Controls.Basic',
        'QtQuick.Templates',
        'QtQuick.Layouts',
        'QtCore',
      ],
    });
    expect(result.success).toBe(true);
    expect(result.stats.typesProcessed).toBeGreaterThan(400);
    expect(result.diagnostics.filter((d) => d.level === 'error').length).toBe(0);
  });

  test('GO-06: each generated file has content', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    for (const file of result.files) {
      expect(file.content.length).toBeGreaterThan(0);
    }
  });

  test('GO-07: generated .ts files have auto-generated header', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    for (const file of result.files) {
      if (file.relativePath.endsWith('.ts')) {
        expect(file.content).toContain('AUTO-GENERATED');
      }
    }
  });

  test('GO-08: generated text uses LF line endings', () => {
    const result = generate({
      registryPath: SNAPSHOT_PATH,
      outputDir: '',
      moduleWhitelist: ['QtQuick.Layouts'],
    });
    for (const file of result.files) {
      expect(file.content).not.toContain('\r\n');
      expect(file.content).not.toContain('\r');
    }
  });
});
