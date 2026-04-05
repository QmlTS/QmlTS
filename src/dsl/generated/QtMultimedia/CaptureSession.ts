// AUTO-GENERATED — DO NOT EDIT
// Type: CaptureSession
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AudioInputBuilder } from './AudioInput.js';
import type { AudioOutputBuilder } from './AudioOutput.js';
import type { CameraBuilder } from './Camera.js';
import type { MediaRecorderBuilder } from './MediaRecorder.js';
import type { WindowCaptureBuilder } from './WindowCapture.js';
export interface CaptureSessionBuilder {
  id(id: string): CaptureSessionBuilder;
  child(obj: QmlObjectBuilder): CaptureSessionBuilder;

  audioBufferInput(value: QmlValue): CaptureSessionBuilder;
  audioBufferInputBind(expr: string): CaptureSessionBuilder;
  audioInput(value: AudioInputBuilder): CaptureSessionBuilder;
  audioInputBind(expr: string): CaptureSessionBuilder;
  audioOutput(value: AudioOutputBuilder): CaptureSessionBuilder;
  audioOutputBind(expr: string): CaptureSessionBuilder;
  camera(value: CameraBuilder): CaptureSessionBuilder;
  cameraBind(expr: string): CaptureSessionBuilder;
  imageCapture(value: QmlValue): CaptureSessionBuilder;
  imageCaptureBind(expr: string): CaptureSessionBuilder;
  objectName(value: string): CaptureSessionBuilder;
  objectNameBind(expr: string): CaptureSessionBuilder;
  recorder(value: MediaRecorderBuilder): CaptureSessionBuilder;
  recorderBind(expr: string): CaptureSessionBuilder;
  screenCapture(value: QmlValue): CaptureSessionBuilder;
  screenCaptureBind(expr: string): CaptureSessionBuilder;
  videoFrameInput(value: QmlValue): CaptureSessionBuilder;
  videoFrameInputBind(expr: string): CaptureSessionBuilder;
  videoOutput(value: QtObjectBuilder): CaptureSessionBuilder;
  videoOutputBind(expr: string): CaptureSessionBuilder;
  windowCapture(value: WindowCaptureBuilder): CaptureSessionBuilder;
  windowCaptureBind(expr: string): CaptureSessionBuilder;
  onAudioBufferInputChanged(body: string): CaptureSessionBuilder;
  onAudioInputChanged(body: string): CaptureSessionBuilder;
  onAudioOutputChanged(body: string): CaptureSessionBuilder;
  onCameraChanged(body: string): CaptureSessionBuilder;
  onImageCaptureChanged(body: string): CaptureSessionBuilder;
  onObjectNameChanged(body: string): CaptureSessionBuilder;
  onRecorderChanged(body: string): CaptureSessionBuilder;
  onScreenCaptureChanged(body: string): CaptureSessionBuilder;
  onVideoFrameInputChanged(body: string): CaptureSessionBuilder;
  onVideoOutputChanged(body: string): CaptureSessionBuilder;
  onWindowCaptureChanged(body: string): CaptureSessionBuilder;
}

const CAPTURESESSION_META: TypeMetadata = {
  typeName: 'CaptureSession',
  properties: [
    { name: 'audioBufferInput', hasValue: true, hasBinding: true },
    { name: 'audioInput', hasValue: true, hasBinding: true },
    { name: 'audioOutput', hasValue: true, hasBinding: true },
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'imageCapture', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'recorder', hasValue: true, hasBinding: true },
    { name: 'screenCapture', hasValue: true, hasBinding: true },
    { name: 'videoFrameInput', hasValue: true, hasBinding: true },
    { name: 'videoOutput', hasValue: true, hasBinding: true },
    { name: 'windowCapture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAudioBufferInputChanged', paramCount: 0 },
    { handlerName: 'onAudioInputChanged', paramCount: 0 },
    { handlerName: 'onAudioOutputChanged', paramCount: 0 },
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onImageCaptureChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRecorderChanged', paramCount: 0 },
    { handlerName: 'onScreenCaptureChanged', paramCount: 0 },
    { handlerName: 'onVideoFrameInputChanged', paramCount: 0 },
    { handlerName: 'onVideoOutputChanged', paramCount: 0 },
    { handlerName: 'onWindowCaptureChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function CaptureSession(): CaptureSessionBuilder {
  return createFluentBuilder('CaptureSession', CAPTURESESSION_META) as unknown as CaptureSessionBuilder;
}
