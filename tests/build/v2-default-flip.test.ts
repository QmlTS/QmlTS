import { afterEach, describe, expect, test } from 'bun:test';
import { applyDefaults, DEFAULT_RUNTIME } from '../../src/build/config-defaults.js';
import type { QmltsConfig } from '../../src/build/config-types.js';
import { resetDeprecationWarnings, validateConfig } from '../../src/build/config-validator.js';

describe('V2 Default Flip', () => {
  afterEach(() => {
    resetDeprecationWarnings();
  });

  test('DF-01: DEFAULT_RUNTIME is v2', () => {
    expect(DEFAULT_RUNTIME).toBe('v2');
  });

  test('DF-02: Empty config resolves to V2 runtime', () => {
    const resolved = applyDefaults({}, '/project');
    expect(resolved.runtime).toBe('v2');
  });

  test('DF-03: Empty config does not require module at config validation time', () => {
    expect(() => validateConfig({})).not.toThrow();
  });

  test('DF-04: Explicit V2 without module throws at config validation', () => {
    const config: QmltsConfig = { runtime: 'v2' };
    expect(() => validateConfig(config)).toThrow();
  });

  test('DF-05: Explicit V1 config is accepted without module', () => {
    const config: QmltsConfig = { runtime: 'v1' };
    expect(() => validateConfig(config)).not.toThrow();
    const resolved = applyDefaults(config, '/project');
    expect(resolved.runtime).toBe('v1');
  });

  test('DF-06: V1 deprecation warning is emitted once per process', () => {
    const warnings: string[] = [];
    const origWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      warnings.push(args.map(String).join(' '));
    };

    try {
      // First call: should emit warning
      validateConfig({ runtime: 'v1' });
      expect(warnings).toHaveLength(1);
      expect(warnings[0]).toContain('V1 runtime is deprecated');

      // Second call: should NOT emit warning again
      validateConfig({ runtime: 'v1' });
      expect(warnings).toHaveLength(1);
    } finally {
      console.warn = origWarn;
    }
  });

  test('DF-07: resetDeprecationWarnings allows warning to fire again', () => {
    const warnings: string[] = [];
    const origWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      warnings.push(args.map(String).join(' '));
    };

    try {
      validateConfig({ runtime: 'v1' });
      expect(warnings).toHaveLength(1);

      resetDeprecationWarnings();
      validateConfig({ runtime: 'v1' });
      expect(warnings).toHaveLength(2);
    } finally {
      console.warn = origWarn;
    }
  });

  test('DF-08: No deprecation warning when runtime is not explicitly v1', () => {
    const warnings: string[] = [];
    const origWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      warnings.push(args.map(String).join(' '));
    };

    try {
      // Default (no runtime specified) should not emit warning
      validateConfig({});
      expect(warnings).toHaveLength(0);

      // Explicit V2 should not emit warning
      validateConfig({
        runtime: 'v2',
        module: { prefix: 'Test', version: { major: 1, minor: 0 } },
      });
      expect(warnings).toHaveLength(0);
    } finally {
      console.warn = origWarn;
    }
  });
});
