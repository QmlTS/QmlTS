import type { ViewModelSchemaJson } from './build-types.js';

// ─── Types ──────────────────────────────────────────────────

export interface QmltypesGeneratorOptions {
  readonly moduleUri: string;
  readonly moduleVersion: { readonly major: number; readonly minor: number };
  readonly schemas: readonly ViewModelSchemaJson[];
}

export interface QmltypesGenerator {
  generate(options: QmltypesGeneratorOptions): string;
}

// ─── Factory ────────────────────────────────────────────────

export function createQmltypesGenerator(): QmltypesGenerator {
  return {
    generate(options: QmltypesGeneratorOptions): string {
      const lines: string[] = [];
      const version = `${options.moduleVersion.major}.${options.moduleVersion.minor}`;

      lines.push('import QtQuick.tooling 1.2');
      lines.push('');
      lines.push('Module {');

      for (const schema of options.schemas) {
        emitComponent(lines, schema, options.moduleUri, version);
      }

      lines.push('}');
      lines.push('');
      return lines.join('\n');
    },
  };
}

// ─── Internals ──────────────────────────────────────────────

function emitComponent(
  lines: string[],
  schema: ViewModelSchemaJson,
  moduleUri: string,
  version: string,
): void {
  lines.push('    Component {');
  lines.push(`        name: "${schema.className}"`);
  lines.push('        prototype: "QObject"');
  lines.push(`        exports: ["${moduleUri}/${schema.className} ${version}"]`);
  lines.push('        exportMetaObjectRevisions: [0]');

  for (const state of schema.states) {
    if (state.readonly) {
      lines.push(
        `        Property { name: "${state.qmlName}"; type: "${state.qmlType}"; isReadonly: true }`,
      );
    } else {
      lines.push(`        Property { name: "${state.qmlName}"; type: "${state.qmlType}" }`);
    }
  }

  for (const cmd of schema.commands) {
    if (cmd.parameters.length === 0) {
      lines.push(`        Method { name: "${cmd.qmlName}" }`);
    } else {
      lines.push('        Method {');
      lines.push(`            name: "${cmd.qmlName}"`);
      for (const param of cmd.parameters) {
        lines.push(`            Parameter { name: "${param.name}"; type: "${param.type}" }`);
      }
      lines.push('        }');
    }
  }

  for (const effect of schema.effects) {
    if (effect.parameters.length === 0) {
      lines.push(`        Signal { name: "${effect.qmlName}" }`);
    } else {
      lines.push('        Signal {');
      lines.push(`            name: "${effect.qmlName}"`);
      for (const param of effect.parameters) {
        lines.push(`            Parameter { name: "${param.name}"; type: "${param.type}" }`);
      }
      lines.push('        }');
    }
  }

  if (schema.lifecycle.onMounted) {
    lines.push('        Method { name: "onMounted" }');
  }
  if (schema.lifecycle.onUnmounting) {
    lines.push('        Method { name: "onUnmounting" }');
  }

  lines.push('    }');
}
