// AUTO-GENERATED — DO NOT EDIT
// Type: NoDepthMask
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface NoDepthMaskBuilder {
  id(id: string): NoDepthMaskBuilder;
  child(obj: QmlObjectBuilder): NoDepthMaskBuilder;

  enabled(value: boolean): NoDepthMaskBuilder;
  enabledBind(expr: string): NoDepthMaskBuilder;
  objectName(value: string): NoDepthMaskBuilder;
  objectNameBind(expr: string): NoDepthMaskBuilder;
  parent(value: QmlValue): NoDepthMaskBuilder;
  parentBind(expr: string): NoDepthMaskBuilder;
  onEnabledChanged(body: string): NoDepthMaskBuilder;
  onNodeDestroyed(body: string): NoDepthMaskBuilder;
  onObjectNameChanged(body: string): NoDepthMaskBuilder;
  onParentChanged(body: string): NoDepthMaskBuilder;
}

const NODEPTHMASK_META: TypeMetadata = {
  typeName: 'NoDepthMask',
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
  grouped: [
  ],
  attached: [
  ],
};

export function NoDepthMask(): NoDepthMaskBuilder {
  return createFluentBuilder('NoDepthMask', NODEPTHMASK_META) as unknown as NoDepthMaskBuilder;
}
