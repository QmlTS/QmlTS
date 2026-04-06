// AUTO-GENERATED — DO NOT EDIT
// Type: Component
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ComponentAttachedBuilder } from './QQmlComponentAttached.js';
export interface ComponentBuilder {
  id(id: string): ComponentBuilder;
  child(obj: QmlObjectBuilder): ComponentBuilder;
  children(...objs: QmlObjectBuilder[]): ComponentBuilder;

  objectName(value: string): ComponentBuilder;
  objectNameBind(expr: string): ComponentBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ComponentBuilder;
  onProgressChanged(handler: DslSignalHandlerValue): ComponentBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): ComponentBuilder;
  component(setup: (b: ComponentAttachedBuilder) => void): ComponentBuilder;
}

const COMPONENT_META: TypeMetadata = {
  typeName: 'Component',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [
    {
      methodName: 'component',
      attachedTypeName: 'Component',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onCompleted', paramCount: 0 },
        { handlerName: 'onDestruction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function Component(): ComponentBuilder {
  return createFluentBuilder('Component', COMPONENT_META) as unknown as ComponentBuilder;
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
