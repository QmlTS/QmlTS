// AUTO-GENERATED — DO NOT EDIT
// Type: BufferCapture
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface BufferCaptureBuilder {
  id(id: string): BufferCaptureBuilder;
  child(obj: QmlObjectBuilder): BufferCaptureBuilder;
  children(...objs: QmlObjectBuilder[]): BufferCaptureBuilder;

  enabled(value: boolean): BufferCaptureBuilder;
  enabledBind(expr: string): BufferCaptureBuilder;
  objectName(value: string): BufferCaptureBuilder;
  objectNameBind(expr: string): BufferCaptureBuilder;
  parent(value: QmlValue): BufferCaptureBuilder;
  parentBind(expr: string): BufferCaptureBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): BufferCaptureBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): BufferCaptureBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): BufferCaptureBuilder;
  onParentChanged(handler: DslSignalHandlerValue): BufferCaptureBuilder;
}

const BUFFERCAPTURE_META: TypeMetadata = {
  typeName: 'BufferCapture',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function BufferCapture(): BufferCaptureBuilder {
  return createFluentBuilder(
    'BufferCapture',
    BUFFERCAPTURE_META,
  ) as unknown as BufferCaptureBuilder;
}
