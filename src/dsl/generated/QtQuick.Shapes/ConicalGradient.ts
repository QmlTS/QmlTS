// AUTO-GENERATED — DO NOT EDIT
// Type: ConicalGradient
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ConicalGradientBuilder {
  id(id: string): ConicalGradientBuilder;
  child(obj: QmlObjectBuilder): ConicalGradientBuilder;

  angle(value: number): ConicalGradientBuilder;
  angleBind(expr: string): ConicalGradientBuilder;
  centerX(value: number): ConicalGradientBuilder;
  centerXBind(expr: string): ConicalGradientBuilder;
  centerY(value: number): ConicalGradientBuilder;
  centerYBind(expr: string): ConicalGradientBuilder;
  objectName(value: string): ConicalGradientBuilder;
  objectNameBind(expr: string): ConicalGradientBuilder;
  orientation(value: QmlEnumToken): ConicalGradientBuilder;
  orientationBind(expr: string): ConicalGradientBuilder;
  spread(value: QmlEnumToken): ConicalGradientBuilder;
  spreadBind(expr: string): ConicalGradientBuilder;
  onAngleChanged(body: string): ConicalGradientBuilder;
  onCenterXChanged(body: string): ConicalGradientBuilder;
  onCenterYChanged(body: string): ConicalGradientBuilder;
  onObjectNameChanged(body: string): ConicalGradientBuilder;
  onOrientationChanged(body: string): ConicalGradientBuilder;
  onSpreadChanged(body: string): ConicalGradientBuilder;
  onUpdated(body: string): ConicalGradientBuilder;
}

const CONICALGRADIENT_META: TypeMetadata = {
  typeName: 'ConicalGradient',
  properties: [
    { name: 'angle', hasValue: true, hasBinding: true },
    { name: 'centerX', hasValue: true, hasBinding: true },
    { name: 'centerY', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'spread', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAngleChanged', paramCount: 0 },
    { handlerName: 'onCenterXChanged', paramCount: 0 },
    { handlerName: 'onCenterYChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSpreadChanged', paramCount: 0 },
    { handlerName: 'onUpdated', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'stops',
};

export function ConicalGradient(): ConicalGradientBuilder {
  return createFluentBuilder(
    'ConicalGradient',
    CONICALGRADIENT_META,
  ) as unknown as ConicalGradientBuilder;
}

export namespace ConicalGradient {
  export namespace Orientation {
    export const Vertical = createEnumToken('ConicalGradient', 'Orientation', 'Vertical');
    export const Horizontal = createEnumToken('ConicalGradient', 'Orientation', 'Horizontal');
  }
  export namespace SpreadMode {
    export const PadSpread = createEnumToken('ConicalGradient', 'SpreadMode', 'PadSpread');
    export const ReflectSpread = createEnumToken('ConicalGradient', 'SpreadMode', 'ReflectSpread');
    export const RepeatSpread = createEnumToken('ConicalGradient', 'SpreadMode', 'RepeatSpread');
  }
}
