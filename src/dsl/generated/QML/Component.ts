// AUTO-GENERATED — DO NOT EDIT
// Type: Component
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { ComponentAttachedBuilder } from './QQmlComponentAttached.js';
export interface ComponentBuilder {
  id(id: string): ComponentBuilder;
  child(obj: QmlObjectBuilder): ComponentBuilder;

  objectName(value: string): ComponentBuilder;
  objectNameBind(expr: string): ComponentBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ComponentBuilder;
  onProgressChanged(handler: (arg0: number) => void): ComponentBuilder;
  onStatusChanged(handler: (arg0: QmlValue) => void): ComponentBuilder;
  component(setup: (b: ComponentAttachedBuilder) => void): ComponentBuilder;
}

export function Component(): ComponentBuilder {
  return new DslBuilderImpl('Component') as unknown as ComponentBuilder;
}

export namespace Component {
  export namespace CompilationMode {
    export const PreferSynchronous = createEnumToken(
      'Component',
      'CompilationMode',
      'PreferSynchronous',
    );
    export const Asynchronous = createEnumToken('Component', 'CompilationMode', 'Asynchronous');
  }
  export namespace Status {
    export const Null = createEnumToken('Component', 'Status', 'Null');
    export const Ready = createEnumToken('Component', 'Status', 'Ready');
    export const Loading = createEnumToken('Component', 'Status', 'Loading');
    export const Error = createEnumToken('Component', 'Status', 'Error');
  }
}
