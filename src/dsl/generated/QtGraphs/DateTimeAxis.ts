// AUTO-GENERATED — DO NOT EDIT
// Type: DateTimeAxis
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlComponent,
  QmlDate,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface DateTimeAxisBuilder {
  id(id: string): DateTimeAxisBuilder;
  child(obj: QmlObjectBuilder): DateTimeAxisBuilder;
  children(...objs: QmlObjectBuilder[]): DateTimeAxisBuilder;

  alignment(value: QmlEnumToken): DateTimeAxisBuilder;
  alignmentBind(expr: string): DateTimeAxisBuilder;
  color(value: QmlColor): DateTimeAxisBuilder;
  colorBind(expr: string): DateTimeAxisBuilder;
  gridVisible(value: boolean): DateTimeAxisBuilder;
  gridVisibleBind(expr: string): DateTimeAxisBuilder;
  labelDelegate(value: QmlComponent): DateTimeAxisBuilder;
  labelDelegateBind(expr: string): DateTimeAxisBuilder;
  labelFormat(value: string): DateTimeAxisBuilder;
  labelFormatBind(expr: string): DateTimeAxisBuilder;
  labelsAngle(value: number): DateTimeAxisBuilder;
  labelsAngleBind(expr: string): DateTimeAxisBuilder;
  labelsVisible(value: boolean): DateTimeAxisBuilder;
  labelsVisibleBind(expr: string): DateTimeAxisBuilder;
  lineVisible(value: boolean): DateTimeAxisBuilder;
  lineVisibleBind(expr: string): DateTimeAxisBuilder;
  max(value: QmlDate): DateTimeAxisBuilder;
  maxBind(expr: string): DateTimeAxisBuilder;
  min(value: QmlDate): DateTimeAxisBuilder;
  minBind(expr: string): DateTimeAxisBuilder;
  objectName(value: string): DateTimeAxisBuilder;
  objectNameBind(expr: string): DateTimeAxisBuilder;
  pan(value: number): DateTimeAxisBuilder;
  panBind(expr: string): DateTimeAxisBuilder;
  subColor(value: QmlColor): DateTimeAxisBuilder;
  subColorBind(expr: string): DateTimeAxisBuilder;
  subGridVisible(value: boolean): DateTimeAxisBuilder;
  subGridVisibleBind(expr: string): DateTimeAxisBuilder;
  subTickCount(value: number): DateTimeAxisBuilder;
  subTickCountBind(expr: string): DateTimeAxisBuilder;
  textElideMode(value: QmlEnumToken): DateTimeAxisBuilder;
  textElideModeBind(expr: string): DateTimeAxisBuilder;
  tickInterval(value: number): DateTimeAxisBuilder;
  tickIntervalBind(expr: string): DateTimeAxisBuilder;
  timeZone(value: string): DateTimeAxisBuilder;
  timeZoneBind(expr: string): DateTimeAxisBuilder;
  titleColor(value: QmlColor): DateTimeAxisBuilder;
  titleColorBind(expr: string): DateTimeAxisBuilder;
  titleFont(value: QmlFont): DateTimeAxisBuilder;
  titleFontBind(expr: string): DateTimeAxisBuilder;
  titleText(value: string): DateTimeAxisBuilder;
  titleTextBind(expr: string): DateTimeAxisBuilder;
  titleVisible(value: boolean): DateTimeAxisBuilder;
  titleVisibleBind(expr: string): DateTimeAxisBuilder;
  visible(value: boolean): DateTimeAxisBuilder;
  visibleBind(expr: string): DateTimeAxisBuilder;
  zoom(value: number): DateTimeAxisBuilder;
  zoomBind(expr: string): DateTimeAxisBuilder;
  onAlignmentChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onColorChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onGridVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onLabelDelegateChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onLabelFormatChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onLabelsAngleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onLabelsVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onLineVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onMaxChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onMinChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onPanChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onRangeChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onSubColorChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onSubGridVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onSubTickCountChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTextElideModeChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTickIntervalChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTimeZoneChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTitleColorChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTitleFontChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTitleTextChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onTitleVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onUpdate(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onVisualMaxChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onVisualMinChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
  onZoomChanged(handler: DslSignalHandlerValue): DateTimeAxisBuilder;
}

const DATETIMEAXIS_META: TypeMetadata = {
  typeName: 'DateTimeAxis',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelDelegate', hasValue: true, hasBinding: true },
    { name: 'labelFormat', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'lineVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pan', hasValue: true, hasBinding: true },
    { name: 'subColor', hasValue: true, hasBinding: true },
    { name: 'subGridVisible', hasValue: true, hasBinding: true },
    { name: 'subTickCount', hasValue: true, hasBinding: true },
    { name: 'textElideMode', hasValue: true, hasBinding: true },
    { name: 'tickInterval', hasValue: true, hasBinding: true },
    { name: 'timeZone', hasValue: true, hasBinding: true },
    { name: 'titleColor', hasValue: true, hasBinding: true },
    { name: 'titleFont', hasValue: true, hasBinding: true },
    { name: 'titleText', hasValue: true, hasBinding: true },
    { name: 'titleVisible', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zoom', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignmentChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 1 },
    { handlerName: 'onLineVisibleChanged', paramCount: 1 },
    { handlerName: 'onMaxChanged', paramCount: 1 },
    { handlerName: 'onMinChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPanChanged', paramCount: 1 },
    { handlerName: 'onRangeChanged', paramCount: 2 },
    { handlerName: 'onSubColorChanged', paramCount: 1 },
    { handlerName: 'onSubGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onSubTickCountChanged', paramCount: 0 },
    { handlerName: 'onTextElideModeChanged', paramCount: 1 },
    { handlerName: 'onTickIntervalChanged', paramCount: 0 },
    { handlerName: 'onTimeZoneChanged', paramCount: 1 },
    { handlerName: 'onTitleColorChanged', paramCount: 1 },
    { handlerName: 'onTitleFontChanged', paramCount: 1 },
    { handlerName: 'onTitleTextChanged', paramCount: 1 },
    { handlerName: 'onTitleVisibleChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 1 },
    { handlerName: 'onVisualMaxChanged', paramCount: 1 },
    { handlerName: 'onVisualMinChanged', paramCount: 1 },
    { handlerName: 'onZoomChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function DateTimeAxis(): DateTimeAxisBuilder {
  return createFluentBuilder('DateTimeAxis', DATETIMEAXIS_META) as unknown as DateTimeAxisBuilder;
}

export namespace DateTimeAxis {
  export namespace AxisType {
    export const Value = createEnumToken('DateTimeAxis', 'AxisType', 'Value');
    export const BarCategory = createEnumToken('DateTimeAxis', 'AxisType', 'BarCategory');
    export const DateTime = createEnumToken('DateTimeAxis', 'AxisType', 'DateTime');
  }
}
