// AUTO-GENERATED — DO NOT EDIT
// Type: CameraPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface CameraPermissionBuilder {
  id(id: string): CameraPermissionBuilder;
  child(obj: QmlObjectBuilder): CameraPermissionBuilder;

  objectName(value: string): CameraPermissionBuilder;
  objectNameBind(expr: string): CameraPermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): CameraPermissionBuilder;
  onStatusChanged(handler: () => void): CameraPermissionBuilder;
}

export function CameraPermission(): CameraPermissionBuilder {
  return new DslBuilderImpl('CameraPermission') as unknown as CameraPermissionBuilder;
}
