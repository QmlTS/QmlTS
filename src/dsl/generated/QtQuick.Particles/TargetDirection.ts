// AUTO-GENERATED — DO NOT EDIT
// Type: TargetDirection
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { ItemParticleAttachedBuilder } from './QQuickItemParticleAttached.js';
export interface TargetDirectionBuilder {
  id(id: string): TargetDirectionBuilder;
  child(obj: QmlObjectBuilder): TargetDirectionBuilder;
  children(...objs: QmlObjectBuilder[]): TargetDirectionBuilder;

  magnitude(value: number): TargetDirectionBuilder;
  magnitudeBind(expr: string): TargetDirectionBuilder;
  magnitudeVariation(value: number): TargetDirectionBuilder;
  magnitudeVariationBind(expr: string): TargetDirectionBuilder;
  objectName(value: string): TargetDirectionBuilder;
  objectNameBind(expr: string): TargetDirectionBuilder;
  proportionalMagnitude(value: boolean): TargetDirectionBuilder;
  proportionalMagnitudeBind(expr: string): TargetDirectionBuilder;
  targetItem(value: ItemBuilder): TargetDirectionBuilder;
  targetItemBind(expr: string): TargetDirectionBuilder;
  targetVariation(value: number): TargetDirectionBuilder;
  targetVariationBind(expr: string): TargetDirectionBuilder;
  targetX(value: number): TargetDirectionBuilder;
  targetXBind(expr: string): TargetDirectionBuilder;
  targetY(value: number): TargetDirectionBuilder;
  targetYBind(expr: string): TargetDirectionBuilder;
  onMagnitudeChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onMagnitudeVariationChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onProprotionalMagnitudeChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onTargetItemChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onTargetVariationChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onTargetXChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  onTargetYChanged(handler: DslSignalHandlerValue): TargetDirectionBuilder;
  itemParticle(setup: (b: ItemParticleAttachedBuilder) => void): TargetDirectionBuilder;
}

const TARGETDIRECTION_META: TypeMetadata = {
  typeName: 'TargetDirection',
  properties: [
    { name: 'magnitude', hasValue: true, hasBinding: true },
    { name: 'magnitudeVariation', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'proportionalMagnitude', hasValue: true, hasBinding: true },
    { name: 'targetItem', hasValue: true, hasBinding: true },
    { name: 'targetVariation', hasValue: true, hasBinding: true },
    { name: 'targetX', hasValue: true, hasBinding: true },
    { name: 'targetY', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onMagnitudeChanged', paramCount: 1 },
    { handlerName: 'onMagnitudeVariationChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProprotionalMagnitudeChanged', paramCount: 1 },
    { handlerName: 'onTargetItemChanged', paramCount: 1 },
    { handlerName: 'onTargetVariationChanged', paramCount: 1 },
    { handlerName: 'onTargetXChanged', paramCount: 1 },
    { handlerName: 'onTargetYChanged', paramCount: 1 },
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

export function TargetDirection(): TargetDirectionBuilder {
  return createFluentBuilder(
    'TargetDirection',
    TARGETDIRECTION_META,
  ) as unknown as TargetDirectionBuilder;
}
