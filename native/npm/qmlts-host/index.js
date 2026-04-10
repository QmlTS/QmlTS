/**
 * @qmlts/host - published ESM entry point
 *
 * This file is intentionally checked in for the bootstrap phase so the package
 * can be consumed without a separate JS build step.
 */

import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

function resolveBindingName() {
  const platformBindings = {
    'win32-x64': 'qmlts-host.win32-x64-msvc.node',
    'linux-x64': 'qmlts-host.linux-x64-gnu.node',
    'darwin-x64': 'qmlts-host.darwin-x64.node',
    'darwin-arm64': 'qmlts-host.darwin-arm64.node',
  };

  const key = `${process.platform}-${process.arch}`;
  const bindingName = platformBindings[key];

  if (!bindingName) {
    throw new Error(
      `Unsupported platform: ${key}. Supported platforms: ${Object.keys(platformBindings).join(', ')}`,
    );
  }

  return bindingName;
}

function loadNativeBinding() {
  const bindingName = resolveBindingName();
  const fallbackPaths = [
    join(__dirname, bindingName),
    join(__dirname, 'build', 'Release', 'qmlts-host.node'),
    join(__dirname, 'build', 'Debug', 'qmlts-host.node'),
  ];

  let lastError;
  for (const candidate of fallbackPaths) {
    try {
      return require(candidate);
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(
    `Failed to load native binding '${bindingName}'. Ensure the addon is built for ${process.platform}-${process.arch}.\n` +
      `Last error: ${lastError instanceof Error ? lastError.message : String(lastError)}`,
  );
}

const nativeModule = loadNativeBinding();

export const {
  createEngine,
  destroyEngine,
  version,
  qtVersion,
  loadFile,
  loadString,
  addImportPath,
  addPluginPath,
  exec,
  quit,
  processEvents,
  processEventsFor,
  registerViewModel,
  getRegisteredTypes,
  hasBridgeType,
  activeRuntimeI32Property,
  syncState,
  syncStateBatch,
  getProperty,
  registerInvokeHandler,
  registerLifecycleHandler,
  emitEffect,
  emitEffectById,
  createListModel,
  destroyListModel,
  setListData,
  insertRows,
  removeRows,
  updateRow,
  moveRows,
  rowCount,
  getRow,
} = nativeModule;

export { QmltsHost } from './src/qmlts-host.ts';
export { ViewModelManager } from './src/viewmodel-manager.ts';
