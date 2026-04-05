// AUTO-GENERATED — DO NOT EDIT
// Type: InvokedServices
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface InvokedServicesBuilder {
  id(id: string): InvokedServicesBuilder;
  child(obj: QmlObjectBuilder): InvokedServicesBuilder;

  objectName(value: string): InvokedServicesBuilder;
  objectNameBind(expr: string): InvokedServicesBuilder;
  stateMachine(value: QmlValue): InvokedServicesBuilder;
  stateMachineBind(expr: string): InvokedServicesBuilder;
  onChildrenChanged(body: string): InvokedServicesBuilder;
  onObjectNameChanged(body: string): InvokedServicesBuilder;
  onStateMachineChanged(body: string): InvokedServicesBuilder;
}

const INVOKEDSERVICES_META: TypeMetadata = {
  typeName: 'InvokedServices',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'stateMachine', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStateMachineChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'qmlChildren',
};

export function InvokedServices(): InvokedServicesBuilder {
  return createFluentBuilder(
    'InvokedServices',
    INVOKEDSERVICES_META,
  ) as unknown as InvokedServicesBuilder;
}
