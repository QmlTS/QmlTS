// AUTO-GENERATED — DO NOT EDIT
// Type: CandlestickSet
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CandlestickSetBuilder {
  id(id: string): CandlestickSetBuilder;
  child(obj: QmlObjectBuilder): CandlestickSetBuilder;

  brush(value: QmlValue): CandlestickSetBuilder;
  brushBind(expr: string): CandlestickSetBuilder;
  brushFilename(value: string): CandlestickSetBuilder;
  brushFilenameBind(expr: string): CandlestickSetBuilder;
  close(value: number): CandlestickSetBuilder;
  closeBind(expr: string): CandlestickSetBuilder;
  high(value: number): CandlestickSetBuilder;
  highBind(expr: string): CandlestickSetBuilder;
  low(value: number): CandlestickSetBuilder;
  lowBind(expr: string): CandlestickSetBuilder;
  objectName(value: string): CandlestickSetBuilder;
  objectNameBind(expr: string): CandlestickSetBuilder;
  open(value: number): CandlestickSetBuilder;
  openBind(expr: string): CandlestickSetBuilder;
  pen(value: QmlValue): CandlestickSetBuilder;
  penBind(expr: string): CandlestickSetBuilder;
  timestamp(value: number): CandlestickSetBuilder;
  timestampBind(expr: string): CandlestickSetBuilder;
  onBrushChanged(body: string): CandlestickSetBuilder;
  onBrushFilenameChanged(body: string): CandlestickSetBuilder;
  onClicked(body: string): CandlestickSetBuilder;
  onCloseChanged(body: string): CandlestickSetBuilder;
  onDoubleClicked(body: string): CandlestickSetBuilder;
  onHighChanged(body: string): CandlestickSetBuilder;
  onHovered(body: string): CandlestickSetBuilder;
  onLowChanged(body: string): CandlestickSetBuilder;
  onObjectNameChanged(body: string): CandlestickSetBuilder;
  onOpenChanged(body: string): CandlestickSetBuilder;
  onPenChanged(body: string): CandlestickSetBuilder;
  onPressed(body: string): CandlestickSetBuilder;
  onReleased(body: string): CandlestickSetBuilder;
  onTimestampChanged(body: string): CandlestickSetBuilder;
}

const CANDLESTICKSET_META: TypeMetadata = {
  typeName: 'CandlestickSet',
  properties: [
    { name: 'brush', hasValue: true, hasBinding: true },
    { name: 'brushFilename', hasValue: true, hasBinding: true },
    { name: 'close', hasValue: true, hasBinding: true },
    { name: 'high', hasValue: true, hasBinding: true },
    { name: 'low', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'open', hasValue: true, hasBinding: true },
    { name: 'pen', hasValue: true, hasBinding: true },
    { name: 'timestamp', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBrushChanged', paramCount: 0 },
    { handlerName: 'onBrushFilenameChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onCloseChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onHighChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 1 },
    { handlerName: 'onLowChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpenChanged', paramCount: 0 },
    { handlerName: 'onPenChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 0 },
    { handlerName: 'onReleased', paramCount: 0 },
    { handlerName: 'onTimestampChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function CandlestickSet(): CandlestickSetBuilder {
  return createFluentBuilder(
    'CandlestickSet',
    CANDLESTICKSET_META,
  ) as unknown as CandlestickSetBuilder;
}
