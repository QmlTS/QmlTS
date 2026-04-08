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
