// AUTO-GENERATED — DO NOT EDIT
// Type: BoundaryRule
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface BoundaryRuleBuilder {
  id(id: string): BoundaryRuleBuilder;
  child(obj: QmlObjectBuilder): BoundaryRuleBuilder;

  easing(value: QmlValue): BoundaryRuleBuilder;
  easingBind(expr: string): BoundaryRuleBuilder;
  enabled(value: boolean): BoundaryRuleBuilder;
  enabledBind(expr: string): BoundaryRuleBuilder;
  maximum(value: number): BoundaryRuleBuilder;
  maximumBind(expr: string): BoundaryRuleBuilder;
  maximumOvershoot(value: number): BoundaryRuleBuilder;
  maximumOvershootBind(expr: string): BoundaryRuleBuilder;
  minimum(value: number): BoundaryRuleBuilder;
  minimumBind(expr: string): BoundaryRuleBuilder;
  minimumOvershoot(value: number): BoundaryRuleBuilder;
  minimumOvershootBind(expr: string): BoundaryRuleBuilder;
  objectName(value: string): BoundaryRuleBuilder;
  objectNameBind(expr: string): BoundaryRuleBuilder;
  overshootFilter(value: QmlEnumToken): BoundaryRuleBuilder;
  overshootFilterBind(expr: string): BoundaryRuleBuilder;
  overshootScale(value: number): BoundaryRuleBuilder;
  overshootScaleBind(expr: string): BoundaryRuleBuilder;
  returnDuration(value: number): BoundaryRuleBuilder;
  returnDurationBind(expr: string): BoundaryRuleBuilder;
  onCurrentOvershootChanged(body: string): BoundaryRuleBuilder;
  onEasingChanged(body: string): BoundaryRuleBuilder;
  onEnabledChanged(body: string): BoundaryRuleBuilder;
  onMaximumChanged(body: string): BoundaryRuleBuilder;
  onMaximumOvershootChanged(body: string): BoundaryRuleBuilder;
  onMinimumChanged(body: string): BoundaryRuleBuilder;
  onMinimumOvershootChanged(body: string): BoundaryRuleBuilder;
  onObjectNameChanged(body: string): BoundaryRuleBuilder;
  onOvershootFilterChanged(body: string): BoundaryRuleBuilder;
  onOvershootScaleChanged(body: string): BoundaryRuleBuilder;
  onPeakOvershootChanged(body: string): BoundaryRuleBuilder;
  onReturnDurationChanged(body: string): BoundaryRuleBuilder;
  onReturnedToBounds(body: string): BoundaryRuleBuilder;
}

const BOUNDARYRULE_META: TypeMetadata = {
  typeName: 'BoundaryRule',
  properties: [
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'maximum', hasValue: true, hasBinding: true },
    { name: 'maximumOvershoot', hasValue: true, hasBinding: true },
    { name: 'minimum', hasValue: true, hasBinding: true },
    { name: 'minimumOvershoot', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'overshootFilter', hasValue: true, hasBinding: true },
    { name: 'overshootScale', hasValue: true, hasBinding: true },
    { name: 'returnDuration', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCurrentOvershootChanged', paramCount: 0 },
    { handlerName: 'onEasingChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onMaximumChanged', paramCount: 0 },
    { handlerName: 'onMaximumOvershootChanged', paramCount: 0 },
    { handlerName: 'onMinimumChanged', paramCount: 0 },
    { handlerName: 'onMinimumOvershootChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOvershootFilterChanged', paramCount: 0 },
    { handlerName: 'onOvershootScaleChanged', paramCount: 0 },
    { handlerName: 'onPeakOvershootChanged', paramCount: 0 },
    { handlerName: 'onReturnDurationChanged', paramCount: 0 },
    { handlerName: 'onReturnedToBounds', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function BoundaryRule(): BoundaryRuleBuilder {
  return createFluentBuilder('BoundaryRule', BOUNDARYRULE_META) as unknown as BoundaryRuleBuilder;
}

export namespace BoundaryRule {
  export namespace OvershootFilter {
    export const None = createEnumToken('BoundaryRule', 'OvershootFilter', 'None');
    export const Peak = createEnumToken('BoundaryRule', 'OvershootFilter', 'Peak');
  }
}
