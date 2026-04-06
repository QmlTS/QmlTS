// AUTO-GENERATED — DO NOT EDIT
// Type: DirectionalLight
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
  children(...objs: QmlObjectBuilder[]): DirectionalLightBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onColorChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onIntensityChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
  onWorldDirectionChanged(handler: DslSignalHandlerValue): DirectionalLightBuilder;
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
