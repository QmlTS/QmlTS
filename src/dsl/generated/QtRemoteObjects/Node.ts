// AUTO-GENERATED — DO NOT EDIT
// Type: Node
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface NodeBuilder {
  id(id: string): NodeBuilder;
  child(obj: QmlObjectBuilder): NodeBuilder;

  heartbeatInterval(value: number): NodeBuilder;
  heartbeatIntervalBind(expr: string): NodeBuilder;
  objectName(value: string): NodeBuilder;
  objectNameBind(expr: string): NodeBuilder;
  persistedStore(value: QmlValue): NodeBuilder;
  persistedStoreBind(expr: string): NodeBuilder;
  registryUrl(value: QmlUrl): NodeBuilder;
  registryUrlBind(expr: string): NodeBuilder;
  onError(body: string): NodeBuilder;
  onHeartbeatIntervalChanged(body: string): NodeBuilder;
  onObjectNameChanged(body: string): NodeBuilder;
  onRemoteObjectAdded(body: string): NodeBuilder;
  onRemoteObjectRemoved(body: string): NodeBuilder;
}

const NODE_META: TypeMetadata = {
  typeName: 'Node',
  properties: [
    { name: 'heartbeatInterval', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'persistedStore', hasValue: true, hasBinding: true },
    { name: 'registryUrl', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onError', paramCount: 1 },
    { handlerName: 'onHeartbeatIntervalChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRemoteObjectAdded', paramCount: 1 },
    { handlerName: 'onRemoteObjectRemoved', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Node(): NodeBuilder {
  return createFluentBuilder('Node', NODE_META) as unknown as NodeBuilder;
}

export namespace Node {
  export namespace ErrorCode {
    export const NoError = createEnumToken('Node', 'ErrorCode', 'NoError');
    export const RegistryNotAcquired = createEnumToken('Node', 'ErrorCode', 'RegistryNotAcquired');
    export const RegistryAlreadyHosted = createEnumToken(
      'Node',
      'ErrorCode',
      'RegistryAlreadyHosted',
    );
    export const NodeIsNoServer = createEnumToken('Node', 'ErrorCode', 'NodeIsNoServer');
    export const ServerAlreadyCreated = createEnumToken(
      'Node',
      'ErrorCode',
      'ServerAlreadyCreated',
    );
    export const UnintendedRegistryHosting = createEnumToken(
      'Node',
      'ErrorCode',
      'UnintendedRegistryHosting',
    );
    export const OperationNotValidOnClientNode = createEnumToken(
      'Node',
      'ErrorCode',
      'OperationNotValidOnClientNode',
    );
    export const SourceNotRegistered = createEnumToken('Node', 'ErrorCode', 'SourceNotRegistered');
    export const MissingObjectName = createEnumToken('Node', 'ErrorCode', 'MissingObjectName');
    export const HostUrlInvalid = createEnumToken('Node', 'ErrorCode', 'HostUrlInvalid');
    export const ProtocolMismatch = createEnumToken('Node', 'ErrorCode', 'ProtocolMismatch');
    export const ListenFailed = createEnumToken('Node', 'ErrorCode', 'ListenFailed');
    export const SocketAccessError = createEnumToken('Node', 'ErrorCode', 'SocketAccessError');
  }
}
