// AUTO-GENERATED — DO NOT EDIT
// Type: CalendarPermission
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CalendarPermissionBuilder {
  id(id: string): CalendarPermissionBuilder;
  child(obj: QmlObjectBuilder): CalendarPermissionBuilder;
  children(...objs: QmlObjectBuilder[]): CalendarPermissionBuilder;

  accessMode(value: QmlEnumToken): CalendarPermissionBuilder;
  accessModeBind(expr: string): CalendarPermissionBuilder;
  objectName(value: string): CalendarPermissionBuilder;
  objectNameBind(expr: string): CalendarPermissionBuilder;
  onAccessModeChanged(handler: DslSignalHandlerValue): CalendarPermissionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): CalendarPermissionBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): CalendarPermissionBuilder;
}

const CALENDARPERMISSION_META: TypeMetadata = {
  typeName: 'CalendarPermission',
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

export function CalendarPermission(): CalendarPermissionBuilder {
  return createFluentBuilder(
    'CalendarPermission',
    CALENDARPERMISSION_META,
  ) as unknown as CalendarPermissionBuilder;
}
