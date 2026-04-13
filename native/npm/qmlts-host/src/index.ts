/**
 * @qmlts/host - QmlTS Native Host
 *
 * This module provides the native bridge to Qt QML via napi-rs.
 * It wraps Qt's QGuiApplication and QQmlEngine for loading and
 * running QML documents from TypeScript.
 *
 * @example
 * ```typescript
 * import {
 *   createEngine,
 *   loadString,
 *   processEvents,
 *   destroyEngine,
 *   version,
 *   qtVersion
 * } from '@qmlts/host';
 *
 * const engine = createEngine();
 * loadString(engine, 'import QtQuick; Item { }');
 *
 * // Non-blocking event loop
 * setInterval(() => processEvents(engine), 16);
 *
 * // Or blocking event loop
 * // exec(engine);
 * ```
 *
 * @module
 */

// Native binding resolution
// napi-rs generates platform-specific .node files that we need to load

import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Load the native binding for the current platform.
 * napi-rs naming convention: qmlts-host.<platform>-<arch>-<abi>.node
 */
function loadNativeBinding(): typeof import('./types') {
  const platform = process.platform;
  const arch = process.arch;

  // Try common platform-specific bindings first
  const platformBindings: Record<string, string> = {
    'win32-x64': 'qmlts-host.win32-x64-msvc.node',
    'linux-x64': 'qmlts-host.linux-x64-gnu.node',
    'darwin-x64': 'qmlts-host.darwin-x64.node',
    'darwin-arm64': 'qmlts-host.darwin-arm64.node',
  };

  const key = `${platform}-${arch}`;
  const bindingName = platformBindings[key];

  if (!bindingName) {
    throw new Error(
      `Unsupported platform: ${platform}-${arch}. ` +
      `Supported platforms: ${Object.keys(platformBindings).join(', ')}`
    );
  }

  try {
    // Try to load from the same directory as this module
    return require(join(__dirname, bindingName));
  } catch (e) {
    // Try fallback locations
    const fallbackPaths = [
      join(__dirname, '..', bindingName),
      join(__dirname, '..', 'build', 'Release', bindingName),
      join(__dirname, '..', '..', 'target', 'release', bindingName),
    ];

    for (const path of fallbackPaths) {
      try {
        return require(path);
      } catch {
        // Continue to next path
      }
    }

    throw new Error(
      `Failed to load native binding '${bindingName}'. ` +
      `Ensure the native module is built for ${platform}-${arch}.\n` +
      `Original error: ${e instanceof Error ? e.message : String(e)}`
    );
  }
}

// Export all bindings from the native module
const nativeModule = loadNativeBinding();

// Re-export everything from native module
export const {
	// Engine lifecycle
	createEngine,
	destroyEngine,
	version,
	qtVersion,
	// QML loading
	loadFile,
	loadString,
	addImportPath,
	addPluginPath,
	// Bridge registry
	registerViewModel,
	getRegisteredTypes,
	hasBridgeType,
	// Property synchronization
	syncState,
	syncStateBatch,
	getProperty,
	// Command dispatch & lifecycle
	registerInvokeHandler,
	registerLifecycleHandler,
	// Effect emission
	emitEffect,
	emitEffectById,
	// List model
	createListModel,
	destroyListModel,
	setListData,
	insertRows,
	removeRows,
	updateRow,
	moveRows,
	rowCount,
	getRow,
	// Hot reload
	captureSnapshot,
	reloadQml,
	restoreSnapshot,
	// Error overlay
	showErrorOverlay,
	hideErrorOverlay,
	isErrorOverlayVisible,
	// Event loop
	exec,
	quit,
	processEvents,
	processEventsFor,
} = nativeModule;

// Export types
export type { QmltsEngine, EngineConfig } from './types';

// Export high-level classes
export { QmltsHost } from './qmlts-host';
export { ViewModelManager } from './viewmodel-manager';
export { DevServer } from './dev-server';
export type {
	ViewModelManagerSchema,
	ViewModelInstance,
	CommandHandler,
	LifecycleHandler,
} from './viewmodel-manager';
export type { HotReloadOptions, HotReloadEvent } from './dev-server';
