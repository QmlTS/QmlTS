// AUTO-GENERATED — DO NOT EDIT
// Type: BlendedClipAnimator
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ChannelMapperBuilder } from './ChannelMapper.js';
import type { ClockBuilder } from './Clock.js';
export interface BlendedClipAnimatorBuilder {
  id(id: string): BlendedClipAnimatorBuilder;
  child(obj: QmlObjectBuilder): BlendedClipAnimatorBuilder;

  blendTree(value: QmlValue): BlendedClipAnimatorBuilder;
  blendTreeBind(expr: string): BlendedClipAnimatorBuilder;
  channelMapper(value: ChannelMapperBuilder): BlendedClipAnimatorBuilder;
  channelMapperBind(expr: string): BlendedClipAnimatorBuilder;
  clock(value: ClockBuilder): BlendedClipAnimatorBuilder;
  clockBind(expr: string): BlendedClipAnimatorBuilder;
  enabled(value: boolean): BlendedClipAnimatorBuilder;
  enabledBind(expr: string): BlendedClipAnimatorBuilder;
  isShareable(value: boolean): BlendedClipAnimatorBuilder;
  isShareableBind(expr: string): BlendedClipAnimatorBuilder;
  loops(value: number): BlendedClipAnimatorBuilder;
  loopsBind(expr: string): BlendedClipAnimatorBuilder;
  normalizedTime(value: number): BlendedClipAnimatorBuilder;
  normalizedTimeBind(expr: string): BlendedClipAnimatorBuilder;
  objectName(value: string): BlendedClipAnimatorBuilder;
  objectNameBind(expr: string): BlendedClipAnimatorBuilder;
  parent(value: QmlValue): BlendedClipAnimatorBuilder;
  parentBind(expr: string): BlendedClipAnimatorBuilder;
  running(value: boolean): BlendedClipAnimatorBuilder;
  runningBind(expr: string): BlendedClipAnimatorBuilder;
  onAddedToEntity(body: string): BlendedClipAnimatorBuilder;
  onBlendTreeChanged(body: string): BlendedClipAnimatorBuilder;
  onChannelMapperChanged(body: string): BlendedClipAnimatorBuilder;
  onClockChanged(body: string): BlendedClipAnimatorBuilder;
  onEnabledChanged(body: string): BlendedClipAnimatorBuilder;
  onLoopCountChanged(body: string): BlendedClipAnimatorBuilder;
  onNodeDestroyed(body: string): BlendedClipAnimatorBuilder;
  onNormalizedTimeChanged(body: string): BlendedClipAnimatorBuilder;
  onObjectNameChanged(body: string): BlendedClipAnimatorBuilder;
  onParentChanged(body: string): BlendedClipAnimatorBuilder;
  onRemovedFromEntity(body: string): BlendedClipAnimatorBuilder;
  onRunningChanged(body: string): BlendedClipAnimatorBuilder;
  onShareableChanged(body: string): BlendedClipAnimatorBuilder;
}

const BLENDEDCLIPANIMATOR_META: TypeMetadata = {
  typeName: 'BlendedClipAnimator',
  properties: [
    { name: 'blendTree', hasValue: true, hasBinding: true },
    { name: 'channelMapper', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBlendTreeChanged', paramCount: 1 },
    { handlerName: 'onChannelMapperChanged', paramCount: 1 },
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
  grouped: [],
  attached: [],
};

export function BlendedClipAnimator(): BlendedClipAnimatorBuilder {
  return createFluentBuilder(
    'BlendedClipAnimator',
    BLENDEDCLIPANIMATOR_META,
  ) as unknown as BlendedClipAnimatorBuilder;
}

export namespace BlendedClipAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('BlendedClipAnimator', 'Loops', 'Infinite');
  }
}
