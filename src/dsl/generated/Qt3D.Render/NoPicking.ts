// AUTO-GENERATED — DO NOT EDIT
// Type: NoPicking
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface NoPickingBuilder {
  id(id: string): NoPickingBuilder;
  child(obj: QmlObjectBuilder): NoPickingBuilder;
  children(...objs: QmlObjectBuilder[]): NoPickingBuilder;

  enabled(value: boolean): NoPickingBuilder;
  enabledBind(expr: string): NoPickingBuilder;
  objectName(value: string): NoPickingBuilder;
  objectNameBind(expr: string): NoPickingBuilder;
  parent(value: QmlValue): NoPickingBuilder;
  parentBind(expr: string): NoPickingBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): NoPickingBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): NoPickingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NoPickingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): NoPickingBuilder;
}

const NOPICKING_META: TypeMetadata = {
  typeName: 'NoPicking',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function NoPicking(): NoPickingBuilder {
  return createFluentBuilder('NoPicking', NOPICKING_META) as unknown as NoPickingBuilder;
}
