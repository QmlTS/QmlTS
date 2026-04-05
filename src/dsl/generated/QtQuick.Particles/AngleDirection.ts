// AUTO-GENERATED — DO NOT EDIT
// Type: AngleDirection
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface AngleDirectionBuilder {
  id(id: string): AngleDirectionBuilder;
  child(obj: QmlObjectBuilder): AngleDirectionBuilder;

  angle(value: number): AngleDirectionBuilder;
  angleBind(expr: string): AngleDirectionBuilder;
  angleVariation(value: number): AngleDirectionBuilder;
  angleVariationBind(expr: string): AngleDirectionBuilder;
  magnitude(value: number): AngleDirectionBuilder;
  magnitudeBind(expr: string): AngleDirectionBuilder;
  magnitudeVariation(value: number): AngleDirectionBuilder;
  magnitudeVariationBind(expr: string): AngleDirectionBuilder;
  objectName(value: string): AngleDirectionBuilder;
  objectNameBind(expr: string): AngleDirectionBuilder;
  onAngleChanged(body: string): AngleDirectionBuilder;
  onAngleVariationChanged(body: string): AngleDirectionBuilder;
  onMagnitudeChanged(body: string): AngleDirectionBuilder;
  onMagnitudeVariationChanged(body: string): AngleDirectionBuilder;
  onObjectNameChanged(body: string): AngleDirectionBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): AngleDirectionBuilder;
}

const ANGLEDIRECTION_META: TypeMetadata = {
  typeName: 'AngleDirection',
  properties: [
    { name: 'angle', hasValue: true, hasBinding: true },
    { name: 'angleVariation', hasValue: true, hasBinding: true },
    { name: 'magnitude', hasValue: true, hasBinding: true },
    { name: 'magnitudeVariation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAngleChanged', paramCount: 1 },
    { handlerName: 'onAngleVariationChanged', paramCount: 1 },
    { handlerName: 'onMagnitudeChanged', paramCount: 1 },
    { handlerName: 'onMagnitudeVariationChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
    {
      methodName: 'itemParticle',
      attachedTypeName: 'ItemParticle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function AngleDirection(): AngleDirectionBuilder {
  return createFluentBuilder('AngleDirection', ANGLEDIRECTION_META) as unknown as AngleDirectionBuilder;
}
