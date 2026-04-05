// AUTO-GENERATED — DO NOT EDIT
// Type: DiffuseSpecularMaterial
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface DiffuseSpecularMaterialBuilder {
  id(id: string): DiffuseSpecularMaterialBuilder;
  child(obj: QmlObjectBuilder): DiffuseSpecularMaterialBuilder;

  alphaBlending(value: boolean): DiffuseSpecularMaterialBuilder;
  alphaBlendingBind(expr: string): DiffuseSpecularMaterialBuilder;
  ambient(value: QmlColor): DiffuseSpecularMaterialBuilder;
  ambientBind(expr: string): DiffuseSpecularMaterialBuilder;
  diffuse(value: QmlValue): DiffuseSpecularMaterialBuilder;
  diffuseBind(expr: string): DiffuseSpecularMaterialBuilder;
  effect(value: EffectBuilder): DiffuseSpecularMaterialBuilder;
  effectBind(expr: string): DiffuseSpecularMaterialBuilder;
  enabled(value: boolean): DiffuseSpecularMaterialBuilder;
  enabledBind(expr: string): DiffuseSpecularMaterialBuilder;
  isShareable(value: boolean): DiffuseSpecularMaterialBuilder;
  isShareableBind(expr: string): DiffuseSpecularMaterialBuilder;
  normal(value: QmlValue): DiffuseSpecularMaterialBuilder;
  normalBind(expr: string): DiffuseSpecularMaterialBuilder;
  objectName(value: string): DiffuseSpecularMaterialBuilder;
  objectNameBind(expr: string): DiffuseSpecularMaterialBuilder;
  parent(value: QmlValue): DiffuseSpecularMaterialBuilder;
  parentBind(expr: string): DiffuseSpecularMaterialBuilder;
  shininess(value: number): DiffuseSpecularMaterialBuilder;
  shininessBind(expr: string): DiffuseSpecularMaterialBuilder;
  specular(value: QmlValue): DiffuseSpecularMaterialBuilder;
  specularBind(expr: string): DiffuseSpecularMaterialBuilder;
  textureScale(value: number): DiffuseSpecularMaterialBuilder;
  textureScaleBind(expr: string): DiffuseSpecularMaterialBuilder;
  onAddedToEntity(body: string): DiffuseSpecularMaterialBuilder;
  onAlphaBlendingEnabledChanged(body: string): DiffuseSpecularMaterialBuilder;
  onAmbientChanged(body: string): DiffuseSpecularMaterialBuilder;
  onDiffuseChanged(body: string): DiffuseSpecularMaterialBuilder;
  onEffectChanged(body: string): DiffuseSpecularMaterialBuilder;
  onEnabledChanged(body: string): DiffuseSpecularMaterialBuilder;
  onNodeDestroyed(body: string): DiffuseSpecularMaterialBuilder;
  onNormalChanged(body: string): DiffuseSpecularMaterialBuilder;
  onObjectNameChanged(body: string): DiffuseSpecularMaterialBuilder;
  onParentChanged(body: string): DiffuseSpecularMaterialBuilder;
  onRemovedFromEntity(body: string): DiffuseSpecularMaterialBuilder;
  onShareableChanged(body: string): DiffuseSpecularMaterialBuilder;
  onShininessChanged(body: string): DiffuseSpecularMaterialBuilder;
  onSpecularChanged(body: string): DiffuseSpecularMaterialBuilder;
  onTextureScaleChanged(body: string): DiffuseSpecularMaterialBuilder;
}

const DIFFUSESPECULARMATERIAL_META: TypeMetadata = {
  typeName: 'DiffuseSpecularMaterial',
  properties: [
    { name: 'alphaBlending', hasValue: true, hasBinding: true },
    { name: 'ambient', hasValue: true, hasBinding: true },
    { name: 'diffuse', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'normal', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shininess', hasValue: true, hasBinding: true },
    { name: 'specular', hasValue: true, hasBinding: true },
    { name: 'textureScale', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAlphaBlendingEnabledChanged', paramCount: 1 },
    { handlerName: 'onAmbientChanged', paramCount: 1 },
    { handlerName: 'onDiffuseChanged', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNormalChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onShininessChanged', paramCount: 1 },
    { handlerName: 'onSpecularChanged', paramCount: 1 },
    { handlerName: 'onTextureScaleChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function DiffuseSpecularMaterial(): DiffuseSpecularMaterialBuilder {
  return createFluentBuilder('DiffuseSpecularMaterial', DIFFUSESPECULARMATERIAL_META) as unknown as DiffuseSpecularMaterialBuilder;
}
