// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationClipLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AnimationClipLoaderBuilder {
  id(id: string): AnimationClipLoaderBuilder;
  child(obj: QmlObjectBuilder): AnimationClipLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): AnimationClipLoaderBuilder;

  enabled(value: boolean): AnimationClipLoaderBuilder;
  enabledBind(expr: string): AnimationClipLoaderBuilder;
  objectName(value: string): AnimationClipLoaderBuilder;
  objectNameBind(expr: string): AnimationClipLoaderBuilder;
  parent(value: QmlValue): AnimationClipLoaderBuilder;
  parentBind(expr: string): AnimationClipLoaderBuilder;
  source(value: QmlUrl): AnimationClipLoaderBuilder;
  sourceBind(expr: string): AnimationClipLoaderBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): AnimationClipLoaderBuilder;
}

const ANIMATIONCLIPLOADER_META: TypeMetadata = {
  typeName: 'AnimationClipLoader',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AnimationClipLoader(): AnimationClipLoaderBuilder {
  return createFluentBuilder(
    'AnimationClipLoader',
    ANIMATIONCLIPLOADER_META,
  ) as unknown as AnimationClipLoaderBuilder;
}

export namespace AnimationClipLoader {
  export namespace Status {
    export const NotReady = createEnumToken('AnimationClipLoader', 'Status', 'NotReady');
    export const Ready = createEnumToken('AnimationClipLoader', 'Status', 'Ready');
    export const Error = createEnumToken('AnimationClipLoader', 'Status', 'Error');
  }
}
