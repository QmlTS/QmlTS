import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { mkdtemp, rm, mkdir, writeFile } from 'node:fs/promises';
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

  test('missing buildDuration throws SnapshotError', () => {
    const registry = loadSnapshotFixture() as unknown as Record<string, unknown>;
    const { buildDuration: _buildDuration, ...withoutBuildDuration } = registry;
    expect(() => snapshot.deserialize(JSON.stringify(withoutBuildDuration))).toThrow(SnapshotError);
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

  test('isValid accepts Qt dirs whose version is discovered from qtcoreversion.h', async () => {
    const registry = loadSnapshotFixture();
    const tempDir = await mkdtemp(join(tmpdir(), 'qmlts-qt-'));
    const snapshotPath = join(tempDir, 'snapshot.json');
    const headerPath = join(tempDir, 'include', 'QtCore', 'qtcoreversion.h');

    try {
      await mkdir(join(tempDir, 'qml'), { recursive: true });
      await mkdir(join(tempDir, 'include', 'QtCore'), { recursive: true });
      await writeFile(headerPath, '#define QT_VERSION_STR "6.11.0"\n', 'utf-8');
      await snapshot.saveToFile({ ...registry, qtVersion: '6.11.0' }, snapshotPath);
      await expect(snapshot.isValid(snapshotPath, tempDir)).resolves.toBe(true);
    } finally {
      await rm(tempDir, { recursive: true, force: true });
    }
  });
});
