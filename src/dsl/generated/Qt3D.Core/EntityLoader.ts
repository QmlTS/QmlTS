// AUTO-GENERATED — DO NOT EDIT
// Type: EntityLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface EntityLoaderBuilder {
  id(id: string): EntityLoaderBuilder;
  child(obj: QmlObjectBuilder): EntityLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): EntityLoaderBuilder;

  enabled(value: boolean): EntityLoaderBuilder;
  enabledBind(expr: string): EntityLoaderBuilder;
  objectName(value: string): EntityLoaderBuilder;
  objectNameBind(expr: string): EntityLoaderBuilder;
  parent(value: QmlValue): EntityLoaderBuilder;
  parentBind(expr: string): EntityLoaderBuilder;
  source(value: QmlUrl): EntityLoaderBuilder;
  sourceBind(expr: string): EntityLoaderBuilder;
  sourceComponent(value: QmlComponent): EntityLoaderBuilder;
  sourceComponentBind(expr: string): EntityLoaderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onEntityChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onSourceComponentChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): EntityLoaderBuilder;
}

const ENTITYLOADER_META: TypeMetadata = {
  typeName: 'EntityLoader',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'sourceComponent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEntityChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourceComponentChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function EntityLoader(): EntityLoaderBuilder {
  return createFluentBuilder('EntityLoader', ENTITYLOADER_META) as unknown as EntityLoaderBuilder;
}

export namespace EntityLoader {
  export namespace Status {
    export const Null = createEnumToken('EntityLoader', 'Status', 'Null');
    export const Loading = createEnumToken('EntityLoader', 'Status', 'Loading');
    export const Ready = createEnumToken('EntityLoader', 'Status', 'Ready');
    export const Error = createEnumToken('EntityLoader', 'Status', 'Error');
  }
}
