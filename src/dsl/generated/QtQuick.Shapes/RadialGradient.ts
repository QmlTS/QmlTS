// AUTO-GENERATED — DO NOT EDIT
// Type: RadialGradient
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RadialGradientBuilder {
  id(id: string): RadialGradientBuilder;
  child(obj: QmlObjectBuilder): RadialGradientBuilder;
  children(...objs: QmlObjectBuilder[]): RadialGradientBuilder;

  centerRadius(value: number): RadialGradientBuilder;
  centerRadiusBind(expr: string): RadialGradientBuilder;
  centerX(value: number): RadialGradientBuilder;
  centerXBind(expr: string): RadialGradientBuilder;
  centerY(value: number): RadialGradientBuilder;
  centerYBind(expr: string): RadialGradientBuilder;
  focalRadius(value: number): RadialGradientBuilder;
  focalRadiusBind(expr: string): RadialGradientBuilder;
  focalX(value: number): RadialGradientBuilder;
  focalXBind(expr: string): RadialGradientBuilder;
  focalY(value: number): RadialGradientBuilder;
  focalYBind(expr: string): RadialGradientBuilder;
  objectName(value: string): RadialGradientBuilder;
  objectNameBind(expr: string): RadialGradientBuilder;
  orientation(value: QmlEnumToken): RadialGradientBuilder;
  orientationBind(expr: string): RadialGradientBuilder;
  spread(value: QmlEnumToken): RadialGradientBuilder;
  spreadBind(expr: string): RadialGradientBuilder;
  onCenterRadiusChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onCenterXChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onCenterYChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onFocalRadiusChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onFocalXChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onFocalYChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onSpreadChanged(handler: DslSignalHandlerValue): RadialGradientBuilder;
  onUpdated(handler: DslSignalHandlerValue): RadialGradientBuilder;
}

const RADIALGRADIENT_META: TypeMetadata = {
  typeName: 'RadialGradient',
  properties: [
    { name: 'centerRadius', hasValue: true, hasBinding: true },
    { name: 'centerX', hasValue: true, hasBinding: true },
    { name: 'centerY', hasValue: true, hasBinding: true },
    { name: 'focalRadius', hasValue: true, hasBinding: true },
    { name: 'focalX', hasValue: true, hasBinding: true },
    { name: 'focalY', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'spread', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCenterRadiusChanged', paramCount: 0 },
    { handlerName: 'onCenterXChanged', paramCount: 0 },
    { handlerName: 'onCenterYChanged', paramCount: 0 },
    { handlerName: 'onFocalRadiusChanged', paramCount: 0 },
    { handlerName: 'onFocalXChanged', paramCount: 0 },
    { handlerName: 'onFocalYChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSpreadChanged', paramCount: 0 },
    { handlerName: 'onUpdated', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'stops',
};

export function RadialGradient(): RadialGradientBuilder {
  return createFluentBuilder(
    'RadialGradient',
    RADIALGRADIENT_META,
  ) as unknown as RadialGradientBuilder;
}

export namespace RadialGradient {
  export namespace Orientation {
    export const Vertical = createEnumToken('RadialGradient', 'Orientation', 'Vertical');
    export const Horizontal = createEnumToken('RadialGradient', 'Orientation', 'Horizontal');
  }
  export namespace SpreadMode {
    export const PadSpread = createEnumToken('RadialGradient', 'SpreadMode', 'PadSpread');
    export const ReflectSpread = createEnumToken('RadialGradient', 'SpreadMode', 'ReflectSpread');
    export const RepeatSpread = createEnumToken('RadialGradient', 'SpreadMode', 'RepeatSpread');
  }
}
