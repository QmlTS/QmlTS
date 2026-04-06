import type { ViewModelMetadata } from './types.js';

// biome-ignore lint/complexity/noBannedTypes: WeakMap keys need the base Function type for constructor references
const registry = new WeakMap<Function, ViewModelMetadata>();

// biome-ignore lint/complexity/noBannedTypes: accepts any class constructor
export function ensureMetadata(ctor: Function): ViewModelMetadata {
  let meta = registry.get(ctor);
  if (!meta) {
    meta = { className: ctor.name, states: [], commands: [], effects: [] };
    registry.set(ctor, meta);
  }
  return meta;
}

export function getViewModelMetadata(
  // biome-ignore lint/complexity/noBannedTypes: accepts class constructor or instance
  classOrInstance: Function | object,
): ViewModelMetadata | undefined {
  const ctor =
    typeof classOrInstance === 'function' ? classOrInstance : classOrInstance.constructor;
  return registry.get(ctor);
}
