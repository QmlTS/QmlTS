export type ViewModelCommandThrottleMode = 'none' | 'debounce' | 'throttle' | 'drop';

export interface SchemaParameter {
  name: string;
  type: string;
}

export interface ViewModelSchemaState {
  name: string;
  qmlName: string;
  qmlType: string;
  memberId: number;
  readonly: boolean;
  deferred: boolean;
  defaultValue?: unknown;
}

export interface ViewModelSchemaCommand {
  name: string;
  qmlName: string;
  commandId: number;
  parameters: SchemaParameter[];
  async: boolean;
  throttle: ViewModelCommandThrottleMode;
  throttleMs: number;
}

export interface ViewModelSchemaEffect {
  name: string;
  qmlName: string;
  effectId: number;
  parameters: SchemaParameter[];
}

export interface ViewModelSchema {
  className: string;
  version: number;
  /** V2: QML module URI (e.g. "MyApp.ViewModels"). */
  moduleUri?: string;
  /** V2: QML module version. */
  moduleVersion?: { readonly major: number; readonly minor: number };
  /** V2: Stable identity key for hot-reload instance matching (convenience for single-VM views). */
  compilerSlotKey?: string;
  states: ViewModelSchemaState[];
  commands: ViewModelSchemaCommand[];
  effects: ViewModelSchemaEffect[];
  lifecycle: {
    onMounted: boolean;
    onUnmounting: boolean;
    hotReload: boolean;
  };
}

/**
 * V2: Per-instance ViewModel slot metadata.
 *
 * Describes a single ViewModel instance declaration within a View.
 * Multiple VMs per view produce multiple slots (e.g. __qmlts_vm0, __qmlts_vm1).
 * The compilerSlotKey on this type is the stable V2 identity contract.
 */
export interface ViewModelInstanceSlot {
  readonly viewName: string;
  readonly parameterName: string;
  readonly className: string;
  readonly qmlId: string;
  readonly compilerSlotKey: string;
  readonly ownership: 'owned' | 'injected';
  readonly moduleUri?: string;
  readonly moduleVersion?: { readonly major: number; readonly minor: number };
}
