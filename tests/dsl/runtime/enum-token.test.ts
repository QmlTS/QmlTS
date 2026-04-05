import { describe, expect, test } from 'bun:test';
import type { QmlEnumToken } from '../../../src/dsl/runtime/enum-token.js';
import { createEnumToken, isEnumToken } from '../../../src/dsl/runtime/enum-token.js';

describe('QmlEnumToken', () => {
  test('ET-01: createEnumToken returns branded token with correct fields', () => {
    const token = createEnumToken('Text', 'HorizontalAlignment', 'AlignLeft');
    expect(token.__brand).toBe('QmlEnumToken');
    expect(token.owner).toBe('Text');
    expect(token.enumName).toBe('HorizontalAlignment');
    expect(token.member).toBe('AlignLeft');
  });

  test('ET-02: tokens with different values are distinct objects', () => {
    const a = createEnumToken('Text', 'HorizontalAlignment', 'AlignLeft');
    const b = createEnumToken('Text', 'HorizontalAlignment', 'AlignRight');
    expect(a).not.toBe(b);
    expect(a.member).not.toBe(b.member);
  });

  test('ET-03: isEnumToken returns true for valid token', () => {
    const token = createEnumToken('Item', 'TransformOrigin', 'Center');
    expect(isEnumToken(token)).toBe(true);
  });

  test('ET-04: isEnumToken returns false for plain object', () => {
    expect(isEnumToken({ owner: 'X', enumName: 'Y', member: 'Z' })).toBe(false);
    expect(isEnumToken(null)).toBe(false);
    expect(isEnumToken(42)).toBe(false);
    expect(isEnumToken('AlignLeft')).toBe(false);
  });

  test('ET-05: token is frozen/immutable', () => {
    const token = createEnumToken('Qt', 'Alignment', 'AlignCenter');
    expect(Object.isFrozen(token)).toBe(true);
  });

  test('ET-06: scoped enum token preserves metadata', () => {
    const token = createEnumToken('Image', 'FillMode', 'PreserveAspectFit');
    expect(token.owner).toBe('Image');
    expect(token.enumName).toBe('FillMode');
    expect(token.member).toBe('PreserveAspectFit');
  });

  test('ET-07: flag enum token preserves metadata', () => {
    const token = createEnumToken('Qt', 'Alignment', 'AlignTop');
    expect(token.__brand).toBe('QmlEnumToken');
    expect(token.owner).toBe('Qt');
  });

  test('ET-08: type narrowing works with generic params', () => {
    const token: QmlEnumToken<'Text', 'HorizontalAlignment', 'AlignLeft'> = createEnumToken(
      'Text',
      'HorizontalAlignment',
      'AlignLeft',
    );
    const _owner: 'Text' = token.owner;
    const _enum: 'HorizontalAlignment' = token.enumName;
    const _member: 'AlignLeft' = token.member;
    expect(_owner).toBe('Text');
    expect(_enum).toBe('HorizontalAlignment');
    expect(_member).toBe('AlignLeft');
  });
});
