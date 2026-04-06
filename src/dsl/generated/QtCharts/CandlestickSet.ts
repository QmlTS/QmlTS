// AUTO-GENERATED — DO NOT EDIT
// Type: CandlestickSet
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CandlestickSetBuilder {
  id(id: string): CandlestickSetBuilder;
  child(obj: QmlObjectBuilder): CandlestickSetBuilder;
  children(...objs: QmlObjectBuilder[]): CandlestickSetBuilder;

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
  onBrushChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onBrushFilenameChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onClicked(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onCloseChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onHighChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onHovered(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onLowChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onOpenChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onPenChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onPressed(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onReleased(handler: DslSignalHandlerValue): CandlestickSetBuilder;
  onTimestampChanged(handler: DslSignalHandlerValue): CandlestickSetBuilder;
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
