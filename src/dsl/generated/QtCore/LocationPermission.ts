// AUTO-GENERATED — DO NOT EDIT
// Type: LocationPermission
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface LocationPermissionBuilder {
  id(id: string): LocationPermissionBuilder;
  child(obj: QmlObjectBuilder): LocationPermissionBuilder;

  accuracy(value: QmlEnumToken): LocationPermissionBuilder;
  accuracyBind(expr: string): LocationPermissionBuilder;
  availability(value: QmlEnumToken): LocationPermissionBuilder;
  availabilityBind(expr: string): LocationPermissionBuilder;
  objectName(value: string): LocationPermissionBuilder;
  objectNameBind(expr: string): LocationPermissionBuilder;
  onAccuracyChanged(body: string): LocationPermissionBuilder;
  onAvailabilityChanged(body: string): LocationPermissionBuilder;
  onObjectNameChanged(body: string): LocationPermissionBuilder;
  onStatusChanged(body: string): LocationPermissionBuilder;
}

const LOCATIONPERMISSION_META: TypeMetadata = {
  typeName: 'LocationPermission',
  properties: [
    { name: 'accuracy', hasValue: true, hasBinding: true },
    { name: 'availability', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccuracyChanged', paramCount: 0 },
    { handlerName: 'onAvailabilityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function LocationPermission(): LocationPermissionBuilder {
  return createFluentBuilder(
    'LocationPermission',
    LOCATIONPERMISSION_META,
  ) as unknown as LocationPermissionBuilder;
}
