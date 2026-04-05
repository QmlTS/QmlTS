// AUTO-GENERATED — DO NOT EDIT
// Type: SpotLight
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlObjectBuilder, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
export interface SpotLightBuilder {
  id(id: string): SpotLightBuilder;
  child(obj: QmlObjectBuilder): SpotLightBuilder;

  color(value: QmlColor): SpotLightBuilder;
  colorBind(expr: string): SpotLightBuilder;
  constantAttenuation(value: number): SpotLightBuilder;
  constantAttenuationBind(expr: string): SpotLightBuilder;
  cutOffAngle(value: number): SpotLightBuilder;
  cutOffAngleBind(expr: string): SpotLightBuilder;
  enabled(value: boolean): SpotLightBuilder;
  enabledBind(expr: string): SpotLightBuilder;
  intensity(value: number): SpotLightBuilder;
  intensityBind(expr: string): SpotLightBuilder;
  isShareable(value: boolean): SpotLightBuilder;
  isShareableBind(expr: string): SpotLightBuilder;
  linearAttenuation(value: number): SpotLightBuilder;
  linearAttenuationBind(expr: string): SpotLightBuilder;
  localDirection(value: QmlVector3d): SpotLightBuilder;
  localDirectionBind(expr: string): SpotLightBuilder;
  objectName(value: string): SpotLightBuilder;
  objectNameBind(expr: string): SpotLightBuilder;
  parent(value: QmlValue): SpotLightBuilder;
  parentBind(expr: string): SpotLightBuilder;
  quadraticAttenuation(value: number): SpotLightBuilder;
  quadraticAttenuationBind(expr: string): SpotLightBuilder;
  onAddedToEntity(body: string): SpotLightBuilder;
  onColorChanged(body: string): SpotLightBuilder;
  onConstantAttenuationChanged(body: string): SpotLightBuilder;
  onCutOffAngleChanged(body: string): SpotLightBuilder;
  onEnabledChanged(body: string): SpotLightBuilder;
  onIntensityChanged(body: string): SpotLightBuilder;
  onLinearAttenuationChanged(body: string): SpotLightBuilder;
  onLocalDirectionChanged(body: string): SpotLightBuilder;
  onNodeDestroyed(body: string): SpotLightBuilder;
  onObjectNameChanged(body: string): SpotLightBuilder;
  onParentChanged(body: string): SpotLightBuilder;
  onQuadraticAttenuationChanged(body: string): SpotLightBuilder;
  onRemovedFromEntity(body: string): SpotLightBuilder;
  onShareableChanged(body: string): SpotLightBuilder;
}

const SPOTLIGHT_META: TypeMetadata = {
  typeName: 'SpotLight',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'constantAttenuation', hasValue: true, hasBinding: true },
    { name: 'cutOffAngle', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'intensity', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'linearAttenuation', hasValue: true, hasBinding: true },
    { name: 'localDirection', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'quadraticAttenuation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onConstantAttenuationChanged', paramCount: 1 },
    { handlerName: 'onCutOffAngleChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onIntensityChanged', paramCount: 1 },
    { handlerName: 'onLinearAttenuationChanged', paramCount: 1 },
    { handlerName: 'onLocalDirectionChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onQuadraticAttenuationChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SpotLight(): SpotLightBuilder {
  return createFluentBuilder('SpotLight', SPOTLIGHT_META) as unknown as SpotLightBuilder;
}

export namespace SpotLight {
  export namespace Type {
    export const PointLight = createEnumToken('SpotLight', 'Type', 'PointLight');
    export const DirectionalLight = createEnumToken('SpotLight', 'Type', 'DirectionalLight');
    export const SpotLight = createEnumToken('SpotLight', 'Type', 'SpotLight');
  }
}
