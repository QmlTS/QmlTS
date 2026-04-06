// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderData
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ShaderDataBuilder {
  id(id: string): ShaderDataBuilder;
  child(obj: QmlObjectBuilder): ShaderDataBuilder;
  children(...objs: QmlObjectBuilder[]): ShaderDataBuilder;

  enabled(value: boolean): ShaderDataBuilder;
  enabledBind(expr: string): ShaderDataBuilder;
  isShareable(value: boolean): ShaderDataBuilder;
  isShareableBind(expr: string): ShaderDataBuilder;
  objectName(value: string): ShaderDataBuilder;
  objectNameBind(expr: string): ShaderDataBuilder;
  parent(value: QmlValue): ShaderDataBuilder;
  parentBind(expr: string): ShaderDataBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): ShaderDataBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): ShaderDataBuilder;
}

const SHADERDATA_META: TypeMetadata = {
  typeName: 'ShaderData',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ShaderData(): ShaderDataBuilder {
  return createFluentBuilder('ShaderData', SHADERDATA_META) as unknown as ShaderDataBuilder;
}
