// AUTO-GENERATED — DO NOT EDIT
// Type: DiffuseSpecularMapMaterial
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
export interface DiffuseSpecularMapMaterialBuilder {
  id(id: string): DiffuseSpecularMapMaterialBuilder;
  child(obj: QmlObjectBuilder): DiffuseSpecularMapMaterialBuilder;
  children(...objs: QmlObjectBuilder[]): DiffuseSpecularMapMaterialBuilder;

  ambient(value: QmlColor): DiffuseSpecularMapMaterialBuilder;
  ambientBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  diffuse(value: QmlValue): DiffuseSpecularMapMaterialBuilder;
  diffuseBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  effect(value: EffectBuilder): DiffuseSpecularMapMaterialBuilder;
  effectBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  enabled(value: boolean): DiffuseSpecularMapMaterialBuilder;
  enabledBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  isShareable(value: boolean): DiffuseSpecularMapMaterialBuilder;
  isShareableBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  objectName(value: string): DiffuseSpecularMapMaterialBuilder;
  objectNameBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  parent(value: QmlValue): DiffuseSpecularMapMaterialBuilder;
  parentBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  shininess(value: number): DiffuseSpecularMapMaterialBuilder;
  shininessBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  specular(value: QmlValue): DiffuseSpecularMapMaterialBuilder;
  specularBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  textureScale(value: number): DiffuseSpecularMapMaterialBuilder;
  textureScaleBind(expr: string): DiffuseSpecularMapMaterialBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onAmbientChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onDiffuseChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onEffectChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onShininessChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onSpecularChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
  onTextureScaleChanged(handler: DslSignalHandlerValue): DiffuseSpecularMapMaterialBuilder;
}

const DIFFUSESPECULARMAPMATERIAL_META: TypeMetadata = {
  typeName: 'DiffuseSpecularMapMaterial',
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

export function DiffuseSpecularMapMaterial(): DiffuseSpecularMapMaterialBuilder {
  return createFluentBuilder(
    'DiffuseSpecularMapMaterial',
    DIFFUSESPECULARMAPMATERIAL_META,
  ) as unknown as DiffuseSpecularMapMaterialBuilder;
}
