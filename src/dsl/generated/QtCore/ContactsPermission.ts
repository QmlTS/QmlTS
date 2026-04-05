// AUTO-GENERATED — DO NOT EDIT
// Type: ContactsPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface ContactsPermissionBuilder {
  id(id: string): ContactsPermissionBuilder;
  child(obj: QmlObjectBuilder): ContactsPermissionBuilder;

  accessMode(value: QmlValue): ContactsPermissionBuilder;
  accessModeBind(expr: string): ContactsPermissionBuilder;
  objectName(value: string): ContactsPermissionBuilder;
  objectNameBind(expr: string): ContactsPermissionBuilder;
  onAccessModeChanged(handler: () => void): ContactsPermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ContactsPermissionBuilder;
  onStatusChanged(handler: () => void): ContactsPermissionBuilder;
}

export function ContactsPermission(): ContactsPermissionBuilder {
  return new DslBuilderImpl('ContactsPermission') as unknown as ContactsPermissionBuilder;
}
