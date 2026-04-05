// AUTO-GENERATED — DO NOT EDIT
// Type: VXYModelMapper
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface VXYModelMapperBuilder {
  id(id: string): VXYModelMapperBuilder;
  child(obj: QmlObjectBuilder): VXYModelMapperBuilder;

  count(value: number): VXYModelMapperBuilder;
  countBind(expr: string): VXYModelMapperBuilder;
  first(value: number): VXYModelMapperBuilder;
  firstBind(expr: string): VXYModelMapperBuilder;
  firstRow(value: number): VXYModelMapperBuilder;
  firstRowBind(expr: string): VXYModelMapperBuilder;
  model(value: QmlValue): VXYModelMapperBuilder;
  modelBind(expr: string): VXYModelMapperBuilder;
  objectName(value: string): VXYModelMapperBuilder;
  objectNameBind(expr: string): VXYModelMapperBuilder;
  orientation(value: QmlEnumToken): VXYModelMapperBuilder;
  orientationBind(expr: string): VXYModelMapperBuilder;
  rowCount(value: number): VXYModelMapperBuilder;
  rowCountBind(expr: string): VXYModelMapperBuilder;
  series(value: QmlValue): VXYModelMapperBuilder;
  seriesBind(expr: string): VXYModelMapperBuilder;
  xColumn(value: number): VXYModelMapperBuilder;
  xColumnBind(expr: string): VXYModelMapperBuilder;
  xSection(value: number): VXYModelMapperBuilder;
  xSectionBind(expr: string): VXYModelMapperBuilder;
  yColumn(value: number): VXYModelMapperBuilder;
  yColumnBind(expr: string): VXYModelMapperBuilder;
  ySection(value: number): VXYModelMapperBuilder;
  ySectionBind(expr: string): VXYModelMapperBuilder;
  onCountChanged(body: string): VXYModelMapperBuilder;
  onFirstChanged(body: string): VXYModelMapperBuilder;
  onFirstRowChanged(body: string): VXYModelMapperBuilder;
  onModelChanged(body: string): VXYModelMapperBuilder;
  onModelReplaced(body: string): VXYModelMapperBuilder;
  onObjectNameChanged(body: string): VXYModelMapperBuilder;
  onOrientationChanged(body: string): VXYModelMapperBuilder;
  onRowCountChanged(body: string): VXYModelMapperBuilder;
  onSeriesChanged(body: string): VXYModelMapperBuilder;
  onSeriesReplaced(body: string): VXYModelMapperBuilder;
  onXColumnChanged(body: string): VXYModelMapperBuilder;
  onXSectionChanged(body: string): VXYModelMapperBuilder;
  onYColumnChanged(body: string): VXYModelMapperBuilder;
  onYSectionChanged(body: string): VXYModelMapperBuilder;
}

const VXYMODELMAPPER_META: TypeMetadata = {
  typeName: 'VXYModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstRow', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'rowCount', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'xColumn', hasValue: true, hasBinding: true },
    { name: 'xSection', hasValue: true, hasBinding: true },
    { name: 'yColumn', hasValue: true, hasBinding: true },
    { name: 'ySection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstRowChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onXColumnChanged', paramCount: 0 },
    { handlerName: 'onXSectionChanged', paramCount: 0 },
    { handlerName: 'onYColumnChanged', paramCount: 0 },
    { handlerName: 'onYSectionChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function VXYModelMapper(): VXYModelMapperBuilder {
  return createFluentBuilder('VXYModelMapper', VXYMODELMAPPER_META) as unknown as VXYModelMapperBuilder;
}
