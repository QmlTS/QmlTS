// AUTO-GENERATED — DO NOT EDIT
// Type: HBoxPlotModelMapper
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface HBoxPlotModelMapperBuilder {
  id(id: string): HBoxPlotModelMapperBuilder;
  child(obj: QmlObjectBuilder): HBoxPlotModelMapperBuilder;

  columnCount(value: number): HBoxPlotModelMapperBuilder;
  columnCountBind(expr: string): HBoxPlotModelMapperBuilder;
  firstBoxSetRow(value: number): HBoxPlotModelMapperBuilder;
  firstBoxSetRowBind(expr: string): HBoxPlotModelMapperBuilder;
  firstColumn(value: number): HBoxPlotModelMapperBuilder;
  firstColumnBind(expr: string): HBoxPlotModelMapperBuilder;
  lastBoxSetRow(value: number): HBoxPlotModelMapperBuilder;
  lastBoxSetRowBind(expr: string): HBoxPlotModelMapperBuilder;
  model(value: QmlValue): HBoxPlotModelMapperBuilder;
  modelBind(expr: string): HBoxPlotModelMapperBuilder;
  objectName(value: string): HBoxPlotModelMapperBuilder;
  objectNameBind(expr: string): HBoxPlotModelMapperBuilder;
  series(value: QmlValue): HBoxPlotModelMapperBuilder;
  seriesBind(expr: string): HBoxPlotModelMapperBuilder;
  onColumnCountChanged(body: string): HBoxPlotModelMapperBuilder;
  onFirstBoxSetRowChanged(body: string): HBoxPlotModelMapperBuilder;
  onFirstColumnChanged(body: string): HBoxPlotModelMapperBuilder;
  onLastBoxSetRowChanged(body: string): HBoxPlotModelMapperBuilder;
  onModelReplaced(body: string): HBoxPlotModelMapperBuilder;
  onObjectNameChanged(body: string): HBoxPlotModelMapperBuilder;
  onSeriesReplaced(body: string): HBoxPlotModelMapperBuilder;
}

const HBOXPLOTMODELMAPPER_META: TypeMetadata = {
  typeName: 'HBoxPlotModelMapper',
  properties: [
    { name: 'columnCount', hasValue: true, hasBinding: true },
    { name: 'firstBoxSetRow', hasValue: true, hasBinding: true },
    { name: 'firstColumn', hasValue: true, hasBinding: true },
    { name: 'lastBoxSetRow', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
    { handlerName: 'onFirstBoxSetRowChanged', paramCount: 0 },
    { handlerName: 'onFirstColumnChanged', paramCount: 0 },
    { handlerName: 'onLastBoxSetRowChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HBoxPlotModelMapper(): HBoxPlotModelMapperBuilder {
  return createFluentBuilder(
    'HBoxPlotModelMapper',
    HBOXPLOTMODELMAPPER_META,
  ) as unknown as HBoxPlotModelMapperBuilder;
}
