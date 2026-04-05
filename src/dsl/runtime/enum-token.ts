/**
 * Opaque branded token representing a QML enum member.
 * Carries metadata for compiler lowering to AST EnumReference nodes.
 * Users consume these as static members on type symbols (e.g., Text.AlignLeft).
 */
export interface QmlEnumToken<
  TOwner extends string = string,
  TEnum extends string = string,
  TMember extends string = string,
> {
  readonly __brand: 'QmlEnumToken';
  readonly owner: TOwner;
  readonly enumName: TEnum;
  readonly member: TMember;
}

/**
 * Internal factory — used by generated code only.
 * End users should never call this directly.
 */
export function createEnumToken<O extends string, E extends string, M extends string>(
  owner: O,
  enumName: E,
  member: M,
): QmlEnumToken<O, E, M> {
  return Object.freeze({
    __brand: 'QmlEnumToken' as const,
    owner,
    enumName,
    member,
  });
}

/** Runtime type guard for QmlEnumToken values. */
export function isEnumToken(value: unknown): value is QmlEnumToken {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as Record<string, unknown>)['__brand'] === 'QmlEnumToken' &&
    typeof (value as Record<string, unknown>)['owner'] === 'string' &&
    typeof (value as Record<string, unknown>)['enumName'] === 'string' &&
    typeof (value as Record<string, unknown>)['member'] === 'string'
  );
}
