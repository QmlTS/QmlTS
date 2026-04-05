// AUTO-GENERATED — DO NOT EDIT
// Type: ValueAxis
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ValueAxisBuilder {
  id(id: string): ValueAxisBuilder;
  child(obj: QmlObjectBuilder): ValueAxisBuilder;

  alignment(value: QmlEnumToken): ValueAxisBuilder;
  alignmentBind(expr: string): ValueAxisBuilder;
  color(value: QmlColor): ValueAxisBuilder;
  colorBind(expr: string): ValueAxisBuilder;
  gridVisible(value: boolean): ValueAxisBuilder;
  gridVisibleBind(expr: string): ValueAxisBuilder;
  labelDecimals(value: number): ValueAxisBuilder;
  labelDecimalsBind(expr: string): ValueAxisBuilder;
  labelDelegate(value: QmlComponent): ValueAxisBuilder;
  labelDelegateBind(expr: string): ValueAxisBuilder;
  labelFormat(value: string): ValueAxisBuilder;
  labelFormatBind(expr: string): ValueAxisBuilder;
  labelsAngle(value: number): ValueAxisBuilder;
  labelsAngleBind(expr: string): ValueAxisBuilder;
  labelsVisible(value: boolean): ValueAxisBuilder;
  labelsVisibleBind(expr: string): ValueAxisBuilder;
  lineVisible(value: boolean): ValueAxisBuilder;
  lineVisibleBind(expr: string): ValueAxisBuilder;
  max(value: number): ValueAxisBuilder;
  maxBind(expr: string): ValueAxisBuilder;
  min(value: number): ValueAxisBuilder;
  minBind(expr: string): ValueAxisBuilder;
  objectName(value: string): ValueAxisBuilder;
  objectNameBind(expr: string): ValueAxisBuilder;
  pan(value: number): ValueAxisBuilder;
  panBind(expr: string): ValueAxisBuilder;
  subColor(value: QmlColor): ValueAxisBuilder;
  subColorBind(expr: string): ValueAxisBuilder;
  subGridVisible(value: boolean): ValueAxisBuilder;
  subGridVisibleBind(expr: string): ValueAxisBuilder;
  subTickCount(value: number): ValueAxisBuilder;
  subTickCountBind(expr: string): ValueAxisBuilder;
  textElideMode(value: QmlEnumToken): ValueAxisBuilder;
  textElideModeBind(expr: string): ValueAxisBuilder;
  tickAnchor(value: number): ValueAxisBuilder;
  tickAnchorBind(expr: string): ValueAxisBuilder;
  tickInterval(value: number): ValueAxisBuilder;
  tickIntervalBind(expr: string): ValueAxisBuilder;
  titleColor(value: QmlColor): ValueAxisBuilder;
  titleColorBind(expr: string): ValueAxisBuilder;
  titleFont(value: QmlFont): ValueAxisBuilder;
  titleFontBind(expr: string): ValueAxisBuilder;
  titleText(value: string): ValueAxisBuilder;
  titleTextBind(expr: string): ValueAxisBuilder;
  titleVisible(value: boolean): ValueAxisBuilder;
  titleVisibleBind(expr: string): ValueAxisBuilder;
  visible(value: boolean): ValueAxisBuilder;
  visibleBind(expr: string): ValueAxisBuilder;
  zoom(value: number): ValueAxisBuilder;
  zoomBind(expr: string): ValueAxisBuilder;
  onAlignmentChanged(body: string): ValueAxisBuilder;
  onColorChanged(body: string): ValueAxisBuilder;
  onGridVisibleChanged(body: string): ValueAxisBuilder;
  onLabelDecimalsChanged(body: string): ValueAxisBuilder;
  onLabelDelegateChanged(body: string): ValueAxisBuilder;
  onLabelFormatChanged(body: string): ValueAxisBuilder;
  onLabelsAngleChanged(body: string): ValueAxisBuilder;
  onLabelsVisibleChanged(body: string): ValueAxisBuilder;
  onLineVisibleChanged(body: string): ValueAxisBuilder;
  onMaxChanged(body: string): ValueAxisBuilder;
  onMinChanged(body: string): ValueAxisBuilder;
  onObjectNameChanged(body: string): ValueAxisBuilder;
  onPanChanged(body: string): ValueAxisBuilder;
  onRangeChanged(body: string): ValueAxisBuilder;
  onSubColorChanged(body: string): ValueAxisBuilder;
  onSubGridVisibleChanged(body: string): ValueAxisBuilder;
  onSubTickCountChanged(body: string): ValueAxisBuilder;
  onTextElideModeChanged(body: string): ValueAxisBuilder;
  onTickAnchorChanged(body: string): ValueAxisBuilder;
  onTickIntervalChanged(body: string): ValueAxisBuilder;
  onTitleColorChanged(body: string): ValueAxisBuilder;
  onTitleFontChanged(body: string): ValueAxisBuilder;
  onTitleTextChanged(body: string): ValueAxisBuilder;
  onTitleVisibleChanged(body: string): ValueAxisBuilder;
  onUpdate(body: string): ValueAxisBuilder;
  onVisibleChanged(body: string): ValueAxisBuilder;
  onVisualMaxChanged(body: string): ValueAxisBuilder;
  onVisualMinChanged(body: string): ValueAxisBuilder;
  onZoomChanged(body: string): ValueAxisBuilder;
}

const VALUEAXIS_META: TypeMetadata = {
  typeName: 'ValueAxis',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelDecimals', hasValue: true, hasBinding: true },
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
    { name: 'tickAnchor', hasValue: true, hasBinding: true },
    { name: 'tickInterval', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLabelDecimalsChanged', paramCount: 1 },
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
    { handlerName: 'onSubTickCountChanged', paramCount: 1 },
    { handlerName: 'onTextElideModeChanged', paramCount: 1 },
    { handlerName: 'onTickAnchorChanged', paramCount: 1 },
    { handlerName: 'onTickIntervalChanged', paramCount: 1 },
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

export function ValueAxis(): ValueAxisBuilder {
  return createFluentBuilder('ValueAxis', VALUEAXIS_META) as unknown as ValueAxisBuilder;
}

export namespace ValueAxis {
  export namespace AxisType {
    export const Value = createEnumToken('ValueAxis', 'AxisType', 'Value');
    export const BarCategory = createEnumToken('ValueAxis', 'AxisType', 'BarCategory');
    export const DateTime = createEnumToken('ValueAxis', 'AxisType', 'DateTime');
  }
}
