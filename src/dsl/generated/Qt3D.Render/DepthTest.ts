// AUTO-GENERATED — DO NOT EDIT
// Type: DepthTest
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface DepthTestBuilder {
  id(id: string): DepthTestBuilder;
  child(obj: QmlObjectBuilder): DepthTestBuilder;

  depthFunction(value: QmlEnumToken): DepthTestBuilder;
  depthFunctionBind(expr: string): DepthTestBuilder;
  enabled(value: boolean): DepthTestBuilder;
  enabledBind(expr: string): DepthTestBuilder;
  objectName(value: string): DepthTestBuilder;
  objectNameBind(expr: string): DepthTestBuilder;
  parent(value: QmlValue): DepthTestBuilder;
  parentBind(expr: string): DepthTestBuilder;
  onDepthFunctionChanged(body: string): DepthTestBuilder;
  onEnabledChanged(body: string): DepthTestBuilder;
  onNodeDestroyed(body: string): DepthTestBuilder;
  onObjectNameChanged(body: string): DepthTestBuilder;
  onParentChanged(body: string): DepthTestBuilder;
}

const DEPTHTEST_META: TypeMetadata = {
  typeName: 'DepthTest',
  properties: [
    { name: 'depthFunction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDepthFunctionChanged', paramCount: 1 },
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

export function DepthTest(): DepthTestBuilder {
  return createFluentBuilder('DepthTest', DEPTHTEST_META) as unknown as DepthTestBuilder;
}

export namespace DepthTest {
  export namespace DepthFunction {
    export const Never = createEnumToken('DepthTest', 'DepthFunction', 'Never');
    export const Always = createEnumToken('DepthTest', 'DepthFunction', 'Always');
    export const Less = createEnumToken('DepthTest', 'DepthFunction', 'Less');
    export const LessOrEqual = createEnumToken('DepthTest', 'DepthFunction', 'LessOrEqual');
    export const Equal = createEnumToken('DepthTest', 'DepthFunction', 'Equal');
    export const GreaterOrEqual = createEnumToken('DepthTest', 'DepthFunction', 'GreaterOrEqual');
    export const Greater = createEnumToken('DepthTest', 'DepthFunction', 'Greater');
    export const NotEqual = createEnumToken('DepthTest', 'DepthFunction', 'NotEqual');
  }
}
