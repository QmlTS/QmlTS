// AUTO-GENERATED — DO NOT EDIT
// Type: AlphaTest
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AlphaTestBuilder {
  id(id: string): AlphaTestBuilder;
  child(obj: QmlObjectBuilder): AlphaTestBuilder;

  alphaFunction(value: QmlEnumToken): AlphaTestBuilder;
  alphaFunctionBind(expr: string): AlphaTestBuilder;
  enabled(value: boolean): AlphaTestBuilder;
  enabledBind(expr: string): AlphaTestBuilder;
  objectName(value: string): AlphaTestBuilder;
  objectNameBind(expr: string): AlphaTestBuilder;
  parent(value: QmlValue): AlphaTestBuilder;
  parentBind(expr: string): AlphaTestBuilder;
  referenceValue(value: number): AlphaTestBuilder;
  referenceValueBind(expr: string): AlphaTestBuilder;
  onAlphaFunctionChanged(body: string): AlphaTestBuilder;
  onEnabledChanged(body: string): AlphaTestBuilder;
  onNodeDestroyed(body: string): AlphaTestBuilder;
  onObjectNameChanged(body: string): AlphaTestBuilder;
  onParentChanged(body: string): AlphaTestBuilder;
  onReferenceValueChanged(body: string): AlphaTestBuilder;
}

const ALPHATEST_META: TypeMetadata = {
  typeName: 'AlphaTest',
  properties: [
    { name: 'alphaFunction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'referenceValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlphaFunctionChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onReferenceValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AlphaTest(): AlphaTestBuilder {
  return createFluentBuilder('AlphaTest', ALPHATEST_META) as unknown as AlphaTestBuilder;
}

export namespace AlphaTest {
  export namespace AlphaFunction {
    export const Never = createEnumToken('AlphaTest', 'AlphaFunction', 'Never');
    export const Always = createEnumToken('AlphaTest', 'AlphaFunction', 'Always');
    export const Less = createEnumToken('AlphaTest', 'AlphaFunction', 'Less');
    export const LessOrEqual = createEnumToken('AlphaTest', 'AlphaFunction', 'LessOrEqual');
    export const Equal = createEnumToken('AlphaTest', 'AlphaFunction', 'Equal');
    export const GreaterOrEqual = createEnumToken('AlphaTest', 'AlphaFunction', 'GreaterOrEqual');
    export const Greater = createEnumToken('AlphaTest', 'AlphaFunction', 'Greater');
    export const NotEqual = createEnumToken('AlphaTest', 'AlphaFunction', 'NotEqual');
  }
}
