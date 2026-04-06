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
  throttle: string;
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
  states: ViewModelSchemaState[];
  commands: ViewModelSchemaCommand[];
  effects: ViewModelSchemaEffect[];
  lifecycle: {
    onMounted: boolean;
    onUnmounting: boolean;
    hotReload: boolean;
  };
}
