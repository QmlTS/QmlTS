// AUTO-GENERATED — DO NOT EDIT
// Type: EventConnection
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface EventConnectionBuilder {
  id(id: string): EventConnectionBuilder;
  child(obj: QmlObjectBuilder): EventConnectionBuilder;

  events(value: string[]): EventConnectionBuilder;
  eventsBind(expr: string): EventConnectionBuilder;
  objectName(value: string): EventConnectionBuilder;
  objectNameBind(expr: string): EventConnectionBuilder;
  stateMachine(value: QmlValue): EventConnectionBuilder;
  stateMachineBind(expr: string): EventConnectionBuilder;
  onEventsChanged(body: string): EventConnectionBuilder;
  onObjectNameChanged(body: string): EventConnectionBuilder;
  onOccurred(body: string): EventConnectionBuilder;
  onStateMachineChanged(body: string): EventConnectionBuilder;
}

const EVENTCONNECTION_META: TypeMetadata = {
  typeName: 'EventConnection',
  properties: [
    { name: 'events', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'stateMachine', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEventsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOccurred', paramCount: 1 },
    { handlerName: 'onStateMachineChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function EventConnection(): EventConnectionBuilder {
  return createFluentBuilder(
    'EventConnection',
    EVENTCONNECTION_META,
  ) as unknown as EventConnectionBuilder;
}
