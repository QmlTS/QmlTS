// AUTO-GENERATED — DO NOT EDIT
// Type: HXYModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface HXYModelMapperBuilder {
  id(id: string): HXYModelMapperBuilder;
  child(obj: QmlObjectBuilder): HXYModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): HXYModelMapperBuilder;

  columnCount(value: number): HXYModelMapperBuilder;
  columnCountBind(expr: string): HXYModelMapperBuilder;
  count(value: number): HXYModelMapperBuilder;
  countBind(expr: string): HXYModelMapperBuilder;
  first(value: number): HXYModelMapperBuilder;
  firstBind(expr: string): HXYModelMapperBuilder;
  firstColumn(value: number): HXYModelMapperBuilder;
  firstColumnBind(expr: string): HXYModelMapperBuilder;
  model(value: QmlValue): HXYModelMapperBuilder;
  modelBind(expr: string): HXYModelMapperBuilder;
  objectName(value: string): HXYModelMapperBuilder;
  objectNameBind(expr: string): HXYModelMapperBuilder;
  orientation(value: QmlEnumToken): HXYModelMapperBuilder;
  orientationBind(expr: string): HXYModelMapperBuilder;
  series(value: QmlValue): HXYModelMapperBuilder;
  seriesBind(expr: string): HXYModelMapperBuilder;
  xRow(value: number): HXYModelMapperBuilder;
  xRowBind(expr: string): HXYModelMapperBuilder;
  xSection(value: number): HXYModelMapperBuilder;
  xSectionBind(expr: string): HXYModelMapperBuilder;
  yRow(value: number): HXYModelMapperBuilder;
  yRowBind(expr: string): HXYModelMapperBuilder;
  ySection(value: number): HXYModelMapperBuilder;
  ySectionBind(expr: string): HXYModelMapperBuilder;
  onColumnCountChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onFirstColumnChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onModelReplaced(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onSeriesReplaced(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onXRowChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onXSectionChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onYRowChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
  onYSectionChanged(handler: DslSignalHandlerValue): HXYModelMapperBuilder;
}

const HXYMODELMAPPER_META: TypeMetadata = {
  typeName: 'HXYModelMapper',
  properties: [
    { name: 'columnCount', hasValue: true, hasBinding: true },
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstColumn', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'xRow', hasValue: true, hasBinding: true },
    { name: 'xSection', hasValue: true, hasBinding: true },
    { name: 'yRow', hasValue: true, hasBinding: true },
    { name: 'ySection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstColumnChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onXRowChanged', paramCount: 0 },
    { handlerName: 'onXSectionChanged', paramCount: 0 },
    { handlerName: 'onYRowChanged', paramCount: 0 },
    { handlerName: 'onYSectionChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HXYModelMapper(): HXYModelMapperBuilder {
  return createFluentBuilder(
    'HXYModelMapper',
    HXYMODELMAPPER_META,
  ) as unknown as HXYModelMapperBuilder;
}
