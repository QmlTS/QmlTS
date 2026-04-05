// AUTO-GENERATED — DO NOT EDIT
// Type: PieSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface PieSeriesBuilder {
  id(id: string): PieSeriesBuilder;
  child(obj: QmlObjectBuilder): PieSeriesBuilder;

  angleSpanLabelVisibility(value: QmlEnumToken): PieSeriesBuilder;
  angleSpanLabelVisibilityBind(expr: string): PieSeriesBuilder;
  angleSpanVisibleLimit(value: number): PieSeriesBuilder;
  angleSpanVisibleLimitBind(expr: string): PieSeriesBuilder;
  axisX(value: QmlValue): PieSeriesBuilder;
  axisXBind(expr: string): PieSeriesBuilder;
  axisY(value: QmlValue): PieSeriesBuilder;
  axisYBind(expr: string): PieSeriesBuilder;
  endAngle(value: number): PieSeriesBuilder;
  endAngleBind(expr: string): PieSeriesBuilder;
  holeSize(value: number): PieSeriesBuilder;
  holeSizeBind(expr: string): PieSeriesBuilder;
  horizontalPosition(value: number): PieSeriesBuilder;
  horizontalPositionBind(expr: string): PieSeriesBuilder;
  hoverable(value: boolean): PieSeriesBuilder;
  hoverableBind(expr: string): PieSeriesBuilder;
  name(value: string): PieSeriesBuilder;
  nameBind(expr: string): PieSeriesBuilder;
  objectName(value: string): PieSeriesBuilder;
  objectNameBind(expr: string): PieSeriesBuilder;
  opacity(value: number): PieSeriesBuilder;
  opacityBind(expr: string): PieSeriesBuilder;
  pieSize(value: number): PieSeriesBuilder;
  pieSizeBind(expr: string): PieSeriesBuilder;
  selectable(value: boolean): PieSeriesBuilder;
  selectableBind(expr: string): PieSeriesBuilder;
  startAngle(value: number): PieSeriesBuilder;
  startAngleBind(expr: string): PieSeriesBuilder;
  valuesMultiplier(value: number): PieSeriesBuilder;
  valuesMultiplierBind(expr: string): PieSeriesBuilder;
  verticalPosition(value: number): PieSeriesBuilder;
  verticalPositionBind(expr: string): PieSeriesBuilder;
  visible(value: boolean): PieSeriesBuilder;
  visibleBind(expr: string): PieSeriesBuilder;
  zValue(value: number): PieSeriesBuilder;
  zValueBind(expr: string): PieSeriesBuilder;
  onAdded(body: string): PieSeriesBuilder;
  onAngleSpanLabelVisibilityChanged(body: string): PieSeriesBuilder;
  onAngleSpanVisibleLimitChanged(body: string): PieSeriesBuilder;
  onAxisXChanged(body: string): PieSeriesBuilder;
  onAxisYChanged(body: string): PieSeriesBuilder;
  onClicked(body: string): PieSeriesBuilder;
  onCountChanged(body: string): PieSeriesBuilder;
  onDoubleClicked(body: string): PieSeriesBuilder;
  onEndAngleChanged(body: string): PieSeriesBuilder;
  onHoleSizeChanged(body: string): PieSeriesBuilder;
  onHorizontalPositionChanged(body: string): PieSeriesBuilder;
  onHover(body: string): PieSeriesBuilder;
  onHoverEnter(body: string): PieSeriesBuilder;
  onHoverExit(body: string): PieSeriesBuilder;
  onHoverableChanged(body: string): PieSeriesBuilder;
  onHoveredChanged(body: string): PieSeriesBuilder;
  onLegendDataChanged(body: string): PieSeriesBuilder;
  onNameChanged(body: string): PieSeriesBuilder;
  onObjectNameChanged(body: string): PieSeriesBuilder;
  onOpacityChanged(body: string): PieSeriesBuilder;
  onPieSizeChanged(body: string): PieSeriesBuilder;
  onPressed(body: string): PieSeriesBuilder;
  onReleased(body: string): PieSeriesBuilder;
  onRemoved(body: string): PieSeriesBuilder;
  onReplaced(body: string): PieSeriesBuilder;
  onSelectableChanged(body: string): PieSeriesBuilder;
  onStartAngleChanged(body: string): PieSeriesBuilder;
  onSumChanged(body: string): PieSeriesBuilder;
  onUpdate(body: string): PieSeriesBuilder;
  onValuesMultiplierChanged(body: string): PieSeriesBuilder;
  onVerticalPositionChanged(body: string): PieSeriesBuilder;
  onVisibleChanged(body: string): PieSeriesBuilder;
  onZValueChanged(body: string): PieSeriesBuilder;
}

const PIESERIES_META: TypeMetadata = {
  typeName: 'PieSeries',
  properties: [
    { name: 'angleSpanLabelVisibility', hasValue: true, hasBinding: true },
    { name: 'angleSpanVisibleLimit', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'endAngle', hasValue: true, hasBinding: true },
    { name: 'holeSize', hasValue: true, hasBinding: true },
    { name: 'horizontalPosition', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'pieSize', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'startAngle', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'verticalPosition', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAdded', paramCount: 1 },
    { handlerName: 'onAngleSpanLabelVisibilityChanged', paramCount: 1 },
    { handlerName: 'onAngleSpanVisibleLimitChanged', paramCount: 1 },
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onEndAngleChanged', paramCount: 0 },
    { handlerName: 'onHoleSizeChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPositionChanged', paramCount: 0 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPieSizeChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRemoved', paramCount: 1 },
    { handlerName: 'onReplaced', paramCount: 1 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onStartAngleChanged', paramCount: 0 },
    { handlerName: 'onSumChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVerticalPositionChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'seriesChildren',
};

export function PieSeries(): PieSeriesBuilder {
  return createFluentBuilder('PieSeries', PIESERIES_META) as unknown as PieSeriesBuilder;
}

export namespace PieSeries {
  export namespace LabelVisibility {
    export const None = createEnumToken('PieSeries', 'LabelVisibility', 'None');
    export const First = createEnumToken('PieSeries', 'LabelVisibility', 'First');
    export const Even = createEnumToken('PieSeries', 'LabelVisibility', 'Even');
    export const Odd = createEnumToken('PieSeries', 'LabelVisibility', 'Odd');
  }
  export namespace SeriesType {
    export const Line = createEnumToken('PieSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('PieSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('PieSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('PieSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('PieSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('PieSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('PieSeries', 'SeriesType', 'Custom');
  }
}
