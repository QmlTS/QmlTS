// AUTO-GENERATED — DO NOT EDIT
// Type: HCandlestickModelMapper
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface HCandlestickModelMapperBuilder {
  id(id: string): HCandlestickModelMapperBuilder;
  child(obj: QmlObjectBuilder): HCandlestickModelMapperBuilder;

  closeColumn(value: number): HCandlestickModelMapperBuilder;
  closeColumnBind(expr: string): HCandlestickModelMapperBuilder;
  firstSetRow(value: number): HCandlestickModelMapperBuilder;
  firstSetRowBind(expr: string): HCandlestickModelMapperBuilder;
  highColumn(value: number): HCandlestickModelMapperBuilder;
  highColumnBind(expr: string): HCandlestickModelMapperBuilder;
  lastSetRow(value: number): HCandlestickModelMapperBuilder;
  lastSetRowBind(expr: string): HCandlestickModelMapperBuilder;
  lowColumn(value: number): HCandlestickModelMapperBuilder;
  lowColumnBind(expr: string): HCandlestickModelMapperBuilder;
  model(value: QmlValue): HCandlestickModelMapperBuilder;
  modelBind(expr: string): HCandlestickModelMapperBuilder;
  objectName(value: string): HCandlestickModelMapperBuilder;
  objectNameBind(expr: string): HCandlestickModelMapperBuilder;
  openColumn(value: number): HCandlestickModelMapperBuilder;
  openColumnBind(expr: string): HCandlestickModelMapperBuilder;
  series(value: QmlValue): HCandlestickModelMapperBuilder;
  seriesBind(expr: string): HCandlestickModelMapperBuilder;
  timestampColumn(value: number): HCandlestickModelMapperBuilder;
  timestampColumnBind(expr: string): HCandlestickModelMapperBuilder;
  onCloseColumnChanged(body: string): HCandlestickModelMapperBuilder;
  onFirstSetRowChanged(body: string): HCandlestickModelMapperBuilder;
  onHighColumnChanged(body: string): HCandlestickModelMapperBuilder;
  onLastSetRowChanged(body: string): HCandlestickModelMapperBuilder;
  onLowColumnChanged(body: string): HCandlestickModelMapperBuilder;
  onModelReplaced(body: string): HCandlestickModelMapperBuilder;
  onObjectNameChanged(body: string): HCandlestickModelMapperBuilder;
  onOpenColumnChanged(body: string): HCandlestickModelMapperBuilder;
  onSeriesReplaced(body: string): HCandlestickModelMapperBuilder;
  onTimestampColumnChanged(body: string): HCandlestickModelMapperBuilder;
}

const HCANDLESTICKMODELMAPPER_META: TypeMetadata = {
  typeName: 'HCandlestickModelMapper',
  properties: [
    { name: 'closeColumn', hasValue: true, hasBinding: true },
    { name: 'firstSetRow', hasValue: true, hasBinding: true },
    { name: 'highColumn', hasValue: true, hasBinding: true },
    { name: 'lastSetRow', hasValue: true, hasBinding: true },
    { name: 'lowColumn', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'openColumn', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'timestampColumn', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCloseColumnChanged', paramCount: 0 },
    { handlerName: 'onFirstSetRowChanged', paramCount: 0 },
    { handlerName: 'onHighColumnChanged', paramCount: 0 },
    { handlerName: 'onLastSetRowChanged', paramCount: 0 },
    { handlerName: 'onLowColumnChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpenColumnChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onTimestampColumnChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HCandlestickModelMapper(): HCandlestickModelMapperBuilder {
  return createFluentBuilder(
    'HCandlestickModelMapper',
    HCANDLESTICKMODELMAPPER_META,
  ) as unknown as HCandlestickModelMapperBuilder;
}
