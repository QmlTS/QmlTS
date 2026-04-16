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
import type {
	InstanceCreatedEvent,
	InstanceDestroyingEvent,
	InstanceId,
	InstanceStateSnapshot,
	PropertyChangedEvent,
	V2CommandPayload,
	ViewModelClassRegistration,
} from './v2-types';

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

/** V2 internal instance record. */
interface V2InstanceRecord {
	readonly instanceId: InstanceId;
	readonly className: string;
	readonly schema: ViewModelManagerSchema;
	readonly compilerSlotKey?: string;
	readonly qmlId?: string;
	readonly ownership?: 'owned' | 'injected';
	instance: ViewModelInstance;
}

export class ViewModelManager {
	private host: QmltsHost;
	private registrations = new Map<string, Registration>();
	private handlersRegistered = false;
	private v2Classes = new Map<string, ViewModelClassRegistration>();
	private v2Instances = new Map<InstanceId, V2InstanceRecord>();
	private v2HandlersRegistered = false;

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
	 * Rehydrate all registered ViewModels after a QML reload.
	 *
	 * Iterates all registrations and calls `sync(className)` for each,
	 * pushing the current TypeScript ViewModel state back into the native
	 * bridge properties. This is Step 3 of the four-step hot reload pipeline.
	 *
	 * Only the currently active ViewModel will actually be synchronized
	 * (the host supports one active bridge at a time), but this method
	 * iterates all registrations for forward compatibility.
	 */
	rehydrate(): void {
		for (const className of this.registrations.keys()) {
			this.sync(className);
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

	// ─────────────────────────────────────────────────────────────────────
	//  V2 Instance Management
	// ─────────────────────────────────────────────────────────────────────

	/**
	 * Register a ViewModel class for V2 instance-based management.
	 *
	 * The factory is called when the native host creates a new QObject
	 * instance of this type. The factory receives an `InstanceCreatedEvent`
	 * and must return the TS ViewModel instance.
	 *
	 * @param registration - Class descriptor with className, schema, and factory.
	 * @throws Error if the className is already registered or schema class mismatches.
	 */
	registerClass<T>(registration: ViewModelClassRegistration<T>): void {
		if (registration.schema.className !== registration.className) {
			throw new Error(
				`ViewModelManager: V2 schema.className '${registration.schema.className}' does not match '${registration.className}'`,
			);
		}
		if (this.v2Classes.has(registration.className)) {
			throw new Error(
				`ViewModelManager: V2 class '${registration.className}' is already registered`,
			);
		}
		this.v2Classes.set(
			registration.className,
			registration as ViewModelClassRegistration,
		);
		this.ensureV2HandlersRegistered();
	}

	/**
	 * Check whether a V2 class registration exists.
	 */
	hasClass(className: string): boolean {
		return this.v2Classes.has(className);
	}

	/**
	 * Retrieve a V2 TS instance by instanceId.
	 *
	 * @returns The instance, or `undefined` if not found.
	 */
	getInstance<T = unknown>(instanceId: InstanceId): T | undefined {
		const record = this.v2Instances.get(instanceId);
		return record?.instance as T | undefined;
	}

	/**
	 * List all active V2 instance slot metadata.
	 *
	 * Returns snapshots of all tracked V2 instances including their
	 * current non-deferred property values.
	 */
	getInstanceSlots(): InstanceStateSnapshot[] {
		const slots: InstanceStateSnapshot[] = [];
		for (const record of this.v2Instances.values()) {
			const properties: Record<string, unknown> = {};
			for (const state of record.schema.states) {
				if (!state.deferred) {
					const value = record.instance[state.name];
					if (value !== undefined) {
						properties[state.name] = value;
					}
				}
			}
			slots.push({
				instanceId: record.instanceId,
				className: record.className,
				compilerSlotKey: record.compilerSlotKey,
				qmlId: record.qmlId,
				ownership: record.ownership,
				properties,
			});
		}
		return slots;
	}

	/**
	 * Sync all non-deferred state properties for a specific V2 instance.
	 *
	 * @param instanceId - Target instance ID.
	 * @throws Error if instanceId is not tracked.
	 */
	syncInstance(instanceId: InstanceId): void {
		const record = this.v2Instances.get(instanceId);
		if (!record) {
			throw new Error(
				`ViewModelManager: V2 instance ${instanceId} is not tracked`,
			);
		}

		const stateMap: Record<string, unknown> = {};
		for (const state of record.schema.states) {
			if (state.deferred) continue;
			const value = record.instance[state.name];
			if (value !== undefined) {
				stateMap[state.name] = value;
			}
		}

		if (Object.keys(stateMap).length > 0) {
			this.host.syncStateBatchForInstance(instanceId, stateMap);
		}
	}

	/**
	 * Dispatch a V2 command to the correct instance.
	 *
	 * Looks up the V2 instance by instanceId and calls the matching
	 * method on the TS instance. Ignores unknown instanceIds.
	 *
	 * @param payload - Parsed command payload with instanceId and commandName.
	 */
	dispatchCommand(payload: V2CommandPayload): void {
		const record = this.v2Instances.get(payload.instanceId);
		if (!record) return;
		if (payload.vmClass !== record.className) {
			throw new Error(
				`ViewModelManager: V2 command '${payload.commandName}' targeted class '${payload.vmClass}' but instance ${payload.instanceId} is '${record.className}'`,
			);
		}

		const method = record.instance[payload.commandName];
		if (typeof method === 'function') {
			method.apply(record.instance, payload.args);
			return;
		}
		throw new Error(
			`ViewModelManager: V2 command '${payload.commandName}' is not callable on instance ${payload.instanceId}`,
		);
	}

	/**
	 * Emit an effect on a specific V2 instance.
	 *
	 * @param instanceId - Target instance ID.
	 * @param effectName - Effect name from the schema.
	 * @param payload - Optional payload value.
	 */
	emitEffectForInstance(
		instanceId: InstanceId,
		effectName: string,
		payload?: unknown,
	): void {
		if (!this.v2Instances.has(instanceId)) {
			throw new Error(
				`ViewModelManager: V2 instance ${instanceId} is not tracked`,
			);
		}
		this.host.emitEffectForInstance(instanceId, effectName, payload);
	}

	/**
	 * Handle a V2 instance-created event from the native host.
	 *
	 * Looks up the registered class factory, creates the TS instance,
	 * stores a V2InstanceRecord, syncs initial state, and calls
	 * instanceReady. Does nothing if the className is not registered.
	 *
	 * @param event - Instance-created event payload.
	 */
	handleInstanceCreated(event: InstanceCreatedEvent): void {
		const registration = this.v2Classes.get(event.className);
		if (!registration) return;

		const instance = registration.factory(event) as ViewModelInstance;

		this.v2Instances.set(event.instanceId, {
			instanceId: event.instanceId,
			className: event.className,
			schema: registration.schema,
			compilerSlotKey: event.compilerSlotKey,
			qmlId: event.qmlId,
			ownership: event.ownership,
			instance,
		});
		try {
			this.syncInstance(event.instanceId);
			this.host.instanceReady(event.instanceId);
		} catch (error) {
			this.v2Instances.delete(event.instanceId);
			throw error;
		}
	}

	/**
	 * Handle a V2 instance-destroying event from the native host.
	 *
	 * Removes the instance from the V2 instance map.
	 *
	 * @param event - Instance-destroying event payload.
	 */
	handleInstanceDestroying(event: InstanceDestroyingEvent): void {
		this.v2Instances.delete(event.instanceId);
	}

	/**
	 * Handle a V2 property-changed event from QML.
	 *
	 * Updates the tracked TS instance if it exists. Unknown instances are
	 * ignored because the native runtime may race destruction notifications.
	 *
	 * @param event - Property-changed event payload.
	 */
	handlePropertyChanged(event: PropertyChangedEvent): void {
		const record = this.v2Instances.get(event.instanceId);
		if (!record) return;
		record.instance[event.propName] = event.value;
	}

	private ensureV2HandlersRegistered(): void {
		if (this.v2HandlersRegistered || !this.host.supportsV2()) {
			return;
		}
		this.v2HandlersRegistered = true;

		this.host.registerInstanceCreatedHandler((event) => {
			this.handleInstanceCreated(event);
		});
		this.host.registerInstanceDestroyingHandler((event) => {
			this.handleInstanceDestroying(event);
		});
		this.host.registerPropertyChangedHandler((event) => {
			this.handlePropertyChanged(event);
		});
		this.host.registerCommandDispatcherV2((payload) => {
			this.dispatchCommand(payload);
		});
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
