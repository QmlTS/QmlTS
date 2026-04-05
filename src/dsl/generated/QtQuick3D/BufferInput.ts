// AUTO-GENERATED — DO NOT EDIT
// Type: BufferInput
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { BufferBuilder } from './Buffer.js';
export interface BufferInputBuilder {
  id(id: string): BufferInputBuilder;
  child(obj: QmlObjectBuilder): BufferInputBuilder;

  buffer(value: BufferBuilder): BufferInputBuilder;
  bufferBind(expr: string): BufferInputBuilder;
  objectName(value: string): BufferInputBuilder;
  objectNameBind(expr: string): BufferInputBuilder;
  parent(value: QmlValue): BufferInputBuilder;
  parentBind(expr: string): BufferInputBuilder;
  sampler(value: string): BufferInputBuilder;
  samplerBind(expr: string): BufferInputBuilder;
  state(value: string): BufferInputBuilder;
  stateBind(expr: string): BufferInputBuilder;
  onChildrenChanged(body: string): BufferInputBuilder;
  onObjectNameChanged(body: string): BufferInputBuilder;
  onParentChanged(body: string): BufferInputBuilder;
  onStateChanged(body: string): BufferInputBuilder;
}

const BUFFERINPUT_META: TypeMetadata = {
  typeName: 'BufferInput',
  properties: [
    { name: 'buffer', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sampler', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function BufferInput(): BufferInputBuilder {
  return createFluentBuilder('BufferInput', BUFFERINPUT_META) as unknown as BufferInputBuilder;
}
