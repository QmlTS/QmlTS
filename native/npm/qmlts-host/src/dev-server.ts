/**
 * DevServer - Hot reload orchestration layer.
 *
 * Implements the four-step hot reload pipeline:
 * 1. captureSnapshot  — save window geometry, focus, scroll
 * 2. reloadQml        — destroy old QML tree + load new QML
 * 3. rehydrate        — re-sync all ViewModel state to new QML tree
 * 4. restoreSnapshot  — restore visual state (geometry, focus)
 *
 * Optionally watches a directory for QML file changes and triggers
 * automatic reloads with debouncing.
 *
 * @example
 * ```typescript
 * const host = new QmltsHost();
 * const vmManager = new ViewModelManager(host);
 * const devServer = new DevServer(host, vmManager);
 *
 * // Manual reload
 * await devServer.reload('import QtQuick; Item { }');
 *
 * // Automatic file-watching
 * devServer.start('./qml', { debounceMs: 300 });
 * devServer.stop();
 * ```
 */

import type { QmltsHost } from './qmlts-host';
import type { ViewModelManager } from './viewmodel-manager';

/**
 * Hot reload configuration options.
 */
export interface HotReloadOptions {
	/** Whether to preserve window geometry across reloads (default: true). */
	preserveGeometry?: boolean;
	/** Whether to preserve focus state across reloads (default: true). */
	preserveFocus?: boolean;
	/** Whether to preserve scroll positions across reloads (default: true). */
	preserveScroll?: boolean;
	/** Debounce interval in milliseconds for file watcher (default: 300). */
	debounceMs?: number;
}

/**
 * Events emitted by the DevServer.
 */
export type HotReloadEvent =
	| 'reload-start'
	| 'reload-complete'
	| 'reload-error';

type EventHandler = (...args: unknown[]) => void;

export class DevServer {
	private host: QmltsHost;
	private vmManager: ViewModelManager;
	private running = false;
	private watcher: ReturnType<typeof import('node:fs').watch> | null = null;
	private debounceTimer: ReturnType<typeof setTimeout> | null = null;
	private eventHandlers: Map<HotReloadEvent, Set<EventHandler>> = new Map();
	private lastWatchedSource: string | null = null;

	/**
	 * Create a new DevServer instance.
	 *
	 * @param host - The QmltsHost engine wrapper.
	 * @param vmManager - The ViewModelManager for state rehydration.
	 */
	constructor(host: QmltsHost, vmManager: ViewModelManager) {
		this.host = host;
		this.vmManager = vmManager;
	}

	/**
	 * Whether the dev server is currently running (watching for changes).
	 */
	get isRunning(): boolean {
		return this.running;
	}

	/**
	 * Perform a full hot reload cycle.
	 *
	 * Executes the four-step pipeline:
	 * 1. Capture snapshot
	 * 2. Reload QML with new source
	 * 3. Rehydrate ViewModel state
	 * 4. Restore snapshot
	 *
	 * @param newQmlSource - New QML source string.
	 * @param options - Optional hot reload configuration.
	 * @throws Error if any step fails.
	 */
	async reload(
		newQmlSource: string,
		options?: HotReloadOptions,
	): Promise<void> {
		this.emit('reload-start');

		try {
			// Step 1: Capture snapshot
			let snapshot: string | null = null;
			try {
				snapshot = this.host.captureSnapshot();
			} catch {
				// If no QML was loaded yet, skip snapshot capture
			}

			// Step 2: Reload QML
			this.host.reloadQml(newQmlSource);

			// Process events to let Qt finish loading the new QML
			this.host.processEvents();

			// Step 3: Rehydrate ViewModel state
			this.vmManager.rehydrate();

			// Process events to let Qt apply the rehydrated state
			this.host.processEvents();

			// Step 4: Restore snapshot (if we captured one)
			if (snapshot) {
				const opts = {
					preserveGeometry: options?.preserveGeometry ?? true,
					preserveFocus: options?.preserveFocus ?? true,
					preserveScroll: options?.preserveScroll ?? true,
				};

				if (
					opts.preserveGeometry ||
					opts.preserveFocus ||
					opts.preserveScroll
				) {
					this.host.restoreSnapshot(snapshot);
				}
			}

			this.emit('reload-complete');
		} catch (error) {
			this.emit(
				'reload-error',
				error instanceof Error ? error : new Error(String(error)),
			);
			throw error;
		}
	}

	/**
	 * Start watching a directory for QML file changes.
	 *
	 * When a `.qml` file changes, the DevServer reads it and triggers
	 * a debounced reload.
	 *
	 * @param watchDir - Directory to watch for QML changes.
	 * @param options - Optional hot reload configuration.
	 */
	start(watchDir: string, options?: HotReloadOptions): void {
		if (this.running) {
			throw new Error('DevServer is already running');
		}

		const debounceMs = options?.debounceMs ?? 300;
		const fs = require('node:fs') as typeof import('node:fs');
		const path = require('node:path') as typeof import('node:path');

		this.running = true;

		this.watcher = fs.watch(
			watchDir,
			{ recursive: true },
			(eventType: string, filename: string | null) => {
				if (
					!filename ||
					!filename.endsWith('.qml') ||
					eventType !== 'change'
				) {
					return;
				}

				if (this.debounceTimer) {
					clearTimeout(this.debounceTimer);
				}

				this.debounceTimer = setTimeout(() => {
					this.debounceTimer = null;
					const filePath = path.join(watchDir, filename);
					try {
						const source = fs.readFileSync(filePath, 'utf-8');
						this.lastWatchedSource = source;
						this.reload(source, options).catch((error) => {
							this.emit(
								'reload-error',
								error instanceof Error
									? error
									: new Error(String(error)),
							);
						});
					} catch (error) {
						this.emit(
							'reload-error',
							error instanceof Error
								? error
								: new Error(String(error)),
						);
					}
				}, debounceMs);
			},
		);
	}

	/**
	 * Stop watching for file changes.
	 */
	stop(): void {
		if (this.debounceTimer) {
			clearTimeout(this.debounceTimer);
			this.debounceTimer = null;
		}
		if (this.watcher) {
			this.watcher.close();
			this.watcher = null;
		}
		this.running = false;
	}

	/**
	 * Register an event handler.
	 *
	 * @param event - Event name.
	 * @param handler - Handler function.
	 */
	on(event: HotReloadEvent, handler: EventHandler): void {
		let handlers = this.eventHandlers.get(event);
		if (!handlers) {
			handlers = new Set();
			this.eventHandlers.set(event, handlers);
		}
		handlers.add(handler);
	}

	/**
	 * Remove an event handler.
	 *
	 * @param event - Event name.
	 * @param handler - Handler function to remove.
	 */
	off(event: HotReloadEvent, handler: EventHandler): void {
		const handlers = this.eventHandlers.get(event);
		if (handlers) {
			handlers.delete(handler);
		}
	}

	private emit(event: HotReloadEvent, ...args: unknown[]): void {
		const handlers = this.eventHandlers.get(event);
		if (handlers) {
			for (const handler of handlers) {
				try {
					handler(...args);
				} catch {
					// Event handlers should not throw into the reload pipeline
				}
			}
		}
	}
}
