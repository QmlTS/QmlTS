// AUTO-GENERATED — DO NOT EDIT
// Type: MediaRecorder
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlSize,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface MediaRecorderBuilder {
  id(id: string): MediaRecorderBuilder;
  child(obj: QmlObjectBuilder): MediaRecorderBuilder;

  audioBitRate(value: number): MediaRecorderBuilder;
  audioBitRateBind(expr: string): MediaRecorderBuilder;
  audioChannelCount(value: number): MediaRecorderBuilder;
  audioChannelCountBind(expr: string): MediaRecorderBuilder;
  audioSampleRate(value: number): MediaRecorderBuilder;
  audioSampleRateBind(expr: string): MediaRecorderBuilder;
  autoStop(value: boolean): MediaRecorderBuilder;
  autoStopBind(expr: string): MediaRecorderBuilder;
  encodingMode(value: QmlEnumToken): MediaRecorderBuilder;
  encodingModeBind(expr: string): MediaRecorderBuilder;
  mediaFormat(value: QmlValue): MediaRecorderBuilder;
  mediaFormatBind(expr: string): MediaRecorderBuilder;
  metaData(value: QmlValue): MediaRecorderBuilder;
  metaDataBind(expr: string): MediaRecorderBuilder;
  objectName(value: string): MediaRecorderBuilder;
  objectNameBind(expr: string): MediaRecorderBuilder;
  outputLocation(value: QmlUrl): MediaRecorderBuilder;
  outputLocationBind(expr: string): MediaRecorderBuilder;
  quality(value: QmlEnumToken): MediaRecorderBuilder;
  qualityBind(expr: string): MediaRecorderBuilder;
  videoBitRate(value: number): MediaRecorderBuilder;
  videoBitRateBind(expr: string): MediaRecorderBuilder;
  videoFrameRate(value: number): MediaRecorderBuilder;
  videoFrameRateBind(expr: string): MediaRecorderBuilder;
  videoResolution(value: QmlSize): MediaRecorderBuilder;
  videoResolutionBind(expr: string): MediaRecorderBuilder;
  onActualLocationChanged(body: string): MediaRecorderBuilder;
  onAudioBitRateChanged(body: string): MediaRecorderBuilder;
  onAudioChannelCountChanged(body: string): MediaRecorderBuilder;
  onAudioSampleRateChanged(body: string): MediaRecorderBuilder;
  onAutoStopChanged(body: string): MediaRecorderBuilder;
  onDurationChanged(body: string): MediaRecorderBuilder;
  onEncoderSettingsChanged(body: string): MediaRecorderBuilder;
  onEncodingModeChanged(body: string): MediaRecorderBuilder;
  onErrorChanged(body: string): MediaRecorderBuilder;
  onErrorOccurred(body: string): MediaRecorderBuilder;
  onMediaFormatChanged(body: string): MediaRecorderBuilder;
  onMetaDataChanged(body: string): MediaRecorderBuilder;
  onObjectNameChanged(body: string): MediaRecorderBuilder;
  onQualityChanged(body: string): MediaRecorderBuilder;
  onRecorderStateChanged(body: string): MediaRecorderBuilder;
  onVideoBitRateChanged(body: string): MediaRecorderBuilder;
  onVideoFrameRateChanged(body: string): MediaRecorderBuilder;
  onVideoResolutionChanged(body: string): MediaRecorderBuilder;
}

const MEDIARECORDER_META: TypeMetadata = {
  typeName: 'MediaRecorder',
  properties: [
    { name: 'audioBitRate', hasValue: true, hasBinding: true },
    { name: 'audioChannelCount', hasValue: true, hasBinding: true },
    { name: 'audioSampleRate', hasValue: true, hasBinding: true },
    { name: 'autoStop', hasValue: true, hasBinding: true },
    { name: 'encodingMode', hasValue: true, hasBinding: true },
    { name: 'mediaFormat', hasValue: true, hasBinding: true },
    { name: 'metaData', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputLocation', hasValue: true, hasBinding: true },
    { name: 'quality', hasValue: true, hasBinding: true },
    { name: 'videoBitRate', hasValue: true, hasBinding: true },
    { name: 'videoFrameRate', hasValue: true, hasBinding: true },
    { name: 'videoResolution', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActualLocationChanged', paramCount: 1 },
    { handlerName: 'onAudioBitRateChanged', paramCount: 0 },
    { handlerName: 'onAudioChannelCountChanged', paramCount: 0 },
    { handlerName: 'onAudioSampleRateChanged', paramCount: 0 },
    { handlerName: 'onAutoStopChanged', paramCount: 0 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEncoderSettingsChanged', paramCount: 0 },
    { handlerName: 'onEncodingModeChanged', paramCount: 0 },
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 2 },
    { handlerName: 'onMediaFormatChanged', paramCount: 0 },
    { handlerName: 'onMetaDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onQualityChanged', paramCount: 0 },
    { handlerName: 'onRecorderStateChanged', paramCount: 1 },
    { handlerName: 'onVideoBitRateChanged', paramCount: 0 },
    { handlerName: 'onVideoFrameRateChanged', paramCount: 0 },
    { handlerName: 'onVideoResolutionChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MediaRecorder(): MediaRecorderBuilder {
  return createFluentBuilder(
    'MediaRecorder',
    MEDIARECORDER_META,
  ) as unknown as MediaRecorderBuilder;
}

export namespace MediaRecorder {
  export namespace EncodingMode {
    export const ConstantQualityEncoding = createEnumToken(
      'MediaRecorder',
      'EncodingMode',
      'ConstantQualityEncoding',
    );
    export const ConstantBitRateEncoding = createEnumToken(
      'MediaRecorder',
      'EncodingMode',
      'ConstantBitRateEncoding',
    );
    export const AverageBitRateEncoding = createEnumToken(
      'MediaRecorder',
      'EncodingMode',
      'AverageBitRateEncoding',
    );
    export const TwoPassEncoding = createEnumToken(
      'MediaRecorder',
      'EncodingMode',
      'TwoPassEncoding',
    );
  }
  export namespace Error {
    export const NoError = createEnumToken('MediaRecorder', 'Error', 'NoError');
    export const ResourceError = createEnumToken('MediaRecorder', 'Error', 'ResourceError');
    export const FormatError = createEnumToken('MediaRecorder', 'Error', 'FormatError');
    export const OutOfSpaceError = createEnumToken('MediaRecorder', 'Error', 'OutOfSpaceError');
    export const LocationNotWritable = createEnumToken(
      'MediaRecorder',
      'Error',
      'LocationNotWritable',
    );
  }
  export namespace Quality {
    export const VeryLowQuality = createEnumToken('MediaRecorder', 'Quality', 'VeryLowQuality');
    export const LowQuality = createEnumToken('MediaRecorder', 'Quality', 'LowQuality');
    export const NormalQuality = createEnumToken('MediaRecorder', 'Quality', 'NormalQuality');
    export const HighQuality = createEnumToken('MediaRecorder', 'Quality', 'HighQuality');
    export const VeryHighQuality = createEnumToken('MediaRecorder', 'Quality', 'VeryHighQuality');
  }
  export namespace RecorderState {
    export const StoppedState = createEnumToken('MediaRecorder', 'RecorderState', 'StoppedState');
    export const RecordingState = createEnumToken(
      'MediaRecorder',
      'RecorderState',
      'RecordingState',
    );
    export const PausedState = createEnumToken('MediaRecorder', 'RecorderState', 'PausedState');
  }
}
