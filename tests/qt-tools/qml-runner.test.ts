import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { listConfigs, run, runString, smokeTest } from '../../src/qt-tools/qml-runner.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('QmlRunner', () => {
  test('RUN-01: run minimal-app.qml exits cleanly', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await run(inst, join(FIXTURES, 'minimal-app.qml'), {
      platform: 'offscreen',
      timeout: 5000,
    });
    expect(result.success).toBe(true);
    expect(result.timedOut).toBe(false);
  }, 10_000);

  test('RUN-02: run with timeout', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    // valid.qml has no Qt.quit() so it will hang until timeout
    const result = await run(inst, join(FIXTURES, 'valid.qml'), {
      platform: 'offscreen',
      timeout: 1000,
    });
    expect(result.timedOut).toBe(true);
  }, 10_000);

  test('RUN-03: runString with Qt.quit()', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await runString(
      inst,
      'import QtQuick\nItem { Component.onCompleted: Qt.quit() }\n',
      { platform: 'offscreen', timeout: 5000 },
    );
    expect(result.success).toBe(true);
  }, 10_000);

  test('RUN-04: smokeTest minimal-app.qml loaded=true', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await smokeTest(inst, join(FIXTURES, 'minimal-app.qml'), {
      timeout: 5000,
    });
    expect(result.loaded).toBe(true);
    expect(result.runtimeErrors).toHaveLength(0);
  }, 10_000);

  test('RUN-05: smokeTest syntax-error.qml loaded=false', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await smokeTest(inst, join(FIXTURES, 'syntax-error.qml'), {
      timeout: 3000,
    });
    expect(result.loaded).toBe(false);
  }, 10_000);

  test('RUN-06: listConfigs returns a stable config list result', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const configs = await listConfigs(inst);
    expect(Array.isArray(configs)).toBe(true);
    for (const config of configs) {
      expect(typeof config).toBe('string');
      expect(config.length).toBeGreaterThan(0);
    }
  });

  test('RUN-07: smokeTest valid.qml with timeout = timed out but loaded', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    // valid.qml has no Qt.quit() — will time out but should load fine
    const result = await smokeTest(inst, join(FIXTURES, 'valid.qml'), {
      timeout: 2000,
    });
    expect(result.timedOut).toBe(true);
    expect(result.loaded).toBe(true);
  }, 10_000);

  test('RUN-08: result has command and timing', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await run(inst, join(FIXTURES, 'minimal-app.qml'), {
      platform: 'offscreen',
      timeout: 5000,
    });
    expect(result.command).toContain('qml');
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
  }, 10_000);
});
