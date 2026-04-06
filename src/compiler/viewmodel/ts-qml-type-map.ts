const TS_TO_QML_MAP: Record<string, string> = {
  string: 'string',
  number: 'real',
  boolean: 'bool',
  void: 'void',
  Date: 'date',
  'string[]': 'list<string>',
  'number[]': 'list<real>',
  'boolean[]': 'list<bool>',
};

export function mapTsTypeToQml(tsType: string): string | undefined {
  return TS_TO_QML_MAP[tsType];
}
