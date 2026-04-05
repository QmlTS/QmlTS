// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderDataArray
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ShaderDataArrayBuilder {
  id(id: string): ShaderDataArrayBuilder;
  child(obj: QmlObjectBuilder): ShaderDataArrayBuilder;

  enabled(value: boolean): ShaderDataArrayBuilder;
  enabledBind(expr: string): ShaderDataArrayBuilder;
  objectName(value: string): ShaderDataArrayBuilder;
  objectNameBind(expr: string): ShaderDataArrayBuilder;
  parent(value: QmlValue): ShaderDataArrayBuilder;
  parentBind(expr: string): ShaderDataArrayBuilder;
  onEnabledChanged(body: string): ShaderDataArrayBuilder;
  onNodeDestroyed(body: string): ShaderDataArrayBuilder;
  onObjectNameChanged(body: string): ShaderDataArrayBuilder;
  onParentChanged(body: string): ShaderDataArrayBuilder;
}

const SHADERDATAARRAY_META: TypeMetadata = {
  typeName: 'ShaderDataArray',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'values',
};

export function ShaderDataArray(): ShaderDataArrayBuilder {
  return createFluentBuilder(
    'ShaderDataArray',
    SHADERDATAARRAY_META,
  ) as unknown as ShaderDataArrayBuilder;
}
