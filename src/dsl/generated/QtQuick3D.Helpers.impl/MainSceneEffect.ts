// AUTO-GENERATED — DO NOT EDIT
// Type: MainSceneEffect
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
export interface MainSceneEffectBuilder {
  id(id: string): MainSceneEffectBuilder;
  child(obj: QmlObjectBuilder): MainSceneEffectBuilder;

  environment(value: SceneEnvironmentBuilder): MainSceneEffectBuilder;
  environmentBind(expr: string): MainSceneEffectBuilder;
  objectName(value: string): MainSceneEffectBuilder;
  objectNameBind(expr: string): MainSceneEffectBuilder;
  parent(value: QmlValue): MainSceneEffectBuilder;
  parentBind(expr: string): MainSceneEffectBuilder;
  state(value: string): MainSceneEffectBuilder;
  stateBind(expr: string): MainSceneEffectBuilder;
  onChildrenChanged(body: string): MainSceneEffectBuilder;
  onEnvironmentChanged(body: string): MainSceneEffectBuilder;
  onObjectNameChanged(body: string): MainSceneEffectBuilder;
  onParentChanged(body: string): MainSceneEffectBuilder;
  onStateChanged(body: string): MainSceneEffectBuilder;
}

const MAINSCENEEFFECT_META: TypeMetadata = {
  typeName: 'MainSceneEffect',
  properties: [
    { name: 'environment', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnvironmentChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MainSceneEffect(): MainSceneEffectBuilder {
  return createFluentBuilder(
    'MainSceneEffect',
    MAINSCENEEFFECT_META,
  ) as unknown as MainSceneEffectBuilder;
}
