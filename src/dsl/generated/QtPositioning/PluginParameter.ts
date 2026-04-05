// AUTO-GENERATED — DO NOT EDIT
// Type: PluginParameter
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface PluginParameterBuilder {
  id(id: string): PluginParameterBuilder;
  child(obj: QmlObjectBuilder): PluginParameterBuilder;

  name(value: string): PluginParameterBuilder;
  nameBind(expr: string): PluginParameterBuilder;
  objectName(value: string): PluginParameterBuilder;
  objectNameBind(expr: string): PluginParameterBuilder;
  value(value: QmlValue): PluginParameterBuilder;
  valueBind(expr: string): PluginParameterBuilder;
  onInitialized(body: string): PluginParameterBuilder;
  onNameChanged(body: string): PluginParameterBuilder;
  onObjectNameChanged(body: string): PluginParameterBuilder;
  onValueChanged(body: string): PluginParameterBuilder;
}

const PLUGINPARAMETER_META: TypeMetadata = {
  typeName: 'PluginParameter',
  properties: [
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onInitialized', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PluginParameter(): PluginParameterBuilder {
  return createFluentBuilder('PluginParameter', PLUGINPARAMETER_META) as unknown as PluginParameterBuilder;
}
