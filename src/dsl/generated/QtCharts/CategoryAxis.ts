// AUTO-GENERATED — DO NOT EDIT
// Type: CategoryAxis
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CategoryAxisBuilder {
  id(id: string): CategoryAxisBuilder;
  child(obj: QmlObjectBuilder): CategoryAxisBuilder;
  children(...objs: QmlObjectBuilder[]): CategoryAxisBuilder;

  alignment(value: QmlEnumToken): CategoryAxisBuilder;
  alignmentBind(expr: string): CategoryAxisBuilder;
  color(value: QmlColor): CategoryAxisBuilder;
  colorBind(expr: string): CategoryAxisBuilder;
  gridVisible(value: boolean): CategoryAxisBuilder;
  gridVisibleBind(expr: string): CategoryAxisBuilder;
  labelDecimals(value: number): CategoryAxisBuilder;
  labelDecimalsBind(expr: string): CategoryAxisBuilder;
  labelDelegate(value: QmlComponent): CategoryAxisBuilder;
  labelDelegateBind(expr: string): CategoryAxisBuilder;
  labelFormat(value: string): CategoryAxisBuilder;
  labelFormatBind(expr: string): CategoryAxisBuilder;
  labelsAngle(value: number): CategoryAxisBuilder;
  labelsAngleBind(expr: string): CategoryAxisBuilder;
  labelsPosition(value: QmlEnumToken): CategoryAxisBuilder;
  labelsPositionBind(expr: string): CategoryAxisBuilder;
  labelsVisible(value: boolean): CategoryAxisBuilder;
  labelsVisibleBind(expr: string): CategoryAxisBuilder;
  lineVisible(value: boolean): CategoryAxisBuilder;
  lineVisibleBind(expr: string): CategoryAxisBuilder;
  max(value: number): CategoryAxisBuilder;
  maxBind(expr: string): CategoryAxisBuilder;
  min(value: number): CategoryAxisBuilder;
  minBind(expr: string): CategoryAxisBuilder;
  objectName(value: string): CategoryAxisBuilder;
  objectNameBind(expr: string): CategoryAxisBuilder;
  pan(value: number): CategoryAxisBuilder;
  panBind(expr: string): CategoryAxisBuilder;
  startValue(value: number): CategoryAxisBuilder;
  startValueBind(expr: string): CategoryAxisBuilder;
  subColor(value: QmlColor): CategoryAxisBuilder;
  subColorBind(expr: string): CategoryAxisBuilder;
  subGridVisible(value: boolean): CategoryAxisBuilder;
  subGridVisibleBind(expr: string): CategoryAxisBuilder;
  subTickCount(value: number): CategoryAxisBuilder;
  subTickCountBind(expr: string): CategoryAxisBuilder;
  textElideMode(value: QmlEnumToken): CategoryAxisBuilder;
  textElideModeBind(expr: string): CategoryAxisBuilder;
  tickAnchor(value: number): CategoryAxisBuilder;
  tickAnchorBind(expr: string): CategoryAxisBuilder;
  tickInterval(value: number): CategoryAxisBuilder;
  tickIntervalBind(expr: string): CategoryAxisBuilder;
  titleColor(value: QmlColor): CategoryAxisBuilder;
  titleColorBind(expr: string): CategoryAxisBuilder;
  titleFont(value: QmlFont): CategoryAxisBuilder;
  titleFontBind(expr: string): CategoryAxisBuilder;
  titleText(value: string): CategoryAxisBuilder;
  titleTextBind(expr: string): CategoryAxisBuilder;
  titleVisible(value: boolean): CategoryAxisBuilder;
  titleVisibleBind(expr: string): CategoryAxisBuilder;
  visible(value: boolean): CategoryAxisBuilder;
  visibleBind(expr: string): CategoryAxisBuilder;
  zoom(value: number): CategoryAxisBuilder;
  zoomBind(expr: string): CategoryAxisBuilder;
  onAlignmentChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onCategoriesChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onColorChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onGridVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelDecimalsChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelDelegateChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelFormatChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelsAngleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelsPositionChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLabelsVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onLineVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onMaxChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onMinChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onPanChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onRangeChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onSubColorChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onSubGridVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onSubTickCountChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTextElideModeChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTickAnchorChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTickIntervalChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTitleColorChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTitleFontChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTitleTextChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onTitleVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onUpdate(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onVisualMaxChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onVisualMinChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
  onZoomChanged(handler: DslSignalHandlerValue): CategoryAxisBuilder;
}

const CATEGORYAXIS_META: TypeMetadata = {
  typeName: 'CategoryAxis',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelDecimals', hasValue: true, hasBinding: true },
    { name: 'labelDelegate', hasValue: true, hasBinding: true },
    { name: 'labelFormat', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsPosition', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'lineVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pan', hasValue: true, hasBinding: true },
    { name: 'startValue', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCategoriesChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelDecimalsChanged', paramCount: 1 },
    { handlerName: 'onLabelDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsPositionChanged', paramCount: 1 },
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
  defaultProperty: 'axisChildren',
};

export function CategoryAxis(): CategoryAxisBuilder {
  return createFluentBuilder('CategoryAxis', CATEGORYAXIS_META) as unknown as CategoryAxisBuilder;
}

export namespace CategoryAxis {
  export namespace AxisLabelsPosition {
    export const AxisLabelsPositionCenter = createEnumToken(
      'CategoryAxis',
      'AxisLabelsPosition',
      'AxisLabelsPositionCenter',
    );
    export const AxisLabelsPositionOnValue = createEnumToken(
      'CategoryAxis',
      'AxisLabelsPosition',
      'AxisLabelsPositionOnValue',
    );
  }
  export namespace AxisType {
    export const Value = createEnumToken('CategoryAxis', 'AxisType', 'Value');
    export const BarCategory = createEnumToken('CategoryAxis', 'AxisType', 'BarCategory');
    export const DateTime = createEnumToken('CategoryAxis', 'AxisType', 'DateTime');
  }
}
