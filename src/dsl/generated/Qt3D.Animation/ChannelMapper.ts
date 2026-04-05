// AUTO-GENERATED — DO NOT EDIT
// Type: ChannelMapper
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ChannelMapperBuilder {
  id(id: string): ChannelMapperBuilder;
  child(obj: QmlObjectBuilder): ChannelMapperBuilder;

  enabled(value: boolean): ChannelMapperBuilder;
  enabledBind(expr: string): ChannelMapperBuilder;
  objectName(value: string): ChannelMapperBuilder;
  objectNameBind(expr: string): ChannelMapperBuilder;
  parent(value: QmlValue): ChannelMapperBuilder;
  parentBind(expr: string): ChannelMapperBuilder;
  onEnabledChanged(body: string): ChannelMapperBuilder;
  onNodeDestroyed(body: string): ChannelMapperBuilder;
  onObjectNameChanged(body: string): ChannelMapperBuilder;
  onParentChanged(body: string): ChannelMapperBuilder;
}

const CHANNELMAPPER_META: TypeMetadata = {
  typeName: 'ChannelMapper',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ChannelMapper(): ChannelMapperBuilder {
  return createFluentBuilder(
    'ChannelMapper',
    CHANNELMAPPER_META,
  ) as unknown as ChannelMapperBuilder;
}
