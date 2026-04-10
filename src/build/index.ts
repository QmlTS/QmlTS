// ─── Config ─────────────────────────────────────────────────
export { applyDefaults } from './config-defaults.js';
export { ConfigError } from './config-error.js';
export { loadConfig } from './config-loader.js';
// ─── Types ──────────────────────────────────────────────────
export type {
  AssetsConfig,
  CargoConfig,
  DevConfig,
  DistributeConfig,
  HostConfig,
  PlatformTarget,
  QmltsConfig,
  QtConfig,
  ResolvedAssetsConfig,
  ResolvedBuildConfig,
  ResolvedCargoConfig,
  ResolvedDevConfig,
  ResolvedDistributeConfig,
  ResolvedHostConfig,
  ResolvedQmltsConfig,
  ResolvedQtConfig,
} from './config-types.js';
export { defineConfig } from './define-config.js';
// Note: BuildConfig is not re-exported here to avoid collision with
// registry/types.ts BuildConfig. Import directly from './config-types.js'
// or use QmltsConfig['build'] / ResolvedBuildConfig instead.
