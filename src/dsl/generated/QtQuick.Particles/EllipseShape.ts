// AUTO-GENERATED — DO NOT EDIT
// Type: EllipseShape
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface EllipseShapeBuilder {
  id(id: string): EllipseShapeBuilder;
  child(obj: QmlObjectBuilder): EllipseShapeBuilder;

  fill(value: boolean): EllipseShapeBuilder;
  fillBind(expr: string): EllipseShapeBuilder;
  objectName(value: string): EllipseShapeBuilder;
  objectNameBind(expr: string): EllipseShapeBuilder;
  onFillChanged(body: string): EllipseShapeBuilder;
  onObjectNameChanged(body: string): EllipseShapeBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): EllipseShapeBuilder;
}

const ELLIPSESHAPE_META: TypeMetadata = {
  typeName: 'EllipseShape',
  properties: [
    { name: 'fill', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onFillChanged', paramCount: 1 },
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

export function EllipseShape(): EllipseShapeBuilder {
  return createFluentBuilder('EllipseShape', ELLIPSESHAPE_META) as unknown as EllipseShapeBuilder;
}
