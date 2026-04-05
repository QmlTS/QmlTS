// AUTO-GENERATED — DO NOT EDIT
// Type: PathInterpolated
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface PathInterpolatedBuilder {
  id(id: string): PathInterpolatedBuilder;
  child(obj: QmlObjectBuilder): PathInterpolatedBuilder;

  factor(value: number): PathInterpolatedBuilder;
  factorBind(expr: string): PathInterpolatedBuilder;
  objectName(value: string): PathInterpolatedBuilder;
  objectNameBind(expr: string): PathInterpolatedBuilder;
  relativeX(value: number): PathInterpolatedBuilder;
  relativeXBind(expr: string): PathInterpolatedBuilder;
  relativeY(value: number): PathInterpolatedBuilder;
  relativeYBind(expr: string): PathInterpolatedBuilder;
  svgPaths(value: string[]): PathInterpolatedBuilder;
  svgPathsBind(expr: string): PathInterpolatedBuilder;
  x(value: number): PathInterpolatedBuilder;
  xBind(expr: string): PathInterpolatedBuilder;
  y(value: number): PathInterpolatedBuilder;
  yBind(expr: string): PathInterpolatedBuilder;
  onChanged(body: string): PathInterpolatedBuilder;
  onFactorChanged(body: string): PathInterpolatedBuilder;
  onObjectNameChanged(body: string): PathInterpolatedBuilder;
  onRelativeXChanged(body: string): PathInterpolatedBuilder;
  onRelativeYChanged(body: string): PathInterpolatedBuilder;
  onSvgPathsChanged(body: string): PathInterpolatedBuilder;
  onXChanged(body: string): PathInterpolatedBuilder;
  onYChanged(body: string): PathInterpolatedBuilder;
}

const PATHINTERPOLATED_META: TypeMetadata = {
  typeName: 'PathInterpolated',
  properties: [
    { name: 'factor', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'relativeX', hasValue: true, hasBinding: true },
    { name: 'relativeY', hasValue: true, hasBinding: true },
    { name: 'svgPaths', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onFactorChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRelativeXChanged', paramCount: 0 },
    { handlerName: 'onRelativeYChanged', paramCount: 0 },
    { handlerName: 'onSvgPathsChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PathInterpolated(): PathInterpolatedBuilder {
  return createFluentBuilder('PathInterpolated', PATHINTERPOLATED_META) as unknown as PathInterpolatedBuilder;
}
