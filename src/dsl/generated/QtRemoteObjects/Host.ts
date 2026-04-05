// AUTO-GENERATED — DO NOT EDIT
// Type: Host
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface HostBuilder {
  id(id: string): HostBuilder;
  child(obj: QmlObjectBuilder): HostBuilder;

  heartbeatInterval(value: number): HostBuilder;
  heartbeatIntervalBind(expr: string): HostBuilder;
  hostUrl(value: QmlUrl): HostBuilder;
  hostUrlBind(expr: string): HostBuilder;
  objectName(value: string): HostBuilder;
  objectNameBind(expr: string): HostBuilder;
  persistedStore(value: QmlValue): HostBuilder;
  persistedStoreBind(expr: string): HostBuilder;
  registryUrl(value: QmlUrl): HostBuilder;
  registryUrlBind(expr: string): HostBuilder;
  onError(body: string): HostBuilder;
  onHeartbeatIntervalChanged(body: string): HostBuilder;
  onHostUrlChanged(body: string): HostBuilder;
  onObjectNameChanged(body: string): HostBuilder;
  onRemoteObjectAdded(body: string): HostBuilder;
  onRemoteObjectRemoved(body: string): HostBuilder;
}

const HOST_META: TypeMetadata = {
  typeName: 'Host',
  properties: [
    { name: 'heartbeatInterval', hasValue: true, hasBinding: true },
    { name: 'hostUrl', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'persistedStore', hasValue: true, hasBinding: true },
    { name: 'registryUrl', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onError', paramCount: 1 },
    { handlerName: 'onHeartbeatIntervalChanged', paramCount: 1 },
    { handlerName: 'onHostUrlChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRemoteObjectAdded', paramCount: 1 },
    { handlerName: 'onRemoteObjectRemoved', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Host(): HostBuilder {
  return createFluentBuilder('Host', HOST_META) as unknown as HostBuilder;
}

export namespace Host {
  export namespace AllowedSchemas {
    export const BuiltInSchemasOnly = createEnumToken(
      'Host',
      'AllowedSchemas',
      'BuiltInSchemasOnly',
    );
    export const AllowExternalRegistration = createEnumToken(
      'Host',
      'AllowedSchemas',
      'AllowExternalRegistration',
    );
  }
  export namespace ErrorCode {
    export const NoError = createEnumToken('Host', 'ErrorCode', 'NoError');
    export const RegistryNotAcquired = createEnumToken('Host', 'ErrorCode', 'RegistryNotAcquired');
    export const RegistryAlreadyHosted = createEnumToken(
      'Host',
      'ErrorCode',
      'RegistryAlreadyHosted',
    );
    export const NodeIsNoServer = createEnumToken('Host', 'ErrorCode', 'NodeIsNoServer');
    export const ServerAlreadyCreated = createEnumToken(
      'Host',
      'ErrorCode',
      'ServerAlreadyCreated',
    );
    export const UnintendedRegistryHosting = createEnumToken(
      'Host',
      'ErrorCode',
      'UnintendedRegistryHosting',
    );
    export const OperationNotValidOnClientNode = createEnumToken(
      'Host',
      'ErrorCode',
      'OperationNotValidOnClientNode',
    );
    export const SourceNotRegistered = createEnumToken('Host', 'ErrorCode', 'SourceNotRegistered');
    export const MissingObjectName = createEnumToken('Host', 'ErrorCode', 'MissingObjectName');
    export const HostUrlInvalid = createEnumToken('Host', 'ErrorCode', 'HostUrlInvalid');
    export const ProtocolMismatch = createEnumToken('Host', 'ErrorCode', 'ProtocolMismatch');
    export const ListenFailed = createEnumToken('Host', 'ErrorCode', 'ListenFailed');
    export const SocketAccessError = createEnumToken('Host', 'ErrorCode', 'SocketAccessError');
  }
}
