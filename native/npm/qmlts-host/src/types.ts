/**
 * @qmlts/host - Type definitions
 *
 * These types match the napi-rs generated bindings from the Rust code.
 * napi-rs will also auto-generate a .d.ts file, but we maintain
 * these manually for documentation purposes.
 */

/**
 * Engine configuration options.
 */
export interface EngineConfig {
  /** Qt plugin search paths. */
  pluginPaths?: string[];
  /** QML import search paths. */
  importPaths?: string[];
  /** Enable Qt logging forwarding. */
  enableLogging?: boolean;
}

/**
 * QmlTS Engine instance.
 *
 * This is an opaque handle to the native Qt engine.
 * Created via `createEngine()` and cleaned up automatically
 * when garbage collected, or explicitly via `destroyEngine()`.
 */
export interface QmltsEngine {
  /** Brand type for type safety - not actually present at runtime */
  readonly __brand: 'QmltsEngine';
}

// ────────────────────────────────────────────────────────────────────────────
// §1 Engine Lifecycle
// ────────────────────────────────────────────────────────────────────────────

/**
 * Create a new QmlTS engine instance.
 *
 * Initializes Qt's QGuiApplication (if not already initialized) and
 * creates a new QQmlEngine for loading and running QML documents.
 *
 * @param config - Optional engine configuration.
 * @returns A new QmltsEngine instance.
 * @throws Error if Qt initialization fails.
 */
export declare function createEngine(config?: EngineConfig): QmltsEngine;

/**
 * Destroy an engine instance.
 *
 * Explicitly releases engine resources. This is optional since the engine
 * will be automatically cleaned up when garbage collected.
 *
 * @param engine - The engine instance to destroy.
 */
export declare function destroyEngine(engine: QmltsEngine): void;

/**
 * Get the QmlTS runtime version.
 *
 * @returns Version string (e.g., "0.1.0").
 */
export declare function version(): string;

/**
 * Get the Qt runtime version.
 *
 * @returns Qt version string (e.g., "6.11.0").
 */
export declare function qtVersion(): string;

// ────────────────────────────────────────────────────────────────────────────
// §2 QML Loading
// ────────────────────────────────────────────────────────────────────────────

/**
 * Load a QML document from a file.
 *
 * @param engine - The engine instance.
 * @param path - Path to the QML file.
 * @throws Error if the file is not found or contains QML errors.
 */
export declare function loadFile(engine: QmltsEngine, path: string): void;

/**
 * Load a QML document from a string.
 *
 * @param engine - The engine instance.
 * @param qmlSource - QML source code.
 * @param baseUrl - Optional base URL for resolving relative imports.
 * @throws Error if the QML contains syntax errors.
 */
export declare function loadString(
  engine: QmltsEngine,
  qmlSource: string,
  baseUrl?: string
): void;

/**
 * Add a QML import search path.
 *
 * @param engine - The engine instance.
 * @param path - Directory path to add to import search paths.
 */
export declare function addImportPath(engine: QmltsEngine, path: string): void;

/**
 * Add a Qt plugin search path.
 *
 * @param engine - The engine instance.
 * @param path - Directory path to add to plugin search paths.
 */
export declare function addPluginPath(engine: QmltsEngine, path: string): void;

// ────────────────────────────────────────────────────────────────────────────
// §2b Bridge Registry
// ────────────────────────────────────────────────────────────────────────────

/**
 * Register a ViewModel bridge type by class name.
 *
 * Creates the bridge QObject pair and makes it available as `vm` and
 * `__qmlts` context properties in the QML engine. Must be called
 * before loading QML.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (e.g., "LoginViewModel").
 * @throws Error if the class name is not found or QML already loaded.
 */
export declare function registerViewModel(
  engine: QmltsEngine,
  className: string
): void;

/**
 * Get all registered bridge type names.
 *
 * @param engine - The engine instance.
 * @returns Sorted array of ViewModel class names.
 */
export declare function getRegisteredTypes(engine: QmltsEngine): string[];

/**
 * Check whether a bridge type is available.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name to check.
 * @returns `true` if the bridge type exists in the registry.
 */
export declare function hasBridgeType(
  engine: QmltsEngine,
  className: string
): boolean;

// ────────────────────────────────────────────────────────────────────────────
// §2c Property Synchronization
// ────────────────────────────────────────────────────────────────────────────

/**
 * Synchronize a single TypeScript property value into the active ViewModel.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param propertyName - Property name as declared in the schema.
 * @param jsonValue - JSON-encoded value to set.
 * @throws Error if class name doesn't match, property not found, or type mismatch.
 */
export declare function syncState(
	engine: QmltsEngine,
	className: string,
	propertyName: string,
	jsonValue: string,
): void;

/**
 * Synchronize a batch of property values into the active ViewModel.
 *
 * Uses best-effort semantics: all properties are attempted, failures collected.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param jsonStateMap - JSON object mapping property names to values.
 * @throws Error with details of any failed properties.
 */
export declare function syncStateBatch(
	engine: QmltsEngine,
	className: string,
	jsonStateMap: string,
): void;

/**
 * Read a property value from the active ViewModel as a JSON string.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param propertyName - Property name to read.
 * @returns JSON-encoded property value.
 * @throws Error if class name doesn't match or property not found.
 */
export declare function getProperty(
	engine: QmltsEngine,
	className: string,
	propertyName: string,
): string;

// ────────────────────────────────────────────────────────────────────────────
// §3 Event Loop
// ────────────────────────────────────────────────────────────────────────────

/**
 * Start the Qt event loop (blocking).
 *
 * This starts the Qt event loop and blocks until `quit()` is called.
 * Use `processEvents()` for non-blocking event processing.
 *
 * @param engine - The engine instance.
 * @returns Exit code from the event loop.
 */
export declare function exec(engine: QmltsEngine): number;

/**
 * Request the Qt event loop to quit.
 *
 * @param engine - The engine instance.
 * @param exitCode - Optional exit code (default: 0).
 */
export declare function quit(engine: QmltsEngine, exitCode?: number): void;

/**
 * Process all pending Qt events.
 *
 * This processes the Qt event queue and returns immediately.
 * Call this in a loop or timer for non-blocking event processing.
 *
 * @param engine - The engine instance.
 */
export declare function processEvents(engine: QmltsEngine): void;

/**
 * Process Qt events for up to the specified duration.
 *
 * @param engine - The engine instance.
 * @param timeoutMs - Maximum time to process events, in milliseconds.
 */
export declare function processEventsFor(
  engine: QmltsEngine,
  timeoutMs: number
): void;

// ────────────────────────────────────────────────────────────────────────────
// §4 Command Dispatch & Lifecycle
// ────────────────────────────────────────────────────────────────────────────

/**
 * Register a command invoke handler.
 *
 * The handler is called when QML calls `__qmlts.invoke(commandId)`.
 *
 * @param engine - The engine instance.
 * @param callback - Handler receiving (className, commandId).
 */
export declare function registerInvokeHandler(
	engine: QmltsEngine,
	callback: (
		error: Error | null,
		className: string,
		commandId: number,
	) => void,
): void;

/**
 * Register a lifecycle event handler.
 *
 * The handler is called when QML calls `__qmlts.onMounted()` or
 * `__qmlts.onUnmounting()`.
 *
 * @param engine - The engine instance.
 * @param callback - Handler receiving (className, event).
 */
export declare function registerLifecycleHandler(
	engine: QmltsEngine,
	callback: (
		error: Error | null,
		className: string,
		event: string,
	) => void,
): void;

// ────────────────────────────────────────────────────────────────────────────
// §5 Effect Emission
// ────────────────────────────────────────────────────────────────────────────

/**
 * Emit an effect signal on the active runtime QObject by effect name.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param effectName - Effect name as declared in the schema.
 * @param payloadJson - Optional JSON-encoded payload.
 * @throws Error if the effect name is not found or no bridge is active.
 */
export declare function emitEffect(
	engine: QmltsEngine,
	className: string,
	effectName: string,
	payloadJson?: string,
): void;

/**
 * Emit an effect signal on the active runtime QObject by effect ID.
 *
 * @param engine - The engine instance.
 * @param className - ViewModel class name (must match the active bridge).
 * @param effectId - Numeric effect ID.
 * @param payloadJson - Optional JSON-encoded payload.
 * @throws Error if no effect with the given ID exists.
 */
export declare function emitEffectById(
	engine: QmltsEngine,
	className: string,
	effectId: number,
	payloadJson?: string,
): void;

// ────────────────────────────────────────────────────────────────────────────
// §7 List Model
// ────────────────────────────────────────────────────────────────────────────

/**
 * Create a new list model with the given roles schema.
 *
 * @param engine - The engine instance.
 * @param schemaJson - JSON schema with roles array, e.g., `{"roles":["name","value"]}`.
 * @returns Numeric model ID for subsequent list operations.
 * @throws Error if the schema is invalid.
 */
export declare function createListModel(
	engine: QmltsEngine,
	schemaJson: string,
): number;

/**
 * Destroy a list model by ID, releasing native resources.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID returned by `createListModel`.
 * @throws Error if the model ID is invalid.
 */
export declare function destroyListModel(
	engine: QmltsEngine,
	modelId: number,
): void;

/**
 * Replace all data in a list model.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param data - JSON array of row objects.
 */
export declare function setListData(
	engine: QmltsEngine,
	modelId: number,
	data: string,
): void;

/**
 * Insert rows into a list model at the given index.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param index - Insertion index.
 * @param rows - JSON array of row objects to insert.
 */
export declare function insertRows(
	engine: QmltsEngine,
	modelId: number,
	index: number,
	rows: string,
): void;

/**
 * Remove rows from a list model.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param index - Starting index.
 * @param count - Number of rows to remove.
 */
export declare function removeRows(
	engine: QmltsEngine,
	modelId: number,
	index: number,
	count: number,
): void;

/**
 * Update a single row in a list model.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param index - Row index to update.
 * @param data - JSON object with updated data.
 */
export declare function updateRow(
	engine: QmltsEngine,
	modelId: number,
	index: number,
	data: string,
): void;

/**
 * Move rows within a list model.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param source - Source row index.
 * @param dest - Destination row index.
 * @param count - Number of rows to move.
 */
export declare function moveRows(
	engine: QmltsEngine,
	modelId: number,
	source: number,
	dest: number,
	count: number,
): void;

/**
 * Get the row count of a list model.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @returns Number of rows in the model.
 */
export declare function rowCount(
	engine: QmltsEngine,
	modelId: number,
): number;

/**
 * Get a single row from a list model as JSON.
 *
 * @param engine - The engine instance.
 * @param modelId - Model ID.
 * @param index - Row index.
 * @returns JSON string of the row data.
 */
export declare function getRow(
	engine: QmltsEngine,
	modelId: number,
	index: number,
): string;

// ────────────────────────────────────────────────────────────────────────────
// §8 Hot Reload
// ────────────────────────────────────────────────────────────────────────────

/**
 * Capture the current UI state as a JSON snapshot.
 *
 * Returns a JSON string containing window geometry, focus state,
 * and scroll positions. Use `restoreSnapshot` to restore after reload.
 *
 * @param engine - The engine instance (must have QML loaded).
 * @returns JSON snapshot string.
 * @throws Error if no QML is loaded.
 */
export declare function captureSnapshot(engine: QmltsEngine): string;

/**
 * Reload QML by loading a new root tree and swapping it in on success.
 *
 * Context properties (`vm`, `__qmlts`) survive the reload because they
 * are set on the engine's root context, not on the QML tree.
 *
 * @param engine - The engine instance.
 * @param newSource - New QML source string.
 * @param baseUrl - Optional base URL for relative imports.
 * @throws Error if no QML loaded or reload fails.
 */
export declare function reloadQml(
	engine: QmltsEngine,
	newSource: string,
	baseUrl?: string,
): void;

/**
 * Restore UI state from a previously captured snapshot.
 *
 * Applies window geometry and focus from the JSON snapshot.
 *
 * @param engine - The engine instance (must have QML loaded).
 * @param snapshotJson - JSON snapshot from `captureSnapshot`.
 * @throws Error if no QML loaded or snapshot is invalid.
 */
export declare function restoreSnapshot(
	engine: QmltsEngine,
	snapshotJson: string,
): void;
