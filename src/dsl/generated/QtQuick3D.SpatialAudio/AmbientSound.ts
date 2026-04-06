// AUTO-GENERATED — DO NOT EDIT
// Type: AmbientSound
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface AmbientSoundBuilder {
  id(id: string): AmbientSoundBuilder;
  child(obj: QmlObjectBuilder): AmbientSoundBuilder;
  children(...objs: QmlObjectBuilder[]): AmbientSoundBuilder;

  autoPlay(value: boolean): AmbientSoundBuilder;
  autoPlayBind(expr: string): AmbientSoundBuilder;
  loops(value: number): AmbientSoundBuilder;
  loopsBind(expr: string): AmbientSoundBuilder;
  objectName(value: string): AmbientSoundBuilder;
  objectNameBind(expr: string): AmbientSoundBuilder;
  source(value: QmlUrl): AmbientSoundBuilder;
  sourceBind(expr: string): AmbientSoundBuilder;
  volume(value: number): AmbientSoundBuilder;
  volumeBind(expr: string): AmbientSoundBuilder;
  onAutoPlayChanged(handler: DslSignalHandlerValue): AmbientSoundBuilder;
  onLoopsChanged(handler: DslSignalHandlerValue): AmbientSoundBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AmbientSoundBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): AmbientSoundBuilder;
  onVolumeChanged(handler: DslSignalHandlerValue): AmbientSoundBuilder;
}

const AMBIENTSOUND_META: TypeMetadata = {
  typeName: 'AmbientSound',
  properties: [
    { name: 'autoPlay', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'volume', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutoPlayChanged', paramCount: 0 },
    { handlerName: 'onLoopsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onVolumeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function AmbientSound(): AmbientSoundBuilder {
  return createFluentBuilder('AmbientSound', AMBIENTSOUND_META) as unknown as AmbientSoundBuilder;
}

export namespace AmbientSound {
  export namespace Loops {
    export const Infinite = createEnumToken('AmbientSound', 'Loops', 'Infinite');
    export const Once = createEnumToken('AmbientSound', 'Loops', 'Once');
  }
}
