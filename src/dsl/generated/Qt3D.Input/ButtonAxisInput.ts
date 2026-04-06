// AUTO-GENERATED — DO NOT EDIT
// Type: ButtonAxisInput
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ButtonAxisInputBuilder {
  id(id: string): ButtonAxisInputBuilder;
  child(obj: QmlObjectBuilder): ButtonAxisInputBuilder;
  children(...objs: QmlObjectBuilder[]): ButtonAxisInputBuilder;

  acceleration(value: number): ButtonAxisInputBuilder;
  accelerationBind(expr: string): ButtonAxisInputBuilder;
  buttons(value: number): ButtonAxisInputBuilder;
  buttonsBind(expr: string): ButtonAxisInputBuilder;
  deceleration(value: number): ButtonAxisInputBuilder;
  decelerationBind(expr: string): ButtonAxisInputBuilder;
  enabled(value: boolean): ButtonAxisInputBuilder;
  enabledBind(expr: string): ButtonAxisInputBuilder;
  objectName(value: string): ButtonAxisInputBuilder;
  objectNameBind(expr: string): ButtonAxisInputBuilder;
  parent(value: QmlValue): ButtonAxisInputBuilder;
  parentBind(expr: string): ButtonAxisInputBuilder;
  scale(value: number): ButtonAxisInputBuilder;
  scaleBind(expr: string): ButtonAxisInputBuilder;
  sourceDevice(value: QmlValue): ButtonAxisInputBuilder;
  sourceDeviceBind(expr: string): ButtonAxisInputBuilder;
  onAccelerationChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onButtonsChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onDecelerationChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
  onSourceDeviceChanged(handler: DslSignalHandlerValue): ButtonAxisInputBuilder;
}

const BUTTONAXISINPUT_META: TypeMetadata = {
  typeName: 'ButtonAxisInput',
  properties: [
    { name: 'acceleration', hasValue: true, hasBinding: true },
    { name: 'buttons', hasValue: true, hasBinding: true },
    { name: 'deceleration', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'sourceDevice', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccelerationChanged', paramCount: 1 },
    { handlerName: 'onButtonsChanged', paramCount: 1 },
    { handlerName: 'onDecelerationChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onScaleChanged', paramCount: 1 },
    { handlerName: 'onSourceDeviceChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ButtonAxisInput(): ButtonAxisInputBuilder {
  return createFluentBuilder(
    'ButtonAxisInput',
    BUTTONAXISINPUT_META,
  ) as unknown as ButtonAxisInputBuilder;
}
