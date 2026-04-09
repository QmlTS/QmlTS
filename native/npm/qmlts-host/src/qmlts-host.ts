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
	registerInvokeHandler,
	registerLifecycleHandler,
	emitEffect,
	emitEffectById,
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
	 * Calling dispose() on an already-disposed host is a safe no-op.
	 */
	dispose(): void {
		if (this.engine === null) {
			return;
		}
		destroyEngine(this.engine);
		this.engine = null;
	}

	/** Whether the engine has been disposed. */
	get isDisposed(): boolean {
		return this.engine === null;
	}

	/** Whether the engine is currently alive. */
	get isInitialized(): boolean {
		return !this.isDisposed;
	}

	// ────────────────────────────────────────────────────────────────────
	//  Engine info
	// ────────────────────────────────────────────────────────────────────

	/** QmlTS runtime version. */
	get version(): string {
		this.requireEngine();
		return version();
	}

	/** Qt runtime version. */
	get qtVersion(): string {
		this.requireEngine();
		return qtVersion();
	}

	/** All registered bridge type names. */
	get registeredTypes(): string[] {
		const eng = this.requireEngine();
		return getRegisteredTypes(eng);
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
	 * Load a QML document from a string.
	 *
	 * Alias for `loadString()` to match the higher-level runtime naming.
	 */
	loadQml(qmlSource: string, baseUrl?: string): void {
		this.loadString(qmlSource, baseUrl);
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
	 * @param value - Property value to serialize as JSON and set.
	 * @throws Error if class name doesn't match, property not found, or type mismatch.
	 */
	syncState(className: string, propertyName: string, value: unknown): void {
		const eng = this.requireEngine();
		syncState(
			eng,
			className,
			propertyName,
			this.serializeJson(
				value,
				`QmltsHost.syncState(${className}.${propertyName})`,
			),
		);
	}

	/**
	 * Synchronize a batch of property values into the active ViewModel.
	 *
	 * @param className - ViewModel class name (must match the active bridge).
	 * @param state - Object mapping property names to values.
	 * @throws Error with details of any failed properties.
	 */
	syncStateBatch(className: string, state: Record<string, unknown>): void {
		const eng = this.requireEngine();
		syncStateBatch(
			eng,
			className,
			this.serializeJson(state, `QmltsHost.syncStateBatch(${className})`),
		);
	}

	/**
	 * Read a property value from the active ViewModel as a JSON string.
	 *
	 * @param className - ViewModel class name (must match the active bridge).
	 * @param propertyName - Property name to read.
	 * @returns Parsed property value.
	 */
	getProperty<T = unknown>(className: string, propertyName: string): T {
		const eng = this.requireEngine();
		const jsonValue = getProperty(eng, className, propertyName);
		try {
			return JSON.parse(jsonValue) as T;
		} catch (error) {
			throw new Error(
				`QmltsHost.getProperty(${className}.${propertyName}) returned invalid JSON: ${
					error instanceof Error ? error.message : String(error)
				}`,
			);
		}
	}

	// ────────────────────────────────────────────────────────────────────
	//  Command dispatch & lifecycle (Step 4)
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Register a command invoke handler.
	 *
	 * Called when QML executes `__qmlts.invoke(commandId)`.
	 *
	 * @param callback - Receives (className, commandId).
	 */
	registerInvokeHandler(
		callback: (className: string, commandId: number) => void,
	): void {
		const eng = this.requireEngine();
		registerInvokeHandler(eng, callback);
	}

	/**
	 * Register a lifecycle event handler.
	 *
	 * Called when QML executes `__qmlts.onMounted()` or `__qmlts.onUnmounting()`.
	 *
	 * @param callback - Receives (className, event).
	 */
	registerLifecycleHandler(
		callback: (className: string, event: string) => void,
	): void {
		const eng = this.requireEngine();
		registerLifecycleHandler(eng, callback);
	}

	// ────────────────────────────────────────────────────────────────────
	//  Effect emission (Step 4)
	// ────────────────────────────────────────────────────────────────────

	/**
	 * Emit an effect signal on the active runtime QObject by name.
	 *
	 * @param className - ViewModel class name.
	 * @param effectName - Effect name from the schema.
	 * @param payload - Optional payload arguments.
	 */
	emitEffect(
		className: string,
		effectName: string,
		...payload: unknown[]
	): void {
		const eng = this.requireEngine();
		const json = payload.length > 0 ? JSON.stringify(payload) : undefined;
		emitEffect(eng, className, effectName, json);
	}

	/**
	 * Emit an effect signal on the active runtime QObject by effect ID.
	 *
	 * @param className - ViewModel class name.
	 * @param effectId - Numeric effect ID from the schema.
	 * @param payload - Optional payload arguments.
	 */
	emitEffectById(
		className: string,
		effectId: number,
		...payload: unknown[]
	): void {
		const eng = this.requireEngine();
		const json = payload.length > 0 ? JSON.stringify(payload) : undefined;
		emitEffectById(eng, className, effectId, json);
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
	processEvents(timeoutMs?: number): void {
		const eng = this.requireEngine();
		if (timeoutMs === undefined) {
			processEvents(eng);
			return;
		}
		processEventsFor(eng, timeoutMs);
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

	private serializeJson(value: unknown, context: string): string {
		const json = JSON.stringify(value);
		if (json === undefined) {
			throw new Error(`${context} could not serialize value to JSON`);
		}
		return json;
	}
}
