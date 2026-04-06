// AUTO-GENERATED — DO NOT EDIT
// Type: ChannelMapping
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface ChannelMappingBuilder {
  id(id: string): ChannelMappingBuilder;
  child(obj: QmlObjectBuilder): ChannelMappingBuilder;
  children(...objs: QmlObjectBuilder[]): ChannelMappingBuilder;

  channelName(value: string): ChannelMappingBuilder;
  channelNameBind(expr: string): ChannelMappingBuilder;
  enabled(value: boolean): ChannelMappingBuilder;
  enabledBind(expr: string): ChannelMappingBuilder;
  objectName(value: string): ChannelMappingBuilder;
  objectNameBind(expr: string): ChannelMappingBuilder;
  parent(value: QmlValue): ChannelMappingBuilder;
  parentBind(expr: string): ChannelMappingBuilder;
  property(value: string): ChannelMappingBuilder;
  propertyBind(expr: string): ChannelMappingBuilder;
  target(value: QmlValue): ChannelMappingBuilder;
  targetBind(expr: string): ChannelMappingBuilder;
  onChannelNameChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onPropertyChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
  onTargetChanged(handler: DslSignalHandlerValue): ChannelMappingBuilder;
}

const CHANNELMAPPING_META: TypeMetadata = {
  typeName: 'ChannelMapping',
  properties: [
    { name: 'channelName', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'property', hasValue: true, hasBinding: true },
    { name: 'target', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChannelNameChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPropertyChanged', paramCount: 1 },
    { handlerName: 'onTargetChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ChannelMapping(): ChannelMappingBuilder {
  return createFluentBuilder(
    'ChannelMapping',
    CHANNELMAPPING_META,
  ) as unknown as ChannelMappingBuilder;
}
