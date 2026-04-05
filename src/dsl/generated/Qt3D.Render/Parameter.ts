// AUTO-GENERATED — DO NOT EDIT
// Type: Parameter
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ParameterBuilder {
  id(id: string): ParameterBuilder;
  child(obj: QmlObjectBuilder): ParameterBuilder;

  enabled(value: boolean): ParameterBuilder;
  enabledBind(expr: string): ParameterBuilder;
  name(value: string): ParameterBuilder;
  nameBind(expr: string): ParameterBuilder;
  objectName(value: string): ParameterBuilder;
  objectNameBind(expr: string): ParameterBuilder;
  parent(value: QmlValue): ParameterBuilder;
  parentBind(expr: string): ParameterBuilder;
  value(value: QmlValue): ParameterBuilder;
  valueBind(expr: string): ParameterBuilder;
  onEnabledChanged(body: string): ParameterBuilder;
  onNameChanged(body: string): ParameterBuilder;
  onNodeDestroyed(body: string): ParameterBuilder;
  onObjectNameChanged(body: string): ParameterBuilder;
  onParentChanged(body: string): ParameterBuilder;
  onValueChanged(body: string): ParameterBuilder;
}

const PARAMETER_META: TypeMetadata = {
  typeName: 'Parameter',
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

export function Parameter(): ParameterBuilder {
  return createFluentBuilder('Parameter', PARAMETER_META) as unknown as ParameterBuilder;
}
