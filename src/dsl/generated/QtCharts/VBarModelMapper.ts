// AUTO-GENERATED — DO NOT EDIT
// Type: VBarModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface VBarModelMapperBuilder {
  id(id: string): VBarModelMapperBuilder;
  child(obj: QmlObjectBuilder): VBarModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): VBarModelMapperBuilder;

  count(value: number): VBarModelMapperBuilder;
  countBind(expr: string): VBarModelMapperBuilder;
  first(value: number): VBarModelMapperBuilder;
  firstBind(expr: string): VBarModelMapperBuilder;
  firstBarSetColumn(value: number): VBarModelMapperBuilder;
  firstBarSetColumnBind(expr: string): VBarModelMapperBuilder;
  firstBarSetSection(value: number): VBarModelMapperBuilder;
  firstBarSetSectionBind(expr: string): VBarModelMapperBuilder;
  firstRow(value: number): VBarModelMapperBuilder;
  firstRowBind(expr: string): VBarModelMapperBuilder;
  lastBarSetColumn(value: number): VBarModelMapperBuilder;
  lastBarSetColumnBind(expr: string): VBarModelMapperBuilder;
  lastBarSetSection(value: number): VBarModelMapperBuilder;
  lastBarSetSectionBind(expr: string): VBarModelMapperBuilder;
  model(value: QmlValue): VBarModelMapperBuilder;
  modelBind(expr: string): VBarModelMapperBuilder;
  objectName(value: string): VBarModelMapperBuilder;
  objectNameBind(expr: string): VBarModelMapperBuilder;
  orientation(value: QmlEnumToken): VBarModelMapperBuilder;
  orientationBind(expr: string): VBarModelMapperBuilder;
  rowCount(value: number): VBarModelMapperBuilder;
  rowCountBind(expr: string): VBarModelMapperBuilder;
  series(value: QmlValue): VBarModelMapperBuilder;
  seriesBind(expr: string): VBarModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onFirstBarSetColumnChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onFirstBarSetSectionChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onFirstRowChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onLastBarSetColumnChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onLastBarSetSectionChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onModelReplaced(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
  onSeriesReplaced(handler: DslSignalHandlerValue): VBarModelMapperBuilder;
}

const VBARMODELMAPPER_META: TypeMetadata = {
  typeName: 'VBarModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstBarSetColumn', hasValue: true, hasBinding: true },
    { name: 'firstBarSetSection', hasValue: true, hasBinding: true },
    { name: 'firstRow', hasValue: true, hasBinding: true },
    { name: 'lastBarSetColumn', hasValue: true, hasBinding: true },
    { name: 'lastBarSetSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'rowCount', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstBarSetColumnChanged', paramCount: 0 },
    { handlerName: 'onFirstBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstRowChanged', paramCount: 0 },
    { handlerName: 'onLastBarSetColumnChanged', paramCount: 0 },
    { handlerName: 'onLastBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function VBarModelMapper(): VBarModelMapperBuilder {
  return createFluentBuilder(
    'VBarModelMapper',
    VBARMODELMAPPER_META,
  ) as unknown as VBarModelMapperBuilder;
}
