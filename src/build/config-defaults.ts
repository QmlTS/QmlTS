import { availableParallelism } from 'node:os';
import type {
  CargoConfig,
  QmltsConfig,
  ResolvedAssetsConfig,
  ResolvedBuildConfig,
  ResolvedCargoConfig,
  ResolvedDevConfig,
  ResolvedDistributeConfig,
  ResolvedHostConfig,
  ResolvedQmltsConfig,
  ResolvedQtConfig,
  RuntimeVersion,
} from './config-types.js';

export const DEFAULT_ENTRY = './src/main.ts';
export const DEFAULT_OUT_DIR = './dist';
export const DEFAULT_TARGET_VERSION = '6.11';
export const DEFAULT_QUALITY_GATE = 'lint' as const;
export const DEFAULT_BUILD_MODE = 'development' as const;
export const DEFAULT_CARGO_PROFILE = 'release' as const;
export const DEFAULT_DEBOUNCE_MS = 200;
export const DEFAULT_ASSETS_DIR = './assets';
export const DEFAULT_WATCH_PATHS: readonly string[] = ['./src'];
export const DEFAULT_ASSETS_INCLUDE: readonly string[] = ['**/*'];
export const DEFAULT_RUNTIME: RuntimeVersion = 'v2';
export const DEFAULT_V1_COMPAT = false;

export function applyDefaults(config: QmltsConfig, configDir: string): ResolvedQmltsConfig {
  return {
    entry: config.entry ?? DEFAULT_ENTRY,
    outDir: config.outDir ?? DEFAULT_OUT_DIR,
    qt: resolveQt(config.qt),
    build: resolveBuild(config.build),
    host: resolveHost(config.host),
    dev: resolveDev(config.dev),
    assets: resolveAssets(config.assets),
    distribute: resolveDistribute(config.distribute),
    qmlModulePaths: config.qmlModulePaths ?? [],
    configDir,
    runtime: config.runtime ?? DEFAULT_RUNTIME,
    v1Compat: config.v1Compat ?? DEFAULT_V1_COMPAT,
    module: config.module,
  };
}

function resolveQt(qt?: QmltsConfig['qt']): ResolvedQtConfig {
  return {
    dir: qt?.dir,
    modules: qt?.modules ?? [],
    targetVersion: qt?.targetVersion ?? DEFAULT_TARGET_VERSION,
  };
}

function resolveBuild(build?: QmltsConfig['build']): ResolvedBuildConfig {
  return {
    aot: build?.aot ?? false,
    lint: build?.lint ?? true,
    format: build?.format ?? true,
    sourceMaps: build?.sourceMaps ?? true,
    incremental: build?.incremental ?? true,
    concurrency: build?.concurrency ?? availableParallelism(),
    lintOptions: build?.lintOptions,
    formatOptions: build?.formatOptions,
    compilerOptions: build?.compilerOptions,
    qualityGate: build?.qualityGate ?? DEFAULT_QUALITY_GATE,
    mode: build?.mode ?? DEFAULT_BUILD_MODE,
    minify: build?.minify ?? false,
  };
}

function resolveHost(host?: QmltsConfig['host']): ResolvedHostConfig {
  return {
    prebuilt: host?.prebuilt ?? true,
    cargo: resolveCargo(host?.cargo),
    customPath: host?.customPath,
  };
}

function resolveCargo(cargo?: CargoConfig): ResolvedCargoConfig {
  return {
    args: cargo?.args ?? [],
    profile: cargo?.profile ?? DEFAULT_CARGO_PROFILE,
    target: cargo?.target,
  };
}

function resolveDev(dev?: QmltsConfig['dev']): ResolvedDevConfig {
  return {
    hotReload: dev?.hotReload ?? true,
    watchPaths: dev?.watchPaths ?? [...DEFAULT_WATCH_PATHS],
    debounceMs: dev?.debounceMs ?? DEFAULT_DEBOUNCE_MS,
    ignorePatterns: dev?.ignorePatterns ?? [],
    port: dev?.port ?? 0,
    notify: dev?.notify ?? true,
    preserveOnError: dev?.preserveOnError ?? true,
  };
}

function resolveAssets(assets?: QmltsConfig['assets']): ResolvedAssetsConfig {
  return {
    dir: assets?.dir ?? DEFAULT_ASSETS_DIR,
    include: assets?.include ?? [...DEFAULT_ASSETS_INCLUDE],
    exclude: assets?.exclude ?? [],
    useQrc: assets?.useQrc ?? false,
    optimize: assets?.optimize ?? false,
  };
}

function resolveDistribute(dist?: QmltsConfig['distribute']): ResolvedDistributeConfig {
  return {
    targets: dist?.targets ?? [],
    bundleQt: dist?.bundleQt ?? false,
    icon: dist?.icon,
    appName: dist?.appName,
    appVersion: dist?.appVersion,
  };
}
