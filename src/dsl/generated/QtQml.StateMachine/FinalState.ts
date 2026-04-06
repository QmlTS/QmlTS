// AUTO-GENERATED — DO NOT EDIT
// Type: FinalState
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FinalStateBuilder {
  id(id: string): FinalStateBuilder;
  child(obj: QmlObjectBuilder): FinalStateBuilder;
  children(...objs: QmlObjectBuilder[]): FinalStateBuilder;

  objectName(value: string): FinalStateBuilder;
  objectNameBind(expr: string): FinalStateBuilder;
  onActiveChanged(handler: DslSignalHandlerValue): FinalStateBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): FinalStateBuilder;
  onEntered(handler: DslSignalHandlerValue): FinalStateBuilder;
  onExited(handler: DslSignalHandlerValue): FinalStateBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): FinalStateBuilder;
}

const FINALSTATE_META: TypeMetadata = {
  typeName: 'FinalState',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onExited', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'children',
};

export function FinalState(): FinalStateBuilder {
  return createFluentBuilder('FinalState', FINALSTATE_META) as unknown as FinalStateBuilder;
}
