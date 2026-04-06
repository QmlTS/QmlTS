// AUTO-GENERATED — DO NOT EDIT
// Type: SoundEffect
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SoundEffectBuilder {
  id(id: string): SoundEffectBuilder;
  child(obj: QmlObjectBuilder): SoundEffectBuilder;
  children(...objs: QmlObjectBuilder[]): SoundEffectBuilder;

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
  onAudioDeviceChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onLoadedChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onLoopCountChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onLoopsRemainingChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onMutedChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onPlayingChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
  onVolumeChanged(handler: DslSignalHandlerValue): SoundEffectBuilder;
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
  grouped: [],
  attached: [],
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
