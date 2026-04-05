// AUTO-GENERATED — DO NOT EDIT
// Type: SplineSeries
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SplineSeriesBuilder {
  id(id: string): SplineSeriesBuilder;
  child(obj: QmlObjectBuilder): SplineSeriesBuilder;

  axisX(value: QmlValue): SplineSeriesBuilder;
  axisXBind(expr: string): SplineSeriesBuilder;
  axisY(value: QmlValue): SplineSeriesBuilder;
  axisYBind(expr: string): SplineSeriesBuilder;
  capStyle(value: QmlEnumToken): SplineSeriesBuilder;
  capStyleBind(expr: string): SplineSeriesBuilder;
  color(value: QmlColor): SplineSeriesBuilder;
  colorBind(expr: string): SplineSeriesBuilder;
  draggable(value: boolean): SplineSeriesBuilder;
  draggableBind(expr: string): SplineSeriesBuilder;
  hoverable(value: boolean): SplineSeriesBuilder;
  hoverableBind(expr: string): SplineSeriesBuilder;
  name(value: string): SplineSeriesBuilder;
  nameBind(expr: string): SplineSeriesBuilder;
  objectName(value: string): SplineSeriesBuilder;
  objectNameBind(expr: string): SplineSeriesBuilder;
  opacity(value: number): SplineSeriesBuilder;
  opacityBind(expr: string): SplineSeriesBuilder;
  optimized(value: boolean): SplineSeriesBuilder;
  optimizedBind(expr: string): SplineSeriesBuilder;
  pointDelegate(value: QmlComponent): SplineSeriesBuilder;
  pointDelegateBind(expr: string): SplineSeriesBuilder;
  selectable(value: boolean): SplineSeriesBuilder;
  selectableBind(expr: string): SplineSeriesBuilder;
  selectedColor(value: QmlColor): SplineSeriesBuilder;
  selectedColorBind(expr: string): SplineSeriesBuilder;
  valuesMultiplier(value: number): SplineSeriesBuilder;
  valuesMultiplierBind(expr: string): SplineSeriesBuilder;
  visible(value: boolean): SplineSeriesBuilder;
  visibleBind(expr: string): SplineSeriesBuilder;
  width(value: number): SplineSeriesBuilder;
  widthBind(expr: string): SplineSeriesBuilder;
  zValue(value: number): SplineSeriesBuilder;
  zValueBind(expr: string): SplineSeriesBuilder;
  onAxisXChanged(body: string): SplineSeriesBuilder;
  onAxisYChanged(body: string): SplineSeriesBuilder;
  onCapStyleChanged(body: string): SplineSeriesBuilder;
  onClicked(body: string): SplineSeriesBuilder;
  onColorChanged(body: string): SplineSeriesBuilder;
  onCountChanged(body: string): SplineSeriesBuilder;
  onDoubleClicked(body: string): SplineSeriesBuilder;
  onDraggableChanged(body: string): SplineSeriesBuilder;
  onHover(body: string): SplineSeriesBuilder;
  onHoverEnter(body: string): SplineSeriesBuilder;
  onHoverExit(body: string): SplineSeriesBuilder;
  onHoverableChanged(body: string): SplineSeriesBuilder;
  onHoveredChanged(body: string): SplineSeriesBuilder;
  onLegendDataChanged(body: string): SplineSeriesBuilder;
  onNameChanged(body: string): SplineSeriesBuilder;
  onObjectNameChanged(body: string): SplineSeriesBuilder;
  onOpacityChanged(body: string): SplineSeriesBuilder;
  onOptimizedChanged(body: string): SplineSeriesBuilder;
  onPointAdded(body: string): SplineSeriesBuilder;
  onPointDelegateChanged(body: string): SplineSeriesBuilder;
  onPointRemoved(body: string): SplineSeriesBuilder;
  onPointReplaced(body: string): SplineSeriesBuilder;
  onPointsAdded(body: string): SplineSeriesBuilder;
  onPointsRemoved(body: string): SplineSeriesBuilder;
  onPointsReplaced(body: string): SplineSeriesBuilder;
  onPressed(body: string): SplineSeriesBuilder;
  onReleased(body: string): SplineSeriesBuilder;
  onSelectableChanged(body: string): SplineSeriesBuilder;
  onSelectedColorChanged(body: string): SplineSeriesBuilder;
  onSelectedPointsChanged(body: string): SplineSeriesBuilder;
  onSeriesUpdated(body: string): SplineSeriesBuilder;
  onUpdate(body: string): SplineSeriesBuilder;
  onValuesMultiplierChanged(body: string): SplineSeriesBuilder;
  onVisibleChanged(body: string): SplineSeriesBuilder;
  onWidthChanged(body: string): SplineSeriesBuilder;
  onZValueChanged(body: string): SplineSeriesBuilder;
}

const SPLINESERIES_META: TypeMetadata = {
  typeName: 'SplineSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'capStyle', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'draggable', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimized', hasValue: true, hasBinding: true },
    { name: 'pointDelegate', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onCapStyleChanged', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onCountChanged', paramCount: 0 },
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
    { handlerName: 'onOptimizedChanged', paramCount: 1 },
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
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SplineSeries(): SplineSeriesBuilder {
  return createFluentBuilder('SplineSeries', SPLINESERIES_META) as unknown as SplineSeriesBuilder;
}

export namespace SplineSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('SplineSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('SplineSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('SplineSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('SplineSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('SplineSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('SplineSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('SplineSeries', 'SeriesType', 'Custom');
  }
}
