import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { FileChangeBatch } from '../../src/dev-tools/dev-types.js';
import { createFileWatcher } from '../../src/dev-tools/file-watcher.js';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('FileWatcher', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-fw-'));
    mkdirSync(join(tempDir, 'src'), { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  // ─── FW-01: Start and stop lifecycle ────────────────────

  test('FW-01: starts in non-running state and transitions on start/stop', () => {
    const watcher = createFileWatcher({ paths: [tempDir], debounceMs: 100 });

    expect(watcher.running).toBe(false);

    watcher.start();
    expect(watcher.running).toBe(true);

    watcher.stop();
    expect(watcher.running).toBe(false);
  });

  // ─── FW-02: Detects file changes ───────────────────────

  test('FW-02: detects .ts file changes and emits change event', async () => {
    // Pre-create the file so watcher sees a change, not an add
    const tsFile = join(tempDir, 'src', 'test.ts');
    writeFileSync(tsFile, 'export const x = 1;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500); // Wait for watcher to be ready

      writeFileSync(tsFile, 'export const x = 2;');

      await sleep(500); // Wait for debounce + processing

      expect(batches.length).toBeGreaterThanOrEqual(1);
      expect(batches[0]!.files.length).toBeGreaterThan(0);
      expect(batches[0]!.files[0]!.type).toBe('change');
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-03: Debouncing batches changes ─────────────────

  test('FW-03: multiple rapid changes within debounce window produce one batch', async () => {
    const tsFile = join(tempDir, 'src', 'debounce.ts');
    writeFileSync(tsFile, 'export const v = 0;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 300,
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500);

      writeFileSync(tsFile, 'export const v = 1;');
      await sleep(50);
      writeFileSync(tsFile, 'export const v = 2;');
      await sleep(50);
      writeFileSync(tsFile, 'export const v = 3;');

      await sleep(800); // Wait for debounce to flush

      // Should be exactly 1 batch (all changes debounced)
      expect(batches.length).toBe(1);
      // Raw change count tracks all individual change events
      expect(batches[0]!.rawChangeCount).toBeGreaterThanOrEqual(2);
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-04: Include filter ─────────────────────────────

  test('FW-04: non-TS files are filtered out by default include patterns', async () => {
    const mdFile = join(tempDir, 'src', 'readme.md');
    writeFileSync(mdFile, '# Hello');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500);

      writeFileSync(mdFile, '# Modified');

      await sleep(500);

      expect(batches.length).toBe(0);
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-05: Ignore patterns ────────────────────────────

  test('FW-05: files matching ignorePatterns are excluded', async () => {
    const testFile = join(tempDir, 'src', 'example.test.ts');
    writeFileSync(testFile, 'export const t = 1;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
      ignorePatterns: ['.test.ts'],
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500);

      writeFileSync(testFile, 'export const t = 2;');

      await sleep(500);

      expect(batches.length).toBe(0);
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-06: Batch deduplication ────────────────────────

  test('FW-06: duplicate changes to same file are deduplicated in batch', async () => {
    const tsFile = join(tempDir, 'src', 'dedup.ts');
    writeFileSync(tsFile, 'export const d = 0;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 200,
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500);

      writeFileSync(tsFile, 'export const d = 1;');
      await sleep(30);
      writeFileSync(tsFile, 'export const d = 2;');

      await sleep(600);

      expect(batches.length).toBe(1);
      // Should have only 1 file entry (deduplicated by path)
      expect(batches[0]!.files.length).toBe(1);
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-07: Add and remove paths ───────────────────────

  test('FW-07: addPath/removePath manage watched directories', () => {
    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
    });

    watcher.start();

    try {
      const extraDir = join(tempDir, 'extra');
      mkdirSync(extraDir, { recursive: true });

      // Should not throw
      watcher.addPath(extraDir);
      watcher.removePath(extraDir);
    } finally {
      watcher.stop();
    }
  });

  // ─── FW-08: Stop clears pending changes ────────────────

  test('FW-08: stop clears pending changes and debounce timer', async () => {
    const tsFile = join(tempDir, 'src', 'pending.ts');
    writeFileSync(tsFile, 'export const p = 0;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 500,
    });

    const batches: FileChangeBatch[] = [];
    watcher.on('change', (batch) => batches.push(batch));

    watcher.start();

    try {
      await sleep(500);

      // Trigger a change but stop before debounce completes
      writeFileSync(tsFile, 'export const p = 1;');
      await sleep(50);

      watcher.stop();

      await sleep(700); // Wait past the original debounce
      expect(batches.length).toBe(0); // Should NOT have flushed
    } finally {
      watcher.stop();
    }
  }, 5_000);

  // ─── FW-09: Double start is idempotent ─────────────────

  test('FW-09: calling start twice does not create duplicate watchers', () => {
    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
    });

    watcher.start();
    watcher.start(); // Should be idempotent
    expect(watcher.running).toBe(true);

    watcher.stop();
    expect(watcher.running).toBe(false);
  });

  // ─── FW-10: Event handler removal ──────────────────────

  test('FW-10: off() removes change handler', async () => {
    const tsFile = join(tempDir, 'src', 'off.ts');
    writeFileSync(tsFile, 'export const o = 0;');

    const watcher = createFileWatcher({
      paths: [tempDir],
      debounceMs: 100,
    });

    const batches: FileChangeBatch[] = [];
    const handler = (batch: FileChangeBatch) => batches.push(batch);

    watcher.on('change', handler);
    watcher.off('change', handler);

    watcher.start();

    try {
      await sleep(500);

      writeFileSync(tsFile, 'export const o = 1;');

      await sleep(500);

      expect(batches.length).toBe(0);
    } finally {
      watcher.stop();
    }
  }, 5_000);
});
