// AUTO-GENERATED — DO NOT EDIT
// Type: StencilOperation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface StencilOperationBuilder {
  id(id: string): StencilOperationBuilder;
  child(obj: QmlObjectBuilder): StencilOperationBuilder;

  enabled(value: boolean): StencilOperationBuilder;
  enabledBind(expr: string): StencilOperationBuilder;
  objectName(value: string): StencilOperationBuilder;
  objectNameBind(expr: string): StencilOperationBuilder;
  parent(value: QmlValue): StencilOperationBuilder;
  parentBind(expr: string): StencilOperationBuilder;
  onEnabledChanged(body: string): StencilOperationBuilder;
  onNodeDestroyed(body: string): StencilOperationBuilder;
  onObjectNameChanged(body: string): StencilOperationBuilder;
  onParentChanged(body: string): StencilOperationBuilder;
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
