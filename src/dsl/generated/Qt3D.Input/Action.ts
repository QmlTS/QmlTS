// AUTO-GENERATED — DO NOT EDIT
// Type: Action
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ActionBuilder {
  id(id: string): ActionBuilder;
  child(obj: QmlObjectBuilder): ActionBuilder;

  enabled(value: boolean): ActionBuilder;
  enabledBind(expr: string): ActionBuilder;
  objectName(value: string): ActionBuilder;
  objectNameBind(expr: string): ActionBuilder;
  parent(value: QmlValue): ActionBuilder;
  parentBind(expr: string): ActionBuilder;
  onActiveChanged(body: string): ActionBuilder;
  onEnabledChanged(body: string): ActionBuilder;
  onNodeDestroyed(body: string): ActionBuilder;
  onObjectNameChanged(body: string): ActionBuilder;
  onParentChanged(body: string): ActionBuilder;
}

const ACTION_META: TypeMetadata = {
  typeName: 'Action',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Action(): ActionBuilder {
  return createFluentBuilder('Action', ACTION_META) as unknown as ActionBuilder;
}
