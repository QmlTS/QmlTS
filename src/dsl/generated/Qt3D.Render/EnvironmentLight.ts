// AUTO-GENERATED — DO NOT EDIT
// Type: EnvironmentLight
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EnvironmentLightBuilder {
  id(id: string): EnvironmentLightBuilder;
  child(obj: QmlObjectBuilder): EnvironmentLightBuilder;

  enabled(value: boolean): EnvironmentLightBuilder;
  enabledBind(expr: string): EnvironmentLightBuilder;
  irradiance(value: QmlValue): EnvironmentLightBuilder;
  irradianceBind(expr: string): EnvironmentLightBuilder;
  isShareable(value: boolean): EnvironmentLightBuilder;
  isShareableBind(expr: string): EnvironmentLightBuilder;
  objectName(value: string): EnvironmentLightBuilder;
  objectNameBind(expr: string): EnvironmentLightBuilder;
  parent(value: QmlValue): EnvironmentLightBuilder;
  parentBind(expr: string): EnvironmentLightBuilder;
  specular(value: QmlValue): EnvironmentLightBuilder;
  specularBind(expr: string): EnvironmentLightBuilder;
  onAddedToEntity(body: string): EnvironmentLightBuilder;
  onEnabledChanged(body: string): EnvironmentLightBuilder;
  onIrradianceChanged(body: string): EnvironmentLightBuilder;
  onNodeDestroyed(body: string): EnvironmentLightBuilder;
  onObjectNameChanged(body: string): EnvironmentLightBuilder;
  onParentChanged(body: string): EnvironmentLightBuilder;
  onRemovedFromEntity(body: string): EnvironmentLightBuilder;
  onShareableChanged(body: string): EnvironmentLightBuilder;
  onSpecularChanged(body: string): EnvironmentLightBuilder;
}

const ENVIRONMENTLIGHT_META: TypeMetadata = {
  typeName: 'EnvironmentLight',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'irradiance', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'specular', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onIrradianceChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSpecularChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function EnvironmentLight(): EnvironmentLightBuilder {
  return createFluentBuilder(
    'EnvironmentLight',
    ENVIRONMENTLIGHT_META,
  ) as unknown as EnvironmentLightBuilder;
}
