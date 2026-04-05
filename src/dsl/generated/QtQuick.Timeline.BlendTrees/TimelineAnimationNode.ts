// AUTO-GENERATED — DO NOT EDIT
// Type: TimelineAnimationNode
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { TimelineBuilder } from '../QtQuick.Timeline/Timeline.js';
import type { TimelineAnimationBuilder } from '../QtQuick.Timeline/TimelineAnimation.js';
export interface TimelineAnimationNodeBuilder {
  id(id: string): TimelineAnimationNodeBuilder;
  child(obj: QmlObjectBuilder): TimelineAnimationNodeBuilder;

  animation(value: TimelineAnimationBuilder): TimelineAnimationNodeBuilder;
  animationBind(expr: string): TimelineAnimationNodeBuilder;
  currentFrame(value: number): TimelineAnimationNodeBuilder;
  currentFrameBind(expr: string): TimelineAnimationNodeBuilder;
  objectName(value: string): TimelineAnimationNodeBuilder;
  objectNameBind(expr: string): TimelineAnimationNodeBuilder;
  outputEnabled(value: boolean): TimelineAnimationNodeBuilder;
  outputEnabledBind(expr: string): TimelineAnimationNodeBuilder;
  timeline(value: TimelineBuilder): TimelineAnimationNodeBuilder;
  timelineBind(expr: string): TimelineAnimationNodeBuilder;
  onAnimationChanged(body: string): TimelineAnimationNodeBuilder;
  onCurrentFrameChanged(body: string): TimelineAnimationNodeBuilder;
  onFrameDataChanged(body: string): TimelineAnimationNodeBuilder;
  onObjectNameChanged(body: string): TimelineAnimationNodeBuilder;
  onOutputEnabledChanged(body: string): TimelineAnimationNodeBuilder;
  onTimelineChanged(body: string): TimelineAnimationNodeBuilder;
}

const TIMELINEANIMATIONNODE_META: TypeMetadata = {
  typeName: 'TimelineAnimationNode',
  properties: [
    { name: 'animation', hasValue: true, hasBinding: true },
    { name: 'currentFrame', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'outputEnabled', hasValue: true, hasBinding: true },
    { name: 'timeline', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAnimationChanged', paramCount: 0 },
    { handlerName: 'onCurrentFrameChanged', paramCount: 0 },
    { handlerName: 'onFrameDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputEnabledChanged', paramCount: 0 },
    { handlerName: 'onTimelineChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function TimelineAnimationNode(): TimelineAnimationNodeBuilder {
  return createFluentBuilder('TimelineAnimationNode', TIMELINEANIMATIONNODE_META) as unknown as TimelineAnimationNodeBuilder;
}
