// AUTO-GENERATED — DO NOT EDIT
// Type: CustomSeries
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlComponent,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CustomSeriesBuilder {
  id(id: string): CustomSeriesBuilder;
  child(obj: QmlObjectBuilder): CustomSeriesBuilder;
  children(...objs: QmlObjectBuilder[]): CustomSeriesBuilder;

  axisX(value: QmlValue): CustomSeriesBuilder;
  axisXBind(expr: string): CustomSeriesBuilder;
  axisY(value: QmlValue): CustomSeriesBuilder;
  axisYBind(expr: string): CustomSeriesBuilder;
  delegate(value: QmlComponent): CustomSeriesBuilder;
  delegateBind(expr: string): CustomSeriesBuilder;
  hoverable(value: boolean): CustomSeriesBuilder;
  hoverableBind(expr: string): CustomSeriesBuilder;
  name(value: string): CustomSeriesBuilder;
  nameBind(expr: string): CustomSeriesBuilder;
  objectName(value: string): CustomSeriesBuilder;
  objectNameBind(expr: string): CustomSeriesBuilder;
  opacity(value: number): CustomSeriesBuilder;
  opacityBind(expr: string): CustomSeriesBuilder;
  selectable(value: boolean): CustomSeriesBuilder;
  selectableBind(expr: string): CustomSeriesBuilder;
  valuesMultiplier(value: number): CustomSeriesBuilder;
  valuesMultiplierBind(expr: string): CustomSeriesBuilder;
  visible(value: boolean): CustomSeriesBuilder;
  visibleBind(expr: string): CustomSeriesBuilder;
  zValue(value: number): CustomSeriesBuilder;
  zValueBind(expr: string): CustomSeriesBuilder;
  onAxisXChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onAxisYChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onDelegateChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onHover(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onHoverEnter(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onHoverExit(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onHoverableChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onLegendDataChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onNameChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onSelectableChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onUpdate(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onValuesMultiplierChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
  onZValueChanged(handler: DslSignalHandlerValue): CustomSeriesBuilder;
}

const CUSTOMSERIES_META: TypeMetadata = {
  typeName: 'CustomSeries',
  properties: [
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'hoverable', hasValue: true, hasBinding: true },
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
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onHover', paramCount: 3 },
    { handlerName: 'onHoverEnter', paramCount: 3 },
    { handlerName: 'onHoverExit', paramCount: 2 },
    { handlerName: 'onHoverableChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 1 },
    { handlerName: 'onLegendDataChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
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

export function CustomSeries(): CustomSeriesBuilder {
  return createFluentBuilder('CustomSeries', CUSTOMSERIES_META) as unknown as CustomSeriesBuilder;
}

export namespace CustomSeries {
  export namespace SeriesType {
    export const Line = createEnumToken('CustomSeries', 'SeriesType', 'Line');
    export const Area = createEnumToken('CustomSeries', 'SeriesType', 'Area');
    export const Bar = createEnumToken('CustomSeries', 'SeriesType', 'Bar');
    export const Pie = createEnumToken('CustomSeries', 'SeriesType', 'Pie');
    export const Scatter = createEnumToken('CustomSeries', 'SeriesType', 'Scatter');
    export const Spline = createEnumToken('CustomSeries', 'SeriesType', 'Spline');
    export const Custom = createEnumToken('CustomSeries', 'SeriesType', 'Custom');
  }
}
