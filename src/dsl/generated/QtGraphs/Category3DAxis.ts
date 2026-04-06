// AUTO-GENERATED — DO NOT EDIT
// Type: Category3DAxis
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface Category3DAxisBuilder {
  id(id: string): Category3DAxisBuilder;
  child(obj: QmlObjectBuilder): Category3DAxisBuilder;
  children(...objs: QmlObjectBuilder[]): Category3DAxisBuilder;

  autoAdjustRange(value: boolean): Category3DAxisBuilder;
  autoAdjustRangeBind(expr: string): Category3DAxisBuilder;
  labelAutoAngle(value: number): Category3DAxisBuilder;
  labelAutoAngleBind(expr: string): Category3DAxisBuilder;
  labelSize(value: number): Category3DAxisBuilder;
  labelSizeBind(expr: string): Category3DAxisBuilder;
  labels(value: string[]): Category3DAxisBuilder;
  labelsBind(expr: string): Category3DAxisBuilder;
  labelsVisible(value: boolean): Category3DAxisBuilder;
  labelsVisibleBind(expr: string): Category3DAxisBuilder;
  max(value: number): Category3DAxisBuilder;
  maxBind(expr: string): Category3DAxisBuilder;
  min(value: number): Category3DAxisBuilder;
  minBind(expr: string): Category3DAxisBuilder;
  objectName(value: string): Category3DAxisBuilder;
  objectNameBind(expr: string): Category3DAxisBuilder;
  scaleLabelsByCount(value: boolean): Category3DAxisBuilder;
  scaleLabelsByCountBind(expr: string): Category3DAxisBuilder;
  title(value: string): Category3DAxisBuilder;
  titleBind(expr: string): Category3DAxisBuilder;
  titleFixed(value: boolean): Category3DAxisBuilder;
  titleFixedBind(expr: string): Category3DAxisBuilder;
  titleOffset(value: number): Category3DAxisBuilder;
  titleOffsetBind(expr: string): Category3DAxisBuilder;
  titleVisible(value: boolean): Category3DAxisBuilder;
  titleVisibleBind(expr: string): Category3DAxisBuilder;
  onAutoAdjustRangeChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onColumnLabelsChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onLabelAutoAngleChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onLabelSizeChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onLabelVisibleChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onLabelsChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onMaxChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onMinChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onRangeChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onRowLabelsChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onScaleLabelsByCountChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onTitleFixedChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onTitleOffsetChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
  onTitleVisibleChanged(handler: DslSignalHandlerValue): Category3DAxisBuilder;
}

const CATEGORY3DAXIS_META: TypeMetadata = {
  typeName: 'Category3DAxis',
  properties: [
    { name: 'autoAdjustRange', hasValue: true, hasBinding: true },
    { name: 'labelAutoAngle', hasValue: true, hasBinding: true },
    { name: 'labelSize', hasValue: true, hasBinding: true },
    { name: 'labels', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'scaleLabelsByCount', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'titleFixed', hasValue: true, hasBinding: true },
    { name: 'titleOffset', hasValue: true, hasBinding: true },
    { name: 'titleVisible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoAdjustRangeChanged', paramCount: 1 },
    { handlerName: 'onColumnLabelsChanged', paramCount: 0 },
    { handlerName: 'onLabelAutoAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelSizeChanged', paramCount: 1 },
    { handlerName: 'onLabelVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelsChanged', paramCount: 0 },
    { handlerName: 'onMaxChanged', paramCount: 1 },
    { handlerName: 'onMinChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 1 },
    { handlerName: 'onRangeChanged', paramCount: 2 },
    { handlerName: 'onRowLabelsChanged', paramCount: 0 },
    { handlerName: 'onScaleLabelsByCountChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 1 },
    { handlerName: 'onTitleFixedChanged', paramCount: 1 },
    { handlerName: 'onTitleOffsetChanged', paramCount: 1 },
    { handlerName: 'onTitleVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Category3DAxis(): Category3DAxisBuilder {
  return createFluentBuilder(
    'Category3DAxis',
    CATEGORY3DAXIS_META,
  ) as unknown as Category3DAxisBuilder;
}

export namespace Category3DAxis {
  export namespace AxisOrientation {
    export const None = createEnumToken('Category3DAxis', 'AxisOrientation', 'None');
    export const X = createEnumToken('Category3DAxis', 'AxisOrientation', 'X');
    export const Y = createEnumToken('Category3DAxis', 'AxisOrientation', 'Y');
    export const Z = createEnumToken('Category3DAxis', 'AxisOrientation', 'Z');
  }
  export namespace AxisType {
    export const None = createEnumToken('Category3DAxis', 'AxisType', 'None');
    export const Category = createEnumToken('Category3DAxis', 'AxisType', 'Category');
    export const Value = createEnumToken('Category3DAxis', 'AxisType', 'Value');
  }
}
