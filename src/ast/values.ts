import type {
  BindableValue,
  BindingValue,
  BooleanLiteral,
  EnumReference,
  NullLiteral,
  NumberLiteral,
  ScriptBlock,
  ScriptExpression,
  StringLiteral,
  ValueFactory,
} from './types.js';

/** Convert a BindableValue (number | boolean | null | BindingValue) to a BindingValue. */
export function toBindingValue(value: BindableValue): BindingValue {
  if (value === null) return { kind: 'null' };
  if (typeof value === 'number') return { kind: 'number', value };
  if (typeof value === 'boolean') return { kind: 'boolean', value };
  return value;
}

/** Value factory singleton — convenience constructors for BindingValue variants. */
export const v: ValueFactory = {
  num(value: number): NumberLiteral {
    return { kind: 'number', value };
  },

  str(value: string, quote?: '"' | "'"): StringLiteral {
    const result: StringLiteral = { kind: 'string', value };
    if (quote) result.quote = quote;
    return result;
  },

  bool(value: boolean): BooleanLiteral {
    return { kind: 'boolean', value };
  },

  nil(): NullLiteral {
    return { kind: 'null' };
  },

  enumRef(typeName: string, valueName: string, enumName?: string): EnumReference {
    const result: EnumReference = { kind: 'enum', typeName, valueName };
    if (enumName !== undefined) result.enumName = enumName;
    return result;
  },

  expr(code: string): ScriptExpression {
    return { kind: 'expression', code };
  },

  block(code: string): ScriptBlock {
    return { kind: 'script-block', code };
  },
};
