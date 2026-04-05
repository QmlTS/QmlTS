// AUTO-GENERATED — DO NOT EDIT
// Type: KeyboardDevice
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface KeyboardDeviceBuilder {
  id(id: string): KeyboardDeviceBuilder;
  child(obj: QmlObjectBuilder): KeyboardDeviceBuilder;

  enabled(value: boolean): KeyboardDeviceBuilder;
  enabledBind(expr: string): KeyboardDeviceBuilder;
  objectName(value: string): KeyboardDeviceBuilder;
  objectNameBind(expr: string): KeyboardDeviceBuilder;
  parent(value: QmlValue): KeyboardDeviceBuilder;
  parentBind(expr: string): KeyboardDeviceBuilder;
  onActiveInputChanged(body: string): KeyboardDeviceBuilder;
  onEnabledChanged(body: string): KeyboardDeviceBuilder;
  onNodeDestroyed(body: string): KeyboardDeviceBuilder;
  onObjectNameChanged(body: string): KeyboardDeviceBuilder;
  onParentChanged(body: string): KeyboardDeviceBuilder;
}

const KEYBOARDDEVICE_META: TypeMetadata = {
  typeName: 'KeyboardDevice',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveInputChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function KeyboardDevice(): KeyboardDeviceBuilder {
  return createFluentBuilder('KeyboardDevice', KEYBOARDDEVICE_META) as unknown as KeyboardDeviceBuilder;
}
