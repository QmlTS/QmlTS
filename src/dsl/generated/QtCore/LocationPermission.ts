// AUTO-GENERATED — DO NOT EDIT
// Type: LocationPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface LocationPermissionBuilder {
  id(id: string): LocationPermissionBuilder;
  child(obj: QmlObjectBuilder): LocationPermissionBuilder;

  accuracy(value: QmlValue): LocationPermissionBuilder;
  accuracyBind(expr: string): LocationPermissionBuilder;
  availability(value: QmlValue): LocationPermissionBuilder;
  availabilityBind(expr: string): LocationPermissionBuilder;
  objectName(value: string): LocationPermissionBuilder;
  objectNameBind(expr: string): LocationPermissionBuilder;
  onAccuracyChanged(handler: () => void): LocationPermissionBuilder;
  onAvailabilityChanged(handler: () => void): LocationPermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): LocationPermissionBuilder;
  onStatusChanged(handler: () => void): LocationPermissionBuilder;
}

export function LocationPermission(): LocationPermissionBuilder {
  return new DslBuilderImpl('LocationPermission') as unknown as LocationPermissionBuilder;
}
