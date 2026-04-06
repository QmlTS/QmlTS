// AUTO-GENERATED — DO NOT EDIT
// Type: VPieModelMapper
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { PieSeriesBuilder } from '../QtGraphs/PieSeries.js';
export interface VPieModelMapperBuilder {
  id(id: string): VPieModelMapperBuilder;
  child(obj: QmlObjectBuilder): VPieModelMapperBuilder;
  children(...objs: QmlObjectBuilder[]): VPieModelMapperBuilder;

  count(value: number): VPieModelMapperBuilder;
  countBind(expr: string): VPieModelMapperBuilder;
  first(value: number): VPieModelMapperBuilder;
  firstBind(expr: string): VPieModelMapperBuilder;
  firstRow(value: number): VPieModelMapperBuilder;
  firstRowBind(expr: string): VPieModelMapperBuilder;
  labelsColumn(value: number): VPieModelMapperBuilder;
  labelsColumnBind(expr: string): VPieModelMapperBuilder;
  labelsSection(value: number): VPieModelMapperBuilder;
  labelsSectionBind(expr: string): VPieModelMapperBuilder;
  model(value: QmlValue): VPieModelMapperBuilder;
  modelBind(expr: string): VPieModelMapperBuilder;
  objectName(value: string): VPieModelMapperBuilder;
  objectNameBind(expr: string): VPieModelMapperBuilder;
  orientation(value: QmlEnumToken): VPieModelMapperBuilder;
  orientationBind(expr: string): VPieModelMapperBuilder;
  rowCount(value: number): VPieModelMapperBuilder;
  rowCountBind(expr: string): VPieModelMapperBuilder;
  series(value: PieSeriesBuilder): VPieModelMapperBuilder;
  seriesBind(expr: string): VPieModelMapperBuilder;
  valuesColumn(value: number): VPieModelMapperBuilder;
  valuesColumnBind(expr: string): VPieModelMapperBuilder;
  valuesSection(value: number): VPieModelMapperBuilder;
  valuesSectionBind(expr: string): VPieModelMapperBuilder;
  onCountChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onFirstChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onFirstRowChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onLabelsColumnChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onLabelsSectionChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onModelChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onModelReplaced(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onOrientationChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onRowCountChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onSeriesChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onSeriesReplaced(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onValuesColumnChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
  onValuesSectionChanged(handler: DslSignalHandlerValue): VPieModelMapperBuilder;
}

const VPIEMODELMAPPER_META: TypeMetadata = {
  typeName: 'VPieModelMapper',
  properties: [
    { name: 'count', hasValue: true, hasBinding: true },
    { name: 'first', hasValue: true, hasBinding: true },
    { name: 'firstRow', hasValue: true, hasBinding: true },
    { name: 'labelsColumn', hasValue: true, hasBinding: true },
    { name: 'labelsSection', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'orientation', hasValue: true, hasBinding: true },
    { name: 'rowCount', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'valuesColumn', hasValue: true, hasBinding: true },
    { name: 'valuesSection', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onFirstChanged', paramCount: 0 },
    { handlerName: 'onFirstRowChanged', paramCount: 0 },
    { handlerName: 'onLabelsColumnChanged', paramCount: 0 },
    { handlerName: 'onLabelsSectionChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
    { handlerName: 'onRowCountChanged', paramCount: 0 },
    { handlerName: 'onSeriesChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onValuesColumnChanged', paramCount: 0 },
    { handlerName: 'onValuesSectionChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function VPieModelMapper(): VPieModelMapperBuilder {
  return createFluentBuilder(
    'VPieModelMapper',
    VPIEMODELMAPPER_META,
  ) as unknown as VPieModelMapperBuilder;
}
