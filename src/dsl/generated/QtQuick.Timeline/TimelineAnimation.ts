// AUTO-GENERATED — DO NOT EDIT
// Type: TimelineAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface TimelineAnimationBuilder {
  id(id: string): TimelineAnimationBuilder;
  child(obj: QmlObjectBuilder): TimelineAnimationBuilder;

  alwaysRunToEnd(value: boolean): TimelineAnimationBuilder;
  alwaysRunToEndBind(expr: string): TimelineAnimationBuilder;
  duration(value: number): TimelineAnimationBuilder;
  durationBind(expr: string): TimelineAnimationBuilder;
  easing(value: QmlValue): TimelineAnimationBuilder;
  easingBind(expr: string): TimelineAnimationBuilder;
  from(value: number): TimelineAnimationBuilder;
  fromBind(expr: string): TimelineAnimationBuilder;
  loops(value: number): TimelineAnimationBuilder;
  loopsBind(expr: string): TimelineAnimationBuilder;
  objectName(value: string): TimelineAnimationBuilder;
  objectNameBind(expr: string): TimelineAnimationBuilder;
  paused(value: boolean): TimelineAnimationBuilder;
  pausedBind(expr: string): TimelineAnimationBuilder;
  pingPong(value: boolean): TimelineAnimationBuilder;
  pingPongBind(expr: string): TimelineAnimationBuilder;
  properties(value: string): TimelineAnimationBuilder;
  propertiesBind(expr: string): TimelineAnimationBuilder;
  property(value: string): TimelineAnimationBuilder;
  propertyBind(expr: string): TimelineAnimationBuilder;
  running(value: boolean): TimelineAnimationBuilder;
  runningBind(expr: string): TimelineAnimationBuilder;
  target(value: QtObjectBuilder): TimelineAnimationBuilder;
  targetBind(expr: string): TimelineAnimationBuilder;
  to(value: number): TimelineAnimationBuilder;
  toBind(expr: string): TimelineAnimationBuilder;
  onAlwaysRunToEndChanged(body: string): TimelineAnimationBuilder;
  onDurationChanged(body: string): TimelineAnimationBuilder;
  onEasingChanged(body: string): TimelineAnimationBuilder;
  onFinished(body: string): TimelineAnimationBuilder;
  onFromChanged(body: string): TimelineAnimationBuilder;
  onLoopCountChanged(body: string): TimelineAnimationBuilder;
  onObjectNameChanged(body: string): TimelineAnimationBuilder;
  onPausedChanged(body: string): TimelineAnimationBuilder;
  onPingPongChanged(body: string): TimelineAnimationBuilder;
  onPropertiesChanged(body: string): TimelineAnimationBuilder;
  onPropertyChanged(body: string): TimelineAnimationBuilder;
  onRunningChanged(body: string): TimelineAnimationBuilder;
  onStarted(body: string): TimelineAnimationBuilder;
  onStopped(body: string): TimelineAnimationBuilder;
  onTargetChanged(body: string): TimelineAnimationBuilder;
  onToChanged(body: string): TimelineAnimationBuilder;
}

const TIMELINEANIMATION_META: TypeMetadata = {
  typeName: 'TimelineAnimation',
  properties: [
    { name: 'alwaysRunToEnd', hasValue: true, hasBinding: true },
    { name: 'duration', hasValue: true, hasBinding: true },
    { name: 'easing', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'paused', hasValue: true, hasBinding: true },
    { name: 'pingPong', hasValue: true, hasBinding: true },
    { name: 'properties', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlwaysRunToEndChanged', paramCount: 1 },
    { handlerName: 'onDurationChanged', paramCount: 1 },
    { handlerName: 'onEasingChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onLoopCountChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPausedChanged', paramCount: 1 },
    { handlerName: 'onPingPongChanged', paramCount: 0 },
    { handlerName: 'onPropertiesChanged', paramCount: 1 },
    { handlerName: 'onPropertyChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onStarted', paramCount: 0 },
    { handlerName: 'onStopped', paramCount: 0 },
    { handlerName: 'onTargetChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TimelineAnimation(): TimelineAnimationBuilder {
  return createFluentBuilder(
    'TimelineAnimation',
    TIMELINEANIMATION_META,
  ) as unknown as TimelineAnimationBuilder;
}

export namespace TimelineAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('TimelineAnimation', 'Loops', 'Infinite');
  }
}
