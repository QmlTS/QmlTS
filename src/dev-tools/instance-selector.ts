import type { InstanceSlotInfo } from './dev-types.js';

// ─── Selector Types ─────────────────────────────────────────

export type SelectorErrorCode =
  | 'SELECTOR_INVALID'
  | 'SELECTOR_INSTANCE_NOT_FOUND'
  | 'SELECTOR_CLASS_NOT_FOUND'
  | 'SELECTOR_AMBIGUOUS'
  | 'SELECTOR_SLOT_NOT_FOUND';

export interface SelectorError {
  readonly code: SelectorErrorCode;
  readonly message: string;
}

export type InstanceSelectorKind =
  | { readonly type: 'byId'; readonly instanceId: number }
  | { readonly type: 'byClass'; readonly className: string }
  | { readonly type: 'byClassAndSlot'; readonly className: string; readonly slotKey: string };

export type InstanceSelector = InstanceSelectorKind;

// ─── Parsing ────────────────────────────────────────────────

/**
 * Parse an instance selector string into a structured selector.
 *
 * Grammar:
 * - `#<instanceId>` — by numeric instance ID
 * - `@<className>` — by class name
 * - `@<className>#<slotKey>` — by class name + compiler slot key
 */
export function parseInstanceSelector(input: string): InstanceSelector | SelectorError {
  const trimmed = input.trim();

  if (trimmed.startsWith('#')) {
    const idStr = trimmed.slice(1);
    const id = Number.parseInt(idStr, 10);
    if (Number.isNaN(id) || id < 0 || String(id) !== idStr) {
      return { code: 'SELECTOR_INVALID', message: `Invalid instance ID: '${idStr}'` };
    }
    return { type: 'byId', instanceId: id };
  }

  if (trimmed.startsWith('@')) {
    const rest = trimmed.slice(1);
    const hashIdx = rest.indexOf('#');
    if (hashIdx === -1) {
      const className = rest;
      if (!className || /\s/.test(className)) {
        return { code: 'SELECTOR_INVALID', message: `Invalid class name: '${className}'` };
      }
      return { type: 'byClass', className };
    }
    const className = rest.slice(0, hashIdx);
    const slotKey = rest.slice(hashIdx + 1);
    if (!className || !slotKey) {
      return { code: 'SELECTOR_INVALID', message: `Invalid selector: '${trimmed}'` };
    }
    return { type: 'byClassAndSlot', className, slotKey };
  }

  return { code: 'SELECTOR_INVALID', message: `Selector must start with '#' or '@': '${trimmed}'` };
}

/**
 * Check if a value is a SelectorError.
 */
export function isSelectorError(value: InstanceSelector | SelectorError): value is SelectorError {
  return 'code' in value && 'message' in value && !('type' in value);
}

// ─── Resolution ─────────────────────────────────────────────

/**
 * Resolve a parsed selector against live instance slots.
 *
 * Returns the matched instanceId or a SelectorError.
 */
export function resolveInstanceSelector(
  selector: InstanceSelector,
  slots: readonly InstanceSlotInfo[],
): number | SelectorError {
  switch (selector.type) {
    case 'byId': {
      const match = slots.find((s) => s.instanceId === selector.instanceId);
      if (!match) {
        return {
          code: 'SELECTOR_INSTANCE_NOT_FOUND',
          message: `Instance #${selector.instanceId} not found`,
        };
      }
      return match.instanceId;
    }

    case 'byClass': {
      const matches = slots.filter((s) => s.className === selector.className);
      if (matches.length === 0) {
        return {
          code: 'SELECTOR_CLASS_NOT_FOUND',
          message: `No instances of class '${selector.className}'`,
        };
      }
      if (matches.length > 1) {
        const available = matches
          .map((m) =>
            m.compilerSlotKey ? `@${m.className}#${m.compilerSlotKey}` : `#${m.instanceId}`,
          )
          .join(', ');
        return {
          code: 'SELECTOR_AMBIGUOUS',
          message: `Multiple instances of '${selector.className}': ${available}`,
        };
      }
      return matches[0]!.instanceId;
    }

    case 'byClassAndSlot': {
      const match = slots.find(
        (s) => s.className === selector.className && s.compilerSlotKey === selector.slotKey,
      );
      if (!match) {
        const classMatches = slots.filter((s) => s.className === selector.className);
        if (classMatches.length === 0) {
          return {
            code: 'SELECTOR_CLASS_NOT_FOUND',
            message: `No instances of class '${selector.className}'`,
          };
        }
        return {
          code: 'SELECTOR_SLOT_NOT_FOUND',
          message: `No instance of '${selector.className}' with slotKey '${selector.slotKey}'`,
        };
      }
      return match.instanceId;
    }
  }
}
