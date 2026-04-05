// AUTO-GENERATED — DO NOT EDIT
// Type: FilterKey
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface FilterKeyBuilder {
  id(id: string): FilterKeyBuilder;
  child(obj: QmlObjectBuilder): FilterKeyBuilder;

  enabled(value: boolean): FilterKeyBuilder;
  enabledBind(expr: string): FilterKeyBuilder;
  name(value: string): FilterKeyBuilder;
  nameBind(expr: string): FilterKeyBuilder;
  objectName(value: string): FilterKeyBuilder;
  objectNameBind(expr: string): FilterKeyBuilder;
  parent(value: QmlValue): FilterKeyBuilder;
  parentBind(expr: string): FilterKeyBuilder;
  value(value: QmlValue): FilterKeyBuilder;
  valueBind(expr: string): FilterKeyBuilder;
  onEnabledChanged(body: string): FilterKeyBuilder;
  onNameChanged(body: string): FilterKeyBuilder;
  onNodeDestroyed(body: string): FilterKeyBuilder;
  onObjectNameChanged(body: string): FilterKeyBuilder;
  onParentChanged(body: string): FilterKeyBuilder;
  onValueChanged(body: string): FilterKeyBuilder;
}

const FILTERKEY_META: TypeMetadata = {
  typeName: 'FilterKey',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function FilterKey(): FilterKeyBuilder {
  return createFluentBuilder('FilterKey', FILTERKEY_META) as unknown as FilterKeyBuilder;
}
