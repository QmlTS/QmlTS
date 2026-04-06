// AUTO-GENERATED — DO NOT EDIT
// Type: InputSequence
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface InputSequenceBuilder {
  id(id: string): InputSequenceBuilder;
  child(obj: QmlObjectBuilder): InputSequenceBuilder;
  children(...objs: QmlObjectBuilder[]): InputSequenceBuilder;

  buttonInterval(value: number): InputSequenceBuilder;
  buttonIntervalBind(expr: string): InputSequenceBuilder;
  enabled(value: boolean): InputSequenceBuilder;
  enabledBind(expr: string): InputSequenceBuilder;
  objectName(value: string): InputSequenceBuilder;
  objectNameBind(expr: string): InputSequenceBuilder;
  parent(value: QmlValue): InputSequenceBuilder;
  parentBind(expr: string): InputSequenceBuilder;
  timeout(value: number): InputSequenceBuilder;
  timeoutBind(expr: string): InputSequenceBuilder;
  onButtonIntervalChanged(handler: DslSignalHandlerValue): InputSequenceBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): InputSequenceBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): InputSequenceBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): InputSequenceBuilder;
  onParentChanged(handler: DslSignalHandlerValue): InputSequenceBuilder;
  onTimeoutChanged(handler: DslSignalHandlerValue): InputSequenceBuilder;
}

const INPUTSEQUENCE_META: TypeMetadata = {
  typeName: 'InputSequence',
  properties: [
    { name: 'buttonInterval', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'timeout', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onButtonIntervalChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTimeoutChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function InputSequence(): InputSequenceBuilder {
  return createFluentBuilder(
    'InputSequence',
    INPUTSEQUENCE_META,
  ) as unknown as InputSequenceBuilder;
}
