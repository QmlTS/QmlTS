// AUTO-GENERATED — DO NOT EDIT
// Type: Effect
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EffectBuilder {
  id(id: string): EffectBuilder;
  child(obj: QmlObjectBuilder): EffectBuilder;
  children(...objs: QmlObjectBuilder[]): EffectBuilder;

  objectName(value: string): EffectBuilder;
  objectNameBind(expr: string): EffectBuilder;
  parent(value: QmlValue): EffectBuilder;
  parentBind(expr: string): EffectBuilder;
  state(value: string): EffectBuilder;
  stateBind(expr: string): EffectBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): EffectBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): EffectBuilder;
  onParentChanged(handler: DslSignalHandlerValue): EffectBuilder;
  onStateChanged(handler: DslSignalHandlerValue): EffectBuilder;
}

const EFFECT_META: TypeMetadata = {
  typeName: 'Effect',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function Effect(): EffectBuilder {
  return createFluentBuilder('Effect', EFFECT_META) as unknown as EffectBuilder;
}
