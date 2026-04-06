// AUTO-GENERATED — DO NOT EDIT
// Type: NormalDiffuseSpecularMapMaterial
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface NormalDiffuseSpecularMapMaterialBuilder {
  id(id: string): NormalDiffuseSpecularMapMaterialBuilder;
  child(obj: QmlObjectBuilder): NormalDiffuseSpecularMapMaterialBuilder;
  children(...objs: QmlObjectBuilder[]): NormalDiffuseSpecularMapMaterialBuilder;

  ambient(value: QmlColor): NormalDiffuseSpecularMapMaterialBuilder;
  ambientBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  diffuse(value: QmlValue): NormalDiffuseSpecularMapMaterialBuilder;
  diffuseBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  effect(value: EffectBuilder): NormalDiffuseSpecularMapMaterialBuilder;
  effectBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  enabled(value: boolean): NormalDiffuseSpecularMapMaterialBuilder;
  enabledBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  isShareable(value: boolean): NormalDiffuseSpecularMapMaterialBuilder;
  isShareableBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  normal(value: QmlValue): NormalDiffuseSpecularMapMaterialBuilder;
  normalBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  objectName(value: string): NormalDiffuseSpecularMapMaterialBuilder;
  objectNameBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  parent(value: QmlValue): NormalDiffuseSpecularMapMaterialBuilder;
  parentBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  shininess(value: number): NormalDiffuseSpecularMapMaterialBuilder;
  shininessBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  specular(value: QmlValue): NormalDiffuseSpecularMapMaterialBuilder;
  specularBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  textureScale(value: number): NormalDiffuseSpecularMapMaterialBuilder;
  textureScaleBind(expr: string): NormalDiffuseSpecularMapMaterialBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onAmbientChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onDiffuseChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onEffectChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onNormalChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onParentChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onShininessChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onSpecularChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
  onTextureScaleChanged(handler: DslSignalHandlerValue): NormalDiffuseSpecularMapMaterialBuilder;
}

const NORMALDIFFUSESPECULARMAPMATERIAL_META: TypeMetadata = {
  typeName: 'NormalDiffuseSpecularMapMaterial',
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

export function NormalDiffuseSpecularMapMaterial(): NormalDiffuseSpecularMapMaterialBuilder {
  return createFluentBuilder(
    'NormalDiffuseSpecularMapMaterial',
    NORMALDIFFUSESPECULARMAPMATERIAL_META,
  ) as unknown as NormalDiffuseSpecularMapMaterialBuilder;
}
