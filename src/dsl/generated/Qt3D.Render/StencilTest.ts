// AUTO-GENERATED — DO NOT EDIT
// Type: StencilTest
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface StencilTestBuilder {
  id(id: string): StencilTestBuilder;
  child(obj: QmlObjectBuilder): StencilTestBuilder;

  enabled(value: boolean): StencilTestBuilder;
  enabledBind(expr: string): StencilTestBuilder;
  objectName(value: string): StencilTestBuilder;
  objectNameBind(expr: string): StencilTestBuilder;
  parent(value: QmlValue): StencilTestBuilder;
  parentBind(expr: string): StencilTestBuilder;
  onEnabledChanged(body: string): StencilTestBuilder;
  onNodeDestroyed(body: string): StencilTestBuilder;
  onObjectNameChanged(body: string): StencilTestBuilder;
  onParentChanged(body: string): StencilTestBuilder;
}

const STENCILTEST_META: TypeMetadata = {
  typeName: 'StencilTest',
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

export function StencilTest(): StencilTestBuilder {
  return createFluentBuilder('StencilTest', STENCILTEST_META) as unknown as StencilTestBuilder;
}
