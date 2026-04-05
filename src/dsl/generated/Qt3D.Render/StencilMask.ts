// AUTO-GENERATED — DO NOT EDIT
// Type: StencilMask
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface StencilMaskBuilder {
  id(id: string): StencilMaskBuilder;
  child(obj: QmlObjectBuilder): StencilMaskBuilder;

  backOutputMask(value: number): StencilMaskBuilder;
  backOutputMaskBind(expr: string): StencilMaskBuilder;
  enabled(value: boolean): StencilMaskBuilder;
  enabledBind(expr: string): StencilMaskBuilder;
  frontOutputMask(value: number): StencilMaskBuilder;
  frontOutputMaskBind(expr: string): StencilMaskBuilder;
  objectName(value: string): StencilMaskBuilder;
  objectNameBind(expr: string): StencilMaskBuilder;
  parent(value: QmlValue): StencilMaskBuilder;
  parentBind(expr: string): StencilMaskBuilder;
  onBackOutputMaskChanged(body: string): StencilMaskBuilder;
  onEnabledChanged(body: string): StencilMaskBuilder;
  onFrontOutputMaskChanged(body: string): StencilMaskBuilder;
  onNodeDestroyed(body: string): StencilMaskBuilder;
  onObjectNameChanged(body: string): StencilMaskBuilder;
  onParentChanged(body: string): StencilMaskBuilder;
}

const STENCILMASK_META: TypeMetadata = {
  typeName: 'StencilMask',
  properties: [
    { name: 'backOutputMask', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'frontOutputMask', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBackOutputMaskChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFrontOutputMaskChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function StencilMask(): StencilMaskBuilder {
  return createFluentBuilder('StencilMask', STENCILMASK_META) as unknown as StencilMaskBuilder;
}
