// AUTO-GENERATED — DO NOT EDIT
// Type: SignalTransition
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
export interface SignalTransitionBuilder {
  id(id: string): SignalTransitionBuilder;
  child(obj: QmlObjectBuilder): SignalTransitionBuilder;

  guard(value: QmlValue): SignalTransitionBuilder;
  guardBind(expr: string): SignalTransitionBuilder;
  objectName(value: string): SignalTransitionBuilder;
  objectNameBind(expr: string): SignalTransitionBuilder;
  senderObject(value: QtObjectBuilder): SignalTransitionBuilder;
  senderObjectBind(expr: string): SignalTransitionBuilder;
  signal(value: QmlValue): SignalTransitionBuilder;
  signalBind(expr: string): SignalTransitionBuilder;
  targetState(value: QmlValue): SignalTransitionBuilder;
  targetStateBind(expr: string): SignalTransitionBuilder;
  targetStates(value: QmlValue[]): SignalTransitionBuilder;
  targetStatesBind(expr: string): SignalTransitionBuilder;
  transitionType(value: QmlEnumToken): SignalTransitionBuilder;
  transitionTypeBind(expr: string): SignalTransitionBuilder;
  onGuardChanged(body: string): SignalTransitionBuilder;
  onInvokeYourself(body: string): SignalTransitionBuilder;
  onObjectNameChanged(body: string): SignalTransitionBuilder;
  onQmlSignalChanged(body: string): SignalTransitionBuilder;
  onSenderObjectChanged(body: string): SignalTransitionBuilder;
  onSignalChanged(body: string): SignalTransitionBuilder;
  onTargetStateChanged(body: string): SignalTransitionBuilder;
  onTargetStatesChanged(body: string): SignalTransitionBuilder;
  onTriggered(body: string): SignalTransitionBuilder;
}

const SIGNALTRANSITION_META: TypeMetadata = {
  typeName: 'SignalTransition',
  properties: [
    { name: 'guard', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'senderObject', hasValue: true, hasBinding: true },
    { name: 'signal', hasValue: true, hasBinding: true },
    { name: 'targetState', hasValue: true, hasBinding: true },
    { name: 'targetStates', hasValue: true, hasBinding: true },
    { name: 'transitionType', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onGuardChanged', paramCount: 0 },
    { handlerName: 'onInvokeYourself', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onQmlSignalChanged', paramCount: 0 },
    { handlerName: 'onSenderObjectChanged', paramCount: 0 },
    { handlerName: 'onSignalChanged', paramCount: 0 },
    { handlerName: 'onTargetStateChanged', paramCount: 0 },
    { handlerName: 'onTargetStatesChanged', paramCount: 0 },
    { handlerName: 'onTriggered', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SignalTransition(): SignalTransitionBuilder {
  return createFluentBuilder(
    'SignalTransition',
    SIGNALTRANSITION_META,
  ) as unknown as SignalTransitionBuilder;
}

export namespace SignalTransition {
  export namespace TransitionType {
    export const ExternalTransition = createEnumToken(
      'SignalTransition',
      'TransitionType',
      'ExternalTransition',
    );
    export const InternalTransition = createEnumToken(
      'SignalTransition',
      'TransitionType',
      'InternalTransition',
    );
  }
}
