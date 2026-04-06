// AUTO-GENERATED — DO NOT EDIT
// Type: PointLight
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PointLightBuilder {
  id(id: string): PointLightBuilder;
  child(obj: QmlObjectBuilder): PointLightBuilder;
  children(...objs: QmlObjectBuilder[]): PointLightBuilder;

  color(value: QmlColor): PointLightBuilder;
  colorBind(expr: string): PointLightBuilder;
  constantAttenuation(value: number): PointLightBuilder;
  constantAttenuationBind(expr: string): PointLightBuilder;
  enabled(value: boolean): PointLightBuilder;
  enabledBind(expr: string): PointLightBuilder;
  intensity(value: number): PointLightBuilder;
  intensityBind(expr: string): PointLightBuilder;
  isShareable(value: boolean): PointLightBuilder;
  isShareableBind(expr: string): PointLightBuilder;
  linearAttenuation(value: number): PointLightBuilder;
  linearAttenuationBind(expr: string): PointLightBuilder;
  objectName(value: string): PointLightBuilder;
  objectNameBind(expr: string): PointLightBuilder;
  parent(value: QmlValue): PointLightBuilder;
  parentBind(expr: string): PointLightBuilder;
  quadraticAttenuation(value: number): PointLightBuilder;
  quadraticAttenuationBind(expr: string): PointLightBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): PointLightBuilder;
  onColorChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onConstantAttenuationChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onIntensityChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onLinearAttenuationChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): PointLightBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onQuadraticAttenuationChanged(handler: DslSignalHandlerValue): PointLightBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): PointLightBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): PointLightBuilder;
}

const POINTLIGHT_META: TypeMetadata = {
  typeName: 'PointLight',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'constantAttenuation', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'intensity', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'linearAttenuation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'quadraticAttenuation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onConstantAttenuationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onIntensityChanged', paramCount: 1 },
    { handlerName: 'onLinearAttenuationChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onQuadraticAttenuationChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function PointLight(): PointLightBuilder {
  return createFluentBuilder('PointLight', POINTLIGHT_META) as unknown as PointLightBuilder;
}

export namespace PointLight {
  export namespace Type {
    export const PointLight = createEnumToken('PointLight', 'Type', 'PointLight');
    export const DirectionalLight = createEnumToken('PointLight', 'Type', 'DirectionalLight');
    export const SpotLight = createEnumToken('PointLight', 'Type', 'SpotLight');
  }
}
