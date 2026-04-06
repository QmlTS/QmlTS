// AUTO-GENERATED — DO NOT EDIT
// Type: FilterKey
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FilterKeyBuilder {
  id(id: string): FilterKeyBuilder;
  child(obj: QmlObjectBuilder): FilterKeyBuilder;
  children(...objs: QmlObjectBuilder[]): FilterKeyBuilder;

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
  onEnabledChanged(handler: DslSignalHandlerValue): FilterKeyBuilder;
  onNameChanged(handler: DslSignalHandlerValue): FilterKeyBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): FilterKeyBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FilterKeyBuilder;
  onParentChanged(handler: DslSignalHandlerValue): FilterKeyBuilder;
  onValueChanged(handler: DslSignalHandlerValue): FilterKeyBuilder;
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
  grouped: [],
  attached: [],
};

export function FilterKey(): FilterKeyBuilder {
  return createFluentBuilder('FilterKey', FILTERKEY_META) as unknown as FilterKeyBuilder;
}
