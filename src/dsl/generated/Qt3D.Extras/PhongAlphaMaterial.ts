// AUTO-GENERATED — DO NOT EDIT
// Type: PhongAlphaMaterial
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface PhongAlphaMaterialBuilder {
  id(id: string): PhongAlphaMaterialBuilder;
  child(obj: QmlObjectBuilder): PhongAlphaMaterialBuilder;
  children(...objs: QmlObjectBuilder[]): PhongAlphaMaterialBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onAlphaChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onAmbientChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onBlendFunctionArgChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onDestinationAlphaArgChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onDestinationRgbArgChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onDiffuseChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onEffectChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onParentChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onShininessChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onSourceAlphaArgChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onSourceRgbArgChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
  onSpecularChanged(handler: DslSignalHandlerValue): PhongAlphaMaterialBuilder;
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
  grouped: [],
  attached: [],
};

export function PhongAlphaMaterial(): PhongAlphaMaterialBuilder {
  return createFluentBuilder(
    'PhongAlphaMaterial',
    PHONGALPHAMATERIAL_META,
  ) as unknown as PhongAlphaMaterialBuilder;
}
