import type { Diagnostic } from '../compiler/diagnostics.js';
import type { ViewModelSchemaJson } from './build-types.js';

// ─── Types ──────────────────────────────────────────────────

export interface ModuleMeta {
  readonly moduleUri: string;
  readonly versionMajor: number;
  readonly versionMinor: number;
  readonly versionString: string;
  readonly moduleRelDir: string;
  readonly qmltypesFilename: string;
  readonly typeNames: readonly string[];
}

// ─── Derivation helpers ─────────────────────────────────────

export function deriveModuleUri(prefix: string): string {
  return `${prefix}.ViewModels`;
}

export function deriveModuleRelDir(moduleUri: string): string {
  return moduleUri.replace(/\./g, '/');
}

export function deriveQmltypesFilename(moduleUri: string): string {
  return `${moduleUri.toLowerCase().replace(/\./g, '_')}.qmltypes`;
}

export function deriveModuleMeta(
  moduleConfig: { prefix: string; version: { major: number; minor: number } },
  schemas: readonly { className: string }[],
): ModuleMeta | undefined {
  if (schemas.length === 0) return undefined;

  const moduleUri = deriveModuleUri(moduleConfig.prefix);
  const typeNames = [...new Set(schemas.map((s) => s.className))].sort();

  return {
    moduleUri,
    versionMajor: moduleConfig.version.major,
    versionMinor: moduleConfig.version.minor,
    versionString: `${moduleConfig.version.major}.${moduleConfig.version.minor}`,
    moduleRelDir: deriveModuleRelDir(moduleUri),
    qmltypesFilename: deriveQmltypesFilename(moduleUri),
    typeNames,
  };
}

// ─── Schema consistency validation ──────────────────────────

export function validateSchemaConsistency(
  schemas: readonly ViewModelSchemaJson[],
): readonly Diagnostic[] {
  const schemasByClass = new Map<string, ViewModelSchemaJson[]>();
  for (const schema of schemas) {
    const existing = schemasByClass.get(schema.className);
    if (existing) {
      existing.push(schema);
    } else {
      schemasByClass.set(schema.className, [schema]);
    }
  }

  const diagnostics: Diagnostic[] = [];
  for (const [className, group] of schemasByClass) {
    if (group.length <= 1) continue;
    const reference = JSON.stringify(normalizeForComparison(group[0]!));
    for (let i = 1; i < group.length; i++) {
      if (JSON.stringify(normalizeForComparison(group[i]!)) !== reference) {
        diagnostics.push({
          severity: 'error',
          code: 'QMLTS-B002',
          message: `Conflicting ViewModel schemas for "${className}" — multiple schemas with the same className have different definitions`,
        });
        break;
      }
    }
  }
  return diagnostics;
}

function normalizeForComparison(
  schema: ViewModelSchemaJson,
): Pick<ViewModelSchemaJson, 'states' | 'commands' | 'effects' | 'lifecycle'> {
  return {
    states: schema.states,
    commands: schema.commands,
    effects: schema.effects,
    lifecycle: schema.lifecycle,
  };
}
