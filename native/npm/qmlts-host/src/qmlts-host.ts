/**
 * QmltsHost - High-level TypeScript wrapper around the native host engine.
 *
 * Manages the lifecycle of the Qt engine and provides a typed API for
 * loading QML, registering ViewModels, and synchronizing state.
 *
 * @example
 * ```typescript
 * const host = new QmltsHost();
 * host.registerViewModel('LoginViewModel');
 * host.syncState('LoginViewModel', 'username', '"alice"');
 * host.loadString('import QtQuick; Item { property string u: vm.username }');
 * host.processEvents();
 * host.dispose();
 * ```
 */

import type { EngineConfig, QmltsEngine } from './types';

// Native binding functions — loaded lazily via the published ESM entry point.
// We import the barrel index so the native .node resolution runs once.
import {
	addImportPath,
	addPluginPath,
	createEngine,
	destroyEngine,
	exec,
	getRegisteredTypes,
	hasBridgeType,
	loadFile,
	loadString,
	processEvents,
	processEventsFor,
	quit,
	registerViewModel,
	syncState,
	syncStateBatch,
	getProperty,
	version,
	qtVersion,
} from './index';

export class QmltsHost {
	private engine: QmltsEngine | null;

	/**
	 * Create a new QmltsHost instance.
	 *
	 * The underlying Qt engine is created immediately.
	 *
	 * @param config - Optional engine configuration.
	 * @throws Error if Qt initialization fails.
	 */
	constructor(config?: EngineConfig) {
		this.engine = createEngine(config);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Lifecycle
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Destroy the engine and release resources.
	 *
	 * After calling dispose(), all further method calls will throw.
	 */
	dispose(): void {
		const eng = this.requireEngine();
		destroyEngine(eng);
		this.engine = null;
	}

	/** Whether the engine has been disposed. */
	get isDisposed(): boolean {
		return this.engine === null;
	}

	// ────────────────────────────────────────────────────────────────────
	//  Engine info
	// ────────────────────────────────────────────────────────────────────

	/** QmlTS runtime version. */
	get runtimeVersion(): string {
		return version();
	}

	/** Qt runtime version. */
	get qtRuntimeVersion(): string {
		return qtVersion();
	}

	// ────────────────────────────────────────────────────────────────────
	//  QML loading
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Load a QML document from a file.
	 *
	 * @param path - Path to the QML file.
	 * @throws Error if the file is not found or contains QML errors.
	 */
	loadFile(path: string): void {
		const eng = this.requireEngine();
		loadFile(eng, path);
	}

	/**
	 * Load a QML document from a string.
	 *
	 * @param qmlSource - QML source code.
	 * @param baseUrl - Optional base URL for resolving relative imports.
	 * @throws Error if the QML contains syntax errors.
	 */
	loadString(qmlSource: string, baseUrl?: string): void {
		const eng = this.requireEngine();
		loadString(eng, qmlSource, baseUrl);
	}

	/**
	 * Add a QML import search path.
	 */
	addImportPath(path: string): void {
		const eng = this.requireEngine();
		addImportPath(eng, path);
	}

	/**
	 * Add a Qt plugin search path.
	 */
	addPluginPath(path: string): void {
		const eng = this.requireEngine();
		addPluginPath(eng, path);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Bridge registry
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Register a ViewModel bridge type by class name.
	 *
	 * Must be called before loading QML.
	 *
	 * @param className - ViewModel class name (e.g., "LoginViewModel").
	 * @throws Error if the class name is not found or QML already loaded.
	 */
	registerViewModel(className: string): void {
		const eng = this.requireEngine();
		registerViewModel(eng, className);
	}

	/**
	 * Get all registered bridge type names.
	 *
	 * @returns Sorted array of ViewModel class names.
	 */
	getRegisteredTypes(): string[] {
		const eng = this.requireEngine();
		return getRegisteredTypes(eng);
	}

	/**
	 * Check whether a bridge type is available.
	 */
	hasBridgeType(className: string): boolean {
		const eng = this.requireEngine();
		return hasBridgeType(eng, className);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Property synchronization (Step 3)
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Synchronize a single TypeScript property value into the active ViewModel.
	 *
	 * @param className - ViewModel class name (must match the active bridge).
	 * @param propertyName - Property name as declared in the schema.
	 * @param jsonValue - JSON-encoded value to set.
	 * @throws Error if class name doesn't match, property not found, or type mismatch.
	 */
	syncState(className: string, propertyName: string, jsonValue: string): void {
		const eng = this.requireEngine();
		syncState(eng, className, propertyName, jsonValue);
	}

	/**
	 * Synchronize a batch of property values into the active ViewModel.
	 *
	 * @param className - ViewModel class name (must match the active bridge).
	 * @param jsonStateMap - JSON object mapping property names to values.
	 * @throws Error with details of any failed properties.
	 */
	syncStateBatch(className: string, jsonStateMap: string): void {
		const eng = this.requireEngine();
		syncStateBatch(eng, className, jsonStateMap);
	}

	/**
	 * Read a property value from the active ViewModel as a JSON string.
	 *
	 * @param className - ViewModel class name (must match the active bridge).
	 * @param propertyName - Property name to read.
	 * @returns JSON-encoded property value.
	 */
	getProperty(className: string, propertyName: string): string {
		const eng = this.requireEngine();
		return getProperty(eng, className, propertyName);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Event loop
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Start the Qt event loop (blocking).
	 *
	 * @returns Exit code from the event loop.
	 */
	exec(): number {
		const eng = this.requireEngine();
		return exec(eng);
	}

	/**
	 * Request the Qt event loop to quit.
	 */
	quit(exitCode?: number): void {
		const eng = this.requireEngine();
		quit(eng, exitCode);
	}

	/**
	 * Process all pending Qt events (non-blocking).
	 */
	processEvents(): void {
		const eng = this.requireEngine();
		processEvents(eng);
	}

	/**
	 * Process Qt events for up to the specified duration.
	 */
	processEventsFor(timeoutMs: number): void {
		const eng = this.requireEngine();
		processEventsFor(eng, timeoutMs);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Internal
	// ────────────────────────────────────────────────────────────────────

	private requireEngine(): QmltsEngine {
		if (this.engine === null) {
			throw new Error('QmltsHost has been disposed');
		}
		return this.engine;
	}
}
