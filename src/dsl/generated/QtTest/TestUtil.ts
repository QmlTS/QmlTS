// AUTO-GENERATED — DO NOT EDIT
// Type: TestUtil
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface TestUtilBuilder {
  id(id: string): TestUtilBuilder;
  child(obj: QmlObjectBuilder): TestUtilBuilder;
  children(...objs: QmlObjectBuilder[]): TestUtilBuilder;

  objectName(value: string): TestUtilBuilder;
  objectNameBind(expr: string): TestUtilBuilder;
  onDragThresholdChanged(handler: DslSignalHandlerValue): TestUtilBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TestUtilBuilder;
  onPrintAvailableFunctionsChanged(handler: DslSignalHandlerValue): TestUtilBuilder;
}

const TESTUTIL_META: TypeMetadata = {
  typeName: 'TestUtil',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onDragThresholdChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPrintAvailableFunctionsChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TestUtil(): TestUtilBuilder {
  return createFluentBuilder('TestUtil', TESTUTIL_META) as unknown as TestUtilBuilder;
}
