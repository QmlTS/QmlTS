// AUTO-GENERATED — DO NOT EDIT
// Type: Value3DAxis
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { Value3DAxisFormatterBuilder } from './Value3DAxisFormatter.js';
export interface Value3DAxisBuilder {
  id(id: string): Value3DAxisBuilder;
  child(obj: QmlObjectBuilder): Value3DAxisBuilder;

  autoAdjustRange(value: boolean): Value3DAxisBuilder;
  autoAdjustRangeBind(expr: string): Value3DAxisBuilder;
  formatter(value: Value3DAxisFormatterBuilder): Value3DAxisBuilder;
  formatterBind(expr: string): Value3DAxisBuilder;
  labelAutoAngle(value: number): Value3DAxisBuilder;
  labelAutoAngleBind(expr: string): Value3DAxisBuilder;
  labelFormat(value: string): Value3DAxisBuilder;
  labelFormatBind(expr: string): Value3DAxisBuilder;
  labelSize(value: number): Value3DAxisBuilder;
  labelSizeBind(expr: string): Value3DAxisBuilder;
  labels(value: string[]): Value3DAxisBuilder;
  labelsBind(expr: string): Value3DAxisBuilder;
  labelsVisible(value: boolean): Value3DAxisBuilder;
  labelsVisibleBind(expr: string): Value3DAxisBuilder;
  max(value: number): Value3DAxisBuilder;
  maxBind(expr: string): Value3DAxisBuilder;
  min(value: number): Value3DAxisBuilder;
  minBind(expr: string): Value3DAxisBuilder;
  objectName(value: string): Value3DAxisBuilder;
  objectNameBind(expr: string): Value3DAxisBuilder;
  reversed(value: boolean): Value3DAxisBuilder;
  reversedBind(expr: string): Value3DAxisBuilder;
  scaleLabelsByCount(value: boolean): Value3DAxisBuilder;
  scaleLabelsByCountBind(expr: string): Value3DAxisBuilder;
  segmentCount(value: number): Value3DAxisBuilder;
  segmentCountBind(expr: string): Value3DAxisBuilder;
  subSegmentCount(value: number): Value3DAxisBuilder;
  subSegmentCountBind(expr: string): Value3DAxisBuilder;
  title(value: string): Value3DAxisBuilder;
  titleBind(expr: string): Value3DAxisBuilder;
  titleFixed(value: boolean): Value3DAxisBuilder;
  titleFixedBind(expr: string): Value3DAxisBuilder;
  titleOffset(value: number): Value3DAxisBuilder;
  titleOffsetBind(expr: string): Value3DAxisBuilder;
  titleVisible(value: boolean): Value3DAxisBuilder;
  titleVisibleBind(expr: string): Value3DAxisBuilder;
  onAutoAdjustRangeChanged(body: string): Value3DAxisBuilder;
  onFormatterChanged(body: string): Value3DAxisBuilder;
  onFormatterDirty(body: string): Value3DAxisBuilder;
  onLabelAutoAngleChanged(body: string): Value3DAxisBuilder;
  onLabelFormatChanged(body: string): Value3DAxisBuilder;
  onLabelSizeChanged(body: string): Value3DAxisBuilder;
  onLabelVisibleChanged(body: string): Value3DAxisBuilder;
  onLabelsChanged(body: string): Value3DAxisBuilder;
  onMaxChanged(body: string): Value3DAxisBuilder;
  onMinChanged(body: string): Value3DAxisBuilder;
  onObjectNameChanged(body: string): Value3DAxisBuilder;
  onOrientationChanged(body: string): Value3DAxisBuilder;
  onRangeChanged(body: string): Value3DAxisBuilder;
  onReversedChanged(body: string): Value3DAxisBuilder;
  onScaleLabelsByCountChanged(body: string): Value3DAxisBuilder;
  onSegmentCountChanged(body: string): Value3DAxisBuilder;
  onSubSegmentCountChanged(body: string): Value3DAxisBuilder;
  onTitleChanged(body: string): Value3DAxisBuilder;
  onTitleFixedChanged(body: string): Value3DAxisBuilder;
  onTitleOffsetChanged(body: string): Value3DAxisBuilder;
  onTitleVisibleChanged(body: string): Value3DAxisBuilder;
}

const VALUE3DAXIS_META: TypeMetadata = {
  typeName: 'Value3DAxis',
  properties: [
    { name: 'autoAdjustRange', hasValue: true, hasBinding: true },
    { name: 'formatter', hasValue: true, hasBinding: true },
    { name: 'labelAutoAngle', hasValue: true, hasBinding: true },
    { name: 'labelFormat', hasValue: true, hasBinding: true },
    { name: 'labelSize', hasValue: true, hasBinding: true },
    { name: 'labels', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'reversed', hasValue: true, hasBinding: true },
    { name: 'scaleLabelsByCount', hasValue: true, hasBinding: true },
    { name: 'segmentCount', hasValue: true, hasBinding: true },
    { name: 'subSegmentCount', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'titleFixed', hasValue: true, hasBinding: true },
    { name: 'titleOffset', hasValue: true, hasBinding: true },
    { name: 'titleVisible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoAdjustRangeChanged', paramCount: 1 },
    { handlerName: 'onFormatterChanged', paramCount: 1 },
    { handlerName: 'onFormatterDirty', paramCount: 0 },
    { handlerName: 'onLabelAutoAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelSizeChanged', paramCount: 1 },
    { handlerName: 'onLabelVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelsChanged', paramCount: 0 },
    { handlerName: 'onMaxChanged', paramCount: 1 },
    { handlerName: 'onMinChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 1 },
    { handlerName: 'onRangeChanged', paramCount: 2 },
    { handlerName: 'onReversedChanged', paramCount: 1 },
    { handlerName: 'onScaleLabelsByCountChanged', paramCount: 1 },
    { handlerName: 'onSegmentCountChanged', paramCount: 1 },
    { handlerName: 'onSubSegmentCountChanged', paramCount: 1 },
    { handlerName: 'onTitleChanged', paramCount: 1 },
    { handlerName: 'onTitleFixedChanged', paramCount: 1 },
    { handlerName: 'onTitleOffsetChanged', paramCount: 1 },
    { handlerName: 'onTitleVisibleChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Value3DAxis(): Value3DAxisBuilder {
  return createFluentBuilder('Value3DAxis', VALUE3DAXIS_META) as unknown as Value3DAxisBuilder;
}

export namespace Value3DAxis {
  export namespace AxisOrientation {
    export const None = createEnumToken('Value3DAxis', 'AxisOrientation', 'None');
    export const X = createEnumToken('Value3DAxis', 'AxisOrientation', 'X');
    export const Y = createEnumToken('Value3DAxis', 'AxisOrientation', 'Y');
    export const Z = createEnumToken('Value3DAxis', 'AxisOrientation', 'Z');
  }
  export namespace AxisType {
    export const None = createEnumToken('Value3DAxis', 'AxisType', 'None');
    export const Category = createEnumToken('Value3DAxis', 'AxisType', 'Category');
    export const Value = createEnumToken('Value3DAxis', 'AxisType', 'Value');
  }
}
