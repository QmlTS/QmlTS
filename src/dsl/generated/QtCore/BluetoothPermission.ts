// AUTO-GENERATED — DO NOT EDIT
// Type: BluetoothPermission
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface BluetoothPermissionBuilder {
  id(id: string): BluetoothPermissionBuilder;
  child(obj: QmlObjectBuilder): BluetoothPermissionBuilder;

  communicationModes(value: QmlEnumToken): BluetoothPermissionBuilder;
  communicationModesBind(expr: string): BluetoothPermissionBuilder;
  objectName(value: string): BluetoothPermissionBuilder;
  objectNameBind(expr: string): BluetoothPermissionBuilder;
  onCommunicationModesChanged(body: string): BluetoothPermissionBuilder;
  onObjectNameChanged(body: string): BluetoothPermissionBuilder;
  onStatusChanged(body: string): BluetoothPermissionBuilder;
}

const BLUETOOTHPERMISSION_META: TypeMetadata = {
  typeName: 'BluetoothPermission',
  properties: [
    { name: 'communicationModes', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCommunicationModesChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function BluetoothPermission(): BluetoothPermissionBuilder {
  return createFluentBuilder('BluetoothPermission', BLUETOOTHPERMISSION_META) as unknown as BluetoothPermissionBuilder;
}
