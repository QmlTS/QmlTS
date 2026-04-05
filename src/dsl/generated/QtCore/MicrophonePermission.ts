// AUTO-GENERATED — DO NOT EDIT
// Type: MicrophonePermission
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
export interface MicrophonePermissionBuilder {
  id(id: string): MicrophonePermissionBuilder;
  child(obj: QmlObjectBuilder): MicrophonePermissionBuilder;

  objectName(value: string): MicrophonePermissionBuilder;
  objectNameBind(expr: string): MicrophonePermissionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): MicrophonePermissionBuilder;
  onStatusChanged(handler: () => void): MicrophonePermissionBuilder;
}

export function MicrophonePermission(): MicrophonePermissionBuilder {
  return new DslBuilderImpl('MicrophonePermission') as unknown as MicrophonePermissionBuilder;
}
