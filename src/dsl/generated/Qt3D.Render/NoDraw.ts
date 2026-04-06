// AUTO-GENERATED — DO NOT EDIT
// Type: NoDraw
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface NoDrawBuilder {
  id(id: string): NoDrawBuilder;
  child(obj: QmlObjectBuilder): NoDrawBuilder;
  children(...objs: QmlObjectBuilder[]): NoDrawBuilder;

  enabled(value: boolean): NoDrawBuilder;
  enabledBind(expr: string): NoDrawBuilder;
  objectName(value: string): NoDrawBuilder;
  objectNameBind(expr: string): NoDrawBuilder;
  parent(value: QmlValue): NoDrawBuilder;
  parentBind(expr: string): NoDrawBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): NoDrawBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): NoDrawBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NoDrawBuilder;
  onParentChanged(handler: DslSignalHandlerValue): NoDrawBuilder;
}

const NODRAW_META: TypeMetadata = {
  typeName: 'NoDraw',
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

export function NoDraw(): NoDrawBuilder {
  return createFluentBuilder('NoDraw', NODRAW_META) as unknown as NoDrawBuilder;
}
