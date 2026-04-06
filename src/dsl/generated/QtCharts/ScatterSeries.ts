// AUTO-GENERATED — DO NOT EDIT
// Type: ScatterSeries
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlComponent,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ScatterSeriesBuilder {
  id(id: string): ScatterSeriesBuilder;
  child(obj: QmlObjectBuilder): ScatterSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): ScatterSeriesBuilder;

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
  onAxisAngularChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onAxisRadialChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onAxisXTopChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onAxisYRightChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onBorderWidthChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onBrushChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onBrushFilenameChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onClicked(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onColorChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onCountChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onDraggableChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onHover(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onHoverEnter(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onHoverExit(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onHoverableChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onLegendDataChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointAdded(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointDelegateChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointRemoved(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointReplaced(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointsAdded(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointsRemoved(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPointsReplaced(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onPressed(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onReleased(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onSelectableChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onSelectedColorChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onSelectedPointsChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onSeriesUpdated(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onUpdate(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onValuesMultiplierChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
  onZValueChanged(handler: DslSignalHandlerValue): ScatterSeriesBuilder;
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
  grouped: [],
  attached: [],
  defaultProperty: 'declarativeChildren',
};

export function ScatterSeries(): ScatterSeriesBuilder {
  return createFluentBuilder(
    'ScatterSeries',
    SCATTERSERIES_META,
  ) as unknown as ScatterSeriesBuilder;
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
