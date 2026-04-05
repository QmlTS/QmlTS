// AUTO-GENERATED — DO NOT EDIT
// Type: ClipAnimator
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { ChannelMapperBuilder } from './ChannelMapper.js';
import type { ClockBuilder } from './Clock.js';
export interface ClipAnimatorBuilder {
  id(id: string): ClipAnimatorBuilder;
  child(obj: QmlObjectBuilder): ClipAnimatorBuilder;

  channelMapper(value: ChannelMapperBuilder): ClipAnimatorBuilder;
  channelMapperBind(expr: string): ClipAnimatorBuilder;
  clip(value: QmlValue): ClipAnimatorBuilder;
  clipBind(expr: string): ClipAnimatorBuilder;
  clock(value: ClockBuilder): ClipAnimatorBuilder;
  clockBind(expr: string): ClipAnimatorBuilder;
  enabled(value: boolean): ClipAnimatorBuilder;
  enabledBind(expr: string): ClipAnimatorBuilder;
  isShareable(value: boolean): ClipAnimatorBuilder;
  isShareableBind(expr: string): ClipAnimatorBuilder;
  loops(value: number): ClipAnimatorBuilder;
  loopsBind(expr: string): ClipAnimatorBuilder;
  normalizedTime(value: number): ClipAnimatorBuilder;
  normalizedTimeBind(expr: string): ClipAnimatorBuilder;
  objectName(value: string): ClipAnimatorBuilder;
  objectNameBind(expr: string): ClipAnimatorBuilder;
  parent(value: QmlValue): ClipAnimatorBuilder;
  parentBind(expr: string): ClipAnimatorBuilder;
  running(value: boolean): ClipAnimatorBuilder;
  runningBind(expr: string): ClipAnimatorBuilder;
  onAddedToEntity(body: string): ClipAnimatorBuilder;
  onChannelMapperChanged(body: string): ClipAnimatorBuilder;
  onClipChanged(body: string): ClipAnimatorBuilder;
  onClockChanged(body: string): ClipAnimatorBuilder;
  onEnabledChanged(body: string): ClipAnimatorBuilder;
  onLoopCountChanged(body: string): ClipAnimatorBuilder;
  onNodeDestroyed(body: string): ClipAnimatorBuilder;
  onNormalizedTimeChanged(body: string): ClipAnimatorBuilder;
  onObjectNameChanged(body: string): ClipAnimatorBuilder;
  onParentChanged(body: string): ClipAnimatorBuilder;
  onRemovedFromEntity(body: string): ClipAnimatorBuilder;
  onRunningChanged(body: string): ClipAnimatorBuilder;
  onShareableChanged(body: string): ClipAnimatorBuilder;
}

const CLIPANIMATOR_META: TypeMetadata = {
  typeName: 'ClipAnimator',
  properties: [
    { name: 'channelMapper', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'clock', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'loops', hasValue: true, hasBinding: true },
    { name: 'normalizedTime', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onChannelMapperChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onClockChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onLoopCountChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onNormalizedTimeChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ClipAnimator(): ClipAnimatorBuilder {
  return createFluentBuilder('ClipAnimator', CLIPANIMATOR_META) as unknown as ClipAnimatorBuilder;
}

export namespace ClipAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('ClipAnimator', 'Loops', 'Infinite');
  }
}
