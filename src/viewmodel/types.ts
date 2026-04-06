export interface StateDecoratorOptions {
  alias?: string;
  qmlType?: string;
  readonly?: boolean;
  deferred?: boolean;
}

export interface CommandDecoratorOptions {
  id?: number;
  alias?: string;
  async?: boolean;
  throttle?: 'none' | 'debounce' | 'throttle' | 'drop';
  throttleMs?: number;
}

export interface EffectDecoratorOptions {
  id?: number;
  alias?: string;
}

export interface StateMetadataEntry {
  name: string;
  options: StateDecoratorOptions;
}

export interface CommandMetadataEntry {
  name: string;
  options: CommandDecoratorOptions;
}

export interface EffectMetadataEntry {
  name: string;
  options: EffectDecoratorOptions;
}

export interface ViewModelMetadata {
  className: string;
  states: StateMetadataEntry[];
  commands: CommandMetadataEntry[];
  effects: EffectMetadataEntry[];
}
