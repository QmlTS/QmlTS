// AUTO-GENERATED — DO NOT EDIT
// Type: VCandlestickModelMapper
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface VCandlestickModelMapperBuilder {
  id(id: string): VCandlestickModelMapperBuilder;
  child(obj: QmlObjectBuilder): VCandlestickModelMapperBuilder;

  closeRow(value: number): VCandlestickModelMapperBuilder;
  closeRowBind(expr: string): VCandlestickModelMapperBuilder;
  firstSetColumn(value: number): VCandlestickModelMapperBuilder;
  firstSetColumnBind(expr: string): VCandlestickModelMapperBuilder;
  highRow(value: number): VCandlestickModelMapperBuilder;
  highRowBind(expr: string): VCandlestickModelMapperBuilder;
  lastSetColumn(value: number): VCandlestickModelMapperBuilder;
  lastSetColumnBind(expr: string): VCandlestickModelMapperBuilder;
  lowRow(value: number): VCandlestickModelMapperBuilder;
  lowRowBind(expr: string): VCandlestickModelMapperBuilder;
  model(value: QmlValue): VCandlestickModelMapperBuilder;
  modelBind(expr: string): VCandlestickModelMapperBuilder;
  objectName(value: string): VCandlestickModelMapperBuilder;
  objectNameBind(expr: string): VCandlestickModelMapperBuilder;
  openRow(value: number): VCandlestickModelMapperBuilder;
  openRowBind(expr: string): VCandlestickModelMapperBuilder;
  series(value: QmlValue): VCandlestickModelMapperBuilder;
  seriesBind(expr: string): VCandlestickModelMapperBuilder;
  timestampRow(value: number): VCandlestickModelMapperBuilder;
  timestampRowBind(expr: string): VCandlestickModelMapperBuilder;
  onCloseRowChanged(body: string): VCandlestickModelMapperBuilder;
  onFirstSetColumnChanged(body: string): VCandlestickModelMapperBuilder;
  onHighRowChanged(body: string): VCandlestickModelMapperBuilder;
  onLastSetColumnChanged(body: string): VCandlestickModelMapperBuilder;
  onLowRowChanged(body: string): VCandlestickModelMapperBuilder;
  onModelReplaced(body: string): VCandlestickModelMapperBuilder;
  onObjectNameChanged(body: string): VCandlestickModelMapperBuilder;
  onOpenRowChanged(body: string): VCandlestickModelMapperBuilder;
  onSeriesReplaced(body: string): VCandlestickModelMapperBuilder;
  onTimestampRowChanged(body: string): VCandlestickModelMapperBuilder;
}

const VCANDLESTICKMODELMAPPER_META: TypeMetadata = {
  typeName: 'VCandlestickModelMapper',
  properties: [
    { name: 'closeRow', hasValue: true, hasBinding: true },
    { name: 'firstSetColumn', hasValue: true, hasBinding: true },
    { name: 'highRow', hasValue: true, hasBinding: true },
    { name: 'lastSetColumn', hasValue: true, hasBinding: true },
    { name: 'lowRow', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'openRow', hasValue: true, hasBinding: true },
    { name: 'series', hasValue: true, hasBinding: true },
    { name: 'timestampRow', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCloseRowChanged', paramCount: 0 },
    { handlerName: 'onFirstSetColumnChanged', paramCount: 0 },
    { handlerName: 'onHighRowChanged', paramCount: 0 },
    { handlerName: 'onLastSetColumnChanged', paramCount: 0 },
    { handlerName: 'onLowRowChanged', paramCount: 0 },
    { handlerName: 'onModelReplaced', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpenRowChanged', paramCount: 0 },
    { handlerName: 'onSeriesReplaced', paramCount: 0 },
    { handlerName: 'onTimestampRowChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function VCandlestickModelMapper(): VCandlestickModelMapperBuilder {
  return createFluentBuilder('VCandlestickModelMapper', VCANDLESTICKMODELMAPPER_META) as unknown as VCandlestickModelMapperBuilder;
}
