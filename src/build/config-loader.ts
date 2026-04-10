import { existsSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { applyDefaults } from './config-defaults.js';
import { ConfigError } from './config-error.js';
import type { QmltsConfig, ResolvedQmltsConfig } from './config-types.js';
import { DEFAULT_ENTRY } from './config-defaults.js';
import { validateConfig } from './config-validator.js';
import { resolveQtDir } from '../qt-tools/toolchain.js';

export async function loadConfig(configPath = './qmlts.config.ts'): Promise<ResolvedQmltsConfig> {
  const absolutePath = resolve(configPath);

  if (!existsSync(absolutePath)) {
    throw new ConfigError('configPath', configPath, `Config file not found: ${absolutePath}`);
  }

  let raw: QmltsConfig;
  try {
    const fileUrl = `${pathToFileURL(absolutePath).href}?mtime=${statSync(absolutePath).mtimeMs}`;
    const mod = await import(fileUrl);
    raw = mod.default;
  } catch (e) {
    throw new ConfigError(
      'configFile',
      configPath,
      `Failed to load config file: ${e instanceof Error ? e.message : String(e)}`,
    );
  }

  if (raw === null || raw === undefined || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new ConfigError('configFile', raw, 'Config file must export an object as default export');
  }

  validateConfig(raw);

  const configDir = dirname(absolutePath);
  const resolvedConfig = normalizeResolvedConfig(applyDefaults(raw, configDir));
  validateResolvedConfig(resolvedConfig, raw);
  return resolvedConfig;
}

function normalizeResolvedConfig(config: ResolvedQmltsConfig): ResolvedQmltsConfig {
  return {
    ...config,
    entry: resolve(config.configDir, config.entry),
    outDir: resolve(config.configDir, config.outDir),
    qt: {
      ...config.qt,
      dir: config.qt.dir ? resolve(config.configDir, config.qt.dir) : resolveQtDir(),
    },
    host: {
      ...config.host,
      customPath: config.host.customPath
        ? resolve(config.configDir, config.host.customPath)
        : undefined,
    },
    dev: {
      ...config.dev,
      watchPaths: config.dev.watchPaths.map((watchPath) => resolve(config.configDir, watchPath)),
    },
    assets: {
      ...config.assets,
      dir: resolve(config.configDir, config.assets.dir),
    },
    distribute: {
      ...config.distribute,
      icon: config.distribute.icon ? resolve(config.configDir, config.distribute.icon) : undefined,
    },
    qmlModulePaths: config.qmlModulePaths.map((modulePath) => resolve(config.configDir, modulePath)),
  };
}

function validateResolvedConfig(
  config: ResolvedQmltsConfig,
  rawConfig: QmltsConfig,
): void {
  if (!existsSync(config.entry)) {
    throw new ConfigError(
      'entry',
      rawConfig.entry ?? DEFAULT_ENTRY,
      `Entry file not found: ${config.entry}`,
    );
  }
}
