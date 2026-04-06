// AUTO-GENERATED — DO NOT EDIT
// Type: RectangleShape
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface RectangleShapeBuilder {
  id(id: string): RectangleShapeBuilder;
  child(obj: QmlObjectBuilder): RectangleShapeBuilder;
  children(...objs: QmlObjectBuilder[]): RectangleShapeBuilder;

  fill(value: boolean): RectangleShapeBuilder;
  fillBind(expr: string): RectangleShapeBuilder;
  objectName(value: string): RectangleShapeBuilder;
  objectNameBind(expr: string): RectangleShapeBuilder;
  onFillChanged(handler: DslSignalHandlerValue): RectangleShapeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RectangleShapeBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): RectangleShapeBuilder;
}

const RECTANGLESHAPE_META: TypeMetadata = {
  typeName: 'RectangleShape',
  properties: [
    { name: 'fill', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onFillChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
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
};

export function RectangleShape(): RectangleShapeBuilder {
  return createFluentBuilder(
    'RectangleShape',
    RECTANGLESHAPE_META,
  ) as unknown as RectangleShapeBuilder;
}
