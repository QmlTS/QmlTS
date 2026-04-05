/** Metadata for a single writable property on a QML type */
export interface PropertyMeta {
	readonly name: string;
	readonly hasValue: boolean;
	readonly hasBinding: boolean;
}

/** Metadata for a signal handler on a QML type */
export interface SignalMeta {
	readonly handlerName: string;
	readonly paramCount: number;
}

/** Metadata for a grouped property surface (e.g., border, anchors) */
export interface GroupedMeta {
	readonly methodName: string;
	readonly groupName: string;
	readonly properties: readonly PropertyMeta[];
}

/** Metadata for an attached type surface (e.g., Layout, Keys) */
export interface AttachedMeta {
	readonly methodName: string;
	readonly attachedTypeName: string;
	readonly properties: readonly PropertyMeta[];
	readonly signals: readonly SignalMeta[];
}

/** Complete runtime metadata for one QML type, used by Proxy dispatch */
export interface TypeMetadata {
	readonly typeName: string;
	readonly properties: readonly PropertyMeta[];
	readonly signals: readonly SignalMeta[];
	readonly grouped: readonly GroupedMeta[];
	readonly attached: readonly AttachedMeta[];
	readonly defaultProperty?: string;
}
