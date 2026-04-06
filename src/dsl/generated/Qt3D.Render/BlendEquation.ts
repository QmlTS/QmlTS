// AUTO-GENERATED — DO NOT EDIT
// Type: BlendEquation
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface BlendEquationBuilder {
  id(id: string): BlendEquationBuilder;
  child(obj: QmlObjectBuilder): BlendEquationBuilder;
  children(...objs: QmlObjectBuilder[]): BlendEquationBuilder;

  blendFunction(value: QmlEnumToken): BlendEquationBuilder;
  blendFunctionBind(expr: string): BlendEquationBuilder;
  enabled(value: boolean): BlendEquationBuilder;
  enabledBind(expr: string): BlendEquationBuilder;
  objectName(value: string): BlendEquationBuilder;
  objectNameBind(expr: string): BlendEquationBuilder;
  parent(value: QmlValue): BlendEquationBuilder;
  parentBind(expr: string): BlendEquationBuilder;
  onBlendFunctionChanged(handler: DslSignalHandlerValue): BlendEquationBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): BlendEquationBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): BlendEquationBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BlendEquationBuilder;
  onParentChanged(handler: DslSignalHandlerValue): BlendEquationBuilder;
}

const BLENDEQUATION_META: TypeMetadata = {
  typeName: 'BlendEquation',
  properties: [
    { name: 'blendFunction', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBlendFunctionChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function BlendEquation(): BlendEquationBuilder {
  return createFluentBuilder(
    'BlendEquation',
    BLENDEQUATION_META,
  ) as unknown as BlendEquationBuilder;
}

export namespace BlendEquation {
  export namespace BlendFunction {
    export const Add = createEnumToken('BlendEquation', 'BlendFunction', 'Add');
    export const Subtract = createEnumToken('BlendEquation', 'BlendFunction', 'Subtract');
    export const ReverseSubtract = createEnumToken(
      'BlendEquation',
      'BlendFunction',
      'ReverseSubtract',
    );
    export const Min = createEnumToken('BlendEquation', 'BlendFunction', 'Min');
    export const Max = createEnumToken('BlendEquation', 'BlendFunction', 'Max');
  }
}
