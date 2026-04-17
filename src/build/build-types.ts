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
  /** V2: Module directory (e.g. dist/qml/TestApp/ViewModels/). Set after compilation. */
  readonly moduleDir?: string;
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
  /** V2: Runtime version used for this build. */
  readonly runtime?: 'v1' | 'v2';
  /** V2: Module declarations produced by this build. */
  readonly modules?: readonly {
    readonly uri: string;
    readonly version: string;
    readonly types: readonly string[];
    /** Output-relative path, e.g. "./qml/TestApp/ViewModels/qmldir". */
    readonly qmldir: string;
    /** Output-relative path, e.g. "./qml/TestApp/ViewModels/testapp_viewmodels.qmltypes". */
    readonly qmltypes: string;
  }[];
  /** V2: V1 compatibility shim enabled for this build. */
  readonly v1Compat?: boolean;
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
  readonly qmlImportPath?: string;
  readonly nativeLibPath?: string;
  readonly dslEntryPath?: string;
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

// ─── Host Preparation ───────────────────────────────────────

export type HostPrepMode = 'prebuilt' | 'custom-path' | 'cargo-build';

export interface HostPrepResult {
  readonly mode: HostPrepMode;
  readonly hostLibPath: string;
  readonly bridgeGenerated: boolean;
  readonly cargoBuildMs?: number;
}

export interface SchemaFile {
  readonly className: string;
  readonly filePath: string;
  readonly content: ViewModelSchemaJson;
}

export interface ViewModelSchemaJson {
  readonly className: string;
  readonly version: number;
  /** V2: QML module URI. */
  readonly moduleUri?: string;
  /** V2: QML module version. */
  readonly moduleVersion?: { readonly major: number; readonly minor: number };
  /** V2: Stable identity key for hot-reload. */
  readonly compilerSlotKey?: string;
  readonly states: readonly {
    readonly name: string;
    readonly qmlName: string;
    readonly qmlType: string;
    readonly memberId: number;
    readonly readonly: boolean;
    readonly deferred: boolean;
    readonly defaultValue?: string;
  }[];
  readonly commands: readonly {
    readonly name: string;
    readonly qmlName: string;
    readonly commandId: number;
    readonly parameters: readonly { readonly name: string; readonly type: string }[];
    readonly async: boolean;
    readonly throttle?: string;
    readonly throttleMs?: number;
  }[];
  readonly effects: readonly {
    readonly name: string;
    readonly qmlName: string;
    readonly effectId: number;
    readonly parameters: readonly { readonly name: string; readonly type: string }[];
  }[];
  readonly lifecycle: {
    readonly onMounted: boolean;
    readonly onUnmounting: boolean;
    readonly hotReload: boolean;
  };
}

export interface RustBridgeOutput {
  readonly generatedDir: string;
  readonly viewModelFiles: readonly string[];
  readonly runtimeFiles: readonly string[];
  readonly libRsPath: string;
  readonly buildRsPath: string;
  readonly cargoTomlPath: string;
  readonly factoriesCppPath: string;
}

// ─── Entry Generation ───────────────────────────────────────

export interface EntryGeneratorOptions {
  readonly compiledViewModels: readonly {
    readonly className: string;
  }[];
  readonly mainQml: string;
  readonly qmlImportPaths: readonly string[];
  readonly packages?: ResolvedPackages;
  /** V2: Runtime version. Defaults to V1 behavior when undefined. */
  readonly runtime?: 'v1' | 'v2';
  /** V2: Module registration metadata. Undefined means no ViewModels in V2 mode. */
  readonly moduleRegistration?: {
    readonly moduleUri: string;
    readonly versionMajor: number;
    readonly versionMinor: number;
    readonly typeNames: readonly string[];
    /** V2: Enable V1 compatibility shim (context property aliases). */
    readonly v1Compat?: boolean;
  };
}

// ─── Dev Session ────────────────────────────────────────────

export type DevSessionState =
  | 'idle'
  | 'starting'
  | 'building'
  | 'watching'
  | 'rebuilding'
  | 'error'
  | 'stopping'
  | 'stopped';

export type DevSessionEventType =
  | 'state-change'
  | 'build-start'
  | 'build-success'
  | 'build-error'
  | 'rebuild-start'
  | 'rebuild-success'
  | 'rebuild-error'
  | 'file-change'
  | 'hot-reload'
  | 'hot-reload-error'
  | 'exit';

export interface DevSessionEvent {
  readonly type: DevSessionEventType;
  readonly timestamp: number;
  readonly data?: unknown;
}

export interface FileChangeData {
  readonly files: readonly string[];
  readonly type: 'add' | 'change' | 'unlink';
}

export interface BuildResultData {
  readonly success: boolean;
  readonly durationMs: number;
  readonly diagnostics: readonly Diagnostic[];
  readonly stats?: CompilationStats;
}

export interface HotReloadData {
  readonly durationMs: number;
  readonly filesReloaded: readonly string[];
}

export interface DevSessionOptions {
  readonly config?: string;
  readonly headless?: boolean;
  readonly entry?: string;
  readonly debounceMs?: number;
  readonly ignorePatterns?: readonly string[];
  readonly preserveOnError?: boolean;
  readonly verbose?: boolean;
  readonly watchPaths?: readonly string[];
}

export interface DevSessionStats {
  readonly buildCount: number;
  readonly rebuildCount: number;
  readonly hotReloadCount: number;
  readonly errorCount: number;
  readonly totalBuildMs: number;
  readonly lastBuildMs?: number;
  readonly uptime: number;
}

export interface HotReloadClient {
  reload(changedFiles: readonly string[], outputDir: string): Promise<HotReloadResult>;
  isConnected(): boolean;
  dispose(): void;
}

export interface HotReloadResult {
  readonly success: boolean;
  readonly durationMs: number;
  readonly error?: string;
}

// ─── Doctor ─────────────────────────────────────────────────

export type DoctorCheckName =
  | 'qt-installed'
  | 'qt-version'
  | 'qmlformat-available'
  | 'qmllint-available'
  | 'qmlcachegen-available'
  | 'node-version'
  | 'bun-available'
  | 'cargo-available'
  | 'rustc-available'
  | 'cmake-available'
  | 'cmake-version'
  | 'msvc-available'
  | 'ninja-available'
  | 'host-lib-exists'
  | 'config-valid'
  | 'dependencies-resolved';

export interface DoctorCheck {
  readonly name: DoctorCheckName;
  readonly description: string;
  readonly status: 'pass' | 'warn' | 'fail';
  readonly message: string;
  readonly fixable?: boolean;
  readonly fixCommand?: string;
}

export interface DoctorResult {
  readonly checks: readonly DoctorCheck[];
  readonly allPassed: boolean;
}

export interface DoctorCommandOptions {
  readonly config?: string;
  readonly verbose?: boolean;
  readonly fix?: boolean;
}

// ─── Init ───────────────────────────────────────────────────

export type InitTemplate = 'minimal' | 'counter' | 'mvvm' | 'full';
export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

export interface InitCommandOptions {
  readonly dir?: string;
  readonly template?: InitTemplate;
  readonly packageManager?: PackageManager;
  readonly skipInstall?: boolean;
}

export interface InitResult {
  readonly dir: string;
  readonly template: InitTemplate;
  readonly filesCreated: readonly string[];
  readonly packageManager: PackageManager;
  readonly installed: boolean;
}

// ─── Clean ──────────────────────────────────────────────────

export interface CleanCommandOptions {
  readonly config?: string;
  readonly cache?: boolean;
  readonly nodeModules?: boolean;
  readonly target?: boolean;
}

export interface CleanResult {
  readonly removedPaths: readonly string[];
  readonly errors: readonly string[];
}

// ─── Platform Distribution ──────────────────────────────────

export interface DistributeResult {
  readonly target: PlatformTarget;
  readonly outputPath: string;
  readonly size: number;
  readonly includes: readonly string[];
}

export interface DistributeCommandOptions {
  readonly config?: string;
  readonly verbose?: boolean;
  readonly targets?: readonly PlatformTarget[];
  readonly bundleQt?: boolean;
  readonly icon?: string;
}
