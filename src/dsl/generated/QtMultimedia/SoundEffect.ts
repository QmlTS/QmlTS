// AUTO-GENERATED — DO NOT EDIT
// Type: SoundEffect
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface SoundEffectBuilder {
  id(id: string): SoundEffectBuilder;
  child(obj: QmlObjectBuilder): SoundEffectBuilder;

  audioDevice(value: QmlValue): SoundEffectBuilder;
  audioDeviceBind(expr: string): SoundEffectBuilder;
  loops(value: number): SoundEffectBuilder;
  loopsBind(expr: string): SoundEffectBuilder;
  muted(value: boolean): SoundEffectBuilder;
  mutedBind(expr: string): SoundEffectBuilder;
  objectName(value: string): SoundEffectBuilder;
  objectNameBind(expr: string): SoundEffectBuilder;
  source(value: QmlUrl): SoundEffectBuilder;
  sourceBind(expr: string): SoundEffectBuilder;
  volume(value: number): SoundEffectBuilder;
  volumeBind(expr: string): SoundEffectBuilder;
  onAudioDeviceChanged(body: string): SoundEffectBuilder;
  onLoadedChanged(body: string): SoundEffectBuilder;
  onLoopCountChanged(body: string): SoundEffectBuilder;
  onLoopsRemainingChanged(body: string): SoundEffectBuilder;
  onMutedChanged(body: string): SoundEffectBuilder;
  onObjectNameChanged(body: string): SoundEffectBuilder;
  onPlayingChanged(body: string): SoundEffectBuilder;
  onSourceChanged(body: string): SoundEffectBuilder;
  onStatusChanged(body: string): SoundEffectBuilder;
  onVolumeChanged(body: string): SoundEffectBuilder;
}

const SOUNDEFFECT_META: TypeMetadata = {
  typeName: 'SoundEffect',
  properties: [
    { name: 'audioDevice', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'muted', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'volume', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAudioDeviceChanged', paramCount: 0 },
    { handlerName: 'onLoadedChanged', paramCount: 0 },
    { handlerName: 'onLoopCountChanged', paramCount: 0 },
    { handlerName: 'onLoopsRemainingChanged', paramCount: 0 },
    { handlerName: 'onMutedChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPlayingChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onVolumeChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SoundEffect(): SoundEffectBuilder {
  return createFluentBuilder('SoundEffect', SOUNDEFFECT_META) as unknown as SoundEffectBuilder;
}

export namespace SoundEffect {
  export namespace Loop {
    export const Infinite = createEnumToken('SoundEffect', 'Loop', 'Infinite');
  }
  export namespace Status {
    export const Null = createEnumToken('SoundEffect', 'Status', 'Null');
    export const Loading = createEnumToken('SoundEffect', 'Status', 'Loading');
    export const Ready = createEnumToken('SoundEffect', 'Status', 'Ready');
    export const Error = createEnumToken('SoundEffect', 'Status', 'Error');
  }
}
