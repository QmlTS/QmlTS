// AUTO-GENERATED — DO NOT EDIT
// Type: AudioInput
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface AudioInputBuilder {
  id(id: string): AudioInputBuilder;
  child(obj: QmlObjectBuilder): AudioInputBuilder;

  device(value: QmlValue): AudioInputBuilder;
  deviceBind(expr: string): AudioInputBuilder;
  muted(value: boolean): AudioInputBuilder;
  mutedBind(expr: string): AudioInputBuilder;
  objectName(value: string): AudioInputBuilder;
  objectNameBind(expr: string): AudioInputBuilder;
  volume(value: number): AudioInputBuilder;
  volumeBind(expr: string): AudioInputBuilder;
  onDeviceChanged(body: string): AudioInputBuilder;
  onMutedChanged(body: string): AudioInputBuilder;
  onObjectNameChanged(body: string): AudioInputBuilder;
  onVolumeChanged(body: string): AudioInputBuilder;
}

const AUDIOINPUT_META: TypeMetadata = {
  typeName: 'AudioInput',
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

export function AudioInput(): AudioInputBuilder {
  return createFluentBuilder('AudioInput', AUDIOINPUT_META) as unknown as AudioInputBuilder;
}
