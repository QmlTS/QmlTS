// AUTO-GENERATED — DO NOT EDIT
// Type: Timer
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface TimerBuilder {
  id(id: string): TimerBuilder;
  child(obj: QmlObjectBuilder): TimerBuilder;

  component(value: QmlComponent): TimerBuilder;
  componentBind(expr: string): TimerBuilder;
  objectName(value: string): TimerBuilder;
  objectNameBind(expr: string): TimerBuilder;
  onObjectNameChanged(body: string): TimerBuilder;
}

const TIMER_META: TypeMetadata = {
  typeName: 'Timer',
  properties: [
    { name: 'component', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Timer(): TimerBuilder {
  return createFluentBuilder('Timer', TIMER_META) as unknown as TimerBuilder;
}
