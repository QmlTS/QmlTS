// AUTO-GENERATED — DO NOT EDIT
// Type: State
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface StateBuilder {
  id(id: string): StateBuilder;
  child(obj: QmlObjectBuilder): StateBuilder;

  childMode(value: QmlEnumToken): StateBuilder;
  childModeBind(expr: string): StateBuilder;
  errorState(value: QmlValue): StateBuilder;
  errorStateBind(expr: string): StateBuilder;
  initialState(value: QmlValue): StateBuilder;
  initialStateBind(expr: string): StateBuilder;
  objectName(value: string): StateBuilder;
  objectNameBind(expr: string): StateBuilder;
  onActiveChanged(body: string): StateBuilder;
  onChildModeChanged(body: string): StateBuilder;
  onChildrenChanged(body: string): StateBuilder;
  onEntered(body: string): StateBuilder;
  onErrorStateChanged(body: string): StateBuilder;
  onExited(body: string): StateBuilder;
  onFinished(body: string): StateBuilder;
  onInitialStateChanged(body: string): StateBuilder;
  onObjectNameChanged(body: string): StateBuilder;
  onPropertiesAssigned(body: string): StateBuilder;
}

const STATE_META: TypeMetadata = {
  typeName: 'State',
  properties: [
    { name: 'childMode', hasValue: true, hasBinding: true },
    { name: 'errorState', hasValue: true, hasBinding: true },
    { name: 'initialState', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
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
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'children',
};

export function State(): StateBuilder {
  return createFluentBuilder('State', STATE_META) as unknown as StateBuilder;
}

export namespace State {
  export namespace ChildMode {
    export const ExclusiveStates = createEnumToken('State', 'ChildMode', 'ExclusiveStates');
    export const ParallelStates = createEnumToken('State', 'ChildMode', 'ParallelStates');
  }
  export namespace RestorePolicy {
    export const DontRestoreProperties = createEnumToken('State', 'RestorePolicy', 'DontRestoreProperties');
    export const RestoreProperties = createEnumToken('State', 'RestorePolicy', 'RestoreProperties');
  }
}
