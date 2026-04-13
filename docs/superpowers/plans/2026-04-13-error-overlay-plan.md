# Error Overlay & Failure Fallback Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add end-to-end error overlay support so that build/reload failures are shown visually in the running Qt window, with automatic recovery on success.

**Architecture:** The overlay is a QML Rectangle injected into the root window's contentItem by C++. TypeScript controls show/hide via napi-rs bindings. State is engine-scoped (keyed by engine pointer). On startup failure with no window, C++ creates a minimal error shell. DevServer auto-wires events: show overlay on build-error/rebuild-error/hot-reload-error, hide only on hot-reload success (runtime success confirmed).

**Tech Stack:** C++ (Qt 6.11 / QQuickItem), Rust (napi-rs / FFI), TypeScript (Bun test runner), biome formatting.

**Spec:** `docs/superpowers/specs/2026-04-13-error-overlay-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `native/crates/qmlts-host/cpp/qt_context.cpp` | Modify | Add overlay state map, inject/show/hide/query C functions, modify load_data + reload_qml + destroy_engine |
| `native/crates/qmlts-host/src/qt_context.rs` | Modify | Add FFI extern declarations + safe wrappers (real + mock-qt) |
| `native/crates/qmlts-host/src/engine.rs` | Modify | Add show/hide/query engine methods |
| `native/crates/qmlts-host/src/error.rs` | Modify | Add `OverlayError` variant |
| `native/crates/qmlts-host/src/exports.rs` | Modify | Add napi exports for overlay functions |
| `native/npm/qmlts-host/src/types.ts` | Modify | Add TS declarations for overlay napi functions |
| `native/npm/qmlts-host/src/index.ts` | Modify | Re-export new overlay bindings |
| `native/npm/qmlts-host/src/qmlts-host.ts` | Modify | Add overlay wrapper methods on QmltsHost class |
| `src/dev-tools/dev-types.ts` | Modify | Add ErrorOverlay, OverlayError, HostOverlayApi interfaces |
| `src/dev-tools/error-overlay.ts` | Create | createErrorOverlay factory, formatting, host delegation |
| `src/dev-tools/dev-server.ts` | Modify | Wire overlay show/hide to build/reload events |
| `src/dev-tools/index.ts` | Modify | Export new types and factory |
| `src/index.ts` | Modify | Re-export new dev-tools types |
| `tests/dev-tools/error-overlay.test.ts` | Create | ErrorOverlay unit tests (EO-01 through EO-06) |
| `tests/dev-tools/dev-server.test.ts` | Modify | Add overlay integration tests (EO-07 through EO-15) |

---

## Task 1: Create branch and set up workspace

**Files:** None (git operations only)

- [ ] **Step 1: Create Step 2 branch from main**

```bash
git checkout main
git pull origin main
git checkout -b step-9/part-2-error-overlay
```

- [ ] **Step 2: Verify clean state**

Run: `git status`
Expected: `On branch step-9/part-2-error-overlay`, clean working tree.

---

## Task 2: Add ErrorOverlay types to dev-types.ts

**Files:**
- Modify: `src/dev-tools/dev-types.ts:168` (before the re-export line)

- [ ] **Step 1: Write the failing type-check**

We'll add the types first so later code that depends on them will compile. Add these interfaces before the `// Re-export for convenience` comment at line 170:

```typescript
// ─── ErrorOverlay ───────────────────────────────────────────

export interface ErrorOverlay {
  show(errors: readonly OverlayError[]): void;
  hide(): void;
  readonly visible: boolean;
  dispose(): void;
}

export interface OverlayError {
  readonly file: string;
  readonly line: number;
  readonly column: number;
  readonly message: string;
  readonly severity: 'error' | 'warning';
  readonly codeFrame?: string;
}

export interface ErrorOverlayOptions {
  readonly host: HostOverlayApi;
}

export interface HostOverlayApi {
  showErrorOverlay(text: string): void;
  hideErrorOverlay(): void;
  isErrorOverlayVisible(): boolean;
}
```

- [ ] **Step 2: Verify types compile**

Run: `bunx tsc --noEmit src/dev-tools/dev-types.ts`
Expected: No errors.

---

## Task 3: Implement createErrorOverlay and tests (TDD)

**Files:**
- Create: `src/dev-tools/error-overlay.ts`
- Create: `tests/dev-tools/error-overlay.test.ts`

- [ ] **Step 1: Write the failing test file**

Create `tests/dev-tools/error-overlay.test.ts`:

```typescript
import { describe, expect, test, mock } from 'bun:test';
import { createErrorOverlay } from '../../src/dev-tools/error-overlay.js';
import type { HostOverlayApi, OverlayError } from '../../src/dev-tools/dev-types.js';

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
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/dev-tools/error-overlay.test.ts`
Expected: FAIL — `createErrorOverlay` does not exist yet.

- [ ] **Step 3: Implement createErrorOverlay**

Create `src/dev-tools/error-overlay.ts`:

```typescript
import type { ErrorOverlay, ErrorOverlayOptions, OverlayError } from './dev-types.js';

export function formatOverlayErrors(errors: readonly OverlayError[]): string {
  if (errors.length === 0) {
    return 'Unknown error';
  }

  const parts: string[] = [];

  for (let i = 0; i < errors.length; i++) {
    const err = errors[i];
    const location = err.file ? `${err.file}:${err.line}:${err.column}` : 'unknown';
    parts.push(`[${err.severity}] ${location}`);
    parts.push(err.message);
    if (err.codeFrame) {
      parts.push(err.codeFrame);
    }
    if (i < errors.length - 1) {
      parts.push('');
      parts.push('─'.repeat(40));
      parts.push('');
    }
  }

  return parts.join('\n');
}

export function createErrorOverlay(options: ErrorOverlayOptions): ErrorOverlay {
  const { host } = options;
  let disposed = false;

  return {
    show(errors: readonly OverlayError[]): void {
      if (disposed) return;
      const text = formatOverlayErrors(errors);
      host.showErrorOverlay(text);
    },

    hide(): void {
      if (disposed) return;
      host.hideErrorOverlay();
    },

    get visible(): boolean {
      if (disposed) return false;
      return host.isErrorOverlayVisible();
    },

    dispose(): void {
      disposed = true;
    },
  };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/dev-tools/error-overlay.test.ts`
Expected: All 8 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/dev-tools/error-overlay.ts src/dev-tools/dev-types.ts tests/dev-tools/error-overlay.test.ts
git commit -m "feat(dev-tools): add ErrorOverlay types and createErrorOverlay factory

Add ErrorOverlay, OverlayError, HostOverlayApi interfaces to dev-types.
Implement createErrorOverlay with formatOverlayErrors for text formatting.
Add EO-01 through EO-06c tests covering show/hide/visible/dispose/formatting.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 4: Add diagnosticsToOverlayErrors helper

**Files:**
- Modify: `src/dev-tools/error-overlay.ts`
- Modify: `tests/dev-tools/error-overlay.test.ts`

- [ ] **Step 1: Write the failing test**

Append to the `describe('ErrorOverlay', ...)` block in `tests/dev-tools/error-overlay.test.ts`:

```typescript
  test('EO-14: diagnosticsToOverlayErrors maps Diagnostic fields', () => {
    const { diagnosticsToOverlayErrors } = await import('../../src/dev-tools/error-overlay.js');

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
```

Note: The test uses a top-level `test()` with dynamic import because `diagnosticsToOverlayErrors` is a named export. If the test framework doesn't support top-level await in `test()`, use a synchronous import at the top of the file instead.

- [ ] **Step 2: Run tests to verify the new test fails**

Run: `bun test tests/dev-tools/error-overlay.test.ts`
Expected: EO-14 FAIL — `diagnosticsToOverlayErrors` is not exported.

- [ ] **Step 3: Implement diagnosticsToOverlayErrors**

Add to `src/dev-tools/error-overlay.ts`, after the existing imports:

```typescript
import type { Diagnostic } from '../compiler/diagnostics.js';
```

Add the function before `createErrorOverlay`:

```typescript
export function diagnosticsToOverlayErrors(diagnostics: readonly Diagnostic[]): OverlayError[] {
  return diagnostics
    .filter((d) => d.severity === 'error' || d.severity === 'warning')
    .map((d) => ({
      file: d.file ?? '',
      line: d.line ?? 0,
      column: d.column ?? 0,
      message: d.message,
      severity: d.severity as 'error' | 'warning',
      codeFrame: undefined,
    }));
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/dev-tools/error-overlay.test.ts`
Expected: All tests PASS including EO-14.

- [ ] **Step 5: Commit**

```bash
git add src/dev-tools/error-overlay.ts tests/dev-tools/error-overlay.test.ts
git commit -m "feat(dev-tools): add diagnosticsToOverlayErrors mapping helper

Converts Diagnostic[] to OverlayError[], filtering to error/warning severity
and defaulting missing file/line/column fields.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 5: Wire ErrorOverlay into DevServer

**Files:**
- Modify: `src/dev-tools/dev-types.ts:159-168` (DevServerOptions)
- Modify: `src/dev-tools/dev-server.ts` (event handling)
- Modify: `tests/dev-tools/dev-server.test.ts` (add overlay tests)

- [ ] **Step 1: Add errorOverlay to DevServerOptions**

In `src/dev-tools/dev-types.ts`, add to the `DevServerOptions` interface (before the closing `}`):

```typescript
  readonly errorOverlay?: ErrorOverlay;
```

- [ ] **Step 2: Write the failing DevServer overlay tests**

Append these tests to the existing `describe` block in `tests/dev-tools/dev-server.test.ts`. First, add imports at the top:

```typescript
import type { ErrorOverlay, OverlayError } from '../../src/dev-tools/dev-types.js';
```

And add `readFileSync` to the existing `node:fs` import:

```typescript
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
```

Add a mock overlay factory near the other mocks:

```typescript
function createMockOverlay(): ErrorOverlay & {
  showCalls: OverlayError[][];
  hideCalls: number;
  _visible: boolean;
} {
  return {
    showCalls: [],
    hideCalls: 0,
    _visible: false,
    show(errors: readonly OverlayError[]): void {
      this.showCalls.push([...errors]);
      this._visible = true;
    },
    hide(): void {
      this.hideCalls++;
      this._visible = false;
    },
    get visible(): boolean {
      return this._visible;
    },
    dispose(): void {},
  };
}
```

Add these tests (using the existing `makeConfig`, `createMockHotReloadClient`, `waitForServerEvent`, and temp-dir setup patterns):

```typescript
  test('EO-07: shows overlay on initial build-error', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { entry: join(tempDir, 'src', 'NonExistent.ts') }),
      { errorOverlay: overlay },
    );

    const result = await server.start();
    expect(result.success).toBe(false);
    expect(overlay.showCalls.length).toBeGreaterThan(0);

    await server.stop();
  });

  test('EO-08: shows overlay on rebuild-error', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(makeConfig(tempDir), { errorOverlay: overlay });

    await server.start();

    // Break the source file
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    await sleep(250);

    // Wait for rebuild-error event
    try {
      await waitForServerEvent(server, 'rebuild-error', 15_000);
    } catch {
      // Event may have already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);

    await server.stop();
  });

  test('EO-10: hides overlay on hot-reload success', async () => {
    const mockClient = createMockHotReloadClient();
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();

    // Force overlay visible
    overlay._visible = true;

    // Trigger a rebuild that succeeds + hot reload
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8') + '\n// touch',
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload', 15_000);
    } catch {
      // Event may have already fired
    }

    expect(overlay.hideCalls).toBeGreaterThan(0);

    await server.stop();
  });

  test('EO-11: does NOT hide overlay on build-success alone', async () => {
    const overlay = createMockOverlay();
    const server = createDevServer(makeConfig(tempDir), { errorOverlay: overlay });

    // Force overlay visible before start
    overlay._visible = true;

    const result = await server.start();
    expect(result.success).toBe(true);

    // Overlay should NOT have been hidden — build-success alone is not enough
    expect(overlay.hideCalls).toBe(0);

    await server.stop();
  });

  test('EO-09: shows overlay on hot-reload-error', async () => {
    const mockClient = createMockHotReloadClient({ shouldFail: true });
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();

    // Trigger a rebuild that succeeds but hot reload fails
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8') + '\n// trigger',
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload-error', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);
    const lastShow = overlay.showCalls[overlay.showCalls.length - 1];
    expect(lastShow[0].severity).toBe('error');

    await server.stop();
  });

  test('EO-12: does NOT hide overlay on rebuild-success alone', async () => {
    const overlay = createMockOverlay();
    // No hot reload client, so rebuild-success won't trigger hot-reload
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: false } }),
      { errorOverlay: overlay },
    );

    await server.start();
    overlay._visible = true;

    // Trigger a rebuild that succeeds (no hot reload)
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8') + '\n// rebuild',
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'rebuild-success', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.hideCalls).toBe(0);

    await server.stop();
  });

  test('EO-13: auto-recovery hides overlay after error then success', async () => {
    const mockClient = createMockHotReloadClient();
    const overlay = createMockOverlay();
    const server = createDevServer(
      makeConfig(tempDir, { dev: { ...makeConfig(tempDir).dev, hotReload: true } }),
      { hotReloadClient: mockClient, errorOverlay: overlay },
    );

    await server.start();

    // First: break the file to trigger rebuild-error
    writeFileSync(join(tempDir, 'src', 'CounterView.ts'), 'syntax error %%%');
    await sleep(250);

    try {
      await waitForServerEvent(server, 'rebuild-error', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.showCalls.length).toBeGreaterThan(0);

    // Second: fix the file to trigger successful rebuild + hot reload
    cpSync(join(FIXTURES_DIR, 'src', 'CounterView.ts'), join(tempDir, 'src', 'CounterView.ts'));
    // Append a harmless change to trigger watcher
    writeFileSync(
      join(tempDir, 'src', 'CounterView.ts'),
      readFileSync(join(tempDir, 'src', 'CounterView.ts'), 'utf-8') + '\n// fixed',
    );
    await sleep(250);

    try {
      await waitForServerEvent(server, 'hot-reload', 15_000);
    } catch {
      // Already fired
    }

    expect(overlay.hideCalls).toBeGreaterThan(0);

    await server.stop();
  });
```

- [ ] **Step 3: Run tests to verify new tests fail**

Run: `bun test tests/dev-tools/dev-server.test.ts`
Expected: EO-07 through EO-12 FAIL because DevServer does not wire the overlay yet.

- [ ] **Step 4: Wire overlay into DevServer**

In `src/dev-tools/dev-server.ts`, make these changes:

**A. Add import:**

At the top, add:

```typescript
import type { ErrorOverlay } from './dev-types.js';
import { diagnosticsToOverlayErrors } from './error-overlay.js';
```

**B. Add overlay event wiring in `createDevServer`, after the hot reload orchestrator setup (after line 353):**

```typescript
  // Set up error overlay event wiring if provided
  if (options.errorOverlay) {
    const overlay = options.errorOverlay;

    // Show overlay on any error event
    internals.listeners.set('build-error', new Set());
    internals.listeners.get('build-error')!.add((payload: DevServerEventPayload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    internals.listeners.set('rebuild-error', new Set());
    internals.listeners.get('rebuild-error')!.add((payload: DevServerEventPayload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    internals.listeners.set('hot-reload-error', new Set());
    internals.listeners.get('hot-reload-error')!.add((payload: DevServerEventPayload) => {
      const data = payload.data as DevServerHotReloadErrorData | undefined;
      if (data) {
        overlay.show([
          {
            file: '',
            line: 0,
            column: 0,
            message: data.error,
            severity: 'error',
          },
        ]);
      }
    });

    // Hide overlay ONLY on hot-reload success (runtime success confirmed)
    internals.listeners.set('hot-reload', new Set());
    internals.listeners.get('hot-reload')!.add(() => {
      overlay.hide();
    });
  }
```

Wait — this approach would overwrite any user-registered listeners for the same event. The existing `on()` method uses `listeners.get(event)` and creates a Set if missing. The wiring above creates new Sets which would be the right approach ONLY if done before the return. Let me re-think: use the server's own `on()` method instead. The wiring should happen just before the return statement, using the server object's `on()` method.

Actually, looking at the code structure, the server object is created inline in the return. The simpler approach is to register overlay wiring using the same `emit()` path — we add internal overlay handling directly in the `emit()` function or as internal listeners during construction.

The cleanest approach: register overlay listeners on the internals map during construction, BEFORE the return. Since `internals.listeners` uses a Map of Sets, we can safely add to existing sets:

Replace the block above with this approach — add a helper that registers on the internals map:

```typescript
  // Wire error overlay if provided
  if (options.errorOverlay) {
    const overlay = options.errorOverlay;

    const addInternalListener = (event: DevServerEvent, handler: (payload: DevServerEventPayload) => void) => {
      if (!internals.listeners.has(event)) {
        internals.listeners.set(event, new Set());
      }
      internals.listeners.get(event)!.add(handler);
    };

    addInternalListener('build-error', (payload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('rebuild-error', (payload) => {
      const data = payload.data as DevServerBuildResultData | undefined;
      if (data?.diagnostics) {
        overlay.show(diagnosticsToOverlayErrors(data.diagnostics));
      }
    });

    addInternalListener('hot-reload-error', (payload) => {
      const data = payload.data as DevServerHotReloadErrorData | undefined;
      if (data) {
        overlay.show([
          {
            file: '',
            line: 0,
            column: 0,
            message: data.error,
            severity: 'error',
          },
        ]);
      }
    });

    addInternalListener('hot-reload', () => {
      overlay.hide();
    });
  }
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `bun test tests/dev-tools/dev-server.test.ts`
Expected: All tests PASS, including existing tests and new EO-07 through EO-12.

- [ ] **Step 6: Run full TS test suite**

Run: `bun test tests/`
Expected: All tests PASS.

- [ ] **Step 7: Commit**

```bash
git add src/dev-tools/dev-types.ts src/dev-tools/dev-server.ts tests/dev-tools/dev-server.test.ts
git commit -m "feat(dev-tools): wire ErrorOverlay into DevServer event system

DevServer auto-shows overlay on build-error, rebuild-error, hot-reload-error.
Hides overlay ONLY on hot-reload success (runtime success confirmed).
build-success and rebuild-success alone do NOT hide the overlay.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 6: Update dev-tools and barrel exports

**Files:**
- Modify: `src/dev-tools/index.ts`
- Modify: `src/index.ts`

- [ ] **Step 1: Add exports to dev-tools index**

In `src/dev-tools/index.ts`, add after the existing exports:

```typescript
export { createErrorOverlay, diagnosticsToOverlayErrors, formatOverlayErrors } from './error-overlay.js';
```

And add to the type exports:

```typescript
  ErrorOverlay,
  ErrorOverlayOptions,
  HostOverlayApi,
  OverlayError,
```

- [ ] **Step 2: Add exports to barrel index**

In `src/index.ts`, add the new exports to the appropriate sections:
- Add `createErrorOverlay, diagnosticsToOverlayErrors, formatOverlayErrors` to the value exports
- Add `ErrorOverlay, ErrorOverlayOptions, HostOverlayApi, OverlayError` to the type exports

- [ ] **Step 3: Verify typecheck passes**

Run: `bun run typecheck`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/dev-tools/index.ts src/index.ts
git commit -m "feat(dev-tools): export ErrorOverlay types and factory from barrel

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 7: Add C++ overlay functions to qt_context.cpp

**Files:**
- Modify: `native/crates/qmlts-host/cpp/qt_context.cpp`

- [ ] **Step 1: Add overlay includes and state structure**

At the top of `qt_context.cpp`, after the existing includes (after line 25 `#include <QQuickItem>`), add:

```cpp
#include <QPointer>
#include <QQmlComponent>
#include <unordered_map>
```

After the existing includes and before the first function definition, add the overlay state:

```cpp
// ─── Error Overlay State (engine-scoped) ──────────────────────────────────

struct OverlayState {
    QPointer<QQuickItem> overlayItem;
    bool visible = false;
    QString errorText;
};

static std::unordered_map<void*, OverlayState> s_overlay_states;

static constexpr const char* OVERLAY_QML = R"QML(
import QtQuick

Rectangle {
    id: overlayRoot
    property string errorText: ""
    property bool overlayVisible: false
    anchors.fill: parent
    color: "#E0000000"
    visible: overlayVisible
    z: 999999

    Column {
        anchors.centerIn: parent
        spacing: 16
        width: parent.width * 0.85

        Text {
            text: "\u274C Build Error"
            color: "#ff6b6b"
            font.pixelSize: 22
            font.bold: true
        }

        Flickable {
            width: parent.width
            height: Math.min(contentHeight, overlayRoot.height * 0.7)
            contentHeight: errorTextItem.implicitHeight
            clip: true

            Text {
                id: errorTextItem
                text: errorText
                color: "#e0e0e0"
                font.family: "Consolas"
                font.pixelSize: 13
                width: parent.width
                wrapMode: Text.Wrap
            }
        }
    }
}
)QML";

static constexpr const char* ERROR_SHELL_QML = R"QML(
import QtQuick
import QtQuick.Window

Window {
    width: 800
    height: 600
    visible: true
    title: "QmlTS \u2014 Build Error"
    color: "#1a1a1a"
}
)QML";
```

- [ ] **Step 2: Add inject, show, hide, query functions**

Add these functions before the `qmlts_destroy_engine` function (before line 255):

```cpp
// ─── Error Overlay Functions ──────────────────────────────────────────────

/// Find the first QQuickWindow among the engine's root objects.
static QQuickWindow* find_root_window(QQmlApplicationEngine* engine) {
    for (QObject* root : engine->rootObjects()) {
        if (auto* window = qobject_cast<QQuickWindow*>(root)) {
            return window;
        }
    }
    return nullptr;
}

/// Inject (or re-inject) the error overlay QML item into the root window.
/// Restores pending visible/errorText state from the engine's OverlayState.
void qmlts_inject_error_overlay(void* engine_ptr) {
    if (!engine_ptr) return;

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    auto& state = s_overlay_states[engine_ptr];

    QQuickWindow* window = find_root_window(engine);
    if (!window) return;

    QQuickItem* parentItem = window->contentItem();
    if (!parentItem) return;

    // Create the overlay component from inline QML
    QQmlComponent component(engine);
    component.setData(QByteArray(OVERLAY_QML), QUrl());
    if (component.isError()) {
        qWarning() << "QmlTS: Failed to create error overlay component:" << component.errors();
        return;
    }

    QObject* obj = component.create(engine->rootContext());
    if (!obj) {
        qWarning() << "QmlTS: Failed to instantiate error overlay";
        return;
    }

    auto* overlayItem = qobject_cast<QQuickItem*>(obj);
    if (!overlayItem) {
        delete obj;
        qWarning() << "QmlTS: Error overlay is not a QQuickItem";
        return;
    }

    overlayItem->setParentItem(parentItem);
    state.overlayItem = overlayItem;

    // Restore pending state
    overlayItem->setProperty("overlayVisible", state.visible);
    if (!state.errorText.isEmpty()) {
        overlayItem->setProperty("errorText", state.errorText);
    }
}

/// Show the error overlay with the given text. If no root window exists,
/// loads a minimal error shell first.
void qmlts_show_error_overlay(void* engine_ptr, const char* text, std::size_t text_len) {
    if (!engine_ptr || !text) return;

    auto* engine = static_cast<QQmlApplicationEngine*>(engine_ptr);
    auto& state = s_overlay_states[engine_ptr];

    state.visible = true;
    state.errorText = QString::fromUtf8(text, static_cast<qsizetype>(text_len));

    // If no root window exists, load the error shell
    if (engine->rootObjects().isEmpty()) {
        engine->loadData(QByteArray(ERROR_SHELL_QML), QUrl());

        // Inject overlay into the newly created shell
        qmlts_inject_error_overlay(engine_ptr);
    }

    // If the overlay item was destroyed (e.g. after reload), re-inject
    if (state.overlayItem.isNull()) {
        qmlts_inject_error_overlay(engine_ptr);
    }

    if (!state.overlayItem.isNull()) {
        state.overlayItem->setProperty("overlayVisible", true);
        state.overlayItem->setProperty("errorText", state.errorText);
    }
}

/// Hide the error overlay.
void qmlts_hide_error_overlay(void* engine_ptr) {
    if (!engine_ptr) return;

    auto& state = s_overlay_states[engine_ptr];
    state.visible = false;

    if (!state.overlayItem.isNull()) {
        state.overlayItem->setProperty("overlayVisible", false);
    }
}

/// Check whether the error overlay is currently visible.
bool qmlts_is_error_overlay_visible(void* engine_ptr) {
    if (!engine_ptr) return false;

    auto it = s_overlay_states.find(engine_ptr);
    if (it == s_overlay_states.end()) return false;

    return it->second.visible;
}
```

- [ ] **Step 3: Modify qmlts_destroy_engine to clean up overlay state**

Change `qmlts_destroy_engine` (line 255) to:

```cpp
void qmlts_destroy_engine(void* engine_ptr) {
    if (!engine_ptr) {
        return;
    }
    s_overlay_states.erase(engine_ptr);
    delete static_cast<QQmlApplicationEngine*>(engine_ptr);
}
```

- [ ] **Step 4: Modify qmlts_load_data to inject overlay after successful load**

Change the end of `qmlts_load_data` (lines 312-315) to:

```cpp
    const auto root_count = engine->rootObjects().size();
    engine->loadData(bytes, base_url);
    const bool loaded = engine->rootObjects().size() > root_count;
    if (loaded) {
        qmlts_inject_error_overlay(engine_ptr);
    }
    return loaded;
```

- [ ] **Step 5: Modify qmlts_reload_qml to re-inject overlay after successful reload**

Change the end of `qmlts_reload_qml` (lines 888-897) to:

```cpp
    if (currentRoots.size() <= root_count_before) {
        return false;
    }

    // Step 3: New QML is live, so the old roots can now be discarded.
    for (QObject* root : previousRoots) {
        delete root;
    }

    // Step 4: Re-inject the error overlay into the new tree.
    qmlts_inject_error_overlay(engine_ptr);

    return true;
```

- [ ] **Step 6: Commit**

```bash
git add native/crates/qmlts-host/cpp/qt_context.cpp
git commit -m "feat(native): add error overlay C++ implementation

Engine-scoped OverlayState with QPointer<QQuickItem> for safe cross-reload.
Inline overlay QML uses only QtQuick primitives (no QtQuick.Controls).
Error shell window created on show_error_overlay if no root exists.
Overlay auto-injected after load_data and reload_qml success.
State cleaned up in destroy_engine.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 8: Add Rust FFI declarations and safe wrappers

**Files:**
- Modify: `native/crates/qmlts-host/src/qt_context.rs`

- [ ] **Step 1: Add extern "C" declarations**

In `native/crates/qmlts-host/src/qt_context.rs`, add to the `unsafe extern "C"` block (before the closing `}` at line 126):

```rust
    // §9 Error Overlay
    fn qmlts_inject_error_overlay(engine_ptr: *mut c_void);
    fn qmlts_show_error_overlay(engine_ptr: *mut c_void, text: *const std::ffi::c_char, text_len: usize);
    fn qmlts_hide_error_overlay(engine_ptr: *mut c_void);
    fn qmlts_is_error_overlay_visible(engine_ptr: *mut c_void) -> bool;
```

- [ ] **Step 2: Add real-Qt safe wrappers**

Add after the existing `restore_snapshot` real-Qt wrapper (before the mock section):

```rust
// ─── §9 Error Overlay ────────────────────────────────────────────────────

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn inject_error_overlay(engine_ptr: *mut c_void) {
    unsafe { qmlts_inject_error_overlay(engine_ptr) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn show_error_overlay(engine_ptr: *mut c_void, text: &str) {
    let bytes = text.as_bytes();
    unsafe { qmlts_show_error_overlay(engine_ptr, bytes.as_ptr().cast(), bytes.len()) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
pub fn hide_error_overlay(engine_ptr: *mut c_void) {
    unsafe { qmlts_hide_error_overlay(engine_ptr) }
}

#[cfg(not(feature = "mock-qt"))]
#[allow(dead_code)]
#[must_use]
pub fn is_error_overlay_visible(engine_ptr: *mut c_void) -> bool {
    unsafe { qmlts_is_error_overlay_visible(engine_ptr) }
}
```

- [ ] **Step 3: Add mock-qt wrappers**

Add near the other mock wrappers (in the mock section):

```rust
// ─── Error Overlay mock wrappers ─────────────────────────────────────────

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn inject_error_overlay(_engine_ptr: *mut c_void) {
    tracing::debug!("Mock: inject_error_overlay");
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn show_error_overlay(_engine_ptr: *mut c_void, text: &str) {
    tracing::debug!("Mock: show_error_overlay('{}')", &text[..text.len().min(80)]);
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
pub fn hide_error_overlay(_engine_ptr: *mut c_void) {
    tracing::debug!("Mock: hide_error_overlay");
}

#[cfg(feature = "mock-qt")]
#[allow(dead_code)]
#[must_use]
pub fn is_error_overlay_visible(_engine_ptr: *mut c_void) -> bool {
    tracing::debug!("Mock: is_error_overlay_visible");
    false
}
```

- [ ] **Step 4: Run cargo check with mock-qt**

Run: `cargo check -p qmlts-host --features mock-qt`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/qt_context.rs
git commit -m "feat(native): add error overlay FFI declarations and safe wrappers

Extern C declarations for inject/show/hide/query overlay functions.
Real-Qt wrappers delegate to C++ functions.
Mock-Qt wrappers log and return safe defaults.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 9: Add engine methods and error variant

**Files:**
- Modify: `native/crates/qmlts-host/src/error.rs`
- Modify: `native/crates/qmlts-host/src/engine.rs`

- [ ] **Step 1: Add OverlayError variant**

In `native/crates/qmlts-host/src/error.rs`, add before the closing `}` of the enum (before line 93):

```rust
    /// Error overlay operation failed.
    #[error("Error overlay operation failed: {0}")]
    OverlayError(String),
```

- [ ] **Step 2: Add engine methods**

In `native/crates/qmlts-host/src/engine.rs`, add after the `restore_snapshot` method (after line 1020):

```rust
    // ─── §9 Error Overlay ────────────────────────────────────────────────

    /// Show the error overlay with the given text.
    ///
    /// If no QML has been loaded yet, the native layer creates a minimal
    /// error shell window first, and `qml_loaded` is set to `true` so
    /// that subsequent `reload_qml()` calls can replace the shell.
    pub fn show_error_overlay(&mut self, text: &str) -> Result<()> {
        self.ensure_alive()?;
        qt_context::show_error_overlay(self.engine_ptr, text);

        // If the C++ side created an error shell, mark QML as loaded
        // so that reload_qml() can later replace the shell with real QML.
        if !self.qml_loaded {
            self.qml_loaded = true;
        }
        Ok(())
    }

    /// Hide the error overlay.
    pub fn hide_error_overlay(&mut self) -> Result<()> {
        self.ensure_alive()?;
        qt_context::hide_error_overlay(self.engine_ptr);
        Ok(())
    }

    /// Check whether the error overlay is currently visible.
    pub fn is_error_overlay_visible(&self) -> Result<bool> {
        self.ensure_alive()?;
        Ok(qt_context::is_error_overlay_visible(self.engine_ptr))
    }
```

- [ ] **Step 3: Run cargo check with mock-qt**

Run: `cargo check -p qmlts-host --features mock-qt`
Expected: No errors.

- [ ] **Step 4: Run cargo test with mock-qt**

Run: `cargo test -p qmlts-host --features mock-qt`
Expected: All existing tests PASS.

- [ ] **Step 5: Commit**

```bash
git add native/crates/qmlts-host/src/error.rs native/crates/qmlts-host/src/engine.rs
git commit -m "feat(native): add error overlay engine methods

QmltsEngine gains show_error_overlay, hide_error_overlay, is_error_overlay_visible.
show_error_overlay sets qml_loaded=true if C++ creates error shell.
Add OverlayError variant to QmltsError enum.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 10: Add napi exports

**Files:**
- Modify: `native/crates/qmlts-host/src/exports.rs`

- [ ] **Step 1: Add napi exports**

In `native/crates/qmlts-host/src/exports.rs`, add after the `restore_snapshot` export (after line 836), before the tests module:

```rust
// ─────────────────────────────────────────────────────────────────────────
//  §9 Error Overlay
// ─────────────────────────────────────────────────────────────────────────

/// Show the error overlay with the given error text.
///
/// If no QML has been loaded, creates a minimal error shell window first.
///
/// @param engine - The engine instance.
/// @param text - Error text to display in the overlay.
#[napi(js_name = "showErrorOverlay")]
pub fn show_error_overlay(engine: &mut QmltsEngine, text: String) -> Result<()> {
    engine
        .inner
        .show_error_overlay(&text)
        .map_err(|e| -> napi::Error { e.into() })
}

/// Hide the error overlay.
///
/// @param engine - The engine instance.
#[napi(js_name = "hideErrorOverlay")]
pub fn hide_error_overlay(engine: &mut QmltsEngine) -> Result<()> {
    engine
        .inner
        .hide_error_overlay()
        .map_err(|e| -> napi::Error { e.into() })
}

/// Check whether the error overlay is currently visible.
///
/// @param engine - The engine instance.
/// @returns true if the overlay is visible.
#[napi(js_name = "isErrorOverlayVisible")]
pub fn is_error_overlay_visible(engine: &QmltsEngine) -> Result<bool> {
    engine
        .inner
        .is_error_overlay_visible()
        .map_err(|e| -> napi::Error { e.into() })
}
```

- [ ] **Step 2: Run cargo check with mock-qt and napi features**

Run: `cargo check -p qmlts-host --features "mock-qt,napi"`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add native/crates/qmlts-host/src/exports.rs
git commit -m "feat(native): add napi exports for error overlay

showErrorOverlay, hideErrorOverlay, isErrorOverlayVisible exposed to JS.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 11: Update @qmlts/host npm package

**Files:**
- Modify: `native/npm/qmlts-host/src/types.ts`
- Modify: `native/npm/qmlts-host/src/index.ts`
- Modify: `native/npm/qmlts-host/src/qmlts-host.ts`

- [ ] **Step 1: Add type declarations**

In `native/npm/qmlts-host/src/types.ts`, append at the end of the file (after the `restoreSnapshot` declaration):

```typescript

// ─── §9 Error Overlay ──────────────────────────────────────────

/**
 * Show the error overlay with the given error text.
 *
 * If no QML has been loaded, creates a minimal error shell window first.
 *
 * @param engine - The engine instance.
 * @param text - Error text to display in the overlay.
 */
export declare function showErrorOverlay(
	engine: QmltsEngine,
	text: string,
): void;

/**
 * Hide the error overlay.
 *
 * @param engine - The engine instance.
 */
export declare function hideErrorOverlay(engine: QmltsEngine): void;

/**
 * Check whether the error overlay is currently visible.
 *
 * @param engine - The engine instance.
 * @returns true if the overlay is visible.
 */
export declare function isErrorOverlayVisible(
	engine: QmltsEngine,
): boolean;
```

- [ ] **Step 2: Add to index.ts re-exports**

In `native/npm/qmlts-host/src/index.ts`, add to the `nativeModule` destructuring export (inside the `export const { ... } = nativeModule;` block), after `restoreSnapshot,`:

```typescript
	// Error overlay
	showErrorOverlay,
	hideErrorOverlay,
	isErrorOverlayVisible,
```

- [ ] **Step 3: Add wrapper methods to QmltsHost**

In `native/npm/qmlts-host/src/qmlts-host.ts`:

**A. Add imports** — add `showErrorOverlay`, `hideErrorOverlay`, `isErrorOverlayVisible` to the import destructuring from `'./index'`.

**B. Add methods** after the `restoreSnapshot` method (after the `§8 Hot Reload` section):

```typescript
	// ────────────────────────────────────────────────────────────────────
	//  §9 Error Overlay
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Show the error overlay with the given error text.
	 *
	 * If no QML has been loaded, creates a minimal error shell window first.
	 * The overlay is displayed on top of the current QML tree (or the error
	 * shell) and survives failed reload attempts.
	 *
	 * @param text - Error text to display.
	 */
	showErrorOverlay(text: string): void {
		const eng = this.requireEngine();
		showErrorOverlay(eng, text);
	}

	/**
	 * Hide the error overlay.
	 *
	 * Call this after a successful reload to dismiss the error display.
	 */
	hideErrorOverlay(): void {
		const eng = this.requireEngine();
		hideErrorOverlay(eng);
	}

	/**
	 * Check whether the error overlay is currently visible.
	 *
	 * @returns true if the overlay is visible.
	 */
	isErrorOverlayVisible(): boolean {
		const eng = this.requireEngine();
		return isErrorOverlayVisible(eng);
	}
```

- [ ] **Step 4: Commit**

```bash
git add native/npm/qmlts-host/src/types.ts native/npm/qmlts-host/src/index.ts native/npm/qmlts-host/src/qmlts-host.ts
git commit -m "feat(host): add error overlay methods to @qmlts/host package

Add showErrorOverlay, hideErrorOverlay, isErrorOverlayVisible to:
- types.ts (declarations)
- index.ts (native re-exports)
- qmlts-host.ts (QmltsHost wrapper methods)

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 12: Add Rust mock-qt tests

**Files:**
- Modify: `native/crates/qmlts-host/src/engine.rs` (tests module)

- [ ] **Step 1: Add overlay mock-qt tests**

Find the `#[cfg(test)]` module in `engine.rs` and add these tests:

```rust
    #[cfg(feature = "mock-qt")]
    #[test]
    fn show_error_overlay_sets_qml_loaded() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        assert!(!engine.qml_loaded);

        engine.show_error_overlay("Build failed").unwrap();

        assert!(engine.qml_loaded);
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn hide_error_overlay_succeeds() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.show_error_overlay("Error").unwrap();

        assert!(engine.hide_error_overlay().is_ok());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn is_error_overlay_visible_returns_false_by_default() {
        reset_app_initialized();
        let engine = QmltsEngine::new(None).unwrap();

        // Mock always returns false
        assert!(!engine.is_error_overlay_visible().unwrap());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn show_error_overlay_on_destroyed_engine_fails() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();
        engine.cleanup_qt_resources();

        assert!(engine.show_error_overlay("Error").is_err());
    }

    #[cfg(feature = "mock-qt")]
    #[test]
    fn show_error_overlay_enables_reload_qml() {
        reset_app_initialized();
        let mut engine = QmltsEngine::new(None).unwrap();

        // Before show, reload should fail (no QML loaded)
        assert!(engine.reload_qml("import QtQuick; Item {}", None).is_err());

        // After show, qml_loaded is true so reload should work
        engine.show_error_overlay("Build failed").unwrap();
        assert!(engine.reload_qml("import QtQuick; Item {}", None).is_ok());
    }
```

- [ ] **Step 2: Run cargo test with mock-qt**

Run: `cargo test -p qmlts-host --features mock-qt`
Expected: All tests PASS including new overlay tests.

- [ ] **Step 3: Run clippy**

Run: `cargo clippy -p qmlts-host --features mock-qt -- -D warnings`
Expected: No warnings.

- [ ] **Step 4: Commit**

```bash
git add native/crates/qmlts-host/src/engine.rs
git commit -m "test(native): add mock-qt tests for error overlay engine methods

Verify show sets qml_loaded, hide succeeds, visibility query works,
destroyed engine returns error, and show enables subsequent reload_qml.

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

---

## Task 13: Final validation and PR

**Files:** None (validation and git operations only)

- [ ] **Step 1: Run full TS test suite**

Run: `bun test tests/`
Expected: All tests PASS.

- [ ] **Step 2: Run typecheck**

Run: `bun run typecheck`
Expected: No errors.

- [ ] **Step 3: Run biome format and check**

Run: `bunx biome format --write src/ tests/ && bunx biome check --fix src/ tests/`
Expected: Files formatted, no remaining issues.

- [ ] **Step 4: Run Rust checks**

Run: `cargo clippy -p qmlts-host --features mock-qt -- -D warnings && cargo test -p qmlts-host --features mock-qt`
Expected: No warnings, all tests pass.

- [ ] **Step 5: Stage and commit any formatting fixes**

```bash
git add -A
git diff --cached --stat
# If there are formatting changes:
git commit -m "style: apply biome formatting

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
```

- [ ] **Step 6: Push and open PR**

```bash
git push -u origin step-9/part-2-error-overlay
```

Open PR with title: `feat: Step 9 Part 2 — Error Overlay and failure fallback path`

PR body should reference the spec and summarize:
- C++ overlay with engine-scoped state and QPointer safety
- Rust FFI + engine methods + napi exports
- @qmlts/host npm package wrapper methods
- TS ErrorOverlay abstraction + DevServer event wiring
- Only hides on runtime (hot-reload) success, not compile success
- Startup failure path creates error shell window
- Full test coverage across both layers
