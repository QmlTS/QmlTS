// AUTO-GENERATED — DO NOT EDIT
// Type: Parameter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ParameterBuilder {
  id(id: string): ParameterBuilder;
  child(obj: QmlObjectBuilder): ParameterBuilder;
  children(...objs: QmlObjectBuilder[]): ParameterBuilder;

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
  onEnabledChanged(handler: DslSignalHandlerValue): ParameterBuilder;
  onNameChanged(handler: DslSignalHandlerValue): ParameterBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ParameterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ParameterBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ParameterBuilder;
  onValueChanged(handler: DslSignalHandlerValue): ParameterBuilder;
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
  grouped: [],
  attached: [],
};

export function Parameter(): ParameterBuilder {
  return createFluentBuilder('Parameter', PARAMETER_META) as unknown as ParameterBuilder;
}
