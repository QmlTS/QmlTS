// AUTO-GENERATED — DO NOT EDIT
// Type: BarSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface BarSeriesBuilder {
  id(id: string): BarSeriesBuilder;
  child(obj: QmlObjectBuilder): BarSeriesBuilder;

  axisX(value: QmlValue): BarSeriesBuilder;
  axisXBind(expr: string): BarSeriesBuilder;
  axisY(value: QmlValue): BarSeriesBuilder;
  axisYBind(expr: string): BarSeriesBuilder;
  barDelegate(value: QmlComponent): BarSeriesBuilder;
  barDelegateBind(expr: string): BarSeriesBuilder;
  barWidth(value: number): BarSeriesBuilder;
  barWidthBind(expr: string): BarSeriesBuilder;
  barsType(value: QmlEnumToken): BarSeriesBuilder;
  barsTypeBind(expr: string): BarSeriesBuilder;
  borderColors(value: QmlColor): BarSeriesBuilder;
  borderColorsBind(expr: string): BarSeriesBuilder;
  hoverable(value: boolean): BarSeriesBuilder;
  hoverableBind(expr: string): BarSeriesBuilder;
  labelsAngle(value: number): BarSeriesBuilder;
  labelsAngleBind(expr: string): BarSeriesBuilder;
  labelsFormat(value: string): BarSeriesBuilder;
  labelsFormatBind(expr: string): BarSeriesBuilder;
  labelsMargin(value: number): BarSeriesBuilder;
  labelsMarginBind(expr: string): BarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): BarSeriesBuilder;
  labelsPositionBind(expr: string): BarSeriesBuilder;
  labelsPrecision(value: number): BarSeriesBuilder;
  labelsPrecisionBind(expr: string): BarSeriesBuilder;
  labelsVisible(value: boolean): BarSeriesBuilder;
  labelsVisibleBind(expr: string): BarSeriesBuilder;
  name(value: string): BarSeriesBuilder;
  nameBind(expr: string): BarSeriesBuilder;
  objectName(value: string): BarSeriesBuilder;
  objectNameBind(expr: string): BarSeriesBuilder;
  opacity(value: number): BarSeriesBuilder;
  opacityBind(expr: string): BarSeriesBuilder;
  selectable(value: boolean): BarSeriesBuilder;
  selectableBind(expr: string): BarSeriesBuilder;
  seriesColors(value: QmlColor): BarSeriesBuilder;
  seriesColorsBind(expr: string): BarSeriesBuilder;
  valuesMultiplier(value: number): BarSeriesBuilder;
  valuesMultiplierBind(expr: string): BarSeriesBuilder;
  visible(value: boolean): BarSeriesBuilder;
  visibleBind(expr: string): BarSeriesBuilder;
  zValue(value: number): BarSeriesBuilder;
  zValueBind(expr: string): BarSeriesBuilder;
  onAxisXChanged(body: string): BarSeriesBuilder;
  onAxisYChanged(body: string): BarSeriesBuilder;
  onBarDelegateChanged(body: string): BarSeriesBuilder;
  onBarSetsChanged(body: string): BarSeriesBuilder;
  onBarWidthChanged(body: string): BarSeriesBuilder;
  onBarsTypeChanged(body: string): BarSeriesBuilder;
  onBarsetsAdded(body: string): BarSeriesBuilder;
  onBarsetsRemoved(body: string): BarSeriesBuilder;
  onBarsetsReplaced(body: string): BarSeriesBuilder;
  onBorderColorsChanged(body: string): BarSeriesBuilder;
  onClicked(body: string): BarSeriesBuilder;
  onCountChanged(body: string): BarSeriesBuilder;
  onDoubleClicked(body: string): BarSeriesBuilder;
  onHover(body: string): BarSeriesBuilder;
  onHoverEnter(body: string): BarSeriesBuilder;
  onHoverExit(body: string): BarSeriesBuilder;
  onHoverableChanged(body: string): BarSeriesBuilder;
  onHoveredChanged(body: string): BarSeriesBuilder;
  onLabelsAngleChanged(body: string): BarSeriesBuilder;
  onLabelsFormatChanged(body: string): BarSeriesBuilder;
  onLabelsMarginChanged(body: string): BarSeriesBuilder;
  onLabelsPositionChanged(body: string): BarSeriesBuilder;
  onLabelsPrecisionChanged(body: string): BarSeriesBuilder;
  onLabelsVisibleChanged(body: string): BarSeriesBuilder;
  onLegendDataChanged(body: string): BarSeriesBuilder;
  onNameChanged(body: string): BarSeriesBuilder;
  onObjectNameChanged(body: string): BarSeriesBuilder;
  onOpacityChanged(body: string): BarSeriesBuilder;
  onPressed(body: string): BarSeriesBuilder;
  onReleased(body: string): BarSeriesBuilder;
  onSelectableChanged(body: string): BarSeriesBuilder;
  onSeriesColorsChanged(body: string): BarSeriesBuilder;
  onSetValueAdded(body: string): BarSeriesBuilder;
  onSetValueChanged(body: string): BarSeriesBuilder;
  onSetValueRemoved(body: string): BarSeriesBuilder;
  onUpdate(body: string): BarSeriesBuilder;
  onUpdatedBars(body: string): BarSeriesBuilder;
  onValuesMultiplierChanged(body: string): BarSeriesBuilder;
  onVisibleChanged(body: string): BarSeriesBuilder;
  onZValueChanged(body: string): BarSeriesBuilder;
}

const BARSERIES_META: TypeMetadata = {
  typeName: 'BarSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'barDelegate', hasValue: true, hasBinding: true },
    { name: 'barWidth', hasValue: true, hasBinding: true },
    { name: 'barsType', hasValue: true, hasBinding: true },
    { name: 'borderColors', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsFormat', hasValue: true, hasBinding: true },
    { name: 'labelsMargin', hasValue: true, hasBinding: true },
    { name: 'labelsPosition', hasValue: true, hasBinding: true },
    { name: 'labelsPrecision', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'seriesColors', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onBarDelegateChanged', paramCount: 0 },
    { handlerName: 'onBarSetsChanged', paramCount: 0 },
    { handlerName: 'onBarWidthChanged', paramCount: 0 },
    { handlerName: 'onBarsTypeChanged', paramCount: 1 },
    { handlerName: 'onBarsetsAdded', paramCount: 1 },
    { handlerName: 'onBarsetsRemoved', paramCount: 1 },
    { handlerName: 'onBarsetsReplaced', paramCount: 1 },
    { handlerName: 'onBorderColorsChanged', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 2 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 2 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelsMarginChanged', paramCount: 1 },
    { handlerName: 'onLabelsPositionChanged', paramCount: 1 },
    { handlerName: 'onLabelsPrecisionChanged', paramCount: 1 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 2 },
    { handlerName: 'onReleased', paramCount: 2 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onSeriesColorsChanged', paramCount: 0 },
    { handlerName: 'onSetValueAdded', paramCount: 3 },
    { handlerName: 'onSetValueChanged', paramCount: 2 },
    { handlerName: 'onSetValueRemoved', paramCount: 3 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onUpdatedBars', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'seriesChildren',
};

export function BarSeries(): BarSeriesBuilder {
  return createFluentBuilder('BarSeries', BARSERIES_META) as unknown as BarSeriesBuilder;
}

export namespace BarSeries {
  export namespace BarsType {
    export const Groups = createEnumToken('BarSeries', 'BarsType', 'Groups');
    export const Stacked = createEnumToken('BarSeries', 'BarsType', 'Stacked');
    export const StackedPercent = createEnumToken('BarSeries', 'BarsType', 'StackedPercent');
  }
  export namespace LabelsPosition {
    export const Center = createEnumToken('BarSeries', 'LabelsPosition', 'Center');
    export const InsideEnd = createEnumToken('BarSeries', 'LabelsPosition', 'InsideEnd');
    export const InsideBase = createEnumToken('BarSeries', 'LabelsPosition', 'InsideBase');
    export const OutsideEnd = createEnumToken('BarSeries', 'LabelsPosition', 'OutsideEnd');
  }
  export namespace SeriesType {
    export const Line = createEnumToken('BarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('BarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('BarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('BarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('BarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('BarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('BarSeries', 'SeriesType', 'Custom');
  }
}
