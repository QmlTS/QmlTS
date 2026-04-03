import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { RegistrySnapshot } from '../../src/registry/snapshot.js';
import { SnapshotError } from '../../src/registry/errors.js';
import type { QmlRegistry } from '../../src/registry/types.js';

const fixturesDir = join(import.meta.dir, 'fixtures');

function loadSnapshotFixture(): QmlRegistry {
  const json = readFileSync(join(fixturesDir, 'snapshot-v1.json'), 'utf-8');
  return JSON.parse(json) as QmlRegistry;
}

describe('RegistrySnapshot', () => {
  const snapshot = new RegistrySnapshot();

  test('SS-01: serialize → deserialize roundtrip', () => {
    const registry = loadSnapshotFixture();
    const json = snapshot.serialize(registry);
    const deserialized = snapshot.deserialize(json);
    expect(deserialized.formatVersion).toBe(registry.formatVersion);
    expect(deserialized.qtVersion).toBe(registry.qtVersion);
    expect(deserialized.types.length).toBe(registry.types.length);
    expect(deserialized.modules.length).toBe(registry.modules.length);
  });

  test('SS-02: serialize with pretty=true produces formatted JSON', () => {
    const registry = loadSnapshotFixture();
    const json = snapshot.serialize(registry, true);
    expect(json).toContain('\n');
    expect(json).toContain('  ');
  });

  test('SS-03: saveToFile + loadFromFile roundtrip', async () => {
    const registry = loadSnapshotFixture();
    const tempDir = await mkdtemp(join(tmpdir(), 'qmlts-test-'));
    const filePath = join(tempDir, 'test-snapshot.json');

    try {
      await snapshot.saveToFile(registry, filePath);
      const loaded = await snapshot.loadFromFile(filePath);
      expect(loaded.formatVersion).toBe(registry.formatVersion);
      expect(loaded.qtVersion).toBe(registry.qtVersion);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });

  test('SS-06: corrupted JSON throws SnapshotError', () => {
    expect(() => snapshot.deserialize('{ invalid json')).toThrow();
  });

  test('SS-07: wrong formatVersion throws SnapshotError', () => {
    const registry = loadSnapshotFixture();
    const json = snapshot.serialize(registry);
    const modified = json.replace('"1.0.0"', '"2.0.0"');
    expect(() => snapshot.deserialize(modified)).toThrow();
  });

  test('loadFromFile with non-existent file throws', async () => {
    await expect(
      snapshot.loadFromFile('/nonexistent/path/snapshot.json')
    ).rejects.toThrow();
  });

  test('serialize compact (no pretty) is single line', () => {
    const registry = loadSnapshotFixture();
    const json = snapshot.serialize(registry, false);
    const lines = json.split('\n');
    expect(lines.length).toBe(1);
  });
});
