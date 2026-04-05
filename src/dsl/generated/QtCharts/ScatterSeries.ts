// AUTO-GENERATED — DO NOT EDIT
// Type: ScatterSeries
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ScatterSeriesBuilder {
  id(id: string): ScatterSeriesBuilder;
  child(obj: QmlObjectBuilder): ScatterSeriesBuilder;

  axisAngular(value: QmlValue): ScatterSeriesBuilder;
  axisAngularBind(expr: string): ScatterSeriesBuilder;
  axisRadial(value: QmlValue): ScatterSeriesBuilder;
  axisRadialBind(expr: string): ScatterSeriesBuilder;
  axisX(value: QmlValue): ScatterSeriesBuilder;
  axisXBind(expr: string): ScatterSeriesBuilder;
  axisXTop(value: QmlValue): ScatterSeriesBuilder;
  axisXTopBind(expr: string): ScatterSeriesBuilder;
  axisY(value: QmlValue): ScatterSeriesBuilder;
  axisYBind(expr: string): ScatterSeriesBuilder;
  axisYRight(value: QmlValue): ScatterSeriesBuilder;
  axisYRightBind(expr: string): ScatterSeriesBuilder;
  borderWidth(value: number): ScatterSeriesBuilder;
  borderWidthBind(expr: string): ScatterSeriesBuilder;
  brush(value: QmlValue): ScatterSeriesBuilder;
  brushBind(expr: string): ScatterSeriesBuilder;
  brushFilename(value: string): ScatterSeriesBuilder;
  brushFilenameBind(expr: string): ScatterSeriesBuilder;
  color(value: QmlColor): ScatterSeriesBuilder;
  colorBind(expr: string): ScatterSeriesBuilder;
  draggable(value: boolean): ScatterSeriesBuilder;
  draggableBind(expr: string): ScatterSeriesBuilder;
  hoverable(value: boolean): ScatterSeriesBuilder;
  hoverableBind(expr: string): ScatterSeriesBuilder;
  name(value: string): ScatterSeriesBuilder;
  nameBind(expr: string): ScatterSeriesBuilder;
  objectName(value: string): ScatterSeriesBuilder;
  objectNameBind(expr: string): ScatterSeriesBuilder;
  opacity(value: number): ScatterSeriesBuilder;
  opacityBind(expr: string): ScatterSeriesBuilder;
  pointDelegate(value: QmlComponent): ScatterSeriesBuilder;
  pointDelegateBind(expr: string): ScatterSeriesBuilder;
  selectable(value: boolean): ScatterSeriesBuilder;
  selectableBind(expr: string): ScatterSeriesBuilder;
  selectedColor(value: QmlColor): ScatterSeriesBuilder;
  selectedColorBind(expr: string): ScatterSeriesBuilder;
  valuesMultiplier(value: number): ScatterSeriesBuilder;
  valuesMultiplierBind(expr: string): ScatterSeriesBuilder;
  visible(value: boolean): ScatterSeriesBuilder;
  visibleBind(expr: string): ScatterSeriesBuilder;
  zValue(value: number): ScatterSeriesBuilder;
  zValueBind(expr: string): ScatterSeriesBuilder;
  onAxisAngularChanged(body: string): ScatterSeriesBuilder;
  onAxisRadialChanged(body: string): ScatterSeriesBuilder;
  onAxisXChanged(body: string): ScatterSeriesBuilder;
  onAxisXTopChanged(body: string): ScatterSeriesBuilder;
  onAxisYChanged(body: string): ScatterSeriesBuilder;
  onAxisYRightChanged(body: string): ScatterSeriesBuilder;
  onBorderWidthChanged(body: string): ScatterSeriesBuilder;
  onBrushChanged(body: string): ScatterSeriesBuilder;
  onBrushFilenameChanged(body: string): ScatterSeriesBuilder;
  onClicked(body: string): ScatterSeriesBuilder;
  onColorChanged(body: string): ScatterSeriesBuilder;
  onCountChanged(body: string): ScatterSeriesBuilder;
  onDoubleClicked(body: string): ScatterSeriesBuilder;
  onDraggableChanged(body: string): ScatterSeriesBuilder;
  onHover(body: string): ScatterSeriesBuilder;
  onHoverEnter(body: string): ScatterSeriesBuilder;
  onHoverExit(body: string): ScatterSeriesBuilder;
  onHoverableChanged(body: string): ScatterSeriesBuilder;
  onHoveredChanged(body: string): ScatterSeriesBuilder;
  onLegendDataChanged(body: string): ScatterSeriesBuilder;
  onNameChanged(body: string): ScatterSeriesBuilder;
  onObjectNameChanged(body: string): ScatterSeriesBuilder;
  onOpacityChanged(body: string): ScatterSeriesBuilder;
  onPointAdded(body: string): ScatterSeriesBuilder;
  onPointDelegateChanged(body: string): ScatterSeriesBuilder;
  onPointRemoved(body: string): ScatterSeriesBuilder;
  onPointReplaced(body: string): ScatterSeriesBuilder;
  onPointsAdded(body: string): ScatterSeriesBuilder;
  onPointsRemoved(body: string): ScatterSeriesBuilder;
  onPointsReplaced(body: string): ScatterSeriesBuilder;
  onPressed(body: string): ScatterSeriesBuilder;
  onReleased(body: string): ScatterSeriesBuilder;
  onSelectableChanged(body: string): ScatterSeriesBuilder;
  onSelectedColorChanged(body: string): ScatterSeriesBuilder;
  onSelectedPointsChanged(body: string): ScatterSeriesBuilder;
  onSeriesUpdated(body: string): ScatterSeriesBuilder;
  onUpdate(body: string): ScatterSeriesBuilder;
  onValuesMultiplierChanged(body: string): ScatterSeriesBuilder;
  onVisibleChanged(body: string): ScatterSeriesBuilder;
  onZValueChanged(body: string): ScatterSeriesBuilder;
}

const SCATTERSERIES_META: TypeMetadata = {
  typeName: 'ScatterSeries',
  properties: [
    { name: 'axisAngular', hasValue: true, hasBinding: true },
    { name: 'axisRadial', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisXTop', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisYRight', hasValue: true, hasBinding: true },
    { name: 'borderWidth', hasValue: true, hasBinding: true },
    { name: 'brush', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'draggable', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'pointDelegate', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisAngularChanged', paramCount: 1 },
    { handlerName: 'onAxisRadialChanged', paramCount: 1 },
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisXTopChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisYRightChanged', paramCount: 1 },
    { handlerName: 'onBorderWidthChanged', paramCount: 1 },
    { handlerName: 'onBrushChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 1 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onDraggableChanged', paramCount: 0 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPointAdded', paramCount: 1 },
    { handlerName: 'onPointDelegateChanged', paramCount: 0 },
    { handlerName: 'onPointRemoved', paramCount: 1 },
    { handlerName: 'onPointReplaced', paramCount: 1 },
    { handlerName: 'onPointsAdded', paramCount: 2 },
    { handlerName: 'onPointsRemoved', paramCount: 2 },
    { handlerName: 'onPointsReplaced', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onSelectedColorChanged', paramCount: 1 },
    { handlerName: 'onSelectedPointsChanged', paramCount: 0 },
    { handlerName: 'onSeriesUpdated', paramCount: 0 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'declarativeChildren',
};

export function ScatterSeries(): ScatterSeriesBuilder {
  return createFluentBuilder('ScatterSeries', SCATTERSERIES_META) as unknown as ScatterSeriesBuilder;
}

export namespace ScatterSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('ScatterSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('ScatterSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('ScatterSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('ScatterSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('ScatterSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('ScatterSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('ScatterSeries', 'SeriesType', 'Custom');
  }
}
