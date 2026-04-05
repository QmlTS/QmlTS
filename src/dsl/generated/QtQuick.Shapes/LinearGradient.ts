// AUTO-GENERATED — DO NOT EDIT
// Type: LinearGradient
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface LinearGradientBuilder {
  id(id: string): LinearGradientBuilder;
  child(obj: QmlObjectBuilder): LinearGradientBuilder;

  objectName(value: string): LinearGradientBuilder;
  objectNameBind(expr: string): LinearGradientBuilder;
  orientation(value: QmlEnumToken): LinearGradientBuilder;
  orientationBind(expr: string): LinearGradientBuilder;
  spread(value: QmlEnumToken): LinearGradientBuilder;
  spreadBind(expr: string): LinearGradientBuilder;
  x1(value: number): LinearGradientBuilder;
  x1Bind(expr: string): LinearGradientBuilder;
  x2(value: number): LinearGradientBuilder;
  x2Bind(expr: string): LinearGradientBuilder;
  y1(value: number): LinearGradientBuilder;
  y1Bind(expr: string): LinearGradientBuilder;
  y2(value: number): LinearGradientBuilder;
  y2Bind(expr: string): LinearGradientBuilder;
  onObjectNameChanged(body: string): LinearGradientBuilder;
  onOrientationChanged(body: string): LinearGradientBuilder;
  onSpreadChanged(body: string): LinearGradientBuilder;
  onUpdated(body: string): LinearGradientBuilder;
  onX1Changed(body: string): LinearGradientBuilder;
  onX2Changed(body: string): LinearGradientBuilder;
  onY1Changed(body: string): LinearGradientBuilder;
  onY2Changed(body: string): LinearGradientBuilder;
}

const LINEARGRADIENT_META: TypeMetadata = {
  typeName: 'LinearGradient',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'spread', hasValue: true, hasBinding: true },
    { name: 'x1', hasValue: true, hasBinding: true },
    { name: 'x2', hasValue: true, hasBinding: true },
    { name: 'y1', hasValue: true, hasBinding: true },
    { name: 'y2', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSpreadChanged', paramCount: 0 },
    { handlerName: 'onUpdated', paramCount: 0 },
    { handlerName: 'onX1Changed', paramCount: 0 },
    { handlerName: 'onX2Changed', paramCount: 0 },
    { handlerName: 'onY1Changed', paramCount: 0 },
    { handlerName: 'onY2Changed', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'stops',
};

export function LinearGradient(): LinearGradientBuilder {
  return createFluentBuilder('LinearGradient', LINEARGRADIENT_META) as unknown as LinearGradientBuilder;
}

export namespace LinearGradient {
  export namespace Orientation {
    export const Vertical = createEnumToken('LinearGradient', 'Orientation', 'Vertical');
    export const Horizontal = createEnumToken('LinearGradient', 'Orientation', 'Horizontal');
  }
  export namespace SpreadMode {
    export const PadSpread = createEnumToken('LinearGradient', 'SpreadMode', 'PadSpread');
    export const ReflectSpread = createEnumToken('LinearGradient', 'SpreadMode', 'ReflectSpread');
    export const RepeatSpread = createEnumToken('LinearGradient', 'SpreadMode', 'RepeatSpread');
  }
}
