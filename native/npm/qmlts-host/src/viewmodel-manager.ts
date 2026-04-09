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
 * Schema subset needed by ViewModelManager.
 */
export interface ViewModelManagerSchema {
	className: string;
	states: Array<{
		name: string;
		deferred: boolean;
	}>;
	commands?: Array<{
		name: string;
		commandId: number;
	}>;
	effects?: Array<{
		name: string;
		effectId: number;
	}>;
	lifecycle?: {
		onMounted?: boolean;
		onUnmounting?: boolean;
	};
}

/**
 * A ViewModel instance whose properties can be read for sync.
 * Any object with string-keyed properties works.
 */
export type ViewModelInstance = Record<string, unknown>;

export type CommandHandler = (
	commandName: string,
	commandId: number,
) => void;
export type LifecycleHandler = (event: string) => void;

interface Registration {
	schema: ViewModelManagerSchema;
	instance: ViewModelInstance;
	onCommand?: CommandHandler;
	onLifecycle?: LifecycleHandler;
}

export class ViewModelManager {
	private host: QmltsHost;
	private registrations = new Map<string, Registration>();
	private handlersRegistered = false;

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
	 * @param handlers - Optional command/lifecycle handlers.
	 * @throws Error if the class name is not found in the native registry,
	 *         or if QML has already been loaded.
	 */
	register(
		schema: ViewModelManagerSchema,
		instance: ViewModelInstance,
		handlers?: {
			onCommand?: CommandHandler;
			onLifecycle?: LifecycleHandler;
		},
	): void;
	register(
		className: string,
		schema: ViewModelManagerSchema,
		instance: ViewModelInstance,
		handlers?: {
			onCommand?: CommandHandler;
			onLifecycle?: LifecycleHandler;
		},
	): void;
	register(
		classNameOrSchema: string | ViewModelManagerSchema,
		schemaOrInstance: ViewModelManagerSchema | ViewModelInstance,
		maybeInstanceOrHandlers?:
			| ViewModelInstance
			| {
					onCommand?: CommandHandler;
					onLifecycle?: LifecycleHandler;
			  },
		maybeHandlers?: {
			onCommand?: CommandHandler;
			onLifecycle?: LifecycleHandler;
		},
	): void {
		let className: string;
		let schema: ViewModelManagerSchema;
		let instance: ViewModelInstance;
		let handlers:
			| {
					onCommand?: CommandHandler;
					onLifecycle?: LifecycleHandler;
			  }
			| undefined;

		if (typeof classNameOrSchema === 'string') {
			className = classNameOrSchema;
			schema = schemaOrInstance as ViewModelManagerSchema;
			instance = maybeInstanceOrHandlers as ViewModelInstance;
			handlers = maybeHandlers;
		} else {
			className = classNameOrSchema.className;
			schema = classNameOrSchema;
			instance = schemaOrInstance as ViewModelInstance;
			handlers = maybeInstanceOrHandlers as
				| {
						onCommand?: CommandHandler;
						onLifecycle?: LifecycleHandler;
				  }
				| undefined;
		}

		if (schema.className !== className) {
			throw new Error(
				`ViewModelManager: schema.className '${schema.className}' does not match '${className}'`,
			);
		}

		this.host.registerViewModel(className);
		this.registrations.set(className, {
			schema,
			instance,
			onCommand: handlers?.onCommand,
			onLifecycle: handlers?.onLifecycle,
		});

		this.ensureHandlersRegistered();
		this.sync(className);
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
	 * Number of TS-side registrations currently tracked.
	 */
	get count(): number {
		return this.registrations.size;
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
			this.host.syncStateBatch(className, stateMap);
		}
	}

	/**
	 * Read a property value back through the host.
	 */
	getProperty<T = unknown>(className: string, propertyName: string): T {
		if (!this.registrations.has(className)) {
			throw new Error(
				`ViewModelManager: '${className}' is not registered`,
			);
		}
		return this.host.getProperty<T>(className, propertyName);
	}

	/**
	 * Emit an effect signal on the active runtime QObject.
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
		if (!this.registrations.has(className)) {
			throw new Error(
				`ViewModelManager: '${className}' is not registered`,
			);
		}
		this.host.emitEffect(className, effectName, ...payload);
	}

	private ensureHandlersRegistered(): void {
		if (this.handlersRegistered) {
			return;
		}
		this.handlersRegistered = true;

		this.host.registerInvokeHandler(
			(className: string, commandId: number) => {
				const reg = this.registrations.get(className);
				if (!reg?.onCommand) {
					return;
				}
				const cmd = reg.schema.commands?.find(
					(c) => c.commandId === commandId,
				);
				const commandName = cmd?.name ?? `unknown(${commandId})`;
				reg.onCommand(commandName, commandId);
			},
		);

		this.host.registerLifecycleHandler(
			(className: string, event: string) => {
				const reg = this.registrations.get(className);
				if (!reg?.onLifecycle) {
					return;
				}
				reg.onLifecycle(event);
			},
		);
	}
}
