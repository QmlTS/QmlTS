// AUTO-GENERATED — DO NOT EDIT
// Type: BarCategoryAxis
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface BarCategoryAxisBuilder {
  id(id: string): BarCategoryAxisBuilder;
  child(obj: QmlObjectBuilder): BarCategoryAxisBuilder;

  alignment(value: QmlEnumToken): BarCategoryAxisBuilder;
  alignmentBind(expr: string): BarCategoryAxisBuilder;
  categories(value: string[]): BarCategoryAxisBuilder;
  categoriesBind(expr: string): BarCategoryAxisBuilder;
  color(value: QmlColor): BarCategoryAxisBuilder;
  colorBind(expr: string): BarCategoryAxisBuilder;
  gridVisible(value: boolean): BarCategoryAxisBuilder;
  gridVisibleBind(expr: string): BarCategoryAxisBuilder;
  labelDelegate(value: QmlComponent): BarCategoryAxisBuilder;
  labelDelegateBind(expr: string): BarCategoryAxisBuilder;
  labelPosition(value: QmlEnumToken): BarCategoryAxisBuilder;
  labelPositionBind(expr: string): BarCategoryAxisBuilder;
  labelsAngle(value: number): BarCategoryAxisBuilder;
  labelsAngleBind(expr: string): BarCategoryAxisBuilder;
  labelsVisible(value: boolean): BarCategoryAxisBuilder;
  labelsVisibleBind(expr: string): BarCategoryAxisBuilder;
  lineVisible(value: boolean): BarCategoryAxisBuilder;
  lineVisibleBind(expr: string): BarCategoryAxisBuilder;
  max(value: string): BarCategoryAxisBuilder;
  maxBind(expr: string): BarCategoryAxisBuilder;
  min(value: string): BarCategoryAxisBuilder;
  minBind(expr: string): BarCategoryAxisBuilder;
  objectName(value: string): BarCategoryAxisBuilder;
  objectNameBind(expr: string): BarCategoryAxisBuilder;
  subColor(value: QmlColor): BarCategoryAxisBuilder;
  subColorBind(expr: string): BarCategoryAxisBuilder;
  subGridVisible(value: boolean): BarCategoryAxisBuilder;
  subGridVisibleBind(expr: string): BarCategoryAxisBuilder;
  textElideMode(value: QmlEnumToken): BarCategoryAxisBuilder;
  textElideModeBind(expr: string): BarCategoryAxisBuilder;
  titleColor(value: QmlColor): BarCategoryAxisBuilder;
  titleColorBind(expr: string): BarCategoryAxisBuilder;
  titleFont(value: QmlFont): BarCategoryAxisBuilder;
  titleFontBind(expr: string): BarCategoryAxisBuilder;
  titleText(value: string): BarCategoryAxisBuilder;
  titleTextBind(expr: string): BarCategoryAxisBuilder;
  titleVisible(value: boolean): BarCategoryAxisBuilder;
  titleVisibleBind(expr: string): BarCategoryAxisBuilder;
  visible(value: boolean): BarCategoryAxisBuilder;
  visibleBind(expr: string): BarCategoryAxisBuilder;
  onAlignmentChanged(body: string): BarCategoryAxisBuilder;
  onCategoriesChanged(body: string): BarCategoryAxisBuilder;
  onCategoryRangeChanged(body: string): BarCategoryAxisBuilder;
  onColorChanged(body: string): BarCategoryAxisBuilder;
  onCountChanged(body: string): BarCategoryAxisBuilder;
  onGridVisibleChanged(body: string): BarCategoryAxisBuilder;
  onLabelDelegateChanged(body: string): BarCategoryAxisBuilder;
  onLabelPositionChanged(body: string): BarCategoryAxisBuilder;
  onLabelsAngleChanged(body: string): BarCategoryAxisBuilder;
  onLabelsVisibleChanged(body: string): BarCategoryAxisBuilder;
  onLineVisibleChanged(body: string): BarCategoryAxisBuilder;
  onMaxChanged(body: string): BarCategoryAxisBuilder;
  onMinChanged(body: string): BarCategoryAxisBuilder;
  onObjectNameChanged(body: string): BarCategoryAxisBuilder;
  onRangeChanged(body: string): BarCategoryAxisBuilder;
  onSubColorChanged(body: string): BarCategoryAxisBuilder;
  onSubGridVisibleChanged(body: string): BarCategoryAxisBuilder;
  onTextElideModeChanged(body: string): BarCategoryAxisBuilder;
  onTitleColorChanged(body: string): BarCategoryAxisBuilder;
  onTitleFontChanged(body: string): BarCategoryAxisBuilder;
  onTitleTextChanged(body: string): BarCategoryAxisBuilder;
  onTitleVisibleChanged(body: string): BarCategoryAxisBuilder;
  onUpdate(body: string): BarCategoryAxisBuilder;
  onVisibleChanged(body: string): BarCategoryAxisBuilder;
}

const BARCATEGORYAXIS_META: TypeMetadata = {
  typeName: 'BarCategoryAxis',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'categories', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gridVisible', hasValue: true, hasBinding: true },
    { name: 'labelDelegate', hasValue: true, hasBinding: true },
    { name: 'labelPosition', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'lineVisible', hasValue: true, hasBinding: true },
    { name: 'max', hasValue: true, hasBinding: true },
    { name: 'min', hasValue: true, hasBinding: true },
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
    { handlerName: 'onCategoriesChanged', paramCount: 0 },
    { handlerName: 'onCategoryRangeChanged', paramCount: 2 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onLabelDelegateChanged', paramCount: 0 },
    { handlerName: 'onLabelPositionChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 1 },
    { handlerName: 'onLineVisibleChanged', paramCount: 1 },
    { handlerName: 'onMaxChanged', paramCount: 1 },
    { handlerName: 'onMinChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRangeChanged', paramCount: 2 },
    { handlerName: 'onSubColorChanged', paramCount: 1 },
    { handlerName: 'onSubGridVisibleChanged', paramCount: 1 },
    { handlerName: 'onTextElideModeChanged', paramCount: 1 },
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

export function BarCategoryAxis(): BarCategoryAxisBuilder {
  return createFluentBuilder('BarCategoryAxis', BARCATEGORYAXIS_META) as unknown as BarCategoryAxisBuilder;
}

export namespace BarCategoryAxis {
  export namespace AxisType {
    export const Value = createEnumToken('BarCategoryAxis', 'AxisType', 'Value');
    export const BarCategory = createEnumToken('BarCategoryAxis', 'AxisType', 'BarCategory');
    export const DateTime = createEnumToken('BarCategoryAxis', 'AxisType', 'DateTime');
  }
  export namespace LabelPosition {
    export const Center = createEnumToken('BarCategoryAxis', 'LabelPosition', 'Center');
    export const OnValue = createEnumToken('BarCategoryAxis', 'LabelPosition', 'OnValue');
  }
}
