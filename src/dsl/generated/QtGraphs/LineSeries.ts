// AUTO-GENERATED — DO NOT EDIT
// Type: LineSeries
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
export interface LineSeriesBuilder {
  id(id: string): LineSeriesBuilder;
  child(obj: QmlObjectBuilder): LineSeriesBuilder;

  axisX(value: QmlValue): LineSeriesBuilder;
  axisXBind(expr: string): LineSeriesBuilder;
  axisY(value: QmlValue): LineSeriesBuilder;
  axisYBind(expr: string): LineSeriesBuilder;
  capStyle(value: QmlEnumToken): LineSeriesBuilder;
  capStyleBind(expr: string): LineSeriesBuilder;
  color(value: QmlColor): LineSeriesBuilder;
  colorBind(expr: string): LineSeriesBuilder;
  dashOffset(value: number): LineSeriesBuilder;
  dashOffsetBind(expr: string): LineSeriesBuilder;
  dashPattern(value: number): LineSeriesBuilder;
  dashPatternBind(expr: string): LineSeriesBuilder;
  draggable(value: boolean): LineSeriesBuilder;
  draggableBind(expr: string): LineSeriesBuilder;
  hoverable(value: boolean): LineSeriesBuilder;
  hoverableBind(expr: string): LineSeriesBuilder;
  joinStyle(value: QmlEnumToken): LineSeriesBuilder;
  joinStyleBind(expr: string): LineSeriesBuilder;
  lineStyle(value: QmlEnumToken): LineSeriesBuilder;
  lineStyleBind(expr: string): LineSeriesBuilder;
  name(value: string): LineSeriesBuilder;
  nameBind(expr: string): LineSeriesBuilder;
  objectName(value: string): LineSeriesBuilder;
  objectNameBind(expr: string): LineSeriesBuilder;
  opacity(value: number): LineSeriesBuilder;
  opacityBind(expr: string): LineSeriesBuilder;
  pointDelegate(value: QmlComponent): LineSeriesBuilder;
  pointDelegateBind(expr: string): LineSeriesBuilder;
  selectable(value: boolean): LineSeriesBuilder;
  selectableBind(expr: string): LineSeriesBuilder;
  selectedColor(value: QmlColor): LineSeriesBuilder;
  selectedColorBind(expr: string): LineSeriesBuilder;
  strokeStyle(value: QmlEnumToken): LineSeriesBuilder;
  strokeStyleBind(expr: string): LineSeriesBuilder;
  valuesMultiplier(value: number): LineSeriesBuilder;
  valuesMultiplierBind(expr: string): LineSeriesBuilder;
  visible(value: boolean): LineSeriesBuilder;
  visibleBind(expr: string): LineSeriesBuilder;
  width(value: number): LineSeriesBuilder;
  widthBind(expr: string): LineSeriesBuilder;
  zValue(value: number): LineSeriesBuilder;
  zValueBind(expr: string): LineSeriesBuilder;
  onAxisXChanged(body: string): LineSeriesBuilder;
  onAxisYChanged(body: string): LineSeriesBuilder;
  onCapStyleChanged(body: string): LineSeriesBuilder;
  onClicked(body: string): LineSeriesBuilder;
  onColorChanged(body: string): LineSeriesBuilder;
  onCountChanged(body: string): LineSeriesBuilder;
  onDashOffsetChanged(body: string): LineSeriesBuilder;
  onDashPatternChanged(body: string): LineSeriesBuilder;
  onDoubleClicked(body: string): LineSeriesBuilder;
  onDraggableChanged(body: string): LineSeriesBuilder;
  onHover(body: string): LineSeriesBuilder;
  onHoverEnter(body: string): LineSeriesBuilder;
  onHoverExit(body: string): LineSeriesBuilder;
  onHoverableChanged(body: string): LineSeriesBuilder;
  onHoveredChanged(body: string): LineSeriesBuilder;
  onJoinStyleChanged(body: string): LineSeriesBuilder;
  onLegendDataChanged(body: string): LineSeriesBuilder;
  onLineStyleChanged(body: string): LineSeriesBuilder;
  onNameChanged(body: string): LineSeriesBuilder;
  onObjectNameChanged(body: string): LineSeriesBuilder;
  onOpacityChanged(body: string): LineSeriesBuilder;
  onPointAdded(body: string): LineSeriesBuilder;
  onPointDelegateChanged(body: string): LineSeriesBuilder;
  onPointRemoved(body: string): LineSeriesBuilder;
  onPointReplaced(body: string): LineSeriesBuilder;
  onPointsAdded(body: string): LineSeriesBuilder;
  onPointsRemoved(body: string): LineSeriesBuilder;
  onPointsReplaced(body: string): LineSeriesBuilder;
  onPressed(body: string): LineSeriesBuilder;
  onReleased(body: string): LineSeriesBuilder;
  onSelectableChanged(body: string): LineSeriesBuilder;
  onSelectedColorChanged(body: string): LineSeriesBuilder;
  onSelectedPointsChanged(body: string): LineSeriesBuilder;
  onSeriesUpdated(body: string): LineSeriesBuilder;
  onStrokeStyleChanged(body: string): LineSeriesBuilder;
  onUpdate(body: string): LineSeriesBuilder;
  onValuesMultiplierChanged(body: string): LineSeriesBuilder;
  onVisibleChanged(body: string): LineSeriesBuilder;
  onWidthChanged(body: string): LineSeriesBuilder;
  onZValueChanged(body: string): LineSeriesBuilder;
}

const LINESERIES_META: TypeMetadata = {
  typeName: 'LineSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'capStyle', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'dashOffset', hasValue: true, hasBinding: true },
    { name: 'dashPattern', hasValue: true, hasBinding: true },
    { name: 'draggable', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'joinStyle', hasValue: true, hasBinding: true },
    { name: 'lineStyle', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'pointDelegate', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'strokeStyle', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDashOffsetChanged', paramCount: 1 },
    { handlerName: 'onDashPatternChanged', paramCount: 1 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onDraggableChanged', paramCount: 0 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onJoinStyleChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onLineStyleChanged', paramCount: 1 },
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
    { handlerName: 'onStrokeStyleChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LineSeries(): LineSeriesBuilder {
  return createFluentBuilder('LineSeries', LINESERIES_META) as unknown as LineSeriesBuilder;
}

export namespace LineSeries {
  export namespace LineStyle {
    export const Straight = createEnumToken('LineSeries', 'LineStyle', 'Straight');
    export const StepLeft = createEnumToken('LineSeries', 'LineStyle', 'StepLeft');
    export const StepRight = createEnumToken('LineSeries', 'LineStyle', 'StepRight');
    export const StepCenter = createEnumToken('LineSeries', 'LineStyle', 'StepCenter');
  }
  export namespace SeriesType {
    export const Line = createEnumToken('LineSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('LineSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('LineSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('LineSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('LineSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('LineSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('LineSeries', 'SeriesType', 'Custom');
  }
  export namespace StrokeStyle {
    export const SolidLine = createEnumToken('LineSeries', 'StrokeStyle', 'SolidLine');
    export const DashLine = createEnumToken('LineSeries', 'StrokeStyle', 'DashLine');
  }
}
