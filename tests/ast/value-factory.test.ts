import { describe, expect, test } from 'bun:test';
import { toBindingValue, v } from '../../src/ast/values.js';

describe('ValueFactory', () => {
  // VF-01
  test('v.num(42) creates NumberLiteral', () => {
    const result = v.num(42);
    expect(result).toEqual({ kind: 'number', value: 42 });
  });

  // VF-02
  test('v.num(0.5) creates float NumberLiteral', () => {
    const result = v.num(0.5);
    expect(result).toEqual({ kind: 'number', value: 0.5 });
  });

  // VF-03
  test('v.str("hello") creates StringLiteral', () => {
    const result = v.str('hello');
    expect(result).toEqual({ kind: 'string', value: 'hello' });
  });

  // VF-04
  test('v.str with single quote', () => {
    const result = v.str("it's", "'");
    expect(result).toEqual({ kind: 'string', value: "it's", quote: "'" });
  });

  // VF-05
  test('v.bool(true) creates BooleanLiteral', () => {
    const result = v.bool(true);
    expect(result).toEqual({ kind: 'boolean', value: true });
  });

  // VF-06
  test('v.bool(false) creates BooleanLiteral', () => {
    const result = v.bool(false);
    expect(result).toEqual({ kind: 'boolean', value: false });
  });

  // VF-07
  test('v.nil() creates NullLiteral', () => {
    const result = v.nil();
    expect(result).toEqual({ kind: 'null' });
  });

  // VF-08
  test('v.enumRef creates EnumReference', () => {
    const result = v.enumRef('Text', 'WordWrap');
    expect(result).toEqual({ kind: 'enum', typeName: 'Text', valueName: 'WordWrap' });
  });

  // VF-09
  test('v.enumRef with enumName', () => {
    const result = v.enumRef('Qt', 'AlignHCenter', 'Alignment');
    expect(result).toEqual({
      kind: 'enum',
      typeName: 'Qt',
      enumName: 'Alignment',
      valueName: 'AlignHCenter',
    });
  });

  // VF-10
  test('v.expr creates ScriptExpression', () => {
    const result = v.expr('parent.width * 0.5');
    expect(result).toEqual({ kind: 'expression', code: 'parent.width * 0.5' });
  });

  // VF-11
  test('v.block creates ScriptBlock', () => {
    const result = v.block("count++\nconsole.log('done')");
    expect(result).toEqual({ kind: 'script-block', code: "count++\nconsole.log('done')" });
  });
});

describe('toBindingValue', () => {
  test('converts number to NumberLiteral', () => {
    expect(toBindingValue(42)).toEqual({ kind: 'number', value: 42 });
  });

  test('converts boolean to BooleanLiteral', () => {
    expect(toBindingValue(true)).toEqual({ kind: 'boolean', value: true });
  });

  test('converts null to NullLiteral', () => {
    expect(toBindingValue(null)).toEqual({ kind: 'null' });
  });

  test('passes BindingValue through unchanged', () => {
    const expr = v.expr('parent.width');
    expect(toBindingValue(expr)).toBe(expr);
  });
});
