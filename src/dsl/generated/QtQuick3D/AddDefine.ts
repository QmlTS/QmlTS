// AUTO-GENERATED — DO NOT EDIT
// Type: AddDefine
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AddDefineBuilder {
  id(id: string): AddDefineBuilder;
  child(obj: QmlObjectBuilder): AddDefineBuilder;
  children(...objs: QmlObjectBuilder[]): AddDefineBuilder;

  name(value: string): AddDefineBuilder;
  nameBind(expr: string): AddDefineBuilder;
  objectName(value: string): AddDefineBuilder;
  objectNameBind(expr: string): AddDefineBuilder;
  parent(value: QmlValue): AddDefineBuilder;
  parentBind(expr: string): AddDefineBuilder;
  state(value: string): AddDefineBuilder;
  stateBind(expr: string): AddDefineBuilder;
  value(value: number): AddDefineBuilder;
  valueBind(expr: string): AddDefineBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): AddDefineBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AddDefineBuilder;
  onParentChanged(handler: DslSignalHandlerValue): AddDefineBuilder;
  onStateChanged(handler: DslSignalHandlerValue): AddDefineBuilder;
}

const ADDDEFINE_META: TypeMetadata = {
  typeName: 'AddDefine',
  properties: [
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
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

export function AddDefine(): AddDefineBuilder {
  return createFluentBuilder('AddDefine', ADDDEFINE_META) as unknown as AddDefineBuilder;
}
