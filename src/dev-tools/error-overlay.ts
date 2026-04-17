import type { Diagnostic } from '../compiler/diagnostics.js';
import type {
  ErrorOverlay,
  ErrorOverlayOptions,
  InstanceContext,
  OverlayError,
} from './dev-types.js';

export function formatOverlayErrors(
  errors: readonly OverlayError[],
  instanceContext?: InstanceContext,
): string {
  if (errors.length === 0) {
    return 'Unknown error';
  }

  const parts: string[] = [];

  if (instanceContext) {
    parts.push(`[${instanceContext.className}#${instanceContext.instanceId}]`);
    parts.push('');
  }

  for (let i = 0; i < errors.length; i++) {
    const err = errors[i]!;
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
