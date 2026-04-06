// AUTO-GENERATED — DO NOT EDIT
// Type: ObjectPicker
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ObjectPickerBuilder {
  id(id: string): ObjectPickerBuilder;
  child(obj: QmlObjectBuilder): ObjectPickerBuilder;
  children(...objs: QmlObjectBuilder[]): ObjectPickerBuilder;

  dragEnabled(value: boolean): ObjectPickerBuilder;
  dragEnabledBind(expr: string): ObjectPickerBuilder;
  enabled(value: boolean): ObjectPickerBuilder;
  enabledBind(expr: string): ObjectPickerBuilder;
  hoverEnabled(value: boolean): ObjectPickerBuilder;
  hoverEnabledBind(expr: string): ObjectPickerBuilder;
  isShareable(value: boolean): ObjectPickerBuilder;
  isShareableBind(expr: string): ObjectPickerBuilder;
  objectName(value: string): ObjectPickerBuilder;
  objectNameBind(expr: string): ObjectPickerBuilder;
  parent(value: QmlValue): ObjectPickerBuilder;
  parentBind(expr: string): ObjectPickerBuilder;
  priority(value: number): ObjectPickerBuilder;
  priorityBind(expr: string): ObjectPickerBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onClicked(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onContainsMouseChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onDragEnabledChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onEntered(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onExited(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onMoved(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onPressed(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onPriorityChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onReleased(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): ObjectPickerBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): ObjectPickerBuilder;
}

const OBJECTPICKER_META: TypeMetadata = {
  typeName: 'ObjectPicker',
  properties: [
    { name: 'dragEnabled', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'priority', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onContainsMouseChanged', paramCount: 1 },
    { handlerName: 'onDragEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onExited', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 1 },
    { handlerName: 'onMoved', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onPressedChanged', paramCount: 1 },
    { handlerName: 'onPriorityChanged', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ObjectPicker(): ObjectPickerBuilder {
  return createFluentBuilder('ObjectPicker', OBJECTPICKER_META) as unknown as ObjectPickerBuilder;
}
