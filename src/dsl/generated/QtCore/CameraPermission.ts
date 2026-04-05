// AUTO-GENERATED — DO NOT EDIT
// Type: CameraPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface CameraPermissionBuilder {
  id(id: string): CameraPermissionBuilder;
  child(obj: QmlObjectBuilder): CameraPermissionBuilder;

  objectName(value: string): CameraPermissionBuilder;
  objectNameBind(expr: string): CameraPermissionBuilder;
  onObjectNameChanged(body: string): CameraPermissionBuilder;
  onStatusChanged(body: string): CameraPermissionBuilder;
}

const CAMERAPERMISSION_META: TypeMetadata = {
  typeName: 'CameraPermission',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function CameraPermission(): CameraPermissionBuilder {
  return createFluentBuilder(
    'CameraPermission',
    CAMERAPERMISSION_META,
  ) as unknown as CameraPermissionBuilder;
}
