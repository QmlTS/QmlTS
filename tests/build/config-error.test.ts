import { describe, expect, test } from 'bun:test';
import { ConfigError } from '../../src/build/config-error.js';

describe('ConfigError', () => {
  test('BC-01: carries field and value context', () => {
    const err = new ConfigError('entry', '/bad/path', 'Entry file does not exist');
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(ConfigError);
    expect(err.field).toBe('entry');
    expect(err.value).toBe('/bad/path');
    expect(err.message).toBe('Entry file does not exist');
    expect(err.name).toBe('ConfigError');
  });

  test('BC-02: carries undefined value', () => {
    const err = new ConfigError('qt.dir', undefined, 'Qt directory is required');
    expect(err.field).toBe('qt.dir');
    expect(err.value).toBeUndefined();
  });

  test('BC-03: carries complex value', () => {
    const err = new ConfigError('qt.modules', ['Not.A.Module'], 'Invalid Qt module name');
    expect(err.field).toBe('qt.modules');
    expect(err.value).toEqual(['Not.A.Module']);
  });

  test('BC-04: message includes field context', () => {
    const err = new ConfigError('build.concurrency', -1, 'Concurrency must be positive');
    expect(err.message).toContain('Concurrency must be positive');
  });
});
