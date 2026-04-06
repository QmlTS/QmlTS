// AUTO-GENERATED — DO NOT EDIT
// Type: DepthOfFieldEffect
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
export interface DepthOfFieldEffectBuilder {
  id(id: string): DepthOfFieldEffectBuilder;
  child(obj: QmlObjectBuilder): DepthOfFieldEffectBuilder;
  children(...objs: QmlObjectBuilder[]): DepthOfFieldEffectBuilder;

  enabled(value: boolean): DepthOfFieldEffectBuilder;
  enabledBind(expr: string): DepthOfFieldEffectBuilder;
  environment(value: SceneEnvironmentBuilder): DepthOfFieldEffectBuilder;
  environmentBind(expr: string): DepthOfFieldEffectBuilder;
  objectName(value: string): DepthOfFieldEffectBuilder;
  objectNameBind(expr: string): DepthOfFieldEffectBuilder;
  parent(value: QmlValue): DepthOfFieldEffectBuilder;
  parentBind(expr: string): DepthOfFieldEffectBuilder;
  state(value: string): DepthOfFieldEffectBuilder;
  stateBind(expr: string): DepthOfFieldEffectBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
  onEnvironmentChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
  onStateChanged(handler: DslSignalHandlerValue): DepthOfFieldEffectBuilder;
}

const DEPTHOFFIELDEFFECT_META: TypeMetadata = {
  typeName: 'DepthOfFieldEffect',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEnvironmentChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function DepthOfFieldEffect(): DepthOfFieldEffectBuilder {
  return createFluentBuilder(
    'DepthOfFieldEffect',
    DEPTHOFFIELDEFFECT_META,
  ) as unknown as DepthOfFieldEffectBuilder;
}
