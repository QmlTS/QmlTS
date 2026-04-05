// AUTO-GENERATED — DO NOT EDIT
// Type: TestEvent
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TestEventBuilder {
  id(id: string): TestEventBuilder;
  child(obj: QmlObjectBuilder): TestEventBuilder;

  objectName(value: string): TestEventBuilder;
  objectNameBind(expr: string): TestEventBuilder;
  onObjectNameChanged(body: string): TestEventBuilder;
}

const TESTEVENT_META: TypeMetadata = {
  typeName: 'TestEvent',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function TestEvent(): TestEventBuilder {
  return createFluentBuilder('TestEvent', TESTEVENT_META) as unknown as TestEventBuilder;
}
