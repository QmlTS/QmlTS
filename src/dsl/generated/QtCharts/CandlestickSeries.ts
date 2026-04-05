// AUTO-GENERATED — DO NOT EDIT
// Type: CandlestickSeries
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CandlestickSeriesBuilder {
  id(id: string): CandlestickSeriesBuilder;
  child(obj: QmlObjectBuilder): CandlestickSeriesBuilder;

  axisX(value: QmlValue): CandlestickSeriesBuilder;
  axisXBind(expr: string): CandlestickSeriesBuilder;
  axisXTop(value: QmlValue): CandlestickSeriesBuilder;
  axisXTopBind(expr: string): CandlestickSeriesBuilder;
  axisY(value: QmlValue): CandlestickSeriesBuilder;
  axisYBind(expr: string): CandlestickSeriesBuilder;
  axisYRight(value: QmlValue): CandlestickSeriesBuilder;
  axisYRightBind(expr: string): CandlestickSeriesBuilder;
  bodyOutlineVisible(value: boolean): CandlestickSeriesBuilder;
  bodyOutlineVisibleBind(expr: string): CandlestickSeriesBuilder;
  bodyWidth(value: number): CandlestickSeriesBuilder;
  bodyWidthBind(expr: string): CandlestickSeriesBuilder;
  brush(value: QmlValue): CandlestickSeriesBuilder;
  brushBind(expr: string): CandlestickSeriesBuilder;
  brushFilename(value: string): CandlestickSeriesBuilder;
  brushFilenameBind(expr: string): CandlestickSeriesBuilder;
  capsVisible(value: boolean): CandlestickSeriesBuilder;
  capsVisibleBind(expr: string): CandlestickSeriesBuilder;
  capsWidth(value: number): CandlestickSeriesBuilder;
  capsWidthBind(expr: string): CandlestickSeriesBuilder;
  decreasingColor(value: QmlColor): CandlestickSeriesBuilder;
  decreasingColorBind(expr: string): CandlestickSeriesBuilder;
  hoverable(value: boolean): CandlestickSeriesBuilder;
  hoverableBind(expr: string): CandlestickSeriesBuilder;
  increasingColor(value: QmlColor): CandlestickSeriesBuilder;
  increasingColorBind(expr: string): CandlestickSeriesBuilder;
  maximumColumnWidth(value: number): CandlestickSeriesBuilder;
  maximumColumnWidthBind(expr: string): CandlestickSeriesBuilder;
  minimumColumnWidth(value: number): CandlestickSeriesBuilder;
  minimumColumnWidthBind(expr: string): CandlestickSeriesBuilder;
  name(value: string): CandlestickSeriesBuilder;
  nameBind(expr: string): CandlestickSeriesBuilder;
  objectName(value: string): CandlestickSeriesBuilder;
  objectNameBind(expr: string): CandlestickSeriesBuilder;
  opacity(value: number): CandlestickSeriesBuilder;
  opacityBind(expr: string): CandlestickSeriesBuilder;
  pen(value: QmlValue): CandlestickSeriesBuilder;
  penBind(expr: string): CandlestickSeriesBuilder;
  selectable(value: boolean): CandlestickSeriesBuilder;
  selectableBind(expr: string): CandlestickSeriesBuilder;
  valuesMultiplier(value: number): CandlestickSeriesBuilder;
  valuesMultiplierBind(expr: string): CandlestickSeriesBuilder;
  visible(value: boolean): CandlestickSeriesBuilder;
  visibleBind(expr: string): CandlestickSeriesBuilder;
  zValue(value: number): CandlestickSeriesBuilder;
  zValueBind(expr: string): CandlestickSeriesBuilder;
  onAxisXChanged(body: string): CandlestickSeriesBuilder;
  onAxisXTopChanged(body: string): CandlestickSeriesBuilder;
  onAxisYChanged(body: string): CandlestickSeriesBuilder;
  onAxisYRightChanged(body: string): CandlestickSeriesBuilder;
  onBodyOutlineVisibilityChanged(body: string): CandlestickSeriesBuilder;
  onBodyWidthChanged(body: string): CandlestickSeriesBuilder;
  onBrushChanged(body: string): CandlestickSeriesBuilder;
  onBrushFilenameChanged(body: string): CandlestickSeriesBuilder;
  onCandlestickSetsAdded(body: string): CandlestickSeriesBuilder;
  onCandlestickSetsRemoved(body: string): CandlestickSeriesBuilder;
  onCapsVisibilityChanged(body: string): CandlestickSeriesBuilder;
  onCapsWidthChanged(body: string): CandlestickSeriesBuilder;
  onClicked(body: string): CandlestickSeriesBuilder;
  onCountChanged(body: string): CandlestickSeriesBuilder;
  onDecreasingColorChanged(body: string): CandlestickSeriesBuilder;
  onDoubleClicked(body: string): CandlestickSeriesBuilder;
  onHover(body: string): CandlestickSeriesBuilder;
  onHoverEnter(body: string): CandlestickSeriesBuilder;
  onHoverExit(body: string): CandlestickSeriesBuilder;
  onHoverableChanged(body: string): CandlestickSeriesBuilder;
  onHovered(body: string): CandlestickSeriesBuilder;
  onHoveredChanged(body: string): CandlestickSeriesBuilder;
  onIncreasingColorChanged(body: string): CandlestickSeriesBuilder;
  onLegendDataChanged(body: string): CandlestickSeriesBuilder;
  onMaximumColumnWidthChanged(body: string): CandlestickSeriesBuilder;
  onMinimumColumnWidthChanged(body: string): CandlestickSeriesBuilder;
  onNameChanged(body: string): CandlestickSeriesBuilder;
  onObjectNameChanged(body: string): CandlestickSeriesBuilder;
  onOpacityChanged(body: string): CandlestickSeriesBuilder;
  onPenChanged(body: string): CandlestickSeriesBuilder;
  onPressed(body: string): CandlestickSeriesBuilder;
  onReleased(body: string): CandlestickSeriesBuilder;
  onSelectableChanged(body: string): CandlestickSeriesBuilder;
  onUpdate(body: string): CandlestickSeriesBuilder;
  onValuesMultiplierChanged(body: string): CandlestickSeriesBuilder;
  onVisibleChanged(body: string): CandlestickSeriesBuilder;
  onZValueChanged(body: string): CandlestickSeriesBuilder;
}

const CANDLESTICKSERIES_META: TypeMetadata = {
  typeName: 'CandlestickSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXTop', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYRight', hasValue: true, hasBinding: true },
    { name: 'bodyOutlineVisible', hasValue: true, hasBinding: true },
    { name: 'bodyWidth', hasValue: true, hasBinding: true },
    { name: 'brush', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'capsVisible', hasValue: true, hasBinding: true },
    { name: 'capsWidth', hasValue: true, hasBinding: true },
    { name: 'decreasingColor', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'increasingColor', hasValue: true, hasBinding: true },
    { name: 'maximumColumnWidth', hasValue: true, hasBinding: true },
    { name: 'minimumColumnWidth', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBodyOutlineVisibilityChanged', paramCount: 0 },
    { handlerName: 'onBodyWidthChanged', paramCount: 0 },
    { handlerName: 'onBrushChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onCandlestickSetsAdded', paramCount: 1 },
    { handlerName: 'onCandlestickSetsRemoved', paramCount: 1 },
    { handlerName: 'onCapsVisibilityChanged', paramCount: 0 },
    { handlerName: 'onCapsWidthChanged', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onDecreasingColorChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 2 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onIncreasingColorChanged', paramCount: 0 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onMaximumColumnWidthChanged', paramCount: 0 },
    { handlerName: 'onMinimumColumnWidthChanged', paramCount: 0 },
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
  grouped: [],
  attached: [],
  defaultProperty: 'seriesChildren',
};

export function CandlestickSeries(): CandlestickSeriesBuilder {
  return createFluentBuilder(
    'CandlestickSeries',
    CANDLESTICKSERIES_META,
  ) as unknown as CandlestickSeriesBuilder;
}

export namespace CandlestickSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('CandlestickSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('CandlestickSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('CandlestickSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('CandlestickSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('CandlestickSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('CandlestickSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('CandlestickSeries', 'SeriesType', 'Custom');
  }
}
