// AUTO-GENERATED — DO NOT EDIT
// Type: DirectionalLight
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlObjectBuilder,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface DirectionalLightBuilder {
  id(id: string): DirectionalLightBuilder;
  child(obj: QmlObjectBuilder): DirectionalLightBuilder;

  color(value: QmlColor): DirectionalLightBuilder;
  colorBind(expr: string): DirectionalLightBuilder;
  enabled(value: boolean): DirectionalLightBuilder;
  enabledBind(expr: string): DirectionalLightBuilder;
  intensity(value: number): DirectionalLightBuilder;
  intensityBind(expr: string): DirectionalLightBuilder;
  isShareable(value: boolean): DirectionalLightBuilder;
  isShareableBind(expr: string): DirectionalLightBuilder;
  objectName(value: string): DirectionalLightBuilder;
  objectNameBind(expr: string): DirectionalLightBuilder;
  parent(value: QmlValue): DirectionalLightBuilder;
  parentBind(expr: string): DirectionalLightBuilder;
  worldDirection(value: QmlVector3d): DirectionalLightBuilder;
  worldDirectionBind(expr: string): DirectionalLightBuilder;
  onAddedToEntity(body: string): DirectionalLightBuilder;
  onColorChanged(body: string): DirectionalLightBuilder;
  onEnabledChanged(body: string): DirectionalLightBuilder;
  onIntensityChanged(body: string): DirectionalLightBuilder;
  onNodeDestroyed(body: string): DirectionalLightBuilder;
  onObjectNameChanged(body: string): DirectionalLightBuilder;
  onParentChanged(body: string): DirectionalLightBuilder;
  onRemovedFromEntity(body: string): DirectionalLightBuilder;
  onShareableChanged(body: string): DirectionalLightBuilder;
  onWorldDirectionChanged(body: string): DirectionalLightBuilder;
}

const DIRECTIONALLIGHT_META: TypeMetadata = {
  typeName: 'DirectionalLight',
  properties: [
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'intensity', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'worldDirection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onIntensityChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onWorldDirectionChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function DirectionalLight(): DirectionalLightBuilder {
  return createFluentBuilder(
    'DirectionalLight',
    DIRECTIONALLIGHT_META,
  ) as unknown as DirectionalLightBuilder;
}

export namespace DirectionalLight {
  export namespace Type {
    export const PointLight = createEnumToken('DirectionalLight', 'Type', 'PointLight');
    export const DirectionalLight = createEnumToken('DirectionalLight', 'Type', 'DirectionalLight');
    export const SpotLight = createEnumToken('DirectionalLight', 'Type', 'SpotLight');
  }
}
