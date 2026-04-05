// AUTO-GENERATED — DO NOT EDIT
// Type: DiffuseMapMaterial
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface DiffuseMapMaterialBuilder {
  id(id: string): DiffuseMapMaterialBuilder;
  child(obj: QmlObjectBuilder): DiffuseMapMaterialBuilder;

  ambient(value: QmlColor): DiffuseMapMaterialBuilder;
  ambientBind(expr: string): DiffuseMapMaterialBuilder;
  diffuse(value: QmlValue): DiffuseMapMaterialBuilder;
  diffuseBind(expr: string): DiffuseMapMaterialBuilder;
  effect(value: EffectBuilder): DiffuseMapMaterialBuilder;
  effectBind(expr: string): DiffuseMapMaterialBuilder;
  enabled(value: boolean): DiffuseMapMaterialBuilder;
  enabledBind(expr: string): DiffuseMapMaterialBuilder;
  isShareable(value: boolean): DiffuseMapMaterialBuilder;
  isShareableBind(expr: string): DiffuseMapMaterialBuilder;
  objectName(value: string): DiffuseMapMaterialBuilder;
  objectNameBind(expr: string): DiffuseMapMaterialBuilder;
  parent(value: QmlValue): DiffuseMapMaterialBuilder;
  parentBind(expr: string): DiffuseMapMaterialBuilder;
  shininess(value: number): DiffuseMapMaterialBuilder;
  shininessBind(expr: string): DiffuseMapMaterialBuilder;
  specular(value: QmlColor): DiffuseMapMaterialBuilder;
  specularBind(expr: string): DiffuseMapMaterialBuilder;
  textureScale(value: number): DiffuseMapMaterialBuilder;
  textureScaleBind(expr: string): DiffuseMapMaterialBuilder;
  onAddedToEntity(body: string): DiffuseMapMaterialBuilder;
  onAmbientChanged(body: string): DiffuseMapMaterialBuilder;
  onDiffuseChanged(body: string): DiffuseMapMaterialBuilder;
  onEffectChanged(body: string): DiffuseMapMaterialBuilder;
  onEnabledChanged(body: string): DiffuseMapMaterialBuilder;
  onNodeDestroyed(body: string): DiffuseMapMaterialBuilder;
  onObjectNameChanged(body: string): DiffuseMapMaterialBuilder;
  onParentChanged(body: string): DiffuseMapMaterialBuilder;
  onRemovedFromEntity(body: string): DiffuseMapMaterialBuilder;
  onShareableChanged(body: string): DiffuseMapMaterialBuilder;
  onShininessChanged(body: string): DiffuseMapMaterialBuilder;
  onSpecularChanged(body: string): DiffuseMapMaterialBuilder;
  onTextureScaleChanged(body: string): DiffuseMapMaterialBuilder;
}

const DIFFUSEMAPMATERIAL_META: TypeMetadata = {
  typeName: 'DiffuseMapMaterial',
  properties: [
    { name: 'ambient', hasValue: true, hasBinding: true },
    { name: 'diffuse', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shininess', hasValue: true, hasBinding: true },
    { name: 'specular', hasValue: true, hasBinding: true },
    { name: 'textureScale', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAmbientChanged', paramCount: 1 },
    { handlerName: 'onDiffuseChanged', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onShininessChanged', paramCount: 1 },
    { handlerName: 'onSpecularChanged', paramCount: 1 },
    { handlerName: 'onTextureScaleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function DiffuseMapMaterial(): DiffuseMapMaterialBuilder {
  return createFluentBuilder(
    'DiffuseMapMaterial',
    DIFFUSEMAPMATERIAL_META,
  ) as unknown as DiffuseMapMaterialBuilder;
}
