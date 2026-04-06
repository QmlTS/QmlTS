// AUTO-GENERATED — DO NOT EDIT
// Type: MorphTarget
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface MorphTargetBuilder {
  id(id: string): MorphTargetBuilder;
  child(obj: QmlObjectBuilder): MorphTargetBuilder;
  children(...objs: QmlObjectBuilder[]): MorphTargetBuilder;

  objectName(value: string): MorphTargetBuilder;
  objectNameBind(expr: string): MorphTargetBuilder;
  onAttributeNamesChanged(handler: DslSignalHandlerValue): MorphTargetBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MorphTargetBuilder;
}

const MORPHTARGET_META: TypeMetadata = {
  typeName: 'MorphTarget',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onAttributeNamesChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function MorphTarget(): MorphTargetBuilder {
  return createFluentBuilder('MorphTarget', MORPHTARGET_META) as unknown as MorphTargetBuilder;
}
