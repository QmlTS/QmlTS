// AUTO-GENERATED — DO NOT EDIT
// Type: ActionInput
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ActionInputBuilder {
  id(id: string): ActionInputBuilder;
  child(obj: QmlObjectBuilder): ActionInputBuilder;

  buttons(value: number): ActionInputBuilder;
  buttonsBind(expr: string): ActionInputBuilder;
  enabled(value: boolean): ActionInputBuilder;
  enabledBind(expr: string): ActionInputBuilder;
  objectName(value: string): ActionInputBuilder;
  objectNameBind(expr: string): ActionInputBuilder;
  parent(value: QmlValue): ActionInputBuilder;
  parentBind(expr: string): ActionInputBuilder;
  sourceDevice(value: QmlValue): ActionInputBuilder;
  sourceDeviceBind(expr: string): ActionInputBuilder;
  onButtonsChanged(body: string): ActionInputBuilder;
  onEnabledChanged(body: string): ActionInputBuilder;
  onNodeDestroyed(body: string): ActionInputBuilder;
  onObjectNameChanged(body: string): ActionInputBuilder;
  onParentChanged(body: string): ActionInputBuilder;
  onSourceDeviceChanged(body: string): ActionInputBuilder;
}

const ACTIONINPUT_META: TypeMetadata = {
  typeName: 'ActionInput',
  properties: [
    { name: 'buttons', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sourceDevice', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onButtonsChanged', paramCount: 1 },
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

export function ActionInput(): ActionInputBuilder {
  return createFluentBuilder('ActionInput', ACTIONINPUT_META) as unknown as ActionInputBuilder;
}
