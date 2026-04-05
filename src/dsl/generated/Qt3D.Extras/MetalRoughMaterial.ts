// AUTO-GENERATED — DO NOT EDIT
// Type: MetalRoughMaterial
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface MetalRoughMaterialBuilder {
  id(id: string): MetalRoughMaterialBuilder;
  child(obj: QmlObjectBuilder): MetalRoughMaterialBuilder;

  ambientOcclusion(value: QmlValue): MetalRoughMaterialBuilder;
  ambientOcclusionBind(expr: string): MetalRoughMaterialBuilder;
  baseColor(value: QmlValue): MetalRoughMaterialBuilder;
  baseColorBind(expr: string): MetalRoughMaterialBuilder;
  effect(value: EffectBuilder): MetalRoughMaterialBuilder;
  effectBind(expr: string): MetalRoughMaterialBuilder;
  enabled(value: boolean): MetalRoughMaterialBuilder;
  enabledBind(expr: string): MetalRoughMaterialBuilder;
  isShareable(value: boolean): MetalRoughMaterialBuilder;
  isShareableBind(expr: string): MetalRoughMaterialBuilder;
  metalness(value: QmlValue): MetalRoughMaterialBuilder;
  metalnessBind(expr: string): MetalRoughMaterialBuilder;
  normal(value: QmlValue): MetalRoughMaterialBuilder;
  normalBind(expr: string): MetalRoughMaterialBuilder;
  objectName(value: string): MetalRoughMaterialBuilder;
  objectNameBind(expr: string): MetalRoughMaterialBuilder;
  parent(value: QmlValue): MetalRoughMaterialBuilder;
  parentBind(expr: string): MetalRoughMaterialBuilder;
  roughness(value: QmlValue): MetalRoughMaterialBuilder;
  roughnessBind(expr: string): MetalRoughMaterialBuilder;
  textureScale(value: number): MetalRoughMaterialBuilder;
  textureScaleBind(expr: string): MetalRoughMaterialBuilder;
  onAddedToEntity(body: string): MetalRoughMaterialBuilder;
  onAmbientOcclusionChanged(body: string): MetalRoughMaterialBuilder;
  onBaseColorChanged(body: string): MetalRoughMaterialBuilder;
  onEffectChanged(body: string): MetalRoughMaterialBuilder;
  onEnabledChanged(body: string): MetalRoughMaterialBuilder;
  onMetalnessChanged(body: string): MetalRoughMaterialBuilder;
  onNodeDestroyed(body: string): MetalRoughMaterialBuilder;
  onNormalChanged(body: string): MetalRoughMaterialBuilder;
  onObjectNameChanged(body: string): MetalRoughMaterialBuilder;
  onParentChanged(body: string): MetalRoughMaterialBuilder;
  onRemovedFromEntity(body: string): MetalRoughMaterialBuilder;
  onRoughnessChanged(body: string): MetalRoughMaterialBuilder;
  onShareableChanged(body: string): MetalRoughMaterialBuilder;
  onTextureScaleChanged(body: string): MetalRoughMaterialBuilder;
}

const METALROUGHMATERIAL_META: TypeMetadata = {
  typeName: 'MetalRoughMaterial',
  properties: [
    { name: 'ambientOcclusion', hasValue: true, hasBinding: true },
    { name: 'baseColor', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'metalness', hasValue: true, hasBinding: true },
    { name: 'normal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'roughness', hasValue: true, hasBinding: true },
    { name: 'textureScale', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAmbientOcclusionChanged', paramCount: 1 },
    { handlerName: 'onBaseColorChanged', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onMetalnessChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNormalChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRoughnessChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onTextureScaleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function MetalRoughMaterial(): MetalRoughMaterialBuilder {
  return createFluentBuilder(
    'MetalRoughMaterial',
    METALROUGHMATERIAL_META,
  ) as unknown as MetalRoughMaterialBuilder;
}
