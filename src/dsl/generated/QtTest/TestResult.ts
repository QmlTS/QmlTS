// AUTO-GENERATED — DO NOT EDIT
// Type: TestResult
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TestResultBuilder {
  id(id: string): TestResultBuilder;
  child(obj: QmlObjectBuilder): TestResultBuilder;

  dataTag(value: string): TestResultBuilder;
  dataTagBind(expr: string): TestResultBuilder;
  functionName(value: string): TestResultBuilder;
  functionNameBind(expr: string): TestResultBuilder;
  objectName(value: string): TestResultBuilder;
  objectNameBind(expr: string): TestResultBuilder;
  skipped(value: boolean): TestResultBuilder;
  skippedBind(expr: string): TestResultBuilder;
  testCaseName(value: string): TestResultBuilder;
  testCaseNameBind(expr: string): TestResultBuilder;
  onDataTagChanged(body: string): TestResultBuilder;
  onFunctionNameChanged(body: string): TestResultBuilder;
  onObjectNameChanged(body: string): TestResultBuilder;
  onProgramNameChanged(body: string): TestResultBuilder;
  onSkippedChanged(body: string): TestResultBuilder;
  onTestCaseNameChanged(body: string): TestResultBuilder;
}

const TESTRESULT_META: TypeMetadata = {
  typeName: 'TestResult',
  properties: [
    { name: 'dataTag', hasValue: true, hasBinding: true },
    { name: 'functionName', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'skipped', hasValue: true, hasBinding: true },
    { name: 'testCaseName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDataTagChanged', paramCount: 0 },
    { handlerName: 'onFunctionNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProgramNameChanged', paramCount: 0 },
    { handlerName: 'onSkippedChanged', paramCount: 0 },
    { handlerName: 'onTestCaseNameChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TestResult(): TestResultBuilder {
  return createFluentBuilder('TestResult', TESTRESULT_META) as unknown as TestResultBuilder;
}

export namespace TestResult {
  export namespace RunMode {
    export const RepeatUntilValidMeasurement = createEnumToken(
      'TestResult',
      'RunMode',
      'RepeatUntilValidMeasurement',
    );
    export const RunOnce = createEnumToken('TestResult', 'RunMode', 'RunOnce');
  }
}
