// AUTO-GENERATED — DO NOT EDIT
// Type: StackedBarSeries
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface StackedBarSeriesBuilder {
  id(id: string): StackedBarSeriesBuilder;
  child(obj: QmlObjectBuilder): StackedBarSeriesBuilder;

  axisX(value: QmlValue): StackedBarSeriesBuilder;
  axisXBind(expr: string): StackedBarSeriesBuilder;
  axisXTop(value: QmlValue): StackedBarSeriesBuilder;
  axisXTopBind(expr: string): StackedBarSeriesBuilder;
  axisY(value: QmlValue): StackedBarSeriesBuilder;
  axisYBind(expr: string): StackedBarSeriesBuilder;
  axisYRight(value: QmlValue): StackedBarSeriesBuilder;
  axisYRightBind(expr: string): StackedBarSeriesBuilder;
  barWidth(value: number): StackedBarSeriesBuilder;
  barWidthBind(expr: string): StackedBarSeriesBuilder;
  hoverable(value: boolean): StackedBarSeriesBuilder;
  hoverableBind(expr: string): StackedBarSeriesBuilder;
  labelsAngle(value: number): StackedBarSeriesBuilder;
  labelsAngleBind(expr: string): StackedBarSeriesBuilder;
  labelsFormat(value: string): StackedBarSeriesBuilder;
  labelsFormatBind(expr: string): StackedBarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): StackedBarSeriesBuilder;
  labelsPositionBind(expr: string): StackedBarSeriesBuilder;
  labelsPrecision(value: number): StackedBarSeriesBuilder;
  labelsPrecisionBind(expr: string): StackedBarSeriesBuilder;
  labelsVisible(value: boolean): StackedBarSeriesBuilder;
  labelsVisibleBind(expr: string): StackedBarSeriesBuilder;
  name(value: string): StackedBarSeriesBuilder;
  nameBind(expr: string): StackedBarSeriesBuilder;
  objectName(value: string): StackedBarSeriesBuilder;
  objectNameBind(expr: string): StackedBarSeriesBuilder;
  opacity(value: number): StackedBarSeriesBuilder;
  opacityBind(expr: string): StackedBarSeriesBuilder;
  selectable(value: boolean): StackedBarSeriesBuilder;
  selectableBind(expr: string): StackedBarSeriesBuilder;
  valuesMultiplier(value: number): StackedBarSeriesBuilder;
  valuesMultiplierBind(expr: string): StackedBarSeriesBuilder;
  visible(value: boolean): StackedBarSeriesBuilder;
  visibleBind(expr: string): StackedBarSeriesBuilder;
  zValue(value: number): StackedBarSeriesBuilder;
  zValueBind(expr: string): StackedBarSeriesBuilder;
  onAxisXChanged(body: string): StackedBarSeriesBuilder;
  onAxisXTopChanged(body: string): StackedBarSeriesBuilder;
  onAxisYChanged(body: string): StackedBarSeriesBuilder;
  onAxisYRightChanged(body: string): StackedBarSeriesBuilder;
  onBarsetsAdded(body: string): StackedBarSeriesBuilder;
  onBarsetsRemoved(body: string): StackedBarSeriesBuilder;
  onClicked(body: string): StackedBarSeriesBuilder;
  onCountChanged(body: string): StackedBarSeriesBuilder;
  onDoubleClicked(body: string): StackedBarSeriesBuilder;
  onHover(body: string): StackedBarSeriesBuilder;
  onHoverEnter(body: string): StackedBarSeriesBuilder;
  onHoverExit(body: string): StackedBarSeriesBuilder;
  onHoverableChanged(body: string): StackedBarSeriesBuilder;
  onHovered(body: string): StackedBarSeriesBuilder;
  onHoveredChanged(body: string): StackedBarSeriesBuilder;
  onLabelsAngleChanged(body: string): StackedBarSeriesBuilder;
  onLabelsFormatChanged(body: string): StackedBarSeriesBuilder;
  onLabelsPositionChanged(body: string): StackedBarSeriesBuilder;
  onLabelsPrecisionChanged(body: string): StackedBarSeriesBuilder;
  onLabelsVisibleChanged(body: string): StackedBarSeriesBuilder;
  onLegendDataChanged(body: string): StackedBarSeriesBuilder;
  onNameChanged(body: string): StackedBarSeriesBuilder;
  onObjectNameChanged(body: string): StackedBarSeriesBuilder;
  onOpacityChanged(body: string): StackedBarSeriesBuilder;
  onPressed(body: string): StackedBarSeriesBuilder;
  onReleased(body: string): StackedBarSeriesBuilder;
  onSelectableChanged(body: string): StackedBarSeriesBuilder;
  onUpdate(body: string): StackedBarSeriesBuilder;
  onValuesMultiplierChanged(body: string): StackedBarSeriesBuilder;
  onVisibleChanged(body: string): StackedBarSeriesBuilder;
  onZValueChanged(body: string): StackedBarSeriesBuilder;
}

const STACKEDBARSERIES_META: TypeMetadata = {
  typeName: 'StackedBarSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXTop', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYRight', hasValue: true, hasBinding: true },
    { name: 'barWidth', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'labelsAngle', hasValue: true, hasBinding: true },
    { name: 'labelsFormat', hasValue: true, hasBinding: true },
    { name: 'labelsPosition', hasValue: true, hasBinding: true },
    { name: 'labelsPrecision', hasValue: true, hasBinding: true },
    { name: 'labelsVisible', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisXTopChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisYRightChanged', paramCount: 1 },
    { handlerName: 'onBarsetsAdded', paramCount: 1 },
    { handlerName: 'onBarsetsRemoved', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 2 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 2 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 3 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLabelsAngleChanged', paramCount: 1 },
    { handlerName: 'onLabelsFormatChanged', paramCount: 1 },
    { handlerName: 'onLabelsPositionChanged', paramCount: 1 },
    { handlerName: 'onLabelsPrecisionChanged', paramCount: 1 },
    { handlerName: 'onLabelsVisibleChanged', paramCount: 0 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 2 },
    { handlerName: 'onReleased', paramCount: 2 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'seriesChildren',
};

export function StackedBarSeries(): StackedBarSeriesBuilder {
  return createFluentBuilder(
    'StackedBarSeries',
    STACKEDBARSERIES_META,
  ) as unknown as StackedBarSeriesBuilder;
}

export namespace StackedBarSeries {
  export namespace LabelsPosition {
    export const LabelsCenter = createEnumToken(
      'StackedBarSeries',
      'LabelsPosition',
      'LabelsCenter',
    );
    export const LabelsInsideEnd = createEnumToken(
      'StackedBarSeries',
      'LabelsPosition',
      'LabelsInsideEnd',
    );
    export const LabelsInsideBase = createEnumToken(
      'StackedBarSeries',
      'LabelsPosition',
      'LabelsInsideBase',
    );
    export const LabelsOutsideEnd = createEnumToken(
      'StackedBarSeries',
      'LabelsPosition',
      'LabelsOutsideEnd',
    );
  }
  export namespace SeriesType {
    export const Line = createEnumToken('StackedBarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('StackedBarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('StackedBarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('StackedBarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('StackedBarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('StackedBarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('StackedBarSeries', 'SeriesType', 'Custom');
  }
}
