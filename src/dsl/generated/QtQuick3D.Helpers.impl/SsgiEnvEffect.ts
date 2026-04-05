// AUTO-GENERATED — DO NOT EDIT
// Type: SsgiEnvEffect
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
export interface SsgiEnvEffectBuilder {
  id(id: string): SsgiEnvEffectBuilder;
  child(obj: QmlObjectBuilder): SsgiEnvEffectBuilder;

  enabled(value: boolean): SsgiEnvEffectBuilder;
  enabledBind(expr: string): SsgiEnvEffectBuilder;
  environment(value: SceneEnvironmentBuilder): SsgiEnvEffectBuilder;
  environmentBind(expr: string): SsgiEnvEffectBuilder;
  objectName(value: string): SsgiEnvEffectBuilder;
  objectNameBind(expr: string): SsgiEnvEffectBuilder;
  parent(value: QmlValue): SsgiEnvEffectBuilder;
  parentBind(expr: string): SsgiEnvEffectBuilder;
  state(value: string): SsgiEnvEffectBuilder;
  stateBind(expr: string): SsgiEnvEffectBuilder;
  onChildrenChanged(body: string): SsgiEnvEffectBuilder;
  onEnabledChanged(body: string): SsgiEnvEffectBuilder;
  onEnvironmentChanged(body: string): SsgiEnvEffectBuilder;
  onObjectNameChanged(body: string): SsgiEnvEffectBuilder;
  onParentChanged(body: string): SsgiEnvEffectBuilder;
  onStateChanged(body: string): SsgiEnvEffectBuilder;
}

const SSGIENVEFFECT_META: TypeMetadata = {
  typeName: 'SsgiEnvEffect',
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
  grouped: [
  ],
  attached: [
  ],
};

export function SsgiEnvEffect(): SsgiEnvEffectBuilder {
  return createFluentBuilder('SsgiEnvEffect', SSGIENVEFFECT_META) as unknown as SsgiEnvEffectBuilder;
}
