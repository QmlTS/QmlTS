// AUTO-GENERATED — DO NOT EDIT
// Type: LogValueAxis
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface LogValueAxisBuilder {
  id(id: string): LogValueAxisBuilder;
  child(obj: QmlObjectBuilder): LogValueAxisBuilder;

  alignment(value: QmlEnumToken): LogValueAxisBuilder;
  alignmentBind(expr: string): LogValueAxisBuilder;
  base(value: number): LogValueAxisBuilder;
  baseBind(expr: string): LogValueAxisBuilder;
  color(value: QmlColor): LogValueAxisBuilder;
  colorBind(expr: string): LogValueAxisBuilder;
  gridVisible(value: boolean): LogValueAxisBuilder;
  gridVisibleBind(expr: string): LogValueAxisBuilder;
  labelDelegate(value: QmlComponent): LogValueAxisBuilder;
  labelDelegateBind(expr: string): LogValueAxisBuilder;
  labelFormat(value: string): LogValueAxisBuilder;
  labelFormatBind(expr: string): LogValueAxisBuilder;
  labelsAngle(value: number): LogValueAxisBuilder;
  labelsAngleBind(expr: string): LogValueAxisBuilder;
  labelsVisible(value: boolean): LogValueAxisBuilder;
  labelsVisibleBind(expr: string): LogValueAxisBuilder;
  lineVisible(value: boolean): LogValueAxisBuilder;
  lineVisibleBind(expr: string): LogValueAxisBuilder;
  max(value: number): LogValueAxisBuilder;
  maxBind(expr: string): LogValueAxisBuilder;
  min(value: number): LogValueAxisBuilder;
  minBind(expr: string): LogValueAxisBuilder;
  minorTickCount(value: number): LogValueAxisBuilder;
  minorTickCountBind(expr: string): LogValueAxisBuilder;
  objectName(value: string): LogValueAxisBuilder;
  objectNameBind(expr: string): LogValueAxisBuilder;
  subColor(value: QmlColor): LogValueAxisBuilder;
  subColorBind(expr: string): LogValueAxisBuilder;
  subGridVisible(value: boolean): LogValueAxisBuilder;
  subGridVisibleBind(expr: string): LogValueAxisBuilder;
  textElideMode(value: QmlEnumToken): LogValueAxisBuilder;
  textElideModeBind(expr: string): LogValueAxisBuilder;
  titleColor(value: QmlColor): LogValueAxisBuilder;
  titleColorBind(expr: string): LogValueAxisBuilder;
  titleFont(value: QmlFont): LogValueAxisBuilder;
  titleFontBind(expr: string): LogValueAxisBuilder;
  titleText(value: string): LogValueAxisBuilder;
  titleTextBind(expr: string): LogValueAxisBuilder;
  titleVisible(value: boolean): LogValueAxisBuilder;
  titleVisibleBind(expr: string): LogValueAxisBuilder;
  visible(value: boolean): LogValueAxisBuilder;
  visibleBind(expr: string): LogValueAxisBuilder;
  onAlignmentChanged(body: string): LogValueAxisBuilder;
  onBaseChanged(body: string): LogValueAxisBuilder;
  onColorChanged(body: string): LogValueAxisBuilder;
  onGridVisibleChanged(body: string): LogValueAxisBuilder;
  onLabelDelegateChanged(body: string): LogValueAxisBuilder;
  onLabelFormatChanged(body: string): LogValueAxisBuilder;
  onLabelsAngleChanged(body: string): LogValueAxisBuilder;
  onLabelsVisibleChanged(body: string): LogValueAxisBuilder;
  onLineVisibleChanged(body: string): LogValueAxisBuilder;
  onMaxChanged(body: string): LogValueAxisBuilder;
  onMinChanged(body: string): LogValueAxisBuilder;
  onMinorTickCountChanged(body: string): LogValueAxisBuilder;
  onObjectNameChanged(body: string): LogValueAxisBuilder;
  onRangeChanged(body: string): LogValueAxisBuilder;
  onSubColorChanged(body: string): LogValueAxisBuilder;
  onSubGridVisibleChanged(body: string): LogValueAxisBuilder;
  onTextElideModeChanged(body: string): LogValueAxisBuilder;
  onTickCountChanged(body: string): LogValueAxisBuilder;
  onTitleColorChanged(body: string): LogValueAxisBuilder;
  onTitleFontChanged(body: string): LogValueAxisBuilder;
  onTitleTextChanged(body: string): LogValueAxisBuilder;
  onTitleVisibleChanged(body: string): LogValueAxisBuilder;
  onUpdate(body: string): LogValueAxisBuilder;
  onVisibleChanged(body: string): LogValueAxisBuilder;
}

const LOGVALUEAXIS_META: TypeMetadata = {
  typeName: 'LogValueAxis',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'base', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelDelegate', hasValue: true, hasBinding: true },
    { name: 'labelFormat', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'lineVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
    { name: 'minorTickCount', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'subColor', hasValue: true, hasBinding: true },
    { name: 'subGridVisible', hasValue: true, hasBinding: true },
    { name: 'textElideMode', hasValue: true, hasBinding: true },
    { name: 'titleColor', hasValue: true, hasBinding: true },
    { name: 'titleFont', hasValue: true, hasBinding: true },
    { name: 'titleText', hasValue: true, hasBinding: true },
    { name: 'titleVisible', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignmentChanged', paramCount: 1 },
    { handlerName: 'onBaseChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 1 },
    { handlerName: 'onLineVisibleChanged', paramCount: 1 },
    { handlerName: 'onMaxChanged', paramCount: 1 },
    { handlerName: 'onMinChanged', paramCount: 1 },
    { handlerName: 'onMinorTickCountChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRangeChanged', paramCount: 2 },
    { handlerName: 'onSubColorChanged', paramCount: 1 },
    { handlerName: 'onSubGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onTextElideModeChanged', paramCount: 1 },
    { handlerName: 'onTickCountChanged', paramCount: 1 },
    { handlerName: 'onTitleColorChanged', paramCount: 1 },
    { handlerName: 'onTitleFontChanged', paramCount: 1 },
    { handlerName: 'onTitleTextChanged', paramCount: 1 },
    { handlerName: 'onTitleVisibleChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function LogValueAxis(): LogValueAxisBuilder {
  return createFluentBuilder('LogValueAxis', LOGVALUEAXIS_META) as unknown as LogValueAxisBuilder;
}

export namespace LogValueAxis {
  export namespace AxisType {
    export const Value = createEnumToken('LogValueAxis', 'AxisType', 'Value');
    export const BarCategory = createEnumToken('LogValueAxis', 'AxisType', 'BarCategory');
    export const DateTime = createEnumToken('LogValueAxis', 'AxisType', 'DateTime');
  }
}
