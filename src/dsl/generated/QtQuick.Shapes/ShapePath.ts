// AUTO-GENERATED — DO NOT EDIT
// Type: ShapePath
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlMatrix4x4,
  QmlObjectBuilder,
  QmlSize,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { TrimBuilder } from './QQuickShapeTrim.js';
export interface ShapePathBuilder {
  id(id: string): ShapePathBuilder;
  child(obj: QmlObjectBuilder): ShapePathBuilder;
  children(...objs: QmlObjectBuilder[]): ShapePathBuilder;

  asynchronous(value: boolean): ShapePathBuilder;
  asynchronousBind(expr: string): ShapePathBuilder;
  capStyle(value: QmlEnumToken): ShapePathBuilder;
  capStyleBind(expr: string): ShapePathBuilder;
  cosmeticStroke(value: boolean): ShapePathBuilder;
  cosmeticStrokeBind(expr: string): ShapePathBuilder;
  dashOffset(value: number): ShapePathBuilder;
  dashOffsetBind(expr: string): ShapePathBuilder;
  dashPattern(value: number): ShapePathBuilder;
  dashPatternBind(expr: string): ShapePathBuilder;
  fillColor(value: QmlColor): ShapePathBuilder;
  fillColorBind(expr: string): ShapePathBuilder;
  fillGradient(value: QmlValue): ShapePathBuilder;
  fillGradientBind(expr: string): ShapePathBuilder;
  fillItem(value: ItemBuilder): ShapePathBuilder;
  fillItemBind(expr: string): ShapePathBuilder;
  fillRule(value: QmlEnumToken): ShapePathBuilder;
  fillRuleBind(expr: string): ShapePathBuilder;
  fillTransform(value: QmlMatrix4x4): ShapePathBuilder;
  fillTransformBind(expr: string): ShapePathBuilder;
  joinStyle(value: QmlEnumToken): ShapePathBuilder;
  joinStyleBind(expr: string): ShapePathBuilder;
  miterLimit(value: number): ShapePathBuilder;
  miterLimitBind(expr: string): ShapePathBuilder;
  objectName(value: string): ShapePathBuilder;
  objectNameBind(expr: string): ShapePathBuilder;
  pathHints(value: QmlEnumToken): ShapePathBuilder;
  pathHintsBind(expr: string): ShapePathBuilder;
  scale(value: QmlSize): ShapePathBuilder;
  scaleBind(expr: string): ShapePathBuilder;
  simplify(value: boolean): ShapePathBuilder;
  simplifyBind(expr: string): ShapePathBuilder;
  startX(value: number): ShapePathBuilder;
  startXBind(expr: string): ShapePathBuilder;
  startY(value: number): ShapePathBuilder;
  startYBind(expr: string): ShapePathBuilder;
  strokeColor(value: QmlColor): ShapePathBuilder;
  strokeColorBind(expr: string): ShapePathBuilder;
  strokeStyle(value: QmlEnumToken): ShapePathBuilder;
  strokeStyleBind(expr: string): ShapePathBuilder;
  strokeWidth(value: number): ShapePathBuilder;
  strokeWidthBind(expr: string): ShapePathBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onCapStyleChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onCosmeticStrokeChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onDashOffsetChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onDashPatternChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onFillColorChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onFillGradientChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onFillItemChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onFillRuleChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onFillTransformChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onJoinStyleChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onMiterLimitChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onPathHintsChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onShapePathChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onSimplifyChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onStartXChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onStartYChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onStrokeColorChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onStrokeStyleChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  onStrokeWidthChanged(handler: DslSignalHandlerValue): ShapePathBuilder;
  trim(setup: (b: TrimBuilder) => void): ShapePathBuilder;
}

const SHAPEPATH_META: TypeMetadata = {
  typeName: 'ShapePath',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'capStyle', hasValue: true, hasBinding: true },
    { name: 'cosmeticStroke', hasValue: true, hasBinding: true },
    { name: 'dashOffset', hasValue: true, hasBinding: true },
    { name: 'dashPattern', hasValue: true, hasBinding: true },
    { name: 'fillColor', hasValue: true, hasBinding: true },
    { name: 'fillGradient', hasValue: true, hasBinding: true },
    { name: 'fillItem', hasValue: true, hasBinding: true },
    { name: 'fillRule', hasValue: true, hasBinding: true },
    { name: 'fillTransform', hasValue: true, hasBinding: true },
    { name: 'joinStyle', hasValue: true, hasBinding: true },
    { name: 'miterLimit', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pathHints', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'simplify', hasValue: true, hasBinding: true },
    { name: 'startX', hasValue: true, hasBinding: true },
    { name: 'startY', hasValue: true, hasBinding: true },
    { name: 'strokeColor', hasValue: true, hasBinding: true },
    { name: 'strokeStyle', hasValue: true, hasBinding: true },
    { name: 'strokeWidth', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onCapStyleChanged', paramCount: 0 },
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onCosmeticStrokeChanged', paramCount: 0 },
    { handlerName: 'onDashOffsetChanged', paramCount: 0 },
    { handlerName: 'onDashPatternChanged', paramCount: 0 },
    { handlerName: 'onFillColorChanged', paramCount: 0 },
    { handlerName: 'onFillGradientChanged', paramCount: 0 },
    { handlerName: 'onFillItemChanged', paramCount: 0 },
    { handlerName: 'onFillRuleChanged', paramCount: 0 },
    { handlerName: 'onFillTransformChanged', paramCount: 0 },
    { handlerName: 'onJoinStyleChanged', paramCount: 0 },
    { handlerName: 'onMiterLimitChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPathHintsChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onShapePathChanged', paramCount: 0 },
    { handlerName: 'onSimplifyChanged', paramCount: 0 },
    { handlerName: 'onStartXChanged', paramCount: 0 },
    { handlerName: 'onStartYChanged', paramCount: 0 },
    { handlerName: 'onStrokeColorChanged', paramCount: 0 },
    { handlerName: 'onStrokeStyleChanged', paramCount: 0 },
    { handlerName: 'onStrokeWidthChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'trim',
      groupName: 'trim',
      properties: [
        { name: 'end', hasValue: true, hasBinding: true },
        { name: 'offset', hasValue: true, hasBinding: true },
        { name: 'start', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [],
  defaultProperty: 'pathElements',
};

export function ShapePath(): ShapePathBuilder {
  return createFluentBuilder('ShapePath', SHAPEPATH_META) as unknown as ShapePathBuilder;
}

export namespace ShapePath {
  export namespace CapStyle {
    export const FlatCap = createEnumToken('ShapePath', 'CapStyle', 'FlatCap');
    export const SquareCap = createEnumToken('ShapePath', 'CapStyle', 'SquareCap');
    export const RoundCap = createEnumToken('ShapePath', 'CapStyle', 'RoundCap');
  }
  export namespace FillRule {
    export const OddEvenFill = createEnumToken('ShapePath', 'FillRule', 'OddEvenFill');
    export const WindingFill = createEnumToken('ShapePath', 'FillRule', 'WindingFill');
  }
  export namespace JoinStyle {
    export const MiterJoin = createEnumToken('ShapePath', 'JoinStyle', 'MiterJoin');
    export const BevelJoin = createEnumToken('ShapePath', 'JoinStyle', 'BevelJoin');
    export const RoundJoin = createEnumToken('ShapePath', 'JoinStyle', 'RoundJoin');
  }
  export namespace PathHints {
    export const PathLinear = createEnumToken('ShapePath', 'PathHints', 'PathLinear');
    export const PathQuadratic = createEnumToken('ShapePath', 'PathHints', 'PathQuadratic');
    export const PathConvex = createEnumToken('ShapePath', 'PathHints', 'PathConvex');
    export const PathFillOnRight = createEnumToken('ShapePath', 'PathHints', 'PathFillOnRight');
    export const PathSolid = createEnumToken('ShapePath', 'PathHints', 'PathSolid');
    export const PathNonIntersecting = createEnumToken(
      'ShapePath',
      'PathHints',
      'PathNonIntersecting',
    );
    export const PathNonOverlappingControlPointTriangles = createEnumToken(
      'ShapePath',
      'PathHints',
      'PathNonOverlappingControlPointTriangles',
    );
  }
  export namespace StrokeStyle {
    export const SolidLine = createEnumToken('ShapePath', 'StrokeStyle', 'SolidLine');
    export const DashLine = createEnumToken('ShapePath', 'StrokeStyle', 'DashLine');
  }
}
