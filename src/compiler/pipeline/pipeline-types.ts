import type { EmitOptions } from '../../emitter/types.js';
import type { ViewModelInstanceSlot, ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic, DiagnosticCode } from '../diagnostics.js';
import type { SourceLocation } from '../transform/transform-types.js';

// ─── Compiler Options ───────────────────────────────────────────────────

export interface CompilerOptions {
  readonly inputDir: string;
  readonly outputDir: string;
  readonly tsconfigPath?: string;
  readonly targetQtVersion?: string;
  readonly codegen?: CodegenOptions;
  readonly diagnostics?: DiagnosticOptions;
  readonly watch?: WatchOptions;
  readonly qt?: QtValidationOptions;
  /** V2: Target runtime architecture version. */
  readonly runtime?: 'v1' | 'v2';
  /** V2: Optional module config used to populate module metadata in runtime "v2". */
  readonly moduleConfig?: CompilerModuleConfig;
  /** V2: Enable V1 compatibility shim (only valid with runtime "v2"). */
  readonly v1Compat?: boolean;
}

export interface CodegenOptions {
  readonly sourceMap?: boolean;
  readonly emitOptions?: EmitOptions;
  readonly debugComments?: boolean;
}

export interface DiagnosticOptions {
  readonly warningsAsErrors?: boolean;
  readonly maxErrors?: number;
  readonly suppress?: readonly DiagnosticCode[];
}

/** V2 compiler module config (structural match with ModuleConfig in config-types.ts). */
export interface CompilerModuleConfig {
  readonly prefix: string;
  readonly version: { readonly major: number; readonly minor: number };
}

// ─── Source Map ──────────────────────────────────────────────────────────

export type SourceMapKind =
  | 'binding'
  | 'handler'
  | 'child'
  | 'import'
  | 'state-binding'
  | 'command-binding'
  | 'effect-listener'
  | 'lifecycle';

export interface CompilerSourceMapEntry {
  readonly source: SourceLocation;
  readonly target: {
    readonly line: number;
    readonly column: number;
  };
  readonly kind: SourceMapKind;
}

export interface CompilerSourceMap {
  readonly sourceFile: string;
  readonly targetFile: string;
  readonly mappings: readonly CompilerSourceMapEntry[];
}

// ─── Diagnostic Reporter ────────────────────────────────────────────────

export interface DiagnosticReporter {
  report(diagnostic: Diagnostic): void;
  error(code: DiagnosticCode, message: string, location?: SourceLocation): void;
  warning(code: DiagnosticCode, message: string, location?: SourceLocation): void;
  info(code: DiagnosticCode, message: string, location?: SourceLocation): void;
  getDiagnostics(): readonly Diagnostic[];
  hasErrors(): boolean;
  formatText(): string;
  formatJson(): string;
  clear(): void;
}

// ─── Compilation Unit ───────────────────────────────────────────────────

export interface CompilationUnit {
  readonly sourceFile: string;
  readonly viewName: string;
  readonly viewModelName?: string;
  readonly qmlOutputPath: string;
  readonly qmlContent: string;
  readonly schema?: ViewModelSchema;
  readonly schemaOutputPath?: string;
  readonly sourceMap?: CompilerSourceMap;
  readonly diagnostics: readonly Diagnostic[];
  /** V2: Stable identity key (convenience — equals viewModelSlots[0].compilerSlotKey). */
  readonly compilerSlotKey?: string;
  /** V2: Module URI for this compilation unit. */
  readonly moduleUri?: string;
  /** V2: All associated ViewModel class names. */
  readonly viewModelNames?: readonly string[];
  /** V2: Per-instance ViewModel slot metadata (the stable V2 contract). */
  readonly viewModelSlots?: readonly ViewModelInstanceSlot[];
  /** V2: Module imports needed by the generated QML. */
  readonly moduleImports?: readonly {
    readonly moduleUri: string;
    readonly version?: string;
  }[];
}

// ─── Event Binding Index ────────────────────────────────────────────────

export interface EventBindingIndex {
  readonly commands: readonly EventBindingCommand[];
  readonly effects: readonly EventBindingEffect[];
}

export interface EventBindingCommand {
  readonly viewModelClass: string;
  readonly methodName: string;
  readonly commandId: number;
  readonly paramTypes: readonly string[];
  readonly async: boolean;
}

export interface EventBindingEffect {
  readonly viewModelClass: string;
  readonly effectName: string;
  readonly effectId: number;
  readonly paramTypes: readonly string[];
}

// ─── Compilation Result ─────────────────────────────────────────────────

export interface CompilationResult {
  readonly units: readonly CompilationUnit[];
  readonly eventBindings: EventBindingIndex;
  readonly diagnostics: readonly Diagnostic[];
  readonly success: boolean;
  readonly stats: CompilationStats;
  readonly qtValidation?: QtValidationResult;
}

export interface CompilationStats {
  readonly totalFiles: number;
  readonly totalViewModels: number;
  readonly totalViews: number;
  readonly totalStates: number;
  readonly totalCommands: number;
  readonly totalEffects: number;
  readonly durationMs: number;
}

// ─── Step 8: Incremental Compiler ───────────────────────────────────────

export interface WatchOptions {
  readonly debounceMs?: number;
}

export interface QtValidationOptions {
  readonly qtDir?: string;
  readonly lint?: boolean;
  readonly format?: boolean;
  readonly importScan?: boolean;
  readonly importPaths?: readonly string[];
}

export interface QtValidationResult {
  readonly lintResults: ReadonlyMap<string, import('../../qt-tools/types.js').QmlLintResult>;
  readonly formatResults: ReadonlyMap<string, import('../../qt-tools/types.js').QmlFormatResult>;
  readonly importScanResult?: import('../../qt-tools/types.js').QmlImportScannerResult;
  readonly diagnostics: readonly Diagnostic[];
  readonly allValid: boolean;
}

export interface FileCacheEntry {
  readonly contentHash: number;
  readonly units: readonly CompilationUnit[];
  readonly schemas: readonly ViewModelSchema[];
  readonly schemaHash: number;
}

export interface IncrementalCompiler {
  getChangedFiles(): readonly string[];
  needsRecompile(filePath: string): boolean;
  cacheFile(filePath: string, entry: FileCacheEntry): void;
  getCachedFile(filePath: string): FileCacheEntry | undefined;
  cacheUnit(unit: CompilationUnit): void;
  getCachedUnit(filePath: string): CompilationUnit | undefined;
  clearCache(): void;
  getCacheStats(): {
    readonly entries: number;
    readonly hitRate: number;
    readonly sizeBytes: number;
  };
  compile(options: CompilerOptions): CompilationResult;
}

export interface CompilerWatcher {
  close(): void;
  rebuild(): Promise<CompilationResult>;
}
