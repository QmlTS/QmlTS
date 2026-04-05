// AUTO-GENERATED — DO NOT EDIT
// Type: AudioEngine
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AudioEngineBuilder {
  id(id: string): AudioEngineBuilder;
  child(obj: QmlObjectBuilder): AudioEngineBuilder;

  distanceScale(value: number): AudioEngineBuilder;
  distanceScaleBind(expr: string): AudioEngineBuilder;
  masterVolume(value: number): AudioEngineBuilder;
  masterVolumeBind(expr: string): AudioEngineBuilder;
  objectName(value: string): AudioEngineBuilder;
  objectNameBind(expr: string): AudioEngineBuilder;
  outputDevice(value: QmlValue): AudioEngineBuilder;
  outputDeviceBind(expr: string): AudioEngineBuilder;
  outputMode(value: QmlEnumToken): AudioEngineBuilder;
  outputModeBind(expr: string): AudioEngineBuilder;
  onDistanceScaleChanged(body: string): AudioEngineBuilder;
  onMasterVolumeChanged(body: string): AudioEngineBuilder;
  onObjectNameChanged(body: string): AudioEngineBuilder;
  onOutputDeviceChanged(body: string): AudioEngineBuilder;
  onOutputModeChanged(body: string): AudioEngineBuilder;
}

const AUDIOENGINE_META: TypeMetadata = {
  typeName: 'AudioEngine',
  properties: [
    { name: 'distanceScale', hasValue: true, hasBinding: true },
    { name: 'masterVolume', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputDevice', hasValue: true, hasBinding: true },
    { name: 'outputMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDistanceScaleChanged', paramCount: 0 },
    { handlerName: 'onMasterVolumeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputDeviceChanged', paramCount: 0 },
    { handlerName: 'onOutputModeChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function AudioEngine(): AudioEngineBuilder {
  return createFluentBuilder('AudioEngine', AUDIOENGINE_META) as unknown as AudioEngineBuilder;
}

export namespace AudioEngine {
  export namespace OutputMode {
    export const Surround = createEnumToken('AudioEngine', 'OutputMode', 'Surround');
    export const Stereo = createEnumToken('AudioEngine', 'OutputMode', 'Stereo');
    export const Headphone = createEnumToken('AudioEngine', 'OutputMode', 'Headphone');
  }
}
