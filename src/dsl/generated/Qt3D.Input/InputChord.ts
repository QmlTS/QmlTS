// AUTO-GENERATED — DO NOT EDIT
// Type: InputChord
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface InputChordBuilder {
  id(id: string): InputChordBuilder;
  child(obj: QmlObjectBuilder): InputChordBuilder;
  children(...objs: QmlObjectBuilder[]): InputChordBuilder;

  enabled(value: boolean): InputChordBuilder;
  enabledBind(expr: string): InputChordBuilder;
  objectName(value: string): InputChordBuilder;
  objectNameBind(expr: string): InputChordBuilder;
  parent(value: QmlValue): InputChordBuilder;
  parentBind(expr: string): InputChordBuilder;
  timeout(value: number): InputChordBuilder;
  timeoutBind(expr: string): InputChordBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): InputChordBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): InputChordBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): InputChordBuilder;
  onParentChanged(handler: DslSignalHandlerValue): InputChordBuilder;
  onTimeoutChanged(handler: DslSignalHandlerValue): InputChordBuilder;
}

const INPUTCHORD_META: TypeMetadata = {
  typeName: 'InputChord',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'timeout', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTimeoutChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function InputChord(): InputChordBuilder {
  return createFluentBuilder('InputChord', INPUTCHORD_META) as unknown as InputChordBuilder;
}
