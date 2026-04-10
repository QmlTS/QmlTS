import { describe, expect, test } from 'bun:test';
import { BUILD_PHASES } from '../../src/build/build-types.js';

describe('BuildPhase', () => {
  test('BP-01: BUILD_PHASES contains all 9 phases in order', () => {
    expect(BUILD_PHASES).toEqual([
      'loading-config',
      'discovering-qt',
      'compiling-ts',
      'collecting-deps',
      'bundling-assets',
      'validating-qml',
      'preparing-host',
      'writing-output',
      'done',
    ]);
  });

  test('BP-02: BUILD_PHASES is frozen', () => {
    expect(Object.isFrozen(BUILD_PHASES)).toBe(true);
  });
});
