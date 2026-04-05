// AUTO-GENERATED — DO NOT EDIT
// Type: ClipBlendValue
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ClipBlendValueBuilder {
  id(id: string): ClipBlendValueBuilder;
  child(obj: QmlObjectBuilder): ClipBlendValueBuilder;

  clip(value: QmlValue): ClipBlendValueBuilder;
  clipBind(expr: string): ClipBlendValueBuilder;
  enabled(value: boolean): ClipBlendValueBuilder;
  enabledBind(expr: string): ClipBlendValueBuilder;
  objectName(value: string): ClipBlendValueBuilder;
  objectNameBind(expr: string): ClipBlendValueBuilder;
  parent(value: QmlValue): ClipBlendValueBuilder;
  parentBind(expr: string): ClipBlendValueBuilder;
  onClipChanged(body: string): ClipBlendValueBuilder;
  onEnabledChanged(body: string): ClipBlendValueBuilder;
  onNodeDestroyed(body: string): ClipBlendValueBuilder;
  onObjectNameChanged(body: string): ClipBlendValueBuilder;
  onParentChanged(body: string): ClipBlendValueBuilder;
}

const CLIPBLENDVALUE_META: TypeMetadata = {
  typeName: 'ClipBlendValue',
  properties: [
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ClipBlendValue(): ClipBlendValueBuilder {
  return createFluentBuilder(
    'ClipBlendValue',
    CLIPBLENDVALUE_META,
  ) as unknown as ClipBlendValueBuilder;
}
