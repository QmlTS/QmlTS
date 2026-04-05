// AUTO-GENERATED — DO NOT EDIT
// Type: PercentBarSeries
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PercentBarSeriesBuilder {
  id(id: string): PercentBarSeriesBuilder;
  child(obj: QmlObjectBuilder): PercentBarSeriesBuilder;

  axisX(value: QmlValue): PercentBarSeriesBuilder;
  axisXBind(expr: string): PercentBarSeriesBuilder;
  axisXTop(value: QmlValue): PercentBarSeriesBuilder;
  axisXTopBind(expr: string): PercentBarSeriesBuilder;
  axisY(value: QmlValue): PercentBarSeriesBuilder;
  axisYBind(expr: string): PercentBarSeriesBuilder;
  axisYRight(value: QmlValue): PercentBarSeriesBuilder;
  axisYRightBind(expr: string): PercentBarSeriesBuilder;
  barWidth(value: number): PercentBarSeriesBuilder;
  barWidthBind(expr: string): PercentBarSeriesBuilder;
  hoverable(value: boolean): PercentBarSeriesBuilder;
  hoverableBind(expr: string): PercentBarSeriesBuilder;
  labelsAngle(value: number): PercentBarSeriesBuilder;
  labelsAngleBind(expr: string): PercentBarSeriesBuilder;
  labelsFormat(value: string): PercentBarSeriesBuilder;
  labelsFormatBind(expr: string): PercentBarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): PercentBarSeriesBuilder;
  labelsPositionBind(expr: string): PercentBarSeriesBuilder;
  labelsPrecision(value: number): PercentBarSeriesBuilder;
  labelsPrecisionBind(expr: string): PercentBarSeriesBuilder;
  labelsVisible(value: boolean): PercentBarSeriesBuilder;
  labelsVisibleBind(expr: string): PercentBarSeriesBuilder;
  name(value: string): PercentBarSeriesBuilder;
  nameBind(expr: string): PercentBarSeriesBuilder;
  objectName(value: string): PercentBarSeriesBuilder;
  objectNameBind(expr: string): PercentBarSeriesBuilder;
  opacity(value: number): PercentBarSeriesBuilder;
  opacityBind(expr: string): PercentBarSeriesBuilder;
  selectable(value: boolean): PercentBarSeriesBuilder;
  selectableBind(expr: string): PercentBarSeriesBuilder;
  valuesMultiplier(value: number): PercentBarSeriesBuilder;
  valuesMultiplierBind(expr: string): PercentBarSeriesBuilder;
  visible(value: boolean): PercentBarSeriesBuilder;
  visibleBind(expr: string): PercentBarSeriesBuilder;
  zValue(value: number): PercentBarSeriesBuilder;
  zValueBind(expr: string): PercentBarSeriesBuilder;
  onAxisXChanged(body: string): PercentBarSeriesBuilder;
  onAxisXTopChanged(body: string): PercentBarSeriesBuilder;
  onAxisYChanged(body: string): PercentBarSeriesBuilder;
  onAxisYRightChanged(body: string): PercentBarSeriesBuilder;
  onBarsetsAdded(body: string): PercentBarSeriesBuilder;
  onBarsetsRemoved(body: string): PercentBarSeriesBuilder;
  onClicked(body: string): PercentBarSeriesBuilder;
  onCountChanged(body: string): PercentBarSeriesBuilder;
  onDoubleClicked(body: string): PercentBarSeriesBuilder;
  onHover(body: string): PercentBarSeriesBuilder;
  onHoverEnter(body: string): PercentBarSeriesBuilder;
  onHoverExit(body: string): PercentBarSeriesBuilder;
  onHoverableChanged(body: string): PercentBarSeriesBuilder;
  onHovered(body: string): PercentBarSeriesBuilder;
  onHoveredChanged(body: string): PercentBarSeriesBuilder;
  onLabelsAngleChanged(body: string): PercentBarSeriesBuilder;
  onLabelsFormatChanged(body: string): PercentBarSeriesBuilder;
  onLabelsPositionChanged(body: string): PercentBarSeriesBuilder;
  onLabelsPrecisionChanged(body: string): PercentBarSeriesBuilder;
  onLabelsVisibleChanged(body: string): PercentBarSeriesBuilder;
  onLegendDataChanged(body: string): PercentBarSeriesBuilder;
  onNameChanged(body: string): PercentBarSeriesBuilder;
  onObjectNameChanged(body: string): PercentBarSeriesBuilder;
  onOpacityChanged(body: string): PercentBarSeriesBuilder;
  onPressed(body: string): PercentBarSeriesBuilder;
  onReleased(body: string): PercentBarSeriesBuilder;
  onSelectableChanged(body: string): PercentBarSeriesBuilder;
  onUpdate(body: string): PercentBarSeriesBuilder;
  onValuesMultiplierChanged(body: string): PercentBarSeriesBuilder;
  onVisibleChanged(body: string): PercentBarSeriesBuilder;
  onZValueChanged(body: string): PercentBarSeriesBuilder;
}

const PERCENTBARSERIES_META: TypeMetadata = {
  typeName: 'PercentBarSeries',
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

export function PercentBarSeries(): PercentBarSeriesBuilder {
  return createFluentBuilder(
    'PercentBarSeries',
    PERCENTBARSERIES_META,
  ) as unknown as PercentBarSeriesBuilder;
}

export namespace PercentBarSeries {
  export namespace LabelsPosition {
    export const LabelsCenter = createEnumToken(
      'PercentBarSeries',
      'LabelsPosition',
      'LabelsCenter',
    );
    export const LabelsInsideEnd = createEnumToken(
      'PercentBarSeries',
      'LabelsPosition',
      'LabelsInsideEnd',
    );
    export const LabelsInsideBase = createEnumToken(
      'PercentBarSeries',
      'LabelsPosition',
      'LabelsInsideBase',
    );
    export const LabelsOutsideEnd = createEnumToken(
      'PercentBarSeries',
      'LabelsPosition',
      'LabelsOutsideEnd',
    );
  }
  export namespace SeriesType {
    export const Line = createEnumToken('PercentBarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('PercentBarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('PercentBarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('PercentBarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('PercentBarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('PercentBarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('PercentBarSeries', 'SeriesType', 'Custom');
  }
}
