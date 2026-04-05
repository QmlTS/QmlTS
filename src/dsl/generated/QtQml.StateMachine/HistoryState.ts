// AUTO-GENERATED — DO NOT EDIT
// Type: HistoryState
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HistoryStateBuilder {
  id(id: string): HistoryStateBuilder;
  child(obj: QmlObjectBuilder): HistoryStateBuilder;

  defaultState(value: QmlValue): HistoryStateBuilder;
  defaultStateBind(expr: string): HistoryStateBuilder;
  defaultTransition(value: QmlValue): HistoryStateBuilder;
  defaultTransitionBind(expr: string): HistoryStateBuilder;
  historyType(value: QmlEnumToken): HistoryStateBuilder;
  historyTypeBind(expr: string): HistoryStateBuilder;
  objectName(value: string): HistoryStateBuilder;
  objectNameBind(expr: string): HistoryStateBuilder;
  onActiveChanged(body: string): HistoryStateBuilder;
  onDefaultStateChanged(body: string): HistoryStateBuilder;
  onDefaultTransitionChanged(body: string): HistoryStateBuilder;
  onEntered(body: string): HistoryStateBuilder;
  onExited(body: string): HistoryStateBuilder;
  onHistoryTypeChanged(body: string): HistoryStateBuilder;
  onObjectNameChanged(body: string): HistoryStateBuilder;
}

const HISTORYSTATE_META: TypeMetadata = {
  typeName: 'HistoryState',
  properties: [
    { name: 'defaultState', hasValue: true, hasBinding: true },
    { name: 'defaultTransition', hasValue: true, hasBinding: true },
    { name: 'historyType', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveChanged', paramCount: 1 },
    { handlerName: 'onDefaultStateChanged', paramCount: 0 },
    { handlerName: 'onDefaultTransitionChanged', paramCount: 0 },
    { handlerName: 'onEntered', paramCount: 0 },
    { handlerName: 'onExited', paramCount: 0 },
    { handlerName: 'onHistoryTypeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function HistoryState(): HistoryStateBuilder {
  return createFluentBuilder('HistoryState', HISTORYSTATE_META) as unknown as HistoryStateBuilder;
}

export namespace HistoryState {
  export namespace HistoryType {
    export const ShallowHistory = createEnumToken('HistoryState', 'HistoryType', 'ShallowHistory');
    export const DeepHistory = createEnumToken('HistoryState', 'HistoryType', 'DeepHistory');
  }
}
