// AUTO-GENERATED — DO NOT EDIT
// Type: PieModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { PieSeriesBuilder } from './PieSeries.js';
export interface PieModelMapperBuilder {
  id(id: string): PieModelMapperBuilder;
  child(obj: QmlObjectBuilder): PieModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): PieModelMapperBuilder;

  count(value: number): PieModelMapperBuilder;
  countBind(expr: string): PieModelMapperBuilder;
  first(value: number): PieModelMapperBuilder;
  firstBind(expr: string): PieModelMapperBuilder;
  labelsSection(value: number): PieModelMapperBuilder;
  labelsSectionBind(expr: string): PieModelMapperBuilder;
  model(value: QmlValue): PieModelMapperBuilder;
  modelBind(expr: string): PieModelMapperBuilder;
  objectName(value: string): PieModelMapperBuilder;
  objectNameBind(expr: string): PieModelMapperBuilder;
  orientation(value: QmlEnumToken): PieModelMapperBuilder;
  orientationBind(expr: string): PieModelMapperBuilder;
  series(value: PieSeriesBuilder): PieModelMapperBuilder;
  seriesBind(expr: string): PieModelMapperBuilder;
  valuesSection(value: number): PieModelMapperBuilder;
  valuesSectionBind(expr: string): PieModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onLabelsSectionChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
  onValuesSectionChanged(handler: DslSignalHandlerValue): PieModelMapperBuilder;
}

const PIEMODELMAPPER_META: TypeMetadata = {
  typeName: 'PieModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'labelsSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'valuesSection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onLabelsSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onValuesSectionChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PieModelMapper(): PieModelMapperBuilder {
  return createFluentBuilder(
    'PieModelMapper',
    PIEMODELMAPPER_META,
  ) as unknown as PieModelMapperBuilder;
}
