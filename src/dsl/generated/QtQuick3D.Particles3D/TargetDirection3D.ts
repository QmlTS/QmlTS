// AUTO-GENERATED — DO NOT EDIT
// Type: TargetDirection3D
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TargetDirection3DBuilder {
  id(id: string): TargetDirection3DBuilder;
  child(obj: QmlObjectBuilder): TargetDirection3DBuilder;

  magnitude(value: number): TargetDirection3DBuilder;
  magnitudeBind(expr: string): TargetDirection3DBuilder;
  magnitudeVariation(value: number): TargetDirection3DBuilder;
  magnitudeVariationBind(expr: string): TargetDirection3DBuilder;
  normalized(value: boolean): TargetDirection3DBuilder;
  normalizedBind(expr: string): TargetDirection3DBuilder;
  objectName(value: string): TargetDirection3DBuilder;
  objectNameBind(expr: string): TargetDirection3DBuilder;
  position(value: QmlVector3d): TargetDirection3DBuilder;
  positionBind(expr: string): TargetDirection3DBuilder;
  positionVariation(value: QmlVector3d): TargetDirection3DBuilder;
  positionVariationBind(expr: string): TargetDirection3DBuilder;
  onMagnitudeChanged(body: string): TargetDirection3DBuilder;
  onMagnitudeChangedVariation(body: string): TargetDirection3DBuilder;
  onNormalizedChanged(body: string): TargetDirection3DBuilder;
  onObjectNameChanged(body: string): TargetDirection3DBuilder;
  onPositionChanged(body: string): TargetDirection3DBuilder;
  onPositionVariationChanged(body: string): TargetDirection3DBuilder;
}

const TARGETDIRECTION3D_META: TypeMetadata = {
  typeName: 'TargetDirection3D',
  properties: [
    { name: 'magnitude', hasValue: true, hasBinding: true },
    { name: 'magnitudeVariation', hasValue: true, hasBinding: true },
    { name: 'normalized', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'positionVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onMagnitudeChanged', paramCount: 0 },
    { handlerName: 'onMagnitudeChangedVariation', paramCount: 0 },
    { handlerName: 'onNormalizedChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPositionVariationChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TargetDirection3D(): TargetDirection3DBuilder {
  return createFluentBuilder(
    'TargetDirection3D',
    TARGETDIRECTION3D_META,
  ) as unknown as TargetDirection3DBuilder;
}
