// AUTO-GENERATED — DO NOT EDIT
// Type: NormalDiffuseMapAlphaMaterial
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface NormalDiffuseMapAlphaMaterialBuilder {
  id(id: string): NormalDiffuseMapAlphaMaterialBuilder;
  child(obj: QmlObjectBuilder): NormalDiffuseMapAlphaMaterialBuilder;

  ambient(value: QmlColor): NormalDiffuseMapAlphaMaterialBuilder;
  ambientBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  diffuse(value: QmlValue): NormalDiffuseMapAlphaMaterialBuilder;
  diffuseBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  effect(value: EffectBuilder): NormalDiffuseMapAlphaMaterialBuilder;
  effectBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  enabled(value: boolean): NormalDiffuseMapAlphaMaterialBuilder;
  enabledBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  isShareable(value: boolean): NormalDiffuseMapAlphaMaterialBuilder;
  isShareableBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  normal(value: QmlValue): NormalDiffuseMapAlphaMaterialBuilder;
  normalBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  objectName(value: string): NormalDiffuseMapAlphaMaterialBuilder;
  objectNameBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  parent(value: QmlValue): NormalDiffuseMapAlphaMaterialBuilder;
  parentBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  shininess(value: number): NormalDiffuseMapAlphaMaterialBuilder;
  shininessBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  specular(value: QmlColor): NormalDiffuseMapAlphaMaterialBuilder;
  specularBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  textureScale(value: number): NormalDiffuseMapAlphaMaterialBuilder;
  textureScaleBind(expr: string): NormalDiffuseMapAlphaMaterialBuilder;
  onAddedToEntity(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onAmbientChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onDiffuseChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onEffectChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onEnabledChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onNodeDestroyed(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onNormalChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onObjectNameChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onParentChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onRemovedFromEntity(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onShareableChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onShininessChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onSpecularChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
  onTextureScaleChanged(body: string): NormalDiffuseMapAlphaMaterialBuilder;
}

const NORMALDIFFUSEMAPALPHAMATERIAL_META: TypeMetadata = {
  typeName: 'NormalDiffuseMapAlphaMaterial',
  properties: [
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
  grouped: [],
  attached: [],
};

export function NormalDiffuseMapAlphaMaterial(): NormalDiffuseMapAlphaMaterialBuilder {
  return createFluentBuilder(
    'NormalDiffuseMapAlphaMaterial',
    NORMALDIFFUSEMAPALPHAMATERIAL_META,
  ) as unknown as NormalDiffuseMapAlphaMaterialBuilder;
}
