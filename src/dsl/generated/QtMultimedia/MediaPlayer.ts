// AUTO-GENERATED — DO NOT EDIT
// Type: MediaPlayer
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AudioOutputBuilder } from './AudioOutput.js';
export interface MediaPlayerBuilder {
  id(id: string): MediaPlayerBuilder;
  child(obj: QmlObjectBuilder): MediaPlayerBuilder;
  children(...objs: QmlObjectBuilder[]): MediaPlayerBuilder;

  activeAudioTrack(value: number): MediaPlayerBuilder;
  activeAudioTrackBind(expr: string): MediaPlayerBuilder;
  activeSubtitleTrack(value: number): MediaPlayerBuilder;
  activeSubtitleTrackBind(expr: string): MediaPlayerBuilder;
  activeVideoTrack(value: number): MediaPlayerBuilder;
  activeVideoTrackBind(expr: string): MediaPlayerBuilder;
  audioBufferOutput(value: QmlValue): MediaPlayerBuilder;
  audioBufferOutputBind(expr: string): MediaPlayerBuilder;
  audioOutput(value: AudioOutputBuilder): MediaPlayerBuilder;
  audioOutputBind(expr: string): MediaPlayerBuilder;
  autoPlay(value: boolean): MediaPlayerBuilder;
  autoPlayBind(expr: string): MediaPlayerBuilder;
  loops(value: number): MediaPlayerBuilder;
  loopsBind(expr: string): MediaPlayerBuilder;
  objectName(value: string): MediaPlayerBuilder;
  objectNameBind(expr: string): MediaPlayerBuilder;
  pitchCompensation(value: boolean): MediaPlayerBuilder;
  pitchCompensationBind(expr: string): MediaPlayerBuilder;
  playbackOptions(value: QmlValue): MediaPlayerBuilder;
  playbackOptionsBind(expr: string): MediaPlayerBuilder;
  playbackRate(value: number): MediaPlayerBuilder;
  playbackRateBind(expr: string): MediaPlayerBuilder;
  position(value: number): MediaPlayerBuilder;
  positionBind(expr: string): MediaPlayerBuilder;
  source(value: QmlUrl): MediaPlayerBuilder;
  sourceBind(expr: string): MediaPlayerBuilder;
  videoOutput(value: QtObjectBuilder): MediaPlayerBuilder;
  videoOutputBind(expr: string): MediaPlayerBuilder;
  onActiveTracksChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onAudioBufferOutputChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onAudioOutputChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onAutoPlayChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onBufferProgressChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onDurationChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onErrorChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onErrorOccurred(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onHasAudioChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onHasVideoChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onLoopsChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onMediaStatusChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onMetaDataChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPitchCompensationChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPlaybackOptionsChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPlaybackRateChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPlaybackStateChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPlayingChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onQmlSourceChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onSeekableChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onTracksChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
  onVideoOutputChanged(handler: DslSignalHandlerValue): MediaPlayerBuilder;
}

const MEDIAPLAYER_META: TypeMetadata = {
  typeName: 'MediaPlayer',
  properties: [
    { name: 'activeAudioTrack', hasValue: true, hasBinding: true },
    { name: 'activeSubtitleTrack', hasValue: true, hasBinding: true },
    { name: 'activeVideoTrack', hasValue: true, hasBinding: true },
    { name: 'audioBufferOutput', hasValue: true, hasBinding: true },
    { name: 'audioOutput', hasValue: true, hasBinding: true },
    { name: 'autoPlay', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'pitchCompensation', hasValue: true, hasBinding: true },
    { name: 'playbackOptions', hasValue: true, hasBinding: true },
    { name: 'playbackRate', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'videoOutput', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveTracksChanged', paramCount: 0 },
    { handlerName: 'onAudioBufferOutputChanged', paramCount: 0 },
    { handlerName: 'onAudioOutputChanged', paramCount: 0 },
    { handlerName: 'onAutoPlayChanged', paramCount: 1 },
    { handlerName: 'onBufferProgressChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onHasAudioChanged', paramCount: 1 },
    { handlerName: 'onHasVideoChanged', paramCount: 1 },
    { handlerName: 'onLoopsChanged', paramCount: 0 },
    { handlerName: 'onMediaStatusChanged', paramCount: 1 },
    { handlerName: 'onMetaDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPitchCompensationChanged', paramCount: 1 },
    { handlerName: 'onPlaybackOptionsChanged', paramCount: 0 },
    { handlerName: 'onPlaybackRateChanged', paramCount: 1 },
    { handlerName: 'onPlaybackStateChanged', paramCount: 1 },
    { handlerName: 'onPlayingChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onQmlSourceChanged', paramCount: 1 },
    { handlerName: 'onSeekableChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 1 },
    { handlerName: 'onTracksChanged', paramCount: 0 },
    { handlerName: 'onVideoOutputChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MediaPlayer(): MediaPlayerBuilder {
  return createFluentBuilder('MediaPlayer', MEDIAPLAYER_META) as unknown as MediaPlayerBuilder;
}

export namespace MediaPlayer {
  export namespace Error {
    export const NoError = createEnumToken('MediaPlayer', 'Error', 'NoError');
    export const ResourceError = createEnumToken('MediaPlayer', 'Error', 'ResourceError');
    export const FormatError = createEnumToken('MediaPlayer', 'Error', 'FormatError');
    export const NetworkError = createEnumToken('MediaPlayer', 'Error', 'NetworkError');
    export const AccessDeniedError = createEnumToken('MediaPlayer', 'Error', 'AccessDeniedError');
  }
  export namespace Loops {
    export const Infinite = createEnumToken('MediaPlayer', 'Loops', 'Infinite');
    export const Once = createEnumToken('MediaPlayer', 'Loops', 'Once');
  }
  export namespace MediaStatus {
    export const NoMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'NoMedia');
    export const LoadingMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'LoadingMedia');
    export const LoadedMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'LoadedMedia');
    export const StalledMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'StalledMedia');
    export const BufferingMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'BufferingMedia');
    export const BufferedMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'BufferedMedia');
    export const EndOfMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'EndOfMedia');
    export const InvalidMedia = createEnumToken('MediaPlayer', 'MediaStatus', 'InvalidMedia');
  }
  export namespace PitchCompensationAvailability {
    export const AlwaysOn = createEnumToken(
      'MediaPlayer',
      'PitchCompensationAvailability',
      'AlwaysOn',
    );
    export const Available = createEnumToken(
      'MediaPlayer',
      'PitchCompensationAvailability',
      'Available',
    );
    export const Unavailable = createEnumToken(
      'MediaPlayer',
      'PitchCompensationAvailability',
      'Unavailable',
    );
  }
  export namespace PlaybackState {
    export const StoppedState = createEnumToken('MediaPlayer', 'PlaybackState', 'StoppedState');
    export const PlayingState = createEnumToken('MediaPlayer', 'PlaybackState', 'PlayingState');
    export const PausedState = createEnumToken('MediaPlayer', 'PlaybackState', 'PausedState');
  }
}
