import { describe, expect, test } from 'bun:test';
import type { Diagnostic } from '../../src/compiler/diagnostics.js';
import { createDevConsole } from '../../src/dev-tools/dev-console.js';
import type {
  BuildSuccessInfo,
  DevConsole as DevConsoleType,
  DevServer,
  DevServerEvent,
  DevServerEventPayload,
  FileChangeBatch,
  HotReloadOrchestratorResult,
  ServerStatusInfo,
} from '../../src/dev-tools/dev-types.js';

// ─── Helpers ────────────────────────────────────────────────

function createCapture(
  opts: { color?: boolean; timestamp?: boolean; level?: 'debug' | 'info' | 'warn' | 'error' } = {},
): {
  lines: string[];
  console: DevConsoleType;
} {
  const lines: string[] = [];
  const console = createDevConsole({
    color: opts.color ?? false,
    timestamp: opts.timestamp ?? false,
    level: opts.level ?? 'debug',
    write: (text: string) => {
      lines.push(text);
    },
  });
  return { lines, console };
}

function makeDiagnostic(overrides: Partial<Diagnostic> = {}): Diagnostic {
  return {
    severity: 'error',
    code: 'QMLTS-A011',
    message: 'Unexpected token',
    file: 'src/App.ts',
    line: 10,
    column: 5,
    ...overrides,
  };
}

function createMockDevServer(): DevServer & {
  _listeners: Map<DevServerEvent, Set<(payload: DevServerEventPayload) => void>>;
  _emit: (event: DevServerEvent, data?: unknown) => void;
} {
  const listeners = new Map<DevServerEvent, Set<(payload: DevServerEventPayload) => void>>();
  return {
    _listeners: listeners,
    _emit(event: DevServerEvent, data?: unknown) {
      const set = listeners.get(event);
      if (set) {
        const payload: DevServerEventPayload = { type: event, timestamp: Date.now(), data };
        for (const handler of set) handler(payload);
      }
    },
    async start() {
      return { success: true, durationMs: 100, diagnostics: [] };
    },
    async stop() {},
    async rebuild() {
      return { success: true, durationMs: 50, diagnostics: [] };
    },
    getStatus() {
      return 'idle' as const;
    },
    getStats() {
      return {
        buildCount: 0,
        rebuildCount: 0,
        hotReloadCount: 0,
        errorCount: 0,
        totalBuildMs: 0,
        uptime: 0,
      };
    },
    on(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event)!.add(handler);
    },
    off(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void) {
      listeners.get(event)?.delete(handler);
    },
  };
}

// ─── Suite 4: DevConsole ────────────────────────────────────

describe('DevConsole', () => {
  // Test 39: buildStart output includes file list
  test('DC-39: buildStart output includes file list', () => {
    const { lines, console } = createCapture();
    console.buildStart(['src/App.ts', 'src/Main.ts']);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Building...');
    expect(lines[0]).toContain('2 files');
  });

  // Test 40: buildSuccess output includes duration and file count
  test('DC-40: buildSuccess output includes duration and file count', () => {
    const { lines, console } = createCapture();
    const info: BuildSuccessInfo = {
      durationMs: 342,
      filesCompiled: 5,
      qmlFilesGenerated: 3,
    };
    console.buildSuccess(info);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Build succeeded');
    expect(lines[0]).toContain('342ms');
    expect(lines[0]).toContain('5 files compiled');
    expect(lines[0]).toContain('3 QML generated');
  });

  // Test 41: buildError output includes diagnostic info
  test('DC-41: buildError output includes diagnostic info', () => {
    const { lines, console } = createCapture();
    const diags: Diagnostic[] = [
      makeDiagnostic({ message: 'Unexpected token', file: 'src/App.ts', line: 10, column: 5 }),
      makeDiagnostic({
        severity: 'warning',
        message: 'Unused var',
        file: 'src/Main.ts',
        line: 3,
        column: 1,
      }),
    ];
    console.buildError(diags);
    expect(lines.length).toBe(3); // summary + 2 diagnostics
    expect(lines[0]).toContain('Build failed');
    expect(lines[0]).toContain('1 error(s)');
    expect(lines[0]).toContain('1 warning(s)');
    expect(lines[1]).toContain('src/App.ts:10:5');
    expect(lines[1]).toContain('Unexpected token');
    expect(lines[2]).toContain('src/Main.ts:3:1');
    expect(lines[2]).toContain('Unused var');
  });

  test('DC-41b: buildError omits fake 0:0 when diagnostic has no position', () => {
    const { lines, console } = createCapture();
    console.buildError([
      makeDiagnostic({
        file: 'src/App.ts',
        line: undefined,
        column: undefined,
      }),
    ]);
    expect(lines[1]).toContain('src/App.ts');
    expect(lines[1]).not.toContain(':0:0');
  });

  // Test 42: hotReload output includes duration and phase info
  test('DC-42: hotReload output includes duration and sequence', () => {
    const { lines, console } = createCapture();
    const result: HotReloadOrchestratorResult = {
      success: true,
      sequence: 3,
      durationMs: 45,
      filesReloaded: ['src/App.ts'],
    };
    console.hotReload(result);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Hot reload #3');
    expect(lines[0]).toContain('45ms');
    expect(lines[0]).toContain('1 file(s)');
  });

  test('DC-42b: hotReload failure output includes error', () => {
    const { lines, console } = createCapture();
    const result: HotReloadOrchestratorResult = {
      success: false,
      sequence: 4,
      durationMs: 12,
      filesReloaded: [],
      error: 'QML parse error',
    };
    console.hotReload(result);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Hot reload #4 failed');
    expect(lines[0]).toContain('QML parse error');
  });

  // Test 43: fileChange output includes changed file list
  test('DC-43: fileChange output includes changed file list', () => {
    const { lines, console } = createCapture();
    const batch: FileChangeBatch = {
      files: [
        { path: 'src/App.ts', type: 'change' },
        { path: 'src/Main.ts', type: 'add' },
      ],
      rawChangeCount: 2,
      timestamp: Date.now(),
    };
    console.fileChange(batch);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('File change');
    expect(lines[0]).toContain('src/App.ts');
    expect(lines[0]).toContain('src/Main.ts');
  });

  test('DC-43b: fileChange truncates long file lists', () => {
    const { lines, console } = createCapture();
    const batch: FileChangeBatch = {
      files: [
        { path: 'a.ts', type: 'change' },
        { path: 'b.ts', type: 'change' },
        { path: 'c.ts', type: 'change' },
        { path: 'd.ts', type: 'change' },
        { path: 'e.ts', type: 'change' },
      ],
      rawChangeCount: 5,
      timestamp: Date.now(),
    };
    console.fileChange(batch);
    expect(lines[0]).toContain('+2 more');
  });

  // Test 44: serverStatus output includes status info
  test('DC-44: serverStatus output includes status info', () => {
    const { lines, console } = createCapture();
    const info: ServerStatusInfo = {
      status: 'running',
      entry: 'src/main.ts',
      watchPaths: ['src/'],
      hotReload: true,
    };
    console.serverStatus(info);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('running');
    expect(lines[0]).toContain('src/main.ts');
    expect(lines[0]).toContain('hot reload: on');
  });

  test('DC-44b: serverStatus omits unknown detail fields', () => {
    const { lines, console } = createCapture();
    console.serverStatus({ status: 'starting' });
    expect(lines).toHaveLength(1);
    expect(lines[0]).toContain('starting');
    expect(lines[0]).not.toContain('entry:');
    expect(lines[0]).not.toContain('hot reload:');
  });

  // Test 45: log level filtering
  test('DC-45: level=warn filters out info and debug', () => {
    const { lines, console } = createCapture({ level: 'warn' });
    console.debug('debug msg');
    console.info('info msg');
    console.warn('warn msg');
    console.error('error msg');
    expect(lines.length).toBe(2);
    expect(lines[0]).toContain('warn msg');
    expect(lines[1]).toContain('error msg');
  });

  test('DC-45b: level=error filters out info, debug, and warn', () => {
    const { lines, console } = createCapture({ level: 'error' });
    console.debug('d');
    console.info('i');
    console.warn('w');
    console.error('e');
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('e');
  });

  test('DC-45c: level=debug shows all', () => {
    const { lines, console } = createCapture({ level: 'debug' });
    console.debug('d');
    console.info('i');
    console.warn('w');
    console.error('e');
    expect(lines.length).toBe(4);
  });

  test('DC-45d: buildStart filtered at level=warn', () => {
    const { lines, console } = createCapture({ level: 'warn' });
    console.buildStart(['a.ts']);
    expect(lines.length).toBe(0);
  });

  test('DC-45e: buildError visible at level=error', () => {
    const { lines, console } = createCapture({ level: 'error' });
    console.buildError([makeDiagnostic()]);
    expect(lines.length).toBeGreaterThan(0);
  });

  // Test 46: color toggle
  test('DC-46: color=false removes ANSI codes', () => {
    const { lines, console } = createCapture({ color: false });
    console.info('hello');
    console.buildSuccess({ durationMs: 100, filesCompiled: 1, qmlFilesGenerated: 1 });
    console.buildError([makeDiagnostic()]);
    // biome-ignore lint/suspicious/noControlCharactersInRegex: testing ANSI removal
    const ansiRe = /\x1b\[/;
    for (const line of lines) {
      expect(ansiRe.test(line)).toBe(false);
    }
  });

  test('DC-46b: color=true includes ANSI codes', () => {
    const { lines, console } = createCapture({ color: true });
    console.info('hello');
    // biome-ignore lint/suspicious/noControlCharactersInRegex: testing ANSI presence
    const ansiRe = /\x1b\[/;
    expect(ansiRe.test(lines[0]!)).toBe(true);
  });

  // Test 47: timestamp toggle
  test('DC-47: timestamp=true adds time prefix', () => {
    const { lines, console } = createCapture({ timestamp: true });
    console.info('hello');
    // Should match HH:MM:SS pattern
    expect(lines[0]).toMatch(/\d{2}:\d{2}:\d{2}/);
  });

  test('DC-47b: timestamp=false has no time prefix', () => {
    const { lines, console } = createCapture({ timestamp: false });
    console.info('hello');
    expect(lines[0]).not.toMatch(/^\d{2}:\d{2}:\d{2}/);
  });

  // Test 48: clear sends escape sequence
  test('DC-48: clear sends screen clear sequence', () => {
    const output: string[] = [];
    const console = createDevConsole({
      write: (text: string) => {
        output.push(text);
      },
    });
    console.clear();
    expect(output.length).toBe(1);
    expect(output[0]).toContain('\x1b[2J');
    expect(output[0]).toContain('\x1b[H');
  });

  // ─── connectToDevServer tests ───────────────────────────

  test('DC-50: connectToDevServer routes build-start event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('build-start');
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Building...');
  });

  test('DC-51: connectToDevServer routes build-success event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('build-success', {
      success: true,
      durationMs: 200,
      diagnostics: [],
      stats: {
        totalFiles: 3,
        totalViews: 2,
        totalViewModels: 1,
        totalStates: 0,
        totalCommands: 0,
        totalEffects: 0,
        durationMs: 200,
      },
    });
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Build succeeded');
    expect(lines[0]).toContain('200ms');
  });

  test('DC-52: connectToDevServer routes build-error event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('build-error', {
      success: false,
      durationMs: 50,
      diagnostics: [makeDiagnostic()],
    });
    expect(lines.length).toBe(2); // summary + diagnostic
    expect(lines[0]).toContain('Build failed');
  });

  test('DC-53: connectToDevServer routes hot-reload event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('hot-reload', {
      durationMs: 30,
      filesReloaded: ['a.ts'],
      sequence: 1,
    });
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Hot reload #1');
  });

  test('DC-54: connectToDevServer routes hot-reload-error event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('hot-reload-error', {
      error: 'QML load failed',
      durationMs: 10,
      sequence: 2,
    });
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Hot reload #2 failed');
    expect(lines[0]).toContain('QML load failed');
  });

  test('DC-55: connectToDevServer routes file-change event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('file-change', {
      files: [{ path: 'src/App.ts', type: 'change' }],
      rawChangeCount: 1,
    });
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('File change');
    expect(lines[0]).toContain('src/App.ts');
  });

  test('DC-56: connectToDevServer routes status-change event', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('status-change', { from: 'idle', to: 'running' });
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('running');
    expect(lines[0]).not.toContain('entry:');
  });

  test('DC-57: disconnect removes all listeners', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    const disconnect = console.connectToDevServer(server);
    disconnect();
    server._emit('build-start');
    expect(lines.length).toBe(0);
  });

  test('DC-58: connectToDevServer routes rebuild events', () => {
    const { lines, console } = createCapture();
    const server = createMockDevServer();
    console.connectToDevServer(server);
    server._emit('rebuild-start', { files: ['src/App.ts', 'src/Main.ts'] });
    server._emit('rebuild-success', {
      success: true,
      durationMs: 100,
      diagnostics: [],
      stats: {
        totalFiles: 2,
        totalViews: 1,
        totalViewModels: 1,
        totalStates: 0,
        totalCommands: 0,
        totalEffects: 0,
        durationMs: 100,
      },
    });
    expect(lines.length).toBe(2);
    expect(lines[0]).toContain('Building...');
    expect(lines[0]).toContain('2 files');
    expect(lines[1]).toContain('Build succeeded');
  });

  // ─── Generic log methods ────────────────────────────────

  test('DC-60: info outputs message with prefix', () => {
    const { lines, console } = createCapture();
    console.info('Server starting');
    expect(lines[0]).toContain('[qmlts]');
    expect(lines[0]).toContain('Server starting');
  });

  test('DC-61: warn outputs with warning indicator', () => {
    const { lines, console } = createCapture();
    console.warn('Deprecation notice');
    expect(lines[0]).toContain('Deprecation notice');
  });

  test('DC-62: error outputs with error indicator', () => {
    const { lines, console } = createCapture();
    console.error('Fatal crash');
    expect(lines[0]).toContain('Fatal crash');
  });

  test('DC-63: debug outputs at debug level', () => {
    const { lines, console } = createCapture({ level: 'debug' });
    console.debug('Verbose detail');
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('Verbose detail');
  });

  test('DC-64: debug hidden at info level', () => {
    const { lines, console } = createCapture({ level: 'info' });
    console.debug('Verbose detail');
    expect(lines.length).toBe(0);
  });
});
