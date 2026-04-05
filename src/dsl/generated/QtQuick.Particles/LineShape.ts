// AUTO-GENERATED — DO NOT EDIT
// Type: LineShape
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface LineShapeBuilder {
  id(id: string): LineShapeBuilder;
  child(obj: QmlObjectBuilder): LineShapeBuilder;

  mirrored(value: boolean): LineShapeBuilder;
  mirroredBind(expr: string): LineShapeBuilder;
  objectName(value: string): LineShapeBuilder;
  objectNameBind(expr: string): LineShapeBuilder;
  onMirroredChanged(body: string): LineShapeBuilder;
  onObjectNameChanged(body: string): LineShapeBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): LineShapeBuilder;
}

const LINESHAPE_META: TypeMetadata = {
  typeName: 'LineShape',
  properties: [
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onMirroredChanged', paramCount: 1 },
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

export function LineShape(): LineShapeBuilder {
  return createFluentBuilder('LineShape', LINESHAPE_META) as unknown as LineShapeBuilder;
}
