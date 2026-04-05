// AUTO-GENERATED — DO NOT EDIT
// Type: Axis
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AxisBuilder {
  id(id: string): AxisBuilder;
  child(obj: QmlObjectBuilder): AxisBuilder;

  enabled(value: boolean): AxisBuilder;
  enabledBind(expr: string): AxisBuilder;
  objectName(value: string): AxisBuilder;
  objectNameBind(expr: string): AxisBuilder;
  parent(value: QmlValue): AxisBuilder;
  parentBind(expr: string): AxisBuilder;
  onEnabledChanged(body: string): AxisBuilder;
  onNodeDestroyed(body: string): AxisBuilder;
  onObjectNameChanged(body: string): AxisBuilder;
  onParentChanged(body: string): AxisBuilder;
  onValueChanged(body: string): AxisBuilder;
}

const AXIS_META: TypeMetadata = {
  typeName: 'Axis',
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
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Axis(): AxisBuilder {
  return createFluentBuilder('Axis', AXIS_META) as unknown as AxisBuilder;
}
