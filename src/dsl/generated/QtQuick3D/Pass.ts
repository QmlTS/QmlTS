// AUTO-GENERATED — DO NOT EDIT
// Type: Pass
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { BufferBuilder } from './Buffer.js';
export interface PassBuilder {
  id(id: string): PassBuilder;
  child(obj: QmlObjectBuilder): PassBuilder;

  objectName(value: string): PassBuilder;
  objectNameBind(expr: string): PassBuilder;
  output(value: BufferBuilder): PassBuilder;
  outputBind(expr: string): PassBuilder;
  parent(value: QmlValue): PassBuilder;
  parentBind(expr: string): PassBuilder;
  state(value: string): PassBuilder;
  stateBind(expr: string): PassBuilder;
  onChanged(body: string): PassBuilder;
  onChildrenChanged(body: string): PassBuilder;
  onObjectNameChanged(body: string): PassBuilder;
  onParentChanged(body: string): PassBuilder;
  onStateChanged(body: string): PassBuilder;
}

const PASS_META: TypeMetadata = {
  typeName: 'Pass',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'output', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function Pass(): PassBuilder {
  return createFluentBuilder('Pass', PASS_META) as unknown as PassBuilder;
}
