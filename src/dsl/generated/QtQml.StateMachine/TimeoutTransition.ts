// AUTO-GENERATED — DO NOT EDIT
// Type: TimeoutTransition
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface TimeoutTransitionBuilder {
  id(id: string): TimeoutTransitionBuilder;
  child(obj: QmlObjectBuilder): TimeoutTransitionBuilder;
  children(...objs: QmlObjectBuilder[]): TimeoutTransitionBuilder;

  objectName(value: string): TimeoutTransitionBuilder;
  objectNameBind(expr: string): TimeoutTransitionBuilder;
  senderObject(value: QtObjectBuilder): TimeoutTransitionBuilder;
  senderObjectBind(expr: string): TimeoutTransitionBuilder;
  signal(value: string): TimeoutTransitionBuilder;
  signalBind(expr: string): TimeoutTransitionBuilder;
  targetState(value: QmlValue): TimeoutTransitionBuilder;
  targetStateBind(expr: string): TimeoutTransitionBuilder;
  targetStates(value: QmlValue[]): TimeoutTransitionBuilder;
  targetStatesBind(expr: string): TimeoutTransitionBuilder;
  timeout(value: number): TimeoutTransitionBuilder;
  timeoutBind(expr: string): TimeoutTransitionBuilder;
  transitionType(value: QmlEnumToken): TimeoutTransitionBuilder;
  transitionTypeBind(expr: string): TimeoutTransitionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
  onSenderObjectChanged(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
  onSignalChanged(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
  onTargetStateChanged(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
  onTargetStatesChanged(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
  onTriggered(handler: DslSignalHandlerValue): TimeoutTransitionBuilder;
}

const TIMEOUTTRANSITION_META: TypeMetadata = {
  typeName: 'TimeoutTransition',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'senderObject', hasValue: true, hasBinding: true },
    { name: 'signal', hasValue: true, hasBinding: true },
    { name: 'targetState', hasValue: true, hasBinding: true },
    { name: 'targetStates', hasValue: true, hasBinding: true },
    { name: 'timeout', hasValue: true, hasBinding: true },
    { name: 'transitionType', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSenderObjectChanged', paramCount: 0 },
    { handlerName: 'onSignalChanged', paramCount: 0 },
    { handlerName: 'onTargetStateChanged', paramCount: 0 },
    { handlerName: 'onTargetStatesChanged', paramCount: 0 },
    { handlerName: 'onTriggered', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function TimeoutTransition(): TimeoutTransitionBuilder {
  return createFluentBuilder(
    'TimeoutTransition',
    TIMEOUTTRANSITION_META,
  ) as unknown as TimeoutTransitionBuilder;
}

export namespace TimeoutTransition {
  export namespace TransitionType {
    export const ExternalTransition = createEnumToken(
      'TimeoutTransition',
      'TransitionType',
      'ExternalTransition',
    );
    export const InternalTransition = createEnumToken(
      'TimeoutTransition',
      'TransitionType',
      'InternalTransition',
    );
  }
}
