// AUTO-GENERATED — DO NOT EDIT
// Type: Timer
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TimerBuilder {
  id(id: string): TimerBuilder;
  child(obj: QmlObjectBuilder): TimerBuilder;
  children(...objs: QmlObjectBuilder[]): TimerBuilder;

  interval(value: number): TimerBuilder;
  intervalBind(expr: string): TimerBuilder;
  objectName(value: string): TimerBuilder;
  objectNameBind(expr: string): TimerBuilder;
  repeat(value: boolean): TimerBuilder;
  repeatBind(expr: string): TimerBuilder;
  running(value: boolean): TimerBuilder;
  runningBind(expr: string): TimerBuilder;
  triggeredOnStart(value: boolean): TimerBuilder;
  triggeredOnStartBind(expr: string): TimerBuilder;
  onIntervalChanged(handler: DslSignalHandlerValue): TimerBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TimerBuilder;
  onRepeatChanged(handler: DslSignalHandlerValue): TimerBuilder;
  onRunningChanged(handler: DslSignalHandlerValue): TimerBuilder;
  onTriggered(handler: DslSignalHandlerValue): TimerBuilder;
  onTriggeredOnStartChanged(handler: DslSignalHandlerValue): TimerBuilder;
}

const TIMER_META: TypeMetadata = {
  typeName: 'Timer',
  properties: [
    { name: 'interval', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'repeat', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
    { name: 'triggeredOnStart', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onIntervalChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRepeatChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 0 },
    { handlerName: 'onTriggered', paramCount: 0 },
    { handlerName: 'onTriggeredOnStartChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function Timer(): TimerBuilder {
  return createFluentBuilder('Timer', TIMER_META) as unknown as TimerBuilder;
}
