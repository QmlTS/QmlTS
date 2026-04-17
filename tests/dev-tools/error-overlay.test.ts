import { describe, expect, test } from 'bun:test';
import type { HostOverlayApi, OverlayError } from '../../src/dev-tools/dev-types.js';
import {
  createErrorOverlay,
  diagnosticsToOverlayErrors,
  formatOverlayErrors,
} from '../../src/dev-tools/error-overlay.js';

// ─── Mock Host ──────────────────────────────────────────────

function createMockHost(): HostOverlayApi & {
  lastText: string | undefined;
  showCalls: number;
  hideCalls: number;
  _visible: boolean;
} {
  return {
    lastText: undefined,
    showCalls: 0,
    hideCalls: 0,
    _visible: false,
    showErrorOverlay(text: string): void {
      this.lastText = text;
      this.showCalls++;
      this._visible = true;
    },
    hideErrorOverlay(): void {
      this.hideCalls++;
      this._visible = false;
    },
    isErrorOverlayVisible(): boolean {
      return this._visible;
    },
  };
}

function makeError(overrides: Partial<OverlayError> = {}): OverlayError {
  return {
    file: 'src/App.ts',
    line: 10,
    column: 5,
    message: 'Unexpected token',
    severity: 'error',
    ...overrides,
  };
}

// ─── Tests ──────────────────────────────────────────────────

describe('ErrorOverlay', () => {
  test('EO-01: show formats single error with file:line:col', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.show([makeError()]);

    expect(host.showCalls).toBe(1);
    expect(host.lastText).toContain('src/App.ts:10:5');
    expect(host.lastText).toContain('Unexpected token');
    expect(host.lastText).toContain('error');
  });

  test('EO-02: show includes codeFrame when provided', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.show([
      makeError({
        codeFrame: '  10 | const x = ;\n     |           ^',
      }),
    ]);

    expect(host.lastText).toContain('const x = ;');
    expect(host.lastText).toContain('^');
  });

  test('EO-03: show formats multiple errors with separators', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.show([
      makeError({ file: 'a.ts', line: 1, message: 'Error A' }),
      makeError({ file: 'b.ts', line: 2, message: 'Error B' }),
    ]);

    expect(host.showCalls).toBe(1);
    expect(host.lastText).toContain('a.ts:1:5');
    expect(host.lastText).toContain('Error A');
    expect(host.lastText).toContain('b.ts:2:5');
    expect(host.lastText).toContain('Error B');
  });

  test('EO-04: hide calls host.hideErrorOverlay', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.hide();

    expect(host.hideCalls).toBe(1);
  });

  test('EO-05: visible delegates to host.isErrorOverlayVisible', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    expect(overlay.visible).toBe(false);

    overlay.show([makeError()]);
    expect(overlay.visible).toBe(true);

    overlay.hide();
    expect(overlay.visible).toBe(false);
  });

  test('EO-06: dispose is safe and idempotent', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    expect(() => overlay.dispose()).not.toThrow();
    expect(() => overlay.dispose()).not.toThrow();
  });

  test('EO-06a: disposed overlay no longer calls host methods', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.dispose();
    overlay.show([makeError()]);
    overlay.hide();

    expect(host.showCalls).toBe(0);
    expect(host.hideCalls).toBe(0);
    expect(overlay.visible).toBe(false);
  });

  test('EO-06b: show with empty array calls host with empty message', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.show([]);

    expect(host.showCalls).toBe(1);
    expect(host.lastText).toBeDefined();
  });

  test('EO-06c: warning severity is formatted correctly', () => {
    const host = createMockHost();
    const overlay = createErrorOverlay({ host });

    overlay.show([makeError({ severity: 'warning', message: 'Unused var' })]);

    expect(host.lastText).toContain('warning');
    expect(host.lastText).toContain('Unused var');
  });

  test('EO-14: diagnosticsToOverlayErrors maps Diagnostic fields', () => {
    const diagnostics = [
      {
        severity: 'error' as const,
        code: 'QMLTS-A001' as const,
        message: 'Type mismatch',
        file: 'src/Counter.ts',
        line: 42,
        column: 8,
      },
      {
        severity: 'warning' as const,
        code: 'QMLTS-A002' as const,
        message: 'Unused variable',
      },
      {
        severity: 'info' as const,
        code: 'QMLTS-A003' as const,
        message: 'Informational — should be filtered',
      },
    ];

    const errors = diagnosticsToOverlayErrors(diagnostics);

    expect(errors).toHaveLength(2);
    expect(errors[0].file).toBe('src/Counter.ts');
    expect(errors[0].line).toBe(42);
    expect(errors[0].column).toBe(8);
    expect(errors[0].message).toBe('Type mismatch');
    expect(errors[0].severity).toBe('error');

    expect(errors[1].file).toBe('');
    expect(errors[1].line).toBe(0);
    expect(errors[1].column).toBe(0);
    expect(errors[1].severity).toBe('warning');
  });
});

// ─── V2 Instance Context Tests ──────────────────────────────

describe('ErrorOverlay V2', () => {
  test('EO-V2-01: formatOverlayErrors includes instance context tag', () => {
    const errors: OverlayError[] = [
      { file: 'a.ts', line: 1, column: 1, message: 'err', severity: 'error' },
    ];
    const result = formatOverlayErrors(errors, { instanceId: 42, className: 'Login' });
    expect(result).toContain('[Login#42]');
    expect(result).toContain('err');
  });

  test('EO-V2-02: formatOverlayErrors without instance context has no tag', () => {
    const errors: OverlayError[] = [
      { file: 'a.ts', line: 1, column: 1, message: 'err', severity: 'error' },
    ];
    const result = formatOverlayErrors(errors);
    // No instance context tag like [Login#42] should appear
    expect(result).not.toMatch(/\[\w+#\d+\]/);
    // Still contains the error
    expect(result).toContain('err');
  });

  test('EO-V2-03: formatOverlayErrors with instance context and multiple errors', () => {
    const errors: OverlayError[] = [
      { file: 'a.ts', line: 1, column: 1, message: 'Error A', severity: 'error' },
      { file: 'b.ts', line: 2, column: 2, message: 'Error B', severity: 'warning' },
    ];
    const result = formatOverlayErrors(errors, { instanceId: 7, className: 'Counter' });
    expect(result).toContain('[Counter#7]');
    expect(result).toContain('Error A');
    expect(result).toContain('Error B');
  });

  test('EO-V2-04: formatOverlayErrors with empty errors and instance context', () => {
    const result = formatOverlayErrors([], { instanceId: 1, className: 'Search' });
    expect(result).toBe('Unknown error');
  });
});
