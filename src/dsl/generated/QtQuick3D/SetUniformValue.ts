// AUTO-GENERATED — DO NOT EDIT
// Type: SetUniformValue
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SetUniformValueBuilder {
  id(id: string): SetUniformValueBuilder;
  child(obj: QmlObjectBuilder): SetUniformValueBuilder;
  children(...objs: QmlObjectBuilder[]): SetUniformValueBuilder;

  objectName(value: string): SetUniformValueBuilder;
  objectNameBind(expr: string): SetUniformValueBuilder;
  parent(value: QmlValue): SetUniformValueBuilder;
  parentBind(expr: string): SetUniformValueBuilder;
  state(value: string): SetUniformValueBuilder;
  stateBind(expr: string): SetUniformValueBuilder;
  target(value: string): SetUniformValueBuilder;
  targetBind(expr: string): SetUniformValueBuilder;
  value(value: QmlValue): SetUniformValueBuilder;
  valueBind(expr: string): SetUniformValueBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SetUniformValueBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SetUniformValueBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SetUniformValueBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SetUniformValueBuilder;
}

const SETUNIFORMVALUE_META: TypeMetadata = {
  typeName: 'SetUniformValue',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SetUniformValue(): SetUniformValueBuilder {
  return createFluentBuilder(
    'SetUniformValue',
    SETUNIFORMVALUE_META,
  ) as unknown as SetUniformValueBuilder;
}
