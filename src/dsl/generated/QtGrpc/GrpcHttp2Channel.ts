// AUTO-GENERATED — DO NOT EDIT
// Type: GrpcHttp2Channel
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
import type { GrpcChannelOptionsBuilder } from './GrpcChannelOptions.js';
export interface GrpcHttp2ChannelBuilder {
  id(id: string): GrpcHttp2ChannelBuilder;
  child(obj: QmlObjectBuilder): GrpcHttp2ChannelBuilder;

  hostUri(value: QmlUrl): GrpcHttp2ChannelBuilder;
  hostUriBind(expr: string): GrpcHttp2ChannelBuilder;
  objectName(value: string): GrpcHttp2ChannelBuilder;
  objectNameBind(expr: string): GrpcHttp2ChannelBuilder;
  options(value: GrpcChannelOptionsBuilder): GrpcHttp2ChannelBuilder;
  optionsBind(expr: string): GrpcHttp2ChannelBuilder;
  onChannelUpdated(body: string): GrpcHttp2ChannelBuilder;
  onHostUriChanged(body: string): GrpcHttp2ChannelBuilder;
  onObjectNameChanged(body: string): GrpcHttp2ChannelBuilder;
  onOptionsChanged(body: string): GrpcHttp2ChannelBuilder;
}

const GRPCHTTP2CHANNEL_META: TypeMetadata = {
  typeName: 'GrpcHttp2Channel',
  properties: [
    { name: 'hostUri', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'options', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChannelUpdated', paramCount: 0 },
    { handlerName: 'onHostUriChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptionsChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function GrpcHttp2Channel(): GrpcHttp2ChannelBuilder {
  return createFluentBuilder('GrpcHttp2Channel', GRPCHTTP2CHANNEL_META) as unknown as GrpcHttp2ChannelBuilder;
}
