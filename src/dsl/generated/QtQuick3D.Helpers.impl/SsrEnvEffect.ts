// AUTO-GENERATED — DO NOT EDIT
// Type: SsrEnvEffect
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { SceneEnvironmentBuilder } from '../QtQuick3D/SceneEnvironment.js';
export interface SsrEnvEffectBuilder {
  id(id: string): SsrEnvEffectBuilder;
  child(obj: QmlObjectBuilder): SsrEnvEffectBuilder;

  enabled(value: boolean): SsrEnvEffectBuilder;
  enabledBind(expr: string): SsrEnvEffectBuilder;
  environment(value: SceneEnvironmentBuilder): SsrEnvEffectBuilder;
  environmentBind(expr: string): SsrEnvEffectBuilder;
  objectName(value: string): SsrEnvEffectBuilder;
  objectNameBind(expr: string): SsrEnvEffectBuilder;
  parent(value: QmlValue): SsrEnvEffectBuilder;
  parentBind(expr: string): SsrEnvEffectBuilder;
  state(value: string): SsrEnvEffectBuilder;
  stateBind(expr: string): SsrEnvEffectBuilder;
  onChildrenChanged(body: string): SsrEnvEffectBuilder;
  onEnabledChanged(body: string): SsrEnvEffectBuilder;
  onEnvironmentChanged(body: string): SsrEnvEffectBuilder;
  onObjectNameChanged(body: string): SsrEnvEffectBuilder;
  onParentChanged(body: string): SsrEnvEffectBuilder;
  onStateChanged(body: string): SsrEnvEffectBuilder;
}

const SSRENVEFFECT_META: TypeMetadata = {
  typeName: 'SsrEnvEffect',
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

export function SsrEnvEffect(): SsrEnvEffectBuilder {
  return createFluentBuilder('SsrEnvEffect', SSRENVEFFECT_META) as unknown as SsrEnvEffectBuilder;
}
