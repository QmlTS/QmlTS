// AUTO-GENERATED — DO NOT EDIT
// Type: BoxPlotSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface BoxPlotSeriesBuilder {
  id(id: string): BoxPlotSeriesBuilder;
  child(obj: QmlObjectBuilder): BoxPlotSeriesBuilder;

  axisX(value: QmlValue): BoxPlotSeriesBuilder;
  axisXBind(expr: string): BoxPlotSeriesBuilder;
  axisXTop(value: QmlValue): BoxPlotSeriesBuilder;
  axisXTopBind(expr: string): BoxPlotSeriesBuilder;
  axisY(value: QmlValue): BoxPlotSeriesBuilder;
  axisYBind(expr: string): BoxPlotSeriesBuilder;
  axisYRight(value: QmlValue): BoxPlotSeriesBuilder;
  axisYRightBind(expr: string): BoxPlotSeriesBuilder;
  boxOutlineVisible(value: boolean): BoxPlotSeriesBuilder;
  boxOutlineVisibleBind(expr: string): BoxPlotSeriesBuilder;
  boxWidth(value: number): BoxPlotSeriesBuilder;
  boxWidthBind(expr: string): BoxPlotSeriesBuilder;
  brush(value: QmlValue): BoxPlotSeriesBuilder;
  brushBind(expr: string): BoxPlotSeriesBuilder;
  brushFilename(value: string): BoxPlotSeriesBuilder;
  brushFilenameBind(expr: string): BoxPlotSeriesBuilder;
  hoverable(value: boolean): BoxPlotSeriesBuilder;
  hoverableBind(expr: string): BoxPlotSeriesBuilder;
  name(value: string): BoxPlotSeriesBuilder;
  nameBind(expr: string): BoxPlotSeriesBuilder;
  objectName(value: string): BoxPlotSeriesBuilder;
  objectNameBind(expr: string): BoxPlotSeriesBuilder;
  opacity(value: number): BoxPlotSeriesBuilder;
  opacityBind(expr: string): BoxPlotSeriesBuilder;
  pen(value: QmlValue): BoxPlotSeriesBuilder;
  penBind(expr: string): BoxPlotSeriesBuilder;
  selectable(value: boolean): BoxPlotSeriesBuilder;
  selectableBind(expr: string): BoxPlotSeriesBuilder;
  valuesMultiplier(value: number): BoxPlotSeriesBuilder;
  valuesMultiplierBind(expr: string): BoxPlotSeriesBuilder;
  visible(value: boolean): BoxPlotSeriesBuilder;
  visibleBind(expr: string): BoxPlotSeriesBuilder;
  zValue(value: number): BoxPlotSeriesBuilder;
  zValueBind(expr: string): BoxPlotSeriesBuilder;
  onAxisXChanged(body: string): BoxPlotSeriesBuilder;
  onAxisXTopChanged(body: string): BoxPlotSeriesBuilder;
  onAxisYChanged(body: string): BoxPlotSeriesBuilder;
  onAxisYRightChanged(body: string): BoxPlotSeriesBuilder;
  onBoxOutlineVisibilityChanged(body: string): BoxPlotSeriesBuilder;
  onBoxWidthChanged(body: string): BoxPlotSeriesBuilder;
  onBoxsetsAdded(body: string): BoxPlotSeriesBuilder;
  onBoxsetsRemoved(body: string): BoxPlotSeriesBuilder;
  onBrushChanged(body: string): BoxPlotSeriesBuilder;
  onBrushFilenameChanged(body: string): BoxPlotSeriesBuilder;
  onClicked(body: string): BoxPlotSeriesBuilder;
  onCountChanged(body: string): BoxPlotSeriesBuilder;
  onDoubleClicked(body: string): BoxPlotSeriesBuilder;
  onHover(body: string): BoxPlotSeriesBuilder;
  onHoverEnter(body: string): BoxPlotSeriesBuilder;
  onHoverExit(body: string): BoxPlotSeriesBuilder;
  onHoverableChanged(body: string): BoxPlotSeriesBuilder;
  onHovered(body: string): BoxPlotSeriesBuilder;
  onHoveredChanged(body: string): BoxPlotSeriesBuilder;
  onLegendDataChanged(body: string): BoxPlotSeriesBuilder;
  onNameChanged(body: string): BoxPlotSeriesBuilder;
  onObjectNameChanged(body: string): BoxPlotSeriesBuilder;
  onOpacityChanged(body: string): BoxPlotSeriesBuilder;
  onPenChanged(body: string): BoxPlotSeriesBuilder;
  onPressed(body: string): BoxPlotSeriesBuilder;
  onReleased(body: string): BoxPlotSeriesBuilder;
  onSelectableChanged(body: string): BoxPlotSeriesBuilder;
  onUpdate(body: string): BoxPlotSeriesBuilder;
  onValuesMultiplierChanged(body: string): BoxPlotSeriesBuilder;
  onVisibleChanged(body: string): BoxPlotSeriesBuilder;
  onZValueChanged(body: string): BoxPlotSeriesBuilder;
}

const BOXPLOTSERIES_META: TypeMetadata = {
  typeName: 'BoxPlotSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXTop', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYRight', hasValue: true, hasBinding: true },
    { name: 'boxOutlineVisible', hasValue: true, hasBinding: true },
    { name: 'boxWidth', hasValue: true, hasBinding: true },
    { name: 'brush', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'pen', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBoxOutlineVisibilityChanged', paramCount: 0 },
    { handlerName: 'onBoxWidthChanged', paramCount: 0 },
    { handlerName: 'onBoxsetsAdded', paramCount: 1 },
    { handlerName: 'onBoxsetsRemoved', paramCount: 1 },
    { handlerName: 'onBrushChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 2 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPenChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
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

export function BoxPlotSeries(): BoxPlotSeriesBuilder {
  return createFluentBuilder('BoxPlotSeries', BOXPLOTSERIES_META) as unknown as BoxPlotSeriesBuilder;
}

export namespace BoxPlotSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('BoxPlotSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('BoxPlotSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('BoxPlotSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('BoxPlotSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('BoxPlotSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('BoxPlotSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('BoxPlotSeries', 'SeriesType', 'Custom');
  }
}
