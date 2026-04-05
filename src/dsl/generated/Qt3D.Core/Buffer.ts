// AUTO-GENERATED — DO NOT EDIT
// Type: Buffer
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface BufferBuilder {
  id(id: string): BufferBuilder;
  child(obj: QmlObjectBuilder): BufferBuilder;

  accessType(value: QmlEnumToken): BufferBuilder;
  accessTypeBind(expr: string): BufferBuilder;
  data(value: QmlValue): BufferBuilder;
  dataBind(expr: string): BufferBuilder;
  enabled(value: boolean): BufferBuilder;
  enabledBind(expr: string): BufferBuilder;
  objectName(value: string): BufferBuilder;
  objectNameBind(expr: string): BufferBuilder;
  parent(value: QmlValue): BufferBuilder;
  parentBind(expr: string): BufferBuilder;
  usage(value: QmlEnumToken): BufferBuilder;
  usageBind(expr: string): BufferBuilder;
  onAccessTypeChanged(body: string): BufferBuilder;
  onBufferDataChanged(body: string): BufferBuilder;
  onDataAvailable(body: string): BufferBuilder;
  onDataChanged(body: string): BufferBuilder;
  onEnabledChanged(body: string): BufferBuilder;
  onNodeDestroyed(body: string): BufferBuilder;
  onObjectNameChanged(body: string): BufferBuilder;
  onParentChanged(body: string): BufferBuilder;
  onUsageChanged(body: string): BufferBuilder;
}

const BUFFER_META: TypeMetadata = {
  typeName: 'Buffer',
  properties: [
    { name: 'accessType', hasValue: true, hasBinding: true },
    { name: 'data', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'usage', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAccessTypeChanged', paramCount: 1 },
    { handlerName: 'onBufferDataChanged', paramCount: 0 },
    { handlerName: 'onDataAvailable', paramCount: 0 },
    { handlerName: 'onDataChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onUsageChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function Buffer(): BufferBuilder {
  return createFluentBuilder('Buffer', BUFFER_META) as unknown as BufferBuilder;
}

export namespace Buffer {
  export namespace AccessType {
    export const Write = createEnumToken('Buffer', 'AccessType', 'Write');
    export const Read = createEnumToken('Buffer', 'AccessType', 'Read');
    export const ReadWrite = createEnumToken('Buffer', 'AccessType', 'ReadWrite');
  }
  export namespace UsageType {
    export const StreamDraw = createEnumToken('Buffer', 'UsageType', 'StreamDraw');
    export const StreamRead = createEnumToken('Buffer', 'UsageType', 'StreamRead');
    export const StreamCopy = createEnumToken('Buffer', 'UsageType', 'StreamCopy');
    export const StaticDraw = createEnumToken('Buffer', 'UsageType', 'StaticDraw');
    export const StaticRead = createEnumToken('Buffer', 'UsageType', 'StaticRead');
    export const StaticCopy = createEnumToken('Buffer', 'UsageType', 'StaticCopy');
    export const DynamicDraw = createEnumToken('Buffer', 'UsageType', 'DynamicDraw');
    export const DynamicRead = createEnumToken('Buffer', 'UsageType', 'DynamicRead');
    export const DynamicCopy = createEnumToken('Buffer', 'UsageType', 'DynamicCopy');
  }
}
