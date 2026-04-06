// AUTO-GENERATED — DO NOT EDIT
// Type: Clock
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ClockBuilder {
  id(id: string): ClockBuilder;
  child(obj: QmlObjectBuilder): ClockBuilder;
  children(...objs: QmlObjectBuilder[]): ClockBuilder;

  enabled(value: boolean): ClockBuilder;
  enabledBind(expr: string): ClockBuilder;
  objectName(value: string): ClockBuilder;
  objectNameBind(expr: string): ClockBuilder;
  parent(value: QmlValue): ClockBuilder;
  parentBind(expr: string): ClockBuilder;
  playbackRate(value: number): ClockBuilder;
  playbackRateBind(expr: string): ClockBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ClockBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ClockBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ClockBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ClockBuilder;
  onPlaybackRateChanged(handler: DslSignalHandlerValue): ClockBuilder;
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
  grouped: [],
  attached: [],
};

export function Clock(): ClockBuilder {
  return createFluentBuilder('Clock', CLOCK_META) as unknown as ClockBuilder;
}
