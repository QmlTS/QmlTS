// AUTO-GENERATED — DO NOT EDIT
// Type: LogicalDevice
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface LogicalDeviceBuilder {
  id(id: string): LogicalDeviceBuilder;
  child(obj: QmlObjectBuilder): LogicalDeviceBuilder;

  enabled(value: boolean): LogicalDeviceBuilder;
  enabledBind(expr: string): LogicalDeviceBuilder;
  isShareable(value: boolean): LogicalDeviceBuilder;
  isShareableBind(expr: string): LogicalDeviceBuilder;
  objectName(value: string): LogicalDeviceBuilder;
  objectNameBind(expr: string): LogicalDeviceBuilder;
  parent(value: QmlValue): LogicalDeviceBuilder;
  parentBind(expr: string): LogicalDeviceBuilder;
  onAddedToEntity(body: string): LogicalDeviceBuilder;
  onEnabledChanged(body: string): LogicalDeviceBuilder;
  onNodeDestroyed(body: string): LogicalDeviceBuilder;
  onObjectNameChanged(body: string): LogicalDeviceBuilder;
  onParentChanged(body: string): LogicalDeviceBuilder;
  onRemovedFromEntity(body: string): LogicalDeviceBuilder;
  onShareableChanged(body: string): LogicalDeviceBuilder;
}

const LOGICALDEVICE_META: TypeMetadata = {
  typeName: 'LogicalDevice',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function LogicalDevice(): LogicalDeviceBuilder {
  return createFluentBuilder('LogicalDevice', LOGICALDEVICE_META) as unknown as LogicalDeviceBuilder;
}
