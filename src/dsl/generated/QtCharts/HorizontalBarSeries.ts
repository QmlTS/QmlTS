// AUTO-GENERATED — DO NOT EDIT
// Type: HorizontalBarSeries
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HorizontalBarSeriesBuilder {
  id(id: string): HorizontalBarSeriesBuilder;
  child(obj: QmlObjectBuilder): HorizontalBarSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): HorizontalBarSeriesBuilder;

  axisX(value: QmlValue): HorizontalBarSeriesBuilder;
  axisXBind(expr: string): HorizontalBarSeriesBuilder;
  axisXTop(value: QmlValue): HorizontalBarSeriesBuilder;
  axisXTopBind(expr: string): HorizontalBarSeriesBuilder;
  axisY(value: QmlValue): HorizontalBarSeriesBuilder;
  axisYBind(expr: string): HorizontalBarSeriesBuilder;
  axisYRight(value: QmlValue): HorizontalBarSeriesBuilder;
  axisYRightBind(expr: string): HorizontalBarSeriesBuilder;
  barWidth(value: number): HorizontalBarSeriesBuilder;
  barWidthBind(expr: string): HorizontalBarSeriesBuilder;
  hoverable(value: boolean): HorizontalBarSeriesBuilder;
  hoverableBind(expr: string): HorizontalBarSeriesBuilder;
  labelsAngle(value: number): HorizontalBarSeriesBuilder;
  labelsAngleBind(expr: string): HorizontalBarSeriesBuilder;
  labelsFormat(value: string): HorizontalBarSeriesBuilder;
  labelsFormatBind(expr: string): HorizontalBarSeriesBuilder;
  labelsPosition(value: QmlEnumToken): HorizontalBarSeriesBuilder;
  labelsPositionBind(expr: string): HorizontalBarSeriesBuilder;
  labelsPrecision(value: number): HorizontalBarSeriesBuilder;
  labelsPrecisionBind(expr: string): HorizontalBarSeriesBuilder;
  labelsVisible(value: boolean): HorizontalBarSeriesBuilder;
  labelsVisibleBind(expr: string): HorizontalBarSeriesBuilder;
  name(value: string): HorizontalBarSeriesBuilder;
  nameBind(expr: string): HorizontalBarSeriesBuilder;
  objectName(value: string): HorizontalBarSeriesBuilder;
  objectNameBind(expr: string): HorizontalBarSeriesBuilder;
  opacity(value: number): HorizontalBarSeriesBuilder;
  opacityBind(expr: string): HorizontalBarSeriesBuilder;
  selectable(value: boolean): HorizontalBarSeriesBuilder;
  selectableBind(expr: string): HorizontalBarSeriesBuilder;
  valuesMultiplier(value: number): HorizontalBarSeriesBuilder;
  valuesMultiplierBind(expr: string): HorizontalBarSeriesBuilder;
  visible(value: boolean): HorizontalBarSeriesBuilder;
  visibleBind(expr: string): HorizontalBarSeriesBuilder;
  zValue(value: number): HorizontalBarSeriesBuilder;
  zValueBind(expr: string): HorizontalBarSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onAxisXTopChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onAxisYRightChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onBarsetsAdded(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onBarsetsRemoved(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onClicked(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onCountChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHover(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHoverEnter(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHoverExit(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHoverableChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHovered(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLabelsAngleChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLabelsFormatChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLabelsPositionChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLabelsPrecisionChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLabelsVisibleChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onLegendDataChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onPressed(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onReleased(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onSelectableChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onUpdate(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onValuesMultiplierChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
  onZValueChanged(handler: DslSignalHandlerValue): HorizontalBarSeriesBuilder;
}

const HORIZONTALBARSERIES_META: TypeMetadata = {
  typeName: 'HorizontalBarSeries',
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

export function HorizontalBarSeries(): HorizontalBarSeriesBuilder {
  return createFluentBuilder(
    'HorizontalBarSeries',
    HORIZONTALBARSERIES_META,
  ) as unknown as HorizontalBarSeriesBuilder;
}

export namespace HorizontalBarSeries {
  export namespace LabelsPosition {
    export const LabelsCenter = createEnumToken(
      'HorizontalBarSeries',
      'LabelsPosition',
      'LabelsCenter',
    );
    export const LabelsInsideEnd = createEnumToken(
      'HorizontalBarSeries',
      'LabelsPosition',
      'LabelsInsideEnd',
    );
    export const LabelsInsideBase = createEnumToken(
      'HorizontalBarSeries',
      'LabelsPosition',
      'LabelsInsideBase',
    );
    export const LabelsOutsideEnd = createEnumToken(
      'HorizontalBarSeries',
      'LabelsPosition',
      'LabelsOutsideEnd',
    );
  }
  export namespace SeriesType {
    export const Line = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('HorizontalBarSeries', 'SeriesType', 'Custom');
  }
}
