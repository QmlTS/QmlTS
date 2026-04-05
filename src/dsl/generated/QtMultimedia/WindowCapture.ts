// AUTO-GENERATED — DO NOT EDIT
// Type: WindowCapture
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface WindowCaptureBuilder {
  id(id: string): WindowCaptureBuilder;
  child(obj: QmlObjectBuilder): WindowCaptureBuilder;

  active(value: boolean): WindowCaptureBuilder;
  activeBind(expr: string): WindowCaptureBuilder;
  objectName(value: string): WindowCaptureBuilder;
  objectNameBind(expr: string): WindowCaptureBuilder;
  window(value: QmlValue): WindowCaptureBuilder;
  windowBind(expr: string): WindowCaptureBuilder;
  onActiveChanged(body: string): WindowCaptureBuilder;
  onErrorChanged(body: string): WindowCaptureBuilder;
  onErrorOccurred(body: string): WindowCaptureBuilder;
  onObjectNameChanged(body: string): WindowCaptureBuilder;
  onWindowChanged(body: string): WindowCaptureBuilder;
}

const WINDOWCAPTURE_META: TypeMetadata = {
  typeName: 'WindowCapture',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'window', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function WindowCapture(): WindowCaptureBuilder {
  return createFluentBuilder(
    'WindowCapture',
    WINDOWCAPTURE_META,
  ) as unknown as WindowCaptureBuilder;
}

export namespace WindowCapture {
  export namespace Error {
    export const NoError = createEnumToken('WindowCapture', 'Error', 'NoError');
    export const InternalError = createEnumToken('WindowCapture', 'Error', 'InternalError');
    export const CapturingNotSupported = createEnumToken(
      'WindowCapture',
      'Error',
      'CapturingNotSupported',
    );
    export const CaptureFailed = createEnumToken('WindowCapture', 'Error', 'CaptureFailed');
    export const NotFound = createEnumToken('WindowCapture', 'Error', 'NotFound');
  }
}
