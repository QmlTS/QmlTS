// AUTO-GENERATED — DO NOT EDIT
// Type: WebChannel
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import type { WebChannelAttachedBuilder } from './QQmlWebChannelAttached.js';
export interface WebChannelBuilder {
  id(id: string): WebChannelBuilder;
  child(obj: QmlObjectBuilder): WebChannelBuilder;

  blockUpdates(value: boolean): WebChannelBuilder;
  blockUpdatesBind(expr: string): WebChannelBuilder;
  objectName(value: string): WebChannelBuilder;
  objectNameBind(expr: string): WebChannelBuilder;
  propertyUpdateInterval(value: number): WebChannelBuilder;
  propertyUpdateIntervalBind(expr: string): WebChannelBuilder;
  onBlockUpdatesChanged(body: string): WebChannelBuilder;
  onObjectNameChanged(body: string): WebChannelBuilder;
  webChannel(setup: (b: WebChannelAttachedBuilder) => void): WebChannelBuilder;
}

const WEBCHANNEL_META: TypeMetadata = {
  typeName: 'WebChannel',
  properties: [
    { name: 'blockUpdates', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'propertyUpdateInterval', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBlockUpdatesChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
    {
      methodName: 'webChannel',
      attachedTypeName: 'WebChannel',
      properties: [
        { name: 'id', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIdChanged', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function WebChannel(): WebChannelBuilder {
  return createFluentBuilder('WebChannel', WEBCHANNEL_META) as unknown as WebChannelBuilder;
}
