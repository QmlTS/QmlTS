import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RegistryQuery } from './registry/registry-query.js';
import { RegistrySnapshot } from './registry/snapshot.js';
import type { QmlRegistry, RegistryQueryInterface } from './registry/types.js';

// ─── Pre-built snapshot path ────────────────────────────────
const SNAPSHOT_PATH = join(import.meta.dir, '..', 'data', 'qt-6.11.0-registry.snapshot.json');

let _registry: QmlRegistry | null = null;
let _query: RegistryQueryInterface | null = null;

/** Get the pre-built Qt 6.11 type registry. Lazily loaded on first call. */
export function getRegistry(): QmlRegistry {
  if (!_registry) {
    const json = readFileSync(SNAPSHOT_PATH, 'utf-8');
    _registry = new RegistrySnapshot().deserialize(json);
  }
  return _registry;
}

/** Get a query engine over the pre-built registry. Lazily loaded on first call. */
export function getQuery(): RegistryQueryInterface {
  if (!_query) {
    _query = new RegistryQuery(getRegistry());
  }
  return _query;
}

// ─── Re-export AST module ───────────────────────────────────
export * from './ast/index.js';
export * from './dsl/generator/index.js';
// ─── Re-export DSL runtime + generator ──────────────────────
export * from './dsl/runtime/index.js';
// ─── Re-export Emitter module ───────────────────────────────
export * from './emitter/index.js';
// ─── Re-export Qt Tools module ──────────────────────────────
export * from './qt-tools/index.js';
// ─── Re-export everything for advanced / maintainer use ─────
export * from './registry/index.js';
// ─── Re-export ViewModel module ─────────────────────────────
export * from './viewmodel/index.js';
