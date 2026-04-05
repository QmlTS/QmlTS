// AUTO-GENERATED — DO NOT EDIT
// Type: SetFence
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface SetFenceBuilder {
  id(id: string): SetFenceBuilder;
  child(obj: QmlObjectBuilder): SetFenceBuilder;

  enabled(value: boolean): SetFenceBuilder;
  enabledBind(expr: string): SetFenceBuilder;
  objectName(value: string): SetFenceBuilder;
  objectNameBind(expr: string): SetFenceBuilder;
  parent(value: QmlValue): SetFenceBuilder;
  parentBind(expr: string): SetFenceBuilder;
  onEnabledChanged(body: string): SetFenceBuilder;
  onHandleChanged(body: string): SetFenceBuilder;
  onHandleTypeChanged(body: string): SetFenceBuilder;
  onNodeDestroyed(body: string): SetFenceBuilder;
  onObjectNameChanged(body: string): SetFenceBuilder;
  onParentChanged(body: string): SetFenceBuilder;
}

const SETFENCE_META: TypeMetadata = {
  typeName: 'SetFence',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHandleChanged', paramCount: 1 },
    { handlerName: 'onHandleTypeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SetFence(): SetFenceBuilder {
  return createFluentBuilder('SetFence', SETFENCE_META) as unknown as SetFenceBuilder;
}

export namespace SetFence {
  export namespace HandleType {
    export const NoHandle = createEnumToken('SetFence', 'HandleType', 'NoHandle');
    export const OpenGLFenceId = createEnumToken('SetFence', 'HandleType', 'OpenGLFenceId');
  }
}
