import type { Diagnostic } from '../compiler/diagnostics.js';
import type { CompilationStats } from '../compiler/pipeline/pipeline-types.js';
import type { PlatformTarget } from './config-types.js';

// ─── Build Phase ────────────────────────────────────────────

export type BuildPhase =
  | 'loading-config'
  | 'discovering-qt'
  | 'compiling-ts'
  | 'collecting-deps'
  | 'bundling-assets'
  | 'validating-qml'
  | 'preparing-host'
  | 'writing-output'
  | 'done';

export const BUILD_PHASES: readonly BuildPhase[] = Object.freeze([
  'loading-config',
  'discovering-qt',
  'compiling-ts',
  'collecting-deps',
  'bundling-assets',
  'validating-qml',
  'preparing-host',
  'writing-output',
  'done',
] as const);

// ─── Progress Reporting ─────────────────────────────────────

export interface BuildProgress {
  readonly phase: BuildPhase;
  readonly message: string;
  readonly current?: number;
  readonly total?: number;
}

// ─── Phase Result ───────────────────────────────────────────

export interface PhaseResult {
  readonly success: boolean;
  readonly durationMs: number;
  readonly diagnostics: readonly Diagnostic[];
}

// ─── Product Layout ─────────────────────────────────────────

export interface ProductLayout {
  readonly rootDir: string;
  readonly entryFile: string;
  readonly qmlDir: string;
  readonly schemasDir: string;
  readonly assetsDir: string;
  readonly hostLib: string;
  readonly manifest: string;
  readonly sourceMapsDir?: string;
  readonly eventBindings: string;
}

// ─── Build Manifest ─────────────────────────────────────────

export interface BuildManifest {
  readonly version: string;
  readonly buildTime: string;
  readonly entry: string;
  readonly qmlFiles: readonly string[];
  readonly schemas: readonly string[];
  readonly hostLib: string;
  readonly qtVersion: string;
  readonly platform: PlatformTarget;
}

// ─── Pipeline Result ────────────────────────────────────────

export interface BuildPipelineResult {
  readonly success: boolean;
  readonly phases: ReadonlyMap<BuildPhase, PhaseResult>;
  readonly output: ProductLayout;
  readonly durationMs: number;
  readonly compilationStats?: CompilationStats;
}

// ─── Build Command ──────────────────────────────────────────

export interface BuildCommandOptions {
  readonly config?: string;
  readonly verbose?: boolean;
  readonly force?: boolean;
  readonly files?: readonly string[];
  readonly dryRun?: boolean;
  readonly json?: boolean;
}

export interface BuildCommandResult {
  readonly success: boolean;
  readonly stats: CompilationStats | null;
  readonly diagnostics: readonly Diagnostic[];
  readonly outputDir: string;
  readonly durationMs: number;
}

// ─── Pipeline Run Options (internal) ────────────────────────

export interface PipelineRunOptions {
  readonly force?: boolean;
  readonly files?: readonly string[];
  readonly dryRun?: boolean;
}

// ─── Package Resolution ─────────────────────────────────────

export interface QmltsPackageManifest {
  readonly qmlModules?: readonly string[];
  readonly qmlImportPath?: string;
  readonly nativeLib?: {
    readonly win32?: string;
    readonly linux?: string;
    readonly darwin?: string;
  };
  readonly dslEntry?: string;
  readonly minQtVersion?: string;
}

export interface ResolvedPackageInfo {
  readonly name: string;
  readonly version: string;
  readonly dir: string;
  readonly manifest: QmltsPackageManifest;
}

export interface ResolvedPackages {
  readonly packages: readonly ResolvedPackageInfo[];
  readonly qmlImportPaths: readonly string[];
  readonly nativeLibPaths: readonly string[];
}

// ─── Resource Bundling ──────────────────────────────────────

export interface BundledFile {
  readonly sourcePath: string;
  readonly outputPath: string;
  readonly size: number;
}

export interface BundleResult {
  readonly files: readonly BundledFile[];
  readonly totalSize: number;
  readonly qrcFile?: string;
}

// ─── Entry Generation ───────────────────────────────────────

export interface EntryGeneratorOptions {
  readonly compiledViewModels: readonly {
    readonly className: string;
    readonly schemaFile: string;
  }[];
  readonly mainQml: string;
  readonly qmlImportPaths: readonly string[];
  readonly eventBindingsFile: string;
  readonly packages?: ResolvedPackages;
}
