// AUTO-GENERATED — DO NOT EDIT
// Type: Material
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { EffectBuilder } from './Effect.js';
export interface MaterialBuilder {
  id(id: string): MaterialBuilder;
  child(obj: QmlObjectBuilder): MaterialBuilder;

  effect(value: EffectBuilder): MaterialBuilder;
  effectBind(expr: string): MaterialBuilder;
  enabled(value: boolean): MaterialBuilder;
  enabledBind(expr: string): MaterialBuilder;
  isShareable(value: boolean): MaterialBuilder;
  isShareableBind(expr: string): MaterialBuilder;
  objectName(value: string): MaterialBuilder;
  objectNameBind(expr: string): MaterialBuilder;
  parent(value: QmlValue): MaterialBuilder;
  parentBind(expr: string): MaterialBuilder;
  onAddedToEntity(body: string): MaterialBuilder;
  onEffectChanged(body: string): MaterialBuilder;
  onEnabledChanged(body: string): MaterialBuilder;
  onNodeDestroyed(body: string): MaterialBuilder;
  onObjectNameChanged(body: string): MaterialBuilder;
  onParentChanged(body: string): MaterialBuilder;
  onRemovedFromEntity(body: string): MaterialBuilder;
  onShareableChanged(body: string): MaterialBuilder;
}

const MATERIAL_META: TypeMetadata = {
  typeName: 'Material',
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
  grouped: [],
  attached: [],
};

export function Material(): MaterialBuilder {
  return createFluentBuilder('Material', MATERIAL_META) as unknown as MaterialBuilder;
}
