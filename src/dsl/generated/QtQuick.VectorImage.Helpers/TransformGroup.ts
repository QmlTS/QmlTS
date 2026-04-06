// AUTO-GENERATED — DO NOT EDIT
// Type: TransformGroup
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TransformGroupBuilder {
  id(id: string): TransformGroupBuilder;
  child(obj: QmlObjectBuilder): TransformGroupBuilder;
  children(...objs: QmlObjectBuilder[]): TransformGroupBuilder;

  objectName(value: string): TransformGroupBuilder;
  objectNameBind(expr: string): TransformGroupBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TransformGroupBuilder;
}

const TRANSFORMGROUP_META: TypeMetadata = {
  typeName: 'TransformGroup',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
  defaultProperty: 'transformSequence',
};

export function TransformGroup(): TransformGroupBuilder {
  return createFluentBuilder(
    'TransformGroup',
    TRANSFORMGROUP_META,
  ) as unknown as TransformGroupBuilder;
}
