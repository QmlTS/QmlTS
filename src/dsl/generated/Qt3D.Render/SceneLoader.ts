// AUTO-GENERATED — DO NOT EDIT
// Type: SceneLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SceneLoaderBuilder {
  id(id: string): SceneLoaderBuilder;
  child(obj: QmlObjectBuilder): SceneLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): SceneLoaderBuilder;

  enabled(value: boolean): SceneLoaderBuilder;
  enabledBind(expr: string): SceneLoaderBuilder;
  isShareable(value: boolean): SceneLoaderBuilder;
  isShareableBind(expr: string): SceneLoaderBuilder;
  objectName(value: string): SceneLoaderBuilder;
  objectNameBind(expr: string): SceneLoaderBuilder;
  parent(value: QmlValue): SceneLoaderBuilder;
  parentBind(expr: string): SceneLoaderBuilder;
  source(value: QmlUrl): SceneLoaderBuilder;
  sourceBind(expr: string): SceneLoaderBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): SceneLoaderBuilder;
}

const SCENELOADER_META: TypeMetadata = {
  typeName: 'SceneLoader',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SceneLoader(): SceneLoaderBuilder {
  return createFluentBuilder('SceneLoader', SCENELOADER_META) as unknown as SceneLoaderBuilder;
}

export namespace SceneLoader {
  export namespace ComponentType {
    export const UnknownComponent = createEnumToken(
      'SceneLoader',
      'ComponentType',
      'UnknownComponent',
    );
    export const GeometryRendererComponent = createEnumToken(
      'SceneLoader',
      'ComponentType',
      'GeometryRendererComponent',
    );
    export const TransformComponent = createEnumToken(
      'SceneLoader',
      'ComponentType',
      'TransformComponent',
    );
    export const MaterialComponent = createEnumToken(
      'SceneLoader',
      'ComponentType',
      'MaterialComponent',
    );
    export const LightComponent = createEnumToken('SceneLoader', 'ComponentType', 'LightComponent');
    export const CameraLensComponent = createEnumToken(
      'SceneLoader',
      'ComponentType',
      'CameraLensComponent',
    );
  }
  export namespace Status {
    export const None = createEnumToken('SceneLoader', 'Status', 'None');
    export const Loading = createEnumToken('SceneLoader', 'Status', 'Loading');
    export const Ready = createEnumToken('SceneLoader', 'Status', 'Ready');
    export const Error = createEnumToken('SceneLoader', 'Status', 'Error');
  }
}
