// AUTO-GENERATED — DO NOT EDIT
// Type: AnimationClip
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AnimationClipBuilder {
  id(id: string): AnimationClipBuilder;
  child(obj: QmlObjectBuilder): AnimationClipBuilder;
  children(...objs: QmlObjectBuilder[]): AnimationClipBuilder;

  clipData(value: QmlValue): AnimationClipBuilder;
  clipDataBind(expr: string): AnimationClipBuilder;
  enabled(value: boolean): AnimationClipBuilder;
  enabledBind(expr: string): AnimationClipBuilder;
  objectName(value: string): AnimationClipBuilder;
  objectNameBind(expr: string): AnimationClipBuilder;
  parent(value: QmlValue): AnimationClipBuilder;
  parentBind(expr: string): AnimationClipBuilder;
  onClipDataChanged(handler: DslSignalHandlerValue): AnimationClipBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): AnimationClipBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): AnimationClipBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): AnimationClipBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AnimationClipBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AnimationClipBuilder;
}

const ANIMATIONCLIP_META: TypeMetadata = {
  typeName: 'AnimationClip',
  properties: [
    { name: 'clipData', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onClipDataChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AnimationClip(): AnimationClipBuilder {
  return createFluentBuilder(
    'AnimationClip',
    ANIMATIONCLIP_META,
  ) as unknown as AnimationClipBuilder;
}
