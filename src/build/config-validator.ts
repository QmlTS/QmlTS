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
  validateTopLevelKeys(config);

  if (config.entry !== undefined) {
    if (typeof config.entry !== 'string') {
      throw new ConfigError('entry', config.entry, 'entry must be a string');
    }
    if (config.entry.length === 0) {
      throw new ConfigError('entry', config.entry, 'entry must not be empty');
    }
  }

  if (config.outDir !== undefined) {
    if (typeof config.outDir !== 'string') {
      throw new ConfigError('outDir', config.outDir, 'outDir must be a string');
    }
    if (config.outDir.length === 0) {
      throw new ConfigError('outDir', config.outDir, 'outDir must not be empty');
    }
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
  if (config.distribute !== undefined) {
    validateDistribute(config.distribute);
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
  if (qt.modules !== undefined) {
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
  if (build.concurrency !== undefined) {
    if (
      typeof build.concurrency !== 'number' ||
      build.concurrency < 1 ||
      !Number.isInteger(build.concurrency)
    ) {
      throw new ConfigError(
        'build.concurrency',
        build.concurrency,
        'build.concurrency must be a positive integer',
      );
    }
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
}

function validateHost(host: NonNullable<QmltsConfig['host']>): void {
  if (host.cargo?.profile !== undefined && !VALID_CARGO_PROFILES.has(host.cargo.profile)) {
    throw new ConfigError(
      'host.cargo.profile',
      host.cargo.profile,
      "host.cargo.profile must be 'dev' or 'release'",
    );
  }
}

function validateDev(dev: NonNullable<QmltsConfig['dev']>): void {
  if (dev.debounceMs !== undefined && (typeof dev.debounceMs !== 'number' || dev.debounceMs < 0)) {
    throw new ConfigError(
      'dev.debounceMs',
      dev.debounceMs,
      'dev.debounceMs must be a non-negative number',
    );
  }
  if (dev.port !== undefined && (typeof dev.port !== 'number' || dev.port < 0)) {
    throw new ConfigError('dev.port', dev.port, 'dev.port must be a non-negative number');
  }
}

function validateDistribute(dist: NonNullable<QmltsConfig['distribute']>): void {
  if (dist.targets !== undefined) {
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
}
