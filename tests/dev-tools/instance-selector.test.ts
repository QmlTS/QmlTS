import { describe, expect, test } from 'bun:test';
import type { InstanceSlotInfo } from '../../src/dev-tools/dev-types.js';
import {
  isSelectorError,
  parseInstanceSelector,
  resolveInstanceSelector,
} from '../../src/dev-tools/instance-selector.js';

const SLOTS: InstanceSlotInfo[] = [
  {
    instanceId: 0,
    className: 'LoginViewModel',
    compilerSlotKey: 'login-slot',
    properties: { username: '', password: '' },
  },
  {
    instanceId: 1,
    className: 'LoginViewModel',
    compilerSlotKey: 'login-slot-2',
    properties: { username: 'admin', password: '' },
  },
  {
    instanceId: 2,
    className: 'CounterViewModel',
    compilerSlotKey: 'counter-slot',
    properties: { count: 0 },
  },
];

describe('InstanceSelector', () => {
  // ─── SEL-01: Parse #<id> ────────────────────────────────
  test('SEL-01: parse #42 → byId', () => {
    const sel = parseInstanceSelector('#42');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byId');
      if (sel.type === 'byId') expect(sel.instanceId).toBe(42);
    }
  });

  // ─── SEL-02: Parse @ClassName ───────────────────────────
  test('SEL-02: parse @LoginViewModel → byClass', () => {
    const sel = parseInstanceSelector('@LoginViewModel');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byClass');
      if (sel.type === 'byClass') expect(sel.className).toBe('LoginViewModel');
    }
  });

  // ─── SEL-03: Parse @ClassName#slotKey ───────────────────
  test('SEL-03: parse @LoginViewModel#login-slot → byClassAndSlot', () => {
    const sel = parseInstanceSelector('@LoginViewModel#login-slot');
    expect(isSelectorError(sel)).toBe(false);
    if (!isSelectorError(sel)) {
      expect(sel.type).toBe('byClassAndSlot');
      if (sel.type === 'byClassAndSlot') {
        expect(sel.className).toBe('LoginViewModel');
        expect(sel.slotKey).toBe('login-slot');
      }
    }
  });

  // ─── SEL-04: Invalid syntax ─────────────────────────────
  test('SEL-04: invalid syntax → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('foobar');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) {
      expect(sel.code).toBe('SELECTOR_INVALID');
    }
  });

  test('SEL-04b: empty selector → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) expect(sel.code).toBe('SELECTOR_INVALID');
  });

  test('SEL-04c: negative id → SELECTOR_INVALID', () => {
    const sel = parseInstanceSelector('#-5');
    expect(isSelectorError(sel)).toBe(true);
    if (isSelectorError(sel)) expect(sel.code).toBe('SELECTOR_INVALID');
  });

  // ─── SEL-05: Ambiguous class ────────────────────────────
  test('SEL-05: ambiguous class → SELECTOR_AMBIGUOUS', () => {
    const sel = parseInstanceSelector('@LoginViewModel');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_AMBIGUOUS');
      }
    }
  });

  // ─── SEL-06: Unknown instance ───────────────────────────
  test('SEL-06: unknown instance → SELECTOR_INSTANCE_NOT_FOUND', () => {
    const sel = parseInstanceSelector('#999');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_INSTANCE_NOT_FOUND');
      }
    }
  });

  // ─── SEL-07: Unknown slotKey ────────────────────────────
  test('SEL-07: unknown slotKey → SELECTOR_SLOT_NOT_FOUND', () => {
    const sel = parseInstanceSelector('@LoginViewModel#no-such-slot');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(typeof result).toBe('object');
      if (typeof result === 'object') {
        expect(result.code).toBe('SELECTOR_SLOT_NOT_FOUND');
      }
    }
  });

  // ─── SEL-08: Successful resolution ──────────────────────
  test('SEL-08: resolve @LoginViewModel#login-slot → instanceId 0', () => {
    const sel = parseInstanceSelector('@LoginViewModel#login-slot');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(0);
    }
  });

  test('SEL-08b: resolve unique class → instanceId', () => {
    const sel = parseInstanceSelector('@CounterViewModel');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(2);
    }
  });

  test('SEL-08c: resolve #2 → instanceId 2', () => {
    const sel = parseInstanceSelector('#2');
    if (!isSelectorError(sel)) {
      const result = resolveInstanceSelector(sel, SLOTS);
      expect(result).toBe(2);
    }
  });
});
