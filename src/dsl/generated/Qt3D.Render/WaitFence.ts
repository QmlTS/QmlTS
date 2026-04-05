// AUTO-GENERATED — DO NOT EDIT
// Type: WaitFence
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface WaitFenceBuilder {
  id(id: string): WaitFenceBuilder;
  child(obj: QmlObjectBuilder): WaitFenceBuilder;

  enabled(value: boolean): WaitFenceBuilder;
  enabledBind(expr: string): WaitFenceBuilder;
  handle(value: QmlValue): WaitFenceBuilder;
  handleBind(expr: string): WaitFenceBuilder;
  handleType(value: QmlEnumToken): WaitFenceBuilder;
  handleTypeBind(expr: string): WaitFenceBuilder;
  objectName(value: string): WaitFenceBuilder;
  objectNameBind(expr: string): WaitFenceBuilder;
  parent(value: QmlValue): WaitFenceBuilder;
  parentBind(expr: string): WaitFenceBuilder;
  timeout(value: number): WaitFenceBuilder;
  timeoutBind(expr: string): WaitFenceBuilder;
  waitOnCPU(value: boolean): WaitFenceBuilder;
  waitOnCPUBind(expr: string): WaitFenceBuilder;
  onEnabledChanged(body: string): WaitFenceBuilder;
  onHandleChanged(body: string): WaitFenceBuilder;
  onHandleTypeChanged(body: string): WaitFenceBuilder;
  onNodeDestroyed(body: string): WaitFenceBuilder;
  onObjectNameChanged(body: string): WaitFenceBuilder;
  onParentChanged(body: string): WaitFenceBuilder;
  onTimeoutChanged(body: string): WaitFenceBuilder;
  onWaitOnCPUChanged(body: string): WaitFenceBuilder;
}

const WAITFENCE_META: TypeMetadata = {
  typeName: 'WaitFence',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'handle', hasValue: true, hasBinding: true },
    { name: 'handleType', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'timeout', hasValue: true, hasBinding: true },
    { name: 'waitOnCPU', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHandleChanged', paramCount: 1 },
    { handlerName: 'onHandleTypeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTimeoutChanged', paramCount: 1 },
    { handlerName: 'onWaitOnCPUChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function WaitFence(): WaitFenceBuilder {
  return createFluentBuilder('WaitFence', WAITFENCE_META) as unknown as WaitFenceBuilder;
}

export namespace WaitFence {
  export namespace HandleType {
    export const NoHandle = createEnumToken('WaitFence', 'HandleType', 'NoHandle');
    export const OpenGLFenceId = createEnumToken('WaitFence', 'HandleType', 'OpenGLFenceId');
  }
}
