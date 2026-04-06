// AUTO-GENERATED — DO NOT EDIT
// Type: NoDepthMask
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface NoDepthMaskBuilder {
  id(id: string): NoDepthMaskBuilder;
  child(obj: QmlObjectBuilder): NoDepthMaskBuilder;
  children(...objs: QmlObjectBuilder[]): NoDepthMaskBuilder;

  enabled(value: boolean): NoDepthMaskBuilder;
  enabledBind(expr: string): NoDepthMaskBuilder;
  objectName(value: string): NoDepthMaskBuilder;
  objectNameBind(expr: string): NoDepthMaskBuilder;
  parent(value: QmlValue): NoDepthMaskBuilder;
  parentBind(expr: string): NoDepthMaskBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): NoDepthMaskBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): NoDepthMaskBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): NoDepthMaskBuilder;
  onParentChanged(handler: DslSignalHandlerValue): NoDepthMaskBuilder;
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
  grouped: [],
  attached: [],
};

export function NoDepthMask(): NoDepthMaskBuilder {
  return createFluentBuilder('NoDepthMask', NODEPTHMASK_META) as unknown as NoDepthMaskBuilder;
}
