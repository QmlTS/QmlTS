// AUTO-GENERATED — DO NOT EDIT
// Type: XYModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface XYModelMapperBuilder {
  id(id: string): XYModelMapperBuilder;
  child(obj: QmlObjectBuilder): XYModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): XYModelMapperBuilder;

  count(value: number): XYModelMapperBuilder;
  countBind(expr: string): XYModelMapperBuilder;
  first(value: number): XYModelMapperBuilder;
  firstBind(expr: string): XYModelMapperBuilder;
  model(value: QmlValue): XYModelMapperBuilder;
  modelBind(expr: string): XYModelMapperBuilder;
  objectName(value: string): XYModelMapperBuilder;
  objectNameBind(expr: string): XYModelMapperBuilder;
  orientation(value: QmlEnumToken): XYModelMapperBuilder;
  orientationBind(expr: string): XYModelMapperBuilder;
  series(value: QmlValue): XYModelMapperBuilder;
  seriesBind(expr: string): XYModelMapperBuilder;
  xSection(value: number): XYModelMapperBuilder;
  xSectionBind(expr: string): XYModelMapperBuilder;
  ySection(value: number): XYModelMapperBuilder;
  ySectionBind(expr: string): XYModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onXSectionChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
  onYSectionChanged(handler: DslSignalHandlerValue): XYModelMapperBuilder;
}

const XYMODELMAPPER_META: TypeMetadata = {
  typeName: 'XYModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'xSection', hasValue: true, hasBinding: true },
    { name: 'ySection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onXSectionChanged', paramCount: 0 },
    { handlerName: 'onYSectionChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function XYModelMapper(): XYModelMapperBuilder {
  return createFluentBuilder(
    'XYModelMapper',
    XYMODELMAPPER_META,
  ) as unknown as XYModelMapperBuilder;
}
