import type { AnalyzedModule, AnalyzedRegistry, AnalyzedType, GeneratedFile } from './types.js';

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
      a.emitFileName < b.emitFileName ? -1 : a.emitFileName > b.emitFileName ? 1 : 0,
    );

    // Resolve duplicate public symbols deterministically so we never drop a
    // module export completely when two files expose the same symbol.
    const exportPlan = this.buildModuleExportPlan(sorted);

    for (const type of sorted) {
      const symbols = exportPlan.exportedSymbolsByFile.get(type.emitFileName) ?? [];
      if (symbols.length === 0) {
        continue;
      }

      if (exportPlan.filesWithConflicts.has(type.emitFileName)) {
        lines.push(`export { ${symbols.join(', ')} } from './${type.emitFileName}.js';`);
      } else {
        lines.push(`export * from './${type.emitFileName}.js';`);
      }
    }

    return `${lines.join('\n')}\n`;
  }

  /**
   * Build a deterministic export plan for one module.
   *
   * For duplicated symbols, the lexicographically-first emit file wins and
   * keeps the symbol; other files re-export only their remaining unique
   * symbols. This preserves the module public API instead of dropping the
   * duplicated symbol from every owner.
   */
  private buildModuleExportPlan(types: AnalyzedType[]): {
    exportedSymbolsByFile: Map<string, string[]>;
    filesWithConflicts: Set<string>;
  } {
    const fileSymbols = new Map<string, string[]>();
    for (const type of types) {
      fileSymbols.set(type.emitFileName, this.getExportedSymbols(type));
    }

    const symbolOwners = new Map<string, string[]>();
    for (const [fileName, symbols] of fileSymbols) {
      for (const sym of symbols) {
        const owners = symbolOwners.get(sym);
        if (owners) {
          owners.push(fileName);
        } else {
          symbolOwners.set(sym, [fileName]);
        }
      }
    }

    const retainedSymbols = new Map<string, Set<string>>();
    for (const [fileName, symbols] of fileSymbols) {
      retainedSymbols.set(fileName, new Set(symbols));
    }

    const filesWithConflicts = new Set<string>();
    for (const [sym, owners] of symbolOwners) {
      if (owners.length > 1) {
        const sortedOwners = [...owners].sort();
        const winner = sortedOwners[0]!;
        for (const owner of sortedOwners) {
          filesWithConflicts.add(owner);
          if (owner !== winner) {
            retainedSymbols.get(owner)?.delete(sym);
          }
        }
      }
    }

    const exportedSymbolsByFile = new Map<string, string[]>();
    for (const [fileName, symbols] of fileSymbols) {
      const kept = retainedSymbols.get(fileName) ?? new Set<string>();
      exportedSymbolsByFile.set(
        fileName,
        symbols.filter((sym) => kept.has(sym)),
      );
    }

    return {
      exportedSymbolsByFile,
      filesWithConflicts,
    };
  }

  /** Get the public symbols exported by a type file */
  private getExportedSymbols(type: AnalyzedType): string[] {
    const symbols: string[] = [];
    if (type.classification === 'creatable-object') {
      symbols.push(`${type.dslSymbolName}Builder`);
      symbols.push(type.dslSymbolName); // factory function
    } else if (type.classification === 'singleton') {
      symbols.push(`${type.dslSymbolName}Instance`);
      symbols.push(type.dslSymbolName); // const or function
    }
    // Enum namespace shares the same name as the factory/const
    return symbols;
  }

  /** Emit the top-level index.ts that re-exports all modules */
  emitTopLevelIndex(): string {
    const lines: string[] = [
      '// AUTO-GENERATED — DO NOT EDIT',
      '// QmlTS DSL — Generated from Qt Registry',
      '',
    ];

    const sorted = [...this.analyzed.modules]
      .filter((mod) => this.hasExportableTypes(mod))
      .sort((a, b) => (a.uri < b.uri ? -1 : a.uri > b.uri ? 1 : 0));

    for (const mod of sorted) {
      // Use namespace re-export to avoid cross-module symbol conflicts
      const nsName = mod.uri.replace(/\./g, '_');
      lines.push(`export * as ${nsName} from './${mod.directoryName}/index.js';`);
    }

    return `${lines.join('\n')}\n`;
  }

  /** Check if a module has any exportable types */
  private hasExportableTypes(mod: AnalyzedModule): boolean {
    return mod.types.some(
      (t) => t.classification === 'creatable-object' || t.classification === 'singleton',
    );
  }

  /** Get all generated index files */
  getGeneratedFiles(): GeneratedFile[] {
    const files: GeneratedFile[] = [];

    for (const mod of this.analyzed.modules) {
      if (!this.hasExportableTypes(mod)) continue;
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
