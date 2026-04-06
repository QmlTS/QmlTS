// AUTO-GENERATED — DO NOT EDIT
// Type: GrpcHttp2Channel
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { GrpcChannelOptionsBuilder } from './GrpcChannelOptions.js';
export interface GrpcHttp2ChannelBuilder {
  id(id: string): GrpcHttp2ChannelBuilder;
  child(obj: QmlObjectBuilder): GrpcHttp2ChannelBuilder;
  children(...objs: QmlObjectBuilder[]): GrpcHttp2ChannelBuilder;

  hostUri(value: QmlUrl): GrpcHttp2ChannelBuilder;
  hostUriBind(expr: string): GrpcHttp2ChannelBuilder;
  objectName(value: string): GrpcHttp2ChannelBuilder;
  objectNameBind(expr: string): GrpcHttp2ChannelBuilder;
  options(value: GrpcChannelOptionsBuilder): GrpcHttp2ChannelBuilder;
  optionsBind(expr: string): GrpcHttp2ChannelBuilder;
  onChannelUpdated(handler: DslSignalHandlerValue): GrpcHttp2ChannelBuilder;
  onHostUriChanged(handler: DslSignalHandlerValue): GrpcHttp2ChannelBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GrpcHttp2ChannelBuilder;
  onOptionsChanged(handler: DslSignalHandlerValue): GrpcHttp2ChannelBuilder;
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
  grouped: [],
  attached: [],
};

export function GrpcHttp2Channel(): GrpcHttp2ChannelBuilder {
  return createFluentBuilder(
    'GrpcHttp2Channel',
    GRPCHTTP2CHANNEL_META,
  ) as unknown as GrpcHttp2ChannelBuilder;
}
