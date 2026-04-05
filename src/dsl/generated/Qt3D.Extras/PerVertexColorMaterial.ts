// AUTO-GENERATED — DO NOT EDIT
// Type: PerVertexColorMaterial
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { EffectBuilder } from '../Qt3D.Render/Effect.js';
export interface PerVertexColorMaterialBuilder {
  id(id: string): PerVertexColorMaterialBuilder;
  child(obj: QmlObjectBuilder): PerVertexColorMaterialBuilder;

  effect(value: EffectBuilder): PerVertexColorMaterialBuilder;
  effectBind(expr: string): PerVertexColorMaterialBuilder;
  enabled(value: boolean): PerVertexColorMaterialBuilder;
  enabledBind(expr: string): PerVertexColorMaterialBuilder;
  isShareable(value: boolean): PerVertexColorMaterialBuilder;
  isShareableBind(expr: string): PerVertexColorMaterialBuilder;
  objectName(value: string): PerVertexColorMaterialBuilder;
  objectNameBind(expr: string): PerVertexColorMaterialBuilder;
  parent(value: QmlValue): PerVertexColorMaterialBuilder;
  parentBind(expr: string): PerVertexColorMaterialBuilder;
  onAddedToEntity(body: string): PerVertexColorMaterialBuilder;
  onEffectChanged(body: string): PerVertexColorMaterialBuilder;
  onEnabledChanged(body: string): PerVertexColorMaterialBuilder;
  onNodeDestroyed(body: string): PerVertexColorMaterialBuilder;
  onObjectNameChanged(body: string): PerVertexColorMaterialBuilder;
  onParentChanged(body: string): PerVertexColorMaterialBuilder;
  onRemovedFromEntity(body: string): PerVertexColorMaterialBuilder;
  onShareableChanged(body: string): PerVertexColorMaterialBuilder;
}

const PERVERTEXCOLORMATERIAL_META: TypeMetadata = {
  typeName: 'PerVertexColorMaterial',
  properties: [
    { name: 'effect', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEffectChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PerVertexColorMaterial(): PerVertexColorMaterialBuilder {
  return createFluentBuilder('PerVertexColorMaterial', PERVERTEXCOLORMATERIAL_META) as unknown as PerVertexColorMaterialBuilder;
}
