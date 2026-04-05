// AUTO-GENERATED — DO NOT EDIT
// Type: PhongAlphaMaterial
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface PhongAlphaMaterialBuilder {
  id(id: string): PhongAlphaMaterialBuilder;
  child(obj: QmlObjectBuilder): PhongAlphaMaterialBuilder;

  alpha(value: number): PhongAlphaMaterialBuilder;
  alphaBind(expr: string): PhongAlphaMaterialBuilder;
  ambient(value: QmlColor): PhongAlphaMaterialBuilder;
  ambientBind(expr: string): PhongAlphaMaterialBuilder;
  blendFunctionArg(value: QmlEnumToken): PhongAlphaMaterialBuilder;
  blendFunctionArgBind(expr: string): PhongAlphaMaterialBuilder;
  destinationAlphaArg(value: QmlEnumToken): PhongAlphaMaterialBuilder;
  destinationAlphaArgBind(expr: string): PhongAlphaMaterialBuilder;
  destinationRgbArg(value: QmlEnumToken): PhongAlphaMaterialBuilder;
  destinationRgbArgBind(expr: string): PhongAlphaMaterialBuilder;
  diffuse(value: QmlColor): PhongAlphaMaterialBuilder;
  diffuseBind(expr: string): PhongAlphaMaterialBuilder;
  effect(value: EffectBuilder): PhongAlphaMaterialBuilder;
  effectBind(expr: string): PhongAlphaMaterialBuilder;
  enabled(value: boolean): PhongAlphaMaterialBuilder;
  enabledBind(expr: string): PhongAlphaMaterialBuilder;
  isShareable(value: boolean): PhongAlphaMaterialBuilder;
  isShareableBind(expr: string): PhongAlphaMaterialBuilder;
  objectName(value: string): PhongAlphaMaterialBuilder;
  objectNameBind(expr: string): PhongAlphaMaterialBuilder;
  parent(value: QmlValue): PhongAlphaMaterialBuilder;
  parentBind(expr: string): PhongAlphaMaterialBuilder;
  shininess(value: number): PhongAlphaMaterialBuilder;
  shininessBind(expr: string): PhongAlphaMaterialBuilder;
  sourceAlphaArg(value: QmlEnumToken): PhongAlphaMaterialBuilder;
  sourceAlphaArgBind(expr: string): PhongAlphaMaterialBuilder;
  sourceRgbArg(value: QmlEnumToken): PhongAlphaMaterialBuilder;
  sourceRgbArgBind(expr: string): PhongAlphaMaterialBuilder;
  specular(value: QmlColor): PhongAlphaMaterialBuilder;
  specularBind(expr: string): PhongAlphaMaterialBuilder;
  onAddedToEntity(body: string): PhongAlphaMaterialBuilder;
  onAlphaChanged(body: string): PhongAlphaMaterialBuilder;
  onAmbientChanged(body: string): PhongAlphaMaterialBuilder;
  onBlendFunctionArgChanged(body: string): PhongAlphaMaterialBuilder;
  onDestinationAlphaArgChanged(body: string): PhongAlphaMaterialBuilder;
  onDestinationRgbArgChanged(body: string): PhongAlphaMaterialBuilder;
  onDiffuseChanged(body: string): PhongAlphaMaterialBuilder;
  onEffectChanged(body: string): PhongAlphaMaterialBuilder;
  onEnabledChanged(body: string): PhongAlphaMaterialBuilder;
  onNodeDestroyed(body: string): PhongAlphaMaterialBuilder;
  onObjectNameChanged(body: string): PhongAlphaMaterialBuilder;
  onParentChanged(body: string): PhongAlphaMaterialBuilder;
  onRemovedFromEntity(body: string): PhongAlphaMaterialBuilder;
  onShareableChanged(body: string): PhongAlphaMaterialBuilder;
  onShininessChanged(body: string): PhongAlphaMaterialBuilder;
  onSourceAlphaArgChanged(body: string): PhongAlphaMaterialBuilder;
  onSourceRgbArgChanged(body: string): PhongAlphaMaterialBuilder;
  onSpecularChanged(body: string): PhongAlphaMaterialBuilder;
}

const PHONGALPHAMATERIAL_META: TypeMetadata = {
  typeName: 'PhongAlphaMaterial',
  properties: [
    { name: 'alpha', hasValue: true, hasBinding: true },
    { name: 'ambient', hasValue: true, hasBinding: true },
    { name: 'blendFunctionArg', hasValue: true, hasBinding: true },
    { name: 'destinationAlphaArg', hasValue: true, hasBinding: true },
    { name: 'destinationRgbArg', hasValue: true, hasBinding: true },
    { name: 'diffuse', hasValue: true, hasBinding: true },
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shininess', hasValue: true, hasBinding: true },
    { name: 'sourceAlphaArg', hasValue: true, hasBinding: true },
    { name: 'sourceRgbArg', hasValue: true, hasBinding: true },
    { name: 'specular', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onAlphaChanged', paramCount: 1 },
    { handlerName: 'onAmbientChanged', paramCount: 1 },
    { handlerName: 'onBlendFunctionArgChanged', paramCount: 1 },
    { handlerName: 'onDestinationAlphaArgChanged', paramCount: 1 },
    { handlerName: 'onDestinationRgbArgChanged', paramCount: 1 },
    { handlerName: 'onDiffuseChanged', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onShininessChanged', paramCount: 1 },
    { handlerName: 'onSourceAlphaArgChanged', paramCount: 1 },
    { handlerName: 'onSourceRgbArgChanged', paramCount: 1 },
    { handlerName: 'onSpecularChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PhongAlphaMaterial(): PhongAlphaMaterialBuilder {
  return createFluentBuilder('PhongAlphaMaterial', PHONGALPHAMATERIAL_META) as unknown as PhongAlphaMaterialBuilder;
}
