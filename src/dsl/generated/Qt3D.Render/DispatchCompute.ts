// AUTO-GENERATED — DO NOT EDIT
// Type: DispatchCompute
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface DispatchComputeBuilder {
  id(id: string): DispatchComputeBuilder;
  child(obj: QmlObjectBuilder): DispatchComputeBuilder;

  enabled(value: boolean): DispatchComputeBuilder;
  enabledBind(expr: string): DispatchComputeBuilder;
  objectName(value: string): DispatchComputeBuilder;
  objectNameBind(expr: string): DispatchComputeBuilder;
  parent(value: QmlValue): DispatchComputeBuilder;
  parentBind(expr: string): DispatchComputeBuilder;
  workGroupX(value: number): DispatchComputeBuilder;
  workGroupXBind(expr: string): DispatchComputeBuilder;
  workGroupY(value: number): DispatchComputeBuilder;
  workGroupYBind(expr: string): DispatchComputeBuilder;
  workGroupZ(value: number): DispatchComputeBuilder;
  workGroupZBind(expr: string): DispatchComputeBuilder;
  onEnabledChanged(body: string): DispatchComputeBuilder;
  onNodeDestroyed(body: string): DispatchComputeBuilder;
  onObjectNameChanged(body: string): DispatchComputeBuilder;
  onParentChanged(body: string): DispatchComputeBuilder;
  onWorkGroupXChanged(body: string): DispatchComputeBuilder;
  onWorkGroupYChanged(body: string): DispatchComputeBuilder;
  onWorkGroupZChanged(body: string): DispatchComputeBuilder;
}

const DISPATCHCOMPUTE_META: TypeMetadata = {
  typeName: 'DispatchCompute',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'workGroupX', hasValue: true, hasBinding: true },
    { name: 'workGroupY', hasValue: true, hasBinding: true },
    { name: 'workGroupZ', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onWorkGroupXChanged', paramCount: 0 },
    { handlerName: 'onWorkGroupYChanged', paramCount: 0 },
    { handlerName: 'onWorkGroupZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function DispatchCompute(): DispatchComputeBuilder {
  return createFluentBuilder(
    'DispatchCompute',
    DISPATCHCOMPUTE_META,
  ) as unknown as DispatchComputeBuilder;
}
