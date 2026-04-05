// AUTO-GENERATED — DO NOT EDIT
// Type: MorphTarget
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface MorphTargetBuilder {
  id(id: string): MorphTargetBuilder;
  child(obj: QmlObjectBuilder): MorphTargetBuilder;

  attributes(value: QmlEnumToken): MorphTargetBuilder;
  attributesBind(expr: string): MorphTargetBuilder;
  objectName(value: string): MorphTargetBuilder;
  objectNameBind(expr: string): MorphTargetBuilder;
  parent(value: QmlValue): MorphTargetBuilder;
  parentBind(expr: string): MorphTargetBuilder;
  state(value: string): MorphTargetBuilder;
  stateBind(expr: string): MorphTargetBuilder;
  weight(value: number): MorphTargetBuilder;
  weightBind(expr: string): MorphTargetBuilder;
  onAttributesChanged(body: string): MorphTargetBuilder;
  onChildrenChanged(body: string): MorphTargetBuilder;
  onObjectNameChanged(body: string): MorphTargetBuilder;
  onParentChanged(body: string): MorphTargetBuilder;
  onStateChanged(body: string): MorphTargetBuilder;
  onWeightChanged(body: string): MorphTargetBuilder;
}

const MORPHTARGET_META: TypeMetadata = {
  typeName: 'MorphTarget',
  properties: [
    { name: 'attributes', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'weight', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttributesChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onWeightChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function MorphTarget(): MorphTargetBuilder {
  return createFluentBuilder('MorphTarget', MORPHTARGET_META) as unknown as MorphTargetBuilder;
}

export namespace MorphTarget {
  export namespace MorphTargetAttribute {
    export const Position = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'Position');
    export const Normal = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'Normal');
    export const Tangent = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'Tangent');
    export const Binormal = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'Binormal');
    export const TexCoord0 = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'TexCoord0');
    export const TexCoord1 = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'TexCoord1');
    export const Color = createEnumToken('MorphTarget', 'MorphTargetAttribute', 'Color');
  }
  export namespace MorphTargetAttributes {
    export const Position = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'Position');
    export const Normal = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'Normal');
    export const Tangent = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'Tangent');
    export const Binormal = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'Binormal');
    export const TexCoord0 = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'TexCoord0');
    export const TexCoord1 = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'TexCoord1');
    export const Color = createEnumToken('MorphTarget', 'MorphTargetAttributes', 'Color');
  }
}
