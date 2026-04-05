// AUTO-GENERATED — DO NOT EDIT
// Type: Timeline
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface TimelineBuilder {
  id(id: string): TimelineBuilder;
  child(obj: QmlObjectBuilder): TimelineBuilder;

  currentFrame(value: number): TimelineBuilder;
  currentFrameBind(expr: string): TimelineBuilder;
  enabled(value: boolean): TimelineBuilder;
  enabledBind(expr: string): TimelineBuilder;
  endFrame(value: number): TimelineBuilder;
  endFrameBind(expr: string): TimelineBuilder;
  objectName(value: string): TimelineBuilder;
  objectNameBind(expr: string): TimelineBuilder;
  startFrame(value: number): TimelineBuilder;
  startFrameBind(expr: string): TimelineBuilder;
  onCurrentFrameChanged(body: string): TimelineBuilder;
  onEnabledChanged(body: string): TimelineBuilder;
  onEndFrameChanged(body: string): TimelineBuilder;
  onObjectNameChanged(body: string): TimelineBuilder;
  onStartFrameChanged(body: string): TimelineBuilder;
}

const TIMELINE_META: TypeMetadata = {
  typeName: 'Timeline',
  properties: [
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'endFrame', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'startFrame', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onEndFrameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStartFrameChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'keyframeGroups',
};

export function Timeline(): TimelineBuilder {
  return createFluentBuilder('Timeline', TIMELINE_META) as unknown as TimelineBuilder;
}
