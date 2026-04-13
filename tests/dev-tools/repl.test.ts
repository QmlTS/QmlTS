import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { ReplHost } from '../../src/dev-tools/dev-types.js';
import { createRepl } from '../../src/dev-tools/repl.js';

const SIMPLE_VIEW_SOURCE = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../dsl/generated/QtQuick/Text.js';

export default function SimpleView() {
  return Rectangle()
    .width(400)
    .height(300)
    .children(
      Text().text("Hello")
    );
}
`;

const SIMPLE_VIEW_SOURCE_ALT = `
import { Rectangle } from '../../dsl/generated/QtQuick/Rectangle.js';
import { Text } from '../../dsl/generated/QtQuick/Text.js';

export default function AltView() {
  return Rectangle()
    .width(240)
    .height(120)
    .children(
      Text().text("Updated")
    );
}
`;

// ─── Mock Host ──────────────────────────────────────────────

interface MockHostCall {
  method: 'loadString' | 'reloadQml' | 'processEvents';
  args: unknown[];
}

function createMockHost(options?: {
  loadStringError?: string;
  reloadQmlError?: string;
}): ReplHost & { calls: MockHostCall[] } {
  const calls: MockHostCall[] = [];
  return {
    calls,
    loadString(qmlSource: string, baseUrl?: string): void {
      calls.push({ method: 'loadString', args: [qmlSource, baseUrl] });
      if (options?.loadStringError) {
        throw new Error(options.loadStringError);
      }
    },
    reloadQml(newSource: string, baseUrl?: string): void {
      calls.push({ method: 'reloadQml', args: [newSource, baseUrl] });
      if (options?.reloadQmlError) {
        throw new Error(options.reloadQmlError);
      }
    },
    processEvents(): void {
      calls.push({ method: 'processEvents', args: [] });
    },
  };
}

// ─── Test Helpers ───────────────────────────────────────────

let tmpDir: string;

beforeEach(() => {
  tmpDir = mkdtempSync(join(tmpdir(), 'repl-test-'));
});

afterEach(() => {
  rmSync(tmpDir, { recursive: true, force: true });
});

// ─── Suite 6: REPL ──────────────────────────────────────────

describe('Suite 6: REPL', () => {
  // REPL-63: QML mode eval — directly render QML snippet
  test('REPL-63: QML mode eval renders QML snippet', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });
    await repl.start();

    const qml = 'import QtQuick 2.15\nRectangle { width: 100; height: 100; color: "red" }';
    const result = await repl.eval(qml);

    expect(result.success).toBe(true);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(result.error).toBeUndefined();
    // First eval should use loadString
    expect(host.calls[0]!.method).toBe('loadString');
    expect(host.calls[0]!.args[0]).toBe(qml);
    // processEvents called after load
    expect(host.calls[1]!.method).toBe('processEvents');

    await repl.stop();
  });

  // REPL-64: TS mode eval — compile DSL → render QML
  test('REPL-64: TS mode eval compiles DSL and renders QML', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, defaultMode: 'ts' });
    await repl.start();

    const result = await repl.eval(SIMPLE_VIEW_SOURCE);

    expect(result.success).toBe(true);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(result.error).toBeUndefined();
    expect(result.qmlOutput).toBeDefined();
    expect(result.qmlOutput).toContain('Rectangle {');
    expect(result.qmlOutput).toContain('Text {');
    expect(host.calls[0]!.method).toBe('loadString');
    expect(host.calls[0]!.args[0]).toBe(result.qmlOutput);
    expect(host.calls[1]!.method).toBe('processEvents');

    await repl.stop();
  });

  // REPL-65: Mode switching — setMode('ts') takes effect
  test('REPL-65: setMode switches between qml and ts', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });
    await repl.start();

    expect(repl.mode).toBe('qml');

    repl.setMode('ts');
    expect(repl.mode).toBe('ts');

    repl.setMode('qml');
    expect(repl.mode).toBe('qml');

    await repl.stop();
  });

  // REPL-66: QML syntax error — returns error info
  test('REPL-66: QML mode returns error on host load failure', async () => {
    const host = createMockHost({ loadStringError: 'QML syntax error: unexpected token' });
    const repl = createRepl({ host });
    await repl.start();

    const result = await repl.eval('invalid { qml }}}');

    expect(result.success).toBe(false);
    expect(result.error).toContain('QML syntax error');
    expect(result.durationMs).toBeGreaterThanOrEqual(0);

    await repl.stop();
  });

  // REPL-67: TS compilation error — returns error info
  test('REPL-67: TS mode returns error on compilation failure', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, defaultMode: 'ts' });
    await repl.start();

    // Completely invalid TypeScript that cannot compile
    const result = await repl.eval('this is not valid typescript !!!@@@');

    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.error!.length).toBeGreaterThan(0);
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(host.calls).toHaveLength(0);

    await repl.stop();
  });

  // REPL-68: eval returns duration — durationMs > 0
  test('REPL-68: eval result includes durationMs', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });
    await repl.start();

    const result = await repl.eval('Rectangle {}');
    expect(result.durationMs).toBeGreaterThanOrEqual(0);
    expect(typeof result.durationMs).toBe('number');

    await repl.stop();
  });

  // REPL-69: TS mode returns QML — qmlOutput has value
  test('REPL-69: TS mode eval returns qmlOutput on success', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, defaultMode: 'ts' });
    await repl.start();

    const result = await repl.eval(SIMPLE_VIEW_SOURCE);

    expect(result.success).toBe(true);
    expect(result.qmlOutput).toBeDefined();
    expect(result.qmlOutput).toContain('import QtQuick');

    await repl.stop();
  });

  test('REPL-69b: subsequent TS evals use reloadQml with compiled output', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, defaultMode: 'ts' });
    await repl.start();

    const first = await repl.eval(SIMPLE_VIEW_SOURCE);
    const second = await repl.eval(SIMPLE_VIEW_SOURCE_ALT);

    expect(first.success).toBe(true);
    expect(second.success).toBe(true);
    expect(host.calls[0]!.method).toBe('loadString');
    expect(host.calls[2]!.method).toBe('reloadQml');
    expect(host.calls[2]!.args[0]).toBe(second.qmlOutput);

    await repl.stop();
  });

  // REPL-70: History — previous command can be recalled
  test('REPL-70: history stores evaluated commands', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });
    await repl.start();

    await repl.eval('Rectangle {}');
    await repl.eval('Text { text: "hello" }');
    await repl.eval('Item {}');

    expect(repl.history).toHaveLength(3);
    expect(repl.history[0]).toBe('Rectangle {}');
    expect(repl.history[1]).toBe('Text { text: "hello" }');
    expect(repl.history[2]).toBe('Item {}');

    await repl.stop();
  });

  // REPL-71: maxHistory limit — oldest dropped when exceeded
  test('REPL-71: maxHistory limits history entries', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, maxHistory: 3 });
    await repl.start();

    await repl.eval('cmd1');
    await repl.eval('cmd2');
    await repl.eval('cmd3');
    await repl.eval('cmd4');
    await repl.eval('cmd5');

    expect(repl.history).toHaveLength(3);
    expect(repl.history[0]).toBe('cmd3');
    expect(repl.history[1]).toBe('cmd4');
    expect(repl.history[2]).toBe('cmd5');

    await repl.stop();
  });

  // REPL-72: start/stop lifecycle — correct behavior
  test('REPL-72: start/stop lifecycle', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });

    // eval before start should throw
    await expect(repl.eval('test')).rejects.toThrow('REPL is not started');

    await repl.start();
    // start is idempotent
    await repl.start();

    const result = await repl.eval('Rectangle {}');
    expect(result.success).toBe(true);

    await repl.stop();
    // stop is idempotent
    await repl.stop();

    // eval after stop should throw
    await expect(repl.eval('test')).rejects.toThrow('REPL is not started');
  });

  // ─── Additional coverage: subsequent evals use reloadQml ─

  test('REPL-63b: subsequent QML evals use reloadQml', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });
    await repl.start();

    await repl.eval('Rectangle {}');
    await repl.eval('Text {}');

    // First eval: loadString + processEvents
    expect(host.calls[0]!.method).toBe('loadString');
    // Second eval: reloadQml + processEvents
    expect(host.calls[2]!.method).toBe('reloadQml');
    expect(host.calls[2]!.args[0]).toBe('Text {}');

    await repl.stop();
  });

  test('REPL-66b: reloadQml error on subsequent eval', async () => {
    const host = createMockHost({ reloadQmlError: 'Reload failed: invalid QML' });
    const repl = createRepl({ host });
    await repl.start();

    // First eval succeeds (loadString does not fail)
    const first = await repl.eval('Rectangle {}');
    expect(first.success).toBe(true);

    // Second eval fails via reloadQml
    const second = await repl.eval('bad qml');
    expect(second.success).toBe(false);
    expect(second.error).toContain('Reload failed');

    await repl.stop();
  });

  // ─── History file persistence ───────────────────────────

  test('REPL-70b: history persisted to file on stop, loaded on start', async () => {
    const histFile = join(tmpDir, 'repl-history.txt');
    const host = createMockHost();

    // Session 1: add entries and stop
    const repl1 = createRepl({ host, historyFile: histFile, maxHistory: 10 });
    await repl1.start();
    await repl1.eval('Rectangle {}');
    await repl1.eval('Text {}');
    await repl1.stop();

    expect(existsSync(histFile)).toBe(true);
    const saved = readFileSync(histFile, 'utf-8');
    expect(JSON.parse(saved)).toEqual(['Rectangle {}', 'Text {}']);

    // Session 2: history loaded from file
    const repl2 = createRepl({ host, historyFile: histFile, maxHistory: 10 });
    await repl2.start();
    expect(repl2.history).toHaveLength(2);
    expect(repl2.history[0]).toBe('Rectangle {}');
    expect(repl2.history[1]).toBe('Text {}');

    // New entries added on top
    await repl2.eval('Item {}');
    expect(repl2.history).toHaveLength(3);
    await repl2.stop();
  });

  test('REPL-71b: history file respects maxHistory on load', async () => {
    const histFile = join(tmpDir, 'repl-history-limit.txt');
    // Pre-populate with more entries than maxHistory
    writeFileSync(histFile, JSON.stringify(['old1', 'old2', 'old3', 'old4', 'old5']), 'utf-8');

    const host = createMockHost();
    const repl = createRepl({ host, historyFile: histFile, maxHistory: 3 });
    await repl.start();

    // Only latest 3 loaded
    expect(repl.history).toHaveLength(3);
    expect(repl.history[0]).toBe('old3');
    expect(repl.history[1]).toBe('old4');
    expect(repl.history[2]).toBe('old5');

    await repl.stop();
  });

  test('REPL-71c: legacy line-based history files still load correctly', async () => {
    const histFile = join(tmpDir, 'legacy-history.txt');
    writeFileSync(histFile, 'old1\nold2\nold3\n', 'utf-8');

    const host = createMockHost();
    const repl = createRepl({ host, historyFile: histFile, maxHistory: 10 });
    await repl.start();

    expect(repl.history).toEqual(['old1', 'old2', 'old3']);

    await repl.stop();
  });

  test('REPL-72b: history file in nested dir is created automatically', async () => {
    const histFile = join(tmpDir, 'nested', 'deep', 'history.txt');
    const host = createMockHost();

    const repl = createRepl({ host, historyFile: histFile });
    await repl.start();
    await repl.eval('test');
    await repl.stop();

    expect(existsSync(histFile)).toBe(true);
  });

  test('REPL-72d: multiline history entries persist without being split', async () => {
    const histFile = join(tmpDir, 'multiline-history.txt');
    const host = createMockHost();
    const repl = createRepl({ host, historyFile: histFile });
    const multilineInput = 'import QtQuick 2.15\nRectangle {\n  width: 100\n}';

    await repl.start();
    await repl.eval(multilineInput);
    await repl.stop();

    const saved = JSON.parse(readFileSync(histFile, 'utf-8')) as string[];
    expect(saved).toEqual([multilineInput]);

    const replReloaded = createRepl({ host, historyFile: histFile });
    await replReloaded.start();
    expect(replReloaded.history).toEqual([multilineInput]);
    await replReloaded.stop();
  });

  // ─── Default mode ───────────────────────────────────────

  test('REPL-65b: defaultMode sets initial mode', async () => {
    const host = createMockHost();
    const repl = createRepl({ host, defaultMode: 'ts' });
    expect(repl.mode).toBe('ts');

    await repl.start();
    expect(repl.mode).toBe('ts');
    await repl.stop();
  });

  // ─── History cleared on restart ─────────────────────────

  test('REPL-72c: stop resets loadOnce state, next start uses loadString again', async () => {
    const host = createMockHost();
    const repl = createRepl({ host });

    await repl.start();
    await repl.eval('Rectangle {}');
    expect(host.calls[0]!.method).toBe('loadString');
    await repl.stop();

    host.calls.length = 0;
    await repl.start();
    await repl.eval('Text {}');
    // After restart, first eval should use loadString again
    expect(host.calls[0]!.method).toBe('loadString');
    await repl.stop();
  });

  test('REPL-72e: missing history file clears stale in-memory history on restart', async () => {
    const histFile = join(tmpDir, 'restart-history.txt');
    const host = createMockHost();
    const repl = createRepl({ host, historyFile: histFile });

    await repl.start();
    await repl.eval('Rectangle {}');
    expect(repl.history).toEqual(['Rectangle {}']);
    await repl.stop();

    rmSync(histFile, { force: true });
    await repl.start();
    expect(repl.history).toEqual([]);
    await repl.stop();
  });
});
