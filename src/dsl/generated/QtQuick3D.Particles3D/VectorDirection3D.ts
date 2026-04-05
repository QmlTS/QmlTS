// AUTO-GENERATED — DO NOT EDIT
// Type: VectorDirection3D
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface VectorDirection3DBuilder {
  id(id: string): VectorDirection3DBuilder;
  child(obj: QmlObjectBuilder): VectorDirection3DBuilder;

  direction(value: QmlVector3d): VectorDirection3DBuilder;
  directionBind(expr: string): VectorDirection3DBuilder;
  directionVariation(value: QmlVector3d): VectorDirection3DBuilder;
  directionVariationBind(expr: string): VectorDirection3DBuilder;
  normalized(value: boolean): VectorDirection3DBuilder;
  normalizedBind(expr: string): VectorDirection3DBuilder;
  objectName(value: string): VectorDirection3DBuilder;
  objectNameBind(expr: string): VectorDirection3DBuilder;
  onDirectionChanged(body: string): VectorDirection3DBuilder;
  onDirectionVariationChanged(body: string): VectorDirection3DBuilder;
  onNormalizedChanged(body: string): VectorDirection3DBuilder;
  onObjectNameChanged(body: string): VectorDirection3DBuilder;
}

const VECTORDIRECTION3D_META: TypeMetadata = {
  typeName: 'VectorDirection3D',
  properties: [
    { name: 'direction', hasValue: true, hasBinding: true },
    { name: 'directionVariation', hasValue: true, hasBinding: true },
    { name: 'normalized', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDirectionChanged', paramCount: 0 },
    { handlerName: 'onDirectionVariationChanged', paramCount: 0 },
    { handlerName: 'onNormalizedChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function VectorDirection3D(): VectorDirection3DBuilder {
  return createFluentBuilder(
    'VectorDirection3D',
    VECTORDIRECTION3D_META,
  ) as unknown as VectorDirection3DBuilder;
}
