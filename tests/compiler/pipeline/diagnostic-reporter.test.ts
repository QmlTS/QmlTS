import { describe, expect, test } from 'bun:test';
import type { Diagnostic } from '../../../src/compiler/diagnostics.js';
import { createDiagnosticReporter } from '../../../src/compiler/pipeline/diagnostic-reporter.js';

describe('DiagnosticReporter', () => {
  // DG-01: reporter.error() → hasErrors()=true
  test('DG-01: error() makes hasErrors() return true', () => {
    const reporter = createDiagnosticReporter();
    expect(reporter.hasErrors()).toBe(false);
    reporter.error('QMLTS-T001', 'Unknown type');
    expect(reporter.hasErrors()).toBe(true);
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(1);
    expect(diags[0]!.severity).toBe('error');
    expect(diags[0]!.code).toBe('QMLTS-T001');
    expect(diags[0]!.message).toBe('Unknown type');
  });

  // DG-02: reporter.warning() → hasErrors()=false
  test('DG-02: warning() does not make hasErrors() return true', () => {
    const reporter = createDiagnosticReporter();
    reporter.warning('QMLTS-A001', 'No @State fields');
    expect(reporter.hasErrors()).toBe(false);
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(1);
    expect(diags[0]!.severity).toBe('warning');
  });

  // DG-03: formatText → readable error message
  test('DG-03: formatText produces readable output', () => {
    const reporter = createDiagnosticReporter();
    reporter.error('QMLTS-T001', 'Unknown QML type "Foo"', {
      line: 10,
      column: 5,
      file: 'src/view.ts',
    });
    const text = reporter.formatText();
    expect(text).toContain('QMLTS-T001');
    expect(text).toContain('Unknown QML type "Foo"');
    expect(text).toContain('src/view.ts');
    expect(text).toContain('10');
  });

  // DG-04: formatJson → valid JSON
  test('DG-04: formatJson produces valid JSON', () => {
    const reporter = createDiagnosticReporter();
    reporter.error('QMLTS-A003', 'Cannot map type');
    reporter.warning('QMLTS-A001', 'No states');
    const json = reporter.formatJson();
    const parsed = JSON.parse(json);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBe(2);
    expect(parsed[0].code).toBe('QMLTS-A003');
    expect(parsed[1].code).toBe('QMLTS-A001');
  });

  // DG-05: suppress code → suppressed diagnostic not in output
  test('DG-05: suppress filters out specified diagnostic codes', () => {
    const reporter = createDiagnosticReporter({
      suppress: ['QMLTS-A001'],
    });
    reporter.warning('QMLTS-A001', 'Suppressed warning');
    reporter.error('QMLTS-T001', 'Kept error');
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(1);
    expect(diags[0]!.code).toBe('QMLTS-T001');
  });

  // DG-06: warningsAsErrors → warning becomes error
  test('DG-06: warningsAsErrors escalates warnings to errors', () => {
    const reporter = createDiagnosticReporter({ warningsAsErrors: true });
    reporter.warning('QMLTS-A001', 'Now an error');
    expect(reporter.hasErrors()).toBe(true);
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(1);
    expect(diags[0]!.severity).toBe('error');
  });

  // DG-07: maxErrors limit → stops collecting after limit
  test('DG-07: maxErrors limits error collection', () => {
    const reporter = createDiagnosticReporter({ maxErrors: 3 });
    for (let i = 0; i < 10; i++) {
      reporter.error('QMLTS-T001', `Error ${i}`);
    }
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(3);
  });

  // DG-08: relatedInformation included
  test('DG-08: report() with relatedInformation preserves it', () => {
    const reporter = createDiagnosticReporter();
    const diag: Diagnostic = {
      severity: 'error',
      code: 'QMLTS-P001',
      message: 'Duplicate id "root"',
      file: 'view.ts',
      line: 5,
      relatedInformation: [
        {
          message: 'First defined here',
          file: 'view.ts',
          line: 2,
          column: 0,
        },
      ],
    };
    reporter.report(diag);
    const diags = reporter.getDiagnostics();
    expect(diags[0]!.relatedInformation).toBeDefined();
    expect(diags[0]!.relatedInformation!.length).toBe(1);
    expect(diags[0]!.relatedInformation![0]!.message).toBe('First defined here');
  });

  // Additional: clear() resets state
  test('clear() removes all diagnostics', () => {
    const reporter = createDiagnosticReporter();
    reporter.error('QMLTS-T001', 'Error');
    reporter.warning('QMLTS-A001', 'Warning');
    expect(reporter.getDiagnostics().length).toBe(2);
    reporter.clear();
    expect(reporter.getDiagnostics().length).toBe(0);
    expect(reporter.hasErrors()).toBe(false);
  });

  // Additional: info() severity
  test('info() creates info-level diagnostic', () => {
    const reporter = createDiagnosticReporter();
    reporter.info('QMLTS-G003', 'Internal info');
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(1);
    expect(diags[0]!.severity).toBe('info');
  });

  // Bulk report from mixed pipeline phases
  test('report() accepts diagnostics from multiple pipeline phases', () => {
    const reporter = createDiagnosticReporter();
    reporter.report({
      severity: 'error',
      code: 'QMLTS-A003',
      message: 'Analyzer error',
    });
    reporter.report({
      severity: 'warning',
      code: 'QMLTS-T002',
      message: 'Transform warning',
    });
    reporter.report({
      severity: 'error',
      code: 'QMLTS-P001',
      message: 'PostProcess error',
    });
    reporter.report({
      severity: 'info',
      code: 'QMLTS-C001',
      message: 'Codegen info',
    });
    const diags = reporter.getDiagnostics();
    expect(diags.length).toBe(4);
    expect(reporter.hasErrors()).toBe(true);
  });

  // maxErrors only counts errors, not warnings
  test('maxErrors only limits error count, warnings still collected', () => {
    const reporter = createDiagnosticReporter({ maxErrors: 1 });
    reporter.error('QMLTS-T001', 'First error');
    reporter.warning('QMLTS-A001', 'A warning');
    reporter.error('QMLTS-T002', 'Second error (dropped)');
    reporter.warning('QMLTS-A002', 'Another warning');
    const diags = reporter.getDiagnostics();
    const errors = diags.filter((d) => d.severity === 'error');
    const warnings = diags.filter((d) => d.severity === 'warning');
    expect(errors.length).toBe(1);
    expect(warnings.length).toBe(2);
  });

  // formatText with no diagnostics
  test("formatText returns 'No diagnostics.' when empty", () => {
    const reporter = createDiagnosticReporter();
    expect(reporter.formatText()).toBe('No diagnostics.');
  });
});
