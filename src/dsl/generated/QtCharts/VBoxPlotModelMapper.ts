// AUTO-GENERATED — DO NOT EDIT
// Type: VBoxPlotModelMapper
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface VBoxPlotModelMapperBuilder {
  id(id: string): VBoxPlotModelMapperBuilder;
  child(obj: QmlObjectBuilder): VBoxPlotModelMapperBuilder;

  firstBoxSetColumn(value: number): VBoxPlotModelMapperBuilder;
  firstBoxSetColumnBind(expr: string): VBoxPlotModelMapperBuilder;
  firstRow(value: number): VBoxPlotModelMapperBuilder;
  firstRowBind(expr: string): VBoxPlotModelMapperBuilder;
  lastBoxSetColumn(value: number): VBoxPlotModelMapperBuilder;
  lastBoxSetColumnBind(expr: string): VBoxPlotModelMapperBuilder;
  model(value: QmlValue): VBoxPlotModelMapperBuilder;
  modelBind(expr: string): VBoxPlotModelMapperBuilder;
  objectName(value: string): VBoxPlotModelMapperBuilder;
  objectNameBind(expr: string): VBoxPlotModelMapperBuilder;
  rowCount(value: number): VBoxPlotModelMapperBuilder;
  rowCountBind(expr: string): VBoxPlotModelMapperBuilder;
  series(value: QmlValue): VBoxPlotModelMapperBuilder;
  seriesBind(expr: string): VBoxPlotModelMapperBuilder;
  onFirstBoxSetColumnChanged(body: string): VBoxPlotModelMapperBuilder;
  onFirstRowChanged(body: string): VBoxPlotModelMapperBuilder;
  onLastBoxSetColumnChanged(body: string): VBoxPlotModelMapperBuilder;
  onModelReplaced(body: string): VBoxPlotModelMapperBuilder;
  onObjectNameChanged(body: string): VBoxPlotModelMapperBuilder;
  onRowCountChanged(body: string): VBoxPlotModelMapperBuilder;
  onSeriesReplaced(body: string): VBoxPlotModelMapperBuilder;
}

const VBOXPLOTMODELMAPPER_META: TypeMetadata = {
  typeName: 'VBoxPlotModelMapper',
  properties: [
    { name: 'firstBoxSetColumn', hasValue: true, hasBinding: true },
    { name: 'firstRow', hasValue: true, hasBinding: true },
    { name: 'lastBoxSetColumn', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rowCount', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onFirstBoxSetColumnChanged', paramCount: 0 },
    { handlerName: 'onFirstRowChanged', paramCount: 0 },
    { handlerName: 'onLastBoxSetColumnChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function VBoxPlotModelMapper(): VBoxPlotModelMapperBuilder {
  return createFluentBuilder('VBoxPlotModelMapper', VBOXPLOTMODELMAPPER_META) as unknown as VBoxPlotModelMapperBuilder;
}
