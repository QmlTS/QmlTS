/**
 * ViewModelManager - Tracks ViewModel registrations and state sync.
 *
 * Depends only on `className` and `states[].{name, deferred}` from the schema.
 * The native host supports one active ViewModel at a time; the manager
 * reflects this constraint.
 *
 * @example
 * ```typescript
 * const host = new QmltsHost();
 * const manager = new ViewModelManager(host);
 *
 * manager.register('LoginViewModel', loginSchema, loginInstance);
 * manager.sync('LoginViewModel');
 * ```
 */

import type { QmltsHost } from './qmlts-host';

/**
 * Minimal schema subset needed by ViewModelManager.
 * Only `className` and `states[].{name, deferred}` are used.
 */
export interface ViewModelManagerSchema {
	className: string;
	states: Array<{
		name: string;
		deferred: boolean;
	}>;
}

/**
 * A ViewModel instance whose properties can be read for sync.
 * Any object with string-keyed properties works.
 */
export type ViewModelInstance = Record<string, unknown>;

interface Registration {
	schema: ViewModelManagerSchema;
	instance: ViewModelInstance;
}

export class ViewModelManager {
	private host: QmltsHost;
	private registrations = new Map<string, Registration>();

	constructor(host: QmltsHost) {
		this.host = host;
	}

	/**
	 * Register a ViewModel for management.
	 *
	 * This also calls `host.registerViewModel()` to create the native bridge
	 * and publish `vm` / `__qmlts` context properties.
	 *
	 * @param className - ViewModel class name matching the generated bridge.
	 * @param schema - Schema describing the ViewModel's states.
	 * @param instance - The TypeScript ViewModel instance to sync from.
	 * @throws Error if the class name is not found in the native registry,
	 *         or if QML has already been loaded.
	 */
	register(
		className: string,
		schema: ViewModelManagerSchema,
		instance: ViewModelInstance,
	): void {
		this.host.registerViewModel(className);
		this.registrations.set(className, { schema, instance });
	}

	/**
	 * Unregister a ViewModel from management.
	 *
	 * This is TS-side only — does NOT remove the native bridge.
	 * After unregister, sync() will no longer work for this class.
	 *
	 * @param className - ViewModel class name to unregister.
	 * @returns `true` if the registration was found and removed.
	 */
	unregister(className: string): boolean {
		return this.registrations.delete(className);
	}

	/**
	 * Check whether a ViewModel is registered.
	 */
	has(className: string): boolean {
		return this.registrations.has(className);
	}

	/**
	 * Get all registered class names.
	 */
	get classNames(): string[] {
		return [...this.registrations.keys()];
	}

	/**
	 * Synchronize all non-deferred state properties from the TS instance
	 * into the native host for the given ViewModel.
	 *
	 * Reads each non-deferred state property from the instance, serializes
	 * it to JSON, and calls `syncStateBatch` on the host.
	 *
	 * @param className - ViewModel class name to sync.
	 * @throws Error if the class name is not registered, or if any
	 *         property sync fails.
	 */
	sync(className: string): void {
		const reg = this.registrations.get(className);
		if (!reg) {
			throw new Error(
				`ViewModelManager: '${className}' is not registered`,
			);
		}

		const stateMap: Record<string, unknown> = {};
		for (const state of reg.schema.states) {
			if (state.deferred) {
				continue;
			}
			const value = reg.instance[state.name];
			if (value !== undefined) {
				stateMap[state.name] = value;
			}
		}

		if (Object.keys(stateMap).length > 0) {
			this.host.syncStateBatch(className, JSON.stringify(stateMap));
		}
	}
}
