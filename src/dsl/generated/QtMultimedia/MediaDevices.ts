// AUTO-GENERATED — DO NOT EDIT
// Type: MediaDevices
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface MediaDevicesBuilder {
  id(id: string): MediaDevicesBuilder;
  child(obj: QmlObjectBuilder): MediaDevicesBuilder;

  objectName(value: string): MediaDevicesBuilder;
  objectNameBind(expr: string): MediaDevicesBuilder;
  onAudioInputsChanged(body: string): MediaDevicesBuilder;
  onAudioOutputsChanged(body: string): MediaDevicesBuilder;
  onObjectNameChanged(body: string): MediaDevicesBuilder;
  onVideoInputsChanged(body: string): MediaDevicesBuilder;
}

const MEDIADEVICES_META: TypeMetadata = {
  typeName: 'MediaDevices',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onAudioInputsChanged', paramCount: 0 },
    { handlerName: 'onAudioOutputsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onVideoInputsChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MediaDevices(): MediaDevicesBuilder {
  return createFluentBuilder('MediaDevices', MEDIADEVICES_META) as unknown as MediaDevicesBuilder;
}
