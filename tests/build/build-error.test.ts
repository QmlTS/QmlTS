import { describe, expect, test } from 'bun:test';
import { BuildError } from '../../src/build/build-error.js';
import type { Diagnostic } from '../../src/compiler/diagnostics.js';

describe('BuildError', () => {
  test('BP-03: carries phase context', () => {
    const err = new BuildError('compiling-ts', [], 'Compilation failed');
    expect(err.phase).toBe('compiling-ts');
    expect(err.diagnostics).toEqual([]);
    expect(err.message).toBe('Compilation failed');
    expect(err.name).toBe('BuildError');
    expect(err).toBeInstanceOf(Error);
  });

  test('BP-04: carries diagnostics array', () => {
    const diags: Diagnostic[] = [{ severity: 'error', code: 'QMLTS-G001', message: 'fail' }];
    const err = new BuildError('validating-qml', diags, 'Validation failed');
    expect(err.diagnostics).toHaveLength(1);
    expect(err.diagnostics[0]!.code).toBe('QMLTS-G001');
  });

  test('BP-05: message includes phase context', () => {
    const err = new BuildError('writing-output', [], 'Write error');
    expect(err.message).toContain('Write error');
  });
});
