import { describe, expect, test } from 'bun:test';
import { join } from 'node:path';
import { QtToolNotFoundError, QtToolTimeoutError } from '../../src/qt-tools/errors.js';
import { runTool } from '../../src/qt-tools/tool-runner.js';
import { discover } from '../../src/qt-tools/toolchain.js';

const QT_DIR = process.env['QT_DIR'];
const FIXTURES = join(import.meta.dir, 'fixtures');

describe.skipIf(!QT_DIR)('ToolRunner', () => {
  test('TR-01: run qmlformat --version', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await runTool(inst, 'qmlformat', ['--version']);
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toContain('qmlformat');
    expect(result.stdout).toContain('6.11');
  });

  test('TR-02: run non-existent tool throws', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    await expect(runTool(inst, 'nonexistent_tool' as 'qmlformat', [])).rejects.toBeInstanceOf(
      QtToolNotFoundError,
    );
  });

  test('TR-03: run with timeout throws QtToolTimeoutError', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    // qml with a QML file and offscreen platform will run the app and never exit
    await expect(
      runTool(inst, 'qml', ['--platform', 'offscreen', join(FIXTURES, 'valid.qml')], {
        timeout: 200,
      }),
    ).rejects.toBeInstanceOf(QtToolTimeoutError);
  }, 5000);

  test('TR-05: result.command contains full command line', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await runTool(inst, 'qmlformat', ['--version']);
    expect(result.command).toContain('qmlformat');
    expect(result.command).toContain('--version');
  });

  test('TR-06: result.durationMs is positive', async () => {
    const inst = await discover({ qtDir: QT_DIR! });
    const result = await runTool(inst, 'qmlformat', ['--version']);
    expect(result.durationMs).toBeGreaterThan(0);
  });
});
