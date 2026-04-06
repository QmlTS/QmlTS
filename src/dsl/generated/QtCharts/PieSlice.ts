// AUTO-GENERATED — DO NOT EDIT
// Type: PieSlice
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PieSliceBuilder {
  id(id: string): PieSliceBuilder;
  child(obj: QmlObjectBuilder): PieSliceBuilder;
  children(...objs: QmlObjectBuilder[]): PieSliceBuilder;

  borderColor(value: QmlColor): PieSliceBuilder;
  borderColorBind(expr: string): PieSliceBuilder;
  borderWidth(value: number): PieSliceBuilder;
  borderWidthBind(expr: string): PieSliceBuilder;
  brushFilename(value: string): PieSliceBuilder;
  brushFilenameBind(expr: string): PieSliceBuilder;
  color(value: QmlColor): PieSliceBuilder;
  colorBind(expr: string): PieSliceBuilder;
  explodeDistanceFactor(value: number): PieSliceBuilder;
  explodeDistanceFactorBind(expr: string): PieSliceBuilder;
  exploded(value: boolean): PieSliceBuilder;
  explodedBind(expr: string): PieSliceBuilder;
  label(value: string): PieSliceBuilder;
  labelBind(expr: string): PieSliceBuilder;
  labelArmLengthFactor(value: number): PieSliceBuilder;
  labelArmLengthFactorBind(expr: string): PieSliceBuilder;
  labelColor(value: QmlColor): PieSliceBuilder;
  labelColorBind(expr: string): PieSliceBuilder;
  labelFont(value: QmlFont): PieSliceBuilder;
  labelFontBind(expr: string): PieSliceBuilder;
  labelPosition(value: QmlEnumToken): PieSliceBuilder;
  labelPositionBind(expr: string): PieSliceBuilder;
  labelVisible(value: boolean): PieSliceBuilder;
  labelVisibleBind(expr: string): PieSliceBuilder;
  objectName(value: string): PieSliceBuilder;
  objectNameBind(expr: string): PieSliceBuilder;
  subSlicesRatio(value: number): PieSliceBuilder;
  subSlicesRatioBind(expr: string): PieSliceBuilder;
  value(value: number): PieSliceBuilder;
  valueBind(expr: string): PieSliceBuilder;
  onAngleSpanChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onBorderColorChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onBorderWidthChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onBrushFilenameChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onColorChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onExplodeDistanceFactorChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onExplodedChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelArmLengthFactorChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelColorChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelFontChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelPositionChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onLabelVisibleChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onPercentageChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSliceChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onStartAngleChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesAdded(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesCountChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesRatioChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesRemoved(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesReplaced(handler: DslSignalHandlerValue): PieSliceBuilder;
  onSubSlicesSumChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
  onValueChanged(handler: DslSignalHandlerValue): PieSliceBuilder;
}

const PIESLICE_META: TypeMetadata = {
  typeName: 'PieSlice',
  properties: [
    { name: 'borderColor', hasValue: true, hasBinding: true },
    { name: 'borderWidth', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'explodeDistanceFactor', hasValue: true, hasBinding: true },
    { name: 'exploded', hasValue: true, hasBinding: true },
    { name: 'label', hasValue: true, hasBinding: true },
    { name: 'labelArmLengthFactor', hasValue: true, hasBinding: true },
    { name: 'labelColor', hasValue: true, hasBinding: true },
    { name: 'labelFont', hasValue: true, hasBinding: true },
    { name: 'labelPosition', hasValue: true, hasBinding: true },
    { name: 'labelVisible', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'subSlicesRatio', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAngleSpanChanged', paramCount: 0 },
    { handlerName: 'onBorderColorChanged', paramCount: 0 },
    { handlerName: 'onBorderWidthChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onExplodeDistanceFactorChanged', paramCount: 0 },
    { handlerName: 'onExplodedChanged', paramCount: 0 },
    { handlerName: 'onLabelArmLengthFactorChanged', paramCount: 0 },
    { handlerName: 'onLabelChanged', paramCount: 0 },
    { handlerName: 'onLabelColorChanged', paramCount: 0 },
    { handlerName: 'onLabelFontChanged', paramCount: 0 },
    { handlerName: 'onLabelPositionChanged', paramCount: 0 },
    { handlerName: 'onLabelVisibleChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPercentageChanged', paramCount: 0 },
    { handlerName: 'onSliceChanged', paramCount: 0 },
    { handlerName: 'onStartAngleChanged', paramCount: 0 },
    { handlerName: 'onSubSlicesAdded', paramCount: 1 },
    { handlerName: 'onSubSlicesCountChanged', paramCount: 1 },
    { handlerName: 'onSubSlicesRatioChanged', paramCount: 1 },
    { handlerName: 'onSubSlicesRemoved', paramCount: 1 },
    { handlerName: 'onSubSlicesReplaced', paramCount: 1 },
    { handlerName: 'onSubSlicesSumChanged', paramCount: 1 },
    { handlerName: 'onValueChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PieSlice(): PieSliceBuilder {
  return createFluentBuilder('PieSlice', PIESLICE_META) as unknown as PieSliceBuilder;
}

export namespace PieSlice {
  export namespace LabelPosition {
    export const Outside = createEnumToken('PieSlice', 'LabelPosition', 'Outside');
    export const InsideHorizontal = createEnumToken(
      'PieSlice',
      'LabelPosition',
      'InsideHorizontal',
    );
    export const InsideTangential = createEnumToken(
      'PieSlice',
      'LabelPosition',
      'InsideTangential',
    );
    export const InsideNormal = createEnumToken('PieSlice', 'LabelPosition', 'InsideNormal');
  }
}
