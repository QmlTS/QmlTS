// AUTO-GENERATED — DO NOT EDIT
// Type: TextureMaterial
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, QmlVector2d, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface TextureMaterialBuilder {
  id(id: string): TextureMaterialBuilder;
  child(obj: QmlObjectBuilder): TextureMaterialBuilder;

  alphaBlending(value: boolean): TextureMaterialBuilder;
  alphaBlendingBind(expr: string): TextureMaterialBuilder;
  effect(value: EffectBuilder): TextureMaterialBuilder;
  effectBind(expr: string): TextureMaterialBuilder;
  enabled(value: boolean): TextureMaterialBuilder;
  enabledBind(expr: string): TextureMaterialBuilder;
  isShareable(value: boolean): TextureMaterialBuilder;
  isShareableBind(expr: string): TextureMaterialBuilder;
  objectName(value: string): TextureMaterialBuilder;
  objectNameBind(expr: string): TextureMaterialBuilder;
  parent(value: QmlValue): TextureMaterialBuilder;
  parentBind(expr: string): TextureMaterialBuilder;
  texture(value: QmlValue): TextureMaterialBuilder;
  textureBind(expr: string): TextureMaterialBuilder;
  textureOffset(value: QmlVector2d): TextureMaterialBuilder;
  textureOffsetBind(expr: string): TextureMaterialBuilder;
  textureTransform(value: QmlValue): TextureMaterialBuilder;
  textureTransformBind(expr: string): TextureMaterialBuilder;
  onAddedToEntity(body: string): TextureMaterialBuilder;
  onAlphaBlendingEnabledChanged(body: string): TextureMaterialBuilder;
  onEffectChanged(body: string): TextureMaterialBuilder;
  onEnabledChanged(body: string): TextureMaterialBuilder;
  onNodeDestroyed(body: string): TextureMaterialBuilder;
  onObjectNameChanged(body: string): TextureMaterialBuilder;
  onParentChanged(body: string): TextureMaterialBuilder;
  onRemovedFromEntity(body: string): TextureMaterialBuilder;
  onShareableChanged(body: string): TextureMaterialBuilder;
  onTextureChanged(body: string): TextureMaterialBuilder;
  onTextureOffsetChanged(body: string): TextureMaterialBuilder;
  onTextureTransformChanged(body: string): TextureMaterialBuilder;
}

const TEXTUREMATERIAL_META: TypeMetadata = {
  typeName: 'TextureMaterial',
  properties: [
    { name: 'alphaBlending', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
    { name: 'textureOffset', hasValue: true, hasBinding: true },
    { name: 'textureTransform', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAlphaBlendingEnabledChanged', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
    { handlerName: 'onTextureOffsetChanged', paramCount: 1 },
    { handlerName: 'onTextureTransformChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function TextureMaterial(): TextureMaterialBuilder {
  return createFluentBuilder(
    'TextureMaterial',
    TEXTUREMATERIAL_META,
  ) as unknown as TextureMaterialBuilder;
}
