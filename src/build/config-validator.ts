import { ConfigError } from './config-error.js';
import type { QmltsConfig } from './config-types.js';

const VALID_TOP_LEVEL_KEYS = new Set([
  'entry',
  'outDir',
  'qt',
  'build',
  'host',
  'dev',
  'assets',
  'distribute',
  'qmlModulePaths',
]);

const VALID_PLATFORM_TARGETS = new Set(['win32-x64', 'linux-x64', 'darwin-x64', 'darwin-arm64']);
const VALID_BUILD_MODES = new Set(['development', 'production']);
const VALID_QUALITY_GATES = new Set(['syntax', 'lint', 'compile', 'full']);
const VALID_CARGO_PROFILES = new Set(['dev', 'release']);

const QT_MODULE_PATTERN = /^[A-Za-z][A-Za-z0-9]*(\.[A-Za-z][A-Za-z0-9]*)*$/;

export function validateConfig(config: QmltsConfig): void {
  validateObject(config, 'config');
  validateTopLevelKeys(config);

  if (config.entry !== undefined) {
    validateString(config.entry, 'entry');
  }

  if (config.outDir !== undefined) {
    validateString(config.outDir, 'outDir');
  }

  if (config.qmlModulePaths !== undefined) {
    validateStringArray(config.qmlModulePaths, 'qmlModulePaths');
  }
  if (config.qt !== undefined) {
    validateQt(config.qt);
  }
  if (config.build !== undefined) {
    validateBuild(config.build);
  }
  if (config.host !== undefined) {
    validateHost(config.host);
  }
  if (config.dev !== undefined) {
    validateDev(config.dev);
  }
  if (config.assets !== undefined) {
    validateAssets(config.assets);
  }
  if (config.distribute !== undefined) {
    validateDistribute(config.distribute);
  }
}

function validateObject(value: unknown, field: string): void {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new ConfigError(field, value, `${field} must be an object`);
  }
}

function validateString(value: unknown, field: string): asserts value is string {
  if (typeof value !== 'string') {
    throw new ConfigError(field, value, `${field} must be a string`);
  }
  if (value.length === 0) {
    throw new ConfigError(field, value, `${field} must not be empty`);
  }
}

function validateBoolean(value: unknown, field: string): void {
  if (typeof value !== 'boolean') {
    throw new ConfigError(field, value, `${field} must be a boolean`);
  }
}

function validateNonNegativeNumber(value: unknown, field: string): void {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
    throw new ConfigError(field, value, `${field} must be a non-negative number`);
  }
}

function validatePositiveInteger(value: unknown, field: string): void {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 1) {
    throw new ConfigError(field, value, `${field} must be a positive integer`);
  }
}

function validateStringArray(value: unknown, field: string): asserts value is readonly string[] {
  if (!Array.isArray(value)) {
    throw new ConfigError(field, value, `${field} must be an array of strings`);
  }

  for (const [index, entry] of value.entries()) {
    if (typeof entry !== 'string') {
      throw new ConfigError(field, value, `${field} must be an array of strings`);
    }
    if (entry.length === 0) {
      throw new ConfigError(`${field}[${index}]`, entry, `${field} entries must not be empty`);
    }
  }
}

function validateTopLevelKeys(config: QmltsConfig): void {
  for (const key of Object.keys(config)) {
    if (!VALID_TOP_LEVEL_KEYS.has(key)) {
      throw new ConfigError(
        key,
        (config as Record<string, unknown>)[key],
        `Unknown config field '${key}'`,
      );
    }
  }
}

function validateQt(qt: NonNullable<QmltsConfig['qt']>): void {
  validateObject(qt, 'qt');

  if (qt.dir !== undefined) {
    validateString(qt.dir, 'qt.dir');
  }
  if (qt.targetVersion !== undefined) {
    validateString(qt.targetVersion, 'qt.targetVersion');
  }
  if (qt.modules !== undefined) {
    validateStringArray(qt.modules, 'qt.modules');
    for (const mod of qt.modules) {
      if (!QT_MODULE_PATTERN.test(mod)) {
        throw new ConfigError(
          'qt.modules',
          mod,
          `Invalid Qt module name '${mod}'. Module names must start with a letter and contain only letters, digits, and dots.`,
        );
      }
    }
  }
}

function validateBuild(build: NonNullable<QmltsConfig['build']>): void {
  validateObject(build, 'build');

  if (build.aot !== undefined) {
    validateBoolean(build.aot, 'build.aot');
  }
  if (build.lint !== undefined) {
    validateBoolean(build.lint, 'build.lint');
  }
  if (build.format !== undefined) {
    validateBoolean(build.format, 'build.format');
  }
  if (build.sourceMaps !== undefined) {
    validateBoolean(build.sourceMaps, 'build.sourceMaps');
  }
  if (build.incremental !== undefined) {
    validateBoolean(build.incremental, 'build.incremental');
  }
  if (build.concurrency !== undefined) {
    validatePositiveInteger(build.concurrency, 'build.concurrency');
  }
  if (build.mode !== undefined && !VALID_BUILD_MODES.has(build.mode)) {
    throw new ConfigError(
      'build.mode',
      build.mode,
      "build.mode must be 'development' or 'production'",
    );
  }
  if (build.qualityGate !== undefined && !VALID_QUALITY_GATES.has(build.qualityGate)) {
    throw new ConfigError(
      'build.qualityGate',
      build.qualityGate,
      `build.qualityGate must be one of: ${[...VALID_QUALITY_GATES].join(', ')}`,
    );
  }
  if (build.minify !== undefined) {
    validateBoolean(build.minify, 'build.minify');
  }
}

function validateHost(host: NonNullable<QmltsConfig['host']>): void {
  validateObject(host, 'host');

  if (host.prebuilt !== undefined) {
    validateBoolean(host.prebuilt, 'host.prebuilt');
  }
  if (host.customPath !== undefined) {
    validateString(host.customPath, 'host.customPath');
  }
  if (host.cargo !== undefined) {
    validateObject(host.cargo, 'host.cargo');
    if (host.cargo.args !== undefined) {
      validateStringArray(host.cargo.args, 'host.cargo.args');
    }
    if (host.cargo.target !== undefined) {
      validateString(host.cargo.target, 'host.cargo.target');
    }
  }
  if (host.cargo?.profile !== undefined && !VALID_CARGO_PROFILES.has(host.cargo.profile)) {
    throw new ConfigError(
      'host.cargo.profile',
      host.cargo.profile,
      "host.cargo.profile must be 'dev' or 'release'",
    );
  }
}

function validateDev(dev: NonNullable<QmltsConfig['dev']>): void {
  validateObject(dev, 'dev');

  if (dev.hotReload !== undefined) {
    validateBoolean(dev.hotReload, 'dev.hotReload');
  }
  if (dev.watchPaths !== undefined) {
    validateStringArray(dev.watchPaths, 'dev.watchPaths');
  }
  if (dev.debounceMs !== undefined) {
    validateNonNegativeNumber(dev.debounceMs, 'dev.debounceMs');
  }
  if (dev.ignorePatterns !== undefined) {
    validateStringArray(dev.ignorePatterns, 'dev.ignorePatterns');
  }
  if (dev.port !== undefined) {
    validateNonNegativeNumber(dev.port, 'dev.port');
    if (!Number.isInteger(dev.port) || dev.port > 65_535) {
      throw new ConfigError('dev.port', dev.port, 'dev.port must be an integer between 0 and 65535');
    }
  }
  if (dev.notify !== undefined) {
    validateBoolean(dev.notify, 'dev.notify');
  }
  if (dev.preserveOnError !== undefined) {
    validateBoolean(dev.preserveOnError, 'dev.preserveOnError');
  }
}

function validateAssets(assets: NonNullable<QmltsConfig['assets']>): void {
  validateObject(assets, 'assets');

  if (assets.dir !== undefined) {
    validateString(assets.dir, 'assets.dir');
  }
  if (assets.include !== undefined) {
    validateStringArray(assets.include, 'assets.include');
  }
  if (assets.exclude !== undefined) {
    validateStringArray(assets.exclude, 'assets.exclude');
  }
  if (assets.useQrc !== undefined) {
    validateBoolean(assets.useQrc, 'assets.useQrc');
  }
  if (assets.optimize !== undefined) {
    validateBoolean(assets.optimize, 'assets.optimize');
  }
}

function validateDistribute(dist: NonNullable<QmltsConfig['distribute']>): void {
  validateObject(dist, 'distribute');

  if (dist.targets !== undefined) {
    validateStringArray(dist.targets, 'distribute.targets');
    for (const target of dist.targets) {
      if (!VALID_PLATFORM_TARGETS.has(target)) {
        throw new ConfigError(
          'distribute.targets',
          target,
          `Invalid platform target '${target}'. Must be one of: ${[...VALID_PLATFORM_TARGETS].join(', ')}`,
        );
      }
    }
  }
  if (dist.bundleQt !== undefined) {
    validateBoolean(dist.bundleQt, 'distribute.bundleQt');
  }
  if (dist.icon !== undefined) {
    validateString(dist.icon, 'distribute.icon');
  }
  if (dist.appName !== undefined) {
    validateString(dist.appName, 'distribute.appName');
  }
  if (dist.appVersion !== undefined) {
    validateString(dist.appVersion, 'distribute.appVersion');
  }
}
