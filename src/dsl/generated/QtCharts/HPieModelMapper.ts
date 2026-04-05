// AUTO-GENERATED — DO NOT EDIT
// Type: HPieModelMapper
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { PieSeriesBuilder } from '../QtGraphs/PieSeries.js';
export interface HPieModelMapperBuilder {
  id(id: string): HPieModelMapperBuilder;
  child(obj: QmlObjectBuilder): HPieModelMapperBuilder;

  columnCount(value: number): HPieModelMapperBuilder;
  columnCountBind(expr: string): HPieModelMapperBuilder;
  count(value: number): HPieModelMapperBuilder;
  countBind(expr: string): HPieModelMapperBuilder;
  first(value: number): HPieModelMapperBuilder;
  firstBind(expr: string): HPieModelMapperBuilder;
  firstColumn(value: number): HPieModelMapperBuilder;
  firstColumnBind(expr: string): HPieModelMapperBuilder;
  labelsRow(value: number): HPieModelMapperBuilder;
  labelsRowBind(expr: string): HPieModelMapperBuilder;
  labelsSection(value: number): HPieModelMapperBuilder;
  labelsSectionBind(expr: string): HPieModelMapperBuilder;
  model(value: QmlValue): HPieModelMapperBuilder;
  modelBind(expr: string): HPieModelMapperBuilder;
  objectName(value: string): HPieModelMapperBuilder;
  objectNameBind(expr: string): HPieModelMapperBuilder;
  orientation(value: QmlEnumToken): HPieModelMapperBuilder;
  orientationBind(expr: string): HPieModelMapperBuilder;
  series(value: PieSeriesBuilder): HPieModelMapperBuilder;
  seriesBind(expr: string): HPieModelMapperBuilder;
  valuesRow(value: number): HPieModelMapperBuilder;
  valuesRowBind(expr: string): HPieModelMapperBuilder;
  valuesSection(value: number): HPieModelMapperBuilder;
  valuesSectionBind(expr: string): HPieModelMapperBuilder;
  onColumnCountChanged(body: string): HPieModelMapperBuilder;
  onCountChanged(body: string): HPieModelMapperBuilder;
  onFirstChanged(body: string): HPieModelMapperBuilder;
  onFirstColumnChanged(body: string): HPieModelMapperBuilder;
  onLabelsRowChanged(body: string): HPieModelMapperBuilder;
  onLabelsSectionChanged(body: string): HPieModelMapperBuilder;
  onModelChanged(body: string): HPieModelMapperBuilder;
  onModelReplaced(body: string): HPieModelMapperBuilder;
  onObjectNameChanged(body: string): HPieModelMapperBuilder;
  onOrientationChanged(body: string): HPieModelMapperBuilder;
  onSeriesChanged(body: string): HPieModelMapperBuilder;
  onSeriesReplaced(body: string): HPieModelMapperBuilder;
  onValuesRowChanged(body: string): HPieModelMapperBuilder;
  onValuesSectionChanged(body: string): HPieModelMapperBuilder;
}

const HPIEMODELMAPPER_META: TypeMetadata = {
  typeName: 'HPieModelMapper',
  properties: [
    { name: 'columnCount', hasValue: true, hasBinding: true },
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstColumn', hasValue: true, hasBinding: true },
    { name: 'labelsRow', hasValue: true, hasBinding: true },
    { name: 'labelsSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'valuesRow', hasValue: true, hasBinding: true },
    { name: 'valuesSection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnCountChanged', paramCount: 0 },
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstColumnChanged', paramCount: 0 },
    { handlerName: 'onLabelsRowChanged', paramCount: 0 },
    { handlerName: 'onLabelsSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onValuesRowChanged', paramCount: 0 },
    { handlerName: 'onValuesSectionChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function HPieModelMapper(): HPieModelMapperBuilder {
  return createFluentBuilder('HPieModelMapper', HPIEMODELMAPPER_META) as unknown as HPieModelMapperBuilder;
}
