// AUTO-GENERATED — DO NOT EDIT
// Type: FinalState
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface FinalStateBuilder {
  id(id: string): FinalStateBuilder;
  child(obj: QmlObjectBuilder): FinalStateBuilder;

  objectName(value: string): FinalStateBuilder;
  objectNameBind(expr: string): FinalStateBuilder;
  onActiveChanged(body: string): FinalStateBuilder;
  onChildrenChanged(body: string): FinalStateBuilder;
  onEntered(body: string): FinalStateBuilder;
  onExited(body: string): FinalStateBuilder;
  onObjectNameChanged(body: string): FinalStateBuilder;
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
