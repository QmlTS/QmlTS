// AUTO-GENERATED — DO NOT EDIT
// Type: HorizontalPercentBarSeries
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HorizontalPercentBarSeriesBuilder {
  id(id: string): HorizontalPercentBarSeriesBuilder;
  child(obj: QmlObjectBuilder): HorizontalPercentBarSeriesBuilder;

  axisX(value: QmlValue): HorizontalPercentBarSeriesBuilder;
  axisXBind(expr: string): HorizontalPercentBarSeriesBuilder;
  axisXTop(value: QmlValue): HorizontalPercentBarSeriesBuilder;
  axisXTopBind(expr: string): HorizontalPercentBarSeriesBuilder;
  axisY(value: QmlValue): HorizontalPercentBarSeriesBuilder;
  axisYBind(expr: string): HorizontalPercentBarSeriesBuilder;
  axisYRight(value: QmlValue): HorizontalPercentBarSeriesBuilder;
  axisYRightBind(expr: string): HorizontalPercentBarSeriesBuilder;
  barWidth(value: number): HorizontalPercentBarSeriesBuilder;
  barWidthBind(expr: string): HorizontalPercentBarSeriesBuilder;
  hoverable(value: boolean): HorizontalPercentBarSeriesBuilder;
  hoverableBind(expr: string): HorizontalPercentBarSeriesBuilder;
  labelsAngle(value: number): HorizontalPercentBarSeriesBuilder;
  labelsAngleBind(expr: string): HorizontalPercentBarSeriesBuilder;
  labelsFormat(value: string): HorizontalPercentBarSeriesBuilder;
  labelsFormatBind(expr: string): HorizontalPercentBarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): HorizontalPercentBarSeriesBuilder;
  labelsPositionBind(expr: string): HorizontalPercentBarSeriesBuilder;
  labelsPrecision(value: number): HorizontalPercentBarSeriesBuilder;
  labelsPrecisionBind(expr: string): HorizontalPercentBarSeriesBuilder;
  labelsVisible(value: boolean): HorizontalPercentBarSeriesBuilder;
  labelsVisibleBind(expr: string): HorizontalPercentBarSeriesBuilder;
  name(value: string): HorizontalPercentBarSeriesBuilder;
  nameBind(expr: string): HorizontalPercentBarSeriesBuilder;
  objectName(value: string): HorizontalPercentBarSeriesBuilder;
  objectNameBind(expr: string): HorizontalPercentBarSeriesBuilder;
  opacity(value: number): HorizontalPercentBarSeriesBuilder;
  opacityBind(expr: string): HorizontalPercentBarSeriesBuilder;
  selectable(value: boolean): HorizontalPercentBarSeriesBuilder;
  selectableBind(expr: string): HorizontalPercentBarSeriesBuilder;
  valuesMultiplier(value: number): HorizontalPercentBarSeriesBuilder;
  valuesMultiplierBind(expr: string): HorizontalPercentBarSeriesBuilder;
  visible(value: boolean): HorizontalPercentBarSeriesBuilder;
  visibleBind(expr: string): HorizontalPercentBarSeriesBuilder;
  zValue(value: number): HorizontalPercentBarSeriesBuilder;
  zValueBind(expr: string): HorizontalPercentBarSeriesBuilder;
  onAxisXChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onAxisXTopChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onAxisYChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onAxisYRightChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onBarsetsAdded(body: string): HorizontalPercentBarSeriesBuilder;
  onBarsetsRemoved(body: string): HorizontalPercentBarSeriesBuilder;
  onClicked(body: string): HorizontalPercentBarSeriesBuilder;
  onCountChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onDoubleClicked(body: string): HorizontalPercentBarSeriesBuilder;
  onHover(body: string): HorizontalPercentBarSeriesBuilder;
  onHoverEnter(body: string): HorizontalPercentBarSeriesBuilder;
  onHoverExit(body: string): HorizontalPercentBarSeriesBuilder;
  onHoverableChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onHovered(body: string): HorizontalPercentBarSeriesBuilder;
  onHoveredChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLabelsAngleChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLabelsFormatChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLabelsPositionChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLabelsPrecisionChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLabelsVisibleChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onLegendDataChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onNameChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onObjectNameChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onOpacityChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onPressed(body: string): HorizontalPercentBarSeriesBuilder;
  onReleased(body: string): HorizontalPercentBarSeriesBuilder;
  onSelectableChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onUpdate(body: string): HorizontalPercentBarSeriesBuilder;
  onValuesMultiplierChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onVisibleChanged(body: string): HorizontalPercentBarSeriesBuilder;
  onZValueChanged(body: string): HorizontalPercentBarSeriesBuilder;
}

const HORIZONTALPERCENTBARSERIES_META: TypeMetadata = {
  typeName: 'HorizontalPercentBarSeries',
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

export function HorizontalPercentBarSeries(): HorizontalPercentBarSeriesBuilder {
  return createFluentBuilder(
    'HorizontalPercentBarSeries',
    HORIZONTALPERCENTBARSERIES_META,
  ) as unknown as HorizontalPercentBarSeriesBuilder;
}

export namespace HorizontalPercentBarSeries {
  export namespace LabelsPosition {
    export const LabelsCenter = createEnumToken(
      'HorizontalPercentBarSeries',
      'LabelsPosition',
      'LabelsCenter',
    );
    export const LabelsInsideEnd = createEnumToken(
      'HorizontalPercentBarSeries',
      'LabelsPosition',
      'LabelsInsideEnd',
    );
    export const LabelsInsideBase = createEnumToken(
      'HorizontalPercentBarSeries',
      'LabelsPosition',
      'LabelsInsideBase',
    );
    export const LabelsOutsideEnd = createEnumToken(
      'HorizontalPercentBarSeries',
      'LabelsPosition',
      'LabelsOutsideEnd',
    );
  }
  export namespace SeriesType {
    export const Line = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('HorizontalPercentBarSeries', 'SeriesType', 'Custom');
  }
}
