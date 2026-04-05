import type { AnalyzedModule, AnalyzedRegistry, GeneratedFile } from './types.js';

/**
 * Generates index.ts files for module re-exports and top-level barrel export.
 */
export class IndexEmitter {
  private readonly analyzed: AnalyzedRegistry;

  constructor(analyzed: AnalyzedRegistry) {
    this.analyzed = analyzed;
  }

  /** Emit a per-module index.ts with sorted re-exports */
  emitModuleIndex(mod: AnalyzedModule): string {
    const lines: string[] = ['// AUTO-GENERATED — DO NOT EDIT', `// Module: ${mod.uri}`, ''];

    const exportableTypes = mod.types.filter(
      (t) => t.classification === 'creatable-object' || t.classification === 'singleton',
    );

    const sorted = [...exportableTypes].sort((a, b) =>
      a.qmlName < b.qmlName ? -1 : a.qmlName > b.qmlName ? 1 : 0,
    );

    for (const type of sorted) {
      lines.push(`export * from './${type.qmlName}.js';`);
    }

    return `${lines.join('\n')}\n`;
  }

  /** Emit the top-level index.ts that re-exports all modules */
  emitTopLevelIndex(): string {
    const lines: string[] = [
      '// AUTO-GENERATED — DO NOT EDIT',
      '// QmlTS DSL — Generated from Qt Registry',
      '',
    ];

    const sorted = [...this.analyzed.modules].sort((a, b) =>
      a.uri < b.uri ? -1 : a.uri > b.uri ? 1 : 0,
    );

    for (const mod of sorted) {
      lines.push(`export * from './${mod.directoryName}/index.js';`);
    }

    return `${lines.join('\n')}\n`;
  }

  /** Get all generated index files */
  getGeneratedFiles(): GeneratedFile[] {
    const files: GeneratedFile[] = [];

    for (const mod of this.analyzed.modules) {
      files.push({
        relativePath: `${mod.directoryName}/index.ts`,
        content: this.emitModuleIndex(mod),
      });
    }

    files.push({
      relativePath: 'index.ts',
      content: this.emitTopLevelIndex(),
    });

    return files;
  }
}
