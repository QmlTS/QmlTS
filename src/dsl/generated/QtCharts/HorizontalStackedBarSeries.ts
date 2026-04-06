// AUTO-GENERATED — DO NOT EDIT
// Type: HorizontalStackedBarSeries
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HorizontalStackedBarSeriesBuilder {
  id(id: string): HorizontalStackedBarSeriesBuilder;
  child(obj: QmlObjectBuilder): HorizontalStackedBarSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): HorizontalStackedBarSeriesBuilder;

  axisX(value: QmlValue): HorizontalStackedBarSeriesBuilder;
  axisXBind(expr: string): HorizontalStackedBarSeriesBuilder;
  axisXTop(value: QmlValue): HorizontalStackedBarSeriesBuilder;
  axisXTopBind(expr: string): HorizontalStackedBarSeriesBuilder;
  axisY(value: QmlValue): HorizontalStackedBarSeriesBuilder;
  axisYBind(expr: string): HorizontalStackedBarSeriesBuilder;
  axisYRight(value: QmlValue): HorizontalStackedBarSeriesBuilder;
  axisYRightBind(expr: string): HorizontalStackedBarSeriesBuilder;
  barWidth(value: number): HorizontalStackedBarSeriesBuilder;
  barWidthBind(expr: string): HorizontalStackedBarSeriesBuilder;
  hoverable(value: boolean): HorizontalStackedBarSeriesBuilder;
  hoverableBind(expr: string): HorizontalStackedBarSeriesBuilder;
  labelsAngle(value: number): HorizontalStackedBarSeriesBuilder;
  labelsAngleBind(expr: string): HorizontalStackedBarSeriesBuilder;
  labelsFormat(value: string): HorizontalStackedBarSeriesBuilder;
  labelsFormatBind(expr: string): HorizontalStackedBarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): HorizontalStackedBarSeriesBuilder;
  labelsPositionBind(expr: string): HorizontalStackedBarSeriesBuilder;
  labelsPrecision(value: number): HorizontalStackedBarSeriesBuilder;
  labelsPrecisionBind(expr: string): HorizontalStackedBarSeriesBuilder;
  labelsVisible(value: boolean): HorizontalStackedBarSeriesBuilder;
  labelsVisibleBind(expr: string): HorizontalStackedBarSeriesBuilder;
  name(value: string): HorizontalStackedBarSeriesBuilder;
  nameBind(expr: string): HorizontalStackedBarSeriesBuilder;
  objectName(value: string): HorizontalStackedBarSeriesBuilder;
  objectNameBind(expr: string): HorizontalStackedBarSeriesBuilder;
  opacity(value: number): HorizontalStackedBarSeriesBuilder;
  opacityBind(expr: string): HorizontalStackedBarSeriesBuilder;
  selectable(value: boolean): HorizontalStackedBarSeriesBuilder;
  selectableBind(expr: string): HorizontalStackedBarSeriesBuilder;
  valuesMultiplier(value: number): HorizontalStackedBarSeriesBuilder;
  valuesMultiplierBind(expr: string): HorizontalStackedBarSeriesBuilder;
  visible(value: boolean): HorizontalStackedBarSeriesBuilder;
  visibleBind(expr: string): HorizontalStackedBarSeriesBuilder;
  zValue(value: number): HorizontalStackedBarSeriesBuilder;
  zValueBind(expr: string): HorizontalStackedBarSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onAxisXTopChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onAxisYRightChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onBarsetsAdded(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onBarsetsRemoved(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onClicked(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onCountChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHover(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHoverEnter(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHoverExit(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHoverableChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHovered(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLabelsAngleChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLabelsFormatChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLabelsPositionChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLabelsPrecisionChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLabelsVisibleChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onLegendDataChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onPressed(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onReleased(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onSelectableChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onUpdate(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onValuesMultiplierChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
  onZValueChanged(handler: DslSignalHandlerValue): HorizontalStackedBarSeriesBuilder;
}

const HORIZONTALSTACKEDBARSERIES_META: TypeMetadata = {
  typeName: 'HorizontalStackedBarSeries',
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

export function HorizontalStackedBarSeries(): HorizontalStackedBarSeriesBuilder {
  return createFluentBuilder(
    'HorizontalStackedBarSeries',
    HORIZONTALSTACKEDBARSERIES_META,
  ) as unknown as HorizontalStackedBarSeriesBuilder;
}

export namespace HorizontalStackedBarSeries {
  export namespace LabelsPosition {
    export const LabelsCenter = createEnumToken(
      'HorizontalStackedBarSeries',
      'LabelsPosition',
      'LabelsCenter',
    );
    export const LabelsInsideEnd = createEnumToken(
      'HorizontalStackedBarSeries',
      'LabelsPosition',
      'LabelsInsideEnd',
    );
    export const LabelsInsideBase = createEnumToken(
      'HorizontalStackedBarSeries',
      'LabelsPosition',
      'LabelsInsideBase',
    );
    export const LabelsOutsideEnd = createEnumToken(
      'HorizontalStackedBarSeries',
      'LabelsPosition',
      'LabelsOutsideEnd',
    );
  }
  export namespace SeriesType {
    export const Line = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('HorizontalStackedBarSeries', 'SeriesType', 'Custom');
  }
}
