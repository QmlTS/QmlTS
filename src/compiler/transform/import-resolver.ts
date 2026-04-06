import type { ImportResolver, RequiredImport, ResolvedImport } from './transform-types.js';

/**
 * Create a stateless import resolver that deduplicates and merges imports.
 *
 * Merge rules:
 * - Merge key: (moduleUri, qualifier) — different qualifiers never merge
 * - Version: numeric major.minor comparison, highest wins. Missing version doesn't override explicit.
 * - Injected: any explicit (injected=false) import overrides injected=true
 */
export function createImportResolver(): ImportResolver {
  return {
    resolve: mergeImports,
    merge: mergeImports,
  };
}

function mergeImports(imports: readonly RequiredImport[]): readonly ResolvedImport[] {
  const merged = new Map<string, ResolvedImport>();

  for (const imp of imports) {
    const key = mergeKey(imp.moduleUri, imp.qualifier);
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, {
        moduleUri: imp.moduleUri,
        version: imp.version,
        qualifier: imp.qualifier,
        injected: imp.injected,
      });
    } else {
      merged.set(key, {
        moduleUri: imp.moduleUri,
        version: pickHigherVersion(existing.version, imp.version),
        qualifier: imp.qualifier,
        injected: existing.injected && imp.injected,
      });
    }
  }

  return Array.from(merged.values());
}

function mergeKey(moduleUri: string, qualifier?: string): string {
  return qualifier ? `${moduleUri}::${qualifier}` : moduleUri;
}

function pickHigherVersion(a?: string, b?: string): string | undefined {
  if (!a) return b;
  if (!b) return a;
  return compareVersions(a, b) >= 0 ? a : b;
}

function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  const len = Math.max(pa.length, pb.length);

  for (let i = 0; i < len; i++) {
    const va = pa[i] ?? 0;
    const vb = pb[i] ?? 0;
    if (va !== vb) return va - vb;
  }

  return 0;
}
