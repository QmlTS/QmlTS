// AUTO-GENERATED — DO NOT EDIT
// Type: ScreenCapture
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ScreenCaptureBuilder {
  id(id: string): ScreenCaptureBuilder;
  child(obj: QmlObjectBuilder): ScreenCaptureBuilder;

  active(value: boolean): ScreenCaptureBuilder;
  activeBind(expr: string): ScreenCaptureBuilder;
  objectName(value: string): ScreenCaptureBuilder;
  objectNameBind(expr: string): ScreenCaptureBuilder;
  screen(value: QmlValue): ScreenCaptureBuilder;
  screenBind(expr: string): ScreenCaptureBuilder;
  onActiveChanged(body: string): ScreenCaptureBuilder;
  onErrorChanged(body: string): ScreenCaptureBuilder;
  onErrorOccurred(body: string): ScreenCaptureBuilder;
  onObjectNameChanged(body: string): ScreenCaptureBuilder;
  onScreenChanged(body: string): ScreenCaptureBuilder;
}

const SCREENCAPTURE_META: TypeMetadata = {
  typeName: 'ScreenCapture',
  properties: [
    { name: 'active', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'screen', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onScreenChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ScreenCapture(): ScreenCaptureBuilder {
  return createFluentBuilder('ScreenCapture', SCREENCAPTURE_META) as unknown as ScreenCaptureBuilder;
}

export namespace ScreenCapture {
  export namespace Error {
    export const NoError = createEnumToken('ScreenCapture', 'Error', 'NoError');
    export const InternalError = createEnumToken('ScreenCapture', 'Error', 'InternalError');
    export const CapturingNotSupported = createEnumToken('ScreenCapture', 'Error', 'CapturingNotSupported');
    export const CaptureFailed = createEnumToken('ScreenCapture', 'Error', 'CaptureFailed');
    export const NotFound = createEnumToken('ScreenCapture', 'Error', 'NotFound');
  }
}
