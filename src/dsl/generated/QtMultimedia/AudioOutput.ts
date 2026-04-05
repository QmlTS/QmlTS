// AUTO-GENERATED — DO NOT EDIT
// Type: AudioOutput
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AudioOutputBuilder {
  id(id: string): AudioOutputBuilder;
  child(obj: QmlObjectBuilder): AudioOutputBuilder;

  device(value: QmlValue): AudioOutputBuilder;
  deviceBind(expr: string): AudioOutputBuilder;
  muted(value: boolean): AudioOutputBuilder;
  mutedBind(expr: string): AudioOutputBuilder;
  objectName(value: string): AudioOutputBuilder;
  objectNameBind(expr: string): AudioOutputBuilder;
  volume(value: number): AudioOutputBuilder;
  volumeBind(expr: string): AudioOutputBuilder;
  onDeviceChanged(body: string): AudioOutputBuilder;
  onMutedChanged(body: string): AudioOutputBuilder;
  onObjectNameChanged(body: string): AudioOutputBuilder;
  onVolumeChanged(body: string): AudioOutputBuilder;
}

const AUDIOOUTPUT_META: TypeMetadata = {
  typeName: 'AudioOutput',
  properties: [
    { name: 'device', hasValue: true, hasBinding: true },
    { name: 'muted', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'volume', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDeviceChanged', paramCount: 0 },
    { handlerName: 'onMutedChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onVolumeChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function AudioOutput(): AudioOutputBuilder {
  return createFluentBuilder('AudioOutput', AUDIOOUTPUT_META) as unknown as AudioOutputBuilder;
}
