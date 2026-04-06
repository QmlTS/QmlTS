// AUTO-GENERATED — DO NOT EDIT
// Type: StateMachine
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface StateMachineBuilder {
  id(id: string): StateMachineBuilder;
  child(obj: QmlObjectBuilder): StateMachineBuilder;
  children(...objs: QmlObjectBuilder[]): StateMachineBuilder;

  animated(value: boolean): StateMachineBuilder;
  animatedBind(expr: string): StateMachineBuilder;
  childMode(value: QmlEnumToken): StateMachineBuilder;
  childModeBind(expr: string): StateMachineBuilder;
  errorState(value: QmlValue): StateMachineBuilder;
  errorStateBind(expr: string): StateMachineBuilder;
  globalRestorePolicy(value: QmlEnumToken): StateMachineBuilder;
  globalRestorePolicyBind(expr: string): StateMachineBuilder;
  initialState(value: QmlValue): StateMachineBuilder;
  initialStateBind(expr: string): StateMachineBuilder;
  objectName(value: string): StateMachineBuilder;
  objectNameBind(expr: string): StateMachineBuilder;
  running(value: boolean): StateMachineBuilder;
  runningBind(expr: string): StateMachineBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onChildModeChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onEntered(handler: DslSignalHandlerValue): StateMachineBuilder;
  onErrorStateChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onExited(handler: DslSignalHandlerValue): StateMachineBuilder;
  onFinished(handler: DslSignalHandlerValue): StateMachineBuilder;
  onInitialStateChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onPropertiesAssigned(handler: DslSignalHandlerValue): StateMachineBuilder;
  onQmlRunningChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onRunningChanged(handler: DslSignalHandlerValue): StateMachineBuilder;
  onStarted(handler: DslSignalHandlerValue): StateMachineBuilder;
  onStopped(handler: DslSignalHandlerValue): StateMachineBuilder;
}

const STATEMACHINE_META: TypeMetadata = {
  typeName: 'StateMachine',
  properties: [
    { name: 'animated', hasValue: true, hasBinding: true },
    { name: 'childMode', hasValue: true, hasBinding: true },
    { name: 'errorState', hasValue: true, hasBinding: true },
    { name: 'globalRestorePolicy', hasValue: true, hasBinding: true },
    { name: 'initialState', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'running', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onChildModeChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onErrorStateChanged', paramCount: 0 },
    { handlerName: 'onExited', paramCount: 0 },
    { handlerName: 'onFinished', paramCount: 0 },
    { handlerName: 'onInitialStateChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPropertiesAssigned', paramCount: 0 },
    { handlerName: 'onQmlRunningChanged', paramCount: 0 },
    { handlerName: 'onRunningChanged', paramCount: 1 },
    { handlerName: 'onStarted', paramCount: 0 },
    { handlerName: 'onStopped', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'children',
};

export function StateMachine(): StateMachineBuilder {
  return createFluentBuilder('StateMachine', STATEMACHINE_META) as unknown as StateMachineBuilder;
}

export namespace StateMachine {
  export namespace ChildMode {
    export const ExclusiveStates = createEnumToken('StateMachine', 'ChildMode', 'ExclusiveStates');
    export const ParallelStates = createEnumToken('StateMachine', 'ChildMode', 'ParallelStates');
  }
  export namespace RestorePolicy {
    export const DontRestoreProperties = createEnumToken(
      'StateMachine',
      'RestorePolicy',
      'DontRestoreProperties',
    );
    export const RestoreProperties = createEnumToken(
      'StateMachine',
      'RestorePolicy',
      'RestoreProperties',
    );
  }
}
