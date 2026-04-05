// AUTO-GENERATED — DO NOT EDIT
// Type: MouseHandler
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { MouseDeviceBuilder } from './MouseDevice.js';
export interface MouseHandlerBuilder {
  id(id: string): MouseHandlerBuilder;
  child(obj: QmlObjectBuilder): MouseHandlerBuilder;

  enabled(value: boolean): MouseHandlerBuilder;
  enabledBind(expr: string): MouseHandlerBuilder;
  isShareable(value: boolean): MouseHandlerBuilder;
  isShareableBind(expr: string): MouseHandlerBuilder;
  objectName(value: string): MouseHandlerBuilder;
  objectNameBind(expr: string): MouseHandlerBuilder;
  parent(value: QmlValue): MouseHandlerBuilder;
  parentBind(expr: string): MouseHandlerBuilder;
  sourceDevice(value: MouseDeviceBuilder): MouseHandlerBuilder;
  sourceDeviceBind(expr: string): MouseHandlerBuilder;
  onAddedToEntity(body: string): MouseHandlerBuilder;
  onClicked(body: string): MouseHandlerBuilder;
  onContainsMouseChanged(body: string): MouseHandlerBuilder;
  onDoubleClicked(body: string): MouseHandlerBuilder;
  onEnabledChanged(body: string): MouseHandlerBuilder;
  onEntered(body: string): MouseHandlerBuilder;
  onExited(body: string): MouseHandlerBuilder;
  onNodeDestroyed(body: string): MouseHandlerBuilder;
  onObjectNameChanged(body: string): MouseHandlerBuilder;
  onParentChanged(body: string): MouseHandlerBuilder;
  onPositionChanged(body: string): MouseHandlerBuilder;
  onPressAndHold(body: string): MouseHandlerBuilder;
  onPressed(body: string): MouseHandlerBuilder;
  onReleased(body: string): MouseHandlerBuilder;
  onRemovedFromEntity(body: string): MouseHandlerBuilder;
  onShareableChanged(body: string): MouseHandlerBuilder;
  onSourceDeviceChanged(body: string): MouseHandlerBuilder;
  onWheel(body: string): MouseHandlerBuilder;
}

const MOUSEHANDLER_META: TypeMetadata = {
  typeName: 'MouseHandler',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sourceDevice', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onContainsMouseChanged', paramCount: 1 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onExited', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onPressAndHold', paramCount: 1 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onSourceDeviceChanged', paramCount: 1 },
    { handlerName: 'onWheel', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function MouseHandler(): MouseHandlerBuilder {
  return createFluentBuilder('MouseHandler', MOUSEHANDLER_META) as unknown as MouseHandlerBuilder;
}
