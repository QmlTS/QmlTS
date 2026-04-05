// AUTO-GENERATED — DO NOT EDIT
// Type: Timer
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface TimerBuilder {
  id(id: string): TimerBuilder;
  child(obj: QmlObjectBuilder): TimerBuilder;

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
  onIntervalChanged(handler: () => void): TimerBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TimerBuilder;
  onRepeatChanged(handler: () => void): TimerBuilder;
  onRunningChanged(handler: () => void): TimerBuilder;
  onTriggered(handler: () => void): TimerBuilder;
  onTriggeredOnStartChanged(handler: () => void): TimerBuilder;
}

export function Timer(): TimerBuilder {
  return new DslBuilderImpl('Timer') as unknown as TimerBuilder;
}
