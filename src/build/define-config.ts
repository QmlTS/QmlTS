import type { QmltsConfig } from './config-types.js';

export function defineConfig<T extends QmltsConfig>(config: T): T {
  return config;
}
