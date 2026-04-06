// AUTO-GENERATED — DO NOT EDIT
// Type: MouseHandler
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { MouseDeviceBuilder } from './MouseDevice.js';
export interface MouseHandlerBuilder {
  id(id: string): MouseHandlerBuilder;
  child(obj: QmlObjectBuilder): MouseHandlerBuilder;
  children(...objs: QmlObjectBuilder[]): MouseHandlerBuilder;

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
  onAddedToEntity(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onClicked(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onContainsMouseChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onEntered(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onExited(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onPressed(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onReleased(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onSourceDeviceChanged(handler: DslSignalHandlerValue): MouseHandlerBuilder;
  onWheel(handler: DslSignalHandlerValue): MouseHandlerBuilder;
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
  grouped: [],
  attached: [],
};

export function MouseHandler(): MouseHandlerBuilder {
  return createFluentBuilder('MouseHandler', MOUSEHANDLER_META) as unknown as MouseHandlerBuilder;
}
