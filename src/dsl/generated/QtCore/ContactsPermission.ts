// AUTO-GENERATED — DO NOT EDIT
// Type: ContactsPermission
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ContactsPermissionBuilder {
  id(id: string): ContactsPermissionBuilder;
  child(obj: QmlObjectBuilder): ContactsPermissionBuilder;

  accessMode(value: QmlEnumToken): ContactsPermissionBuilder;
  accessModeBind(expr: string): ContactsPermissionBuilder;
  objectName(value: string): ContactsPermissionBuilder;
  objectNameBind(expr: string): ContactsPermissionBuilder;
  onAccessModeChanged(body: string): ContactsPermissionBuilder;
  onObjectNameChanged(body: string): ContactsPermissionBuilder;
  onStatusChanged(body: string): ContactsPermissionBuilder;
}

const CONTACTSPERMISSION_META: TypeMetadata = {
  typeName: 'ContactsPermission',
  properties: [
    { name: 'accessMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccessModeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ContactsPermission(): ContactsPermissionBuilder {
  return createFluentBuilder(
    'ContactsPermission',
    CONTACTSPERMISSION_META,
  ) as unknown as ContactsPermissionBuilder;
}
