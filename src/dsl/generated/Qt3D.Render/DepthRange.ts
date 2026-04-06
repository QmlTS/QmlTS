// AUTO-GENERATED — DO NOT EDIT
// Type: DepthRange
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface DepthRangeBuilder {
  id(id: string): DepthRangeBuilder;
  child(obj: QmlObjectBuilder): DepthRangeBuilder;
  children(...objs: QmlObjectBuilder[]): DepthRangeBuilder;

  enabled(value: boolean): DepthRangeBuilder;
  enabledBind(expr: string): DepthRangeBuilder;
  farValue(value: number): DepthRangeBuilder;
  farValueBind(expr: string): DepthRangeBuilder;
  nearValue(value: number): DepthRangeBuilder;
  nearValueBind(expr: string): DepthRangeBuilder;
  objectName(value: string): DepthRangeBuilder;
  objectNameBind(expr: string): DepthRangeBuilder;
  parent(value: QmlValue): DepthRangeBuilder;
  parentBind(expr: string): DepthRangeBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): DepthRangeBuilder;
  onFarValueChanged(handler: DslSignalHandlerValue): DepthRangeBuilder;
  onNearValueChanged(handler: DslSignalHandlerValue): DepthRangeBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): DepthRangeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DepthRangeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): DepthRangeBuilder;
}

const DEPTHRANGE_META: TypeMetadata = {
  typeName: 'DepthRange',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'farValue', hasValue: true, hasBinding: true },
    { name: 'nearValue', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFarValueChanged', paramCount: 1 },
    { handlerName: 'onNearValueChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function DepthRange(): DepthRangeBuilder {
  return createFluentBuilder('DepthRange', DEPTHRANGE_META) as unknown as DepthRangeBuilder;
}
