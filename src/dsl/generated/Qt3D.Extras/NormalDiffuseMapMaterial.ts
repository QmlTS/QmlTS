// AUTO-GENERATED — DO NOT EDIT
// Type: NormalDiffuseMapMaterial
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
export interface NormalDiffuseMapMaterialBuilder {
  id(id: string): NormalDiffuseMapMaterialBuilder;
  child(obj: QmlObjectBuilder): NormalDiffuseMapMaterialBuilder;
  children(...objs: QmlObjectBuilder[]): NormalDiffuseMapMaterialBuilder;

  ambient(value: QmlColor): NormalDiffuseMapMaterialBuilder;
  ambientBind(expr: string): NormalDiffuseMapMaterialBuilder;
  diffuse(value: QmlValue): NormalDiffuseMapMaterialBuilder;
  diffuseBind(expr: string): NormalDiffuseMapMaterialBuilder;
  effect(value: EffectBuilder): NormalDiffuseMapMaterialBuilder;
  effectBind(expr: string): NormalDiffuseMapMaterialBuilder;
  enabled(value: boolean): NormalDiffuseMapMaterialBuilder;
  enabledBind(expr: string): NormalDiffuseMapMaterialBuilder;
  isShareable(value: boolean): NormalDiffuseMapMaterialBuilder;
  isShareableBind(expr: string): NormalDiffuseMapMaterialBuilder;
  normal(value: QmlValue): NormalDiffuseMapMaterialBuilder;
  normalBind(expr: string): NormalDiffuseMapMaterialBuilder;
  objectName(value: string): NormalDiffuseMapMaterialBuilder;
  objectNameBind(expr: string): NormalDiffuseMapMaterialBuilder;
  parent(value: QmlValue): NormalDiffuseMapMaterialBuilder;
  parentBind(expr: string): NormalDiffuseMapMaterialBuilder;
  shininess(value: number): NormalDiffuseMapMaterialBuilder;
  shininessBind(expr: string): NormalDiffuseMapMaterialBuilder;
  specular(value: QmlColor): NormalDiffuseMapMaterialBuilder;
  specularBind(expr: string): NormalDiffuseMapMaterialBuilder;
  textureScale(value: number): NormalDiffuseMapMaterialBuilder;
  textureScaleBind(expr: string): NormalDiffuseMapMaterialBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onAmbientChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onDiffuseChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onEffectChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onNormalChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onParentChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onShininessChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onSpecularChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
  onTextureScaleChanged(handler: DslSignalHandlerValue): NormalDiffuseMapMaterialBuilder;
}

const NORMALDIFFUSEMAPMATERIAL_META: TypeMetadata = {
  typeName: 'NormalDiffuseMapMaterial',
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

export function NormalDiffuseMapMaterial(): NormalDiffuseMapMaterialBuilder {
  return createFluentBuilder(
    'NormalDiffuseMapMaterial',
    NORMALDIFFUSEMAPMATERIAL_META,
  ) as unknown as NormalDiffuseMapMaterialBuilder;
}
