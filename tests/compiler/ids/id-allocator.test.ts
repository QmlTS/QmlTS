import { describe, expect, test } from 'bun:test';
import { createIdAllocator } from '../../../src/compiler/ids/id-allocator.js';

describe('IdAllocator', () => {
  test('ID-01: allocateMemberId first call returns 0', () => {
    const alloc = createIdAllocator();
    expect(alloc.allocateMemberId('MyVM', 'name')).toBe(0);
  });

  test('ID-02: allocateMemberId second field returns 1', () => {
    const alloc = createIdAllocator();
    alloc.allocateMemberId('MyVM', 'name');
    expect(alloc.allocateMemberId('MyVM', 'count')).toBe(1);
  });

  test('ID-03: allocateMemberId same field twice returns same ID', () => {
    const alloc = createIdAllocator();
    const first = alloc.allocateMemberId('MyVM', 'name');
    const second = alloc.allocateMemberId('MyVM', 'name');
    expect(first).toBe(0);
    expect(second).toBe(0);
  });

  test('ID-04: allocateCommandId returns unique positive integer', () => {
    const alloc = createIdAllocator();
    const id = alloc.allocateCommandId('MyVM', 'login');
    expect(id).toBeGreaterThan(0);
    expect(Number.isInteger(id)).toBe(true);
  });

  test('ID-05: allocateEffectId returns unique positive integer', () => {
    const alloc = createIdAllocator();
    const id = alloc.allocateEffectId('MyVM', 'notify');
    expect(id).toBeGreaterThan(0);
    expect(Number.isInteger(id)).toBe(true);
  });

  test('ID-06: allocateObjectId returns lowercase_1', () => {
    const alloc = createIdAllocator();
    expect(alloc.allocateObjectId('Text')).toBe('text_1');
  });

  test('ID-07: allocateObjectId second call returns lowercase_2', () => {
    const alloc = createIdAllocator();
    alloc.allocateObjectId('Text');
    expect(alloc.allocateObjectId('Text')).toBe('text_2');
  });

  test('ID-08: snapshot + restore preserves IDs', () => {
    const alloc = createIdAllocator();
    const memberId = alloc.allocateMemberId('MyVM', 'name');
    const commandId = alloc.allocateCommandId('MyVM', 'login');
    const effectId = alloc.allocateEffectId('MyVM', 'notify');
    alloc.allocateObjectId('Text');

    const snap = alloc.snapshot();

    const alloc2 = createIdAllocator();
    alloc2.restore(snap);

    expect(alloc2.allocateMemberId('MyVM', 'name')).toBe(memberId);
    expect(alloc2.allocateCommandId('MyVM', 'login')).toBe(commandId);
    expect(alloc2.allocateEffectId('MyVM', 'notify')).toBe(effectId);
    // objectId counter continues from restored state
    expect(alloc2.allocateObjectId('Text')).toBe('text_2');
  });

  test('ID-09: different classes same method name get different commandIds', () => {
    const alloc = createIdAllocator();
    const id1 = alloc.allocateCommandId('LoginVM', 'submit');
    const id2 = alloc.allocateCommandId('RegisterVM', 'submit');
    expect(id1).not.toBe(id2);
  });

  test('ID-10: hash collision resolution produces distinct IDs', () => {
    const alloc = createIdAllocator();
    // Allocate many keys and verify all IDs are unique.
    const ids = new Set<number>();
    for (let i = 0; i < 100; i++) {
      const id = alloc.allocateCommandId('VM', `method${i}`);
      expect(ids.has(id)).toBe(false);
      ids.add(id);
    }
    // Also verify command and effect IDs don't collide (shared namespace)
    const effectId = alloc.allocateEffectId('VM', 'signal0');
    for (const cmdId of ids) {
      expect(effectId).not.toBe(cmdId);
    }
  });
});
