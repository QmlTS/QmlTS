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

    // Detect conflicts: a type's builder/instance name may collide with
    // another type's factory/dslSymbolName in the same module
    const conflicting = this.detectIntraModuleConflicts(sorted);

    for (const type of sorted) {
      const conflictSymbols = conflicting.get(type.emitFileName);
      if (conflictSymbols && conflictSymbols.size > 0) {
        // Use explicit named re-exports, excluding duplicated symbols
        const symbols = this.getExportedSymbols(type)
          .filter((s) => !conflictSymbols.has(s));
        if (symbols.length > 0) {
          lines.push(`export { ${symbols.join(', ')} } from './${type.emitFileName}.js';`);
        }
      } else {
        lines.push(`export * from './${type.emitFileName}.js';`);
      }
    }

    return `${lines.join('\n')}\n`;
  }

  /**
   * Detect emit-file names whose `export *` would produce duplicate symbols.
   * Returns a map from emitFileName → set of symbol names that are duplicated.
   */
  private detectIntraModuleConflicts(types: AnalyzedType[]): Map<string, Set<string>> {
    // Collect all symbols each file would export via `export *`
    const fileSymbols = new Map<string, string[]>();
    for (const type of types) {
      fileSymbols.set(type.emitFileName, this.getExportedSymbols(type));
    }

    // Find symbols exported by more than one file
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

    const conflicting = new Map<string, Set<string>>();
    for (const [sym, owners] of symbolOwners) {
      if (owners.length > 1) {
        for (const owner of owners) {
          const existing = conflicting.get(owner);
          if (existing) {
            existing.add(sym);
          } else {
            conflicting.set(owner, new Set([sym]));
          }
        }
      }
    }

    return conflicting;
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
