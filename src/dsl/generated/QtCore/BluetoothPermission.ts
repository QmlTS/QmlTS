// AUTO-GENERATED — DO NOT EDIT
// Type: BluetoothPermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface BluetoothPermissionBuilder {
  id(id: string): BluetoothPermissionBuilder;
  child(obj: QmlObjectBuilder): BluetoothPermissionBuilder;

  communicationModes(value: QmlValue): BluetoothPermissionBuilder;
  communicationModesBind(expr: string): BluetoothPermissionBuilder;
  objectName(value: string): BluetoothPermissionBuilder;
  objectNameBind(expr: string): BluetoothPermissionBuilder;
  onCommunicationModesChanged(handler: () => void): BluetoothPermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BluetoothPermissionBuilder;
  onStatusChanged(handler: () => void): BluetoothPermissionBuilder;
}

export function BluetoothPermission(): BluetoothPermissionBuilder {
  return new DslBuilderImpl('BluetoothPermission') as unknown as BluetoothPermissionBuilder;
}
