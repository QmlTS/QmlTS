// AUTO-GENERATED — DO NOT EDIT
// Type: BarModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { BarSeriesBuilder } from './BarSeries.js';
export interface BarModelMapperBuilder {
  id(id: string): BarModelMapperBuilder;
  child(obj: QmlObjectBuilder): BarModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): BarModelMapperBuilder;

  count(value: number): BarModelMapperBuilder;
  countBind(expr: string): BarModelMapperBuilder;
  first(value: number): BarModelMapperBuilder;
  firstBind(expr: string): BarModelMapperBuilder;
  firstBarSetSection(value: number): BarModelMapperBuilder;
  firstBarSetSectionBind(expr: string): BarModelMapperBuilder;
  lastBarSetSection(value: number): BarModelMapperBuilder;
  lastBarSetSectionBind(expr: string): BarModelMapperBuilder;
  model(value: QmlValue): BarModelMapperBuilder;
  modelBind(expr: string): BarModelMapperBuilder;
  objectName(value: string): BarModelMapperBuilder;
  objectNameBind(expr: string): BarModelMapperBuilder;
  orientation(value: QmlEnumToken): BarModelMapperBuilder;
  orientationBind(expr: string): BarModelMapperBuilder;
  series(value: BarSeriesBuilder): BarModelMapperBuilder;
  seriesBind(expr: string): BarModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onFirstBarSetSectionChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onLastBarSetSectionChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): BarModelMapperBuilder;
}

const BARMODELMAPPER_META: TypeMetadata = {
  typeName: 'BarModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstBarSetSection', hasValue: true, hasBinding: true },
    { name: 'lastBarSetSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onLastBarSetSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function BarModelMapper(): BarModelMapperBuilder {
  return createFluentBuilder(
    'BarModelMapper',
    BARMODELMAPPER_META,
  ) as unknown as BarModelMapperBuilder;
}
