// AUTO-GENERATED — DO NOT EDIT
// Type: RenderStateSet
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface RenderStateSetBuilder {
  id(id: string): RenderStateSetBuilder;
  child(obj: QmlObjectBuilder): RenderStateSetBuilder;

  enabled(value: boolean): RenderStateSetBuilder;
  enabledBind(expr: string): RenderStateSetBuilder;
  objectName(value: string): RenderStateSetBuilder;
  objectNameBind(expr: string): RenderStateSetBuilder;
  parent(value: QmlValue): RenderStateSetBuilder;
  parentBind(expr: string): RenderStateSetBuilder;
  onEnabledChanged(body: string): RenderStateSetBuilder;
  onNodeDestroyed(body: string): RenderStateSetBuilder;
  onObjectNameChanged(body: string): RenderStateSetBuilder;
  onParentChanged(body: string): RenderStateSetBuilder;
}

const RENDERSTATESET_META: TypeMetadata = {
  typeName: 'RenderStateSet',
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

export function RenderStateSet(): RenderStateSetBuilder {
  return createFluentBuilder('RenderStateSet', RENDERSTATESET_META) as unknown as RenderStateSetBuilder;
}
