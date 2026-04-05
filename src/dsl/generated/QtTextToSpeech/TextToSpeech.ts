// AUTO-GENERATED — DO NOT EDIT
// Type: TextToSpeech
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { VoiceSelectorAttachedBuilder } from './VoiceSelector.js';
export interface TextToSpeechBuilder {
  id(id: string): TextToSpeechBuilder;
  child(obj: QmlObjectBuilder): TextToSpeechBuilder;

  engine(value: string): TextToSpeechBuilder;
  engineBind(expr: string): TextToSpeechBuilder;
  engineParameters(value: QmlValue): TextToSpeechBuilder;
  engineParametersBind(expr: string): TextToSpeechBuilder;
  locale(value: string): TextToSpeechBuilder;
  localeBind(expr: string): TextToSpeechBuilder;
  objectName(value: string): TextToSpeechBuilder;
  objectNameBind(expr: string): TextToSpeechBuilder;
  pitch(value: number): TextToSpeechBuilder;
  pitchBind(expr: string): TextToSpeechBuilder;
  rate(value: number): TextToSpeechBuilder;
  rateBind(expr: string): TextToSpeechBuilder;
  voice(value: QmlValue): TextToSpeechBuilder;
  voiceBind(expr: string): TextToSpeechBuilder;
  volume(value: number): TextToSpeechBuilder;
  volumeBind(expr: string): TextToSpeechBuilder;
  onAboutToSynthesize(body: string): TextToSpeechBuilder;
  onEngineChanged(body: string): TextToSpeechBuilder;
  onEngineParametersChanged(body: string): TextToSpeechBuilder;
  onErrorOccurred(body: string): TextToSpeechBuilder;
  onLocaleChanged(body: string): TextToSpeechBuilder;
  onObjectNameChanged(body: string): TextToSpeechBuilder;
  onPitchChanged(body: string): TextToSpeechBuilder;
  onRateChanged(body: string): TextToSpeechBuilder;
  onSayingWord(body: string): TextToSpeechBuilder;
  onStateChanged(body: string): TextToSpeechBuilder;
  onVoiceChanged(body: string): TextToSpeechBuilder;
  onVolumeChanged(body: string): TextToSpeechBuilder;
  voiceSelector(setup: (b: VoiceSelectorAttachedBuilder) => void): TextToSpeechBuilder;
}

const TEXTTOSPEECH_META: TypeMetadata = {
  typeName: 'TextToSpeech',
  properties: [
    { name: 'engine', hasValue: true, hasBinding: true },
    { name: 'engineParameters', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pitch', hasValue: true, hasBinding: true },
    { name: 'rate', hasValue: true, hasBinding: true },
    { name: 'voice', hasValue: true, hasBinding: true },
    { name: 'volume', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAboutToSynthesize', paramCount: 1 },
    { handlerName: 'onEngineChanged', paramCount: 1 },
    { handlerName: 'onEngineParametersChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onLocaleChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPitchChanged', paramCount: 1 },
    { handlerName: 'onRateChanged', paramCount: 1 },
    { handlerName: 'onSayingWord', paramCount: 4 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onVoiceChanged', paramCount: 1 },
    { handlerName: 'onVolumeChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
    {
      methodName: 'voiceSelector',
      attachedTypeName: 'VoiceSelector',
      properties: [
        { name: 'age', hasValue: true, hasBinding: true },
        { name: 'gender', hasValue: true, hasBinding: true },
        { name: 'language', hasValue: true, hasBinding: true },
        { name: 'locale', hasValue: true, hasBinding: true },
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAgeChanged', paramCount: 0 },
        { handlerName: 'onGenderChanged', paramCount: 0 },
        { handlerName: 'onLanguageChanged', paramCount: 0 },
        { handlerName: 'onLocaleChanged', paramCount: 0 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function TextToSpeech(): TextToSpeechBuilder {
  return createFluentBuilder('TextToSpeech', TEXTTOSPEECH_META) as unknown as TextToSpeechBuilder;
}

export namespace TextToSpeech {
  export namespace BoundaryHint {
    export const Default = createEnumToken('TextToSpeech', 'BoundaryHint', 'Default');
    export const Immediate = createEnumToken('TextToSpeech', 'BoundaryHint', 'Immediate');
    export const Word = createEnumToken('TextToSpeech', 'BoundaryHint', 'Word');
    export const Sentence = createEnumToken('TextToSpeech', 'BoundaryHint', 'Sentence');
    export const Utterance = createEnumToken('TextToSpeech', 'BoundaryHint', 'Utterance');
  }
  export namespace Capabilities {
    export const None = createEnumToken('TextToSpeech', 'Capabilities', 'None');
    export const Speak = createEnumToken('TextToSpeech', 'Capabilities', 'Speak');
    export const PauseResume = createEnumToken('TextToSpeech', 'Capabilities', 'PauseResume');
    export const WordByWordProgress = createEnumToken('TextToSpeech', 'Capabilities', 'WordByWordProgress');
    export const Synthesize = createEnumToken('TextToSpeech', 'Capabilities', 'Synthesize');
  }
  export namespace ErrorReason {
    export const NoError = createEnumToken('TextToSpeech', 'ErrorReason', 'NoError');
    export const Initialization = createEnumToken('TextToSpeech', 'ErrorReason', 'Initialization');
    export const Configuration = createEnumToken('TextToSpeech', 'ErrorReason', 'Configuration');
    export const Input = createEnumToken('TextToSpeech', 'ErrorReason', 'Input');
    export const Playback = createEnumToken('TextToSpeech', 'ErrorReason', 'Playback');
  }
  export namespace State {
    export const Ready = createEnumToken('TextToSpeech', 'State', 'Ready');
    export const Speaking = createEnumToken('TextToSpeech', 'State', 'Speaking');
    export const Paused = createEnumToken('TextToSpeech', 'State', 'Paused');
    export const Error = createEnumToken('TextToSpeech', 'State', 'Error');
    export const Synthesizing = createEnumToken('TextToSpeech', 'State', 'Synthesizing');
  }
}
