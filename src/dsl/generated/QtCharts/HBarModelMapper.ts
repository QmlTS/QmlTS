// AUTO-GENERATED — DO NOT EDIT
// Type: HBarModelMapper
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface HBarModelMapperBuilder {
  id(id: string): HBarModelMapperBuilder;
  child(obj: QmlObjectBuilder): HBarModelMapperBuilder;

  columnCount(value: number): HBarModelMapperBuilder;
  columnCountBind(expr: string): HBarModelMapperBuilder;
  count(value: number): HBarModelMapperBuilder;
  countBind(expr: string): HBarModelMapperBuilder;
  first(value: number): HBarModelMapperBuilder;
  firstBind(expr: string): HBarModelMapperBuilder;
  firstBarSetRow(value: number): HBarModelMapperBuilder;
  firstBarSetRowBind(expr: string): HBarModelMapperBuilder;
  firstBarSetSection(value: number): HBarModelMapperBuilder;
  firstBarSetSectionBind(expr: string): HBarModelMapperBuilder;
  firstColumn(value: number): HBarModelMapperBuilder;
  firstColumnBind(expr: string): HBarModelMapperBuilder;
  lastBarSetRow(value: number): HBarModelMapperBuilder;
  lastBarSetRowBind(expr: string): HBarModelMapperBuilder;
  lastBarSetSection(value: number): HBarModelMapperBuilder;
  lastBarSetSectionBind(expr: string): HBarModelMapperBuilder;
  model(value: QmlValue): HBarModelMapperBuilder;
  modelBind(expr: string): HBarModelMapperBuilder;
  objectName(value: string): HBarModelMapperBuilder;
  objectNameBind(expr: string): HBarModelMapperBuilder;
  orientation(value: QmlEnumToken): HBarModelMapperBuilder;
  orientationBind(expr: string): HBarModelMapperBuilder;
  series(value: QmlValue): HBarModelMapperBuilder;
  seriesBind(expr: string): HBarModelMapperBuilder;
  onColumnCountChanged(body: string): HBarModelMapperBuilder;
  onCountChanged(body: string): HBarModelMapperBuilder;
  onFirstBarSetRowChanged(body: string): HBarModelMapperBuilder;
  onFirstBarSetSectionChanged(body: string): HBarModelMapperBuilder;
  onFirstChanged(body: string): HBarModelMapperBuilder;
  onFirstColumnChanged(body: string): HBarModelMapperBuilder;
  onLastBarSetRowChanged(body: string): HBarModelMapperBuilder;
  onLastBarSetSectionChanged(body: string): HBarModelMapperBuilder;
  onModelChanged(body: string): HBarModelMapperBuilder;
  onModelReplaced(body: string): HBarModelMapperBuilder;
  onObjectNameChanged(body: string): HBarModelMapperBuilder;
  onOrientationChanged(body: string): HBarModelMapperBuilder;
  onSeriesChanged(body: string): HBarModelMapperBuilder;
  onSeriesReplaced(body: string): HBarModelMapperBuilder;
}

const HBARMODELMAPPER_META: TypeMetadata = {
  typeName: 'HBarModelMapper',
  properties: [
    { name: 'columnCount', hasValue: true, hasBinding: true },
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstBarSetRow', hasValue: true, hasBinding: true },
    { name: 'firstBarSetSection', hasValue: true, hasBinding: true },
    { name: 'firstColumn', hasValue: true, hasBinding: true },
    { name: 'lastBarSetRow', hasValue: true, hasBinding: true },
    { name: 'lastBarSetSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstBarSetRowChanged', paramCount: 0 },
    { handlerName: 'onFirstBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstColumnChanged', paramCount: 0 },
    { handlerName: 'onLastBarSetRowChanged', paramCount: 0 },
    { handlerName: 'onLastBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function HBarModelMapper(): HBarModelMapperBuilder {
  return createFluentBuilder('HBarModelMapper', HBARMODELMAPPER_META) as unknown as HBarModelMapperBuilder;
}
