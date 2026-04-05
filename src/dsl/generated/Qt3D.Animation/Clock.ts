// AUTO-GENERATED — DO NOT EDIT
// Type: Clock
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ClockBuilder {
  id(id: string): ClockBuilder;
  child(obj: QmlObjectBuilder): ClockBuilder;

  enabled(value: boolean): ClockBuilder;
  enabledBind(expr: string): ClockBuilder;
  objectName(value: string): ClockBuilder;
  objectNameBind(expr: string): ClockBuilder;
  parent(value: QmlValue): ClockBuilder;
  parentBind(expr: string): ClockBuilder;
  playbackRate(value: number): ClockBuilder;
  playbackRateBind(expr: string): ClockBuilder;
  onEnabledChanged(body: string): ClockBuilder;
  onNodeDestroyed(body: string): ClockBuilder;
  onObjectNameChanged(body: string): ClockBuilder;
  onParentChanged(body: string): ClockBuilder;
  onPlaybackRateChanged(body: string): ClockBuilder;
}

const CLOCK_META: TypeMetadata = {
  typeName: 'Clock',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'playbackRate', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPlaybackRateChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Clock(): ClockBuilder {
  return createFluentBuilder('Clock', CLOCK_META) as unknown as ClockBuilder;
}
