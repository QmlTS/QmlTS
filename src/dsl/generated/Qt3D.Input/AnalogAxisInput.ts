// AUTO-GENERATED — DO NOT EDIT
// Type: AnalogAxisInput
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AnalogAxisInputBuilder {
  id(id: string): AnalogAxisInputBuilder;
  child(obj: QmlObjectBuilder): AnalogAxisInputBuilder;

  axis(value: number): AnalogAxisInputBuilder;
  axisBind(expr: string): AnalogAxisInputBuilder;
  enabled(value: boolean): AnalogAxisInputBuilder;
  enabledBind(expr: string): AnalogAxisInputBuilder;
  objectName(value: string): AnalogAxisInputBuilder;
  objectNameBind(expr: string): AnalogAxisInputBuilder;
  parent(value: QmlValue): AnalogAxisInputBuilder;
  parentBind(expr: string): AnalogAxisInputBuilder;
  sourceDevice(value: QmlValue): AnalogAxisInputBuilder;
  sourceDeviceBind(expr: string): AnalogAxisInputBuilder;
  onAxisChanged(body: string): AnalogAxisInputBuilder;
  onEnabledChanged(body: string): AnalogAxisInputBuilder;
  onNodeDestroyed(body: string): AnalogAxisInputBuilder;
  onObjectNameChanged(body: string): AnalogAxisInputBuilder;
  onParentChanged(body: string): AnalogAxisInputBuilder;
  onSourceDeviceChanged(body: string): AnalogAxisInputBuilder;
}

const ANALOGAXISINPUT_META: TypeMetadata = {
  typeName: 'AnalogAxisInput',
  properties: [
    { name: 'axis', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sourceDevice', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceDeviceChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function AnalogAxisInput(): AnalogAxisInputBuilder {
  return createFluentBuilder('AnalogAxisInput', ANALOGAXISINPUT_META) as unknown as AnalogAxisInputBuilder;
}
