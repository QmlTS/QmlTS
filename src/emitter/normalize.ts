import type { ObjectMember } from '../ast/index.js';

const CATEGORY_ORDER: Record<string, number> = {
  IdAssignment: 0,
  PropertyDeclaration: 1,
  PropertyAlias: 1,
  SignalDeclaration: 2,
  Binding: 3,
  GroupedBinding: 3,
  AttachedBinding: 3,
  ArrayBinding: 3,
  BehaviorOn: 3,
  SignalHandler: 4,
  FunctionDeclaration: 5,
  ObjectDefinition: 6,
  InlineComponent: 7,
  EnumDeclaration: 8,
  Comment: -1,
};

export function normalizeMembers(members: ObjectMember[]): ObjectMember[] {
  // Build an array of { member, attachedComment?, category }
  // Comments attach to the next non-comment member (leading).
  // If a comment is at the end with no following member, it stays in place.

  interface Entry {
    member: ObjectMember;
    leadingComments: ObjectMember[];
    category: number;
  }

  const entries: Entry[] = [];
  const pendingComments: ObjectMember[] = [];

  for (const m of members) {
    if (m.kind === 'Comment') {
      pendingComments.push(m);
    } else {
      const cat = CATEGORY_ORDER[m.kind] ?? 99;
      entries.push({
        member: m,
        leadingComments: [...pendingComments],
        category: cat,
      });
      pendingComments.length = 0;
    }
  }

  // Sort entries by category, stable within same category
  entries.sort((a, b) => a.category - b.category);

  // Flatten back
  const result: ObjectMember[] = [];
  for (const entry of entries) {
    for (const c of entry.leadingComments) {
      result.push(c);
    }
    result.push(entry.member);
  }
  // Trailing comments at the end
  for (const c of pendingComments) {
    result.push(c);
  }

  return result;
}
