// AUTO-GENERATED — DO NOT EDIT
// Type: AreaSeries
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AreaSeriesBuilder {
  id(id: string): AreaSeriesBuilder;
  child(obj: QmlObjectBuilder): AreaSeriesBuilder;

  axisX(value: QmlValue): AreaSeriesBuilder;
  axisXBind(expr: string): AreaSeriesBuilder;
  axisY(value: QmlValue): AreaSeriesBuilder;
  axisYBind(expr: string): AreaSeriesBuilder;
  borderColor(value: QmlColor): AreaSeriesBuilder;
  borderColorBind(expr: string): AreaSeriesBuilder;
  borderWidth(value: number): AreaSeriesBuilder;
  borderWidthBind(expr: string): AreaSeriesBuilder;
  color(value: QmlColor): AreaSeriesBuilder;
  colorBind(expr: string): AreaSeriesBuilder;
  gradient(value: QmlValue): AreaSeriesBuilder;
  gradientBind(expr: string): AreaSeriesBuilder;
  hoverable(value: boolean): AreaSeriesBuilder;
  hoverableBind(expr: string): AreaSeriesBuilder;
  lowerSeries(value: QmlValue): AreaSeriesBuilder;
  lowerSeriesBind(expr: string): AreaSeriesBuilder;
  name(value: string): AreaSeriesBuilder;
  nameBind(expr: string): AreaSeriesBuilder;
  objectName(value: string): AreaSeriesBuilder;
  objectNameBind(expr: string): AreaSeriesBuilder;
  opacity(value: number): AreaSeriesBuilder;
  opacityBind(expr: string): AreaSeriesBuilder;
  selectable(value: boolean): AreaSeriesBuilder;
  selectableBind(expr: string): AreaSeriesBuilder;
  selected(value: boolean): AreaSeriesBuilder;
  selectedBind(expr: string): AreaSeriesBuilder;
  selectedBorderColor(value: QmlColor): AreaSeriesBuilder;
  selectedBorderColorBind(expr: string): AreaSeriesBuilder;
  selectedColor(value: QmlColor): AreaSeriesBuilder;
  selectedColorBind(expr: string): AreaSeriesBuilder;
  selectedGradient(value: QmlValue): AreaSeriesBuilder;
  selectedGradientBind(expr: string): AreaSeriesBuilder;
  upperSeries(value: QmlValue): AreaSeriesBuilder;
  upperSeriesBind(expr: string): AreaSeriesBuilder;
  valuesMultiplier(value: number): AreaSeriesBuilder;
  valuesMultiplierBind(expr: string): AreaSeriesBuilder;
  visible(value: boolean): AreaSeriesBuilder;
  visibleBind(expr: string): AreaSeriesBuilder;
  zValue(value: number): AreaSeriesBuilder;
  zValueBind(expr: string): AreaSeriesBuilder;
  onAxisXChanged(body: string): AreaSeriesBuilder;
  onAxisYChanged(body: string): AreaSeriesBuilder;
  onBorderColorChanged(body: string): AreaSeriesBuilder;
  onBorderWidthChanged(body: string): AreaSeriesBuilder;
  onClicked(body: string): AreaSeriesBuilder;
  onColorChanged(body: string): AreaSeriesBuilder;
  onDoubleClicked(body: string): AreaSeriesBuilder;
  onGradientChanged(body: string): AreaSeriesBuilder;
  onHover(body: string): AreaSeriesBuilder;
  onHoverEnter(body: string): AreaSeriesBuilder;
  onHoverExit(body: string): AreaSeriesBuilder;
  onHoverableChanged(body: string): AreaSeriesBuilder;
  onHoveredChanged(body: string): AreaSeriesBuilder;
  onLegendDataChanged(body: string): AreaSeriesBuilder;
  onLowerSeriesChanged(body: string): AreaSeriesBuilder;
  onNameChanged(body: string): AreaSeriesBuilder;
  onObjectNameChanged(body: string): AreaSeriesBuilder;
  onOpacityChanged(body: string): AreaSeriesBuilder;
  onPressed(body: string): AreaSeriesBuilder;
  onReleased(body: string): AreaSeriesBuilder;
  onSelectableChanged(body: string): AreaSeriesBuilder;
  onSelectedBorderColorChanged(body: string): AreaSeriesBuilder;
  onSelectedChanged(body: string): AreaSeriesBuilder;
  onSelectedColorChanged(body: string): AreaSeriesBuilder;
  onSelectedGradientChanged(body: string): AreaSeriesBuilder;
  onUpdate(body: string): AreaSeriesBuilder;
  onUpperSeriesChanged(body: string): AreaSeriesBuilder;
  onValuesMultiplierChanged(body: string): AreaSeriesBuilder;
  onVisibleChanged(body: string): AreaSeriesBuilder;
  onZValueChanged(body: string): AreaSeriesBuilder;
}

const AREASERIES_META: TypeMetadata = {
  typeName: 'AreaSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'borderColor', hasValue: true, hasBinding: true },
    { name: 'borderWidth', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'gradient', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
    { name: 'lowerSeries', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'selectable', hasValue: true, hasBinding: true },
    { name: 'selected', hasValue: true, hasBinding: true },
    { name: 'selectedBorderColor', hasValue: true, hasBinding: true },
    { name: 'selectedColor', hasValue: true, hasBinding: true },
    { name: 'selectedGradient', hasValue: true, hasBinding: true },
    { name: 'upperSeries', hasValue: true, hasBinding: true },
    { name: 'valuesMultiplier', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'zValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onBorderColorChanged', paramCount: 1 },
    { handlerName: 'onBorderWidthChanged', paramCount: 0 },
    { handlerName: 'onClicked', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onDoubleClicked', paramCount: 1 },
    { handlerName: 'onGradientChanged', paramCount: 1 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onLowerSeriesChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onSelectableChanged', paramCount: 0 },
    { handlerName: 'onSelectedBorderColorChanged', paramCount: 1 },
    { handlerName: 'onSelectedChanged', paramCount: 0 },
    { handlerName: 'onSelectedColorChanged', paramCount: 1 },
    { handlerName: 'onSelectedGradientChanged', paramCount: 1 },
    { handlerName: 'onUpdate', paramCount: 0 },
    { handlerName: 'onUpperSeriesChanged', paramCount: 0 },
    { handlerName: 'onValuesMultiplierChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onZValueChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'seriesChildren',
};

export function AreaSeries(): AreaSeriesBuilder {
  return createFluentBuilder('AreaSeries', AREASERIES_META) as unknown as AreaSeriesBuilder;
}

export namespace AreaSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('AreaSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('AreaSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('AreaSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('AreaSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('AreaSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('AreaSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('AreaSeries', 'SeriesType', 'Custom');
  }
}
