import type { Diagnostic, DiagnosticCode } from '../diagnostics.js';
import type { SourceLocation } from '../transform/transform-types.js';
import type { DiagnosticOptions, DiagnosticReporter } from './pipeline-types.js';

export function createDiagnosticReporter(options?: DiagnosticOptions): DiagnosticReporter {
  const diagnostics: Diagnostic[] = [];
  const suppressSet = new Set<DiagnosticCode>(options?.suppress);
  const warningsAsErrors = options?.warningsAsErrors ?? false;
  const maxErrors = options?.maxErrors ?? Number.POSITIVE_INFINITY;
  let errorCount = 0;

  function addDiagnostic(diagnostic: Diagnostic): void {
    let severity = diagnostic.severity;
    if (warningsAsErrors && severity === 'warning') {
      severity = 'error';
    }
    if (suppressSet.has(diagnostic.code)) return;
    if (severity === 'error' && errorCount >= maxErrors) return;

    const effective = { ...diagnostic, severity };
    if (severity === 'error') errorCount++;
    diagnostics.push(effective);
  }

  return {
    report(diagnostic: Diagnostic): void {
      addDiagnostic(diagnostic);
    },

    error(code: DiagnosticCode, message: string, location?: SourceLocation): void {
      addDiagnostic({
        severity: 'error',
        code,
        message,
        file: location?.file,
        line: location?.line,
        column: location?.column,
      });
    },

    warning(code: DiagnosticCode, message: string, location?: SourceLocation): void {
      addDiagnostic({
        severity: 'warning',
        code,
        message,
        file: location?.file,
        line: location?.line,
        column: location?.column,
      });
    },

    info(code: DiagnosticCode, message: string, location?: SourceLocation): void {
      addDiagnostic({
        severity: 'info',
        code,
        message,
        file: location?.file,
        line: location?.line,
        column: location?.column,
      });
    },

    getDiagnostics(): readonly Diagnostic[] {
      return diagnostics;
    },

    hasErrors(): boolean {
      return diagnostics.some((d) => d.severity === 'error');
    },

    formatText(): string {
      if (diagnostics.length === 0) return 'No diagnostics.';
      return diagnostics
        .map((d) => {
          const loc = d.file ? `${d.file}:${d.line ?? 0}:${d.column ?? 0}` : '';
          const prefix = d.severity.toUpperCase();
          return loc
            ? `${prefix} ${d.code}: ${d.message} (${loc})`
            : `${prefix} ${d.code}: ${d.message}`;
        })
        .join('\n');
    },

    formatJson(): string {
      return JSON.stringify(diagnostics, null, 2);
    },

    clear(): void {
      diagnostics.length = 0;
      errorCount = 0;
    },
  };
}
