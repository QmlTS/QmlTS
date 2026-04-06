// AUTO-GENERATED — DO NOT EDIT
// Type: EnvironmentLight
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EnvironmentLightBuilder {
  id(id: string): EnvironmentLightBuilder;
  child(obj: QmlObjectBuilder): EnvironmentLightBuilder;
  children(...objs: QmlObjectBuilder[]): EnvironmentLightBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onIrradianceChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onParentChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
  onSpecularChanged(handler: DslSignalHandlerValue): EnvironmentLightBuilder;
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
