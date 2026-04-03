import { readFile, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import type { QmlRegistry } from './types.js';
import { SnapshotError } from './errors.js';
import { validateQtDir } from './scanner.js';

export class RegistrySnapshot {
  serialize(registry: QmlRegistry, pretty?: boolean): string {
    return JSON.stringify(registry, null, pretty ? 2 : undefined);
  }

  deserialize(json: string): QmlRegistry {
    let data: unknown;
    try {
      data = JSON.parse(json);
    } catch {
      throw new SnapshotError('Failed to parse snapshot JSON', 'corrupted');
    }

    if (typeof data !== 'object' || data === null) {
      throw new SnapshotError('Snapshot data is not a valid object', 'invalid-format');
    }

    const record = data as Record<string, unknown>;

    if (!('formatVersion' in record)) {
      throw new SnapshotError('Missing formatVersion in snapshot', 'invalid-format');
    }

    if (record['formatVersion'] !== '1.0.0') {
      throw new SnapshotError(
        `Unsupported snapshot format version: ${String(record['formatVersion'])}`,
        'version-mismatch',
      );
    }

    // Validate required top-level fields
    const requiredFields = [
      'generatedAt',
      'qtVersion',
      'qtDir',
      'buildDuration',
      'modules',
      'types',
      'builtins',
      'stats',
    ];
    for (const field of requiredFields) {
      if (!(field in record)) {
        throw new SnapshotError(
          `Missing required field "${field}" in snapshot`,
          'invalid-format',
        );
      }
    }

    if (!Array.isArray(record['modules'])) {
      throw new SnapshotError('Field "modules" must be an array', 'corrupted');
    }
    if (typeof record['buildDuration'] !== 'number') {
      throw new SnapshotError('Field "buildDuration" must be a number', 'corrupted');
    }
    if (!Array.isArray(record['types'])) {
      throw new SnapshotError('Field "types" must be an array', 'corrupted');
    }
    if (!Array.isArray(record['builtins'])) {
      throw new SnapshotError('Field "builtins" must be an array', 'corrupted');
    }

    return data as QmlRegistry;
  }

  async saveToFile(registry: QmlRegistry, filePath: string): Promise<void> {
    const json = this.serialize(registry, true);
    await writeFile(filePath, json, 'utf-8');
  }

  async loadFromFile(filePath: string): Promise<QmlRegistry> {
    let content: string;
    try {
      content = await readFile(filePath, 'utf-8');
    } catch {
      throw new SnapshotError(
        `Failed to read snapshot file: ${filePath}`,
        'io-error',
      );
    }
    return this.deserialize(content);
  }

  async isValid(snapshotPath: string, qtDir: string): Promise<boolean> {
    try {
      await access(snapshotPath, constants.R_OK);
    } catch {
      return false;
    }

    try {
      const registry = await this.loadFromFile(snapshotPath);
      const detectedVersion = await validateQtDir(qtDir);
      if (!detectedVersion) return false;
      return registry.qtVersion === detectedVersion;
    } catch {
      return false;
    }
  }
}
