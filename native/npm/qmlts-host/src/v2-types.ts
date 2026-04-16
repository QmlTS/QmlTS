/**
 * V2 Host Contract — Type Definitions
 *
 * Defines the V2 instance-scoped host API types for module registration,
 * instance lifecycle, property sync, command dispatch, and effect routing.
 *
 * V2NativeBindings is the authoritative interface for V2 native function
 * signatures. The actual native functions are optional at runtime — the
 * current Rust host does not implement them yet.
 *
 * Raw native callback signatures (positional args) are internal-only.
 * Public QmltsHost/ViewModelManager APIs expose event objects.
 */

import type { QmltsEngine } from './types';

// ────────────────────────────────────────────────────────────────────────────
// Instance Routing
// ────────────────────────────────────────────────────────────────────────────

/** Numeric instance identifier assigned by the native factory (monotonic counter). */
export type InstanceId = number;

// ────────────────────────────────────────────────────────────────────────────
// Module Registration
// ────────────────────────────────────────────────────────────────────────────

/** QML module registration descriptor. */
export interface ModuleRegistration {
	readonly moduleUri: string;
	readonly versionMajor: number;
	readonly versionMinor: number;
	readonly typeNames: readonly string[];
}

// ────────────────────────────────────────────────────────────────────────────
// Lifecycle Event Payloads
// ────────────────────────────────────────────────────────────────────────────

/** Payload emitted when the native factory creates a new QObject instance. */
export interface InstanceCreatedEvent {
	readonly instanceId: InstanceId;
	readonly className: string;
	readonly compilerSlotKey?: string;
	readonly qmlId?: string;
	readonly ownership?: 'owned' | 'injected';
}

/** Payload emitted when a QObject instance is about to be destroyed. */
export interface InstanceDestroyingEvent {
	readonly instanceId: InstanceId;
	readonly className?: string;
}

/** Payload emitted when a writable property is changed from QML. */
export interface PropertyChangedEvent {
	readonly instanceId: InstanceId;
	readonly propName: string;
	readonly value: unknown;
}

// ────────────────────────────────────────────────────────────────────────────
// Callback Types (public — event-object based)
// ────────────────────────────────────────────────────────────────────────────

export type InstanceCreatedCallback = (event: InstanceCreatedEvent) => void;
export type InstanceDestroyingCallback = (
	event: InstanceDestroyingEvent,
) => void;
export type PropertyChangedCallback = (event: PropertyChangedEvent) => void;

// ────────────────────────────────────────────────────────────────────────────
// Command Dispatch
// ────────────────────────────────────────────────────────────────────────────

/** V2 command payload with parsed args (public TS-facing API). */
export interface V2CommandPayload {
	readonly instanceId: InstanceId;
	readonly vmClass: string;
	readonly commandName: string;
	readonly args: unknown[];
}

export type V2CommandDispatcher = (payload: V2CommandPayload) => void;

// ────────────────────────────────────────────────────────────────────────────
// Hot Reload Instance Snapshot (slot-aligned with ViewModelInstanceSlot)
// ────────────────────────────────────────────────────────────────────────────

/** Per-instance state snapshot for hot reload matching. */
export interface InstanceStateSnapshot {
	readonly instanceId: InstanceId;
	readonly className: string;
	readonly compilerSlotKey?: string;
	readonly qmlId?: string;
	readonly ownership?: 'owned' | 'injected';
	readonly properties: Record<string, unknown>;
}

// ────────────────────────────────────────────────────────────────────────────
// V2 Class Registration (for ViewModelManager)
// ────────────────────────────────────────────────────────────────────────────

import type { ViewModelManagerSchema } from './viewmodel-manager';

/** V2 class registration descriptor for ViewModelManager.registerClass(). */
export interface ViewModelClassRegistration<T = unknown> {
	readonly className: string;
	readonly schema: ViewModelManagerSchema;
	readonly factory: (event: InstanceCreatedEvent) => T;
}

// ────────────────────────────────────────────────────────────────────────────
// V2 Native Bindings Interface
// ────────────────────────────────────────────────────────────────────────────

/**
 * Authoritative interface for V2 native function signatures.
 *
 * These functions will be implemented in the Rust host in a later step.
 * At runtime, `v2Native` is typed as `Partial<V2NativeBindings>` — each
 * function is `undefined` until the native host implements it.
 *
 * Raw native callbacks use positional args with error-first convention
 * (matching napi-rs ThreadsafeFunction pattern). QmltsHost wraps these
 * into event-object callbacks for the public API.
 */
export interface V2NativeBindings {
	/** Register ViewModel types as a QML module. Call before loadFile/loadString. */
	registerModule(
		engine: QmltsEngine,
		moduleUri: string,
		versionMajor: number,
		versionMinor: number,
		typeNames: string[],
	): void;

	/** Sync a single property to a specific QObject instance. */
	syncStateV2(
		engine: QmltsEngine,
		instanceId: number,
		propName: string,
		valueJson: string,
	): void;

	/** Batch-sync properties to a specific QObject instance. */
	syncStateBatchV2(
		engine: QmltsEngine,
		instanceId: number,
		propertiesJson: string,
	): void;

	/** Emit an effect signal on a specific QObject instance. */
	emitEffectV2(
		engine: QmltsEngine,
		instanceId: number,
		effectName: string,
		payloadJson?: string,
	): void;

	/** Confirm TS-side initialization complete; flushes queued events. */
	instanceReady(engine: QmltsEngine, instanceId: number): void;

	/** Register callback for native factory instance-created events. */
	registerInstanceCreatedHandler(
		engine: QmltsEngine,
		callback: (
			error: Error | null,
			className: string,
			instanceId: number,
		) => void,
	): void;

	/** Register callback for pre-destruction instance events. */
	registerInstanceDestroyingHandler(
		engine: QmltsEngine,
		callback: (error: Error | null, instanceId: number) => void,
	): void;

	/** Register callback for QML → TS writable property changes. */
	registerPropertyChangedHandler(
		engine: QmltsEngine,
		callback: (
			error: Error | null,
			instanceId: number,
			propName: string,
			valueJson: string,
		) => void,
	): void;

	/** Register V2 per-instance command dispatcher. */
	registerCommandDispatcherV2(
		engine: QmltsEngine,
		callback: (
			error: Error | null,
			instanceId: number,
			vmClass: string,
			commandName: string,
			argsJson: string,
		) => void,
	): void;
}

/**
 * Names of all required V2 native methods.
 * Used by supportsV2() for all-or-nothing capability detection.
 */
export const V2_REQUIRED_METHODS: readonly (keyof V2NativeBindings)[] = [
	'registerModule',
	'syncStateV2',
	'syncStateBatchV2',
	'emitEffectV2',
	'instanceReady',
	'registerInstanceCreatedHandler',
	'registerInstanceDestroyingHandler',
	'registerPropertyChangedHandler',
	'registerCommandDispatcherV2',
] as const;

/** Return true when the native module provides the complete V2 method set. */
export function supportsV2NativeBindings(
	bindings: Partial<V2NativeBindings>,
): boolean {
	return V2_REQUIRED_METHODS.every(
		(name) => typeof bindings[name] === 'function',
	);
}
