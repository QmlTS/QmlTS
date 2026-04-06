// AUTO-GENERATED — DO NOT EDIT
// Type: MicrophonePermission
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface MicrophonePermissionBuilder {
  id(id: string): MicrophonePermissionBuilder;
  child(obj: QmlObjectBuilder): MicrophonePermissionBuilder;
  children(...objs: QmlObjectBuilder[]): MicrophonePermissionBuilder;

  objectName(value: string): MicrophonePermissionBuilder;
  objectNameBind(expr: string): MicrophonePermissionBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MicrophonePermissionBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): MicrophonePermissionBuilder;
}

const MICROPHONEPERMISSION_META: TypeMetadata = {
  typeName: 'MicrophonePermission',
  properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
  signals: [
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MicrophonePermission(): MicrophonePermissionBuilder {
  return createFluentBuilder(
    'MicrophonePermission',
    MICROPHONEPERMISSION_META,
  ) as unknown as MicrophonePermissionBuilder;
}
