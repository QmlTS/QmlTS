// AUTO-GENERATED — DO NOT EDIT
// Type: StencilOperation
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface StencilOperationBuilder {
  id(id: string): StencilOperationBuilder;
  child(obj: QmlObjectBuilder): StencilOperationBuilder;
  children(...objs: QmlObjectBuilder[]): StencilOperationBuilder;

  enabled(value: boolean): StencilOperationBuilder;
  enabledBind(expr: string): StencilOperationBuilder;
  objectName(value: string): StencilOperationBuilder;
  objectNameBind(expr: string): StencilOperationBuilder;
  parent(value: QmlValue): StencilOperationBuilder;
  parentBind(expr: string): StencilOperationBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): StencilOperationBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): StencilOperationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StencilOperationBuilder;
  onParentChanged(handler: DslSignalHandlerValue): StencilOperationBuilder;
}

const STENCILOPERATION_META: TypeMetadata = {
  typeName: 'StencilOperation',
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

export function StencilOperation(): StencilOperationBuilder {
  return createFluentBuilder(
    'StencilOperation',
    STENCILOPERATION_META,
  ) as unknown as StencilOperationBuilder;
}
