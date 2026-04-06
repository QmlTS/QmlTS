// AUTO-GENERATED — DO NOT EDIT
// Type: GrpcChannelOptions
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { GrpcMetadataBuilder } from './GrpcMetadata.js';
export interface GrpcChannelOptionsBuilder {
  id(id: string): GrpcChannelOptionsBuilder;
  child(obj: QmlObjectBuilder): GrpcChannelOptionsBuilder;
  children(...objs: QmlObjectBuilder[]): GrpcChannelOptionsBuilder;

  deadlineTimeout(value: number): GrpcChannelOptionsBuilder;
  deadlineTimeoutBind(expr: string): GrpcChannelOptionsBuilder;
  metadata(value: GrpcMetadataBuilder): GrpcChannelOptionsBuilder;
  metadataBind(expr: string): GrpcChannelOptionsBuilder;
  objectName(value: string): GrpcChannelOptionsBuilder;
  objectNameBind(expr: string): GrpcChannelOptionsBuilder;
  serializationFormat(value: QmlEnumToken): GrpcChannelOptionsBuilder;
  serializationFormatBind(expr: string): GrpcChannelOptionsBuilder;
  sslConfiguration(value: QmlValue): GrpcChannelOptionsBuilder;
  sslConfigurationBind(expr: string): GrpcChannelOptionsBuilder;
  onDeadlineTimeoutChanged(handler: DslSignalHandlerValue): GrpcChannelOptionsBuilder;
  onMetadataChanged(handler: DslSignalHandlerValue): GrpcChannelOptionsBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GrpcChannelOptionsBuilder;
  onSerializationFormatChanged(handler: DslSignalHandlerValue): GrpcChannelOptionsBuilder;
  onSslConfigurationChanged(handler: DslSignalHandlerValue): GrpcChannelOptionsBuilder;
}

const GRPCCHANNELOPTIONS_META: TypeMetadata = {
  typeName: 'GrpcChannelOptions',
  properties: [
    { name: 'deadlineTimeout', hasValue: true, hasBinding: true },
    { name: 'metadata', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'serializationFormat', hasValue: true, hasBinding: true },
    { name: 'sslConfiguration', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDeadlineTimeoutChanged', paramCount: 0 },
    { handlerName: 'onMetadataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onSerializationFormatChanged', paramCount: 0 },
    { handlerName: 'onSslConfigurationChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function GrpcChannelOptions(): GrpcChannelOptionsBuilder {
  return createFluentBuilder(
    'GrpcChannelOptions',
    GRPCCHANNELOPTIONS_META,
  ) as unknown as GrpcChannelOptionsBuilder;
}
