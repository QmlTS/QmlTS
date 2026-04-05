// AUTO-GENERATED — DO NOT EDIT
// Type: InstanceRange
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface InstanceRangeBuilder {
  id(id: string): InstanceRangeBuilder;
  child(obj: QmlObjectBuilder): InstanceRangeBuilder;

  from(value: QmlValue): InstanceRangeBuilder;
  fromBind(expr: string): InstanceRangeBuilder;
  objectName(value: string): InstanceRangeBuilder;
  objectNameBind(expr: string): InstanceRangeBuilder;
  parent(value: QmlValue): InstanceRangeBuilder;
  parentBind(expr: string): InstanceRangeBuilder;
  proportional(value: boolean): InstanceRangeBuilder;
  proportionalBind(expr: string): InstanceRangeBuilder;
  state(value: string): InstanceRangeBuilder;
  stateBind(expr: string): InstanceRangeBuilder;
  to(value: QmlValue): InstanceRangeBuilder;
  toBind(expr: string): InstanceRangeBuilder;
  onChanged(body: string): InstanceRangeBuilder;
  onChildrenChanged(body: string): InstanceRangeBuilder;
  onFromChanged(body: string): InstanceRangeBuilder;
  onObjectNameChanged(body: string): InstanceRangeBuilder;
  onParentChanged(body: string): InstanceRangeBuilder;
  onProportionalChanged(body: string): InstanceRangeBuilder;
  onStateChanged(body: string): InstanceRangeBuilder;
  onToChanged(body: string): InstanceRangeBuilder;
}

const INSTANCERANGE_META: TypeMetadata = {
  typeName: 'InstanceRange',
  properties: [
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'proportional', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onProportionalChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function InstanceRange(): InstanceRangeBuilder {
  return createFluentBuilder('InstanceRange', INSTANCERANGE_META) as unknown as InstanceRangeBuilder;
}
