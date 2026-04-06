// AUTO-GENERATED — DO NOT EDIT
// Type: PointDirection
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface PointDirectionBuilder {
  id(id: string): PointDirectionBuilder;
  child(obj: QmlObjectBuilder): PointDirectionBuilder;
  children(...objs: QmlObjectBuilder[]): PointDirectionBuilder;

  objectName(value: string): PointDirectionBuilder;
  objectNameBind(expr: string): PointDirectionBuilder;
  x(value: number): PointDirectionBuilder;
  xBind(expr: string): PointDirectionBuilder;
  xVariation(value: number): PointDirectionBuilder;
  xVariationBind(expr: string): PointDirectionBuilder;
  y(value: number): PointDirectionBuilder;
  yBind(expr: string): PointDirectionBuilder;
  yVariation(value: number): PointDirectionBuilder;
  yVariationBind(expr: string): PointDirectionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PointDirectionBuilder;
  onXChanged(handler: DslSignalHandlerValue): PointDirectionBuilder;
  onXVariationChanged(handler: DslSignalHandlerValue): PointDirectionBuilder;
  onYChanged(handler: DslSignalHandlerValue): PointDirectionBuilder;
  onYVariationChanged(handler: DslSignalHandlerValue): PointDirectionBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): PointDirectionBuilder;
}

const POINTDIRECTION_META: TypeMetadata = {
  typeName: 'PointDirection',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'xVariation', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'yVariation', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 1 },
    { handlerName: 'onXVariationChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 1 },
    { handlerName: 'onYVariationChanged', paramCount: 1 },
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

export function PointDirection(): PointDirectionBuilder {
  return createFluentBuilder(
    'PointDirection',
    POINTDIRECTION_META,
  ) as unknown as PointDirectionBuilder;
}
