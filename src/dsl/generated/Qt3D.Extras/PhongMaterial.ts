// AUTO-GENERATED — DO NOT EDIT
// Type: PhongMaterial
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface PhongMaterialBuilder {
  id(id: string): PhongMaterialBuilder;
  child(obj: QmlObjectBuilder): PhongMaterialBuilder;

  ambient(value: QmlColor): PhongMaterialBuilder;
  ambientBind(expr: string): PhongMaterialBuilder;
  diffuse(value: QmlColor): PhongMaterialBuilder;
  diffuseBind(expr: string): PhongMaterialBuilder;
  effect(value: EffectBuilder): PhongMaterialBuilder;
  effectBind(expr: string): PhongMaterialBuilder;
  enabled(value: boolean): PhongMaterialBuilder;
  enabledBind(expr: string): PhongMaterialBuilder;
  isShareable(value: boolean): PhongMaterialBuilder;
  isShareableBind(expr: string): PhongMaterialBuilder;
  objectName(value: string): PhongMaterialBuilder;
  objectNameBind(expr: string): PhongMaterialBuilder;
  parent(value: QmlValue): PhongMaterialBuilder;
  parentBind(expr: string): PhongMaterialBuilder;
  shininess(value: number): PhongMaterialBuilder;
  shininessBind(expr: string): PhongMaterialBuilder;
  specular(value: QmlColor): PhongMaterialBuilder;
  specularBind(expr: string): PhongMaterialBuilder;
  onAddedToEntity(body: string): PhongMaterialBuilder;
  onAmbientChanged(body: string): PhongMaterialBuilder;
  onDiffuseChanged(body: string): PhongMaterialBuilder;
  onEffectChanged(body: string): PhongMaterialBuilder;
  onEnabledChanged(body: string): PhongMaterialBuilder;
  onNodeDestroyed(body: string): PhongMaterialBuilder;
  onObjectNameChanged(body: string): PhongMaterialBuilder;
  onParentChanged(body: string): PhongMaterialBuilder;
  onRemovedFromEntity(body: string): PhongMaterialBuilder;
  onShareableChanged(body: string): PhongMaterialBuilder;
  onShininessChanged(body: string): PhongMaterialBuilder;
  onSpecularChanged(body: string): PhongMaterialBuilder;
}

const PHONGMATERIAL_META: TypeMetadata = {
  typeName: 'PhongMaterial',
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
  ],
  grouped: [],
  attached: [],
};

export function PhongMaterial(): PhongMaterialBuilder {
  return createFluentBuilder(
    'PhongMaterial',
    PHONGMATERIAL_META,
  ) as unknown as PhongMaterialBuilder;
}
