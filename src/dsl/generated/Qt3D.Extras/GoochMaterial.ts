// AUTO-GENERATED — DO NOT EDIT
// Type: GoochMaterial
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface GoochMaterialBuilder {
  id(id: string): GoochMaterialBuilder;
  child(obj: QmlObjectBuilder): GoochMaterialBuilder;

  alpha(value: number): GoochMaterialBuilder;
  alphaBind(expr: string): GoochMaterialBuilder;
  beta(value: number): GoochMaterialBuilder;
  betaBind(expr: string): GoochMaterialBuilder;
  cool(value: QmlColor): GoochMaterialBuilder;
  coolBind(expr: string): GoochMaterialBuilder;
  diffuse(value: QmlColor): GoochMaterialBuilder;
  diffuseBind(expr: string): GoochMaterialBuilder;
  effect(value: EffectBuilder): GoochMaterialBuilder;
  effectBind(expr: string): GoochMaterialBuilder;
  enabled(value: boolean): GoochMaterialBuilder;
  enabledBind(expr: string): GoochMaterialBuilder;
  isShareable(value: boolean): GoochMaterialBuilder;
  isShareableBind(expr: string): GoochMaterialBuilder;
  objectName(value: string): GoochMaterialBuilder;
  objectNameBind(expr: string): GoochMaterialBuilder;
  parent(value: QmlValue): GoochMaterialBuilder;
  parentBind(expr: string): GoochMaterialBuilder;
  shininess(value: number): GoochMaterialBuilder;
  shininessBind(expr: string): GoochMaterialBuilder;
  specular(value: QmlColor): GoochMaterialBuilder;
  specularBind(expr: string): GoochMaterialBuilder;
  warm(value: QmlColor): GoochMaterialBuilder;
  warmBind(expr: string): GoochMaterialBuilder;
  onAddedToEntity(body: string): GoochMaterialBuilder;
  onAlphaChanged(body: string): GoochMaterialBuilder;
  onBetaChanged(body: string): GoochMaterialBuilder;
  onCoolChanged(body: string): GoochMaterialBuilder;
  onDiffuseChanged(body: string): GoochMaterialBuilder;
  onEffectChanged(body: string): GoochMaterialBuilder;
  onEnabledChanged(body: string): GoochMaterialBuilder;
  onNodeDestroyed(body: string): GoochMaterialBuilder;
  onObjectNameChanged(body: string): GoochMaterialBuilder;
  onParentChanged(body: string): GoochMaterialBuilder;
  onRemovedFromEntity(body: string): GoochMaterialBuilder;
  onShareableChanged(body: string): GoochMaterialBuilder;
  onShininessChanged(body: string): GoochMaterialBuilder;
  onSpecularChanged(body: string): GoochMaterialBuilder;
  onWarmChanged(body: string): GoochMaterialBuilder;
}

const GOOCHMATERIAL_META: TypeMetadata = {
  typeName: 'GoochMaterial',
  properties: [
    { name: 'alpha', hasValue: true, hasBinding: true },
    { name: 'beta', hasValue: true, hasBinding: true },
    { name: 'cool', hasValue: true, hasBinding: true },
    { name: 'diffuse', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shininess', hasValue: true, hasBinding: true },
    { name: 'specular', hasValue: true, hasBinding: true },
    { name: 'warm', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAlphaChanged', paramCount: 1 },
    { handlerName: 'onBetaChanged', paramCount: 1 },
    { handlerName: 'onCoolChanged', paramCount: 1 },
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
    { handlerName: 'onWarmChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function GoochMaterial(): GoochMaterialBuilder {
  return createFluentBuilder(
    'GoochMaterial',
    GOOCHMATERIAL_META,
  ) as unknown as GoochMaterialBuilder;
}
