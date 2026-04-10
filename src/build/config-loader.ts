import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { applyDefaults } from './config-defaults.js';
import { ConfigError } from './config-error.js';
import type { QmltsConfig, ResolvedQmltsConfig } from './config-types.js';
import { validateConfig } from './config-validator.js';

export async function loadConfig(configPath: string): Promise<ResolvedQmltsConfig> {
  const absolutePath = resolve(configPath);

  if (!existsSync(absolutePath)) {
    throw new ConfigError('configPath', configPath, `Config file not found: ${absolutePath}`);
  }

  let raw: QmltsConfig;
  try {
    const fileUrl = pathToFileURL(absolutePath).href;
    const mod = await import(fileUrl);
    raw = mod.default ?? mod;
  } catch (e) {
    throw new ConfigError(
      'configFile',
      configPath,
      `Failed to load config file: ${e instanceof Error ? e.message : String(e)}`,
    );
  }

  if (raw === null || raw === undefined || typeof raw !== 'object') {
    throw new ConfigError('configFile', raw, 'Config file must export an object as default export');
  }

  validateConfig(raw);

  const configDir = dirname(absolutePath);
  return applyDefaults(raw, configDir);
}
