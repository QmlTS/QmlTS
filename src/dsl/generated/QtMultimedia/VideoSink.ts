// AUTO-GENERATED — DO NOT EDIT
// Type: VideoSink
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface VideoSinkBuilder {
  id(id: string): VideoSinkBuilder;
  child(obj: QmlObjectBuilder): VideoSinkBuilder;

  objectName(value: string): VideoSinkBuilder;
  objectNameBind(expr: string): VideoSinkBuilder;
  subtitleText(value: string): VideoSinkBuilder;
  subtitleTextBind(expr: string): VideoSinkBuilder;
  onObjectNameChanged(body: string): VideoSinkBuilder;
  onSubtitleTextChanged(body: string): VideoSinkBuilder;
  onVideoFrameChanged(body: string): VideoSinkBuilder;
  onVideoSizeChanged(body: string): VideoSinkBuilder;
}

const VIDEOSINK_META: TypeMetadata = {
  typeName: 'VideoSink',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'subtitleText', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSubtitleTextChanged', paramCount: 1 },
    { handlerName: 'onVideoFrameChanged', paramCount: 0 },
    { handlerName: 'onVideoSizeChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function VideoSink(): VideoSinkBuilder {
  return createFluentBuilder('VideoSink', VIDEOSINK_META) as unknown as VideoSinkBuilder;
}
