// AUTO-GENERATED — DO NOT EDIT
// Type: MaskShape
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface MaskShapeBuilder {
  id(id: string): MaskShapeBuilder;
  child(obj: QmlObjectBuilder): MaskShapeBuilder;

  objectName(value: string): MaskShapeBuilder;
  objectNameBind(expr: string): MaskShapeBuilder;
  source(value: QmlUrl): MaskShapeBuilder;
  sourceBind(expr: string): MaskShapeBuilder;
  onObjectNameChanged(body: string): MaskShapeBuilder;
  onSourceChanged(body: string): MaskShapeBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): MaskShapeBuilder;
}

const MASKSHAPE_META: TypeMetadata = {
  typeName: 'MaskShape',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
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

export function MaskShape(): MaskShapeBuilder {
  return createFluentBuilder('MaskShape', MASKSHAPE_META) as unknown as MaskShapeBuilder;
}
