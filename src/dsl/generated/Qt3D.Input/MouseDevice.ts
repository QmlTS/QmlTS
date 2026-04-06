// AUTO-GENERATED — DO NOT EDIT
// Type: MouseDevice
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MouseDeviceBuilder {
  id(id: string): MouseDeviceBuilder;
  child(obj: QmlObjectBuilder): MouseDeviceBuilder;
  children(...objs: QmlObjectBuilder[]): MouseDeviceBuilder;

  enabled(value: boolean): MouseDeviceBuilder;
  enabledBind(expr: string): MouseDeviceBuilder;
  objectName(value: string): MouseDeviceBuilder;
  objectNameBind(expr: string): MouseDeviceBuilder;
  parent(value: QmlValue): MouseDeviceBuilder;
  parentBind(expr: string): MouseDeviceBuilder;
  sensitivity(value: number): MouseDeviceBuilder;
  sensitivityBind(expr: string): MouseDeviceBuilder;
  updateAxesContinuously(value: boolean): MouseDeviceBuilder;
  updateAxesContinuouslyBind(expr: string): MouseDeviceBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MouseDeviceBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): MouseDeviceBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MouseDeviceBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MouseDeviceBuilder;
  onSensitivityChanged(handler: DslSignalHandlerValue): MouseDeviceBuilder;
  onUpdateAxesContinuouslyChanged(handler: DslSignalHandlerValue): MouseDeviceBuilder;
}

const MOUSEDEVICE_META: TypeMetadata = {
  typeName: 'MouseDevice',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sensitivity', hasValue: true, hasBinding: true },
    { name: 'updateAxesContinuously', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSensitivityChanged', paramCount: 1 },
    { handlerName: 'onUpdateAxesContinuouslyChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function MouseDevice(): MouseDeviceBuilder {
  return createFluentBuilder('MouseDevice', MOUSEDEVICE_META) as unknown as MouseDeviceBuilder;
}

export namespace MouseDevice {
  export namespace Axis {
    export const X = createEnumToken('MouseDevice', 'Axis', 'X');
    export const Y = createEnumToken('MouseDevice', 'Axis', 'Y');
    export const WheelX = createEnumToken('MouseDevice', 'Axis', 'WheelX');
    export const WheelY = createEnumToken('MouseDevice', 'Axis', 'WheelY');
  }
}
