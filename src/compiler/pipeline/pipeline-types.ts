import type { EmitOptions } from '../../emitter/types.js';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
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
