import type { CompilerOptions } from '../compiler/pipeline/pipeline-types.js';
import type { QmlFormatOptions, QmlLintOptions, QualityGateLevel } from '../qt-tools/types.js';

// ─── User-facing config (qmlts.config.ts) ──────────────────

export interface QmltsConfig {
  readonly entry?: string;
  readonly outDir?: string;
  readonly qt?: QtConfig;
  readonly build?: BuildConfig;
  readonly host?: HostConfig;
  readonly dev?: DevConfig;
  readonly assets?: AssetsConfig;
  readonly distribute?: DistributeConfig;
  readonly qmlModulePaths?: readonly string[];
}

export interface QtConfig {
  readonly dir?: string;
  readonly modules?: readonly string[];
  readonly targetVersion?: string;
}

export interface BuildConfig {
  readonly aot?: boolean;
  readonly lint?: boolean;
  readonly format?: boolean;
  readonly sourceMaps?: boolean;
  readonly incremental?: boolean;
  readonly concurrency?: number;
  readonly lintOptions?: QmlLintOptions;
  readonly formatOptions?: QmlFormatOptions;
  readonly compilerOptions?: Partial<CompilerOptions>;
  readonly qualityGate?: QualityGateLevel;
  readonly mode?: 'development' | 'production';
  readonly minify?: boolean;
}

export interface HostConfig {
  readonly prebuilt?: boolean;
  readonly cargo?: CargoConfig;
  readonly customPath?: string;
}

export interface CargoConfig {
  readonly args?: readonly string[];
  readonly profile?: 'dev' | 'release';
  readonly target?: string;
}

export interface DevConfig {
  readonly hotReload?: boolean;
  readonly watchPaths?: readonly string[];
  readonly debounceMs?: number;
  readonly ignorePatterns?: readonly string[];
  readonly port?: number;
  readonly notify?: boolean;
  readonly preserveOnError?: boolean;
}

export interface AssetsConfig {
  readonly dir?: string;
  readonly include?: readonly string[];
  readonly exclude?: readonly string[];
  readonly useQrc?: boolean;
  readonly optimize?: boolean;
}

export interface DistributeConfig {
  readonly targets?: readonly PlatformTarget[];
  readonly bundleQt?: boolean;
  readonly icon?: string;
  readonly appName?: string;
  readonly appVersion?: string;
}

export type PlatformTarget = 'win32-x64' | 'linux-x64' | 'darwin-x64' | 'darwin-arm64';

// ─── Resolved config (all defaults filled) ─────────────────

export interface ResolvedQmltsConfig {
  readonly entry: string;
  readonly outDir: string;
  readonly qt: ResolvedQtConfig;
  readonly build: ResolvedBuildConfig;
  readonly host: ResolvedHostConfig;
  readonly dev: ResolvedDevConfig;
  readonly assets: ResolvedAssetsConfig;
  readonly distribute: ResolvedDistributeConfig;
  readonly qmlModulePaths: readonly string[];
  readonly configDir: string;
}

export interface ResolvedQtConfig {
  readonly dir?: string;
  readonly modules: readonly string[];
  readonly targetVersion: string;
}

export interface ResolvedBuildConfig {
  readonly aot: boolean;
  readonly lint: boolean;
  readonly format: boolean;
  readonly sourceMaps: boolean;
  readonly incremental: boolean;
  readonly concurrency: number;
  readonly lintOptions?: QmlLintOptions;
  readonly formatOptions?: QmlFormatOptions;
  readonly compilerOptions?: Partial<CompilerOptions>;
  readonly qualityGate: QualityGateLevel;
  readonly mode: 'development' | 'production';
  readonly minify: boolean;
}

export interface ResolvedHostConfig {
  readonly prebuilt: boolean;
  readonly cargo: ResolvedCargoConfig;
  readonly customPath?: string;
}

export interface ResolvedCargoConfig {
  readonly args: readonly string[];
  readonly profile: 'dev' | 'release';
  readonly target?: string;
}

export interface ResolvedDevConfig {
  readonly hotReload: boolean;
  readonly watchPaths: readonly string[];
  readonly debounceMs: number;
  readonly ignorePatterns: readonly string[];
  readonly port: number;
  readonly notify: boolean;
  readonly preserveOnError: boolean;
}

export interface ResolvedAssetsConfig {
  readonly dir: string;
  readonly include: readonly string[];
  readonly exclude: readonly string[];
  readonly useQrc: boolean;
  readonly optimize: boolean;
}

export interface ResolvedDistributeConfig {
  readonly targets: readonly PlatformTarget[];
  readonly bundleQt: boolean;
  readonly icon?: string;
  readonly appName?: string;
  readonly appVersion?: string;
}
