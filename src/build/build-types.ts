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
