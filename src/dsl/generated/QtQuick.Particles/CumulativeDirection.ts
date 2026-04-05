// AUTO-GENERATED — DO NOT EDIT
// Type: CumulativeDirection
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface CumulativeDirectionBuilder {
  id(id: string): CumulativeDirectionBuilder;
  child(obj: QmlObjectBuilder): CumulativeDirectionBuilder;

  objectName(value: string): CumulativeDirectionBuilder;
  objectNameBind(expr: string): CumulativeDirectionBuilder;
  onObjectNameChanged(body: string): CumulativeDirectionBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): CumulativeDirectionBuilder;
}

const CUMULATIVEDIRECTION_META: TypeMetadata = {
  typeName: 'CumulativeDirection',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [
    {
      methodName: 'itemParticle',
      attachedTypeName: 'ItemParticle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onAttached', paramCount: 0 },
        { handlerName: 'onDetached', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
  defaultProperty: 'directions',
};

export function CumulativeDirection(): CumulativeDirectionBuilder {
  return createFluentBuilder(
    'CumulativeDirection',
    CUMULATIVEDIRECTION_META,
  ) as unknown as CumulativeDirectionBuilder;
}
