// AUTO-GENERATED — DO NOT EDIT
// Type: CalendarPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface CalendarPermissionBuilder {
  id(id: string): CalendarPermissionBuilder;
  child(obj: QmlObjectBuilder): CalendarPermissionBuilder;

  accessMode(value: QmlValue): CalendarPermissionBuilder;
  accessModeBind(expr: string): CalendarPermissionBuilder;
  objectName(value: string): CalendarPermissionBuilder;
  objectNameBind(expr: string): CalendarPermissionBuilder;
  onAccessModeChanged(handler: () => void): CalendarPermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CalendarPermissionBuilder;
  onStatusChanged(handler: () => void): CalendarPermissionBuilder;
}

export function CalendarPermission(): CalendarPermissionBuilder {
  return new DslBuilderImpl('CalendarPermission') as unknown as CalendarPermissionBuilder;
}
