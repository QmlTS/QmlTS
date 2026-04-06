import { describe, expect, test } from 'bun:test';
import { mapTsTypeToQml } from '../../../src/compiler/viewmodel/ts-qml-type-map.js';

describe('TsQmlTypeMap', () => {
  test('maps string to string', () => {
    expect(mapTsTypeToQml('string')).toBe('string');
  });

  test('maps number to real', () => {
    expect(mapTsTypeToQml('number')).toBe('real');
  });

  test('maps boolean to bool', () => {
    expect(mapTsTypeToQml('boolean')).toBe('bool');
  });

  test('maps void to void', () => {
    expect(mapTsTypeToQml('void')).toBe('void');
  });

  test('maps Date to date', () => {
    expect(mapTsTypeToQml('Date')).toBe('date');
  });

  test('maps string[] to list<string>', () => {
    expect(mapTsTypeToQml('string[]')).toBe('list<string>');
  });

  test('maps number[] to list<real>', () => {
    expect(mapTsTypeToQml('number[]')).toBe('list<real>');
  });

  test('maps boolean[] to list<bool>', () => {
    expect(mapTsTypeToQml('boolean[]')).toBe('list<bool>');
  });

  test('returns undefined for unmappable types', () => {
    expect(mapTsTypeToQml('Map<string, number>')).toBeUndefined();
    expect(mapTsTypeToQml('SomeCustomClass')).toBeUndefined();
    expect(mapTsTypeToQml('object')).toBeUndefined();
  });
});
