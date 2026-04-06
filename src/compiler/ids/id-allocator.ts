export interface IdAllocator {
  allocateMemberId(vmClass: string, fieldName: string): number;
  allocateCommandId(vmClass: string, methodName: string): number;
  allocateEffectId(vmClass: string, fieldName: string): number;
  allocateObjectId(typeName: string): string;
  snapshot(): IdAllocationSnapshot;
  restore(snapshot: IdAllocationSnapshot): void;
}

export interface IdAllocationSnapshot {
  readonly members: ReadonlyMap<string, number>;
  readonly commands: ReadonlyMap<string, number>;
  readonly effects: ReadonlyMap<string, number>;
  readonly objectIds: ReadonlyMap<string, number>;
}

function fnv1a32(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0) & 0x7fffffff;
}

class IdAllocatorImpl implements IdAllocator {
  private members = new Map<string, number>();
  private memberCounters = new Map<string, number>();
  private hashIds = new Map<string, number>();
  private usedHashValues = new Map<number, string>();
  private objectCounters = new Map<string, number>();

  allocateMemberId(vmClass: string, fieldName: string): number {
    const key = `${vmClass}.${fieldName}`;
    const existing = this.members.get(key);
    if (existing !== undefined) return existing;

    const counter = this.memberCounters.get(vmClass) ?? 0;
    this.members.set(key, counter);
    this.memberCounters.set(vmClass, counter + 1);
    return counter;
  }

  allocateCommandId(vmClass: string, methodName: string): number {
    return this.allocateHashId(`cmd:${vmClass}.${methodName}`);
  }

  allocateEffectId(vmClass: string, fieldName: string): number {
    return this.allocateHashId(`eff:${vmClass}.${fieldName}`);
  }

  allocateObjectId(typeName: string): string {
    const lower = typeName.toLowerCase();
    const counter = (this.objectCounters.get(lower) ?? 0) + 1;
    this.objectCounters.set(lower, counter);
    return `${lower}_${counter}`;
  }

  snapshot(): IdAllocationSnapshot {
    return {
      members: new Map(this.members),
      commands: new Map(
        [...this.hashIds.entries()]
          .filter(([k]) => k.startsWith('cmd:'))
          .map(([k, v]) => [k.slice(4), v]),
      ),
      effects: new Map(
        [...this.hashIds.entries()]
          .filter(([k]) => k.startsWith('eff:'))
          .map(([k, v]) => [k.slice(4), v]),
      ),
      objectIds: new Map(this.objectCounters),
    };
  }

  restore(snap: IdAllocationSnapshot): void {
    this.members.clear();
    this.memberCounters.clear();
    this.hashIds.clear();
    this.usedHashValues.clear();
    this.objectCounters.clear();

    for (const [key, id] of snap.members) {
      this.members.set(key, id);
      const dotIdx = key.indexOf('.');
      const vmClass = dotIdx >= 0 ? key.slice(0, dotIdx) : key;
      const currentMax = this.memberCounters.get(vmClass) ?? 0;
      if (id >= currentMax) {
        this.memberCounters.set(vmClass, id + 1);
      }
    }

    for (const [key, id] of snap.commands) {
      const prefixedKey = `cmd:${key}`;
      this.hashIds.set(prefixedKey, id);
      this.usedHashValues.set(id, prefixedKey);
    }

    for (const [key, id] of snap.effects) {
      const prefixedKey = `eff:${key}`;
      this.hashIds.set(prefixedKey, id);
      this.usedHashValues.set(id, prefixedKey);
    }

    for (const [type, count] of snap.objectIds) {
      this.objectCounters.set(type, count);
    }
  }

  private allocateHashId(prefixedKey: string): number {
    const existing = this.hashIds.get(prefixedKey);
    if (existing !== undefined) return existing;

    let candidate = fnv1a32(prefixedKey);
    if (candidate === 0) candidate = 1;

    while (
      this.usedHashValues.has(candidate) &&
      this.usedHashValues.get(candidate) !== prefixedKey
    ) {
      candidate = (candidate + 1) & 0x7fffffff || 1;
    }

    this.hashIds.set(prefixedKey, candidate);
    this.usedHashValues.set(candidate, prefixedKey);
    return candidate;
  }
}

export function createIdAllocator(snap?: IdAllocationSnapshot): IdAllocator {
  const alloc = new IdAllocatorImpl();
  if (snap) {
    alloc.restore(snap);
  }
  return alloc;
}
